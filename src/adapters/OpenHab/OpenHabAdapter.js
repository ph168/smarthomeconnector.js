/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */

/**
 * @file File that contains the definition for OpenHabAdapter
 */
import BaseAdapter from "../../BaseAdapter";
import OpenHabApiClient from "./OpenHabApiClient";
import { ShcComponent, ShcService, ShcState } from "../../ShcTypes";

/**
 * @name OpenHabAdapter
 * @class Class representing the Adapter for OpenHab
 */
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

  /**
   * Loads OpenHab data (items, things, thingTypes, bindings)
   *
   * @memberof OpenHabAdapter
   * @instance
   */
  async loadData() {
    this.items = await this.client.getItems();
    this.things = await this.client.getThings();
    this.thingTypes = await this.client.getThingTypes();
    this.bindings = await this.client.getBindings();
  }

  /**
   * Returns all Components of the Adapter
   * @return {Promise<ShcComponent[]>}
   *
   * @memberof OpenHabAdapter
   * @instance
   */
  async getComponents() {
    const components = [];
    // things = physical devices / webservices / sensors
    this.things.forEach(thing => {
      components.push(this.transform(thing));
    });
    return Promise.all(components);
  }

  /**
   * Returns all Services of given Channels
   * @param {Channel[]} channel
   * @return {ShcService[]} All Services of the given Channels
   *
   * @memberof OpenHabAdapter
   * @instance
   */
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

        service.updateState = state => {
          this.state = state;
          return this.client.sendCommandToItem(item.name, state);
        };

        services.push(service);
      });
    });
    return services;
  }

  /**
   * Checks if the Adapter contains a Component with a given name or id
   * @param {string} name name of the Component
   * @return {Promise<boolean>} true if the Adapter contains Component
   *
   * @memberof OpenHabAdapter
   * @instance
   */
  // eslint-disable-next-line class-methods-use-this
  async hasComponent(name) {
    const thing = this.things.find(t => t.label === name);
    return Promise.resolve(thing !== undefined);
  }

  /**
   * Transforms a Thing into a Component
   * @param {Thing} thing Component in context of OpenHab
   * @return {Promise<ShcComponent>} Thing transformed into a Component
   *
   * @memberof OpenHabAdapter
   * @instance
   */
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

  /**
   * Returns Configuration of a Thing
   * @param {Thing} thing
   * @return {Configuration} Configuration of given Thing
   *
   * @memberof OpenHabAdapter
   * @instance
   */
  getComponentAttributes(thing) {
    return thing.configuration;
  }

  /**
   * Returns image of a given camera
   * @param {string} name Name of the camera
   * @return {Promise<*>} Image of the camera
   *
   * @memberof OpenHabAdapter
   * @instance
   */
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

  /**
   * Returns a Component of the Adapter with a given name or id
   * @param {string} name Name of a the Component
   * @return {Promise<ShcComponent>|Promise<boolean>} If a Component with the given name exists the Component, else false
   *
   * @memberof OpenHabAdapter
   * @instance
   */
  async getComponent(name) {
    // TODO fetch thing by name via http if not yet in fetched list
    const thing = this.things.find(t => t.label === name);
    if (!thing) return Promise.reject(new Error("could not find component"));
    return Promise.resolve(this.transform(thing));
  }

  /**
   * Returns all Services of the Adapter
   * @return {Promise<ShcService[]>} All Services of the Adapter
   *
   * @memberof OpenHabAdapter
   * @instance
   */
  async getServices() {
    const components = await this.getComponents();
    return Promise.resolve(components.map(component => component.services));
  }

  /**
   * Returns all possible thingTypes
   * @return {ThingType[]} All possible thingTypes
   *
   * @memberof OpenHabAdapter
   * @instance
   */
  async getCategories() {
    return Promise.all(
      this.thingTypes
        .map(type => type.label)
        .filter((value, index, self) => self.indexOf(value) === index)
    );
  }
}
