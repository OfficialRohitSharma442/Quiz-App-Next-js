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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    // const [answer, setAnswer] = useState(false);\n    const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [flag, setFlag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [ans, setAns] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // const [buttonStatus, setButtonStatus] = useState(false);\n    const data = [\n        {\n            qustion: \"What is JavaScript?\",\n            option: [\n                \"JavaScript is a scripting language used to make the website interactive\",\n                \"JavaScript is an assembly language used to make the website interactive\",\n                \"JavaScript is a compiled language used to make the website interactive\",\n                \"None of Above\"\n            ],\n            ans: \"JavaScript is a scripting language used to make the website interactive\"\n        },\n        {\n            qustion: \" Which of the following is correct about JavaScript?\",\n            option: [\n                \"JavaScript is an Object-Based language\",\n                \"JavaScript is Assembly-language\",\n                \"JavaScript is an Object-Oriented language\",\n                \"JavaScript is a High-level language\"\n            ],\n            ans: \"JavaScript is Assembly-language\"\n        },\n        {\n            qustion: \"Arrays in JavaScript are defined by which of the following statements?\",\n            option: [\n                \"It is an ordered list of values\",\n                \"It is an ordered list of objects\",\n                \"It is an ordered list of string\",\n                \"It is an ordered list of functions\"\n            ],\n            ans: \"It is an ordered list of functions\"\n        },\n        {\n            qustion: \"Which of the following is not javascript data types?\",\n            option: [\n                \"Null type\",\n                \"Undefined type\",\n                \"Number type\",\n                \"All of the mentioned\"\n            ],\n            ans: \"All of the mentioned\"\n        }\n    ];\n    const nextPage = ()=>{\n        if (index < data.length - 1) {\n            setIndex(index + 1);\n        } else {\n            alert(\"You completed quiz succfully Your score is \".concat(score, \" out of \").concat(data.length, \"...\"));\n        }\n        if (ans == data[index].ans) {\n            setScore(score + 1);\n            const radio = document.querySelectorAll(\".radio\");\n            radio.forEach((e, i)=>{\n                if (e.checked) {\n                    e.checked = false;\n                }\n            });\n        }\n    };\n    const handelChange = (e)=>{\n        setAns(e.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mr-auto align-middle p-5 border-x-sky-950 border-4 border-solid \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"ques\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: data[index].qustion\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: data[index].option && data[index].option.map((e, i)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"radio\",\n                                    className: \"radio\",\n                                    value: e,\n                                    id: i,\n                                    name: \"radioButton\",\n                                    onChange: handelChange\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 19\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: i,\n                                    children: e\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 19\n                                }, this)\n                            ]\n                        }, i, true, {\n                            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 17\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-around\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"border-x-2 border-y-2 p-2 bg-slate-900 text-white\",\n                        onClick: nextPage,\n                        children: \"Next\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                    lineNumber: 100,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n            lineNumber: 78,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"2yXRwE4McSZxj25nEOkyGq2odSo=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFpQztBQUVsQixTQUFTQyxPQUFPOztJQUM3QiwrQ0FBK0M7SUFDL0MsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdILCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ0ksT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNNLE1BQU1DLFFBQVEsR0FBR1AsK0NBQVFBLENBQUMsS0FBSztJQUN0QyxNQUFNLENBQUNRLEtBQUtDLE9BQU8sR0FBR1QsK0NBQVFBLENBQUM7SUFDL0IsMkRBQTJEO0lBQzNELE1BQU1VLE9BQU87UUFDWDtZQUNFQyxTQUFTO1lBQ1RDLFFBQVE7Z0JBQ047Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7YUFDRDtZQUNESixLQUFLO1FBQ1A7UUFDQTtZQUNFRyxTQUFTO1lBQ1RDLFFBQVE7Z0JBQ047Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7YUFDRDtZQUNESixLQUFLO1FBQ1A7UUFDQTtZQUNFRyxTQUNFO1lBQ0ZDLFFBQVE7Z0JBQ047Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7YUFDRDtZQUNESixLQUFLO1FBQ1A7UUFDQTtZQUNFRyxTQUFTO1lBQ1RDLFFBQVE7Z0JBQ047Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7YUFDRDtZQUNESixLQUFLO1FBQ1A7S0FDRDtJQUNELE1BQU1LLFdBQVcsSUFBTTtRQUNyQixJQUFJWCxRQUFRUSxLQUFLSSxNQUFNLEdBQUcsR0FBRztZQUMzQlgsU0FBU0QsUUFBUTtRQUNuQixPQUFPO1lBQ0xhLE1BQ0UsOENBQThETCxPQUFoQk4sT0FBTSxZQUFzQixPQUFaTSxLQUFLSSxNQUFNLEVBQUM7UUFFOUUsQ0FBQztRQUNELElBQUlOLE9BQU9FLElBQUksQ0FBQ1IsTUFBTSxDQUFDTSxHQUFHLEVBQUU7WUFDMUJILFNBQVNELFFBQVE7WUFFakIsTUFBTVksUUFBUUMsU0FBU0MsZ0JBQWdCLENBQUM7WUFDeENGLE1BQU1HLE9BQU8sQ0FBQyxDQUFDQyxHQUFRQyxJQUFXO2dCQUNoQyxJQUFJRCxFQUFFRSxPQUFPLEVBQUU7b0JBQ2JGLEVBQUVFLE9BQU8sR0FBRyxLQUFLO2dCQUNuQixDQUFDO1lBQ0g7UUFDRixDQUFDO0lBQ0g7SUFFQSxNQUFNQyxlQUFlLENBQUNILElBQVc7UUFDL0JYLE9BQU9XLEVBQUVJLE1BQU0sQ0FBQ0MsS0FBSztJQUN2QjtJQUNBLHFCQUNFO2tCQUNFLDRFQUFDQztZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNDO2tDQUFJbEIsSUFBSSxDQUFDUixNQUFNLENBQUNTLE9BQU87Ozs7Ozs7Ozs7OzhCQUUxQiw4REFBQ2U7OEJBQ0VoQixJQUFJLENBQUNSLE1BQU0sQ0FBQ1UsTUFBTSxJQUNqQkYsSUFBSSxDQUFDUixNQUFNLENBQUNVLE1BQU0sQ0FBQ2lCLEdBQUcsQ0FBQyxDQUFDVCxHQUFRQyxJQUFXO3dCQUN6QyxxQkFDRSw4REFBQ0s7OzhDQUNDLDhEQUFDSTtvQ0FDQ0MsTUFBSztvQ0FDTEosV0FBVTtvQ0FDVkYsT0FBT0w7b0NBQ1BZLElBQUlYO29DQUNKWSxNQUFLO29DQUNMQyxVQUFVWDs7Ozs7OzhDQUVaLDhEQUFDWTtvQ0FBTUMsU0FBU2Y7OENBQUlEOzs7Ozs7OzJCQVRaQzs7Ozs7b0JBWWQ7Ozs7Ozs4QkFFSiw4REFBQ0s7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNVO3dCQUNDVixXQUFVO3dCQUNWVyxTQUFTekI7a0NBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9YLENBQUM7R0E1R3VCWjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAvLyBjb25zdCBbYW5zd2VyLCBzZXRBbnN3ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc2NvcmUsIHNldFNjb3JlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbZmxhZywgc2V0RmxhZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFthbnMsIHNldEFuc10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgLy8gY29uc3QgW2J1dHRvblN0YXR1cywgc2V0QnV0dG9uU3RhdHVzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgZGF0YSA9IFtcbiAgICB7XG4gICAgICBxdXN0aW9uOiBcIldoYXQgaXMgSmF2YVNjcmlwdD9cIixcbiAgICAgIG9wdGlvbjogW1xuICAgICAgICBcIkphdmFTY3JpcHQgaXMgYSBzY3JpcHRpbmcgbGFuZ3VhZ2UgdXNlZCB0byBtYWtlIHRoZSB3ZWJzaXRlIGludGVyYWN0aXZlXCIsXG4gICAgICAgIFwiSmF2YVNjcmlwdCBpcyBhbiBhc3NlbWJseSBsYW5ndWFnZSB1c2VkIHRvIG1ha2UgdGhlIHdlYnNpdGUgaW50ZXJhY3RpdmVcIixcbiAgICAgICAgXCJKYXZhU2NyaXB0IGlzIGEgY29tcGlsZWQgbGFuZ3VhZ2UgdXNlZCB0byBtYWtlIHRoZSB3ZWJzaXRlIGludGVyYWN0aXZlXCIsXG4gICAgICAgIFwiTm9uZSBvZiBBYm92ZVwiLFxuICAgICAgXSxcbiAgICAgIGFuczogXCJKYXZhU2NyaXB0IGlzIGEgc2NyaXB0aW5nIGxhbmd1YWdlIHVzZWQgdG8gbWFrZSB0aGUgd2Vic2l0ZSBpbnRlcmFjdGl2ZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVzdGlvbjogXCIgV2hpY2ggb2YgdGhlIGZvbGxvd2luZyBpcyBjb3JyZWN0IGFib3V0IEphdmFTY3JpcHQ/XCIsXG4gICAgICBvcHRpb246IFtcbiAgICAgICAgXCJKYXZhU2NyaXB0IGlzIGFuIE9iamVjdC1CYXNlZCBsYW5ndWFnZVwiLFxuICAgICAgICBcIkphdmFTY3JpcHQgaXMgQXNzZW1ibHktbGFuZ3VhZ2VcIixcbiAgICAgICAgXCJKYXZhU2NyaXB0IGlzIGFuIE9iamVjdC1PcmllbnRlZCBsYW5ndWFnZVwiLFxuICAgICAgICBcIkphdmFTY3JpcHQgaXMgYSBIaWdoLWxldmVsIGxhbmd1YWdlXCIsXG4gICAgICBdLFxuICAgICAgYW5zOiBcIkphdmFTY3JpcHQgaXMgQXNzZW1ibHktbGFuZ3VhZ2VcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1c3Rpb246XG4gICAgICAgIFwiQXJyYXlzIGluIEphdmFTY3JpcHQgYXJlIGRlZmluZWQgYnkgd2hpY2ggb2YgdGhlIGZvbGxvd2luZyBzdGF0ZW1lbnRzP1wiLFxuICAgICAgb3B0aW9uOiBbXG4gICAgICAgIFwiSXQgaXMgYW4gb3JkZXJlZCBsaXN0IG9mIHZhbHVlc1wiLFxuICAgICAgICBcIkl0IGlzIGFuIG9yZGVyZWQgbGlzdCBvZiBvYmplY3RzXCIsXG4gICAgICAgIFwiSXQgaXMgYW4gb3JkZXJlZCBsaXN0IG9mIHN0cmluZ1wiLFxuICAgICAgICBcIkl0IGlzIGFuIG9yZGVyZWQgbGlzdCBvZiBmdW5jdGlvbnNcIixcbiAgICAgIF0sXG4gICAgICBhbnM6IFwiSXQgaXMgYW4gb3JkZXJlZCBsaXN0IG9mIGZ1bmN0aW9uc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVzdGlvbjogXCJXaGljaCBvZiB0aGUgZm9sbG93aW5nIGlzIG5vdCBqYXZhc2NyaXB0IGRhdGEgdHlwZXM/XCIsXG4gICAgICBvcHRpb246IFtcbiAgICAgICAgXCJOdWxsIHR5cGVcIixcbiAgICAgICAgXCJVbmRlZmluZWQgdHlwZVwiLFxuICAgICAgICBcIk51bWJlciB0eXBlXCIsXG4gICAgICAgIFwiQWxsIG9mIHRoZSBtZW50aW9uZWRcIixcbiAgICAgIF0sXG4gICAgICBhbnM6IFwiQWxsIG9mIHRoZSBtZW50aW9uZWRcIixcbiAgICB9LFxuICBdO1xuICBjb25zdCBuZXh0UGFnZSA9ICgpID0+IHtcbiAgICBpZiAoaW5kZXggPCBkYXRhLmxlbmd0aCAtIDEpIHtcbiAgICAgIHNldEluZGV4KGluZGV4ICsgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0KFxuICAgICAgICBgWW91IGNvbXBsZXRlZCBxdWl6IHN1Y2NmdWxseSBZb3VyIHNjb3JlIGlzICR7c2NvcmV9IG91dCBvZiAke2RhdGEubGVuZ3RofS4uLmBcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChhbnMgPT0gZGF0YVtpbmRleF0uYW5zKSB7XG4gICAgICBzZXRTY29yZShzY29yZSArIDEpO1xuXG4gICAgICBjb25zdCByYWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmFkaW9cIik7XG4gICAgICByYWRpby5mb3JFYWNoKChlOiBhbnksIGk6IGFueSkgPT4ge1xuICAgICAgICBpZiAoZS5jaGVja2VkKSB7XG4gICAgICAgICAgZS5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kZWxDaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgc2V0QW5zKGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvIGFsaWduLW1pZGRsZSBwLTUgYm9yZGVyLXgtc2t5LTk1MCBib3JkZXItNCBib3JkZXItc29saWQgXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVlc1wiPlxuICAgICAgICAgIDxoMz57ZGF0YVtpbmRleF0ucXVzdGlvbn08L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7ZGF0YVtpbmRleF0ub3B0aW9uICYmXG4gICAgICAgICAgICBkYXRhW2luZGV4XS5vcHRpb24ubWFwKChlOiBhbnksIGk6IGFueSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlfVxuICAgICAgICAgICAgICAgICAgICBpZD17aX1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJhZGlvQnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRlbENoYW5nZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17aX0+e2V9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYXJvdW5kXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLXgtMiBib3JkZXIteS0yIHAtMiBiZy1zbGF0ZS05MDAgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICBvbkNsaWNrPXtuZXh0UGFnZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBOZXh0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJIb21lIiwiaW5kZXgiLCJzZXRJbmRleCIsInNjb3JlIiwic2V0U2NvcmUiLCJmbGFnIiwic2V0RmxhZyIsImFucyIsInNldEFucyIsImRhdGEiLCJxdXN0aW9uIiwib3B0aW9uIiwibmV4dFBhZ2UiLCJsZW5ndGgiLCJhbGVydCIsInJhZGlvIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImUiLCJpIiwiY2hlY2tlZCIsImhhbmRlbENoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJtYXAiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm5hbWUiLCJvbkNoYW5nZSIsImxhYmVsIiwiaHRtbEZvciIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});