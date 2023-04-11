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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/context */ \"./context/context.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n// import WinPage from \"./WinPage\";\n\nfunction Home() {\n    _s();\n    const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    // const { dark, setDark, darkMode , score, setScore} = useState(0);\n    const { score , setScore  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_3__.themes);\n    const [flag, setFlag] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [ans, setAns] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [generatedNumbers, setGeneratedNumbers] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setGeneratedNumbers([]);\n        setIndex(Math.floor(Math.random() * 10));\n    }, []);\n    const data = [\n        {\n            question: \"What is the capital of France?\",\n            options: [\n                \"London\",\n                \"Paris\",\n                \"Berlin\",\n                \"Madrid\"\n            ],\n            answer: \"Paris\"\n        },\n        {\n            question: \"Who painted the Mona Lisa?\",\n            options: [\n                \"Vincent van Gogh\",\n                \"Leonardo da Vinci\",\n                \"Pablo Picasso\",\n                \"Michelangelo\"\n            ],\n            answer: \"Leonardo da Vinci\"\n        },\n        {\n            question: \"What is the largest mammal in the world?\",\n            options: [\n                \"Elephant\",\n                \"Blue Whale\",\n                \"Giraffe\",\n                \"Hippopotamus\"\n            ],\n            answer: \"Blue Whale\"\n        },\n        {\n            question: \"What is the currency of Japan?\",\n            options: [\n                \"Dollar\",\n                \"Euro\",\n                \"Yen\",\n                \"Pound\"\n            ],\n            answer: \"Yen\"\n        },\n        {\n            question: \"What is the tallest mountain in the world?\",\n            options: [\n                \"Mount Everest\",\n                \"K2\",\n                \"Kilimanjaro\",\n                \"Denali\"\n            ],\n            answer: \"Mount Everest\"\n        },\n        {\n            question: \"What is the largest country in the world by land area?\",\n            options: [\n                \"Canada\",\n                \"Russia\",\n                \"China\",\n                \"United States\"\n            ],\n            answer: \"Russia\"\n        },\n        {\n            question: \"What is the chemical symbol for gold?\",\n            options: [\n                \"Go\",\n                \"Au\",\n                \"Gd\",\n                \"Ag\"\n            ],\n            answer: \"Au\"\n        },\n        {\n            question: \"What is the smallest planet in our solar system?\",\n            options: [\n                \"Venus\",\n                \"Mars\",\n                \"Mercury\",\n                \"Earth\"\n            ],\n            answer: \"Mercury\"\n        },\n        {\n            question: \"What is the largest planet in our solar system?\",\n            options: [\n                \"Jupiter\",\n                \"Saturn\",\n                \"Neptune\",\n                \"Uranus\"\n            ],\n            answer: \"Jupiter\"\n        },\n        {\n            question: \"What is the name of the first man to walk on the moon?\",\n            options: [\n                \"Buzz Aldrin\",\n                \"Neil Armstrong\",\n                \"Yuri Gagarin\",\n                \"Alan Shepard\"\n            ],\n            answer: \"Neil Armstrong\"\n        }\n    ];\n    // console.log(data);\n    let randomNumber;\n    const generateRandomNumber = ()=>{\n        if (generatedNumbers.length + 1 == data.length) {\n            next_router__WEBPACK_IMPORTED_MODULE_1___default().push({\n                pathname: \"/WinPage\"\n            });\n            return null;\n        }\n        randomNumber = Math.floor(Math.random() * 10);\n        if (generatedNumbers.includes(randomNumber) || randomNumber == 0) {\n            generateRandomNumber();\n        }\n        setGeneratedNumbers([\n            ...generatedNumbers,\n            randomNumber\n        ]);\n        // console.log(generatedNumbers);\n        setTimeout(()=>{\n            setIndex(randomNumber);\n        }, 1000);\n        increseScore();\n        let label = document.querySelectorAll(\".labelsp\");\n        // console.log(label);\n        label.forEach((elem)=>{\n            console.log(elem.innerText);\n            if (elem.innerText === data[index].answer) {\n                elem.classList;\n                elem.classList.add(\"bg-green-400\");\n            } else if (ans === elem.innerText) {\n                elem.classList.add(\"bg-red-400\");\n            }\n        });\n    // console.log(generatedNumbers);\n    };\n    const increseScore = ()=>{\n        if (ans == data[index].answer) {\n            setScore(1 + score);\n        }\n        const radio = document.querySelectorAll(\".radio\");\n        radio.forEach((e, i)=>{\n            if (e.checked) {\n                e.checked = false;\n            }\n        });\n        const label = document.querySelectorAll(\".labelsp\");\n        label.forEach((event)=>{\n            event.classList.remove(\"bg-yellow-500\");\n            event.classList.remove(\"bg-red-400\");\n            setTimeout(()=>{\n                event.classList.remove(\"bg-red-400\");\n                event.classList.remove(\"bg-green-400\");\n            }, 2000);\n        });\n        setFlag(false);\n        console.log(\"rendom array\", generatedNumbers);\n        console.log(\"index => \", index);\n    };\n    const handelChange = (e, result)=>{\n        // alert(\"hello\")\n        setAns(result);\n        setFlag(true);\n        // console.log(e.target.childNodes[0].innerText);\n        // console.log();\n        const label = document.querySelectorAll(\".labelsp\");\n        label.forEach((event)=>{\n            if (event.classList.contains(\"bg-yellow-500\")) {\n                event.classList.remove(\"bg-yellow-500\");\n            }\n        });\n        // console.log(e);\n        e.target.classList.add(\"bg-yellow-500\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"dark:bg-[#192734] \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-[calc(100vh-92px)] flex items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"m-auto  align-middle p-5 mr border-4 border-solid w-[70%] rounded-lg\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"font-extrabold text-3xl mb-5 font-noto dark:text-white\",\n                                    children: index ? data[index].question : \"\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                    lineNumber: 159,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: index ? data[index].options.map((e, i)=>{\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                        type: \"radio\",\n                                                        className: \"radio hidden\",\n                                                        value: e,\n                                                        id: e,\n                                                        name: \"radioButton\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                        lineNumber: 168,\n                                                        columnNumber: 29\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                        htmlFor: e,\n                                                        //key={i}\n                                                        onClick: (p)=>{\n                                                            handelChange(p, e);\n                                                        },\n                                                        className: \"cursor-pointer labelsp p-4 bg-gray-600 m-3 last:mb-0 rounded-md block hover:bg-orange-400 ml-2 text-sm font-medium  text-gray-900 dark:text-gray-300\",\n                                                        children: e\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                        lineNumber: 175,\n                                                        columnNumber: 29\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                lineNumber: 167,\n                                                columnNumber: 27\n                                            }, this)\n                                        }, i, false, {\n                                            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                            lineNumber: 166,\n                                            columnNumber: 25\n                                        }, this);\n                                    }) : \" \"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                    lineNumber: 162,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                            lineNumber: 158,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                        lineNumber: 157,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-end\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-white dark:text-black dark:focus:ring-gray-700 dark:border-gray-700\",\n                            onClick: generateRandomNumber,\n                            disabled: !flag ? true : false,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"w-full border-b \"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                    lineNumber: 199,\n                                    columnNumber: 15\n                                }, this),\n                                \"Next\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                            lineNumber: 194,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                        lineNumber: 193,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                lineNumber: 156,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n            lineNumber: 155,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"j/WkVp5afXx8aL28hwBFJWX3D4k=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFReEQsQ0FBQztHQTFNdUIvQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgRnJhZ21lbnQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBXaW5QYWdlIGZyb20gXCIuL1dpblBhZ2VcIjtcbmltcG9ydCB7IHRoZW1lcyB9IGZyb20gXCJAL2NvbnRleHQvY29udGV4dFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZTxhbnk+KCk7XG4gIC8vIGNvbnN0IHsgZGFyaywgc2V0RGFyaywgZGFya01vZGUgLCBzY29yZSwgc2V0U2NvcmV9ID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IHsgc2NvcmUsIHNldFNjb3JlIH0gPSB1c2VDb250ZXh0KHRoZW1lcyk7XG4gIGNvbnN0IFtmbGFnLCBzZXRGbGFnXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Fucywgc2V0QW5zXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtnZW5lcmF0ZWROdW1iZXJzLCBzZXRHZW5lcmF0ZWROdW1iZXJzXSA9IHVzZVN0YXRlPGFueT4oW10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEdlbmVyYXRlZE51bWJlcnMoW10pO1xuICAgIHNldEluZGV4KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSk7XG4gIH0sIFtdKTtcbiAgY29uc3QgZGF0YSA9IFtcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaGF0IGlzIHRoZSBjYXBpdGFsIG9mIEZyYW5jZT9cIixcbiAgICAgIG9wdGlvbnM6IFtcIkxvbmRvblwiLCBcIlBhcmlzXCIsIFwiQmVybGluXCIsIFwiTWFkcmlkXCJdLFxuICAgICAgYW5zd2VyOiBcIlBhcmlzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaG8gcGFpbnRlZCB0aGUgTW9uYSBMaXNhP1wiLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICBcIlZpbmNlbnQgdmFuIEdvZ2hcIixcbiAgICAgICAgXCJMZW9uYXJkbyBkYSBWaW5jaVwiLFxuICAgICAgICBcIlBhYmxvIFBpY2Fzc29cIixcbiAgICAgICAgXCJNaWNoZWxhbmdlbG9cIixcbiAgICAgIF0sXG4gICAgICBhbnN3ZXI6IFwiTGVvbmFyZG8gZGEgVmluY2lcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgaXMgdGhlIGxhcmdlc3QgbWFtbWFsIGluIHRoZSB3b3JsZD9cIixcbiAgICAgIG9wdGlvbnM6IFtcIkVsZXBoYW50XCIsIFwiQmx1ZSBXaGFsZVwiLCBcIkdpcmFmZmVcIiwgXCJIaXBwb3BvdGFtdXNcIl0sXG4gICAgICBhbnN3ZXI6IFwiQmx1ZSBXaGFsZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyB0aGUgY3VycmVuY3kgb2YgSmFwYW4/XCIsXG4gICAgICBvcHRpb25zOiBbXCJEb2xsYXJcIiwgXCJFdXJvXCIsIFwiWWVuXCIsIFwiUG91bmRcIl0sXG4gICAgICBhbnN3ZXI6IFwiWWVuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaGF0IGlzIHRoZSB0YWxsZXN0IG1vdW50YWluIGluIHRoZSB3b3JsZD9cIixcbiAgICAgIG9wdGlvbnM6IFtcIk1vdW50IEV2ZXJlc3RcIiwgXCJLMlwiLCBcIktpbGltYW5qYXJvXCIsIFwiRGVuYWxpXCJdLFxuICAgICAgYW5zd2VyOiBcIk1vdW50IEV2ZXJlc3RcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgaXMgdGhlIGxhcmdlc3QgY291bnRyeSBpbiB0aGUgd29ybGQgYnkgbGFuZCBhcmVhP1wiLFxuICAgICAgb3B0aW9uczogW1wiQ2FuYWRhXCIsIFwiUnVzc2lhXCIsIFwiQ2hpbmFcIiwgXCJVbml0ZWQgU3RhdGVzXCJdLFxuICAgICAgYW5zd2VyOiBcIlJ1c3NpYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyB0aGUgY2hlbWljYWwgc3ltYm9sIGZvciBnb2xkP1wiLFxuICAgICAgb3B0aW9uczogW1wiR29cIiwgXCJBdVwiLCBcIkdkXCIsIFwiQWdcIl0sXG4gICAgICBhbnN3ZXI6IFwiQXVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgaXMgdGhlIHNtYWxsZXN0IHBsYW5ldCBpbiBvdXIgc29sYXIgc3lzdGVtP1wiLFxuICAgICAgb3B0aW9uczogW1wiVmVudXNcIiwgXCJNYXJzXCIsIFwiTWVyY3VyeVwiLCBcIkVhcnRoXCJdLFxuICAgICAgYW5zd2VyOiBcIk1lcmN1cnlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgaXMgdGhlIGxhcmdlc3QgcGxhbmV0IGluIG91ciBzb2xhciBzeXN0ZW0/XCIsXG4gICAgICBvcHRpb25zOiBbXCJKdXBpdGVyXCIsIFwiU2F0dXJuXCIsIFwiTmVwdHVuZVwiLCBcIlVyYW51c1wiXSxcbiAgICAgIGFuc3dlcjogXCJKdXBpdGVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaGF0IGlzIHRoZSBuYW1lIG9mIHRoZSBmaXJzdCBtYW4gdG8gd2FsayBvbiB0aGUgbW9vbj9cIixcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgXCJCdXp6IEFsZHJpblwiLFxuICAgICAgICBcIk5laWwgQXJtc3Ryb25nXCIsXG4gICAgICAgIFwiWXVyaSBHYWdhcmluXCIsXG4gICAgICAgIFwiQWxhbiBTaGVwYXJkXCIsXG4gICAgICBdLFxuICAgICAgYW5zd2VyOiBcIk5laWwgQXJtc3Ryb25nXCIsXG4gICAgfSxcbiAgXTtcbiAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gIGxldCByYW5kb21OdW1iZXI6IGFueTtcbiAgY29uc3QgZ2VuZXJhdGVSYW5kb21OdW1iZXIgPSAoKSA9PiB7XG4gICAgaWYgKGdlbmVyYXRlZE51bWJlcnMubGVuZ3RoICsgMSA9PSBkYXRhLmxlbmd0aCkge1xuICAgICAgcm91dGVyLnB1c2goe1xuICAgICAgICBwYXRobmFtZTogXCIvV2luUGFnZVwiLFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmFuZG9tTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXG4gICAgaWYgKGdlbmVyYXRlZE51bWJlcnMuaW5jbHVkZXMocmFuZG9tTnVtYmVyKSB8fCByYW5kb21OdW1iZXIgPT0gMCkge1xuICAgICAgZ2VuZXJhdGVSYW5kb21OdW1iZXIoKTtcbiAgICB9XG4gICAgc2V0R2VuZXJhdGVkTnVtYmVycyhbLi4uZ2VuZXJhdGVkTnVtYmVycywgcmFuZG9tTnVtYmVyXSk7XG4gICAgLy8gY29uc29sZS5sb2coZ2VuZXJhdGVkTnVtYmVycyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRJbmRleChyYW5kb21OdW1iZXIpO1xuICAgIH0sIDEwMDApO1xuICAgIGluY3Jlc2VTY29yZSgpO1xuICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGFiZWxzcFwiKTtcbiAgICAvLyBjb25zb2xlLmxvZyhsYWJlbCk7XG4gICAgbGFiZWwuZm9yRWFjaCgoZWxlbTogYW55KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlbGVtLmlubmVyVGV4dCk7XG4gICAgICBpZiAoZWxlbS5pbm5lclRleHQgPT09IGRhdGFbaW5kZXhdLmFuc3dlcikge1xuICAgICAgICBlbGVtLmNsYXNzTGlzdDtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKFwiYmctZ3JlZW4tNDAwXCIpO1xuICAgICAgfSBlbHNlIGlmIChhbnMgPT09IGVsZW0uaW5uZXJUZXh0KSB7XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChcImJnLXJlZC00MDBcIik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gY29uc29sZS5sb2coZ2VuZXJhdGVkTnVtYmVycyk7XG4gIH07XG5cbiAgY29uc3QgaW5jcmVzZVNjb3JlID0gKCkgPT4ge1xuICAgIGlmIChhbnMgPT0gZGF0YVtpbmRleF0uYW5zd2VyKSB7XG4gICAgICBzZXRTY29yZSgxICsgc2NvcmUpO1xuICAgIH1cblxuICAgIGNvbnN0IHJhZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yYWRpb1wiKTtcbiAgICByYWRpby5mb3JFYWNoKChlOiBhbnksIGk6IGFueSkgPT4ge1xuICAgICAgaWYgKGUuY2hlY2tlZCkge1xuICAgICAgICBlLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGFiZWxzcFwiKTtcbiAgICBsYWJlbC5mb3JFYWNoKChldmVudCkgPT4ge1xuICAgICAgZXZlbnQuY2xhc3NMaXN0LnJlbW92ZShcImJnLXllbGxvdy01MDBcIik7XG4gICAgICBldmVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYmctcmVkLTQwMFwiKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBldmVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYmctcmVkLTQwMFwiKTtcbiAgICAgICAgZXZlbnQuY2xhc3NMaXN0LnJlbW92ZShcImJnLWdyZWVuLTQwMFwiKTtcbiAgICAgIH0sIDIwMDApO1xuICAgIH0pO1xuICAgIHNldEZsYWcoZmFsc2UpO1xuICAgIGNvbnNvbGUubG9nKFwicmVuZG9tIGFycmF5XCIsIGdlbmVyYXRlZE51bWJlcnMpO1xuICAgIGNvbnNvbGUubG9nKFwiaW5kZXggPT4gXCIsIGluZGV4KTtcbiAgfTtcbiAgY29uc3QgaGFuZGVsQ2hhbmdlID0gKGU6IGFueSwgcmVzdWx0OiBhbnkpID0+IHtcbiAgICAvLyBhbGVydChcImhlbGxvXCIpXG5cbiAgICBzZXRBbnMocmVzdWx0KTtcbiAgICBzZXRGbGFnKHRydWUpO1xuICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LmNoaWxkTm9kZXNbMF0uaW5uZXJUZXh0KTtcbiAgICAvLyBjb25zb2xlLmxvZygpO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sYWJlbHNwXCIpO1xuICAgIGxhYmVsLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYmcteWVsbG93LTUwMFwiKSkge1xuICAgICAgICBldmVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYmcteWVsbG93LTUwMFwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBjb25zb2xlLmxvZyhlKTtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYmcteWVsbG93LTUwMFwiKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhcms6YmctWyMxOTI3MzRdIFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1bY2FsYygxMDB2aC05MnB4KV0gZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS1hdXRvICBhbGlnbi1taWRkbGUgcC01IG1yIGJvcmRlci00IGJvcmRlci1zb2xpZCB3LVs3MCVdIHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtZXh0cmFib2xkIHRleHQtM3hsIG1iLTUgZm9udC1ub3RvIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgIHtpbmRleCA/IGRhdGFbaW5kZXhdLnF1ZXN0aW9uIDogXCJcIn1cbiAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7aW5kZXhcbiAgICAgICAgICAgICAgICAgID8gZGF0YVtpbmRleF0ub3B0aW9ucy5tYXAoKGU6IGFueSwgaTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGcmFnbWVudCBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJhZGlvIGhpZGRlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJhZGlvQnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj17ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8va2V5PXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KHApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGVsQ2hhbmdlKHAsIGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXHRsYWJlbHNwIHAtNCBiZy1ncmF5LTYwMCBtLTMgbGFzdDptYi0wIHJvdW5kZWQtbWQgYmxvY2sgaG92ZXI6Ymctb3JhbmdlLTQwMCBtbC0yIHRleHQtc20gZm9udC1tZWRpdW0gIHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LWdyYXktMzAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIDogXCIgXCJ9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtd2hpdGUgYmctZ3JheS04MDAgaG92ZXI6YmctZ3JheS05MDAgZm9jdXM6cmluZy1ncmF5LTMwMCBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRleHQtc20gcHgtNSBweS0yLjUgbXItMiBtYi0yIGRhcms6Ymctd2hpdGUgZGFyazp0ZXh0LWJsYWNrIGRhcms6Zm9jdXM6cmluZy1ncmF5LTcwMCBkYXJrOmJvcmRlci1ncmF5LTcwMGB9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2dlbmVyYXRlUmFuZG9tTnVtYmVyfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17IWZsYWcgPyB0cnVlIDogZmFsc2V9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXItYlx0XCI+PC9zcGFuPlxuICAgICAgICAgICAgICBOZXh0XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJyb3V0ZXIiLCJGcmFnbWVudCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInRoZW1lcyIsIkhvbWUiLCJpbmRleCIsInNldEluZGV4Iiwic2NvcmUiLCJzZXRTY29yZSIsImZsYWciLCJzZXRGbGFnIiwiYW5zIiwic2V0QW5zIiwiZ2VuZXJhdGVkTnVtYmVycyIsInNldEdlbmVyYXRlZE51bWJlcnMiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJkYXRhIiwicXVlc3Rpb24iLCJvcHRpb25zIiwiYW5zd2VyIiwicmFuZG9tTnVtYmVyIiwiZ2VuZXJhdGVSYW5kb21OdW1iZXIiLCJsZW5ndGgiLCJwdXNoIiwicGF0aG5hbWUiLCJpbmNsdWRlcyIsInNldFRpbWVvdXQiLCJpbmNyZXNlU2NvcmUiLCJsYWJlbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbGVtIiwiY29uc29sZSIsImxvZyIsImlubmVyVGV4dCIsImNsYXNzTGlzdCIsImFkZCIsInJhZGlvIiwiZSIsImkiLCJjaGVja2VkIiwiZXZlbnQiLCJyZW1vdmUiLCJoYW5kZWxDaGFuZ2UiLCJyZXN1bHQiLCJjb250YWlucyIsInRhcmdldCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibWFwIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJpZCIsIm5hbWUiLCJodG1sRm9yIiwib25DbGljayIsInAiLCJidXR0b24iLCJkaXNhYmxlZCIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});