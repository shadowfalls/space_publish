webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/constants */ "./constants/constants.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_constants_constants__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_ThemeProviders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/ThemeProviders */ "./context/ThemeProviders.js");
/* harmony import */ var _styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/bootstrap.min.css */ "./styles/bootstrap.min.css");
/* harmony import */ var _styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_bootswatch_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/_bootswatch.scss */ "./styles/_bootswatch.scss");
/* harmony import */ var _styles_bootswatch_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_bootswatch_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/GlobalStyles */ "./styles/GlobalStyles.js");

var _jsxFileName = "/home/dinesh/work_dump/my_projects/space_blog/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






function App(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      rerender = _useState[0],
      setRerender = _useState[1];

  var onLoad = function onLoad() {
    setRerender('  ');
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.crossorigin = 'anonymous';
    script.src = 'https://kit.fontawesome.com/e84540abee.js';
    document.head.appendChild(script);
    script.addEventListener('load', onLoad);
  }, []);
  /**
     * Loading the adsense script in each page
     */

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!_constants_constants__WEBPACK_IMPORTED_MODULE_2__["enableAds"]) return;
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.crossorigin = 'anonymous';
    script.setAttribute('data-ad-client', _constants_constants__WEBPACK_IMPORTED_MODULE_2__["adClientId"]);
    script.async = true;
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
    document.head.appendChild(script);
    script.addEventListener('load', onLoad);
  }, []);
  return __jsx(_context_ThemeProviders__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, __jsx(_styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }), __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  })), rerender);
}

/***/ })

})
//# sourceMappingURL=_app.js.57b4f4fb8e25efe4e881.hot-update.js.map