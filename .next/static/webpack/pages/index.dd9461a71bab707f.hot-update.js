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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    // const [answer, setAnswer] = useState(false);\n    const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [flag, setFlag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [ans, setAns] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [generatedNumbers, setGeneratedNumbers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const data = [\n        {\n            question: \"What is the capital of France?\",\n            options: [\n                \"London\",\n                \"Paris\",\n                \"Berlin\",\n                \"Madrid\"\n            ],\n            answer: \"Paris\"\n        },\n        {\n            question: \"Who painted the Mona Lisa?\",\n            options: [\n                \"Vincent van Gogh\",\n                \"Leonardo da Vinci\",\n                \"Pablo Picasso\",\n                \"Michelangelo\"\n            ],\n            answer: \"Leonardo da Vinci\"\n        },\n        {\n            question: \"What is the largest mammal in the world?\",\n            options: [\n                \"Elephant\",\n                \"Blue Whale\",\n                \"Giraffe\",\n                \"Hippopotamus\"\n            ],\n            answer: \"Blue Whale\"\n        },\n        {\n            question: \"What is the currency of Japan?\",\n            options: [\n                \"Dollar\",\n                \"Euro\",\n                \"Yen\",\n                \"Pound\"\n            ],\n            answer: \"Yen\"\n        },\n        {\n            question: \"What is the tallest mountain in the world?\",\n            options: [\n                \"Mount Everest\",\n                \"K2\",\n                \"Kilimanjaro\",\n                \"Denali\"\n            ],\n            answer: \"Mount Everest\"\n        },\n        {\n            question: \"What is the largest country in the world by land area?\",\n            options: [\n                \"Canada\",\n                \"Russia\",\n                \"China\",\n                \"United States\"\n            ],\n            answer: \"Russia\"\n        },\n        {\n            question: \"What is the chemical symbol for gold?\",\n            options: [\n                \"Go\",\n                \"Au\",\n                \"Gd\",\n                \"Ag\"\n            ],\n            answer: \"Au\"\n        },\n        {\n            question: \"What is the smallest planet in our solar system?\",\n            options: [\n                \"Venus\",\n                \"Mars\",\n                \"Mercury\",\n                \"Earth\"\n            ],\n            answer: \"Mercury\"\n        },\n        {\n            question: \"What is the largest planet in our solar system?\",\n            options: [\n                \"Jupiter\",\n                \"Saturn\",\n                \"Neptune\",\n                \"Uranus\"\n            ],\n            answer: \"Jupiter\"\n        },\n        {\n            question: \"What is the name of the first man to walk on the moon?\",\n            options: [\n                \"Buzz Aldrin\",\n                \"Neil Armstrong\",\n                \"Yuri Gagarin\",\n                \"Alan Shepard\"\n            ],\n            answer: \"Neil Armstrong\"\n        }\n    ];\n    const generateRandomNumber = ()=>{\n        if (generatedNumbers.length + 1 === data.length) {\n            console.log(\"All numbers have been generated.\");\n            return null;\n        }\n        let randomNumber;\n        do {\n            randomNumber = Math.floor(Math.random() * 10) + 1;\n        }while (generatedNumbers.includes(randomNumber));\n        setGeneratedNumbers([\n            ...generatedNumbers,\n            randomNumber\n        ]);\n        console.log(generatedNumbers);\n        setIndex(randomNumber);\n        return randomNumber;\n    };\n    const nextPage = ()=>{\n    // if (arr.length * 2 === data.length) {\n    //   console.log(\"full\");\n    // }\n    // let randomNum2 = Math.floor(Math.random() * 10);\n    // if (arr.includes(randomNum2)) {\n    //   nextPage();\n    // } else {\n    //   random(randomNum2);\n    // }\n    // debugger;\n    // console.log(arr.length);\n    // if (arr.length * 2 == data.length) {\n    //   alert(`your score is ${score} out of ${data.length}`);\n    // } else {\n    //   let randomNum = Math.floor(Math.random() * 10);\n    //   if (arr.includes(randomNum)) {\n    //     nextPage();\n    //   } else {\n    //     arr.push(...arr, randomNum);\n    //     setIndex(randomNum);\n    //     // console.log(randomNum);\n    //   }\n    // }\n    // console.log(arr);\n    // console.log(score);\n    // if (ans == data[index].answer) {\n    //   setScore(score + 1);\n    // }\n    // const radio = document.querySelectorAll(\".radio\");\n    // radio.forEach((e: any, i: any) => {\n    //   if (e.checked) {\n    //     e.checked = false;\n    //   }\n    // });\n    };\n    const handelChange = (e)=>{\n    // setAns(e.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mr-auto align-middle p-5 border-x-sky-950 border-4 border-solid \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"ques\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: data[index].question\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                        lineNumber: 134,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                    lineNumber: 133,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: data[index].options && data[index].options.map((e, i)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"radio\",\n                                    className: \"radio\",\n                                    value: e,\n                                    id: i,\n                                    name: \"radioButton\",\n                                    onChange: handelChange\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                    lineNumber: 141,\n                                    columnNumber: 19\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: i,\n                                    children: e\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                    lineNumber: 149,\n                                    columnNumber: 19\n                                }, this)\n                            ]\n                        }, i, true, {\n                            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                            lineNumber: 140,\n                            columnNumber: 17\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                    lineNumber: 136,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-around\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"border-x-2 border-y-2 p-2 bg-slate-900 text-white\",\n                        onClick: generateRandomNumber,\n                        children: \"Next\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                        lineNumber: 155,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                    lineNumber: 154,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n            lineNumber: 132,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"fo7GllIY9UMEvaQZt3RMkB5xtvU=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dEMscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixNQUFNO0lBQ04sTUFBTTtJQUNSO0lBQ0EsTUFBTUMsZUFBZSxDQUFDQyxJQUFXO0lBQy9CLDBCQUEwQjtJQUM1QjtJQUVBLHFCQUNFO2tCQUNFLDRFQUFDQztZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNDO2tDQUFJbEIsSUFBSSxDQUFDVixNQUFNLENBQUNXLFFBQVE7Ozs7Ozs7Ozs7OzhCQUUzQiw4REFBQ2U7OEJBQ0VoQixJQUFJLENBQUNWLE1BQU0sQ0FBQ1ksT0FBTyxJQUNsQkYsSUFBSSxDQUFDVixNQUFNLENBQUNZLE9BQU8sQ0FBQ2lCLEdBQUcsQ0FBQyxDQUFDSixHQUFRSyxJQUFXO3dCQUMxQyxxQkFDRSw4REFBQ0o7OzhDQUNDLDhEQUFDSztvQ0FDQ0MsTUFBSztvQ0FDTEwsV0FBVTtvQ0FDVk0sT0FBT1I7b0NBQ1BTLElBQUlKO29DQUNKSyxNQUFLO29DQUNMQyxVQUFVWjs7Ozs7OzhDQUVaLDhEQUFDYTtvQ0FBTUMsU0FBU1I7OENBQUlMOzs7Ozs7OzJCQVRaSzs7Ozs7b0JBWWQ7Ozs7Ozs4QkFFSiw4REFBQ0o7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNZO3dCQUNDWixXQUFVO3dCQUNWYSxTQUFTMUI7a0NBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9YLENBQUM7R0FqS3VCZjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzcGF3biB9IGZyb20gXCJjaGlsZF9wcm9jZXNzXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIC8vIGNvbnN0IFthbnN3ZXIsIHNldEFuc3dlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzY29yZSwgc2V0U2NvcmVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtmbGFnLCBzZXRGbGFnXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Fucywgc2V0QW5zXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZ2VuZXJhdGVkTnVtYmVycywgc2V0R2VuZXJhdGVkTnVtYmVyc10gPSB1c2VTdGF0ZTxhbnk+KFtdKTtcblxuICBjb25zdCBkYXRhID0gW1xuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgaXMgdGhlIGNhcGl0YWwgb2YgRnJhbmNlP1wiLFxuICAgICAgb3B0aW9uczogW1wiTG9uZG9uXCIsIFwiUGFyaXNcIiwgXCJCZXJsaW5cIiwgXCJNYWRyaWRcIl0sXG4gICAgICBhbnN3ZXI6IFwiUGFyaXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldobyBwYWludGVkIHRoZSBNb25hIExpc2E/XCIsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgIFwiVmluY2VudCB2YW4gR29naFwiLFxuICAgICAgICBcIkxlb25hcmRvIGRhIFZpbmNpXCIsXG4gICAgICAgIFwiUGFibG8gUGljYXNzb1wiLFxuICAgICAgICBcIk1pY2hlbGFuZ2Vsb1wiLFxuICAgICAgXSxcbiAgICAgIGFuc3dlcjogXCJMZW9uYXJkbyBkYSBWaW5jaVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyB0aGUgbGFyZ2VzdCBtYW1tYWwgaW4gdGhlIHdvcmxkP1wiLFxuICAgICAgb3B0aW9uczogW1wiRWxlcGhhbnRcIiwgXCJCbHVlIFdoYWxlXCIsIFwiR2lyYWZmZVwiLCBcIkhpcHBvcG90YW11c1wiXSxcbiAgICAgIGFuc3dlcjogXCJCbHVlIFdoYWxlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaGF0IGlzIHRoZSBjdXJyZW5jeSBvZiBKYXBhbj9cIixcbiAgICAgIG9wdGlvbnM6IFtcIkRvbGxhclwiLCBcIkV1cm9cIiwgXCJZZW5cIiwgXCJQb3VuZFwiXSxcbiAgICAgIGFuc3dlcjogXCJZZW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgaXMgdGhlIHRhbGxlc3QgbW91bnRhaW4gaW4gdGhlIHdvcmxkP1wiLFxuICAgICAgb3B0aW9uczogW1wiTW91bnQgRXZlcmVzdFwiLCBcIksyXCIsIFwiS2lsaW1hbmphcm9cIiwgXCJEZW5hbGlcIl0sXG4gICAgICBhbnN3ZXI6IFwiTW91bnQgRXZlcmVzdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyB0aGUgbGFyZ2VzdCBjb3VudHJ5IGluIHRoZSB3b3JsZCBieSBsYW5kIGFyZWE/XCIsXG4gICAgICBvcHRpb25zOiBbXCJDYW5hZGFcIiwgXCJSdXNzaWFcIiwgXCJDaGluYVwiLCBcIlVuaXRlZCBTdGF0ZXNcIl0sXG4gICAgICBhbnN3ZXI6IFwiUnVzc2lhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaGF0IGlzIHRoZSBjaGVtaWNhbCBzeW1ib2wgZm9yIGdvbGQ/XCIsXG4gICAgICBvcHRpb25zOiBbXCJHb1wiLCBcIkF1XCIsIFwiR2RcIiwgXCJBZ1wiXSxcbiAgICAgIGFuc3dlcjogXCJBdVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyB0aGUgc21hbGxlc3QgcGxhbmV0IGluIG91ciBzb2xhciBzeXN0ZW0/XCIsXG4gICAgICBvcHRpb25zOiBbXCJWZW51c1wiLCBcIk1hcnNcIiwgXCJNZXJjdXJ5XCIsIFwiRWFydGhcIl0sXG4gICAgICBhbnN3ZXI6IFwiTWVyY3VyeVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyB0aGUgbGFyZ2VzdCBwbGFuZXQgaW4gb3VyIHNvbGFyIHN5c3RlbT9cIixcbiAgICAgIG9wdGlvbnM6IFtcIkp1cGl0ZXJcIiwgXCJTYXR1cm5cIiwgXCJOZXB0dW5lXCIsIFwiVXJhbnVzXCJdLFxuICAgICAgYW5zd2VyOiBcIkp1cGl0ZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgaXMgdGhlIG5hbWUgb2YgdGhlIGZpcnN0IG1hbiB0byB3YWxrIG9uIHRoZSBtb29uP1wiLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICBcIkJ1enogQWxkcmluXCIsXG4gICAgICAgIFwiTmVpbCBBcm1zdHJvbmdcIixcbiAgICAgICAgXCJZdXJpIEdhZ2FyaW5cIixcbiAgICAgICAgXCJBbGFuIFNoZXBhcmRcIixcbiAgICAgIF0sXG4gICAgICBhbnN3ZXI6IFwiTmVpbCBBcm1zdHJvbmdcIixcbiAgICB9LFxuICBdO1xuICBjb25zdCBnZW5lcmF0ZVJhbmRvbU51bWJlciA9ICgpID0+IHtcbiAgICBpZiAoZ2VuZXJhdGVkTnVtYmVycy5sZW5ndGggKzE9PT0gZGF0YS5sZW5ndGgpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQWxsIG51bWJlcnMgaGF2ZSBiZWVuIGdlbmVyYXRlZC5cIik7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBsZXQgcmFuZG9tTnVtYmVyOiBhbnk7XG4gICAgZG8ge1xuICAgICAgcmFuZG9tTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICsgMTtcbiAgICB9IHdoaWxlIChnZW5lcmF0ZWROdW1iZXJzLmluY2x1ZGVzKHJhbmRvbU51bWJlcikpO1xuXG4gICAgc2V0R2VuZXJhdGVkTnVtYmVycyhbLi4uZ2VuZXJhdGVkTnVtYmVycywgcmFuZG9tTnVtYmVyXSk7XG4gICAgY29uc29sZS5sb2coZ2VuZXJhdGVkTnVtYmVycyk7XG4gICAgc2V0SW5kZXgocmFuZG9tTnVtYmVyKTtcbiAgICByZXR1cm4gcmFuZG9tTnVtYmVyO1xuICB9O1xuICBjb25zdCBuZXh0UGFnZSA9ICgpID0+IHtcbiAgICAvLyBpZiAoYXJyLmxlbmd0aCAqIDIgPT09IGRhdGEubGVuZ3RoKSB7XG4gICAgLy8gICBjb25zb2xlLmxvZyhcImZ1bGxcIik7XG4gICAgLy8gfVxuICAgIC8vIGxldCByYW5kb21OdW0yID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIC8vIGlmIChhcnIuaW5jbHVkZXMocmFuZG9tTnVtMikpIHtcbiAgICAvLyAgIG5leHRQYWdlKCk7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIHJhbmRvbShyYW5kb21OdW0yKTtcbiAgICAvLyB9XG4gICAgLy8gZGVidWdnZXI7XG4gICAgLy8gY29uc29sZS5sb2coYXJyLmxlbmd0aCk7XG4gICAgLy8gaWYgKGFyci5sZW5ndGggKiAyID09IGRhdGEubGVuZ3RoKSB7XG4gICAgLy8gICBhbGVydChgeW91ciBzY29yZSBpcyAke3Njb3JlfSBvdXQgb2YgJHtkYXRhLmxlbmd0aH1gKTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgbGV0IHJhbmRvbU51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAvLyAgIGlmIChhcnIuaW5jbHVkZXMocmFuZG9tTnVtKSkge1xuICAgIC8vICAgICBuZXh0UGFnZSgpO1xuICAgIC8vICAgfSBlbHNlIHtcbiAgICAvLyAgICAgYXJyLnB1c2goLi4uYXJyLCByYW5kb21OdW0pO1xuICAgIC8vICAgICBzZXRJbmRleChyYW5kb21OdW0pO1xuICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhyYW5kb21OdW0pO1xuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgICAvLyBjb25zb2xlLmxvZyhhcnIpO1xuICAgIC8vIGNvbnNvbGUubG9nKHNjb3JlKTtcbiAgICAvLyBpZiAoYW5zID09IGRhdGFbaW5kZXhdLmFuc3dlcikge1xuICAgIC8vICAgc2V0U2NvcmUoc2NvcmUgKyAxKTtcbiAgICAvLyB9XG4gICAgLy8gY29uc3QgcmFkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJhZGlvXCIpO1xuICAgIC8vIHJhZGlvLmZvckVhY2goKGU6IGFueSwgaTogYW55KSA9PiB7XG4gICAgLy8gICBpZiAoZS5jaGVja2VkKSB7XG4gICAgLy8gICAgIGUuY2hlY2tlZCA9IGZhbHNlO1xuICAgIC8vICAgfVxuICAgIC8vIH0pO1xuICB9O1xuICBjb25zdCBoYW5kZWxDaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgLy8gc2V0QW5zKGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLWF1dG8gYWxpZ24tbWlkZGxlIHAtNSBib3JkZXIteC1za3ktOTUwIGJvcmRlci00IGJvcmRlci1zb2xpZCBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWVzXCI+XG4gICAgICAgICAgPGgzPntkYXRhW2luZGV4XS5xdWVzdGlvbn08L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7ZGF0YVtpbmRleF0ub3B0aW9ucyAmJlxuICAgICAgICAgICAgZGF0YVtpbmRleF0ub3B0aW9ucy5tYXAoKGU6IGFueSwgaTogYW55KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2V9XG4gICAgICAgICAgICAgICAgICAgIGlkPXtpfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmFkaW9CdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGVsQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtpfT57ZX08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1hcm91bmRcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIteC0yIGJvcmRlci15LTIgcC0yIGJnLXNsYXRlLTkwMCB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2dlbmVyYXRlUmFuZG9tTnVtYmVyfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIE5leHRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkhvbWUiLCJpbmRleCIsInNldEluZGV4Iiwic2NvcmUiLCJzZXRTY29yZSIsImZsYWciLCJzZXRGbGFnIiwiYW5zIiwic2V0QW5zIiwiZ2VuZXJhdGVkTnVtYmVycyIsInNldEdlbmVyYXRlZE51bWJlcnMiLCJkYXRhIiwicXVlc3Rpb24iLCJvcHRpb25zIiwiYW5zd2VyIiwiZ2VuZXJhdGVSYW5kb21OdW1iZXIiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwicmFuZG9tTnVtYmVyIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiaW5jbHVkZXMiLCJuZXh0UGFnZSIsImhhbmRlbENoYW5nZSIsImUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsIm1hcCIsImkiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsImlkIiwibmFtZSIsIm9uQ2hhbmdlIiwibGFiZWwiLCJodG1sRm9yIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});