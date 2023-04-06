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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    // const [answer, setAnswer] = useState(false);\n    const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [flag, setFlag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [ans, setAns] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [generatedNumbers, setGeneratedNumbers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const data = [\n        {\n            question: \"What is the capital of France?\",\n            options: [\n                \"London\",\n                \"Paris\",\n                \"Berlin\",\n                \"Madrid\"\n            ],\n            answer: \"Paris\"\n        },\n        {\n            question: \"Who painted the Mona Lisa?\",\n            options: [\n                \"Vincent van Gogh\",\n                \"Leonardo da Vinci\",\n                \"Pablo Picasso\",\n                \"Michelangelo\"\n            ],\n            answer: \"Leonardo da Vinci\"\n        },\n        {\n            question: \"What is the largest mammal in the world?\",\n            options: [\n                \"Elephant\",\n                \"Blue Whale\",\n                \"Giraffe\",\n                \"Hippopotamus\"\n            ],\n            answer: \"Blue Whale\"\n        },\n        {\n            question: \"What is the currency of Japan?\",\n            options: [\n                \"Dollar\",\n                \"Euro\",\n                \"Yen\",\n                \"Pound\"\n            ],\n            answer: \"Yen\"\n        },\n        {\n            question: \"What is the tallest mountain in the world?\",\n            options: [\n                \"Mount Everest\",\n                \"K2\",\n                \"Kilimanjaro\",\n                \"Denali\"\n            ],\n            answer: \"Mount Everest\"\n        },\n        {\n            question: \"What is the largest country in the world by land area?\",\n            options: [\n                \"Canada\",\n                \"Russia\",\n                \"China\",\n                \"United States\"\n            ],\n            answer: \"Russia\"\n        },\n        {\n            question: \"What is the chemical symbol for gold?\",\n            options: [\n                \"Go\",\n                \"Au\",\n                \"Gd\",\n                \"Ag\"\n            ],\n            answer: \"Au\"\n        },\n        {\n            question: \"What is the smallest planet in our solar system?\",\n            options: [\n                \"Venus\",\n                \"Mars\",\n                \"Mercury\",\n                \"Earth\"\n            ],\n            answer: \"Mercury\"\n        },\n        {\n            question: \"What is the largest planet in our solar system?\",\n            options: [\n                \"Jupiter\",\n                \"Saturn\",\n                \"Neptune\",\n                \"Uranus\"\n            ],\n            answer: \"Jupiter\"\n        },\n        {\n            question: \"What is the name of the first man to walk on the moon?\",\n            options: [\n                \"Buzz Aldrin\",\n                \"Neil Armstrong\",\n                \"Yuri Gagarin\",\n                \"Alan Shepard\"\n            ],\n            answer: \"Neil Armstrong\"\n        }\n    ];\n    const generateRandomNumber = ()=>{\n        if (generatedNumbers.length + 1 === data.length) {\n            alert(\"Exam Completed Your Score is \".concat(score, \" out of \").concat(data.length - 1));\n            setFlag(true);\n            return null;\n        }\n        let randomNumber;\n        do {\n            randomNumber = Math.floor(Math.random() * 10);\n        }while (generatedNumbers.includes(randomNumber));\n        setGeneratedNumbers([\n            ...generatedNumbers,\n            randomNumber\n        ]);\n        console.log(generatedNumbers);\n        setIndex(randomNumber);\n        increseScore();\n    };\n    const increseScore = ()=>{\n        if (ans == data[index].answer) {\n            setScore(score + 1);\n        }\n        const radio = document.querySelectorAll(\".radio\");\n        radio.forEach((e, i)=>{\n            if (e.checked) {\n                e.checked = false;\n            }\n        });\n    };\n    const handelChange = (e)=>{\n        setAns(e.target.value);\n    };\n    const darkMode = ()=>{\n        if (localStorage.getItem(\"color-theme\") === \"dark\" || !(\"color-theme\" in localStorage) && window.matchMedia(\"(prefers-color-scheme: dark)\").matches) {\n            document.documentElement.classList.add(\"dark\");\n        } else {\n            document.documentElement.classList.remove(\"dark\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"bg-gray-50 dark:bg-gray-700 flex justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"max-w-screen-xl px-4 py-3  \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex \",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm justify-start\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"#\",\n                                            className: \"text-gray-900 dark:text-white hover:underline\",\n                                            \"aria-current\": \"page\",\n                                            children: \"Home\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                            lineNumber: 119,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                        lineNumber: 118,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"#\",\n                                            className: \"text-gray-900 dark:text-white hover:underline\",\n                                            children: \"Company\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                            lineNumber: 128,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                        lineNumber: 127,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"#\",\n                                            className: \"text-gray-900 dark:text-white hover:underline\",\n                                            children: \"Team\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                            lineNumber: 136,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                        lineNumber: 135,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"#\",\n                                            className: \"text-gray-900 dark:text-white hover:underline\",\n                                            children: \"Features\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                            lineNumber: 144,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                        lineNumber: 143,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                lineNumber: 117,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: \"DarkMode\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                            lineNumber: 155,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                        lineNumber: 154,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mr-auto align-middle p-5 border-x-sky-950 border-4 border-solid  \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"font-extrabold text-5xl mb-5 shadow-sm shadow-gray-50  font-noto\",\n                            children: data[index].question\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                            lineNumber: 160,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                        lineNumber: 159,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: data[index].options && data[index].options.map((e, i)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"p-3 bg-gray-600 text-white mb-3 last:mb-0 rounded-md flex justify-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"radio\",\n                                        className: \"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600   dark:bg-gray-700 dark:border-gray-600\",\n                                        value: e,\n                                        id: i,\n                                        name: \"radioButton\",\n                                        onChange: handelChange\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                        lineNumber: 172,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"w-full  ml-2 text-sm font-medium text-gray-900 dark:text-gray-300\",\n                                        htmlFor: i,\n                                        children: e\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                        lineNumber: 180,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, i, true, {\n                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                lineNumber: 168,\n                                columnNumber: 17\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                        lineNumber: 164,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                lineNumber: 158,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-around float-right absolute bottom-0 right-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700\",\n                    onClick: generateRandomNumber,\n                    disabled: flag,\n                    children: \"Next\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                    lineNumber: 192,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                lineNumber: 191,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"fo7GllIY9UMEvaQZt3RMkB5xtvU=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RyxDQUFDLENBQUMxQixHQUFRQyxJQUFXOzRCQUMxQyxxQkFDRSw4REFBQ2lCO2dDQUVDRCxXQUFVOztrREFFViw4REFBQ1U7d0NBQ0NDLE1BQUs7d0NBQ0xYLFdBQVU7d0NBQ1ZaLE9BQU9MO3dDQUNQNkIsSUFBSTVCO3dDQUNKNkIsTUFBSzt3Q0FDTEMsVUFBVTVCOzs7Ozs7a0RBRVosOERBQUM2Qjt3Q0FDQ2YsV0FBVTt3Q0FDVmdCLFNBQVNoQztrREFFUkQ7Ozs7Ozs7K0JBZkVDOzs7Ozt3QkFtQlg7Ozs7Ozs7Ozs7OzswQkFHTiw4REFBQ2lCO2dCQUFJRCxXQUFVOzBCQUNiLDRFQUFDTztvQkFDQ1AsV0FBWTtvQkFDWmlCLFNBQVNqRDtvQkFDVGtELFVBQVU1RDs4QkFDWDs7Ozs7Ozs7Ozs7OztBQU1ULENBQUM7R0F2TXVCTDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzcGF3biB9IGZyb20gXCJjaGlsZF9wcm9jZXNzXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAvLyBjb25zdCBbYW5zd2VyLCBzZXRBbnN3ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc2NvcmUsIHNldFNjb3JlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbZmxhZywgc2V0RmxhZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFthbnMsIHNldEFuc10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2dlbmVyYXRlZE51bWJlcnMsIHNldEdlbmVyYXRlZE51bWJlcnNdID0gdXNlU3RhdGU8YW55PihbXSk7XG5cbiAgY29uc3QgZGF0YSA9IFtcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaGF0IGlzIHRoZSBjYXBpdGFsIG9mIEZyYW5jZT9cIixcbiAgICAgIG9wdGlvbnM6IFtcIkxvbmRvblwiLCBcIlBhcmlzXCIsIFwiQmVybGluXCIsIFwiTWFkcmlkXCJdLFxuICAgICAgYW5zd2VyOiBcIlBhcmlzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaG8gcGFpbnRlZCB0aGUgTW9uYSBMaXNhP1wiLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICBcIlZpbmNlbnQgdmFuIEdvZ2hcIixcbiAgICAgICAgXCJMZW9uYXJkbyBkYSBWaW5jaVwiLFxuICAgICAgICBcIlBhYmxvIFBpY2Fzc29cIixcbiAgICAgICAgXCJNaWNoZWxhbmdlbG9cIixcbiAgICAgIF0sXG4gICAgICBhbnN3ZXI6IFwiTGVvbmFyZG8gZGEgVmluY2lcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgaXMgdGhlIGxhcmdlc3QgbWFtbWFsIGluIHRoZSB3b3JsZD9cIixcbiAgICAgIG9wdGlvbnM6IFtcIkVsZXBoYW50XCIsIFwiQmx1ZSBXaGFsZVwiLCBcIkdpcmFmZmVcIiwgXCJIaXBwb3BvdGFtdXNcIl0sXG4gICAgICBhbnN3ZXI6IFwiQmx1ZSBXaGFsZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyB0aGUgY3VycmVuY3kgb2YgSmFwYW4/XCIsXG4gICAgICBvcHRpb25zOiBbXCJEb2xsYXJcIiwgXCJFdXJvXCIsIFwiWWVuXCIsIFwiUG91bmRcIl0sXG4gICAgICBhbnN3ZXI6IFwiWWVuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaGF0IGlzIHRoZSB0YWxsZXN0IG1vdW50YWluIGluIHRoZSB3b3JsZD9cIixcbiAgICAgIG9wdGlvbnM6IFtcIk1vdW50IEV2ZXJlc3RcIiwgXCJLMlwiLCBcIktpbGltYW5qYXJvXCIsIFwiRGVuYWxpXCJdLFxuICAgICAgYW5zd2VyOiBcIk1vdW50IEV2ZXJlc3RcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgaXMgdGhlIGxhcmdlc3QgY291bnRyeSBpbiB0aGUgd29ybGQgYnkgbGFuZCBhcmVhP1wiLFxuICAgICAgb3B0aW9uczogW1wiQ2FuYWRhXCIsIFwiUnVzc2lhXCIsIFwiQ2hpbmFcIiwgXCJVbml0ZWQgU3RhdGVzXCJdLFxuICAgICAgYW5zd2VyOiBcIlJ1c3NpYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyB0aGUgY2hlbWljYWwgc3ltYm9sIGZvciBnb2xkP1wiLFxuICAgICAgb3B0aW9uczogW1wiR29cIiwgXCJBdVwiLCBcIkdkXCIsIFwiQWdcIl0sXG4gICAgICBhbnN3ZXI6IFwiQXVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgaXMgdGhlIHNtYWxsZXN0IHBsYW5ldCBpbiBvdXIgc29sYXIgc3lzdGVtP1wiLFxuICAgICAgb3B0aW9uczogW1wiVmVudXNcIiwgXCJNYXJzXCIsIFwiTWVyY3VyeVwiLCBcIkVhcnRoXCJdLFxuICAgICAgYW5zd2VyOiBcIk1lcmN1cnlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgaXMgdGhlIGxhcmdlc3QgcGxhbmV0IGluIG91ciBzb2xhciBzeXN0ZW0/XCIsXG4gICAgICBvcHRpb25zOiBbXCJKdXBpdGVyXCIsIFwiU2F0dXJuXCIsIFwiTmVwdHVuZVwiLCBcIlVyYW51c1wiXSxcbiAgICAgIGFuc3dlcjogXCJKdXBpdGVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaGF0IGlzIHRoZSBuYW1lIG9mIHRoZSBmaXJzdCBtYW4gdG8gd2FsayBvbiB0aGUgbW9vbj9cIixcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgXCJCdXp6IEFsZHJpblwiLFxuICAgICAgICBcIk5laWwgQXJtc3Ryb25nXCIsXG4gICAgICAgIFwiWXVyaSBHYWdhcmluXCIsXG4gICAgICAgIFwiQWxhbiBTaGVwYXJkXCIsXG4gICAgICBdLFxuICAgICAgYW5zd2VyOiBcIk5laWwgQXJtc3Ryb25nXCIsXG4gICAgfSxcbiAgXTtcbiAgY29uc3QgZ2VuZXJhdGVSYW5kb21OdW1iZXIgPSAoKSA9PiB7XG4gICAgaWYgKGdlbmVyYXRlZE51bWJlcnMubGVuZ3RoICsgMSA9PT0gZGF0YS5sZW5ndGgpIHtcbiAgICAgIGFsZXJ0KGBFeGFtIENvbXBsZXRlZCBZb3VyIFNjb3JlIGlzICR7c2NvcmV9IG91dCBvZiAke2RhdGEubGVuZ3RoIC0gMX1gKTtcbiAgICAgIHNldEZsYWcodHJ1ZSk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBsZXQgcmFuZG9tTnVtYmVyOiBhbnk7XG4gICAgZG8ge1xuICAgICAgcmFuZG9tTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIH0gd2hpbGUgKGdlbmVyYXRlZE51bWJlcnMuaW5jbHVkZXMocmFuZG9tTnVtYmVyKSk7XG5cbiAgICBzZXRHZW5lcmF0ZWROdW1iZXJzKFsuLi5nZW5lcmF0ZWROdW1iZXJzLCByYW5kb21OdW1iZXJdKTtcbiAgICBjb25zb2xlLmxvZyhnZW5lcmF0ZWROdW1iZXJzKTtcbiAgICBzZXRJbmRleChyYW5kb21OdW1iZXIpO1xuICAgIGluY3Jlc2VTY29yZSgpO1xuICB9O1xuICBjb25zdCBpbmNyZXNlU2NvcmUgPSAoKSA9PiB7XG4gICAgaWYgKGFucyA9PSBkYXRhW2luZGV4XS5hbnN3ZXIpIHtcbiAgICAgIHNldFNjb3JlKHNjb3JlICsgMSk7XG4gICAgfVxuICAgIGNvbnN0IHJhZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yYWRpb1wiKTtcbiAgICByYWRpby5mb3JFYWNoKChlOiBhbnksIGk6IGFueSkgPT4ge1xuICAgICAgaWYgKGUuY2hlY2tlZCkge1xuICAgICAgICBlLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgaGFuZGVsQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgIHNldEFucyhlLnRhcmdldC52YWx1ZSk7XG4gIH07XG4gIGNvbnN0IGRhcmtNb2RlID0gKCk9PntcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvbG9yLXRoZW1lJykgPT09ICdkYXJrJyB8fCAoISgnY29sb3ItdGhlbWUnIGluIGxvY2FsU3RvcmFnZSkgJiYgd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKS5tYXRjaGVzKSkge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RhcmsnKTtcbiAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrJylcbiAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJiZy1ncmF5LTUwIGRhcms6YmctZ3JheS03MDAgZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1zY3JlZW4teGwgcHgtNCBweS0zICBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggXCI+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBmb250LW1lZGl1bSBtdC0wIG1yLTYgc3BhY2UteC04IHRleHQtc20ganVzdGlmeS1zdGFydFwiPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlIGhvdmVyOnVuZGVybGluZVwiXG4gICAgICAgICAgICAgICAgICBhcmlhLWN1cnJlbnQ9XCJwYWdlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlIGhvdmVyOnVuZGVybGluZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgQ29tcGFueVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC13aGl0ZSBob3Zlcjp1bmRlcmxpbmVcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFRlYW1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtd2hpdGUgaG92ZXI6dW5kZXJsaW5lXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBGZWF0dXJlc1xuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgZm9udC1tZWRpdW0gbXQtMCBtci02IHNwYWNlLXgtOCB0ZXh0LXNtIFwiPlxuICAgICAgICAgIDxidXR0b24+RGFya01vZGU8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0byBhbGlnbi1taWRkbGUgcC01IGJvcmRlci14LXNreS05NTAgYm9yZGVyLTQgYm9yZGVyLXNvbGlkICBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1leHRyYWJvbGQgdGV4dC01eGwgbWItNSBzaGFkb3ctc21cdHNoYWRvdy1ncmF5LTUwIFx0Zm9udC1ub3RvXCI+XG4gICAgICAgICAgICB7ZGF0YVtpbmRleF0ucXVlc3Rpb259XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge2RhdGFbaW5kZXhdLm9wdGlvbnMgJiZcbiAgICAgICAgICAgIGRhdGFbaW5kZXhdLm9wdGlvbnMubWFwKChlOiBhbnksIGk6IGFueSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMyBiZy1ncmF5LTYwMCB0ZXh0LXdoaXRlIG1iLTMgbGFzdDptYi0wIHJvdW5kZWQtbWQgZmxleCBqdXN0aWZ5LWNlbnRlclwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1ibHVlLTYwMCBiZy1ncmF5LTEwMCBib3JkZXItZ3JheS0zMDAgZm9jdXM6cmluZy1ibHVlLTUwMCBkYXJrOmZvY3VzOnJpbmctYmx1ZS02MDAgICBkYXJrOmJnLWdyYXktNzAwIGRhcms6Ym9yZGVyLWdyYXktNjAwXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2V9XG4gICAgICAgICAgICAgICAgICAgIGlkPXtpfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmFkaW9CdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGVsQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgIG1sLTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC1ncmF5LTMwMFwiXG4gICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9e2l9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtlfVxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYXJvdW5kIGZsb2F0LXJpZ2h0IGFic29sdXRlIGJvdHRvbS0wIHJpZ2h0LTBcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtd2hpdGUgYmctZ3JheS04MDAgaG92ZXI6YmctZ3JheS05MDAgZm9jdXM6cmluZy1ncmF5LTMwMCBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRleHQtc20gcHgtNSBweS0yLjUgbXItMiBtYi0yIGRhcms6YmctZ3JheS04MDAgZGFyazpob3ZlcjpiZy1ncmF5LTcwMCBkYXJrOmZvY3VzOnJpbmctZ3JheS03MDAgZGFyazpib3JkZXItZ3JheS03MDBgfVxuICAgICAgICAgIG9uQ2xpY2s9e2dlbmVyYXRlUmFuZG9tTnVtYmVyfVxuICAgICAgICAgIGRpc2FibGVkPXtmbGFnfVxuICAgICAgICA+XG4gICAgICAgICAgTmV4dFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSG9tZSIsImluZGV4Iiwic2V0SW5kZXgiLCJzY29yZSIsInNldFNjb3JlIiwiZmxhZyIsInNldEZsYWciLCJhbnMiLCJzZXRBbnMiLCJnZW5lcmF0ZWROdW1iZXJzIiwic2V0R2VuZXJhdGVkTnVtYmVycyIsImRhdGEiLCJxdWVzdGlvbiIsIm9wdGlvbnMiLCJhbnN3ZXIiLCJnZW5lcmF0ZVJhbmRvbU51bWJlciIsImxlbmd0aCIsImFsZXJ0IiwicmFuZG9tTnVtYmVyIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiaW5jbHVkZXMiLCJjb25zb2xlIiwibG9nIiwiaW5jcmVzZVNjb3JlIiwicmFkaW8iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZSIsImkiLCJjaGVja2VkIiwiaGFuZGVsQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJkYXJrTW9kZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImRvY3VtZW50RWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIm5hdiIsImNsYXNzTmFtZSIsImRpdiIsInVsIiwibGkiLCJhIiwiaHJlZiIsImFyaWEtY3VycmVudCIsImJ1dHRvbiIsImgxIiwibWFwIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJuYW1lIiwib25DaGFuZ2UiLCJsYWJlbCIsImh0bWxGb3IiLCJvbkNsaWNrIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});