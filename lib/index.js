/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./catalog/eClass.json":
/*!*****************************!*\
  !*** ./catalog/eClass.json ***!
  \*****************************/
/*! exports provided: 0173-1#01-AAJ336#002, 0173-1#01-AAP788#001, 0173-1#01-AAI711#001, 0173-1#01-AAO742#002, 0173-1#01-BAF577#004, 0173-1#01-BAF576#004, 0173-1#01-BAF575#004, 0173-1#01-BAF777#004, 0173-1#01-BAF888#004, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"0173-1#01-AAJ336#002\":{\"submodelElements\":[{\"idShort\":\"total weight (freight) [kg]\",\"modelType\":\"Property\",\"value\":\"\",\"valueType\":\"double\",\"semanticId\":\"0173-1#02-AAJ336#002\"},{\"idShort\":\"starting point [lat, lng]\",\"modelType\":\"Property\",\"value\":\"\",\"valueType\":\"string\",\"semanticId\":\"0173-1#02-BAF163#002\"},{\"idShort\":\"destination [lat, lng]\",\"modelType\":\"Property\",\"value\":\"\",\"valueType\":\"string\",\"semanticId\":\"0173-1#02-BAF163#002\"},{\"idShort\":\"price\",\"modelType\":\"Property\",\"value\":\"\",\"valueType\":\"integer\",\"semanticId\":\"0173-1#02-AAJ333#002\"}]},\"0173-1#01-AAP788#001\":{\"submodelElements\":[{\"idShort\":\"number of photos that can be stored\",\"modelType\":\"Property\",\"value\":\"\",\"valueType\":\"long\",\"semanticId\":\"0173-1#02-AAP788#001\"},{\"idShort\":\"reliability duration [min]\",\"modelType\":\"Property\",\"value\":\"\",\"valueType\":\"time\",\"semanticId\":\"0173-1#02-AAY979#001\"},{\"idShort\":\"target location [lat, lng]\",\"modelType\":\"Property\",\"value\":\"\",\"valueType\":\"string\",\"semanticId\":\"0173-1#02-BAF163#002\"},{\"idShort\":\"price\",\"modelType\":\"Property\",\"value\":\"\",\"valueType\":\"integer\",\"semanticId\":\"0173-1#02-AAD979#001\"}]},\"0173-1#01-AAI711#001\":{\"submodelElements\":[{\"idShort\":\"starting point [lat, lng]\",\"modelType\":\"Property\",\"value\":\"\",\"valueType\":\"string\",\"semanticId\":\"0173-1#02-BAF163#002\"},{\"idShort\":\"destination [lat, lng]\",\"modelType\":\"Property\",\"value\":\"\",\"valueType\":\"string\",\"semanticId\":\"0173-1#02-BAF163#002\"},{\"idShort\":\"autonomous\",\"modelType\":\"Property\",\"value\":\"\",\"valueType\":\"boolean\",\"semanticId\":\"0173-1#02-AAX711#001\"},{\"idShort\":\"max. number of persons\",\"modelType\":\"Property\",\"value\":\"\",\"valueType\":\"integer\",\"semanticId\":\"0173-1#02-AAI711#001\"},{\"idShort\":\"price\",\"modelType\":\"Property\",\"value\":\"\",\"valueType\":\"integer\",\"semanticId\":\"0173-1#02-AAB711#001\"}]},\"0173-1#01-AAO742#002\":{\"submodelElements\":[{\"idShort\":\"brand\",\"modelType\":\"Property\",\"value\":\"\",\"valueType\":\"string\",\"semanticId\":\"0173-1#02-AAO742#002\"},{\"idShort\":\"min. charging voltage [V]\",\"modelType\":\"Property\",\"value\":\"\",\"valueType\":\"integer\",\"semanticId\":\"0173-1#02-AAJ102#003\"},{\"idShort\":\"max. charging voltage [V]\",\"modelType\":\"Property\",\"value\":\"\",\"valueType\":\"long\",\"semanticId\":\"0173-1#02-AAJ101#003\"},{\"idShort\":\"cables included\",\"modelType\":\"Property\",\"value\":\"\",\"valueType\":\"boolean\",\"semanticId\":\"0173-1#02-BAF464#008\"},{\"idShort\":\"connection type\",\"modelType\":\"Property\",\"value\":\"\",\"valueType\":\"string\",\"semanticId\":\"0173-1#02-AAF631#001\"},{\"idShort\":\"cable length [m]\",\"modelType\":\"Property\",\"value\":\"\",\"valueType\":\"integer\",\"semanticId\":\"0173-1#02-AAB733#007\"},{\"idShort\":\"number of connections\",\"modelType\":\"Property\",\"value\":\"\",\"valueType\":\"integer\",\"semanticId\":\"0173-1#02-AAP397#001\"},{\"idShort\":\"target location [lat, lng]\",\"modelType\":\"Property\",\"value\":\"\",\"valueType\":\"string\",\"semanticId\":\"0173-1#02-BAF163#002\"},{\"idShort\":\"price\",\"modelType\":\"Property\",\"value\":\"\",\"valueType\":\"integer\",\"semanticId\":\"0173-1#02-AAA397#001\"}]},\"0173-1#01-BAF577#004\":{\"submodelElements\":[{\"idShort\":\"duration [min]\",\"modelType\":\"Property\",\"value\":\"\",\"valueType\":\"long\",\"semanticId\":\"0173-1#02-AAA818#006\"},{\"idShort\":\"maximum velocity at rated value [km/h]\",\"modelType\":\"Property\",\"value\":\"\",\"valueType\":\"long\",\"semanticId\":\"0173-1#02-AAB919#007\"},{\"idShort\":\"max. monitoring radius [m]\",\"modelType\":\"Property\",\"value\":\"\",\"valueType\":\"long\",\"semanticId\":\"0173-1#02-AAI957#004\"},{\"idShort\":\"2,4 GHz\",\"modelType\":\"Property\",\"value\":\"\",\"valueType\":\"boolean\",\"semanticId\":\"0173-1#07-ABA076#001\"},{\"idShort\":\"5 GHz\",\"modelType\":\"Property\",\"value\":\"\",\"valueType\":\"boolean\",\"semanticId\":\"0173-1#07-ABA075#001\"},{\"idShort\":\"energy consumption [kW/h]\",\"modelType\":\"Property\",\"value\":\"\",\"valueType\":\"decimal\",\"semanticId\":\"0173-1#02-AAF090#005\"},{\"idShort\":\"location [lat, lng]\",\"modelType\":\"Property\",\"value\":\"\",\"valueType\":\"string\",\"semanticId\":\"0173-1#02-BAF163#002\"},{\"idShort\":\"price\",\"modelType\":\"Property\",\"value\":\"\",\"valueType\":\"integer\",\"semanticId\":\"0173-1#02-AAO739#001\"}]},\"0173-1#01-BAF576#004\":{\"submodelElements\":[{\"idShort\":\"maximum power [kW]\",\"modelType\":\"Property\",\"value\":\"\",\"valueType\":\"double\",\"semanticId\":\"0173-1#02-AAF406#004\"},{\"idShort\":\"duration [min]\",\"modelType\":\"Property\",\"value\":\"\",\"valueType\":\"time\",\"semanticId\":\"0173-1#02-AAA818#006\"},{\"idShort\":\"location [lat, lng]\",\"modelType\":\"Property\",\"value\":\"\",\"valueType\":\"string\",\"semanticId\":\"0173-1#02-BAF163#002\"},{\"idShort\":\"price\",\"modelType\":\"Property\",\"value\":\"\",\"valueType\":\"integer\",\"semanticId\":\"0173-1#02-AAO739#001\"}]},\"0173-1#01-BAF575#004\":{\"submodelElements\":[{\"idShort\":\"range [km]\",\"modelType\":\"Property\",\"value\":\"\",\"valueType\":\"decimal\",\"semanticId\":\"0173-1#02-AAI957#004\"},{\"idShort\":\"frequency [MHz]\",\"modelType\":\"Property\",\"value\":\"\",\"valueType\":\"double\",\"semanticId\":\"0173-1#07-AAL034#004\"},{\"idShort\":\"energy consumption [kWh]\",\"modelType\":\"Property\",\"value\":\"\",\"valueType\":\"decimal\",\"semanticId\":\"0173-1#02-AAF090#005\"},{\"idShort\":\"location [lat, lng]\",\"modelType\":\"Property\",\"value\":\"\",\"valueType\":\"string\",\"semanticId\":\"0173-1#02-BAF163#002\"},{\"idShort\":\"price\",\"modelType\":\"Property\",\"value\":\"\",\"valueType\":\"integer\",\"semanticId\":\"0173-1#02-AAO739#001\"}]},\"0173-1#01-BAF777#004\":{\"submodelElements\":[{\"idShort\":\"location [lat, lng]\",\"modelType\":\"Property\",\"value\":\"\",\"valueType\":\"string\",\"semanticId\":\"0173-1#02-BAF163#002\"},{\"idShort\":\"time period [h]\",\"modelType\":\"Property\",\"value\":\"\",\"valueType\":\"time\",\"semanticId\":\"0173-1#02-AAO738#001\"},{\"idShort\":\"price\",\"modelType\":\"Property\",\"value\":\"\",\"valueType\":\"integer\",\"semanticId\":\"0173-1#02-AAO739#001\"}]},\"0173-1#01-BAF888#004\":{\"submodelElements\":[{\"idShort\":\"location [lat, lng]\",\"modelType\":\"Property\",\"value\":\"\",\"valueType\":\"string\",\"semanticId\":\"0173-1#02-BAF163#002\"},{\"idShort\":\"price\",\"modelType\":\"Property\",\"value\":\"\",\"valueType\":\"integer\",\"semanticId\":\"0173-1#02-AAO739#001\"}]}}");

/***/ }),

