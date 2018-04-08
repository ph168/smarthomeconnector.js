import moxios from "moxios";
import OpenHabApiClient from "../src/adapters/OpenHab/OpenHabApiClient";
import { mockThings, mockItems } from "./OpenHabMockService";

describe("OpenHabApiClient", () => {
  let client;

  beforeEach(() => {
    moxios.install();
    client = new OpenHabApiClient("http://mock-host.nowhere:8080");
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("should create a thing", done => {
    const thing = mockThings[0];

    expect.assertions(3);
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      expect(request.config.method).toBe("post");
      expect(request.url).toMatch(/\/things\/$/);
      expect(JSON.parse(request.config.data)).toEqual(thing);
      done();
    });

    client.createThing(thing);
  });

  it("should get a thing by uid", done => {
    const uid = "foo";

    expect.assertions(2);
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      expect(request.config.method).toBe("get");
      expect(request.url).toContain(`/things/${uid}`);
      done();
    });

    client.getThingByUid(uid);
  });

  it("should update a thing", done => {
    const uid = "foo";

    expect.assertions(2);
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      expect(request.config.method).toBe("put");
      expect(request.url).toContain(`/things/${uid}`);
      done();
    });

    client.updateThing(uid);
  });

  it("should update a thing's configuration", done => {
    const uid = "foo";
    const configuration = { foo: "bar" };

    expect.assertions(3);
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      expect(request.config.method).toBe("put");
      expect(request.url).toContain(`/things/${uid}/config`);
      expect(JSON.parse(request.config.data)).toEqual(configuration);
      done();
    });

    client.updateThingConfiguration(uid, configuration);
  });

  it("should get a thing's config status", done => {
    const uid = "foo";

    expect.assertions(2);
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      expect(request.config.method).toBe("get");
      expect(request.url).toContain(`/things/${uid}/config/status`);
      done();
    });

    client.getThingConfigurationStatus(uid);
  });

  it("should get a thing's status", done => {
    const uid = "foo";

    expect.assertions(2);
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      expect(request.config.method).toBe("get");
      expect(request.url).toContain(`/things/${uid}/status`);
      done();
    });

    client.getThingStatus(uid);
  });

  it("should delete a thing", done => {
    const uid = "foo";

    expect.assertions(2);
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      expect(request.config.method).toBe("delete");
      expect(request.url).toContain(`/things/${uid}`);
      done();
    });

    client.deleteThing(uid);
  });

  it("should get a thing type", done => {
    const uid = "foo";

    expect.assertions(2);
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      expect(request.config.method).toBe("get");
      expect(request.url).toContain(`/thing-types/${uid}`);
      done();
    });

    client.getThingType(uid);
  });

  it("should get a specific item", done => {
    const item = "foo";

    expect.assertions(2);
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      expect(request.config.method).toBe("get");
      expect(request.url).toContain(`/items/${item}`);
      done();
    });

    client.getItem(item);
  });

  it("should update an item", done => {
    const item = mockItems[0];

    expect.assertions(3);
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      expect(request.config.method).toBe("put");
      expect(request.url).toContain(`/items/${item.name}`);
      expect(JSON.parse(request.config.data)).toEqual(item);
      done();
    });

    client.createOrUpdateItem(item);
  });

  it("should send a command to an item", done => {
    const name = "foo";
    const command = "bar";

    expect.assertions(3);
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      expect(request.config.method).toBe("post");
      expect(request.url).toContain(`/items/${name}`);
      expect(request.config.data).toEqual(command);
      done();
    });

    client.sendCommandToItem(name, command);
  });

  it("should get an item's state", done => {
    const name = "foo";

    expect.assertions(2);
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      expect(request.config.method).toBe("get");
      expect(request.url).toContain(`/items/${name}/state`);
      done();
    });

    client.getItemState(name);
  });

  it("should update an item's state", done => {
    const name = "foo";
    const state = "bar";

    expect.assertions(3);
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      expect(request.config.method).toBe("put");
      expect(request.url).toContain(`/items/${name}/state`);
      expect(request.config.data).toEqual(state);
      done();
    });

    client.updateItemState(name, state);
  });

  it("should get a binding config", done => {
    const id = "foo";

    expect.assertions(2);
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      expect(request.config.method).toBe("get");
      expect(request.url).toContain(`/bindings/${id}/config`);
      done();
    });

    client.getBindingConfig(id);
  });

  it("should update a binding config", done => {
    const id = "foo";
    const config = { foo: "bar" };

    expect.assertions(3);
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      expect(request.config.method).toBe("put");
      expect(request.url).toContain(`/bindings/${id}/config`);
      expect(JSON.parse(request.config.data)).toEqual(config);
      done();
    });

    client.updateBindingConfig(id, config);
  });
});
