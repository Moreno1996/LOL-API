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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      matches = _useState[0],
      setMatches = _useState[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  var getMatches = function getMatches() {};

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    Object(_methods_general_methods__WEBPACK_IMPORTED_MODULE_4__["getFromDatabase"])("matches/stored/").then(function (data) {
      console.log("data", data);
      setMatches(data === null || data === void 0 ? void 0 : data.match_not_extended);
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jsx-2085888330",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        className: "jsx-2085888330",
        children: Object.values(matches).map(function (item, index) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: "jsx-2085888330",
            children: ["Game: ", item === null || item === void 0 ? void 0 : item.gameId, " op ", Object(_methods_general_methods__WEBPACK_IMPORTED_MODULE_4__["msToDateTime"])(item === null || item === void 0 ? void 0 : item.timestamp)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "2085888330",
      children: "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbW9yZW5cXEJ1cmVhdWJsYWRcXENvZGluZ1xcTE9MLUFQSVxcc2l0ZVxccGFnZXNcXGdlbmVyYXRlXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQ2tCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbW9yZW5cXEJ1cmVhdWJsYWRcXENvZGluZ1xcTE9MLUFQSVxcc2l0ZVxccGFnZXNcXGdlbmVyYXRlXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0RnJvbURhdGFiYXNlLFxyXG4gIG1zVG9EYXRlVGltZSxcclxuICBtc1RvVGltZSxcclxufSBmcm9tIFwiLi4vLi4vbWV0aG9kcy9nZW5lcmFsX21ldGhvZHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlKCkge1xyXG4gIGNvbnN0IFttYXRjaGVzLCBzZXRNYXRjaGVzXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgZ2V0TWF0Y2hlcyA9ICgpID0+IHt9O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRGcm9tRGF0YWJhc2UoYG1hdGNoZXMvc3RvcmVkL2ApLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJkYXRhXCIsIGRhdGEpO1xyXG4gICAgICBzZXRNYXRjaGVzKGRhdGE/Lm1hdGNoX25vdF9leHRlbmRlZCk7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAge09iamVjdC52YWx1ZXMobWF0Y2hlcykubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIEdhbWU6IHtpdGVtPy5nYW1lSWR9IG9wIHttc1RvRGF0ZVRpbWUoaXRlbT8udGltZXN0YW1wKX1cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\moren\\\\Bureaublad\\\\Coding\\\\LOL-API\\\\site\\\\pages\\\\generate\\\\index.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true);
}

_s(generate, "/Vmrfq6nb0pnZos6LIBe7oR7paM=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2VuZXJhdGUvaW5kZXguanMiXSwibmFtZXMiOlsiZ2VuZXJhdGUiLCJ1c2VTdGF0ZSIsIm1hdGNoZXMiLCJzZXRNYXRjaGVzIiwicm91dGVyIiwidXNlUm91dGVyIiwiZ2V0TWF0Y2hlcyIsInVzZUVmZmVjdCIsImdldEZyb21EYXRhYmFzZSIsInRoZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIm1hdGNoX25vdF9leHRlbmRlZCIsIk9iamVjdCIsInZhbHVlcyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImdhbWVJZCIsIm1zVG9EYXRlVGltZSIsInRpbWVzdGFtcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQU1lLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDSEMsc0RBQVEsQ0FBQyxFQUFELENBREw7QUFBQSxNQUMxQkMsT0FEMEI7QUFBQSxNQUNqQkMsVUFEaUI7O0FBR2pDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBQ0EsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTSxDQUFFLENBQTNCOztBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsb0ZBQWUsbUJBQWYsQ0FBbUNDLElBQW5DLENBQXdDLFVBQUNDLElBQUQsRUFBVTtBQUNoREMsYUFBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQkYsSUFBcEI7QUFDQVAsZ0JBQVUsQ0FBQ08sSUFBRCxhQUFDQSxJQUFELHVCQUFDQSxJQUFJLENBQUVHLGtCQUFQLENBQVY7QUFDRCxLQUhEO0FBSUQsR0FMUSxFQUtOLEVBTE0sQ0FBVDtBQU1BLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQTtBQUFBLDZCQUNFO0FBQUE7QUFBQSxrQkFDR0MsTUFBTSxDQUFDQyxNQUFQLENBQWNiLE9BQWQsRUFBdUJjLEdBQXZCLENBQTJCLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUMzQyw4QkFDRTtBQUFBO0FBQUEsaUNBQ1NELElBRFQsYUFDU0EsSUFEVCx1QkFDU0EsSUFBSSxDQUFFRSxNQURmLFVBQzJCQyw2RUFBWSxDQUFDSCxJQUFELGFBQUNBLElBQUQsdUJBQUNBLElBQUksQ0FBRUksU0FBUCxDQUR2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFLRCxTQU5BO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGO0FBZ0JEOztHQTNCdUJyQixRO1VBR1BLLHFEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2dlbmVyYXRlLjNkYzZiZjBlNWFiOWYyYmNiNThjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIGdldEZyb21EYXRhYmFzZSxcclxuICBtc1RvRGF0ZVRpbWUsXHJcbiAgbXNUb1RpbWUsXHJcbn0gZnJvbSBcIi4uLy4uL21ldGhvZHMvZ2VuZXJhbF9tZXRob2RzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5lcmF0ZSgpIHtcclxuICBjb25zdCBbbWF0Y2hlcywgc2V0TWF0Y2hlc10gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGdldE1hdGNoZXMgPSAoKSA9PiB7fTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0RnJvbURhdGFiYXNlKGBtYXRjaGVzL3N0b3JlZC9gKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZGF0YVwiLCBkYXRhKTtcclxuICAgICAgc2V0TWF0Y2hlcyhkYXRhPy5tYXRjaF9ub3RfZXh0ZW5kZWQpO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIHtPYmplY3QudmFsdWVzKG1hdGNoZXMpLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICBHYW1lOiB7aXRlbT8uZ2FtZUlkfSBvcCB7bXNUb0RhdGVUaW1lKGl0ZW0/LnRpbWVzdGFtcCl9XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9