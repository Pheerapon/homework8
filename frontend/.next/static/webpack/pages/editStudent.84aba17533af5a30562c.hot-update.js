webpackHotUpdate_N_E("pages/editStudent",{

/***/ "./pages/editStudent.js":
/*!******************************!*\
  !*** ./pages/editStudent.js ***!
  \******************************/
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




var _jsxFileName = "C:\\Users\\Fiw\\Desktop\\next-nodejs-auth\\frontend\\pages\\editStudent.js",
    _this = undefined,
    _s = $RefreshSig$();









var URL = "".concat(_config_config__WEBPACK_IMPORTED_MODULE_10___default.a.URL, "/students");

var editStudents = function editStudents(_ref) {
  _s();

  var token = _ref.token;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])({
    list: [{
      id: "001",
      name: 'test',
      surname: 'kup',
      major: "CoE",
      GPA: 2.3
    }]
  }),
      students = _useState[0],
      setStudents = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(''),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(''),
      surname = _useState3[0],
      setSurname = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(''),
      major = _useState4[0],
      setMajor = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(0),
      GPA = _useState5[0],
      setGPA = _useState5[1];

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
          lineNumber: 37,
          columnNumber: 57
        }, _this), "Surname : ", student ? student.surname : '-', "  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 64
        }, _this), "Major : ", student ? student.major : '-', "  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 60
        }, _this), "GPA : ", student ? student.GPA : '-', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: function onClick() {
            return updateStudent(student.id);
          },
          className: "".concat(_styles_std_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.button, " ").concat(_styles_std_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.btnEdit),
          children: "Update"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: function onClick() {
            return deleteStudent(student.id);
          },
          className: "".concat(_styles_std_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.button, " ").concat(_styles_std_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.btnDelete),
          children: " Delete "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 17
        }, _this)]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 14
      }, _this);
    });else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "No students"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 21
      }, _this);
    }
  };

  var addStudent = /*#__PURE__*/function () {
    var _ref3 = Object(C_Users_Fiw_Desktop_next_nodejs_auth_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Fiw_Desktop_next_nodejs_auth_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(name, surname, major, GPA) {
      var result;
      return C_Users_Fiw_Desktop_next_nodejs_auth_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(URL, {
                name: name,
                surname: surname,
                major: major,
                GPA: GPA
              });

            case 2:
              result = _context2.sent;
              console.log(result.data);
              setStudents(result.data);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function addStudent(_x, _x2, _x3, _x4) {
      return _ref3.apply(this, arguments);
    };
  }();

  var deleteStudent = /*#__PURE__*/function () {
    var _ref4 = Object(C_Users_Fiw_Desktop_next_nodejs_auth_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Fiw_Desktop_next_nodejs_auth_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(id) {
      var result;
      return C_Users_Fiw_Desktop_next_nodejs_auth_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_8___default.a["delete"]("".concat(URL, "/").concat(id));

            case 2:
              result = _context3.sent;
              console.log(result.data);
              setStudents(result.data);

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function deleteStudent(_x5) {
      return _ref4.apply(this, arguments);
    };
  }();

  var updateStudent = /*#__PURE__*/function () {
    var _ref5 = Object(C_Users_Fiw_Desktop_next_nodejs_auth_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Fiw_Desktop_next_nodejs_auth_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(id) {
      var result;
      return C_Users_Fiw_Desktop_next_nodejs_auth_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_8___default.a.put("".concat(URL, "/").concat(id), {
                name: name,
                surname: surname,
                major: major,
                GPA: GPA
              });

            case 2:
              result = _context4.sent;
              console.log('student id update: ', result.data);
              setStudents(result.data);

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function updateStudent(_x6) {
      return _ref5.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Students"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_std_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_navbar__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }, _this), JSON.stringify(students.students), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        className: _styles_std_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.list,
        children: printStudents()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Add student"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_std_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.list,
        children: ["Name : ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          onChange: function onChange(e) {
            return setName(e.target.value);
          },
          className: _styles_std_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.textInput
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 28
        }, _this), "Surname : ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          onChange: function onChange(e) {
            return setSurname(e.target.value);
          },
          className: _styles_std_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.textInput
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 31
        }, _this), "Major : ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          onChange: function onChange(e) {
            return setMajor(e.target.value);
          },
          className: _styles_std_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.textInput
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 29
        }, _this), "GPA : ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "number",
          onChange: function onChange(e) {
            return setGPA(e.target.value);
          },
          className: _styles_std_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.textInput
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 27
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: function onClick() {
            return addStudent(name, surname, major, GPA);
          },
          className: "".concat(_styles_std_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.button, " ").concat(_styles_std_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.btnAdd),
          children: "Add new student"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 9
  }, _this);
};

