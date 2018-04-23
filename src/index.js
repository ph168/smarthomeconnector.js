import OpenHabAdapter from "./adapters/OpenHab/OpenHabAdapter";
import OpenNetHomeAdapter from "./adapters/OpenNetHome/OpenNetHomeAdapter";

export { OpenHabAdapter, OpenNetHomeAdapter };

export class SmartHomeConnector {
  constructor({ adapter }) {
    this.adapter = adapter;
    // TODO options for connecting the adapter
  }

  async getComponents() {
    try {
      return await this.adapter.getComponents();
    } catch (e) {
      // TODO custom error
      console.log(e);
      throw new Error("Cannot get components from adapter");
    }
  }

  async getComponent(id) {
    try {
      const available = await this.adapter.hasComponent(id);
      if (!available) {
        return Promise.reject(new Error("Component is not available"));
      }
      return await this.adapter.getComponent(id);
    } catch (e) {
      console.log(e);
      throw new Error("Cannot get component from adapter");
    }
  }

  async getServices() {
    try {
      return await this.adapter.getServices();
    } catch (e) {
      throw new Error("Cannot get services from adapter");
    }
  }
}
