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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/context */ \"./context/context.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [flag, setFlag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [ans, setAns] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [generatedNumbers, setGeneratedNumbers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // const [dark, setDark] = useState(false);\n    const { dark , setDark  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_2__.themes);\n    const data = [\n        {\n            question: \"What is the capital of France?\",\n            options: [\n                \"London\",\n                \"Paris\",\n                \"Berlin\",\n                \"Madrid\"\n            ],\n            answer: \"Paris\"\n        },\n        {\n            question: \"Who painted the Mona Lisa?\",\n            options: [\n                \"Vincent van Gogh\",\n                \"Leonardo da Vinci\",\n                \"Pablo Picasso\",\n                \"Michelangelo\"\n            ],\n            answer: \"Leonardo da Vinci\"\n        },\n        {\n            question: \"What is the largest mammal in the world?\",\n            options: [\n                \"Elephant\",\n                \"Blue Whale\",\n                \"Giraffe\",\n                \"Hippopotamus\"\n            ],\n            answer: \"Blue Whale\"\n        },\n        {\n            question: \"What is the currency of Japan?\",\n            options: [\n                \"Dollar\",\n                \"Euro\",\n                \"Yen\",\n                \"Pound\"\n            ],\n            answer: \"Yen\"\n        },\n        {\n            question: \"What is the tallest mountain in the world?\",\n            options: [\n                \"Mount Everest\",\n                \"K2\",\n                \"Kilimanjaro\",\n                \"Denali\"\n            ],\n            answer: \"Mount Everest\"\n        },\n        {\n            question: \"What is the largest country in the world by land area?\",\n            options: [\n                \"Canada\",\n                \"Russia\",\n                \"China\",\n                \"United States\"\n            ],\n            answer: \"Russia\"\n        },\n        {\n            question: \"What is the chemical symbol for gold?\",\n            options: [\n                \"Go\",\n                \"Au\",\n                \"Gd\",\n                \"Ag\"\n            ],\n            answer: \"Au\"\n        },\n        {\n            question: \"What is the smallest planet in our solar system?\",\n            options: [\n                \"Venus\",\n                \"Mars\",\n                \"Mercury\",\n                \"Earth\"\n            ],\n            answer: \"Mercury\"\n        },\n        {\n            question: \"What is the largest planet in our solar system?\",\n            options: [\n                \"Jupiter\",\n                \"Saturn\",\n                \"Neptune\",\n                \"Uranus\"\n            ],\n            answer: \"Jupiter\"\n        },\n        {\n            question: \"What is the name of the first man to walk on the moon?\",\n            options: [\n                \"Buzz Aldrin\",\n                \"Neil Armstrong\",\n                \"Yuri Gagarin\",\n                \"Alan Shepard\"\n            ],\n            answer: \"Neil Armstrong\"\n        }\n    ];\n    const generateRandomNumber = ()=>{\n        if (generatedNumbers.length + 1 === data.length) {\n            alert(\"Exam Completed Your Score is \".concat(score, \" out of \").concat(data.length - 1));\n            setFlag(true);\n            return null;\n        }\n        let randomNumber;\n        do {\n            randomNumber = Math.floor(Math.random() * 10);\n        }while (generatedNumbers.includes(randomNumber));\n        setGeneratedNumbers([\n            ...generatedNumbers,\n            randomNumber\n        ]);\n        console.log(generatedNumbers);\n        setIndex(randomNumber);\n        increseScore();\n    };\n    const increseScore = ()=>{\n        if (ans == data[index].answer) {\n            setScore(score + 1);\n        }\n        const radio = document.querySelectorAll(\".radio\");\n        radio.forEach((e, i)=>{\n            if (e.checked) {\n                e.checked = false;\n            }\n        });\n    };\n    const handelChange = (e)=>{\n        setAns(e.target.value);\n        let firstChild = parentElement.firstChild;\n        let id = e.target.id;\n        console.log(e.target.id);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"dark:bg-[#192734] \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-[calc(100vh-44px)] flex items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"m-auto  align-middle p-5 mr border-4 border-solid w-[70%] rounded-lg\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"font-extrabold text-3xl mb-5   font-noto dark:text-white\",\n                                    children: data[index].question\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                    lineNumber: 115,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: data[index].options && data[index].options.map((e, i)=>{\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: i,\n                                            onClick: handelChange,\n                                            className: \"items-center label align-middle bg-gray-600 text-white mb-3 last:mb-0 rounded-md flex justify-center hover:bg-orange-400\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    type: \"radio\",\n                                                    className: \"radio hidden w-4 h-4 p-10 text-gray-600  bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600   dark:bg-gray-700 dark:border-gray-600\",\n                                                    value: e,\n                                                    id: i,\n                                                    name: \"radioButton\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 128,\n                                                    columnNumber: 25\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"check\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 136,\n                                                    columnNumber: 25\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    className: \"p-3 w-full  ml-2 text-sm font-medium text-gray-900 dark:text-gray-300\",\n                                                    htmlFor: i,\n                                                    children: e\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 137,\n                                                    columnNumber: 25\n                                                }, this)\n                                            ]\n                                        }, i, true, {\n                                            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                            lineNumber: 122,\n                                            columnNumber: 23\n                                        }, this);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                    lineNumber: 118,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                            lineNumber: 114,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                        lineNumber: 113,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-around  absolute bottom-0 right-0\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-white dark:text-black dark:focus:ring-gray-700 dark:border-gray-700\",\n                            onClick: generateRandomNumber,\n                            children: \"Next\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                            lineNumber: 150,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                        lineNumber: 149,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                lineNumber: 112,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n            lineNumber: 111,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"Zw04nb+MnnaHkRMAtmMQr5sjnok=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDSCxJQUFXO1FBQy9CeEIsT0FBT3dCLEVBQUVJLE1BQU0sQ0FBQ0MsS0FBSztRQUNyQixJQUFJQyxhQUFhQyxjQUFjRCxVQUFVO1FBQ3pDLElBQUlFLEtBQUlSLEVBQUVJLE1BQU0sQ0FBQ0ksRUFBRTtRQUNuQmYsUUFBUUMsR0FBRyxDQUFDTSxFQUFFSSxNQUFNLENBQUNJLEVBQUU7SUFDekI7SUFFQSxxQkFDRTtrQkFDRSw0RUFBQ0M7c0JBQ0MsNEVBQUNBO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0M7b0NBQUdELFdBQVU7OENBQ1g3QixJQUFJLENBQUNaLE1BQU0sQ0FBQ2EsUUFBUTs7Ozs7OzhDQUV2Qiw4REFBQzJCOzhDQUNFNUIsSUFBSSxDQUFDWixNQUFNLENBQUNjLE9BQU8sSUFDbEJGLElBQUksQ0FBQ1osTUFBTSxDQUFDYyxPQUFPLENBQUM2QixHQUFHLENBQUMsQ0FBQ1osR0FBUUMsSUFBVzt3Q0FDMUMscUJBQ0UsOERBQUNZOzRDQUNDQyxTQUFTYjs0Q0FFVGMsU0FBU1o7NENBQ1RPLFdBQVU7OzhEQUVWLDhEQUFDTTtvREFDQ0MsTUFBSztvREFDTFAsV0FBVTtvREFDVkwsT0FBT0w7b0RBQ1BRLElBQUlQO29EQUNKaUIsTUFBSzs7Ozs7OzhEQUdQLDhEQUFDVDtvREFBSUMsV0FBVTs7Ozs7OzhEQUNmLDhEQUFDRztvREFDQ0gsV0FBVTtvREFDVkksU0FBU2I7OERBRVJEOzs7Ozs7OzJDQWpCRUM7Ozs7O29DQXFCWDs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSVIsOERBQUNRO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDUzs0QkFDQ1QsV0FBWTs0QkFDWkssU0FBUzlCO3NDQUNWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFiLENBQUM7R0E5SnVCakI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdGhlbWVzIH0gZnJvbSBcIkAvY29udGV4dC9jb250ZXh0XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc2NvcmUsIHNldFNjb3JlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbZmxhZywgc2V0RmxhZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFthbnMsIHNldEFuc10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2dlbmVyYXRlZE51bWJlcnMsIHNldEdlbmVyYXRlZE51bWJlcnNdID0gdXNlU3RhdGU8YW55PihbXSk7XG4gIC8vIGNvbnN0IFtkYXJrLCBzZXREYXJrXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyBkYXJrLCBzZXREYXJrIH0gPSB1c2VDb250ZXh0KHRoZW1lcyk7XG5cbiAgY29uc3QgZGF0YSA9IFtcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaGF0IGlzIHRoZSBjYXBpdGFsIG9mIEZyYW5jZT9cIixcbiAgICAgIG9wdGlvbnM6IFtcIkxvbmRvblwiLCBcIlBhcmlzXCIsIFwiQmVybGluXCIsIFwiTWFkcmlkXCJdLFxuICAgICAgYW5zd2VyOiBcIlBhcmlzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaG8gcGFpbnRlZCB0aGUgTW9uYSBMaXNhP1wiLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICBcIlZpbmNlbnQgdmFuIEdvZ2hcIixcbiAgICAgICAgXCJMZW9uYXJkbyBkYSBWaW5jaVwiLFxuICAgICAgICBcIlBhYmxvIFBpY2Fzc29cIixcbiAgICAgICAgXCJNaWNoZWxhbmdlbG9cIixcbiAgICAgIF0sXG4gICAgICBhbnN3ZXI6IFwiTGVvbmFyZG8gZGEgVmluY2lcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgaXMgdGhlIGxhcmdlc3QgbWFtbWFsIGluIHRoZSB3b3JsZD9cIixcbiAgICAgIG9wdGlvbnM6IFtcIkVsZXBoYW50XCIsIFwiQmx1ZSBXaGFsZVwiLCBcIkdpcmFmZmVcIiwgXCJIaXBwb3BvdGFtdXNcIl0sXG4gICAgICBhbnN3ZXI6IFwiQmx1ZSBXaGFsZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyB0aGUgY3VycmVuY3kgb2YgSmFwYW4/XCIsXG4gICAgICBvcHRpb25zOiBbXCJEb2xsYXJcIiwgXCJFdXJvXCIsIFwiWWVuXCIsIFwiUG91bmRcIl0sXG4gICAgICBhbnN3ZXI6IFwiWWVuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaGF0IGlzIHRoZSB0YWxsZXN0IG1vdW50YWluIGluIHRoZSB3b3JsZD9cIixcbiAgICAgIG9wdGlvbnM6IFtcIk1vdW50IEV2ZXJlc3RcIiwgXCJLMlwiLCBcIktpbGltYW5qYXJvXCIsIFwiRGVuYWxpXCJdLFxuICAgICAgYW5zd2VyOiBcIk1vdW50IEV2ZXJlc3RcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgaXMgdGhlIGxhcmdlc3QgY291bnRyeSBpbiB0aGUgd29ybGQgYnkgbGFuZCBhcmVhP1wiLFxuICAgICAgb3B0aW9uczogW1wiQ2FuYWRhXCIsIFwiUnVzc2lhXCIsIFwiQ2hpbmFcIiwgXCJVbml0ZWQgU3RhdGVzXCJdLFxuICAgICAgYW5zd2VyOiBcIlJ1c3NpYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyB0aGUgY2hlbWljYWwgc3ltYm9sIGZvciBnb2xkP1wiLFxuICAgICAgb3B0aW9uczogW1wiR29cIiwgXCJBdVwiLCBcIkdkXCIsIFwiQWdcIl0sXG4gICAgICBhbnN3ZXI6IFwiQXVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgaXMgdGhlIHNtYWxsZXN0IHBsYW5ldCBpbiBvdXIgc29sYXIgc3lzdGVtP1wiLFxuICAgICAgb3B0aW9uczogW1wiVmVudXNcIiwgXCJNYXJzXCIsIFwiTWVyY3VyeVwiLCBcIkVhcnRoXCJdLFxuICAgICAgYW5zd2VyOiBcIk1lcmN1cnlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgaXMgdGhlIGxhcmdlc3QgcGxhbmV0IGluIG91ciBzb2xhciBzeXN0ZW0/XCIsXG4gICAgICBvcHRpb25zOiBbXCJKdXBpdGVyXCIsIFwiU2F0dXJuXCIsIFwiTmVwdHVuZVwiLCBcIlVyYW51c1wiXSxcbiAgICAgIGFuc3dlcjogXCJKdXBpdGVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaGF0IGlzIHRoZSBuYW1lIG9mIHRoZSBmaXJzdCBtYW4gdG8gd2FsayBvbiB0aGUgbW9vbj9cIixcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgXCJCdXp6IEFsZHJpblwiLFxuICAgICAgICBcIk5laWwgQXJtc3Ryb25nXCIsXG4gICAgICAgIFwiWXVyaSBHYWdhcmluXCIsXG4gICAgICAgIFwiQWxhbiBTaGVwYXJkXCIsXG4gICAgICBdLFxuICAgICAgYW5zd2VyOiBcIk5laWwgQXJtc3Ryb25nXCIsXG4gICAgfSxcbiAgXTtcbiAgY29uc3QgZ2VuZXJhdGVSYW5kb21OdW1iZXIgPSAoKSA9PiB7XG4gICAgaWYgKGdlbmVyYXRlZE51bWJlcnMubGVuZ3RoICsgMSA9PT0gZGF0YS5sZW5ndGgpIHtcbiAgICAgIGFsZXJ0KGBFeGFtIENvbXBsZXRlZCBZb3VyIFNjb3JlIGlzICR7c2NvcmV9IG91dCBvZiAke2RhdGEubGVuZ3RoIC0gMX1gKTtcbiAgICAgIHNldEZsYWcodHJ1ZSk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBsZXQgcmFuZG9tTnVtYmVyOiBhbnk7XG4gICAgZG8ge1xuICAgICAgcmFuZG9tTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIH0gd2hpbGUgKGdlbmVyYXRlZE51bWJlcnMuaW5jbHVkZXMocmFuZG9tTnVtYmVyKSk7XG5cbiAgICBzZXRHZW5lcmF0ZWROdW1iZXJzKFsuLi5nZW5lcmF0ZWROdW1iZXJzLCByYW5kb21OdW1iZXJdKTtcbiAgICBjb25zb2xlLmxvZyhnZW5lcmF0ZWROdW1iZXJzKTtcbiAgICBzZXRJbmRleChyYW5kb21OdW1iZXIpO1xuICAgIGluY3Jlc2VTY29yZSgpO1xuICB9O1xuICBjb25zdCBpbmNyZXNlU2NvcmUgPSAoKSA9PiB7XG4gICAgaWYgKGFucyA9PSBkYXRhW2luZGV4XS5hbnN3ZXIpIHtcbiAgICAgIHNldFNjb3JlKHNjb3JlICsgMSk7XG4gICAgfVxuICAgIGNvbnN0IHJhZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yYWRpb1wiKTtcbiAgICByYWRpby5mb3JFYWNoKChlOiBhbnksIGk6IGFueSkgPT4ge1xuICAgICAgaWYgKGUuY2hlY2tlZCkge1xuICAgICAgICBlLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgaGFuZGVsQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgIHNldEFucyhlLnRhcmdldC52YWx1ZSk7XG4gICAgbGV0IGZpcnN0Q2hpbGQgPSBwYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGQ7XG4gICAgbGV0IGlkID1lLnRhcmdldC5pZFxuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmlkKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhcms6YmctWyMxOTI3MzRdIFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1bY2FsYygxMDB2aC00NHB4KV0gZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS1hdXRvICBhbGlnbi1taWRkbGUgcC01IG1yIGJvcmRlci00IGJvcmRlci1zb2xpZCB3LVs3MCVdIHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtZXh0cmFib2xkIHRleHQtM3hsIG1iLTUgXHRcdGZvbnQtbm90byBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICB7ZGF0YVtpbmRleF0ucXVlc3Rpb259XG4gICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge2RhdGFbaW5kZXhdLm9wdGlvbnMgJiZcbiAgICAgICAgICAgICAgICAgIGRhdGFbaW5kZXhdLm9wdGlvbnMubWFwKChlOiBhbnksIGk6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRlbENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW1zLWNlbnRlciBsYWJlbCBhbGlnbi1taWRkbGUgYmctZ3JheS02MDAgdGV4dC13aGl0ZSBtYi0zIGxhc3Q6bWItMCByb3VuZGVkLW1kIGZsZXgganVzdGlmeS1jZW50ZXIgaG92ZXI6Ymctb3JhbmdlLTQwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJhZGlvIGhpZGRlbiB3LTQgaC00IHAtMTAgdGV4dC1ncmF5LTYwMCAgYmctZ3JheS0xMDAgYm9yZGVyLWdyYXktMzAwIGZvY3VzOnJpbmctcmVkLTUwMCBkYXJrOmZvY3VzOnJpbmctcmVkLTYwMCAgIGRhcms6YmctZ3JheS03MDAgZGFyazpib3JkZXItZ3JheS02MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyYWRpb0J1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0zIHctZnVsbCAgbWwtMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LWdyYXktMzAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2V9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1hcm91bmQgIGFic29sdXRlIGJvdHRvbS0wIHJpZ2h0LTBcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC13aGl0ZSBiZy1ncmF5LTgwMCBob3ZlcjpiZy1ncmF5LTkwMCBmb2N1czpyaW5nLWdyYXktMzAwIGZvbnQtbWVkaXVtIHJvdW5kZWQtbGcgdGV4dC1zbSBweC01IHB5LTIuNSBtci0yIG1iLTIgZGFyazpiZy13aGl0ZSBkYXJrOnRleHQtYmxhY2sgZGFyazpmb2N1czpyaW5nLWdyYXktNzAwIGRhcms6Ym9yZGVyLWdyYXktNzAwYH1cbiAgICAgICAgICAgICAgb25DbGljaz17Z2VuZXJhdGVSYW5kb21OdW1iZXJ9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIE5leHRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInRoZW1lcyIsIkhvbWUiLCJpbmRleCIsInNldEluZGV4Iiwic2NvcmUiLCJzZXRTY29yZSIsImZsYWciLCJzZXRGbGFnIiwiYW5zIiwic2V0QW5zIiwiZ2VuZXJhdGVkTnVtYmVycyIsInNldEdlbmVyYXRlZE51bWJlcnMiLCJkYXJrIiwic2V0RGFyayIsImRhdGEiLCJxdWVzdGlvbiIsIm9wdGlvbnMiLCJhbnN3ZXIiLCJnZW5lcmF0ZVJhbmRvbU51bWJlciIsImxlbmd0aCIsImFsZXJ0IiwicmFuZG9tTnVtYmVyIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiaW5jbHVkZXMiLCJjb25zb2xlIiwibG9nIiwiaW5jcmVzZVNjb3JlIiwicmFkaW8iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZSIsImkiLCJjaGVja2VkIiwiaGFuZGVsQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJmaXJzdENoaWxkIiwicGFyZW50RWxlbWVudCIsImlkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJtYXAiLCJsYWJlbCIsImh0bWxGb3IiLCJvbkNsaWNrIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});