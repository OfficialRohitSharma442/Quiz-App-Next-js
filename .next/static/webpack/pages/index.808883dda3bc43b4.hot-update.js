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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    // const [answer, setAnswer] = useState(false);\n    const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [flag, setFlag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [ans, setAns] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    let arr = [];\n    const checknum = (randomNum)=>{\n        return randomNum == randomNum;\n    };\n    const data = [\n        {\n            question: \"What is the capital of France?\",\n            options: [\n                \"London\",\n                \"Paris\",\n                \"Berlin\",\n                \"Madrid\"\n            ],\n            answer: \"Paris\"\n        },\n        {\n            question: \"Who painted the Mona Lisa?\",\n            options: [\n                \"Vincent van Gogh\",\n                \"Leonardo da Vinci\",\n                \"Pablo Picasso\",\n                \"Michelangelo\"\n            ],\n            answer: \"Leonardo da Vinci\"\n        },\n        {\n            question: \"What is the largest mammal in the world?\",\n            options: [\n                \"Elephant\",\n                \"Blue Whale\",\n                \"Giraffe\",\n                \"Hippopotamus\"\n            ],\n            answer: \"Blue Whale\"\n        },\n        {\n            question: \"What is the currency of Japan?\",\n            options: [\n                \"Dollar\",\n                \"Euro\",\n                \"Yen\",\n                \"Pound\"\n            ],\n            answer: \"Yen\"\n        },\n        {\n            question: \"What is the tallest mountain in the world?\",\n            options: [\n                \"Mount Everest\",\n                \"K2\",\n                \"Kilimanjaro\",\n                \"Denali\"\n            ],\n            answer: \"Mount Everest\"\n        },\n        {\n            question: \"What is the largest country in the world by land area?\",\n            options: [\n                \"Canada\",\n                \"Russia\",\n                \"China\",\n                \"United States\"\n            ],\n            answer: \"Russia\"\n        },\n        {\n            question: \"What is the chemical symbol for gold?\",\n            options: [\n                \"Go\",\n                \"Au\",\n                \"Gd\",\n                \"Ag\"\n            ],\n            answer: \"Au\"\n        },\n        {\n            question: \"What is the smallest planet in our solar system?\",\n            options: [\n                \"Venus\",\n                \"Mars\",\n                \"Mercury\",\n                \"Earth\"\n            ],\n            answer: \"Mercury\"\n        },\n        {\n            question: \"What is the largest planet in our solar system?\",\n            options: [\n                \"Jupiter\",\n                \"Saturn\",\n                \"Neptune\",\n                \"Uranus\"\n            ],\n            answer: \"Jupiter\"\n        },\n        {\n            question: \"What is the name of the first man to walk on the moon?\",\n            options: [\n                \"Buzz Aldrin\",\n                \"Neil Armstrong\",\n                \"Yuri Gagarin\",\n                \"Alan Shepard\"\n            ],\n            answer: \"Neil Armstrong\"\n        }\n    ];\n    const nextPage = ()=>{\n        // debugger;\n        if (arr.length - 1 === data.length) {\n            alert(\"your score is \".concat(score, \" out of \").concat(data.length));\n        } else {\n            let randomNum = Math.floor(Math.random() * 10);\n            if (arr.includes(randomNum)) {\n                nextPage();\n            } else {\n                // arr.push(randomNum);\n                // setIndex(randomNum);\n                console.log(randomNum);\n            }\n        }\n    // console.log(arr);\n    // console.log(score);\n    // if (ans == data[index].answer) {\n    //   setScore(score + 1);\n    // }\n    // const radio = document.querySelectorAll(\".radio\");\n    // radio.forEach((e: any, i: any) => {\n    //   if (e.checked) {\n    //     e.checked = false;\n    //   }\n    // });\n    };\n    const handelChange = (e)=>{\n        setAns(e.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mr-auto align-middle p-5 border-x-sky-950 border-4 border-solid \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"ques\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: data[index].question\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                    lineNumber: 110,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: data[index].options && data[index].options.map((e, i)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"radio\",\n                                    className: \"radio\",\n                                    value: e,\n                                    id: i,\n                                    name: \"radioButton\",\n                                    onChange: handelChange\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                    lineNumber: 118,\n                                    columnNumber: 19\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: i,\n                                    children: e\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                                    lineNumber: 126,\n                                    columnNumber: 19\n                                }, this)\n                            ]\n                        }, i, true, {\n                            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                            lineNumber: 117,\n                            columnNumber: 17\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                    lineNumber: 113,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-around\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"border-x-2 border-y-2 p-2 bg-slate-900 text-white\",\n                        onClick: nextPage,\n                        children: \"Next\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                        lineNumber: 132,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n                    lineNumber: 131,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\index.tsx\",\n            lineNumber: 109,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"2yXRwE4McSZxj25nEOkyGq2odSo=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTSxDQUFDYSxPQUFPLElBQ2xCRixJQUFJLENBQUNYLE1BQU0sQ0FBQ2EsT0FBTyxDQUFDa0IsR0FBRyxDQUFDLENBQUNOLEdBQVFPLElBQVc7d0JBQzFDLHFCQUNFLDhEQUFDSjs7OENBQ0MsOERBQUNLO29DQUNDQyxNQUFLO29DQUNMTCxXQUFVO29DQUNWRixPQUFPRjtvQ0FDUFUsSUFBSUg7b0NBQ0pJLE1BQUs7b0NBQ0xDLFVBQVViOzs7Ozs7OENBRVosOERBQUNjO29DQUFNQyxTQUFTUDs4Q0FBSVA7Ozs7Ozs7MkJBVFpPOzs7OztvQkFZZDs7Ozs7OzhCQUVKLDhEQUFDSjtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ1c7d0JBQ0NYLFdBQVU7d0JBQ1ZZLFNBQVMxQjtrQ0FDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1gsQ0FBQztHQTFJdUJoQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzcGF3biB9IGZyb20gXCJjaGlsZF9wcm9jZXNzXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIC8vIGNvbnN0IFthbnN3ZXIsIHNldEFuc3dlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzY29yZSwgc2V0U2NvcmVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtmbGFnLCBzZXRGbGFnXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Fucywgc2V0QW5zXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBsZXQgYXJyOiBhbnkgPSBbXTtcbiAgY29uc3QgY2hlY2tudW0gPSAocmFuZG9tTnVtOiBhbnkpID0+IHtcbiAgICByZXR1cm4gcmFuZG9tTnVtID09IHJhbmRvbU51bTtcbiAgfTtcbiAgY29uc3QgZGF0YSA9IFtcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaGF0IGlzIHRoZSBjYXBpdGFsIG9mIEZyYW5jZT9cIixcbiAgICAgIG9wdGlvbnM6IFtcIkxvbmRvblwiLCBcIlBhcmlzXCIsIFwiQmVybGluXCIsIFwiTWFkcmlkXCJdLFxuICAgICAgYW5zd2VyOiBcIlBhcmlzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaG8gcGFpbnRlZCB0aGUgTW9uYSBMaXNhP1wiLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICBcIlZpbmNlbnQgdmFuIEdvZ2hcIixcbiAgICAgICAgXCJMZW9uYXJkbyBkYSBWaW5jaVwiLFxuICAgICAgICBcIlBhYmxvIFBpY2Fzc29cIixcbiAgICAgICAgXCJNaWNoZWxhbmdlbG9cIixcbiAgICAgIF0sXG4gICAgICBhbnN3ZXI6IFwiTGVvbmFyZG8gZGEgVmluY2lcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgaXMgdGhlIGxhcmdlc3QgbWFtbWFsIGluIHRoZSB3b3JsZD9cIixcbiAgICAgIG9wdGlvbnM6IFtcIkVsZXBoYW50XCIsIFwiQmx1ZSBXaGFsZVwiLCBcIkdpcmFmZmVcIiwgXCJIaXBwb3BvdGFtdXNcIl0sXG4gICAgICBhbnN3ZXI6IFwiQmx1ZSBXaGFsZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyB0aGUgY3VycmVuY3kgb2YgSmFwYW4/XCIsXG4gICAgICBvcHRpb25zOiBbXCJEb2xsYXJcIiwgXCJFdXJvXCIsIFwiWWVuXCIsIFwiUG91bmRcIl0sXG4gICAgICBhbnN3ZXI6IFwiWWVuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaGF0IGlzIHRoZSB0YWxsZXN0IG1vdW50YWluIGluIHRoZSB3b3JsZD9cIixcbiAgICAgIG9wdGlvbnM6IFtcIk1vdW50IEV2ZXJlc3RcIiwgXCJLMlwiLCBcIktpbGltYW5qYXJvXCIsIFwiRGVuYWxpXCJdLFxuICAgICAgYW5zd2VyOiBcIk1vdW50IEV2ZXJlc3RcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgaXMgdGhlIGxhcmdlc3QgY291bnRyeSBpbiB0aGUgd29ybGQgYnkgbGFuZCBhcmVhP1wiLFxuICAgICAgb3B0aW9uczogW1wiQ2FuYWRhXCIsIFwiUnVzc2lhXCIsIFwiQ2hpbmFcIiwgXCJVbml0ZWQgU3RhdGVzXCJdLFxuICAgICAgYW5zd2VyOiBcIlJ1c3NpYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyB0aGUgY2hlbWljYWwgc3ltYm9sIGZvciBnb2xkP1wiLFxuICAgICAgb3B0aW9uczogW1wiR29cIiwgXCJBdVwiLCBcIkdkXCIsIFwiQWdcIl0sXG4gICAgICBhbnN3ZXI6IFwiQXVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgaXMgdGhlIHNtYWxsZXN0IHBsYW5ldCBpbiBvdXIgc29sYXIgc3lzdGVtP1wiLFxuICAgICAgb3B0aW9uczogW1wiVmVudXNcIiwgXCJNYXJzXCIsIFwiTWVyY3VyeVwiLCBcIkVhcnRoXCJdLFxuICAgICAgYW5zd2VyOiBcIk1lcmN1cnlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgaXMgdGhlIGxhcmdlc3QgcGxhbmV0IGluIG91ciBzb2xhciBzeXN0ZW0/XCIsXG4gICAgICBvcHRpb25zOiBbXCJKdXBpdGVyXCIsIFwiU2F0dXJuXCIsIFwiTmVwdHVuZVwiLCBcIlVyYW51c1wiXSxcbiAgICAgIGFuc3dlcjogXCJKdXBpdGVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaGF0IGlzIHRoZSBuYW1lIG9mIHRoZSBmaXJzdCBtYW4gdG8gd2FsayBvbiB0aGUgbW9vbj9cIixcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgXCJCdXp6IEFsZHJpblwiLFxuICAgICAgICBcIk5laWwgQXJtc3Ryb25nXCIsXG4gICAgICAgIFwiWXVyaSBHYWdhcmluXCIsXG4gICAgICAgIFwiQWxhbiBTaGVwYXJkXCIsXG4gICAgICBdLFxuICAgICAgYW5zd2VyOiBcIk5laWwgQXJtc3Ryb25nXCIsXG4gICAgfSxcbiAgXTtcbiAgY29uc3QgbmV4dFBhZ2UgPSAoKSA9PiB7XG4gICAgLy8gZGVidWdnZXI7XG4gICAgaWYgKGFyci5sZW5ndGggLSAxID09PSBkYXRhLmxlbmd0aCkge1xuICAgICAgYWxlcnQoYHlvdXIgc2NvcmUgaXMgJHtzY29yZX0gb3V0IG9mICR7ZGF0YS5sZW5ndGh9YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCByYW5kb21OdW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICBpZiAoYXJyLmluY2x1ZGVzKHJhbmRvbU51bSkpIHtcbiAgICAgICAgbmV4dFBhZ2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGFyci5wdXNoKHJhbmRvbU51bSk7XG4gICAgICAgIC8vIHNldEluZGV4KHJhbmRvbU51bSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJhbmRvbU51bSlcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coYXJyKTtcbiAgICAvLyBjb25zb2xlLmxvZyhzY29yZSk7XG5cbiAgICAvLyBpZiAoYW5zID09IGRhdGFbaW5kZXhdLmFuc3dlcikge1xuICAgIC8vICAgc2V0U2NvcmUoc2NvcmUgKyAxKTtcbiAgICAvLyB9XG4gICAgLy8gY29uc3QgcmFkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJhZGlvXCIpO1xuICAgIC8vIHJhZGlvLmZvckVhY2goKGU6IGFueSwgaTogYW55KSA9PiB7XG4gICAgLy8gICBpZiAoZS5jaGVja2VkKSB7XG4gICAgLy8gICAgIGUuY2hlY2tlZCA9IGZhbHNlO1xuICAgIC8vICAgfVxuICAgIC8vIH0pO1xuICB9O1xuICBjb25zdCBoYW5kZWxDaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgc2V0QW5zKGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLWF1dG8gYWxpZ24tbWlkZGxlIHAtNSBib3JkZXIteC1za3ktOTUwIGJvcmRlci00IGJvcmRlci1zb2xpZCBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWVzXCI+XG4gICAgICAgICAgPGgzPntkYXRhW2luZGV4XS5xdWVzdGlvbn08L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7ZGF0YVtpbmRleF0ub3B0aW9ucyAmJlxuICAgICAgICAgICAgZGF0YVtpbmRleF0ub3B0aW9ucy5tYXAoKGU6IGFueSwgaTogYW55KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2V9XG4gICAgICAgICAgICAgICAgICAgIGlkPXtpfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmFkaW9CdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGVsQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtpfT57ZX08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1hcm91bmRcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIteC0yIGJvcmRlci15LTIgcC0yIGJnLXNsYXRlLTkwMCB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e25leHRQYWdlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIE5leHRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkhvbWUiLCJpbmRleCIsInNldEluZGV4Iiwic2NvcmUiLCJzZXRTY29yZSIsImZsYWciLCJzZXRGbGFnIiwiYW5zIiwic2V0QW5zIiwiYXJyIiwiY2hlY2tudW0iLCJyYW5kb21OdW0iLCJkYXRhIiwicXVlc3Rpb24iLCJvcHRpb25zIiwiYW5zd2VyIiwibmV4dFBhZ2UiLCJsZW5ndGgiLCJhbGVydCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImluY2x1ZGVzIiwiY29uc29sZSIsImxvZyIsImhhbmRlbENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRpdiIsImNsYXNzTmFtZSIsImgzIiwibWFwIiwiaSIsImlucHV0IiwidHlwZSIsImlkIiwibmFtZSIsIm9uQ2hhbmdlIiwibGFiZWwiLCJodG1sRm9yIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});