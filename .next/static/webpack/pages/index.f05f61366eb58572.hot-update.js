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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/context */ \"./context/context.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    // const [flag, setFlag] = useState(false);\n    const [ans, setAns] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [generatedNumbers, setGeneratedNumbers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // const [dark, setDark] = useState(false);\n    const { dark , setDark  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_2__.themes);\n    const data = [\n        {\n            question: \"What is the capital of France?\",\n            options: [\n                \"London\",\n                \"Paris\",\n                \"Berlin\",\n                \"Madrid\"\n            ],\n            answer: \"Paris\"\n        },\n        {\n            question: \"Who painted the Mona Lisa?\",\n            options: [\n                \"Vincent van Gogh\",\n                \"Leonardo da Vinci\",\n                \"Pablo Picasso\",\n                \"Michelangelo\"\n            ],\n            answer: \"Leonardo da Vinci\"\n        },\n        {\n            question: \"What is the largest mammal in the world?\",\n            options: [\n                \"Elephant\",\n                \"Blue Whale\",\n                \"Giraffe\",\n                \"Hippopotamus\"\n            ],\n            answer: \"Blue Whale\"\n        },\n        {\n            question: \"What is the currency of Japan?\",\n            options: [\n                \"Dollar\",\n                \"Euro\",\n                \"Yen\",\n                \"Pound\"\n            ],\n            answer: \"Yen\"\n        },\n        {\n            question: \"What is the tallest mountain in the world?\",\n            options: [\n                \"Mount Everest\",\n                \"K2\",\n                \"Kilimanjaro\",\n                \"Denali\"\n            ],\n            answer: \"Mount Everest\"\n        },\n        {\n            question: \"What is the largest country in the world by land area?\",\n            options: [\n                \"Canada\",\n                \"Russia\",\n                \"China\",\n                \"United States\"\n            ],\n            answer: \"Russia\"\n        },\n        {\n            question: \"What is the chemical symbol for gold?\",\n            options: [\n                \"Go\",\n                \"Au\",\n                \"Gd\",\n                \"Ag\"\n            ],\n            answer: \"Au\"\n        },\n        {\n            question: \"What is the smallest planet in our solar system?\",\n            options: [\n                \"Venus\",\n                \"Mars\",\n                \"Mercury\",\n                \"Earth\"\n            ],\n            answer: \"Mercury\"\n        },\n        {\n            question: \"What is the largest planet in our solar system?\",\n            options: [\n                \"Jupiter\",\n                \"Saturn\",\n                \"Neptune\",\n                \"Uranus\"\n            ],\n            answer: \"Jupiter\"\n        },\n        {\n            question: \"What is the name of the first man to walk on the moon?\",\n            options: [\n                \"Buzz Aldrin\",\n                \"Neil Armstrong\",\n                \"Yuri Gagarin\",\n                \"Alan Shepard\"\n            ],\n            answer: \"Neil Armstrong\"\n        }\n    ];\n    const generateRandomNumber = ()=>{\n        if (generatedNumbers.length + 1 === data.length) {\n            alert(\"Exam Completed Your Score is \".concat(score, \" out of \").concat(data.length - 1));\n            return null;\n        }\n        let randomNumber;\n        do {\n            randomNumber = Math.floor(Math.random() * 10);\n        }while (generatedNumbers.includes(randomNumber));\n        setGeneratedNumbers([\n            ...generatedNumbers,\n            randomNumber\n        ]);\n        // console.log(generatedNumbers);\n        setTimeout(()=>{\n            setIndex(randomNumber);\n        }, 2000);\n        increseScore();\n        let label = document.querySelectorAll(\".labelsp\");\n        console.log(label);\n        label.forEach((elem)=>{\n            console.log(elem.innerText);\n            debugger;\n            if (elem.innerText === data[index].answer) {\n                elem.classList.add(\"bg-green-400\");\n            } else if (elem.innerText === ans) {\n                elem.classList.add(\"bg-red-400\");\n            }\n        });\n    };\n    const increseScore = ()=>{\n        if (ans == data[index].answer) {\n            setScore(1 + score);\n        }\n        const radio = document.querySelectorAll(\".radio\");\n        radio.forEach((e, i)=>{\n            if (e.checked) {\n                e.checked = false;\n            }\n        });\n        const label = document.querySelectorAll(\".labelsp\");\n        label.forEach((event)=>{\n            event.classList.remove(\"bg-green-500\");\n            event.classList.remove(\"bg-red-500\");\n        });\n    };\n    const handelChange = (e, result)=>{\n        setAns(result);\n        // console.log(e.target.childNodes[0].innerText);\n        // console.log();\n        const label = document.querySelectorAll(\".labelsp\");\n        label.forEach((event)=>{\n            if (event.classList.contains(\"bg-green-500\")) {\n                event.classList.remove(\"bg-green-500\");\n            }\n        });\n        e.target.classList.add(\"bg-green-500\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"dark:bg-[#192734] \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-[calc(100vh-92px)] flex items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"m-auto  align-middle p-5 mr border-4 border-solid w-[70%] rounded-lg\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"font-extrabold text-3xl mb-5   font-noto dark:text-white\",\n                                    children: data[index].question\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                    lineNumber: 140,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: data[index].options && data[index].options.map((e, i)=>{\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    type: \"radio\",\n                                                    className: \"radio hidden\",\n                                                    value: e,\n                                                    id: i,\n                                                    name: \"radioButton\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 149,\n                                                    columnNumber: 25\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    htmlFor: i,\n                                                    onClick: (p)=>{\n                                                        handelChange(p, e);\n                                                    },\n                                                    className: \"cursor-pointer labelsp p-4 bg-gray-600 text-white mb-3 last:mb-0 rounded-md block hover:bg-orange-400\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"p-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300\",\n                                                        children: e\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                        lineNumber: 164,\n                                                        columnNumber: 27\n                                                    }, this)\n                                                }, i, false, {\n                                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 156,\n                                                    columnNumber: 25\n                                                }, this)\n                                            ]\n                                        }, void 0, true);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                    lineNumber: 143,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                            lineNumber: 139,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                        lineNumber: 138,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-end\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-white dark:text-black dark:focus:ring-gray-700 dark:border-gray-700\",\n                            onClick: generateRandomNumber,\n                            children: \"Next\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                            lineNumber: 176,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                        lineNumber: 175,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                lineNumber: 137,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n            lineNumber: 136,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"lFwXJJmTYKjt+vZqlq+gq1CTWzE=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBd0Q7QUFDYjtBQUM1QixTQUFTRyxPQUFPOztJQUM3QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0osK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDSyxPQUFPQyxTQUFTLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ25DLDJDQUEyQztJQUMzQyxNQUFNLENBQUNPLEtBQUtDLE9BQU8sR0FBR1IsK0NBQVFBO0lBQzlCLE1BQU0sQ0FBQ1Msa0JBQWtCQyxvQkFBb0IsR0FBR1YsK0NBQVFBLENBQU0sRUFBRTtJQUNoRSwyQ0FBMkM7SUFDM0MsTUFBTSxFQUFFVyxLQUFJLEVBQUVDLFFBQU8sRUFBRSxHQUFHYixpREFBVUEsQ0FBQ0Usb0RBQU1BO0lBRTNDLE1BQU1ZLE9BQU87UUFDWDtZQUNFQyxVQUFVO1lBQ1ZDLFNBQVM7Z0JBQUM7Z0JBQVU7Z0JBQVM7Z0JBQVU7YUFBUztZQUNoREMsUUFBUTtRQUNWO1FBQ0E7WUFDRUYsVUFBVTtZQUNWQyxTQUFTO2dCQUNQO2dCQUNBO2dCQUNBO2dCQUNBO2FBQ0Q7WUFDREMsUUFBUTtRQUNWO1FBQ0E7WUFDRUYsVUFBVTtZQUNWQyxTQUFTO2dCQUFDO2dCQUFZO2dCQUFjO2dCQUFXO2FBQWU7WUFDOURDLFFBQVE7UUFDVjtRQUNBO1lBQ0VGLFVBQVU7WUFDVkMsU0FBUztnQkFBQztnQkFBVTtnQkFBUTtnQkFBTzthQUFRO1lBQzNDQyxRQUFRO1FBQ1Y7UUFDQTtZQUNFRixVQUFVO1lBQ1ZDLFNBQVM7Z0JBQUM7Z0JBQWlCO2dCQUFNO2dCQUFlO2FBQVM7WUFDekRDLFFBQVE7UUFDVjtRQUNBO1lBQ0VGLFVBQVU7WUFDVkMsU0FBUztnQkFBQztnQkFBVTtnQkFBVTtnQkFBUzthQUFnQjtZQUN2REMsUUFBUTtRQUNWO1FBQ0E7WUFDRUYsVUFBVTtZQUNWQyxTQUFTO2dCQUFDO2dCQUFNO2dCQUFNO2dCQUFNO2FBQUs7WUFDakNDLFFBQVE7UUFDVjtRQUNBO1lBQ0VGLFVBQVU7WUFDVkMsU0FBUztnQkFBQztnQkFBUztnQkFBUTtnQkFBVzthQUFRO1lBQzlDQyxRQUFRO1FBQ1Y7UUFDQTtZQUNFRixVQUFVO1lBQ1ZDLFNBQVM7Z0JBQUM7Z0JBQVc7Z0JBQVU7Z0JBQVc7YUFBUztZQUNuREMsUUFBUTtRQUNWO1FBQ0E7WUFDRUYsVUFBVTtZQUNWQyxTQUFTO2dCQUNQO2dCQUNBO2dCQUNBO2dCQUNBO2FBQ0Q7WUFDREMsUUFBUTtRQUNWO0tBQ0Q7SUFDRCxNQUFNQyx1QkFBdUIsSUFBTTtRQUNqQyxJQUFJUixpQkFBaUJTLE1BQU0sR0FBRyxNQUFNTCxLQUFLSyxNQUFNLEVBQUU7WUFDL0NDLE1BQU0sZ0NBQWdETixPQUFoQlIsT0FBTSxZQUEwQixPQUFoQlEsS0FBS0ssTUFBTSxHQUFHO1lBRXBFLE9BQU8sSUFBSTtRQUNiLENBQUM7UUFDRCxJQUFJRTtRQUNKLEdBQUc7WUFDREEsZUFBZUMsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxNQUFNLEtBQUs7UUFDNUMsUUFBU2QsaUJBQWlCZSxRQUFRLENBQUNKLGVBQWU7UUFFbERWLG9CQUFvQjtlQUFJRDtZQUFrQlc7U0FBYTtRQUN2RCxpQ0FBaUM7UUFDakNLLFdBQVcsSUFBTTtZQUNmckIsU0FBU2dCO1FBQ1gsR0FBRztRQUNITTtRQUNBLElBQUlDLFFBQVFDLFNBQVNDLGdCQUFnQixDQUFDO1FBQ3RDQyxRQUFRQyxHQUFHLENBQUNKO1FBQ1pBLE1BQU1LLE9BQU8sQ0FBQyxDQUFDQyxPQUFjO1lBQzNCSCxRQUFRQyxHQUFHLENBQUNFLEtBQUtDLFNBQVM7WUFDMUIsUUFBUztZQUNULElBQUlELEtBQUtDLFNBQVMsS0FBS3JCLElBQUksQ0FBQ1YsTUFBTSxDQUFDYSxNQUFNLEVBQUU7Z0JBQ3pDaUIsS0FBS0UsU0FBUyxDQUFDQyxHQUFHLENBQUM7WUFDckIsT0FBTyxJQUFJSCxLQUFLQyxTQUFTLEtBQUszQixLQUFLO2dCQUNqQzBCLEtBQUtFLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDO1lBQ3JCLENBQUM7UUFDSDtJQUNGO0lBRUEsTUFBTVYsZUFBZSxJQUFNO1FBQ3pCLElBQUluQixPQUFPTSxJQUFJLENBQUNWLE1BQU0sQ0FBQ2EsTUFBTSxFQUFFO1lBQzdCVixTQUFTLElBQUlEO1FBQ2YsQ0FBQztRQUVELE1BQU1nQyxRQUFRVCxTQUFTQyxnQkFBZ0IsQ0FBQztRQUN4Q1EsTUFBTUwsT0FBTyxDQUFDLENBQUNNLEdBQVFDLElBQVc7WUFDaEMsSUFBSUQsRUFBRUUsT0FBTyxFQUFFO2dCQUNiRixFQUFFRSxPQUFPLEdBQUcsS0FBSztZQUNuQixDQUFDO1FBQ0g7UUFDQSxNQUFNYixRQUFRQyxTQUFTQyxnQkFBZ0IsQ0FBQztRQUN4Q0YsTUFBTUssT0FBTyxDQUFDLENBQUNTLFFBQVU7WUFDdkJBLE1BQU1OLFNBQVMsQ0FBQ08sTUFBTSxDQUFDO1lBQ3ZCRCxNQUFNTixTQUFTLENBQUNPLE1BQU0sQ0FBQztRQUN6QjtJQUNGO0lBQ0EsTUFBTUMsZUFBZSxDQUFDTCxHQUFRTSxTQUFnQjtRQUM1Q3BDLE9BQU9vQztRQUNQLGlEQUFpRDtRQUNqRCxpQkFBaUI7UUFDakIsTUFBTWpCLFFBQVFDLFNBQVNDLGdCQUFnQixDQUFDO1FBQ3hDRixNQUFNSyxPQUFPLENBQUMsQ0FBQ1MsUUFBVTtZQUN2QixJQUFJQSxNQUFNTixTQUFTLENBQUNVLFFBQVEsQ0FBQyxpQkFBaUI7Z0JBQzVDSixNQUFNTixTQUFTLENBQUNPLE1BQU0sQ0FBQztZQUN6QixDQUFDO1FBQ0g7UUFDQUosRUFBRVEsTUFBTSxDQUFDWCxTQUFTLENBQUNDLEdBQUcsQ0FBQztJQUN6QjtJQUVBLHFCQUNFO2tCQUNFLDRFQUFDVztzQkFDQyw0RUFBQ0E7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDQztvQ0FBR0QsV0FBVTs4Q0FDWG5DLElBQUksQ0FBQ1YsTUFBTSxDQUFDVyxRQUFROzs7Ozs7OENBRXZCLDhEQUFDaUM7OENBQ0VsQyxJQUFJLENBQUNWLE1BQU0sQ0FBQ1ksT0FBTyxJQUNsQkYsSUFBSSxDQUFDVixNQUFNLENBQUNZLE9BQU8sQ0FBQ21DLEdBQUcsQ0FBQyxDQUFDWixHQUFRQyxJQUFXO3dDQUMxQyxxQkFDRTs7OERBRUUsOERBQUNZO29EQUNDQyxNQUFLO29EQUNMSixXQUFVO29EQUNWSyxPQUFPZjtvREFDUGdCLElBQUlmO29EQUNKZ0IsTUFBSzs7Ozs7OzhEQUVQLDhEQUFDNUI7b0RBQ0M2QixTQUFTakI7b0RBRVRrQixTQUFTLENBQUNDLElBQU07d0RBQ2RmLGFBQWFlLEdBQUdwQjtvREFDbEI7b0RBQ0FVLFdBQVU7OERBRVYsNEVBQUNXO3dEQUFLWCxXQUFVO2tFQUNiVjs7Ozs7O21EQVBFQzs7Ozs7OztvQ0FhYjs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSVIsOERBQUNRO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDWTs0QkFDQ1osV0FBWTs0QkFDWlMsU0FBU3hDO3NDQUNWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFiLENBQUM7R0F4THVCZjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB0aGVtZXMgfSBmcm9tIFwiQC9jb250ZXh0L2NvbnRleHRcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzY29yZSwgc2V0U2NvcmVdID0gdXNlU3RhdGUoMCk7XG4gIC8vIGNvbnN0IFtmbGFnLCBzZXRGbGFnXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Fucywgc2V0QW5zXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtnZW5lcmF0ZWROdW1iZXJzLCBzZXRHZW5lcmF0ZWROdW1iZXJzXSA9IHVzZVN0YXRlPGFueT4oW10pO1xuICAvLyBjb25zdCBbZGFyaywgc2V0RGFya10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHsgZGFyaywgc2V0RGFyayB9ID0gdXNlQ29udGV4dCh0aGVtZXMpO1xuXG4gIGNvbnN0IGRhdGEgPSBbXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyB0aGUgY2FwaXRhbCBvZiBGcmFuY2U/XCIsXG4gICAgICBvcHRpb25zOiBbXCJMb25kb25cIiwgXCJQYXJpc1wiLCBcIkJlcmxpblwiLCBcIk1hZHJpZFwiXSxcbiAgICAgIGFuc3dlcjogXCJQYXJpc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hvIHBhaW50ZWQgdGhlIE1vbmEgTGlzYT9cIixcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgXCJWaW5jZW50IHZhbiBHb2doXCIsXG4gICAgICAgIFwiTGVvbmFyZG8gZGEgVmluY2lcIixcbiAgICAgICAgXCJQYWJsbyBQaWNhc3NvXCIsXG4gICAgICAgIFwiTWljaGVsYW5nZWxvXCIsXG4gICAgICBdLFxuICAgICAgYW5zd2VyOiBcIkxlb25hcmRvIGRhIFZpbmNpXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaGF0IGlzIHRoZSBsYXJnZXN0IG1hbW1hbCBpbiB0aGUgd29ybGQ/XCIsXG4gICAgICBvcHRpb25zOiBbXCJFbGVwaGFudFwiLCBcIkJsdWUgV2hhbGVcIiwgXCJHaXJhZmZlXCIsIFwiSGlwcG9wb3RhbXVzXCJdLFxuICAgICAgYW5zd2VyOiBcIkJsdWUgV2hhbGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgaXMgdGhlIGN1cnJlbmN5IG9mIEphcGFuP1wiLFxuICAgICAgb3B0aW9uczogW1wiRG9sbGFyXCIsIFwiRXVyb1wiLCBcIlllblwiLCBcIlBvdW5kXCJdLFxuICAgICAgYW5zd2VyOiBcIlllblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyB0aGUgdGFsbGVzdCBtb3VudGFpbiBpbiB0aGUgd29ybGQ/XCIsXG4gICAgICBvcHRpb25zOiBbXCJNb3VudCBFdmVyZXN0XCIsIFwiSzJcIiwgXCJLaWxpbWFuamFyb1wiLCBcIkRlbmFsaVwiXSxcbiAgICAgIGFuc3dlcjogXCJNb3VudCBFdmVyZXN0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaGF0IGlzIHRoZSBsYXJnZXN0IGNvdW50cnkgaW4gdGhlIHdvcmxkIGJ5IGxhbmQgYXJlYT9cIixcbiAgICAgIG9wdGlvbnM6IFtcIkNhbmFkYVwiLCBcIlJ1c3NpYVwiLCBcIkNoaW5hXCIsIFwiVW5pdGVkIFN0YXRlc1wiXSxcbiAgICAgIGFuc3dlcjogXCJSdXNzaWFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgaXMgdGhlIGNoZW1pY2FsIHN5bWJvbCBmb3IgZ29sZD9cIixcbiAgICAgIG9wdGlvbnM6IFtcIkdvXCIsIFwiQXVcIiwgXCJHZFwiLCBcIkFnXCJdLFxuICAgICAgYW5zd2VyOiBcIkF1XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaGF0IGlzIHRoZSBzbWFsbGVzdCBwbGFuZXQgaW4gb3VyIHNvbGFyIHN5c3RlbT9cIixcbiAgICAgIG9wdGlvbnM6IFtcIlZlbnVzXCIsIFwiTWFyc1wiLCBcIk1lcmN1cnlcIiwgXCJFYXJ0aFwiXSxcbiAgICAgIGFuc3dlcjogXCJNZXJjdXJ5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaGF0IGlzIHRoZSBsYXJnZXN0IHBsYW5ldCBpbiBvdXIgc29sYXIgc3lzdGVtP1wiLFxuICAgICAgb3B0aW9uczogW1wiSnVwaXRlclwiLCBcIlNhdHVyblwiLCBcIk5lcHR1bmVcIiwgXCJVcmFudXNcIl0sXG4gICAgICBhbnN3ZXI6IFwiSnVwaXRlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyB0aGUgbmFtZSBvZiB0aGUgZmlyc3QgbWFuIHRvIHdhbGsgb24gdGhlIG1vb24/XCIsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgIFwiQnV6eiBBbGRyaW5cIixcbiAgICAgICAgXCJOZWlsIEFybXN0cm9uZ1wiLFxuICAgICAgICBcIll1cmkgR2FnYXJpblwiLFxuICAgICAgICBcIkFsYW4gU2hlcGFyZFwiLFxuICAgICAgXSxcbiAgICAgIGFuc3dlcjogXCJOZWlsIEFybXN0cm9uZ1wiLFxuICAgIH0sXG4gIF07XG4gIGNvbnN0IGdlbmVyYXRlUmFuZG9tTnVtYmVyID0gKCkgPT4ge1xuICAgIGlmIChnZW5lcmF0ZWROdW1iZXJzLmxlbmd0aCArIDEgPT09IGRhdGEubGVuZ3RoKSB7XG4gICAgICBhbGVydChgRXhhbSBDb21wbGV0ZWQgWW91ciBTY29yZSBpcyAke3Njb3JlfSBvdXQgb2YgJHtkYXRhLmxlbmd0aCAtIDF9YCk7XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBsZXQgcmFuZG9tTnVtYmVyOiBhbnk7XG4gICAgZG8ge1xuICAgICAgcmFuZG9tTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIH0gd2hpbGUgKGdlbmVyYXRlZE51bWJlcnMuaW5jbHVkZXMocmFuZG9tTnVtYmVyKSk7XG5cbiAgICBzZXRHZW5lcmF0ZWROdW1iZXJzKFsuLi5nZW5lcmF0ZWROdW1iZXJzLCByYW5kb21OdW1iZXJdKTtcbiAgICAvLyBjb25zb2xlLmxvZyhnZW5lcmF0ZWROdW1iZXJzKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldEluZGV4KHJhbmRvbU51bWJlcik7XG4gICAgfSwgMjAwMCk7XG4gICAgaW5jcmVzZVNjb3JlKCk7XG4gICAgbGV0IGxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sYWJlbHNwXCIpO1xuICAgIGNvbnNvbGUubG9nKGxhYmVsKTtcbiAgICBsYWJlbC5mb3JFYWNoKChlbGVtOiBhbnkpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVsZW0uaW5uZXJUZXh0KTtcbiAgICAgIGRlYnVnZ2VyO1xuICAgICAgaWYgKGVsZW0uaW5uZXJUZXh0ID09PSBkYXRhW2luZGV4XS5hbnN3ZXIpIHtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKFwiYmctZ3JlZW4tNDAwXCIpO1xuICAgICAgfSBlbHNlIGlmIChlbGVtLmlubmVyVGV4dCA9PT0gYW5zKSB7XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChcImJnLXJlZC00MDBcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaW5jcmVzZVNjb3JlID0gKCkgPT4ge1xuICAgIGlmIChhbnMgPT0gZGF0YVtpbmRleF0uYW5zd2VyKSB7XG4gICAgICBzZXRTY29yZSgxICsgc2NvcmUpO1xuICAgIH1cblxuICAgIGNvbnN0IHJhZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yYWRpb1wiKTtcbiAgICByYWRpby5mb3JFYWNoKChlOiBhbnksIGk6IGFueSkgPT4ge1xuICAgICAgaWYgKGUuY2hlY2tlZCkge1xuICAgICAgICBlLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGFiZWxzcFwiKTtcbiAgICBsYWJlbC5mb3JFYWNoKChldmVudCkgPT4ge1xuICAgICAgZXZlbnQuY2xhc3NMaXN0LnJlbW92ZShcImJnLWdyZWVuLTUwMFwiKTtcbiAgICAgIGV2ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1yZWQtNTAwXCIpO1xuICAgIH0pO1xuICB9O1xuICBjb25zdCBoYW5kZWxDaGFuZ2UgPSAoZTogYW55LCByZXN1bHQ6IGFueSkgPT4ge1xuICAgIHNldEFucyhyZXN1bHQpO1xuICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LmNoaWxkTm9kZXNbMF0uaW5uZXJUZXh0KTtcbiAgICAvLyBjb25zb2xlLmxvZygpO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sYWJlbHNwXCIpO1xuICAgIGxhYmVsLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYmctZ3JlZW4tNTAwXCIpKSB7XG4gICAgICAgIGV2ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1ncmVlbi01MDBcIik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImJnLWdyZWVuLTUwMFwiKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhcms6YmctWyMxOTI3MzRdIFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1bY2FsYygxMDB2aC05MnB4KV0gZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS1hdXRvICBhbGlnbi1taWRkbGUgcC01IG1yIGJvcmRlci00IGJvcmRlci1zb2xpZCB3LVs3MCVdIHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtZXh0cmFib2xkIHRleHQtM3hsIG1iLTUgXHRcdGZvbnQtbm90byBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICB7ZGF0YVtpbmRleF0ucXVlc3Rpb259XG4gICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge2RhdGFbaW5kZXhdLm9wdGlvbnMgJiZcbiAgICAgICAgICAgICAgICAgIGRhdGFbaW5kZXhdLm9wdGlvbnMubWFwKChlOiBhbnksIGk6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBrZXk9e2V9PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyYWRpbyBoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyYWRpb0J1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KHApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kZWxDaGFuZ2UocCwgZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXHRsYWJlbHNwIHAtNCBiZy1ncmF5LTYwMCB0ZXh0LXdoaXRlIG1iLTMgbGFzdDptYi0wIHJvdW5kZWQtbWQgYmxvY2sgaG92ZXI6Ymctb3JhbmdlLTQwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInAtMyBtbC0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtZ3JheS0zMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmRcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC13aGl0ZSBiZy1ncmF5LTgwMCBob3ZlcjpiZy1ncmF5LTkwMCBmb2N1czpyaW5nLWdyYXktMzAwIGZvbnQtbWVkaXVtIHJvdW5kZWQtbGcgdGV4dC1zbSBweC01IHB5LTIuNSBtci0yIG1iLTIgZGFyazpiZy13aGl0ZSBkYXJrOnRleHQtYmxhY2sgZGFyazpmb2N1czpyaW5nLWdyYXktNzAwIGRhcms6Ym9yZGVyLWdyYXktNzAwYH1cbiAgICAgICAgICAgICAgb25DbGljaz17Z2VuZXJhdGVSYW5kb21OdW1iZXJ9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIE5leHRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInRoZW1lcyIsIkhvbWUiLCJpbmRleCIsInNldEluZGV4Iiwic2NvcmUiLCJzZXRTY29yZSIsImFucyIsInNldEFucyIsImdlbmVyYXRlZE51bWJlcnMiLCJzZXRHZW5lcmF0ZWROdW1iZXJzIiwiZGFyayIsInNldERhcmsiLCJkYXRhIiwicXVlc3Rpb24iLCJvcHRpb25zIiwiYW5zd2VyIiwiZ2VuZXJhdGVSYW5kb21OdW1iZXIiLCJsZW5ndGgiLCJhbGVydCIsInJhbmRvbU51bWJlciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImluY2x1ZGVzIiwic2V0VGltZW91dCIsImluY3Jlc2VTY29yZSIsImxhYmVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29uc29sZSIsImxvZyIsImZvckVhY2giLCJlbGVtIiwiaW5uZXJUZXh0IiwiY2xhc3NMaXN0IiwiYWRkIiwicmFkaW8iLCJlIiwiaSIsImNoZWNrZWQiLCJldmVudCIsInJlbW92ZSIsImhhbmRlbENoYW5nZSIsInJlc3VsdCIsImNvbnRhaW5zIiwidGFyZ2V0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJtYXAiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsImlkIiwibmFtZSIsImh0bWxGb3IiLCJvbkNsaWNrIiwicCIsInNwYW4iLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});