webpackHotUpdate_N_E("pages/showStudents",{

/***/ "./pages/showStudents.js":
/*!*******************************!*\
  !*** ./pages/showStudents.js ***!
  \*******************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Fiw_Desktop_next_nodejs_auth_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Fiw_Desktop_next_nodejs_auth_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fiw_Desktop_next_nodejs_auth_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Fiw_Desktop_next_nodejs_auth_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/navbar */ "./components/navbar.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_std_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/std.module.css */ "./styles/std.module.css");
/* harmony import */ var _styles_std_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_std_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_stdAuth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/stdAuth */ "./components/stdAuth.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../config/config */ "./config/config.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_config_config__WEBPACK_IMPORTED_MODULE_10__);




var _jsxFileName = "C:\\Users\\Fiw\\Desktop\\next-nodejs-auth\\frontend\\pages\\showStudents.js",
    _this = undefined,
    _s = $RefreshSig$();









var URL = "".concat(_config_config__WEBPACK_IMPORTED_MODULE_10___default.a.URL, "/students");

var showStudents = function showStudents(_ref) {
  _s();

  var token = _ref.token;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])({
    list: [{
      id: "001",
      name: 'test',
      surname: 'Fiw',
      major: "CoE",
      GPA: 4.00
    }]
  }),
      students = _useState[0],
      setStudents = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    getStudents();
  }, []);

  var getStudents = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_Fiw_Desktop_next_nodejs_auth_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Fiw_Desktop_next_nodejs_auth_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var student;
      return C_Users_Fiw_Desktop_next_nodejs_auth_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(URL);

            case 2:
              student = _context.sent;
              setStudents(student.data);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getStudents() {
      return _ref2.apply(this, arguments);
    };
  }();

  var printStudents = function printStudents() {
    console.log('Students:', students);
    if (students.list && students.list.length) return students.list.map(function (student, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: _styles_std_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.listItem,
        children: ["Name : ", student ? student.name : '-', " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 56
        }, _this), "Surname : ", student ? student.surname : '-', "  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 63
        }, _this), "Major : ", student ? student.major : '-', "  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 59
        }, _this), "GPA : ", student ? student.GPA : '-', "  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 55
        }, _this)]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 14
      }, _this);
    });else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "No students"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 21
      }, _this);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Students"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_std_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_navbar__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, _this), JSON.stringify(students.students), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        className: _styles_std_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.list,
        children: printStudents()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 9
  }, _this);
};

_s(showStudents, "2kJ659CfTgq/qUD8STa620P5sKg=");

