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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/context */ \"./context/context.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n// import WinPage from \"./WinPage\";\n\nfunction Home() {\n    _s();\n    const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    // const { dark, setDark, darkMode , score, setScore} = useState(0);\n    const { score , setScore  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_3__.themes);\n    const [flag, setFlag] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [ans, setAns] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [generatedNumbers, setGeneratedNumbers] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setGeneratedNumbers([]);\n        setIndex(Math.floor(Math.random() * 10));\n    }, []);\n    const data = [\n        {\n            question: \"What is the capital of France?\",\n            options: [\n                \"London\",\n                \"Paris\",\n                \"Berlin\",\n                \"Madrid\"\n            ],\n            answer: \"Paris\"\n        },\n        {\n            question: \"Who painted the Mona Lisa?\",\n            options: [\n                \"Vincent van Gogh\",\n                \"Leonardo da Vinci\",\n                \"Pablo Picasso\",\n                \"Michelangelo\"\n            ],\n            answer: \"Leonardo da Vinci\"\n        },\n        {\n            question: \"What is the largest mammal in the world?\",\n            options: [\n                \"Elephant\",\n                \"Blue Whale\",\n                \"Giraffe\",\n                \"Hippopotamus\"\n            ],\n            answer: \"Blue Whale\"\n        },\n        {\n            question: \"What is the currency of Japan?\",\n            options: [\n                \"Dollar\",\n                \"Euro\",\n                \"Yen\",\n                \"Pound\"\n            ],\n            answer: \"Yen\"\n        },\n        {\n            question: \"What is the tallest mountain in the world?\",\n            options: [\n                \"Mount Everest\",\n                \"K2\",\n                \"Kilimanjaro\",\n                \"Denali\"\n            ],\n            answer: \"Mount Everest\"\n        },\n        {\n            question: \"What is the largest country in the world by land area?\",\n            options: [\n                \"Canada\",\n                \"Russia\",\n                \"China\",\n                \"United States\"\n            ],\n            answer: \"Russia\"\n        },\n        {\n            question: \"What is the chemical symbol for gold?\",\n            options: [\n                \"Go\",\n                \"Au\",\n                \"Gd\",\n                \"Ag\"\n            ],\n            answer: \"Au\"\n        },\n        {\n            question: \"What is the smallest planet in our solar system?\",\n            options: [\n                \"Venus\",\n                \"Mars\",\n                \"Mercury\",\n                \"Earth\"\n            ],\n            answer: \"Mercury\"\n        },\n        {\n            question: \"What is the largest planet in our solar system?\",\n            options: [\n                \"Jupiter\",\n                \"Saturn\",\n                \"Neptune\",\n                \"Uranus\"\n            ],\n            answer: \"Jupiter\"\n        },\n        {\n            question: \"What is the name of the first man to walk on the moon?\",\n            options: [\n                \"Buzz Aldrin\",\n                \"Neil Armstrong\",\n                \"Yuri Gagarin\",\n                \"Alan Shepard\"\n            ],\n            answer: \"Neil Armstrong\"\n        }\n    ];\n    // console.log(data);\n    let randomNumber;\n    const generateRandomNumber = ()=>{\n        if (generatedNumbers.length + 1 == data.length) {\n            next_router__WEBPACK_IMPORTED_MODULE_1___default().push({\n                pathname: \"/WinPage\"\n            });\n            return null;\n        }\n        randomNumber = Math.floor(Math.random() * 10);\n        if (generatedNumbers.includes(randomNumber) || randomNumber == 0) {\n            generateRandomNumber();\n        }\n        setGeneratedNumbers([\n            ...generatedNumbers,\n            randomNumber\n        ]);\n        // console.log(generatedNumbers);\n        setTimeout(()=>{\n            setIndex(randomNumber);\n        }, 1000);\n        increseScore();\n        let label = document.querySelectorAll(\".labelsp\");\n        console.log(label);\n        label.forEach((elem)=>{\n            console.log(elem.innerText);\n            if (elem.innerText === data[index].answer) {\n                elem.classList;\n                elem.classList.add(\"bg-green-400\");\n            } else if (ans === elem.innerText) {\n                elem.classList.add(\"bg-red-400\");\n            }\n        });\n        console.log(generatedNumbers);\n    };\n    const increseScore = ()=>{\n        if (ans == data[index].answer) {\n            setScore(1 + score);\n        }\n        const radio = document.querySelectorAll(\".radio\");\n        radio.forEach((e, i)=>{\n            if (e.checked) {\n                e.checked = false;\n            }\n        });\n        const label = document.querySelectorAll(\".labelsp\");\n        label.forEach((event)=>{\n            event.classList.remove(\"bg-yellow-500\");\n            event.classList.remove(\"bg-red-400\");\n            setTimeout(()=>{\n                event.classList.remove(\"bg-red-400\");\n                event.classList.remove(\"bg-green-400\");\n            }, 2000);\n        });\n        setFlag(false);\n        console.log(\"rendom array\", generatedNumbers);\n        console.log(\"index => \", index);\n    };\n    const handelChange = (e, result)=>{\n        // alert(\"hello\")\n        setAns(result);\n        setFlag(true);\n        // console.log(e.target.childNodes[0].innerText);\n        // console.log();\n        const label = document.querySelectorAll(\".labelsp\");\n        label.forEach((event)=>{\n            if (event.classList.contains(\"bg-yellow-500\")) {\n                event.classList.remove(\"bg-yellow-500\");\n            }\n        });\n        // console.log(e);\n        e.target.classList.add(\"bg-yellow-500\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"dark:bg-[#192734] \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-[calc(100vh-92px)] flex items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"m-auto  align-middle p-5 mr border-4 border-solid w-[70%] rounded-lg\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"font-extrabold text-3xl mb-5 font-noto dark:text-white\",\n                                    children: index ? data[index].question : \"\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                    lineNumber: 159,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: index ? data[index].options.map((e, i)=>{\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                        type: \"radio\",\n                                                        className: \"radio hidden\",\n                                                        value: e,\n                                                        id: e,\n                                                        name: \"radioButton\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                        lineNumber: 168,\n                                                        columnNumber: 29\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                        htmlFor: e,\n                                                        //key={i}\n                                                        onClick: (p)=>{\n                                                            handelChange(p, e);\n                                                        },\n                                                        className: \"cursor-pointer labelsp p-4 bg-gray-600 m-3 last:mb-0 rounded-md block hover:bg-orange-400 ml-2 text-sm font-medium  text-gray-900 dark:text-gray-300\",\n                                                        children: e\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                        lineNumber: 175,\n                                                        columnNumber: 29\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                lineNumber: 167,\n                                                columnNumber: 27\n                                            }, this)\n                                        }, i, false, {\n                                            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                            lineNumber: 166,\n                                            columnNumber: 25\n                                        }, this);\n                                    }) : \" \"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                    lineNumber: 162,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                            lineNumber: 158,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                        lineNumber: 157,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-end\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-white dark:text-black dark:focus:ring-gray-700 dark:border-gray-700\",\n                            onClick: generateRandomNumber,\n                            disabled: !flag ? true : false,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"w-full border-b \"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                    lineNumber: 199,\n                                    columnNumber: 15\n                                }, this),\n                                \"Next\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                            lineNumber: 194,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                        lineNumber: 193,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                lineNumber: 156,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n            lineNumber: 155,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"j/WkVp5afXx8aL28hwBFJWX3D4k=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXhELENBQUM7R0ExTXVCL0M7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IEZyYWdtZW50LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgV2luUGFnZSBmcm9tIFwiLi9XaW5QYWdlXCI7XG5pbXBvcnQgeyB0aGVtZXMgfSBmcm9tIFwiQC9jb250ZXh0L2NvbnRleHRcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gdXNlU3RhdGU8YW55PigpO1xuICAvLyBjb25zdCB7IGRhcmssIHNldERhcmssIGRhcmtNb2RlICwgc2NvcmUsIHNldFNjb3JlfSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCB7IHNjb3JlLCBzZXRTY29yZSB9ID0gdXNlQ29udGV4dCh0aGVtZXMpO1xuICBjb25zdCBbZmxhZywgc2V0RmxhZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFthbnMsIHNldEFuc10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbZ2VuZXJhdGVkTnVtYmVycywgc2V0R2VuZXJhdGVkTnVtYmVyc10gPSB1c2VTdGF0ZTxhbnk+KFtdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRHZW5lcmF0ZWROdW1iZXJzKFtdKTtcbiAgICBzZXRJbmRleChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkpO1xuICB9LCBbXSk7XG4gIGNvbnN0IGRhdGEgPSBbXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyB0aGUgY2FwaXRhbCBvZiBGcmFuY2U/XCIsXG4gICAgICBvcHRpb25zOiBbXCJMb25kb25cIiwgXCJQYXJpc1wiLCBcIkJlcmxpblwiLCBcIk1hZHJpZFwiXSxcbiAgICAgIGFuc3dlcjogXCJQYXJpc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hvIHBhaW50ZWQgdGhlIE1vbmEgTGlzYT9cIixcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgXCJWaW5jZW50IHZhbiBHb2doXCIsXG4gICAgICAgIFwiTGVvbmFyZG8gZGEgVmluY2lcIixcbiAgICAgICAgXCJQYWJsbyBQaWNhc3NvXCIsXG4gICAgICAgIFwiTWljaGVsYW5nZWxvXCIsXG4gICAgICBdLFxuICAgICAgYW5zd2VyOiBcIkxlb25hcmRvIGRhIFZpbmNpXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaGF0IGlzIHRoZSBsYXJnZXN0IG1hbW1hbCBpbiB0aGUgd29ybGQ/XCIsXG4gICAgICBvcHRpb25zOiBbXCJFbGVwaGFudFwiLCBcIkJsdWUgV2hhbGVcIiwgXCJHaXJhZmZlXCIsIFwiSGlwcG9wb3RhbXVzXCJdLFxuICAgICAgYW5zd2VyOiBcIkJsdWUgV2hhbGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgaXMgdGhlIGN1cnJlbmN5IG9mIEphcGFuP1wiLFxuICAgICAgb3B0aW9uczogW1wiRG9sbGFyXCIsIFwiRXVyb1wiLCBcIlllblwiLCBcIlBvdW5kXCJdLFxuICAgICAgYW5zd2VyOiBcIlllblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyB0aGUgdGFsbGVzdCBtb3VudGFpbiBpbiB0aGUgd29ybGQ/XCIsXG4gICAgICBvcHRpb25zOiBbXCJNb3VudCBFdmVyZXN0XCIsIFwiSzJcIiwgXCJLaWxpbWFuamFyb1wiLCBcIkRlbmFsaVwiXSxcbiAgICAgIGFuc3dlcjogXCJNb3VudCBFdmVyZXN0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaGF0IGlzIHRoZSBsYXJnZXN0IGNvdW50cnkgaW4gdGhlIHdvcmxkIGJ5IGxhbmQgYXJlYT9cIixcbiAgICAgIG9wdGlvbnM6IFtcIkNhbmFkYVwiLCBcIlJ1c3NpYVwiLCBcIkNoaW5hXCIsIFwiVW5pdGVkIFN0YXRlc1wiXSxcbiAgICAgIGFuc3dlcjogXCJSdXNzaWFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgaXMgdGhlIGNoZW1pY2FsIHN5bWJvbCBmb3IgZ29sZD9cIixcbiAgICAgIG9wdGlvbnM6IFtcIkdvXCIsIFwiQXVcIiwgXCJHZFwiLCBcIkFnXCJdLFxuICAgICAgYW5zd2VyOiBcIkF1XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaGF0IGlzIHRoZSBzbWFsbGVzdCBwbGFuZXQgaW4gb3VyIHNvbGFyIHN5c3RlbT9cIixcbiAgICAgIG9wdGlvbnM6IFtcIlZlbnVzXCIsIFwiTWFyc1wiLCBcIk1lcmN1cnlcIiwgXCJFYXJ0aFwiXSxcbiAgICAgIGFuc3dlcjogXCJNZXJjdXJ5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaGF0IGlzIHRoZSBsYXJnZXN0IHBsYW5ldCBpbiBvdXIgc29sYXIgc3lzdGVtP1wiLFxuICAgICAgb3B0aW9uczogW1wiSnVwaXRlclwiLCBcIlNhdHVyblwiLCBcIk5lcHR1bmVcIiwgXCJVcmFudXNcIl0sXG4gICAgICBhbnN3ZXI6IFwiSnVwaXRlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyB0aGUgbmFtZSBvZiB0aGUgZmlyc3QgbWFuIHRvIHdhbGsgb24gdGhlIG1vb24/XCIsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgIFwiQnV6eiBBbGRyaW5cIixcbiAgICAgICAgXCJOZWlsIEFybXN0cm9uZ1wiLFxuICAgICAgICBcIll1cmkgR2FnYXJpblwiLFxuICAgICAgICBcIkFsYW4gU2hlcGFyZFwiLFxuICAgICAgXSxcbiAgICAgIGFuc3dlcjogXCJOZWlsIEFybXN0cm9uZ1wiLFxuICAgIH0sXG4gIF07XG4gIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICBsZXQgcmFuZG9tTnVtYmVyOiBhbnk7XG4gIGNvbnN0IGdlbmVyYXRlUmFuZG9tTnVtYmVyID0gKCkgPT4ge1xuICAgIGlmIChnZW5lcmF0ZWROdW1iZXJzLmxlbmd0aCArIDEgPT0gZGF0YS5sZW5ndGgpIHtcbiAgICAgIHJvdXRlci5wdXNoKHtcbiAgICAgICAgcGF0aG5hbWU6IFwiL1dpblBhZ2VcIixcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJhbmRvbU51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblxuICAgIGlmIChnZW5lcmF0ZWROdW1iZXJzLmluY2x1ZGVzKHJhbmRvbU51bWJlcikgfHwgcmFuZG9tTnVtYmVyID09IDApIHtcbiAgICAgIGdlbmVyYXRlUmFuZG9tTnVtYmVyKCk7XG4gICAgfVxuICAgIHNldEdlbmVyYXRlZE51bWJlcnMoWy4uLmdlbmVyYXRlZE51bWJlcnMsIHJhbmRvbU51bWJlcl0pO1xuICAgIC8vIGNvbnNvbGUubG9nKGdlbmVyYXRlZE51bWJlcnMpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0SW5kZXgocmFuZG9tTnVtYmVyKTtcbiAgICB9LCAxMDAwKTtcbiAgICBpbmNyZXNlU2NvcmUoKTtcbiAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxhYmVsc3BcIik7XG4gICAgY29uc29sZS5sb2cobGFiZWwpO1xuICAgIGxhYmVsLmZvckVhY2goKGVsZW06IGFueSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coZWxlbS5pbm5lclRleHQpO1xuICAgICAgaWYgKGVsZW0uaW5uZXJUZXh0ID09PSBkYXRhW2luZGV4XS5hbnN3ZXIpIHtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3Q7XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChcImJnLWdyZWVuLTQwMFwiKTtcbiAgICAgIH0gZWxzZSBpZiAoYW5zID09PSBlbGVtLmlubmVyVGV4dCkge1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoXCJiZy1yZWQtNDAwXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKGdlbmVyYXRlZE51bWJlcnMpO1xuICB9O1xuXG4gIGNvbnN0IGluY3Jlc2VTY29yZSA9ICgpID0+IHtcbiAgICBpZiAoYW5zID09IGRhdGFbaW5kZXhdLmFuc3dlcikge1xuICAgICAgc2V0U2NvcmUoMSArIHNjb3JlKTtcbiAgICB9XG5cbiAgICBjb25zdCByYWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmFkaW9cIik7XG4gICAgcmFkaW8uZm9yRWFjaCgoZTogYW55LCBpOiBhbnkpID0+IHtcbiAgICAgIGlmIChlLmNoZWNrZWQpIHtcbiAgICAgICAgZS5jaGVja2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxhYmVsc3BcIik7XG4gICAgbGFiZWwuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJiZy15ZWxsb3ctNTAwXCIpO1xuICAgICAgZXZlbnQuY2xhc3NMaXN0LnJlbW92ZShcImJnLXJlZC00MDBcIik7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZXZlbnQuY2xhc3NMaXN0LnJlbW92ZShcImJnLXJlZC00MDBcIik7XG4gICAgICAgIGV2ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1ncmVlbi00MDBcIik7XG4gICAgICB9LCAyMDAwKTtcbiAgICB9KTtcbiAgICBzZXRGbGFnKGZhbHNlKTtcbiAgICBjb25zb2xlLmxvZyhcInJlbmRvbSBhcnJheVwiLCBnZW5lcmF0ZWROdW1iZXJzKTtcbiAgICBjb25zb2xlLmxvZyhcImluZGV4ID0+IFwiLCBpbmRleCk7XG4gIH07XG4gIGNvbnN0IGhhbmRlbENoYW5nZSA9IChlOiBhbnksIHJlc3VsdDogYW55KSA9PiB7XG4gICAgLy8gYWxlcnQoXCJoZWxsb1wiKVxuXG4gICAgc2V0QW5zKHJlc3VsdCk7XG4gICAgc2V0RmxhZyh0cnVlKTtcbiAgICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldC5jaGlsZE5vZGVzWzBdLmlubmVyVGV4dCk7XG4gICAgLy8gY29uc29sZS5sb2coKTtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGFiZWxzcFwiKTtcbiAgICBsYWJlbC5mb3JFYWNoKChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmNsYXNzTGlzdC5jb250YWlucyhcImJnLXllbGxvdy01MDBcIikpIHtcbiAgICAgICAgZXZlbnQuY2xhc3NMaXN0LnJlbW92ZShcImJnLXllbGxvdy01MDBcIik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gY29uc29sZS5sb2coZSk7XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImJnLXllbGxvdy01MDBcIik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXJrOmJnLVsjMTkyNzM0XSBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtW2NhbGMoMTAwdmgtOTJweCldIGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tYXV0byAgYWxpZ24tbWlkZGxlIHAtNSBtciBib3JkZXItNCBib3JkZXItc29saWQgdy1bNzAlXSByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWV4dHJhYm9sZCB0ZXh0LTN4bCBtYi01IGZvbnQtbm90byBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICB7aW5kZXggPyBkYXRhW2luZGV4XS5xdWVzdGlvbiA6IFwiXCJ9XG4gICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge2luZGV4XG4gICAgICAgICAgICAgICAgICA/IGRhdGFbaW5kZXhdLm9wdGlvbnMubWFwKChlOiBhbnksIGk6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8RnJhZ21lbnQga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyYWRpbyBoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyYWRpb0J1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9e2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2tleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRlbENoYW5nZShwLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclx0bGFiZWxzcCBwLTQgYmctZ3JheS02MDAgbS0zIGxhc3Q6bWItMCByb3VuZGVkLW1kIGJsb2NrIGhvdmVyOmJnLW9yYW5nZS00MDAgbWwtMiB0ZXh0LXNtIGZvbnQtbWVkaXVtICB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC1ncmF5LTMwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICA6IFwiIFwifVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LXdoaXRlIGJnLWdyYXktODAwIGhvdmVyOmJnLWdyYXktOTAwIGZvY3VzOnJpbmctZ3JheS0zMDAgZm9udC1tZWRpdW0gcm91bmRlZC1sZyB0ZXh0LXNtIHB4LTUgcHktMi41IG1yLTIgbWItMiBkYXJrOmJnLXdoaXRlIGRhcms6dGV4dC1ibGFjayBkYXJrOmZvY3VzOnJpbmctZ3JheS03MDAgZGFyazpib3JkZXItZ3JheS03MDBgfVxuICAgICAgICAgICAgICBvbkNsaWNrPXtnZW5lcmF0ZVJhbmRvbU51bWJlcn1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFmbGFnID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyLWJcdFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgTmV4dFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsicm91dGVyIiwiRnJhZ21lbnQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ0aGVtZXMiLCJIb21lIiwiaW5kZXgiLCJzZXRJbmRleCIsInNjb3JlIiwic2V0U2NvcmUiLCJmbGFnIiwic2V0RmxhZyIsImFucyIsInNldEFucyIsImdlbmVyYXRlZE51bWJlcnMiLCJzZXRHZW5lcmF0ZWROdW1iZXJzIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZGF0YSIsInF1ZXN0aW9uIiwib3B0aW9ucyIsImFuc3dlciIsInJhbmRvbU51bWJlciIsImdlbmVyYXRlUmFuZG9tTnVtYmVyIiwibGVuZ3RoIiwicHVzaCIsInBhdGhuYW1lIiwiaW5jbHVkZXMiLCJzZXRUaW1lb3V0IiwiaW5jcmVzZVNjb3JlIiwibGFiZWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb25zb2xlIiwibG9nIiwiZm9yRWFjaCIsImVsZW0iLCJpbm5lclRleHQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyYWRpbyIsImUiLCJpIiwiY2hlY2tlZCIsImV2ZW50IiwicmVtb3ZlIiwiaGFuZGVsQ2hhbmdlIiwicmVzdWx0IiwiY29udGFpbnMiLCJ0YXJnZXQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm1hcCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwiaWQiLCJuYW1lIiwiaHRtbEZvciIsIm9uQ2xpY2siLCJwIiwiYnV0dG9uIiwiZGlzYWJsZWQiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});