/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */

/**
 * @file File that contains the definition for BaseAdapter
 */
import { ShcService, ShcComponent, ShcState } from "./ShcTypes";

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
   * @return {Promise<ShcComponent>} thing transformed into a Component
   *
   * @memberof BaseAdapter
   * @instance
   */
  transform(thing) {}
  /**
   * Checks if the Adapter contains a Component with a given name or id
   * @param {*} name name or id of the Component
   * @return {Promise<boolean>} true if the Adapter contains Component
   *
   * @memberof BaseAdapter
   * @instance
   */
  hasComponent(name) {}

  /* #FR1 (GET / ADD Component(s)) */
  /**
   * Returns a Component of the Adapter with a given name or id
   * @param {string} name Name or id of a certain Component
   * @return {Promise<ShcComponent>|Promise<boolean>} If a Component with the given id exists the Component, else some form of rejection
   *
   * @memberof BaseAdapter
   * @instance
   */
  getComponent(name) {}
  /**
   * Returns all Components of the Adapter
   * @return {Promise<ShcComponent[]>} All Components of the Adapter
   *
   * @memberof BaseAdapter
   * @instance
   */
  getComponents() {}

  /* #FR2 (GET / provided Component Services (=functions)) */
  /**
   * Returns all Services of the Adapter
   * @return {Promise<ShcService[]>} All Services of the Adapter
   *
   * @memberof BaseAdapter
   * @instance
   */
  getServices() {}
  /**
   * Returns all Services of a given Component
   * @param {ShcComponent} component
   * @return {ShcService[]} All Services of the given component
   *
   * @memberof BaseAdapter
   * @instance
   */
  getComponentServices(component) {}

  /* #FR3 (GET / UPDATE service status (e.g. Switch ON/OFF)) */
  /**
   * Returns the status of a given Service
   * @param {ShcService} service
   * @returns {ShcState} Status of the given Service
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
