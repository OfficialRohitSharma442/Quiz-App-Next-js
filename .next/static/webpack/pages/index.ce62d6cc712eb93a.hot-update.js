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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const [answer, SetAnswer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const data = [\n        {\n            qustion: \"What is JavaScript?\",\n            option: [\n                \"JavaScript is a scripting language used to make the website interactive\",\n                \"JavaScript is an assembly language used to make the website interactive\",\n                \"JavaScript is a compiled language used to make the website interactive\",\n                \"None of Above\"\n            ],\n            ans: \"JavaScript is a scripting language used to make the website interactive\"\n        },\n        {\n            qustion: \" Which of the following is correct about JavaScript?\",\n            option: [\n                \"JavaScript is an Object-Based language\",\n                \"JavaScript is Assembly-language\",\n                \"JavaScript is an Object-Oriented language\",\n                \"JavaScript is a High-level language\"\n            ],\n            ans: \"JavaScript is Assembly-language\"\n        },\n        {\n            qustion: \"Arrays in JavaScript are defined by which of the following statements?\",\n            option: [\n                \"It is an ordered list of values\",\n                \"It is an ordered list of objects\",\n                \"It is an ordered list of string\",\n                \"It is an ordered list of functions\"\n            ],\n            ans: \"It is an ordered list of functions\"\n        },\n        {\n            qustion: \"Which of the following is not javascript data types?\",\n            option: [\n                \"Null type\",\n                \"Undefined type\",\n                \"Number type\",\n                \"All of the mentioned\"\n            ],\n            ans: \"All of the mentioned\"\n        }\n    ];\n    console.log(answer);\n    // function handleChange(e:any){\n    //   // console.log(e);    \n    // };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mr-auto align-middle p-5 border-x-sky-950 border-4 border-solid \",\n            children: data.map((item)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"font-serif text-center \".concat(answer ? \"bg-gradient-to-r from-cyan-500 to-blue-500\" : \"bg-gradient-to-r from-white-500 to-white-500\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"qustion\",\n                                children: item.qustion\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 16\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                className: \"@apply grid grid-cols-[1fr_1fr] gap-3 text-[15px]\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"ans grow\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"radio\",\n                                                name: \"ch\",\n                                                id: \"input1\",\n                                                value: item.option[0],\n                                                onChange: (e)=>{\n                                                    SetAnswer(e.target.value === item.ans);\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                lineNumber: 48,\n                                                columnNumber: 13\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"input1\",\n                                                children: item.option[0]\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                lineNumber: 54,\n                                                columnNumber: 13\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 16\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"ans grow \",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"radio\",\n                                                name: \"ch\",\n                                                id: \"input2\",\n                                                value: item.option[1],\n                                                onChange: (e)=>{\n                                                    SetAnswer(e.target.value === item.ans);\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                lineNumber: 59,\n                                                columnNumber: 13\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"input2\",\n                                                children: item.option[1]\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                lineNumber: 65,\n                                                columnNumber: 13\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"ans grow \",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"radio\",\n                                                name: \"ch\",\n                                                id: \"input3\",\n                                                value: item.option[2],\n                                                onChange: (e)=>{\n                                                    SetAnswer(e.target.value === item.ans);\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                lineNumber: 69,\n                                                columnNumber: 13\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"input3\",\n                                                children: item.option[2]\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                lineNumber: 75,\n                                                columnNumber: 13\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"ans grow \",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"radio\",\n                                                name: \"ch\",\n                                                id: \"input4\",\n                                                value: item.option[3],\n                                                onChange: (e)=>{\n                                                    SetAnswer(e.target.value === item.ans);\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                lineNumber: 80,\n                                                columnNumber: 13\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"input4\",\n                                                children: item.option[3]\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                lineNumber: 86,\n                                                columnNumber: 13\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 16\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 16\n                    }, this)\n                }, void 0, false);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"LGRmS9XDSgD+Y3BZuhuAkgqQCaE=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNpQztBQUVsQixTQUFTQyxPQUFPOztJQUMvQixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0gsK0NBQVFBLENBQUMsS0FBSztJQUMxQyxNQUFNSSxPQUFPO1FBQ1g7WUFDRUMsU0FBUTtZQUNSQyxRQUFPO2dCQUFDO2dCQUEwRTtnQkFBMEU7Z0JBQXlFO2FBQWdCO1lBQ3JQQyxLQUFLO1FBQ1A7UUFDQTtZQUNFRixTQUFRO1lBQ1JDLFFBQU87Z0JBQUM7Z0JBQXlDO2dCQUFrQztnQkFBNEM7YUFBc0M7WUFDcktDLEtBQUs7UUFDUDtRQUNBO1lBQ0VGLFNBQVE7WUFDUkMsUUFBTztnQkFBQztnQkFBa0M7Z0JBQW1DO2dCQUFrQzthQUFxQztZQUNwSkMsS0FBSztRQUNQO1FBQ0E7WUFDRUYsU0FBUTtZQUNSQyxRQUFPO2dCQUFDO2dCQUNSO2dCQUNBO2dCQUNBO2FBQXVCO1lBQ3ZCQyxLQUFLO1FBQ1A7S0FDRDtJQUNEQyxRQUFRQyxHQUFHLENBQUNQO0lBQ1YsZ0NBQWdDO0lBQ2hDLDJCQUEyQjtJQUMzQixLQUFLO0lBRUwscUJBQ0U7a0JBQ0UsNEVBQUNRO1lBQUlDLFdBQVU7c0JBQ1ZQLEtBQUtRLEdBQUcsQ0FBQyxDQUFDQyxPQUFPO2dCQUVoQixxQkFDRTs4QkFDQyw0RUFBQ0g7d0JBQUlDLFdBQVcsMEJBQTZILE9BQW5HVCxTQUFPLCtDQUE2Qyw4Q0FBOEM7OzBDQUM1SSw4REFBQ1k7Z0NBQUdILFdBQVU7MENBQVdFLEtBQUtSLE9BQU87Ozs7OzswQ0FDckMsOERBQUNVO2dDQUFLSixXQUFVOztrREFDaEIsOERBQUNEO3dDQUFJQyxXQUFVOzswREFFbEIsOERBQUNLO2dEQUNBQyxNQUFLO2dEQUNMQyxNQUFLO2dEQUNMQyxJQUFHO2dEQUNIQyxPQUFPUCxLQUFLUCxNQUFNLENBQUMsRUFBRTtnREFDckJlLFVBQVUsQ0FBQ0MsSUFBSTtvREFBRW5CLFVBQVVtQixFQUFFQyxNQUFNLENBQUNILEtBQUssS0FBR1AsS0FBS04sR0FBRztnREFBQzs7Ozs7OzBEQUN0RCw4REFBQ2lCO2dEQUFNQyxTQUFROzBEQUFXWixLQUFLUCxNQUFNLENBQUMsRUFBRTs7Ozs7Ozs7Ozs7O2tEQUd4Qyw4REFBQ0k7d0NBQUlDLFdBQVU7OzBEQUVmLDhEQUFDSztnREFDQUMsTUFBSztnREFDTEMsTUFBSztnREFDTEMsSUFBRztnREFDSEMsT0FBT1AsS0FBS1AsTUFBTSxDQUFDLEVBQUU7Z0RBQ3JCZSxVQUFVLENBQUNDLElBQUk7b0RBQUVuQixVQUFVbUIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLLEtBQUdQLEtBQUtOLEdBQUc7Z0RBQUM7Ozs7OzswREFDdEQsOERBQUNpQjtnREFBTUMsU0FBUTswREFBWVosS0FBS1AsTUFBTSxDQUFDLEVBQUU7Ozs7Ozs7Ozs7OztrREFFekMsOERBQUNJO3dDQUFJQyxXQUFVOzswREFFZiw4REFBQ0s7Z0RBQ0RDLE1BQUs7Z0RBQ0xDLE1BQUs7Z0RBQ0xDLElBQUc7Z0RBQ0hDLE9BQU9QLEtBQUtQLE1BQU0sQ0FBQyxFQUFFO2dEQUNyQmUsVUFBVSxDQUFDQyxJQUFJO29EQUFHbkIsVUFBVW1CLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSyxLQUFHUCxLQUFLTixHQUFHO2dEQUFDOzs7Ozs7MERBQ3RELDhEQUFDaUI7Z0RBQU1DLFNBQVE7MERBQVdaLEtBQUtQLE1BQU0sQ0FBQyxFQUFFOzs7Ozs7Ozs7Ozs7a0RBR3hDLDhEQUFDSTt3Q0FBSUMsV0FBVTs7MERBRWYsOERBQUNLO2dEQUNEQyxNQUFLO2dEQUNMQyxNQUFLO2dEQUNMQyxJQUFHO2dEQUNIQyxPQUFPUCxLQUFLUCxNQUFNLENBQUMsRUFBRTtnREFDckJlLFVBQVUsQ0FBQ0MsSUFBSTtvREFBQ25CLFVBQVVtQixFQUFFQyxNQUFNLENBQUNILEtBQUssS0FBR1AsS0FBS04sR0FBRztnREFBQzs7Ozs7OzBEQUNwRCw4REFBQ2lCO2dEQUFNQyxTQUFROzBEQUFXWixLQUFLUCxNQUFNLENBQUMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU0xQzs7Ozs7OztBQUtWLENBQUM7R0E3RnVCTDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsb2cgfSBmcm9tIFwiY29uc29sZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbmNvbnN0IFthbnN3ZXIsIFNldEFuc3dlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5jb25zdCBkYXRhID0gW1xuICB7XG4gICAgcXVzdGlvbjpcIldoYXQgaXMgSmF2YVNjcmlwdD9cIixcbiAgICBvcHRpb246W1wiSmF2YVNjcmlwdCBpcyBhIHNjcmlwdGluZyBsYW5ndWFnZSB1c2VkIHRvIG1ha2UgdGhlIHdlYnNpdGUgaW50ZXJhY3RpdmVcIixcIkphdmFTY3JpcHQgaXMgYW4gYXNzZW1ibHkgbGFuZ3VhZ2UgdXNlZCB0byBtYWtlIHRoZSB3ZWJzaXRlIGludGVyYWN0aXZlXCIsXCJKYXZhU2NyaXB0IGlzIGEgY29tcGlsZWQgbGFuZ3VhZ2UgdXNlZCB0byBtYWtlIHRoZSB3ZWJzaXRlIGludGVyYWN0aXZlXCIsXCJOb25lIG9mIEFib3ZlXCJdLFxuICAgIGFucyA6XCJKYXZhU2NyaXB0IGlzIGEgc2NyaXB0aW5nIGxhbmd1YWdlIHVzZWQgdG8gbWFrZSB0aGUgd2Vic2l0ZSBpbnRlcmFjdGl2ZVwiIFxuICB9LFxuICB7XG4gICAgcXVzdGlvbjpcIiBXaGljaCBvZiB0aGUgZm9sbG93aW5nIGlzIGNvcnJlY3QgYWJvdXQgSmF2YVNjcmlwdD9cIixcbiAgICBvcHRpb246W1wiSmF2YVNjcmlwdCBpcyBhbiBPYmplY3QtQmFzZWQgbGFuZ3VhZ2VcIixcIkphdmFTY3JpcHQgaXMgQXNzZW1ibHktbGFuZ3VhZ2VcIixcIkphdmFTY3JpcHQgaXMgYW4gT2JqZWN0LU9yaWVudGVkIGxhbmd1YWdlXCIsXCJKYXZhU2NyaXB0IGlzIGEgSGlnaC1sZXZlbCBsYW5ndWFnZVwiXSxcbiAgICBhbnMgOlwiSmF2YVNjcmlwdCBpcyBBc3NlbWJseS1sYW5ndWFnZVwiIFxuICB9LFxuICB7XG4gICAgcXVzdGlvbjpcIkFycmF5cyBpbiBKYXZhU2NyaXB0IGFyZSBkZWZpbmVkIGJ5IHdoaWNoIG9mIHRoZSBmb2xsb3dpbmcgc3RhdGVtZW50cz9cIixcbiAgICBvcHRpb246W1wiSXQgaXMgYW4gb3JkZXJlZCBsaXN0IG9mIHZhbHVlc1wiLFwiSXQgaXMgYW4gb3JkZXJlZCBsaXN0IG9mIG9iamVjdHNcIixcIkl0IGlzIGFuIG9yZGVyZWQgbGlzdCBvZiBzdHJpbmdcIixcIkl0IGlzIGFuIG9yZGVyZWQgbGlzdCBvZiBmdW5jdGlvbnNcIl0sXG4gICAgYW5zIDpcIkl0IGlzIGFuIG9yZGVyZWQgbGlzdCBvZiBmdW5jdGlvbnNcIiBcbiAgfSxcbiAge1xuICAgIHF1c3Rpb246XCJXaGljaCBvZiB0aGUgZm9sbG93aW5nIGlzIG5vdCBqYXZhc2NyaXB0IGRhdGEgdHlwZXM/XCIsXG4gICAgb3B0aW9uOltcIk51bGwgdHlwZVwiLFxuICAgIFwiVW5kZWZpbmVkIHR5cGVcIixcbiAgICBcIk51bWJlciB0eXBlXCIsXG4gICAgXCJBbGwgb2YgdGhlIG1lbnRpb25lZFwiXSxcbiAgICBhbnMgOlwiQWxsIG9mIHRoZSBtZW50aW9uZWRcIiBcbiAgfVxuXVxuY29uc29sZS5sb2coYW5zd2VyKTtcbiAgLy8gZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGU6YW55KXtcbiAgLy8gICAvLyBjb25zb2xlLmxvZyhlKTsgICAgXG4gIC8vIH07XG4gIFxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLWF1dG8gYWxpZ24tbWlkZGxlIHAtNSBib3JkZXIteC1za3ktOTUwIGJvcmRlci00IGJvcmRlci1zb2xpZCBcIj5cbiAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0pPT57XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZm9udC1zZXJpZiB0ZXh0LWNlbnRlciAke2Fuc3dlcj9cImJnLWdyYWRpZW50LXRvLXIgZnJvbS1jeWFuLTUwMCB0by1ibHVlLTUwMFwiOlwiYmctZ3JhZGllbnQtdG8tciBmcm9tLXdoaXRlLTUwMCB0by13aGl0ZS01MDBcIn1gfSA+XG4gICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicXVzdGlvblwiPntpdGVtLnF1c3Rpb259PC9oMz5cbiAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIkBhcHBseSBncmlkIGdyaWQtY29scy1bMWZyXzFmcl0gZ2FwLTMgdGV4dC1bMTVweF1cIj5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5zIGdyb3dcIiA+XG5cbiAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIiBcbiAgICAgICAgICAgICBuYW1lPVwiY2hcIlxuICAgICAgICAgICAgIGlkPVwiaW5wdXQxXCIgXG4gICAgICAgICAgICAgdmFsdWU9e2l0ZW0ub3B0aW9uWzBdfSBcbiAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT57IFNldEFuc3dlcihlLnRhcmdldC52YWx1ZT09PWl0ZW0uYW5zKX19IC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlucHV0MVwiID57aXRlbS5vcHRpb25bMF19XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFucyBncm93IFwiPlxuXG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIiBcbiAgICAgICAgICAgICBuYW1lPVwiY2hcIiBcbiAgICAgICAgICAgICBpZD1cImlucHV0MlwiIFxuICAgICAgICAgICAgIHZhbHVlPXtpdGVtLm9wdGlvblsxXX1cbiAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT57IFNldEFuc3dlcihlLnRhcmdldC52YWx1ZT09PWl0ZW0uYW5zKX19IC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlucHV0MlwiICA+e2l0ZW0ub3B0aW9uWzFdfTwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5zIGdyb3cgXCI+XG5cbiAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiIFxuICAgICAgICAgICAgbmFtZT1cImNoXCIgXG4gICAgICAgICAgICBpZD1cImlucHV0M1wiIFxuICAgICAgICAgICAgdmFsdWU9e2l0ZW0ub3B0aW9uWzJdfSBcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnsgIFNldEFuc3dlcihlLnRhcmdldC52YWx1ZT09PWl0ZW0uYW5zKX19IC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlucHV0M1wiID57aXRlbS5vcHRpb25bMl19XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFucyBncm93IFwiPlxuXG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiIFxuICAgICAgICAgICAgbmFtZT1cImNoXCIgXG4gICAgICAgICAgICBpZD1cImlucHV0NFwiIFxuICAgICAgICAgICAgdmFsdWU9e2l0ZW0ub3B0aW9uWzNdfSBcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PntTZXRBbnN3ZXIoZS50YXJnZXQudmFsdWU9PT1pdGVtLmFucyl9fSAgLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW5wdXQ0XCIgPntpdGVtLm9wdGlvblszXX08L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJIb21lIiwiYW5zd2VyIiwiU2V0QW5zd2VyIiwiZGF0YSIsInF1c3Rpb24iLCJvcHRpb24iLCJhbnMiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiaXRlbSIsImgzIiwiZm9ybSIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJpZCIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwibGFiZWwiLCJodG1sRm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});