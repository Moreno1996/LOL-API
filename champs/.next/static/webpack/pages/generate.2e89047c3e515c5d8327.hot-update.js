webpackHotUpdate_N_E("pages/generate",{

/***/ "./pages/generate/index.js":
/*!*********************************!*\
  !*** ./pages/generate/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return generate; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _methods_general_methods__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../methods/general_methods */ "./methods/general_methods.js");



var _jsxFileName = "C:\\Users\\moren\\Bureaublad\\Coding\\LOL-API\\site\\pages\\generate\\index.js",
    _s = $RefreshSig$();





function generate() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      matches = _useState[0],
      setMatches = _useState[1];

  var getMatches = function getMatches() {
    return matches;
  };

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  var getMatch = function getMatch() {
    var matches = getMatches();
    console.log("getMatch", matches);

    if (!matches) {
      return;
    }

    var newMatch = matches.find(function (item) {
      return !(item !== null && item !== void 0 && item.done);
    });
    console.log("newMatch", newMatch);
    Object(_methods_general_methods__WEBPACK_IMPORTED_MODULE_4__["getFromDatabase"])("matches/getmatch/".concat(newMatch === null || newMatch === void 0 ? void 0 : newMatch.gameId)).then(function (data) {
      newMatch.done = true;
      console.log("newMatch data", data);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var timer = window.setInterval(function () {
      getMatch();
    }, 1200);
    return function () {
      window.clearInterval(timer);
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    Object(_methods_general_methods__WEBPACK_IMPORTED_MODULE_4__["getFromDatabase"])("matches/stored/").then(function (data) {
      console.log("data", data);
      var matchData = data === null || data === void 0 ? void 0 : data.match_not_extended;
      console.log("match_not_extended", matchData);
      setMatches(matchData);
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jsx-2085888330",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        className: "jsx-2085888330",
        children: matches && Object.values(matches).map(function (item, index) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: "jsx-2085888330",
            children: [(item === null || item === void 0 ? void 0 : item.done) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
              children: "\u2713"
            }, void 0, false), " Game: ", item === null || item === void 0 ? void 0 : item.gameId, " op", " ", Object(_methods_general_methods__WEBPACK_IMPORTED_MODULE_4__["msToDateTime"])(item === null || item === void 0 ? void 0 : item.timestamp)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 17
          }, _this);
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
      children: "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbW9yZW5cXEJ1cmVhdWJsYWRcXENvZGluZ1xcTE9MLUFQSVxcc2l0ZVxccGFnZXNcXGdlbmVyYXRlXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRGtCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbW9yZW5cXEJ1cmVhdWJsYWRcXENvZGluZ1xcTE9MLUFQSVxcc2l0ZVxccGFnZXNcXGdlbmVyYXRlXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0RnJvbURhdGFiYXNlLFxyXG4gIG1zVG9EYXRlVGltZSxcclxuICBtc1RvVGltZSxcclxufSBmcm9tIFwiLi4vLi4vbWV0aG9kcy9nZW5lcmFsX21ldGhvZHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlKCkge1xyXG4gIGNvbnN0IFttYXRjaGVzLCBzZXRNYXRjaGVzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IGdldE1hdGNoZXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gbWF0Y2hlcztcclxuICB9O1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGdldE1hdGNoID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbWF0Y2hlcyA9IGdldE1hdGNoZXMoKTtcclxuICAgIGNvbnNvbGUubG9nKFwiZ2V0TWF0Y2hcIiwgbWF0Y2hlcyk7XHJcbiAgICBpZiAoIW1hdGNoZXMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbmV3TWF0Y2ggPSBtYXRjaGVzLmZpbmQoKGl0ZW0pID0+ICFpdGVtPy5kb25lKTtcclxuICAgIGNvbnNvbGUubG9nKFwibmV3TWF0Y2hcIiwgbmV3TWF0Y2gpO1xyXG5cclxuICAgIGdldEZyb21EYXRhYmFzZShgbWF0Y2hlcy9nZXRtYXRjaC8ke25ld01hdGNoPy5nYW1lSWR9YCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBuZXdNYXRjaC5kb25lID0gdHJ1ZTtcclxuICAgICAgY29uc29sZS5sb2coXCJuZXdNYXRjaCBkYXRhXCIsIGRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdGltZXIgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBnZXRNYXRjaCgpO1xyXG4gICAgfSwgMTIwMCk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aW1lcik7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0RnJvbURhdGFiYXNlKGBtYXRjaGVzL3N0b3JlZC9gKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZGF0YVwiLCBkYXRhKTtcclxuICAgICAgY29uc3QgbWF0Y2hEYXRhID0gZGF0YT8ubWF0Y2hfbm90X2V4dGVuZGVkO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm1hdGNoX25vdF9leHRlbmRlZFwiLCBtYXRjaERhdGEpO1xyXG4gICAgICBzZXRNYXRjaGVzKG1hdGNoRGF0YSk7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAge21hdGNoZXMgJiZcclxuICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhtYXRjaGVzKS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0/LmRvbmUgJiYgPD7inJM8Lz59IEdhbWU6IHtpdGVtPy5nYW1lSWR9IG9we1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICB7bXNUb0RhdGVUaW1lKGl0ZW0/LnRpbWVzdGFtcCl9XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\moren\\\\Bureaublad\\\\Coding\\\\LOL-API\\\\site\\\\pages\\\\generate\\\\index.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true);
}

_s(generate, "Orkrg+aaiVghedtnNEQPSV6RbiU=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2VuZXJhdGUvaW5kZXguanMiXSwibmFtZXMiOlsiZ2VuZXJhdGUiLCJ1c2VTdGF0ZSIsIm1hdGNoZXMiLCJzZXRNYXRjaGVzIiwiZ2V0TWF0Y2hlcyIsInJvdXRlciIsInVzZVJvdXRlciIsImdldE1hdGNoIiwiY29uc29sZSIsImxvZyIsIm5ld01hdGNoIiwiZmluZCIsIml0ZW0iLCJkb25lIiwiZ2V0RnJvbURhdGFiYXNlIiwiZ2FtZUlkIiwidGhlbiIsImRhdGEiLCJ1c2VFZmZlY3QiLCJ0aW1lciIsIndpbmRvdyIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsIm1hdGNoRGF0YSIsIm1hdGNoX25vdF9leHRlbmRlZCIsIk9iamVjdCIsInZhbHVlcyIsIm1hcCIsImluZGV4IiwibXNUb0RhdGVUaW1lIiwidGltZXN0YW1wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBTWUsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUFBOztBQUFBLGtCQUNIQyxzREFBUSxDQUFDLElBQUQsQ0FETDtBQUFBLE1BQzFCQyxPQUQwQjtBQUFBLE1BQ2pCQyxVQURpQjs7QUFFakMsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QixXQUFPRixPQUFQO0FBQ0QsR0FGRDs7QUFHQSxNQUFNRyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUNBLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckIsUUFBTUwsT0FBTyxHQUFHRSxVQUFVLEVBQTFCO0FBQ0FJLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBd0JQLE9BQXhCOztBQUNBLFFBQUksQ0FBQ0EsT0FBTCxFQUFjO0FBQ1o7QUFDRDs7QUFDRCxRQUFNUSxRQUFRLEdBQUdSLE9BQU8sQ0FBQ1MsSUFBUixDQUFhLFVBQUNDLElBQUQ7QUFBQSxhQUFVLEVBQUNBLElBQUQsYUFBQ0EsSUFBRCxlQUFDQSxJQUFJLENBQUVDLElBQVAsQ0FBVjtBQUFBLEtBQWIsQ0FBakI7QUFDQUwsV0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QkMsUUFBeEI7QUFFQUksb0ZBQWUsNEJBQXFCSixRQUFyQixhQUFxQkEsUUFBckIsdUJBQXFCQSxRQUFRLENBQUVLLE1BQS9CLEVBQWYsQ0FBd0RDLElBQXhELENBQTZELFVBQUNDLElBQUQsRUFBVTtBQUNyRVAsY0FBUSxDQUFDRyxJQUFULEdBQWdCLElBQWhCO0FBQ0FMLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFBNkJRLElBQTdCO0FBQ0QsS0FIRDtBQUlELEdBYkQ7O0FBY0FDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxXQUFQLENBQW1CLFlBQU07QUFDckNkLGNBQVE7QUFDVCxLQUZhLEVBRVgsSUFGVyxDQUFkO0FBR0EsV0FBTyxZQUFNO0FBQ1hhLFlBQU0sQ0FBQ0UsYUFBUCxDQUFxQkgsS0FBckI7QUFDRCxLQUZEO0FBR0QsR0FQUSxFQU9OLEVBUE0sQ0FBVDtBQVFBRCx5REFBUyxDQUFDLFlBQU07QUFDZEosb0ZBQWUsbUJBQWYsQ0FBbUNFLElBQW5DLENBQXdDLFVBQUNDLElBQUQsRUFBVTtBQUNoRFQsYUFBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQlEsSUFBcEI7QUFDQSxVQUFNTSxTQUFTLEdBQUdOLElBQUgsYUFBR0EsSUFBSCx1QkFBR0EsSUFBSSxDQUFFTyxrQkFBeEI7QUFDQWhCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaLEVBQWtDYyxTQUFsQztBQUNBcEIsZ0JBQVUsQ0FBQ29CLFNBQUQsQ0FBVjtBQUNELEtBTEQ7QUFNRCxHQVBRLEVBT04sRUFQTSxDQUFUO0FBUUEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFBO0FBQUEsNkJBQ0U7QUFBQTtBQUFBLGtCQUNHckIsT0FBTyxJQUNOdUIsTUFBTSxDQUFDQyxNQUFQLENBQWN4QixPQUFkLEVBQXVCeUIsR0FBdkIsQ0FBMkIsVUFBQ2YsSUFBRCxFQUFPZ0IsS0FBUCxFQUFpQjtBQUMxQyw4QkFDRTtBQUFBO0FBQUEsdUJBQ0csQ0FBQWhCLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosWUFBQUEsSUFBSSxDQUFFQyxJQUFOLGtCQUFjO0FBQUE7QUFBQSw2QkFEakIsYUFDZ0NELElBRGhDLGFBQ2dDQSxJQURoQyx1QkFDZ0NBLElBQUksQ0FBRUcsTUFEdEMsU0FDaUQsR0FEakQsRUFFR2MsNkVBQVksQ0FBQ2pCLElBQUQsYUFBQ0EsSUFBRCx1QkFBQ0EsSUFBSSxDQUFFa0IsU0FBUCxDQUZmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQU1ELFNBUEQ7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREY7QUFrQkQ7O0dBdER1QjlCLFE7VUFLUE0scUQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2VuZXJhdGUuMmU4OTA0N2MzZTUxNWM1ZDgzMjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0RnJvbURhdGFiYXNlLFxyXG4gIG1zVG9EYXRlVGltZSxcclxuICBtc1RvVGltZSxcclxufSBmcm9tIFwiLi4vLi4vbWV0aG9kcy9nZW5lcmFsX21ldGhvZHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlKCkge1xyXG4gIGNvbnN0IFttYXRjaGVzLCBzZXRNYXRjaGVzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IGdldE1hdGNoZXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gbWF0Y2hlcztcclxuICB9O1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGdldE1hdGNoID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbWF0Y2hlcyA9IGdldE1hdGNoZXMoKTtcclxuICAgIGNvbnNvbGUubG9nKFwiZ2V0TWF0Y2hcIiwgbWF0Y2hlcyk7XHJcbiAgICBpZiAoIW1hdGNoZXMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbmV3TWF0Y2ggPSBtYXRjaGVzLmZpbmQoKGl0ZW0pID0+ICFpdGVtPy5kb25lKTtcclxuICAgIGNvbnNvbGUubG9nKFwibmV3TWF0Y2hcIiwgbmV3TWF0Y2gpO1xyXG5cclxuICAgIGdldEZyb21EYXRhYmFzZShgbWF0Y2hlcy9nZXRtYXRjaC8ke25ld01hdGNoPy5nYW1lSWR9YCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBuZXdNYXRjaC5kb25lID0gdHJ1ZTtcclxuICAgICAgY29uc29sZS5sb2coXCJuZXdNYXRjaCBkYXRhXCIsIGRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdGltZXIgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBnZXRNYXRjaCgpO1xyXG4gICAgfSwgMTIwMCk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aW1lcik7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0RnJvbURhdGFiYXNlKGBtYXRjaGVzL3N0b3JlZC9gKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZGF0YVwiLCBkYXRhKTtcclxuICAgICAgY29uc3QgbWF0Y2hEYXRhID0gZGF0YT8ubWF0Y2hfbm90X2V4dGVuZGVkO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm1hdGNoX25vdF9leHRlbmRlZFwiLCBtYXRjaERhdGEpO1xyXG4gICAgICBzZXRNYXRjaGVzKG1hdGNoRGF0YSk7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAge21hdGNoZXMgJiZcclxuICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhtYXRjaGVzKS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0/LmRvbmUgJiYgPD7inJM8Lz59IEdhbWU6IHtpdGVtPy5nYW1lSWR9IG9we1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICB7bXNUb0RhdGVUaW1lKGl0ZW0/LnRpbWVzdGFtcCl9XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9