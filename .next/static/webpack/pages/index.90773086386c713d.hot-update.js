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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n// import { themes } from \"@/context/context\";\nfunction Home() {\n    _s();\n    const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [flag, setFlag] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [ans, setAns] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [generatedNumbers, setGeneratedNumbers] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setIndex(Math.floor(Math.random() * 10));\n    }, []);\n    const data = [\n        {\n            question: \"What is the capital of France?\",\n            options: [\n                \"London\",\n                \"Paris\",\n                \"Berlin\",\n                \"Madrid\"\n            ],\n            answer: \"Paris\"\n        },\n        {\n            question: \"Who painted the Mona Lisa?\",\n            options: [\n                \"Vincent van Gogh\",\n                \"Leonardo da Vinci\",\n                \"Pablo Picasso\",\n                \"Michelangelo\"\n            ],\n            answer: \"Leonardo da Vinci\"\n        },\n        {\n            question: \"What is the largest mammal in the world?\",\n            options: [\n                \"Elephant\",\n                \"Blue Whale\",\n                \"Giraffe\",\n                \"Hippopotamus\"\n            ],\n            answer: \"Blue Whale\"\n        },\n        {\n            question: \"What is the currency of Japan?\",\n            options: [\n                \"Dollar\",\n                \"Euro\",\n                \"Yen\",\n                \"Pound\"\n            ],\n            answer: \"Yen\"\n        },\n        {\n            question: \"What is the tallest mountain in the world?\",\n            options: [\n                \"Mount Everest\",\n                \"K2\",\n                \"Kilimanjaro\",\n                \"Denali\"\n            ],\n            answer: \"Mount Everest\"\n        },\n        {\n            question: \"What is the largest country in the world by land area?\",\n            options: [\n                \"Canada\",\n                \"Russia\",\n                \"China\",\n                \"United States\"\n            ],\n            answer: \"Russia\"\n        },\n        {\n            question: \"What is the chemical symbol for gold?\",\n            options: [\n                \"Go\",\n                \"Au\",\n                \"Gd\",\n                \"Ag\"\n            ],\n            answer: \"Au\"\n        },\n        {\n            question: \"What is the smallest planet in our solar system?\",\n            options: [\n                \"Venus\",\n                \"Mars\",\n                \"Mercury\",\n                \"Earth\"\n            ],\n            answer: \"Mercury\"\n        },\n        {\n            question: \"What is the largest planet in our solar system?\",\n            options: [\n                \"Jupiter\",\n                \"Saturn\",\n                \"Neptune\",\n                \"Uranus\"\n            ],\n            answer: \"Jupiter\"\n        },\n        {\n            question: \"What is the name of the first man to walk on the moon?\",\n            options: [\n                \"Buzz Aldrin\",\n                \"Neil Armstrong\",\n                \"Yuri Gagarin\",\n                \"Alan Shepard\"\n            ],\n            answer: \"Neil Armstrong\"\n        }\n    ];\n    // console.log(data);\n    const generateRandomNumber = ()=>{\n        if (generatedNumbers.length == data.length) {\n            alert(\"Exam Completed Your Score is \".concat(score, \" out of \").concat(data.length - 1));\n            // router.push(\"/WinPage\");\n            next_router__WEBPACK_IMPORTED_MODULE_1___default().push({\n                pathname: \"/WinPage\",\n                query: {\n                    score: score,\n                    total: data.length\n                }\n            });\n            return null;\n        }\n        let randomNumber = Math.floor(Math.random() * 10);\n        // while (){\n        // };\n        if (generatedNumbers.includes(randomNumber) || generatedNumbers) {\n            generateRandomNumber();\n        }\n        setGeneratedNumbers([\n            ...generatedNumbers,\n            randomNumber\n        ]);\n        // console.log(generatedNumbers);\n        setTimeout(()=>{\n            setIndex(randomNumber);\n        }, 1000);\n        increseScore();\n        let label = document.querySelectorAll(\".labelsp\");\n        console.log(label);\n        label.forEach((elem)=>{\n            console.log(elem.innerText);\n            if (elem.innerText === data[index].answer) {\n                elem.classList;\n                elem.classList.add(\"bg-green-400\");\n            } else if (ans === elem.innerText) {\n                elem.classList.add(\"bg-red-400\");\n            }\n        });\n        console.log(generatedNumbers);\n    };\n    const increseScore = ()=>{\n        if (ans == data[index].answer) {\n            setScore(1 + score);\n        }\n        const radio = document.querySelectorAll(\".radio\");\n        radio.forEach((e, i)=>{\n            if (e.checked) {\n                e.checked = false;\n            }\n        });\n        const label = document.querySelectorAll(\".labelsp\");\n        label.forEach((event)=>{\n            event.classList.remove(\"bg-yellow-500\");\n            event.classList.remove(\"bg-red-400\");\n            setTimeout(()=>{\n                event.classList.remove(\"bg-red-400\");\n                event.classList.remove(\"bg-green-400\");\n            }, 2000);\n        });\n        setFlag(false);\n        console.log(\"rendom array\", generatedNumbers);\n        console.log(\"index => \", index);\n    };\n    const handelChange = (e, result)=>{\n        // alert(\"hello\")\n        setAns(result);\n        setFlag(true);\n        // console.log(e.target.childNodes[0].innerText);\n        // console.log();\n        const label = document.querySelectorAll(\".labelsp\");\n        label.forEach((event)=>{\n            if (event.classList.contains(\"bg-yellow-500\")) {\n                event.classList.remove(\"bg-yellow-500\");\n            }\n        });\n        // console.log(e);\n        e.target.classList.add(\"bg-yellow-500\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"dark:bg-[#192734] \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-[calc(100vh-92px)] flex items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"m-auto  align-middle p-5 mr border-4 border-solid w-[70%] rounded-lg\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"font-extrabold text-3xl mb-5 font-noto dark:text-white\",\n                                    children: index ? data[index].question : \"\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                    lineNumber: 163,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: index ? data[index].options.map((e, i)=>{\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                        type: \"radio\",\n                                                        className: \"radio hidden\",\n                                                        value: e,\n                                                        id: e,\n                                                        name: \"radioButton\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                        lineNumber: 172,\n                                                        columnNumber: 29\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                        htmlFor: e,\n                                                        //key={i}\n                                                        onClick: (p)=>{\n                                                            handelChange(p, e);\n                                                        },\n                                                        className: \"cursor-pointer labelsp p-4 bg-gray-600 m-3 last:mb-0 rounded-md block hover:bg-orange-400 ml-2 text-sm font-medium  text-gray-900 dark:text-gray-300\",\n                                                        children: e\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                        lineNumber: 179,\n                                                        columnNumber: 29\n                                                    }, this)\n                                                ]\n                                            }, i + 1, true, {\n                                                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                lineNumber: 171,\n                                                columnNumber: 27\n                                            }, this)\n                                        }, void 0, false);\n                                    }) : \" \"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                    lineNumber: 166,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                            lineNumber: 162,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                        lineNumber: 161,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-end\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-white dark:text-black dark:focus:ring-gray-700 dark:border-gray-700\",\n                            onClick: generateRandomNumber,\n                            disabled: !flag ? true : false,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"w-full border-b \"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                    lineNumber: 203,\n                                    columnNumber: 15\n                                }, this),\n                                \"Next\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                            lineNumber: 198,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                        lineNumber: 197,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                lineNumber: 160,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n            lineNumber: 159,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"yuzrTdcTsa9F3zThCem94WNTPE0=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsQ0FBQ3pELE9BQU8sSUFBSSxHQUFHLEtBQUs7OzhDQUU5Qiw4REFBQzBEO29DQUFLYixXQUFVOzs7Ozs7Z0NBQTBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFReEQsQ0FBQztHQS9NdUJsRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHsgdGhlbWVzIH0gZnJvbSBcIkAvY29udGV4dC9jb250ZXh0XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlPGFueT4oKTtcbiAgY29uc3QgW3Njb3JlLCBzZXRTY29yZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2ZsYWcsIHNldEZsYWddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbYW5zLCBzZXRBbnNdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2dlbmVyYXRlZE51bWJlcnMsIHNldEdlbmVyYXRlZE51bWJlcnNdID0gdXNlU3RhdGU8YW55PihbXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SW5kZXgoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApKTtcbiAgfSwgW10pO1xuICBjb25zdCBkYXRhID0gW1xuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgaXMgdGhlIGNhcGl0YWwgb2YgRnJhbmNlP1wiLFxuICAgICAgb3B0aW9uczogW1wiTG9uZG9uXCIsIFwiUGFyaXNcIiwgXCJCZXJsaW5cIiwgXCJNYWRyaWRcIl0sXG4gICAgICBhbnN3ZXI6IFwiUGFyaXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldobyBwYWludGVkIHRoZSBNb25hIExpc2E/XCIsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgIFwiVmluY2VudCB2YW4gR29naFwiLFxuICAgICAgICBcIkxlb25hcmRvIGRhIFZpbmNpXCIsXG4gICAgICAgIFwiUGFibG8gUGljYXNzb1wiLFxuICAgICAgICBcIk1pY2hlbGFuZ2Vsb1wiLFxuICAgICAgXSxcbiAgICAgIGFuc3dlcjogXCJMZW9uYXJkbyBkYSBWaW5jaVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyB0aGUgbGFyZ2VzdCBtYW1tYWwgaW4gdGhlIHdvcmxkP1wiLFxuICAgICAgb3B0aW9uczogW1wiRWxlcGhhbnRcIiwgXCJCbHVlIFdoYWxlXCIsIFwiR2lyYWZmZVwiLCBcIkhpcHBvcG90YW11c1wiXSxcbiAgICAgIGFuc3dlcjogXCJCbHVlIFdoYWxlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaGF0IGlzIHRoZSBjdXJyZW5jeSBvZiBKYXBhbj9cIixcbiAgICAgIG9wdGlvbnM6IFtcIkRvbGxhclwiLCBcIkV1cm9cIiwgXCJZZW5cIiwgXCJQb3VuZFwiXSxcbiAgICAgIGFuc3dlcjogXCJZZW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgaXMgdGhlIHRhbGxlc3QgbW91bnRhaW4gaW4gdGhlIHdvcmxkP1wiLFxuICAgICAgb3B0aW9uczogW1wiTW91bnQgRXZlcmVzdFwiLCBcIksyXCIsIFwiS2lsaW1hbmphcm9cIiwgXCJEZW5hbGlcIl0sXG4gICAgICBhbnN3ZXI6IFwiTW91bnQgRXZlcmVzdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyB0aGUgbGFyZ2VzdCBjb3VudHJ5IGluIHRoZSB3b3JsZCBieSBsYW5kIGFyZWE/XCIsXG4gICAgICBvcHRpb25zOiBbXCJDYW5hZGFcIiwgXCJSdXNzaWFcIiwgXCJDaGluYVwiLCBcIlVuaXRlZCBTdGF0ZXNcIl0sXG4gICAgICBhbnN3ZXI6IFwiUnVzc2lhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaGF0IGlzIHRoZSBjaGVtaWNhbCBzeW1ib2wgZm9yIGdvbGQ/XCIsXG4gICAgICBvcHRpb25zOiBbXCJHb1wiLCBcIkF1XCIsIFwiR2RcIiwgXCJBZ1wiXSxcbiAgICAgIGFuc3dlcjogXCJBdVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyB0aGUgc21hbGxlc3QgcGxhbmV0IGluIG91ciBzb2xhciBzeXN0ZW0/XCIsXG4gICAgICBvcHRpb25zOiBbXCJWZW51c1wiLCBcIk1hcnNcIiwgXCJNZXJjdXJ5XCIsIFwiRWFydGhcIl0sXG4gICAgICBhbnN3ZXI6IFwiTWVyY3VyeVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyB0aGUgbGFyZ2VzdCBwbGFuZXQgaW4gb3VyIHNvbGFyIHN5c3RlbT9cIixcbiAgICAgIG9wdGlvbnM6IFtcIkp1cGl0ZXJcIiwgXCJTYXR1cm5cIiwgXCJOZXB0dW5lXCIsIFwiVXJhbnVzXCJdLFxuICAgICAgYW5zd2VyOiBcIkp1cGl0ZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgaXMgdGhlIG5hbWUgb2YgdGhlIGZpcnN0IG1hbiB0byB3YWxrIG9uIHRoZSBtb29uP1wiLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICBcIkJ1enogQWxkcmluXCIsXG4gICAgICAgIFwiTmVpbCBBcm1zdHJvbmdcIixcbiAgICAgICAgXCJZdXJpIEdhZ2FyaW5cIixcbiAgICAgICAgXCJBbGFuIFNoZXBhcmRcIixcbiAgICAgIF0sXG4gICAgICBhbnN3ZXI6IFwiTmVpbCBBcm1zdHJvbmdcIixcbiAgICB9LFxuICBdO1xuICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgY29uc3QgZ2VuZXJhdGVSYW5kb21OdW1iZXIgPSAoKSA9PiB7XG4gICAgaWYgKGdlbmVyYXRlZE51bWJlcnMubGVuZ3RoID09IGRhdGEubGVuZ3RoKSB7XG4gICAgICBhbGVydChgRXhhbSBDb21wbGV0ZWQgWW91ciBTY29yZSBpcyAke3Njb3JlfSBvdXQgb2YgJHtkYXRhLmxlbmd0aCAtIDF9YCk7XG4gICAgICAvLyByb3V0ZXIucHVzaChcIi9XaW5QYWdlXCIpO1xuICAgICAgcm91dGVyLnB1c2goe1xuICAgICAgICBwYXRobmFtZTogXCIvV2luUGFnZVwiLFxuICAgICAgICBxdWVyeToge1xuICAgICAgICAgIHNjb3JlOiBzY29yZSxcbiAgICAgICAgICB0b3RhbDogZGF0YS5sZW5ndGgsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBsZXQgcmFuZG9tTnVtYmVyOiBhbnkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgLy8gd2hpbGUgKCl7XG5cbiAgICAvLyB9O1xuICAgIGlmIChnZW5lcmF0ZWROdW1iZXJzLmluY2x1ZGVzKHJhbmRvbU51bWJlcikgfHwgZ2VuZXJhdGVkTnVtYmVycyApIHtcbiAgICAgIGdlbmVyYXRlUmFuZG9tTnVtYmVyKCk7XG4gICAgfVxuICAgIHNldEdlbmVyYXRlZE51bWJlcnMoWy4uLmdlbmVyYXRlZE51bWJlcnMsIHJhbmRvbU51bWJlcl0pO1xuICAgIC8vIGNvbnNvbGUubG9nKGdlbmVyYXRlZE51bWJlcnMpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0SW5kZXgocmFuZG9tTnVtYmVyKTtcbiAgICB9LCAxMDAwKTtcbiAgICBpbmNyZXNlU2NvcmUoKTtcbiAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxhYmVsc3BcIik7XG4gICAgY29uc29sZS5sb2cobGFiZWwpO1xuICAgIGxhYmVsLmZvckVhY2goKGVsZW06IGFueSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coZWxlbS5pbm5lclRleHQpO1xuICAgICAgaWYgKGVsZW0uaW5uZXJUZXh0ID09PSBkYXRhW2luZGV4XS5hbnN3ZXIpIHtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3Q7XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChcImJnLWdyZWVuLTQwMFwiKTtcbiAgICAgIH0gZWxzZSBpZiAoYW5zID09PSBlbGVtLmlubmVyVGV4dCkge1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoXCJiZy1yZWQtNDAwXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKGdlbmVyYXRlZE51bWJlcnMpO1xuICB9O1xuXG4gIGNvbnN0IGluY3Jlc2VTY29yZSA9ICgpID0+IHtcbiAgICBpZiAoYW5zID09IGRhdGFbaW5kZXhdLmFuc3dlcikge1xuICAgICAgc2V0U2NvcmUoMSArIHNjb3JlKTtcbiAgICB9XG5cbiAgICBjb25zdCByYWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmFkaW9cIik7XG4gICAgcmFkaW8uZm9yRWFjaCgoZTogYW55LCBpOiBhbnkpID0+IHtcbiAgICAgIGlmIChlLmNoZWNrZWQpIHtcbiAgICAgICAgZS5jaGVja2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxhYmVsc3BcIik7XG4gICAgbGFiZWwuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJiZy15ZWxsb3ctNTAwXCIpO1xuICAgICAgZXZlbnQuY2xhc3NMaXN0LnJlbW92ZShcImJnLXJlZC00MDBcIik7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZXZlbnQuY2xhc3NMaXN0LnJlbW92ZShcImJnLXJlZC00MDBcIik7XG4gICAgICAgIGV2ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1ncmVlbi00MDBcIik7XG4gICAgICB9LCAyMDAwKTtcbiAgICB9KTtcbiAgICBzZXRGbGFnKGZhbHNlKTtcbiAgICBjb25zb2xlLmxvZyhcInJlbmRvbSBhcnJheVwiLCBnZW5lcmF0ZWROdW1iZXJzKTtcbiAgICBjb25zb2xlLmxvZyhcImluZGV4ID0+IFwiLCBpbmRleCk7XG4gIH07XG4gIGNvbnN0IGhhbmRlbENoYW5nZSA9IChlOiBhbnksIHJlc3VsdDogYW55KSA9PiB7XG4gICAgLy8gYWxlcnQoXCJoZWxsb1wiKVxuXG4gICAgc2V0QW5zKHJlc3VsdCk7XG4gICAgc2V0RmxhZyh0cnVlKTtcbiAgICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldC5jaGlsZE5vZGVzWzBdLmlubmVyVGV4dCk7XG4gICAgLy8gY29uc29sZS5sb2coKTtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGFiZWxzcFwiKTtcbiAgICBsYWJlbC5mb3JFYWNoKChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmNsYXNzTGlzdC5jb250YWlucyhcImJnLXllbGxvdy01MDBcIikpIHtcbiAgICAgICAgZXZlbnQuY2xhc3NMaXN0LnJlbW92ZShcImJnLXllbGxvdy01MDBcIik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gY29uc29sZS5sb2coZSk7XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImJnLXllbGxvdy01MDBcIik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXJrOmJnLVsjMTkyNzM0XSBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtW2NhbGMoMTAwdmgtOTJweCldIGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tYXV0byAgYWxpZ24tbWlkZGxlIHAtNSBtciBib3JkZXItNCBib3JkZXItc29saWQgdy1bNzAlXSByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWV4dHJhYm9sZCB0ZXh0LTN4bCBtYi01IGZvbnQtbm90byBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICB7aW5kZXggPyBkYXRhW2luZGV4XS5xdWVzdGlvbiA6IFwiXCJ9XG4gICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge2luZGV4XG4gICAgICAgICAgICAgICAgICA/IGRhdGFbaW5kZXhdLm9wdGlvbnMubWFwKChlOiBhbnksIGk6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiIGtleT17aSArIDF9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJhZGlvIGhpZGRlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJhZGlvQnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj17ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8va2V5PXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KHApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGVsQ2hhbmdlKHAsIGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXHRsYWJlbHNwIHAtNCBiZy1ncmF5LTYwMCBtLTMgbGFzdDptYi0wIHJvdW5kZWQtbWQgYmxvY2sgaG92ZXI6Ymctb3JhbmdlLTQwMCBtbC0yIHRleHQtc20gZm9udC1tZWRpdW0gIHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LWdyYXktMzAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICA6IFwiIFwifVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LXdoaXRlIGJnLWdyYXktODAwIGhvdmVyOmJnLWdyYXktOTAwIGZvY3VzOnJpbmctZ3JheS0zMDAgZm9udC1tZWRpdW0gcm91bmRlZC1sZyB0ZXh0LXNtIHB4LTUgcHktMi41IG1yLTIgbWItMiBkYXJrOmJnLXdoaXRlIGRhcms6dGV4dC1ibGFjayBkYXJrOmZvY3VzOnJpbmctZ3JheS03MDAgZGFyazpib3JkZXItZ3JheS03MDBgfVxuICAgICAgICAgICAgICBvbkNsaWNrPXtnZW5lcmF0ZVJhbmRvbU51bWJlcn1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFmbGFnID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyLWJcdFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgTmV4dFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsicm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIb21lIiwiaW5kZXgiLCJzZXRJbmRleCIsInNjb3JlIiwic2V0U2NvcmUiLCJmbGFnIiwic2V0RmxhZyIsImFucyIsInNldEFucyIsImdlbmVyYXRlZE51bWJlcnMiLCJzZXRHZW5lcmF0ZWROdW1iZXJzIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZGF0YSIsInF1ZXN0aW9uIiwib3B0aW9ucyIsImFuc3dlciIsImdlbmVyYXRlUmFuZG9tTnVtYmVyIiwibGVuZ3RoIiwiYWxlcnQiLCJwdXNoIiwicGF0aG5hbWUiLCJxdWVyeSIsInRvdGFsIiwicmFuZG9tTnVtYmVyIiwiaW5jbHVkZXMiLCJzZXRUaW1lb3V0IiwiaW5jcmVzZVNjb3JlIiwibGFiZWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb25zb2xlIiwibG9nIiwiZm9yRWFjaCIsImVsZW0iLCJpbm5lclRleHQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyYWRpbyIsImUiLCJpIiwiY2hlY2tlZCIsImV2ZW50IiwicmVtb3ZlIiwiaGFuZGVsQ2hhbmdlIiwicmVzdWx0IiwiY29udGFpbnMiLCJ0YXJnZXQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm1hcCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwiaWQiLCJuYW1lIiwiaHRtbEZvciIsIm9uQ2xpY2siLCJwIiwiYnV0dG9uIiwiZGlzYWJsZWQiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});