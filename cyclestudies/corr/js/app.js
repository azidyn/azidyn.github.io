/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../core/Coin.js":
/*!***********************!*\
  !*** ../core/Coin.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! core-js/modules/es.string.trim */ \"./node_modules/core-js/modules/es.string.trim.js\");\n\nvar _classCallCheck = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n\nvar _createClass = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n\nvar pcorr = __webpack_require__(/*! ./pcorr */ \"../core/pcorr.js\");\n\nvar Series = __webpack_require__(/*! ./Series */ \"../core/Series.js\");\n\nvar MAX_HISTORY = 500; // Class to manage a single market pair e.g. LTCBTC\n\nvar Coin = /*#__PURE__*/function () {\n  \"use strict\";\n\n  function Coin(symbol) {\n    _classCallCheck(this, Coin);\n\n    this.series = new Series();\n    this.symbol = symbol;\n    this.price = 0;\n  } // When the interval has closed, print a new price\n\n\n  _createClass(Coin, [{\n    key: \"close\",\n    value: function close() {\n      // console.log(`Closing ${this.symbol} @ ${this.price} | ${this.series.get().join(',')}`);\n      // Add a new sample to our series using the last traded price\n      this.series.append(this.price);\n      this.series.trim(MAX_HISTORY);\n    } // Whenever a new price comes in update the lastest value in the series, regardless of resolution/interval\n\n  }, {\n    key: \"tick\",\n    value: function tick(price) {\n      this.series.poke(price);\n    } // Keep a copy of this pair's latest traded price\n\n  }, {\n    key: \"trade\",\n    value: function trade(price) {\n      this.price = price;\n    }\n  }, {\n    key: \"history\",\n    value: function history(length) {\n      return this.series.get(length);\n    }\n  }, {\n    key: \"len\",\n    value: function len() {\n      return this.series.len();\n    }\n  }, {\n    key: \"corr\",\n    value: function corr(coin) {\n      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;\n      var shortest = Math.min(this.len(), coin.len()); // Need at last two sample on each pair to calc correlation\n\n      if (shortest < 2) {\n        return 0;\n      }\n\n      var l = Math.min(shortest, length);\n      var c = pcorr(this.history(l), coin.history(l));\n      return Math.min(1, Math.max(-1, c));\n    }\n  }]);\n\n  return Coin;\n}();\n\nmodule.exports = Coin;\n\n//# sourceURL=webpack:///../core/Coin.js?");

/***/ }),

