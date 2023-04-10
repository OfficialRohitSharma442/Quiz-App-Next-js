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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/context */ \"./context/context.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    // const [flag, setFlag] = useState(false);\n    const [ans, setAns] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [generatedNumbers, setGeneratedNumbers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // const [dark, setDark] = useState(false);\n    const { dark , setDark  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_2__.themes);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIndex(Math.floor(Math.random() * 10));\n    }, []);\n    const data = [\n        {\n            question: \"What is the capital of France?\",\n            options: [\n                \"London\",\n                \"Paris\",\n                \"Berlin\",\n                \"Madrid\"\n            ],\n            answer: \"Paris\"\n        },\n        {\n            question: \"Who painted the Mona Lisa?\",\n            options: [\n                \"Vincent van Gogh\",\n                \"Leonardo da Vinci\",\n                \"Pablo Picasso\",\n                \"Michelangelo\"\n            ],\n            answer: \"Leonardo da Vinci\"\n        },\n        {\n            question: \"What is the largest mammal in the world?\",\n            options: [\n                \"Elephant\",\n                \"Blue Whale\",\n                \"Giraffe\",\n                \"Hippopotamus\"\n            ],\n            answer: \"Blue Whale\"\n        },\n        {\n            question: \"What is the currency of Japan?\",\n            options: [\n                \"Dollar\",\n                \"Euro\",\n                \"Yen\",\n                \"Pound\"\n            ],\n            answer: \"Yen\"\n        },\n        {\n            question: \"What is the tallest mountain in the world?\",\n            options: [\n                \"Mount Everest\",\n                \"K2\",\n                \"Kilimanjaro\",\n                \"Denali\"\n            ],\n            answer: \"Mount Everest\"\n        },\n        {\n            question: \"What is the largest country in the world by land area?\",\n            options: [\n                \"Canada\",\n                \"Russia\",\n                \"China\",\n                \"United States\"\n            ],\n            answer: \"Russia\"\n        },\n        {\n            question: \"What is the chemical symbol for gold?\",\n            options: [\n                \"Go\",\n                \"Au\",\n                \"Gd\",\n                \"Ag\"\n            ],\n            answer: \"Au\"\n        },\n        {\n            question: \"What is the smallest planet in our solar system?\",\n            options: [\n                \"Venus\",\n                \"Mars\",\n                \"Mercury\",\n                \"Earth\"\n            ],\n            answer: \"Mercury\"\n        },\n        {\n            question: \"What is the largest planet in our solar system?\",\n            options: [\n                \"Jupiter\",\n                \"Saturn\",\n                \"Neptune\",\n                \"Uranus\"\n            ],\n            answer: \"Jupiter\"\n        },\n        {\n            question: \"What is the name of the first man to walk on the moon?\",\n            options: [\n                \"Buzz Aldrin\",\n                \"Neil Armstrong\",\n                \"Yuri Gagarin\",\n                \"Alan Shepard\"\n            ],\n            answer: \"Neil Armstrong\"\n        }\n    ];\n    const generateRandomNumber = ()=>{\n        if (generatedNumbers.length === data.length) {\n            alert(\"Exam Completed Your Score is \".concat(score, \" out of \").concat(data.length - 1));\n            return null;\n        }\n        let randomNumber;\n        do {\n            randomNumber = Math.floor(Math.random() * 10);\n        }while (generatedNumbers.includes(randomNumber));\n        setGeneratedNumbers([\n            ...generatedNumbers,\n            randomNumber\n        ]);\n        // console.log(generatedNumbers);\n        setTimeout(()=>{\n            setIndex(randomNumber);\n        }, 2000);\n        increseScore();\n        let label = document.querySelectorAll(\".labelsp\");\n        console.log(label);\n        label.forEach((elem)=>{\n            console.log(elem.innerText);\n            if (elem.innerText === data[index].answer) {\n                elem.classList;\n                elem.classList.add(\"bg-green-400\");\n            } else if (ans === elem.innerText) {\n                elem.classList.add(\"bg-red-400\");\n            }\n        });\n    };\n    const increseScore = ()=>{\n        if (ans == data[index].answer) {\n            setScore(1 + score);\n        }\n        const radio = document.querySelectorAll(\".radio\");\n        radio.forEach((e, i)=>{\n            if (e.checked) {\n                e.checked = false;\n            }\n        });\n        const label = document.querySelectorAll(\".labelsp\");\n        label.forEach((event)=>{\n            event.classList.remove(\"bg-yellow-500\");\n            event.classList.remove(\"bg-red-400\");\n            setTimeout(()=>{\n                event.classList.remove(\"bg-red-400\");\n                event.classList.remove(\"bg-green-400\");\n            }, 2000);\n        });\n    };\n    const handelChange = (e, result)=>{\n        // alert(\"hello\")\n        setAns(result);\n        // console.log(e.target.childNodes[0].innerText);\n        // console.log();\n        const label = document.querySelectorAll(\".labelsp\");\n        label.forEach((event)=>{\n            if (event.classList.contains(\"bg-yellow-500\")) {\n                event.classList.remove(\"bg-yellow-500\");\n            }\n        });\n        console.log(e);\n        e.target.classList.add(\"bg-yellow-500\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"dark:bg-[#192734] \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-[calc(100vh-92px)] flex items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"m-auto  align-middle p-5 mr border-4 border-solid w-[70%] rounded-lg\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"font-extrabold text-3xl mb-5   font-noto dark:text-white\",\n                                    children: index && data[index].question\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                    lineNumber: 148,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: index && data[index].options.map((e, i)=>{\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    type: \"radio\",\n                                                    className: \"radio hidden\",\n                                                    value: e,\n                                                    id: i,\n                                                    name: \"radioButton\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 156,\n                                                    columnNumber: 25\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    htmlFor: i,\n                                                    onClick: (p)=>{\n                                                        handelChange(p, e);\n                                                    },\n                                                    className: \"cursor-pointer labelsp p-4 bg-gray-600 mb-3 last:mb-0 rounded-md block hover:bg-orange-400 ml-2 text-sm font-medium  text-gray-900 dark:text-gray-300\",\n                                                    children: e\n                                                }, i, false, {\n                                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 163,\n                                                    columnNumber: 25\n                                                }, this)\n                                            ]\n                                        }, void 0, true);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                    lineNumber: 151,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                            lineNumber: 147,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                        lineNumber: 146,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-end\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-white dark:text-black dark:focus:ring-gray-700 dark:border-gray-700\",\n                            onClick: generateRandomNumber,\n                            children: \"Next\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                            lineNumber: 181,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                        lineNumber: 180,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                lineNumber: 145,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n            lineNumber: 144,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"ceBwaDO7RQ/hRXEAb0NRRbQy+8I=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxHQUFHLENBQUM7SUFDekI7SUFFQSxxQkFDRTtrQkFDRSw0RUFBQ1c7c0JBQ0MsNEVBQUNBO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0M7b0NBQUdELFdBQVU7OENBQ1g3QyxTQUFTYSxJQUFJLENBQUNiLE1BQU0sQ0FBQ2MsUUFBUTs7Ozs7OzhDQUVoQyw4REFBQzhCOzhDQUNFNUMsU0FBU2EsSUFBSSxDQUFDYixNQUFNLENBQUNlLE9BQU8sQ0FBQ2dDLEdBQUcsQ0FBQyxDQUFDWixHQUFRQyxJQUFXO3dDQUNsRCxxQkFDRTs7OERBRUUsOERBQUNZO29EQUNDQyxNQUFLO29EQUNMSixXQUFVO29EQUNWSyxPQUFPZjtvREFDUGdCLElBQUlmO29EQUNKZ0IsTUFBSzs7Ozs7OzhEQUVQLDhEQUFDNUI7b0RBQ0M2QixTQUFTakI7b0RBRVRrQixTQUFTLENBQUNDLElBQU07d0RBQ2RmLGFBQWFlLEdBQUdwQjtvREFDbEI7b0RBQ0FVLFdBQVU7OERBRVRWO21EQU5JQzs7Ozs7OztvQ0FXYjs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSVIsOERBQUNRO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDVzs0QkFDQ1gsV0FBWTs0QkFDWlMsU0FBU3JDO3NDQUNWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFiLENBQUM7R0E3THVCbEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdGhlbWVzIH0gZnJvbSBcIkAvY29udGV4dC9jb250ZXh0XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlPGFueT4oKTtcbiAgY29uc3QgW3Njb3JlLCBzZXRTY29yZV0gPSB1c2VTdGF0ZSgwKTtcbiAgLy8gY29uc3QgW2ZsYWcsIHNldEZsYWddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbYW5zLCBzZXRBbnNdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2dlbmVyYXRlZE51bWJlcnMsIHNldEdlbmVyYXRlZE51bWJlcnNdID0gdXNlU3RhdGU8YW55PihbXSk7XG4gIC8vIGNvbnN0IFtkYXJrLCBzZXREYXJrXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyBkYXJrLCBzZXREYXJrIH0gPSB1c2VDb250ZXh0KHRoZW1lcyk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SW5kZXgoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApKTtcbiAgfSwgW10pO1xuICBjb25zdCBkYXRhID0gW1xuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgaXMgdGhlIGNhcGl0YWwgb2YgRnJhbmNlP1wiLFxuICAgICAgb3B0aW9uczogW1wiTG9uZG9uXCIsIFwiUGFyaXNcIiwgXCJCZXJsaW5cIiwgXCJNYWRyaWRcIl0sXG4gICAgICBhbnN3ZXI6IFwiUGFyaXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldobyBwYWludGVkIHRoZSBNb25hIExpc2E/XCIsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgIFwiVmluY2VudCB2YW4gR29naFwiLFxuICAgICAgICBcIkxlb25hcmRvIGRhIFZpbmNpXCIsXG4gICAgICAgIFwiUGFibG8gUGljYXNzb1wiLFxuICAgICAgICBcIk1pY2hlbGFuZ2Vsb1wiLFxuICAgICAgXSxcbiAgICAgIGFuc3dlcjogXCJMZW9uYXJkbyBkYSBWaW5jaVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyB0aGUgbGFyZ2VzdCBtYW1tYWwgaW4gdGhlIHdvcmxkP1wiLFxuICAgICAgb3B0aW9uczogW1wiRWxlcGhhbnRcIiwgXCJCbHVlIFdoYWxlXCIsIFwiR2lyYWZmZVwiLCBcIkhpcHBvcG90YW11c1wiXSxcbiAgICAgIGFuc3dlcjogXCJCbHVlIFdoYWxlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaGF0IGlzIHRoZSBjdXJyZW5jeSBvZiBKYXBhbj9cIixcbiAgICAgIG9wdGlvbnM6IFtcIkRvbGxhclwiLCBcIkV1cm9cIiwgXCJZZW5cIiwgXCJQb3VuZFwiXSxcbiAgICAgIGFuc3dlcjogXCJZZW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgaXMgdGhlIHRhbGxlc3QgbW91bnRhaW4gaW4gdGhlIHdvcmxkP1wiLFxuICAgICAgb3B0aW9uczogW1wiTW91bnQgRXZlcmVzdFwiLCBcIksyXCIsIFwiS2lsaW1hbmphcm9cIiwgXCJEZW5hbGlcIl0sXG4gICAgICBhbnN3ZXI6IFwiTW91bnQgRXZlcmVzdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyB0aGUgbGFyZ2VzdCBjb3VudHJ5IGluIHRoZSB3b3JsZCBieSBsYW5kIGFyZWE/XCIsXG4gICAgICBvcHRpb25zOiBbXCJDYW5hZGFcIiwgXCJSdXNzaWFcIiwgXCJDaGluYVwiLCBcIlVuaXRlZCBTdGF0ZXNcIl0sXG4gICAgICBhbnN3ZXI6IFwiUnVzc2lhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaGF0IGlzIHRoZSBjaGVtaWNhbCBzeW1ib2wgZm9yIGdvbGQ/XCIsXG4gICAgICBvcHRpb25zOiBbXCJHb1wiLCBcIkF1XCIsIFwiR2RcIiwgXCJBZ1wiXSxcbiAgICAgIGFuc3dlcjogXCJBdVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyB0aGUgc21hbGxlc3QgcGxhbmV0IGluIG91ciBzb2xhciBzeXN0ZW0/XCIsXG4gICAgICBvcHRpb25zOiBbXCJWZW51c1wiLCBcIk1hcnNcIiwgXCJNZXJjdXJ5XCIsIFwiRWFydGhcIl0sXG4gICAgICBhbnN3ZXI6IFwiTWVyY3VyeVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyB0aGUgbGFyZ2VzdCBwbGFuZXQgaW4gb3VyIHNvbGFyIHN5c3RlbT9cIixcbiAgICAgIG9wdGlvbnM6IFtcIkp1cGl0ZXJcIiwgXCJTYXR1cm5cIiwgXCJOZXB0dW5lXCIsIFwiVXJhbnVzXCJdLFxuICAgICAgYW5zd2VyOiBcIkp1cGl0ZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgaXMgdGhlIG5hbWUgb2YgdGhlIGZpcnN0IG1hbiB0byB3YWxrIG9uIHRoZSBtb29uP1wiLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICBcIkJ1enogQWxkcmluXCIsXG4gICAgICAgIFwiTmVpbCBBcm1zdHJvbmdcIixcbiAgICAgICAgXCJZdXJpIEdhZ2FyaW5cIixcbiAgICAgICAgXCJBbGFuIFNoZXBhcmRcIixcbiAgICAgIF0sXG4gICAgICBhbnN3ZXI6IFwiTmVpbCBBcm1zdHJvbmdcIixcbiAgICB9LFxuICBdO1xuICBjb25zdCBnZW5lcmF0ZVJhbmRvbU51bWJlciA9ICgpID0+IHtcbiAgICBpZiAoZ2VuZXJhdGVkTnVtYmVycy5sZW5ndGggPT09IGRhdGEubGVuZ3RoKSB7XG4gICAgICBhbGVydChgRXhhbSBDb21wbGV0ZWQgWW91ciBTY29yZSBpcyAke3Njb3JlfSBvdXQgb2YgJHtkYXRhLmxlbmd0aCAtIDF9YCk7XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBsZXQgcmFuZG9tTnVtYmVyOiBhbnk7XG4gICAgZG8ge1xuICAgICAgcmFuZG9tTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIH0gd2hpbGUgKGdlbmVyYXRlZE51bWJlcnMuaW5jbHVkZXMocmFuZG9tTnVtYmVyKSk7XG5cbiAgICBzZXRHZW5lcmF0ZWROdW1iZXJzKFsuLi5nZW5lcmF0ZWROdW1iZXJzLCByYW5kb21OdW1iZXJdKTtcbiAgICAvLyBjb25zb2xlLmxvZyhnZW5lcmF0ZWROdW1iZXJzKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldEluZGV4KHJhbmRvbU51bWJlcik7XG4gICAgfSwgMjAwMCk7XG4gICAgaW5jcmVzZVNjb3JlKCk7XG4gICAgbGV0IGxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sYWJlbHNwXCIpO1xuICAgIGNvbnNvbGUubG9nKGxhYmVsKTtcbiAgICBsYWJlbC5mb3JFYWNoKChlbGVtOiBhbnkpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVsZW0uaW5uZXJUZXh0KTtcbiAgICAgIGlmIChlbGVtLmlubmVyVGV4dCA9PT0gZGF0YVtpbmRleF0uYW5zd2VyKSB7XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0O1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoXCJiZy1ncmVlbi00MDBcIik7XG4gICAgICB9IGVsc2UgaWYgKGFucyA9PT0gZWxlbS5pbm5lclRleHQpIHtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKFwiYmctcmVkLTQwMFwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBpbmNyZXNlU2NvcmUgPSAoKSA9PiB7XG4gICAgaWYgKGFucyA9PSBkYXRhW2luZGV4XS5hbnN3ZXIpIHtcbiAgICAgIHNldFNjb3JlKDEgKyBzY29yZSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmFkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJhZGlvXCIpO1xuICAgIHJhZGlvLmZvckVhY2goKGU6IGFueSwgaTogYW55KSA9PiB7XG4gICAgICBpZiAoZS5jaGVja2VkKSB7XG4gICAgICAgIGUuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sYWJlbHNwXCIpO1xuICAgIGxhYmVsLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYmcteWVsbG93LTUwMFwiKTtcbiAgICAgIGV2ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1yZWQtNDAwXCIpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGV2ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1yZWQtNDAwXCIpO1xuICAgICAgICBldmVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYmctZ3JlZW4tNDAwXCIpO1xuICAgICAgfSwgMjAwMCk7XG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IGhhbmRlbENoYW5nZSA9IChlOiBhbnksIHJlc3VsdDogYW55KSA9PiB7XG4gICAgLy8gYWxlcnQoXCJoZWxsb1wiKVxuICAgIHNldEFucyhyZXN1bHQpO1xuICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LmNoaWxkTm9kZXNbMF0uaW5uZXJUZXh0KTtcbiAgICAvLyBjb25zb2xlLmxvZygpO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sYWJlbHNwXCIpO1xuICAgIGxhYmVsLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYmcteWVsbG93LTUwMFwiKSkge1xuICAgICAgICBldmVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYmcteWVsbG93LTUwMFwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYmcteWVsbG93LTUwMFwiKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhcms6YmctWyMxOTI3MzRdIFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1bY2FsYygxMDB2aC05MnB4KV0gZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS1hdXRvICBhbGlnbi1taWRkbGUgcC01IG1yIGJvcmRlci00IGJvcmRlci1zb2xpZCB3LVs3MCVdIHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtZXh0cmFib2xkIHRleHQtM3hsIG1iLTUgXHRcdGZvbnQtbm90byBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICB7aW5kZXggJiYgZGF0YVtpbmRleF0ucXVlc3Rpb259XG4gICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge2luZGV4ICYmIGRhdGFbaW5kZXhdLm9wdGlvbnMubWFwKChlOiBhbnksIGk6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBrZXk9e2V9PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyYWRpbyBoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyYWRpb0J1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KHApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kZWxDaGFuZ2UocCwgZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXHRsYWJlbHNwIHAtNCBiZy1ncmF5LTYwMCBtYi0zIGxhc3Q6bWItMCByb3VuZGVkLW1kIGJsb2NrIGhvdmVyOmJnLW9yYW5nZS00MDAgbWwtMiB0ZXh0LXNtIGZvbnQtbWVkaXVtICB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC1ncmF5LTMwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmRcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC13aGl0ZSBiZy1ncmF5LTgwMCBob3ZlcjpiZy1ncmF5LTkwMCBmb2N1czpyaW5nLWdyYXktMzAwIGZvbnQtbWVkaXVtIHJvdW5kZWQtbGcgdGV4dC1zbSBweC01IHB5LTIuNSBtci0yIG1iLTIgZGFyazpiZy13aGl0ZSBkYXJrOnRleHQtYmxhY2sgZGFyazpmb2N1czpyaW5nLWdyYXktNzAwIGRhcms6Ym9yZGVyLWdyYXktNzAwYH1cbiAgICAgICAgICAgICAgb25DbGljaz17Z2VuZXJhdGVSYW5kb21OdW1iZXJ9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIE5leHRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInRoZW1lcyIsIkhvbWUiLCJpbmRleCIsInNldEluZGV4Iiwic2NvcmUiLCJzZXRTY29yZSIsImFucyIsInNldEFucyIsImdlbmVyYXRlZE51bWJlcnMiLCJzZXRHZW5lcmF0ZWROdW1iZXJzIiwiZGFyayIsInNldERhcmsiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJkYXRhIiwicXVlc3Rpb24iLCJvcHRpb25zIiwiYW5zd2VyIiwiZ2VuZXJhdGVSYW5kb21OdW1iZXIiLCJsZW5ndGgiLCJhbGVydCIsInJhbmRvbU51bWJlciIsImluY2x1ZGVzIiwic2V0VGltZW91dCIsImluY3Jlc2VTY29yZSIsImxhYmVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29uc29sZSIsImxvZyIsImZvckVhY2giLCJlbGVtIiwiaW5uZXJUZXh0IiwiY2xhc3NMaXN0IiwiYWRkIiwicmFkaW8iLCJlIiwiaSIsImNoZWNrZWQiLCJldmVudCIsInJlbW92ZSIsImhhbmRlbENoYW5nZSIsInJlc3VsdCIsImNvbnRhaW5zIiwidGFyZ2V0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJtYXAiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsImlkIiwibmFtZSIsImh0bWxGb3IiLCJvbkNsaWNrIiwicCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});