"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/WinPage",{

/***/ "./pages/WinPage.tsx":
/*!***************************!*\
  !*** ./pages/WinPage.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/context */ \"./context/context.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nconst WinPage = ()=>{\n    _s();\n    const { score , setScore  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_2__.themes);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"maindiv p-3 w-4/5 m-auto mt-8 bg-white-800 border-2 border-slate-400 border-solid rounded-lg \",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"secounddiv p-3 w-4/5 m-auto mt-8 bg-white-800 justify-center flex   \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \" hover:text-amber-600 text-lg font-bold text-center\",\n                        children: \"Exam is completed your score is \".concat(score, \" out of \", 9)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\WinPage.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"\",\n                        children: \"re Attempt exam\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\WinPage.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\WinPage.tsx\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\WinPage.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(WinPage, \"qXEzIOIqmZPx5aRf/yfCC16hk6s=\");\n_c = WinPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WinPage);\nvar _c;\n$RefreshReg$(_c, \"WinPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9XaW5QYWdlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNtQztBQUNRO0FBQzNDLE1BQU1FLFVBQVUsSUFBTTs7SUFDcEIsTUFBTSxFQUFFQyxNQUFLLEVBQUVDLFNBQVEsRUFBRSxHQUFHSixpREFBVUEsQ0FBQ0Msb0RBQU1BO0lBQzdDLHFCQUNFO2tCQUNFLDRFQUFDSTtZQUFJQyxXQUFVO3NCQU9iLDRFQUFDRDtnQkFDQ0MsV0FBVTs7a0NBR1YsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUF1RCxtQ0FBcUQsT0FBbEJILE9BQU0sWUFBVTs7Ozs7O2tDQUV4SCw4REFBQ0s7d0JBQU9GLFdBQVU7a0NBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUsvQjtHQXRCTUo7S0FBQUE7QUF3Qk4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvV2luUGFnZS50c3g/ZDA2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdGhlbWVzIH0gZnJvbSBcIkAvY29udGV4dC9jb250ZXh0XCI7XHJcbmNvbnN0IFdpblBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBzY29yZSwgc2V0U2NvcmUgfSA9IHVzZUNvbnRleHQodGhlbWVzKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluZGl2IHAtMyB3LTQvNSBtLWF1dG8gbXQtOCBiZy13aGl0ZS04MDAgYm9yZGVyLTJcdGJvcmRlci1zbGF0ZS00MDBcdGJvcmRlci1zb2xpZFx0cm91bmRlZC1sZ1x0XCI+XHJcbiAgICAgICAgey8qIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA0NjdweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDMycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDU0ZDU1OyAqL31cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzZWNvdW5kZGl2IHAtMyB3LTQvNSBtLWF1dG8gbXQtOCBiZy13aGl0ZS04MDAganVzdGlmeS1jZW50ZXIgZmxleFxyXG5cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCIgaG92ZXI6dGV4dC1hbWJlci02MDAgdGV4dC1sZyBmb250LWJvbGQgdGV4dC1jZW50ZXJcIj57YEV4YW0gaXMgY29tcGxldGVkIHlvdXIgc2NvcmUgaXMgJHtzY29yZX0gb3V0IG9mICR7OX1gfTwvaDI+XHJcblxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJcIj5yZSBBdHRlbXB0IGV4YW08L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2luUGFnZTtcclxuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJ0aGVtZXMiLCJXaW5QYWdlIiwic2NvcmUiLCJzZXRTY29yZSIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/WinPage.tsx\n"));

/***/ })

});