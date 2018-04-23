/**
 * @file File that contains the definitions for the three main elements of Adapters
 * ShcComponent: A single piece of hardware or software that is managed by the home automation system \n
 * ShcService: A single property of a Component (eg. volume) \n
 * ShcState: State of a Service (eg. ON/Off, 20db,...)
 */

/**
 * A single piece of hardware or software that is managed by the home automation system
 */
export class ShcComponent {
  /**
   * @class Create a Component
   * @param {string} id
   * @param {string} name
   * @param {string} category
   * @param {string} description
   */
  constructor(id, name, category, description) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.description = description;
  }
}

/**
 * A single property of a Component (eg. volume)
 */
export class ShcService {
  /**
   * @class Create a Service
   * @param {string} id
   * @param {string} type
   * @param {shcState} state
   * @param {string} [description]
   */
  constructor(id, type, state, description) {
    this.id = id;
    this.type = type;
    this.state = state;
    this.description = description;
  }

  /**
   * Update the service's state.
   * This can be overridden by the adapter to perform the actual update.
   * @abstract
   * @param state
   * @return {Promise.<T>} resolves if the update was successful
   */
  updateState(state) {
    this.state = state;
    return Promise.resolve();
  }
}

/**
 * State of a Service (eg. ON/Off, 20db,...)
 */
export class ShcState {
  /**
   * @class Create a State
   * @param {string} type
   * @param {*} value
   * @param {string} [unit]
   */
  constructor(type, value, unit) {
    this.type = type;
    this.value = value;
    this.unit = unit;
  }
}