/***/ "./catalog/operations.json":
/*!*********************************!*\
  !*** ./catalog/operations.json ***!
  \*********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"Drone Transport\",\"description\":\"A drone with transport capability is requested to transport a package from A to B\",\"id\":\"0173-1#01-AAJ336#002\"},{\"name\":\"Drone inspection\",\"description\":\"A drone with high resolution camera is requested to inspect a wind power plant at human unaccessable areas for potential maintenance / damage\",\"id\":\"0173-1#01-AAP788#001\"},{\"name\":\"Mobility as a service\",\"description\":\"A manned or autonomous vehicle is requested to transport a given number of persons from A to B\",\"id\":\"0173-1#01-AAI711#001\"},{\"name\":\"EV Charging\",\"description\":\"A manned or autonomous vehicle is requesting an available EV chaging slot at a nearby location or along a future route/location\",\"id\":\"0173-1#01-AAO742#002\"},{\"name\":\"Drone connectivity provision\",\"description\":\"A drone with a mobile network connectivity equipment, e.g., WiFi access point is requested to cover a specific location in order to provide connectivity\",\"id\":\"0173-1#01-BAF577#004\"},{\"name\":\"Power source\",\"description\":\"A network equipment, that consumes a give amount of energy can be powered with renewable sources provided e.g., by a solar panel\",\"id\":\"0173-1#01-BAF576#004\"},{\"name\":\"Cell tower rent\",\"description\":\"A virtual mobile network operator, MVNO, request access to a cell tower in a given area to provide connectivity to its customers\",\"id\":\"0173-1#01-BAF575#004\"},{\"name\":\"Weather Data\",\"description\":\"\",\"id\":\"0173-1#01-BAF777#004\"},{\"name\":\"Sensor Data\",\"description\":\"An industrial plant equipped with sensors offering the access to the sensor data during a certain window in time.\",\"id\":\"0173-1#01-BAF888#004\"}]");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const uuid = __webpack_require__(/*! uuid/v4 */ "./node_modules/uuid/v4.js");

