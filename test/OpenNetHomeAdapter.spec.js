import moxios from "moxios";
import OpenNetHomeAdapter from "../src/adapters/OpenNetHome/OpenNetHomeAdapter";
import { itemDetails as mockItems } from "./OpenNetHomeMockService";

describe("OpenNetHomeAdapter", () => {
  describe("Transformation", () => {
    let adapter;

    beforeEach(() => {
      adapter = new OpenNetHomeAdapter(
        "http://opennethome-host.nowhere/",
        false
      );
      adapter.items = mockItems;
    });

    it("should transform OpenNetHome items into smart components", () => {
      expect.assertions(1);
      return adapter
        .getComponents()
        .then(c => expect(c.length).toBe(mockItems.length));
    });

    it("should transform Bedroom Blind into a smart component", () => {
      const kitchenLamp = mockItems.find(item => item.name === "Bedroom Blind");
      return adapter.getComponent(kitchenLamp.id).then(component => {
        expect(component).toBeDefined();
        expect(component.services).toBeDefined();
        expect(component.services.length).toBe(kitchenLamp.actions.length);
        expect(component.attributes).toBeDefined();
        expect(component.category).toBe("Actuators");
      });
    });
  });

  describe("Integration", () => {
    // eslint-disable-next-line no-unused-vars
    let adapter;

    beforeEach(() => {
      moxios.install();

      adapter = new OpenNetHomeAdapter(
        "http://opennethome-host.nowhere/",
        false
      );
    });

    it("should return a component from an API call", () => {
      const mockItem = mockItems[0];

      moxios.wait(() => {
        let request = moxios.requests.mostRecent(); // request for all items
        request.respondWith({
          status: 200,
          response: [mockItem] // respond with just one item
        });

        moxios.wait(() => {
          request = moxios.requests.mostRecent(); // request for specific item
          request.respondWith({
            status: 200,
            response: mockItem
          });
        });
      });

      expect.assertions(4);
      return adapter.getComponent(mockItem.id).then(component => {
        expect(component).toBeTruthy();
        expect(component.id).toBe(mockItem.id);
        expect(component.services).toBeDefined();
        expect(component.services.length).toBe(mockItem.actions.length);
      });
    });
  });
});
