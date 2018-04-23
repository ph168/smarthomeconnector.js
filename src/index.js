/**
 * @file main-File that contains the definition for SmartHomeConnector
 */

import OpenHabAdapter from "./adapters/OpenHab/OpenHabAdapter";
import OpenNetHomeAdapter from "./adapters/OpenNetHome/OpenNetHomeAdapter";

export { OpenHabAdapter, OpenNetHomeAdapter };

/**
 * Class representing the SmartHomeConnector itself
 * It joins all parts needed to connect to and use the home automation system
 */
export class SmartHomeConnector {
  /**
   * Create the connector
   * @param {BaseAdapter} adapter The Adapter to be used for the connector eg. OpenHabAdapter for openHAB-systems
   */
  constructor({ adapter }) {
    this.adapter = adapter;
    // TODO options for connecting the adapter
  }

  /**
   * Returns all Components of the Adapter
   * @return {Promise} Promise that contains all Components of the Adapter
   */
  async getComponents() {
    try {
      return await this.adapter.getComponents();
    } catch (e) {
      // TODO custom error
      console.log(e);
      throw new Error("Cannot get components from adapter");
    }
  }

  /**
   * Returns a Component of the Adapter with a given id
   * @param {string} id Id of a certain Component
   * @return {Promise} If a Component with the given id exists the Component, else a rejected Promise
   */
  async getComponent(id) {
    try {
      const available = await this.adapter.hasComponent(id);
      if (!available) {
        return Promise.reject(new Error("Component is not available"));
      }
      return await this.adapter.getComponent(id);
    } catch (e) {
      console.log(e);
      throw new Error("Cannot get component from adapter");
    }
  }

  /**
   * Returns all Services of the Adapter
   * @return {Promise} Promise that contains all Services of the Adapter
   */
  async getServices() {
    try {
      return await this.adapter.getServices();
    } catch (e) {
      throw new Error("Cannot get services from adapter");
    }
  }
}
