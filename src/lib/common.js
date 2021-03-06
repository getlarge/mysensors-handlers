/**
 * Oma Object References.
 * @external OmaObjects
 * @see {@link https://aloes.io/app/api/omaObjects}
 */

/**
 * Oma Resources References.
 * @external OmaResources
 * @see {@link https://aloes.io/app/api/omaResources}
 */

/**
 * MySensors Serial API
 * @external MySensorsAPI
 * @see {@link https://www.mysensors.org/download/serial_api_20}
 */

/**
 * References used to validate [MySensors]{@link /mysensors/#mysensorsapi} payloads
 * @namespace
 * @property {string}  pattern - The pattern used by [MySensors]{@link /mysensors/#mysensorsapi} MQTT devices.
 * @property {object}  validators - Check inputs / build outputs
 * @property {array}   validators.nodeId
 * @property {array}   validators.methods - [0, 1, 2, 3, 4].
 */
const protocolRef = {
  pattern: '+prefixedDevEui/+nodeId/+sensorId/+method/+ack/+type',
  validators: {
    userId: 'string',
    nodeId: 'number',
    sensorId: 'number',
    type: 'number',
    methods: [0, 1, 2, 3, 4],
    directions: ['-in', '-out'],
  },
};

/**
 * Labels used in Mysensors message to identify commands.
 *
 * @namespace
 * @property {string}  Type - [MySensors]{@link /mysensors/#mysensorsapi} Type
 * @property {number}  value - MySensors Type value ( used by transport )
 * @property {string}  description - MySensors Type description
 */
const labelsCommand = [
  {
    Type: 'presentation',
    value: 0,
    description:
      'Sent by a node when they present attached sensors. This is usually done in the presentation() function which runs at startup.',
  },
  {
    Type: 'set',
    value: 1,
    description:
      'This message is sent from or to a sensor when a sensor value should be updated.',
  },
  {
    Type: 'req',
    value: 2,
    description:
      'Requests a variable value (usually from an actuator destined for controller).',
  },
  {
    Type: 'internal',
    value: 3,
    description:
      'This is a special internal message. See table below for the details.',
  },
  {
    Type: 'stream',
    value: 4,
    description: 'Used for OTA firmware updates',
  },
];

/**
 * Labels used in Mysensors message to identify sensor type in presentation commands.
 *
 * @namespace
 * @property {string}  Type - [MySensors]{@link /mysensors/#mysensorsapi} Type
 * @property {number}  value - MySensors Type value ( used by transport )
 * @property {number}  omaObject - [OMA Object]{@link /mysensors/#omaobjects} ID
 * @property {string}  description - MySensors Type description
 * @property {string[]}  resources - MySensors variable subtype used by this type
 */