/***/ "../core/CoinManager.js":
/*!******************************!*\
  !*** ../core/CoinManager.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! core-js/modules/es.array.concat */ \"./node_modules/core-js/modules/es.array.concat.js\");\n\n__webpack_require__(/*! core-js/modules/es.array.includes */ \"./node_modules/core-js/modules/es.array.includes.js\");\n\n__webpack_require__(/*! core-js/modules/es.array.map */ \"./node_modules/core-js/modules/es.array.map.js\");\n\n__webpack_require__(/*! core-js/modules/es.regexp.exec */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n\n__webpack_require__(/*! core-js/modules/es.string.replace */ \"./node_modules/core-js/modules/es.string.replace.js\");\n\nvar _createForOfIteratorHelper = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createForOfIteratorHelper */ \"./node_modules/@babel/runtime/helpers/createForOfIteratorHelper.js\");\n\nvar _classCallCheck = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n\nvar _createClass = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n\nvar _inherits = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n\nvar _createSuper = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createSuper */ \"./node_modules/@babel/runtime/helpers/createSuper.js\");\n\nvar EventEmitter = __webpack_require__(/*! ./EventEmitter */ \"../core/EventEmitter.js\");\n\nvar Coin = __webpack_require__(/*! ./Coin */ \"../core/Coin.js\");\n\nvar DEF_INTERVAL = 10000;\nvar DEF_CORR_LENGTH = 50;\nvar SPECIAL = ['BTCUSDT', 'ETHUSDT'];\n\nvar CoinManager = /*#__PURE__*/function (_EventEmitter) {\n  \"use strict\";\n\n  _inherits(CoinManager, _EventEmitter);\n\n  var _super = _createSuper(CoinManager);\n\n  function CoinManager() {\n    var _this;\n\n    _classCallCheck(this, CoinManager);\n\n    _this = _super.call(this);\n    _this.coins = {};\n    _this.ticks = true;\n    _this.interval = DEF_INTERVAL;\n    _this.timer = null;\n    return _this;\n  }\n\n  _createClass(CoinManager, [{\n    key: \"correlate\",\n    value: function correlate() {\n      // Generates a 2D array representing a table/matrix with col and row headers\n      // cells contain the correlation between pairs\n      var output = [];\n      var sorted = [];\n\n      for (var ticker in this.coins) {\n        sorted.push(ticker);\n      } // Sorted list of tickers e.g. ['ADA', 'BCH', 'BTC' ... 'XRP' ]\n\n\n      sorted.sort(); // Create the table header\n\n      output.push([' '].concat(sorted));\n\n      for (var _i = 0, _sorted = sorted; _i < _sorted.length; _i++) {\n        var y = _sorted[_i];\n        // Row header = y = 'ADA' or whatever\n        var row = [SPECIAL.includes(y) ? y : y.replace('BTC', '')];\n\n        var _iterator = _createForOfIteratorHelper(sorted),\n            _step;\n\n        try {\n          for (_iterator.s(); !(_step = _iterator.n()).done;) {\n            var x = _step.value;\n            row.push(x == y ? 1 : this.coins[x].corr(this.coins[y], DEF_CORR_LENGTH));\n          }\n        } catch (err) {\n          _iterator.e(err);\n        } finally {\n          _iterator.f();\n        }\n\n        output.push(row);\n      }\n\n      output[0] = output[0].map(function (m) {\n        return SPECIAL.includes(m) ? m : m.replace('BTC', '');\n      });\n      return output;\n    }\n  }, {\n    key: \"sample\",\n    value: function sample(interval) {\n      var _this2 = this;\n\n      this.interval = interval || DEF_INTERVAL; // Clear any previous timers\n\n      if (this.timer) clearInterval(this.timer);\n      this.timer = setInterval(function () {\n        for (var pair in _this2.coins) {\n          _this2.coins[pair].close();\n        }\n\n        var matrix = _this2.correlate();\n\n        _this2.fire('matrix', matrix);\n      }, this.interval);\n    }\n  }, {\n    key: \"ensure\",\n    value: function ensure(symbol) {\n      if (this.coins[symbol]) return;\n      this.coins[symbol] = new Coin(symbol);\n    }\n  }, {\n    key: \"tick\",\n    value: function tick(symbol, price) {\n      // console.log( symbol, price );\n      this.ensure(symbol);\n      this.coins[symbol].trade(price); // Means are we updating the correlation matrix for every single tick?\n\n      if (this.ticks) {\n        // First poke the latest price\n        this.coins[symbol].tick(price); // Now gen the matrix \n\n        var matrix = this.correlate();\n        this.fire('matrix', matrix);\n      }\n    }\n  }]);\n\n  return CoinManager;\n}(EventEmitter);\n\nmodule.exports = CoinManager;\n\n//# sourceURL=webpack:///../core/CoinManager.js?");

/***/ }),

