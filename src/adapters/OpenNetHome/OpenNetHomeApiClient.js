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
    this.host = host.concat("/rest");
  }

  async getItems() {
    return this.get(this.host.concat("/items"));
  }

  async getItem(id) {
    return this.get(this.host.concat("/items/").concat(id));
  }

  async updateItem(id, item) {
    return this.put(
      this.host.concat("/items/").concat(id),
      JSON.stringify(item)
    );
  }

  async createItem(item) {
    return this.put(this.host.concat("/items/"), JSON.stringify(item));
  }

  async deleteItem(id) {
    return this.apiDelete(this.host.concat("/items/").concat(id));
  }

  async invokeAction(id, action) {
    return this.post(
      this.host
        .concat("/items/")
        .concat(id)
        .concat("/actions/")
        .concat(action)
        .concat("invoke")
    );
  }

  async getItemLog(id) {
    return this.get(
      this.host
        .concat("/items/")
        .concat(id)
        .concat("/log)")
    );
  }
}
