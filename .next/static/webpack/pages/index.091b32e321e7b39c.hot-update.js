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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/next/node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_MovieCard_MovieCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/MovieCard/MovieCard */ \"./src/components/MovieCard/MovieCard.jsx\");\n/* harmony import */ var _layouts_MainLayout_MainLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/layouts/MainLayout/MainLayout */ \"./src/layouts/MainLayout/MainLayout.jsx\");\n/* harmony import */ var _pages_Popular_Popular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/pages/Popular/Popular */ \"./src/pages/Popular/Popular.jsx\");\n/* harmony import */ var compressorjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! compressorjs */ \"./node_modules/compressorjs/dist/compressor.js\");\n/* harmony import */ var compressorjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(compressorjs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction App() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_9__._)((0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]), 2), data = _useState[0], setData = _useState[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(function() {\n        fetch(\"https://api.themoviedb.org/3/movie/popular?api_key=7d22d3e9aaa876f40a448214b919c179&language=en-US&page=1\").then(function(res) {\n            return res.json();\n        }).then(function(data) {\n            setData(data.results);\n        });\n    }, []);\n    var pids = [\n        \"id1\",\n        \"id2\",\n        \"id3\"\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            type: \"button\",\n            onClick: function() {\n                return router.push(\"/about\");\n            },\n            children: \"Click me\"\n        }, void 0, false, {\n            fileName: \"D:\\\\workspace\\\\reactjs\\\\app\\\\pages\\\\index.js\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\workspace\\\\reactjs\\\\app\\\\pages\\\\index.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(App, \"9IzkDE5kFBt4dsnXWh3YzFm1RgI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter\n    ];\n});\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5RDtBQUNBO0FBQ1g7QUFDcEI7QUFDWTtBQUNQO0FBQ0Y7QUFDVztBQUNQO0FBQ0M7QUFFbEMsU0FBU1UsTUFBTTs7SUFDYixJQUF3QkYsWUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLEVBQUUsT0FBNUJHLE9BQWlCSCxjQUFYSSxVQUFXSjtJQUN4QixJQUFNSyxTQUFTTixzREFBU0E7SUFDeEJFLGdEQUFTQSxDQUFDLFdBQU07UUFDZEssTUFDRSw2R0FFQ0MsSUFBSSxDQUFDLFNBQUNDO21CQUFRQSxJQUFJQyxJQUFJO1dBQ3RCRixJQUFJLENBQUMsU0FBQ0osTUFBUztZQUNkQyxRQUFRRCxLQUFLTyxPQUFPO1FBQ3RCO0lBQ0osR0FBRyxFQUFFO0lBQ0wsSUFBTUMsT0FBTztRQUFDO1FBQU87UUFBTztLQUFNO0lBQ2xDLHFCQUNFLDhEQUFDQztrQkFDQyw0RUFBQ0M7WUFBT0MsTUFBSztZQUFTQyxTQUFTO3VCQUFNVixPQUFPVyxJQUFJLENBQUM7O3NCQUFXOzs7Ozs7Ozs7OztBQU1sRTtHQXJCU2Q7O1FBRVFILGtEQUFTQTs7O0tBRmpCRztBQXVCVCwrREFBZUEsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb3ZpZUNhcmQgZnJvbSBcIkAvY29tcG9uZW50cy9Nb3ZpZUNhcmQvTW92aWVDYXJkXCI7XHJcbmltcG9ydCBNYWluTGF5b3V0IGZyb20gXCJAL2xheW91dHMvTWFpbkxheW91dC9NYWluTGF5b3V0XCI7XHJcbmltcG9ydCBQb3B1bGFyIGZyb20gXCJAL3BhZ2VzL1BvcHVsYXIvUG9wdWxhclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBDb21wcmVzc29yIGZyb20gXCJjb21wcmVzc29yanNcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gQXBwKCkge1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2goXHJcbiAgICAgIFwiaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS9wb3B1bGFyP2FwaV9rZXk9N2QyMmQzZTlhYWE4NzZmNDBhNDQ4MjE0YjkxOWMxNzkmbGFuZ3VhZ2U9ZW4tVVMmcGFnZT0xXCJcclxuICAgIClcclxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBzZXREYXRhKGRhdGEucmVzdWx0cyk7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuICBjb25zdCBwaWRzID0gW1wiaWQxXCIsIFwiaWQyXCIsIFwiaWQzXCJdO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9hYm91dFwiKX0+XHJcbiAgICAgICAgQ2xpY2sgbWVcclxuICAgICAgPC9idXR0b24+XHJcbiAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXSwibmFtZXMiOlsiTW92aWVDYXJkIiwiTWFpbkxheW91dCIsIlBvcHVsYXIiLCJheGlvcyIsIkNvbXByZXNzb3IiLCJJbWFnZSIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkFwcCIsImRhdGEiLCJzZXREYXRhIiwicm91dGVyIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInJlc3VsdHMiLCJwaWRzIiwiZGl2IiwiYnV0dG9uIiwidHlwZSIsIm9uQ2xpY2siLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});