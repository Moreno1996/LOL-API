module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/generate/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./methods/general_methods.js":
/*!************************************!*\
  !*** ./methods/general_methods.js ***!
  \************************************/
/*! exports provided: getFromDatabase, twoDigits, msToDate, msToTime, msToDateTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFromDatabase", function() { return getFromDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "twoDigits", function() { return twoDigits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "msToDate", function() { return msToDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "msToTime", function() { return msToTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "msToDateTime", function() { return msToDateTime; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

async function getFromDatabase(url) {
  console.time(url);
  const callUrl = "http://localhost:3003/" + url;
  console.error(`fetch from url: ${callUrl}`);
  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(callUrl);
  console.error(`response from url: `, response === null || response === void 0 ? void 0 : response.data);
  console.timeEnd(url);
  return response.data || "NO DATA";
}
function twoDigits(n) {
  return n > 9 ? "" + n : "0" + n;
}
function msToDate(ms) {
  const matchDate = new Date(ms);
  var year = matchDate.getFullYear();
  var month = twoDigits(matchDate.getMonth());
  var date = twoDigits(matchDate.getDate());
  return date + "-" + month + "-" + year;
}
function msToTime(duration) {
  var milliseconds = parseInt(duration % 1000 / 100),
      seconds = Math.floor(duration / 1000 % 60),
      minutes = Math.floor(duration / (1000 * 60) % 60),
      hours = Math.floor(duration / (1000 * 60 * 60) % 24);
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  return hours + ":" + minutes;
}
function msToDateTime(ms) {
  return msToDate(ms) + " " + msToTime(ms);
}

/***/ }),

/***/ "./pages/generate/index.js":
/*!*********************************!*\
  !*** ./pages/generate/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return generate; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _methods_general_methods__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../methods/general_methods */ "./methods/general_methods.js");


var _jsxFileName = "C:\\Users\\moren\\Bureaublad\\Coding\\LOL-API\\site\\pages\\generate\\index.js";




