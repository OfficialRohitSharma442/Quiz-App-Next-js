"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/context */ \"./context/context.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction App(param) {\n    let { Component , pageProps  } = param;\n    _s();\n    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    const [dark, setDark] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const darkMode = ()=>{\n        if (localStorage.getItem(\"DarkMode\") !== \"dark\") {\n            localStorage.setItem(\"DarkMode\", \"dark\");\n            setDark(true);\n            document.body.classList.add(\"dark\");\n        } else {\n            localStorage.setItem(\"DarkMode\", \"white\");\n            setDark(false);\n            document.body.classList.remove(\"dark\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (localStorage.getItem(\"DarkMode\") === \"dark\") {\n            setDark(true);\n            document.body.classList.add(\"dark\");\n        } else {\n            document.body.classList.remove(\"dark\");\n            setDark(false);\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_context__WEBPACK_IMPORTED_MODULE_3__.themes.Provider, {\n        value: {\n            dark,\n            setDark,\n            darkMode,\n            score,\n            setScore\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\_app.tsx\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\_app.tsx\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\RohitashSharma\\\\Desktop\\\\Quiz-App-Next-js-main\\\\Quiz-App-Next-js\\\\pages\\\\_app.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(App, \"3zrKz1uOKKwEpuYOTAnjYjlFSPg=\");\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUVXO0FBQ0c7QUFDQTtBQUM3QixTQUFTSSxJQUFJLEtBQWtDLEVBQUU7UUFBcEMsRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQVksR0FBbEM7O0lBQzFCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNPLE1BQU1DLFFBQVEsR0FBR1IsK0NBQVFBLENBQUMsS0FBSztJQUN0QyxNQUFNUyxXQUFXLElBQU07UUFDckIsSUFBSUMsYUFBYUMsT0FBTyxDQUFDLGdCQUFnQixRQUFRO1lBQy9DRCxhQUFhRSxPQUFPLENBQUMsWUFBWTtZQUNqQ0osUUFBUSxJQUFJO1lBQ1pLLFNBQVNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUM7UUFDOUIsT0FBTztZQUNMTixhQUFhRSxPQUFPLENBQUMsWUFBWTtZQUNqQ0osUUFBUSxLQUFLO1lBQ2JLLFNBQVNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDRSxNQUFNLENBQUM7UUFDakMsQ0FBQztJQUNIO0lBQ0FoQixnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSVMsYUFBYUMsT0FBTyxDQUFDLGdCQUFnQixRQUFRO1lBQy9DSCxRQUFRLElBQUk7WUFDWkssU0FBU0MsSUFBSSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQztRQUM5QixPQUFPO1lBQ0xILFNBQVNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDRSxNQUFNLENBQUM7WUFDL0JULFFBQVEsS0FBSztRQUNmLENBQUM7SUFDSCxHQUFHLEVBQUU7SUFDTCxxQkFDRSw4REFBQ1QsNkRBQWU7UUFBQ29CLE9BQU87WUFBRVo7WUFBTUM7WUFBU0M7WUFBV0o7WUFBT0M7UUFBUTtrQkFDakUsNEVBQUNSLDBEQUFNQTtzQkFDTCw0RUFBQ0s7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7OztBQUloQyxDQUFDO0dBOUJ1QkY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJAL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiQC9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHsgdGhlbWVzIH0gZnJvbSBcIi4uL2NvbnRleHQvY29udGV4dFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgY29uc3QgW3Njb3JlLCBzZXRTY29yZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2RhcmssIHNldERhcmtdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBkYXJrTW9kZSA9ICgpID0+IHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJEYXJrTW9kZVwiKSAhPT0gXCJkYXJrXCIpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiRGFya01vZGVcIiwgXCJkYXJrXCIpO1xuICAgICAgc2V0RGFyayh0cnVlKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImRhcmtcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiRGFya01vZGVcIiwgXCJ3aGl0ZVwiKTtcbiAgICAgIHNldERhcmsoZmFsc2UpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiZGFya1wiKTtcbiAgICB9XG4gIH07XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiRGFya01vZGVcIikgPT09IFwiZGFya1wiKSB7XG4gICAgICBzZXREYXJrKHRydWUpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiZGFya1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiZGFya1wiKTtcbiAgICAgIHNldERhcmsoZmFsc2UpO1xuICAgIH1cbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDx0aGVtZXMuUHJvdmlkZXIgdmFsdWU9e3sgZGFyaywgc2V0RGFyaywgZGFya01vZGUgLCBzY29yZSwgc2V0U2NvcmV9fT5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvdGhlbWVzLlByb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkxheW91dCIsInRoZW1lcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic2NvcmUiLCJzZXRTY29yZSIsImRhcmsiLCJzZXREYXJrIiwiZGFya01vZGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsImRvY3VtZW50IiwiYm9keSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n"));

/***/ })

});