/***/ "../core/Core.js":
/*!***********************!*\
  !*** ../core/Core.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! core-js/modules/es.array.join */ \"./node_modules/core-js/modules/es.array.join.js\");\n\n__webpack_require__(/*! core-js/modules/es.array.map */ \"./node_modules/core-js/modules/es.array.map.js\");\n\n__webpack_require__(/*! core-js/modules/es.array.slice */ \"./node_modules/core-js/modules/es.array.slice.js\");\n\nvar _classCallCheck = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n\nvar _createClass = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n\nvar _inherits = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n\nvar _createSuper = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createSuper */ \"./node_modules/@babel/runtime/helpers/createSuper.js\");\n\n// using a linter; female trait\n\n/* eslint-disable */\nvar tickers = __webpack_require__(/*! ./cg100new.json */ \"../core/cg100new.json\");\n\nvar Network = __webpack_require__(/*! ./Network */ \"../core/Network.js\");\n\nvar CoinManager = __webpack_require__(/*! ./CoinManager */ \"../core/CoinManager.js\");\n\nvar EventEmitter = __webpack_require__(/*! ./EventEmitter */ \"../core/EventEmitter.js\");\n\nvar Core = /*#__PURE__*/function (_EventEmitter) {\n  \"use strict\";\n\n  _inherits(Core, _EventEmitter);\n\n  var _super = _createSuper(Core);\n\n  // `max` number of coins to create a matrix with\n  function Core(max) {\n    var _this;\n\n    _classCallCheck(this, Core);\n\n    _this = _super.call(this); // written for Binance only, see internals \n\n    _this.network = new Network(); // which coins we using \n\n    _this.symbols = tickers.map(function (a) {\n      return a.ticker;\n    });\n    _this.symbols = _this.symbols.slice(0, max); // sample price every 5 seconds ( 5 sec 'bars' basically )\n\n    _this.interval = 5000;\n    _this.coins = new CoinManager();\n    return _this;\n  }\n\n  _createClass(Core, [{\n    key: \"start\",\n    value: function start() {\n      var _this2 = this;\n\n      // kek binance endpoint param convention is retarded look at this shit\n      var req = this.symbols.map(function (s) {\n        return \"\".concat(s, \"btc@aggTrade\");\n      });\n      var bonus = \"btcusdt@aggTrade/ethusdt@aggTrade/\";\n      this.network.connect('binance', bonus + req.join('/')); // this.network.on('data', payload => {\n      //     const data = payload.data;\n      //     this.coins.tick( data );            \n      // });\n\n      this.network.on('data', function (symbol, price) {\n        _this2.coins.tick(symbol, price);\n      }); // Tell coin manager to sample price at this interval (adjustable at runtime)\n\n      this.coins.sample(this.interval);\n      this.coins.on('matrix', function (matrix) {\n        // here's the resultant matrix...\n        // console.log(matrix);\n        _this2.fire('matrix', matrix);\n      });\n    }\n  }]);\n\n  return Core;\n}(EventEmitter);\n\nmodule.exports = Core; // let coins = new CoinManager();\n// const network = new Network();\n// let symbols = tickers.map( a => a.ticker );\n// symbols = symbols.slice( 0, 25 );\n// let req = symbols.map( s => `${s}btc@aggTrade`);\n// // console.log( req )\n// network.connect('binance', req.join('/') )\n// // Sample every 5 seconds\n// coins.sample( 5000 );\n// coins.on('matrix', matrix => {\n//     console.log(matrix)\n// })\n// network.on('data', payload => {\n//     const data = payload.data;\n//     coins.tick( data );\n// });\n// // this.network.connect( this.exchange, req.join('/')  );\n// // this.network.on('data', payload => {\n\n//# sourceURL=webpack:///../core/Core.js?");

/***/ }),

/***/ "../core/EventEmitter.js":
/*!*******************************!*\
  !*** ../core/EventEmitter.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! core-js/modules/es.array.for-each */ \"./node_modules/core-js/modules/es.array.for-each.js\");\n\n__webpack_require__(/*! core-js/modules/es.map */ \"./node_modules/core-js/modules/es.map.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.to-string */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n\n__webpack_require__(/*! core-js/modules/es.string.iterator */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n\n__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n\n__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n\nvar _classCallCheck = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n\nvar _createClass = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n\nvar EventEmitter = /*#__PURE__*/function () {\n  \"use strict\";\n\n  function EventEmitter() {\n    _classCallCheck(this, EventEmitter);\n\n    this.listeners = new Map();\n    this.on = this.addListener;\n    this.fire = this.emit;\n  }\n\n  _createClass(EventEmitter, [{\n    key: \"addListener\",\n    value: function addListener(label, fn) {\n      this.listeners.has(label) || this.listeners.set(label, []);\n      this.listeners.get(label).push(fn);\n    }\n  }, {\n    key: \"_isFunction\",\n    value: function _isFunction(obj) {\n      return typeof obj == 'function' || false;\n    }\n  }, {\n    key: \"clearListeners\",\n    value: function clearListeners(label) {\n      this.listeners.set(label, []);\n    }\n  }, {\n    key: \"removeListener\",\n    value: function removeListener() {\n      throw \"Unimplemented\";\n    }\n  }, {\n    key: \"emit\",\n    value: function emit(label) {\n      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n        args[_key - 1] = arguments[_key];\n      }\n\n      var listeners = this.listeners.get(label);\n\n      if (listeners && listeners.length) {\n        listeners.forEach(function (listener) {\n          listener.apply(void 0, args);\n        });\n        return true;\n      }\n\n      return false;\n    }\n  }]);\n\n  return EventEmitter;\n}();\n\nmodule.exports = EventEmitter;\n\n//# sourceURL=webpack:///../core/EventEmitter.js?");

/***/ }),

