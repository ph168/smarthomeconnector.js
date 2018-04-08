/* eslint-disable no-unused-vars */
const axios = require("axios");

function get(url) {
  return axios.get(url).then(response => response.data);
}

function post(url, json) {
  return axios.post(url, json);
}

function put(url, json) {
  return axios.put(url, json);
}

function apiDelete(url) {
  return axios.delete(url);
}

export default class OpenHabApiClient {
  constructor(host) {
    this.host = host;
  }

  async getThings() {
    return get(this.host, "/things");
  }

  async createThing(thing) {
    return post(this.host.concat("/things/"), JSON.stringify(thing));
  }

  async getThingByUid(uid) {
    return get(this.host.concat("/things").concat(uid));
  }

  async updateThing(uid) {
    return put(this.host.concat("/things/").concat(uid));
  }

  async updateThingConfiguration(uid, config) {
    return put(
      this.host
        .concat("/things/")
        .concat(uid)
        .concat("/config/"),
      JSON.stringify(config)
    );
  }

  async getThingConfigurationStatus(uid) {
    return get(
      this.host
        .concat("/things/")
        .concat(uid)
        .concat("/config")
    );
  }

  async getThingStatus(uid) {
    return get(
      this.host
        .concat("/things/")
        .concat(uid)
        .concat("/status")
    );
  }

  async deleteThing(uid) {
    return apiDelete(this.host.concat("/things/").concat(uid));
  }

  async getThingTypes() {
    return get(this.host.concat("/thing-types"));
  }

  async getThingType(uid) {
    return get(this.host.concat("/thing-types/").concat(uid));
  }

  async getItems() {
    return get(this.host.concat("/items/"));
  }

  async getItem(name) {
    return axios.get(this.host.concat("/items/").concat(name));
  }

  async createOrUpdateItem(item) {
    return put(
      this.host.concat("/items/".concat(item.name)),
      JSON.stringify(item)
    );
  }

  async sendCommandToItem(name, command) {
    return put(
      this.host.concat("/items/").concat(name),
      JSON.stringify(command)
    );
  }

  async getItemState(name) {
    return get(
      this.host
        .concat("/items/")
        .concat(name)
        .concat("/state")
    );
  }

  async updateItemState(name, state) {
    return put(
      this.host
        .concat("/items/")
        .concat(name)
        .concat("/state"),
      JSON.stringify(state)
    );
  }

  async getBindings() {
    return get(this.host.concat("/bindindgs"));
  }

  async getBindingConfig(bindingID) {
    return this.get(
      this.host.concat("/bindings/".concat(bindingID).concat("/config"))
    );
  }

  async updateBindingConfig(bindingID, config) {
    return put(
      this.host
        .concat("/bindings/")
        .concat(bindingID)
        .concat("/config"),
      JSON.stringify(config)
    );
  }
}
