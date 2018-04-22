import moxios from "moxios";
import OpenNetHomeApiClient from "../src/adapters/OpenNetHome/OpenNetHomeApiClient";

describe("OpenNetHomeApiClient", () => {
  let client;

  beforeEach(() => {
    moxios.install();
    client = new OpenNetHomeApiClient("http://opennethome-host.nowhere/");
  });

  it("should load all items", done => {
    expect.assertions(2);
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      expect(request.config.method).toBe("get");
      expect(request.url).toMatch(/\/rest\/items\/?$/);
      done();
    });

    client.getItems();
  });

  it("should load a specific item", done => {
    const id = "foo";

    expect.assertions(2);
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      expect(request.config.method).toBe("get");
      expect(request.url).toContain(`/rest/items/${id}`);
      done();
    });

    client.getItem(id);
  });
});
