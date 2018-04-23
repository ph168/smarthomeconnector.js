/* eslint-disable no-console */
const {
  SmartHomeConnector,
  OpenHabAdapter
} = require("../dist/SmartHomeConnector");

const adapter = new OpenHabAdapter("http://localhost:8080/rest", true);

const connector = new SmartHomeConnector({
  adapter
});

adapter.loadData().then(async () => {
  // Find a component by name
  const lamp = await connector.getComponent("Schreibtischlampe");
  console.log(lamp);

  // Find a service of the component and update its state
  const brightness = lamp.services.find(s => s.description === "Brightness");
  brightness.updateState(brightness.state === "0" ? "100" : "0");
});
