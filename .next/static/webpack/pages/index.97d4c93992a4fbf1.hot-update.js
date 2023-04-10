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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/context */ \"./context/context.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [flag, setFlag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [ans, setAns] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [generatedNumbers, setGeneratedNumbers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // const [dark, setDark] = useState(false);\n    const { dark , setDark  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_2__.themes);\n    const data = [\n        {\n            question: \"What is the capital of France?\",\n            options: [\n                \"London\",\n                \"Paris\",\n                \"Berlin\",\n                \"Madrid\"\n            ],\n            answer: \"Paris\"\n        },\n        {\n            question: \"Who painted the Mona Lisa?\",\n            options: [\n                \"Vincent van Gogh\",\n                \"Leonardo da Vinci\",\n                \"Pablo Picasso\",\n                \"Michelangelo\"\n            ],\n            answer: \"Leonardo da Vinci\"\n        },\n        {\n            question: \"What is the largest mammal in the world?\",\n            options: [\n                \"Elephant\",\n                \"Blue Whale\",\n                \"Giraffe\",\n                \"Hippopotamus\"\n            ],\n            answer: \"Blue Whale\"\n        },\n        {\n            question: \"What is the currency of Japan?\",\n            options: [\n                \"Dollar\",\n                \"Euro\",\n                \"Yen\",\n                \"Pound\"\n            ],\n            answer: \"Yen\"\n        },\n        {\n            question: \"What is the tallest mountain in the world?\",\n            options: [\n                \"Mount Everest\",\n                \"K2\",\n                \"Kilimanjaro\",\n                \"Denali\"\n            ],\n            answer: \"Mount Everest\"\n        },\n        {\n            question: \"What is the largest country in the world by land area?\",\n            options: [\n                \"Canada\",\n                \"Russia\",\n                \"China\",\n                \"United States\"\n            ],\n            answer: \"Russia\"\n        },\n        {\n            question: \"What is the chemical symbol for gold?\",\n            options: [\n                \"Go\",\n                \"Au\",\n                \"Gd\",\n                \"Ag\"\n            ],\n            answer: \"Au\"\n        },\n        {\n            question: \"What is the smallest planet in our solar system?\",\n            options: [\n                \"Venus\",\n                \"Mars\",\n                \"Mercury\",\n                \"Earth\"\n            ],\n            answer: \"Mercury\"\n        },\n        {\n            question: \"What is the largest planet in our solar system?\",\n            options: [\n                \"Jupiter\",\n                \"Saturn\",\n                \"Neptune\",\n                \"Uranus\"\n            ],\n            answer: \"Jupiter\"\n        },\n        {\n            question: \"What is the name of the first man to walk on the moon?\",\n            options: [\n                \"Buzz Aldrin\",\n                \"Neil Armstrong\",\n                \"Yuri Gagarin\",\n                \"Alan Shepard\"\n            ],\n            answer: \"Neil Armstrong\"\n        }\n    ];\n    const generateRandomNumber = ()=>{\n        if (generatedNumbers.length + 1 === data.length) {\n            alert(\"Exam Completed Your Score is \".concat(score, \" out of \").concat(data.length - 1));\n            setFlag(true);\n            return null;\n        }\n        let randomNumber;\n        do {\n            randomNumber = Math.floor(Math.random() * 10);\n        }while (generatedNumbers.includes(randomNumber));\n        setGeneratedNumbers([\n            ...generatedNumbers,\n            randomNumber\n        ]);\n        console.log(generatedNumbers);\n        setIndex(randomNumber);\n        increseScore();\n    };\n    const increseScore = ()=>{\n        if (ans == data[index].answer) {\n            setScore(score + 1);\n        }\n        const radio = document.querySelectorAll(\".radio\");\n        radio.forEach((e, i)=>{\n            if (e.checked) {\n                e.checked = false;\n            }\n        });\n    };\n    const handelChange = (e)=>{\n        setAns(e.target.value);\n        const label = document.querySelectorAll(\".label\");\n        label;\n        e.target.classList.add(\"bg-orange-400\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"dark:bg-[#192734] \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-[calc(100vh-44px)] flex items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"m-auto  align-middle p-5 mr border-4 border-solid w-[70%] rounded-lg\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"font-extrabold text-3xl mb-5   font-noto dark:text-white\",\n                                    children: data[index].question\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                    lineNumber: 117,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: data[index].options && data[index].options.map((e, i)=>{\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: i,\n                                            onClick: handelChange,\n                                            className: \"items-center label align-middle bg-gray-600 text-white mb-3 last:mb-0 rounded-md flex justify-center hover:bg-orange-400\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    type: \"radio\",\n                                                    className: \"radio hidden w-4 h-4 p-10 text-gray-600  bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600   dark:bg-gray-700 dark:border-gray-600\",\n                                                    value: e,\n                                                    id: i,\n                                                    name: \"radioButton\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 130,\n                                                    columnNumber: 25\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"check\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 138,\n                                                    columnNumber: 25\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    className: \"p-3 w-full  ml-2 text-sm font-medium text-gray-900 dark:text-gray-300\",\n                                                    htmlFor: i,\n                                                    children: e\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 139,\n                                                    columnNumber: 25\n                                                }, this)\n                                            ]\n                                        }, i, true, {\n                                            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                            lineNumber: 124,\n                                            columnNumber: 23\n                                        }, this);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                    lineNumber: 120,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                        lineNumber: 115,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-around  absolute bottom-0 right-0\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-white dark:text-black dark:focus:ring-gray-700 dark:border-gray-700\",\n                            onClick: generateRandomNumber,\n                            children: \"Next\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                            lineNumber: 152,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                        lineNumber: 151,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                lineNumber: 114,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n            lineNumber: 113,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"Zw04nb+MnnaHkRMAtmMQr5sjnok=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDSCxJQUFXO1FBQy9CeEIsT0FBT3dCLEVBQUVJLE1BQU0sQ0FBQ0MsS0FBSztRQUNyQixNQUFNQyxRQUFRVCxTQUFTQyxnQkFBZ0IsQ0FBQztRQUN4Q1E7UUFDQ04sRUFBRUksTUFBTSxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQztJQUcxQjtJQUVBLHFCQUNFO2tCQUNFLDRFQUFDQztzQkFDQyw0RUFBQ0E7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDQztvQ0FBR0QsV0FBVTs4Q0FDWDdCLElBQUksQ0FBQ1osTUFBTSxDQUFDYSxRQUFROzs7Ozs7OENBRXZCLDhEQUFDMkI7OENBQ0U1QixJQUFJLENBQUNaLE1BQU0sQ0FBQ2MsT0FBTyxJQUNsQkYsSUFBSSxDQUFDWixNQUFNLENBQUNjLE9BQU8sQ0FBQzZCLEdBQUcsQ0FBQyxDQUFDWixHQUFRQyxJQUFXO3dDQUMxQyxxQkFDRSw4REFBQ0s7NENBQ0NPLFNBQVNaOzRDQUVUYSxTQUFTWDs0Q0FDVE8sV0FBVTs7OERBRVYsOERBQUNLO29EQUNDQyxNQUFLO29EQUNMTixXQUFVO29EQUNWTCxPQUFPTDtvREFDUGlCLElBQUloQjtvREFDSmlCLE1BQUs7Ozs7Ozs4REFHUCw4REFBQ1Q7b0RBQUlDLFdBQVU7Ozs7Ozs4REFDZiw4REFBQ0o7b0RBQ0NJLFdBQVU7b0RBQ1ZHLFNBQVNaOzhEQUVSRDs7Ozs7OzsyQ0FqQkVDOzs7OztvQ0FxQlg7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUlSLDhEQUFDUTt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ1M7NEJBQ0NULFdBQVk7NEJBQ1pJLFNBQVM3QjtzQ0FDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRYixDQUFDO0dBaEt1QmpCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHRoZW1lcyB9IGZyb20gXCJAL2NvbnRleHQvY29udGV4dFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3Njb3JlLCBzZXRTY29yZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2ZsYWcsIHNldEZsYWddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbYW5zLCBzZXRBbnNdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtnZW5lcmF0ZWROdW1iZXJzLCBzZXRHZW5lcmF0ZWROdW1iZXJzXSA9IHVzZVN0YXRlPGFueT4oW10pO1xuICAvLyBjb25zdCBbZGFyaywgc2V0RGFya10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHsgZGFyaywgc2V0RGFyayB9ID0gdXNlQ29udGV4dCh0aGVtZXMpO1xuXG4gIGNvbnN0IGRhdGEgPSBbXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyB0aGUgY2FwaXRhbCBvZiBGcmFuY2U/XCIsXG4gICAgICBvcHRpb25zOiBbXCJMb25kb25cIiwgXCJQYXJpc1wiLCBcIkJlcmxpblwiLCBcIk1hZHJpZFwiXSxcbiAgICAgIGFuc3dlcjogXCJQYXJpc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hvIHBhaW50ZWQgdGhlIE1vbmEgTGlzYT9cIixcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgXCJWaW5jZW50IHZhbiBHb2doXCIsXG4gICAgICAgIFwiTGVvbmFyZG8gZGEgVmluY2lcIixcbiAgICAgICAgXCJQYWJsbyBQaWNhc3NvXCIsXG4gICAgICAgIFwiTWljaGVsYW5nZWxvXCIsXG4gICAgICBdLFxuICAgICAgYW5zd2VyOiBcIkxlb25hcmRvIGRhIFZpbmNpXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaGF0IGlzIHRoZSBsYXJnZXN0IG1hbW1hbCBpbiB0aGUgd29ybGQ/XCIsXG4gICAgICBvcHRpb25zOiBbXCJFbGVwaGFudFwiLCBcIkJsdWUgV2hhbGVcIiwgXCJHaXJhZmZlXCIsIFwiSGlwcG9wb3RhbXVzXCJdLFxuICAgICAgYW5zd2VyOiBcIkJsdWUgV2hhbGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgaXMgdGhlIGN1cnJlbmN5IG9mIEphcGFuP1wiLFxuICAgICAgb3B0aW9uczogW1wiRG9sbGFyXCIsIFwiRXVyb1wiLCBcIlllblwiLCBcIlBvdW5kXCJdLFxuICAgICAgYW5zd2VyOiBcIlllblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyB0aGUgdGFsbGVzdCBtb3VudGFpbiBpbiB0aGUgd29ybGQ/XCIsXG4gICAgICBvcHRpb25zOiBbXCJNb3VudCBFdmVyZXN0XCIsIFwiSzJcIiwgXCJLaWxpbWFuamFyb1wiLCBcIkRlbmFsaVwiXSxcbiAgICAgIGFuc3dlcjogXCJNb3VudCBFdmVyZXN0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaGF0IGlzIHRoZSBsYXJnZXN0IGNvdW50cnkgaW4gdGhlIHdvcmxkIGJ5IGxhbmQgYXJlYT9cIixcbiAgICAgIG9wdGlvbnM6IFtcIkNhbmFkYVwiLCBcIlJ1c3NpYVwiLCBcIkNoaW5hXCIsIFwiVW5pdGVkIFN0YXRlc1wiXSxcbiAgICAgIGFuc3dlcjogXCJSdXNzaWFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgaXMgdGhlIGNoZW1pY2FsIHN5bWJvbCBmb3IgZ29sZD9cIixcbiAgICAgIG9wdGlvbnM6IFtcIkdvXCIsIFwiQXVcIiwgXCJHZFwiLCBcIkFnXCJdLFxuICAgICAgYW5zd2VyOiBcIkF1XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaGF0IGlzIHRoZSBzbWFsbGVzdCBwbGFuZXQgaW4gb3VyIHNvbGFyIHN5c3RlbT9cIixcbiAgICAgIG9wdGlvbnM6IFtcIlZlbnVzXCIsIFwiTWFyc1wiLCBcIk1lcmN1cnlcIiwgXCJFYXJ0aFwiXSxcbiAgICAgIGFuc3dlcjogXCJNZXJjdXJ5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaGF0IGlzIHRoZSBsYXJnZXN0IHBsYW5ldCBpbiBvdXIgc29sYXIgc3lzdGVtP1wiLFxuICAgICAgb3B0aW9uczogW1wiSnVwaXRlclwiLCBcIlNhdHVyblwiLCBcIk5lcHR1bmVcIiwgXCJVcmFudXNcIl0sXG4gICAgICBhbnN3ZXI6IFwiSnVwaXRlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyB0aGUgbmFtZSBvZiB0aGUgZmlyc3QgbWFuIHRvIHdhbGsgb24gdGhlIG1vb24/XCIsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgIFwiQnV6eiBBbGRyaW5cIixcbiAgICAgICAgXCJOZWlsIEFybXN0cm9uZ1wiLFxuICAgICAgICBcIll1cmkgR2FnYXJpblwiLFxuICAgICAgICBcIkFsYW4gU2hlcGFyZFwiLFxuICAgICAgXSxcbiAgICAgIGFuc3dlcjogXCJOZWlsIEFybXN0cm9uZ1wiLFxuICAgIH0sXG4gIF07XG4gIGNvbnN0IGdlbmVyYXRlUmFuZG9tTnVtYmVyID0gKCkgPT4ge1xuICAgIGlmIChnZW5lcmF0ZWROdW1iZXJzLmxlbmd0aCArIDEgPT09IGRhdGEubGVuZ3RoKSB7XG4gICAgICBhbGVydChgRXhhbSBDb21wbGV0ZWQgWW91ciBTY29yZSBpcyAke3Njb3JlfSBvdXQgb2YgJHtkYXRhLmxlbmd0aCAtIDF9YCk7XG4gICAgICBzZXRGbGFnKHRydWUpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IHJhbmRvbU51bWJlcjogYW55O1xuICAgIGRvIHtcbiAgICAgIHJhbmRvbU51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICB9IHdoaWxlIChnZW5lcmF0ZWROdW1iZXJzLmluY2x1ZGVzKHJhbmRvbU51bWJlcikpO1xuXG4gICAgc2V0R2VuZXJhdGVkTnVtYmVycyhbLi4uZ2VuZXJhdGVkTnVtYmVycywgcmFuZG9tTnVtYmVyXSk7XG4gICAgY29uc29sZS5sb2coZ2VuZXJhdGVkTnVtYmVycyk7XG4gICAgc2V0SW5kZXgocmFuZG9tTnVtYmVyKTtcbiAgICBpbmNyZXNlU2NvcmUoKTtcbiAgfTtcbiAgY29uc3QgaW5jcmVzZVNjb3JlID0gKCkgPT4ge1xuICAgIGlmIChhbnMgPT0gZGF0YVtpbmRleF0uYW5zd2VyKSB7XG4gICAgICBzZXRTY29yZShzY29yZSArIDEpO1xuICAgIH1cbiAgICBjb25zdCByYWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmFkaW9cIik7XG4gICAgcmFkaW8uZm9yRWFjaCgoZTogYW55LCBpOiBhbnkpID0+IHtcbiAgICAgIGlmIChlLmNoZWNrZWQpIHtcbiAgICAgICAgZS5jaGVja2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IGhhbmRlbENoYW5nZSA9IChlOiBhbnkpID0+IHtcbiAgICBzZXRBbnMoZS50YXJnZXQudmFsdWUpO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sYWJlbFwiKTtcbiAgICBsYWJlbFxuICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYmctb3JhbmdlLTQwMFwiKTtcblxuXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXJrOmJnLVsjMTkyNzM0XSBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtW2NhbGMoMTAwdmgtNDRweCldIGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tYXV0byAgYWxpZ24tbWlkZGxlIHAtNSBtciBib3JkZXItNCBib3JkZXItc29saWQgdy1bNzAlXSByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWV4dHJhYm9sZCB0ZXh0LTN4bCBtYi01IFx0XHRmb250LW5vdG8gZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAge2RhdGFbaW5kZXhdLnF1ZXN0aW9ufVxuICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtkYXRhW2luZGV4XS5vcHRpb25zICYmXG4gICAgICAgICAgICAgICAgICBkYXRhW2luZGV4XS5vcHRpb25zLm1hcCgoZTogYW55LCBpOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kZWxDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpdGVtcy1jZW50ZXIgbGFiZWwgYWxpZ24tbWlkZGxlIGJnLWdyYXktNjAwIHRleHQtd2hpdGUgbWItMyBsYXN0Om1iLTAgcm91bmRlZC1tZCBmbGV4IGp1c3RpZnktY2VudGVyIGhvdmVyOmJnLW9yYW5nZS00MDBcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyYWRpbyBoaWRkZW4gdy00IGgtNCBwLTEwIHRleHQtZ3JheS02MDAgIGJnLWdyYXktMTAwIGJvcmRlci1ncmF5LTMwMCBmb2N1czpyaW5nLXJlZC01MDAgZGFyazpmb2N1czpyaW5nLXJlZC02MDAgICBkYXJrOmJnLWdyYXktNzAwIGRhcms6Ym9yZGVyLWdyYXktNjAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmFkaW9CdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMyB3LWZ1bGwgIG1sLTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC1ncmF5LTMwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYXJvdW5kICBhYnNvbHV0ZSBib3R0b20tMCByaWdodC0wXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtd2hpdGUgYmctZ3JheS04MDAgaG92ZXI6YmctZ3JheS05MDAgZm9jdXM6cmluZy1ncmF5LTMwMCBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRleHQtc20gcHgtNSBweS0yLjUgbXItMiBtYi0yIGRhcms6Ymctd2hpdGUgZGFyazp0ZXh0LWJsYWNrIGRhcms6Zm9jdXM6cmluZy1ncmF5LTcwMCBkYXJrOmJvcmRlci1ncmF5LTcwMGB9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2dlbmVyYXRlUmFuZG9tTnVtYmVyfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBOZXh0XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ0aGVtZXMiLCJIb21lIiwiaW5kZXgiLCJzZXRJbmRleCIsInNjb3JlIiwic2V0U2NvcmUiLCJmbGFnIiwic2V0RmxhZyIsImFucyIsInNldEFucyIsImdlbmVyYXRlZE51bWJlcnMiLCJzZXRHZW5lcmF0ZWROdW1iZXJzIiwiZGFyayIsInNldERhcmsiLCJkYXRhIiwicXVlc3Rpb24iLCJvcHRpb25zIiwiYW5zd2VyIiwiZ2VuZXJhdGVSYW5kb21OdW1iZXIiLCJsZW5ndGgiLCJhbGVydCIsInJhbmRvbU51bWJlciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImluY2x1ZGVzIiwiY29uc29sZSIsImxvZyIsImluY3Jlc2VTY29yZSIsInJhZGlvIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImUiLCJpIiwiY2hlY2tlZCIsImhhbmRlbENoYW5nZSIsInRhcmdldCIsInZhbHVlIiwibGFiZWwiLCJjbGFzc0xpc3QiLCJhZGQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm1hcCIsImh0bWxGb3IiLCJvbkNsaWNrIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJuYW1lIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});