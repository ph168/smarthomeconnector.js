# SmartHomeConnector.js

[![CircleCI](https://circleci.com/gh/ph168/smarthomeconnector.js.svg?style=shield)](https://circleci.com/gh/ph168/smarthomeconnector.js)
[![CodeFactor](https://www.codefactor.io/repository/github/ph168/smarthomeconnector.js/badge)](https://www.codefactor.io/repository/github/ph168/smarthomeconnector.js)
[![Dependencies](https://david-dm.org/ph168/smarthomeconnector.js/status.svg)](https://david-dm.org/ph168/smarthomeconnector.js)
[![Dev Dependencies](https://david-dm.org/ph168/smarthomeconnector.js/dev-status.svg)](https://david-dm.org/ph168/smarthomeconnector.js?type=dev)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
![License](https://img.shields.io/github/license/ph168/smarthomeconnector.js.svg)

## About

SmartHomeConnector.js is a JavaScript library for connecting web applications to home automation systems. It abolishes the need to learn the speficifcs of each supported system by providing a uniform API on top.
The library currently supports the following features;
* Retrieving and adding components
* Retrieving component services
* Changing component service state
* Retrieving image data from camera components (openHAB only)

Currently supporting;
* [openHAB](https://www.openhab.org/)
* [OpenNetHome](http://opennethome.org/)

## Installation

If you want to use SmartHomeConnector fo through the following steps (npm needed);
* Download/Clone this repo
* Install build-dependencies
```bash
npm install
```
* Build JavaScript-File
```bash
npm run build
```
* Use smarthomeconnector.js (found in dist-directory)
```html
<script type="text/javascript" src="smarthomeconnector.js"></script>
```

## Usage
* ...

For a more details see our [documentation](https://github.com/ph168/smarthomeconnector.js/tree/master/docs/JSDoc).

## Questions, suggestions & feature requests

[File an issue](https://github.com/ph168/smarthomeconnector.js/issues)!

## License

MIT License—see the LICENSE file for details
