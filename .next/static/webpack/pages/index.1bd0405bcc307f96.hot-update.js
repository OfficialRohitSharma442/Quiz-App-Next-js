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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/context */ \"./context/context.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    // const [flag, setFlag] = useState(false);\n    const [ans, setAns] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [generatedNumbers, setGeneratedNumbers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // const [dark, setDark] = useState(false);\n    const { dark , setDark  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_2__.themes);\n    const data = [\n        {\n            question: \"What is the capital of France?\",\n            options: [\n                \"London\",\n                \"Paris\",\n                \"Berlin\",\n                \"Madrid\"\n            ],\n            answer: \"Paris\"\n        },\n        {\n            question: \"Who painted the Mona Lisa?\",\n            options: [\n                \"Vincent van Gogh\",\n                \"Leonardo da Vinci\",\n                \"Pablo Picasso\",\n                \"Michelangelo\"\n            ],\n            answer: \"Leonardo da Vinci\"\n        },\n        {\n            question: \"What is the largest mammal in the world?\",\n            options: [\n                \"Elephant\",\n                \"Blue Whale\",\n                \"Giraffe\",\n                \"Hippopotamus\"\n            ],\n            answer: \"Blue Whale\"\n        },\n        {\n            question: \"What is the currency of Japan?\",\n            options: [\n                \"Dollar\",\n                \"Euro\",\n                \"Yen\",\n                \"Pound\"\n            ],\n            answer: \"Yen\"\n        },\n        {\n            question: \"What is the tallest mountain in the world?\",\n            options: [\n                \"Mount Everest\",\n                \"K2\",\n                \"Kilimanjaro\",\n                \"Denali\"\n            ],\n            answer: \"Mount Everest\"\n        },\n        {\n            question: \"What is the largest country in the world by land area?\",\n            options: [\n                \"Canada\",\n                \"Russia\",\n                \"China\",\n                \"United States\"\n            ],\n            answer: \"Russia\"\n        },\n        {\n            question: \"What is the chemical symbol for gold?\",\n            options: [\n                \"Go\",\n                \"Au\",\n                \"Gd\",\n                \"Ag\"\n            ],\n            answer: \"Au\"\n        },\n        {\n            question: \"What is the smallest planet in our solar system?\",\n            options: [\n                \"Venus\",\n                \"Mars\",\n                \"Mercury\",\n                \"Earth\"\n            ],\n            answer: \"Mercury\"\n        },\n        {\n            question: \"What is the largest planet in our solar system?\",\n            options: [\n                \"Jupiter\",\n                \"Saturn\",\n                \"Neptune\",\n                \"Uranus\"\n            ],\n            answer: \"Jupiter\"\n        },\n        {\n            question: \"What is the name of the first man to walk on the moon?\",\n            options: [\n                \"Buzz Aldrin\",\n                \"Neil Armstrong\",\n                \"Yuri Gagarin\",\n                \"Alan Shepard\"\n            ],\n            answer: \"Neil Armstrong\"\n        }\n    ];\n    const generateRandomNumber = ()=>{\n        const label = document.querySelectorAll(\".labelsp\");\n        console.log(\"data\", data);\n        console.log(\"ans\", ans);\n        const t1 = data.options((item)=>{\n            return item.filter((x)=>x === ans);\n        // console.log(\n        //   \"item\",\n        //   item.options.filter((x) => x === ans)\n        // );\n        });\n        console.log(\"t\", t1);\n        // for (let i = 0; i < 4; i++) {\n        //   if (label[i].htmlFor === ans) {\n        //     label[i].classList.add(\"bg-red-500\");\n        //   }\n        // }\n        if (generatedNumbers.length + 1 === data.length) {\n            alert(\"Exam Completed Your Score is \".concat(score, \" out of \").concat(data.length - 1));\n            return null;\n        }\n        let randomNumber;\n        do {\n            randomNumber = Math.floor(Math.random() * 10);\n        }while (generatedNumbers.includes(randomNumber));\n        setGeneratedNumbers([\n            ...generatedNumbers,\n            randomNumber\n        ]);\n        // console.log(generatedNumbers);\n        setTimeout(()=>{\n            setIndex(randomNumber);\n        }, 2000);\n        increseScore();\n    };\n    const increseScore = ()=>{\n        if (ans == data[index].answer) {\n            setScore(1 + score);\n        }\n        const radio = document.querySelectorAll(\".radio\");\n        radio.forEach((e, i)=>{\n            if (e.checked) {\n                e.checked = false;\n            }\n        });\n        const label = document.querySelectorAll(\".labelsp\");\n        label.forEach((event)=>{\n            event.classList.remove(\"bg-green-500\");\n            event.classList.remove(\"bg-red-500\");\n        });\n    };\n    const handelChange = (e)=>{\n        setAns(e.target.htmlFor);\n        const label = document.querySelectorAll(\".labelsp\");\n        label.forEach((event)=>{\n            if (event.classList.contains(\"bg-green-500\")) {\n                event.classList.remove(\"bg-green-500\");\n            }\n        });\n        e.target.classList.add(\"bg-green-500\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"dark:bg-[#192734] \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-[calc(100vh-44px)] flex items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"m-auto  align-middle p-5 mr border-4 border-solid w-[70%] rounded-lg\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"font-extrabold text-3xl mb-5   font-noto dark:text-white\",\n                                    children: data[index].question\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                    lineNumber: 143,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: data[index].options && data[index].options.map((e, i)=>{\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    type: \"radio\",\n                                                    className: \"radio hidden\",\n                                                    value: e,\n                                                    id: e,\n                                                    name: \"radioButton\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 152,\n                                                    columnNumber: 25\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    htmlFor: e,\n                                                    onClick: handelChange,\n                                                    className: \"cursor-pointer labelsp p-4 bg-gray-600 text-white mb-3 last:mb-0 rounded-md block hover:bg-orange-400\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"p-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300\",\n                                                        children: e\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                        lineNumber: 165,\n                                                        columnNumber: 27\n                                                    }, this)\n                                                }, i, false, {\n                                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 159,\n                                                    columnNumber: 25\n                                                }, this)\n                                            ]\n                                        }, void 0, true);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                    lineNumber: 146,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                            lineNumber: 142,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                        lineNumber: 141,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-around  absolute bottom-0 right-0\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-white dark:text-black dark:focus:ring-gray-700 dark:border-gray-700\",\n                            onClick: generateRandomNumber,\n                            children: \"Next\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                            lineNumber: 177,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                        lineNumber: 176,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                lineNumber: 140,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n            lineNumber: 139,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"nT/BhxNpXQo4/sx18QFlQRpABhA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBd0Q7QUFDYjtBQUM1QixTQUFTRyxPQUFPOztJQUM3QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0osK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDSyxPQUFPQyxTQUFTLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ25DLDJDQUEyQztJQUMzQyxNQUFNLENBQUNPLEtBQUtDLE9BQU8sR0FBR1IsK0NBQVFBLENBQUM7SUFDL0IsTUFBTSxDQUFDUyxrQkFBa0JDLG9CQUFvQixHQUFHViwrQ0FBUUEsQ0FBTSxFQUFFO0lBQ2hFLDJDQUEyQztJQUMzQyxNQUFNLEVBQUVXLEtBQUksRUFBRUMsUUFBTyxFQUFFLEdBQUdiLGlEQUFVQSxDQUFDRSxvREFBTUE7SUFFM0MsTUFBTVksT0FBTztRQUNYO1lBQ0VDLFVBQVU7WUFDVkMsU0FBUztnQkFBQztnQkFBVTtnQkFBUztnQkFBVTthQUFTO1lBQ2hEQyxRQUFRO1FBQ1Y7UUFDQTtZQUNFRixVQUFVO1lBQ1ZDLFNBQVM7Z0JBQ1A7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7YUFDRDtZQUNEQyxRQUFRO1FBQ1Y7UUFDQTtZQUNFRixVQUFVO1lBQ1ZDLFNBQVM7Z0JBQUM7Z0JBQVk7Z0JBQWM7Z0JBQVc7YUFBZTtZQUM5REMsUUFBUTtRQUNWO1FBQ0E7WUFDRUYsVUFBVTtZQUNWQyxTQUFTO2dCQUFDO2dCQUFVO2dCQUFRO2dCQUFPO2FBQVE7WUFDM0NDLFFBQVE7UUFDVjtRQUNBO1lBQ0VGLFVBQVU7WUFDVkMsU0FBUztnQkFBQztnQkFBaUI7Z0JBQU07Z0JBQWU7YUFBUztZQUN6REMsUUFBUTtRQUNWO1FBQ0E7WUFDRUYsVUFBVTtZQUNWQyxTQUFTO2dCQUFDO2dCQUFVO2dCQUFVO2dCQUFTO2FBQWdCO1lBQ3ZEQyxRQUFRO1FBQ1Y7UUFDQTtZQUNFRixVQUFVO1lBQ1ZDLFNBQVM7Z0JBQUM7Z0JBQU07Z0JBQU07Z0JBQU07YUFBSztZQUNqQ0MsUUFBUTtRQUNWO1FBQ0E7WUFDRUYsVUFBVTtZQUNWQyxTQUFTO2dCQUFDO2dCQUFTO2dCQUFRO2dCQUFXO2FBQVE7WUFDOUNDLFFBQVE7UUFDVjtRQUNBO1lBQ0VGLFVBQVU7WUFDVkMsU0FBUztnQkFBQztnQkFBVztnQkFBVTtnQkFBVzthQUFTO1lBQ25EQyxRQUFRO1FBQ1Y7UUFDQTtZQUNFRixVQUFVO1lBQ1ZDLFNBQVM7Z0JBQ1A7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7YUFDRDtZQUNEQyxRQUFRO1FBQ1Y7S0FDRDtJQUNELE1BQU1DLHVCQUF1QixJQUFNO1FBQ2pDLE1BQU1DLFFBQVFDLFNBQVNDLGdCQUFnQixDQUFDO1FBQ3hDQyxRQUFRQyxHQUFHLENBQUMsUUFBUVQ7UUFDcEJRLFFBQVFDLEdBQUcsQ0FBQyxPQUFPZjtRQUNuQixNQUFNZ0IsS0FBS1YsS0FBS0UsT0FBTyxDQUFDLENBQUNTLE9BQVM7WUFDaEMsT0FBT0EsS0FBS0MsTUFBTSxDQUFDLENBQUNDLElBQU1BLE1BQU1uQjtRQUNoQyxlQUFlO1FBQ2YsWUFBWTtRQUNaLDBDQUEwQztRQUMxQyxLQUFLO1FBQ1A7UUFDQWMsUUFBUUMsR0FBRyxDQUFDLEtBQUtDO1FBQ2pCLGdDQUFnQztRQUNoQyxvQ0FBb0M7UUFDcEMsNENBQTRDO1FBQzVDLE1BQU07UUFDTixJQUFJO1FBQ0osSUFBSWQsaUJBQWlCa0IsTUFBTSxHQUFHLE1BQU1kLEtBQUtjLE1BQU0sRUFBRTtZQUMvQ0MsTUFBTSxnQ0FBZ0RmLE9BQWhCUixPQUFNLFlBQTBCLE9BQWhCUSxLQUFLYyxNQUFNLEdBQUc7WUFFcEUsT0FBTyxJQUFJO1FBQ2IsQ0FBQztRQUVELElBQUlFO1FBQ0osR0FBRztZQUNEQSxlQUFlQyxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBSztRQUM1QyxRQUFTdkIsaUJBQWlCd0IsUUFBUSxDQUFDSixlQUFlO1FBRWxEbkIsb0JBQW9CO2VBQUlEO1lBQWtCb0I7U0FBYTtRQUN2RCxpQ0FBaUM7UUFDakNLLFdBQVcsSUFBTTtZQUNmOUIsU0FBU3lCO1FBQ1gsR0FBRztRQUNITTtJQUNGO0lBQ0EsTUFBTUEsZUFBZSxJQUFNO1FBQ3pCLElBQUk1QixPQUFPTSxJQUFJLENBQUNWLE1BQU0sQ0FBQ2EsTUFBTSxFQUFFO1lBQzdCVixTQUFTLElBQUlEO1FBQ2YsQ0FBQztRQUVELE1BQU0rQixRQUFRakIsU0FBU0MsZ0JBQWdCLENBQUM7UUFDeENnQixNQUFNQyxPQUFPLENBQUMsQ0FBQ0MsR0FBUUMsSUFBVztZQUNoQyxJQUFJRCxFQUFFRSxPQUFPLEVBQUU7Z0JBQ2JGLEVBQUVFLE9BQU8sR0FBRyxLQUFLO1lBQ25CLENBQUM7UUFDSDtRQUNBLE1BQU10QixRQUFRQyxTQUFTQyxnQkFBZ0IsQ0FBQztRQUN4Q0YsTUFBTW1CLE9BQU8sQ0FBQyxDQUFDSSxRQUFVO1lBQ3ZCQSxNQUFNQyxTQUFTLENBQUNDLE1BQU0sQ0FBQztZQUN2QkYsTUFBTUMsU0FBUyxDQUFDQyxNQUFNLENBQUM7UUFDekI7SUFDRjtJQUNBLE1BQU1DLGVBQWUsQ0FBQ04sSUFBVztRQUMvQjlCLE9BQU84QixFQUFFTyxNQUFNLENBQUNDLE9BQU87UUFDdkIsTUFBTTVCLFFBQVFDLFNBQVNDLGdCQUFnQixDQUFDO1FBQ3hDRixNQUFNbUIsT0FBTyxDQUFDLENBQUNJLFFBQVU7WUFDdkIsSUFBSUEsTUFBTUMsU0FBUyxDQUFDSyxRQUFRLENBQUMsaUJBQWlCO2dCQUM1Q04sTUFBTUMsU0FBUyxDQUFDQyxNQUFNLENBQUM7WUFDekIsQ0FBQztRQUNIO1FBQ0FMLEVBQUVPLE1BQU0sQ0FBQ0gsU0FBUyxDQUFDTSxHQUFHLENBQUM7SUFDekI7SUFFQSxxQkFDRTtrQkFDRSw0RUFBQ0M7c0JBQ0MsNEVBQUNBO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0M7b0NBQUdELFdBQVU7OENBQ1hyQyxJQUFJLENBQUNWLE1BQU0sQ0FBQ1csUUFBUTs7Ozs7OzhDQUV2Qiw4REFBQ21DOzhDQUNFcEMsSUFBSSxDQUFDVixNQUFNLENBQUNZLE9BQU8sSUFDbEJGLElBQUksQ0FBQ1YsTUFBTSxDQUFDWSxPQUFPLENBQUNxQyxHQUFHLENBQUMsQ0FBQ2QsR0FBUUMsSUFBVzt3Q0FDMUMscUJBQ0U7OzhEQUVFLDhEQUFDYztvREFDQ0MsTUFBSztvREFDTEosV0FBVTtvREFDVkssT0FBT2pCO29EQUNQa0IsSUFBSWxCO29EQUNKbUIsTUFBSzs7Ozs7OzhEQUVQLDhEQUFDdkM7b0RBQ0M0QixTQUFTUjtvREFFVG9CLFNBQVNkO29EQUNUTSxXQUFVOzhEQUVWLDRFQUFDUzt3REFBS1QsV0FBVTtrRUFDYlo7Ozs7OzttREFMRUM7Ozs7Ozs7b0NBV2I7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUlSLDhEQUFDVTt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ1U7NEJBQ0NWLFdBQVk7NEJBQ1pRLFNBQVN6QztzQ0FDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRYixDQUFDO0dBekx1QmY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdGhlbWVzIH0gZnJvbSBcIkAvY29udGV4dC9jb250ZXh0XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc2NvcmUsIHNldFNjb3JlXSA9IHVzZVN0YXRlKDApO1xuICAvLyBjb25zdCBbZmxhZywgc2V0RmxhZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFthbnMsIHNldEFuc10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2dlbmVyYXRlZE51bWJlcnMsIHNldEdlbmVyYXRlZE51bWJlcnNdID0gdXNlU3RhdGU8YW55PihbXSk7XG4gIC8vIGNvbnN0IFtkYXJrLCBzZXREYXJrXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyBkYXJrLCBzZXREYXJrIH0gPSB1c2VDb250ZXh0KHRoZW1lcyk7XG5cbiAgY29uc3QgZGF0YSA9IFtcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaGF0IGlzIHRoZSBjYXBpdGFsIG9mIEZyYW5jZT9cIixcbiAgICAgIG9wdGlvbnM6IFtcIkxvbmRvblwiLCBcIlBhcmlzXCIsIFwiQmVybGluXCIsIFwiTWFkcmlkXCJdLFxuICAgICAgYW5zd2VyOiBcIlBhcmlzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaG8gcGFpbnRlZCB0aGUgTW9uYSBMaXNhP1wiLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICBcIlZpbmNlbnQgdmFuIEdvZ2hcIixcbiAgICAgICAgXCJMZW9uYXJkbyBkYSBWaW5jaVwiLFxuICAgICAgICBcIlBhYmxvIFBpY2Fzc29cIixcbiAgICAgICAgXCJNaWNoZWxhbmdlbG9cIixcbiAgICAgIF0sXG4gICAgICBhbnN3ZXI6IFwiTGVvbmFyZG8gZGEgVmluY2lcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgaXMgdGhlIGxhcmdlc3QgbWFtbWFsIGluIHRoZSB3b3JsZD9cIixcbiAgICAgIG9wdGlvbnM6IFtcIkVsZXBoYW50XCIsIFwiQmx1ZSBXaGFsZVwiLCBcIkdpcmFmZmVcIiwgXCJIaXBwb3BvdGFtdXNcIl0sXG4gICAgICBhbnN3ZXI6IFwiQmx1ZSBXaGFsZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyB0aGUgY3VycmVuY3kgb2YgSmFwYW4/XCIsXG4gICAgICBvcHRpb25zOiBbXCJEb2xsYXJcIiwgXCJFdXJvXCIsIFwiWWVuXCIsIFwiUG91bmRcIl0sXG4gICAgICBhbnN3ZXI6IFwiWWVuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaGF0IGlzIHRoZSB0YWxsZXN0IG1vdW50YWluIGluIHRoZSB3b3JsZD9cIixcbiAgICAgIG9wdGlvbnM6IFtcIk1vdW50IEV2ZXJlc3RcIiwgXCJLMlwiLCBcIktpbGltYW5qYXJvXCIsIFwiRGVuYWxpXCJdLFxuICAgICAgYW5zd2VyOiBcIk1vdW50IEV2ZXJlc3RcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgaXMgdGhlIGxhcmdlc3QgY291bnRyeSBpbiB0aGUgd29ybGQgYnkgbGFuZCBhcmVhP1wiLFxuICAgICAgb3B0aW9uczogW1wiQ2FuYWRhXCIsIFwiUnVzc2lhXCIsIFwiQ2hpbmFcIiwgXCJVbml0ZWQgU3RhdGVzXCJdLFxuICAgICAgYW5zd2VyOiBcIlJ1c3NpYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyB0aGUgY2hlbWljYWwgc3ltYm9sIGZvciBnb2xkP1wiLFxuICAgICAgb3B0aW9uczogW1wiR29cIiwgXCJBdVwiLCBcIkdkXCIsIFwiQWdcIl0sXG4gICAgICBhbnN3ZXI6IFwiQXVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgaXMgdGhlIHNtYWxsZXN0IHBsYW5ldCBpbiBvdXIgc29sYXIgc3lzdGVtP1wiLFxuICAgICAgb3B0aW9uczogW1wiVmVudXNcIiwgXCJNYXJzXCIsIFwiTWVyY3VyeVwiLCBcIkVhcnRoXCJdLFxuICAgICAgYW5zd2VyOiBcIk1lcmN1cnlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgaXMgdGhlIGxhcmdlc3QgcGxhbmV0IGluIG91ciBzb2xhciBzeXN0ZW0/XCIsXG4gICAgICBvcHRpb25zOiBbXCJKdXBpdGVyXCIsIFwiU2F0dXJuXCIsIFwiTmVwdHVuZVwiLCBcIlVyYW51c1wiXSxcbiAgICAgIGFuc3dlcjogXCJKdXBpdGVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaGF0IGlzIHRoZSBuYW1lIG9mIHRoZSBmaXJzdCBtYW4gdG8gd2FsayBvbiB0aGUgbW9vbj9cIixcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgXCJCdXp6IEFsZHJpblwiLFxuICAgICAgICBcIk5laWwgQXJtc3Ryb25nXCIsXG4gICAgICAgIFwiWXVyaSBHYWdhcmluXCIsXG4gICAgICAgIFwiQWxhbiBTaGVwYXJkXCIsXG4gICAgICBdLFxuICAgICAgYW5zd2VyOiBcIk5laWwgQXJtc3Ryb25nXCIsXG4gICAgfSxcbiAgXTtcbiAgY29uc3QgZ2VuZXJhdGVSYW5kb21OdW1iZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxhYmVsc3BcIik7XG4gICAgY29uc29sZS5sb2coXCJkYXRhXCIsIGRhdGEpO1xuICAgIGNvbnNvbGUubG9nKFwiYW5zXCIsIGFucyk7XG4gICAgY29uc3QgdDEgPSBkYXRhLm9wdGlvbnMoKGl0ZW0pID0+IHtcbiAgICAgIHJldHVybiBpdGVtLmZpbHRlcigoeCkgPT4geCA9PT0gYW5zKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFxuICAgICAgLy8gICBcIml0ZW1cIixcbiAgICAgIC8vICAgaXRlbS5vcHRpb25zLmZpbHRlcigoeCkgPT4geCA9PT0gYW5zKVxuICAgICAgLy8gKTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhcInRcIiwgdDEpO1xuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgLy8gICBpZiAobGFiZWxbaV0uaHRtbEZvciA9PT0gYW5zKSB7XG4gICAgLy8gICAgIGxhYmVsW2ldLmNsYXNzTGlzdC5hZGQoXCJiZy1yZWQtNTAwXCIpO1xuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgICBpZiAoZ2VuZXJhdGVkTnVtYmVycy5sZW5ndGggKyAxID09PSBkYXRhLmxlbmd0aCkge1xuICAgICAgYWxlcnQoYEV4YW0gQ29tcGxldGVkIFlvdXIgU2NvcmUgaXMgJHtzY29yZX0gb3V0IG9mICR7ZGF0YS5sZW5ndGggLSAxfWApO1xuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBsZXQgcmFuZG9tTnVtYmVyOiBhbnk7XG4gICAgZG8ge1xuICAgICAgcmFuZG9tTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIH0gd2hpbGUgKGdlbmVyYXRlZE51bWJlcnMuaW5jbHVkZXMocmFuZG9tTnVtYmVyKSk7XG5cbiAgICBzZXRHZW5lcmF0ZWROdW1iZXJzKFsuLi5nZW5lcmF0ZWROdW1iZXJzLCByYW5kb21OdW1iZXJdKTtcbiAgICAvLyBjb25zb2xlLmxvZyhnZW5lcmF0ZWROdW1iZXJzKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldEluZGV4KHJhbmRvbU51bWJlcik7XG4gICAgfSwgMjAwMCk7XG4gICAgaW5jcmVzZVNjb3JlKCk7XG4gIH07XG4gIGNvbnN0IGluY3Jlc2VTY29yZSA9ICgpID0+IHtcbiAgICBpZiAoYW5zID09IGRhdGFbaW5kZXhdLmFuc3dlcikge1xuICAgICAgc2V0U2NvcmUoMSArIHNjb3JlKTtcbiAgICB9XG5cbiAgICBjb25zdCByYWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmFkaW9cIik7XG4gICAgcmFkaW8uZm9yRWFjaCgoZTogYW55LCBpOiBhbnkpID0+IHtcbiAgICAgIGlmIChlLmNoZWNrZWQpIHtcbiAgICAgICAgZS5jaGVja2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxhYmVsc3BcIik7XG4gICAgbGFiZWwuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1ncmVlbi01MDBcIik7XG4gICAgICBldmVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYmctcmVkLTUwMFwiKTtcbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgaGFuZGVsQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgIHNldEFucyhlLnRhcmdldC5odG1sRm9yKTtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGFiZWxzcFwiKTtcbiAgICBsYWJlbC5mb3JFYWNoKChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmNsYXNzTGlzdC5jb250YWlucyhcImJnLWdyZWVuLTUwMFwiKSkge1xuICAgICAgICBldmVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYmctZ3JlZW4tNTAwXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJiZy1ncmVlbi01MDBcIik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXJrOmJnLVsjMTkyNzM0XSBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtW2NhbGMoMTAwdmgtNDRweCldIGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tYXV0byAgYWxpZ24tbWlkZGxlIHAtNSBtciBib3JkZXItNCBib3JkZXItc29saWQgdy1bNzAlXSByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWV4dHJhYm9sZCB0ZXh0LTN4bCBtYi01IFx0XHRmb250LW5vdG8gZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAge2RhdGFbaW5kZXhdLnF1ZXN0aW9ufVxuICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtkYXRhW2luZGV4XS5vcHRpb25zICYmXG4gICAgICAgICAgICAgICAgICBkYXRhW2luZGV4XS5vcHRpb25zLm1hcCgoZTogYW55LCBpOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYga2V5PXtlfT4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmFkaW8gaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmFkaW9CdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPXtlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRlbENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcdGxhYmVsc3AgcC00IGJnLWdyYXktNjAwIHRleHQtd2hpdGUgbWItMyBsYXN0Om1iLTAgcm91bmRlZC1tZCBibG9jayBob3ZlcjpiZy1vcmFuZ2UtNDAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicC0zIG1sLTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC1ncmF5LTMwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWFyb3VuZCAgYWJzb2x1dGUgYm90dG9tLTAgcmlnaHQtMFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LXdoaXRlIGJnLWdyYXktODAwIGhvdmVyOmJnLWdyYXktOTAwIGZvY3VzOnJpbmctZ3JheS0zMDAgZm9udC1tZWRpdW0gcm91bmRlZC1sZyB0ZXh0LXNtIHB4LTUgcHktMi41IG1yLTIgbWItMiBkYXJrOmJnLXdoaXRlIGRhcms6dGV4dC1ibGFjayBkYXJrOmZvY3VzOnJpbmctZ3JheS03MDAgZGFyazpib3JkZXItZ3JheS03MDBgfVxuICAgICAgICAgICAgICBvbkNsaWNrPXtnZW5lcmF0ZVJhbmRvbU51bWJlcn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTmV4dFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidGhlbWVzIiwiSG9tZSIsImluZGV4Iiwic2V0SW5kZXgiLCJzY29yZSIsInNldFNjb3JlIiwiYW5zIiwic2V0QW5zIiwiZ2VuZXJhdGVkTnVtYmVycyIsInNldEdlbmVyYXRlZE51bWJlcnMiLCJkYXJrIiwic2V0RGFyayIsImRhdGEiLCJxdWVzdGlvbiIsIm9wdGlvbnMiLCJhbnN3ZXIiLCJnZW5lcmF0ZVJhbmRvbU51bWJlciIsImxhYmVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29uc29sZSIsImxvZyIsInQxIiwiaXRlbSIsImZpbHRlciIsIngiLCJsZW5ndGgiLCJhbGVydCIsInJhbmRvbU51bWJlciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImluY2x1ZGVzIiwic2V0VGltZW91dCIsImluY3Jlc2VTY29yZSIsInJhZGlvIiwiZm9yRWFjaCIsImUiLCJpIiwiY2hlY2tlZCIsImV2ZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiaGFuZGVsQ2hhbmdlIiwidGFyZ2V0IiwiaHRtbEZvciIsImNvbnRhaW5zIiwiYWRkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJtYXAiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsImlkIiwibmFtZSIsIm9uQ2xpY2siLCJzcGFuIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});