import SmartHomeConnector from "../src/index";
import OpenHabAdapter from "../src/adapters/OpenHab/OpenHabAdapter";

/**
 * local openHAB installations require Allow CORS in runtime configuration
 * edit file conf/services/runtime.cfg
 * add new line:
 * org.eclipse.smarthome.cors:enable=true
 */

describe("OpenHabAdapter", () => {
  let connector;
  let adapter;

  beforeEach(() => {
    adapter = new OpenHabAdapter("http://localhost:8080/rest", true);
    connector = new SmartHomeConnector(adapter);
    connector.adapter = adapter;
  });

  it("shc.adapter should be defined'", () => {
    expect(connector.adapter).toBeDefined();
  });

  it("getItems Should return promised items'", () => {
    expect.assertions(2);
    return connector.adapter.client.getItems().then(items => {
      expect(items.length).toBe(2);
      expect(connector.adapter.items).toBeDefined();
    });
  });
});
