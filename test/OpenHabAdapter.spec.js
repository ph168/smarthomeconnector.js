import OpenHabAdapter from "../src/adapters/OpenHabAdapter";

describe("OpenHabAdapter", () => {
  let adapter;

  beforeEach(() => {
    adapter = new OpenHabAdapter({
      things: [],
      bindings: [],
      items: [],
      services: []
    });
  });

  it("should transform an OpenHAB entity into an abstract component", () => {
    expect.assertions(1);
    return adapter.getComponent().then(component => {
      expect(component).toBeFalsy(); // TODO expect something useful
    });
  });
});
