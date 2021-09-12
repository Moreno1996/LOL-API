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
    var _matches$newMatchInde;

    var matchData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    if (!matches && !matchData) {
      console.warn("matches not set");
      return;
    }

    var matches = matches;

    if (!matches) {
      matches = matchData;
    }

    var newMatchIndex = matches.findIndex(function (item) {
      return !(item !== null && item !== void 0 && item.done);
    });
    Object(_methods_general_methods__WEBPACK_IMPORTED_MODULE_4__["getFromDatabase"])("matches/getmatch/".concat((_matches$newMatchInde = matches[newMatchIndex]) === null || _matches$newMatchInde === void 0 ? void 0 : _matches$newMatchInde.gameId)).then(function (data) {
      matches[newMatchIndex].done = true;
      console.log(matches[newMatchIndex]);
      console.log(matches);
      setMatches(matches);
      console.log("newMatch data", data);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    Object(_methods_general_methods__WEBPACK_IMPORTED_MODULE_4__["getFromDatabase"])("matches/stored/").then(function (data) {
      console.log("data", data);
      var matchData = data === null || data === void 0 ? void 0 : data.match_not_extended;
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
        children: matches && Object.values(matches).map(function (item, index) {
          var finished = item === null || item === void 0 ? void 0 : item.done;

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
      children: "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbW9yZW5cXEJ1cmVhdWJsYWRcXENvZGluZ1xcTE9MLUFQSVxcc2l0ZVxccGFnZXNcXGdlbmVyYXRlXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRGtCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbW9yZW5cXEJ1cmVhdWJsYWRcXENvZGluZ1xcTE9MLUFQSVxcc2l0ZVxccGFnZXNcXGdlbmVyYXRlXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0RnJvbURhdGFiYXNlLFxyXG4gIG1zVG9EYXRlVGltZSxcclxuICBtc1RvVGltZSxcclxufSBmcm9tIFwiLi4vLi4vbWV0aG9kcy9nZW5lcmFsX21ldGhvZHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlKCkge1xyXG4gIGNvbnN0IFttYXRjaGVzLCBzZXRNYXRjaGVzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IGdldE1hdGNoZXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gbWF0Y2hlcztcclxuICB9O1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGdldE1hdGNoID0gKG1hdGNoRGF0YSA9IG51bGwpID0+IHtcclxuICAgIGlmICghbWF0Y2hlcyAmJiAhbWF0Y2hEYXRhKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcIm1hdGNoZXMgbm90IHNldFwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IG1hdGNoZXMgPSBtYXRjaGVzO1xyXG4gICAgaWYgKCFtYXRjaGVzKSB7XHJcbiAgICAgIG1hdGNoZXMgPSBtYXRjaERhdGE7XHJcbiAgICB9XHJcbiAgICBjb25zdCBuZXdNYXRjaEluZGV4ID0gbWF0Y2hlcy5maW5kSW5kZXgoKGl0ZW0pID0+ICFpdGVtPy5kb25lKTtcclxuXHJcbiAgICBnZXRGcm9tRGF0YWJhc2UoYG1hdGNoZXMvZ2V0bWF0Y2gvJHttYXRjaGVzW25ld01hdGNoSW5kZXhdPy5nYW1lSWR9YCkudGhlbihcclxuICAgICAgKGRhdGEpID0+IHtcclxuICAgICAgICBtYXRjaGVzW25ld01hdGNoSW5kZXhdLmRvbmUgPSB0cnVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG1hdGNoZXNbbmV3TWF0Y2hJbmRleF0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG1hdGNoZXMpO1xyXG4gICAgICAgIHNldE1hdGNoZXMobWF0Y2hlcyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJuZXdNYXRjaCBkYXRhXCIsIGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH07XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldEZyb21EYXRhYmFzZShgbWF0Y2hlcy9zdG9yZWQvYCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImRhdGFcIiwgZGF0YSk7XHJcbiAgICAgIGNvbnN0IG1hdGNoRGF0YSA9IGRhdGE/Lm1hdGNoX25vdF9leHRlbmRlZDtcclxuICAgICAgY29uc29sZS5sb2coXCJtYXRjaF9ub3RfZXh0ZW5kZWRcIiwgbWF0Y2hEYXRhKTtcclxuICAgICAgc2V0TWF0Y2hlcyhtYXRjaERhdGEpO1xyXG4gICAgICBnZXRNYXRjaChtYXRjaERhdGEpO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIHttYXRjaGVzICYmXHJcbiAgICAgICAgICAgIE9iamVjdC52YWx1ZXMobWF0Y2hlcykubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGZpbmlzaGVkID0gaXRlbT8uZG9uZTtcclxuICAgICAgICAgICAgICBpZiAoZmluaXNoZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICBHYW1lOiB7aXRlbT8uZ2FtZUlkfSBvcCB7bXNUb0RhdGVUaW1lKGl0ZW0/LnRpbWVzdGFtcCl9XHJcbiAgICAgICAgICAgICAgICAgIHtmaW5pc2hlZCAmJiA8PkRPTkU8Lz59IEEge2ZpbmlzaGVkID8gXCJEb25lXCIgOiBcIk5vdCBkb25lXCJ9XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\moren\\\\Bureaublad\\\\Coding\\\\LOL-API\\\\site\\\\pages\\\\generate\\\\index.js */"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2VuZXJhdGUvaW5kZXguanMiXSwibmFtZXMiOlsiZ2VuZXJhdGUiLCJ1c2VTdGF0ZSIsIm1hdGNoZXMiLCJzZXRNYXRjaGVzIiwiZ2V0TWF0Y2hlcyIsInJvdXRlciIsInVzZVJvdXRlciIsImdldE1hdGNoIiwibWF0Y2hEYXRhIiwiY29uc29sZSIsIndhcm4iLCJuZXdNYXRjaEluZGV4IiwiZmluZEluZGV4IiwiaXRlbSIsImRvbmUiLCJnZXRGcm9tRGF0YWJhc2UiLCJnYW1lSWQiLCJ0aGVuIiwiZGF0YSIsImxvZyIsInVzZUVmZmVjdCIsIm1hdGNoX25vdF9leHRlbmRlZCIsIk9iamVjdCIsInZhbHVlcyIsIm1hcCIsImluZGV4IiwiZmluaXNoZWQiLCJtc1RvRGF0ZVRpbWUiLCJ0aW1lc3RhbXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFNZSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0hDLHNEQUFRLENBQUMsSUFBRCxDQURMO0FBQUEsTUFDMUJDLE9BRDBCO0FBQUEsTUFDakJDLFVBRGlCOztBQUVqQyxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCLFdBQU9GLE9BQVA7QUFDRCxHQUZEOztBQUdBLE1BQU1HLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBc0I7QUFBQTs7QUFBQSxRQUFyQkMsU0FBcUIsdUVBQVQsSUFBUzs7QUFDckMsUUFBSSxDQUFDTixPQUFELElBQVksQ0FBQ00sU0FBakIsRUFBNEI7QUFDMUJDLGFBQU8sQ0FBQ0MsSUFBUixDQUFhLGlCQUFiO0FBQ0E7QUFDRDs7QUFDRCxRQUFJUixPQUFPLEdBQUdBLE9BQWQ7O0FBQ0EsUUFBSSxDQUFDQSxPQUFMLEVBQWM7QUFDWkEsYUFBTyxHQUFHTSxTQUFWO0FBQ0Q7O0FBQ0QsUUFBTUcsYUFBYSxHQUFHVCxPQUFPLENBQUNVLFNBQVIsQ0FBa0IsVUFBQ0MsSUFBRDtBQUFBLGFBQVUsRUFBQ0EsSUFBRCxhQUFDQSxJQUFELGVBQUNBLElBQUksQ0FBRUMsSUFBUCxDQUFWO0FBQUEsS0FBbEIsQ0FBdEI7QUFFQUMsb0ZBQWUscURBQXFCYixPQUFPLENBQUNTLGFBQUQsQ0FBNUIsMERBQXFCLHNCQUF3QkssTUFBN0MsRUFBZixDQUFzRUMsSUFBdEUsQ0FDRSxVQUFDQyxJQUFELEVBQVU7QUFDUmhCLGFBQU8sQ0FBQ1MsYUFBRCxDQUFQLENBQXVCRyxJQUF2QixHQUE4QixJQUE5QjtBQUNBTCxhQUFPLENBQUNVLEdBQVIsQ0FBWWpCLE9BQU8sQ0FBQ1MsYUFBRCxDQUFuQjtBQUNBRixhQUFPLENBQUNVLEdBQVIsQ0FBWWpCLE9BQVo7QUFDQUMsZ0JBQVUsQ0FBQ0QsT0FBRCxDQUFWO0FBQ0FPLGFBQU8sQ0FBQ1UsR0FBUixDQUFZLGVBQVosRUFBNkJELElBQTdCO0FBQ0QsS0FQSDtBQVNELEdBcEJEOztBQXFCQUUseURBQVMsQ0FBQyxZQUFNO0FBQ2RMLG9GQUFlLG1CQUFmLENBQW1DRSxJQUFuQyxDQUF3QyxVQUFDQyxJQUFELEVBQVU7QUFDaERULGFBQU8sQ0FBQ1UsR0FBUixDQUFZLE1BQVosRUFBb0JELElBQXBCO0FBQ0EsVUFBTVYsU0FBUyxHQUFHVSxJQUFILGFBQUdBLElBQUgsdUJBQUdBLElBQUksQ0FBRUcsa0JBQXhCO0FBQ0FaLGFBQU8sQ0FBQ1UsR0FBUixDQUFZLG9CQUFaLEVBQWtDWCxTQUFsQztBQUNBTCxnQkFBVSxDQUFDSyxTQUFELENBQVY7QUFDQUQsY0FBUSxDQUFDQyxTQUFELENBQVI7QUFDRCxLQU5EO0FBT0QsR0FSUSxFQVFOLEVBUk0sQ0FBVDtBQVNBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQTtBQUFBLDZCQUNFO0FBQUE7QUFBQSxrQkFDR04sT0FBTyxJQUNOb0IsTUFBTSxDQUFDQyxNQUFQLENBQWNyQixPQUFkLEVBQXVCc0IsR0FBdkIsQ0FBMkIsVUFBQ1gsSUFBRCxFQUFPWSxLQUFQLEVBQWlCO0FBQzFDLGNBQU1DLFFBQVEsR0FBR2IsSUFBSCxhQUFHQSxJQUFILHVCQUFHQSxJQUFJLENBQUVDLElBQXZCOztBQUNBLGNBQUlZLFFBQUosRUFBYztBQUNaakIsbUJBQU8sQ0FBQ1UsR0FBUixDQUFZTixJQUFaO0FBQ0Q7O0FBQ0QsOEJBQ0U7QUFBQTtBQUFBLGlDQUNTQSxJQURULGFBQ1NBLElBRFQsdUJBQ1NBLElBQUksQ0FBRUcsTUFEZixVQUMyQlcsNkVBQVksQ0FBQ2QsSUFBRCxhQUFDQSxJQUFELHVCQUFDQSxJQUFJLENBQUVlLFNBQVAsQ0FEdkMsRUFFR0YsUUFBUSxpQkFBSTtBQUFBO0FBQUEsNkJBRmYsU0FFNkJBLFFBQVEsR0FBRyxNQUFILEdBQVksVUFGakQ7QUFBQSxhQUFTRCxLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFNRCxTQVhEO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGO0FBc0JEOztHQTFEdUJ6QixRO1VBS1BNLHFEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2dlbmVyYXRlLjQzYjA0MjE3NmM0NjhmNGE0ZGFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIGdldEZyb21EYXRhYmFzZSxcclxuICBtc1RvRGF0ZVRpbWUsXHJcbiAgbXNUb1RpbWUsXHJcbn0gZnJvbSBcIi4uLy4uL21ldGhvZHMvZ2VuZXJhbF9tZXRob2RzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5lcmF0ZSgpIHtcclxuICBjb25zdCBbbWF0Y2hlcywgc2V0TWF0Y2hlc10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBnZXRNYXRjaGVzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIG1hdGNoZXM7XHJcbiAgfTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBnZXRNYXRjaCA9IChtYXRjaERhdGEgPSBudWxsKSA9PiB7XHJcbiAgICBpZiAoIW1hdGNoZXMgJiYgIW1hdGNoRGF0YSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oXCJtYXRjaGVzIG5vdCBzZXRcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBtYXRjaGVzID0gbWF0Y2hlcztcclxuICAgIGlmICghbWF0Y2hlcykge1xyXG4gICAgICBtYXRjaGVzID0gbWF0Y2hEYXRhO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbmV3TWF0Y2hJbmRleCA9IG1hdGNoZXMuZmluZEluZGV4KChpdGVtKSA9PiAhaXRlbT8uZG9uZSk7XHJcblxyXG4gICAgZ2V0RnJvbURhdGFiYXNlKGBtYXRjaGVzL2dldG1hdGNoLyR7bWF0Y2hlc1tuZXdNYXRjaEluZGV4XT8uZ2FtZUlkfWApLnRoZW4oXHJcbiAgICAgIChkYXRhKSA9PiB7XHJcbiAgICAgICAgbWF0Y2hlc1tuZXdNYXRjaEluZGV4XS5kb25lID0gdHJ1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhtYXRjaGVzW25ld01hdGNoSW5kZXhdKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhtYXRjaGVzKTtcclxuICAgICAgICBzZXRNYXRjaGVzKG1hdGNoZXMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibmV3TWF0Y2ggZGF0YVwiLCBkYXRhKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRGcm9tRGF0YWJhc2UoYG1hdGNoZXMvc3RvcmVkL2ApLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJkYXRhXCIsIGRhdGEpO1xyXG4gICAgICBjb25zdCBtYXRjaERhdGEgPSBkYXRhPy5tYXRjaF9ub3RfZXh0ZW5kZWQ7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibWF0Y2hfbm90X2V4dGVuZGVkXCIsIG1hdGNoRGF0YSk7XHJcbiAgICAgIHNldE1hdGNoZXMobWF0Y2hEYXRhKTtcclxuICAgICAgZ2V0TWF0Y2gobWF0Y2hEYXRhKTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICB7bWF0Y2hlcyAmJlxyXG4gICAgICAgICAgICBPYmplY3QudmFsdWVzKG1hdGNoZXMpLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBmaW5pc2hlZCA9IGl0ZW0/LmRvbmU7XHJcbiAgICAgICAgICAgICAgaWYgKGZpbmlzaGVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgR2FtZToge2l0ZW0/LmdhbWVJZH0gb3Age21zVG9EYXRlVGltZShpdGVtPy50aW1lc3RhbXApfVxyXG4gICAgICAgICAgICAgICAgICB7ZmluaXNoZWQgJiYgPD5ET05FPC8+fSBBIHtmaW5pc2hlZCA/IFwiRG9uZVwiIDogXCJOb3QgZG9uZVwifVxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==