const available_operations = __webpack_require__(/*! ./catalog/operations.json */ "./catalog/operations.json");

const eClass = __webpack_require__(/*! ./catalog/eClass.json */ "./catalog/eClass.json");

const callForProposal = __webpack_require__(/*! ./templates/callForProposal.json */ "./templates/callForProposal.json");

const proposal = __webpack_require__(/*! ./templates/proposal.json */ "./templates/proposal.json");

const acceptProposal = __webpack_require__(/*! ./templates/acceptProposal.json */ "./templates/acceptProposal.json");

const rejectProposal = __webpack_require__(/*! ./templates/rejectProposal.json */ "./templates/rejectProposal.json");

const informConfirm = __webpack_require__(/*! ./templates/informConfirm.json */ "./templates/informConfirm.json");

const informPayment = __webpack_require__(/*! ./templates/informPayment.json */ "./templates/informPayment.json");
/**
 * 1. For CfP message type returns list of operations (plain text)
 */


const operations = () => {
  return available_operations;
};
/**
 * 1. Performs lookup in the eCl@ss catalog, retrieves submodel  
 * 2. Returns submodel without price property
 */


const submodel = irdi => {
  return eClass[irdi].submodelElements.filter(({
    idShort
  }) => !['preis', 'price'].includes(idShort));
};
/**
 * 1. Evaluates values  
 * 2. Returns success or failure notification
 */


