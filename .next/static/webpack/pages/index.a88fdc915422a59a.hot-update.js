"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const [answer, SetAnswer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const data = [\n        {\n            qustion: \"What is JavaScript?\",\n            option: [\n                \"JavaScript is a scripting language used to make the website interactive\",\n                \"JavaScript is an assembly language used to make the website interactive\",\n                \"JavaScript is a compiled language used to make the website interactive\",\n                \"None of Above\"\n            ],\n            ans: \"JavaScript is a scripting language used to make the website interactive\"\n        },\n        {\n            qustion: \" Which of the following is correct about JavaScript?\",\n            option: [\n                \"JavaScript is an Object-Based language\",\n                \"JavaScript is Assembly-language\",\n                \"JavaScript is an Object-Oriented language\",\n                \"JavaScript is a High-level language\"\n            ],\n            ans: \"JavaScript is Assembly-language\"\n        },\n        {\n            qustion: \"Arrays in JavaScript are defined by which of the following statements?\",\n            option: [\n                \"It is an ordered list of values\",\n                \"It is an ordered list of objects\",\n                \"It is an ordered list of string\",\n                \"It is an ordered list of functions\"\n            ],\n            ans: \"It is an ordered list of functions\"\n        },\n        {\n            qustion: \"Which of the following is not javascript data types?\",\n            option: [\n                \"Null type\",\n                \"Undefined type\",\n                \"Number type\",\n                \"All of the mentioned\"\n            ],\n            ans: \"All of the mentioned\"\n        }\n    ];\n    const nextPage = ()=>{\n        if (index < data.length - 1) {\n            setIndex(index + 1);\n        }\n    };\n    const previous = ()=>{\n        if (index > data.length - 1) {\n            setIndex(index + 1);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mr-auto align-middle p-5 border-x-sky-950 border-4 border-solid \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"ques\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: data[index].qustion\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                    lineNumber: 101,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: data[index].option && data[index].option.map((e, i)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"radio\",\n                                    value: e,\n                                    id: i\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                    lineNumber: 109,\n                                    columnNumber: 18\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: i,\n                                    children: e\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                    lineNumber: 110,\n                                    columnNumber: 18\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                            lineNumber: 108,\n                            columnNumber: 20\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                    lineNumber: 104,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: nextPage,\n                    children: \"Next\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                    lineNumber: 116,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"Mm6J6ZPjfePDQVi/CAx+DJtI2x0=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFpQztBQUVsQixTQUFTQyxPQUFPOztJQUMvQixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0gsK0NBQVFBLENBQUMsS0FBSztJQUMxQyxNQUFNLENBQUNJLE9BQVFDLFNBQVMsR0FBQ0wsK0NBQVFBLENBQUM7SUFDbEMsTUFBTU0sT0FBTztRQUNYO1lBQ0VDLFNBQVE7WUFDUkMsUUFBTztnQkFBQztnQkFBMEU7Z0JBQTBFO2dCQUF5RTthQUFnQjtZQUNyUEMsS0FBSztRQUNQO1FBQ0E7WUFDRUYsU0FBUTtZQUNSQyxRQUFPO2dCQUFDO2dCQUF5QztnQkFBa0M7Z0JBQTRDO2FBQXNDO1lBQ3JLQyxLQUFLO1FBQ1A7UUFDQTtZQUNFRixTQUFRO1lBQ1JDLFFBQU87Z0JBQUM7Z0JBQWtDO2dCQUFtQztnQkFBa0M7YUFBcUM7WUFDcEpDLEtBQUs7UUFDUDtRQUNBO1lBQ0VGLFNBQVE7WUFDUkMsUUFBTztnQkFBQztnQkFDUjtnQkFDQTtnQkFDQTthQUF1QjtZQUN2QkMsS0FBSztRQUNQO0tBQ0Q7SUFDRCxNQUFNQyxXQUFXLElBQUk7UUFFbkIsSUFBR04sUUFBTUUsS0FBS0ssTUFBTSxHQUFDLEdBQUU7WUFDckJOLFNBQVNELFFBQU07UUFDakIsQ0FBQztJQUNIO0lBQ0EsTUFBTVEsV0FBVyxJQUFJO1FBRW5CLElBQUdSLFFBQU1FLEtBQUtLLE1BQU0sR0FBQyxHQUFFO1lBQ3JCTixTQUFTRCxRQUFNO1FBQ2pCLENBQUM7SUFDSDtJQUNFLHFCQUNFO2tCQUNFLDRFQUFDUztZQUFJQyxXQUFVOzs4QkF3RFgsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNYLDRFQUFDQztrQ0FBSVQsSUFBSSxDQUFDRixNQUFNLENBQUNHLE9BQU87Ozs7Ozs7Ozs7OzhCQUU1Qiw4REFBQ007OEJBRUVQLElBQUksQ0FBQ0YsTUFBTSxDQUFDSSxNQUFNLElBQUlGLElBQUksQ0FBQ0YsTUFBTSxDQUFDSSxNQUFNLENBQUNRLEdBQUcsQ0FBQyxDQUFDQyxHQUFNQyxJQUFRO3dCQUMzRCxxQkFDSyw4REFBQ0w7OzhDQUNILDhEQUFDTTtvQ0FBTUMsTUFBSztvQ0FBUUMsT0FBT0o7b0NBQUdLLElBQUlKOzs7Ozs7OENBQ2xDLDhEQUFDSztvQ0FBTUMsU0FBU047OENBQUlEOzs7Ozs7Ozs7Ozs7b0JBRzNCOzs7Ozs7OEJBR0EsOERBQUNRO29CQUFPQyxTQUFTaEI7OEJBQVU7Ozs7Ozs7Ozs7Ozs7QUFJckMsQ0FBQztHQXJIdUJUO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5jb25zdCBbYW5zd2VyLCBTZXRBbnN3ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuY29uc3QgW2luZGV4ICwgc2V0SW5kZXhdPXVzZVN0YXRlKDApXG5jb25zdCBkYXRhID0gW1xuICB7XG4gICAgcXVzdGlvbjpcIldoYXQgaXMgSmF2YVNjcmlwdD9cIixcbiAgICBvcHRpb246W1wiSmF2YVNjcmlwdCBpcyBhIHNjcmlwdGluZyBsYW5ndWFnZSB1c2VkIHRvIG1ha2UgdGhlIHdlYnNpdGUgaW50ZXJhY3RpdmVcIixcIkphdmFTY3JpcHQgaXMgYW4gYXNzZW1ibHkgbGFuZ3VhZ2UgdXNlZCB0byBtYWtlIHRoZSB3ZWJzaXRlIGludGVyYWN0aXZlXCIsXCJKYXZhU2NyaXB0IGlzIGEgY29tcGlsZWQgbGFuZ3VhZ2UgdXNlZCB0byBtYWtlIHRoZSB3ZWJzaXRlIGludGVyYWN0aXZlXCIsXCJOb25lIG9mIEFib3ZlXCJdLFxuICAgIGFucyA6XCJKYXZhU2NyaXB0IGlzIGEgc2NyaXB0aW5nIGxhbmd1YWdlIHVzZWQgdG8gbWFrZSB0aGUgd2Vic2l0ZSBpbnRlcmFjdGl2ZVwiIFxuICB9LFxuICB7XG4gICAgcXVzdGlvbjpcIiBXaGljaCBvZiB0aGUgZm9sbG93aW5nIGlzIGNvcnJlY3QgYWJvdXQgSmF2YVNjcmlwdD9cIixcbiAgICBvcHRpb246W1wiSmF2YVNjcmlwdCBpcyBhbiBPYmplY3QtQmFzZWQgbGFuZ3VhZ2VcIixcIkphdmFTY3JpcHQgaXMgQXNzZW1ibHktbGFuZ3VhZ2VcIixcIkphdmFTY3JpcHQgaXMgYW4gT2JqZWN0LU9yaWVudGVkIGxhbmd1YWdlXCIsXCJKYXZhU2NyaXB0IGlzIGEgSGlnaC1sZXZlbCBsYW5ndWFnZVwiXSxcbiAgICBhbnMgOlwiSmF2YVNjcmlwdCBpcyBBc3NlbWJseS1sYW5ndWFnZVwiIFxuICB9LFxuICB7XG4gICAgcXVzdGlvbjpcIkFycmF5cyBpbiBKYXZhU2NyaXB0IGFyZSBkZWZpbmVkIGJ5IHdoaWNoIG9mIHRoZSBmb2xsb3dpbmcgc3RhdGVtZW50cz9cIixcbiAgICBvcHRpb246W1wiSXQgaXMgYW4gb3JkZXJlZCBsaXN0IG9mIHZhbHVlc1wiLFwiSXQgaXMgYW4gb3JkZXJlZCBsaXN0IG9mIG9iamVjdHNcIixcIkl0IGlzIGFuIG9yZGVyZWQgbGlzdCBvZiBzdHJpbmdcIixcIkl0IGlzIGFuIG9yZGVyZWQgbGlzdCBvZiBmdW5jdGlvbnNcIl0sXG4gICAgYW5zIDpcIkl0IGlzIGFuIG9yZGVyZWQgbGlzdCBvZiBmdW5jdGlvbnNcIiBcbiAgfSxcbiAge1xuICAgIHF1c3Rpb246XCJXaGljaCBvZiB0aGUgZm9sbG93aW5nIGlzIG5vdCBqYXZhc2NyaXB0IGRhdGEgdHlwZXM/XCIsXG4gICAgb3B0aW9uOltcIk51bGwgdHlwZVwiLFxuICAgIFwiVW5kZWZpbmVkIHR5cGVcIixcbiAgICBcIk51bWJlciB0eXBlXCIsXG4gICAgXCJBbGwgb2YgdGhlIG1lbnRpb25lZFwiXSxcbiAgICBhbnMgOlwiQWxsIG9mIHRoZSBtZW50aW9uZWRcIiBcbiAgfVxuXVxuY29uc3QgbmV4dFBhZ2UgPSAoKT0+e1xuIFxuICBpZihpbmRleDxkYXRhLmxlbmd0aC0xKXtcbiAgICBzZXRJbmRleChpbmRleCsxKTtcbiAgfVxufVxuY29uc3QgcHJldmlvdXMgPSAoKT0+e1xuIFxuICBpZihpbmRleD5kYXRhLmxlbmd0aC0xKXtcbiAgICBzZXRJbmRleChpbmRleCsxKTtcbiAgfVxufSBcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvIGFsaWduLW1pZGRsZSBwLTUgYm9yZGVyLXgtc2t5LTk1MCBib3JkZXItNCBib3JkZXItc29saWQgXCI+XG4gICAgICAgICAgey8qIHtkYXRhLm1hcCgoaXRlbSk9PntcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bmb250LXNlcmlmIHRleHQtY2VudGVyICR7YW5zd2VyP1wiYmctZ3JhZGllbnQtdG8tciBmcm9tLWN5YW4tNTAwIHRvLWJsdWUtNTAwXCI6XCJiZy1ncmFkaWVudC10by1yIGZyb20td2hpdGUtNTAwIHRvLXdoaXRlLTUwMFwifWB9ID5cbiAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJxdXN0aW9uXCI+e2l0ZW0ucXVzdGlvbn08L2gzPlxuICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiQGFwcGx5IGdyaWQgZ3JpZC1jb2xzLVsxZnJfMWZyXSBnYXAtMyB0ZXh0LVsxNXB4XVwiPlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnMgZ3Jvd1wiID5cblxuICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiIFxuICAgICAgICAgICAgIG5hbWU9XCJjaFwiXG4gICAgICAgICAgICAgaWQ9XCJpbnB1dDFcIiBcbiAgICAgICAgICAgICB2YWx1ZT17aXRlbS5vcHRpb25bMF19IFxuICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnsgU2V0QW5zd2VyKGUudGFyZ2V0LnZhbHVlPT09aXRlbS5hbnMpfX0gLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW5wdXQxXCIgPntpdGVtLm9wdGlvblswXX1cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5zIGdyb3cgXCI+XG5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiIFxuICAgICAgICAgICAgIG5hbWU9XCJjaFwiIFxuICAgICAgICAgICAgIGlkPVwiaW5wdXQyXCIgXG4gICAgICAgICAgICAgdmFsdWU9e2l0ZW0ub3B0aW9uWzFdfVxuICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnsgU2V0QW5zd2VyKGUudGFyZ2V0LnZhbHVlPT09aXRlbS5hbnMpfX0gLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW5wdXQyXCIgID57aXRlbS5vcHRpb25bMV19PC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnMgZ3JvdyBcIj5cblxuICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgdHlwZT1cInJhZGlvXCIgXG4gICAgICAgICAgICBuYW1lPVwiY2hcIiBcbiAgICAgICAgICAgIGlkPVwiaW5wdXQzXCIgXG4gICAgICAgICAgICB2YWx1ZT17aXRlbS5vcHRpb25bMl19IFxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+eyAgU2V0QW5zd2VyKGUudGFyZ2V0LnZhbHVlPT09aXRlbS5hbnMpfX0gLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW5wdXQzXCIgPntpdGVtLm9wdGlvblsyXX1cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5zIGdyb3cgXCI+XG5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInJhZGlvXCIgXG4gICAgICAgICAgICBuYW1lPVwiY2hcIiBcbiAgICAgICAgICAgIGlkPVwiaW5wdXQ0XCIgXG4gICAgICAgICAgICB2YWx1ZT17aXRlbS5vcHRpb25bM119IFxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+e1NldEFuc3dlcihlLnRhcmdldC52YWx1ZT09PWl0ZW0uYW5zKX19ICAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbnB1dDRcIiA+e2l0ZW0ub3B0aW9uWzNdfTwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvPlxuICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgICAgKX0gKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWVzXCI+XG4gICAgICAgICAgICAgIDxoMz57ZGF0YVtpbmRleF0ucXVzdGlvbn08L2gzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHtkYXRhW2luZGV4XS5vcHRpb24gJiYgZGF0YVtpbmRleF0ub3B0aW9uLm1hcCgoZTphbnksaTphbnkpPT57XG4gICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9e2V9IGlkPXtpfSAvPlxuICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17aX0+e2V9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtuZXh0UGFnZX0+TmV4dDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSG9tZSIsImFuc3dlciIsIlNldEFuc3dlciIsImluZGV4Iiwic2V0SW5kZXgiLCJkYXRhIiwicXVzdGlvbiIsIm9wdGlvbiIsImFucyIsIm5leHRQYWdlIiwibGVuZ3RoIiwicHJldmlvdXMiLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsIm1hcCIsImUiLCJpIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJpZCIsImxhYmVsIiwiaHRtbEZvciIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});