/**
 * @file File that contains all OpenHab REST API Types
 */
export interface ThingType {
  UID: string;
  label: string;
  description: string;
  listed: boolean;
  supportedBridgeTypeUIDs: string[];
  bridge: boolean;
}

export class Thing {
  statusInfo?: StatusInfo;
  editable?: boolean;
  label?: string;
  bridgeUID?: string;
  configuration?: any;
  properties?: any;
  UID?: string;
  thingTypeUID?: string;
  channels?: Channel[];
  location?: string;
}

export class StatusInfo {
  status: string;
  statusDetail: string;
}

export interface Channel {
  uid: string;
  id: string;
  channelTypeUID: string;
  itemType: string;
  kind: string;
  label: string;
  description: string;
  defaultTags: string[];
  properties: any;
  configuration: any;
  linkedItems: string[];
}

export interface Option {
  label: string;
  value: string;
}

export interface FilterCriteria {
  value: string;
  name: string;
}

export interface Parameter {
  context: string;
  defaultValue: string;
  description: string;
  label: string;
  name: string;
  required: boolean;
  type: string;
  min: number;
  max: number;
  stepsize: number;
  pattern: string;
  readOnly: boolean;
  multiple: boolean;
  multipleLimit: number;
  groupName: string;
  advanced: boolean;
  verify: boolean;
  limitToOptions: boolean;
  unit: string;
  unitLabel: string;
  options: Option[];
  filterCriteria: FilterCriteria[];
}

export interface ParameterGroup {
  name: string;
  context: string;
  advanced: boolean;
  label: string;
  description: string;
}

export interface StateDescription {
  minimum: number;
  maximum: number;
  step: number;
  pattern: string;
  readOnly: boolean;
  options: Option[];
}

export class Item {
  type: string;
  name: string;
  label: string;
  category: string;
  tags: string[];
  groupNames: string[];
  link: string;
  state: string;
  transformedState?: string;
  stateDescription?: StateDescription;
}

export interface Link {
  itemName: string;
  channelUID: string;
  configuration: any;
}

export interface Binding {
  author: string;
  description: string;
  id: string;
  name: string;
  configDescriptionURI?: string;
}

export interface ChannelType {
  parameters: Parameter[];
  parameterGroups: ParameterGroup[];
  description: string;
  label: string;
  category: string;
  itemType: string;
  kind: string;
  stateDescription: StateDescription;
  tags: string[];
  UID: string;
  advanced: boolean;
}
