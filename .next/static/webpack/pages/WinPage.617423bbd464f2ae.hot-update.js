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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/context */ \"./context/context.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nconst WinPage = ()=>{\n    _s();\n    const { score , setScore  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_2__.themes);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"maindiv p-3 w-4/5 m-auto mt-8 bg-slate-800\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"secounddiv p-3 w-4/5 m-auto mt-8 bg-slate-800 text-indigo-50 hover:text-amber-600 text-lg text\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Exam is completed your score is \".concat(score, \" out of \", 9)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\WinPage.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\WinPage.tsx\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\WinPage.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(WinPage, \"qXEzIOIqmZPx5aRf/yfCC16hk6s=\");\n_c = WinPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WinPage);\nvar _c;\n$RefreshReg$(_c, \"WinPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9XaW5QYWdlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNtQztBQUNRO0FBQzNDLE1BQU1FLFVBQVUsSUFBTTs7SUFDcEIsTUFBTSxFQUFFQyxNQUFLLEVBQUVDLFNBQVEsRUFBRSxHQUFHSixpREFBVUEsQ0FBQ0Msb0RBQU1BO0lBQzdDLHFCQUNFO2tCQUNFLDRFQUFDSTtZQUFJQyxXQUFVO3NCQU9iLDRFQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0M7OEJBQUksbUNBQXFELE9BQWxCSixPQUFNLFlBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xFO0dBakJNRDtLQUFBQTtBQW1CTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9XaW5QYWdlLnRzeD9kMDY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB0aGVtZXMgfSBmcm9tIFwiQC9jb250ZXh0L2NvbnRleHRcIjtcclxuY29uc3QgV2luUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCB7IHNjb3JlLCBzZXRTY29yZSB9ID0gdXNlQ29udGV4dCh0aGVtZXMpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5kaXYgcC0zIHctNC81IG0tYXV0byBtdC04IGJnLXNsYXRlLTgwMFwiPlxyXG4gICAgICAgIHsvKiBwYWRkaW5nOiAxMHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogNDY3cHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xyXG4gICAgYmFja2dyb3VuZDogIzQ1NGQ1NTsgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWNvdW5kZGl2IHAtMyB3LTQvNSBtLWF1dG8gbXQtOCBiZy1zbGF0ZS04MDAgdGV4dC1pbmRpZ28tNTAgaG92ZXI6dGV4dC1hbWJlci02MDAgdGV4dC1sZyB0ZXh0XCI+XHJcbiAgICAgICAgICA8aDI+e2BFeGFtIGlzIGNvbXBsZXRlZCB5b3VyIHNjb3JlIGlzICR7c2NvcmV9IG91dCBvZiAkezl9YH08L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaW5QYWdlO1xyXG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsInRoZW1lcyIsIldpblBhZ2UiLCJzY29yZSIsInNldFNjb3JlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/WinPage.tsx\n"));

/***/ })

});