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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    // const [answer, setAnswer] = useState(false);\n    const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [flag, setFlag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [ans, setAns] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    let arr = [\n        1,\n        2\n    ];\n    const checknum = (randomNum)=>{\n        return randomNum === randomNum;\n    };\n    const data = [\n        {\n            question: \"What is the capital of France?\",\n            options: [\n                \"London\",\n                \"Paris\",\n                \"Berlin\",\n                \"Madrid\"\n            ],\n            answer: \"Paris\"\n        },\n        {\n            question: \"Who painted the Mona Lisa?\",\n            options: [\n                \"Vincent van Gogh\",\n                \"Leonardo da Vinci\",\n                \"Pablo Picasso\",\n                \"Michelangelo\"\n            ],\n            answer: \"Leonardo da Vinci\"\n        },\n        {\n            question: \"What is the largest mammal in the world?\",\n            options: [\n                \"Elephant\",\n                \"Blue Whale\",\n                \"Giraffe\",\n                \"Hippopotamus\"\n            ],\n            answer: \"Blue Whale\"\n        },\n        {\n            question: \"What is the currency of Japan?\",\n            options: [\n                \"Dollar\",\n                \"Euro\",\n                \"Yen\",\n                \"Pound\"\n            ],\n            answer: \"Yen\"\n        },\n        {\n            question: \"What is the tallest mountain in the world?\",\n            options: [\n                \"Mount Everest\",\n                \"K2\",\n                \"Kilimanjaro\",\n                \"Denali\"\n            ],\n            answer: \"Mount Everest\"\n        },\n        {\n            question: \"What is the largest country in the world by land area?\",\n            options: [\n                \"Canada\",\n                \"Russia\",\n                \"China\",\n                \"United States\"\n            ],\n            answer: \"Russia\"\n        },\n        {\n            question: \"What is the chemical symbol for gold?\",\n            options: [\n                \"Go\",\n                \"Au\",\n                \"Gd\",\n                \"Ag\"\n            ],\n            answer: \"Au\"\n        },\n        {\n            question: \"What is the smallest planet in our solar system?\",\n            options: [\n                \"Venus\",\n                \"Mars\",\n                \"Mercury\",\n                \"Earth\"\n            ],\n            answer: \"Mercury\"\n        },\n        {\n            question: \"What is the largest planet in our solar system?\",\n            options: [\n                \"Jupiter\",\n                \"Saturn\",\n                \"Neptune\",\n                \"Uranus\"\n            ],\n            answer: \"Jupiter\"\n        },\n        {\n            question: \"What is the name of the first man to walk on the moon?\",\n            options: [\n                \"Buzz Aldrin\",\n                \"Neil Armstrong\",\n                \"Yuri Gagarin\",\n                \"Alan Shepard\"\n            ],\n            answer: \"Neil Armstrong\"\n        }\n    ];\n    // let arrj : any = [];\n    arr[0] = [\n        0\n    ];\n    // let i = 0;\n    const nextPage = ()=>{\n        let randomNum = Math.floor(Math.random() * 10);\n        arr.push(randomNum);\n        if (arr.find(()=>{\n            checknum(randomNum);\n        })) {\n            console.log(\"hi\");\n        } else {\n            console.log(\"no no no\");\n        }\n    // if (arr.includes(randomNum)) {\n    //   randomNum = Math.floor(Math.random() * 10);\n    //   setIndex(Math.floor(Math.random() * 10));\n    //   arr.push(randomNum);\n    // } else {\n    //   setIndex(randomNum);\n    //   arr.push(randomNum);\n    // }\n    // console.log(arr);\n    // if (ans == data[index].answer) {\n    //   setScore(score + 1);\n    // }\n    // const radio = document.querySelectorAll(\".radio\");\n    // radio.forEach((e: any, i: any) => {\n    //   if (e.checked) {\n    //     e.checked = false;\n    //   }\n    // });\n    };\n    const handelChange = (e)=>{\n        setAns(e.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mr-auto align-middle p-5 border-x-sky-950 border-4 border-solid \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"ques\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: data[index].question\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                        lineNumber: 119,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                    lineNumber: 118,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: data[index].options && data[index].options.map((e, i)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"radio\",\n                                    className: \"radio\",\n                                    value: e,\n                                    id: i,\n                                    name: \"radioButton\",\n                                    onChange: handelChange\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                    lineNumber: 126,\n                                    columnNumber: 19\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: i,\n                                    children: e\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                    lineNumber: 134,\n                                    columnNumber: 19\n                                }, this)\n                            ]\n                        }, i, true, {\n                            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                            lineNumber: 125,\n                            columnNumber: 17\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                    lineNumber: 121,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-around\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"border-x-2 border-y-2 p-2 bg-slate-900 text-white\",\n                        onClick: nextPage,\n                        children: \"Next\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                        lineNumber: 140,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                    lineNumber: 139,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n            lineNumber: 117,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"2yXRwE4McSZxj25nEOkyGq2odSo=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVE7Ozs7Ozs7Ozs7OzhCQUUzQiw4REFBQ2U7OEJBQ0VoQixJQUFJLENBQUNYLE1BQU0sQ0FBQ2EsT0FBTyxJQUNsQkYsSUFBSSxDQUFDWCxNQUFNLENBQUNhLE9BQU8sQ0FBQ2lCLEdBQUcsQ0FBQyxDQUFDTixHQUFRTyxJQUFXO3dCQUMxQyxxQkFDRSw4REFBQ0o7OzhDQUNDLDhEQUFDSztvQ0FDQ0MsTUFBSztvQ0FDTEwsV0FBVTtvQ0FDVkYsT0FBT0Y7b0NBQ1BVLElBQUlIO29DQUNKSSxNQUFLO29DQUNMQyxVQUFVYjs7Ozs7OzhDQUVaLDhEQUFDYztvQ0FBTUMsU0FBU1A7OENBQUlQOzs7Ozs7OzJCQVRaTzs7Ozs7b0JBWWQ7Ozs7Ozs4QkFFSiw4REFBQ0o7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNXO3dCQUNDWCxXQUFVO3dCQUNWWSxTQUFTekI7a0NBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9YLENBQUM7R0FsSnVCaEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3Bhd24gfSBmcm9tIFwiY2hpbGRfcHJvY2Vzc1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAvLyBjb25zdCBbYW5zd2VyLCBzZXRBbnN3ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc2NvcmUsIHNldFNjb3JlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbZmxhZywgc2V0RmxhZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFthbnMsIHNldEFuc10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgbGV0IGFycjogYW55ID0gWzEsIDJdO1xuICBjb25zdCBjaGVja251bSA9IChyYW5kb21OdW0pOmFueSA9PiB7XG4gICAgcmV0dXJuIHJhbmRvbU51bSA9PT0gcmFuZG9tTnVtO1xuICB9O1xuICBjb25zdCBkYXRhID0gW1xuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgaXMgdGhlIGNhcGl0YWwgb2YgRnJhbmNlP1wiLFxuICAgICAgb3B0aW9uczogW1wiTG9uZG9uXCIsIFwiUGFyaXNcIiwgXCJCZXJsaW5cIiwgXCJNYWRyaWRcIl0sXG4gICAgICBhbnN3ZXI6IFwiUGFyaXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldobyBwYWludGVkIHRoZSBNb25hIExpc2E/XCIsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgIFwiVmluY2VudCB2YW4gR29naFwiLFxuICAgICAgICBcIkxlb25hcmRvIGRhIFZpbmNpXCIsXG4gICAgICAgIFwiUGFibG8gUGljYXNzb1wiLFxuICAgICAgICBcIk1pY2hlbGFuZ2Vsb1wiLFxuICAgICAgXSxcbiAgICAgIGFuc3dlcjogXCJMZW9uYXJkbyBkYSBWaW5jaVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyB0aGUgbGFyZ2VzdCBtYW1tYWwgaW4gdGhlIHdvcmxkP1wiLFxuICAgICAgb3B0aW9uczogW1wiRWxlcGhhbnRcIiwgXCJCbHVlIFdoYWxlXCIsIFwiR2lyYWZmZVwiLCBcIkhpcHBvcG90YW11c1wiXSxcbiAgICAgIGFuc3dlcjogXCJCbHVlIFdoYWxlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaGF0IGlzIHRoZSBjdXJyZW5jeSBvZiBKYXBhbj9cIixcbiAgICAgIG9wdGlvbnM6IFtcIkRvbGxhclwiLCBcIkV1cm9cIiwgXCJZZW5cIiwgXCJQb3VuZFwiXSxcbiAgICAgIGFuc3dlcjogXCJZZW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgaXMgdGhlIHRhbGxlc3QgbW91bnRhaW4gaW4gdGhlIHdvcmxkP1wiLFxuICAgICAgb3B0aW9uczogW1wiTW91bnQgRXZlcmVzdFwiLCBcIksyXCIsIFwiS2lsaW1hbmphcm9cIiwgXCJEZW5hbGlcIl0sXG4gICAgICBhbnN3ZXI6IFwiTW91bnQgRXZlcmVzdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyB0aGUgbGFyZ2VzdCBjb3VudHJ5IGluIHRoZSB3b3JsZCBieSBsYW5kIGFyZWE/XCIsXG4gICAgICBvcHRpb25zOiBbXCJDYW5hZGFcIiwgXCJSdXNzaWFcIiwgXCJDaGluYVwiLCBcIlVuaXRlZCBTdGF0ZXNcIl0sXG4gICAgICBhbnN3ZXI6IFwiUnVzc2lhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaGF0IGlzIHRoZSBjaGVtaWNhbCBzeW1ib2wgZm9yIGdvbGQ/XCIsXG4gICAgICBvcHRpb25zOiBbXCJHb1wiLCBcIkF1XCIsIFwiR2RcIiwgXCJBZ1wiXSxcbiAgICAgIGFuc3dlcjogXCJBdVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyB0aGUgc21hbGxlc3QgcGxhbmV0IGluIG91ciBzb2xhciBzeXN0ZW0/XCIsXG4gICAgICBvcHRpb25zOiBbXCJWZW51c1wiLCBcIk1hcnNcIiwgXCJNZXJjdXJ5XCIsIFwiRWFydGhcIl0sXG4gICAgICBhbnN3ZXI6IFwiTWVyY3VyeVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyB0aGUgbGFyZ2VzdCBwbGFuZXQgaW4gb3VyIHNvbGFyIHN5c3RlbT9cIixcbiAgICAgIG9wdGlvbnM6IFtcIkp1cGl0ZXJcIiwgXCJTYXR1cm5cIiwgXCJOZXB0dW5lXCIsIFwiVXJhbnVzXCJdLFxuICAgICAgYW5zd2VyOiBcIkp1cGl0ZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgaXMgdGhlIG5hbWUgb2YgdGhlIGZpcnN0IG1hbiB0byB3YWxrIG9uIHRoZSBtb29uP1wiLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICBcIkJ1enogQWxkcmluXCIsXG4gICAgICAgIFwiTmVpbCBBcm1zdHJvbmdcIixcbiAgICAgICAgXCJZdXJpIEdhZ2FyaW5cIixcbiAgICAgICAgXCJBbGFuIFNoZXBhcmRcIixcbiAgICAgIF0sXG4gICAgICBhbnN3ZXI6IFwiTmVpbCBBcm1zdHJvbmdcIixcbiAgICB9LFxuICBdO1xuICAvLyBsZXQgYXJyaiA6IGFueSA9IFtdO1xuICBhcnJbMF0gPSBbMF07XG4gIC8vIGxldCBpID0gMDtcbiAgY29uc3QgbmV4dFBhZ2UgPSAoKSA9PiB7XG4gICAgbGV0IHJhbmRvbU51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICBhcnIucHVzaChyYW5kb21OdW0pO1xuICAgIGlmIChcbiAgICAgIGFyci5maW5kKCgpID0+IHtcbiAgICAgICAgY2hlY2tudW0ocmFuZG9tTnVtKTtcbiAgICAgIH0pXG4gICAgKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImhpXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIm5vIG5vIG5vXCIpO1xuICAgIH1cbiAgICAvLyBpZiAoYXJyLmluY2x1ZGVzKHJhbmRvbU51bSkpIHtcbiAgICAvLyAgIHJhbmRvbU51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAvLyAgIHNldEluZGV4KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSk7XG4gICAgLy8gICBhcnIucHVzaChyYW5kb21OdW0pO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICBzZXRJbmRleChyYW5kb21OdW0pO1xuICAgIC8vICAgYXJyLnB1c2gocmFuZG9tTnVtKTtcbiAgICAvLyB9XG4gICAgLy8gY29uc29sZS5sb2coYXJyKTtcblxuICAgIC8vIGlmIChhbnMgPT0gZGF0YVtpbmRleF0uYW5zd2VyKSB7XG4gICAgLy8gICBzZXRTY29yZShzY29yZSArIDEpO1xuICAgIC8vIH1cbiAgICAvLyBjb25zdCByYWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmFkaW9cIik7XG4gICAgLy8gcmFkaW8uZm9yRWFjaCgoZTogYW55LCBpOiBhbnkpID0+IHtcbiAgICAvLyAgIGlmIChlLmNoZWNrZWQpIHtcbiAgICAvLyAgICAgZS5jaGVja2VkID0gZmFsc2U7XG4gICAgLy8gICB9XG4gICAgLy8gfSk7XG4gIH07XG4gIGNvbnN0IGhhbmRlbENoYW5nZSA9IChlOiBhbnkpID0+IHtcbiAgICBzZXRBbnMoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0byBhbGlnbi1taWRkbGUgcC01IGJvcmRlci14LXNreS05NTAgYm9yZGVyLTQgYm9yZGVyLXNvbGlkIFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1ZXNcIj5cbiAgICAgICAgICA8aDM+e2RhdGFbaW5kZXhdLnF1ZXN0aW9ufTwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtkYXRhW2luZGV4XS5vcHRpb25zICYmXG4gICAgICAgICAgICBkYXRhW2luZGV4XS5vcHRpb25zLm1hcCgoZTogYW55LCBpOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9e2l9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyYWRpb0J1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kZWxDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2l9PntlfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWFyb3VuZFwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci14LTIgYm9yZGVyLXktMiBwLTIgYmctc2xhdGUtOTAwIHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgb25DbGljaz17bmV4dFBhZ2V9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgTmV4dFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSG9tZSIsImluZGV4Iiwic2V0SW5kZXgiLCJzY29yZSIsInNldFNjb3JlIiwiZmxhZyIsInNldEZsYWciLCJhbnMiLCJzZXRBbnMiLCJhcnIiLCJjaGVja251bSIsInJhbmRvbU51bSIsImRhdGEiLCJxdWVzdGlvbiIsIm9wdGlvbnMiLCJhbnN3ZXIiLCJuZXh0UGFnZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInB1c2giLCJmaW5kIiwiY29uc29sZSIsImxvZyIsImhhbmRlbENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRpdiIsImNsYXNzTmFtZSIsImgzIiwibWFwIiwiaSIsImlucHV0IiwidHlwZSIsImlkIiwibmFtZSIsIm9uQ2hhbmdlIiwibGFiZWwiLCJodG1sRm9yIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});