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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    // const [answer, setAnswer] = useState(false);\n    const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [flag, setFlag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [ans, setAns] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [generatedNumbers, setGeneratedNumbers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const data = [\n        {\n            question: \"What is the capital of France?\",\n            options: [\n                \"London\",\n                \"Paris\",\n                \"Berlin\",\n                \"Madrid\"\n            ],\n            answer: \"Paris\"\n        },\n        {\n            question: \"Who painted the Mona Lisa?\",\n            options: [\n                \"Vincent van Gogh\",\n                \"Leonardo da Vinci\",\n                \"Pablo Picasso\",\n                \"Michelangelo\"\n            ],\n            answer: \"Leonardo da Vinci\"\n        },\n        {\n            question: \"What is the largest mammal in the world?\",\n            options: [\n                \"Elephant\",\n                \"Blue Whale\",\n                \"Giraffe\",\n                \"Hippopotamus\"\n            ],\n            answer: \"Blue Whale\"\n        },\n        {\n            question: \"What is the currency of Japan?\",\n            options: [\n                \"Dollar\",\n                \"Euro\",\n                \"Yen\",\n                \"Pound\"\n            ],\n            answer: \"Yen\"\n        },\n        {\n            question: \"What is the tallest mountain in the world?\",\n            options: [\n                \"Mount Everest\",\n                \"K2\",\n                \"Kilimanjaro\",\n                \"Denali\"\n            ],\n            answer: \"Mount Everest\"\n        },\n        {\n            question: \"What is the largest country in the world by land area?\",\n            options: [\n                \"Canada\",\n                \"Russia\",\n                \"China\",\n                \"United States\"\n            ],\n            answer: \"Russia\"\n        },\n        {\n            question: \"What is the chemical symbol for gold?\",\n            options: [\n                \"Go\",\n                \"Au\",\n                \"Gd\",\n                \"Ag\"\n            ],\n            answer: \"Au\"\n        },\n        {\n            question: \"What is the smallest planet in our solar system?\",\n            options: [\n                \"Venus\",\n                \"Mars\",\n                \"Mercury\",\n                \"Earth\"\n            ],\n            answer: \"Mercury\"\n        },\n        {\n            question: \"What is the largest planet in our solar system?\",\n            options: [\n                \"Jupiter\",\n                \"Saturn\",\n                \"Neptune\",\n                \"Uranus\"\n            ],\n            answer: \"Jupiter\"\n        },\n        {\n            question: \"What is the name of the first man to walk on the moon?\",\n            options: [\n                \"Buzz Aldrin\",\n                \"Neil Armstrong\",\n                \"Yuri Gagarin\",\n                \"Alan Shepard\"\n            ],\n            answer: \"Neil Armstrong\"\n        }\n    ];\n    const generateRandomNumber = ()=>{\n        if (generatedNumbers.length + 1 === data.length) {\n            alert(\"Exam Completed Your Score is \".concat(score, \" out of \").concat(data.length - 1));\n            setFlag(true);\n            return null;\n        }\n        let randomNumber;\n        do {\n            randomNumber = Math.floor(Math.random() * 10);\n        }while (generatedNumbers.includes(randomNumber));\n        setGeneratedNumbers([\n            ...generatedNumbers,\n            randomNumber\n        ]);\n        console.log(generatedNumbers);\n        setIndex(randomNumber);\n        increseScore();\n    };\n    const increseScore = ()=>{\n        if (ans == data[index].answer) {\n            setScore(score + 1);\n        }\n        const radio = document.querySelectorAll(\".radio\");\n        radio.forEach((e, i)=>{\n            if (e.checked) {\n                e.checked = false;\n            }\n        });\n    };\n    const handelChange = (e)=>{\n        setAns(e.target.value);\n    };\n    const darkMode = ()=>{\n        if (localStorage.getItem(\"color-theme\") === \"dark\" || !(\"color-theme\" in localStorage) && window.matchMedia(\"(prefers-color-scheme: dark)\").matches) {\n            document.documentElement.classList.add(\"dark\");\n        } else {\n            document.documentElement.classList.remove(\"dark\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            \"div.\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"bg-gray-700 dark:bg-gray-700 flex justify-between \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"max-w-screen-xl px-4 py-3  \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex \",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm justify-start\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"#\",\n                                            className: \"text-white-900 dark:text-white hover:underline\",\n                                            \"aria-current\": \"page\",\n                                            children: \"Home\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                            lineNumber: 124,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                        lineNumber: 123,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"#\",\n                                            className: \"text-gray-900 dark:text-white hover:underline\",\n                                            children: \"Company\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                            lineNumber: 133,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                        lineNumber: 132,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"#\",\n                                            className: \"text-gray-900 dark:text-white hover:underline\",\n                                            children: \"Team\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                            lineNumber: 141,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                        lineNumber: 140,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"#\",\n                                            className: \"text-gray-900 dark:text-white hover:underline\",\n                                            children: \"Features\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                            lineNumber: 149,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                        lineNumber: 148,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                lineNumber: 122,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                            lineNumber: 121,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                        lineNumber: 120,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: \"DarkMode\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                            lineNumber: 160,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                        lineNumber: 159,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mr-auto align-middle p-5 border-x-sky-950 border-4 border-solid  \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"font-extrabold text-5xl mb-5 shadow-sm shadow-gray-50  font-noto\",\n                            children: data[index].question\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                            lineNumber: 165,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                        lineNumber: 164,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: data[index].options && data[index].options.map((e, i)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"p-3 bg-gray-600 text-white mb-3 last:mb-0 rounded-md flex justify-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"radio\",\n                                        className: \"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600   dark:bg-gray-700 dark:border-gray-600\",\n                                        value: e,\n                                        id: i,\n                                        name: \"radioButton\",\n                                        onChange: handelChange\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                        lineNumber: 177,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"w-full  ml-2 text-sm font-medium text-gray-900 dark:text-gray-300\",\n                                        htmlFor: i,\n                                        children: e\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                        lineNumber: 185,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, i, true, {\n                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                lineNumber: 173,\n                                columnNumber: 17\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                        lineNumber: 169,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                lineNumber: 163,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-around float-right absolute bottom-0 right-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700\",\n                    onClick: generateRandomNumber,\n                    disabled: flag,\n                    children: \"Next\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                    lineNumber: 197,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                lineNumber: 196,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"fo7GllIY9UMEvaQZt3RMkB5xtvU=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzJDLEdBQUcsQ0FBQyxDQUFDMUIsR0FBUUMsSUFBVzs0QkFDMUMscUJBQ0UsOERBQUNpQjtnQ0FFQ0QsV0FBVTs7a0RBRVYsOERBQUNVO3dDQUNDQyxNQUFLO3dDQUNMWCxXQUFVO3dDQUNWWixPQUFPTDt3Q0FDUDZCLElBQUk1Qjt3Q0FDSjZCLE1BQUs7d0NBQ0xDLFVBQVU1Qjs7Ozs7O2tEQUVaLDhEQUFDNkI7d0NBQ0NmLFdBQVU7d0NBQ1ZnQixTQUFTaEM7a0RBRVJEOzs7Ozs7OytCQWZFQzs7Ozs7d0JBbUJYOzs7Ozs7Ozs7Ozs7MEJBR04sOERBQUNpQjtnQkFBSUQsV0FBVTswQkFDYiw0RUFBQ087b0JBQ0NQLFdBQVk7b0JBQ1ppQixTQUFTakQ7b0JBQ1RrRCxVQUFVNUQ7OEJBQ1g7Ozs7Ozs7Ozs7Ozs7QUFNVCxDQUFDO0dBNU11Qkw7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3Bhd24gfSBmcm9tIFwiY2hpbGRfcHJvY2Vzc1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgLy8gY29uc3QgW2Fuc3dlciwgc2V0QW5zd2VyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3Njb3JlLCBzZXRTY29yZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2ZsYWcsIHNldEZsYWddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbYW5zLCBzZXRBbnNdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtnZW5lcmF0ZWROdW1iZXJzLCBzZXRHZW5lcmF0ZWROdW1iZXJzXSA9IHVzZVN0YXRlPGFueT4oW10pO1xuXG4gIGNvbnN0IGRhdGEgPSBbXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyB0aGUgY2FwaXRhbCBvZiBGcmFuY2U/XCIsXG4gICAgICBvcHRpb25zOiBbXCJMb25kb25cIiwgXCJQYXJpc1wiLCBcIkJlcmxpblwiLCBcIk1hZHJpZFwiXSxcbiAgICAgIGFuc3dlcjogXCJQYXJpc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hvIHBhaW50ZWQgdGhlIE1vbmEgTGlzYT9cIixcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgXCJWaW5jZW50IHZhbiBHb2doXCIsXG4gICAgICAgIFwiTGVvbmFyZG8gZGEgVmluY2lcIixcbiAgICAgICAgXCJQYWJsbyBQaWNhc3NvXCIsXG4gICAgICAgIFwiTWljaGVsYW5nZWxvXCIsXG4gICAgICBdLFxuICAgICAgYW5zd2VyOiBcIkxlb25hcmRvIGRhIFZpbmNpXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaGF0IGlzIHRoZSBsYXJnZXN0IG1hbW1hbCBpbiB0aGUgd29ybGQ/XCIsXG4gICAgICBvcHRpb25zOiBbXCJFbGVwaGFudFwiLCBcIkJsdWUgV2hhbGVcIiwgXCJHaXJhZmZlXCIsIFwiSGlwcG9wb3RhbXVzXCJdLFxuICAgICAgYW5zd2VyOiBcIkJsdWUgV2hhbGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgaXMgdGhlIGN1cnJlbmN5IG9mIEphcGFuP1wiLFxuICAgICAgb3B0aW9uczogW1wiRG9sbGFyXCIsIFwiRXVyb1wiLCBcIlllblwiLCBcIlBvdW5kXCJdLFxuICAgICAgYW5zd2VyOiBcIlllblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyB0aGUgdGFsbGVzdCBtb3VudGFpbiBpbiB0aGUgd29ybGQ/XCIsXG4gICAgICBvcHRpb25zOiBbXCJNb3VudCBFdmVyZXN0XCIsIFwiSzJcIiwgXCJLaWxpbWFuamFyb1wiLCBcIkRlbmFsaVwiXSxcbiAgICAgIGFuc3dlcjogXCJNb3VudCBFdmVyZXN0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaGF0IGlzIHRoZSBsYXJnZXN0IGNvdW50cnkgaW4gdGhlIHdvcmxkIGJ5IGxhbmQgYXJlYT9cIixcbiAgICAgIG9wdGlvbnM6IFtcIkNhbmFkYVwiLCBcIlJ1c3NpYVwiLCBcIkNoaW5hXCIsIFwiVW5pdGVkIFN0YXRlc1wiXSxcbiAgICAgIGFuc3dlcjogXCJSdXNzaWFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgaXMgdGhlIGNoZW1pY2FsIHN5bWJvbCBmb3IgZ29sZD9cIixcbiAgICAgIG9wdGlvbnM6IFtcIkdvXCIsIFwiQXVcIiwgXCJHZFwiLCBcIkFnXCJdLFxuICAgICAgYW5zd2VyOiBcIkF1XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaGF0IGlzIHRoZSBzbWFsbGVzdCBwbGFuZXQgaW4gb3VyIHNvbGFyIHN5c3RlbT9cIixcbiAgICAgIG9wdGlvbnM6IFtcIlZlbnVzXCIsIFwiTWFyc1wiLCBcIk1lcmN1cnlcIiwgXCJFYXJ0aFwiXSxcbiAgICAgIGFuc3dlcjogXCJNZXJjdXJ5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaGF0IGlzIHRoZSBsYXJnZXN0IHBsYW5ldCBpbiBvdXIgc29sYXIgc3lzdGVtP1wiLFxuICAgICAgb3B0aW9uczogW1wiSnVwaXRlclwiLCBcIlNhdHVyblwiLCBcIk5lcHR1bmVcIiwgXCJVcmFudXNcIl0sXG4gICAgICBhbnN3ZXI6IFwiSnVwaXRlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyB0aGUgbmFtZSBvZiB0aGUgZmlyc3QgbWFuIHRvIHdhbGsgb24gdGhlIG1vb24/XCIsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgIFwiQnV6eiBBbGRyaW5cIixcbiAgICAgICAgXCJOZWlsIEFybXN0cm9uZ1wiLFxuICAgICAgICBcIll1cmkgR2FnYXJpblwiLFxuICAgICAgICBcIkFsYW4gU2hlcGFyZFwiLFxuICAgICAgXSxcbiAgICAgIGFuc3dlcjogXCJOZWlsIEFybXN0cm9uZ1wiLFxuICAgIH0sXG4gIF07XG4gIGNvbnN0IGdlbmVyYXRlUmFuZG9tTnVtYmVyID0gKCkgPT4ge1xuICAgIGlmIChnZW5lcmF0ZWROdW1iZXJzLmxlbmd0aCArIDEgPT09IGRhdGEubGVuZ3RoKSB7XG4gICAgICBhbGVydChgRXhhbSBDb21wbGV0ZWQgWW91ciBTY29yZSBpcyAke3Njb3JlfSBvdXQgb2YgJHtkYXRhLmxlbmd0aCAtIDF9YCk7XG4gICAgICBzZXRGbGFnKHRydWUpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IHJhbmRvbU51bWJlcjogYW55O1xuICAgIGRvIHtcbiAgICAgIHJhbmRvbU51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICB9IHdoaWxlIChnZW5lcmF0ZWROdW1iZXJzLmluY2x1ZGVzKHJhbmRvbU51bWJlcikpO1xuXG4gICAgc2V0R2VuZXJhdGVkTnVtYmVycyhbLi4uZ2VuZXJhdGVkTnVtYmVycywgcmFuZG9tTnVtYmVyXSk7XG4gICAgY29uc29sZS5sb2coZ2VuZXJhdGVkTnVtYmVycyk7XG4gICAgc2V0SW5kZXgocmFuZG9tTnVtYmVyKTtcbiAgICBpbmNyZXNlU2NvcmUoKTtcbiAgfTtcbiAgY29uc3QgaW5jcmVzZVNjb3JlID0gKCkgPT4ge1xuICAgIGlmIChhbnMgPT0gZGF0YVtpbmRleF0uYW5zd2VyKSB7XG4gICAgICBzZXRTY29yZShzY29yZSArIDEpO1xuICAgIH1cbiAgICBjb25zdCByYWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmFkaW9cIik7XG4gICAgcmFkaW8uZm9yRWFjaCgoZTogYW55LCBpOiBhbnkpID0+IHtcbiAgICAgIGlmIChlLmNoZWNrZWQpIHtcbiAgICAgICAgZS5jaGVja2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IGhhbmRlbENoYW5nZSA9IChlOiBhbnkpID0+IHtcbiAgICBzZXRBbnMoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuICBjb25zdCBkYXJrTW9kZSA9ICgpID0+IHtcbiAgICBpZiAoXG4gICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvbG9yLXRoZW1lXCIpID09PSBcImRhcmtcIiB8fFxuICAgICAgKCEoXCJjb2xvci10aGVtZVwiIGluIGxvY2FsU3RvcmFnZSkgJiZcbiAgICAgICAgd2luZG93Lm1hdGNoTWVkaWEoXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCIpLm1hdGNoZXMpXG4gICAgKSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRhcmtcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZGFya1wiKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgZGl2LlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJiZy1ncmF5LTcwMCBkYXJrOmJnLWdyYXktNzAwIGZsZXgganVzdGlmeS1iZXR3ZWVuIFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LXNjcmVlbi14bCBweC00IHB5LTMgIFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGZvbnQtbWVkaXVtIG10LTAgbXItNiBzcGFjZS14LTggdGV4dC1zbSBqdXN0aWZ5LXN0YXJ0XCI+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZS05MDAgZGFyazp0ZXh0LXdoaXRlIGhvdmVyOnVuZGVybGluZVwiXG4gICAgICAgICAgICAgICAgICBhcmlhLWN1cnJlbnQ9XCJwYWdlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlIGhvdmVyOnVuZGVybGluZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgQ29tcGFueVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC13aGl0ZSBob3Zlcjp1bmRlcmxpbmVcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFRlYW1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtd2hpdGUgaG92ZXI6dW5kZXJsaW5lXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBGZWF0dXJlc1xuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgZm9udC1tZWRpdW0gbXQtMCBtci02IHNwYWNlLXgtOCB0ZXh0LXNtXCI+XG4gICAgICAgICAgPGJ1dHRvbj5EYXJrTW9kZTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvIGFsaWduLW1pZGRsZSBwLTUgYm9yZGVyLXgtc2t5LTk1MCBib3JkZXItNCBib3JkZXItc29saWQgIFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWV4dHJhYm9sZCB0ZXh0LTV4bCBtYi01IHNoYWRvdy1zbVx0c2hhZG93LWdyYXktNTAgXHRmb250LW5vdG9cIj5cbiAgICAgICAgICAgIHtkYXRhW2luZGV4XS5xdWVzdGlvbn1cbiAgICAgICAgICA8L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7ZGF0YVtpbmRleF0ub3B0aW9ucyAmJlxuICAgICAgICAgICAgZGF0YVtpbmRleF0ub3B0aW9ucy5tYXAoKGU6IGFueSwgaTogYW55KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0zIGJnLWdyYXktNjAwIHRleHQtd2hpdGUgbWItMyBsYXN0Om1iLTAgcm91bmRlZC1tZCBmbGV4IGp1c3RpZnktY2VudGVyXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LWJsdWUtNjAwIGJnLWdyYXktMTAwIGJvcmRlci1ncmF5LTMwMCBmb2N1czpyaW5nLWJsdWUtNTAwIGRhcms6Zm9jdXM6cmluZy1ibHVlLTYwMCAgIGRhcms6YmctZ3JheS03MDAgZGFyazpib3JkZXItZ3JheS02MDBcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9e2l9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyYWRpb0J1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kZWxDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCAgbWwtMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LWdyYXktMzAwXCJcbiAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj17aX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2V9XG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1hcm91bmQgZmxvYXQtcmlnaHQgYWJzb2x1dGUgYm90dG9tLTAgcmlnaHQtMFwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC13aGl0ZSBiZy1ncmF5LTgwMCBob3ZlcjpiZy1ncmF5LTkwMCBmb2N1czpyaW5nLWdyYXktMzAwIGZvbnQtbWVkaXVtIHJvdW5kZWQtbGcgdGV4dC1zbSBweC01IHB5LTIuNSBtci0yIG1iLTIgZGFyazpiZy1ncmF5LTgwMCBkYXJrOmhvdmVyOmJnLWdyYXktNzAwIGRhcms6Zm9jdXM6cmluZy1ncmF5LTcwMCBkYXJrOmJvcmRlci1ncmF5LTcwMGB9XG4gICAgICAgICAgb25DbGljaz17Z2VuZXJhdGVSYW5kb21OdW1iZXJ9XG4gICAgICAgICAgZGlzYWJsZWQ9e2ZsYWd9XG4gICAgICAgID5cbiAgICAgICAgICBOZXh0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJIb21lIiwiaW5kZXgiLCJzZXRJbmRleCIsInNjb3JlIiwic2V0U2NvcmUiLCJmbGFnIiwic2V0RmxhZyIsImFucyIsInNldEFucyIsImdlbmVyYXRlZE51bWJlcnMiLCJzZXRHZW5lcmF0ZWROdW1iZXJzIiwiZGF0YSIsInF1ZXN0aW9uIiwib3B0aW9ucyIsImFuc3dlciIsImdlbmVyYXRlUmFuZG9tTnVtYmVyIiwibGVuZ3RoIiwiYWxlcnQiLCJyYW5kb21OdW1iZXIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJpbmNsdWRlcyIsImNvbnNvbGUiLCJsb2ciLCJpbmNyZXNlU2NvcmUiLCJyYWRpbyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlIiwiaSIsImNoZWNrZWQiLCJoYW5kZWxDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRhcmtNb2RlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwibmF2IiwiY2xhc3NOYW1lIiwiZGl2IiwidWwiLCJsaSIsImEiLCJocmVmIiwiYXJpYS1jdXJyZW50IiwiYnV0dG9uIiwiaDEiLCJtYXAiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm5hbWUiLCJvbkNoYW5nZSIsImxhYmVsIiwiaHRtbEZvciIsIm9uQ2xpY2siLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});