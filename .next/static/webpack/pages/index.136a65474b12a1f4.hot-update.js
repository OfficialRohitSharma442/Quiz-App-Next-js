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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const [answer, SetAnswer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\" \");\n    const data = [\n        {\n            qustion: \"Which of the following user-defined header file extension used in c++?\",\n            option: [\n                \"hg\",\n                \"cpp\",\n                \"hms\",\n                \"hf\"\n            ],\n            ans: \"hg\"\n        },\n        {\n            qustion: \"Which of the following user-defined header file extension used in c++?\",\n            option: [\n                \"hg\",\n                \"cpp\",\n                \"hms\",\n                \"hf\"\n            ],\n            ans: \"cpp\"\n        },\n        {\n            qustion: \"Which of the following user-defined header file extension used in c++?\",\n            option: [\n                \"hg\",\n                \"cpp\",\n                \"hms\",\n                \"hf\"\n            ],\n            ans: \"hms\"\n        },\n        {\n            qustion: \"Which of the following user-defined header file extension used in c++?\",\n            option: [\n                \"hg\",\n                \"cpp\",\n                \"hms\",\n                \"hf\"\n            ],\n            ans: \"hf\"\n        }\n    ];\n    function handleChange(e) {\n        console.log(e);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mr-auto align-middle p-5 border-x-sky-950 border-4 border-solid\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"font-serif text-center \",\n                children: data.map((item)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"qustion\",\n                                children: item.qustion\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 16\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                className: \"@apply grid grid-cols-[1fr_1fr] gap-3 text-[15px]\",\n                                onChange: ()=>SetAnswer(item.ans),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"ans grow\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"radio\",\n                                                name: \"ch\",\n                                                id: \"input1\",\n                                                value: item.option[0],\n                                                onChange: (e)=>{\n                                                    handleChange(e.target.value === item.ans);\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                lineNumber: 45,\n                                                columnNumber: 13\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"input1\",\n                                                children: item.option[0]\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                lineNumber: 46,\n                                                columnNumber: 13\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"ans grow \",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"radio\",\n                                                name: \"ch\",\n                                                id: \"input2\",\n                                                value: item.option[1],\n                                                onChange: handleChange\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                lineNumber: 51,\n                                                columnNumber: 13\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"input2\",\n                                                children: item.option[1]\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                lineNumber: 52,\n                                                columnNumber: 13\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"ans grow \",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"radio\",\n                                                name: \"ch\",\n                                                id: \"input3\",\n                                                value: item.option[2],\n                                                onChange: handleChange\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                lineNumber: 56,\n                                                columnNumber: 13\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"input3\",\n                                                children: item.option[2]\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                lineNumber: 57,\n                                                columnNumber: 13\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"ans grow \",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"radio\",\n                                                name: \"ch\",\n                                                id: \"input4\",\n                                                value: item.option[3],\n                                                onChange: handleChange\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                lineNumber: 62,\n                                                columnNumber: 13\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"input4\",\n                                                children: item.option[3]\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                lineNumber: 63,\n                                                columnNumber: 13\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 16\n                            }, this)\n                        ]\n                    }, void 0, true);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"esvahchzef47awy3YGwcpkrwZS4=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNpQztBQUVsQixTQUFTQyxPQUFPOztJQUMvQixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0gsK0NBQVFBLENBQUM7SUFDckMsTUFBTUksT0FBTztRQUNYO1lBQ0VDLFNBQVE7WUFDUkMsUUFBTztnQkFBQztnQkFBSztnQkFBTTtnQkFBTTthQUFLO1lBQzlCQyxLQUFLO1FBQ1A7UUFDQTtZQUNFRixTQUFRO1lBQ1JDLFFBQU87Z0JBQUM7Z0JBQUs7Z0JBQU07Z0JBQU07YUFBSztZQUM5QkMsS0FBSztRQUNQO1FBQ0E7WUFDRUYsU0FBUTtZQUNSQyxRQUFPO2dCQUFDO2dCQUFLO2dCQUFNO2dCQUFNO2FBQUs7WUFDOUJDLEtBQUs7UUFDUDtRQUNBO1lBQ0VGLFNBQVE7WUFDUkMsUUFBTztnQkFBQztnQkFBSztnQkFBTTtnQkFBTTthQUFLO1lBQzlCQyxLQUFLO1FBQ1A7S0FDRDtJQUVDLFNBQVNDLGFBQWFDLENBQUssRUFBQztRQUMxQkMsUUFBUUMsR0FBRyxDQUFDRjtJQUNkO0lBRUEscUJBQ0U7a0JBQ0UsNEVBQUNHO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNEO2dCQUFJQyxXQUFVOzBCQUNaVCxLQUFLVSxHQUFHLENBQUMsQ0FBQ0MsT0FBTztvQkFFZixxQkFDQzs7MENBQ0MsOERBQUNDO2dDQUFHSCxXQUFVOzBDQUFXRSxLQUFLVixPQUFPOzs7Ozs7MENBQ3JDLDhEQUFDWTtnQ0FBS0osV0FBVTtnQ0FBbURLLFVBQVUsSUFBSWYsVUFBVVksS0FBS1IsR0FBRzs7a0RBQ3RHLDhEQUFDSzt3Q0FBSUMsV0FBVTs7MERBRWYsOERBQUNNO2dEQUFNQyxNQUFLO2dEQUFRQyxNQUFLO2dEQUFLQyxJQUFHO2dEQUFTQyxPQUFPUixLQUFLVCxNQUFNLENBQUMsRUFBRTtnREFBRVksVUFBVSxDQUFDVCxJQUFJO29EQUFHRCxhQUFhQyxFQUFFZSxNQUFNLENBQUNELEtBQUssS0FBR1IsS0FBS1IsR0FBRztnREFBSTs7Ozs7OzBEQUM3SCw4REFBQ2tCO2dEQUFNQyxTQUFROzBEQUFXWCxLQUFLVCxNQUFNLENBQUMsRUFBRTs7Ozs7Ozs7Ozs7O2tEQUd4Qyw4REFBQ007d0NBQUlDLFdBQVU7OzBEQUVmLDhEQUFDTTtnREFBTUMsTUFBSztnREFBUUMsTUFBSztnREFBS0MsSUFBRztnREFBU0MsT0FBT1IsS0FBS1QsTUFBTSxDQUFDLEVBQUU7Z0RBQUVZLFVBQVVWOzs7Ozs7MERBQzNFLDhEQUFDaUI7Z0RBQU1DLFNBQVE7MERBQVlYLEtBQUtULE1BQU0sQ0FBQyxFQUFFOzs7Ozs7Ozs7Ozs7a0RBRXpDLDhEQUFDTTt3Q0FBSUMsV0FBVTs7MERBRWYsOERBQUNNO2dEQUFNQyxNQUFLO2dEQUFRQyxNQUFLO2dEQUFLQyxJQUFHO2dEQUFTQyxPQUFPUixLQUFLVCxNQUFNLENBQUMsRUFBRTtnREFBRVksVUFBVVY7Ozs7OzswREFDM0UsOERBQUNpQjtnREFBTUMsU0FBUTswREFBV1gsS0FBS1QsTUFBTSxDQUFDLEVBQUU7Ozs7Ozs7Ozs7OztrREFHeEMsOERBQUNNO3dDQUFJQyxXQUFVOzswREFFZiw4REFBQ007Z0RBQU1DLE1BQUs7Z0RBQVFDLE1BQUs7Z0RBQUtDLElBQUc7Z0RBQVNDLE9BQU9SLEtBQUtULE1BQU0sQ0FBQyxFQUFFO2dEQUFFWSxVQUFVVjs7Ozs7OzBEQUMzRSw4REFBQ2lCO2dEQUFNQyxTQUFROzBEQUFXWCxLQUFLVCxNQUFNLENBQUMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBSzFDOzs7Ozs7Ozs7Ozs7QUFNVixDQUFDO0dBdEV1Qkw7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbG9nIH0gZnJvbSBcImNvbnNvbGVcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5jb25zdCBbYW5zd2VyLCBTZXRBbnN3ZXJdID0gdXNlU3RhdGUoXCIgXCIpO1xuY29uc3QgZGF0YSA9IFtcbiAge1xuICAgIHF1c3Rpb246XCJXaGljaCBvZiB0aGUgZm9sbG93aW5nIHVzZXItZGVmaW5lZCBoZWFkZXIgZmlsZSBleHRlbnNpb24gdXNlZCBpbiBjKys/XCIsXG4gICAgb3B0aW9uOltcImhnXCIsXCJjcHBcIixcImhtc1wiLFwiaGZcIl0sXG4gICAgYW5zIDpcImhnXCIgXG4gIH0sXG4gIHtcbiAgICBxdXN0aW9uOlwiV2hpY2ggb2YgdGhlIGZvbGxvd2luZyB1c2VyLWRlZmluZWQgaGVhZGVyIGZpbGUgZXh0ZW5zaW9uIHVzZWQgaW4gYysrP1wiLFxuICAgIG9wdGlvbjpbXCJoZ1wiLFwiY3BwXCIsXCJobXNcIixcImhmXCJdLFxuICAgIGFucyA6XCJjcHBcIiBcbiAgfSxcbiAge1xuICAgIHF1c3Rpb246XCJXaGljaCBvZiB0aGUgZm9sbG93aW5nIHVzZXItZGVmaW5lZCBoZWFkZXIgZmlsZSBleHRlbnNpb24gdXNlZCBpbiBjKys/XCIsXG4gICAgb3B0aW9uOltcImhnXCIsXCJjcHBcIixcImhtc1wiLFwiaGZcIl0sXG4gICAgYW5zIDpcImhtc1wiIFxuICB9LFxuICB7XG4gICAgcXVzdGlvbjpcIldoaWNoIG9mIHRoZSBmb2xsb3dpbmcgdXNlci1kZWZpbmVkIGhlYWRlciBmaWxlIGV4dGVuc2lvbiB1c2VkIGluIGMrKz9cIixcbiAgICBvcHRpb246W1wiaGdcIixcImNwcFwiLFwiaG1zXCIsXCJoZlwiXSxcbiAgICBhbnMgOlwiaGZcIiBcbiAgfVxuXVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlOmFueSl7XG4gICAgY29uc29sZS5sb2coZSkgICAgXG4gIH07XG4gIFxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLWF1dG8gYWxpZ24tbWlkZGxlIHAtNSBib3JkZXIteC1za3ktOTUwIGJvcmRlci00IGJvcmRlci1zb2xpZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtc2VyaWYgdGV4dC1jZW50ZXIgXCIgPlxuICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSk9PntcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJxdXN0aW9uXCI+e2l0ZW0ucXVzdGlvbn08L2gzPlxuICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiQGFwcGx5IGdyaWQgZ3JpZC1jb2xzLVsxZnJfMWZyXSBnYXAtMyB0ZXh0LVsxNXB4XVwib25DaGFuZ2U9eygpPT5TZXRBbnN3ZXIoaXRlbS5hbnMpfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5zIGdyb3dcIiA+XG5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiY2hcIiBpZD1cImlucHV0MVwiIHZhbHVlPXtpdGVtLm9wdGlvblswXX0gb25DaGFuZ2U9eyhlKT0+eyAgaGFuZGxlQ2hhbmdlKGUudGFyZ2V0LnZhbHVlPT09aXRlbS5hbnMpICAgfX0gLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW5wdXQxXCIgPntpdGVtLm9wdGlvblswXX1cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5zIGdyb3cgXCI+XG5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiY2hcIiBpZD1cImlucHV0MlwiIHZhbHVlPXtpdGVtLm9wdGlvblsxXX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbnB1dDJcIiAgPntpdGVtLm9wdGlvblsxXX08L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFucyBncm93IFwiPlxuXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImNoXCIgaWQ9XCJpbnB1dDNcIiB2YWx1ZT17aXRlbS5vcHRpb25bMl19IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9Lz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW5wdXQzXCIgPntpdGVtLm9wdGlvblsyXX1cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5zIGdyb3cgXCI+XG5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiY2hcIiBpZD1cImlucHV0NFwiIHZhbHVlPXtpdGVtLm9wdGlvblszXX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW5wdXQ0XCIgPntpdGVtLm9wdGlvblszXX08L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvPlxuICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJIb21lIiwiYW5zd2VyIiwiU2V0QW5zd2VyIiwiZGF0YSIsInF1c3Rpb24iLCJvcHRpb24iLCJhbnMiLCJoYW5kbGVDaGFuZ2UiLCJlIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsIml0ZW0iLCJoMyIsImZvcm0iLCJvbkNoYW5nZSIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJpZCIsInZhbHVlIiwidGFyZ2V0IiwibGFiZWwiLCJodG1sRm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});