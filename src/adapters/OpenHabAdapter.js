import BaseAdapter from "../BaseAdapter";

function extractComponent(dataProvider) {
  // TODO implement
  return dataProvider.component;
}

function extractService(dataProvider) {
  // TODO implement
  return dataProvider.service;
}

export default class OpenHabAdapter extends BaseAdapter {
  // TODO replace backend
  constructor(dataProvider) {
    super();
    this.dataProvider = dataProvider;
  }

  getComponents() {
    return Promise.resolve([extractComponent(this.dataProvider)]);
  }

  // eslint-disable-next-line class-methods-use-this
  hasComponent() {
    return Promise.resolve(true);
  }

  getComponent() {
    return Promise.resolve(extractComponent(this.dataProvider));
  }

  getServices() {
    return Promise.resolve([extractService(this.dataProvider)]);
  }
}
