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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const [answer, SetAnswer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const data = [\n        {\n            qustion: \"What is JavaScript?\",\n            option: [\n                \"JavaScript is a scripting language used to make the website interactive\",\n                \"JavaScript is an assembly language used to make the website interactive\",\n                \"JavaScript is a compiled language used to make the website interactive\",\n                \"None of Above\"\n            ],\n            ans: \"JavaScript is a scripting language used to make the website interactive\"\n        },\n        {\n            qustion: \" Which of the following is correct about JavaScript?\",\n            option: [\n                \"JavaScript is an Object-Based language\",\n                \"JavaScript is Assembly-language\",\n                \"JavaScript is an Object-Oriented language\",\n                \"JavaScript is a High-level language\"\n            ],\n            ans: \"JavaScript is Assembly-language\"\n        },\n        {\n            qustion: \"Arrays in JavaScript are defined by which of the following statements?\",\n            option: [\n                \"It is an ordered list of values\",\n                \"It is an ordered list of objects\",\n                \"It is an ordered list of string\",\n                \"It is an ordered list of functions\"\n            ],\n            ans: \"It is an ordered list of functions\"\n        },\n        {\n            qustion: \"Which of the following is not javascript data types?\",\n            option: [\n                \"Null type\",\n                \"Undefined type\",\n                \"Number type\",\n                \"All of the mentioned\"\n            ],\n            ans: \"All of the mentioned\"\n        }\n    ];\n    const nextPage = ()=>{\n        if (index < data.length - 1) {\n            setIndex(index + 1);\n        } else {\n            alert(\"You Reached the last Pages ab Back chala ja\");\n        }\n    };\n    const handelChange = (e)=>{\n        e.target.val === data[index];\n    };\n    const previousPage = ()=>{\n        if (index > 0) {\n            setIndex(index - 1);\n        } else {\n            alert(\"bhai screen se bhahr niklega kya\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mr-auto align-middle p-5 border-x-sky-950 border-4 border-solid \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"ques\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: data[index].qustion\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                    lineNumber: 110,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: data[index].option && data[index].option.map((e, i)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"radio\",\n                                    value: e,\n                                    id: i,\n                                    name: \"radioButton\",\n                                    onChange: handelChange\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                    lineNumber: 118,\n                                    columnNumber: 18\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: i,\n                                    children: e\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                    lineNumber: 121,\n                                    columnNumber: 18\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                            lineNumber: 117,\n                            columnNumber: 20\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                    lineNumber: 113,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: previousPage,\n                    children: \"Previous\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                    lineNumber: 127,\n                    columnNumber: 12\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: nextPage,\n                    children: \"Next\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                    lineNumber: 128,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n            lineNumber: 54,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"Mm6J6ZPjfePDQVi/CAx+DJtI2x0=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFpQztBQUVsQixTQUFTQyxPQUFPOztJQUMvQixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0gsK0NBQVFBLENBQUMsS0FBSztJQUMxQyxNQUFNLENBQUNJLE9BQVFDLFNBQVMsR0FBQ0wsK0NBQVFBLENBQUM7SUFDbEMsTUFBTU0sT0FBTztRQUNYO1lBQ0VDLFNBQVE7WUFDUkMsUUFBTztnQkFBQztnQkFBMEU7Z0JBQTBFO2dCQUF5RTthQUFnQjtZQUNyUEMsS0FBSztRQUNQO1FBQ0E7WUFDRUYsU0FBUTtZQUNSQyxRQUFPO2dCQUFDO2dCQUF5QztnQkFBa0M7Z0JBQTRDO2FBQXNDO1lBQ3JLQyxLQUFLO1FBQ1A7UUFDQTtZQUNFRixTQUFRO1lBQ1JDLFFBQU87Z0JBQUM7Z0JBQWtDO2dCQUFtQztnQkFBa0M7YUFBcUM7WUFDcEpDLEtBQUs7UUFDUDtRQUNBO1lBQ0VGLFNBQVE7WUFDUkMsUUFBTztnQkFBQztnQkFDUjtnQkFDQTtnQkFDQTthQUF1QjtZQUN2QkMsS0FBSztRQUNQO0tBQ0Q7SUFDRCxNQUFNQyxXQUFXLElBQUk7UUFFbkIsSUFBR04sUUFBTUUsS0FBS0ssTUFBTSxHQUFDLEdBQUU7WUFFckJOLFNBQVNELFFBQU07UUFFakIsT0FBSztZQUNIUSxNQUFNO1FBQ1IsQ0FBQztJQUNIO0lBQ0EsTUFBTUMsZUFBYyxDQUFDQyxJQUFJO1FBQ3pCQSxFQUFFQyxNQUFNLENBQUNDLEdBQUcsS0FBR1YsSUFBSSxDQUFDRixNQUFNO0lBQzFCO0lBQ0EsTUFBTWEsZUFBZSxJQUFJO1FBRXZCLElBQUdiLFFBQU0sR0FBRTtZQUNUQyxTQUFTRCxRQUFNO1FBQ2pCLE9BQUs7WUFDSFEsTUFBTTtRQUNSLENBQUM7SUFDSDtJQUNFLHFCQUNFO2tCQUNFLDRFQUFDTTtZQUFJQyxXQUFVOzs4QkF3RFgsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNYLDRFQUFDQztrQ0FBSWQsSUFBSSxDQUFDRixNQUFNLENBQUNHLE9BQU87Ozs7Ozs7Ozs7OzhCQUU1Qiw4REFBQ1c7OEJBRUVaLElBQUksQ0FBQ0YsTUFBTSxDQUFDSSxNQUFNLElBQUlGLElBQUksQ0FBQ0YsTUFBTSxDQUFDSSxNQUFNLENBQUNhLEdBQUcsQ0FBQyxDQUFDUCxHQUFNUSxJQUFRO3dCQUMzRCxxQkFDSyw4REFBQ0o7OzhDQUNILDhEQUFDSztvQ0FDQUMsTUFBSztvQ0FDTEMsT0FBT1g7b0NBQUdZLElBQUlKO29DQUFHSyxNQUFLO29DQUFlQyxVQUFVZjs7Ozs7OzhDQUNoRCw4REFBQ2dCO29DQUFNQyxTQUFTUjs4Q0FBSVI7Ozs7Ozs7Ozs7OztvQkFHM0I7Ozs7Ozs4QkFHQyw4REFBQ2lCO29CQUFPQyxTQUFTZjs4QkFBYzs7Ozs7OzhCQUNoQyw4REFBQ2M7b0JBQU9DLFNBQVN0Qjs4QkFBVTs7Ozs7Ozs7Ozs7OztBQUlyQyxDQUFDO0dBakl1QlQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbmNvbnN0IFthbnN3ZXIsIFNldEFuc3dlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5jb25zdCBbaW5kZXggLCBzZXRJbmRleF09dXNlU3RhdGUoMClcbmNvbnN0IGRhdGEgPSBbXG4gIHtcbiAgICBxdXN0aW9uOlwiV2hhdCBpcyBKYXZhU2NyaXB0P1wiLFxuICAgIG9wdGlvbjpbXCJKYXZhU2NyaXB0IGlzIGEgc2NyaXB0aW5nIGxhbmd1YWdlIHVzZWQgdG8gbWFrZSB0aGUgd2Vic2l0ZSBpbnRlcmFjdGl2ZVwiLFwiSmF2YVNjcmlwdCBpcyBhbiBhc3NlbWJseSBsYW5ndWFnZSB1c2VkIHRvIG1ha2UgdGhlIHdlYnNpdGUgaW50ZXJhY3RpdmVcIixcIkphdmFTY3JpcHQgaXMgYSBjb21waWxlZCBsYW5ndWFnZSB1c2VkIHRvIG1ha2UgdGhlIHdlYnNpdGUgaW50ZXJhY3RpdmVcIixcIk5vbmUgb2YgQWJvdmVcIl0sXG4gICAgYW5zIDpcIkphdmFTY3JpcHQgaXMgYSBzY3JpcHRpbmcgbGFuZ3VhZ2UgdXNlZCB0byBtYWtlIHRoZSB3ZWJzaXRlIGludGVyYWN0aXZlXCIgXG4gIH0sXG4gIHtcbiAgICBxdXN0aW9uOlwiIFdoaWNoIG9mIHRoZSBmb2xsb3dpbmcgaXMgY29ycmVjdCBhYm91dCBKYXZhU2NyaXB0P1wiLFxuICAgIG9wdGlvbjpbXCJKYXZhU2NyaXB0IGlzIGFuIE9iamVjdC1CYXNlZCBsYW5ndWFnZVwiLFwiSmF2YVNjcmlwdCBpcyBBc3NlbWJseS1sYW5ndWFnZVwiLFwiSmF2YVNjcmlwdCBpcyBhbiBPYmplY3QtT3JpZW50ZWQgbGFuZ3VhZ2VcIixcIkphdmFTY3JpcHQgaXMgYSBIaWdoLWxldmVsIGxhbmd1YWdlXCJdLFxuICAgIGFucyA6XCJKYXZhU2NyaXB0IGlzIEFzc2VtYmx5LWxhbmd1YWdlXCIgXG4gIH0sXG4gIHtcbiAgICBxdXN0aW9uOlwiQXJyYXlzIGluIEphdmFTY3JpcHQgYXJlIGRlZmluZWQgYnkgd2hpY2ggb2YgdGhlIGZvbGxvd2luZyBzdGF0ZW1lbnRzP1wiLFxuICAgIG9wdGlvbjpbXCJJdCBpcyBhbiBvcmRlcmVkIGxpc3Qgb2YgdmFsdWVzXCIsXCJJdCBpcyBhbiBvcmRlcmVkIGxpc3Qgb2Ygb2JqZWN0c1wiLFwiSXQgaXMgYW4gb3JkZXJlZCBsaXN0IG9mIHN0cmluZ1wiLFwiSXQgaXMgYW4gb3JkZXJlZCBsaXN0IG9mIGZ1bmN0aW9uc1wiXSxcbiAgICBhbnMgOlwiSXQgaXMgYW4gb3JkZXJlZCBsaXN0IG9mIGZ1bmN0aW9uc1wiIFxuICB9LFxuICB7XG4gICAgcXVzdGlvbjpcIldoaWNoIG9mIHRoZSBmb2xsb3dpbmcgaXMgbm90IGphdmFzY3JpcHQgZGF0YSB0eXBlcz9cIixcbiAgICBvcHRpb246W1wiTnVsbCB0eXBlXCIsXG4gICAgXCJVbmRlZmluZWQgdHlwZVwiLFxuICAgIFwiTnVtYmVyIHR5cGVcIixcbiAgICBcIkFsbCBvZiB0aGUgbWVudGlvbmVkXCJdLFxuICAgIGFucyA6XCJBbGwgb2YgdGhlIG1lbnRpb25lZFwiIFxuICB9XG5dXG5jb25zdCBuZXh0UGFnZSA9ICgpPT57XG4gXG4gIGlmKGluZGV4PGRhdGEubGVuZ3RoLTEpe1xuICAgXG4gICAgc2V0SW5kZXgoaW5kZXgrMSk7XG5cbiAgfWVsc2V7XG4gICAgYWxlcnQoXCJZb3UgUmVhY2hlZCB0aGUgbGFzdCBQYWdlcyBhYiBCYWNrIGNoYWxhIGphXCIpXG4gIH1cbn1cbmNvbnN0IGhhbmRlbENoYW5nZSA9KGUpPT57XG5lLnRhcmdldC52YWw9PT1kYXRhW2luZGV4XVxufVxuY29uc3QgcHJldmlvdXNQYWdlID0gKCk9PntcbiBcbiAgaWYoaW5kZXg+MCl7XG4gICAgc2V0SW5kZXgoaW5kZXgtMSk7XG4gIH1lbHNle1xuICAgIGFsZXJ0KFwiYmhhaSBzY3JlZW4gc2UgYmhhaHIgbmlrbGVnYSBreWFcIilcbiAgfVxufSBcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvIGFsaWduLW1pZGRsZSBwLTUgYm9yZGVyLXgtc2t5LTk1MCBib3JkZXItNCBib3JkZXItc29saWQgXCI+XG4gICAgICAgICAgey8qIHtkYXRhLm1hcCgoaXRlbSk9PntcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bmb250LXNlcmlmIHRleHQtY2VudGVyICR7YW5zd2VyP1wiYmctZ3JhZGllbnQtdG8tciBmcm9tLWN5YW4tNTAwIHRvLWJsdWUtNTAwXCI6XCJiZy1ncmFkaWVudC10by1yIGZyb20td2hpdGUtNTAwIHRvLXdoaXRlLTUwMFwifWB9ID5cbiAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJxdXN0aW9uXCI+e2l0ZW0ucXVzdGlvbn08L2gzPlxuICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiQGFwcGx5IGdyaWQgZ3JpZC1jb2xzLVsxZnJfMWZyXSBnYXAtMyB0ZXh0LVsxNXB4XVwiPlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnMgZ3Jvd1wiID5cblxuICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiIFxuICAgICAgICAgICAgIG5hbWU9XCJjaFwiXG4gICAgICAgICAgICAgaWQ9XCJpbnB1dDFcIiBcbiAgICAgICAgICAgICB2YWx1ZT17aXRlbS5vcHRpb25bMF19IFxuICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnsgU2V0QW5zd2VyKGUudGFyZ2V0LnZhbHVlPT09aXRlbS5hbnMpfX0gLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW5wdXQxXCIgPntpdGVtLm9wdGlvblswXX1cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5zIGdyb3cgXCI+XG5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiIFxuICAgICAgICAgICAgIG5hbWU9XCJjaFwiIFxuICAgICAgICAgICAgIGlkPVwiaW5wdXQyXCIgXG4gICAgICAgICAgICAgdmFsdWU9e2l0ZW0ub3B0aW9uWzFdfVxuICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnsgU2V0QW5zd2VyKGUudGFyZ2V0LnZhbHVlPT09aXRlbS5hbnMpfX0gLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW5wdXQyXCIgID57aXRlbS5vcHRpb25bMV19PC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnMgZ3JvdyBcIj5cblxuICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgdHlwZT1cInJhZGlvXCIgXG4gICAgICAgICAgICBuYW1lPVwiY2hcIiBcbiAgICAgICAgICAgIGlkPVwiaW5wdXQzXCIgXG4gICAgICAgICAgICB2YWx1ZT17aXRlbS5vcHRpb25bMl19IFxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+eyAgU2V0QW5zd2VyKGUudGFyZ2V0LnZhbHVlPT09aXRlbS5hbnMpfX0gLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW5wdXQzXCIgPntpdGVtLm9wdGlvblsyXX1cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5zIGdyb3cgXCI+XG5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInJhZGlvXCIgXG4gICAgICAgICAgICBuYW1lPVwiY2hcIiBcbiAgICAgICAgICAgIGlkPVwiaW5wdXQ0XCIgXG4gICAgICAgICAgICB2YWx1ZT17aXRlbS5vcHRpb25bM119IFxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+e1NldEFuc3dlcihlLnRhcmdldC52YWx1ZT09PWl0ZW0uYW5zKX19ICAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbnB1dDRcIiA+e2l0ZW0ub3B0aW9uWzNdfTwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvPlxuICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgICAgKX0gKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWVzXCI+XG4gICAgICAgICAgICAgIDxoMz57ZGF0YVtpbmRleF0ucXVzdGlvbn08L2gzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHtkYXRhW2luZGV4XS5vcHRpb24gJiYgZGF0YVtpbmRleF0ub3B0aW9uLm1hcCgoZTphbnksaTphbnkpPT57XG4gICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiIFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2V9IGlkPXtpfSBuYW1lPVwicmFkaW9CdXR0b25cIiAgb25DaGFuZ2U9e2hhbmRlbENoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2l9PntlfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3ByZXZpb3VzUGFnZX0+UHJldmlvdXM8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e25leHRQYWdlfT5OZXh0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJIb21lIiwiYW5zd2VyIiwiU2V0QW5zd2VyIiwiaW5kZXgiLCJzZXRJbmRleCIsImRhdGEiLCJxdXN0aW9uIiwib3B0aW9uIiwiYW5zIiwibmV4dFBhZ2UiLCJsZW5ndGgiLCJhbGVydCIsImhhbmRlbENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWwiLCJwcmV2aW91c1BhZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsIm1hcCIsImkiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsImlkIiwibmFtZSIsIm9uQ2hhbmdlIiwibGFiZWwiLCJodG1sRm9yIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});