"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/WinPage";
exports.ids = ["pages/WinPage"];
exports.modules = {

/***/ "./context/context.tsx":
/*!*****************************!*\
  !*** ./context/context.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"themes\": () => (/* binding */ themes)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst themes = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2NvbnRleHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFzQztBQUUvQixNQUFNQyx1QkFBVUQsb0RBQWFBLENBQU0sSUFBSSxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY291bnRlci1hcHBsaWNhdGlvbi8uL2NvbnRleHQvY29udGV4dC50c3g/ZjFkZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgdGhlbWVzID0gIGNyZWF0ZUNvbnRleHQ8YW55PihudWxsKTsiXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInRoZW1lcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/context.tsx\n");

/***/ }),

/***/ "./pages/WinPage.tsx":
/*!***************************!*\
  !*** ./pages/WinPage.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/context */ \"./context/context.tsx\");\n\n\n\n\nconst WinPage = ()=>{\n    const { score , setScore  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_3__.themes);\n    const changePage = ()=>{\n        next_router__WEBPACK_IMPORTED_MODULE_1___default().push({\n            pathname: \"/\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"dark:bg-[#192734]\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"maindiv p-3 w-4/5 m-auto mt-8 bg-white-800 border-2 dark:bg-[#192734] border-slate-400 border-solid rounded-lg \",\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"secounddiv  w-4/5 m-auto mt-4 bg-white-800 justify-around flex flex-col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-2xl hover:text-amber-600  font-bold text-center\",\n                                    children: `Exam is completed your score is ${score} out of ${9}`\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\WinPage.tsx\",\n                                    lineNumber: 18,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\WinPage.tsx\",\n                                lineNumber: 17,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"m-auto p-10 \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"button\",\n                                    className: \"bg-gray-800 text-white-900 dark:bg-white-800 text-white border border-gray-800 hover:bg-white-900  focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-white-600 dark:text-black-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800\",\n                                    onClick: changePage,\n                                    children: \"re Attempt exam\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\WinPage.tsx\",\n                                    lineNumber: 21,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\WinPage.tsx\",\n                                lineNumber: 20,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\WinPage.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\WinPage.tsx\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\WinPage.tsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WinPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9XaW5QYWdlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBaUM7QUFDRTtBQUNRO0FBQzNDLE1BQU1HLFVBQVUsSUFBTTtJQUNwQixNQUFNLEVBQUVDLE1BQUssRUFBRUMsU0FBUSxFQUFFLEdBQUdKLGlEQUFVQSxDQUFDQyxvREFBTUE7SUFDN0MsTUFBTUksYUFBWSxJQUFJO1FBQ3BCTix1REFBVyxDQUFDO1lBQ1ZRLFVBQVU7UUFDWjtJQUNGO0lBQ0EscUJBQ0U7a0JBQ0UsNEVBQUNDO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNEO2dCQUFJQyxXQUFVOztvQkFDWjtrQ0FDRCw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRDswQ0FDQyw0RUFBQ0U7b0NBQUdELFdBQVU7OENBQXlELENBQUMsZ0NBQWdDLEVBQUVOLE1BQU0sUUFBUSxFQUFFLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7MENBRS9ILDhEQUFDSztnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ0U7b0NBQ0NDLE1BQUs7b0NBRUxILFdBQVU7b0NBQ1ZJLFNBQVNSOzhDQUNWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVdmO0FBRUEsaUVBQWVILE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3VudGVyLWFwcGxpY2F0aW9uLy4vcGFnZXMvV2luUGFnZS50c3g/ZDA2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHRoZW1lcyB9IGZyb20gXCJAL2NvbnRleHQvY29udGV4dFwiO1xyXG5jb25zdCBXaW5QYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgc2NvcmUsIHNldFNjb3JlIH0gPSB1c2VDb250ZXh0KHRoZW1lcyk7XHJcbiAgY29uc3QgY2hhbmdlUGFnZSA9KCk9PntcclxuICAgIHJvdXRlci5wdXNoKHtcclxuICAgICAgcGF0aG5hbWU6IFwiL1wiLFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhcms6YmctWyMxOTI3MzRdXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluZGl2IHAtMyB3LTQvNSBtLWF1dG8gbXQtOCBiZy13aGl0ZS04MDAgYm9yZGVyLTIgZGFyazpiZy1bIzE5MjczNF1cdGJvcmRlci1zbGF0ZS00MDBcdGJvcmRlci1zb2xpZFx0cm91bmRlZC1sZ1x0XCI+XHJcbiAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY291bmRkaXYgIHctNC81IG0tYXV0byBtdC00IGJnLXdoaXRlLTgwMCBqdXN0aWZ5LWFyb3VuZCBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsXHQgaG92ZXI6dGV4dC1hbWJlci02MDAgIGZvbnQtYm9sZCB0ZXh0LWNlbnRlclwiPntgRXhhbSBpcyBjb21wbGV0ZWQgeW91ciBzY29yZSBpcyAke3Njb3JlfSBvdXQgb2YgJHs5fWB9PC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS1hdXRvIHAtMTAgXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS04MDAgdGV4dC13aGl0ZS05MDAgZGFyazpiZy13aGl0ZS04MDAgdGV4dC13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktODAwIGhvdmVyOmJnLXdoaXRlLTkwMCAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctZ3JheS0zMDAgZm9udC1tZWRpdW0gcm91bmRlZC1sZyB0ZXh0LXNtIHB4LTUgcHktMi41IHRleHQtY2VudGVyIG1yLTIgbWItMiBkYXJrOmJvcmRlci13aGl0ZS02MDAgZGFyazp0ZXh0LWJsYWNrLTQwMCBkYXJrOmhvdmVyOnRleHQtd2hpdGUgZGFyazpob3ZlcjpiZy1ncmF5LTYwMCBkYXJrOmZvY3VzOnJpbmctZ3JheS04MDBcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17Y2hhbmdlUGFnZX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICByZSBBdHRlbXB0IGV4YW1cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9XCJib3JkZXItMiBib3JkZXItc2xhdGUtNDAwXHRib3JkZXItc29saWRcdHJvdW5kZWQtbGdcIj48L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2luUGFnZTtcclxuIl0sIm5hbWVzIjpbInJvdXRlciIsInVzZUNvbnRleHQiLCJ0aGVtZXMiLCJXaW5QYWdlIiwic2NvcmUiLCJzZXRTY29yZSIsImNoYW5nZVBhZ2UiLCJwdXNoIiwicGF0aG5hbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/WinPage.tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/WinPage.tsx"));
module.exports = __webpack_exports__;

})();