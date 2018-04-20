export interface Item {
  id: number;
  name: string;
  category: string;
  className: string;
  actions?: string[];
  attributes?: Attribute[];
}

export interface Attribute {
  name: string;
  value: string;
  unit?: string;
  type?: string;
  valueList?: string[];
  readOnly?: boolean;
  canInit?: boolean;
}
