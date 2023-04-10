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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/context */ \"./context/context.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [flag, setFlag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [ans, setAns] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [generatedNumbers, setGeneratedNumbers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // const [dark, setDark] = useState(false);\n    const { dark , setDark  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_2__.themes);\n    const data = [\n        {\n            question: \"What is the capital of France?\",\n            options: [\n                \"London\",\n                \"Paris\",\n                \"Berlin\",\n                \"Madrid\"\n            ],\n            answer: \"Paris\"\n        },\n        {\n            question: \"Who painted the Mona Lisa?\",\n            options: [\n                \"Vincent van Gogh\",\n                \"Leonardo da Vinci\",\n                \"Pablo Picasso\",\n                \"Michelangelo\"\n            ],\n            answer: \"Leonardo da Vinci\"\n        },\n        {\n            question: \"What is the largest mammal in the world?\",\n            options: [\n                \"Elephant\",\n                \"Blue Whale\",\n                \"Giraffe\",\n                \"Hippopotamus\"\n            ],\n            answer: \"Blue Whale\"\n        },\n        {\n            question: \"What is the currency of Japan?\",\n            options: [\n                \"Dollar\",\n                \"Euro\",\n                \"Yen\",\n                \"Pound\"\n            ],\n            answer: \"Yen\"\n        },\n        {\n            question: \"What is the tallest mountain in the world?\",\n            options: [\n                \"Mount Everest\",\n                \"K2\",\n                \"Kilimanjaro\",\n                \"Denali\"\n            ],\n            answer: \"Mount Everest\"\n        },\n        {\n            question: \"What is the largest country in the world by land area?\",\n            options: [\n                \"Canada\",\n                \"Russia\",\n                \"China\",\n                \"United States\"\n            ],\n            answer: \"Russia\"\n        },\n        {\n            question: \"What is the chemical symbol for gold?\",\n            options: [\n                \"Go\",\n                \"Au\",\n                \"Gd\",\n                \"Ag\"\n            ],\n            answer: \"Au\"\n        },\n        {\n            question: \"What is the smallest planet in our solar system?\",\n            options: [\n                \"Venus\",\n                \"Mars\",\n                \"Mercury\",\n                \"Earth\"\n            ],\n            answer: \"Mercury\"\n        },\n        {\n            question: \"What is the largest planet in our solar system?\",\n            options: [\n                \"Jupiter\",\n                \"Saturn\",\n                \"Neptune\",\n                \"Uranus\"\n            ],\n            answer: \"Jupiter\"\n        },\n        {\n            question: \"What is the name of the first man to walk on the moon?\",\n            options: [\n                \"Buzz Aldrin\",\n                \"Neil Armstrong\",\n                \"Yuri Gagarin\",\n                \"Alan Shepard\"\n            ],\n            answer: \"Neil Armstrong\"\n        }\n    ];\n    const generateRandomNumber = ()=>{\n        if (generatedNumbers.length + 1 === data.length) {\n            alert(\"Exam Completed Your Score is \".concat(score, \" out of \").concat(data.length - 1));\n            setFlag(true);\n            return null;\n        }\n        let randomNumber;\n        do {\n            randomNumber = Math.floor(Math.random() * 10);\n        }while (generatedNumbers.includes(randomNumber));\n        setGeneratedNumbers([\n            ...generatedNumbers,\n            randomNumber\n        ]);\n        console.log(generatedNumbers);\n        setIndex(randomNumber);\n        increseScore();\n    };\n    const increseScore = ()=>{\n        if (ans == data[index].answer) {\n            setScore(score + 1);\n        }\n        const radio = document.querySelectorAll(\".radio\");\n        radio.forEach((e, i)=>{\n            if (e.checked) {\n                e.checked = false;\n            }\n        });\n    };\n    const handelChange = (e)=>{\n        setAns(e.target.value);\n        const label = document.querySelectorAll(\".label\");\n        label.forEach((event)=>{\n            console.log(event.classList.contain);\n            if (event.classList.contains(\"bg-white\")) {\n                console.log(\"hi\");\n                event.classList.remove(\"bg-white\");\n            }\n        });\n        e.target.classList.add(\"bg-white\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"dark:bg-[#192734] \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-[calc(100vh-44px)] flex items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"m-auto  align-middle p-5 mr border-4 border-solid w-[70%] rounded-lg\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"font-extrabold text-3xl mb-5   font-noto dark:text-white\",\n                                    children: data[index].question\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                    lineNumber: 121,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: data[index].options && data[index].options.map((e, i)=>{\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: i,\n                                            onClick: handelChange,\n                                            className: \"items-center label align-middle bg-gray-600 text-white mb-3 last:mb-0 rounded-md flex justify-center hover:bg-orange-400\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    type: \"radio\",\n                                                    className: \"radio hidden w-4 h-4 p-10 text-gray-600  bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600   dark:bg-gray-700 dark:border-gray-600\",\n                                                    value: e,\n                                                    id: i,\n                                                    name: \"radioButton\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 134,\n                                                    columnNumber: 25\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"check\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 142,\n                                                    columnNumber: 25\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    className: \"p-3 w-full  ml-2 text-sm font-medium text-gray-900 dark:text-gray-300\",\n                                                    htmlFor: i,\n                                                    children: e\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 143,\n                                                    columnNumber: 25\n                                                }, this)\n                                            ]\n                                        }, i, true, {\n                                            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                            lineNumber: 128,\n                                            columnNumber: 23\n                                        }, this);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                    lineNumber: 124,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                            lineNumber: 120,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                        lineNumber: 119,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-around  absolute bottom-0 right-0\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-white dark:text-black dark:focus:ring-gray-700 dark:border-gray-700\",\n                            onClick: generateRandomNumber,\n                            children: \"Next\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                            lineNumber: 156,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                        lineNumber: 155,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                lineNumber: 118,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n            lineNumber: 117,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"Zw04nb+MnnaHkRMAtmMQr5sjnok=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVU7a0NBQ2IsNEVBQUNTOzRCQUNDVCxXQUFZOzRCQUNaSSxTQUFTakM7c0NBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWIsQ0FBQztHQXBLdUJqQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB0aGVtZXMgfSBmcm9tIFwiQC9jb250ZXh0L2NvbnRleHRcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzY29yZSwgc2V0U2NvcmVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtmbGFnLCBzZXRGbGFnXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Fucywgc2V0QW5zXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZ2VuZXJhdGVkTnVtYmVycywgc2V0R2VuZXJhdGVkTnVtYmVyc10gPSB1c2VTdGF0ZTxhbnk+KFtdKTtcbiAgLy8gY29uc3QgW2RhcmssIHNldERhcmtdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB7IGRhcmssIHNldERhcmsgfSA9IHVzZUNvbnRleHQodGhlbWVzKTtcblxuICBjb25zdCBkYXRhID0gW1xuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgaXMgdGhlIGNhcGl0YWwgb2YgRnJhbmNlP1wiLFxuICAgICAgb3B0aW9uczogW1wiTG9uZG9uXCIsIFwiUGFyaXNcIiwgXCJCZXJsaW5cIiwgXCJNYWRyaWRcIl0sXG4gICAgICBhbnN3ZXI6IFwiUGFyaXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldobyBwYWludGVkIHRoZSBNb25hIExpc2E/XCIsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgIFwiVmluY2VudCB2YW4gR29naFwiLFxuICAgICAgICBcIkxlb25hcmRvIGRhIFZpbmNpXCIsXG4gICAgICAgIFwiUGFibG8gUGljYXNzb1wiLFxuICAgICAgICBcIk1pY2hlbGFuZ2Vsb1wiLFxuICAgICAgXSxcbiAgICAgIGFuc3dlcjogXCJMZW9uYXJkbyBkYSBWaW5jaVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyB0aGUgbGFyZ2VzdCBtYW1tYWwgaW4gdGhlIHdvcmxkP1wiLFxuICAgICAgb3B0aW9uczogW1wiRWxlcGhhbnRcIiwgXCJCbHVlIFdoYWxlXCIsIFwiR2lyYWZmZVwiLCBcIkhpcHBvcG90YW11c1wiXSxcbiAgICAgIGFuc3dlcjogXCJCbHVlIFdoYWxlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaGF0IGlzIHRoZSBjdXJyZW5jeSBvZiBKYXBhbj9cIixcbiAgICAgIG9wdGlvbnM6IFtcIkRvbGxhclwiLCBcIkV1cm9cIiwgXCJZZW5cIiwgXCJQb3VuZFwiXSxcbiAgICAgIGFuc3dlcjogXCJZZW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgaXMgdGhlIHRhbGxlc3QgbW91bnRhaW4gaW4gdGhlIHdvcmxkP1wiLFxuICAgICAgb3B0aW9uczogW1wiTW91bnQgRXZlcmVzdFwiLCBcIksyXCIsIFwiS2lsaW1hbmphcm9cIiwgXCJEZW5hbGlcIl0sXG4gICAgICBhbnN3ZXI6IFwiTW91bnQgRXZlcmVzdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyB0aGUgbGFyZ2VzdCBjb3VudHJ5IGluIHRoZSB3b3JsZCBieSBsYW5kIGFyZWE/XCIsXG4gICAgICBvcHRpb25zOiBbXCJDYW5hZGFcIiwgXCJSdXNzaWFcIiwgXCJDaGluYVwiLCBcIlVuaXRlZCBTdGF0ZXNcIl0sXG4gICAgICBhbnN3ZXI6IFwiUnVzc2lhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaGF0IGlzIHRoZSBjaGVtaWNhbCBzeW1ib2wgZm9yIGdvbGQ/XCIsXG4gICAgICBvcHRpb25zOiBbXCJHb1wiLCBcIkF1XCIsIFwiR2RcIiwgXCJBZ1wiXSxcbiAgICAgIGFuc3dlcjogXCJBdVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyB0aGUgc21hbGxlc3QgcGxhbmV0IGluIG91ciBzb2xhciBzeXN0ZW0/XCIsXG4gICAgICBvcHRpb25zOiBbXCJWZW51c1wiLCBcIk1hcnNcIiwgXCJNZXJjdXJ5XCIsIFwiRWFydGhcIl0sXG4gICAgICBhbnN3ZXI6IFwiTWVyY3VyeVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyB0aGUgbGFyZ2VzdCBwbGFuZXQgaW4gb3VyIHNvbGFyIHN5c3RlbT9cIixcbiAgICAgIG9wdGlvbnM6IFtcIkp1cGl0ZXJcIiwgXCJTYXR1cm5cIiwgXCJOZXB0dW5lXCIsIFwiVXJhbnVzXCJdLFxuICAgICAgYW5zd2VyOiBcIkp1cGl0ZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgaXMgdGhlIG5hbWUgb2YgdGhlIGZpcnN0IG1hbiB0byB3YWxrIG9uIHRoZSBtb29uP1wiLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICBcIkJ1enogQWxkcmluXCIsXG4gICAgICAgIFwiTmVpbCBBcm1zdHJvbmdcIixcbiAgICAgICAgXCJZdXJpIEdhZ2FyaW5cIixcbiAgICAgICAgXCJBbGFuIFNoZXBhcmRcIixcbiAgICAgIF0sXG4gICAgICBhbnN3ZXI6IFwiTmVpbCBBcm1zdHJvbmdcIixcbiAgICB9LFxuICBdO1xuICBjb25zdCBnZW5lcmF0ZVJhbmRvbU51bWJlciA9ICgpID0+IHtcbiAgICBpZiAoZ2VuZXJhdGVkTnVtYmVycy5sZW5ndGggKyAxID09PSBkYXRhLmxlbmd0aCkge1xuICAgICAgYWxlcnQoYEV4YW0gQ29tcGxldGVkIFlvdXIgU2NvcmUgaXMgJHtzY29yZX0gb3V0IG9mICR7ZGF0YS5sZW5ndGggLSAxfWApO1xuICAgICAgc2V0RmxhZyh0cnVlKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGxldCByYW5kb21OdW1iZXI6IGFueTtcbiAgICBkbyB7XG4gICAgICByYW5kb21OdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgfSB3aGlsZSAoZ2VuZXJhdGVkTnVtYmVycy5pbmNsdWRlcyhyYW5kb21OdW1iZXIpKTtcblxuICAgIHNldEdlbmVyYXRlZE51bWJlcnMoWy4uLmdlbmVyYXRlZE51bWJlcnMsIHJhbmRvbU51bWJlcl0pO1xuICAgIGNvbnNvbGUubG9nKGdlbmVyYXRlZE51bWJlcnMpO1xuICAgIHNldEluZGV4KHJhbmRvbU51bWJlcik7XG4gICAgaW5jcmVzZVNjb3JlKCk7XG4gIH07XG4gIGNvbnN0IGluY3Jlc2VTY29yZSA9ICgpID0+IHtcbiAgICBpZiAoYW5zID09IGRhdGFbaW5kZXhdLmFuc3dlcikge1xuICAgICAgc2V0U2NvcmUoc2NvcmUgKyAxKTtcbiAgICB9XG4gICAgY29uc3QgcmFkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJhZGlvXCIpO1xuICAgIHJhZGlvLmZvckVhY2goKGU6IGFueSwgaTogYW55KSA9PiB7XG4gICAgICBpZiAoZS5jaGVja2VkKSB7XG4gICAgICAgIGUuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICBjb25zdCBoYW5kZWxDaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgc2V0QW5zKGUudGFyZ2V0LnZhbHVlKTtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGFiZWxcIik7XG4gICAgbGFiZWwuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGV2ZW50LmNsYXNzTGlzdC5jb250YWluKTtcbiAgICAgIGlmIChldmVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJiZy13aGl0ZVwiKSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImhpXCIpO1xuICAgICAgICBldmVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYmctd2hpdGVcIik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImJnLXdoaXRlXCIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFyazpiZy1bIzE5MjczNF0gXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLVtjYWxjKDEwMHZoLTQ0cHgpXSBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLWF1dG8gIGFsaWduLW1pZGRsZSBwLTUgbXIgYm9yZGVyLTQgYm9yZGVyLXNvbGlkIHctWzcwJV0gcm91bmRlZC1sZ1wiPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1leHRyYWJvbGQgdGV4dC0zeGwgbWItNSBcdFx0Zm9udC1ub3RvIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgIHtkYXRhW2luZGV4XS5xdWVzdGlvbn1cbiAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7ZGF0YVtpbmRleF0ub3B0aW9ucyAmJlxuICAgICAgICAgICAgICAgICAgZGF0YVtpbmRleF0ub3B0aW9ucy5tYXAoKGU6IGFueSwgaTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGVsQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaXRlbXMtY2VudGVyIGxhYmVsIGFsaWduLW1pZGRsZSBiZy1ncmF5LTYwMCB0ZXh0LXdoaXRlIG1iLTMgbGFzdDptYi0wIHJvdW5kZWQtbWQgZmxleCBqdXN0aWZ5LWNlbnRlciBob3ZlcjpiZy1vcmFuZ2UtNDAwXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmFkaW8gaGlkZGVuIHctNCBoLTQgcC0xMCB0ZXh0LWdyYXktNjAwICBiZy1ncmF5LTEwMCBib3JkZXItZ3JheS0zMDAgZm9jdXM6cmluZy1yZWQtNTAwIGRhcms6Zm9jdXM6cmluZy1yZWQtNjAwICAgZGFyazpiZy1ncmF5LTcwMCBkYXJrOmJvcmRlci1ncmF5LTYwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJhZGlvQnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTMgdy1mdWxsICBtbC0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtZ3JheS0zMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWFyb3VuZCAgYWJzb2x1dGUgYm90dG9tLTAgcmlnaHQtMFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LXdoaXRlIGJnLWdyYXktODAwIGhvdmVyOmJnLWdyYXktOTAwIGZvY3VzOnJpbmctZ3JheS0zMDAgZm9udC1tZWRpdW0gcm91bmRlZC1sZyB0ZXh0LXNtIHB4LTUgcHktMi41IG1yLTIgbWItMiBkYXJrOmJnLXdoaXRlIGRhcms6dGV4dC1ibGFjayBkYXJrOmZvY3VzOnJpbmctZ3JheS03MDAgZGFyazpib3JkZXItZ3JheS03MDBgfVxuICAgICAgICAgICAgICBvbkNsaWNrPXtnZW5lcmF0ZVJhbmRvbU51bWJlcn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTmV4dFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidGhlbWVzIiwiSG9tZSIsImluZGV4Iiwic2V0SW5kZXgiLCJzY29yZSIsInNldFNjb3JlIiwiZmxhZyIsInNldEZsYWciLCJhbnMiLCJzZXRBbnMiLCJnZW5lcmF0ZWROdW1iZXJzIiwic2V0R2VuZXJhdGVkTnVtYmVycyIsImRhcmsiLCJzZXREYXJrIiwiZGF0YSIsInF1ZXN0aW9uIiwib3B0aW9ucyIsImFuc3dlciIsImdlbmVyYXRlUmFuZG9tTnVtYmVyIiwibGVuZ3RoIiwiYWxlcnQiLCJyYW5kb21OdW1iZXIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJpbmNsdWRlcyIsImNvbnNvbGUiLCJsb2ciLCJpbmNyZXNlU2NvcmUiLCJyYWRpbyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlIiwiaSIsImNoZWNrZWQiLCJoYW5kZWxDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxhYmVsIiwiZXZlbnQiLCJjbGFzc0xpc3QiLCJjb250YWluIiwiY29udGFpbnMiLCJyZW1vdmUiLCJhZGQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm1hcCIsImh0bWxGb3IiLCJvbkNsaWNrIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJuYW1lIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});