/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */

/**
 * @file File that contains the definition for OpenNetHomeAdapter
 */
import BaseAdapter from "../../BaseAdapter";
import OpenNetHomeApiClient from "./OpenNetHomeApiClient";
import { ShcComponent, ShcService, ShcState } from "../../ShcTypes";

/**
 * @name OpenNetHomeAdapter
 * @class Class representing the Adapter for OpenNetHome
 */
export default class OpenNetHomeAdapter extends BaseAdapter {
  /* for declaration only */
  // items: Thing[];
  // categories: string[];
  /*
  http://opennethome.org/interfaces/rest/ 
  */
  constructor(host, autoload) {
    super();
    this.client = new OpenNetHomeApiClient(host);
    if (autoload === true) this.loadData();
  }

  /**
   * Loads items for the Adapter
   *
   * @memberof OpenNetHomeAdapter
   * @instance
   */
  async loadData() {
    const arr = await this.client.getItems();
    this.items = [];
    return Promise.all(
      arr.map(async item => {
        this.items.push(await this.client.getItem(item.id));
      })
    );
  }

  /**
   * Checks if the Adapter contains a Component with a given id
   * @param {string} id id of the Component
   * @return {Promise<boolean>} true if the Adapter contains Component
   *
   * @memberof OpenNetHomeAdapter
   * @instance
   */
  hasComponent(id) {
    const item = this.items.find(x => x.id === id);
    return Promise.resolve(item !== undefined);
  }

  /**
   * Returns a Component of the Adapter with a given  id
   * @param {string} id Name of a the Component
   * @return {Promise<ShcComponent>|Promise<boolean>} If a Component with the given id exists the Component, else false
   *
   * @memberof OpenNetHomeAdapter
   * @instance
   */
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

  /**
   * Transforms an Item into a Component
   * @param {Item} item Component in context of OpenNetHome
   * @return {Promise<ShcComponent>} Item transformed into a Component
   *
   * @memberof OpenNetHomeAdapter
   * @instance
   */
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
    return Promise.resolve(component);
  }

  /**
   * Returns all Components of the Adapter
   * @return {Promise<ShcComponent[]>}
   *
   * @memberof OpenNetHomeAdapter
   * @instance
   */
  async getComponents() {
    if (!this.items) {
      await this.loadData();
    }
    const components = [];
    this.items.forEach(item => {
      components.push(this.transform(item));
    });
    return Promise.all(components);
  }

  /**
   * Returns all Services of the Adapter
   * @return {Promise<ShcService[]>} All Services of the Adapter
   *
   * @memberof OpenNetHomeAdapter
   * @instance
   */
  getServices() {
    const services = [];
    if (this.items.length > 0) {
      this.items.forEach(i => {
        i.attributes.forEach(a => {
          services.push(new ShcService(null, a.name, null, a));
        });
      });
    }
    return Promise.resolve(services);
  }

  /**
   * Returns all Services of a given Component
   * @param {ShcComponent} component
   * @return {ShcService[]} All Services of the given component
   *
   * @memberof OpenNetHomeAdapter
   * @instance
   */
  getComponentServices(component) {
    return component.attributes;
  }

  /**
   * Returns the status of a given Service
   * @param {Item} item
   * @param {ShcService} service
   * @returns {ShcState} Status of the given Service
   *
   * @memberof OpenNetHomeAdapter
   * @instance
   */
  getStatus(item, service) {
    return item.attributes.find(x => x.name === service).value;
  }

  /**
   * Updates the status of a given Service
   * @param {Item} item
   * @param {ShcService} service
   *
   * @memberof OpenNetHomeAdapter
   * @instance
   */
  updateStatus(item, service) {
    this.client.invokeAction(item, service);
  }

  /**
   * Returns the image of a given camera (not supported by OpenNetHome)
   * @param camera
   * @return {Error} Unsupported method
   *
   * @memberof OpenNetHomeAdapter
   * @instance
   */
  getCameraImage(camera) {
    return new Error(
      "Unsupported method, OpenNetHome does not support category Camera"
    );
  }
}
