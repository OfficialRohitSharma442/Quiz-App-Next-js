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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    // const [answer, setAnswer] = useState(false);\n    const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    // const [flag ,setFlag] = useState(false);\n    const [buttonStatus, setButtonStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const data = [\n        {\n            qustion: \"What is JavaScript?\",\n            option: [\n                \"JavaScript is a scripting language used to make the website interactive\",\n                \"JavaScript is an assembly language used to make the website interactive\",\n                \"JavaScript is a compiled language used to make the website interactive\",\n                \"None of Above\"\n            ],\n            ans: \"JavaScript is a scripting language used to make the website interactive\"\n        },\n        {\n            qustion: \" Which of the following is correct about JavaScript?\",\n            option: [\n                \"JavaScript is an Object-Based language\",\n                \"JavaScript is Assembly-language\",\n                \"JavaScript is an Object-Oriented language\",\n                \"JavaScript is a High-level language\"\n            ],\n            ans: \"JavaScript is Assembly-language\"\n        },\n        {\n            qustion: \"Arrays in JavaScript are defined by which of the following statements?\",\n            option: [\n                \"It is an ordered list of values\",\n                \"It is an ordered list of objects\",\n                \"It is an ordered list of string\",\n                \"It is an ordered list of functions\"\n            ],\n            ans: \"It is an ordered list of functions\"\n        },\n        {\n            qustion: \"Which of the following is not javascript data types?\",\n            option: [\n                \"Null type\",\n                \"Undefined type\",\n                \"Number type\",\n                \"All of the mentioned\"\n            ],\n            ans: \"All of the mentioned\"\n        }\n    ];\n    const nextPage = ()=>{\n        if (index < data.length - 1) {} else {\n            alert(\"You Reached the last Pages ab Back chala ja\");\n        }\n    };\n    const handelChange = (e)=>{\n        if (e.target.value == data[index].ans) {\n            setScore(score + 1);\n        }\n        setButtonStatus(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mr-auto align-middle p-5 border-x-sky-950 border-4 border-solid \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"ques\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: data[index].qustion\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: data[index].option && data[index].option.map((e, i)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"radio\",\n                                    value: e,\n                                    id: i,\n                                    name: \"radioButton\",\n                                    onChange: handelChange,\n                                    disabled: buttonStatus\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 18\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: i,\n                                    children: e\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 18\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 20\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-around\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"border-x-2 border-y-2 p-2 bg-slate-900 text-white\",\n                            onClick: previousPage,\n                            children: \"Previous\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 12\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"border-x-2 border-y-2 p-2 bg-slate-900 text-white\",\n                            onClick: nextPage,\n                            children: \"Next\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 12\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"7Q8cBnhVQigsrNU4uniqw70WE08=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFpQztBQUVsQixTQUFTQyxPQUFPOztJQUMvQiwrQ0FBK0M7SUFDL0MsTUFBTSxDQUFDQyxPQUFRQyxTQUFTLEdBQUNILCtDQUFRQSxDQUFDO0lBQ2xDLE1BQU0sQ0FBQ0ksT0FBTUMsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNsQywyQ0FBMkM7SUFDM0MsTUFBTSxDQUFDTSxjQUFjQyxnQkFBZ0IsR0FBR1AsK0NBQVFBLENBQUMsS0FBSztJQUN0RCxNQUFNUSxPQUFPO1FBQ1g7WUFDRUMsU0FBUTtZQUNSQyxRQUFPO2dCQUFDO2dCQUEwRTtnQkFBMEU7Z0JBQXlFO2FBQWdCO1lBQ3JQQyxLQUFLO1FBQ1A7UUFDQTtZQUNFRixTQUFRO1lBQ1JDLFFBQU87Z0JBQUM7Z0JBQXlDO2dCQUFrQztnQkFBNEM7YUFBc0M7WUFDcktDLEtBQUs7UUFDUDtRQUNBO1lBQ0VGLFNBQVE7WUFDUkMsUUFBTztnQkFBQztnQkFBa0M7Z0JBQW1DO2dCQUFrQzthQUFxQztZQUNwSkMsS0FBSztRQUNQO1FBQ0E7WUFDRUYsU0FBUTtZQUNSQyxRQUFPO2dCQUFDO2dCQUNSO2dCQUNBO2dCQUNBO2FBQXVCO1lBQ3ZCQyxLQUFLO1FBQ1A7S0FDRDtJQUNELE1BQU1DLFdBQVcsSUFBSTtRQUVuQixJQUFHVixRQUFNTSxLQUFLSyxNQUFNLEdBQUMsR0FBRSxDQUV2QixPQUFLO1lBQ0hDLE1BQU07UUFDUixDQUFDO0lBQ0g7SUFDQSxNQUFNQyxlQUFjLENBQUNDLElBQVE7UUFDN0IsSUFBR0EsRUFBRUMsTUFBTSxDQUFDQyxLQUFLLElBQUVWLElBQUksQ0FBQ04sTUFBTSxDQUFDUyxHQUFHLEVBQUM7WUFDakNOLFNBQVNELFFBQVE7UUFDbkIsQ0FBQztRQUNERyxnQkFBZ0IsSUFBSTtJQUNwQjtJQUVFLHFCQUNFO2tCQUNFLDRFQUFDWTtZQUFJQyxXQUFVOzs4QkFDWCw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ1gsNEVBQUNDO2tDQUFJYixJQUFJLENBQUNOLE1BQU0sQ0FBQ08sT0FBTzs7Ozs7Ozs7Ozs7OEJBRTVCLDhEQUFDVTs4QkFFRVgsSUFBSSxDQUFDTixNQUFNLENBQUNRLE1BQU0sSUFBSUYsSUFBSSxDQUFDTixNQUFNLENBQUNRLE1BQU0sQ0FBQ1ksR0FBRyxDQUFDLENBQUNOLEdBQU1PLElBQVE7d0JBQzNELHFCQUNLLDhEQUFDSjs7OENBQ0gsOERBQUNLO29DQUNBQyxNQUFLO29DQUNMUCxPQUFPRjtvQ0FBR1UsSUFBSUg7b0NBQUdJLE1BQUs7b0NBQWVDLFVBQVViO29DQUFjYyxVQUFVdkI7Ozs7Ozs4Q0FDeEUsOERBQUN3QjtvQ0FBTUMsU0FBU1I7OENBQUlQOzs7Ozs7Ozs7Ozs7b0JBRzNCOzs7Ozs7OEJBR0EsOERBQUNHO29CQUFLQyxXQUFVOztzQ0FDZiw4REFBQ1k7NEJBQU9aLFdBQVU7NEJBQW9EYSxTQUFTQztzQ0FBYzs7Ozs7O3NDQUM3Riw4REFBQ0Y7NEJBQU9aLFdBQVU7NEJBQW9EYSxTQUFTckI7c0NBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNcEcsQ0FBQztHQTFFdUJYO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4vLyBjb25zdCBbYW5zd2VyLCBzZXRBbnN3ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuY29uc3QgW2luZGV4ICwgc2V0SW5kZXhdPXVzZVN0YXRlKDApXG5jb25zdCBbc2NvcmUsc2V0U2NvcmVdID0gdXNlU3RhdGUoMCk7XG4vLyBjb25zdCBbZmxhZyAsc2V0RmxhZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5jb25zdCBbYnV0dG9uU3RhdHVzLCBzZXRCdXR0b25TdGF0dXNdID0gdXNlU3RhdGUoZmFsc2UpO1xuY29uc3QgZGF0YSA9IFtcbiAge1xuICAgIHF1c3Rpb246XCJXaGF0IGlzIEphdmFTY3JpcHQ/XCIsXG4gICAgb3B0aW9uOltcIkphdmFTY3JpcHQgaXMgYSBzY3JpcHRpbmcgbGFuZ3VhZ2UgdXNlZCB0byBtYWtlIHRoZSB3ZWJzaXRlIGludGVyYWN0aXZlXCIsXCJKYXZhU2NyaXB0IGlzIGFuIGFzc2VtYmx5IGxhbmd1YWdlIHVzZWQgdG8gbWFrZSB0aGUgd2Vic2l0ZSBpbnRlcmFjdGl2ZVwiLFwiSmF2YVNjcmlwdCBpcyBhIGNvbXBpbGVkIGxhbmd1YWdlIHVzZWQgdG8gbWFrZSB0aGUgd2Vic2l0ZSBpbnRlcmFjdGl2ZVwiLFwiTm9uZSBvZiBBYm92ZVwiXSxcbiAgICBhbnMgOlwiSmF2YVNjcmlwdCBpcyBhIHNjcmlwdGluZyBsYW5ndWFnZSB1c2VkIHRvIG1ha2UgdGhlIHdlYnNpdGUgaW50ZXJhY3RpdmVcIiBcbiAgfSxcbiAge1xuICAgIHF1c3Rpb246XCIgV2hpY2ggb2YgdGhlIGZvbGxvd2luZyBpcyBjb3JyZWN0IGFib3V0IEphdmFTY3JpcHQ/XCIsXG4gICAgb3B0aW9uOltcIkphdmFTY3JpcHQgaXMgYW4gT2JqZWN0LUJhc2VkIGxhbmd1YWdlXCIsXCJKYXZhU2NyaXB0IGlzIEFzc2VtYmx5LWxhbmd1YWdlXCIsXCJKYXZhU2NyaXB0IGlzIGFuIE9iamVjdC1PcmllbnRlZCBsYW5ndWFnZVwiLFwiSmF2YVNjcmlwdCBpcyBhIEhpZ2gtbGV2ZWwgbGFuZ3VhZ2VcIl0sXG4gICAgYW5zIDpcIkphdmFTY3JpcHQgaXMgQXNzZW1ibHktbGFuZ3VhZ2VcIiBcbiAgfSxcbiAge1xuICAgIHF1c3Rpb246XCJBcnJheXMgaW4gSmF2YVNjcmlwdCBhcmUgZGVmaW5lZCBieSB3aGljaCBvZiB0aGUgZm9sbG93aW5nIHN0YXRlbWVudHM/XCIsXG4gICAgb3B0aW9uOltcIkl0IGlzIGFuIG9yZGVyZWQgbGlzdCBvZiB2YWx1ZXNcIixcIkl0IGlzIGFuIG9yZGVyZWQgbGlzdCBvZiBvYmplY3RzXCIsXCJJdCBpcyBhbiBvcmRlcmVkIGxpc3Qgb2Ygc3RyaW5nXCIsXCJJdCBpcyBhbiBvcmRlcmVkIGxpc3Qgb2YgZnVuY3Rpb25zXCJdLFxuICAgIGFucyA6XCJJdCBpcyBhbiBvcmRlcmVkIGxpc3Qgb2YgZnVuY3Rpb25zXCIgXG4gIH0sXG4gIHtcbiAgICBxdXN0aW9uOlwiV2hpY2ggb2YgdGhlIGZvbGxvd2luZyBpcyBub3QgamF2YXNjcmlwdCBkYXRhIHR5cGVzP1wiLFxuICAgIG9wdGlvbjpbXCJOdWxsIHR5cGVcIixcbiAgICBcIlVuZGVmaW5lZCB0eXBlXCIsXG4gICAgXCJOdW1iZXIgdHlwZVwiLFxuICAgIFwiQWxsIG9mIHRoZSBtZW50aW9uZWRcIl0sXG4gICAgYW5zIDpcIkFsbCBvZiB0aGUgbWVudGlvbmVkXCIgXG4gIH1cbl1cbmNvbnN0IG5leHRQYWdlID0gKCk9PntcbiBcbiAgaWYoaW5kZXg8ZGF0YS5sZW5ndGgtMSl7XG4gXG4gIH1lbHNle1xuICAgIGFsZXJ0KFwiWW91IFJlYWNoZWQgdGhlIGxhc3QgUGFnZXMgYWIgQmFjayBjaGFsYSBqYVwiKVxuICB9XG59XG5jb25zdCBoYW5kZWxDaGFuZ2UgPShlOmFueSk9PntcbmlmKGUudGFyZ2V0LnZhbHVlPT1kYXRhW2luZGV4XS5hbnMpe1xuICBzZXRTY29yZShzY29yZSArIDEpO1xufVxuc2V0QnV0dG9uU3RhdHVzKHRydWUpO1xufVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0byBhbGlnbi1taWRkbGUgcC01IGJvcmRlci14LXNreS05NTAgYm9yZGVyLTQgYm9yZGVyLXNvbGlkIFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVlc1wiPlxuICAgICAgICAgICAgICA8aDM+e2RhdGFbaW5kZXhdLnF1c3Rpb259PC9oMz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICB7ZGF0YVtpbmRleF0ub3B0aW9uICYmIGRhdGFbaW5kZXhdLm9wdGlvbi5tYXAoKGU6YW55LGk6YW55KT0+e1xuICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIiBcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtlfSBpZD17aX0gbmFtZT1cInJhZGlvQnV0dG9uXCIgIG9uQ2hhbmdlPXtoYW5kZWxDaGFuZ2V9IGRpc2FibGVkPXtidXR0b25TdGF0dXN9Lz5cbiAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2l9PntlfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1hcm91bmRcIj5cbiAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJib3JkZXIteC0yIGJvcmRlci15LTIgcC0yIGJnLXNsYXRlLTkwMCB0ZXh0LXdoaXRlXCIgb25DbGljaz17cHJldmlvdXNQYWdlfT5QcmV2aW91czwvYnV0dG9uPlxuICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJvcmRlci14LTIgYm9yZGVyLXktMiBwLTIgYmctc2xhdGUtOTAwIHRleHQtd2hpdGVcIiBvbkNsaWNrPXtuZXh0UGFnZX0+TmV4dDwvYnV0dG9uPlxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJIb21lIiwiaW5kZXgiLCJzZXRJbmRleCIsInNjb3JlIiwic2V0U2NvcmUiLCJidXR0b25TdGF0dXMiLCJzZXRCdXR0b25TdGF0dXMiLCJkYXRhIiwicXVzdGlvbiIsIm9wdGlvbiIsImFucyIsIm5leHRQYWdlIiwibGVuZ3RoIiwiYWxlcnQiLCJoYW5kZWxDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsIm1hcCIsImkiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm5hbWUiLCJvbkNoYW5nZSIsImRpc2FibGVkIiwibGFiZWwiLCJodG1sRm9yIiwiYnV0dG9uIiwib25DbGljayIsInByZXZpb3VzUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});