/***/ "../core/Network.js":
/*!**************************!*\
  !*** ../core/Network.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! core-js/modules/es.number.constructor */ \"./node_modules/core-js/modules/es.number.constructor.js\");\n\nvar _classCallCheck = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n\nvar _createClass = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n\nvar _inherits = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n\nvar _createSuper = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createSuper */ \"./node_modules/@babel/runtime/helpers/createSuper.js\");\n\nvar BINANCE_WS = \"wss://stream.binance.com:9443\";\n\nvar WebSocket = __webpack_require__(/*! isomorphic-ws */ \"../node_modules/isomorphic-ws/browser.js\");\n\nvar EventEmitter = __webpack_require__(/*! ./EventEmitter */ \"../core/EventEmitter.js\");\n\nvar Packet = __webpack_require__(/*! ./Packet */ \"../core/Packet.js\");\n\nvar _temp;\n\nvar DEF_THROTTLE_ETHUSDT = 15,\n    DEF_THROTTLE_BTCUSDT = 25;\nvar DEF_THROTTLE_ALT = 5;\nvar _eth_ctr = 1,\n    _btc_ctr = 1;\nvar _alt_ctr = {};\n\nvar Network = /*#__PURE__*/function (_EventEmitter) {\n  \"use strict\";\n\n  _inherits(Network, _EventEmitter);\n\n  var _super = _createSuper(Network);\n\n  function Network() {\n    var _this;\n\n    _classCallCheck(this, Network);\n\n    _this = _super.call(this);\n    _this.ws = null;\n    _this.exchange = '';\n    _this.packet = new Packet();\n    return _this;\n  }\n\n  _createClass(Network, [{\n    key: \"connect\",\n    value: function connect(exchange, params) {\n      var _this2 = this;\n\n      this.exchange = exchange;\n\n      switch (exchange) {\n        case 'binance':\n          var uri = \"\".concat(BINANCE_WS, \"/ws/\").concat(params);\n          this.ws = new WebSocket(uri);\n          break;\n\n        default:\n          throw 'Unsupported exchange';\n      }\n\n      this.ws.onopen = function () {\n        console.info(\"\".concat(exchange, \":connected\"));\n\n        _this2.fire('connected');\n      };\n\n      this.ws.onclose = function () {\n        console.warn(\"\".concat(exchange, \":disconnected\"));\n        _this2.ws = new WebSocket(\"\".concat(BINANCE_WS, \"/ws/\").concat(params));\n\n        _this2.fire('disconnected');\n      };\n\n      this.ws.onmessage = function (msg) {\n        // let size = msg.data.length;\n        // const data = this.packet.parse( this.exchange, msg.data );\n        // _parse( msg.data )\n        _temp = JSON.parse(msg.data);\n        /*\n             Throttle pairs. Waaaay too many trades for JS garbage collector to\n             handle it's like a fucking firehose.\n        */\n\n        if (_temp.s == 'ETHUSDT') {\n          if (_eth_ctr++ % DEF_THROTTLE_ETHUSDT == 0) {\n            _eth_ctr = 1;\n\n            _this2.fire('data', _temp.s, Number(_temp.p));\n          }\n        } else if (_temp.s == 'BTCUSDT') {\n          if (_btc_ctr++ % DEF_THROTTLE_BTCUSDT == 0) {\n            _btc_ctr = 1;\n\n            _this2.fire('data', _temp.s, Number(_temp.p));\n          }\n        } else {\n          if (!_alt_ctr[_temp.s]) _alt_ctr[_temp.s] = 0; // allow first one through\n\n          if (_alt_ctr[_temp.s]++ % DEF_THROTTLE_ALT == 0) {\n            _alt_ctr[_temp.s] = 1;\n\n            _this2.fire('data', _temp.s, Number(_temp.p));\n          }\n        } //  let agg = JSON.parse( msg.data )\n        //  let c = column.find( f => f.binance == agg.s );\n        //  if ( c ) {\n        //      c.data.push({ \n        //          size: { \n        //              base: agg.q,\n        //              quote: agg.q * agg.p\n        //          },\n        //          price: agg.p,\n        //          direction: agg.m ? 'sell' : 'buy',\n        //          timestamp: Number( agg.E)\n        //      });\n        //      c.data = c.data.slice( -MAX_HISTORY );    \n        //  }\n\n      };\n    }\n  }]);\n\n  return Network;\n}(EventEmitter);\n\nmodule.exports = Network;\n\n//# sourceURL=webpack:///../core/Network.js?");

/***/ }),

/***/ "../core/Packet.js":
/*!*************************!*\
  !*** ../core/Packet.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! core-js/modules/es.number.constructor */ \"./node_modules/core-js/modules/es.number.constructor.js\");\n\nvar _classCallCheck = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n\nvar _createClass = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n\nvar EXCHANGE = {};\n\nEXCHANGE['binance'] = function (agg) {\n  var Q = Number(agg.q),\n      P = Number(agg.p);\n  return {\n    symbol: agg.s,\n    size: {\n      base: Q,\n      quote: Q * P\n    },\n    price: P,\n    direction: agg.m ? 'sell' : 'buy',\n    timestamp: Number(agg.E),\n    // ms epoch\n    blank: false\n  };\n};\n\nvar Packet = /*#__PURE__*/function () {\n  \"use strict\";\n\n  function Packet() {\n    _classCallCheck(this, Packet);\n  }\n\n  _createClass(Packet, [{\n    key: \"parse\",\n    value: function parse(exchange, data) {\n      // console.log(`exchange=${exchange}`);\n      // console.log(data);\n      var parsed = JSON.parse(data);\n      return EXCHANGE[exchange](parsed);\n    }\n  }]);\n\n  return Packet;\n}();\n\nmodule.exports = Packet;\n\n//# sourceURL=webpack:///../core/Packet.js?");

