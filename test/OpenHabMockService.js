/* eslint-disable no-unused-vars */
export const mockThings = [
  {
    statusInfo: {
      status: "OFFLINE",
      statusDetail: "NONE"
    },
    editable: true,
    label: "Dimmbare Lampe (weiß)",
    configuration: {
      lightId: "2346646545646546"
    },
    properties: {},
    UID: "hue:0100:b7e698ab",
    thingTypeUID: "hue:0100",
    channels: [
      {
        linkedItems: ["Dimmer"],
        uid: "hue:0100:b7e698ab:brightness",
        id: "brightness",
        channelTypeUID: "hue:brightness",
        itemType: "Dimmer",
        kind: "STATE",
        label: "Helligkeit",
        description:
          "Ermöglicht die Steuerung der Helligkeit. Ermöglicht ebenfalls die Lampe ein- und auszuschalten.",
        defaultTags: ["Lighting"],
        properties: {},
        configuration: {}
      },
      {
        linkedItems: [],
        uid: "hue:0100:b7e698ab:alert",
        id: "alert",
        channelTypeUID: "hue:alert",
        itemType: "String",
        kind: "STATE",
        label: "Alarm",
        description: "Ermöglicht ein temporäres Blinken.",
        defaultTags: [],
        properties: {},
        configuration: {}
      }
    ],
    location: "Studio"
  },
  {
    statusInfo: {
      status: "ONLINE",
      statusDetail: "NONE"
    },
    editable: true,
    label: "Lenovo",
    configuration: {
      hostname: "192.168.8.107",
      refresh_interval: 60000,
      retry: 1,
      timeout: 5000
    },
    properties: {
      uses_dhcp_listen: "no",
      dhcp_state: "Running normally",
      presence_detection_type: "ICMP_PING",
      arp_state: "Disabled",
      uses_ios_wakeup: "On",
      icmp_state: "WINDOWS_PING",
      uses_arp_pings: "no"
    },
    UID: "network:pingdevice:192_168_8_107",
    thingTypeUID: "network:pingdevice",
    channels: [
      {
        linkedItems: [],
        uid: "network:pingdevice:192_168_8_107:online",
        id: "online",
        channelTypeUID: "network:online",
        itemType: "Switch",
        kind: "STATE",
        label: "Online",
        description: "Gibt an ob das Gerät aktuell online oder offline ist.",
        defaultTags: [],
        properties: {},
        configuration: {}
      },
      {
        linkedItems: [],
        uid: "network:pingdevice:192_168_8_107:latency",
        id: "latency",
        channelTypeUID: "network:latency",
        itemType: "Number",
        kind: "STATE",
        label: "Pingzeit",
        description:
          "Gibt an wie lange ein Ping in Millisekunden an das Gerät dauert.",
        defaultTags: [],
        properties: {},
        configuration: {}
      },
      {
        linkedItems: [],
        uid: "network:pingdevice:192_168_8_107:lastseen",
        id: "lastseen",
        channelTypeUID: "network:lastseen",
        itemType: "DateTime",
        kind: "STATE",
        label: "Zuletzt gesehen",
        description: "Gibt Zeit/Datum an wann das Gerät zuletzt gesehen wurde.",
        defaultTags: [],
        properties: {},
        configuration: {}
      }
    ]
  }
];

export const mockThingTypes = [
  {
    UID: "network:pingdevice",
    label: "Pingable Netzwerkgerät",
    description:
      "Die Verfügbarkeit des Geräts wird mit ICMP Ping, ARP Ping und DHCP Paketen festgestellt.",
    listed: true,
    supportedBridgeTypeUIDs: [],
    bridge: false
  },
  {
    UID: "network:servicedevice",
    label: "Netzwerkgerät mit Dienst",
    description:
      "Die Verfügbarkeit des Geräts wird durch einen Verbindungsversuch mit dem angegeben TCP Dienst festgestellt.",
    listed: true,
    supportedBridgeTypeUIDs: [],
    bridge: false
  },
  {
    UID: "hue:0200",
    label: "Farbige Lampe",
    description: "Dimmbare Lampe mit einstellbarer Farbe.",
    listed: true,
    supportedBridgeTypeUIDs: ["hue:bridge"],
    bridge: false
  },
  {
    UID: "hue:0220",
    label: "Farbtemperatur Lampe (weiß)",
    description: "Dimmbare Lampe mit einstellbarer Farbtemperatur.",
    listed: true,
    supportedBridgeTypeUIDs: ["hue:bridge"],
    bridge: false
  },
  {
    UID: "hue:0100",
    label: "Dimmbare Lampe (weiß)",
    description: "Dimmbare Lampe mit fester Farbtemperatur.",
    listed: true,
    supportedBridgeTypeUIDs: ["hue:bridge"],
    bridge: false
  },
  {
    UID: "hue:0110",
    label: "Dimmbare Steckdose",
    description: "Steckdose zum Dimmen von herkömmlichen Lampen.",
    listed: true,
    supportedBridgeTypeUIDs: ["hue:bridge"],
    bridge: false
  },
  {
    UID: "hue:0210",
    label: "Farbige Lampe",
    description: "Dimmbare Lampe mit einstellbarer Farbe und Farbtemperatur.",
    listed: true,
    supportedBridgeTypeUIDs: ["hue:bridge"],
    bridge: false
  },
  {
    UID: "hue:0000",
    label: "Lampe (weiß)",
    description: "Lampe zum Ein- und Ausschalten.",
    listed: true,
    supportedBridgeTypeUIDs: ["hue:bridge"],
    bridge: false
  },
  {
    UID: "hue:0010",
    label: "Schaltbare Steckdose",
    description:
      "Steckdose zum Ein- und Ausschalten von herkömmlichen Lampen oder anderen elektronischen Geräten.",
    listed: true,
    supportedBridgeTypeUIDs: ["hue:bridge"],
    bridge: false
  },
  {
    UID: "hue:bridge",
    label: "Hue Bridge",
    description: "Philips Hue Bridge.",
    listed: true,
    supportedBridgeTypeUIDs: [],
    bridge: true
  }
];

export const mockItems = [
  {
    link: "http://localhost:8080/rest/items/Dimmer",
    state: "NULL",
    type: "Switch",
    name: "Dimmer",
    label: "Dimmer Studiolampe",
    category: "Lightbulb",
    tags: [],
    groupNames: []
  },
  {
    link: "http://localhost:8080/rest/items/DenonPower",
    state: "NULL",
    type: "Switch",
    name: "DenonPower",
    label: "DenonPower",
    category: "Switches",
    tags: [],
    groupNames: []
  }
];

export const mockBindings = [
  {
    author: "Deutsche Telekom AG",
    description:
      "Dieses Binding integriert das Philips Hue System. Durch diese können die Hue Lampen und Leuchten gesteuert werden. ",
    id: "hue",
    name: "Hue Binding"
  },
  {
    author: "Marc Mettke, David Graeff",
    description:
      "Das Network Binding überprüft, ob sich ein Gerät aktuell im Netzwerk befindet oder nicht.",
    id: "network",
    name: "Network Binding",
    configDescriptionURI: "binding:network"
  }
];
