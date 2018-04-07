/* eslint-disable no-unused-vars */
function get(url) {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

function post(url, json) {
  return fetch(url, { method: "post" }, json).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

function put(url, json) {
  return fetch(url, { method: "put" }, json).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

function apiDelete(url) {
  return fetch(url, { method: "delete" }).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
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
    return this.apiDelete(this.host.concat("/things/").concat(uid));
  }

  async getThingTypes() {
    return this.get(this.host.concat("/thing-types"));
  }

  async getThingType(uid) {
    return this.get(this.host.concat("/thing-types/").concat(uid));
  }

  async getItems() {
    return this.get(this.host.concat("/items/"));
  }

  async getItem(name) {
    return this.get(this.host.concat("/items/").concat(name));
  }

  async createOrUpdateItem(item) {
    return this.put(
      this.host.concat("/items/".concat(item.name)),
      JSON.stringify(item)
    );
  }

  async sendCommandToItem(name, command) {
    return this.put(
      this.host.concat("/items/").concat(name),
      JSON.stringify(command)
    );
  }

  async getItemState(name) {
    return this.get(
      this.host
        .concat("/items/")
        .concat(name)
        .concat("/state")
    );
  }

  async updateItemState(name, state) {
    return this.put(
      this.host
        .concat("/items/")
        .concat(name)
        .concat("/state"),
      JSON.stringify(state)
    );
  }

  async getBindings() {
    return this.get(this.host.concat("/bindindgs"));
  }

  async getBindingConfig(bindingID) {
    return this.get(
      this.host.concat("/bindings/".concat(bindingID).concat("/config"))
    );
  }

  async updateBindingConfig(bindingID, config) {
    return this.put(
      this.host
        .concat("/bindings/")
        .concat(bindingID)
        .concat("/config"),
      JSON.stringify(config)
    );
  }
}