/***/ }),

/***/ "../core/Series.js":
/*!*************************!*\
  !*** ../core/Series.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! core-js/modules/es.array.slice */ \"./node_modules/core-js/modules/es.array.slice.js\");\n\nvar _classCallCheck = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n\nvar _createClass = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n\n// Class to manage a time series of sample measurements.\n// Reason we need this over a simple array is to cleanly manage the poke() of recent data\nvar Series = /*#__PURE__*/function () {\n  \"use strict\";\n\n  function Series() {\n    _classCallCheck(this, Series);\n\n    this.poked = false;\n    this.data = [];\n  }\n\n  _createClass(Series, [{\n    key: \"len\",\n    value: function len() {\n      return this.data.length;\n    } // Make sure we don't grow too much\n\n  }, {\n    key: \"trim\",\n    value: function trim(max) {\n      this.data = this.data.slice(-max);\n    } // Return the current series to a given lookback\n\n  }, {\n    key: \"get\",\n    value: function get(length) {\n      return length ? this.data.slice(-length) : this.data;\n    }\n  }, {\n    key: \"append\",\n    value: function append(value) {\n      if (this.poked) {\n        this.data[this.data.length - 1] = value;\n      } else {\n        var v = value;\n        this.data.push(v);\n      }\n\n      this.poked = false;\n    }\n  }, {\n    key: \"poke\",\n    value: function poke(value) {\n      if (this.poked) {\n        this.data[this.data.length - 1] = value;\n      } else {\n        var v = value;\n        this.data.push(v);\n      }\n\n      this.poked = true;\n    }\n  }]);\n\n  return Series;\n}();\n\nmodule.exports = Series;\n\n//# sourceURL=webpack:///../core/Series.js?");

/***/ }),