const labelsPresentation = [
  {
    Type: 'S_DOOR',
    value: 0,
    omaObject: 3302,
    description: 'Door and window sensors',
    ressources: ['V_TRIPPED', 'V_ARMED'],
  },
  {
    Type: 'S_MOTION',
    value: 1,
    omaObject: 3302,
    description: 'Motion sensors',
    ressources: ['V_TRIPPED', 'V_ARMED'],
  },
  {
    Type: 'S_SMOKE',
    value: 2,
    omaObject: 3302,
    description: 'Smoke sensor',
    ressources: ['V_TRIPPED', 'V_ARMED'],
  },
  {
    Type: 'S_BINARY',
    value: 3,
    omaObject: 3306,
    description: 'Binary device (on/off)',
    ressources: ['V_STATUS', 'V_WATT'],
  },
  {
    Type: 'S_DIMMER',
    value: 4,
    omaObject: 3312,
    description: 'Dimmable device of some kind',
    ressources: ['V_STATUS', 'V_PERCENTAGE', 'V_WATT'],
  },
  {
    Type: 'S_COVER',
    value: 5,
    omaObject: 3344,
    description: 'Window covers or shades',
    ressources: ['V_UP', 'V_DOWN', 'V_STOP', 'V_PERCENTAGE'],
  },
  {
    Type: 'S_TEMP',
    value: 6,
    omaObject: 3303,
    description: 'Temperature sensor',
    ressources: ['V_TEMP', 'V_ID'],
  },
  {
    Type: 'S_HUM',
    value: 7,
    omaObject: 3304,
    description: 'Humidity sensor',
    ressources: ['V_HUM'],
  },
  {
    Type: 'S_BARO',
    value: 8,
    omaObject: 3315,
    description: 'Barometer sensor (Pressure)',
    ressources: ['V_PRESSURE', 'V_FORECAST'],
  },
  {
    Type: 'S_WIND',
    value: 9,
    omaObject: 3332,
    description: 'Wind sensor',
    ressources: ['V_WIND', 'V_GUST', 'V_DIRECTION'],
  },
  {
    Type: 'S_RAIN',
    value: 10,
    omaObject: 3346,
    description: 'Rain sensor',
    ressources: ['V_RAIN', 'V_RAINRATE'],
  },
  {
    Type: 'S_UV',
    value: 11,
    omaObject: 3301,
    description: 'UV sensor',
    ressources: ['V_UV'],
  },
  {
    Type: 'S_WEIGHT',
    value: 12,
    omaObject: 3322,
    description: 'Weight sensor for scales etc.',
    ressources: ['V_WEIGHT', 'V_IMPEDANCE'],
  },
  {
    Type: 'S_POWER',
    value: 13,
    omaObject: 3328,
    description: 'Power measuring device, like power meters',
    ressources: ['V_WATT', 'V_KWH', 'V_VAR', 'V_VA', 'V_POWER_FACTOR'],
  },
  {
    Type: 'S_HEATER',
    value: 14,
    omaObject: 3308,
    description: 'Heater device',
    ressources: [
      'V_HVAC_SETPOINT_HEAT',
      'V_HVAC_FLOW_STATE',
      'V_TEMP',
      'V_STATUS',
    ],
  },
  {
    Type: 'S_DISTANCE',
    value: 15,
    omaObject: 3330,
    description: 'Distance sensor',
    ressources: ['V_DISTANCE', 'V_UNIT_PREFIX'],
  },
  {
    Type: 'S_LIGHT_LEVEL',
    value: 16,
    omaObject: 3301,
    description: 'Light sensor',
    ressources: [
      'V_LIGHT_LEVEL (uncalibrated percentage)',
      'V_LEVEL (light level in lux)',
    ],
  },
  {
    Type: 'S_ARDUINO_NODE',
    value: 17,
    omaObject: null,
    description: 'Arduino node device',
    ressources: [],
  },
  {
    Type: 'S_ARDUINO_REPEATER_NODE',
    value: 18,
    omaObject: null,
    description: 'Arduino repeating node device',
    ressources: [],
  },
  {
    Type: 'S_LOCK',
    value: 19,
    omaObject: 3342,
    description: 'Lock device',
    ressources: ['V_LOCK_STATUS'],
  },
  {
    Type: 'S_IR',
    value: 20,
    omaObject: 3349,
    description: 'Ir sender/receiver device',
    ressources: ['V_IR_SEND', 'V_IR_RECEIVE', 'V_IR_RECORD'],
  },
  {
    Type: 'S_WATER',
    value: 21,
    omaObject: 3319,
    description: 'Water meter',
    ressources: ['V_FLOW', 'V_VOLUME'],
  },
  {
    Type: 'S_AIR_QUALITY',
    value: 22,
    omaObject: 3346,
    description: 'Air quality sensor e.g. MQ-2',
    ressources: ['V_LEVEL', 'V_UNIT_PREFIX'],
  },
  {
    Type: 'S_CUSTOM',
    value: 23,
    omaObject: 3300,
    description: 'Use this for custom sensors where no other fits.',
    ressources: [],
  },
  {
    Type: 'S_DUST',
    value: 24,
    omaObject: 3346,
    description: 'Dust level sensor',
    ressources: ['V_LEVEL', 'V_UNIT_PREFIX'],
  },
  {
    Type: 'S_SCENE_CONTROLLER',
    value: 25,
    omaObject: 3344,
    description: 'Scene controller device',
    ressources: ['V_SCENE_ON', 'V_SCENE_OFF'],
  },
  {
    Type: 'S_RGB_LIGHT',
    value: 26,
    omaObject: 3335,
    description: 'RGB light',
    ressources: ['V_RGB', 'V_WATT'],
  },
  {
    Type: 'S_RGBW_LIGHT',
    value: 27,
    omaObject: 3335,
    description: 'RGBW light (with separate white component)',
    ressources: ['V_RGBW', 'V_WATT'],
  },
  {
    Type: 'S_COLOR_SENSOR',
    value: 28,
    omaObject: 3335,
    description: 'Color sensor',
    ressources: ['V_RGB'],
  },
  {
    Type: 'S_HVAC',
    value: 29,
    omaObject: 3308,
    description: 'Thermostat/HVAC device',
    ressources: [
      'V_STATUS',
      'V_TEMP',
      'V_HVAC_SETPOINT_HEAT',
      'V_HVAC_SETPOINT_COOL',
      'V_HVAC_FLOW_STATE',
      'V_HVAC_FLOW_MODE',
      'V_HVAC_SPEED',
    ],
  },
  {
    Type: 'S_MULTIMETER',
    value: 30,
    omaObject: 3316,
    description: 'Multimeter device',
    ressources: ['V_VOLTAGE', 'V_CURRENT', 'V_IMPEDANCE'],
  },
  {
    Type: 'S_SPRINKLER',
    value: 31,
    omaObject: 3302,
    description: 'Sprinkler device',
    ressources: ['V_STATUS', 'V_TRIPPED'],
  },
  {
    Type: 'S_WATER_LEAK',
    value: 32,
    omaObject: 3302,
    description: 'Water leak sensor',
    ressources: ['V_TRIPPED', 'V_ARMED'],
  },
  {
    Type: 'S_SOUND',
    value: 33,
    omaObject: 3324,
    description: 'Sound sensor',
    ressources: ['V_LEVEL', 'V_TRIPPED', 'V_ARMED'],
  },
  {
    Type: 'S_VIBRATION',
    value: 34,
    omaObject: 3318,
    description: 'Vibration sensor',
    ressources: ['V_LEVEL', 'V_TRIPPED', 'V_ARMED'],
  },
  {
    Type: 'S_MOISTURE',
    value: 35,
    omaObject: 3302,
    description: 'Moisture sensor',
    ressources: ['V_LEVEL', 'V_TRIPPED', 'V_ARMED'],
  },
  {
    Type: 'S_INFO',
    value: 36,
    omaObject: 3341,
    description: 'LCD text device',
    ressources: ['V_TEXT'],
  },
  {
    Type: 'S_GAS',
    value: 37,
    omaObject: 3346,
    description: 'Gas meter',
    ressources: ['V_FLOW', 'V_VOLUME'],
  },
  {
    Type: 'S_GPS',
    value: 38,
    omaObject: 3336,
    description: 'GPS Sensor',
    ressources: ['V_POSITION'],
  },
  {
    Type: 'S_WATER_QUALITY',
    value: 39,
    omaObject: 3346,
    description: 'Water quality sensor',
    ressources: ['V_TEMP', 'V_PH', 'V_ORP', 'V_EC', 'V_STATUS'],
  },
];

