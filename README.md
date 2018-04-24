# SmartHomeConnector.js

[![npm](https://img.shields.io/npm/v/smarthomeconnector.svg)](https://www.npmjs.com/package/smarthomeconnector)
[![CircleCI](https://circleci.com/gh/ph168/smarthomeconnector.js.svg?style=shield)](https://circleci.com/gh/ph168/smarthomeconnector.js)
[![CodeFactor](https://www.codefactor.io/repository/github/ph168/smarthomeconnector.js/badge)](https://www.codefactor.io/repository/github/ph168/smarthomeconnector.js)
[![Dependencies](https://david-dm.org/ph168/smarthomeconnector.js/status.svg)](https://david-dm.org/ph168/smarthomeconnector.js)
[![Dev Dependencies](https://david-dm.org/ph168/smarthomeconnector.js/dev-status.svg)](https://david-dm.org/ph168/smarthomeconnector.js?type=dev)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
![License](https://img.shields.io/github/license/ph168/smarthomeconnector.js.svg)

## About

SmartHomeConnector.js is a JavaScript library for connecting web applications to home automation systems. It abolishes the need to learn the specifics of each supported system by providing a uniform API on top.
The library currently supports the following features:

* Retrieving and adding components
* Retrieving component services
* Changing component service state
* Retrieving image data from camera components (openHAB only)

Currently supporting:

* [openHAB](https://www.openhab.org/)
* [OpenNetHome](http://opennethome.org/)

### Demo

![Demo](https://media.giphy.com/media/3gL2xfbPucdiRr0JJk/giphy.gif)

## Installation

### Using npm

```
npm install smarthomeconnector
```

### Using CDN

```
<script src="https://unpkg.com/smarthomeconnector@1.0.0/dist/SmartHomeConnector.js"></script>
```

### Manually

If you want to install SmartHomeConnector manually go through the following steps (npm needed):

* Download/Clone this repo
* Install build-dependencies

```bash
npm install
```

* Build JavaScript-File

```bash
npm run build
```

* Use SmartHomeConnector.js (found in dist-directory)

```html
<script type="text/javascript" src="smarthomeconnector.js"></script>
```

## Usage

See [examples](https://github.com/ph168/smarthomeconnector.js/tree/master/examples).

For more details see our [documentation](http://mprah.at/smarthomeconnector/) (also found in docs/JSDoc).

## Questions, suggestions & feature requests

[File an issue](https://github.com/ph168/smarthomeconnector.js/issues)!

## License

MIT License—see the LICENSE file for details
