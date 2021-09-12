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

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  var getMatches = function getMatches() {};

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    Object(_methods_general_methods__WEBPACK_IMPORTED_MODULE_4__["getFromDatabase"])("matches/stored/").then(function (data) {
      console.log("data", data);
      setMatches(data === null || data === void 0 ? void 0 : data.match_not_extended);
      console.log("match_not_extended", data === null || data === void 0 ? void 0 : data.match_not_extended);
      setInterval(function () {
        console.log(matches);

        if (!matches) {
          console.log("matches not yet set");
          return;
        }

        var newMatch = matches.find(function (item) {
          return !(item !== null && item !== void 0 && item.done);
        });
        Object(_methods_general_methods__WEBPACK_IMPORTED_MODULE_4__["getFromDatabase"])("matches/getmatch/".concat(newMatch === null || newMatch === void 0 ? void 0 : newMatch.gameId)).then(function (data) {
          newMatch.done = true;
          console.log("newMatch data", data);
        });
      }, 1200);
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
            lineNumber: 43,
            columnNumber: 17
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "2085888330",
      children: "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbW9yZW5cXEJ1cmVhdWJsYWRcXENvZGluZ1xcTE9MLUFQSVxcc2l0ZVxccGFnZXNcXGdlbmVyYXRlXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRGtCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbW9yZW5cXEJ1cmVhdWJsYWRcXENvZGluZ1xcTE9MLUFQSVxcc2l0ZVxccGFnZXNcXGdlbmVyYXRlXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0RnJvbURhdGFiYXNlLFxyXG4gIG1zVG9EYXRlVGltZSxcclxuICBtc1RvVGltZSxcclxufSBmcm9tIFwiLi4vLi4vbWV0aG9kcy9nZW5lcmFsX21ldGhvZHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlKCkge1xyXG4gIGNvbnN0IFttYXRjaGVzLCBzZXRNYXRjaGVzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBnZXRNYXRjaGVzID0gKCkgPT4ge307XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRGcm9tRGF0YWJhc2UoYG1hdGNoZXMvc3RvcmVkL2ApLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJkYXRhXCIsIGRhdGEpO1xyXG4gICAgICBzZXRNYXRjaGVzKGRhdGE/Lm1hdGNoX25vdF9leHRlbmRlZCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibWF0Y2hfbm90X2V4dGVuZGVkXCIsIGRhdGE/Lm1hdGNoX25vdF9leHRlbmRlZCk7XHJcblxyXG4gICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cobWF0Y2hlcyk7XHJcblxyXG4gICAgICAgIGlmICghbWF0Y2hlcykge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJtYXRjaGVzIG5vdCB5ZXQgc2V0XCIpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBuZXdNYXRjaCA9IG1hdGNoZXMuZmluZCgoaXRlbSkgPT4gIWl0ZW0/LmRvbmUpO1xyXG4gICAgICAgIGdldEZyb21EYXRhYmFzZShgbWF0Y2hlcy9nZXRtYXRjaC8ke25ld01hdGNoPy5nYW1lSWR9YCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgbmV3TWF0Y2guZG9uZSA9IHRydWU7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIm5ld01hdGNoIGRhdGFcIiwgZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sIDEyMDApO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIHttYXRjaGVzICYmXHJcbiAgICAgICAgICAgIE9iamVjdC52YWx1ZXMobWF0Y2hlcykubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtPy5kb25lICYmIDw+4pyTPC8+fSBHYW1lOiB7aXRlbT8uZ2FtZUlkfSBvcHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAge21zVG9EYXRlVGltZShpdGVtPy50aW1lc3RhbXApfVxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\moren\\\\Bureaublad\\\\Coding\\\\LOL-API\\\\site\\\\pages\\\\generate\\\\index.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true);
}

_s(generate, "FXgbxc1lXtl5CqjQ0PBaM+BTOSM=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2VuZXJhdGUvaW5kZXguanMiXSwibmFtZXMiOlsiZ2VuZXJhdGUiLCJ1c2VTdGF0ZSIsIm1hdGNoZXMiLCJzZXRNYXRjaGVzIiwicm91dGVyIiwidXNlUm91dGVyIiwiZ2V0TWF0Y2hlcyIsInVzZUVmZmVjdCIsImdldEZyb21EYXRhYmFzZSIsInRoZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIm1hdGNoX25vdF9leHRlbmRlZCIsInNldEludGVydmFsIiwibmV3TWF0Y2giLCJmaW5kIiwiaXRlbSIsImRvbmUiLCJnYW1lSWQiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXAiLCJpbmRleCIsIm1zVG9EYXRlVGltZSIsInRpbWVzdGFtcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQU1lLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDSEMsc0RBQVEsQ0FBQyxJQUFELENBREw7QUFBQSxNQUMxQkMsT0FEMEI7QUFBQSxNQUNqQkMsVUFEaUI7O0FBR2pDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBQ0EsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTSxDQUFFLENBQTNCOztBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsb0ZBQWUsbUJBQWYsQ0FBbUNDLElBQW5DLENBQXdDLFVBQUNDLElBQUQsRUFBVTtBQUNoREMsYUFBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQkYsSUFBcEI7QUFDQVAsZ0JBQVUsQ0FBQ08sSUFBRCxhQUFDQSxJQUFELHVCQUFDQSxJQUFJLENBQUVHLGtCQUFQLENBQVY7QUFDQUYsYUFBTyxDQUFDQyxHQUFSLENBQVksb0JBQVosRUFBa0NGLElBQWxDLGFBQWtDQSxJQUFsQyx1QkFBa0NBLElBQUksQ0FBRUcsa0JBQXhDO0FBRUFDLGlCQUFXLENBQUMsWUFBTTtBQUNoQkgsZUFBTyxDQUFDQyxHQUFSLENBQVlWLE9BQVo7O0FBRUEsWUFBSSxDQUFDQSxPQUFMLEVBQWM7QUFDWlMsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFaO0FBQ0E7QUFDRDs7QUFDRCxZQUFNRyxRQUFRLEdBQUdiLE9BQU8sQ0FBQ2MsSUFBUixDQUFhLFVBQUNDLElBQUQ7QUFBQSxpQkFBVSxFQUFDQSxJQUFELGFBQUNBLElBQUQsZUFBQ0EsSUFBSSxDQUFFQyxJQUFQLENBQVY7QUFBQSxTQUFiLENBQWpCO0FBQ0FWLHdGQUFlLDRCQUFxQk8sUUFBckIsYUFBcUJBLFFBQXJCLHVCQUFxQkEsUUFBUSxDQUFFSSxNQUEvQixFQUFmLENBQXdEVixJQUF4RCxDQUE2RCxVQUFDQyxJQUFELEVBQVU7QUFDckVLLGtCQUFRLENBQUNHLElBQVQsR0FBZ0IsSUFBaEI7QUFDQVAsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFBNkJGLElBQTdCO0FBQ0QsU0FIRDtBQUlELE9BWlUsRUFZUixJQVpRLENBQVg7QUFhRCxLQWxCRDtBQW1CRCxHQXBCUSxFQW9CTixFQXBCTSxDQUFUO0FBcUJBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQTtBQUFBLDZCQUNFO0FBQUE7QUFBQSxrQkFDR1IsT0FBTyxJQUNOa0IsTUFBTSxDQUFDQyxNQUFQLENBQWNuQixPQUFkLEVBQXVCb0IsR0FBdkIsQ0FBMkIsVUFBQ0wsSUFBRCxFQUFPTSxLQUFQLEVBQWlCO0FBQzFDLDhCQUNFO0FBQUE7QUFBQSx1QkFDRyxDQUFBTixJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLFlBQUFBLElBQUksQ0FBRUMsSUFBTixrQkFBYztBQUFBO0FBQUEsNkJBRGpCLGFBQ2dDRCxJQURoQyxhQUNnQ0EsSUFEaEMsdUJBQ2dDQSxJQUFJLENBQUVFLE1BRHRDLFNBQ2lELEdBRGpELEVBRUdLLDZFQUFZLENBQUNQLElBQUQsYUFBQ0EsSUFBRCx1QkFBQ0EsSUFBSSxDQUFFUSxTQUFQLENBRmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBTUQsU0FQRDtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERjtBQWtCRDs7R0E3Q3VCekIsUTtVQUdQSyxxRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9nZW5lcmF0ZS45MGNlMDA4ZjYwMjEwYTgzMmIyMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBnZXRGcm9tRGF0YWJhc2UsXHJcbiAgbXNUb0RhdGVUaW1lLFxyXG4gIG1zVG9UaW1lLFxyXG59IGZyb20gXCIuLi8uLi9tZXRob2RzL2dlbmVyYWxfbWV0aG9kc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGUoKSB7XHJcbiAgY29uc3QgW21hdGNoZXMsIHNldE1hdGNoZXNdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGdldE1hdGNoZXMgPSAoKSA9PiB7fTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldEZyb21EYXRhYmFzZShgbWF0Y2hlcy9zdG9yZWQvYCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImRhdGFcIiwgZGF0YSk7XHJcbiAgICAgIHNldE1hdGNoZXMoZGF0YT8ubWF0Y2hfbm90X2V4dGVuZGVkKTtcclxuICAgICAgY29uc29sZS5sb2coXCJtYXRjaF9ub3RfZXh0ZW5kZWRcIiwgZGF0YT8ubWF0Y2hfbm90X2V4dGVuZGVkKTtcclxuXHJcbiAgICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhtYXRjaGVzKTtcclxuXHJcbiAgICAgICAgaWYgKCFtYXRjaGVzKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIm1hdGNoZXMgbm90IHlldCBzZXRcIik7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG5ld01hdGNoID0gbWF0Y2hlcy5maW5kKChpdGVtKSA9PiAhaXRlbT8uZG9uZSk7XHJcbiAgICAgICAgZ2V0RnJvbURhdGFiYXNlKGBtYXRjaGVzL2dldG1hdGNoLyR7bmV3TWF0Y2g/LmdhbWVJZH1gKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICBuZXdNYXRjaC5kb25lID0gdHJ1ZTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwibmV3TWF0Y2ggZGF0YVwiLCBkYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSwgMTIwMCk7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAge21hdGNoZXMgJiZcclxuICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhtYXRjaGVzKS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0/LmRvbmUgJiYgPD7inJM8Lz59IEdhbWU6IHtpdGVtPy5nYW1lSWR9IG9we1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICB7bXNUb0RhdGVUaW1lKGl0ZW0/LnRpbWVzdGFtcCl9XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9