/**
 * Labels used in Mysensors message to identify sensor type in Set/req commands.
 *
 * @namespace
 * @property {string}  Type - MySensors subtype
 * @property {number}  value - MySensors Subype value ( used by transport )
 * @property {object}  omaResources - [OMA Resources]{@link /mysensors/#omaresources} attached to `labelsPresentation[0].omaObject`
 * @property {string}  Unit - Sensor value unit
 * @property {string}  description - MySensors Subtype description
 * @property {string[]}  sensorTypes - MySensors Type(s) using this variable
 */
const labelsSet = [
  {
    Type: 'V_TEMP',
    value: 0,
    omaResources: {'5700': 0, '5701': '°C'},
    Unit: '°C',
    description: 'Temperature',
    sensorTypes: ['S_TEMP', 'S_HEATER', 'S_HVAC', 'S_WATER_QUALITY'],
  },
  {
    Type: 'V_HUM',
    value: 1,
    omaResources: {'5700': 0, '5701': '%'},
    Unit: '%',
    description: 'Humidity',
    sensorTypes: ['S_HUM'],
  },
  {
    Type: 'V_STATUS',
    value: 2,
    omaResources: {'5850': 0, '5701': '%'},
    Unit: null,
    description: 'Binary status. 0=off 1=on',
    sensorTypes: [
      'S_BINARY',
      'S_DIMMER',
      'S_SPRINKLER',
      'S_HVAC',
      'S_HEATER',
      'S_WATER_QUALITY',
    ],
  },
  {
    Type: 'V_PERCENTAGE',
    value: 3,
    omaResources: {'5851': 0, '5701': '%'},
    Unit: '%',
    description: 'Percentage value. 0-100 (%)',
    sensorTypes: ['S_DIMMER', 'S_COVER'],
  },
  {
    Type: 'V_PRESSURE',
    value: 4,
    omaResources: {'5700': 0, '5701': 'Pa'},
    Unit: 'Pa',
    description: 'Atmospheric Pressure',
    sensorTypes: ['S_BARO'],
  },
  {
    Type: 'V_FORECAST',
    value: 5,
    omaResources: {'5700': 0, '5701': '%'},
    Unit: null,
    description:
      'Wheather forecast. One of "stable", "sunny", "cloudy", "unstable", "thunderstorm" or "unknown',
    sensorTypes: ['S_BARO'],
  },
  {
    Type: 'V_RAIN',
    value: 6,
    omaResources: {'5700': 0, '5701': 'mm'},
    Unit: 'mm',
    description: 'Amount of rain',
    sensorTypes: ['S_RAIN'],
  },
  {
    Type: 'V_RAINRATE',
    value: 7,
    omaResources: {'5700': 0, '5701': 'mm/d'},
    Unit: 'mm/d',
    description: 'Rate of rain',
    sensorTypes: ['S_RAIN'],
  },
  {
    Type: 'V_WIND',
    value: 8,
    omaResources: {'5517': 0},
    Unit: null,
    description: 'Windspeed',
    sensorTypes: ['S_WIND'],
  },
  {
    Type: 'V_GUST',
    value: 9,
    omaResources: {'5705': 0},
    Unit: null,
    description: 'Gust',
    sensorTypes: ['S_WIND'],
  },
  {
    Type: 'V_DIRECTION',
    value: 10,
    omaResources: {'5705': 0},
    Unit: null,
    description: 'Wind direction 0-360 (degrees)',
    sensorTypes: ['S_WIND'],
  },
  {
    Type: 'V_UV',
    value: 11,
    omaResources: {'5700': 0, '5701': '%'},
    Unit: null,
    description: 'UV light level',
    sensorTypes: ['S_UV'],
  },
  {
    Type: 'V_WEIGHT',
    value: 12,
    omaResources: {'5700': 0, '5701': 'kg'},
    Unit: 'kg',
    description: 'Weight (for scales etc)',
    sensorTypes: ['S_WEIGHT'],
  },
  {
    Type: 'V_DISTANCE',
    value: 13,
    omaResources: {'5700': 0, '5701': 'm'},
    Unit: 'm',
    description: 'Distance',
    sensorTypes: ['S_DISTANCE'],
  },
  {
    Type: 'V_IMPEDANCE',
    value: 14,
    omaResources: {'5700': 0, '5701': '%'},
    Unit: null,
    description: 'Impedance value',
    sensorTypes: ['S_MULTIMETER', 'S_WEIGHT'],
  },
  {
    Type: 'V_ARMED',
    value: 15,
    omaResources: {'5500': 0},
    Unit: null,
    description: 'Armed status of a security sensor. 1=Armed, 0=Bypassed',
    sensorTypes: [
      'S_DOOR',
      'S_MOTION',
      'S_SMOKE',
      'S_SPRINKLER',
      'S_WATER_LEAK',
      'S_SOUND',
      'S_VIBRATION',
      'S_MOISTURE',
    ],
  },
  {
    Type: 'V_TRIPPED',
    value: 16,
    omaResources: {'5500': 0},
    Unit: null,
    description: 'Tripped status of a security sensor. 1=Tripped, 0=Untripped',
    sensorTypes: [
      'S_DOOR',
      'S_MOTION',
      'S_SMOKE',
      'S_SPRINKLER',
      'S_WATER_LEAK',
      'S_SOUND',
      'S_VIBRATION',
      'S_MOISTURE',
    ],
  },
  {
    Type: 'V_WATT',
    value: 17,
    omaResources: {'5700': 0, '5701': 'W'},
    Unit: 'W',
    description: 'Watt value for power meters',
    sensorTypes: [
      'S_POWER',
      'S_BINARY',
      'S_DIMMER',
      'S_RGB_LIGHT',
      'S_RGBW_LIGHT',
    ],
  },
  {
    Type: 'V_KWH',
    value: 18,
    omaResources: {'5700': 0, '5701': 'kWh'},
    Unit: 'kWh',
    description: 'Accumulated number of KWH for a power meter',
    sensorTypes: ['S_POWER'],
  },
  {
    Type: 'V_SCENE_ON',
    value: 19,
    omaResources: {'5532': 'up'},
    Unit: null,
    description: 'Turn on a scene',
    sensorTypes: ['S_SCENE_CONTROLLER'],
  },
  {
    Type: 'V_SCENE_OFF',
    value: 20,
    omaResources: {'5533': 'down'},
    Unit: null,
    description: 'Turn of a scene',
    sensorTypes: ['S_SCENE_CONTROLLER'],
  },
  {
    Type: 'V_HVAC_FLOW_STATE',
    value: 21,
    omaResources: {'5900': 'Off'},
    Unit: null,
    description:
      'Mode of header - One of "Off", "HeatOn", "CoolOn", or "AutoChangeOver',
    sensorTypes: ['S_HVAC', 'S_HEATER'],
  },
  {
    Type: 'V_HVAC_SPEED',
    value: 22,
    omaResources: {'5900': 'Min'},
    Unit: null,
    description: 'HVAC/Heater fan speed ("Min", "Normal", "Max", "Auto")',
    sensorTypes: ['S_HVAC', 'S_HEATER'],
  },
  {
    Type: 'V_LIGHT_LEVEL',
    value: 23,
    omaResources: {'5700': 0, '5701': '%'},
    Unit: null,
    description:
      'Uncalibrated light level 0-100% ( Use V_LEVEL for light level in lux.)',
    sensorTypes: ['S_LIGHT_LEVEL'],
  },
  {
    Type: 'V_VAR1',
    value: 24,
    omaResources: {'5700': 0, '5701': '%'},
    Unit: null,
    description: 'Custom value',
    sensorTypes: ['*'],
  },
  {
    Type: 'V_VAR2',
    value: 25,
    omaResources: {'5700': 0, '5701': '%'},
    Unit: null,
    description: 'Custom value',
    sensorTypes: ['*'],
  },
  {
    Type: 'V_VAR3',
    value: 26,
    omaResources: {'5700': 0, '5701': '%'},
    Unit: null,
    description: 'Custom value',
    sensorTypes: ['*'],
  },
  {
    Type: 'V_VAR4',
    value: 27,
    omaResources: {'5700': 0, '5701': '%'},
    Unit: null,
    description: 'Custom value',
    sensorTypes: ['*'],
  },
  {
    Type: 'V_VAR5',
    value: 28,
    omaResources: {'5700': 0, '5701': '%'},
    Unit: null,
    description: 'Custom value',
    sensorTypes: ['*'],
  },
  {
    Type: 'V_UP',
    value: 29,
    omaResources: {'5532': 'up'},
    Unit: null,
    description: 'Window covering. Up.',
    sensorTypes: ['S_COVER'],
  },
  {
    Type: 'V_DOWN',
    value: 30,
    omaResources: {'5533': 'down'},
    Unit: null,
    description: 'Window covering. Down.',
    sensorTypes: ['S_COVER'],
  },
  {
    Type: 'V_STOP',
    value: 31,
    omaResources: {'5823': 'stop'},
    Unit: null,
    description: 'Window covering. Stop.',
    sensorTypes: ['S_COVER'],
  },
  {
    Type: 'V_IR_SEND',
    value: 32,
    omaResources: {'5910': 0},
    Unit: null,
    description: 'Send out an IR-command',
    sensorTypes: ['S_IR'],
  },
  {
    Type: 'V_IR_RECEIVE',
    value: 33,
    omaResources: {'5910': 0},
    Unit: null,
    description: 'This message contains a received IR-command',
    sensorTypes: ['S_IR'],
  },
  {
    Type: 'V_FLOW',
    value: 34,
    omaResources: {'5700': 0, '5701': 'm'},
    Unit: 'm',
    description: 'Flow of water (in meter)',
    sensorTypes: ['S_WATER'],
  },
  {
    Type: 'V_VOLUME',
    value: 35,
    omaResources: {'5700': 0, '5701': '%'},
    Unit: null,
    description: 'Water volume',
    sensorTypes: ['S_WATER'],
  },
  {
    Type: 'V_LOCK_STATUS',
    value: 36,
    omaResources: {'5500': 0},
    Unit: null,
    description: 'Set or get lock status. 1=Locked, 0=Unlocked',
    sensorTypes: ['S_LOCK'],
  },
  {
    Type: 'V_LEVEL',
    value: 37,
    omaResources: {'5700': 0, '5701': '%'},
    Unit: null,
    description: 'Used for sending level-value',
    sensorTypes: [
      'S_DUST',
      'S_AIR_QUALITY',
      'S_SOUND',
      'S_VIBRATION',
      'S_LIGHT_LEVEL',
    ],
  },
  {
    Type: 'V_VOLTAGE',
    value: 38,
    omaResources: {'5700': 0, '5701': 'V'},
    Unit: 'V',
    description: 'Voltage level',
    sensorTypes: ['S_MULTIMETER'],
  },
  {
    Type: 'V_CURRENT',
    value: 39,
    omaResources: {'5700': 0, '5701': 'mA'},
    Unit: null,
    description: 'Current level',
    sensorTypes: ['S_MULTIMETER'],
  },
  {
    Type: 'V_RGB',
    value: 40,
    omaResources: {'5706': '"ff0000"'},
    Unit: null,
    description:
      'RGB value transmitted as ASCII hex string (I.e "ff0000" for red)',
    sensorTypes: ['S_RGB_LIGHT', 'S_COLOR_SENSOR'],
  },
  {
    Type: 'V_RGBW',
    value: 41,
    omaResources: {'5706': '"ff0000"'},
    Unit: null,
    description:
      'RGBW value transmitted as ASCII hex string (I.e "ff0000ff" for red + full white)',
    sensorTypes: ['S_RGBW_LIGHT'],
  },
  {
    Type: 'V_ID',
    value: 42,
    omaResources: {'5700': 0},
    Unit: null,
    description: 'Optional unique sensor id (e.g. OneWire DS1820b ids)',
    sensorTypes: ['S_TEMP'],
  },
  {
    Type: 'V_UNIT_PREFIX',
    value: 43,
    omaResources: {'5701': ''},
    Unit: null,
    description:
      'Allows sensors to send in a string representing the unit prefix to be displayed in GUI. This is not parsed by controller! E.g. cm, m, km, inch.',
    sensorTypes: ['S_DISTANCE', 'S_DUST', 'S_AIR_QUALITY'],
  },
  {
    Type: 'V_HVAC_SETPOINT_COOL',
    value: 44,
    omaResources: {'5900': 'Off'},
    Unit: null,
    description: 'HVAC cold setpoint',
    sensorTypes: ['S_HVAC'],
  },
  {
    Type: 'V_HVAC_SETPOINT_HEAT',
    value: 45,
    omaResources: {'5900': 'Off'},
    Unit: null,
    description: 'HVAC/Heater setpoint',
    sensorTypes: ['S_HVAC', 'S_HEATER'],
  },
  {
    Type: 'V_HVAC_FLOW_MODE',
    value: 46,
    omaResources: {'5900': 'Auto'},
    Unit: null,
    description: 'Flow mode for HVAC ("Auto", "ContinuousOn", "PeriodicOn")',
    sensorTypes: ['S_HVAC'],
  },
  {
    Type: 'V_TEXT',
    value: 47,
    omaResources: {'5527': 'Auto'},
    Unit: null,
    description: 'Text message to display on LCD or controller device',
    sensorTypes: ['S_INFO'],
  },
  {
    Type: 'V_CUSTOM',
    value: 48,
    omaResources: {'5700': 0, '5701': ''},
    Unit: null,
    description:
      'Custom messages used for controller/inter node specific commands, preferably using S_CUSTOM device type.',
    sensorTypes: ['S_CUSTOM'],
  },
  {
    Type: 'V_POSITION',
    value: 49,
    omaResources: {
      '5514': '55.722526',
      '5515': '13.017972;18',
      '5700': 0,
    },
    Unit: null,
    description:
      'GPS position and altitude. Payload: latitude;longitude;altitude(m). E.g. "55.722526;13.017972;18',
    sensorTypes: ['S_GPS'],
  },
  {
    Type: 'V_IR_RECORD',
    value: 50,
    omaResources: {'5910': 0},
    Unit: null,
    description: 'Record IR codes S_IR for playback',
    sensorTypes: ['S_IR'],
  },
  {
    Type: 'V_PH',
    value: 51,
    omaResources: {'5700': 0, '5701': '%'},
    Unit: null,
    description: 'Water PH',
    sensorTypes: ['S_WATER_QUALITY'],
  },
  {
    Type: 'V_ORP',
    value: 52,
    omaResources: {'5700': 0, '5701': 'mV'},
    Unit: 'mV',
    description: 'Water ORP : redox potential in mV',
    sensorTypes: ['S_WATER_QUALITY'],
  },
  {
    Type: 'V_EC',
    value: 53,
    omaResources: {'5700': 0, '5701': 'ms/cm'},
    Unit: 'ms/cm',
    description: 'Water electric conductivity mS/cm (microSiemens/cm)',
    sensorTypes: ['S_WATER_QUALITY'],
  },
  {
    Type: 'V_VAR',
    value: 54,
    omaResources: {'5700': 0, '5701': 'VAR'},
    Unit: null,
    description: 'Reactive power: volt-ampere reactive (var)',
    sensorTypes: ['S_POWER'],
  },
  {
    Type: 'V_VA',
    value: 55,
    omaResources: {'5700': 0, '5701': 'VA'},
    Unit: 'VA',
    description: 'Apparent power: volt-ampere (VA)',
    sensorTypes: ['S_POWER'],
  },
  {
    Type: 'V_POWER_FACTOR',
    value: 56,
    omaResources: {'5700': 0},
    Unit: null,
    description:
      'Ratio of real power to apparent power: floating point value in the range [-1,..,1]',
    sensorTypes: ['S_POWER'],
  },
];

