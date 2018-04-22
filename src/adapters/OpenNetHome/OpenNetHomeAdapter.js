/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
import BaseAdapter from "../../BaseAdapter";
import OpenNetHomeApiClient from "./OpenNetHomeApiClient";
import { ShcComponent, ShcService, ShcState } from "../../ShcTypes";

export default class OpenNetHomeAdapter extends BaseAdapter {
  /* for declaration only */
  // items: Thing[];
  // categories: string[];
  /**
  http://opennethome.org/interfaces/rest/ 
  */

  constructor(host, autoload) {
    super();
    this.client = new OpenNetHomeApiClient(host);
    if (autoload === true) this.loadData();
  }

  async loadData() {
    const arr = await this.client.getItems();
    this.items = [];
    return Promise.all(
      arr.map(async item => {
        this.items.push(await this.client.getItem(item.id));
      })
    );
  }

  hasComponent() {
    return Promise.resolve(this.items.length > 0 || this.getItems().length > 0);
  }
  /* #FR1 (GET / ADD Component(s)) */

  async getComponent(id) {
    if (!this.items) {
      await this.loadData();
    }
    let item = this.items.find(x => x.id === id);
    if (item === null) {
      item = await this.client.getItem(id);
    }
    return Promise.resolve(this.transform(item));
  }

  transform(item) {
    let i;
    if (
      item !== undefined &&
      (item.className === undefined || item.className === null)
    ) {
      i = this.client.getItem(item.id);
    } else {
      i = item;
    }
    const component = new ShcComponent(i.id, i.name, i.category, i.className);
    component.attributes = i.attributes;
    component.services = i.actions;
    return component;
  }

  async getComponents() {
    if (!this.items) {
      await this.loadData();
    }
    return Promise.resolve(this.items);
  }

  /* #FR2 (GET / provided Component Services (=functions)) */
  getServices() {
    const services = [];
    if (this.items.length > 0) {
      this.items.forEach(i => {
        i.attributes.forEach(a => {
          services.push(new ShcService(null, a.name, null, a));
        });
      });
    }
    return services;
  }
  getComponentServices(component) {
    return component.atributes;
  }
  /* #FR3 (GET / UPDATE service status (e.g. Switch ON/OFF)) */
  getStatus(item, service) {
    return item.attributes.find(x => x.name === service).value;
  }

  updateStatus(item, service) {
    this.client.invokeAction(item, service);
  }
  /* #FR4 (GET IP camera life images) */
  getCameraImage(camera) {
    return new Error(
      "Unsupported method, OpenNetHome does not support category Camera"
    );
  }
}