const evaluate = (irdi, values) => {
  const submodelTemplate = submodel(irdi);
  let status;
  submodelTemplate.some(element => {
    const value = values[element.semanticId];

    if (element.valueType !== 'boolean' && !value) {
      status = "Value for ".concat(element.idShort, " (").concat(element.semanticId, ") is missing");
      return null;
    }

    const isTypeValid = checkType(element.valueType, value);

    if (!isTypeValid) {
      status = "Type for ".concat(element.idShort, " (").concat(element.semanticId, ") is invalid");
      return null;
    }

    return null;
  });
  return status || 'success';
};

const checkType = (type, value) => {
  switch (type) {
    case 'string':
    case 'langString':
    case 'anyURI':
      return typeof value === 'string';

    case 'decimal':
    case 'double':
    case 'float':
      return typeof value === 'number';

    case 'int':
    case 'integer':
    case 'long':
    case 'short':
    case 'byte':
    case 'unsignedLong':
    case 'unsignedShort':
    case 'unsignedByte':
      return typeof value === 'number' && Math.abs(value % 1) === 0;

    case 'nonNegativeInteger':
      return typeof value === 'number' && value >= 0 && value % 1 === 0;

    case 'positiveInteger':
    case 'time':
      return typeof value === 'number' && value > 0 && value % 1 === 0;

    case 'nonPositiveInteger':
      return typeof value === 'number' && value <= 0 && value % 1 === 0;

    case 'negativeInteger':
      return typeof value === 'number' && value < 0 && value % 1 === 0;

    case 'date':
    case 'dateTime':
    case 'dateTimeStamp':
      return typeof value === 'number' && typeof new Date(value) === 'object';

    case 'boolean':
      return typeof value === 'boolean';

    case 'complexType':
      return typeof value === 'object';

    case 'anyType':
    case 'anySimpleType':
    case 'anyAtomicType':
    default:
      return true;
  }
};
/**
 * 1. Generates conversationId, messageId,  
 * 2. Fills placeholder JSON for selected message type with provided values, appends submodel  
 * 3. Returns generated message of the selected type (CfP, Proposal, etc.)  
 */


const generate = ({
  messageType,
  userId,
  irdi,
  submodelValues,
  replyTime,
  originalMessage = null,
  price = null,
  location = null,
  startTimestamp = null,
  endTimestamp = null,
  creationDate = null,
  userName = null
}) => {
  const message = getTemplate(messageType);

  if (!message) {
    return null;
  }

  message.frame.sender.identification.id = userId;
  message.frame.replyBy = getReplyByTime(replyTime);
  message.userName = userName;

  if (originalMessage && messageType !== 'callForProposal') {
    message.frame.conversationId = originalMessage.frame.conversationId;
    message.frame.receiver.identification.id = originalMessage.frame.sender.identification.id;
    message.dataElements = originalMessage.dataElements;
    message.frame.location = originalMessage.frame.location;
    message.frame.startTimestamp = originalMessage.frame.startTimestamp;
    message.frame.endTimestamp = originalMessage.frame.endTimestamp;
    message.frame.creationDate = originalMessage.frame.creationDate;

    if (originalMessage.walletAddress) {
      message.walletAddress = originalMessage.walletAddress;
    }

    if (messageType === 'proposal' && price && irdi) {
      const priceModel = eClass[irdi].submodelElements.find(({
        idShort
      }) => ['preis', 'price'].includes(idShort));
      priceModel.value = price;
      const updatedModel = message.dataElements.submodels[0].identification.submodelElements.filter(model => !['preis', 'price'].includes(model.idShort));
      updatedModel.push(priceModel);
      message.dataElements.submodels[0].identification.submodelElements = updatedModel;
    }
  } else if (irdi && messageType === 'callForProposal') {
    message.frame.conversationId = uuid();

    if (location) {
      message.frame.location = location;
    }

    if (startTimestamp && endTimestamp) {
      message.frame.startTimestamp = startTimestamp;
      message.frame.endTimestamp = endTimestamp;
    }

    if (creationDate) {
      message.frame.creationDate = creationDate;
    }

    if (evaluate(irdi, submodelValues) === 'success') {
      const submodelTemplate = submodel(irdi);
      const submodelElements = submodelTemplate.map(element => _objectSpread({}, element, {
        value: submodelValues[element.semanticId]
      }));
      message.dataElements.submodels = [{
        identification: {
          id: irdi,
          submodelElements
        }
      }];
    }
  }

  return message;
};

const getReplyByTime = (minutes = 10) => {
  const timestamp = new Date();
  const timeToReply = minutes * 60 * 1000; // 10 minutes in milliseconds

  timestamp.setTime(timestamp.getTime() + timeToReply);
  return Date.parse(timestamp);
};