function generate() {
  const {
    0: matches,
    1: setMatches
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null);

  const getMatches = () => {
    return matches;
  };

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  const getMatch = (matchData = null) => {
    var _matches$newMatchInde;

    if (!matches && !matchData) {
      console.warn("matches not set");
      return;
    }

    let matches = matches;

    if (!matches) {
      matches = matchData;
    }

    const newMatchIndex = matches.findIndex(item => !(item !== null && item !== void 0 && item.done));
    Object(_methods_general_methods__WEBPACK_IMPORTED_MODULE_4__["getFromDatabase"])(`matches/getmatch/${(_matches$newMatchInde = matches[newMatchIndex]) === null || _matches$newMatchInde === void 0 ? void 0 : _matches$newMatchInde.gameId}`).then(data => {
      matches[newMatchIndex].done = true;
      console.log(matches[newMatchIndex]);
      console.log(matches);
      setMatches(matches);
      console.log("newMatch data", data);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    Object(_methods_general_methods__WEBPACK_IMPORTED_MODULE_4__["getFromDatabase"])(`matches/stored/`).then(data => {
      console.log("data", data);
      const matchData = data === null || data === void 0 ? void 0 : data.match_not_extended;
      console.log("match_not_extended", matchData);
      setMatches(matchData);
      getMatch(matchData);
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jsx-2085888330",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        className: "jsx-2085888330",
        children: matches && Object.values(matches).map((item, index) => {
          const finished = item === null || item === void 0 ? void 0 : item.done;

          if (finished) {
            console.log(item);
          }

          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: "jsx-2085888330",
            children: ["Game: ", item === null || item === void 0 ? void 0 : item.gameId, " op ", Object(_methods_general_methods__WEBPACK_IMPORTED_MODULE_4__["msToDateTime"])(item === null || item === void 0 ? void 0 : item.timestamp), finished && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
              children: "DONE"
            }, void 0, false), " A ", finished ? "Done" : "Not done"]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 17
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "2085888330",
      children: "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbW9yZW5cXEJ1cmVhdWJsYWRcXENvZGluZ1xcTE9MLUFQSVxcc2l0ZVxccGFnZXNcXGdlbmVyYXRlXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRGtCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbW9yZW5cXEJ1cmVhdWJsYWRcXENvZGluZ1xcTE9MLUFQSVxcc2l0ZVxccGFnZXNcXGdlbmVyYXRlXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0RnJvbURhdGFiYXNlLFxyXG4gIG1zVG9EYXRlVGltZSxcclxuICBtc1RvVGltZSxcclxufSBmcm9tIFwiLi4vLi4vbWV0aG9kcy9nZW5lcmFsX21ldGhvZHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlKCkge1xyXG4gIGNvbnN0IFttYXRjaGVzLCBzZXRNYXRjaGVzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IGdldE1hdGNoZXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gbWF0Y2hlcztcclxuICB9O1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGdldE1hdGNoID0gKG1hdGNoRGF0YSA9IG51bGwpID0+IHtcclxuICAgIGlmICghbWF0Y2hlcyAmJiAhbWF0Y2hEYXRhKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcIm1hdGNoZXMgbm90IHNldFwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IG1hdGNoZXMgPSBtYXRjaGVzO1xyXG4gICAgaWYgKCFtYXRjaGVzKSB7XHJcbiAgICAgIG1hdGNoZXMgPSBtYXRjaERhdGE7XHJcbiAgICB9XHJcbiAgICBjb25zdCBuZXdNYXRjaEluZGV4ID0gbWF0Y2hlcy5maW5kSW5kZXgoKGl0ZW0pID0+ICFpdGVtPy5kb25lKTtcclxuXHJcbiAgICBnZXRGcm9tRGF0YWJhc2UoYG1hdGNoZXMvZ2V0bWF0Y2gvJHttYXRjaGVzW25ld01hdGNoSW5kZXhdPy5nYW1lSWR9YCkudGhlbihcclxuICAgICAgKGRhdGEpID0+IHtcclxuICAgICAgICBtYXRjaGVzW25ld01hdGNoSW5kZXhdLmRvbmUgPSB0cnVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG1hdGNoZXNbbmV3TWF0Y2hJbmRleF0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG1hdGNoZXMpO1xyXG4gICAgICAgIHNldE1hdGNoZXMobWF0Y2hlcyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJuZXdNYXRjaCBkYXRhXCIsIGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH07XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldEZyb21EYXRhYmFzZShgbWF0Y2hlcy9zdG9yZWQvYCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImRhdGFcIiwgZGF0YSk7XHJcbiAgICAgIGNvbnN0IG1hdGNoRGF0YSA9IGRhdGE/Lm1hdGNoX25vdF9leHRlbmRlZDtcclxuICAgICAgY29uc29sZS5sb2coXCJtYXRjaF9ub3RfZXh0ZW5kZWRcIiwgbWF0Y2hEYXRhKTtcclxuICAgICAgc2V0TWF0Y2hlcyhtYXRjaERhdGEpO1xyXG4gICAgICBnZXRNYXRjaChtYXRjaERhdGEpO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIHttYXRjaGVzICYmXHJcbiAgICAgICAgICAgIE9iamVjdC52YWx1ZXMobWF0Y2hlcykubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGZpbmlzaGVkID0gaXRlbT8uZG9uZTtcclxuICAgICAgICAgICAgICBpZiAoZmluaXNoZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICBHYW1lOiB7aXRlbT8uZ2FtZUlkfSBvcCB7bXNUb0RhdGVUaW1lKGl0ZW0/LnRpbWVzdGFtcCl9XHJcbiAgICAgICAgICAgICAgICAgIHtmaW5pc2hlZCAmJiA8PkRPTkU8Lz59IEEge2ZpbmlzaGVkID8gXCJEb25lXCIgOiBcIk5vdCBkb25lXCJ9XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\moren\\\\Bureaublad\\\\Coding\\\\LOL-API\\\\site\\\\pages\\\\generate\\\\index.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true);
}

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbWV0aG9kcy9nZW5lcmFsX21ldGhvZHMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZ2VuZXJhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIl0sIm5hbWVzIjpbImdldEZyb21EYXRhYmFzZSIsInVybCIsImNvbnNvbGUiLCJ0aW1lIiwiY2FsbFVybCIsImVycm9yIiwicmVzcG9uc2UiLCJheGlvcyIsImdldCIsImRhdGEiLCJ0aW1lRW5kIiwidHdvRGlnaXRzIiwibiIsIm1zVG9EYXRlIiwibXMiLCJtYXRjaERhdGUiLCJEYXRlIiwieWVhciIsImdldEZ1bGxZZWFyIiwibW9udGgiLCJnZXRNb250aCIsImRhdGUiLCJnZXREYXRlIiwibXNUb1RpbWUiLCJkdXJhdGlvbiIsIm1pbGxpc2Vjb25kcyIsInBhcnNlSW50Iiwic2Vjb25kcyIsIk1hdGgiLCJmbG9vciIsIm1pbnV0ZXMiLCJob3VycyIsIm1zVG9EYXRlVGltZSIsImdlbmVyYXRlIiwibWF0Y2hlcyIsInNldE1hdGNoZXMiLCJ1c2VTdGF0ZSIsImdldE1hdGNoZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJnZXRNYXRjaCIsIm1hdGNoRGF0YSIsIndhcm4iLCJuZXdNYXRjaEluZGV4IiwiZmluZEluZGV4IiwiaXRlbSIsImRvbmUiLCJnYW1lSWQiLCJ0aGVuIiwibG9nIiwidXNlRWZmZWN0IiwibWF0Y2hfbm90X2V4dGVuZGVkIiwiT2JqZWN0IiwidmFsdWVzIiwibWFwIiwiaW5kZXgiLCJmaW5pc2hl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SUFEVCx1QkFDU0EsSUFBSSxDQUFFRSxNQURmLFVBQzJCZiw2RUFBWSxDQUFDYSxJQUFELGFBQUNBLElBQUQsdUJBQUNBLElBQUksQ0FBRVksU0FBUCxDQUR2QyxFQUVHRCxRQUFRLGlCQUFJO0FBQUE7QUFBQSw2QkFGZixTQUU2QkEsUUFBUSxHQUFHLE1BQUgsR0FBWSxVQUZqRDtBQUFBLGFBQVNELEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERjtBQU1ELFNBWEQ7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREY7QUFzQkQsQzs7Ozs7Ozs7Ozs7QUNsRUQsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoicGFnZXMvZ2VuZXJhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2dlbmVyYXRlL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RnJvbURhdGFiYXNlKHVybCkge1xyXG4gIGNvbnNvbGUudGltZSh1cmwpO1xyXG4gIGNvbnN0IGNhbGxVcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMy9cIiArIHVybDtcclxuICBjb25zb2xlLmVycm9yKGBmZXRjaCBmcm9tIHVybDogJHtjYWxsVXJsfWApO1xyXG5cclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChjYWxsVXJsKTtcclxuICBjb25zb2xlLmVycm9yKGByZXNwb25zZSBmcm9tIHVybDogYCwgcmVzcG9uc2U/LmRhdGEpO1xyXG4gIGNvbnNvbGUudGltZUVuZCh1cmwpO1xyXG5cclxuICByZXR1cm4gcmVzcG9uc2UuZGF0YSB8fCBcIk5PIERBVEFcIjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHR3b0RpZ2l0cyhuKSB7XHJcbiAgcmV0dXJuIG4gPiA5ID8gXCJcIiArIG4gOiBcIjBcIiArIG47XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtc1RvRGF0ZShtcykge1xyXG4gIGNvbnN0IG1hdGNoRGF0ZSA9IG5ldyBEYXRlKG1zKTtcclxuICB2YXIgeWVhciA9IG1hdGNoRGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gIHZhciBtb250aCA9IHR3b0RpZ2l0cyhtYXRjaERhdGUuZ2V0TW9udGgoKSk7XHJcbiAgdmFyIGRhdGUgPSB0d29EaWdpdHMobWF0Y2hEYXRlLmdldERhdGUoKSk7XHJcblxyXG4gIHJldHVybiBkYXRlICsgXCItXCIgKyBtb250aCArIFwiLVwiICsgeWVhcjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gbXNUb1RpbWUoZHVyYXRpb24pIHtcclxuICB2YXIgbWlsbGlzZWNvbmRzID0gcGFyc2VJbnQoKGR1cmF0aW9uICUgMTAwMCkgLyAxMDApLFxyXG4gICAgc2Vjb25kcyA9IE1hdGguZmxvb3IoKGR1cmF0aW9uIC8gMTAwMCkgJSA2MCksXHJcbiAgICBtaW51dGVzID0gTWF0aC5mbG9vcigoZHVyYXRpb24gLyAoMTAwMCAqIDYwKSkgJSA2MCksXHJcbiAgICBob3VycyA9IE1hdGguZmxvb3IoKGR1cmF0aW9uIC8gKDEwMDAgKiA2MCAqIDYwKSkgJSAyNCk7XHJcblxyXG4gIGhvdXJzID0gaG91cnMgPCAxMCA/IFwiMFwiICsgaG91cnMgOiBob3VycztcclxuICBtaW51dGVzID0gbWludXRlcyA8IDEwID8gXCIwXCIgKyBtaW51dGVzIDogbWludXRlcztcclxuXHJcbiAgcmV0dXJuIGhvdXJzICsgXCI6XCIgKyBtaW51dGVzO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBtc1RvRGF0ZVRpbWUobXMpIHtcclxuICByZXR1cm4gbXNUb0RhdGUobXMpICsgXCIgXCIgKyBtc1RvVGltZShtcyk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBnZXRGcm9tRGF0YWJhc2UsXHJcbiAgbXNUb0RhdGVUaW1lLFxyXG4gIG1zVG9UaW1lLFxyXG59IGZyb20gXCIuLi8uLi9tZXRob2RzL2dlbmVyYWxfbWV0aG9kc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGUoKSB7XHJcbiAgY29uc3QgW21hdGNoZXMsIHNldE1hdGNoZXNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgZ2V0TWF0Y2hlcyA9ICgpID0+IHtcclxuICAgIHJldHVybiBtYXRjaGVzO1xyXG4gIH07XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgZ2V0TWF0Y2ggPSAobWF0Y2hEYXRhID0gbnVsbCkgPT4ge1xyXG4gICAgaWYgKCFtYXRjaGVzICYmICFtYXRjaERhdGEpIHtcclxuICAgICAgY29uc29sZS53YXJuKFwibWF0Y2hlcyBub3Qgc2V0XCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgbWF0Y2hlcyA9IG1hdGNoZXM7XHJcbiAgICBpZiAoIW1hdGNoZXMpIHtcclxuICAgICAgbWF0Y2hlcyA9IG1hdGNoRGF0YTtcclxuICAgIH1cclxuICAgIGNvbnN0IG5ld01hdGNoSW5kZXggPSBtYXRjaGVzLmZpbmRJbmRleCgoaXRlbSkgPT4gIWl0ZW0/LmRvbmUpO1xyXG5cclxuICAgIGdldEZyb21EYXRhYmFzZShgbWF0Y2hlcy9nZXRtYXRjaC8ke21hdGNoZXNbbmV3TWF0Y2hJbmRleF0/LmdhbWVJZH1gKS50aGVuKFxyXG4gICAgICAoZGF0YSkgPT4ge1xyXG4gICAgICAgIG1hdGNoZXNbbmV3TWF0Y2hJbmRleF0uZG9uZSA9IHRydWU7XHJcbiAgICAgICAgY29uc29sZS5sb2cobWF0Y2hlc1tuZXdNYXRjaEluZGV4XSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cobWF0Y2hlcyk7XHJcbiAgICAgICAgc2V0TWF0Y2hlcyhtYXRjaGVzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm5ld01hdGNoIGRhdGFcIiwgZGF0YSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0RnJvbURhdGFiYXNlKGBtYXRjaGVzL3N0b3JlZC9gKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZGF0YVwiLCBkYXRhKTtcclxuICAgICAgY29uc3QgbWF0Y2hEYXRhID0gZGF0YT8ubWF0Y2hfbm90X2V4dGVuZGVkO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm1hdGNoX25vdF9leHRlbmRlZFwiLCBtYXRjaERhdGEpO1xyXG4gICAgICBzZXRNYXRjaGVzKG1hdGNoRGF0YSk7XHJcbiAgICAgIGdldE1hdGNoKG1hdGNoRGF0YSk7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAge21hdGNoZXMgJiZcclxuICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhtYXRjaGVzKS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgZmluaXNoZWQgPSBpdGVtPy5kb25lO1xyXG4gICAgICAgICAgICAgIGlmIChmaW5pc2hlZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgIEdhbWU6IHtpdGVtPy5nYW1lSWR9IG9wIHttc1RvRGF0ZVRpbWUoaXRlbT8udGltZXN0YW1wKX1cclxuICAgICAgICAgICAgICAgICAge2ZpbmlzaGVkICYmIDw+RE9ORTwvPn0gQSB7ZmluaXNoZWQgPyBcIkRvbmVcIiA6IFwiTm90IGRvbmVcIn1cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=