/***/ "../core/cg100new.json":
/*!*****************************!*\
  !*** ../core/cg100new.json ***!
  \*****************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"ticker\\\":\\\"eth\\\",\\\"marketcap\\\":2995713,\\\"rank\\\":2},{\\\"ticker\\\":\\\"xrp\\\",\\\"marketcap\\\":757177,\\\"rank\\\":4},{\\\"ticker\\\":\\\"link\\\",\\\"marketcap\\\":299137,\\\"rank\\\":5},{\\\"ticker\\\":\\\"ltc\\\",\\\"marketcap\\\":295501,\\\"rank\\\":6},{\\\"ticker\\\":\\\"bch\\\",\\\"marketcap\\\":257711,\\\"rank\\\":7},{\\\"ticker\\\":\\\"dot\\\",\\\"marketcap\\\":250646,\\\"rank\\\":8},{\\\"ticker\\\":\\\"bnb\\\",\\\"marketcap\\\":231322,\\\"rank\\\":9},{\\\"ticker\\\":\\\"ada\\\",\\\"marketcap\\\":185270,\\\"rank\\\":10},{\\\"ticker\\\":\\\"eos\\\",\\\"marketcap\\\":140240,\\\"rank\\\":13},{\\\"ticker\\\":\\\"xmr\\\",\\\"marketcap\\\":119664,\\\"rank\\\":15},{\\\"ticker\\\":\\\"trx\\\",\\\"marketcap\\\":103293,\\\"rank\\\":16},{\\\"ticker\\\":\\\"xlm\\\",\\\"marketcap\\\":99063,\\\"rank\\\":17},{\\\"ticker\\\":\\\"xtz\\\",\\\"marketcap\\\":88268,\\\"rank\\\":19},{\\\"ticker\\\":\\\"atom\\\",\\\"marketcap\\\":68659,\\\"rank\\\":23},{\\\"ticker\\\":\\\"neo\\\",\\\"marketcap\\\":63257,\\\"rank\\\":24},{\\\"ticker\\\":\\\"fil\\\",\\\"marketcap\\\":60289,\\\"rank\\\":25},{\\\"ticker\\\":\\\"xem\\\",\\\"marketcap\\\":59213,\\\"rank\\\":26},{\\\"ticker\\\":\\\"aave\\\",\\\"marketcap\\\":52992,\\\"rank\\\":29},{\\\"ticker\\\":\\\"yfi\\\",\\\"marketcap\\\":47102,\\\"rank\\\":30},{\\\"ticker\\\":\\\"uni\\\",\\\"marketcap\\\":45755,\\\"rank\\\":31},{\\\"ticker\\\":\\\"dash\\\",\\\"marketcap\\\":45423,\\\"rank\\\":32},{\\\"ticker\\\":\\\"vet\\\",\\\"marketcap\\\":41535,\\\"rank\\\":34},{\\\"ticker\\\":\\\"etc\\\",\\\"marketcap\\\":38861,\\\"rank\\\":36},{\\\"ticker\\\":\\\"snx\\\",\\\"marketcap\\\":38291,\\\"rank\\\":37},{\\\"ticker\\\":\\\"zec\\\",\\\"marketcap\\\":36682,\\\"rank\\\":39},{\\\"ticker\\\":\\\"theta\\\",\\\"marketcap\\\":34910,\\\"rank\\\":41},{\\\"ticker\\\":\\\"waves\\\",\\\"marketcap\\\":32483,\\\"rank\\\":42},{\\\"ticker\\\":\\\"mkr\\\",\\\"marketcap\\\":26307,\\\"rank\\\":43},{\\\"ticker\\\":\\\"omg\\\",\\\"marketcap\\\":25625,\\\"rank\\\":44},{\\\"ticker\\\":\\\"comp\\\",\\\"marketcap\\\":25290,\\\"rank\\\":45},{\\\"ticker\\\":\\\"uma\\\",\\\"marketcap\\\":24215,\\\"rank\\\":46},{\\\"ticker\\\":\\\"ont\\\",\\\"marketcap\\\":21223,\\\"rank\\\":48},{\\\"ticker\\\":\\\"doge\\\",\\\"marketcap\\\":20621,\\\"rank\\\":49},{\\\"ticker\\\":\\\"ftt\\\",\\\"marketcap\\\":19387,\\\"rank\\\":50},{\\\"ticker\\\":\\\"ksm\\\",\\\"marketcap\\\":17823,\\\"rank\\\":53},{\\\"ticker\\\":\\\"renbtc\\\",\\\"marketcap\\\":17181,\\\"rank\\\":54},{\\\"ticker\\\":\\\"bat\\\",\\\"marketcap\\\":16569,\\\"rank\\\":55},{\\\"ticker\\\":\\\"dgb\\\",\\\"marketcap\\\":15931,\\\"rank\\\":56},{\\\"ticker\\\":\\\"ren\\\",\\\"marketcap\\\":15784,\\\"rank\\\":57},{\\\"ticker\\\":\\\"zrx\\\",\\\"marketcap\\\":15363,\\\"rank\\\":58},{\\\"ticker\\\":\\\"zil\\\",\\\"marketcap\\\":13658,\\\"rank\\\":61},{\\\"ticker\\\":\\\"dcr\\\",\\\"marketcap\\\":13298,\\\"rank\\\":62},{\\\"ticker\\\":\\\"qtum\\\",\\\"marketcap\\\":12996,\\\"rank\\\":63},{\\\"ticker\\\":\\\"lrc\\\",\\\"marketcap\\\":12299,\\\"rank\\\":64},{\\\"ticker\\\":\\\"algo\\\",\\\"marketcap\\\":11991,\\\"rank\\\":66},{\\\"ticker\\\":\\\"rsr\\\",\\\"marketcap\\\":11574,\\\"rank\\\":68},{\\\"ticker\\\":\\\"rune\\\",\\\"marketcap\\\":11534,\\\"rank\\\":69},{\\\"ticker\\\":\\\"sushi\\\",\\\"marketcap\\\":11007,\\\"rank\\\":70},{\\\"ticker\\\":\\\"icx\\\",\\\"marketcap\\\":11014,\\\"rank\\\":71},{\\\"ticker\\\":\\\"stx\\\",\\\"marketcap\\\":10905,\\\"rank\\\":73},{\\\"ticker\\\":\\\"ocean\\\",\\\"marketcap\\\":10841,\\\"rank\\\":74},{\\\"ticker\\\":\\\"knc\\\",\\\"marketcap\\\":10457,\\\"rank\\\":75},{\\\"ticker\\\":\\\"hbar\\\",\\\"marketcap\\\":10446,\\\"rank\\\":76},{\\\"ticker\\\":\\\"lsk\\\",\\\"marketcap\\\":9140,\\\"rank\\\":80},{\\\"ticker\\\":\\\"btg\\\",\\\"marketcap\\\":8747,\\\"rank\\\":82},{\\\"ticker\\\":\\\"luna\\\",\\\"marketcap\\\":8588,\\\"rank\\\":83},{\\\"ticker\\\":\\\"band\\\",\\\"marketcap\\\":7513,\\\"rank\\\":85},{\\\"ticker\\\":\\\"enj\\\",\\\"marketcap\\\":7140,\\\"rank\\\":87},{\\\"ticker\\\":\\\"bal\\\",\\\"marketcap\\\":6941,\\\"rank\\\":88},{\\\"ticker\\\":\\\"nmr\\\",\\\"marketcap\\\":6877,\\\"rank\\\":89},{\\\"ticker\\\":\\\"sc\\\",\\\"marketcap\\\":6726,\\\"rank\\\":91},{\\\"ticker\\\":\\\"egld\\\",\\\"marketcap\\\":6109,\\\"rank\\\":93},{\\\"ticker\\\":\\\"ant\\\",\\\"marketcap\\\":5996,\\\"rank\\\":96},{\\\"ticker\\\":\\\"crv\\\",\\\"marketcap\\\":5838,\\\"rank\\\":98},{\\\"ticker\\\":\\\"mana\\\",\\\"marketcap\\\":5801,\\\"rank\\\":99},{\\\"ticker\\\":\\\"gnt\\\",\\\"marketcap\\\":5721,\\\"rank\\\":100}]\");\n\n//# sourceURL=webpack:///../core/cg100new.json?");

/***/ }),

