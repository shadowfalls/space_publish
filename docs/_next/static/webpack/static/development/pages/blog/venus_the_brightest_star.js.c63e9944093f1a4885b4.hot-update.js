webpackHotUpdate("static/development/pages/blog/venus_the_brightest_star.js",{

/***/ "./components/RecentArticles.js":
/*!**************************************!*\
  !*** ./components/RecentArticles.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RecentArticles; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/utils */ "./services/utils.js");
/* harmony import */ var _styles_RecentArticles_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/RecentArticles.style */ "./styles/RecentArticles.style.js");
var _jsxFileName = "/home/dinesh/work_dump/my_projects/space_blog/components/RecentArticles.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function RecentArticles(_ref) {
  var _this = this;

  var articles = _ref.articles;
  // const articles = [
  //   { "title": "Mars the red planet", "date": "2020-07-17", "readTimeMin": "9", "blogId": "mars_the_red_planet", "id": "5ef965a4cddd5628e4170142" },
  //   { "title": "Venus the brightest star", "date": "2020-07-03", "readTimeMin": "5", "blogId": "venus_the_brightest_star", "id": "5ef86aaa994b14386ffa064b" },
  //   { "title": "Mercury the innermost planet", "date": "2020-06-26", "readTimeMin": "5", "blogId": "mercury_the_innermost_planet", "id": "5eec3bce0fc5774a4f4baf6a" }
  // ];
  var blogs = articles.map(function (c) {
    var url = Object(_services_utils__WEBPACK_IMPORTED_MODULE_2__["getArticleUrl"])(c.blogId);
    return __jsx(_styles_RecentArticles_style__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: c.blogId,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "recent-card",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: url,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }
    }, __jsx("a", {
      rel: "noopener",
      "aria-label": c.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }
    }, c.title))), __jsx("div", {
      className: "details",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }
    }, "".concat(Object(_services_utils__WEBPACK_IMPORTED_MODULE_2__["printDate"])(c.date), " - ").concat(c.readTimeMin, " mins read"))));
  });
  return __jsx("div", {
    className: "d-flex justify-content-start flex-wrap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, blogs);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js":
false

})
//# sourceMappingURL=venus_the_brightest_star.js.c63e9944093f1a4885b4.hot-update.js.map