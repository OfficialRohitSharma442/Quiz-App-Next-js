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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const [answer, SetAnswer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\" \");\n    const data = [\n        {\n            qustion: \"Which of the following user-defined header file extension used in c++?\",\n            option: [\n                \"hg\",\n                \"cpp\",\n                \"hms\",\n                \"hf\"\n            ],\n            ans: \"hg\"\n        },\n        {\n            qustion: \"Which of the following user-defined header file extension used in c++?\",\n            option: [\n                \"hg\",\n                \"cpp\",\n                \"hms\",\n                \"hf\"\n            ],\n            ans: \"hg\"\n        },\n        {\n            qustion: \"Which of the following user-defined header file extension used in c++?\",\n            option: [\n                \"hg\",\n                \"cpp\",\n                \"hms\",\n                \"hf\"\n            ],\n            ans: \"cpp\"\n        },\n        {\n            qustion: \"Which of the following user-defined header file extension used in c++?\",\n            option: [\n                \"hg\",\n                \"cpp\",\n                \"hms\",\n                \"hf\"\n            ],\n            ans: \"cpp\"\n        }\n    ];\n    function handleChange(e) {\n        if (e.target.value === answer) {\n            alert(\"Correct Answer\");\n        } else {\n            alert(\"incorrent answer\");\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mr-auto align-middle p-5 border-x-sky-950 border-4 border-solid\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"font-serif text-center \",\n                children: data.map((item)=>{\n                    console.log(item);\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"qustion\",\n                                children: item.qustion\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 16\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                className: \"@apply grid grid-cols-[1fr_1fr] gap-3 text-[15px]\",\n                                onChange: ()=>SetAnswer(item.ans),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"ans grow\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"radio\",\n                                                name: \"ch\",\n                                                id: \"input1\",\n                                                value: item.option[0],\n                                                onChange: handleChange\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                lineNumber: 51,\n                                                columnNumber: 13\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"input1\",\n                                                children: item.option[0]\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                lineNumber: 52,\n                                                columnNumber: 13\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"ans grow \",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"radio\",\n                                                name: \"ch\",\n                                                id: \"input2\",\n                                                value: item.option[1],\n                                                onChange: handleChange\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                lineNumber: 57,\n                                                columnNumber: 13\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"input2\",\n                                                children: item.option[1]\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                lineNumber: 58,\n                                                columnNumber: 13\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"ans grow \",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"radio\",\n                                                name: \"ch\",\n                                                id: \"input3\",\n                                                value: item.option[2],\n                                                onChange: handleChange\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                lineNumber: 62,\n                                                columnNumber: 13\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"input3\",\n                                                children: item.option[2]\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                lineNumber: 63,\n                                                columnNumber: 13\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"ans grow \",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"radio\",\n                                                name: \"ch\",\n                                                id: \"input4\",\n                                                value: item.option[3],\n                                                onChange: handleChange\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                lineNumber: 68,\n                                                columnNumber: 13\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"input4\",\n                                                children: item.option[3]\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                lineNumber: 69,\n                                                columnNumber: 13\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 16\n                            }, this)\n                        ]\n                    }, void 0, true);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n            lineNumber: 41,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"esvahchzef47awy3YGwcpkrwZS4=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNpQztBQUVsQixTQUFTQyxPQUFPOztJQUMvQixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0gsK0NBQVFBLENBQUM7SUFDckMsTUFBTUksT0FBTztRQUNYO1lBQ0VDLFNBQVE7WUFDUkMsUUFBTztnQkFBQztnQkFBSztnQkFBTTtnQkFBTTthQUFLO1lBQzlCQyxLQUFLO1FBQ1A7UUFDQTtZQUNFRixTQUFRO1lBQ1JDLFFBQU87Z0JBQUM7Z0JBQUs7Z0JBQU07Z0JBQU07YUFBSztZQUM5QkMsS0FBSztRQUNQO1FBQ0E7WUFDRUYsU0FBUTtZQUNSQyxRQUFPO2dCQUFDO2dCQUFLO2dCQUFNO2dCQUFNO2FBQUs7WUFDOUJDLEtBQUs7UUFDUDtRQUNBO1lBQ0VGLFNBQVE7WUFDUkMsUUFBTztnQkFBQztnQkFBSztnQkFBTTtnQkFBTTthQUFLO1lBQzlCQyxLQUFLO1FBQ1A7S0FDRDtJQUVDLFNBQVNDLGFBQWFDLENBQUssRUFBQztRQUMxQixJQUFHQSxFQUFFQyxNQUFNLENBQUNDLEtBQUssS0FBR1QsUUFBTztZQUN6QlUsTUFBTTtRQUNSLE9BQUs7WUFDSEEsTUFBTTtRQUNSLENBQUM7SUFHSDtJQUVBLHFCQUNFO2tCQUNFLDRFQUFDQztZQUFJQyxXQUFVO3NCQUNiLDRFQUFDRDtnQkFBSUMsV0FBVTswQkFDWlYsS0FBS1csR0FBRyxDQUFDLENBQUNDLE9BQU87b0JBQ2hCQyxRQUFRQyxHQUFHLENBQUNGO29CQUNYLHFCQUNDOzswQ0FDQyw4REFBQ0c7Z0NBQUdMLFdBQVU7MENBQVdFLEtBQUtYLE9BQU87Ozs7OzswQ0FDckMsOERBQUNlO2dDQUFLTixXQUFVO2dDQUFtRE8sVUFBVSxJQUFJbEIsVUFBVWEsS0FBS1QsR0FBRzs7a0RBQ3RHLDhEQUFDTTt3Q0FBSUMsV0FBVTs7MERBRWYsOERBQUNRO2dEQUFNQyxNQUFLO2dEQUFRQyxNQUFLO2dEQUFLQyxJQUFHO2dEQUFTZCxPQUFPSyxLQUFLVixNQUFNLENBQUMsRUFBRTtnREFBRWUsVUFBVWI7Ozs7OzswREFDM0UsOERBQUNrQjtnREFBTUMsU0FBUTswREFBV1gsS0FBS1YsTUFBTSxDQUFDLEVBQUU7Ozs7Ozs7Ozs7OztrREFHeEMsOERBQUNPO3dDQUFJQyxXQUFVOzswREFFZiw4REFBQ1E7Z0RBQU1DLE1BQUs7Z0RBQVFDLE1BQUs7Z0RBQUtDLElBQUc7Z0RBQVNkLE9BQU9LLEtBQUtWLE1BQU0sQ0FBQyxFQUFFO2dEQUFFZSxVQUFVYjs7Ozs7OzBEQUMzRSw4REFBQ2tCO2dEQUFNQyxTQUFROzBEQUFZWCxLQUFLVixNQUFNLENBQUMsRUFBRTs7Ozs7Ozs7Ozs7O2tEQUV6Qyw4REFBQ087d0NBQUlDLFdBQVU7OzBEQUVmLDhEQUFDUTtnREFBTUMsTUFBSztnREFBUUMsTUFBSztnREFBS0MsSUFBRztnREFBU2QsT0FBT0ssS0FBS1YsTUFBTSxDQUFDLEVBQUU7Z0RBQUVlLFVBQVViOzs7Ozs7MERBQzNFLDhEQUFDa0I7Z0RBQU1DLFNBQVE7MERBQVdYLEtBQUtWLE1BQU0sQ0FBQyxFQUFFOzs7Ozs7Ozs7Ozs7a0RBR3hDLDhEQUFDTzt3Q0FBSUMsV0FBVTs7MERBRWYsOERBQUNRO2dEQUFNQyxNQUFLO2dEQUFRQyxNQUFLO2dEQUFLQyxJQUFHO2dEQUFTZCxPQUFPSyxLQUFLVixNQUFNLENBQUMsRUFBRTtnREFBRWUsVUFBVWI7Ozs7OzswREFDM0UsOERBQUNrQjtnREFBTUMsU0FBUTswREFBV1gsS0FBS1YsTUFBTSxDQUFDLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQUsxQzs7Ozs7Ozs7Ozs7O0FBTVYsQ0FBQztHQTVFdUJMO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxvZyB9IGZyb20gXCJjb25zb2xlXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuY29uc3QgW2Fuc3dlciwgU2V0QW5zd2VyXSA9IHVzZVN0YXRlKFwiIFwiKTtcbmNvbnN0IGRhdGEgPSBbXG4gIHtcbiAgICBxdXN0aW9uOlwiV2hpY2ggb2YgdGhlIGZvbGxvd2luZyB1c2VyLWRlZmluZWQgaGVhZGVyIGZpbGUgZXh0ZW5zaW9uIHVzZWQgaW4gYysrP1wiLFxuICAgIG9wdGlvbjpbXCJoZ1wiLFwiY3BwXCIsXCJobXNcIixcImhmXCJdLFxuICAgIGFucyA6XCJoZ1wiIFxuICB9LFxuICB7XG4gICAgcXVzdGlvbjpcIldoaWNoIG9mIHRoZSBmb2xsb3dpbmcgdXNlci1kZWZpbmVkIGhlYWRlciBmaWxlIGV4dGVuc2lvbiB1c2VkIGluIGMrKz9cIixcbiAgICBvcHRpb246W1wiaGdcIixcImNwcFwiLFwiaG1zXCIsXCJoZlwiXSxcbiAgICBhbnMgOlwiaGdcIiBcbiAgfSxcbiAge1xuICAgIHF1c3Rpb246XCJXaGljaCBvZiB0aGUgZm9sbG93aW5nIHVzZXItZGVmaW5lZCBoZWFkZXIgZmlsZSBleHRlbnNpb24gdXNlZCBpbiBjKys/XCIsXG4gICAgb3B0aW9uOltcImhnXCIsXCJjcHBcIixcImhtc1wiLFwiaGZcIl0sXG4gICAgYW5zIDpcImNwcFwiIFxuICB9LFxuICB7XG4gICAgcXVzdGlvbjpcIldoaWNoIG9mIHRoZSBmb2xsb3dpbmcgdXNlci1kZWZpbmVkIGhlYWRlciBmaWxlIGV4dGVuc2lvbiB1c2VkIGluIGMrKz9cIixcbiAgICBvcHRpb246W1wiaGdcIixcImNwcFwiLFwiaG1zXCIsXCJoZlwiXSxcbiAgICBhbnMgOlwiY3BwXCIgXG4gIH1cbl1cblxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZTphbnkpe1xuICAgIGlmKGUudGFyZ2V0LnZhbHVlPT09YW5zd2VyKXtcbiAgICAgIGFsZXJ0KFwiQ29ycmVjdCBBbnN3ZXJcIilcbiAgICB9ZWxzZXtcbiAgICAgIGFsZXJ0KFwiaW5jb3JyZW50IGFuc3dlclwiKVxuICAgIH1cbiAgICBcbiAgICBcbiAgfTtcbiAgXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0byBhbGlnbi1taWRkbGUgcC01IGJvcmRlci14LXNreS05NTAgYm9yZGVyLTQgYm9yZGVyLXNvbGlkXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1zZXJpZiB0ZXh0LWNlbnRlciBcIiA+XG4gICAgICAgICAge2RhdGEubWFwKChpdGVtKT0+e1xuICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbSlcbiAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicXVzdGlvblwiPntpdGVtLnF1c3Rpb259PC9oMz5cbiAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIkBhcHBseSBncmlkIGdyaWQtY29scy1bMWZyXzFmcl0gZ2FwLTMgdGV4dC1bMTVweF1cIm9uQ2hhbmdlPXsoKT0+U2V0QW5zd2VyKGl0ZW0uYW5zKX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFucyBncm93XCIgPlxuXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImNoXCIgaWQ9XCJpbnB1dDFcIiB2YWx1ZT17aXRlbS5vcHRpb25bMF19IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlucHV0MVwiID57aXRlbS5vcHRpb25bMF19XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFucyBncm93IFwiPlxuXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImNoXCIgaWQ9XCJpbnB1dDJcIiB2YWx1ZT17aXRlbS5vcHRpb25bMV19IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9Lz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW5wdXQyXCIgID57aXRlbS5vcHRpb25bMV19PC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnMgZ3JvdyBcIj5cblxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJjaFwiIGlkPVwiaW5wdXQzXCIgdmFsdWU9e2l0ZW0ub3B0aW9uWzJdfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlucHV0M1wiID57aXRlbS5vcHRpb25bMl19XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFucyBncm93IFwiPlxuXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImNoXCIgaWQ9XCJpbnB1dDRcIiB2YWx1ZT17aXRlbS5vcHRpb25bM119IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlucHV0NFwiID57aXRlbS5vcHRpb25bM119PC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSG9tZSIsImFuc3dlciIsIlNldEFuc3dlciIsImRhdGEiLCJxdXN0aW9uIiwib3B0aW9uIiwiYW5zIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiYWxlcnQiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJpdGVtIiwiY29uc29sZSIsImxvZyIsImgzIiwiZm9ybSIsIm9uQ2hhbmdlIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsImlkIiwibGFiZWwiLCJodG1sRm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});