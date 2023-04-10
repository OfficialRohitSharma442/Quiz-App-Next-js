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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/context */ \"./context/context.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    // const [flag, setFlag] = useState(false);\n    const [ans, setAns] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [generatedNumbers, setGeneratedNumbers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // const [dark, setDark] = useState(false);\n    const { dark , setDark  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_2__.themes);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIndex(Math.floor(Math.random() * 10));\n    }, []);\n    const data = [\n        {\n            question: \"What is the capital of France?\",\n            options: [\n                \"London\",\n                \"Paris\",\n                \"Berlin\",\n                \"Madrid\"\n            ],\n            answer: \"Paris\"\n        },\n        {\n            question: \"Who painted the Mona Lisa?\",\n            options: [\n                \"Vincent van Gogh\",\n                \"Leonardo da Vinci\",\n                \"Pablo Picasso\",\n                \"Michelangelo\"\n            ],\n            answer: \"Leonardo da Vinci\"\n        },\n        {\n            question: \"What is the largest mammal in the world?\",\n            options: [\n                \"Elephant\",\n                \"Blue Whale\",\n                \"Giraffe\",\n                \"Hippopotamus\"\n            ],\n            answer: \"Blue Whale\"\n        },\n        {\n            question: \"What is the currency of Japan?\",\n            options: [\n                \"Dollar\",\n                \"Euro\",\n                \"Yen\",\n                \"Pound\"\n            ],\n            answer: \"Yen\"\n        },\n        {\n            question: \"What is the tallest mountain in the world?\",\n            options: [\n                \"Mount Everest\",\n                \"K2\",\n                \"Kilimanjaro\",\n                \"Denali\"\n            ],\n            answer: \"Mount Everest\"\n        },\n        {\n            question: \"What is the largest country in the world by land area?\",\n            options: [\n                \"Canada\",\n                \"Russia\",\n                \"China\",\n                \"United States\"\n            ],\n            answer: \"Russia\"\n        },\n        {\n            question: \"What is the chemical symbol for gold?\",\n            options: [\n                \"Go\",\n                \"Au\",\n                \"Gd\",\n                \"Ag\"\n            ],\n            answer: \"Au\"\n        },\n        {\n            question: \"What is the smallest planet in our solar system?\",\n            options: [\n                \"Venus\",\n                \"Mars\",\n                \"Mercury\",\n                \"Earth\"\n            ],\n            answer: \"Mercury\"\n        },\n        {\n            question: \"What is the largest planet in our solar system?\",\n            options: [\n                \"Jupiter\",\n                \"Saturn\",\n                \"Neptune\",\n                \"Uranus\"\n            ],\n            answer: \"Jupiter\"\n        },\n        {\n            question: \"What is the name of the first man to walk on the moon?\",\n            options: [\n                \"Buzz Aldrin\",\n                \"Neil Armstrong\",\n                \"Yuri Gagarin\",\n                \"Alan Shepard\"\n            ],\n            answer: \"Neil Armstrong\"\n        }\n    ];\n    const generateRandomNumber = ()=>{\n        if (generatedNumbers.length + 1 === data.length) {\n            alert(\"Exam Completed Your Score is \".concat(score, \" out of \").concat(data.length - 1));\n            return null;\n        }\n        let randomNumber;\n        do {\n            randomNumber = Math.floor(Math.random() * 10);\n        }while (generatedNumbers.includes(randomNumber));\n        setGeneratedNumbers([\n            ...generatedNumbers,\n            randomNumber\n        ]);\n        // console.log(generatedNumbers);\n        setTimeout(()=>{\n            setIndex(randomNumber);\n        }, 2000);\n        increseScore();\n        let label = document.querySelectorAll(\".labelsp\");\n        console.log(label);\n        label.forEach((elem)=>{\n            console.log(elem.innerText);\n            if (elem.innerText === data[index].answer) {\n                elem.classList;\n                elem.classList.add(\"bg-green-400\");\n            } else if (ans === elem.innerText) {\n                elem.classList.add(\"bg-red-400\");\n            }\n        });\n    };\n    const increseScore = ()=>{\n        if (ans == data[index].answer) {\n            setScore(1 + score);\n        }\n        const radio = document.querySelectorAll(\".radio\");\n        radio.forEach((e, i)=>{\n            if (e.checked) {\n                e.checked = false;\n            }\n        });\n        const label = document.querySelectorAll(\".labelsp\");\n        label.forEach((event)=>{\n            event.classList.remove(\"bg-yellow-500\");\n            event.classList.remove(\"bg-red-400\");\n            setTimeout(()=>{\n                event.classList.remove(\"bg-red-400\");\n                event.classList.remove(\"bg-green-400\");\n            }, 2000);\n        });\n    };\n    const handelChange = (e, result)=>{\n        // alert(\"hello\")\n        setAns(result);\n        // console.log(e.target.childNodes[0].innerText);\n        // console.log();\n        const label = document.querySelectorAll(\".labelsp\");\n        label.forEach((event)=>{\n            if (event.classList.contains(\"bg-yellow-500\")) {\n                event.classList.remove(\"bg-yellow-500\");\n            }\n        });\n        console.log(e);\n        e.target.classList.add(\"bg-yellow-500\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"dark:bg-[#192734] \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-[calc(100vh-92px)] flex items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"m-auto  align-middle p-5 mr border-4 border-solid w-[70%] rounded-lg\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"font-extrabold text-3xl mb-5   font-noto dark:text-white\",\n                                    children: index && data[index].question\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                    lineNumber: 148,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: index && data[index].options.map((e, i)=>{\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    type: \"radio\",\n                                                    className: \"radio hidden\",\n                                                    value: e,\n                                                    id: i,\n                                                    name: \"radioButton\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 157,\n                                                    columnNumber: 25\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    htmlFor: i,\n                                                    onClick: (p)=>{\n                                                        handelChange(p, e);\n                                                    },\n                                                    className: \"cursor-pointer labelsp p-4 bg-gray-600 text-white mb-3 last:mb-0 rounded-md block hover:bg-orange-400\",\n                                                    children: e\n                                                }, i, false, {\n                                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 164,\n                                                    columnNumber: 25\n                                                }, this)\n                                            ]\n                                        }, void 0, true);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                    lineNumber: 151,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                            lineNumber: 147,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                        lineNumber: 146,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-end\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-white dark:text-black dark:focus:ring-gray-700 dark:border-gray-700\",\n                            onClick: generateRandomNumber,\n                            children: \"Next\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                            lineNumber: 183,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                        lineNumber: 182,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                lineNumber: 145,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n            lineNumber: 144,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"ceBwaDO7RQ/hRXEAb0NRRbQy+8I=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNDLEdBQUcsQ0FBQztJQUN6QjtJQUVBLHFCQUNFO2tCQUNFLDRFQUFDVztzQkFDQyw0RUFBQ0E7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDQztvQ0FBR0QsV0FBVTs4Q0FDWDdDLFNBQVNhLElBQUksQ0FBQ2IsTUFBTSxDQUFDYyxRQUFROzs7Ozs7OENBRWhDLDhEQUFDOEI7OENBQ0U1QyxTQUNDYSxJQUFJLENBQUNiLE1BQU0sQ0FBQ2UsT0FBTyxDQUFDZ0MsR0FBRyxDQUFDLENBQUNaLEdBQVFDLElBQVc7d0NBQzFDLHFCQUNFOzs4REFFRSw4REFBQ1k7b0RBQ0NDLE1BQUs7b0RBQ0xKLFdBQVU7b0RBQ1ZLLE9BQU9mO29EQUNQZ0IsSUFBSWY7b0RBQ0pnQixNQUFLOzs7Ozs7OERBRVAsOERBQUM1QjtvREFDQzZCLFNBQVNqQjtvREFFVGtCLFNBQVMsQ0FBQ0MsSUFBTTt3REFDZGYsYUFBYWUsR0FBR3BCO29EQUNsQjtvREFDQVUsV0FBVTs4REFHUFY7bURBUEVDOzs7Ozs7O29DQVliOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJUiw4REFBQ1E7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNXOzRCQUNDWCxXQUFZOzRCQUNaUyxTQUFTckM7c0NBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWIsQ0FBQztHQS9MdUJsQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB0aGVtZXMgfSBmcm9tIFwiQC9jb250ZXh0L2NvbnRleHRcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gdXNlU3RhdGU8YW55PigpO1xuICBjb25zdCBbc2NvcmUsIHNldFNjb3JlXSA9IHVzZVN0YXRlKDApO1xuICAvLyBjb25zdCBbZmxhZywgc2V0RmxhZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFthbnMsIHNldEFuc10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbZ2VuZXJhdGVkTnVtYmVycywgc2V0R2VuZXJhdGVkTnVtYmVyc10gPSB1c2VTdGF0ZTxhbnk+KFtdKTtcbiAgLy8gY29uc3QgW2RhcmssIHNldERhcmtdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB7IGRhcmssIHNldERhcmsgfSA9IHVzZUNvbnRleHQodGhlbWVzKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJbmRleChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkpO1xuICB9LCBbXSk7XG4gIGNvbnN0IGRhdGEgPSBbXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyB0aGUgY2FwaXRhbCBvZiBGcmFuY2U/XCIsXG4gICAgICBvcHRpb25zOiBbXCJMb25kb25cIiwgXCJQYXJpc1wiLCBcIkJlcmxpblwiLCBcIk1hZHJpZFwiXSxcbiAgICAgIGFuc3dlcjogXCJQYXJpc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hvIHBhaW50ZWQgdGhlIE1vbmEgTGlzYT9cIixcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgXCJWaW5jZW50IHZhbiBHb2doXCIsXG4gICAgICAgIFwiTGVvbmFyZG8gZGEgVmluY2lcIixcbiAgICAgICAgXCJQYWJsbyBQaWNhc3NvXCIsXG4gICAgICAgIFwiTWljaGVsYW5nZWxvXCIsXG4gICAgICBdLFxuICAgICAgYW5zd2VyOiBcIkxlb25hcmRvIGRhIFZpbmNpXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaGF0IGlzIHRoZSBsYXJnZXN0IG1hbW1hbCBpbiB0aGUgd29ybGQ/XCIsXG4gICAgICBvcHRpb25zOiBbXCJFbGVwaGFudFwiLCBcIkJsdWUgV2hhbGVcIiwgXCJHaXJhZmZlXCIsIFwiSGlwcG9wb3RhbXVzXCJdLFxuICAgICAgYW5zd2VyOiBcIkJsdWUgV2hhbGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgaXMgdGhlIGN1cnJlbmN5IG9mIEphcGFuP1wiLFxuICAgICAgb3B0aW9uczogW1wiRG9sbGFyXCIsIFwiRXVyb1wiLCBcIlllblwiLCBcIlBvdW5kXCJdLFxuICAgICAgYW5zd2VyOiBcIlllblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyB0aGUgdGFsbGVzdCBtb3VudGFpbiBpbiB0aGUgd29ybGQ/XCIsXG4gICAgICBvcHRpb25zOiBbXCJNb3VudCBFdmVyZXN0XCIsIFwiSzJcIiwgXCJLaWxpbWFuamFyb1wiLCBcIkRlbmFsaVwiXSxcbiAgICAgIGFuc3dlcjogXCJNb3VudCBFdmVyZXN0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaGF0IGlzIHRoZSBsYXJnZXN0IGNvdW50cnkgaW4gdGhlIHdvcmxkIGJ5IGxhbmQgYXJlYT9cIixcbiAgICAgIG9wdGlvbnM6IFtcIkNhbmFkYVwiLCBcIlJ1c3NpYVwiLCBcIkNoaW5hXCIsIFwiVW5pdGVkIFN0YXRlc1wiXSxcbiAgICAgIGFuc3dlcjogXCJSdXNzaWFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgaXMgdGhlIGNoZW1pY2FsIHN5bWJvbCBmb3IgZ29sZD9cIixcbiAgICAgIG9wdGlvbnM6IFtcIkdvXCIsIFwiQXVcIiwgXCJHZFwiLCBcIkFnXCJdLFxuICAgICAgYW5zd2VyOiBcIkF1XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaGF0IGlzIHRoZSBzbWFsbGVzdCBwbGFuZXQgaW4gb3VyIHNvbGFyIHN5c3RlbT9cIixcbiAgICAgIG9wdGlvbnM6IFtcIlZlbnVzXCIsIFwiTWFyc1wiLCBcIk1lcmN1cnlcIiwgXCJFYXJ0aFwiXSxcbiAgICAgIGFuc3dlcjogXCJNZXJjdXJ5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaGF0IGlzIHRoZSBsYXJnZXN0IHBsYW5ldCBpbiBvdXIgc29sYXIgc3lzdGVtP1wiLFxuICAgICAgb3B0aW9uczogW1wiSnVwaXRlclwiLCBcIlNhdHVyblwiLCBcIk5lcHR1bmVcIiwgXCJVcmFudXNcIl0sXG4gICAgICBhbnN3ZXI6IFwiSnVwaXRlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyB0aGUgbmFtZSBvZiB0aGUgZmlyc3QgbWFuIHRvIHdhbGsgb24gdGhlIG1vb24/XCIsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgIFwiQnV6eiBBbGRyaW5cIixcbiAgICAgICAgXCJOZWlsIEFybXN0cm9uZ1wiLFxuICAgICAgICBcIll1cmkgR2FnYXJpblwiLFxuICAgICAgICBcIkFsYW4gU2hlcGFyZFwiLFxuICAgICAgXSxcbiAgICAgIGFuc3dlcjogXCJOZWlsIEFybXN0cm9uZ1wiLFxuICAgIH0sXG4gIF07XG4gIGNvbnN0IGdlbmVyYXRlUmFuZG9tTnVtYmVyID0gKCkgPT4ge1xuICAgIGlmIChnZW5lcmF0ZWROdW1iZXJzLmxlbmd0aCArIDEgPT09IGRhdGEubGVuZ3RoKSB7XG4gICAgICBhbGVydChgRXhhbSBDb21wbGV0ZWQgWW91ciBTY29yZSBpcyAke3Njb3JlfSBvdXQgb2YgJHtkYXRhLmxlbmd0aCAtIDF9YCk7XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBsZXQgcmFuZG9tTnVtYmVyOiBhbnk7XG4gICAgZG8ge1xuICAgICAgcmFuZG9tTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIH0gd2hpbGUgKGdlbmVyYXRlZE51bWJlcnMuaW5jbHVkZXMocmFuZG9tTnVtYmVyKSk7XG5cbiAgICBzZXRHZW5lcmF0ZWROdW1iZXJzKFsuLi5nZW5lcmF0ZWROdW1iZXJzLCByYW5kb21OdW1iZXJdKTtcbiAgICAvLyBjb25zb2xlLmxvZyhnZW5lcmF0ZWROdW1iZXJzKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldEluZGV4KHJhbmRvbU51bWJlcik7XG4gICAgfSwgMjAwMCk7XG4gICAgaW5jcmVzZVNjb3JlKCk7XG4gICAgbGV0IGxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sYWJlbHNwXCIpO1xuICAgIGNvbnNvbGUubG9nKGxhYmVsKTtcbiAgICBsYWJlbC5mb3JFYWNoKChlbGVtOiBhbnkpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVsZW0uaW5uZXJUZXh0KTtcbiAgICAgIGlmIChlbGVtLmlubmVyVGV4dCA9PT0gZGF0YVtpbmRleF0uYW5zd2VyKSB7XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0O1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoXCJiZy1ncmVlbi00MDBcIik7XG4gICAgICB9IGVsc2UgaWYgKGFucyA9PT0gZWxlbS5pbm5lclRleHQpIHtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKFwiYmctcmVkLTQwMFwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBpbmNyZXNlU2NvcmUgPSAoKSA9PiB7XG4gICAgaWYgKGFucyA9PSBkYXRhW2luZGV4XS5hbnN3ZXIpIHtcbiAgICAgIHNldFNjb3JlKDEgKyBzY29yZSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmFkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJhZGlvXCIpO1xuICAgIHJhZGlvLmZvckVhY2goKGU6IGFueSwgaTogYW55KSA9PiB7XG4gICAgICBpZiAoZS5jaGVja2VkKSB7XG4gICAgICAgIGUuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sYWJlbHNwXCIpO1xuICAgIGxhYmVsLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYmcteWVsbG93LTUwMFwiKTtcbiAgICAgIGV2ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1yZWQtNDAwXCIpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGV2ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1yZWQtNDAwXCIpO1xuICAgICAgICBldmVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYmctZ3JlZW4tNDAwXCIpO1xuICAgICAgfSwgMjAwMCk7XG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IGhhbmRlbENoYW5nZSA9IChlOiBhbnksIHJlc3VsdDogYW55KSA9PiB7XG4gICAgLy8gYWxlcnQoXCJoZWxsb1wiKVxuICAgIHNldEFucyhyZXN1bHQpO1xuICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LmNoaWxkTm9kZXNbMF0uaW5uZXJUZXh0KTtcbiAgICAvLyBjb25zb2xlLmxvZygpO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sYWJlbHNwXCIpO1xuICAgIGxhYmVsLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYmcteWVsbG93LTUwMFwiKSkge1xuICAgICAgICBldmVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYmcteWVsbG93LTUwMFwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYmcteWVsbG93LTUwMFwiKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhcms6YmctWyMxOTI3MzRdIFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1bY2FsYygxMDB2aC05MnB4KV0gZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS1hdXRvICBhbGlnbi1taWRkbGUgcC01IG1yIGJvcmRlci00IGJvcmRlci1zb2xpZCB3LVs3MCVdIHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtZXh0cmFib2xkIHRleHQtM3hsIG1iLTUgXHRcdGZvbnQtbm90byBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICB7aW5kZXggJiYgZGF0YVtpbmRleF0ucXVlc3Rpb259XG4gICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge2luZGV4ICYmXG4gICAgICAgICAgICAgICAgICBkYXRhW2luZGV4XS5vcHRpb25zLm1hcCgoZTogYW55LCBpOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYga2V5PXtlfT4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmFkaW8gaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmFkaW9CdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGVsQ2hhbmdlKHAsIGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclx0bGFiZWxzcCBwLTQgYmctZ3JheS02MDAgdGV4dC13aGl0ZSBtYi0zIGxhc3Q6bWItMCByb3VuZGVkLW1kIGJsb2NrIGhvdmVyOmJnLW9yYW5nZS00MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtd2hpdGUgYmctZ3JheS04MDAgaG92ZXI6YmctZ3JheS05MDAgZm9jdXM6cmluZy1ncmF5LTMwMCBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRleHQtc20gcHgtNSBweS0yLjUgbXItMiBtYi0yIGRhcms6Ymctd2hpdGUgZGFyazp0ZXh0LWJsYWNrIGRhcms6Zm9jdXM6cmluZy1ncmF5LTcwMCBkYXJrOmJvcmRlci1ncmF5LTcwMGB9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2dlbmVyYXRlUmFuZG9tTnVtYmVyfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBOZXh0XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ0aGVtZXMiLCJIb21lIiwiaW5kZXgiLCJzZXRJbmRleCIsInNjb3JlIiwic2V0U2NvcmUiLCJhbnMiLCJzZXRBbnMiLCJnZW5lcmF0ZWROdW1iZXJzIiwic2V0R2VuZXJhdGVkTnVtYmVycyIsImRhcmsiLCJzZXREYXJrIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZGF0YSIsInF1ZXN0aW9uIiwib3B0aW9ucyIsImFuc3dlciIsImdlbmVyYXRlUmFuZG9tTnVtYmVyIiwibGVuZ3RoIiwiYWxlcnQiLCJyYW5kb21OdW1iZXIiLCJpbmNsdWRlcyIsInNldFRpbWVvdXQiLCJpbmNyZXNlU2NvcmUiLCJsYWJlbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImNvbnNvbGUiLCJsb2ciLCJmb3JFYWNoIiwiZWxlbSIsImlubmVyVGV4dCIsImNsYXNzTGlzdCIsImFkZCIsInJhZGlvIiwiZSIsImkiLCJjaGVja2VkIiwiZXZlbnQiLCJyZW1vdmUiLCJoYW5kZWxDaGFuZ2UiLCJyZXN1bHQiLCJjb250YWlucyIsInRhcmdldCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibWFwIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJpZCIsIm5hbWUiLCJodG1sRm9yIiwib25DbGljayIsInAiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});