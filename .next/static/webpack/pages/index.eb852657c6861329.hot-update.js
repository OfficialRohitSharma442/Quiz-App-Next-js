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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    // const [answer, setAnswer] = useState(false);\n    const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [flag, setFlag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // const [buttonStatus, setButtonStatus] = useState(false);\n    const data = [\n        {\n            qustion: \"What is JavaScript?\",\n            option: [\n                \"JavaScript is a scripting language used to make the website interactive\",\n                \"JavaScript is an assembly language used to make the website interactive\",\n                \"JavaScript is a compiled language used to make the website interactive\",\n                \"None of Above\"\n            ],\n            ans: \"JavaScript is a scripting language used to make the website interactive\"\n        },\n        {\n            qustion: \" Which of the following is correct about JavaScript?\",\n            option: [\n                \"JavaScript is an Object-Based language\",\n                \"JavaScript is Assembly-language\",\n                \"JavaScript is an Object-Oriented language\",\n                \"JavaScript is a High-level language\"\n            ],\n            ans: \"JavaScript is Assembly-language\"\n        },\n        {\n            qustion: \"Arrays in JavaScript are defined by which of the following statements?\",\n            option: [\n                \"It is an ordered list of values\",\n                \"It is an ordered list of objects\",\n                \"It is an ordered list of string\",\n                \"It is an ordered list of functions\"\n            ],\n            ans: \"It is an ordered list of functions\"\n        },\n        {\n            qustion: \"Which of the following is not javascript data types?\",\n            option: [\n                \"Null type\",\n                \"Undefined type\",\n                \"Number type\",\n                \"All of the mentioned\"\n            ],\n            ans: \"All of the mentioned\"\n        }\n    ];\n    const nextPage = ()=>{\n        setFlag(false);\n        if (index < data.length - 1) {\n            setIndex(index + 1);\n        } else {\n            alert(\"You Reached the last Pages ab Back chala ja\");\n        }\n    };\n    const handelChange = (e)=>{\n        console.log(flag);\n        if (e.target.value == data[index].ans) {\n            // setScore(score+1); \n            setFlag(true);\n        }\n    // console.log(flag);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mr-auto align-middle p-5 border-x-sky-950 border-4 border-solid \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"ques\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: data[index].qustion\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: data[index].option && data[index].option.map((e, i)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"radio\",\n                                    value: e,\n                                    id: i,\n                                    name: \"radioButton\",\n                                    onChange: handelChange,\n                                    disabled: flag\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 18\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: i,\n                                    children: e\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 18\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 20\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-around\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"border-x-2 border-y-2 p-2 bg-slate-900 text-white\",\n                            onClick: previousPage,\n                            children: \"Previous\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 12\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"border-x-2 border-y-2 p-2 bg-slate-900 text-white\",\n                            onClick: nextPage,\n                            children: \"Next\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 12\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n            lineNumber: 57,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"3dRLY3fk61JJh07Ed/nlhtW+YAU=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFpQztBQUVsQixTQUFTQyxPQUFPOztJQUMvQiwrQ0FBK0M7SUFDL0MsTUFBTSxDQUFDQyxPQUFRQyxTQUFTLEdBQUNILCtDQUFRQSxDQUFDO0lBQ2xDLE1BQU0sQ0FBQ0ksT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNNLE1BQU1DLFFBQVEsR0FBR1AsK0NBQVFBLENBQUMsS0FBSztJQUN0QywyREFBMkQ7SUFDM0QsTUFBTVEsT0FBTztRQUNYO1lBQ0VDLFNBQVE7WUFDUkMsUUFBTztnQkFBQztnQkFBMEU7Z0JBQTBFO2dCQUF5RTthQUFnQjtZQUNyUEMsS0FBSztRQUNQO1FBQ0E7WUFDRUYsU0FBUTtZQUNSQyxRQUFPO2dCQUFDO2dCQUF5QztnQkFBa0M7Z0JBQTRDO2FBQXNDO1lBQ3JLQyxLQUFLO1FBQ1A7UUFDQTtZQUNFRixTQUFRO1lBQ1JDLFFBQU87Z0JBQUM7Z0JBQWtDO2dCQUFtQztnQkFBa0M7YUFBcUM7WUFDcEpDLEtBQUs7UUFDUDtRQUNBO1lBQ0VGLFNBQVE7WUFDUkMsUUFBTztnQkFBQztnQkFDUjtnQkFDQTtnQkFDQTthQUF1QjtZQUN2QkMsS0FBSztRQUNQO0tBQ0Q7SUFDRCxNQUFNQyxXQUFXLElBQUk7UUFDbkJMLFFBQVEsS0FBSztRQUNiLElBQUdMLFFBQU1NLEtBQUtLLE1BQU0sR0FBQyxHQUFFO1lBR3BCVixTQUFTRCxRQUFNO1FBR2xCLE9BQUs7WUFDSFksTUFBTTtRQUNSLENBQUM7SUFDSDtJQUNBLE1BQU1DLGVBQWMsQ0FBQ0MsSUFBUTtRQUMzQkMsUUFBUUMsR0FBRyxDQUFDWjtRQUNkLElBQUdVLEVBQUVHLE1BQU0sQ0FBQ0MsS0FBSyxJQUFFWixJQUFJLENBQUNOLE1BQU0sQ0FBQ1MsR0FBRyxFQUFDO1lBQ2pDLHNCQUFzQjtZQUN0QkosUUFBUSxJQUFJO1FBQ2QsQ0FBQztJQUNELHFCQUFxQjtJQUNyQjtJQUVFLHFCQUNFO2tCQUNFLDRFQUFDYztZQUFJQyxXQUFVOzs4QkFDWCw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ1gsNEVBQUNDO2tDQUFJZixJQUFJLENBQUNOLE1BQU0sQ0FBQ08sT0FBTzs7Ozs7Ozs7Ozs7OEJBRTVCLDhEQUFDWTs4QkFFRWIsSUFBSSxDQUFDTixNQUFNLENBQUNRLE1BQU0sSUFBSUYsSUFBSSxDQUFDTixNQUFNLENBQUNRLE1BQU0sQ0FBQ2MsR0FBRyxDQUFDLENBQUNSLEdBQU1TLElBQVE7d0JBQzNELHFCQUNLLDhEQUFDSjs7OENBQ0gsOERBQUNLO29DQUNBQyxNQUFLO29DQUNMUCxPQUFPSjtvQ0FBR1ksSUFBSUg7b0NBQUdJLE1BQUs7b0NBQWVDLFVBQVVmO29DQUFjZ0IsVUFBVXpCOzs7Ozs7OENBQ3hFLDhEQUFDMEI7b0NBQU1DLFNBQVNSOzhDQUFJVDs7Ozs7Ozs7Ozs7O29CQUczQjs7Ozs7OzhCQUdBLDhEQUFDSztvQkFBS0MsV0FBVTs7c0NBQ2YsOERBQUNZOzRCQUFPWixXQUFVOzRCQUFvRGEsU0FBU0M7c0NBQWM7Ozs7OztzQ0FDN0YsOERBQUNGOzRCQUFPWixXQUFVOzRCQUFvRGEsU0FBU3ZCO3NDQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXBHLENBQUM7R0FoRnVCWDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuLy8gY29uc3QgW2Fuc3dlciwgc2V0QW5zd2VyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbmNvbnN0IFtpbmRleCAsIHNldEluZGV4XT11c2VTdGF0ZSgwKVxuY29uc3QgW3Njb3JlICxzZXRTY29yZV0gPSB1c2VTdGF0ZSgwKTtcbmNvbnN0IFtmbGFnICxzZXRGbGFnXSA9IHVzZVN0YXRlKGZhbHNlKTtcbi8vIGNvbnN0IFtidXR0b25TdGF0dXMsIHNldEJ1dHRvblN0YXR1c10gPSB1c2VTdGF0ZShmYWxzZSk7XG5jb25zdCBkYXRhID0gW1xuICB7XG4gICAgcXVzdGlvbjpcIldoYXQgaXMgSmF2YVNjcmlwdD9cIixcbiAgICBvcHRpb246W1wiSmF2YVNjcmlwdCBpcyBhIHNjcmlwdGluZyBsYW5ndWFnZSB1c2VkIHRvIG1ha2UgdGhlIHdlYnNpdGUgaW50ZXJhY3RpdmVcIixcIkphdmFTY3JpcHQgaXMgYW4gYXNzZW1ibHkgbGFuZ3VhZ2UgdXNlZCB0byBtYWtlIHRoZSB3ZWJzaXRlIGludGVyYWN0aXZlXCIsXCJKYXZhU2NyaXB0IGlzIGEgY29tcGlsZWQgbGFuZ3VhZ2UgdXNlZCB0byBtYWtlIHRoZSB3ZWJzaXRlIGludGVyYWN0aXZlXCIsXCJOb25lIG9mIEFib3ZlXCJdLFxuICAgIGFucyA6XCJKYXZhU2NyaXB0IGlzIGEgc2NyaXB0aW5nIGxhbmd1YWdlIHVzZWQgdG8gbWFrZSB0aGUgd2Vic2l0ZSBpbnRlcmFjdGl2ZVwiIFxuICB9LFxuICB7XG4gICAgcXVzdGlvbjpcIiBXaGljaCBvZiB0aGUgZm9sbG93aW5nIGlzIGNvcnJlY3QgYWJvdXQgSmF2YVNjcmlwdD9cIixcbiAgICBvcHRpb246W1wiSmF2YVNjcmlwdCBpcyBhbiBPYmplY3QtQmFzZWQgbGFuZ3VhZ2VcIixcIkphdmFTY3JpcHQgaXMgQXNzZW1ibHktbGFuZ3VhZ2VcIixcIkphdmFTY3JpcHQgaXMgYW4gT2JqZWN0LU9yaWVudGVkIGxhbmd1YWdlXCIsXCJKYXZhU2NyaXB0IGlzIGEgSGlnaC1sZXZlbCBsYW5ndWFnZVwiXSxcbiAgICBhbnMgOlwiSmF2YVNjcmlwdCBpcyBBc3NlbWJseS1sYW5ndWFnZVwiIFxuICB9LFxuICB7XG4gICAgcXVzdGlvbjpcIkFycmF5cyBpbiBKYXZhU2NyaXB0IGFyZSBkZWZpbmVkIGJ5IHdoaWNoIG9mIHRoZSBmb2xsb3dpbmcgc3RhdGVtZW50cz9cIixcbiAgICBvcHRpb246W1wiSXQgaXMgYW4gb3JkZXJlZCBsaXN0IG9mIHZhbHVlc1wiLFwiSXQgaXMgYW4gb3JkZXJlZCBsaXN0IG9mIG9iamVjdHNcIixcIkl0IGlzIGFuIG9yZGVyZWQgbGlzdCBvZiBzdHJpbmdcIixcIkl0IGlzIGFuIG9yZGVyZWQgbGlzdCBvZiBmdW5jdGlvbnNcIl0sXG4gICAgYW5zIDpcIkl0IGlzIGFuIG9yZGVyZWQgbGlzdCBvZiBmdW5jdGlvbnNcIiBcbiAgfSxcbiAge1xuICAgIHF1c3Rpb246XCJXaGljaCBvZiB0aGUgZm9sbG93aW5nIGlzIG5vdCBqYXZhc2NyaXB0IGRhdGEgdHlwZXM/XCIsXG4gICAgb3B0aW9uOltcIk51bGwgdHlwZVwiLFxuICAgIFwiVW5kZWZpbmVkIHR5cGVcIixcbiAgICBcIk51bWJlciB0eXBlXCIsXG4gICAgXCJBbGwgb2YgdGhlIG1lbnRpb25lZFwiXSxcbiAgICBhbnMgOlwiQWxsIG9mIHRoZSBtZW50aW9uZWRcIiBcbiAgfVxuXVxuY29uc3QgbmV4dFBhZ2UgPSAoKT0+e1xuICBzZXRGbGFnKGZhbHNlKTtcbiAgaWYoaW5kZXg8ZGF0YS5sZW5ndGgtMSl7XG4gIFxuXG4gICAgIHNldEluZGV4KGluZGV4KzEpO1xuICBcblxuICB9ZWxzZXtcbiAgICBhbGVydChcIllvdSBSZWFjaGVkIHRoZSBsYXN0IFBhZ2VzIGFiIEJhY2sgY2hhbGEgamFcIilcbiAgfVxufVxuY29uc3QgaGFuZGVsQ2hhbmdlID0oZTphbnkpPT57XG4gIGNvbnNvbGUubG9nKGZsYWcpXG5pZihlLnRhcmdldC52YWx1ZT09ZGF0YVtpbmRleF0uYW5zKXtcbiAgLy8gc2V0U2NvcmUoc2NvcmUrMSk7IFxuICBzZXRGbGFnKHRydWUpO1xufVxuLy8gY29uc29sZS5sb2coZmxhZyk7XG59XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvIGFsaWduLW1pZGRsZSBwLTUgYm9yZGVyLXgtc2t5LTk1MCBib3JkZXItNCBib3JkZXItc29saWQgXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWVzXCI+XG4gICAgICAgICAgICAgIDxoMz57ZGF0YVtpbmRleF0ucXVzdGlvbn08L2gzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHtkYXRhW2luZGV4XS5vcHRpb24gJiYgZGF0YVtpbmRleF0ub3B0aW9uLm1hcCgoZTphbnksaTphbnkpPT57XG4gICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiIFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2V9IGlkPXtpfSBuYW1lPVwicmFkaW9CdXR0b25cIiAgb25DaGFuZ2U9e2hhbmRlbENoYW5nZX0gZGlzYWJsZWQ9e2ZsYWd9Lz5cbiAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2l9PntlfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1hcm91bmRcIj5cbiAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJib3JkZXIteC0yIGJvcmRlci15LTIgcC0yIGJnLXNsYXRlLTkwMCB0ZXh0LXdoaXRlXCIgb25DbGljaz17cHJldmlvdXNQYWdlfT5QcmV2aW91czwvYnV0dG9uPlxuICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJvcmRlci14LTIgYm9yZGVyLXktMiBwLTIgYmctc2xhdGUtOTAwIHRleHQtd2hpdGVcIiBvbkNsaWNrPXtuZXh0UGFnZX0+TmV4dDwvYnV0dG9uPlxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJIb21lIiwiaW5kZXgiLCJzZXRJbmRleCIsInNjb3JlIiwic2V0U2NvcmUiLCJmbGFnIiwic2V0RmxhZyIsImRhdGEiLCJxdXN0aW9uIiwib3B0aW9uIiwiYW5zIiwibmV4dFBhZ2UiLCJsZW5ndGgiLCJhbGVydCIsImhhbmRlbENoYW5nZSIsImUiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwidmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsIm1hcCIsImkiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm5hbWUiLCJvbkNoYW5nZSIsImRpc2FibGVkIiwibGFiZWwiLCJodG1sRm9yIiwiYnV0dG9uIiwib25DbGljayIsInByZXZpb3VzUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});