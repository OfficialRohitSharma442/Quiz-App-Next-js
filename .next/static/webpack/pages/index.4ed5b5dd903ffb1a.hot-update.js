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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const [answer, SetAnswer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\" \");\n    const data = [\n        {\n            qustion: \"Which of the following user-defined header file extension used in c++?\",\n            option: [\n                \"hg\",\n                \"cpp\",\n                \"hms\",\n                \"hf\"\n            ],\n            ans: \"cpp\"\n        },\n        {\n            qustion: \"Which of the following user-defined header file extension used in c++?\",\n            option: [\n                \"hg\",\n                \"cpp\",\n                \"hms\",\n                \"hf\"\n            ],\n            ans: \"cpp\"\n        },\n        {\n            qustion: \"Which of the following user-defined header file extension used in c++?\",\n            option: [\n                \"hg\",\n                \"cpp\",\n                \"hms\",\n                \"hf\"\n            ],\n            ans: \"cpp\"\n        },\n        {\n            qustion: \"Which of the following user-defined header file extension used in c++?\",\n            option: [\n                \"hg\",\n                \"cpp\",\n                \"hms\",\n                \"hf\"\n            ],\n            ans: \"cpp\"\n        }\n    ];\n    let i = 0;\n    function handleChange(e) {\n        if (e.target.value === data[0].ans) {\n            alert(\"Correct Answer\");\n        } else {\n            alert(\"incorrent answer\");\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mr-auto align-middle p-5 border-x-sky-950 border-4 border-solid\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"font-serif text-center \",\n                children: data.map((item)=>{\n                    console.log(item);\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"qustion\",\n                                children: item.qustion\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 16\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                className: \"@apply grid grid-cols-[1fr_1fr] gap-3 text-[15px]\",\n                                onChange: ()=>SetAnswer(item.ans),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"ans grow\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"radio\",\n                                                name: \"ch\",\n                                                id: \"input1\",\n                                                value: data[i].option[0],\n                                                onChange: handleChange\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                lineNumber: 52,\n                                                columnNumber: 13\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"input1\",\n                                                children: item.option[0]\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                lineNumber: 53,\n                                                columnNumber: 13\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"ans grow \",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"radio\",\n                                                name: \"ch\",\n                                                id: \"input2\",\n                                                value: data[i].option[1],\n                                                onChange: handleChange\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                lineNumber: 58,\n                                                columnNumber: 13\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"input2\",\n                                                children: data[i].option[1]\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                lineNumber: 59,\n                                                columnNumber: 13\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"ans grow \",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"radio\",\n                                                name: \"ch\",\n                                                id: \"input3\",\n                                                value: data[i].option[2],\n                                                onChange: handleChange\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                lineNumber: 63,\n                                                columnNumber: 13\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"input3\",\n                                                children: data[i].option[2]\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                lineNumber: 64,\n                                                columnNumber: 13\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"ans grow \",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"radio\",\n                                                name: \"ch\",\n                                                id: \"input4\",\n                                                value: data[i].option[3],\n                                                onChange: handleChange\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                lineNumber: 69,\n                                                columnNumber: 13\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"input4\",\n                                                children: data[i].option[3]\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                lineNumber: 70,\n                                                columnNumber: 13\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 16\n                            }, this)\n                        ]\n                    }, void 0, true);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"esvahchzef47awy3YGwcpkrwZS4=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNpQztBQUVsQixTQUFTQyxPQUFPOztJQUMvQixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0gsK0NBQVFBLENBQUM7SUFDckMsTUFBTUksT0FBTztRQUNYO1lBQ0VDLFNBQVE7WUFDUkMsUUFBTztnQkFBQztnQkFBSztnQkFBTTtnQkFBTTthQUFLO1lBQzlCQyxLQUFLO1FBQ1A7UUFDQTtZQUNFRixTQUFRO1lBQ1JDLFFBQU87Z0JBQUM7Z0JBQUs7Z0JBQU07Z0JBQU07YUFBSztZQUM5QkMsS0FBSztRQUNQO1FBQ0E7WUFDRUYsU0FBUTtZQUNSQyxRQUFPO2dCQUFDO2dCQUFLO2dCQUFNO2dCQUFNO2FBQUs7WUFDOUJDLEtBQUs7UUFDUDtRQUNBO1lBQ0VGLFNBQVE7WUFDUkMsUUFBTztnQkFBQztnQkFBSztnQkFBTTtnQkFBTTthQUFLO1lBQzlCQyxLQUFLO1FBQ1A7S0FDRDtJQUNELElBQUlDLElBQUk7SUFFTixTQUFTQyxhQUFhQyxDQUFLLEVBQUM7UUFDMUIsSUFBR0EsRUFBRUMsTUFBTSxDQUFDQyxLQUFLLEtBQUdSLElBQUksQ0FBQyxFQUFFLENBQUNHLEdBQUcsRUFBQztZQUM5Qk0sTUFBTTtRQUNSLE9BQUs7WUFDSEEsTUFBTTtRQUNSLENBQUM7SUFHSDtJQUVBLHFCQUNFO2tCQUNFLDRFQUFDQztZQUFJQyxXQUFVO3NCQUNiLDRFQUFDRDtnQkFBSUMsV0FBVTswQkFDWlgsS0FBS1ksR0FBRyxDQUFDLENBQUNDLE9BQU87b0JBQ2hCQyxRQUFRQyxHQUFHLENBQUNGO29CQUNYLHFCQUNDOzswQ0FDQyw4REFBQ0c7Z0NBQUdMLFdBQVU7MENBQVdFLEtBQUtaLE9BQU87Ozs7OzswQ0FDckMsOERBQUNnQjtnQ0FBS04sV0FBVTtnQ0FBbURPLFVBQVUsSUFBSW5CLFVBQVVjLEtBQUtWLEdBQUc7O2tEQUN0Ryw4REFBQ087d0NBQUlDLFdBQVU7OzBEQUVmLDhEQUFDUTtnREFBTUMsTUFBSztnREFBUUMsTUFBSztnREFBS0MsSUFBRztnREFBU2QsT0FBT1IsSUFBSSxDQUFDSSxFQUFFLENBQUNGLE1BQU0sQ0FBQyxFQUFFO2dEQUFFZ0IsVUFBVWI7Ozs7OzswREFDOUUsOERBQUNrQjtnREFBTUMsU0FBUTswREFBV1gsS0FBS1gsTUFBTSxDQUFDLEVBQUU7Ozs7Ozs7Ozs7OztrREFHeEMsOERBQUNRO3dDQUFJQyxXQUFVOzswREFFZiw4REFBQ1E7Z0RBQU1DLE1BQUs7Z0RBQVFDLE1BQUs7Z0RBQUtDLElBQUc7Z0RBQVNkLE9BQU9SLElBQUksQ0FBQ0ksRUFBRSxDQUFDRixNQUFNLENBQUMsRUFBRTtnREFBRWdCLFVBQVViOzs7Ozs7MERBQzlFLDhEQUFDa0I7Z0RBQU1DLFNBQVE7MERBQVl4QixJQUFJLENBQUNJLEVBQUUsQ0FBQ0YsTUFBTSxDQUFDLEVBQUU7Ozs7Ozs7Ozs7OztrREFFNUMsOERBQUNRO3dDQUFJQyxXQUFVOzswREFFZiw4REFBQ1E7Z0RBQU1DLE1BQUs7Z0RBQVFDLE1BQUs7Z0RBQUtDLElBQUc7Z0RBQVNkLE9BQU9SLElBQUksQ0FBQ0ksRUFBRSxDQUFDRixNQUFNLENBQUMsRUFBRTtnREFBRWdCLFVBQVViOzs7Ozs7MERBQzlFLDhEQUFDa0I7Z0RBQU1DLFNBQVE7MERBQVd4QixJQUFJLENBQUNJLEVBQUUsQ0FBQ0YsTUFBTSxDQUFDLEVBQUU7Ozs7Ozs7Ozs7OztrREFHM0MsOERBQUNRO3dDQUFJQyxXQUFVOzswREFFZiw4REFBQ1E7Z0RBQU1DLE1BQUs7Z0RBQVFDLE1BQUs7Z0RBQUtDLElBQUc7Z0RBQVNkLE9BQU9SLElBQUksQ0FBQ0ksRUFBRSxDQUFDRixNQUFNLENBQUMsRUFBRTtnREFBRWdCLFVBQVViOzs7Ozs7MERBQzlFLDhEQUFDa0I7Z0RBQU1DLFNBQVE7MERBQVd4QixJQUFJLENBQUNJLEVBQUUsQ0FBQ0YsTUFBTSxDQUFDLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQUs3Qzs7Ozs7Ozs7Ozs7O0FBTVYsQ0FBQztHQTdFdUJMO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxvZyB9IGZyb20gXCJjb25zb2xlXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuY29uc3QgW2Fuc3dlciwgU2V0QW5zd2VyXSA9IHVzZVN0YXRlKFwiIFwiKTtcbmNvbnN0IGRhdGEgPSBbXG4gIHtcbiAgICBxdXN0aW9uOlwiV2hpY2ggb2YgdGhlIGZvbGxvd2luZyB1c2VyLWRlZmluZWQgaGVhZGVyIGZpbGUgZXh0ZW5zaW9uIHVzZWQgaW4gYysrP1wiLFxuICAgIG9wdGlvbjpbXCJoZ1wiLFwiY3BwXCIsXCJobXNcIixcImhmXCJdLFxuICAgIGFucyA6XCJjcHBcIiBcbiAgfSxcbiAge1xuICAgIHF1c3Rpb246XCJXaGljaCBvZiB0aGUgZm9sbG93aW5nIHVzZXItZGVmaW5lZCBoZWFkZXIgZmlsZSBleHRlbnNpb24gdXNlZCBpbiBjKys/XCIsXG4gICAgb3B0aW9uOltcImhnXCIsXCJjcHBcIixcImhtc1wiLFwiaGZcIl0sXG4gICAgYW5zIDpcImNwcFwiIFxuICB9LFxuICB7XG4gICAgcXVzdGlvbjpcIldoaWNoIG9mIHRoZSBmb2xsb3dpbmcgdXNlci1kZWZpbmVkIGhlYWRlciBmaWxlIGV4dGVuc2lvbiB1c2VkIGluIGMrKz9cIixcbiAgICBvcHRpb246W1wiaGdcIixcImNwcFwiLFwiaG1zXCIsXCJoZlwiXSxcbiAgICBhbnMgOlwiY3BwXCIgXG4gIH0sXG4gIHtcbiAgICBxdXN0aW9uOlwiV2hpY2ggb2YgdGhlIGZvbGxvd2luZyB1c2VyLWRlZmluZWQgaGVhZGVyIGZpbGUgZXh0ZW5zaW9uIHVzZWQgaW4gYysrP1wiLFxuICAgIG9wdGlvbjpbXCJoZ1wiLFwiY3BwXCIsXCJobXNcIixcImhmXCJdLFxuICAgIGFucyA6XCJjcHBcIiBcbiAgfVxuXVxubGV0IGkgPSAwO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlOmFueSl7XG4gICAgaWYoZS50YXJnZXQudmFsdWU9PT1kYXRhWzBdLmFucyl7XG4gICAgICBhbGVydChcIkNvcnJlY3QgQW5zd2VyXCIpXG4gICAgfWVsc2V7XG4gICAgICBhbGVydChcImluY29ycmVudCBhbnN3ZXJcIilcbiAgICB9XG4gICAgXG4gICAgXG4gIH07XG4gIFxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLWF1dG8gYWxpZ24tbWlkZGxlIHAtNSBib3JkZXIteC1za3ktOTUwIGJvcmRlci00IGJvcmRlci1zb2xpZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtc2VyaWYgdGV4dC1jZW50ZXIgXCIgPlxuICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSk9PntcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pXG4gICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInF1c3Rpb25cIj57aXRlbS5xdXN0aW9ufTwvaDM+XG4gICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJAYXBwbHkgZ3JpZCBncmlkLWNvbHMtWzFmcl8xZnJdIGdhcC0zIHRleHQtWzE1cHhdXCJvbkNoYW5nZT17KCk9PlNldEFuc3dlcihpdGVtLmFucyl9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnMgZ3Jvd1wiID5cblxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJjaFwiIGlkPVwiaW5wdXQxXCIgdmFsdWU9e2RhdGFbaV0ub3B0aW9uWzBdfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbnB1dDFcIiA+e2l0ZW0ub3B0aW9uWzBdfVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnMgZ3JvdyBcIj5cblxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJjaFwiIGlkPVwiaW5wdXQyXCIgdmFsdWU9e2RhdGFbaV0ub3B0aW9uWzFdfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlucHV0MlwiICA+e2RhdGFbaV0ub3B0aW9uWzFdfTwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5zIGdyb3cgXCI+XG5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiY2hcIiBpZD1cImlucHV0M1wiIHZhbHVlPXtkYXRhW2ldLm9wdGlvblsyXX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbnB1dDNcIiA+e2RhdGFbaV0ub3B0aW9uWzJdfVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnMgZ3JvdyBcIj5cblxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJjaFwiIGlkPVwiaW5wdXQ0XCIgdmFsdWU9e2RhdGFbaV0ub3B0aW9uWzNdfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbnB1dDRcIiA+e2RhdGFbaV0ub3B0aW9uWzNdfTwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC8+XG4gICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkhvbWUiLCJhbnN3ZXIiLCJTZXRBbnN3ZXIiLCJkYXRhIiwicXVzdGlvbiIsIm9wdGlvbiIsImFucyIsImkiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJhbGVydCIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsIml0ZW0iLCJjb25zb2xlIiwibG9nIiwiaDMiLCJmb3JtIiwib25DaGFuZ2UiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwiaWQiLCJsYWJlbCIsImh0bWxGb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});