_s(editStudents, "U9/fi8DUQKZiyl4O1YWJ5x5oXtM=");

var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Object(_components_stdAuth__WEBPACK_IMPORTED_MODULE_9__["default"])(editStudents));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZWRpdFN0dWRlbnQuanMiXSwibmFtZXMiOlsiVVJMIiwiY29uZmlnIiwiZWRpdFN0dWRlbnRzIiwidG9rZW4iLCJ1c2VTdGF0ZSIsImxpc3QiLCJpZCIsIm5hbWUiLCJzdXJuYW1lIiwibWFqb3IiLCJHUEEiLCJzdHVkZW50cyIsInNldFN0dWRlbnRzIiwic2V0TmFtZSIsInNldFN1cm5hbWUiLCJzZXRNYWpvciIsInNldEdQQSIsInVzZUVmZmVjdCIsImdldFN0dWRlbnRzIiwiYXhpb3MiLCJnZXQiLCJzdHVkZW50IiwiZGF0YSIsInByaW50U3R1ZGVudHMiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwibWFwIiwiaW5kZXgiLCJzdHlsZXMiLCJsaXN0SXRlbSIsInVwZGF0ZVN0dWRlbnQiLCJidXR0b24iLCJidG5FZGl0IiwiZGVsZXRlU3R1ZGVudCIsImJ0bkRlbGV0ZSIsImFkZFN0dWRlbnQiLCJwb3N0IiwicmVzdWx0IiwicHV0IiwiY29udGFpbmVyIiwiSlNPTiIsInN0cmluZ2lmeSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRleHRJbnB1dCIsImJ0bkFkZCIsInN0ZEF1dGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEdBQUcsYUFBTUMsc0RBQU0sQ0FBQ0QsR0FBYixjQUFUOztBQUNBLElBQU1FLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQWU7QUFBQTs7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7O0FBQUEsa0JBRUFDLHNEQUFRLENBQUM7QUFDckNDLFFBQUksRUFDQSxDQUNJO0FBQUVDLFFBQUUsRUFBRSxLQUFOO0FBQWFDLFVBQUksRUFBRSxNQUFuQjtBQUEyQkMsYUFBTyxFQUFFLEtBQXBDO0FBQTJDQyxXQUFLLEVBQUUsS0FBbEQ7QUFBeURDLFNBQUcsRUFBRTtBQUE5RCxLQURKO0FBRmlDLEdBQUQsQ0FGUjtBQUFBLE1BRXpCQyxRQUZ5QjtBQUFBLE1BRWZDLFdBRmU7O0FBQUEsbUJBUVJSLHNEQUFRLENBQUMsRUFBRCxDQVJBO0FBQUEsTUFRekJHLElBUnlCO0FBQUEsTUFRbkJNLE9BUm1COztBQUFBLG1CQVNGVCxzREFBUSxDQUFDLEVBQUQsQ0FUTjtBQUFBLE1BU3pCSSxPQVR5QjtBQUFBLE1BU2hCTSxVQVRnQjs7QUFBQSxtQkFVTlYsc0RBQVEsQ0FBQyxFQUFELENBVkY7QUFBQSxNQVV6QkssS0FWeUI7QUFBQSxNQVVsQk0sUUFWa0I7O0FBQUEsbUJBV1ZYLHNEQUFRLENBQUMsQ0FBRCxDQVhFO0FBQUEsTUFXekJNLEdBWHlCO0FBQUEsTUFXcEJNLE1BWG9COztBQWFoQ0MseURBQVMsQ0FBQyxZQUFNO0FBQ1pDLGVBQVc7QUFDZCxHQUZRLEVBRU4sRUFGTSxDQUFUOztBQUlBLE1BQU1BLFdBQVc7QUFBQSxxVEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNJQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVVwQixHQUFWLENBREo7O0FBQUE7QUFDWnFCLHFCQURZO0FBRWhCVCx5QkFBVyxDQUFDUyxPQUFPLENBQUNDLElBQVQsQ0FBWDs7QUFGZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWEosV0FBVztBQUFBO0FBQUE7QUFBQSxLQUFqQjs7QUFJQSxNQUFNSyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDeEJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosRUFBeUJkLFFBQXpCO0FBQ0EsUUFBSUEsUUFBUSxDQUFDTixJQUFULElBQWlCTSxRQUFRLENBQUNOLElBQVQsQ0FBY3FCLE1BQW5DLEVBQ0ksT0FBUWYsUUFBUSxDQUFDTixJQUFULENBQWNzQixHQUFkLENBQWtCLFVBQUNOLE9BQUQsRUFBVU8sS0FBVjtBQUFBLDBCQUN6QjtBQUFnQixpQkFBUyxFQUFFQyw2REFBTSxDQUFDQyxRQUFsQztBQUFBLDhCQUNZVCxPQUFELEdBQVlBLE9BQU8sQ0FBQ2QsSUFBcEIsR0FBMkIsR0FEdEMsb0JBQzJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRDNDLGdCQUVlYyxPQUFELEdBQVlBLE9BQU8sQ0FBQ2IsT0FBcEIsR0FBOEIsR0FGNUMscUJBRWtEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRmxELGNBR2FhLE9BQUQsR0FBWUEsT0FBTyxDQUFDWixLQUFwQixHQUE0QixHQUh4QyxxQkFHOEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIOUMsWUFJV1ksT0FBRCxHQUFZQSxPQUFPLENBQUNYLEdBQXBCLEdBQTBCLEdBSnBDLGVBS0c7QUFBUSxpQkFBTyxFQUFFO0FBQUEsbUJBQU1xQixhQUFhLENBQUNWLE9BQU8sQ0FBQ2YsRUFBVCxDQUFuQjtBQUFBLFdBQWpCO0FBQWtELG1CQUFTLFlBQUt1Qiw2REFBTSxDQUFDRyxNQUFaLGNBQXNCSCw2REFBTSxDQUFDSSxPQUE3QixDQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMSCxlQU1HO0FBQVEsaUJBQU8sRUFBRTtBQUFBLG1CQUFNQyxhQUFhLENBQUNiLE9BQU8sQ0FBQ2YsRUFBVCxDQUFuQjtBQUFBLFdBQWpCO0FBQWtELG1CQUFTLFlBQUt1Qiw2REFBTSxDQUFDRyxNQUFaLGNBQXNCSCw2REFBTSxDQUFDTSxTQUE3QixDQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFOSDtBQUFBLFNBQVNQLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUR5QjtBQUFBLEtBQWxCLENBQVIsQ0FESixLQVdLO0FBQ0QsMEJBQVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUjtBQUNIO0FBQ0osR0FoQkQ7O0FBa0JBLE1BQU1RLFVBQVU7QUFBQSxxVEFBRyxrQkFBTzdCLElBQVAsRUFBYUMsT0FBYixFQUFzQkMsS0FBdEIsRUFBNkJDLEdBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0lTLDRDQUFLLENBQUNrQixJQUFOLENBQVdyQyxHQUFYLEVBQWdCO0FBQUVPLG9CQUFJLEVBQUpBLElBQUY7QUFBUUMsdUJBQU8sRUFBUEEsT0FBUjtBQUFpQkMscUJBQUssRUFBTEEsS0FBakI7QUFBd0JDLG1CQUFHLEVBQUhBO0FBQXhCLGVBQWhCLENBREo7O0FBQUE7QUFDWDRCLG9CQURXO0FBRWZkLHFCQUFPLENBQUNDLEdBQVIsQ0FBWWEsTUFBTSxDQUFDaEIsSUFBbkI7QUFDQVYseUJBQVcsQ0FBQzBCLE1BQU0sQ0FBQ2hCLElBQVIsQ0FBWDs7QUFIZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFWYyxVQUFVO0FBQUE7QUFBQTtBQUFBLEtBQWhCOztBQU1BLE1BQU1GLGFBQWE7QUFBQSxxVEFBRyxrQkFBTzVCLEVBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDR2EsNENBQUssVUFBTCxXQUFnQm5CLEdBQWhCLGNBQXVCTSxFQUF2QixFQURIOztBQUFBO0FBQ1pnQyxvQkFEWTtBQUVsQmQscUJBQU8sQ0FBQ0MsR0FBUixDQUFZYSxNQUFNLENBQUNoQixJQUFuQjtBQUNBVix5QkFBVyxDQUFDMEIsTUFBTSxDQUFDaEIsSUFBUixDQUFYOztBQUhrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFiWSxhQUFhO0FBQUE7QUFBQTtBQUFBLEtBQW5COztBQUtBLE1BQU1ILGFBQWE7QUFBQSxxVEFBRyxrQkFBT3pCLEVBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDR2EsNENBQUssQ0FBQ29CLEdBQU4sV0FBYXZDLEdBQWIsY0FBb0JNLEVBQXBCLEdBQTBCO0FBQzNDQyxvQkFBSSxFQUFKQSxJQUQyQztBQUUzQ0MsdUJBQU8sRUFBUEEsT0FGMkM7QUFHM0NDLHFCQUFLLEVBQUxBLEtBSDJDO0FBSTNDQyxtQkFBRyxFQUFIQTtBQUoyQyxlQUExQixDQURIOztBQUFBO0FBQ1o0QixvQkFEWTtBQU9sQmQscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFaLEVBQW1DYSxNQUFNLENBQUNoQixJQUExQztBQUNBVix5QkFBVyxDQUFDMEIsTUFBTSxDQUFDaEIsSUFBUixDQUFYOztBQVJrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFiUyxhQUFhO0FBQUE7QUFBQTtBQUFBLEtBQW5COztBQVdBLHNCQUNJLHFFQUFDLDBEQUFEO0FBQUEsNEJBQ0kscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUlJO0FBQUssZUFBUyxFQUFFRiw2REFBTSxDQUFDVyxTQUF2QjtBQUFBLDhCQUNJLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixFQUVLQyxJQUFJLENBQUNDLFNBQUwsQ0FBZS9CLFFBQVEsQ0FBQ0EsUUFBeEIsQ0FGTCxlQUdJO0FBQUksaUJBQVMsRUFBRWtCLDZEQUFNLENBQUN4QixJQUF0QjtBQUFBLGtCQUNLa0IsYUFBYTtBQURsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEosZUFNSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5KLGVBT0k7QUFBSyxpQkFBUyxFQUFFTSw2REFBTSxDQUFDeEIsSUFBdkI7QUFBQSwyQ0FDVztBQUFPLGNBQUksRUFBQyxNQUFaO0FBQW1CLGtCQUFRLEVBQUUsa0JBQUNzQyxDQUFEO0FBQUEsbUJBQU85QixPQUFPLENBQUM4QixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFkO0FBQUEsV0FBN0I7QUFBNkQsbUJBQVMsRUFBRWhCLDZEQUFNLENBQUNpQjtBQUEvRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURYLDZCQUVjO0FBQU8sY0FBSSxFQUFDLE1BQVo7QUFBbUIsa0JBQVEsRUFBRSxrQkFBQ0gsQ0FBRDtBQUFBLG1CQUFPN0IsVUFBVSxDQUFDNkIsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBakI7QUFBQSxXQUE3QjtBQUFnRSxtQkFBUyxFQUFFaEIsNkRBQU0sQ0FBQ2lCO0FBQWxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRmQsMkJBR1k7QUFBTyxjQUFJLEVBQUMsTUFBWjtBQUFtQixrQkFBUSxFQUFFLGtCQUFDSCxDQUFEO0FBQUEsbUJBQU81QixRQUFRLENBQUM0QixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFmO0FBQUEsV0FBN0I7QUFBNkQsbUJBQVMsRUFBRWhCLDZEQUFNLENBQUNpQjtBQUEvRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhaLHlCQUlVO0FBQU8sY0FBSSxFQUFDLFFBQVo7QUFBcUIsa0JBQVEsRUFBRSxrQkFBQ0gsQ0FBRDtBQUFBLG1CQUFPM0IsTUFBTSxDQUFDMkIsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBYjtBQUFBLFdBQS9CO0FBQThELG1CQUFTLEVBQUVoQiw2REFBTSxDQUFDaUI7QUFBaEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKVixlQUtJO0FBQVEsaUJBQU8sRUFBRTtBQUFBLG1CQUFNVixVQUFVLENBQUM3QixJQUFELEVBQU9DLE9BQVAsRUFBZ0JDLEtBQWhCLEVBQXVCQyxHQUF2QixDQUFoQjtBQUFBLFdBQWpCO0FBQThELG1CQUFTLFlBQUttQiw2REFBTSxDQUFDRyxNQUFaLGNBQXNCSCw2REFBTSxDQUFDa0IsTUFBN0IsQ0FBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUF1QkgsQ0FwRkQ7O0dBQU03QyxZOzs7QUFzRlM4QyxrSUFBTyxDQUFDOUMsWUFBRCxDQUF0QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9lZGl0U3R1ZGVudC44NGFiYTE3NTMzYWY1YTMwNTYyYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2YmFyJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3N0ZC5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBzdGRBdXRoIGZyb20gJy4uL2NvbXBvbmVudHMvc3RkQXV0aCdcclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcvY29uZmlnJ1xyXG5cclxuY29uc3QgVVJMID0gYCR7Y29uZmlnLlVSTH0vc3R1ZGVudHNgXHJcbmNvbnN0IGVkaXRTdHVkZW50cyA9ICh7IHRva2VuIH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBbc3R1ZGVudHMsIHNldFN0dWRlbnRzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBsaXN0OlxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICB7IGlkOiBcIjAwMVwiLCBuYW1lOiAndGVzdCcsIHN1cm5hbWU6ICdrdXAnLCBtYWpvcjogXCJDb0VcIiwgR1BBOiAyLjMgfSxcclxuICAgICAgICAgICAgXVxyXG4gICAgfSlcclxuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW3N1cm5hbWUsIHNldFN1cm5hbWVdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbbWFqb3IsIHNldE1ham9yXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW0dQQSwgc2V0R1BBXSA9IHVzZVN0YXRlKDApXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXRTdHVkZW50cygpXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdCBnZXRTdHVkZW50cyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBsZXQgc3R1ZGVudCA9IGF3YWl0IGF4aW9zLmdldChVUkwpXHJcbiAgICAgICAgc2V0U3R1ZGVudHMoc3R1ZGVudC5kYXRhKVxyXG4gICAgfVxyXG4gICAgY29uc3QgcHJpbnRTdHVkZW50cyA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnU3R1ZGVudHM6Jywgc3R1ZGVudHMpXHJcbiAgICAgICAgaWYgKHN0dWRlbnRzLmxpc3QgJiYgc3R1ZGVudHMubGlzdC5sZW5ndGgpXHJcbiAgICAgICAgICAgIHJldHVybiAoc3R1ZGVudHMubGlzdC5tYXAoKHN0dWRlbnQsIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAoPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLmxpc3RJdGVtfT5cclxuICAgICAgICAgICAgICAgIE5hbWUgOiB7KHN0dWRlbnQpID8gc3R1ZGVudC5uYW1lIDogJy0nfSA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIFN1cm5hbWUgOiB7KHN0dWRlbnQpID8gc3R1ZGVudC5zdXJuYW1lIDogJy0nfSAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICBNYWpvciA6IHsoc3R1ZGVudCkgPyBzdHVkZW50Lm1ham9yIDogJy0nfSAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICBHUEEgOiB7KHN0dWRlbnQpID8gc3R1ZGVudC5HUEEgOiAnLSd9IFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB1cGRhdGVTdHVkZW50KHN0dWRlbnQuaWQpfSBjbGFzc05hbWU9e2Ake3N0eWxlcy5idXR0b259ICR7c3R5bGVzLmJ0bkVkaXR9YH0+VXBkYXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRlbGV0ZVN0dWRlbnQoc3R1ZGVudC5pZCl9IGNsYXNzTmFtZT17YCR7c3R5bGVzLmJ1dHRvbn0gJHtzdHlsZXMuYnRuRGVsZXRlfWB9PiBEZWxldGUgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvbGk+KVxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gKDxoMj5ObyBzdHVkZW50czwvaDI+KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhZGRTdHVkZW50ID0gYXN5bmMgKG5hbWUsIHN1cm5hbWUsIG1ham9yLCBHUEEpID0+IHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChVUkwsIHsgbmFtZSwgc3VybmFtZSwgbWFqb3IsIEdQQSB9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhKVxyXG4gICAgICAgIHNldFN0dWRlbnRzKHJlc3VsdC5kYXRhKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlbGV0ZVN0dWRlbnQgPSBhc3luYyAoaWQpID0+IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5kZWxldGUoYCR7VVJMfS8ke2lkfWApXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEpXHJcbiAgICAgICAgc2V0U3R1ZGVudHMocmVzdWx0LmRhdGEpXHJcbiAgICB9XHJcbiAgICBjb25zdCB1cGRhdGVTdHVkZW50ID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucHV0KGAke1VSTH0vJHtpZH1gLCB7XHJcbiAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgIHN1cm5hbWUsXHJcbiAgICAgICAgICAgIG1ham9yLFxyXG4gICAgICAgICAgICBHUEFcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzdHVkZW50IGlkIHVwZGF0ZTogJywgcmVzdWx0LmRhdGEpXHJcbiAgICAgICAgc2V0U3R1ZGVudHMocmVzdWx0LmRhdGEpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5TdHVkZW50czwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgICAgICAgICAge0pTT04uc3RyaW5naWZ5KHN0dWRlbnRzLnN0dWRlbnRzKX1cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5saXN0fT5cclxuICAgICAgICAgICAgICAgICAgICB7cHJpbnRTdHVkZW50cygpfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDxoMT5BZGQgc3R1ZGVudDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpc3R9PlxyXG4gICAgICAgICAgICAgICAgICAgIE5hbWUgOiA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9e3N0eWxlcy50ZXh0SW5wdXR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgU3VybmFtZSA6IDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U3VybmFtZShlLnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT17c3R5bGVzLnRleHRJbnB1dH0vPiBcclxuICAgICAgICAgICAgICAgICAgICBNYWpvciA6IDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWFqb3IoZS50YXJnZXQudmFsdWUpfWNsYXNzTmFtZT17c3R5bGVzLnRleHRJbnB1dH0gLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgR1BBIDogPGlucHV0IHR5cGU9XCJudW1iZXJcIiBvbkNoYW5nZT17KGUpID0+IHNldEdQQShlLnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT17c3R5bGVzLnRleHRJbnB1dH0vPiBcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGFkZFN0dWRlbnQobmFtZSwgc3VybmFtZSwgbWFqb3IsIEdQQSl9IGNsYXNzTmFtZT17YCR7c3R5bGVzLmJ1dHRvbn0gJHtzdHlsZXMuYnRuQWRkfWB9PkFkZCBuZXcgc3R1ZGVudDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RkQXV0aChlZGl0U3R1ZGVudHMpXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcmVxLCByZXMgfSkge1xyXG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgdG9rZW46IHJlcS5jb29raWVzLnRva2VuIHx8IFwiXCIgfSB9O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==