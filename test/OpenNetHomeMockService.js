export const items = [
  {
    name: "Bed Room",
    id: "33",
    category: "Infrastructure"
  },
  {
    name: "Bedroom Blind",
    id: "59",
    category: "Actuators"
  },
  {
    name: "Bedroom Lamp",
    id: "56",
    category: "Lamps"
  },
  {
    name: "CreatedPlan",
    id: "54",
    category: "Infrastructure"
  },
  {
    name: "DefaultLocation",
    id: "48",
    category: "Infrastructure"
  },
  {
    name: "Event Broker",
    id: "5",
    category: "Ports"
  },
  {
    name: "Freezer Temperature",
    id: "36",
    category: "Thermometers"
  },
  {
    name: "Fridge Temperature",
    id: "37",
    category: "Thermometers"
  },
  {
    name: "GUI",
    id: "49",
    category: "Infrastructure"
  },
  {
    name: "HomeOutwards",
    id: "55",
    category: "Infrastructure"
  },
  {
    name: "Kitchen",
    id: "38",
    category: "Infrastructure"
  },
  {
    name: "Kitchen Lamp",
    id: "44",
    category: "Lamps"
  },
  {
    name: "Living Room",
    id: "31",
    category: "Infrastructure"
  },
  {
    name: "MDNS_Scanner",
    id: "60",
    category: "Ports"
  },
  {
    name: "Outside Moisture",
    id: "32",
    category: "Gauges"
  },
  {
    name: "Outside Temp",
    id: "43",
    category: "Thermometers"
  },
  {
    name: "TempWeb",
    id: "46",
    category: "GUI"
  },
  {
    name: "Tray Bar Icon",
    id: "50",
    category: "GUI"
  },
  {
    name: "UPnP_Scanner",
    id: "57",
    category: "Ports"
  },
  {
    name: "USB_Scanner",
    id: "61",
    category: "Ports"
  },
  {
    name: "WEB-GUI",
    id: "42",
    category: "GUI"
  },
  {
    name: "Wind Speed",
    id: "39",
    category: "Gauges"
  },
  {
    name: "Window Lamp",
    id: "34",
    category: "Lamps"
  },
  {
    name: "Window Timer",
    id: "35",
    category: "Timers"
  },
  {
    name: "JettyWEB",
    id: "22",
    category: "GUI"
  }
];

export const itemDetails = [
  {
    name: "Bedroom Blind",
    id: "59",
    className: "RollerTrolBlind",
    category: "Actuators",
    actions: [
      "up",
      "stop",
      "down",
      "toggle",
      "Position1",
      "Position2",
      "setConfirm",
      "setLimit",
      "setReverse"
    ],
    attributes: [
      {
        name: "State",
        value: "Up",
        readOnly: true,
        default: true
      },
      {
        name: "RemoteId",
        value: "1234"
      },
      {
        name: "Channel",
        value: "1",
        type: "StringList",
        valueList: ["1", "2", "3", "4", "5", "6", "7", "8", "All"]
      },
      {
        name: "TravelTime",
        value: ""
      },
      {
        name: "Position1",
        value: ""
      },
      {
        name: "Position2",
        value: ""
      },
      {
        name: "TransmissionRepeats",
        value: "15"
      }
    ]
  },
  {
    name: "Bed Room",
    id: "33",
    className: "Room",
    category: "Infrastructure",
    actions: [],
    attributes: [
      {
        name: "Items",
        value: "56,39,43,59",
        type: "Items"
      },
      {
        name: "Position",
        value: "Left",
        type: "StringList",
        valueList: ["Left", "Right"]
      }
    ]
  },
  {
    name: "Bedroom Lamp",
    id: "56",
    className: "NexaLCLamp",
    category: "Lamps",
    actions: ["toggle", "on", "off"],
    attributes: [
      {
        name: "State",
        value: "Off",
        readOnly: true,
        default: true
      },
      {
        name: "Address",
        value: "938457"
      },
      {
        name: "Button",
        value: "1"
      },
      {
        name: "TransmissionRepeats",
        value: ""
      }
    ]
  },
  {
    name: "Outside Temp",
    id: "43",
    className: "UPMThermometer",
    category: "Thermometers",
    actions: [],
    attributes: [
      {
        name: "Temperature",
        value: "",
        unit: "°C",
        readOnly: true,
        default: true
      },
      {
        name: "BatteryLevel",
        value: "100",
        unit: "%",
        readOnly: true
      },
      {
        name: "TimeSinceUpdate",
        value: "5127",
        unit: "s",
        readOnly: true
      },
      {
        name: "HouseCode",
        value: "2"
      },
      {
        name: "DeviceCode",
        value: "4"
      },
      {
        name: "LogFile",
        value: ""
      },
      {
        name: "LastUpdate",
        value: "",
        readOnly: true
      },
      {
        name: "K",
        value: "0.0625"
      },
      {
        name: "M",
        value: "-50.0"
      }
    ]
  }
];
