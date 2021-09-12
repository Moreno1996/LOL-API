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

  React.useEffect(function () {
    var timer = window.setInterval(function () {
      getMatch(); // <-- Change this line!
    }, 1200);
    return function () {
      window.clearInterval(timer);
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    Object(_methods_general_methods__WEBPACK_IMPORTED_MODULE_4__["getFromDatabase"])("matches/stored/").then(function (data) {
      console.log("data", data);
      console.log("match_not_extended", data === null || data === void 0 ? void 0 : data.match_not_extended);
      setMatches(data === null || data === void 0 ? void 0 : data.match_not_extended);
      setInterval(getMatch, 1200);
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
            lineNumber: 55,
            columnNumber: 17
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "2085888330",
      children: "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbW9yZW5cXEJ1cmVhdWJsYWRcXENvZGluZ1xcTE9MLUFQSVxcc2l0ZVxccGFnZXNcXGdlbmVyYXRlXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RGtCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbW9yZW5cXEJ1cmVhdWJsYWRcXENvZGluZ1xcTE9MLUFQSVxcc2l0ZVxccGFnZXNcXGdlbmVyYXRlXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0RnJvbURhdGFiYXNlLFxyXG4gIG1zVG9EYXRlVGltZSxcclxuICBtc1RvVGltZSxcclxufSBmcm9tIFwiLi4vLi4vbWV0aG9kcy9nZW5lcmFsX21ldGhvZHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlKCkge1xyXG4gIGNvbnN0IFttYXRjaGVzLCBzZXRNYXRjaGVzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IGdldE1hdGNoZXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gbWF0Y2hlcztcclxuICB9O1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGdldE1hdGNoID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbWF0Y2hlcyA9IGdldE1hdGNoZXMoKTtcclxuICAgIGNvbnNvbGUubG9nKFwiZ2V0TWF0Y2hcIiwgbWF0Y2hlcyk7XHJcbiAgICBpZiAoIW1hdGNoZXMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbmV3TWF0Y2ggPSBtYXRjaGVzLmZpbmQoKGl0ZW0pID0+ICFpdGVtPy5kb25lKTtcclxuICAgIGdldEZyb21EYXRhYmFzZShgbWF0Y2hlcy9nZXRtYXRjaC8ke25ld01hdGNoPy5nYW1lSWR9YCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBuZXdNYXRjaC5kb25lID0gdHJ1ZTtcclxuICAgICAgY29uc29sZS5sb2coXCJuZXdNYXRjaCBkYXRhXCIsIGRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdGltZXIgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBnZXRNYXRjaCgpOyAvLyA8LS0gQ2hhbmdlIHRoaXMgbGluZSFcclxuICAgIH0sIDEyMDApO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGltZXIpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldEZyb21EYXRhYmFzZShgbWF0Y2hlcy9zdG9yZWQvYCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImRhdGFcIiwgZGF0YSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibWF0Y2hfbm90X2V4dGVuZGVkXCIsIGRhdGE/Lm1hdGNoX25vdF9leHRlbmRlZCk7XHJcbiAgICAgIHNldE1hdGNoZXMoZGF0YT8ubWF0Y2hfbm90X2V4dGVuZGVkKTtcclxuXHJcbiAgICAgIHNldEludGVydmFsKGdldE1hdGNoLCAxMjAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwoZ2V0TWF0Y2gpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAge21hdGNoZXMgJiZcclxuICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhtYXRjaGVzKS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0/LmRvbmUgJiYgPD7inJM8Lz59IEdhbWU6IHtpdGVtPy5nYW1lSWR9IG9we1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICB7bXNUb0RhdGVUaW1lKGl0ZW0/LnRpbWVzdGFtcCl9XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\moren\\\\Bureaublad\\\\Coding\\\\LOL-API\\\\site\\\\pages\\\\generate\\\\index.js */"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2VuZXJhdGUvaW5kZXguanMiXSwibmFtZXMiOlsiZ2VuZXJhdGUiLCJ1c2VTdGF0ZSIsIm1hdGNoZXMiLCJzZXRNYXRjaGVzIiwiZ2V0TWF0Y2hlcyIsInJvdXRlciIsInVzZVJvdXRlciIsImdldE1hdGNoIiwiY29uc29sZSIsImxvZyIsIm5ld01hdGNoIiwiZmluZCIsIml0ZW0iLCJkb25lIiwiZ2V0RnJvbURhdGFiYXNlIiwiZ2FtZUlkIiwidGhlbiIsImRhdGEiLCJSZWFjdCIsInVzZUVmZmVjdCIsInRpbWVyIiwid2luZG93Iiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwibWF0Y2hfbm90X2V4dGVuZGVkIiwiT2JqZWN0IiwidmFsdWVzIiwibWFwIiwiaW5kZXgiLCJtc1RvRGF0ZVRpbWUiLCJ0aW1lc3RhbXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFNZSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0hDLHNEQUFRLENBQUMsSUFBRCxDQURMO0FBQUEsTUFDMUJDLE9BRDBCO0FBQUEsTUFDakJDLFVBRGlCOztBQUVqQyxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCLFdBQU9GLE9BQVA7QUFDRCxHQUZEOztBQUdBLE1BQU1HLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQixRQUFNTCxPQUFPLEdBQUdFLFVBQVUsRUFBMUI7QUFDQUksV0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QlAsT0FBeEI7O0FBQ0EsUUFBSSxDQUFDQSxPQUFMLEVBQWM7QUFDWjtBQUNEOztBQUNELFFBQU1RLFFBQVEsR0FBR1IsT0FBTyxDQUFDUyxJQUFSLENBQWEsVUFBQ0MsSUFBRDtBQUFBLGFBQVUsRUFBQ0EsSUFBRCxhQUFDQSxJQUFELGVBQUNBLElBQUksQ0FBRUMsSUFBUCxDQUFWO0FBQUEsS0FBYixDQUFqQjtBQUNBQyxvRkFBZSw0QkFBcUJKLFFBQXJCLGFBQXFCQSxRQUFyQix1QkFBcUJBLFFBQVEsQ0FBRUssTUFBL0IsRUFBZixDQUF3REMsSUFBeEQsQ0FBNkQsVUFBQ0MsSUFBRCxFQUFVO0FBQ3JFUCxjQUFRLENBQUNHLElBQVQsR0FBZ0IsSUFBaEI7QUFDQUwsYUFBTyxDQUFDQyxHQUFSLENBQVksZUFBWixFQUE2QlEsSUFBN0I7QUFDRCxLQUhEO0FBSUQsR0FYRDs7QUFZQUMsT0FBSyxDQUFDQyxTQUFOLENBQWdCLFlBQU07QUFDcEIsUUFBTUMsS0FBSyxHQUFHQyxNQUFNLENBQUNDLFdBQVAsQ0FBbUIsWUFBTTtBQUNyQ2YsY0FBUSxHQUQ2QixDQUN6QjtBQUNiLEtBRmEsRUFFWCxJQUZXLENBQWQ7QUFHQSxXQUFPLFlBQU07QUFDWGMsWUFBTSxDQUFDRSxhQUFQLENBQXFCSCxLQUFyQjtBQUNELEtBRkQ7QUFHRCxHQVBELEVBT0csRUFQSDtBQVFBRCx5REFBUyxDQUFDLFlBQU07QUFDZEwsb0ZBQWUsbUJBQWYsQ0FBbUNFLElBQW5DLENBQXdDLFVBQUNDLElBQUQsRUFBVTtBQUNoRFQsYUFBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQlEsSUFBcEI7QUFDQVQsYUFBTyxDQUFDQyxHQUFSLENBQVksb0JBQVosRUFBa0NRLElBQWxDLGFBQWtDQSxJQUFsQyx1QkFBa0NBLElBQUksQ0FBRU8sa0JBQXhDO0FBQ0FyQixnQkFBVSxDQUFDYyxJQUFELGFBQUNBLElBQUQsdUJBQUNBLElBQUksQ0FBRU8sa0JBQVAsQ0FBVjtBQUVBRixpQkFBVyxDQUFDZixRQUFELEVBQVcsSUFBWCxDQUFYO0FBQ0QsS0FORDtBQVFBLFdBQU8sWUFBTTtBQUNYZ0IsbUJBQWEsQ0FBQ2hCLFFBQUQsQ0FBYjtBQUNELEtBRkQ7QUFHRCxHQVpRLEVBWU4sRUFaTSxDQUFUO0FBYUEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFBO0FBQUEsNkJBQ0U7QUFBQTtBQUFBLGtCQUNHTCxPQUFPLElBQ051QixNQUFNLENBQUNDLE1BQVAsQ0FBY3hCLE9BQWQsRUFBdUJ5QixHQUF2QixDQUEyQixVQUFDZixJQUFELEVBQU9nQixLQUFQLEVBQWlCO0FBQzFDLDhCQUNFO0FBQUE7QUFBQSx1QkFDRyxDQUFBaEIsSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSixZQUFBQSxJQUFJLENBQUVDLElBQU4sa0JBQWM7QUFBQTtBQUFBLDZCQURqQixhQUNnQ0QsSUFEaEMsYUFDZ0NBLElBRGhDLHVCQUNnQ0EsSUFBSSxDQUFFRyxNQUR0QyxTQUNpRCxHQURqRCxFQUVHYyw2RUFBWSxDQUFDakIsSUFBRCxhQUFDQSxJQUFELHVCQUFDQSxJQUFJLENBQUVrQixTQUFQLENBRmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBTUQsU0FQRDtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERjtBQWtCRDs7R0F6RHVCOUIsUTtVQUtQTSxxRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9nZW5lcmF0ZS44ODA3MWIzNmFhMjU2NmY4MTMzNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBnZXRGcm9tRGF0YWJhc2UsXHJcbiAgbXNUb0RhdGVUaW1lLFxyXG4gIG1zVG9UaW1lLFxyXG59IGZyb20gXCIuLi8uLi9tZXRob2RzL2dlbmVyYWxfbWV0aG9kc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGUoKSB7XHJcbiAgY29uc3QgW21hdGNoZXMsIHNldE1hdGNoZXNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgZ2V0TWF0Y2hlcyA9ICgpID0+IHtcclxuICAgIHJldHVybiBtYXRjaGVzO1xyXG4gIH07XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgZ2V0TWF0Y2ggPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtYXRjaGVzID0gZ2V0TWF0Y2hlcygpO1xyXG4gICAgY29uc29sZS5sb2coXCJnZXRNYXRjaFwiLCBtYXRjaGVzKTtcclxuICAgIGlmICghbWF0Y2hlcykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBuZXdNYXRjaCA9IG1hdGNoZXMuZmluZCgoaXRlbSkgPT4gIWl0ZW0/LmRvbmUpO1xyXG4gICAgZ2V0RnJvbURhdGFiYXNlKGBtYXRjaGVzL2dldG1hdGNoLyR7bmV3TWF0Y2g/LmdhbWVJZH1gKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIG5ld01hdGNoLmRvbmUgPSB0cnVlO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm5ld01hdGNoIGRhdGFcIiwgZGF0YSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB0aW1lciA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIGdldE1hdGNoKCk7IC8vIDwtLSBDaGFuZ2UgdGhpcyBsaW5lIVxyXG4gICAgfSwgMTIwMCk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aW1lcik7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0RnJvbURhdGFiYXNlKGBtYXRjaGVzL3N0b3JlZC9gKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZGF0YVwiLCBkYXRhKTtcclxuICAgICAgY29uc29sZS5sb2coXCJtYXRjaF9ub3RfZXh0ZW5kZWRcIiwgZGF0YT8ubWF0Y2hfbm90X2V4dGVuZGVkKTtcclxuICAgICAgc2V0TWF0Y2hlcyhkYXRhPy5tYXRjaF9ub3RfZXh0ZW5kZWQpO1xyXG5cclxuICAgICAgc2V0SW50ZXJ2YWwoZ2V0TWF0Y2gsIDEyMDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgY2xlYXJJbnRlcnZhbChnZXRNYXRjaCk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICB7bWF0Y2hlcyAmJlxyXG4gICAgICAgICAgICBPYmplY3QudmFsdWVzKG1hdGNoZXMpLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICB7aXRlbT8uZG9uZSAmJiA8PuKckzwvPn0gR2FtZToge2l0ZW0/LmdhbWVJZH0gb3B7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIHttc1RvRGF0ZVRpbWUoaXRlbT8udGltZXN0YW1wKX1cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=