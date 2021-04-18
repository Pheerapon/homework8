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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Students"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 15
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_std_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_navbar__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 15
      }, _this), JSON.stringify(students.students), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        className: _styles_std_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.list,
        children: printStudents()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Add student"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 15
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
          lineNumber: 45,
          columnNumber: 26
        }, _this), "Surname : ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          onChange: function onChange(e) {
            return setSurname(e.target.value);
          },
          className: _styles_std_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.textInput
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 29
        }, _this), "Major : ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          onChange: function onChange(e) {
            return setMajor(e.target.value);
          },
          className: _styles_std_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.textInput
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 27
        }, _this), "GPA : ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "number",
          onChange: function onChange(e) {
            return setGPA(e.target.value);
          },
          className: _styles_std_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.textInput
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: function onClick() {
            return addStudent(name, surname, major, GPA);
          },
          className: "".concat(_styles_std_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.button, " ").concat(_styles_std_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.btnAdd),
          children: "Add new student"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 19
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 15
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 7
  }, _this);

  var printStudents = function printStudents() {
    console.log('Students:', students);
    if (students.list && students.list.length) return students.list.map(function (student, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: _styles_std_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.listItem,
        children: ["Name : ", student ? student.name : '-', " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 57
        }, _this), "Surname : ", student ? student.surname : '-', "  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 64
        }, _this), "Major : ", student ? student.major : '-', "  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 60
        }, _this), "GPA : ", student ? student.GPA : '-', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: function onClick() {
            return updateStudent(student.id);
          },
          className: "".concat(_styles_std_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.button, " ").concat(_styles_std_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.btnEdit),
          children: "Update"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: function onClick() {
            return deleteStudent(student.id);
          },
          className: "".concat(_styles_std_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.button, " ").concat(_styles_std_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.btnDelete),
          children: " Delete "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 17
        }, _this)]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 14
      }, _this);
    });else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "No students"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZWRpdFN0dWRlbnQuanMiXSwibmFtZXMiOlsiVVJMIiwiY29uZmlnIiwiZWRpdFN0dWRlbnRzIiwidG9rZW4iLCJ1c2VTdGF0ZSIsImxpc3QiLCJpZCIsIm5hbWUiLCJzdXJuYW1lIiwibWFqb3IiLCJHUEEiLCJzdHVkZW50cyIsInNldFN0dWRlbnRzIiwic2V0TmFtZSIsInNldFN1cm5hbWUiLCJzZXRNYWpvciIsInNldEdQQSIsInVzZUVmZmVjdCIsImdldFN0dWRlbnRzIiwiYXhpb3MiLCJnZXQiLCJzdHVkZW50IiwiZGF0YSIsInN0eWxlcyIsImNvbnRhaW5lciIsIkpTT04iLCJzdHJpbmdpZnkiLCJwcmludFN0dWRlbnRzIiwiZSIsInRhcmdldCIsInZhbHVlIiwidGV4dElucHV0IiwiYWRkU3R1ZGVudCIsImJ1dHRvbiIsImJ0bkFkZCIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJtYXAiLCJpbmRleCIsImxpc3RJdGVtIiwidXBkYXRlU3R1ZGVudCIsImJ0bkVkaXQiLCJkZWxldGVTdHVkZW50IiwiYnRuRGVsZXRlIiwicG9zdCIsInJlc3VsdCIsInB1dCIsInN0ZEF1dGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEdBQUcsYUFBTUMsc0RBQU0sQ0FBQ0QsR0FBYixjQUFUOztBQUNBLElBQU1FLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQWU7QUFBQTs7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7O0FBQUEsa0JBRUFDLHNEQUFRLENBQUM7QUFDckNDLFFBQUksRUFDQSxDQUNJO0FBQUVDLFFBQUUsRUFBRSxLQUFOO0FBQWFDLFVBQUksRUFBRSxNQUFuQjtBQUEyQkMsYUFBTyxFQUFFLEtBQXBDO0FBQTJDQyxXQUFLLEVBQUUsS0FBbEQ7QUFBeURDLFNBQUcs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LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZiYXInXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvc3RkLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHN0ZEF1dGggZnJvbSAnLi4vY29tcG9uZW50cy9zdGRBdXRoJ1xyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZy9jb25maWcnXHJcblxyXG5jb25zdCBVUkwgPSBgJHtjb25maWcuVVJMfS9zdHVkZW50c2BcclxuY29uc3QgZWRpdFN0dWRlbnRzID0gKHsgdG9rZW4gfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtzdHVkZW50cywgc2V0U3R1ZGVudHNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGxpc3Q6XHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIHsgaWQ6IFwiMDAxXCIsIG5hbWU6ICd0ZXN0Jywgc3VybmFtZTogJ2t1cCcsIG1ham9yOiBcIkNvRVwiLCBHUEE6IDIuMyB9LFxyXG4gICAgICAgICAgICBdXHJcbiAgICB9KVxyXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbc3VybmFtZSwgc2V0U3VybmFtZV0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFttYWpvciwgc2V0TWFqb3JdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbR1BBLCBzZXRHUEFdID0gdXNlU3RhdGUoMClcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldFN0dWRlbnRzKClcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IGdldFN0dWRlbnRzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGxldCBzdHVkZW50ID0gYXdhaXQgYXhpb3MuZ2V0KFVSTClcclxuICAgICAgICBzZXRTdHVkZW50cyhzdHVkZW50LmRhdGEpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgPHRpdGxlPlN0dWRlbnRzPC90aXRsZT5cclxuICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgICAgICAge0pTT04uc3RyaW5naWZ5KHN0dWRlbnRzLnN0dWRlbnRzKX1cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMubGlzdH0+XHJcbiAgICAgICAgICAgICAgICAgIHtwcmludFN0dWRlbnRzKCl9XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8aDE+QWRkIHN0dWRlbnQ8L2gxPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlzdH0+XHJcbiAgICAgICAgICAgICAgICAgIE5hbWUgOiA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9e3N0eWxlcy50ZXh0SW5wdXR9IC8+XHJcbiAgICAgICAgICAgICAgICAgIFN1cm5hbWUgOiA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17KGUpID0+IHNldFN1cm5hbWUoZS50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9e3N0eWxlcy50ZXh0SW5wdXR9Lz4gXHJcbiAgICAgICAgICAgICAgICAgIE1ham9yIDogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRNYWpvcihlLnRhcmdldC52YWx1ZSl9Y2xhc3NOYW1lPXtzdHlsZXMudGV4dElucHV0fSAvPiBcclxuICAgICAgICAgICAgICAgICAgR1BBIDogPGlucHV0IHR5cGU9XCJudW1iZXJcIiBvbkNoYW5nZT17KGUpID0+IHNldEdQQShlLnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT17c3R5bGVzLnRleHRJbnB1dH0vPiBcclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBhZGRTdHVkZW50KG5hbWUsIHN1cm5hbWUsIG1ham9yLCBHUEEpfSBjbGFzc05hbWU9e2Ake3N0eWxlcy5idXR0b259ICR7c3R5bGVzLmJ0bkFkZH1gfT5BZGQgbmV3IHN0dWRlbnQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG5cclxuICAgIGNvbnN0IHByaW50U3R1ZGVudHMgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1N0dWRlbnRzOicsIHN0dWRlbnRzKVxyXG4gICAgICAgIGlmIChzdHVkZW50cy5saXN0ICYmIHN0dWRlbnRzLmxpc3QubGVuZ3RoKVxyXG4gICAgICAgICAgICByZXR1cm4gKHN0dWRlbnRzLmxpc3QubWFwKChzdHVkZW50LCBpbmRleCkgPT5cclxuICAgICAgICAgICAgKDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3N0eWxlcy5saXN0SXRlbX0+XHJcbiAgICAgICAgICAgICAgICBOYW1lIDogeyhzdHVkZW50KSA/IHN0dWRlbnQubmFtZSA6ICctJ30gPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICBTdXJuYW1lIDogeyhzdHVkZW50KSA/IHN0dWRlbnQuc3VybmFtZSA6ICctJ30gIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgTWFqb3IgOiB7KHN0dWRlbnQpID8gc3R1ZGVudC5tYWpvciA6ICctJ30gIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgR1BBIDogeyhzdHVkZW50KSA/IHN0dWRlbnQuR1BBIDogJy0nfSBcclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdXBkYXRlU3R1ZGVudChzdHVkZW50LmlkKX0gY2xhc3NOYW1lPXtgJHtzdHlsZXMuYnV0dG9ufSAke3N0eWxlcy5idG5FZGl0fWB9PlVwZGF0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkZWxldGVTdHVkZW50KHN0dWRlbnQuaWQpfSBjbGFzc05hbWU9e2Ake3N0eWxlcy5idXR0b259ICR7c3R5bGVzLmJ0bkRlbGV0ZX1gfT4gRGVsZXRlIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2xpPilcclxuICAgICAgICAgICAgKSlcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuICg8aDI+Tm8gc3R1ZGVudHM8L2gyPilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWRkU3R1ZGVudCA9IGFzeW5jIChuYW1lLCBzdXJuYW1lLCBtYWpvciwgR1BBKSA9PiB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoVVJMLCB7IG5hbWUsIHN1cm5hbWUsIG1ham9yLCBHUEEgfSlcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQuZGF0YSlcclxuICAgICAgICBzZXRTdHVkZW50cyhyZXN1bHQuZGF0YSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkZWxldGVTdHVkZW50ID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZGVsZXRlKGAke1VSTH0vJHtpZH1gKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhKVxyXG4gICAgICAgIHNldFN0dWRlbnRzKHJlc3VsdC5kYXRhKVxyXG4gICAgfVxyXG4gICAgY29uc3QgdXBkYXRlU3R1ZGVudCA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnB1dChgJHtVUkx9LyR7aWR9YCwge1xyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICBzdXJuYW1lLFxyXG4gICAgICAgICAgICBtYWpvcixcclxuICAgICAgICAgICAgR1BBXHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zb2xlLmxvZygnc3R1ZGVudCBpZCB1cGRhdGU6ICcsIHJlc3VsdC5kYXRhKVxyXG4gICAgICAgIHNldFN0dWRlbnRzKHJlc3VsdC5kYXRhKVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdGRBdXRoKGVkaXRTdHVkZW50cylcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyByZXEsIHJlcyB9KSB7XHJcbiAgICByZXR1cm4geyBwcm9wczogeyB0b2tlbjogcmVxLmNvb2tpZXMudG9rZW4gfHwgXCJcIiB9IH07XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9