/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
import BaseAdapter from "../../BaseAdapter";
import OpenHabApiClient from "./OpenHabApiClient";
import { ShcComponent, ShcService, ShcState } from "../../ShcTypes";

export default class OpenHabAdapter extends BaseAdapter {
  /* for declaration only */
  // dataProvider: any;
  // things: Thing[];
  // thingTypes: ThingType[];
  // items: Item[];
  // bindings: Binding[];

  constructor(host, autoload) {
    super();
    this.client = new OpenHabApiClient(host);
    if (autoload === true) this.loadData();
  }

  async loadData() {
    this.items = await this.client.getItems();
    this.things = await this.client.getThings();
    this.thingTypes = await this.client.getThingTypes();
    this.bindings = await this.client.getBindings();
  }

  async getComponents() {
    const components = [];
    // things = physical devices / webservices / sensors
    this.things.forEach(thing => {
      components.push(this.transform(thing));
    });
    return Promise.all(components);
  }

  getComponentServices(channels) {
    const services = [];
    channels.forEach(channel => {
      // each channel describes a service and is linked to item(s) (= switch, function, has state)
      channel.linkedItems.forEach(itemName => {
        // for each item that is linked to that channel by its name
        const item = this.items.find(i => i.name === itemName);
        const service = new ShcService(
          item.name,
          item.type,
          item.state,
          item.label
        );
        services.push(service);
      });
    });
    return services;
  }

  // eslint-disable-next-line class-methods-use-this
  async hasComponent() {
    return Promise.resolve(this.things.length > 0);
  }

  transform(thing) {
    // OpenHab.ThingType describes each OpenHab.Thing -> category & description
    const thingType = this.thingTypes.find(
      type => type.UID === thing.thingTypeUID
    );

    // build root shcComponent
    const c = new ShcComponent(
      thing.UID,
      thing.label,
      thingType.label,
      thingType.description
    );

    // fetch services for component
    c.services = this.getComponentServices(thing.channels);

    // fetch configuration attributes TODO add more attributes?
    c.attributes = this.getComponentAttributes(thing);

    return Promise.resolve(c);
  }

  getComponentAttributes(thing) {
    return thing.configuration;
  }

  async getCameraImage(name) {
    const thing = await this.getComponent(name);
    return new Promise((resolve, reject) => {
      if (!thing) reject(new Error("No thing could be found"));
      if (thing.category === "Camera") {
        try {
          const urlSnapshot = thing.attributes.find(
            a => a.key === "urlSnapShot"
          ).value;
          const urlUsername = thing.attributes.find(
            a => a.key === "urlUsername"
          ).value;
          const urlPassword = thing.attributes.find(
            a => a.key === "urlPassword"
          ).value;

          const headers = new Headers();
          const cred = btoa(urlUsername.concat(":").concat(urlPassword));
          headers.append("Authorization", "Basic ".cocnat(cred));
          fetch(urlSnapshot, headers)
            .then(response => resolve(response.json()))
            .catch(error => reject(error));
        } catch (error) {
          reject(error);
        }
      }
      reject(new Error("No Camera thing found here!"));
    });
  }

  async getComponent(name) {
    // TODO fetch thing by name via http if not yet in fetched list
    const thing = this.things.find(t => t.label === name);
    if (!thing) return Promise.reject(new Error("could not find component"));
    return Promise.resolve(this.transform(thing));
  }

  async getServices() {
    const components = await this.getComponents();
    const services = [];
    components.forEach(component => {
      services.concat(component.services);
    });
    return Promise.all(services);
  }

  async getCategories() {
    return Promise.all(
      this.thingTypes
        .map(type => type.label)
        .filter((value, index, self) => self.indexOf(value) === index)
    );
  }
}
