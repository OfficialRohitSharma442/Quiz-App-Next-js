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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    // const [answer, setAnswer] = useState(false);\n    const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const data = [\n        {\n            qustion: \"What is JavaScript?\",\n            option: [\n                \"JavaScript is a scripting language used to make the website interactive\",\n                \"JavaScript is an assembly language used to make the website interactive\",\n                \"JavaScript is a compiled language used to make the website interactive\",\n                \"None of Above\"\n            ],\n            ans: \"JavaScript is a scripting language used to make the website interactive\"\n        },\n        {\n            qustion: \" Which of the following is correct about JavaScript?\",\n            option: [\n                \"JavaScript is an Object-Based language\",\n                \"JavaScript is Assembly-language\",\n                \"JavaScript is an Object-Oriented language\",\n                \"JavaScript is a High-level language\"\n            ],\n            ans: \"JavaScript is Assembly-language\"\n        },\n        {\n            qustion: \"Arrays in JavaScript are defined by which of the following statements?\",\n            option: [\n                \"It is an ordered list of values\",\n                \"It is an ordered list of objects\",\n                \"It is an ordered list of string\",\n                \"It is an ordered list of functions\"\n            ],\n            ans: \"It is an ordered list of functions\"\n        },\n        {\n            qustion: \"Which of the following is not javascript data types?\",\n            option: [\n                \"Null type\",\n                \"Undefined type\",\n                \"Number type\",\n                \"All of the mentioned\"\n            ],\n            ans: \"All of the mentioned\"\n        }\n    ];\n    const nextPage = ()=>{\n        if (index < data.length - 1) {\n            setIndex(index + 1);\n        } else {\n            alert(\"You Reached the last Pages ab Back chala ja\");\n        }\n    };\n    // const handelChange =(e:any)=>{\n    // }\n    const previousPage = (e)=>{\n        if (index > 0) {\n            setIndex(index - 1);\n        } else {\n            alert(\"bhai screen se bhahr niklega kya\");\n        }\n        if (e.target.value == data[index].ans) {\n            setScore(score + 1);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mr-auto align-middle p-5 border-x-sky-950 border-4 border-solid \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"score\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: score\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                        lineNumber: 115,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                    lineNumber: 114,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"ques\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: data[index].qustion\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                        lineNumber: 118,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                    lineNumber: 117,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: data[index].option && data[index].option.map((e, i)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"radio\",\n                                    value: e,\n                                    id: i,\n                                    name: \"radioButton\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                    lineNumber: 125,\n                                    columnNumber: 18\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: i,\n                                    children: e\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                    lineNumber: 128,\n                                    columnNumber: 18\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                            lineNumber: 124,\n                            columnNumber: 20\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                    lineNumber: 120,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: previousPage,\n                    children: \"Previous\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                    lineNumber: 134,\n                    columnNumber: 12\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: nextPage,\n                    children: \"Next\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                    lineNumber: 135,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n            lineNumber: 58,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"DtvzpBys94ILKS375vJkjhtKwc4=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFpQztBQUVsQixTQUFTQyxPQUFPOztJQUMvQiwrQ0FBK0M7SUFDL0MsTUFBTSxDQUFDQyxPQUFRQyxTQUFTLEdBQUNILCtDQUFRQSxDQUFDO0lBQ2xDLE1BQU0sQ0FBQ0ksT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNTSxPQUFPO1FBQ1g7WUFDRUMsU0FBUTtZQUNSQyxRQUFPO2dCQUFDO2dCQUEwRTtnQkFBMEU7Z0JBQXlFO2FBQWdCO1lBQ3JQQyxLQUFLO1FBQ1A7UUFDQTtZQUNFRixTQUFRO1lBQ1JDLFFBQU87Z0JBQUM7Z0JBQXlDO2dCQUFrQztnQkFBNEM7YUFBc0M7WUFDcktDLEtBQUs7UUFDUDtRQUNBO1lBQ0VGLFNBQVE7WUFDUkMsUUFBTztnQkFBQztnQkFBa0M7Z0JBQW1DO2dCQUFrQzthQUFxQztZQUNwSkMsS0FBSztRQUNQO1FBQ0E7WUFDRUYsU0FBUTtZQUNSQyxRQUFPO2dCQUFDO2dCQUNSO2dCQUNBO2dCQUNBO2FBQXVCO1lBQ3ZCQyxLQUFLO1FBQ1A7S0FDRDtJQUNELE1BQU1DLFdBQVcsSUFBSTtRQUVuQixJQUFHUixRQUFNSSxLQUFLSyxNQUFNLEdBQUMsR0FBRTtZQUVyQlIsU0FBU0QsUUFBTTtRQUVqQixPQUFLO1lBQ0hVLE1BQU07UUFDUixDQUFDO0lBQ0g7SUFDQSxpQ0FBaUM7SUFHakMsSUFBSTtJQUNKLE1BQU1DLGVBQWUsQ0FBQ0MsSUFBUTtRQUM1QixJQUFHWixRQUFNLEdBQUU7WUFDVEMsU0FBU0QsUUFBTTtRQUNqQixPQUFLO1lBQ0hVLE1BQU07UUFDUixDQUFDO1FBQ0QsSUFBR0UsRUFBRUMsTUFBTSxDQUFDQyxLQUFLLElBQUVWLElBQUksQ0FBQ0osTUFBTSxDQUFDTyxHQUFHLEVBQUM7WUFDakNKLFNBQVNELFFBQU07UUFDakIsQ0FBQztJQUNIO0lBQ0UscUJBQ0U7a0JBQ0UsNEVBQUNhO1lBQUlDLFdBQVU7OzhCQXdEWCw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNDO2tDQUFJZjs7Ozs7Ozs7Ozs7OEJBRVAsOERBQUNhO29CQUFJQyxXQUFVOzhCQUNYLDRFQUFDRTtrQ0FBSWQsSUFBSSxDQUFDSixNQUFNLENBQUNLLE9BQU87Ozs7Ozs7Ozs7OzhCQUU1Qiw4REFBQ1U7OEJBRUVYLElBQUksQ0FBQ0osTUFBTSxDQUFDTSxNQUFNLElBQUlGLElBQUksQ0FBQ0osTUFBTSxDQUFDTSxNQUFNLENBQUNhLEdBQUcsQ0FBQyxDQUFDUCxHQUFNUSxJQUFRO3dCQUMzRCxxQkFDSyw4REFBQ0w7OzhDQUNILDhEQUFDTTtvQ0FDQUMsTUFBSztvQ0FDTFIsT0FBT0Y7b0NBQUdXLElBQUlIO29DQUFHSSxNQUFLOzs7Ozs7OENBQ3ZCLDhEQUFDQztvQ0FBTUMsU0FBU047OENBQUlSOzs7Ozs7Ozs7Ozs7b0JBRzNCOzs7Ozs7OEJBR0MsOERBQUNlO29CQUFPQyxTQUFTakI7OEJBQWM7Ozs7Ozs4QkFDaEMsOERBQUNnQjtvQkFBT0MsU0FBU3BCOzhCQUFVOzs7Ozs7Ozs7Ozs7O0FBSXJDLENBQUM7R0F4SXVCVDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuLy8gY29uc3QgW2Fuc3dlciwgc2V0QW5zd2VyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbmNvbnN0IFtpbmRleCAsIHNldEluZGV4XT11c2VTdGF0ZSgwKVxuY29uc3QgW3Njb3JlICxzZXRTY29yZV0gPSB1c2VTdGF0ZSgwKTtcbmNvbnN0IGRhdGEgPSBbXG4gIHtcbiAgICBxdXN0aW9uOlwiV2hhdCBpcyBKYXZhU2NyaXB0P1wiLFxuICAgIG9wdGlvbjpbXCJKYXZhU2NyaXB0IGlzIGEgc2NyaXB0aW5nIGxhbmd1YWdlIHVzZWQgdG8gbWFrZSB0aGUgd2Vic2l0ZSBpbnRlcmFjdGl2ZVwiLFwiSmF2YVNjcmlwdCBpcyBhbiBhc3NlbWJseSBsYW5ndWFnZSB1c2VkIHRvIG1ha2UgdGhlIHdlYnNpdGUgaW50ZXJhY3RpdmVcIixcIkphdmFTY3JpcHQgaXMgYSBjb21waWxlZCBsYW5ndWFnZSB1c2VkIHRvIG1ha2UgdGhlIHdlYnNpdGUgaW50ZXJhY3RpdmVcIixcIk5vbmUgb2YgQWJvdmVcIl0sXG4gICAgYW5zIDpcIkphdmFTY3JpcHQgaXMgYSBzY3JpcHRpbmcgbGFuZ3VhZ2UgdXNlZCB0byBtYWtlIHRoZSB3ZWJzaXRlIGludGVyYWN0aXZlXCIgXG4gIH0sXG4gIHtcbiAgICBxdXN0aW9uOlwiIFdoaWNoIG9mIHRoZSBmb2xsb3dpbmcgaXMgY29ycmVjdCBhYm91dCBKYXZhU2NyaXB0P1wiLFxuICAgIG9wdGlvbjpbXCJKYXZhU2NyaXB0IGlzIGFuIE9iamVjdC1CYXNlZCBsYW5ndWFnZVwiLFwiSmF2YVNjcmlwdCBpcyBBc3NlbWJseS1sYW5ndWFnZVwiLFwiSmF2YVNjcmlwdCBpcyBhbiBPYmplY3QtT3JpZW50ZWQgbGFuZ3VhZ2VcIixcIkphdmFTY3JpcHQgaXMgYSBIaWdoLWxldmVsIGxhbmd1YWdlXCJdLFxuICAgIGFucyA6XCJKYXZhU2NyaXB0IGlzIEFzc2VtYmx5LWxhbmd1YWdlXCIgXG4gIH0sXG4gIHtcbiAgICBxdXN0aW9uOlwiQXJyYXlzIGluIEphdmFTY3JpcHQgYXJlIGRlZmluZWQgYnkgd2hpY2ggb2YgdGhlIGZvbGxvd2luZyBzdGF0ZW1lbnRzP1wiLFxuICAgIG9wdGlvbjpbXCJJdCBpcyBhbiBvcmRlcmVkIGxpc3Qgb2YgdmFsdWVzXCIsXCJJdCBpcyBhbiBvcmRlcmVkIGxpc3Qgb2Ygb2JqZWN0c1wiLFwiSXQgaXMgYW4gb3JkZXJlZCBsaXN0IG9mIHN0cmluZ1wiLFwiSXQgaXMgYW4gb3JkZXJlZCBsaXN0IG9mIGZ1bmN0aW9uc1wiXSxcbiAgICBhbnMgOlwiSXQgaXMgYW4gb3JkZXJlZCBsaXN0IG9mIGZ1bmN0aW9uc1wiIFxuICB9LFxuICB7XG4gICAgcXVzdGlvbjpcIldoaWNoIG9mIHRoZSBmb2xsb3dpbmcgaXMgbm90IGphdmFzY3JpcHQgZGF0YSB0eXBlcz9cIixcbiAgICBvcHRpb246W1wiTnVsbCB0eXBlXCIsXG4gICAgXCJVbmRlZmluZWQgdHlwZVwiLFxuICAgIFwiTnVtYmVyIHR5cGVcIixcbiAgICBcIkFsbCBvZiB0aGUgbWVudGlvbmVkXCJdLFxuICAgIGFucyA6XCJBbGwgb2YgdGhlIG1lbnRpb25lZFwiIFxuICB9XG5dXG5jb25zdCBuZXh0UGFnZSA9ICgpPT57XG4gXG4gIGlmKGluZGV4PGRhdGEubGVuZ3RoLTEpe1xuICAgXG4gICAgc2V0SW5kZXgoaW5kZXgrMSk7XG5cbiAgfWVsc2V7XG4gICAgYWxlcnQoXCJZb3UgUmVhY2hlZCB0aGUgbGFzdCBQYWdlcyBhYiBCYWNrIGNoYWxhIGphXCIpXG4gIH1cbn1cbi8vIGNvbnN0IGhhbmRlbENoYW5nZSA9KGU6YW55KT0+e1xuXG5cbi8vIH1cbmNvbnN0IHByZXZpb3VzUGFnZSA9IChlOmFueSk9PntcbiAgaWYoaW5kZXg+MCl7XG4gICAgc2V0SW5kZXgoaW5kZXgtMSk7XG4gIH1lbHNle1xuICAgIGFsZXJ0KFwiYmhhaSBzY3JlZW4gc2UgYmhhaHIgbmlrbGVnYSBreWFcIilcbiAgfVxuICBpZihlLnRhcmdldC52YWx1ZT09ZGF0YVtpbmRleF0uYW5zKXtcbiAgICBzZXRTY29yZShzY29yZSsxKTsgXG4gIH1cbn0gXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0byBhbGlnbi1taWRkbGUgcC01IGJvcmRlci14LXNreS05NTAgYm9yZGVyLTQgYm9yZGVyLXNvbGlkIFwiPlxuICAgICAgICAgIHsvKiB7ZGF0YS5tYXAoKGl0ZW0pPT57XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZm9udC1zZXJpZiB0ZXh0LWNlbnRlciAke2Fuc3dlcj9cImJnLWdyYWRpZW50LXRvLXIgZnJvbS1jeWFuLTUwMCB0by1ibHVlLTUwMFwiOlwiYmctZ3JhZGllbnQtdG8tciBmcm9tLXdoaXRlLTUwMCB0by13aGl0ZS01MDBcIn1gfSA+XG4gICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicXVzdGlvblwiPntpdGVtLnF1c3Rpb259PC9oMz5cbiAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIkBhcHBseSBncmlkIGdyaWQtY29scy1bMWZyXzFmcl0gZ2FwLTMgdGV4dC1bMTVweF1cIj5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5zIGdyb3dcIiA+XG5cbiAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIiBcbiAgICAgICAgICAgICBuYW1lPVwiY2hcIlxuICAgICAgICAgICAgIGlkPVwiaW5wdXQxXCIgXG4gICAgICAgICAgICAgdmFsdWU9e2l0ZW0ub3B0aW9uWzBdfSBcbiAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT57IFNldEFuc3dlcihlLnRhcmdldC52YWx1ZT09PWl0ZW0uYW5zKX19IC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlucHV0MVwiID57aXRlbS5vcHRpb25bMF19XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFucyBncm93IFwiPlxuXG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIiBcbiAgICAgICAgICAgICBuYW1lPVwiY2hcIiBcbiAgICAgICAgICAgICBpZD1cImlucHV0MlwiIFxuICAgICAgICAgICAgIHZhbHVlPXtpdGVtLm9wdGlvblsxXX1cbiAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT57IFNldEFuc3dlcihlLnRhcmdldC52YWx1ZT09PWl0ZW0uYW5zKX19IC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlucHV0MlwiICA+e2l0ZW0ub3B0aW9uWzFdfTwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5zIGdyb3cgXCI+XG5cbiAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiIFxuICAgICAgICAgICAgbmFtZT1cImNoXCIgXG4gICAgICAgICAgICBpZD1cImlucHV0M1wiIFxuICAgICAgICAgICAgdmFsdWU9e2l0ZW0ub3B0aW9uWzJdfSBcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnsgIFNldEFuc3dlcihlLnRhcmdldC52YWx1ZT09PWl0ZW0uYW5zKX19IC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlucHV0M1wiID57aXRlbS5vcHRpb25bMl19XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFucyBncm93IFwiPlxuXG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiIFxuICAgICAgICAgICAgbmFtZT1cImNoXCIgXG4gICAgICAgICAgICBpZD1cImlucHV0NFwiIFxuICAgICAgICAgICAgdmFsdWU9e2l0ZW0ub3B0aW9uWzNdfSBcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PntTZXRBbnN3ZXIoZS50YXJnZXQudmFsdWU9PT1pdGVtLmFucyl9fSAgLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW5wdXQ0XCIgPntpdGVtLm9wdGlvblszXX08L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICAgICl9ICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NvcmVcIj5cbiAgICAgICAgICAgIDxoMT57c2NvcmV9PC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1ZXNcIj5cbiAgICAgICAgICAgICAgPGgzPntkYXRhW2luZGV4XS5xdXN0aW9ufTwvaDM+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAge2RhdGFbaW5kZXhdLm9wdGlvbiAmJiBkYXRhW2luZGV4XS5vcHRpb24ubWFwKChlOmFueSxpOmFueSk9PntcbiAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCIgXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17ZX0gaWQ9e2l9IG5hbWU9XCJyYWRpb0J1dHRvblwiIC8+XG4gICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtpfT57ZX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcmV2aW91c1BhZ2V9PlByZXZpb3VzPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtuZXh0UGFnZX0+TmV4dDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSG9tZSIsImluZGV4Iiwic2V0SW5kZXgiLCJzY29yZSIsInNldFNjb3JlIiwiZGF0YSIsInF1c3Rpb24iLCJvcHRpb24iLCJhbnMiLCJuZXh0UGFnZSIsImxlbmd0aCIsImFsZXJ0IiwicHJldmlvdXNQYWdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJoMyIsIm1hcCIsImkiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm5hbWUiLCJsYWJlbCIsImh0bWxGb3IiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});