/***/ "../core/pcorr.js":
/*!************************!*\
  !*** ../core/pcorr.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! core-js/modules/es.array.for-each */ \"./node_modules/core-js/modules/es.array.for-each.js\");\n\n__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n\nmodule.exports = function (x, y) {\n  var sumX = 0,\n      sumY = 0,\n      sumXY = 0,\n      sumX2 = 0,\n      sumY2 = 0;\n\n  var minLength = x.length = y.length = Math.min(x.length, y.length),\n      reduce = function reduce(xi, idx) {\n    var yi = y[idx];\n    sumX += xi;\n    sumY += yi;\n    sumXY += xi * yi;\n    sumX2 += xi * xi;\n    sumY2 += yi * yi;\n  };\n\n  x.forEach(reduce);\n  var j = Math.sqrt((minLength * sumX2 - sumX * sumX) * (minLength * sumY2 - sumY * sumY));\n  return j ? (minLength * sumXY - sumX * sumY) / j : 0;\n};\n\n//# sourceURL=webpack:///../core/pcorr.js?");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ \"./node_modules/core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes */ \"./node_modules/core-js/modules/es.array.includes.js\");\n/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ \"./node_modules/core-js/modules/es.number.constructor.js\");\n/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed */ \"./node_modules/core-js/modules/es.number.to-fixed.js\");\n/* harmony import */ var core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.trim */ \"./node_modules/core-js/modules/es.string.trim.js\");\n/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _core_Core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Core */ \"../core/Core.js\");\n/* harmony import */ var _core_Core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_core_Core__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* eslint-disable */\n\nvar SPECIAL = ['BTCUSDT', 'ETHUSDT'];\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'App',\n  components: {},\n  methods: {\n    rkey: function rkey(index) {\n      return \"__ROW_\".concat(index);\n    },\n    tkey: function tkey(sym, index) {\n      var s = sym[0];\n      if (s.trim() == '') s = '__HEADER';\n      var id = \"\".concat(s, \"_\").concat(index);\n      return id;\n    },\n    // getClass: function(value) {\n    //   return 'brGreen';\n    // },\n    roundnum: function roundnum(value) {\n      // HACK: js is retarded\n      if (value == ' ') return value;\n      if (isNaN(value)) return value;\n      var n = Number(value);\n      return n.toFixed(3);\n    },\n    title: function title(row, col) {\n      var a = this.matrix[row][0];\n      var b = this.matrix[0][col];\n      return \"\".concat(a, \" x \").concat(b);\n    },\n    getcol: function getcol(value) {\n      // hack fudge to embiggen btc/eth usdt pairs\n      if (SPECIAL.includes(value)) {\n        return 'color: black; background-color: rgba(255,255,255,1)';\n      }\n\n      if (isNaN(value)) return 'background-color: rgba(0,0,0,1)'; // return 'brBlack'; \n\n      var n = Number(value);\n\n      if (n > 0) {\n        var g = Math.min(255, Math.round(255 * n));\n        var borw = n > 0.65 ? 'black' : 'white'; // return 'brGreen';\n\n        return \"color: \".concat(borw, \"; background-color: rgba(0,\").concat(g, \",0,1)\");\n      }\n\n      if (n < 0) {\n        var r = Math.min(255, Math.round(255 * n * -1));\n\n        var _borw = n < -0.65 ? 'black' : 'white'; // return 'brRed';\n\n\n        return \"color: \".concat(_borw, \"; background-color: rgba(\").concat(r, \",0,0,1)\");\n      } // return 'brBlack';\n\n\n      return 'background-color: rgba(0,0,0,1)';\n    }\n  },\n  data: function data() {\n    return {\n      core: null,\n      matrix: null,\n      counter: 0\n    };\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    this.core = new _core_Core__WEBPACK_IMPORTED_MODULE_5___default.a(25);\n    this.core.on('matrix', function (matrix) {\n      // if ( this.counter++ < 5 )\n      _this.matrix = matrix;\n    });\n    this.core.start();\n  }\n});\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"2248a1a6-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2248a1a6-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { attrs: { id: \"app\" } }, [\n    _c(\n      \"table\",\n      { attrs: { id: \"corrtable\" } },\n      _vm._l(_vm.matrix, function(row, indexrow) {\n        return _c(\n          \"tr\",\n          { key: _vm.rkey(indexrow) },\n          _vm._l(row, function(col, indexcol) {\n            return _c(\n              \"td\",\n              {\n                key: _vm.tkey(row, indexcol),\n                style: _vm.getcol(col),\n                attrs: { title: _vm.title(indexrow, indexcol) }\n              },\n              [_vm._v(_vm._s(_vm.roundnum(col)) + \" \")]\n            )\n          }),\n          0\n        )\n      }),\n      0\n    )\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%222248a1a6-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\n#corrtable {\\n  width: 100%\\n}\\n#app {\\n  /* font-family: Avenir, Helvetica, Arial, sans-serif; */\\n  /* -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale; */\\n  text-align: center;\\n  color:white;\\n  font-weight: 200;\\n  \\n  /* margin-top: 60px; */\\n}\\nbody{\\n  font-family: \\\"Trebuchet MS\\\", Tahoma ;\\n  font-size: 10pt;\\n   background-color: black;\\n}\\ntd { \\n    padding: 2px;\\n    margin: 0;\\n    border: 0;\\n}\\ntable { \\n    border-spacing: 0px;\\n    border-collapse: separate;\\n}\\n.brBlack { \\n  background-color: black;\\n  color: white;\\n}\\n.brGreen { \\n  background-color: green;\\n  color: white;\\n}\\n.brRed { \\n  background-color: red;\\n  color: black;\\n}\\n\\n\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&lang=css&\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"fa1ef42a\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90& */ \"./src/App.vue?vue&type=template&id=7ba5bd90&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./src/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./src/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=script&lang=js&":
/*!**********************************************!*\
  !*** ./src/App.vue?vue&type=script&lang=js& ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js??ref--12-0!../node_modules/babel-loader/lib!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************!*\
  !*** ./src/App.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader??ref--6-oneOf-1-0!../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=template&id=7ba5bd90&":
/*!****************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=7ba5bd90& ***!
  \****************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_2248a1a6_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"2248a1a6-vue-loader-template\"}!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=7ba5bd90& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"2248a1a6-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_2248a1a6_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_2248a1a6_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_azidyn_azidyn_corr_viz_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.array.iterator.js */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var _home_azidyn_azidyn_corr_viz_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_azidyn_azidyn_corr_viz_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_azidyn_azidyn_corr_viz_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.js */ \"./node_modules/core-js/modules/es.promise.js\");\n/* harmony import */ var _home_azidyn_azidyn_corr_viz_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_azidyn_azidyn_corr_viz_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_azidyn_azidyn_corr_viz_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.assign.js */ \"./node_modules/core-js/modules/es.object.assign.js\");\n/* harmony import */ var _home_azidyn_azidyn_corr_viz_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_azidyn_azidyn_corr_viz_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_azidyn_azidyn_corr_viz_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.finally.js */ \"./node_modules/core-js/modules/es.promise.finally.js\");\n/* harmony import */ var _home_azidyn_azidyn_corr_viz_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_azidyn_azidyn_corr_viz_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_4__[\"default\"].config.productionTip = false;\nnew vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n  render: function render(h) {\n    return h(_App_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n  }\n}).$mount('#app');\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/main.js */\"./src/main.js\");\n\n\n//# sourceURL=webpack:///multi_./src/main.js?");

/***/ })

/******/ });