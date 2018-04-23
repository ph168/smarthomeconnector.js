import { SmartHomeConnector } from "../src/index";
import BaseAdapter from "../src/BaseAdapter";

/* eslint-disable class-methods-use-this */
class TestAdapter extends BaseAdapter {
  getComponents() {
    return Promise.resolve([{ id: "foo" }, { id: "bar" }]);
  }

  hasComponent() {
    return Promise.resolve(true);
  }

  getComponent() {
    return Promise.resolve({ id: "foo" });
  }

  getServices() {
    return Promise.resolve([{ name: "foo" }, { name: "bar" }]);
  }
}

describe("SmartHomeConnector", () => {
  const adapter = new TestAdapter();
  let connector;

  beforeEach(() => {
    connector = new SmartHomeConnector({
      adapter
    });
  });

  it("should get components from its adapter", () => {
    expect.assertions(2);
    return connector.getComponents().then(components => {
      expect(components).toHaveLength(2);
      expect(components[0]).toHaveProperty("id", "foo");
    });
  });

  it("should check whether a component is available", () => {
    const hasComponent = jest.fn();
    hasComponent.mockReturnValue(Promise.resolve(true));
    connector = new SmartHomeConnector({
      adapter: {
        hasComponent,
        getComponent: () => {}
      }
    });

    connector.getComponent("foo");

    expect(hasComponent).toHaveBeenCalledTimes(1);
    expect(hasComponent).toHaveBeenCalledWith("foo");
  });

  it("should get a specific component", () => {
    const getComponent = jest.fn();
    connector = new SmartHomeConnector({
      adapter: {
        hasComponent: () => Promise.resolve(true),
        getComponent
      }
    });

    expect.assertions(2);
    connector.getComponent("foo").then(() => {
      expect(getComponent).toHaveBeenCalledTimes(1);
      expect(getComponent).toHaveBeenCalledWith("foo");
    });
  });
});