var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Object(_components_stdAuth__WEBPACK_IMPORTED_MODULE_9__["default"])(showStudents));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hvd1N0dWRlbnRzLmpzIl0sIm5hbWVzIjpbIlVSTCIsImNvbmZpZyIsInNob3dTdHVkZW50cyIsInRva2VuIiwidXNlU3RhdGUiLCJsaXN0IiwiaWQiLCJuYW1lIiwic3VybmFtZSIsIm1ham9yIiwiR1BBIiwic3R1ZGVudHMiLCJzZXRTdHVkZW50cyIsInVzZUVmZmVjdCIsImdldFN0dWRlbnRzIiwiYXhpb3MiLCJnZXQiLCJzdHVkZW50IiwiZGF0YSIsInByaW50U3R1ZGVudHMiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwibWFwIiwiaW5kZXgiLCJzdHlsZXMiLCJsaXN0SXRlbSIsImNvbnRhaW5lciIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdGRBdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxHQUFHLGFBQU1DLHNEQUFNLENBQUNELEdBQWIsY0FBVDs7QUFDQSxJQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFlO0FBQUE7O0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZOztBQUFBLGtCQUVBQyxzREFBUSxDQUFFO0FBQ3RDQyxRQUFJLEVBQ0EsQ0FDSTtBQUFFQyxRQUFFLEVBQUUsS0FBTjtBQUFhQyxVQUFJLEVBQUUsTUFBbkI7QUFBMkJDLGFBQU8sRUFBRSxLQUFwQztBQUEyQ0MsV0FBSyxFQUFFLEtBQWxEO0FBQXlEQyxTQUFHLEVBQUU7QUFBOUQsS0FESjtBQUZrQyxHQUFGLENBRlI7QUFBQSxNQUV6QkMsUUFGeUI7QUFBQSxNQUVmQyxXQUZlOztBQVNoQ0MseURBQVMsQ0FBQyxZQUFNO0FBQ1pDLGVBQVc7QUFDZCxHQUZRLEVBRU4sRUFGTSxDQUFUOztBQUlBLE1BQU1BLFdBQVc7QUFBQSxxVEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNJQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVVoQixHQUFWLENBREo7O0FBQUE7QUFDWmlCLHFCQURZO0FBRWhCTCx5QkFBVyxDQUFDSyxPQUFPLENBQUNDLElBQVQsQ0FBWDs7QUFGZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWEosV0FBVztBQUFBO0FBQUE7QUFBQSxLQUFqQjs7QUFJQSxNQUFNSyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDeEJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosRUFBeUJWLFFBQXpCO0FBQ0EsUUFBSUEsUUFBUSxDQUFDTixJQUFULElBQWlCTSxRQUFRLENBQUNOLElBQVQsQ0FBY2lCLE1BQW5DLEVBQ0ksT0FBUVgsUUFBUSxDQUFDTixJQUFULENBQWNrQixHQUFkLENBQWtCLFVBQUNOLE9BQUQsRUFBVU8sS0FBVjtBQUFBLDBCQUN6QjtBQUFnQixpQkFBUyxFQUFFQyw2REFBTSxDQUFDQyxRQUFsQztBQUFBLDhCQUNXVCxPQUFELEdBQVlBLE9BQU8sQ0FBQ1YsSUFBcEIsR0FBMkIsR0FEckMsb0JBQzBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRDFDLGdCQUVjVSxPQUFELEdBQVlBLE9BQU8sQ0FBQ1QsT0FBcEIsR0FBOEIsR0FGM0MscUJBRWlEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRmpELGNBR1lTLE9BQUQsR0FBWUEsT0FBTyxDQUFDUixLQUFwQixHQUE0QixHQUh2QyxxQkFHNkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIN0MsWUFJVVEsT0FBRCxHQUFZQSxPQUFPLENBQUNQLEdBQXBCLEdBQTBCLEdBSm5DLHFCQUl5QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUp6QztBQUFBLFNBQVNjLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUR5QjtBQUFBLEtBQWxCLENBQVIsQ0FESixLQVNLO0FBQ0QsMEJBQVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUjtBQUNIO0FBQ0YsR0FkSDs7QUFlQSxzQkFDSSxxRUFBQywwREFBRDtBQUFBLDRCQUNJLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFJSTtBQUFLLGVBQVMsRUFBRUMsNkRBQU0sQ0FBQ0UsU0FBdkI7QUFBQSw4QkFDSSxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosRUFFS0MsSUFBSSxDQUFDQyxTQUFMLENBQWVsQixRQUFRLENBQUNBLFFBQXhCLENBRkwsZUFHSTtBQUFJLGlCQUFTLEVBQUVjLDZEQUFNLENBQUNwQixJQUF0QjtBQUFBLGtCQUNLYyxhQUFhO0FBRGxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWVILENBL0NEOztHQUFNakIsWTs7O0FBaURTNEIsa0lBQU8sQ0FBQzVCLFlBQUQsQ0FBdEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2hvd1N0dWRlbnRzLjhlMGI3NmViODU4ODhjMWE4MzRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZiYXInXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvc3RkLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHN0ZEF1dGggZnJvbSAnLi4vY29tcG9uZW50cy9zdGRBdXRoJ1xyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZy9jb25maWcnXHJcblxyXG5cclxuY29uc3QgVVJMID0gYCR7Y29uZmlnLlVSTH0vc3R1ZGVudHNgXHJcbmNvbnN0IHNob3dTdHVkZW50cyA9ICh7IHRva2VuIH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBbc3R1ZGVudHMsIHNldFN0dWRlbnRzXSA9IHVzZVN0YXRlKCB7XHJcbiAgICAgICAgbGlzdDpcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgeyBpZDogXCIwMDFcIiwgbmFtZTogJ3Rlc3QnLCBzdXJuYW1lOiAnRml3JywgbWFqb3I6IFwiQ29FXCIsIEdQQTogNC4wMCB9LFxyXG4gICAgICAgICAgICBdXHJcbiAgICB9KVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0U3R1ZGVudHMoKVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3QgZ2V0U3R1ZGVudHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHN0dWRlbnQgPSBhd2FpdCBheGlvcy5nZXQoVVJMKVxyXG4gICAgICAgIHNldFN0dWRlbnRzKHN0dWRlbnQuZGF0YSlcclxuICAgIH1cclxuICAgIGNvbnN0IHByaW50U3R1ZGVudHMgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1N0dWRlbnRzOicsIHN0dWRlbnRzKVxyXG4gICAgICAgIGlmIChzdHVkZW50cy5saXN0ICYmIHN0dWRlbnRzLmxpc3QubGVuZ3RoKVxyXG4gICAgICAgICAgICByZXR1cm4gKHN0dWRlbnRzLmxpc3QubWFwKChzdHVkZW50LCBpbmRleCkgPT5cclxuICAgICAgICAgICAgKDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3N0eWxlcy5saXN0SXRlbX0+XHJcbiAgICAgICAgICAgICAgIE5hbWUgOiB7KHN0dWRlbnQpID8gc3R1ZGVudC5uYW1lIDogJy0nfSA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgU3VybmFtZSA6IHsoc3R1ZGVudCkgPyBzdHVkZW50LnN1cm5hbWUgOiAnLSd9ICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgTWFqb3IgOiB7KHN0dWRlbnQpID8gc3R1ZGVudC5tYWpvciA6ICctJ30gIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICBHUEEgOiB7KHN0dWRlbnQpID8gc3R1ZGVudC5HUEEgOiAnLSd9ICA8YnI+PC9icj4gXHJcbiAgICAgICAgICAgIDwvbGk+KVxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gKDxoMj5ObyBzdHVkZW50czwvaDI+KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5TdHVkZW50czwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgICAgICAgICAge0pTT04uc3RyaW5naWZ5KHN0dWRlbnRzLnN0dWRlbnRzKX1cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5saXN0fT5cclxuICAgICAgICAgICAgICAgICAgICB7cHJpbnRTdHVkZW50cygpfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RkQXV0aChzaG93U3R1ZGVudHMpXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcmVxLCByZXMgfSkge1xyXG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgdG9rZW46IHJlcS5jb29raWVzLnRva2VuIHx8IFwiXCIgfSB9O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==