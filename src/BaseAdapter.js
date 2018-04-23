/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */

/**
 * @file File that contains the definition for BaseAdapter
 */

import { ShcService, ShcComponent } from "./ShcTypes";

/**
 * @name BaseAdapter
 * @class Class representing the BaseAdapter itself
 * It is the base class for all Adapters and contains all functions used and/or needed by SmartHomeConnector
 */
export default class BaseAdapter {
  /* generic methods */
  /**
   * Transforms a home automation system specific component into a Component
   * @param thing Component in context of a certain home automation system
   * @return thing transformed into a Component
   *
   * @memberof BaseAdapter
   * @instance
   */
  transform(thing) {}
  /**
   * Checks if the Adapter contains Components
   * @return {boolean} true if the Adapter contains Components
   *
   * @memberof BaseAdapter
   * @instance
   */
  hasComponent() {}

  /* #FR1 (GET / ADD Component(s)) */
  /**
   * Returns a Component of the Adapter with a given name or id
   * @param name Name or id of a certain Component
   * @return If a Component with the given id exists the Component, else some form of rejection
   *
   * @memberof BaseAdapter
   * @instance
   */
  getComponent(name) {}
  /**
   * Returns all Components of the Adapter
   * @return All Components of the Adapter
   *
   * @memberof BaseAdapter
   * @instance
   */
  getComponents() {}

  /* #FR2 (GET / provided Component Services (=functions)) */
  /**
   * Returns all Services of the Adapter
   * @return All Services of the Adapter
   *
   * @memberof BaseAdapter
   * @instance
   */
  getServices() {}
  /**
   * Returns all Services of a given Component
   * @param {ShcComponent} component
   * @return All Services of the given component
   *
   * @memberof BaseAdapter
   * @instance
   */
  getComponentServices(component) {}

  /* #FR3 (GET / UPDATE service status (e.g. Switch ON/OFF)) */
  /**
   * Returns the status of a given Service
   * @param {ShcService} service
   *
   * @memberof BaseAdapter
   * @instance
   */
  getStatus(service) {}
  /**
   * Updates the status of a given Service
   * @param {ShcService} service
   *
   * @memberof BaseAdapter
   * @instance
   */
  updateStatus(service) {}

  /* #FR4 (GET IP camera life images) */
  /**
   * Returns the image of a given camera
   * @param camera
   * @return Image of the given camera
   *
   * @memberof BaseAdapter
   * @instance
   */
  getCameraImage(camera) {}
}
