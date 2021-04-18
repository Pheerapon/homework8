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
  // const [students, setStudents] = useState( {
  //     list:
  //         [
  //             { id: "001", name: 'test', surname: 'kup', major: "CoE", GPA: 2.3 },
  //         ]
  // })
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

_s(showStudents, "OD7bBpZva5O2jO+Puf00hKivP7c=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hvd1N0dWRlbnRzLmpzIl0sIm5hbWVzIjpbIlVSTCIsImNvbmZpZyIsInNob3dTdHVkZW50cyIsInRva2VuIiwidXNlRWZmZWN0IiwiZ2V0U3R1ZGVudHMiLCJheGlvcyIsImdldCIsInN0dWRlbnQiLCJzZXRTdHVkZW50cyIsImRhdGEiLCJwcmludFN0dWRlbnRzIiwiY29uc29sZSIsImxvZyIsInN0dWRlbnRzIiwibGlzdCIsImxlbmd0aCIsIm1hcCIsImluZGV4Iiwic3R5bGVzIiwibGlzdEl0ZW0iLCJuYW1lIiwic3VybmFtZSIsIm1ham9yIiwiR1BBIiwiY29udGFpbmVyIiwiSlNPTiIsInN0cmluZ2lmeSIsInN0ZEF1dGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLEdBQUcsYUFBTUMsc0RBQU0sQ0FBQ0QsR0FBYixjQUFUOztBQUNBLElBQU1FLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQWU7QUFBQTs7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNaQyxlQUFXO0FBQ2QsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFJQSxNQUFNQSxXQUFXO0FBQUEscVRBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDSUMsNENBQUssQ0FBQ0MsR0FBTixDQUFVUCxHQUFWLENBREo7O0FBQUE7QUFDWlEscUJBRFk7QUFFaEJDLHlCQUFXLENBQUNELE9BQU8sQ0FBQ0UsSUFBVCxDQUFYOztBQUZnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFYTCxXQUFXO0FBQUE7QUFBQTtBQUFBLEtBQWpCOztBQUlBLE1BQU1NLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUN4QkMsV0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQUF5QkMsUUFBekI7QUFDQSxRQUFJQSxRQUFRLENBQUNDLElBQVQsSUFBaUJELFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxNQUFuQyxFQUNJLE9BQVFGLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjRSxHQUFkLENBQWtCLFVBQUNULE9BQUQsRUFBVVUsS0FBVjtBQUFBLDBCQUN6QjtBQUFnQixpQkFBUyxFQUFFQyw2REFBTSxDQUFDQyxRQUFsQztBQUFBLDhCQUNXWixPQUFELEdBQVlBLE9BQU8sQ0FBQ2EsSUFBcEIsR0FBMkIsR0FEckMsb0JBQzBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRDFDLGdCQUVjYixPQUFELEdBQVlBLE9BQU8sQ0FBQ2MsT0FBcEIsR0FBOEIsR0FGM0MscUJBRWlEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRmpELGNBR1lkLE9BQUQsR0FBWUEsT0FBTyxDQUFDZSxLQUFwQixHQUE0QixHQUh2QyxxQkFHNkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIN0MsWUFJVWYsT0FBRCxHQUFZQSxPQUFPLENBQUNnQixHQUFwQixHQUEwQixHQUpuQyxxQkFJeUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKekM7QUFBQSxTQUFTTixLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEeUI7QUFBQSxLQUFsQixDQUFSLENBREosS0FTSztBQUNELDBCQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVI7QUFDSDtBQUNGLEdBZEg7O0FBZUEsc0JBQ0kscUVBQUMsMERBQUQ7QUFBQSw0QkFDSSxxRUFBQyxnREFBRDtBQUFBLDZCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBSUk7QUFBSyxlQUFTLEVBQUVDLDZEQUFNLENBQUNNLFNBQXZCO0FBQUEsOEJBQ0kscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLEVBRUtDLElBQUksQ0FBQ0MsU0FBTCxDQUFlYixRQUFRLENBQUNBLFFBQXhCLENBRkwsZUFHSTtBQUFJLGlCQUFTLEVBQUVLLDZEQUFNLENBQUNKLElBQXRCO0FBQUEsa0JBQ0tKLGFBQWE7QUFEbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBZUgsQ0EvQ0Q7O0dBQU1ULFk7OztBQWlEUzBCLGtJQUFPLENBQUMxQixZQUFELENBQXRCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Nob3dTdHVkZW50cy4xMThlMmQyZTA5NDZmYjkxZDgyOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2YmFyJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3N0ZC5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBzdGRBdXRoIGZyb20gJy4uL2NvbXBvbmVudHMvc3RkQXV0aCdcclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcvY29uZmlnJ1xyXG5cclxuXHJcbmNvbnN0IFVSTCA9IGAke2NvbmZpZy5VUkx9L3N0dWRlbnRzYFxyXG5jb25zdCBzaG93U3R1ZGVudHMgPSAoeyB0b2tlbiB9KSA9PiB7XHJcblxyXG4gICAgLy8gY29uc3QgW3N0dWRlbnRzLCBzZXRTdHVkZW50c10gPSB1c2VTdGF0ZSgge1xyXG4gICAgLy8gICAgIGxpc3Q6XHJcbiAgICAvLyAgICAgICAgIFtcclxuICAgIC8vICAgICAgICAgICAgIHsgaWQ6IFwiMDAxXCIsIG5hbWU6ICd0ZXN0Jywgc3VybmFtZTogJ2t1cCcsIG1ham9yOiBcIkNvRVwiLCBHUEE6IDIuMyB9LFxyXG4gICAgLy8gICAgICAgICBdXHJcbiAgICAvLyB9KVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0U3R1ZGVudHMoKVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3QgZ2V0U3R1ZGVudHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHN0dWRlbnQgPSBhd2FpdCBheGlvcy5nZXQoVVJMKVxyXG4gICAgICAgIHNldFN0dWRlbnRzKHN0dWRlbnQuZGF0YSlcclxuICAgIH1cclxuICAgIGNvbnN0IHByaW50U3R1ZGVudHMgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1N0dWRlbnRzOicsIHN0dWRlbnRzKVxyXG4gICAgICAgIGlmIChzdHVkZW50cy5saXN0ICYmIHN0dWRlbnRzLmxpc3QubGVuZ3RoKVxyXG4gICAgICAgICAgICByZXR1cm4gKHN0dWRlbnRzLmxpc3QubWFwKChzdHVkZW50LCBpbmRleCkgPT5cclxuICAgICAgICAgICAgKDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3N0eWxlcy5saXN0SXRlbX0+XHJcbiAgICAgICAgICAgICAgIE5hbWUgOiB7KHN0dWRlbnQpID8gc3R1ZGVudC5uYW1lIDogJy0nfSA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgU3VybmFtZSA6IHsoc3R1ZGVudCkgPyBzdHVkZW50LnN1cm5hbWUgOiAnLSd9ICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgTWFqb3IgOiB7KHN0dWRlbnQpID8gc3R1ZGVudC5tYWpvciA6ICctJ30gIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICBHUEEgOiB7KHN0dWRlbnQpID8gc3R1ZGVudC5HUEEgOiAnLSd9ICA8YnI+PC9icj4gXHJcbiAgICAgICAgICAgIDwvbGk+KVxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gKDxoMj5ObyBzdHVkZW50czwvaDI+KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5TdHVkZW50czwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgICAgICAgICAge0pTT04uc3RyaW5naWZ5KHN0dWRlbnRzLnN0dWRlbnRzKX1cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5saXN0fT5cclxuICAgICAgICAgICAgICAgICAgICB7cHJpbnRTdHVkZW50cygpfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RkQXV0aChzaG93U3R1ZGVudHMpXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcmVxLCByZXMgfSkge1xyXG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgdG9rZW46IHJlcS5jb29raWVzLnRva2VuIHx8IFwiXCIgfSB9O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==