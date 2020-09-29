webpackHotUpdate("static/development/pages/blog/mercury_the_innermost_planet.js",{

/***/ "./services/useBlogLoader.js":
/*!***********************************!*\
  !*** ./services/useBlogLoader.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useBlogLoader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/constants */ "./constants/constants.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_constants_constants__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./services/utils.js");




function useBlogLoader(_ref) {
  var id = _ref.id;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    title: '',
    description: '',
    categoryId: '',
    readTimeMin: 0,
    date: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getDate"])(),
    content: []
  }),
      blog = _useState[0],
      setBlog = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      recent = _useState2[0],
      setRecent = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!id) return;
    var blogId = id;

    if (_constants_constants__WEBPACK_IMPORTED_MODULE_2__["isLocal"]) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getArticleMap"])().then(function (data) {
        debugger;
        blogId = data.articleNameMap[id];
        Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getBlog"])(blogId).then(function (res) {
          if (res) {
            var _data = res.data && res.data.data ? res.data.data : res.data ? res.data : {};

            setBlog({
              content: _data.content && _data.content.length ? _data.content : [],
              title: _data.title,
              description: _data.description,
              date: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getDate"])(_data.date),
              readTimeMin: _data.readTimeMin,
              categoryId: _data.categoryId
            });
          }

          window.scrollTo(0, 0);
        })["catch"](function () {
          next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/', '/', {
            shallow: false
          });
        });
      })["catch"](function (err) {
        var tr = err;
        debugger;
      });
    } else {
      Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getBlog"])(id).then(function (res) {
        if (res) {
          var data = res.data && res.data.data ? res.data.data : res.data ? res.data : {};
          setBlog({
            content: data.content && data.content.length ? data.content : [],
            title: data.title,
            description: data.description,
            date: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getDate"])(data.date),
            readTimeMin: data.readTimeMin,
            categoryId: data.categoryId
          });
        }

        window.scrollTo(0, 0);
      })["catch"](function () {
        next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/', '/', {
          shallow: false
        });
      });
    }
  }, [id]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getRecentArticles"])().then(function (res) {
      if (res) setRecent(res.data && res.data.length ? res.data : []);
    })["catch"](function () {});
  }, []);
  return {
    blog: blog,
    recent: recent
  };
}

/***/ })

})
//# sourceMappingURL=mercury_the_innermost_planet.js.c91974426e6581e5055b.hot-update.js.map