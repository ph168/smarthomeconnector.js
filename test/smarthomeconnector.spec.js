import SmartHomeConnector from "../src/index";

describe("SmartHomeConnector", () => {
  it("should be available", () => {
    const shc = new SmartHomeConnector();
    expect(shc).toBeTruthy();
  });
});