const getTemplate = type => {
  switch (type) {
    case 'callForProposal':
      return callForProposal;

    case 'proposal':
      return proposal;

    case 'acceptProposal':
      return acceptProposal;

    case 'rejectProposal':
      return rejectProposal;

    case 'informConfirm':
      return informConfirm;

    case 'informPayment':
      return informPayment;

    default:
      return null;
  }
};

module.exports = {
  generate,
  evaluate,
  operations,
  submodel
};

/***/ }),

/***/ "./node_modules/uuid/lib/bytesToUuid.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/bytesToUuid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "./node_modules/uuid/lib/rng.js":
/*!**************************************!*\
  !*** ./node_modules/uuid/lib/rng.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Unique ID creation requires a high quality random # generator.  In node.js
// this is pretty straight-forward - we use the crypto API.

var crypto = __webpack_require__(/*! crypto */ "crypto");

module.exports = function nodeRNG() {
  return crypto.randomBytes(16);
};


/***/ }),

/***/ "./node_modules/uuid/v4.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v4.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ "./templates/acceptProposal.json":
/*!***************************************!*\
  !*** ./templates/acceptProposal.json ***!
  \***************************************/
/*! exports provided: frame, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"frame\":{\"semanticProtocol\":\"http://www.vdi.de/gma720/vdi2193_2/bidding\",\"type\":\"acceptProposal\",\"conversationId\":\"\",\"messageId\":\"3\",\"sender\":{\"identification\":{\"id\":\"\"}},\"receiver\":{\"identification\":{\"id\":\"\"}},\"replyBy\":\"\"}}");

/***/ }),

/***/ "./templates/callForProposal.json":
/*!****************************************!*\
  !*** ./templates/callForProposal.json ***!
  \****************************************/
/*! exports provided: frame, dataElements, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"frame\":{\"semanticProtocol\":\"http://www.vdi.de/gma720/vdi2193_2/bidding\",\"type\":\"callForProposal\",\"conversationId\":\"\",\"messageId\":\"1\",\"sender\":{\"identification\":{\"id\":\"\"}},\"replyBy\":\"\"},\"dataElements\":{\"submodels\":[]}}");

/***/ }),

/***/ "./templates/informConfirm.json":
/*!**************************************!*\
  !*** ./templates/informConfirm.json ***!
  \**************************************/
/*! exports provided: frame, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"frame\":{\"semanticProtocol\":\"http://www.vdi.de/gma720/vdi2193_2/bidding\",\"type\":\"informConfirm\",\"conversationId\":\"\",\"messageId\":\"4\",\"sender\":{\"identification\":{\"id\":\"\"}},\"receiver\":{\"identification\":{\"id\":\"\"}},\"replyBy\":\"\"}}");

/***/ }),

/***/ "./templates/informPayment.json":
/*!**************************************!*\
  !*** ./templates/informPayment.json ***!
  \**************************************/
/*! exports provided: frame, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"frame\":{\"semanticProtocol\":\"http://www.vdi.de/gma720/vdi2193_2/bidding\",\"type\":\"informPayment\",\"conversationId\":\"\",\"messageId\":\"5\",\"sender\":{\"identification\":{\"id\":\"\"}},\"receiver\":{\"identification\":{\"id\":\"\"}},\"replyBy\":\"\"}}");

/***/ }),

/***/ "./templates/proposal.json":
/*!*********************************!*\
  !*** ./templates/proposal.json ***!
  \*********************************/
/*! exports provided: frame, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"frame\":{\"semanticProtocol\":\"http://www.vdi.de/gma720/vdi2193_2/bidding\",\"type\":\"proposal\",\"conversationId\":\"\",\"messageId\":\"2\",\"sender\":{\"identification\":{\"id\":\"\"}},\"receiver\":{\"identification\":{\"id\":\"\"}},\"replyBy\":\"\"}}");

/***/ }),

/***/ "./templates/rejectProposal.json":
/*!***************************************!*\
  !*** ./templates/rejectProposal.json ***!
  \***************************************/
/*! exports provided: frame, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"frame\":{\"semanticProtocol\":\"http://www.vdi.de/gma720/vdi2193_2/bidding\",\"type\":\"rejectProposal\",\"conversationId\":\"\",\"messageId\":\"3\",\"sender\":{\"identification\":{\"id\":\"\"}},\"receiver\":{\"identification\":{\"id\":\"\"}}}}");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ })

/******/ });