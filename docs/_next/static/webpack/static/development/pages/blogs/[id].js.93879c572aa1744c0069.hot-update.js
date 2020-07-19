webpackHotUpdate("static/development/pages/blogs/[id].js",{

/***/ "./services/utils.js":
/*!***************************!*\
  !*** ./services/utils.js ***!
  \***************************/
/*! exports provided: getDate, printDate, getRecentArticles, getBlog, getBlogsByCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDate", function() { return getDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printDate", function() { return printDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecentArticles", function() { return getRecentArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlog", function() { return getBlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlogsByCategory", function() { return getBlogsByCategory; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/constants */ "./constants/constants.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_constants_constants__WEBPACK_IMPORTED_MODULE_1__);


var getDate = function getDate(date) {
  if (!date) return new Date();
  return new Date(date);
};
var printDate = function printDate(date) {
  if (!date) return '';
  date = getDate(date);
  var month = _constants_constants__WEBPACK_IMPORTED_MODULE_1__["months"][date.getMonth()];
  return "".concat(month, " ").concat(date.getDate(), ", ").concat(date.getFullYear());
};
var getRecentArticles = function getRecentArticles() {
  var url = _constants_constants__WEBPACK_IMPORTED_MODULE_1__["isLocal"] ? "".concat(_constants_constants__WEBPACK_IMPORTED_MODULE_1__["localBaseUrl"], "/").concat(_constants_constants__WEBPACK_IMPORTED_MODULE_1__["recentArticles"]) : "".concat(_constants_constants__WEBPACK_IMPORTED_MODULE_1__["baseUrl"], "/api/articles/").concat(_constants_constants__WEBPACK_IMPORTED_MODULE_1__["recentArticles"], ".json");
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url);
};
var getBlog = function getBlog(id) {
  var random = Math.ceil(Math.random() * 100000);
  var url = _constants_constants__WEBPACK_IMPORTED_MODULE_1__["isLocal"] ? "".concat(_constants_constants__WEBPACK_IMPORTED_MODULE_1__["localBaseUrl"], "/api/get_article/").concat(id) : "".concat(_constants_constants__WEBPACK_IMPORTED_MODULE_1__["baseUrl"], "/api/articles/").concat(id, ".json?clearCache=").concat(random);
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url);
};
var getBlogsByCategory = function getBlogsByCategory(id) {
  if (_constants_constants__WEBPACK_IMPORTED_MODULE_1__["isLocal"]) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(_constants_constants__WEBPACK_IMPORTED_MODULE_1__["localBaseUrl"], "/api/get_blog_list"), {
      catId: id
    });
  }

  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_constants_constants__WEBPACK_IMPORTED_MODULE_1__["baseUrl"], "/api/categories/").concat(id, ".json"));
};

/***/ })

})
//# sourceMappingURL=[id].js.93879c572aa1744c0069.hot-update.js.map