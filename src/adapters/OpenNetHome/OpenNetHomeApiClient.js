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

export default class OpenNetHomeApiClient {
  constructor(host) {
    this.host = host.concat("/rest");
  }

  async getItems() {
    return get(this.host.concat("/items"));
  }

  async getItem(id) {
    return get(this.host.concat("/items/").concat(id));
  }

  async updateItem(id, item) {
    return put(this.host.concat("/items/").concat(id), JSON.stringify(item));
  }

  async createItem(item) {
    return post(this.host.concat("/items"), JSON.stringify(item));
  }

  async deleteItem(id) {
    return apiDelete(this.host.concat("/items/").concat(id));
  }

  async invokeAction(id, action) {
    return post(
      this.host
        .concat("/items/")
        .concat(id)
        .concat("/actions/")
        .concat(action)
        .concat("/invoke")
    );
  }

  async getItemLog(id) {
    return get(
      this.host
        .concat("/items/")
        .concat(id)
        .concat("/log)")
    );
  }
}
