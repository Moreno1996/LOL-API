webpackHotUpdate_N_E("pages/generate",{

/***/ "./methods/general_methods.js":
/*!************************************!*\
  !*** ./methods/general_methods.js ***!
  \************************************/
/*! exports provided: getFromDatabase, twoDigits, msToDate, msToTime, msToDateTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFromDatabase", function() { return getFromDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "twoDigits", function() { return twoDigits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "msToDate", function() { return msToDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "msToTime", function() { return msToTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "msToDateTime", function() { return msToDateTime; });
/* harmony import */ var C_Users_moren_Bureaublad_Coding_LOL_API_site_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_moren_Bureaublad_Coding_LOL_API_site_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_moren_Bureaublad_Coding_LOL_API_site_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_moren_Bureaublad_Coding_LOL_API_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



function getFromDatabase(_x) {
  return _getFromDatabase.apply(this, arguments);
}

function _getFromDatabase() {
  _getFromDatabase = Object(C_Users_moren_Bureaublad_Coding_LOL_API_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_moren_Bureaublad_Coding_LOL_API_site_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(url) {
    var callUrl, response;
    return C_Users_moren_Bureaublad_Coding_LOL_API_site_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.time(url);
            callUrl = "http://localhost:3003/" + url;
            console.error("fetch from url: ".concat(callUrl));
            _context.next = 5;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(callUrl);

          case 5:
            response = _context.sent;
            console.error("response from url: ", response === null || response === void 0 ? void 0 : response.data);
            console.timeEnd(url);
            return _context.abrupt("return", response.data || "NO DATA");

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getFromDatabase.apply(this, arguments);
}

function twoDigits(n) {
  return n > 9 ? "" + n : "0" + n;
}
function msToDate(ms) {
  var matchDate = new Date(ms);
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

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbWV0aG9kcy9nZW5lcmFsX21ldGhvZHMuanMiXSwibmFtZXMiOlsiZ2V0RnJvbURhdGFiYXNlIiwidXJsIiwiY29uc29sZSIsInRpbWUiLCJjYWxsVXJsIiwiZXJyb3IiLCJheGlvcyIsImdldCIsInJlc3BvbnNlIiwiZGF0YSIsInRpbWVFbmQiLCJ0d29EaWdpdHMiLCJuIiwibXNUb0RhdGUiLCJtcyIsIm1hdGNoRGF0ZSIsIkRhdGUiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsImdldE1vbnRoIiwiZGF0ZSIsImdldERhdGUiLCJtc1RvVGltZSIsImR1cmF0aW9uIiwibWlsbGlzZWNvbmRzIiwicGFyc2VJbnQiLCJzZWNvbmRzIiwiTWF0aCIsImZsb29yIiwibWludXRlcyIsImhvdXJzIiwibXNUb0RhdGVUaW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ08sU0FBZUEsZUFBdEI7QUFBQTtBQUFBOzs7d1RBQU8saUJBQStCQyxHQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTEMsbUJBQU8sQ0FBQ0MsSUFBUixDQUFhRixHQUFiO0FBQ01HLG1CQUZELEdBRVcsMkJBQTJCSCxHQUZ0QztBQUdMQyxtQkFBTyxDQUFDRyxLQUFSLDJCQUFpQ0QsT0FBakM7QUFISztBQUFBLG1CQUtrQkUsNENBQUssQ0FBQ0MsR0FBTixDQUFVSCxPQUFWLENBTGxCOztBQUFBO0FBS0NJLG9CQUxEO0FBTUxOLG1CQUFPLENBQUNHLEtBQVIsd0JBQXFDRyxRQUFyQyxhQUFxQ0EsUUFBckMsdUJBQXFDQSxRQUFRLENBQUVDLElBQS9DO0FBQ0FQLG1CQUFPLENBQUNRLE9BQVIsQ0FBZ0JULEdBQWhCO0FBUEssNkNBU0VPLFFBQVEsQ0FBQ0MsSUFBVCxJQUFpQixTQVRuQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBWUEsU0FBU0UsU0FBVCxDQUFtQkMsQ0FBbkIsRUFBc0I7QUFDM0IsU0FBT0EsQ0FBQyxHQUFHLENBQUosR0FBUSxLQUFLQSxDQUFiLEdBQWlCLE1BQU1BLENBQTlCO0FBQ0Q7QUFFTSxTQUFTQyxRQUFULENBQWtCQyxFQUFsQixFQUFzQjtBQUMzQixNQUFNQyxTQUFTLEdBQUcsSUFBSUMsSUFBSixDQUFTRixFQUFULENBQWxCO0FBQ0EsTUFBSUcsSUFBSSxHQUFHRixTQUFTLENBQUNHLFdBQVYsRUFBWDtBQUNBLE1BQUlDLEtBQUssR0FBR1IsU0FBUyxDQUFDSSxTQUFTLENBQUNLLFFBQVYsRUFBRCxDQUFyQjtBQUNBLE1BQUlDLElBQUksR0FBR1YsU0FBUyxDQUFDSSxTQUFTLENBQUNPLE9BQVYsRUFBRCxDQUFwQjtBQUVBLFNBQU9ELElBQUksR0FBRyxHQUFQLEdBQWFGLEtBQWIsR0FBcUIsR0FBckIsR0FBMkJGLElBQWxDO0FBQ0Q7QUFDTSxTQUFTTSxRQUFULENBQWtCQyxRQUFsQixFQUE0QjtBQUNqQyxNQUFJQyxZQUFZLEdBQUdDLFFBQVEsQ0FBRUYsUUFBUSxHQUFHLElBQVosR0FBb0IsR0FBckIsQ0FBM0I7QUFBQSxNQUNFRyxPQUFPLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFZTCxRQUFRLEdBQUcsSUFBWixHQUFvQixFQUEvQixDQURaO0FBQUEsTUFFRU0sT0FBTyxHQUFHRixJQUFJLENBQUNDLEtBQUwsQ0FBWUwsUUFBUSxJQUFJLE9BQU8sRUFBWCxDQUFULEdBQTJCLEVBQXRDLENBRlo7QUFBQSxNQUdFTyxLQUFLLEdBQUdILElBQUksQ0FBQ0MsS0FBTCxDQUFZTCxRQUFRLElBQUksT0FBTyxFQUFQLEdBQVksRUFBaEIsQ0FBVCxHQUFnQyxFQUEzQyxDQUhWO0FBS0FPLE9BQUssR0FBR0EsS0FBSyxHQUFHLEVBQVIsR0FBYSxNQUFNQSxLQUFuQixHQUEyQkEsS0FBbkM7QUFDQUQsU0FBTyxHQUFHQSxPQUFPLEdBQUcsRUFBVixHQUFlLE1BQU1BLE9BQXJCLEdBQStCQSxPQUF6QztBQUVBLFNBQU9DLEtBQUssR0FBRyxHQUFSLEdBQWNELE9BQXJCO0FBQ0Q7QUFDTSxTQUFTRSxZQUFULENBQXNCbEIsRUFBdEIsRUFBMEI7QUFDL0IsU0FBT0QsUUFBUSxDQUFDQyxFQUFELENBQVIsR0FBZSxHQUFmLEdBQXFCUyxRQUFRLENBQUNULEVBQUQsQ0FBcEM7QUFDRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9nZW5lcmF0ZS5jYmRjMDM0OGZkOTUzMDk4MzhhYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RnJvbURhdGFiYXNlKHVybCkge1xyXG4gIGNvbnNvbGUudGltZSh1cmwpO1xyXG4gIGNvbnN0IGNhbGxVcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMy9cIiArIHVybDtcclxuICBjb25zb2xlLmVycm9yKGBmZXRjaCBmcm9tIHVybDogJHtjYWxsVXJsfWApO1xyXG5cclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChjYWxsVXJsKTtcclxuICBjb25zb2xlLmVycm9yKGByZXNwb25zZSBmcm9tIHVybDogYCwgcmVzcG9uc2U/LmRhdGEpO1xyXG4gIGNvbnNvbGUudGltZUVuZCh1cmwpO1xyXG5cclxuICByZXR1cm4gcmVzcG9uc2UuZGF0YSB8fCBcIk5PIERBVEFcIjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHR3b0RpZ2l0cyhuKSB7XHJcbiAgcmV0dXJuIG4gPiA5ID8gXCJcIiArIG4gOiBcIjBcIiArIG47XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtc1RvRGF0ZShtcykge1xyXG4gIGNvbnN0IG1hdGNoRGF0ZSA9IG5ldyBEYXRlKG1zKTtcclxuICB2YXIgeWVhciA9IG1hdGNoRGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gIHZhciBtb250aCA9IHR3b0RpZ2l0cyhtYXRjaERhdGUuZ2V0TW9udGgoKSk7XHJcbiAgdmFyIGRhdGUgPSB0d29EaWdpdHMobWF0Y2hEYXRlLmdldERhdGUoKSk7XHJcblxyXG4gIHJldHVybiBkYXRlICsgXCItXCIgKyBtb250aCArIFwiLVwiICsgeWVhcjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gbXNUb1RpbWUoZHVyYXRpb24pIHtcclxuICB2YXIgbWlsbGlzZWNvbmRzID0gcGFyc2VJbnQoKGR1cmF0aW9uICUgMTAwMCkgLyAxMDApLFxyXG4gICAgc2Vjb25kcyA9IE1hdGguZmxvb3IoKGR1cmF0aW9uIC8gMTAwMCkgJSA2MCksXHJcbiAgICBtaW51dGVzID0gTWF0aC5mbG9vcigoZHVyYXRpb24gLyAoMTAwMCAqIDYwKSkgJSA2MCksXHJcbiAgICBob3VycyA9IE1hdGguZmxvb3IoKGR1cmF0aW9uIC8gKDEwMDAgKiA2MCAqIDYwKSkgJSAyNCk7XHJcblxyXG4gIGhvdXJzID0gaG91cnMgPCAxMCA/IFwiMFwiICsgaG91cnMgOiBob3VycztcclxuICBtaW51dGVzID0gbWludXRlcyA8IDEwID8gXCIwXCIgKyBtaW51dGVzIDogbWludXRlcztcclxuXHJcbiAgcmV0dXJuIGhvdXJzICsgXCI6XCIgKyBtaW51dGVzO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBtc1RvRGF0ZVRpbWUobXMpIHtcclxuICByZXR1cm4gbXNUb0RhdGUobXMpICsgXCIgXCIgKyBtc1RvVGltZShtcyk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==