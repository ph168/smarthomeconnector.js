export class ShcComponent {
  /*
  id: string;
  name: string;
  category: string;
  description: string;
  services: shcService[];
  attributes: any;
  */
  constructor(id, name, category, description) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.description = description;
  }
}

export class ShcService {
  /*
  id: string;
  type: string;
  state: shcState;
  description?: string;  
  */
  constructor(id, type, state, description) {
    this.id = id;
    this.type = type;
    this.state = state;
    this.description = description;
  }
}

export class ShcState {
  /* 
  type: string;
  value: any;
  unit?: string;
  */
  constructor(type, value, unit) {
    this.type = type;
    this.value = value;
    this.unit = unit;
  }
}
