import OpenHabAdapter from "../src/adapters/OpenHab/OpenHabAdapter";
import {
  mockItems,
  mockBindings,
  mockThings,
  mockThingTypes
} from "./OpenHabMockService";

describe("OpenHabAdapter", () => {
  let adapter;

  beforeEach(() => {
    adapter = new OpenHabAdapter("http://openhab-server:8081", false);
    adapter.items = mockItems;
    adapter.things = mockThings;
    adapter.thingTypes = mockThingTypes;
    adapter.bindings = mockBindings;
  });

  it("Mock service should deliver four arrays", () => {
    expect.assertions(4);
    expect(mockItems).toBeDefined();
    expect(mockThings).toBeDefined();
    expect(mockThingTypes).toBeDefined();
    expect(mockBindings).toBeDefined();
  });

  it("Adapter should have received mock data", () => {
    expect(adapter.items).toBeDefined();
    expect(adapter.things).toBeDefined();
    expect(adapter.bindings).toBeDefined();
    expect(adapter.thingTypes).toBeDefined();
  });

  it("We should have 2 items in adapter", () => {
    expect(adapter.items.length).toBe(2);
  });

  it("Should convert OpenHab things into smart components'", () => {
    expect.assertions(1);
    return adapter.getComponents().then(c => expect(c.length).toBe(2));
  });

  it("Should transform lenovo thing into smart component", () => {
    expect.assertions(5);
    return adapter.getComponents().then(c => {
      const pc = c.find(x => x.name === "Lenovo");
      expect(pc).toBeDefined();
      expect(pc.services).toBeDefined();
      expect(pc.services.length).toBe(0);
      expect(pc.attributes).toBeDefined();
      expect(pc.category).toBe("Pingable Netzwerkgerät");
    });
  });

  it("Should transform hue lightbulb thing into smart component", () => {
    expect.assertions(6);
    return adapter.getComponents().then(c => {
      const bulb = c.find(x => x.id === "hue:0100:b7e698ab");
      expect(bulb).toBeDefined();
      expect(bulb.services).toBeDefined();
      expect(bulb.services.length).toBe(1);
      expect(bulb.attributes).toBeDefined();
      expect(bulb.attributes.lightId).toBe("2346646545646546");
      expect(bulb.category).toBe("Dimmbare Lampe (weiß)");
    });
  });

  it("Should return promised categories'", () => {
    expect.assertions(2);
    return adapter.getCategories().then(categories => {
      expect(categories.length).toBe(9);
      expect(
        categories.find(cat => cat === "Dimmbare Lampe (weiß)")
      ).toBeDefined();
    });
  });
});
