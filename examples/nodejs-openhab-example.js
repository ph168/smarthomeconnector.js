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
  const lamp = await connector.getComponent("Schreibtischlampe");
  console.log(lamp);

  // TODO modify state
});
