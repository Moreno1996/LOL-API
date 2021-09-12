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
      setMatches(matchData); // setInterval(getMatch, 1200);
    });
    return function () {
      clearInterval(getMatch);
    };
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
            lineNumber: 56,
            columnNumber: 17
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "2085888330",
      children: "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbW9yZW5cXEJ1cmVhdWJsYWRcXENvZGluZ1xcTE9MLUFQSVxcc2l0ZVxccGFnZXNcXGdlbmVyYXRlXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRGtCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbW9yZW5cXEJ1cmVhdWJsYWRcXENvZGluZ1xcTE9MLUFQSVxcc2l0ZVxccGFnZXNcXGdlbmVyYXRlXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0RnJvbURhdGFiYXNlLFxyXG4gIG1zVG9EYXRlVGltZSxcclxuICBtc1RvVGltZSxcclxufSBmcm9tIFwiLi4vLi4vbWV0aG9kcy9nZW5lcmFsX21ldGhvZHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlKCkge1xyXG4gIGNvbnN0IFttYXRjaGVzLCBzZXRNYXRjaGVzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IGdldE1hdGNoZXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gbWF0Y2hlcztcclxuICB9O1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGdldE1hdGNoID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbWF0Y2hlcyA9IGdldE1hdGNoZXMoKTtcclxuICAgIGNvbnNvbGUubG9nKFwiZ2V0TWF0Y2hcIiwgbWF0Y2hlcyk7XHJcbiAgICBpZiAoIW1hdGNoZXMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbmV3TWF0Y2ggPSBtYXRjaGVzLmZpbmQoKGl0ZW0pID0+ICFpdGVtPy5kb25lKTtcclxuICAgIGdldEZyb21EYXRhYmFzZShgbWF0Y2hlcy9nZXRtYXRjaC8ke25ld01hdGNoPy5nYW1lSWR9YCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBuZXdNYXRjaC5kb25lID0gdHJ1ZTtcclxuICAgICAgY29uc29sZS5sb2coXCJuZXdNYXRjaCBkYXRhXCIsIGRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdGltZXIgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBnZXRNYXRjaCgpO1xyXG4gICAgfSwgMTIwMCk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aW1lcik7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0RnJvbURhdGFiYXNlKGBtYXRjaGVzL3N0b3JlZC9gKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZGF0YVwiLCBkYXRhKTtcclxuICAgICAgY29uc3QgbWF0Y2hEYXRhID0gZGF0YT8ubWF0Y2hfbm90X2V4dGVuZGVkO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm1hdGNoX25vdF9leHRlbmRlZFwiLCBtYXRjaERhdGEpO1xyXG4gICAgICBzZXRNYXRjaGVzKG1hdGNoRGF0YSk7XHJcblxyXG4gICAgICAvLyBzZXRJbnRlcnZhbChnZXRNYXRjaCwgMTIwMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBjbGVhckludGVydmFsKGdldE1hdGNoKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIHttYXRjaGVzICYmXHJcbiAgICAgICAgICAgIE9iamVjdC52YWx1ZXMobWF0Y2hlcykubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtPy5kb25lICYmIDw+4pyTPC8+fSBHYW1lOiB7aXRlbT8uZ2FtZUlkfSBvcHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAge21zVG9EYXRlVGltZShpdGVtPy50aW1lc3RhbXApfVxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\moren\\\\Bureaublad\\\\Coding\\\\LOL-API\\\\site\\\\pages\\\\generate\\\\index.js */"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2VuZXJhdGUvaW5kZXguanMiXSwibmFtZXMiOlsiZ2VuZXJhdGUiLCJ1c2VTdGF0ZSIsIm1hdGNoZXMiLCJzZXRNYXRjaGVzIiwiZ2V0TWF0Y2hlcyIsInJvdXRlciIsInVzZVJvdXRlciIsImdldE1hdGNoIiwiY29uc29sZSIsImxvZyIsIm5ld01hdGNoIiwiZmluZCIsIml0ZW0iLCJkb25lIiwiZ2V0RnJvbURhdGFiYXNlIiwiZ2FtZUlkIiwidGhlbiIsImRhdGEiLCJ1c2VFZmZlY3QiLCJ0aW1lciIsIndpbmRvdyIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsIm1hdGNoRGF0YSIsIm1hdGNoX25vdF9leHRlbmRlZCIsIk9iamVjdCIsInZhbHVlcyIsIm1hcCIsImluZGV4IiwibXNUb0RhdGVUaW1lIiwidGltZXN0YW1wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBTWUsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUFBOztBQUFBLGtCQUNIQyxzREFBUSxDQUFDLElBQUQsQ0FETDtBQUFBLE1BQzFCQyxPQUQwQjtBQUFBLE1BQ2pCQyxVQURpQjs7QUFFakMsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QixXQUFPRixPQUFQO0FBQ0QsR0FGRDs7QUFHQSxNQUFNRyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUNBLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckIsUUFBTUwsT0FBTyxHQUFHRSxVQUFVLEVBQTFCO0FBQ0FJLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBd0JQLE9BQXhCOztBQUNBLFFBQUksQ0FBQ0EsT0FBTCxFQUFjO0FBQ1o7QUFDRDs7QUFDRCxRQUFNUSxRQUFRLEdBQUdSLE9BQU8sQ0FBQ1MsSUFBUixDQUFhLFVBQUNDLElBQUQ7QUFBQSxhQUFVLEVBQUNBLElBQUQsYUFBQ0EsSUFBRCxlQUFDQSxJQUFJLENBQUVDLElBQVAsQ0FBVjtBQUFBLEtBQWIsQ0FBakI7QUFDQUMsb0ZBQWUsNEJBQXFCSixRQUFyQixhQUFxQkEsUUFBckIsdUJBQXFCQSxRQUFRLENBQUVLLE1BQS9CLEVBQWYsQ0FBd0RDLElBQXhELENBQTZELFVBQUNDLElBQUQsRUFBVTtBQUNyRVAsY0FBUSxDQUFDRyxJQUFULEdBQWdCLElBQWhCO0FBQ0FMLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFBNkJRLElBQTdCO0FBQ0QsS0FIRDtBQUlELEdBWEQ7O0FBWUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxXQUFQLENBQW1CLFlBQU07QUFDckNkLGNBQVE7QUFDVCxLQUZhLEVBRVgsSUFGVyxDQUFkO0FBR0EsV0FBTyxZQUFNO0FBQ1hhLFlBQU0sQ0FBQ0UsYUFBUCxDQUFxQkgsS0FBckI7QUFDRCxLQUZEO0FBR0QsR0FQUSxFQU9OLEVBUE0sQ0FBVDtBQVFBRCx5REFBUyxDQUFDLFlBQU07QUFDZEosb0ZBQWUsbUJBQWYsQ0FBbUNFLElBQW5DLENBQXdDLFVBQUNDLElBQUQsRUFBVTtBQUNoRFQsYUFBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQlEsSUFBcEI7QUFDQSxVQUFNTSxTQUFTLEdBQUdOLElBQUgsYUFBR0EsSUFBSCx1QkFBR0EsSUFBSSxDQUFFTyxrQkFBeEI7QUFDQWhCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaLEVBQWtDYyxTQUFsQztBQUNBcEIsZ0JBQVUsQ0FBQ29CLFNBQUQsQ0FBVixDQUpnRCxDQU1oRDtBQUNELEtBUEQ7QUFTQSxXQUFPLFlBQU07QUFDWEQsbUJBQWEsQ0FBQ2YsUUFBRCxDQUFiO0FBQ0QsS0FGRDtBQUdELEdBYlEsRUFhTixFQWJNLENBQVQ7QUFjQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUE7QUFBQSw2QkFDRTtBQUFBO0FBQUEsa0JBQ0dMLE9BQU8sSUFDTnVCLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjeEIsT0FBZCxFQUF1QnlCLEdBQXZCLENBQTJCLFVBQUNmLElBQUQsRUFBT2dCLEtBQVAsRUFBaUI7QUFDMUMsOEJBQ0U7QUFBQTtBQUFBLHVCQUNHLENBQUFoQixJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLFlBQUFBLElBQUksQ0FBRUMsSUFBTixrQkFBYztBQUFBO0FBQUEsNkJBRGpCLGFBQ2dDRCxJQURoQyxhQUNnQ0EsSUFEaEMsdUJBQ2dDQSxJQUFJLENBQUVHLE1BRHRDLFNBQ2lELEdBRGpELEVBRUdjLDZFQUFZLENBQUNqQixJQUFELGFBQUNBLElBQUQsdUJBQUNBLElBQUksQ0FBRWtCLFNBQVAsQ0FGZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFNRCxTQVBEO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGO0FBa0JEOztHQTFEdUI5QixRO1VBS1BNLHFEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2dlbmVyYXRlLmI3YzY5NTBiM2RiYjI0YWRjNDRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIGdldEZyb21EYXRhYmFzZSxcclxuICBtc1RvRGF0ZVRpbWUsXHJcbiAgbXNUb1RpbWUsXHJcbn0gZnJvbSBcIi4uLy4uL21ldGhvZHMvZ2VuZXJhbF9tZXRob2RzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5lcmF0ZSgpIHtcclxuICBjb25zdCBbbWF0Y2hlcywgc2V0TWF0Y2hlc10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBnZXRNYXRjaGVzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIG1hdGNoZXM7XHJcbiAgfTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBnZXRNYXRjaCA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1hdGNoZXMgPSBnZXRNYXRjaGVzKCk7XHJcbiAgICBjb25zb2xlLmxvZyhcImdldE1hdGNoXCIsIG1hdGNoZXMpO1xyXG4gICAgaWYgKCFtYXRjaGVzKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IG5ld01hdGNoID0gbWF0Y2hlcy5maW5kKChpdGVtKSA9PiAhaXRlbT8uZG9uZSk7XHJcbiAgICBnZXRGcm9tRGF0YWJhc2UoYG1hdGNoZXMvZ2V0bWF0Y2gvJHtuZXdNYXRjaD8uZ2FtZUlkfWApLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgbmV3TWF0Y2guZG9uZSA9IHRydWU7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibmV3TWF0Y2ggZGF0YVwiLCBkYXRhKTtcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHRpbWVyID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgZ2V0TWF0Y2goKTtcclxuICAgIH0sIDEyMDApO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGltZXIpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldEZyb21EYXRhYmFzZShgbWF0Y2hlcy9zdG9yZWQvYCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImRhdGFcIiwgZGF0YSk7XHJcbiAgICAgIGNvbnN0IG1hdGNoRGF0YSA9IGRhdGE/Lm1hdGNoX25vdF9leHRlbmRlZDtcclxuICAgICAgY29uc29sZS5sb2coXCJtYXRjaF9ub3RfZXh0ZW5kZWRcIiwgbWF0Y2hEYXRhKTtcclxuICAgICAgc2V0TWF0Y2hlcyhtYXRjaERhdGEpO1xyXG5cclxuICAgICAgLy8gc2V0SW50ZXJ2YWwoZ2V0TWF0Y2gsIDEyMDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgY2xlYXJJbnRlcnZhbChnZXRNYXRjaCk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICB7bWF0Y2hlcyAmJlxyXG4gICAgICAgICAgICBPYmplY3QudmFsdWVzKG1hdGNoZXMpLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICB7aXRlbT8uZG9uZSAmJiA8PuKckzwvPn0gR2FtZToge2l0ZW0/LmdhbWVJZH0gb3B7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIHttc1RvRGF0ZVRpbWUoaXRlbT8udGltZXN0YW1wKX1cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=