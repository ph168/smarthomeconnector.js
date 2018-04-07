/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
export default class BaseAdapter {
  /* generic methods */
  transform(thing) {}
  hasComponent() {}
  /* #FR1 (GET / ADD Component(s)) */
  getComponent(name) {}
  getComponents() {}
  /* #FR2 (GET / provided Component Services (=functions)) */
  getServices() {}
  getComponentServices(component) {}
  /* #FR3 (GET / UPDATE service status (e.g. Switch ON/OFF)) */
  getStatus(service) {}
  updateStatus(service) {}
  /* #FR4 (GET IP camera life images) */
  getCameraImage(camera) {}
}
