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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    // const [answer, setAnswer] = useState(false);\n    const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [flag, setFlag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [ans, setAns] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [generatedNumbers, setGeneratedNumbers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [dark, setDark] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const data = [\n        {\n            question: \"What is the capital of France?\",\n            options: [\n                \"London\",\n                \"Paris\",\n                \"Berlin\",\n                \"Madrid\"\n            ],\n            answer: \"Paris\"\n        },\n        {\n            question: \"Who painted the Mona Lisa?\",\n            options: [\n                \"Vincent van Gogh\",\n                \"Leonardo da Vinci\",\n                \"Pablo Picasso\",\n                \"Michelangelo\"\n            ],\n            answer: \"Leonardo da Vinci\"\n        },\n        {\n            question: \"What is the largest mammal in the world?\",\n            options: [\n                \"Elephant\",\n                \"Blue Whale\",\n                \"Giraffe\",\n                \"Hippopotamus\"\n            ],\n            answer: \"Blue Whale\"\n        },\n        {\n            question: \"What is the currency of Japan?\",\n            options: [\n                \"Dollar\",\n                \"Euro\",\n                \"Yen\",\n                \"Pound\"\n            ],\n            answer: \"Yen\"\n        },\n        {\n            question: \"What is the tallest mountain in the world?\",\n            options: [\n                \"Mount Everest\",\n                \"K2\",\n                \"Kilimanjaro\",\n                \"Denali\"\n            ],\n            answer: \"Mount Everest\"\n        },\n        {\n            question: \"What is the largest country in the world by land area?\",\n            options: [\n                \"Canada\",\n                \"Russia\",\n                \"China\",\n                \"United States\"\n            ],\n            answer: \"Russia\"\n        },\n        {\n            question: \"What is the chemical symbol for gold?\",\n            options: [\n                \"Go\",\n                \"Au\",\n                \"Gd\",\n                \"Ag\"\n            ],\n            answer: \"Au\"\n        },\n        {\n            question: \"What is the smallest planet in our solar system?\",\n            options: [\n                \"Venus\",\n                \"Mars\",\n                \"Mercury\",\n                \"Earth\"\n            ],\n            answer: \"Mercury\"\n        },\n        {\n            question: \"What is the largest planet in our solar system?\",\n            options: [\n                \"Jupiter\",\n                \"Saturn\",\n                \"Neptune\",\n                \"Uranus\"\n            ],\n            answer: \"Jupiter\"\n        },\n        {\n            question: \"What is the name of the first man to walk on the moon?\",\n            options: [\n                \"Buzz Aldrin\",\n                \"Neil Armstrong\",\n                \"Yuri Gagarin\",\n                \"Alan Shepard\"\n            ],\n            answer: \"Neil Armstrong\"\n        }\n    ];\n    const generateRandomNumber = ()=>{\n        if (generatedNumbers.length + 1 === data.length) {\n            alert(\"Exam Completed Your Score is \".concat(score, \" out of \").concat(data.length - 1));\n            setFlag(true);\n            return null;\n        }\n        let randomNumber;\n        do {\n            randomNumber = Math.floor(Math.random() * 10);\n        }while (generatedNumbers.includes(randomNumber));\n        setGeneratedNumbers([\n            ...generatedNumbers,\n            randomNumber\n        ]);\n        console.log(generatedNumbers);\n        setIndex(randomNumber);\n        increseScore();\n    };\n    const increseScore = ()=>{\n        if (ans == data[index].answer) {\n            setScore(score + 1);\n        }\n        const radio = document.querySelectorAll(\".radio\");\n        radio.forEach((e, i)=>{\n            if (e.checked) {\n                e.checked = false;\n            }\n        });\n    };\n    const handelChange = (e)=>{\n        setAns(e.target.value);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (localStorage.getItem(\"DarkMode\") === \"dark\") {\n            setDark(true);\n        }\n    }, []);\n    const darkMode = ()=>{\n        if (localStorage.getItem(\"DarkMode\") != \"dark\") {\n            localStorage.setItem(\"DarkMode\", \"dark\");\n            setDark(true);\n        } else {\n            localStorage.setItem(\"DarkMode\", \"white\");\n            setDark(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: dark ? \"dark\" : \" \",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"dark:bg-[#192734] \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-[calc(100%2rem)]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"m-auto  align-middle p-5 mr border-4 border-solid w-[70%] rounded-lg\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"font-extrabold text-3xl mb-5   font-noto dark:text-white\",\n                                    children: data[index].question\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                    lineNumber: 127,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: data[index].options && data[index].options.map((e, i)=>{\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"p-3 align-middle bg-gray-600 text-white mb-3 last:mb-0 rounded-md flex justify-center hover:bg-orange-400\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    type: \"radio\",\n                                                    className: \"radio w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600   dark:bg-gray-700 dark:border-gray-600\",\n                                                    value: e,\n                                                    id: i,\n                                                    name: \"radioButton\",\n                                                    onChange: handelChange\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 138,\n                                                    columnNumber: 25\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    className: \"w-full  ml-2 text-sm font-medium text-gray-900 dark:text-gray-300\",\n                                                    htmlFor: i,\n                                                    children: e\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 146,\n                                                    columnNumber: 25\n                                                }, this)\n                                            ]\n                                        }, i, true, {\n                                            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                            lineNumber: 134,\n                                            columnNumber: 23\n                                        }, this);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                    lineNumber: 130,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                            lineNumber: 126,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                        lineNumber: 125,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-around  absolute bottom-0 right-0\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-white dark:text-black dark:focus:ring-gray-700 dark:border-gray-700\",\n                            onClick: generateRandomNumber,\n                            children: \"Next\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                            lineNumber: 159,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                        lineNumber: 158,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                lineNumber: 124,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n            lineNumber: 123,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"3lJyjeZhhD49EVkg0av5b2gEchA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNaVyxTQUFTckM7c0NBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWIsQ0FBQztHQXZLdUJqQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRlclwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgLy8gY29uc3QgW2Fuc3dlciwgc2V0QW5zd2VyXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc2NvcmUsIHNldFNjb3JlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbZmxhZywgc2V0RmxhZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFthbnMsIHNldEFuc10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2dlbmVyYXRlZE51bWJlcnMsIHNldEdlbmVyYXRlZE51bWJlcnNdID0gdXNlU3RhdGU8YW55PihbXSk7XG4gIGNvbnN0IFtkYXJrLCBzZXREYXJrXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBkYXRhID0gW1xuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgaXMgdGhlIGNhcGl0YWwgb2YgRnJhbmNlP1wiLFxuICAgICAgb3B0aW9uczogW1wiTG9uZG9uXCIsIFwiUGFyaXNcIiwgXCJCZXJsaW5cIiwgXCJNYWRyaWRcIl0sXG4gICAgICBhbnN3ZXI6IFwiUGFyaXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldobyBwYWludGVkIHRoZSBNb25hIExpc2E/XCIsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgIFwiVmluY2VudCB2YW4gR29naFwiLFxuICAgICAgICBcIkxlb25hcmRvIGRhIFZpbmNpXCIsXG4gICAgICAgIFwiUGFibG8gUGljYXNzb1wiLFxuICAgICAgICBcIk1pY2hlbGFuZ2Vsb1wiLFxuICAgICAgXSxcbiAgICAgIGFuc3dlcjogXCJMZW9uYXJkbyBkYSBWaW5jaVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyB0aGUgbGFyZ2VzdCBtYW1tYWwgaW4gdGhlIHdvcmxkP1wiLFxuICAgICAgb3B0aW9uczogW1wiRWxlcGhhbnRcIiwgXCJCbHVlIFdoYWxlXCIsIFwiR2lyYWZmZVwiLCBcIkhpcHBvcG90YW11c1wiXSxcbiAgICAgIGFuc3dlcjogXCJCbHVlIFdoYWxlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaGF0IGlzIHRoZSBjdXJyZW5jeSBvZiBKYXBhbj9cIixcbiAgICAgIG9wdGlvbnM6IFtcIkRvbGxhclwiLCBcIkV1cm9cIiwgXCJZZW5cIiwgXCJQb3VuZFwiXSxcbiAgICAgIGFuc3dlcjogXCJZZW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgaXMgdGhlIHRhbGxlc3QgbW91bnRhaW4gaW4gdGhlIHdvcmxkP1wiLFxuICAgICAgb3B0aW9uczogW1wiTW91bnQgRXZlcmVzdFwiLCBcIksyXCIsIFwiS2lsaW1hbmphcm9cIiwgXCJEZW5hbGlcIl0sXG4gICAgICBhbnN3ZXI6IFwiTW91bnQgRXZlcmVzdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyB0aGUgbGFyZ2VzdCBjb3VudHJ5IGluIHRoZSB3b3JsZCBieSBsYW5kIGFyZWE/XCIsXG4gICAgICBvcHRpb25zOiBbXCJDYW5hZGFcIiwgXCJSdXNzaWFcIiwgXCJDaGluYVwiLCBcIlVuaXRlZCBTdGF0ZXNcIl0sXG4gICAgICBhbnN3ZXI6IFwiUnVzc2lhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaGF0IGlzIHRoZSBjaGVtaWNhbCBzeW1ib2wgZm9yIGdvbGQ/XCIsXG4gICAgICBvcHRpb25zOiBbXCJHb1wiLCBcIkF1XCIsIFwiR2RcIiwgXCJBZ1wiXSxcbiAgICAgIGFuc3dlcjogXCJBdVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyB0aGUgc21hbGxlc3QgcGxhbmV0IGluIG91ciBzb2xhciBzeXN0ZW0/XCIsXG4gICAgICBvcHRpb25zOiBbXCJWZW51c1wiLCBcIk1hcnNcIiwgXCJNZXJjdXJ5XCIsIFwiRWFydGhcIl0sXG4gICAgICBhbnN3ZXI6IFwiTWVyY3VyeVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyB0aGUgbGFyZ2VzdCBwbGFuZXQgaW4gb3VyIHNvbGFyIHN5c3RlbT9cIixcbiAgICAgIG9wdGlvbnM6IFtcIkp1cGl0ZXJcIiwgXCJTYXR1cm5cIiwgXCJOZXB0dW5lXCIsIFwiVXJhbnVzXCJdLFxuICAgICAgYW5zd2VyOiBcIkp1cGl0ZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgaXMgdGhlIG5hbWUgb2YgdGhlIGZpcnN0IG1hbiB0byB3YWxrIG9uIHRoZSBtb29uP1wiLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICBcIkJ1enogQWxkcmluXCIsXG4gICAgICAgIFwiTmVpbCBBcm1zdHJvbmdcIixcbiAgICAgICAgXCJZdXJpIEdhZ2FyaW5cIixcbiAgICAgICAgXCJBbGFuIFNoZXBhcmRcIixcbiAgICAgIF0sXG4gICAgICBhbnN3ZXI6IFwiTmVpbCBBcm1zdHJvbmdcIixcbiAgICB9LFxuICBdO1xuICBjb25zdCBnZW5lcmF0ZVJhbmRvbU51bWJlciA9ICgpID0+IHtcbiAgICBpZiAoZ2VuZXJhdGVkTnVtYmVycy5sZW5ndGggKyAxID09PSBkYXRhLmxlbmd0aCkge1xuICAgICAgYWxlcnQoYEV4YW0gQ29tcGxldGVkIFlvdXIgU2NvcmUgaXMgJHtzY29yZX0gb3V0IG9mICR7ZGF0YS5sZW5ndGggLSAxfWApO1xuICAgICAgc2V0RmxhZyh0cnVlKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGxldCByYW5kb21OdW1iZXI6IGFueTtcbiAgICBkbyB7XG4gICAgICByYW5kb21OdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgfSB3aGlsZSAoZ2VuZXJhdGVkTnVtYmVycy5pbmNsdWRlcyhyYW5kb21OdW1iZXIpKTtcblxuICAgIHNldEdlbmVyYXRlZE51bWJlcnMoWy4uLmdlbmVyYXRlZE51bWJlcnMsIHJhbmRvbU51bWJlcl0pO1xuICAgIGNvbnNvbGUubG9nKGdlbmVyYXRlZE51bWJlcnMpO1xuICAgIHNldEluZGV4KHJhbmRvbU51bWJlcik7XG4gICAgaW5jcmVzZVNjb3JlKCk7XG4gIH07XG4gIGNvbnN0IGluY3Jlc2VTY29yZSA9ICgpID0+IHtcbiAgICBpZiAoYW5zID09IGRhdGFbaW5kZXhdLmFuc3dlcikge1xuICAgICAgc2V0U2NvcmUoc2NvcmUgKyAxKTtcbiAgICB9XG4gICAgY29uc3QgcmFkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJhZGlvXCIpO1xuICAgIHJhZGlvLmZvckVhY2goKGU6IGFueSwgaTogYW55KSA9PiB7XG4gICAgICBpZiAoZS5jaGVja2VkKSB7XG4gICAgICAgIGUuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICBjb25zdCBoYW5kZWxDaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgc2V0QW5zKGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkRhcmtNb2RlXCIpID09PSBcImRhcmtcIikge1xuICAgICAgc2V0RGFyayh0cnVlKTtcbiAgICB9XG4gIH0sIFtdKTtcbiAgY29uc3QgZGFya01vZGUgPSAoKSA9PiB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiRGFya01vZGVcIikgIT0gXCJkYXJrXCIpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiRGFya01vZGVcIiwgXCJkYXJrXCIpO1xuICAgICAgc2V0RGFyayh0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJEYXJrTW9kZVwiLCBcIndoaXRlXCIpO1xuICAgICAgc2V0RGFyayhmYWxzZSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17ZGFyayA/IFwiZGFya1wiIDogXCIgXCJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhcms6YmctWyMxOTI3MzRdIFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1bY2FsYygxMDAlMnJlbSldXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tYXV0byAgYWxpZ24tbWlkZGxlIHAtNSBtciBib3JkZXItNCBib3JkZXItc29saWQgdy1bNzAlXSByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWV4dHJhYm9sZCB0ZXh0LTN4bCBtYi01IFx0XHRmb250LW5vdG8gZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAge2RhdGFbaW5kZXhdLnF1ZXN0aW9ufVxuICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtkYXRhW2luZGV4XS5vcHRpb25zICYmXG4gICAgICAgICAgICAgICAgICBkYXRhW2luZGV4XS5vcHRpb25zLm1hcCgoZTogYW55LCBpOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTMgYWxpZ24tbWlkZGxlIGJnLWdyYXktNjAwIHRleHQtd2hpdGUgbWItMyBsYXN0Om1iLTAgcm91bmRlZC1tZCBmbGV4IGp1c3RpZnktY2VudGVyIGhvdmVyOmJnLW9yYW5nZS00MDBcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyYWRpbyB3LTQgaC00IHRleHQtYmx1ZS02MDAgYmctZ3JheS0xMDAgYm9yZGVyLWdyYXktMzAwIGZvY3VzOnJpbmctYmx1ZS01MDAgZGFyazpmb2N1czpyaW5nLWJsdWUtNjAwICAgZGFyazpiZy1ncmF5LTcwMCBkYXJrOmJvcmRlci1ncmF5LTYwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJhZGlvQnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRlbENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsICBtbC0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtZ3JheS0zMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1hcm91bmQgIGFic29sdXRlIGJvdHRvbS0wIHJpZ2h0LTBcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC13aGl0ZSBiZy1ncmF5LTgwMCBob3ZlcjpiZy1ncmF5LTkwMCBmb2N1czpyaW5nLWdyYXktMzAwIGZvbnQtbWVkaXVtIHJvdW5kZWQtbGcgdGV4dC1zbSBweC01IHB5LTIuNSBtci0yIG1iLTIgZGFyazpiZy13aGl0ZSBkYXJrOnRleHQtYmxhY2sgZGFyazpmb2N1czpyaW5nLWdyYXktNzAwIGRhcms6Ym9yZGVyLWdyYXktNzAwYH1cbiAgICAgICAgICAgICAgb25DbGljaz17Z2VuZXJhdGVSYW5kb21OdW1iZXJ9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIE5leHRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSG9tZSIsImluZGV4Iiwic2V0SW5kZXgiLCJzY29yZSIsInNldFNjb3JlIiwiZmxhZyIsInNldEZsYWciLCJhbnMiLCJzZXRBbnMiLCJnZW5lcmF0ZWROdW1iZXJzIiwic2V0R2VuZXJhdGVkTnVtYmVycyIsImRhcmsiLCJzZXREYXJrIiwiZGF0YSIsInF1ZXN0aW9uIiwib3B0aW9ucyIsImFuc3dlciIsImdlbmVyYXRlUmFuZG9tTnVtYmVyIiwibGVuZ3RoIiwiYWxlcnQiLCJyYW5kb21OdW1iZXIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJpbmNsdWRlcyIsImNvbnNvbGUiLCJsb2ciLCJpbmNyZXNlU2NvcmUiLCJyYWRpbyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlIiwiaSIsImNoZWNrZWQiLCJoYW5kZWxDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkYXJrTW9kZSIsInNldEl0ZW0iLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm1hcCIsImlucHV0IiwidHlwZSIsImlkIiwibmFtZSIsIm9uQ2hhbmdlIiwibGFiZWwiLCJodG1sRm9yIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});