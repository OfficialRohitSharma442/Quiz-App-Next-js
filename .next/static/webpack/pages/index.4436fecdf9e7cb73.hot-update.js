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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    // const [answer, setAnswer] = useState(false);\n    const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [flag, setFlag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // const [buttonStatus, setButtonStatus] = useState(false);\n    const data = [\n        {\n            qustion: \"What is JavaScript?\",\n            option: [\n                \"JavaScript is a scripting language used to make the website interactive\",\n                \"JavaScript is an assembly language used to make the website interactive\",\n                \"JavaScript is a compiled language used to make the website interactive\",\n                \"None of Above\"\n            ],\n            ans: \"JavaScript is a scripting language used to make the website interactive\"\n        },\n        {\n            qustion: \" Which of the following is correct about JavaScript?\",\n            option: [\n                \"JavaScript is an Object-Based language\",\n                \"JavaScript is Assembly-language\",\n                \"JavaScript is an Object-Oriented language\",\n                \"JavaScript is a High-level language\"\n            ],\n            ans: \"JavaScript is Assembly-language\"\n        },\n        {\n            qustion: \"Arrays in JavaScript are defined by which of the following statements?\",\n            option: [\n                \"It is an ordered list of values\",\n                \"It is an ordered list of objects\",\n                \"It is an ordered list of string\",\n                \"It is an ordered list of functions\"\n            ],\n            ans: \"It is an ordered list of functions\"\n        },\n        {\n            qustion: \"Which of the following is not javascript data types?\",\n            option: [\n                \"Null type\",\n                \"Undefined type\",\n                \"Number type\",\n                \"All of the mentioned\"\n            ],\n            ans: \"All of the mentioned\"\n        }\n    ];\n    const nextPage = ()=>{\n        setFlag(false);\n        if (index < data.length - 1) {\n            setIndex(index + 1);\n        } else {\n            alert(\"you completed quiz succfully Your score is ${score} out of ${data.length}..\");\n        }\n    };\n    const handelChange = (e)=>{\n        setFlag(true);\n        if (e.target.value == data[index].ans) {\n            setScore(score + 1);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mr-auto align-middle p-5 border-x-sky-950 border-4 border-solid \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"ques\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: data[index].qustion\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: data[index].option && data[index].option.map((e, i)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"radio\",\n                                    value: e,\n                                    id: i,\n                                    name: \"radioButton\",\n                                    onChange: handelChange,\n                                    disabled: flag\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 19\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: i,\n                                    children: e\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 19\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 17\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-around\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"border-x-2 border-y-2 p-2 bg-slate-900 text-white\",\n                        onClick: nextPage,\n                        children: \"Next\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n            lineNumber: 68,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"I0dpk7uqXmxMFXTGC3TImQBOnuk=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFpQztBQUVsQixTQUFTQyxPQUFPOztJQUM3QiwrQ0FBK0M7SUFDL0MsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdILCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ0ksT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNNLE1BQU1DLFFBQVEsR0FBR1AsK0NBQVFBLENBQUMsS0FBSztJQUN0QywyREFBMkQ7SUFDM0QsTUFBTVEsT0FBTztRQUNYO1lBQ0VDLFNBQVM7WUFDVEMsUUFBUTtnQkFDTjtnQkFDQTtnQkFDQTtnQkFDQTthQUNEO1lBQ0RDLEtBQUs7UUFDUDtRQUNBO1lBQ0VGLFNBQVM7WUFDVEMsUUFBUTtnQkFDTjtnQkFDQTtnQkFDQTtnQkFDQTthQUNEO1lBQ0RDLEtBQUs7UUFDUDtRQUNBO1lBQ0VGLFNBQ0U7WUFDRkMsUUFBUTtnQkFDTjtnQkFDQTtnQkFDQTtnQkFDQTthQUNEO1lBQ0RDLEtBQUs7UUFDUDtRQUNBO1lBQ0VGLFNBQVM7WUFDVEMsUUFBUTtnQkFDTjtnQkFDQTtnQkFDQTtnQkFDQTthQUNEO1lBQ0RDLEtBQUs7UUFDUDtLQUNEO0lBQ0QsTUFBTUMsV0FBVyxJQUFNO1FBQ3JCTCxRQUFRLEtBQUs7UUFDYixJQUFJTCxRQUFRTSxLQUFLSyxNQUFNLEdBQUcsR0FBRztZQUMzQlYsU0FBU0QsUUFBUTtRQUNuQixPQUFPO1lBQ0xZLE1BQU07UUFDUixDQUFDO0lBQ0g7SUFDQSxNQUFNQyxlQUFlLENBQUNDLElBQVc7UUFDL0JULFFBQVEsSUFBSTtRQUNaLElBQUlTLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSyxJQUFJVixJQUFJLENBQUNOLE1BQU0sQ0FBQ1MsR0FBRyxFQUFFO1lBQ3JDTixTQUFTRCxRQUFRO1FBQ25CLENBQUM7SUFDSDtJQUNBLHFCQUNFO2tCQUNFLDRFQUFDZTtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNDO2tDQUFJYixJQUFJLENBQUNOLE1BQU0sQ0FBQ08sT0FBTzs7Ozs7Ozs7Ozs7OEJBRTFCLDhEQUFDVTs4QkFDRVgsSUFBSSxDQUFDTixNQUFNLENBQUNRLE1BQU0sSUFDakJGLElBQUksQ0FBQ04sTUFBTSxDQUFDUSxNQUFNLENBQUNZLEdBQUcsQ0FBQyxDQUFDTixHQUFRTyxJQUFXO3dCQUN6QyxxQkFDRSw4REFBQ0o7OzhDQUNDLDhEQUFDSztvQ0FDQ0MsTUFBSztvQ0FDTFAsT0FBT0Y7b0NBQ1BVLElBQUlIO29DQUNKSSxNQUFLO29DQUNMQyxVQUFVYjtvQ0FDVmMsVUFBVXZCOzs7Ozs7OENBRVosOERBQUN3QjtvQ0FBTUMsU0FBU1I7OENBQUlQOzs7Ozs7Ozs7Ozs7b0JBRzFCOzs7Ozs7OEJBRUosOERBQUNHO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDWTt3QkFDQ1osV0FBVTt3QkFDVmEsU0FBU3JCO2tDQUNWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPWCxDQUFDO0dBbEd1Qlg7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgLy8gY29uc3QgW2Fuc3dlciwgc2V0QW5zd2VyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3Njb3JlLCBzZXRTY29yZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2ZsYWcsIHNldEZsYWddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAvLyBjb25zdCBbYnV0dG9uU3RhdHVzLCBzZXRCdXR0b25TdGF0dXNdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBkYXRhID0gW1xuICAgIHtcbiAgICAgIHF1c3Rpb246IFwiV2hhdCBpcyBKYXZhU2NyaXB0P1wiLFxuICAgICAgb3B0aW9uOiBbXG4gICAgICAgIFwiSmF2YVNjcmlwdCBpcyBhIHNjcmlwdGluZyBsYW5ndWFnZSB1c2VkIHRvIG1ha2UgdGhlIHdlYnNpdGUgaW50ZXJhY3RpdmVcIixcbiAgICAgICAgXCJKYXZhU2NyaXB0IGlzIGFuIGFzc2VtYmx5IGxhbmd1YWdlIHVzZWQgdG8gbWFrZSB0aGUgd2Vic2l0ZSBpbnRlcmFjdGl2ZVwiLFxuICAgICAgICBcIkphdmFTY3JpcHQgaXMgYSBjb21waWxlZCBsYW5ndWFnZSB1c2VkIHRvIG1ha2UgdGhlIHdlYnNpdGUgaW50ZXJhY3RpdmVcIixcbiAgICAgICAgXCJOb25lIG9mIEFib3ZlXCIsXG4gICAgICBdLFxuICAgICAgYW5zOiBcIkphdmFTY3JpcHQgaXMgYSBzY3JpcHRpbmcgbGFuZ3VhZ2UgdXNlZCB0byBtYWtlIHRoZSB3ZWJzaXRlIGludGVyYWN0aXZlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdXN0aW9uOiBcIiBXaGljaCBvZiB0aGUgZm9sbG93aW5nIGlzIGNvcnJlY3QgYWJvdXQgSmF2YVNjcmlwdD9cIixcbiAgICAgIG9wdGlvbjogW1xuICAgICAgICBcIkphdmFTY3JpcHQgaXMgYW4gT2JqZWN0LUJhc2VkIGxhbmd1YWdlXCIsXG4gICAgICAgIFwiSmF2YVNjcmlwdCBpcyBBc3NlbWJseS1sYW5ndWFnZVwiLFxuICAgICAgICBcIkphdmFTY3JpcHQgaXMgYW4gT2JqZWN0LU9yaWVudGVkIGxhbmd1YWdlXCIsXG4gICAgICAgIFwiSmF2YVNjcmlwdCBpcyBhIEhpZ2gtbGV2ZWwgbGFuZ3VhZ2VcIixcbiAgICAgIF0sXG4gICAgICBhbnM6IFwiSmF2YVNjcmlwdCBpcyBBc3NlbWJseS1sYW5ndWFnZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVzdGlvbjpcbiAgICAgICAgXCJBcnJheXMgaW4gSmF2YVNjcmlwdCBhcmUgZGVmaW5lZCBieSB3aGljaCBvZiB0aGUgZm9sbG93aW5nIHN0YXRlbWVudHM/XCIsXG4gICAgICBvcHRpb246IFtcbiAgICAgICAgXCJJdCBpcyBhbiBvcmRlcmVkIGxpc3Qgb2YgdmFsdWVzXCIsXG4gICAgICAgIFwiSXQgaXMgYW4gb3JkZXJlZCBsaXN0IG9mIG9iamVjdHNcIixcbiAgICAgICAgXCJJdCBpcyBhbiBvcmRlcmVkIGxpc3Qgb2Ygc3RyaW5nXCIsXG4gICAgICAgIFwiSXQgaXMgYW4gb3JkZXJlZCBsaXN0IG9mIGZ1bmN0aW9uc1wiLFxuICAgICAgXSxcbiAgICAgIGFuczogXCJJdCBpcyBhbiBvcmRlcmVkIGxpc3Qgb2YgZnVuY3Rpb25zXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdXN0aW9uOiBcIldoaWNoIG9mIHRoZSBmb2xsb3dpbmcgaXMgbm90IGphdmFzY3JpcHQgZGF0YSB0eXBlcz9cIixcbiAgICAgIG9wdGlvbjogW1xuICAgICAgICBcIk51bGwgdHlwZVwiLFxuICAgICAgICBcIlVuZGVmaW5lZCB0eXBlXCIsXG4gICAgICAgIFwiTnVtYmVyIHR5cGVcIixcbiAgICAgICAgXCJBbGwgb2YgdGhlIG1lbnRpb25lZFwiLFxuICAgICAgXSxcbiAgICAgIGFuczogXCJBbGwgb2YgdGhlIG1lbnRpb25lZFwiLFxuICAgIH0sXG4gIF07XG4gIGNvbnN0IG5leHRQYWdlID0gKCkgPT4ge1xuICAgIHNldEZsYWcoZmFsc2UpO1xuICAgIGlmIChpbmRleCA8IGRhdGEubGVuZ3RoIC0gMSkge1xuICAgICAgc2V0SW5kZXgoaW5kZXggKyAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnQoXCJ5b3UgY29tcGxldGVkIHF1aXogc3VjY2Z1bGx5IFlvdXIgc2NvcmUgaXMgJHtzY29yZX0gb3V0IG9mICR7ZGF0YS5sZW5ndGh9Li5cIik7XG4gICAgfVxuICB9O1xuICBjb25zdCBoYW5kZWxDaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgc2V0RmxhZyh0cnVlKTtcbiAgICBpZiAoZS50YXJnZXQudmFsdWUgPT0gZGF0YVtpbmRleF0uYW5zKSB7XG4gICAgICBzZXRTY29yZShzY29yZSArIDEpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvIGFsaWduLW1pZGRsZSBwLTUgYm9yZGVyLXgtc2t5LTk1MCBib3JkZXItNCBib3JkZXItc29saWQgXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVlc1wiPlxuICAgICAgICAgIDxoMz57ZGF0YVtpbmRleF0ucXVzdGlvbn08L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7ZGF0YVtpbmRleF0ub3B0aW9uICYmXG4gICAgICAgICAgICBkYXRhW2luZGV4XS5vcHRpb24ubWFwKChlOiBhbnksIGk6IGFueSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2V9XG4gICAgICAgICAgICAgICAgICAgIGlkPXtpfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmFkaW9CdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGVsQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZmxhZ31cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17aX0+e2V9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYXJvdW5kXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLXgtMiBib3JkZXIteS0yIHAtMiBiZy1zbGF0ZS05MDAgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICBvbkNsaWNrPXtuZXh0UGFnZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBOZXh0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJIb21lIiwiaW5kZXgiLCJzZXRJbmRleCIsInNjb3JlIiwic2V0U2NvcmUiLCJmbGFnIiwic2V0RmxhZyIsImRhdGEiLCJxdXN0aW9uIiwib3B0aW9uIiwiYW5zIiwibmV4dFBhZ2UiLCJsZW5ndGgiLCJhbGVydCIsImhhbmRlbENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRpdiIsImNsYXNzTmFtZSIsImgzIiwibWFwIiwiaSIsImlucHV0IiwidHlwZSIsImlkIiwibmFtZSIsIm9uQ2hhbmdlIiwiZGlzYWJsZWQiLCJsYWJlbCIsImh0bWxGb3IiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});