/**
 * Labels used in Mysensors message to identify sensor type in Internal commands.
 *
 * @namespace
 * @property {string}  Type - MySensors subtype
 * @property {number}  value - MySensors Subype value ( used by transport )
 * @property {string}  description - MySensors Subtype description
 */
const labelsInternal = [
  {
    Type: 'I_BATTERY_LEVEL',
    value: 0,
    description: 'Use this to report the battery level (in percent 0-100).',
  },
  {
    Type: 'I_TIME',
    value: 1,
    description:
      'Sensors can request the current time from the Controller using this message. The time will be reported as the seconds since 1970',
  },
  {
    Type: 'I_VERSION',
    value: 2,
    description: 'Used to request gateway version from controller.',
  },
  {
    Type: 'I_ID_REQUEST',
    value: 3,
    description: 'Use this to request a unique node id from the controller.',
  },
  {
    Type: 'I_ID_RESPONSE',
    value: 4,
    description: 'Id response back to node. Payload contains node id.',
  },
  {
    Type: 'I_INCLUSION_MODE',
    value: 5,
    description:
      'Start/stop inclusion mode of the Controller (1=start, 0=stop).',
  },
  {
    Type: 'I_CONFIG',
    value: 6,
    description:
      'Config request from node. Reply with (M)etric or (I)mperal back to sensor.',
  },
  {
    Type: 'I_FIND_PARENT',
    value: 7,
    description:
      'When a sensor starts up, it broadcast a search request to all neighbor nodes. They reply with a I_FIND_PARENT_RESPONSE.',
  },
  {
    Type: 'I_FIND_PARENT_RESPONSE',
    value: 8,
    description: 'Reply message type to I_FIND_PARENT request.',
  },
  {
    Type: 'I_LOG_MESSAGE',
    value: 9,
    description: 'Sent by the gateway to the Controller to trace-log a message',
  },
  {
    Type: 'I_CHILDREN',
    value: 10,
    description:
      'A message that can be used to transfer child sensors (from EEPROM routing table) of a repeating node.',
  },
  {
    Type: 'I_SKETCH_NAME',
    value: 11,
    description:
      'Optional sketch name that can be used to identify sensor in the Controller GUI',
  },
  {
    Type: 'I_SKETCH_VERSION',
    value: 12,
    description:
      'Optional sketch version that can be reported to keep track of the version of sensor in the Controller GUI.',
  },
  {
    Type: 'I_REBOOT',
    value: 13,
    description: 'Used by OTA firmware updates. Request for node to reboot.',
  },
  {
    Type: 'I_GATEWAY_READY',
    value: 14,
    description: 'Send by gateway to controller when startup is complete.',
  },
  {
    Type: 'I_SIGNING_PRESENTATION',
    value: 15,
    description:
      'Provides signing related preferences (first byte is preference version).',
  },
  {
    Type: 'I_NONCE_REQUEST',
    value: 16,
    description: 'Used between sensors when requesting nonce.',
  },
  {
    Type: 'I_NONCE_RESPONSE',
    value: 17,
    description: 'Used between sensors for nonce response.',
  },
  {
    Type: 'I_HEARTBEAT_REQUEST',
    value: 18,
    description: 'Heartbeat request',
  },
  {
    Type: 'I_PRESENTATION',
    value: 19,
    description: 'Presentation message',
  },
  {
    Type: 'I_DISCOVER_REQUEST',
    value: 20,
    description: 'Discover request',
  },
  {
    Type: 'I_DISCOVER_RESPONSE',
    value: 21,
    description: 'Discover response',
  },
  {
    Type: 'I_HEARTBEAT_RESPONSE',
    value: 22,
    description: 'Heartbeat response',
  },
  {
    Type: 'I_LOCKED',
    value: 23,
    description: 'Node is locked (reason in string-payload)',
  },
  {
    Type: 'I_PING',
    value: 24,
    description: 'Ping sent to node, payload incremental hop counter',
  },
  {
    Type: 'I_PONG',
    value: 25,
    description:
      'In return to ping, sent back to sender, payload incremental hop counter',
  },
  {
    Type: 'I_REGISTRATION_REQUEST',
    value: 26,
    description: 'Register request to GW',
  },
  {
    Type: 'I_REGISTRATION_RESPONSE',
    value: 27,
    description: 'Register response from GW',
  },
  {
    Type: 'I_DEBUG',
    value: 28,
    description: 'Debug message',
  },
];

module.exports = {
  labelsCommand,
  labelsPresentation,
  labelsSet,
  labelsInternal,
  protocolRef,
};
