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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    // const [answer, setAnswer] = useState(false);\n    const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [flag, setFlag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [ans, setAns] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // const [buttonStatus, setButtonStatus] = useState(false);\n    const data = [\n        {\n            qustion: \"What is JavaScript?\",\n            option: [\n                \"JavaScript is a scripting language used to make the website interactive\",\n                \"JavaScript is an assembly language used to make the website interactive\",\n                \"JavaScript is a compiled language used to make the website interactive\",\n                \"None of Above\"\n            ],\n            ans: \"JavaScript is a scripting language used to make the website interactive\"\n        },\n        {\n            qustion: \" Which of the following is correct about JavaScript?\",\n            option: [\n                \"JavaScript is an Object-Based language\",\n                \"JavaScript is Assembly-language\",\n                \"JavaScript is an Object-Oriented language\",\n                \"JavaScript is a High-level language\"\n            ],\n            ans: \"JavaScript is Assembly-language\"\n        },\n        {\n            qustion: \"Arrays in JavaScript are defined by which of the following statements?\",\n            option: [\n                \"It is an ordered list of values\",\n                \"It is an ordered list of objects\",\n                \"It is an ordered list of string\",\n                \"It is an ordered list of functions\"\n            ],\n            ans: \"It is an ordered list of functions\"\n        },\n        {\n            qustion: \"Which of the following is not javascript data types?\",\n            option: [\n                \"Null type\",\n                \"Undefined type\",\n                \"Number type\",\n                \"All of the mentioned\"\n            ],\n            ans: \"All of the mentioned\"\n        }\n    ];\n    const nextPage = ()=>{\n        if (ans == data[index].ans) {\n            setScore(score + 1);\n            radio.forEach((e)=>{\n                const radio1 = document.getElementById(\".radio\");\n                console.log(e);\n                if (e.checked = true) {\n                    e.removeAttribute(\"checked\");\n                }\n            });\n        }\n        if (index < data.length - 1) {\n            setIndex(index + 1);\n        } else {\n            alert(\"You completed quiz succfully Your score is \".concat(score, \" out of \").concat(data.length, \"...\"));\n        }\n    };\n    const handelChange = (e)=>{\n        setAns(e.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mr-auto align-middle p-5 border-x-sky-950 border-4 border-solid \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"ques\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: data[index].qustion\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: data[index].option && data[index].option.map((e, i)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"radio\",\n                                    className: \"radio\",\n                                    value: e,\n                                    id: i,\n                                    name: \"radioButton\",\n                                    onChange: handelChange\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 19\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: i,\n                                    children: e\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 19\n                                }, this)\n                            ]\n                        }, i, true, {\n                            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 17\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-around\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"border-x-2 border-y-2 p-2 bg-slate-900 text-white\",\n                        onClick: nextPage,\n                        children: \"Next\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                    lineNumber: 100,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n            lineNumber: 78,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"sS56al9aDKQN1uRdPI4Qr0jnsM0=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFpQztBQUVsQixTQUFTQyxPQUFPOztJQUM3QiwrQ0FBK0M7SUFDL0MsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdILCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ0ksT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNNLE1BQU1DLFFBQVEsR0FBR1AsK0NBQVFBLENBQUMsS0FBSztJQUN0QyxNQUFNLENBQUNRLEtBQUlDLE9BQU8sR0FBQ1QsK0NBQVFBLENBQUM7SUFDNUIsMkRBQTJEO0lBQzNELE1BQU1VLE9BQU87UUFDWDtZQUNFQyxTQUFTO1lBQ1RDLFFBQVE7Z0JBQ047Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7YUFDRDtZQUNESixLQUFLO1FBQ1A7UUFDQTtZQUNFRyxTQUFTO1lBQ1RDLFFBQVE7Z0JBQ047Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7YUFDRDtZQUNESixLQUFLO1FBQ1A7UUFDQTtZQUNFRyxTQUNFO1lBQ0ZDLFFBQVE7Z0JBQ047Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7YUFDRDtZQUNESixLQUFLO1FBQ1A7UUFDQTtZQUNFRyxTQUFTO1lBQ1RDLFFBQVE7Z0JBQ047Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7YUFDRDtZQUNESixLQUFLO1FBQ1A7S0FDRDtJQUNELE1BQU1LLFdBQVcsSUFBTTtRQUVyQixJQUFLTCxPQUFPRSxJQUFJLENBQUNSLE1BQU0sQ0FBQ00sR0FBRyxFQUFFO1lBQzNCSCxTQUFTRCxRQUFRO1lBRWpCVSxNQUFNQyxPQUFPLENBQUMsQ0FBQ0MsSUFBSTtnQkFDakIsTUFBTUYsU0FBUUcsU0FBU0MsY0FBYyxDQUFDO2dCQUN0Q0MsUUFBUUMsR0FBRyxDQUFDSjtnQkFDcEIsSUFBR0EsRUFBRUssT0FBTyxHQUFDLElBQUksRUFBQztvQkFDaEJMLEVBQUVNLGVBQWUsQ0FBQztnQkFDcEIsQ0FBQztZQUNJO1FBQ0QsQ0FBQztRQUNELElBQUlwQixRQUFRUSxLQUFLYSxNQUFNLEdBQUcsR0FBRztZQUMzQnBCLFNBQVNELFFBQVE7UUFDbkIsT0FBTztZQUNMc0IsTUFBTSw4Q0FBOERkLE9BQWhCTixPQUFNLFlBQXNCLE9BQVpNLEtBQUthLE1BQU0sRUFBQztRQUVsRixDQUFDO0lBQ0g7SUFDQSxNQUFNRSxlQUFlLENBQUNULElBQVc7UUFDakNQLE9BQU9PLEVBQUVVLE1BQU0sQ0FBQ0MsS0FBSztJQUNyQjtJQUNBLHFCQUNFO2tCQUNFLDRFQUFDQztZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNDO2tDQUFJcEIsSUFBSSxDQUFDUixNQUFNLENBQUNTLE9BQU87Ozs7Ozs7Ozs7OzhCQUUxQiw4REFBQ2lCOzhCQUNFbEIsSUFBSSxDQUFDUixNQUFNLENBQUNVLE1BQU0sSUFDakJGLElBQUksQ0FBQ1IsTUFBTSxDQUFDVSxNQUFNLENBQUNtQixHQUFHLENBQUMsQ0FBQ2YsR0FBUWdCLElBQVc7d0JBQ3pDLHFCQUNFLDhEQUFDSjs7OENBQ0MsOERBQUNLO29DQUNDQyxNQUFLO29DQUNMTCxXQUFVO29DQUNWRixPQUFPWDtvQ0FDUG1CLElBQUlIO29DQUNKSSxNQUFLO29DQUNMQyxVQUFVWjs7Ozs7OzhDQUVaLDhEQUFDYTtvQ0FBTUMsU0FBU1A7OENBQUloQjs7Ozs7OzsyQkFUWmdCOzs7OztvQkFZZDs7Ozs7OzhCQUVKLDhEQUFDSjtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ1c7d0JBQ0NYLFdBQVU7d0JBQ1ZZLFNBQVM1QjtrQ0FDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1gsQ0FBQztHQTVHdUJaO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIC8vIGNvbnN0IFthbnN3ZXIsIHNldEFuc3dlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzY29yZSwgc2V0U2NvcmVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtmbGFnLCBzZXRGbGFnXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2FucyxzZXRBbnNdPXVzZVN0YXRlKFwiXCIpXG4gIC8vIGNvbnN0IFtidXR0b25TdGF0dXMsIHNldEJ1dHRvblN0YXR1c10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGRhdGEgPSBbXG4gICAge1xuICAgICAgcXVzdGlvbjogXCJXaGF0IGlzIEphdmFTY3JpcHQ/XCIsXG4gICAgICBvcHRpb246IFtcbiAgICAgICAgXCJKYXZhU2NyaXB0IGlzIGEgc2NyaXB0aW5nIGxhbmd1YWdlIHVzZWQgdG8gbWFrZSB0aGUgd2Vic2l0ZSBpbnRlcmFjdGl2ZVwiLFxuICAgICAgICBcIkphdmFTY3JpcHQgaXMgYW4gYXNzZW1ibHkgbGFuZ3VhZ2UgdXNlZCB0byBtYWtlIHRoZSB3ZWJzaXRlIGludGVyYWN0aXZlXCIsXG4gICAgICAgIFwiSmF2YVNjcmlwdCBpcyBhIGNvbXBpbGVkIGxhbmd1YWdlIHVzZWQgdG8gbWFrZSB0aGUgd2Vic2l0ZSBpbnRlcmFjdGl2ZVwiLFxuICAgICAgICBcIk5vbmUgb2YgQWJvdmVcIixcbiAgICAgIF0sXG4gICAgICBhbnM6IFwiSmF2YVNjcmlwdCBpcyBhIHNjcmlwdGluZyBsYW5ndWFnZSB1c2VkIHRvIG1ha2UgdGhlIHdlYnNpdGUgaW50ZXJhY3RpdmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1c3Rpb246IFwiIFdoaWNoIG9mIHRoZSBmb2xsb3dpbmcgaXMgY29ycmVjdCBhYm91dCBKYXZhU2NyaXB0P1wiLFxuICAgICAgb3B0aW9uOiBbXG4gICAgICAgIFwiSmF2YVNjcmlwdCBpcyBhbiBPYmplY3QtQmFzZWQgbGFuZ3VhZ2VcIixcbiAgICAgICAgXCJKYXZhU2NyaXB0IGlzIEFzc2VtYmx5LWxhbmd1YWdlXCIsXG4gICAgICAgIFwiSmF2YVNjcmlwdCBpcyBhbiBPYmplY3QtT3JpZW50ZWQgbGFuZ3VhZ2VcIixcbiAgICAgICAgXCJKYXZhU2NyaXB0IGlzIGEgSGlnaC1sZXZlbCBsYW5ndWFnZVwiLFxuICAgICAgXSxcbiAgICAgIGFuczogXCJKYXZhU2NyaXB0IGlzIEFzc2VtYmx5LWxhbmd1YWdlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdXN0aW9uOlxuICAgICAgICBcIkFycmF5cyBpbiBKYXZhU2NyaXB0IGFyZSBkZWZpbmVkIGJ5IHdoaWNoIG9mIHRoZSBmb2xsb3dpbmcgc3RhdGVtZW50cz9cIixcbiAgICAgIG9wdGlvbjogW1xuICAgICAgICBcIkl0IGlzIGFuIG9yZGVyZWQgbGlzdCBvZiB2YWx1ZXNcIixcbiAgICAgICAgXCJJdCBpcyBhbiBvcmRlcmVkIGxpc3Qgb2Ygb2JqZWN0c1wiLFxuICAgICAgICBcIkl0IGlzIGFuIG9yZGVyZWQgbGlzdCBvZiBzdHJpbmdcIixcbiAgICAgICAgXCJJdCBpcyBhbiBvcmRlcmVkIGxpc3Qgb2YgZnVuY3Rpb25zXCIsXG4gICAgICBdLFxuICAgICAgYW5zOiBcIkl0IGlzIGFuIG9yZGVyZWQgbGlzdCBvZiBmdW5jdGlvbnNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1c3Rpb246IFwiV2hpY2ggb2YgdGhlIGZvbGxvd2luZyBpcyBub3QgamF2YXNjcmlwdCBkYXRhIHR5cGVzP1wiLFxuICAgICAgb3B0aW9uOiBbXG4gICAgICAgIFwiTnVsbCB0eXBlXCIsXG4gICAgICAgIFwiVW5kZWZpbmVkIHR5cGVcIixcbiAgICAgICAgXCJOdW1iZXIgdHlwZVwiLFxuICAgICAgICBcIkFsbCBvZiB0aGUgbWVudGlvbmVkXCIsXG4gICAgICBdLFxuICAgICAgYW5zOiBcIkFsbCBvZiB0aGUgbWVudGlvbmVkXCIsXG4gICAgfSxcbiAgXTtcbiAgY29uc3QgbmV4dFBhZ2UgPSAoKSA9PiB7XG5cbiAgICBpZiAoIGFucyA9PSBkYXRhW2luZGV4XS5hbnMpIHtcbiAgICAgIHNldFNjb3JlKHNjb3JlICsgMSk7XG4gICAgXG4gICAgICByYWRpby5mb3JFYWNoKChlKT0+e1xuICAgICAgICBjb25zdCByYWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiLnJhZGlvXCIpXG4gICAgICAgIGNvbnNvbGUubG9nKGUpXG5pZihlLmNoZWNrZWQ9dHJ1ZSl7XG4gIGUucmVtb3ZlQXR0cmlidXRlKFwiY2hlY2tlZFwiKVxufVxuICAgICB9KSAgXG4gICAgfVxuICAgIGlmIChpbmRleCA8IGRhdGEubGVuZ3RoIC0gMSkge1xuICAgICAgc2V0SW5kZXgoaW5kZXggKyAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnQoYFlvdSBjb21wbGV0ZWQgcXVpeiBzdWNjZnVsbHkgWW91ciBzY29yZSBpcyAke3Njb3JlfSBvdXQgb2YgJHtkYXRhLmxlbmd0aH0uLi5gKTtcblxuICAgIH1cbiAgfTtcbiAgY29uc3QgaGFuZGVsQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICBzZXRBbnMoZS50YXJnZXQudmFsdWUpXG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0byBhbGlnbi1taWRkbGUgcC01IGJvcmRlci14LXNreS05NTAgYm9yZGVyLTQgYm9yZGVyLXNvbGlkIFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1ZXNcIj5cbiAgICAgICAgICA8aDM+e2RhdGFbaW5kZXhdLnF1c3Rpb259PC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge2RhdGFbaW5kZXhdLm9wdGlvbiAmJlxuICAgICAgICAgICAgZGF0YVtpbmRleF0ub3B0aW9uLm1hcCgoZTogYW55LCBpOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9e2l9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyYWRpb0J1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kZWxDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2l9PntlfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWFyb3VuZFwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci14LTIgYm9yZGVyLXktMiBwLTIgYmctc2xhdGUtOTAwIHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgb25DbGljaz17bmV4dFBhZ2V9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgTmV4dFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSG9tZSIsImluZGV4Iiwic2V0SW5kZXgiLCJzY29yZSIsInNldFNjb3JlIiwiZmxhZyIsInNldEZsYWciLCJhbnMiLCJzZXRBbnMiLCJkYXRhIiwicXVzdGlvbiIsIm9wdGlvbiIsIm5leHRQYWdlIiwicmFkaW8iLCJmb3JFYWNoIiwiZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb25zb2xlIiwibG9nIiwiY2hlY2tlZCIsInJlbW92ZUF0dHJpYnV0ZSIsImxlbmd0aCIsImFsZXJ0IiwiaGFuZGVsQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsIm1hcCIsImkiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm5hbWUiLCJvbkNoYW5nZSIsImxhYmVsIiwiaHRtbEZvciIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});