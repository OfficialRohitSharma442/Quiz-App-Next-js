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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const [answer, SetAnswer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(ans);\n    const data = [\n        {\n            qustion: \"What is JavaScript?\",\n            option: [\n                \"JavaScript is a scripting language used to make the website interactive\",\n                \"JavaScript is an assembly language used to make the website interactive\",\n                \"JavaScript is a compiled language used to make the website interactive\",\n                \"None of Above\"\n            ],\n            ans: \"JavaScript is a scripting language used to make the website interactive\"\n        },\n        {\n            qustion: \" Which of the following is correct about JavaScript?\",\n            option: [\n                \"JavaScript is an Object-Based language\",\n                \"JavaScript is Assembly-language\",\n                \"JavaScript is an Object-Oriented language\",\n                \"JavaScript is a High-level language\"\n            ],\n            ans: \"JavaScript is an Object-Based language\"\n        },\n        {\n            qustion: \"Arrays in JavaScript are defined by which of the following statements?\",\n            option: [\n                \"It is an ordered list of values\",\n                \"It is an ordered list of objects\",\n                \"It is an ordered list of string\",\n                \"It is an ordered list of functions\"\n            ],\n            ans: \"It is an ordered list of values\"\n        },\n        {\n            qustion: \"Which of the following is not javascript data types?\",\n            option: [\n                \"Null type\",\n                \"Undefined type\",\n                \"Number type\",\n                \"All of the mentioned\"\n            ],\n            ans: \"All of the mentioned\"\n        }\n    ];\n    function handleChange(e) {\n        console.log(e);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mr-auto align-middle p-5 border-x-sky-950 border-4 border-solid\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"font-serif text-center \",\n                children: data.map((item)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"qustion\",\n                                children: item.qustion\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 16\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                className: \"@apply grid grid-cols-[1fr_1fr] gap-3 text-[15px]\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"ans grow\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"radio\",\n                                                name: \"ch\",\n                                                id: \"input1\",\n                                                value: item.option[0],\n                                                onChange: (e)=>{\n                                                    handleChange(e.target.value === item.ans);\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                lineNumber: 48,\n                                                columnNumber: 13\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"input1\",\n                                                children: item.option[0]\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                lineNumber: 54,\n                                                columnNumber: 13\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 16\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"ans grow \",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"radio\",\n                                                name: \"ch\",\n                                                id: \"input2\",\n                                                value: item.option[1],\n                                                onChange: (e)=>{\n                                                    handleChange(e.target.value === item.ans);\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                lineNumber: 59,\n                                                columnNumber: 13\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"input2\",\n                                                children: item.option[1]\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                lineNumber: 65,\n                                                columnNumber: 13\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"ans grow \",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"radio\",\n                                                name: \"ch\",\n                                                id: \"input3\",\n                                                value: item.option[2],\n                                                onChange: (e)=>{\n                                                    handleChange(e.target.value === item.ans);\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                lineNumber: 69,\n                                                columnNumber: 13\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"input3\",\n                                                children: item.option[2]\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                lineNumber: 75,\n                                                columnNumber: 13\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"ans grow \",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"radio\",\n                                                name: \"ch\",\n                                                id: \"input4\",\n                                                value: item.option[3],\n                                                onChange: (e)=>{\n                                                    handleChange(e.target.value === item.ans);\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                lineNumber: 80,\n                                                columnNumber: 13\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"input4\",\n                                                children: item.option[3]\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                lineNumber: 86,\n                                                columnNumber: 13\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 16\n                            }, this)\n                        ]\n                    }, void 0, true);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"lyYAFJv/Ah5Iy83AYRTa3PNHPgk=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsb2cgfSBmcm9tIFwiY29uc29sZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbmNvbnN0IFthbnN3ZXIsIFNldEFuc3dlcl0gPSB1c2VTdGF0ZShhbnMpO1xuY29uc3QgZGF0YSA9IFtcbiAge1xuICAgIHF1c3Rpb246XCJXaGF0IGlzIEphdmFTY3JpcHQ/XCIsXG4gICAgb3B0aW9uOltcIkphdmFTY3JpcHQgaXMgYSBzY3JpcHRpbmcgbGFuZ3VhZ2UgdXNlZCB0byBtYWtlIHRoZSB3ZWJzaXRlIGludGVyYWN0aXZlXCIsXCJKYXZhU2NyaXB0IGlzIGFuIGFzc2VtYmx5IGxhbmd1YWdlIHVzZWQgdG8gbWFrZSB0aGUgd2Vic2l0ZSBpbnRlcmFjdGl2ZVwiLFwiSmF2YVNjcmlwdCBpcyBhIGNvbXBpbGVkIGxhbmd1YWdlIHVzZWQgdG8gbWFrZSB0aGUgd2Vic2l0ZSBpbnRlcmFjdGl2ZVwiLFwiTm9uZSBvZiBBYm92ZVwiXSxcbiAgICBhbnMgOlwiSmF2YVNjcmlwdCBpcyBhIHNjcmlwdGluZyBsYW5ndWFnZSB1c2VkIHRvIG1ha2UgdGhlIHdlYnNpdGUgaW50ZXJhY3RpdmVcIiBcbiAgfSxcbiAge1xuICAgIHF1c3Rpb246XCIgV2hpY2ggb2YgdGhlIGZvbGxvd2luZyBpcyBjb3JyZWN0IGFib3V0IEphdmFTY3JpcHQ/XCIsXG4gICAgb3B0aW9uOltcIkphdmFTY3JpcHQgaXMgYW4gT2JqZWN0LUJhc2VkIGxhbmd1YWdlXCIsXCJKYXZhU2NyaXB0IGlzIEFzc2VtYmx5LWxhbmd1YWdlXCIsXCJKYXZhU2NyaXB0IGlzIGFuIE9iamVjdC1PcmllbnRlZCBsYW5ndWFnZVwiLFwiSmF2YVNjcmlwdCBpcyBhIEhpZ2gtbGV2ZWwgbGFuZ3VhZ2VcIl0sXG4gICAgYW5zIDpcIkphdmFTY3JpcHQgaXMgYW4gT2JqZWN0LUJhc2VkIGxhbmd1YWdlXCIgXG4gIH0sXG4gIHtcbiAgICBxdXN0aW9uOlwiQXJyYXlzIGluIEphdmFTY3JpcHQgYXJlIGRlZmluZWQgYnkgd2hpY2ggb2YgdGhlIGZvbGxvd2luZyBzdGF0ZW1lbnRzP1wiLFxuICAgIG9wdGlvbjpbXCJJdCBpcyBhbiBvcmRlcmVkIGxpc3Qgb2YgdmFsdWVzXCIsXCJJdCBpcyBhbiBvcmRlcmVkIGxpc3Qgb2Ygb2JqZWN0c1wiLFwiSXQgaXMgYW4gb3JkZXJlZCBsaXN0IG9mIHN0cmluZ1wiLFwiSXQgaXMgYW4gb3JkZXJlZCBsaXN0IG9mIGZ1bmN0aW9uc1wiXSxcbiAgICBhbnMgOlwiSXQgaXMgYW4gb3JkZXJlZCBsaXN0IG9mIHZhbHVlc1wiIFxuICB9LFxuICB7XG4gICAgcXVzdGlvbjpcIldoaWNoIG9mIHRoZSBmb2xsb3dpbmcgaXMgbm90IGphdmFzY3JpcHQgZGF0YSB0eXBlcz9cIixcbiAgICBvcHRpb246W1wiTnVsbCB0eXBlXCIsXG4gICAgXCJVbmRlZmluZWQgdHlwZVwiLFxuICAgIFwiTnVtYmVyIHR5cGVcIixcbiAgICBcIkFsbCBvZiB0aGUgbWVudGlvbmVkXCJdLFxuICAgIGFucyA6XCJBbGwgb2YgdGhlIG1lbnRpb25lZFwiIFxuICB9XG5dXG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGU6YW55KXtcbiAgICBjb25zb2xlLmxvZyhlKTsgICAgXG4gIH07XG4gIFxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLWF1dG8gYWxpZ24tbWlkZGxlIHAtNSBib3JkZXIteC1za3ktOTUwIGJvcmRlci00IGJvcmRlci1zb2xpZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtc2VyaWYgdGV4dC1jZW50ZXIgXCIgPlxuICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSk9PntcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJxdXN0aW9uXCI+e2l0ZW0ucXVzdGlvbn08L2gzPlxuICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiQGFwcGx5IGdyaWQgZ3JpZC1jb2xzLVsxZnJfMWZyXSBnYXAtMyB0ZXh0LVsxNXB4XVwiPlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnMgZ3Jvd1wiID5cblxuICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiIFxuICAgICAgICAgICAgIG5hbWU9XCJjaFwiXG4gICAgICAgICAgICAgaWQ9XCJpbnB1dDFcIiBcbiAgICAgICAgICAgICB2YWx1ZT17aXRlbS5vcHRpb25bMF19IFxuICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnsgaGFuZGxlQ2hhbmdlKGUudGFyZ2V0LnZhbHVlPT09aXRlbS5hbnMpfX0gLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW5wdXQxXCIgPntpdGVtLm9wdGlvblswXX1cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5zIGdyb3cgXCI+XG5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiIFxuICAgICAgICAgICAgIG5hbWU9XCJjaFwiIFxuICAgICAgICAgICAgIGlkPVwiaW5wdXQyXCIgXG4gICAgICAgICAgICAgdmFsdWU9e2l0ZW0ub3B0aW9uWzFdfVxuICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnsgIGhhbmRsZUNoYW5nZShlLnRhcmdldC52YWx1ZT09PWl0ZW0uYW5zKSAgIH19IC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlucHV0MlwiICA+e2l0ZW0ub3B0aW9uWzFdfTwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5zIGdyb3cgXCI+XG5cbiAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiIFxuICAgICAgICAgICAgbmFtZT1cImNoXCIgXG4gICAgICAgICAgICBpZD1cImlucHV0M1wiIFxuICAgICAgICAgICAgdmFsdWU9e2l0ZW0ub3B0aW9uWzJdfSBcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnsgIGhhbmRsZUNoYW5nZShlLnRhcmdldC52YWx1ZT09PWl0ZW0uYW5zKSAgIH19IC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlucHV0M1wiID57aXRlbS5vcHRpb25bMl19XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFucyBncm93IFwiPlxuXG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiIFxuICAgICAgICAgICAgbmFtZT1cImNoXCIgXG4gICAgICAgICAgICBpZD1cImlucHV0NFwiIFxuICAgICAgICAgICAgdmFsdWU9e2l0ZW0ub3B0aW9uWzNdfSBcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnsgIGhhbmRsZUNoYW5nZShlLnRhcmdldC52YWx1ZT09PWl0ZW0uYW5zKSAgIH19ICAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbnB1dDRcIiA+e2l0ZW0ub3B0aW9uWzNdfTwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC8+XG4gICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkhvbWUiLCJhbnN3ZXIiLCJTZXRBbnN3ZXIiLCJhbnMiLCJkYXRhIiwicXVzdGlvbiIsIm9wdGlvbiIsImhhbmRsZUNoYW5nZSIsImUiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiaXRlbSIsImgzIiwiZm9ybSIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJpZCIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJsYWJlbCIsImh0bWxGb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});