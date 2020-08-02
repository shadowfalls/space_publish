(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/_app.js"],{

/***/ "./constants/constants.js":
/*!********************************!*\
  !*** ./constants/constants.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var AppConstants = {
  baseUrl: 'https://raw.githubusercontent.com/shadowfalls/space_mirror/master',
  isLocal: "development" === 'development',
  localBaseUrl: 'http://localhost:3939',

  /* AdSense Ad Client ID for dinesh24murali.github.io */
  adClientId: 'ca-pub-3929370842605036',

  /* Google site verification */
  googleSiteVerifiId: 'iTMKpZzdcgBX1pxilUsECD707mg5YpFaGA2DaDZvHUM',
  domain: 'dinesh24murali.github.io',
  routeLinks: {
    categories: '/topics',
    about: '/about',
    blogListPage: '/blogs',
    blogPage: '/blog'
  },
  months: {
    0: 'January',
    1: 'Febuary',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
  },
  categoryTypes: '_categorieTypes',
  recentArticles: '_recentArticlesJson',
  navLinks: [{
    name: 'Solar system',
    id:  true ? '5eec3bb20fc5774a4f4baf69' : undefined,
    label: 'Solar system'
  }],
  getArticleUrl: function getArticleUrl(id) {
    return  true ? "/blogs/".concat(id) : undefined;
  }
};
module.exports = AppConstants;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/_bootswatch.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./styles/_bootswatch.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".navbar {\n  font-size: 0.875rem;\n}\n.navbar.bg-dark {\n  background-color: #02B875 !important;\n}\n.navbar.bg-light {\n  background-color: #fff !important;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n.navbar.bg-light.navbar-fixed-top {\n  border-width: 0 0 1px 0;\n}\n.navbar.bg-light.navbar-fixed-bottom {\n  border-width: 1px 0 0 0;\n}\n\n.btn {\n  border-radius: 1.078em;\n}\n.btn-lg {\n  border-radius: 2.688em;\n}\n.btn-sm {\n  border-radius: 0.844em;\n}\n\np {\n  font-family: Georgia, Cambria, \"Times New Roman\", Times, serif;\n}\n\nblockquote {\n  font-style: italic;\n}\n\nfooter {\n  font-size: 0.875rem;\n}\n\n.lead {\n  color: #868e96;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n}\n\ntable,\n.table {\n  font-size: 0.875rem;\n}\ntable-primary, table-secondary, table-success, table-info, table-warning, table-danger,\n.table-primary,\n.table-secondary,\n.table-success,\n.table-info,\n.table-warning,\n.table-danger {\n  color: #fff;\n}\n\n.table-primary, .table-primary > th, .table-primary > td {\n  background-color: #4582EC;\n}\n.table-secondary, .table-secondary > th, .table-secondary > td {\n  background-color: #adb5bd;\n}\n.table-light, .table-light > th, .table-light > td {\n  background-color: #f8f9fa;\n}\n.table-dark, .table-dark > th, .table-dark > td {\n  background-color: #343a40;\n}\n.table-success, .table-success > th, .table-success > td {\n  background-color: #02B875;\n}\n.table-info, .table-info > th, .table-info > td {\n  background-color: #17a2b8;\n}\n.table-danger, .table-danger > th, .table-danger > td {\n  background-color: #d9534f;\n}\n.table-warning, .table-warning > th, .table-warning > td {\n  background-color: #f0ad4e;\n}\n.table-hover .table-primary:hover, .table-hover .table-primary:hover > th, .table-hover .table-primary:hover > td {\n  background-color: #2e72ea;\n}\n.table-hover .table-secondary:hover, .table-hover .table-secondary:hover > th, .table-hover .table-secondary:hover > td {\n  background-color: #9fa8b2;\n}\n.table-hover .table-light:hover, .table-hover .table-light:hover > th, .table-hover .table-light:hover > td {\n  background-color: #e9ecef;\n}\n.table-hover .table-dark:hover, .table-hover .table-dark:hover > th, .table-hover .table-dark:hover > td {\n  background-color: #292d32;\n}\n.table-hover .table-success:hover, .table-hover .table-success:hover > th, .table-hover .table-success:hover > td {\n  background-color: #029f65;\n}\n.table-hover .table-info:hover, .table-hover .table-info:hover > th, .table-hover .table-info:hover > td {\n  background-color: #148ea1;\n}\n.table-hover .table-danger:hover, .table-hover .table-danger:hover > th, .table-hover .table-danger:hover > td {\n  background-color: #d43f3a;\n}\n.table-hover .table-warning:hover, .table-hover .table-warning:hover > th, .table-hover .table-warning:hover > td {\n  background-color: #eea236;\n}\n\n.nav,\n.breadcrumb,\n.pagination {\n  font-size: 0.875rem;\n}\n\n.dropdown-menu {\n  font-size: 0.875rem;\n}\n\n.alert {\n  color: #fff;\n  font-size: 0.875rem;\n}\n.alert, .alert p {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n}\n.alert a, .alert .alert-link {\n  color: #fff;\n  font-weight: normal;\n  text-decoration: underline;\n}\n.alert-light, .alert-light a, .alert-light .alert-link {\n  color: #343a40;\n}\n\n.badge {\n  vertical-align: bottom;\n}\n\n.list-group {\n  font-size: 0.875rem;\n}", "",{"version":3,"sources":["/home/dinesh/work_dump/my_projects/space_blog/styles/_bootswatch.scss"],"names":[],"mappings":"AA6GA;EACE,mBArEe;AAvCjB;AA8GE;EACE,oCAAA;AA5GJ;AA+GE;EACE,iCAAA;EACA,oCAAA;AA7GJ;AA+GI;EACE,uBAAA;AA7GN;AAgHI;EACE,uBAAA;AA9GN;;AAqHA;EACE,sBAAA;AAlHF;AAoHE;EACE,sBAAA;AAlHJ;AAqHE;EACE,sBAAA;AAnHJ;;AAyHA;EACE,8DA1CkB;AA5EpB;;AAyHA;EACE,kBAAA;AAtHF;;AAyHA;EACE,mBAlHe;AAJjB;;AAyHA;EACE,cAlJS;EAmJT,kMA/G4B;AAP9B;;AA2HA;;EAEE,mBA9He;AAMjB;AA0HE;;;;;;;EAME,WAAA;AAvHJ;;AA8HI;EACE,yBApKI;AAyCV;AAgII;EACE,yBAjLK;AAmDX;AAmII;EACE,yBA3LK;AA0DX;AAsII;EACE,yBA1LK;AAsDX;AAyII;EACE,yBArLI;AA8CV;AA4II;EACE,yBAzLI;AA+CV;AA+II;EACE,yBApMI;AAuDV;AAkJI;EACE,yBAxMI;AAwDV;AAuJM;EACE,yBAAA;AArJR;AA0JM;EACE,yBAAA;AAxJR;AA6JM;EACE,yBAAA;AA3JR;AAgKM;EACE,yBAAA;AA9JR;AAmKM;EACE,yBAAA;AAjKR;AAsKM;EACE,yBAAA;AApKR;AAyKM;EACE,yBAAA;AAvKR;AA4KM;EACE,yBAAA;AA1KR;;AAqLA;;;EAGE,mBAxPe;AAsEjB;;AAqLA;EACE,mBA5Pe;AA0EjB;;AAuLA;EACE,WApSS;EAqST,mBAnQe;AA+EjB;AAsLE;EACE,kMA9P0B;AA0E9B;AAuLE;EACE,WAAA;EACA,mBAAA;EACA,0BAAA;AArLJ;AAyLI;EAGE,cA7SK;AAoHX;;AA8LA;EACE,sBAAA;AA3LF;;AAkMA;EACE,mBAjSe;AAkGjB","file":"_bootswatch.scss","sourcesContent":["// Litera 4.3.1\n// Bootswatch\n\n//\n// Color system\n//\n\n$white:    #fff !default;\n$gray-100: #f8f9fa !default;\n$gray-200: #e9ecef !default;\n$gray-300: #ddd !default;\n$gray-400: #ced4da !default;\n$gray-500: #adb5bd !default;\n$gray-600: #868e96 !default;\n$gray-700: #495057 !default;\n$gray-800: #343a40 !default;\n$gray-900: #212529 !default;\n$black:    #000 !default;\n\n$blue:    #4582EC !default;\n$indigo:  #6610f2 !default;\n$purple:  #6f42c1 !default;\n$pink:    #e83e8c !default;\n$red:     #d9534f !default;\n$orange:  #fd7e14 !default;\n$yellow:  #f0ad4e !default;\n$green:   #02B875 !default;\n$teal:    #20c997 !default;\n$cyan:    #17a2b8 !default;\n\n$primary:       $blue !default;\n$secondary:     $gray-500 !default;\n$success:       $green !default;\n$info:          $cyan !default;\n$warning:       $yellow !default;\n$danger:        $red !default;\n$light:         $gray-100 !default;\n$dark:          $gray-800 !default;\n\n$yiq-contrasted-threshold:  190 !default;\n\n$font-size-sm:   .875rem !default;\n\n// Body\n\n$body-color:                $gray-800 !default;\n\n// Fonts\n\n$font-family-sans-serif:      -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\" !default;\n\n$font-size-base:              1.063rem !default;\n\n$headings-font-weight:        700 !default;\n\n// Tables\n\n$table-border-color:          rgba(0,0,0,0.1) !default;\n\n// Buttons\n\n$input-btn-padding-y:         0.5rem !default;\n$input-btn-padding-x:         1.1rem !default;\n\n$btn-font-family:             $font-family-sans-serif !default;\n$btn-font-size:               0.875rem !default;\n\n$btn-font-size-sm:            0.688rem !default;\n\n// Forms\n\n$input-border-color:                    rgba(0,0,0,.1) !default;\n\n$input-group-addon-bg:                  $gray-200 !default !default;\n\n// Navbar\n\n$navbar-dark-color:                 rgba($white,.6) !default;\n$navbar-dark-hover-color:           $white !default;\n\n$navbar-light-hover-color:          $body-color !default;\n$navbar-light-active-color:         $body-color !default;\n\n// Tooltips\n\n$tooltip-font-size:                 11px !default;\n\n// Badges\n\n$badge-font-weight:                 normal !default;\n$badge-padding-y:                   0.6em !default;\n$badge-padding-x:                   1.2em !default;\n\n// Alerts\n\n$alert-border-width:                0 !default;\n\n\n\n// Litera 4.3.1\n// Bootswatch\n\n\n// Variables ===================================================================\n\n$font-family-serif: Georgia, Cambria, \"Times New Roman\", Times, serif !default;\n\n// Navbar ======================================================================\n\n.navbar {\n  font-size: $font-size-sm;\n\n  &.bg-dark {\n    background-color: $success !important;\n  }\n\n  &.bg-light {\n    background-color: #fff !important;\n    border: 1px solid rgba(0, 0, 0, 0.1);\n\n    &.navbar-fixed-top {\n      border-width: 0 0 1px 0;\n    }\n\n    &.navbar-fixed-bottom {\n      border-width: 1px 0 0 0;\n    }\n  }\n}\n\n// Buttons =====================================================================\n\n.btn {\n  border-radius: 1.078em;\n\n  &-lg {\n    border-radius: 2.688em;\n  }\n\n  &-sm {\n    border-radius: 0.844em;\n  }\n}\n\n// Typography ==================================================================\n\np {\n  font-family: $font-family-serif;\n}\n\nblockquote {\n  font-style: italic;\n}\n\nfooter {\n  font-size: $font-size-sm;\n}\n\n.lead {\n  color: $gray-600;\n  font-family: $font-family-sans-serif;\n}\n\n// Tables ======================================================================\n\ntable,\n.table {\n  font-size: $font-size-sm;\n\n  &-primary,\n  &-secondary,\n  &-success,\n  &-info,\n  &-warning,\n  &-danger {\n    color: #fff;\n  }\n}\n\n.table {\n\n  &-primary {\n    &, > th, > td {\n      background-color: $primary;\n    }\n  }\n\n  &-secondary {\n    &, > th, > td {\n      background-color: $secondary;\n    }\n  }\n\n  &-light {\n    &, > th, > td {\n      background-color: $light;\n    }\n  }\n\n  &-dark {\n    &, > th, > td {\n      background-color: $dark;\n    }\n  }\n\n  &-success {\n    &, > th, > td {\n      background-color: $success;\n    }\n  }\n\n  &-info {\n    &, > th, > td {\n      background-color: $info;\n    }\n  }\n\n  &-danger {\n    &, > th, > td {\n      background-color: $danger;\n    }\n  }\n\n  &-warning {\n    &, > th, > td {\n      background-color: $warning;\n    }\n  }\n\n  &-hover {\n\n    .table-primary:hover {\n      &, > th, > td {\n        background-color: darken($primary, 5%);\n      }\n    }\n\n    .table-secondary:hover {\n      &, > th, > td {\n        background-color: darken($secondary, 5%);\n      }\n    }\n\n    .table-light:hover {\n      &, > th, > td {\n        background-color: darken($light, 5%);\n      }\n    }\n\n    .table-dark:hover {\n      &, > th, > td {\n        background-color: darken($dark, 5%);\n      }\n    }\n\n    .table-success:hover {\n      &, > th, > td {\n        background-color: darken($success, 5%);\n      }\n    }\n\n    .table-info:hover {\n      &, > th, > td {\n        background-color: darken($info, 5%);\n      }\n    }\n\n    .table-danger:hover {\n      &, > th, > td {\n        background-color: darken($danger, 5%);\n      }\n    }\n\n    .table-warning:hover {\n      &, > th, > td {\n        background-color: darken($warning, 5%);\n      }\n    }\n\n  }\n}\n\n// Forms =======================================================================\n\n// Navs ========================================================================\n\n.nav,\n.breadcrumb,\n.pagination {\n  font-size: $font-size-sm;\n}\n\n.dropdown-menu {\n  font-size: $font-size-sm;\n}\n\n// Indicators ==================================================================\n\n.alert {\n  color: $white;\n  font-size: $font-size-sm;\n\n  &, p {\n    font-family: $font-family-sans-serif;\n  }\n\n  a, .alert-link {\n    color: #fff;\n    font-weight: normal;\n    text-decoration: underline;\n  }\n\n  &-light {\n    &,\n    & a,\n    & .alert-link {\n      color: $body-color;\n    }\n  }\n}\n\n.badge {\n  vertical-align: bottom;\n}\n\n// Progress bars ===============================================================\n\n// Containers ==================================================================\n\n.list-group {\n  font-size: $font-size-sm;\n}\n"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/blog-layout.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./styles/blog-layout.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".blog-page .heading-advertise {\n  height: 10vh;\n  background-color: white;\n  margin-left: 30%;\n  margin-right: 30%;\n}\n.blog-page__container {\n  margin-top: 30px;\n  margin-bottom: 60px;\n}\n.blog-page__container .heading-text {\n  font-size: 3rem;\n  font-weight: 300;\n  line-height: 1.2;\n  padding-left: 1.5em;\n}\n.blog-page__container .lead {\n  padding-left: 6em;\n  color: rgba(0, 0, 0, 0.54);\n  fill: rgba(0, 0, 0, 0.54);\n  font-size: 16px;\n}\n.blog-page__container .contents {\n  font-family: medium-content-serif-font, Georgia, Cambria, \"Times New Roman\", Times, serif;\n  letter-spacing: 0.01rem;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 21px;\n  line-height: 1.58;\n  letter-spacing: -0.003em;\n}\n.blog-page__container .contents > div {\n  display: block;\n  -webkit-margin-before: 1em;\n          margin-block-start: 1em;\n  -webkit-margin-after: 1em;\n          margin-block-end: 1em;\n}\n.blog-page__container .contents .main-heading {\n  font-size: 30px;\n  font-weight: 600;\n}\n.blog-page__container .contents .image > img {\n  border-radius: 10px;\n}\n.blog-page__container .contents .sub-heading {\n  font-size: 24px;\n  font-weight: 600;\n}\n.blog-page__container .contents .code-section {\n  background: rgba(0, 0, 0, 0.05);\n  padding: 20px;\n  white-space: pre-wrap;\n}\n.blog-page__container .contents .quote {\n  background-color: transparent !important;\n  font-size: 24px;\n  line-height: 1.4;\n  letter-spacing: -0.005em;\n  font-family: medium-content-slab-serif-font, Georgia, Cambria, \"Times New Roman\", Times, serif;\n  font-weight: 400;\n  font-style: italic;\n  padding-left: 20%;\n}\n.blog-page__container .share {\n  display: block;\n  float: left;\n  padding-left: 6em;\n  margin-top: 10px;\n}\n.blog-page__container .share > li {\n  display: inline;\n  font-size: 20px;\n}\n.blog-page__container .share .hide-links {\n  display: none;\n}\n.blog-page__container .header-ad {\n  display: none;\n}\n.blog-page__container .recent {\n  font-size: 1.25rem;\n  font-weight: 500;\n  margin-bottom: 1em;\n  border-bottom: 2px solid #4582EC;\n  line-height: 40px;\n}\n@media only screen and (max-width: 500px) {\n  .blog-page__container {\n    margin-top: 30px;\n  }\n  .blog-page__container .header-ad {\n    display: block;\n  }\n  .blog-page__container .heading-text {\n    font-size: 2.5rem;\n    font-weight: 300;\n    line-height: 1.2;\n    padding-left: 0px;\n    text-align: left;\n  }\n  .blog-page__container .advertise {\n    background-color: white;\n  }\n  .blog-page__container .lead {\n    font-size: 1rem;\n    padding-left: 0em;\n    padding-left: 5px;\n    text-align: left;\n  }\n  .blog-page__container .contents {\n    font-family: medium-content-serif-font, Georgia, Cambria, \"Times New Roman\", Times, serif;\n    letter-spacing: 0.01rem;\n    font-weight: 400;\n    font-style: normal;\n    font-size: 18px;\n    line-height: 1.58;\n    letter-spacing: -0.003em;\n  }\n  .blog-page__container .contents > div {\n    display: block;\n    -webkit-margin-before: 0.75em;\n            margin-block-start: 0.75em;\n    -webkit-margin-after: 0.75em;\n            margin-block-end: 0.75em;\n  }\n  .blog-page__container .contents .main-heading {\n    font-size: 30px;\n    font-weight: 600;\n  }\n  .blog-page__container .contents .image > img {\n    border-radius: 10px;\n  }\n  .blog-page__container .contents .sub-heading {\n    font-size: 20px;\n    font-weight: 600;\n  }\n  .blog-page__container .contents .code-section {\n    background: rgba(0, 0, 0, 0.05);\n    padding: 14px;\n    white-space: pre-wrap;\n  }\n  .blog-page__container .contents .quote {\n    background-color: transparent !important;\n    font-size: 24px;\n    line-height: 1.4;\n    letter-spacing: -0.005em;\n    font-family: medium-content-slab-serif-font, Georgia, Cambria, \"Times New Roman\", Times, serif;\n    font-weight: 400;\n    font-style: italic;\n    padding-left: 20%;\n  }\n  .blog-page__container .contents img {\n    max-width: 95%;\n  }\n  .blog-page__container .share {\n    padding-left: 1em;\n  }\n}", "",{"version":3,"sources":["/home/dinesh/work_dump/my_projects/space_blog/styles/blog-layout.scss"],"names":[],"mappings":"AAEI;EACI,YAAA;EACA,uBAAA;EACA,gBAAA;EACA,iBAAA;AADR;AAGI;EACI,gBAAA;EACA,mBAAA;AADR;AAEQ;EACI,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,mBAAA;AAAZ;AAEQ;EACI,iBAAA;EACA,0BAAA;EACA,yBAAA;EACA,eAAA;AAAZ;AAEQ;EACI,yFAAA;EACA,uBAAA;EACA,gBAAA;EACA,kBAAA;EACA,eAAA;EACA,iBAAA;EACA,wBAAA;AAAZ;AACY;EACI,cAAA;EACA,0BAAA;UAAA,uBAAA;EACA,yBAAA;UAAA,qBAAA;AAChB;AACY;EACI,eAAA;EACA,gBAAA;AAChB;AAEgB;EACI,mBAAA;AAApB;AAGY;EACI,eAAA;EACA,gBAAA;AADhB;AAGY;EACI,+BAAA;EACA,aAAA;EACA,qBAAA;AADhB;AAGY;EACI,wCAAA;EACA,eAAA;EACA,gBAAA;EACA,wBAAA;EACA,8FAAA;EACA,gBAAA;EACA,kBAAA;EACA,iBAAA;AADhB;AAIQ;EACI,cAAA;EACA,WAAA;EACA,iBAAA;EACA,gBAAA;AAFZ;AAGY;EACI,eAAA;EACA,eAAA;AADhB;AAGY;EACI,aAAA;AADhB;AAIQ;EACI,aAAA;AAFZ;AAIQ;EACI,kBAAA;EACA,gBAAA;EACA,kBAAA;EACA,gCAAA;EACA,iBAAA;AAFZ;AAKI;EACI;IACI,gBAAA;EAHV;EAIU;IACI,cAAA;EAFd;EAIU;IACI,iBAAA;IACA,gBAAA;IACA,gBAAA;IACA,iBAAA;IACA,gBAAA;EAFd;EAIU;IACI,uBAAA;EAFd;EAIU;IACI,eAAA;IACA,iBAAA;IACA,iBAAA;IACA,gBAAA;EAFd;EAIU;IACI,yFAAA;IACA,uBAAA;IACA,gBAAA;IACA,kBAAA;IACA,eAAA;IACA,iBAAA;IACA,wBAAA;EAFd;EAGc;IACI,cAAA;IACA,6BAAA;YAAA,0BAAA;IACA,4BAAA;YAAA,wBAAA;EADlB;EAGc;IACI,eAAA;IACA,gBAAA;EADlB;EAIkB;IACI,mBAAA;EAFtB;EAKc;IACI,eAAA;IACA,gBAAA;EAHlB;EAKc;IACI,+BAAA;IACA,aAAA;IACA,qBAAA;EAHlB;EAKc;IACI,wCAAA;IACA,eAAA;IACA,gBAAA;IACA,wBAAA;IACA,8FAAA;IACA,gBAAA;IACA,kBAAA;IACA,iBAAA;EAHlB;EAKc;IACI,cAAA;EAHlB;EAMU;IACI,iBAAA;EAJd;AACF","file":"blog-layout.scss","sourcesContent":["\n.blog-page {\n    .heading-advertise {\n        height: 10vh;\n        background-color: white;\n        margin-left: 30%;  \n        margin-right: 30%;  \n    }\n    &__container {\n        margin-top: 30px;\n        margin-bottom: 60px;\n        .heading-text {\n            font-size: 3rem;\n            font-weight: 300;\n            line-height: 1.2;\n            padding-left: 1.5em;\n        }\n        .lead {\n            padding-left: 6em;\n            color: rgba(0,0,0,.54);\n            fill: rgba(0,0,0,.54);\n            font-size: 16px;\n        }\n        .contents {\n            font-family: medium-content-serif-font,Georgia,Cambria,\"Times New Roman\",Times,serif;\n            letter-spacing: .01rem;\n            font-weight: 400;\n            font-style: normal;\n            font-size: 21px;\n            line-height: 1.58;\n            letter-spacing: -.003em;\n            > div {\n                display: block;\n                margin-block-start: 1em;\n                margin-block-end: 1em;\n            }\n            .main-heading {\n                font-size: 30px;\n                font-weight: 600;\n            }\n            .image {\n                > img {\n                    border-radius: 10px;\n                }\n            }\n            .sub-heading {\n                font-size: 24px;\n                font-weight: 600;\n            }\n            .code-section {\n                background: rgba(0,0,0,.05);\n                padding: 20px;\n                white-space: pre-wrap;\n            }\n            .quote {\n                background-color: transparent !important;\n                font-size: 24px;\n                line-height: 1.4;\n                letter-spacing: -.005em;\n                font-family: medium-content-slab-serif-font,Georgia,Cambria,\"Times New Roman\",Times,serif;\n                font-weight: 400;\n                font-style: italic;\n                padding-left: 20%;\n            }\n        }\n        .share {\n            display: block;\n            float: left;\n            padding-left: 6em;\n            margin-top: 10px;\n            > li {\n                display: inline;\n                font-size: 20px;\n            }\n            .hide-links {\n                display: none;\n            }\n        }\n        .header-ad {\n            display: none;\n        }\n        .recent {\n            font-size: 1.25rem;\n            font-weight: 500;\n            margin-bottom: 1em;\n            border-bottom: 2px solid #4582EC;\n            line-height: 40px;\n        }\n    }\n    @media only screen and (max-width: 500px) {\n        &__container {\n            margin-top: 30px;\n            .header-ad {\n                display: block;\n            }\n            .heading-text {\n                font-size: 2.5rem;\n                font-weight: 300;\n                line-height: 1.2;\n                padding-left: 0px;\n                text-align: left;\n            }\n            .advertise {\n                background-color: white;\n            }\n            .lead {\n                font-size: 1rem;\n                padding-left: 0em;\n                padding-left: 5px;\n                text-align: left;\n            }\n            .contents {\n                font-family: medium-content-serif-font,Georgia,Cambria,\"Times New Roman\",Times,serif;\n                letter-spacing: .01rem;\n                font-weight: 400;\n                font-style: normal;\n                font-size: 18px;\n                line-height: 1.58;\n                letter-spacing: -.003em;\n                > div {\n                    display: block;\n                    margin-block-start: 0.75em;\n                    margin-block-end: 0.75em;\n                }\n                .main-heading {\n                    font-size: 30px;\n                    font-weight: 600;\n                }\n                .image {\n                    > img {\n                        border-radius: 10px;\n                    }\n                }\n                .sub-heading {\n                    font-size: 20px;\n                    font-weight: 600;\n                }\n                .code-section {\n                    background: rgba(0,0,0,.05);\n                    padding: 14px;\n                    white-space: pre-wrap;\n                }\n                .quote {\n                    background-color: transparent !important;\n                    font-size: 24px;\n                    line-height: 1.4;\n                    letter-spacing: -.005em;\n                    font-family: medium-content-slab-serif-font,Georgia,Cambria,\"Times New Roman\",Times,serif;\n                    font-weight: 400;\n                    font-style: italic;\n                    padding-left: 20%;\n                }\n                img {\n                    max-width: 95%;\n                }\n            }\n            .share {\n                padding-left: 1em;\n            }\n        }\n    }\n}\n"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/blog-list.scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./styles/blog-list.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".blog-list .heading-advertise {\n  height: 10vh;\n  background-color: white;\n  margin-left: 30%;\n  margin-right: 30%;\n}\n.blog-list__container {\n  margin-top: 30px;\n  margin-bottom: 60px;\n}\n.blog-list__container .heading-text {\n  font-size: 3rem;\n  font-weight: 300;\n  line-height: 1.2;\n  text-align: center;\n}\n.blog-list__container .advertise {\n  background-color: white;\n}\n.blog-list__container .lead {\n  text-align: center;\n}\n.blog-list__container .card-wrapper {\n  margin-right: 20px;\n  margin-bottom: 1.5em;\n  min-width: 45%;\n}\n.blog-list__container .card-wrapper .card {\n  min-width: 100%;\n}\n.blog-list__container .card-wrapper .card .card-body {\n  min-width: 100%;\n}\n.blog-list__container .card-wrapper .card .details {\n  color: rgba(0, 0, 0, 0.54);\n  fill: rgba(0, 0, 0, 0.54);\n  font-size: 16px;\n}\n.blog-list__container .card-title {\n  font-weight: 600;\n  font-size: 20px;\n}\n@media only screen and (max-width: 500px) {\n  .blog-list__container {\n    margin-top: 30px;\n  }\n  .blog-list__container .heading-text {\n    font-size: 2.5rem;\n    font-weight: 300;\n    line-height: 1.2;\n    text-align: center;\n  }\n  .blog-list__container .card-wrapper {\n    min-width: 100%;\n  }\n  .blog-list__container .advertise {\n    background-color: white;\n  }\n  .blog-list__container .lead {\n    font-size: 1rem;\n    text-align: center;\n  }\n}", "",{"version":3,"sources":["/home/dinesh/work_dump/my_projects/space_blog/styles/blog-list.scss"],"names":[],"mappings":"AAEI;EACI,YAAA;EACA,uBAAA;EACA,gBAAA;EACA,iBAAA;AADR;AAGI;EACI,gBAAA;EACA,mBAAA;AADR;AAEQ;EACI,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;AAAZ;AAEQ;EACI,uBAAA;AAAZ;AAEQ;EACI,kBAAA;AAAZ;AAEQ;EACI,kBAAA;EACA,oBAAA;EACA,cAAA;AAAZ;AACY;EACI,eAAA;AAChB;AAAgB;EACI,eAAA;AAEpB;AAAgB;EACI,0BAAA;EACA,yBAAA;EACA,eAAA;AAEpB;AAEQ;EACI,gBAAA;EACA,eAAA;AAAZ;AAGI;EACI;IACI,gBAAA;EADV;EAEU;IACI,iBAAA;IACA,gBAAA;IACA,gBAAA;IACA,kBAAA;EAAd;EAEU;IACI,eAAA;EAAd;EAEU;IACI,uBAAA;EAAd;EAEU;IACI,eAAA;IACA,kBAAA;EAAd;AACF","file":"blog-list.scss","sourcesContent":["\n.blog-list {\n    .heading-advertise {\n        height: 10vh;\n        background-color: white;\n        margin-left: 30%;  \n        margin-right: 30%;  \n    }\n    &__container {\n        margin-top: 30px;\n        margin-bottom: 60px;\n        .heading-text {\n            font-size: 3rem;\n            font-weight: 300;\n            line-height: 1.2;\n            text-align: center;\n        }\n        .advertise {\n            background-color: white;\n        }\n        .lead {\n            text-align: center;\n        }\n        .card-wrapper {\n            margin-right: 20px;\n            margin-bottom: 1.5em;\n            min-width: 45%;\n            .card {\n                min-width: 100%;\n                .card-body {\n                    min-width: 100%;\n                }\n                .details {\n                    color: rgba(0,0,0,.54);\n                    fill: rgba(0,0,0,.54);\n                    font-size: 16px;\n                }\n            }\n        }\n        .card-title {\n            font-weight: 600;\n            font-size: 20px;\n        }\n    }\n    @media only screen and (max-width: 500px) {\n        &__container {\n            margin-top: 30px;\n            .heading-text {\n                font-size: 2.5rem;\n                font-weight: 300;\n                line-height: 1.2;\n                text-align: center;\n            }\n            .card-wrapper {\n                min-width: 100%;\n            }\n            .advertise {\n                background-color: white;\n            }\n            .lead {\n                font-size: 1rem;\n                text-align: center;\n            }\n        }\n    }\n}"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/globals.scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./styles/globals.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".footer {\n  height: 100px;\n  border-top: 2px solid #47C072;\n}\n.footer__container {\n  margin: 0px 10% 0px 10%;\n}\n.footer__container .brand {\n  font-size: 1.32875rem;\n  padding-top: 34px;\n  color: white;\n}\n.footer__container .brand .brand-text {\n  color: white;\n}\n.footer__container .brand .brand-text:hover {\n  color: white;\n  text-decoration: none;\n}", "",{"version":3,"sources":["/home/dinesh/work_dump/my_projects/space_blog/styles/globals.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,6BAAA;AACJ;AAAI;EACI,uBAAA;AAER;AADQ;EACI,qBAAA;EACA,iBAAA;EACA,YAAA;AAGZ;AAFY;EACI,YAAA;AAIhB;AAFY;EACI,YAAA;EACA,qBAAA;AAIhB","file":"globals.scss","sourcesContent":[".footer {\n    height: 100px;\n    border-top: 2px solid #47C072;\n    &__container {\n        margin: 0px 10% 0px 10%;\n        .brand {\n            font-size: 1.32875rem;\n            padding-top: 34px;\n            color: white;\n            .brand-text {\n                color: white;\n            }\n            .brand-text:hover {\n                color: white;\n                text-decoration: none;\n            }\n        }\n    }\n}"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/landing-page.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./styles/landing-page.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".landing-page .heading-advertise {\n  height: 10vh;\n  background-color: white;\n  margin-left: 30%;\n  margin-right: 30%;\n}\n.landing-page__container {\n  margin-top: 30px;\n  margin-bottom: 60px;\n  width: 100%;\n}\n.landing-page__container .welcome-text {\n  font-size: 4.5rem;\n  font-weight: 300;\n  line-height: 1.2;\n  padding-left: 1em;\n}\n.landing-page__container .advertise {\n  background-color: white;\n}\n.landing-page__container .lead {\n  padding-left: 4em;\n}\n.landing-page__container .card-margin {\n  margin-left: 1.5em;\n  margin-bottom: 1.5em;\n}\n.landing-page__container .card-title {\n  font-weight: 600;\n  font-size: 20px;\n}\n.landing-page__container .recent {\n  font-size: 1.25rem;\n  font-weight: 500;\n  margin-bottom: 1em;\n  border-bottom: 2px solid #4582EC;\n  line-height: 40px;\n}\n@media only screen and (max-width: 500px) {\n  .landing-page .heading-advertise {\n    height: 10vh;\n    background-color: white;\n    margin-left: 30%;\n    margin-right: 30%;\n  }\n  .landing-page__container {\n    margin-top: 30px;\n    width: 100%;\n  }\n  .landing-page__container .welcome-text {\n    font-size: 3.5rem;\n    font-weight: 300;\n    line-height: 1.2;\n    padding-left: 0.2em;\n    text-align: center;\n  }\n  .landing-page__container .advertise {\n    background-color: white;\n  }\n  .landing-page__container .lead {\n    font-size: 1rem;\n    padding-left: 2em;\n  }\n  .landing-page__container .card-margin {\n    margin-left: 1.5em;\n    margin-bottom: 1.5em;\n  }\n  .landing-page__container .card-title {\n    font-weight: 600;\n    font-size: 20px;\n  }\n}", "",{"version":3,"sources":["/home/dinesh/work_dump/my_projects/space_blog/styles/landing-page.scss"],"names":[],"mappings":"AAEI;EACI,YAAA;EACA,uBAAA;EACA,gBAAA;EACA,iBAAA;AADR;AAGI;EACI,gBAAA;EACA,mBAAA;EACA,WAAA;AADR;AAEQ;EACI,iBAAA;EACA,gBAAA;EACA,gBAAA;EACA,iBAAA;AAAZ;AAEQ;EACI,uBAAA;AAAZ;AAEQ;EACI,iBAAA;AAAZ;AAEQ;EACI,kBAAA;EACA,oBAAA;AAAZ;AAEQ;EACI,gBAAA;EACA,eAAA;AAAZ;AAEQ;EACI,kBAAA;EACA,gBAAA;EACA,kBAAA;EACA,gCAAA;EACA,iBAAA;AAAZ;AAII;EACI;IACI,YAAA;IACA,uBAAA;IACA,gBAAA;IACA,iBAAA;EAFV;EAIM;IACI,gBAAA;IACA,WAAA;EAFV;EAGU;IACI,iBAAA;IACA,gBAAA;IACA,gBAAA;IACA,mBAAA;IACA,kBAAA;EADd;EAGU;IACI,uBAAA;EADd;EAGU;IACI,eAAA;IACA,iBAAA;EADd;EAGU;IACI,kBAAA;IACA,oBAAA;EADd;EAGU;IACI,gBAAA;IACA,eAAA;EADd;AACF","file":"landing-page.scss","sourcesContent":["\n.landing-page {\n    .heading-advertise {\n        height: 10vh;\n        background-color: white;\n        margin-left: 30%;  \n        margin-right: 30%;  \n    }\n    &__container {\n        margin-top: 30px;\n        margin-bottom: 60px;\n        width: 100%;\n        .welcome-text {\n            font-size: 4.5rem;\n            font-weight: 300;\n            line-height: 1.2;\n            padding-left: 1em;\n        }\n        .advertise {\n            background-color: white;\n        }\n        .lead {\n            padding-left: 4em;\n        }\n        .card-margin {\n            margin-left: 1.5em;\n            margin-bottom: 1.5em;\n        }\n        .card-title {\n            font-weight: 600;\n            font-size: 20px;\n        }\n        .recent {\n            font-size: 1.25rem;\n            font-weight: 500;\n            margin-bottom: 1em;\n            border-bottom: 2px solid #4582EC;\n            line-height: 40px;\n        }\n    }\n\n    @media only screen and (max-width: 500px) {\n        .heading-advertise {\n            height: 10vh;\n            background-color: white;\n            margin-left: 30%;  \n            margin-right: 30%;\n        }\n        &__container {\n            margin-top: 30px;\n            width: 100%;\n            .welcome-text {\n                font-size: 3.5rem;\n                font-weight: 300;\n                line-height: 1.2;\n                padding-left: 0.2em;\n                text-align: center;\n            }\n            .advertise {\n                background-color: white;\n            }\n            .lead {\n                font-size: 1rem;\n                padding-left: 2em;\n            }\n            .card-margin {\n                margin-left: 1.5em;\n                margin-bottom: 1.5em;\n            }\n            .card-title {\n                font-weight: 600;\n                font-size: 20px;\n            }\n        }\n    }\n}\n"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/recent-articles.scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./styles/recent-articles.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".recent-card {\n  margin-right: 10px;\n  min-width: 32%;\n}\n.recent-card .title {\n  font-weight: 600;\n  font-size: 20px;\n  margin-bottom: 0.75rem;\n}\n\n@media only screen and (max-width: 500px) {\n  .recent-card {\n    margin: 5px 5px 5px 15px;\n    width: 90%;\n  }\n}", "",{"version":3,"sources":["/home/dinesh/work_dump/my_projects/space_blog/styles/recent-articles.scss"],"names":[],"mappings":"AACA;EACI,kBAAA;EACA,cAAA;AAAJ;AACI;EACI,gBAAA;EACA,eAAA;EACA,sBAAA;AACR;;AAEA;EACI;IACI,wBAAA;IACA,UAAA;EACN;AACF","file":"recent-articles.scss","sourcesContent":["\n.recent-card {\n    margin-right: 10px;\n    min-width: 32%;\n    .title {\n        font-weight: 600;\n        font-size: 20px;\n        margin-bottom: 0.75rem;\n    }\n}\n@media only screen and (max-width: 500px) {\n    .recent-card {\n        margin: 5px 5px 5px 15px;\n        width: 90%;\n    }\n}\n"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/bootstrap.min.css":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./styles/bootstrap.min.css ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "/*!\n * Bootswatch v4.5.0\n * Homepage: https://bootswatch.com\n * Copyright 2012-2020 Thomas Park\n * Licensed under MIT\n * Based on Bootstrap\n*//*!\n * Bootstrap v4.5.0 (https://getbootstrap.com/)\n * Copyright 2011-2020 The Bootstrap Authors\n * Copyright 2011-2020 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */:root{--blue: #4582EC;--indigo: #6610f2;--purple: #6f42c1;--pink: #e83e8c;--red: #d9534f;--orange: #fd7e14;--yellow: #f0ad4e;--green: #02B875;--teal: #20c997;--cyan: #17a2b8;--white: #fff;--gray: #868e96;--gray-dark: #343a40;--primary: #4582EC;--secondary: #adb5bd;--success: #02B875;--info: #17a2b8;--warning: #f0ad4e;--danger: #d9534f;--light: #f8f9fa;--dark: #343a40;--breakpoint-xs: 0;--breakpoint-sm: 576px;--breakpoint-md: 768px;--breakpoint-lg: 992px;--breakpoint-xl: 1200px;--font-family-sans-serif: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";--font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace}*,*::before,*::after{box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0)}article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}body{margin:0;font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";font-size:1.063rem;font-weight:400;line-height:1.5;color:#343a40;text-align:left;background-color:#fff}[tabindex=\"-1\"]:focus:not(:focus-visible){outline:0 !important}hr{box-sizing:content-box;height:0;overflow:visible}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:0.5rem}p{margin-top:0;margin-bottom:1rem}abbr[title],abbr[data-original-title]{text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;border-bottom:0;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}address{margin-bottom:1rem;font-style:normal;line-height:inherit}ol,ul,dl{margin-top:0;margin-bottom:1rem}ol ol,ul ul,ol ul,ul ol{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}a{color:#4582EC;text-decoration:none;background-color:transparent}a:hover{color:#1559cf;text-decoration:underline}a:not([href]){color:inherit;text-decoration:none}a:not([href]):hover{color:inherit;text-decoration:none}pre,code,kbd,samp{font-family:SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;font-size:1em}pre{margin-top:0;margin-bottom:1rem;overflow:auto;-ms-overflow-style:scrollbar}figure{margin:0 0 1rem}img{vertical-align:middle;border-style:none}svg{overflow:hidden;vertical-align:middle}table{border-collapse:collapse}caption{padding-top:0.75rem;padding-bottom:0.75rem;color:#868e96;text-align:left;caption-side:bottom}th{text-align:inherit}label{display:inline-block;margin-bottom:0.5rem}button{border-radius:0}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}input,button,select,optgroup,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button,select{text-transform:none}[role=\"button\"]{cursor:pointer}select{word-wrap:normal}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button:not(:disabled),[type=\"button\"]:not(:disabled),[type=\"reset\"]:not(:disabled),[type=\"submit\"]:not(:disabled){cursor:pointer}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{padding:0;border-style:none}input[type=\"radio\"],input[type=\"checkbox\"]{box-sizing:border-box;padding:0}textarea{overflow:auto;resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{display:block;width:100%;max-width:100%;padding:0;margin-bottom:.5rem;font-size:1.5rem;line-height:inherit;color:inherit;white-space:normal}progress{vertical-align:baseline}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{outline-offset:-2px;-webkit-appearance:none}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}output{display:inline-block}summary{display:list-item;cursor:pointer}template{display:none}[hidden]{display:none !important}h1,h2,h3,h4,h5,h6,.h1,.h2,.h3,.h4,.h5,.h6{margin-bottom:0.5rem;font-weight:700;line-height:1.2}h1,.h1{font-size:2.6575rem}h2,.h2{font-size:2.126rem}h3,.h3{font-size:1.86025rem}h4,.h4{font-size:1.5945rem}h5,.h5{font-size:1.32875rem}h6,.h6{font-size:1.063rem}.lead{font-size:1.32875rem;font-weight:300}.display-1{font-size:6rem;font-weight:300;line-height:1.2}.display-2{font-size:5.5rem;font-weight:300;line-height:1.2}.display-3{font-size:4.5rem;font-weight:300;line-height:1.2}.display-4{font-size:3.5rem;font-weight:300;line-height:1.2}hr{margin-top:1rem;margin-bottom:1rem;border:0;border-top:1px solid rgba(0,0,0,0.1)}small,.small{font-size:80%;font-weight:400}mark,.mark{padding:0.2em;background-color:#fcf8e3}.list-unstyled{padding-left:0;list-style:none}.list-inline{padding-left:0;list-style:none}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:0.5rem}.initialism{font-size:90%;text-transform:uppercase}.blockquote{margin-bottom:1rem;font-size:1.32875rem}.blockquote-footer{display:block;font-size:80%;color:#868e96}.blockquote-footer::before{content:\"\\2014\\00A0\"}.img-fluid{max-width:100%;height:auto}.img-thumbnail{padding:0.25rem;background-color:#fff;border:1px solid #ddd;border-radius:0.25rem;max-width:100%;height:auto}.figure{display:inline-block}.figure-img{margin-bottom:0.5rem;line-height:1}.figure-caption{font-size:90%;color:#868e96}code{font-size:87.5%;color:#e83e8c;word-wrap:break-word}a>code{color:inherit}kbd{padding:0.2rem 0.4rem;font-size:87.5%;color:#fff;background-color:#212529;border-radius:0.2rem}kbd kbd{padding:0;font-size:100%;font-weight:700}pre{display:block;font-size:87.5%;color:#212529}pre code{font-size:inherit;color:inherit;word-break:normal}.pre-scrollable{max-height:340px;overflow-y:scroll}.container{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width: 576px){.container{max-width:540px}}@media (min-width: 768px){.container{max-width:720px}}@media (min-width: 992px){.container{max-width:960px}}@media (min-width: 1200px){.container{max-width:1140px}}.container-fluid,.container-sm,.container-md,.container-lg,.container-xl{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width: 576px){.container,.container-sm{max-width:540px}}@media (min-width: 768px){.container,.container-sm,.container-md{max-width:720px}}@media (min-width: 992px){.container,.container-sm,.container-md,.container-lg{max-width:960px}}@media (min-width: 1200px){.container,.container-sm,.container-md,.container-lg,.container-xl{max-width:1140px}}.row{display:flex;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.no-gutters{margin-right:0;margin-left:0}.no-gutters>.col,.no-gutters>[class*=\"col-\"]{padding-right:0;padding-left:0}.col-1,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-10,.col-11,.col-12,.col,.col-auto,.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm,.col-sm-auto,.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12,.col-md,.col-md-auto,.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg,.col-lg-auto,.col-xl-1,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl,.col-xl-auto{position:relative;width:100%;padding-right:15px;padding-left:15px}.col{flex-basis:0;flex-grow:1;min-width:0;max-width:100%}.row-cols-1>*{flex:0 0 100%;max-width:100%}.row-cols-2>*{flex:0 0 50%;max-width:50%}.row-cols-3>*{flex:0 0 33.3333333333%;max-width:33.3333333333%}.row-cols-4>*{flex:0 0 25%;max-width:25%}.row-cols-5>*{flex:0 0 20%;max-width:20%}.row-cols-6>*{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-auto{flex:0 0 auto;width:auto;max-width:100%}.col-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-3{flex:0 0 25%;max-width:25%}.col-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-6{flex:0 0 50%;max-width:50%}.col-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-9{flex:0 0 75%;max-width:75%}.col-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-12{flex:0 0 100%;max-width:100%}.order-first{order:-1}.order-last{order:13}.order-0{order:0}.order-1{order:1}.order-2{order:2}.order-3{order:3}.order-4{order:4}.order-5{order:5}.order-6{order:6}.order-7{order:7}.order-8{order:8}.order-9{order:9}.order-10{order:10}.order-11{order:11}.order-12{order:12}.offset-1{margin-left:8.3333333333%}.offset-2{margin-left:16.6666666667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.3333333333%}.offset-5{margin-left:41.6666666667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.3333333333%}.offset-8{margin-left:66.6666666667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.3333333333%}.offset-11{margin-left:91.6666666667%}@media (min-width: 576px){.col-sm{flex-basis:0;flex-grow:1;min-width:0;max-width:100%}.row-cols-sm-1>*{flex:0 0 100%;max-width:100%}.row-cols-sm-2>*{flex:0 0 50%;max-width:50%}.row-cols-sm-3>*{flex:0 0 33.3333333333%;max-width:33.3333333333%}.row-cols-sm-4>*{flex:0 0 25%;max-width:25%}.row-cols-sm-5>*{flex:0 0 20%;max-width:20%}.row-cols-sm-6>*{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-sm-auto{flex:0 0 auto;width:auto;max-width:100%}.col-sm-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-sm-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-sm-3{flex:0 0 25%;max-width:25%}.col-sm-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-sm-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-sm-6{flex:0 0 50%;max-width:50%}.col-sm-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-sm-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-sm-9{flex:0 0 75%;max-width:75%}.col-sm-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-sm-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-sm-12{flex:0 0 100%;max-width:100%}.order-sm-first{order:-1}.order-sm-last{order:13}.order-sm-0{order:0}.order-sm-1{order:1}.order-sm-2{order:2}.order-sm-3{order:3}.order-sm-4{order:4}.order-sm-5{order:5}.order-sm-6{order:6}.order-sm-7{order:7}.order-sm-8{order:8}.order-sm-9{order:9}.order-sm-10{order:10}.order-sm-11{order:11}.order-sm-12{order:12}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.3333333333%}.offset-sm-2{margin-left:16.6666666667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.3333333333%}.offset-sm-5{margin-left:41.6666666667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.3333333333%}.offset-sm-8{margin-left:66.6666666667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.3333333333%}.offset-sm-11{margin-left:91.6666666667%}}@media (min-width: 768px){.col-md{flex-basis:0;flex-grow:1;min-width:0;max-width:100%}.row-cols-md-1>*{flex:0 0 100%;max-width:100%}.row-cols-md-2>*{flex:0 0 50%;max-width:50%}.row-cols-md-3>*{flex:0 0 33.3333333333%;max-width:33.3333333333%}.row-cols-md-4>*{flex:0 0 25%;max-width:25%}.row-cols-md-5>*{flex:0 0 20%;max-width:20%}.row-cols-md-6>*{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-md-auto{flex:0 0 auto;width:auto;max-width:100%}.col-md-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-md-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-md-3{flex:0 0 25%;max-width:25%}.col-md-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-md-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-md-6{flex:0 0 50%;max-width:50%}.col-md-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-md-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-md-9{flex:0 0 75%;max-width:75%}.col-md-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-md-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-md-12{flex:0 0 100%;max-width:100%}.order-md-first{order:-1}.order-md-last{order:13}.order-md-0{order:0}.order-md-1{order:1}.order-md-2{order:2}.order-md-3{order:3}.order-md-4{order:4}.order-md-5{order:5}.order-md-6{order:6}.order-md-7{order:7}.order-md-8{order:8}.order-md-9{order:9}.order-md-10{order:10}.order-md-11{order:11}.order-md-12{order:12}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.3333333333%}.offset-md-2{margin-left:16.6666666667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.3333333333%}.offset-md-5{margin-left:41.6666666667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.3333333333%}.offset-md-8{margin-left:66.6666666667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.3333333333%}.offset-md-11{margin-left:91.6666666667%}}@media (min-width: 992px){.col-lg{flex-basis:0;flex-grow:1;min-width:0;max-width:100%}.row-cols-lg-1>*{flex:0 0 100%;max-width:100%}.row-cols-lg-2>*{flex:0 0 50%;max-width:50%}.row-cols-lg-3>*{flex:0 0 33.3333333333%;max-width:33.3333333333%}.row-cols-lg-4>*{flex:0 0 25%;max-width:25%}.row-cols-lg-5>*{flex:0 0 20%;max-width:20%}.row-cols-lg-6>*{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-lg-auto{flex:0 0 auto;width:auto;max-width:100%}.col-lg-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-lg-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-lg-3{flex:0 0 25%;max-width:25%}.col-lg-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-lg-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-lg-6{flex:0 0 50%;max-width:50%}.col-lg-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-lg-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-lg-9{flex:0 0 75%;max-width:75%}.col-lg-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-lg-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-lg-12{flex:0 0 100%;max-width:100%}.order-lg-first{order:-1}.order-lg-last{order:13}.order-lg-0{order:0}.order-lg-1{order:1}.order-lg-2{order:2}.order-lg-3{order:3}.order-lg-4{order:4}.order-lg-5{order:5}.order-lg-6{order:6}.order-lg-7{order:7}.order-lg-8{order:8}.order-lg-9{order:9}.order-lg-10{order:10}.order-lg-11{order:11}.order-lg-12{order:12}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.3333333333%}.offset-lg-2{margin-left:16.6666666667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.3333333333%}.offset-lg-5{margin-left:41.6666666667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.3333333333%}.offset-lg-8{margin-left:66.6666666667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.3333333333%}.offset-lg-11{margin-left:91.6666666667%}}@media (min-width: 1200px){.col-xl{flex-basis:0;flex-grow:1;min-width:0;max-width:100%}.row-cols-xl-1>*{flex:0 0 100%;max-width:100%}.row-cols-xl-2>*{flex:0 0 50%;max-width:50%}.row-cols-xl-3>*{flex:0 0 33.3333333333%;max-width:33.3333333333%}.row-cols-xl-4>*{flex:0 0 25%;max-width:25%}.row-cols-xl-5>*{flex:0 0 20%;max-width:20%}.row-cols-xl-6>*{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-xl-auto{flex:0 0 auto;width:auto;max-width:100%}.col-xl-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-xl-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-xl-3{flex:0 0 25%;max-width:25%}.col-xl-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-xl-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-xl-6{flex:0 0 50%;max-width:50%}.col-xl-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-xl-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-xl-9{flex:0 0 75%;max-width:75%}.col-xl-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-xl-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-xl-12{flex:0 0 100%;max-width:100%}.order-xl-first{order:-1}.order-xl-last{order:13}.order-xl-0{order:0}.order-xl-1{order:1}.order-xl-2{order:2}.order-xl-3{order:3}.order-xl-4{order:4}.order-xl-5{order:5}.order-xl-6{order:6}.order-xl-7{order:7}.order-xl-8{order:8}.order-xl-9{order:9}.order-xl-10{order:10}.order-xl-11{order:11}.order-xl-12{order:12}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.3333333333%}.offset-xl-2{margin-left:16.6666666667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.3333333333%}.offset-xl-5{margin-left:41.6666666667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.3333333333%}.offset-xl-8{margin-left:66.6666666667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.3333333333%}.offset-xl-11{margin-left:91.6666666667%}}.table{width:100%;margin-bottom:1rem;color:#343a40}.table th,.table td{padding:0.75rem;vertical-align:top;border-top:1px solid rgba(0,0,0,0.1)}.table thead th{vertical-align:bottom;border-bottom:2px solid rgba(0,0,0,0.1)}.table tbody+tbody{border-top:2px solid rgba(0,0,0,0.1)}.table-sm th,.table-sm td{padding:0.3rem}.table-bordered{border:1px solid rgba(0,0,0,0.1)}.table-bordered th,.table-bordered td{border:1px solid rgba(0,0,0,0.1)}.table-bordered thead th,.table-bordered thead td{border-bottom-width:2px}.table-borderless th,.table-borderless td,.table-borderless thead th,.table-borderless tbody+tbody{border:0}.table-striped tbody tr:nth-of-type(odd){background-color:rgba(0,0,0,0.05)}.table-hover tbody tr:hover{color:#343a40;background-color:rgba(0,0,0,0.075)}.table-primary,.table-primary>th,.table-primary>td{background-color:#cbdcfa}.table-primary th,.table-primary td,.table-primary thead th,.table-primary tbody+tbody{border-color:#9ebef5}.table-hover .table-primary:hover{background-color:#b4ccf8}.table-hover .table-primary:hover>td,.table-hover .table-primary:hover>th{background-color:#b4ccf8}.table-secondary,.table-secondary>th,.table-secondary>td{background-color:#e8eaed}.table-secondary th,.table-secondary td,.table-secondary thead th,.table-secondary tbody+tbody{border-color:#d4d9dd}.table-hover .table-secondary:hover{background-color:#dadde2}.table-hover .table-secondary:hover>td,.table-hover .table-secondary:hover>th{background-color:#dadde2}.table-success,.table-success>th,.table-success>td{background-color:#b8ebd8}.table-success th,.table-success td,.table-success thead th,.table-success tbody+tbody{border-color:#7bdab7}.table-hover .table-success:hover{background-color:#a4e5cd}.table-hover .table-success:hover>td,.table-hover .table-success:hover>th{background-color:#a4e5cd}.table-info,.table-info>th,.table-info>td{background-color:#bee5eb}.table-info th,.table-info td,.table-info thead th,.table-info tbody+tbody{border-color:#86cfda}.table-hover .table-info:hover{background-color:#abdde5}.table-hover .table-info:hover>td,.table-hover .table-info:hover>th{background-color:#abdde5}.table-warning,.table-warning>th,.table-warning>td{background-color:#fbe8cd}.table-warning th,.table-warning td,.table-warning thead th,.table-warning tbody+tbody{border-color:#f7d4a3}.table-hover .table-warning:hover{background-color:#f9ddb5}.table-hover .table-warning:hover>td,.table-hover .table-warning:hover>th{background-color:#f9ddb5}.table-danger,.table-danger>th,.table-danger>td{background-color:#f4cfce}.table-danger th,.table-danger td,.table-danger thead th,.table-danger tbody+tbody{border-color:#eba6a3}.table-hover .table-danger:hover{background-color:#efbbb9}.table-hover .table-danger:hover>td,.table-hover .table-danger:hover>th{background-color:#efbbb9}.table-light,.table-light>th,.table-light>td{background-color:#fdfdfe}.table-light th,.table-light td,.table-light thead th,.table-light tbody+tbody{border-color:#fbfcfc}.table-hover .table-light:hover{background-color:#ececf6}.table-hover .table-light:hover>td,.table-hover .table-light:hover>th{background-color:#ececf6}.table-dark,.table-dark>th,.table-dark>td{background-color:#c6c8ca}.table-dark th,.table-dark td,.table-dark thead th,.table-dark tbody+tbody{border-color:#95999c}.table-hover .table-dark:hover{background-color:#b9bbbe}.table-hover .table-dark:hover>td,.table-hover .table-dark:hover>th{background-color:#b9bbbe}.table-active,.table-active>th,.table-active>td{background-color:rgba(0,0,0,0.075)}.table-hover .table-active:hover{background-color:rgba(0,0,0,0.075)}.table-hover .table-active:hover>td,.table-hover .table-active:hover>th{background-color:rgba(0,0,0,0.075)}.table .thead-dark th{color:#fff;background-color:#343a40;border-color:#454d55}.table .thead-light th{color:#495057;background-color:#e9ecef;border-color:rgba(0,0,0,0.1)}.table-dark{color:#fff;background-color:#343a40}.table-dark th,.table-dark td,.table-dark thead th{border-color:#454d55}.table-dark.table-bordered{border:0}.table-dark.table-striped tbody tr:nth-of-type(odd){background-color:rgba(255,255,255,0.05)}.table-dark.table-hover tbody tr:hover{color:#fff;background-color:rgba(255,255,255,0.075)}@media (max-width: 575.98px){.table-responsive-sm{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-sm>.table-bordered{border:0}}@media (max-width: 767.98px){.table-responsive-md{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-md>.table-bordered{border:0}}@media (max-width: 991.98px){.table-responsive-lg{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-lg>.table-bordered{border:0}}@media (max-width: 1199.98px){.table-responsive-xl{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-xl>.table-bordered{border:0}}.table-responsive{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive>.table-bordered{border:0}.form-control{display:block;width:100%;height:calc(1.5em + 1rem + 2px);padding:0.5rem 1.1rem;font-size:1.063rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,0.1);border-radius:0.25rem;transition:border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}@media (prefers-reduced-motion: reduce){.form-control{transition:none}}.form-control::-ms-expand{background-color:transparent;border:0}.form-control:-moz-focusring{color:transparent;text-shadow:0 0 0 #495057}.form-control:focus{color:#495057;background-color:#fff;border-color:#b9d0f8;outline:0;box-shadow:0 0 0 0.2rem rgba(69,130,236,0.25)}.form-control::-webkit-input-placeholder{color:#868e96;opacity:1}.form-control::-ms-input-placeholder{color:#868e96;opacity:1}.form-control::-moz-placeholder{color:#868e96;opacity:1}.form-control:-ms-input-placeholder{color:#868e96;opacity:1}.form-control::placeholder{color:#868e96;opacity:1}.form-control:disabled,.form-control[readonly]{background-color:#e9ecef;opacity:1}input[type=\"date\"].form-control,input[type=\"time\"].form-control,input[type=\"datetime-local\"].form-control,input[type=\"month\"].form-control{-webkit-appearance:none;-moz-appearance:none;appearance:none}select.form-control:focus::-ms-value{color:#495057;background-color:#fff}.form-control-file,.form-control-range{display:block;width:100%}.col-form-label{padding-top:calc(0.5rem + 1px);padding-bottom:calc(0.5rem + 1px);margin-bottom:0;font-size:inherit;line-height:1.5}.col-form-label-lg{padding-top:calc(0.5rem + 1px);padding-bottom:calc(0.5rem + 1px);font-size:1.32875rem;line-height:1.5}.col-form-label-sm{padding-top:calc(0.25rem + 1px);padding-bottom:calc(0.25rem + 1px);font-size:0.930125rem;line-height:1.5}.form-control-plaintext{display:block;width:100%;padding:0.5rem 0;margin-bottom:0;font-size:1.063rem;line-height:1.5;color:#343a40;background-color:transparent;border:solid transparent;border-width:1px 0}.form-control-plaintext.form-control-sm,.form-control-plaintext.form-control-lg{padding-right:0;padding-left:0}.form-control-sm{height:calc(1.5em + 0.5rem + 2px);padding:0.25rem 0.5rem;font-size:0.930125rem;line-height:1.5;border-radius:0.2rem}.form-control-lg{height:calc(1.5em + 1rem + 2px);padding:0.5rem 1rem;font-size:1.32875rem;line-height:1.5;border-radius:0.3rem}select.form-control[size],select.form-control[multiple]{height:auto}textarea.form-control{height:auto}.form-group{margin-bottom:1rem}.form-text{display:block;margin-top:0.25rem}.form-row{display:flex;flex-wrap:wrap;margin-right:-5px;margin-left:-5px}.form-row>.col,.form-row>[class*=\"col-\"]{padding-right:5px;padding-left:5px}.form-check{position:relative;display:block;padding-left:1.25rem}.form-check-input{position:absolute;margin-top:0.3rem;margin-left:-1.25rem}.form-check-input[disabled] ~ .form-check-label,.form-check-input:disabled ~ .form-check-label{color:#868e96}.form-check-label{margin-bottom:0}.form-check-inline{display:inline-flex;align-items:center;padding-left:0;margin-right:0.75rem}.form-check-inline .form-check-input{position:static;margin-top:0;margin-right:0.3125rem;margin-left:0}.valid-feedback{display:none;width:100%;margin-top:0.25rem;font-size:80%;color:#02B875}.valid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:0.25rem 0.5rem;margin-top:.1rem;font-size:0.6875rem;line-height:1.5;color:#fff;background-color:rgba(2,184,117,0.9);border-radius:0.25rem}.was-validated :valid ~ .valid-feedback,.was-validated :valid ~ .valid-tooltip,.is-valid ~ .valid-feedback,.is-valid ~ .valid-tooltip{display:block}.was-validated .form-control:valid,.form-control.is-valid{border-color:#02B875;padding-right:calc(1.5em + 1rem);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2302B875' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right calc(0.375em + 0.25rem) center;background-size:calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)}.was-validated .form-control:valid:focus,.form-control.is-valid:focus{border-color:#02B875;box-shadow:0 0 0 0.2rem rgba(2,184,117,0.25)}.was-validated textarea.form-control:valid,textarea.form-control.is-valid{padding-right:calc(1.5em + 1rem);background-position:top calc(0.375em + 0.25rem) right calc(0.375em + 0.25rem)}.was-validated .custom-select:valid,.custom-select.is-valid{border-color:#02B875;padding-right:calc(0.75em + 2.85rem);background:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") no-repeat right 1.1rem center/8px 10px,url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2302B875' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\") #fff no-repeat center right 2.1rem/calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)}.was-validated .custom-select:valid:focus,.custom-select.is-valid:focus{border-color:#02B875;box-shadow:0 0 0 0.2rem rgba(2,184,117,0.25)}.was-validated .form-check-input:valid ~ .form-check-label,.form-check-input.is-valid ~ .form-check-label{color:#02B875}.was-validated .form-check-input:valid ~ .valid-feedback,.was-validated .form-check-input:valid ~ .valid-tooltip,.form-check-input.is-valid ~ .valid-feedback,.form-check-input.is-valid ~ .valid-tooltip{display:block}.was-validated .custom-control-input:valid ~ .custom-control-label,.custom-control-input.is-valid ~ .custom-control-label{color:#02B875}.was-validated .custom-control-input:valid ~ .custom-control-label::before,.custom-control-input.is-valid ~ .custom-control-label::before{border-color:#02B875}.was-validated .custom-control-input:valid:checked ~ .custom-control-label::before,.custom-control-input.is-valid:checked ~ .custom-control-label::before{border-color:#03ea95;background-color:#03ea95}.was-validated .custom-control-input:valid:focus ~ .custom-control-label::before,.custom-control-input.is-valid:focus ~ .custom-control-label::before{box-shadow:0 0 0 0.2rem rgba(2,184,117,0.25)}.was-validated .custom-control-input:valid:focus:not(:checked) ~ .custom-control-label::before,.custom-control-input.is-valid:focus:not(:checked) ~ .custom-control-label::before{border-color:#02B875}.was-validated .custom-file-input:valid ~ .custom-file-label,.custom-file-input.is-valid ~ .custom-file-label{border-color:#02B875}.was-validated .custom-file-input:valid:focus ~ .custom-file-label,.custom-file-input.is-valid:focus ~ .custom-file-label{border-color:#02B875;box-shadow:0 0 0 0.2rem rgba(2,184,117,0.25)}.invalid-feedback{display:none;width:100%;margin-top:0.25rem;font-size:80%;color:#d9534f}.invalid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:0.25rem 0.5rem;margin-top:.1rem;font-size:0.6875rem;line-height:1.5;color:#fff;background-color:rgba(217,83,79,0.9);border-radius:0.25rem}.was-validated :invalid ~ .invalid-feedback,.was-validated :invalid ~ .invalid-tooltip,.is-invalid ~ .invalid-feedback,.is-invalid ~ .invalid-tooltip{display:block}.was-validated .form-control:invalid,.form-control.is-invalid{border-color:#d9534f;padding-right:calc(1.5em + 1rem);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23d9534f' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23d9534f' stroke='none'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right calc(0.375em + 0.25rem) center;background-size:calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)}.was-validated .form-control:invalid:focus,.form-control.is-invalid:focus{border-color:#d9534f;box-shadow:0 0 0 0.2rem rgba(217,83,79,0.25)}.was-validated textarea.form-control:invalid,textarea.form-control.is-invalid{padding-right:calc(1.5em + 1rem);background-position:top calc(0.375em + 0.25rem) right calc(0.375em + 0.25rem)}.was-validated .custom-select:invalid,.custom-select.is-invalid{border-color:#d9534f;padding-right:calc(0.75em + 2.85rem);background:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") no-repeat right 1.1rem center/8px 10px,url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23d9534f' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23d9534f' stroke='none'/%3e%3c/svg%3e\") #fff no-repeat center right 2.1rem/calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)}.was-validated .custom-select:invalid:focus,.custom-select.is-invalid:focus{border-color:#d9534f;box-shadow:0 0 0 0.2rem rgba(217,83,79,0.25)}.was-validated .form-check-input:invalid ~ .form-check-label,.form-check-input.is-invalid ~ .form-check-label{color:#d9534f}.was-validated .form-check-input:invalid ~ .invalid-feedback,.was-validated .form-check-input:invalid ~ .invalid-tooltip,.form-check-input.is-invalid ~ .invalid-feedback,.form-check-input.is-invalid ~ .invalid-tooltip{display:block}.was-validated .custom-control-input:invalid ~ .custom-control-label,.custom-control-input.is-invalid ~ .custom-control-label{color:#d9534f}.was-validated .custom-control-input:invalid ~ .custom-control-label::before,.custom-control-input.is-invalid ~ .custom-control-label::before{border-color:#d9534f}.was-validated .custom-control-input:invalid:checked ~ .custom-control-label::before,.custom-control-input.is-invalid:checked ~ .custom-control-label::before{border-color:#e27c79;background-color:#e27c79}.was-validated .custom-control-input:invalid:focus ~ .custom-control-label::before,.custom-control-input.is-invalid:focus ~ .custom-control-label::before{box-shadow:0 0 0 0.2rem rgba(217,83,79,0.25)}.was-validated .custom-control-input:invalid:focus:not(:checked) ~ .custom-control-label::before,.custom-control-input.is-invalid:focus:not(:checked) ~ .custom-control-label::before{border-color:#d9534f}.was-validated .custom-file-input:invalid ~ .custom-file-label,.custom-file-input.is-invalid ~ .custom-file-label{border-color:#d9534f}.was-validated .custom-file-input:invalid:focus ~ .custom-file-label,.custom-file-input.is-invalid:focus ~ .custom-file-label{border-color:#d9534f;box-shadow:0 0 0 0.2rem rgba(217,83,79,0.25)}.form-inline{display:flex;flex-flow:row wrap;align-items:center}.form-inline .form-check{width:100%}@media (min-width: 576px){.form-inline label{display:flex;align-items:center;justify-content:center;margin-bottom:0}.form-inline .form-group{display:flex;flex:0 0 auto;flex-flow:row wrap;align-items:center;margin-bottom:0}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .form-control-plaintext{display:inline-block}.form-inline .input-group,.form-inline .custom-select{width:auto}.form-inline .form-check{display:flex;align-items:center;justify-content:center;width:auto;padding-left:0}.form-inline .form-check-input{position:relative;flex-shrink:0;margin-top:0;margin-right:0.25rem;margin-left:0}.form-inline .custom-control{align-items:center;justify-content:center}.form-inline .custom-control-label{margin-bottom:0}}.btn{display:inline-block;font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";font-weight:400;color:#343a40;text-align:center;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;border:1px solid transparent;padding:0.5rem 1.1rem;font-size:0.875rem;line-height:1.5;border-radius:0.25rem;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}@media (prefers-reduced-motion: reduce){.btn{transition:none}}.btn:hover{color:#343a40;text-decoration:none}.btn:focus,.btn.focus{outline:0;box-shadow:0 0 0 0.2rem rgba(69,130,236,0.25)}.btn.disabled,.btn:disabled{opacity:0.65}.btn:not(:disabled):not(.disabled){cursor:pointer}a.btn.disabled,fieldset:disabled a.btn{pointer-events:none}.btn-primary{color:#fff;background-color:#4582EC;border-color:#4582EC}.btn-primary:hover{color:#fff;background-color:#226be8;border-color:#1863e6}.btn-primary:focus,.btn-primary.focus{color:#fff;background-color:#226be8;border-color:#1863e6;box-shadow:0 0 0 0.2rem rgba(97,149,239,0.5)}.btn-primary.disabled,.btn-primary:disabled{color:#fff;background-color:#4582EC;border-color:#4582EC}.btn-primary:not(:disabled):not(.disabled):active,.btn-primary:not(:disabled):not(.disabled).active,.show>.btn-primary.dropdown-toggle{color:#fff;background-color:#1863e6;border-color:#165edb}.btn-primary:not(:disabled):not(.disabled):active:focus,.btn-primary:not(:disabled):not(.disabled).active:focus,.show>.btn-primary.dropdown-toggle:focus{box-shadow:0 0 0 0.2rem rgba(97,149,239,0.5)}.btn-secondary{color:#fff;background-color:#adb5bd;border-color:#adb5bd}.btn-secondary:hover{color:#fff;background-color:#98a2ac;border-color:#919ca6}.btn-secondary:focus,.btn-secondary.focus{color:#fff;background-color:#98a2ac;border-color:#919ca6;box-shadow:0 0 0 0.2rem rgba(185,192,199,0.5)}.btn-secondary.disabled,.btn-secondary:disabled{color:#fff;background-color:#adb5bd;border-color:#adb5bd}.btn-secondary:not(:disabled):not(.disabled):active,.btn-secondary:not(:disabled):not(.disabled).active,.show>.btn-secondary.dropdown-toggle{color:#fff;background-color:#919ca6;border-color:#8a95a1}.btn-secondary:not(:disabled):not(.disabled):active:focus,.btn-secondary:not(:disabled):not(.disabled).active:focus,.show>.btn-secondary.dropdown-toggle:focus{box-shadow:0 0 0 0.2rem rgba(185,192,199,0.5)}.btn-success{color:#fff;background-color:#02B875;border-color:#02B875}.btn-success:hover{color:#fff;background-color:#02925d;border-color:#018655}.btn-success:focus,.btn-success.focus{color:#fff;background-color:#02925d;border-color:#018655;box-shadow:0 0 0 0.2rem rgba(40,195,138,0.5)}.btn-success.disabled,.btn-success:disabled{color:#fff;background-color:#02B875;border-color:#02B875}.btn-success:not(:disabled):not(.disabled):active,.btn-success:not(:disabled):not(.disabled).active,.show>.btn-success.dropdown-toggle{color:#fff;background-color:#018655;border-color:#01794d}.btn-success:not(:disabled):not(.disabled):active:focus,.btn-success:not(:disabled):not(.disabled).active:focus,.show>.btn-success.dropdown-toggle:focus{box-shadow:0 0 0 0.2rem rgba(40,195,138,0.5)}.btn-info{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-info:hover{color:#fff;background-color:#138496;border-color:#117a8b}.btn-info:focus,.btn-info.focus{color:#fff;background-color:#138496;border-color:#117a8b;box-shadow:0 0 0 0.2rem rgba(58,176,195,0.5)}.btn-info.disabled,.btn-info:disabled{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-info:not(:disabled):not(.disabled):active,.btn-info:not(:disabled):not(.disabled).active,.show>.btn-info.dropdown-toggle{color:#fff;background-color:#117a8b;border-color:#10707f}.btn-info:not(:disabled):not(.disabled):active:focus,.btn-info:not(:disabled):not(.disabled).active:focus,.show>.btn-info.dropdown-toggle:focus{box-shadow:0 0 0 0.2rem rgba(58,176,195,0.5)}.btn-warning{color:#fff;background-color:#f0ad4e;border-color:#f0ad4e}.btn-warning:hover{color:#fff;background-color:#ed9d2b;border-color:#ec971f}.btn-warning:focus,.btn-warning.focus{color:#fff;background-color:#ed9d2b;border-color:#ec971f;box-shadow:0 0 0 0.2rem rgba(242,185,105,0.5)}.btn-warning.disabled,.btn-warning:disabled{color:#fff;background-color:#f0ad4e;border-color:#f0ad4e}.btn-warning:not(:disabled):not(.disabled):active,.btn-warning:not(:disabled):not(.disabled).active,.show>.btn-warning.dropdown-toggle{color:#fff;background-color:#ec971f;border-color:#ea9214}.btn-warning:not(:disabled):not(.disabled):active:focus,.btn-warning:not(:disabled):not(.disabled).active:focus,.show>.btn-warning.dropdown-toggle:focus{box-shadow:0 0 0 0.2rem rgba(242,185,105,0.5)}.btn-danger{color:#fff;background-color:#d9534f;border-color:#d9534f}.btn-danger:hover{color:#fff;background-color:#d23430;border-color:#c9302c}.btn-danger:focus,.btn-danger.focus{color:#fff;background-color:#d23430;border-color:#c9302c;box-shadow:0 0 0 0.2rem rgba(223,109,105,0.5)}.btn-danger.disabled,.btn-danger:disabled{color:#fff;background-color:#d9534f;border-color:#d9534f}.btn-danger:not(:disabled):not(.disabled):active,.btn-danger:not(:disabled):not(.disabled).active,.show>.btn-danger.dropdown-toggle{color:#fff;background-color:#c9302c;border-color:#bf2e29}.btn-danger:not(:disabled):not(.disabled):active:focus,.btn-danger:not(:disabled):not(.disabled).active:focus,.show>.btn-danger.dropdown-toggle:focus{box-shadow:0 0 0 0.2rem rgba(223,109,105,0.5)}.btn-light{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:hover{color:#212529;background-color:#e2e6ea;border-color:#dae0e5}.btn-light:focus,.btn-light.focus{color:#212529;background-color:#e2e6ea;border-color:#dae0e5;box-shadow:0 0 0 0.2rem rgba(216,217,219,0.5)}.btn-light.disabled,.btn-light:disabled{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:not(:disabled):not(.disabled):active,.btn-light:not(:disabled):not(.disabled).active,.show>.btn-light.dropdown-toggle{color:#212529;background-color:#dae0e5;border-color:#d3d9df}.btn-light:not(:disabled):not(.disabled):active:focus,.btn-light:not(:disabled):not(.disabled).active:focus,.show>.btn-light.dropdown-toggle:focus{box-shadow:0 0 0 0.2rem rgba(216,217,219,0.5)}.btn-dark{color:#fff;background-color:#343a40;border-color:#343a40}.btn-dark:hover{color:#fff;background-color:#23272b;border-color:#1d2124}.btn-dark:focus,.btn-dark.focus{color:#fff;background-color:#23272b;border-color:#1d2124;box-shadow:0 0 0 0.2rem rgba(82,88,93,0.5)}.btn-dark.disabled,.btn-dark:disabled{color:#fff;background-color:#343a40;border-color:#343a40}.btn-dark:not(:disabled):not(.disabled):active,.btn-dark:not(:disabled):not(.disabled).active,.show>.btn-dark.dropdown-toggle{color:#fff;background-color:#1d2124;border-color:#171a1d}.btn-dark:not(:disabled):not(.disabled):active:focus,.btn-dark:not(:disabled):not(.disabled).active:focus,.show>.btn-dark.dropdown-toggle:focus{box-shadow:0 0 0 0.2rem rgba(82,88,93,0.5)}.btn-outline-primary{color:#4582EC;border-color:#4582EC}.btn-outline-primary:hover{color:#fff;background-color:#4582EC;border-color:#4582EC}.btn-outline-primary:focus,.btn-outline-primary.focus{box-shadow:0 0 0 0.2rem rgba(69,130,236,0.5)}.btn-outline-primary.disabled,.btn-outline-primary:disabled{color:#4582EC;background-color:transparent}.btn-outline-primary:not(:disabled):not(.disabled):active,.btn-outline-primary:not(:disabled):not(.disabled).active,.show>.btn-outline-primary.dropdown-toggle{color:#fff;background-color:#4582EC;border-color:#4582EC}.btn-outline-primary:not(:disabled):not(.disabled):active:focus,.btn-outline-primary:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-primary.dropdown-toggle:focus{box-shadow:0 0 0 0.2rem rgba(69,130,236,0.5)}.btn-outline-secondary{color:#adb5bd;border-color:#adb5bd}.btn-outline-secondary:hover{color:#fff;background-color:#adb5bd;border-color:#adb5bd}.btn-outline-secondary:focus,.btn-outline-secondary.focus{box-shadow:0 0 0 0.2rem rgba(173,181,189,0.5)}.btn-outline-secondary.disabled,.btn-outline-secondary:disabled{color:#adb5bd;background-color:transparent}.btn-outline-secondary:not(:disabled):not(.disabled):active,.btn-outline-secondary:not(:disabled):not(.disabled).active,.show>.btn-outline-secondary.dropdown-toggle{color:#fff;background-color:#adb5bd;border-color:#adb5bd}.btn-outline-secondary:not(:disabled):not(.disabled):active:focus,.btn-outline-secondary:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-secondary.dropdown-toggle:focus{box-shadow:0 0 0 0.2rem rgba(173,181,189,0.5)}.btn-outline-success{color:#02B875;border-color:#02B875}.btn-outline-success:hover{color:#fff;background-color:#02B875;border-color:#02B875}.btn-outline-success:focus,.btn-outline-success.focus{box-shadow:0 0 0 0.2rem rgba(2,184,117,0.5)}.btn-outline-success.disabled,.btn-outline-success:disabled{color:#02B875;background-color:transparent}.btn-outline-success:not(:disabled):not(.disabled):active,.btn-outline-success:not(:disabled):not(.disabled).active,.show>.btn-outline-success.dropdown-toggle{color:#fff;background-color:#02B875;border-color:#02B875}.btn-outline-success:not(:disabled):not(.disabled):active:focus,.btn-outline-success:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-success.dropdown-toggle:focus{box-shadow:0 0 0 0.2rem rgba(2,184,117,0.5)}.btn-outline-info{color:#17a2b8;border-color:#17a2b8}.btn-outline-info:hover{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-outline-info:focus,.btn-outline-info.focus{box-shadow:0 0 0 0.2rem rgba(23,162,184,0.5)}.btn-outline-info.disabled,.btn-outline-info:disabled{color:#17a2b8;background-color:transparent}.btn-outline-info:not(:disabled):not(.disabled):active,.btn-outline-info:not(:disabled):not(.disabled).active,.show>.btn-outline-info.dropdown-toggle{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-outline-info:not(:disabled):not(.disabled):active:focus,.btn-outline-info:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-info.dropdown-toggle:focus{box-shadow:0 0 0 0.2rem rgba(23,162,184,0.5)}.btn-outline-warning{color:#f0ad4e;border-color:#f0ad4e}.btn-outline-warning:hover{color:#fff;background-color:#f0ad4e;border-color:#f0ad4e}.btn-outline-warning:focus,.btn-outline-warning.focus{box-shadow:0 0 0 0.2rem rgba(240,173,78,0.5)}.btn-outline-warning.disabled,.btn-outline-warning:disabled{color:#f0ad4e;background-color:transparent}.btn-outline-warning:not(:disabled):not(.disabled):active,.btn-outline-warning:not(:disabled):not(.disabled).active,.show>.btn-outline-warning.dropdown-toggle{color:#fff;background-color:#f0ad4e;border-color:#f0ad4e}.btn-outline-warning:not(:disabled):not(.disabled):active:focus,.btn-outline-warning:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-warning.dropdown-toggle:focus{box-shadow:0 0 0 0.2rem rgba(240,173,78,0.5)}.btn-outline-danger{color:#d9534f;border-color:#d9534f}.btn-outline-danger:hover{color:#fff;background-color:#d9534f;border-color:#d9534f}.btn-outline-danger:focus,.btn-outline-danger.focus{box-shadow:0 0 0 0.2rem rgba(217,83,79,0.5)}.btn-outline-danger.disabled,.btn-outline-danger:disabled{color:#d9534f;background-color:transparent}.btn-outline-danger:not(:disabled):not(.disabled):active,.btn-outline-danger:not(:disabled):not(.disabled).active,.show>.btn-outline-danger.dropdown-toggle{color:#fff;background-color:#d9534f;border-color:#d9534f}.btn-outline-danger:not(:disabled):not(.disabled):active:focus,.btn-outline-danger:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-danger.dropdown-toggle:focus{box-shadow:0 0 0 0.2rem rgba(217,83,79,0.5)}.btn-outline-light{color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:hover{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:focus,.btn-outline-light.focus{box-shadow:0 0 0 0.2rem rgba(248,249,250,0.5)}.btn-outline-light.disabled,.btn-outline-light:disabled{color:#f8f9fa;background-color:transparent}.btn-outline-light:not(:disabled):not(.disabled):active,.btn-outline-light:not(:disabled):not(.disabled).active,.show>.btn-outline-light.dropdown-toggle{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:not(:disabled):not(.disabled):active:focus,.btn-outline-light:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-light.dropdown-toggle:focus{box-shadow:0 0 0 0.2rem rgba(248,249,250,0.5)}.btn-outline-dark{color:#343a40;border-color:#343a40}.btn-outline-dark:hover{color:#fff;background-color:#343a40;border-color:#343a40}.btn-outline-dark:focus,.btn-outline-dark.focus{box-shadow:0 0 0 0.2rem rgba(52,58,64,0.5)}.btn-outline-dark.disabled,.btn-outline-dark:disabled{color:#343a40;background-color:transparent}.btn-outline-dark:not(:disabled):not(.disabled):active,.btn-outline-dark:not(:disabled):not(.disabled).active,.show>.btn-outline-dark.dropdown-toggle{color:#fff;background-color:#343a40;border-color:#343a40}.btn-outline-dark:not(:disabled):not(.disabled):active:focus,.btn-outline-dark:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-dark.dropdown-toggle:focus{box-shadow:0 0 0 0.2rem rgba(52,58,64,0.5)}.btn-link{font-weight:400;color:#4582EC;text-decoration:none}.btn-link:hover{color:#1559cf;text-decoration:underline}.btn-link:focus,.btn-link.focus{text-decoration:underline}.btn-link:disabled,.btn-link.disabled{color:#868e96;pointer-events:none}.btn-lg,.btn-group-lg>.btn{padding:0.5rem 1rem;font-size:1.32875rem;line-height:1.5;border-radius:0.3rem}.btn-sm,.btn-group-sm>.btn{padding:0.25rem 0.5rem;font-size:0.688rem;line-height:1.5;border-radius:0.2rem}.btn-block{display:block;width:100%}.btn-block+.btn-block{margin-top:0.5rem}input[type=\"submit\"].btn-block,input[type=\"reset\"].btn-block,input[type=\"button\"].btn-block{width:100%}.fade{transition:opacity 0.15s linear}@media (prefers-reduced-motion: reduce){.fade{transition:none}}.fade:not(.show){opacity:0}.collapse:not(.show){display:none}.collapsing{position:relative;height:0;overflow:hidden;transition:height 0.35s ease}@media (prefers-reduced-motion: reduce){.collapsing{transition:none}}.dropup,.dropright,.dropdown,.dropleft{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle::after{display:inline-block;margin-left:0.255em;vertical-align:0.255em;content:\"\";border-top:0.3em solid;border-right:0.3em solid transparent;border-bottom:0;border-left:0.3em solid transparent}.dropdown-toggle:empty::after{margin-left:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;padding:0.5rem 0;margin:0.125rem 0 0;font-size:1.063rem;color:#343a40;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,0.15);border-radius:0.25rem}.dropdown-menu-left{right:auto;left:0}.dropdown-menu-right{right:0;left:auto}@media (min-width: 576px){.dropdown-menu-sm-left{right:auto;left:0}.dropdown-menu-sm-right{right:0;left:auto}}@media (min-width: 768px){.dropdown-menu-md-left{right:auto;left:0}.dropdown-menu-md-right{right:0;left:auto}}@media (min-width: 992px){.dropdown-menu-lg-left{right:auto;left:0}.dropdown-menu-lg-right{right:0;left:auto}}@media (min-width: 1200px){.dropdown-menu-xl-left{right:auto;left:0}.dropdown-menu-xl-right{right:0;left:auto}}.dropup .dropdown-menu{top:auto;bottom:100%;margin-top:0;margin-bottom:0.125rem}.dropup .dropdown-toggle::after{display:inline-block;margin-left:0.255em;vertical-align:0.255em;content:\"\";border-top:0;border-right:0.3em solid transparent;border-bottom:0.3em solid;border-left:0.3em solid transparent}.dropup .dropdown-toggle:empty::after{margin-left:0}.dropright .dropdown-menu{top:0;right:auto;left:100%;margin-top:0;margin-left:0.125rem}.dropright .dropdown-toggle::after{display:inline-block;margin-left:0.255em;vertical-align:0.255em;content:\"\";border-top:0.3em solid transparent;border-right:0;border-bottom:0.3em solid transparent;border-left:0.3em solid}.dropright .dropdown-toggle:empty::after{margin-left:0}.dropright .dropdown-toggle::after{vertical-align:0}.dropleft .dropdown-menu{top:0;right:100%;left:auto;margin-top:0;margin-right:0.125rem}.dropleft .dropdown-toggle::after{display:inline-block;margin-left:0.255em;vertical-align:0.255em;content:\"\"}.dropleft .dropdown-toggle::after{display:none}.dropleft .dropdown-toggle::before{display:inline-block;margin-right:0.255em;vertical-align:0.255em;content:\"\";border-top:0.3em solid transparent;border-right:0.3em solid;border-bottom:0.3em solid transparent}.dropleft .dropdown-toggle:empty::after{margin-left:0}.dropleft .dropdown-toggle::before{vertical-align:0}.dropdown-menu[x-placement^=\"top\"],.dropdown-menu[x-placement^=\"right\"],.dropdown-menu[x-placement^=\"bottom\"],.dropdown-menu[x-placement^=\"left\"]{right:auto;bottom:auto}.dropdown-divider{height:0;margin:0.5rem 0;overflow:hidden;border-top:1px solid #e9ecef}.dropdown-item{display:block;width:100%;padding:0.25rem 1.5rem;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background-color:transparent;border:0}.dropdown-item:hover,.dropdown-item:focus{color:#16181b;text-decoration:none;background-color:#f8f9fa}.dropdown-item.active,.dropdown-item:active{color:#fff;text-decoration:none;background-color:#4582EC}.dropdown-item.disabled,.dropdown-item:disabled{color:#868e96;pointer-events:none;background-color:transparent}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:0.5rem 1.5rem;margin-bottom:0;font-size:0.930125rem;color:#868e96;white-space:nowrap}.dropdown-item-text{display:block;padding:0.25rem 1.5rem;color:#212529}.btn-group,.btn-group-vertical{position:relative;display:inline-flex;vertical-align:middle}.btn-group>.btn,.btn-group-vertical>.btn{position:relative;flex:1 1 auto}.btn-group>.btn:hover,.btn-group-vertical>.btn:hover{z-index:1}.btn-group>.btn:focus,.btn-group>.btn:active,.btn-group>.btn.active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn.active{z-index:1}.btn-toolbar{display:flex;flex-wrap:wrap;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group>.btn:not(:first-child),.btn-group>.btn-group:not(:first-child){margin-left:-1px}.btn-group>.btn:not(:last-child):not(.dropdown-toggle),.btn-group>.btn-group:not(:last-child)>.btn{border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn:not(:first-child),.btn-group>.btn-group:not(:first-child)>.btn{border-top-left-radius:0;border-bottom-left-radius:0}.dropdown-toggle-split{padding-right:0.825rem;padding-left:0.825rem}.dropdown-toggle-split::after,.dropup .dropdown-toggle-split::after,.dropright .dropdown-toggle-split::after{margin-left:0}.dropleft .dropdown-toggle-split::before{margin-right:0}.btn-sm+.dropdown-toggle-split,.btn-group-sm>.btn+.dropdown-toggle-split{padding-right:0.375rem;padding-left:0.375rem}.btn-lg+.dropdown-toggle-split,.btn-group-lg>.btn+.dropdown-toggle-split{padding-right:0.75rem;padding-left:0.75rem}.btn-group-vertical{flex-direction:column;align-items:flex-start;justify-content:center}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group{width:100%}.btn-group-vertical>.btn:not(:first-child),.btn-group-vertical>.btn-group:not(:first-child){margin-top:-1px}.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle),.btn-group-vertical>.btn-group:not(:last-child)>.btn{border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn:not(:first-child),.btn-group-vertical>.btn-group:not(:first-child)>.btn{border-top-left-radius:0;border-top-right-radius:0}.btn-group-toggle>.btn,.btn-group-toggle>.btn-group>.btn{margin-bottom:0}.btn-group-toggle>.btn input[type=\"radio\"],.btn-group-toggle>.btn input[type=\"checkbox\"],.btn-group-toggle>.btn-group>.btn input[type=\"radio\"],.btn-group-toggle>.btn-group>.btn input[type=\"checkbox\"]{position:absolute;clip:rect(0, 0, 0, 0);pointer-events:none}.input-group{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}.input-group>.form-control,.input-group>.form-control-plaintext,.input-group>.custom-select,.input-group>.custom-file{position:relative;flex:1 1 auto;width:1%;min-width:0;margin-bottom:0}.input-group>.form-control+.form-control,.input-group>.form-control+.custom-select,.input-group>.form-control+.custom-file,.input-group>.form-control-plaintext+.form-control,.input-group>.form-control-plaintext+.custom-select,.input-group>.form-control-plaintext+.custom-file,.input-group>.custom-select+.form-control,.input-group>.custom-select+.custom-select,.input-group>.custom-select+.custom-file,.input-group>.custom-file+.form-control,.input-group>.custom-file+.custom-select,.input-group>.custom-file+.custom-file{margin-left:-1px}.input-group>.form-control:focus,.input-group>.custom-select:focus,.input-group>.custom-file .custom-file-input:focus ~ .custom-file-label{z-index:3}.input-group>.custom-file .custom-file-input:focus{z-index:4}.input-group>.form-control:not(:last-child),.input-group>.custom-select:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.form-control:not(:first-child),.input-group>.custom-select:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.input-group>.custom-file{display:flex;align-items:center}.input-group>.custom-file:not(:last-child) .custom-file-label,.input-group>.custom-file:not(:last-child) .custom-file-label::after{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.custom-file:not(:first-child) .custom-file-label{border-top-left-radius:0;border-bottom-left-radius:0}.input-group-prepend,.input-group-append{display:flex}.input-group-prepend .btn,.input-group-append .btn{position:relative;z-index:2}.input-group-prepend .btn:focus,.input-group-append .btn:focus{z-index:3}.input-group-prepend .btn+.btn,.input-group-prepend .btn+.input-group-text,.input-group-prepend .input-group-text+.input-group-text,.input-group-prepend .input-group-text+.btn,.input-group-append .btn+.btn,.input-group-append .btn+.input-group-text,.input-group-append .input-group-text+.input-group-text,.input-group-append .input-group-text+.btn{margin-left:-1px}.input-group-prepend{margin-right:-1px}.input-group-append{margin-left:-1px}.input-group-text{display:flex;align-items:center;padding:0.5rem 1.1rem;margin-bottom:0;font-size:1.063rem;font-weight:400;line-height:1.5;color:#495057;text-align:center;white-space:nowrap;background-color:#e9ecef;border:1px solid rgba(0,0,0,0.1);border-radius:0.25rem}.input-group-text input[type=\"radio\"],.input-group-text input[type=\"checkbox\"]{margin-top:0}.input-group-lg>.form-control:not(textarea),.input-group-lg>.custom-select{height:calc(1.5em + 1rem + 2px)}.input-group-lg>.form-control,.input-group-lg>.custom-select,.input-group-lg>.input-group-prepend>.input-group-text,.input-group-lg>.input-group-append>.input-group-text,.input-group-lg>.input-group-prepend>.btn,.input-group-lg>.input-group-append>.btn{padding:0.5rem 1rem;font-size:1.32875rem;line-height:1.5;border-radius:0.3rem}.input-group-sm>.form-control:not(textarea),.input-group-sm>.custom-select{height:calc(1.5em + 0.5rem + 2px)}.input-group-sm>.form-control,.input-group-sm>.custom-select,.input-group-sm>.input-group-prepend>.input-group-text,.input-group-sm>.input-group-append>.input-group-text,.input-group-sm>.input-group-prepend>.btn,.input-group-sm>.input-group-append>.btn{padding:0.25rem 0.5rem;font-size:0.930125rem;line-height:1.5;border-radius:0.2rem}.input-group-lg>.custom-select,.input-group-sm>.custom-select{padding-right:2.1rem}.input-group>.input-group-prepend>.btn,.input-group>.input-group-prepend>.input-group-text,.input-group>.input-group-append:not(:last-child)>.btn,.input-group>.input-group-append:not(:last-child)>.input-group-text,.input-group>.input-group-append:last-child>.btn:not(:last-child):not(.dropdown-toggle),.input-group>.input-group-append:last-child>.input-group-text:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.input-group-append>.btn,.input-group>.input-group-append>.input-group-text,.input-group>.input-group-prepend:not(:first-child)>.btn,.input-group>.input-group-prepend:not(:first-child)>.input-group-text,.input-group>.input-group-prepend:first-child>.btn:not(:first-child),.input-group>.input-group-prepend:first-child>.input-group-text:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.custom-control{position:relative;display:block;min-height:1.5945rem;padding-left:1.5rem}.custom-control-inline{display:inline-flex;margin-right:1rem}.custom-control-input{position:absolute;left:0;z-index:-1;width:1rem;height:1.29725rem;opacity:0}.custom-control-input:checked ~ .custom-control-label::before{color:#fff;border-color:#4582EC;background-color:#4582EC}.custom-control-input:focus ~ .custom-control-label::before{box-shadow:0 0 0 0.2rem rgba(69,130,236,0.25)}.custom-control-input:focus:not(:checked) ~ .custom-control-label::before{border-color:#b9d0f8}.custom-control-input:not(:disabled):active ~ .custom-control-label::before{color:#fff;background-color:#e7effd;border-color:#e7effd}.custom-control-input[disabled] ~ .custom-control-label,.custom-control-input:disabled ~ .custom-control-label{color:#868e96}.custom-control-input[disabled] ~ .custom-control-label::before,.custom-control-input:disabled ~ .custom-control-label::before{background-color:#e9ecef}.custom-control-label{position:relative;margin-bottom:0;vertical-align:top}.custom-control-label::before{position:absolute;top:0.29725rem;left:-1.5rem;display:block;width:1rem;height:1rem;pointer-events:none;content:\"\";background-color:#fff;border:#adb5bd solid 1px}.custom-control-label::after{position:absolute;top:0.29725rem;left:-1.5rem;display:block;width:1rem;height:1rem;content:\"\";background:no-repeat 50% / 50% 50%}.custom-checkbox .custom-control-label::before{border-radius:0.25rem}.custom-checkbox .custom-control-input:checked ~ .custom-control-label::after{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/%3e%3c/svg%3e\")}.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::before{border-color:#4582EC;background-color:#4582EC}.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::after{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3e%3cpath stroke='%23fff' d='M0 2h4'/%3e%3c/svg%3e\")}.custom-checkbox .custom-control-input:disabled:checked ~ .custom-control-label::before{background-color:rgba(69,130,236,0.5)}.custom-checkbox .custom-control-input:disabled:indeterminate ~ .custom-control-label::before{background-color:rgba(69,130,236,0.5)}.custom-radio .custom-control-label::before{border-radius:50%}.custom-radio .custom-control-input:checked ~ .custom-control-label::after{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")}.custom-radio .custom-control-input:disabled:checked ~ .custom-control-label::before{background-color:rgba(69,130,236,0.5)}.custom-switch{padding-left:2.25rem}.custom-switch .custom-control-label::before{left:-2.25rem;width:1.75rem;pointer-events:all;border-radius:0.5rem}.custom-switch .custom-control-label::after{top:calc(0.29725rem + 2px);left:calc(-2.25rem + 2px);width:calc(1rem - 4px);height:calc(1rem - 4px);background-color:#adb5bd;border-radius:0.5rem;transition:transform 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}@media (prefers-reduced-motion: reduce){.custom-switch .custom-control-label::after{transition:none}}.custom-switch .custom-control-input:checked ~ .custom-control-label::after{background-color:#fff;transform:translateX(0.75rem)}.custom-switch .custom-control-input:disabled:checked ~ .custom-control-label::before{background-color:rgba(69,130,236,0.5)}.custom-select{display:inline-block;width:100%;height:calc(1.5em + 1rem + 2px);padding:0.5rem 2.1rem 0.5rem 1.1rem;font-size:1.063rem;font-weight:400;line-height:1.5;color:#495057;vertical-align:middle;background:#fff url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") no-repeat right 1.1rem center/8px 10px;border:1px solid rgba(0,0,0,0.1);border-radius:0.25rem;-webkit-appearance:none;-moz-appearance:none;appearance:none}.custom-select:focus{border-color:#b9d0f8;outline:0;box-shadow:0 0 0 0.2rem rgba(69,130,236,0.25)}.custom-select:focus::-ms-value{color:#495057;background-color:#fff}.custom-select[multiple],.custom-select[size]:not([size=\"1\"]){height:auto;padding-right:1.1rem;background-image:none}.custom-select:disabled{color:#868e96;background-color:#e9ecef}.custom-select::-ms-expand{display:none}.custom-select:-moz-focusring{color:transparent;text-shadow:0 0 0 #495057}.custom-select-sm{height:calc(1.5em + 0.5rem + 2px);padding-top:0.25rem;padding-bottom:0.25rem;padding-left:0.5rem;font-size:0.930125rem}.custom-select-lg{height:calc(1.5em + 1rem + 2px);padding-top:0.5rem;padding-bottom:0.5rem;padding-left:1rem;font-size:1.32875rem}.custom-file{position:relative;display:inline-block;width:100%;height:calc(1.5em + 1rem + 2px);margin-bottom:0}.custom-file-input{position:relative;z-index:2;width:100%;height:calc(1.5em + 1rem + 2px);margin:0;opacity:0}.custom-file-input:focus ~ .custom-file-label{border-color:#b9d0f8;box-shadow:0 0 0 0.2rem rgba(69,130,236,0.25)}.custom-file-input[disabled] ~ .custom-file-label,.custom-file-input:disabled ~ .custom-file-label{background-color:#e9ecef}.custom-file-input:lang(en) ~ .custom-file-label::after{content:\"Browse\"}.custom-file-input ~ .custom-file-label[data-browse]::after{content:attr(data-browse)}.custom-file-label{position:absolute;top:0;right:0;left:0;z-index:1;height:calc(1.5em + 1rem + 2px);padding:0.5rem 1.1rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;border:1px solid rgba(0,0,0,0.1);border-radius:0.25rem}.custom-file-label::after{position:absolute;top:0;right:0;bottom:0;z-index:3;display:block;height:calc(1.5em + 1rem);padding:0.5rem 1.1rem;line-height:1.5;color:#495057;content:\"Browse\";background-color:#e9ecef;border-left:inherit;border-radius:0 0.25rem 0.25rem 0}.custom-range{width:100%;height:1.4rem;padding:0;background-color:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none}.custom-range:focus{outline:none}.custom-range:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 0.2rem rgba(69,130,236,0.25)}.custom-range:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 0.2rem rgba(69,130,236,0.25)}.custom-range:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 0.2rem rgba(69,130,236,0.25)}.custom-range::-moz-focus-outer{border:0}.custom-range::-webkit-slider-thumb{width:1rem;height:1rem;margin-top:-0.25rem;background-color:#4582EC;border:0;border-radius:1rem;-webkit-transition:background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;transition:background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;-webkit-appearance:none;appearance:none}@media (prefers-reduced-motion: reduce){.custom-range::-webkit-slider-thumb{-webkit-transition:none;transition:none}}.custom-range::-webkit-slider-thumb:active{background-color:#e7effd}.custom-range::-webkit-slider-runnable-track{width:100%;height:0.5rem;color:transparent;cursor:pointer;background-color:#ddd;border-color:transparent;border-radius:1rem}.custom-range::-moz-range-thumb{width:1rem;height:1rem;background-color:#4582EC;border:0;border-radius:1rem;-moz-transition:background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;transition:background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;-moz-appearance:none;appearance:none}@media (prefers-reduced-motion: reduce){.custom-range::-moz-range-thumb{-moz-transition:none;transition:none}}.custom-range::-moz-range-thumb:active{background-color:#e7effd}.custom-range::-moz-range-track{width:100%;height:0.5rem;color:transparent;cursor:pointer;background-color:#ddd;border-color:transparent;border-radius:1rem}.custom-range::-ms-thumb{width:1rem;height:1rem;margin-top:0;margin-right:0.2rem;margin-left:0.2rem;background-color:#4582EC;border:0;border-radius:1rem;-ms-transition:background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;transition:background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;appearance:none}@media (prefers-reduced-motion: reduce){.custom-range::-ms-thumb{-ms-transition:none;transition:none}}.custom-range::-ms-thumb:active{background-color:#e7effd}.custom-range::-ms-track{width:100%;height:0.5rem;color:transparent;cursor:pointer;background-color:transparent;border-color:transparent;border-width:0.5rem}.custom-range::-ms-fill-lower{background-color:#ddd;border-radius:1rem}.custom-range::-ms-fill-upper{margin-right:15px;background-color:#ddd;border-radius:1rem}.custom-range:disabled::-webkit-slider-thumb{background-color:#adb5bd}.custom-range:disabled::-webkit-slider-runnable-track{cursor:default}.custom-range:disabled::-moz-range-thumb{background-color:#adb5bd}.custom-range:disabled::-moz-range-track{cursor:default}.custom-range:disabled::-ms-thumb{background-color:#adb5bd}.custom-control-label::before,.custom-file-label,.custom-select{transition:background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}@media (prefers-reduced-motion: reduce){.custom-control-label::before,.custom-file-label,.custom-select{transition:none}}.nav{display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-link{display:block;padding:0.5rem 1rem}.nav-link:hover,.nav-link:focus{text-decoration:none}.nav-link.disabled{color:#868e96;pointer-events:none;cursor:default}.nav-tabs{border-bottom:1px solid #ddd}.nav-tabs .nav-item{margin-bottom:-1px}.nav-tabs .nav-link{border:1px solid transparent;border-top-left-radius:0.25rem;border-top-right-radius:0.25rem}.nav-tabs .nav-link:hover,.nav-tabs .nav-link:focus{border-color:#e9ecef #e9ecef #ddd}.nav-tabs .nav-link.disabled{color:#868e96;background-color:transparent;border-color:transparent}.nav-tabs .nav-link.active,.nav-tabs .nav-item.show .nav-link{color:#495057;background-color:#fff;border-color:#ddd #ddd #fff}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0}.nav-pills .nav-link{border-radius:0.25rem}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{color:#fff;background-color:#4582EC}.nav-fill .nav-item{flex:1 1 auto;text-align:center}.nav-justified .nav-item{flex-basis:0;flex-grow:1;text-align:center}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{position:relative;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;padding:0.5rem 1rem}.navbar .container,.navbar .container-fluid,.navbar .container-sm,.navbar .container-md,.navbar .container-lg,.navbar .container-xl{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between}.navbar-brand{display:inline-block;padding-top:0.3006875rem;padding-bottom:0.3006875rem;margin-right:1rem;font-size:1.32875rem;line-height:inherit;white-space:nowrap}.navbar-brand:hover,.navbar-brand:focus{text-decoration:none}.navbar-nav{display:flex;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .nav-link{padding-right:0;padding-left:0}.navbar-nav .dropdown-menu{position:static;float:none}.navbar-text{display:inline-block;padding-top:0.5rem;padding-bottom:0.5rem}.navbar-collapse{flex-basis:100%;flex-grow:1;align-items:center}.navbar-toggler{padding:0.25rem 0.75rem;font-size:1.32875rem;line-height:1;background-color:transparent;border:1px solid transparent;border-radius:0.25rem}.navbar-toggler:hover,.navbar-toggler:focus{text-decoration:none}.navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;content:\"\";background:no-repeat center center;background-size:100% 100%}@media (max-width: 575.98px){.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid,.navbar-expand-sm>.container-sm,.navbar-expand-sm>.container-md,.navbar-expand-sm>.container-lg,.navbar-expand-sm>.container-xl{padding-right:0;padding-left:0}}@media (min-width: 576px){.navbar-expand-sm{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-sm .navbar-nav{flex-direction:row}.navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-sm .navbar-nav .nav-link{padding-right:0.5rem;padding-left:0.5rem}.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid,.navbar-expand-sm>.container-sm,.navbar-expand-sm>.container-md,.navbar-expand-sm>.container-lg,.navbar-expand-sm>.container-xl{flex-wrap:nowrap}.navbar-expand-sm .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand-sm .navbar-toggler{display:none}}@media (max-width: 767.98px){.navbar-expand-md>.container,.navbar-expand-md>.container-fluid,.navbar-expand-md>.container-sm,.navbar-expand-md>.container-md,.navbar-expand-md>.container-lg,.navbar-expand-md>.container-xl{padding-right:0;padding-left:0}}@media (min-width: 768px){.navbar-expand-md{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-md .navbar-nav{flex-direction:row}.navbar-expand-md .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-md .navbar-nav .nav-link{padding-right:0.5rem;padding-left:0.5rem}.navbar-expand-md>.container,.navbar-expand-md>.container-fluid,.navbar-expand-md>.container-sm,.navbar-expand-md>.container-md,.navbar-expand-md>.container-lg,.navbar-expand-md>.container-xl{flex-wrap:nowrap}.navbar-expand-md .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}}@media (max-width: 991.98px){.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid,.navbar-expand-lg>.container-sm,.navbar-expand-lg>.container-md,.navbar-expand-lg>.container-lg,.navbar-expand-lg>.container-xl{padding-right:0;padding-left:0}}@media (min-width: 992px){.navbar-expand-lg{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-lg .navbar-nav{flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-lg .navbar-nav .nav-link{padding-right:0.5rem;padding-left:0.5rem}.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid,.navbar-expand-lg>.container-sm,.navbar-expand-lg>.container-md,.navbar-expand-lg>.container-lg,.navbar-expand-lg>.container-xl{flex-wrap:nowrap}.navbar-expand-lg .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand-lg .navbar-toggler{display:none}}@media (max-width: 1199.98px){.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid,.navbar-expand-xl>.container-sm,.navbar-expand-xl>.container-md,.navbar-expand-xl>.container-lg,.navbar-expand-xl>.container-xl{padding-right:0;padding-left:0}}@media (min-width: 1200px){.navbar-expand-xl{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-xl .navbar-nav{flex-direction:row}.navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xl .navbar-nav .nav-link{padding-right:0.5rem;padding-left:0.5rem}.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid,.navbar-expand-xl>.container-sm,.navbar-expand-xl>.container-md,.navbar-expand-xl>.container-lg,.navbar-expand-xl>.container-xl{flex-wrap:nowrap}.navbar-expand-xl .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand-xl .navbar-toggler{display:none}}.navbar-expand{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand>.container,.navbar-expand>.container-fluid,.navbar-expand>.container-sm,.navbar-expand>.container-md,.navbar-expand>.container-lg,.navbar-expand>.container-xl{padding-right:0;padding-left:0}.navbar-expand .navbar-nav{flex-direction:row}.navbar-expand .navbar-nav .dropdown-menu{position:absolute}.navbar-expand .navbar-nav .nav-link{padding-right:0.5rem;padding-left:0.5rem}.navbar-expand>.container,.navbar-expand>.container-fluid,.navbar-expand>.container-sm,.navbar-expand>.container-md,.navbar-expand>.container-lg,.navbar-expand>.container-xl{flex-wrap:nowrap}.navbar-expand .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand .navbar-toggler{display:none}.navbar-light .navbar-brand{color:#343a40}.navbar-light .navbar-brand:hover,.navbar-light .navbar-brand:focus{color:#343a40}.navbar-light .navbar-nav .nav-link{color:rgba(0,0,0,0.5)}.navbar-light .navbar-nav .nav-link:hover,.navbar-light .navbar-nav .nav-link:focus{color:#343a40}.navbar-light .navbar-nav .nav-link.disabled{color:rgba(0,0,0,0.3)}.navbar-light .navbar-nav .show>.nav-link,.navbar-light .navbar-nav .active>.nav-link,.navbar-light .navbar-nav .nav-link.show,.navbar-light .navbar-nav .nav-link.active{color:#343a40}.navbar-light .navbar-toggler{color:rgba(0,0,0,0.5);border-color:rgba(0,0,0,0.1)}.navbar-light .navbar-toggler-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")}.navbar-light .navbar-text{color:rgba(0,0,0,0.5)}.navbar-light .navbar-text a{color:#343a40}.navbar-light .navbar-text a:hover,.navbar-light .navbar-text a:focus{color:#343a40}.navbar-dark .navbar-brand{color:#fff}.navbar-dark .navbar-brand:hover,.navbar-dark .navbar-brand:focus{color:#fff}.navbar-dark .navbar-nav .nav-link{color:rgba(255,255,255,0.6)}.navbar-dark .navbar-nav .nav-link:hover,.navbar-dark .navbar-nav .nav-link:focus{color:#fff}.navbar-dark .navbar-nav .nav-link.disabled{color:rgba(255,255,255,0.25)}.navbar-dark .navbar-nav .show>.nav-link,.navbar-dark .navbar-nav .active>.nav-link,.navbar-dark .navbar-nav .nav-link.show,.navbar-dark .navbar-nav .nav-link.active{color:#fff}.navbar-dark .navbar-toggler{color:rgba(255,255,255,0.6);border-color:rgba(255,255,255,0.1)}.navbar-dark .navbar-toggler-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.6%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")}.navbar-dark .navbar-text{color:rgba(255,255,255,0.6)}.navbar-dark .navbar-text a{color:#fff}.navbar-dark .navbar-text a:hover,.navbar-dark .navbar-text a:focus{color:#fff}.card{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,0.125);border-radius:0.25rem}.card>hr{margin-right:0;margin-left:0}.card>.list-group{border-top:inherit;border-bottom:inherit}.card>.list-group:first-child{border-top-width:0;border-top-left-radius:calc(0.25rem - 1px);border-top-right-radius:calc(0.25rem - 1px)}.card>.list-group:last-child{border-bottom-width:0;border-bottom-right-radius:calc(0.25rem - 1px);border-bottom-left-radius:calc(0.25rem - 1px)}.card-body{flex:1 1 auto;min-height:1px;padding:1.25rem}.card-title{margin-bottom:0.75rem}.card-subtitle{margin-top:-0.375rem;margin-bottom:0}.card-text:last-child{margin-bottom:0}.card-link:hover{text-decoration:none}.card-link+.card-link{margin-left:1.25rem}.card-header{padding:0.75rem 1.25rem;margin-bottom:0;background-color:rgba(0,0,0,0.03);border-bottom:1px solid rgba(0,0,0,0.125)}.card-header:first-child{border-radius:calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0}.card-header+.list-group .list-group-item:first-child{border-top:0}.card-footer{padding:0.75rem 1.25rem;background-color:rgba(0,0,0,0.03);border-top:1px solid rgba(0,0,0,0.125)}.card-footer:last-child{border-radius:0 0 calc(0.25rem - 1px) calc(0.25rem - 1px)}.card-header-tabs{margin-right:-0.625rem;margin-bottom:-0.75rem;margin-left:-0.625rem;border-bottom:0}.card-header-pills{margin-right:-0.625rem;margin-left:-0.625rem}.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:1.25rem}.card-img,.card-img-top,.card-img-bottom{flex-shrink:0;width:100%}.card-img,.card-img-top{border-top-left-radius:calc(0.25rem - 1px);border-top-right-radius:calc(0.25rem - 1px)}.card-img,.card-img-bottom{border-bottom-right-radius:calc(0.25rem - 1px);border-bottom-left-radius:calc(0.25rem - 1px)}.card-deck .card{margin-bottom:15px}@media (min-width: 576px){.card-deck{display:flex;flex-flow:row wrap;margin-right:-15px;margin-left:-15px}.card-deck .card{flex:1 0;margin-right:15px;margin-bottom:0;margin-left:15px}}.card-group>.card{margin-bottom:15px}@media (min-width: 576px){.card-group{display:flex;flex-flow:row wrap}.card-group>.card{flex:1 0;margin-bottom:0}.card-group>.card+.card{margin-left:0;border-left:0}.card-group>.card:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.card-group>.card:not(:last-child) .card-img-top,.card-group>.card:not(:last-child) .card-header{border-top-right-radius:0}.card-group>.card:not(:last-child) .card-img-bottom,.card-group>.card:not(:last-child) .card-footer{border-bottom-right-radius:0}.card-group>.card:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.card-group>.card:not(:first-child) .card-img-top,.card-group>.card:not(:first-child) .card-header{border-top-left-radius:0}.card-group>.card:not(:first-child) .card-img-bottom,.card-group>.card:not(:first-child) .card-footer{border-bottom-left-radius:0}}.card-columns .card{margin-bottom:0.75rem}@media (min-width: 576px){.card-columns{-moz-column-count:3;column-count:3;-webkit-column-gap:1.25rem;grid-column-gap:1.25rem;-moz-column-gap:1.25rem;column-gap:1.25rem;orphans:1;widows:1}.card-columns .card{display:inline-block;width:100%}}.accordion>.card{overflow:hidden}.accordion>.card:not(:last-of-type){border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.accordion>.card:not(:first-of-type){border-top-left-radius:0;border-top-right-radius:0}.accordion>.card>.card-header{border-radius:0;margin-bottom:-1px}.breadcrumb{display:flex;flex-wrap:wrap;padding:0.75rem 1rem;margin-bottom:1rem;list-style:none;background-color:#e9ecef;border-radius:0.25rem}.breadcrumb-item{display:flex}.breadcrumb-item+.breadcrumb-item{padding-left:0.5rem}.breadcrumb-item+.breadcrumb-item::before{display:inline-block;padding-right:0.5rem;color:#868e96;content:\"/\"}.breadcrumb-item+.breadcrumb-item:hover::before{text-decoration:underline}.breadcrumb-item+.breadcrumb-item:hover::before{text-decoration:none}.breadcrumb-item.active{color:#868e96}.pagination{display:flex;padding-left:0;list-style:none;border-radius:0.25rem}.page-link{position:relative;display:block;padding:0.5rem 0.75rem;margin-left:-1px;line-height:1.25;color:#4582EC;background-color:#fff;border:1px solid #ddd}.page-link:hover{z-index:2;color:#1559cf;text-decoration:none;background-color:#e9ecef;border-color:#ddd}.page-link:focus{z-index:3;outline:0;box-shadow:0 0 0 0.2rem rgba(69,130,236,0.25)}.page-item:first-child .page-link{margin-left:0;border-top-left-radius:0.25rem;border-bottom-left-radius:0.25rem}.page-item:last-child .page-link{border-top-right-radius:0.25rem;border-bottom-right-radius:0.25rem}.page-item.active .page-link{z-index:3;color:#fff;background-color:#4582EC;border-color:#4582EC}.page-item.disabled .page-link{color:#868e96;pointer-events:none;cursor:auto;background-color:#fff;border-color:#ddd}.pagination-lg .page-link{padding:0.75rem 1.5rem;font-size:1.32875rem;line-height:1.5}.pagination-lg .page-item:first-child .page-link{border-top-left-radius:0.3rem;border-bottom-left-radius:0.3rem}.pagination-lg .page-item:last-child .page-link{border-top-right-radius:0.3rem;border-bottom-right-radius:0.3rem}.pagination-sm .page-link{padding:0.25rem 0.5rem;font-size:0.930125rem;line-height:1.5}.pagination-sm .page-item:first-child .page-link{border-top-left-radius:0.2rem;border-bottom-left-radius:0.2rem}.pagination-sm .page-item:last-child .page-link{border-top-right-radius:0.2rem;border-bottom-right-radius:0.2rem}.badge{display:inline-block;padding:0.6em 1.2em;font-size:75%;font-weight:normal;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:0.25rem;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}@media (prefers-reduced-motion: reduce){.badge{transition:none}}a.badge:hover,a.badge:focus{text-decoration:none}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.badge-pill{padding-right:0.6em;padding-left:0.6em;border-radius:10rem}.badge-primary{color:#fff;background-color:#4582EC}a.badge-primary:hover,a.badge-primary:focus{color:#fff;background-color:#1863e6}a.badge-primary:focus,a.badge-primary.focus{outline:0;box-shadow:0 0 0 0.2rem rgba(69,130,236,0.5)}.badge-secondary{color:#fff;background-color:#adb5bd}a.badge-secondary:hover,a.badge-secondary:focus{color:#fff;background-color:#919ca6}a.badge-secondary:focus,a.badge-secondary.focus{outline:0;box-shadow:0 0 0 0.2rem rgba(173,181,189,0.5)}.badge-success{color:#fff;background-color:#02B875}a.badge-success:hover,a.badge-success:focus{color:#fff;background-color:#018655}a.badge-success:focus,a.badge-success.focus{outline:0;box-shadow:0 0 0 0.2rem rgba(2,184,117,0.5)}.badge-info{color:#fff;background-color:#17a2b8}a.badge-info:hover,a.badge-info:focus{color:#fff;background-color:#117a8b}a.badge-info:focus,a.badge-info.focus{outline:0;box-shadow:0 0 0 0.2rem rgba(23,162,184,0.5)}.badge-warning{color:#fff;background-color:#f0ad4e}a.badge-warning:hover,a.badge-warning:focus{color:#fff;background-color:#ec971f}a.badge-warning:focus,a.badge-warning.focus{outline:0;box-shadow:0 0 0 0.2rem rgba(240,173,78,0.5)}.badge-danger{color:#fff;background-color:#d9534f}a.badge-danger:hover,a.badge-danger:focus{color:#fff;background-color:#c9302c}a.badge-danger:focus,a.badge-danger.focus{outline:0;box-shadow:0 0 0 0.2rem rgba(217,83,79,0.5)}.badge-light{color:#212529;background-color:#f8f9fa}a.badge-light:hover,a.badge-light:focus{color:#212529;background-color:#dae0e5}a.badge-light:focus,a.badge-light.focus{outline:0;box-shadow:0 0 0 0.2rem rgba(248,249,250,0.5)}.badge-dark{color:#fff;background-color:#343a40}a.badge-dark:hover,a.badge-dark:focus{color:#fff;background-color:#1d2124}a.badge-dark:focus,a.badge-dark.focus{outline:0;box-shadow:0 0 0 0.2rem rgba(52,58,64,0.5)}.jumbotron{padding:2rem 1rem;margin-bottom:2rem;background-color:#e9ecef;border-radius:0.3rem}@media (min-width: 576px){.jumbotron{padding:4rem 2rem}}.jumbotron-fluid{padding-right:0;padding-left:0;border-radius:0}.alert{position:relative;padding:0.75rem 1.25rem;margin-bottom:1rem;border:0 solid transparent;border-radius:0.25rem}.alert-heading{color:inherit}.alert-link{font-weight:700}.alert-dismissible{padding-right:4.0945rem}.alert-dismissible .close{position:absolute;top:0;right:0;padding:0.75rem 1.25rem;color:inherit}.alert-primary{color:#24447b;background-color:#dae6fb;border-color:#cbdcfa}.alert-primary hr{border-top-color:#b4ccf8}.alert-primary .alert-link{color:#182e54}.alert-secondary{color:#5a5e62;background-color:#eff0f2;border-color:#e8eaed}.alert-secondary hr{border-top-color:#dadde2}.alert-secondary .alert-link{color:#424547}.alert-success{color:#01603d;background-color:#ccf1e3;border-color:#b8ebd8}.alert-success hr{border-top-color:#a4e5cd}.alert-success .alert-link{color:#002e1d}.alert-info{color:#0c5460;background-color:#d1ecf1;border-color:#bee5eb}.alert-info hr{border-top-color:#abdde5}.alert-info .alert-link{color:#062c33}.alert-warning{color:#7d5a29;background-color:#fcefdc;border-color:#fbe8cd}.alert-warning hr{border-top-color:#f9ddb5}.alert-warning .alert-link{color:#573e1c}.alert-danger{color:#712b29;background-color:#f7dddc;border-color:#f4cfce}.alert-danger hr{border-top-color:#efbbb9}.alert-danger .alert-link{color:#4c1d1b}.alert-light{color:#818182;background-color:#fefefe;border-color:#fdfdfe}.alert-light hr{border-top-color:#ececf6}.alert-light .alert-link{color:#686868}.alert-dark{color:#1b1e21;background-color:#d6d8d9;border-color:#c6c8ca}.alert-dark hr{border-top-color:#b9bbbe}.alert-dark .alert-link{color:#040505}@-webkit-keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}@keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}.progress{display:flex;height:1rem;overflow:hidden;line-height:0;font-size:0.79725rem;background-color:#e9ecef;border-radius:0.25rem}.progress-bar{display:flex;flex-direction:column;justify-content:center;overflow:hidden;color:#fff;text-align:center;white-space:nowrap;background-color:#4582EC;transition:width 0.6s ease}@media (prefers-reduced-motion: reduce){.progress-bar{transition:none}}.progress-bar-striped{background-image:linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent);background-size:1rem 1rem}.progress-bar-animated{-webkit-animation:progress-bar-stripes 1s linear infinite;animation:progress-bar-stripes 1s linear infinite}@media (prefers-reduced-motion: reduce){.progress-bar-animated{-webkit-animation:none;animation:none}}.media{display:flex;align-items:flex-start}.media-body{flex:1 1}.list-group{display:flex;flex-direction:column;padding-left:0;margin-bottom:0;border-radius:0.25rem}.list-group-item-action{width:100%;color:#495057;text-align:inherit}.list-group-item-action:hover,.list-group-item-action:focus{z-index:1;color:#495057;text-decoration:none;background-color:#f8f9fa}.list-group-item-action:active{color:#343a40;background-color:#e9ecef}.list-group-item{position:relative;display:block;padding:0.75rem 1.25rem;background-color:#fff;border:1px solid rgba(0,0,0,0.125)}.list-group-item:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.list-group-item:last-child{border-bottom-right-radius:inherit;border-bottom-left-radius:inherit}.list-group-item.disabled,.list-group-item:disabled{color:#868e96;pointer-events:none;background-color:#fff}.list-group-item.active{z-index:2;color:#fff;background-color:#4582EC;border-color:#4582EC}.list-group-item+.list-group-item{border-top-width:0}.list-group-item+.list-group-item.active{margin-top:-1px;border-top-width:1px}.list-group-horizontal{flex-direction:row}.list-group-horizontal>.list-group-item:first-child{border-bottom-left-radius:0.25rem;border-top-right-radius:0}.list-group-horizontal>.list-group-item:last-child{border-top-right-radius:0.25rem;border-bottom-left-radius:0}.list-group-horizontal>.list-group-item.active{margin-top:0}.list-group-horizontal>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}@media (min-width: 576px){.list-group-horizontal-sm{flex-direction:row}.list-group-horizontal-sm>.list-group-item:first-child{border-bottom-left-radius:0.25rem;border-top-right-radius:0}.list-group-horizontal-sm>.list-group-item:last-child{border-top-right-radius:0.25rem;border-bottom-left-radius:0}.list-group-horizontal-sm>.list-group-item.active{margin-top:0}.list-group-horizontal-sm>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-sm>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width: 768px){.list-group-horizontal-md{flex-direction:row}.list-group-horizontal-md>.list-group-item:first-child{border-bottom-left-radius:0.25rem;border-top-right-radius:0}.list-group-horizontal-md>.list-group-item:last-child{border-top-right-radius:0.25rem;border-bottom-left-radius:0}.list-group-horizontal-md>.list-group-item.active{margin-top:0}.list-group-horizontal-md>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-md>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width: 992px){.list-group-horizontal-lg{flex-direction:row}.list-group-horizontal-lg>.list-group-item:first-child{border-bottom-left-radius:0.25rem;border-top-right-radius:0}.list-group-horizontal-lg>.list-group-item:last-child{border-top-right-radius:0.25rem;border-bottom-left-radius:0}.list-group-horizontal-lg>.list-group-item.active{margin-top:0}.list-group-horizontal-lg>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-lg>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width: 1200px){.list-group-horizontal-xl{flex-direction:row}.list-group-horizontal-xl>.list-group-item:first-child{border-bottom-left-radius:0.25rem;border-top-right-radius:0}.list-group-horizontal-xl>.list-group-item:last-child{border-top-right-radius:0.25rem;border-bottom-left-radius:0}.list-group-horizontal-xl>.list-group-item.active{margin-top:0}.list-group-horizontal-xl>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-xl>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}.list-group-flush{border-radius:0}.list-group-flush>.list-group-item{border-width:0 0 1px}.list-group-flush>.list-group-item:last-child{border-bottom-width:0}.list-group-item-primary{color:#24447b;background-color:#cbdcfa}.list-group-item-primary.list-group-item-action:hover,.list-group-item-primary.list-group-item-action:focus{color:#24447b;background-color:#b4ccf8}.list-group-item-primary.list-group-item-action.active{color:#fff;background-color:#24447b;border-color:#24447b}.list-group-item-secondary{color:#5a5e62;background-color:#e8eaed}.list-group-item-secondary.list-group-item-action:hover,.list-group-item-secondary.list-group-item-action:focus{color:#5a5e62;background-color:#dadde2}.list-group-item-secondary.list-group-item-action.active{color:#fff;background-color:#5a5e62;border-color:#5a5e62}.list-group-item-success{color:#01603d;background-color:#b8ebd8}.list-group-item-success.list-group-item-action:hover,.list-group-item-success.list-group-item-action:focus{color:#01603d;background-color:#a4e5cd}.list-group-item-success.list-group-item-action.active{color:#fff;background-color:#01603d;border-color:#01603d}.list-group-item-info{color:#0c5460;background-color:#bee5eb}.list-group-item-info.list-group-item-action:hover,.list-group-item-info.list-group-item-action:focus{color:#0c5460;background-color:#abdde5}.list-group-item-info.list-group-item-action.active{color:#fff;background-color:#0c5460;border-color:#0c5460}.list-group-item-warning{color:#7d5a29;background-color:#fbe8cd}.list-group-item-warning.list-group-item-action:hover,.list-group-item-warning.list-group-item-action:focus{color:#7d5a29;background-color:#f9ddb5}.list-group-item-warning.list-group-item-action.active{color:#fff;background-color:#7d5a29;border-color:#7d5a29}.list-group-item-danger{color:#712b29;background-color:#f4cfce}.list-group-item-danger.list-group-item-action:hover,.list-group-item-danger.list-group-item-action:focus{color:#712b29;background-color:#efbbb9}.list-group-item-danger.list-group-item-action.active{color:#fff;background-color:#712b29;border-color:#712b29}.list-group-item-light{color:#818182;background-color:#fdfdfe}.list-group-item-light.list-group-item-action:hover,.list-group-item-light.list-group-item-action:focus{color:#818182;background-color:#ececf6}.list-group-item-light.list-group-item-action.active{color:#fff;background-color:#818182;border-color:#818182}.list-group-item-dark{color:#1b1e21;background-color:#c6c8ca}.list-group-item-dark.list-group-item-action:hover,.list-group-item-dark.list-group-item-action:focus{color:#1b1e21;background-color:#b9bbbe}.list-group-item-dark.list-group-item-action.active{color:#fff;background-color:#1b1e21;border-color:#1b1e21}.close{float:right;font-size:1.5945rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.5}.close:hover{color:#000;text-decoration:none}.close:not(:disabled):not(.disabled):hover,.close:not(:disabled):not(.disabled):focus{opacity:.75}button.close{padding:0;background-color:transparent;border:0}a.close.disabled{pointer-events:none}.toast{max-width:350px;overflow:hidden;font-size:0.875rem;background-color:rgba(255,255,255,0.85);background-clip:padding-box;border:1px solid rgba(0,0,0,0.1);box-shadow:0 0.25rem 0.75rem rgba(0,0,0,0.1);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);opacity:0;border-radius:0.25rem}.toast:not(:last-child){margin-bottom:0.75rem}.toast.showing{opacity:1}.toast.show{display:block;opacity:1}.toast.hide{display:none}.toast-header{display:flex;align-items:center;padding:0.25rem 0.75rem;color:#868e96;background-color:rgba(255,255,255,0.85);background-clip:padding-box;border-bottom:1px solid rgba(0,0,0,0.05)}.toast-body{padding:0.75rem}.modal-open{overflow:hidden}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal{position:fixed;top:0;left:0;z-index:1050;display:none;width:100%;height:100%;overflow:hidden;outline:0}.modal-dialog{position:relative;width:auto;margin:0.5rem;pointer-events:none}.modal.fade .modal-dialog{transition:transform 0.3s ease-out;transform:translate(0, -50px)}@media (prefers-reduced-motion: reduce){.modal.fade .modal-dialog{transition:none}}.modal.show .modal-dialog{transform:none}.modal.modal-static .modal-dialog{transform:scale(1.02)}.modal-dialog-scrollable{display:flex;max-height:calc(100% - 1rem)}.modal-dialog-scrollable .modal-content{max-height:calc(100vh - 1rem);overflow:hidden}.modal-dialog-scrollable .modal-header,.modal-dialog-scrollable .modal-footer{flex-shrink:0}.modal-dialog-scrollable .modal-body{overflow-y:auto}.modal-dialog-centered{display:flex;align-items:center;min-height:calc(100% - 1rem)}.modal-dialog-centered::before{display:block;height:calc(100vh - 1rem);height:-webkit-min-content;height:-moz-min-content;height:min-content;content:\"\"}.modal-dialog-centered.modal-dialog-scrollable{flex-direction:column;justify-content:center;height:100%}.modal-dialog-centered.modal-dialog-scrollable .modal-content{max-height:none}.modal-dialog-centered.modal-dialog-scrollable::before{content:none}.modal-content{position:relative;display:flex;flex-direction:column;width:100%;pointer-events:auto;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,0.2);border-radius:0.3rem;outline:0}.modal-backdrop{position:fixed;top:0;left:0;z-index:1040;width:100vw;height:100vh;background-color:#000}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:0.5}.modal-header{display:flex;align-items:flex-start;justify-content:space-between;padding:1rem 1rem;border-bottom:1px solid #ddd;border-top-left-radius:calc(0.3rem - 1px);border-top-right-radius:calc(0.3rem - 1px)}.modal-header .close{padding:1rem 1rem;margin:-1rem -1rem -1rem auto}.modal-title{margin-bottom:0;line-height:1.5}.modal-body{position:relative;flex:1 1 auto;padding:1rem}.modal-footer{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-end;padding:0.75rem;border-top:1px solid #ddd;border-bottom-right-radius:calc(0.3rem - 1px);border-bottom-left-radius:calc(0.3rem - 1px)}.modal-footer>*{margin:0.25rem}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media (min-width: 576px){.modal-dialog{max-width:500px;margin:1.75rem auto}.modal-dialog-scrollable{max-height:calc(100% - 3.5rem)}.modal-dialog-scrollable .modal-content{max-height:calc(100vh - 3.5rem)}.modal-dialog-centered{min-height:calc(100% - 3.5rem)}.modal-dialog-centered::before{height:calc(100vh - 3.5rem);height:-webkit-min-content;height:-moz-min-content;height:min-content}.modal-sm{max-width:300px}}@media (min-width: 992px){.modal-lg,.modal-xl{max-width:800px}}@media (min-width: 1200px){.modal-xl{max-width:1140px}}.tooltip{position:absolute;z-index:1070;display:block;margin:0;font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:0.6875rem;word-wrap:break-word;opacity:0}.tooltip.show{opacity:0.9}.tooltip .arrow{position:absolute;display:block;width:0.8rem;height:0.4rem}.tooltip .arrow::before{position:absolute;content:\"\";border-color:transparent;border-style:solid}.bs-tooltip-top,.bs-tooltip-auto[x-placement^=\"top\"]{padding:0.4rem 0}.bs-tooltip-top .arrow,.bs-tooltip-auto[x-placement^=\"top\"] .arrow{bottom:0}.bs-tooltip-top .arrow::before,.bs-tooltip-auto[x-placement^=\"top\"] .arrow::before{top:0;border-width:0.4rem 0.4rem 0;border-top-color:#000}.bs-tooltip-right,.bs-tooltip-auto[x-placement^=\"right\"]{padding:0 0.4rem}.bs-tooltip-right .arrow,.bs-tooltip-auto[x-placement^=\"right\"] .arrow{left:0;width:0.4rem;height:0.8rem}.bs-tooltip-right .arrow::before,.bs-tooltip-auto[x-placement^=\"right\"] .arrow::before{right:0;border-width:0.4rem 0.4rem 0.4rem 0;border-right-color:#000}.bs-tooltip-bottom,.bs-tooltip-auto[x-placement^=\"bottom\"]{padding:0.4rem 0}.bs-tooltip-bottom .arrow,.bs-tooltip-auto[x-placement^=\"bottom\"] .arrow{top:0}.bs-tooltip-bottom .arrow::before,.bs-tooltip-auto[x-placement^=\"bottom\"] .arrow::before{bottom:0;border-width:0 0.4rem 0.4rem;border-bottom-color:#000}.bs-tooltip-left,.bs-tooltip-auto[x-placement^=\"left\"]{padding:0 0.4rem}.bs-tooltip-left .arrow,.bs-tooltip-auto[x-placement^=\"left\"] .arrow{right:0;width:0.4rem;height:0.8rem}.bs-tooltip-left .arrow::before,.bs-tooltip-auto[x-placement^=\"left\"] .arrow::before{left:0;border-width:0.4rem 0 0.4rem 0.4rem;border-left-color:#000}.tooltip-inner{max-width:200px;padding:0.25rem 0.5rem;color:#fff;text-align:center;background-color:#000;border-radius:0.25rem}.popover{position:absolute;top:0;left:0;z-index:1060;display:block;max-width:276px;font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:0.930125rem;word-wrap:break-word;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,0.2);border-radius:0.3rem}.popover .arrow{position:absolute;display:block;width:1rem;height:0.5rem;margin:0 0.3rem}.popover .arrow::before,.popover .arrow::after{position:absolute;display:block;content:\"\";border-color:transparent;border-style:solid}.bs-popover-top,.bs-popover-auto[x-placement^=\"top\"]{margin-bottom:0.5rem}.bs-popover-top>.arrow,.bs-popover-auto[x-placement^=\"top\"]>.arrow{bottom:calc(-0.5rem - 1px)}.bs-popover-top>.arrow::before,.bs-popover-auto[x-placement^=\"top\"]>.arrow::before{bottom:0;border-width:0.5rem 0.5rem 0;border-top-color:rgba(0,0,0,0.25)}.bs-popover-top>.arrow::after,.bs-popover-auto[x-placement^=\"top\"]>.arrow::after{bottom:1px;border-width:0.5rem 0.5rem 0;border-top-color:#fff}.bs-popover-right,.bs-popover-auto[x-placement^=\"right\"]{margin-left:0.5rem}.bs-popover-right>.arrow,.bs-popover-auto[x-placement^=\"right\"]>.arrow{left:calc(-0.5rem - 1px);width:0.5rem;height:1rem;margin:0.3rem 0}.bs-popover-right>.arrow::before,.bs-popover-auto[x-placement^=\"right\"]>.arrow::before{left:0;border-width:0.5rem 0.5rem 0.5rem 0;border-right-color:rgba(0,0,0,0.25)}.bs-popover-right>.arrow::after,.bs-popover-auto[x-placement^=\"right\"]>.arrow::after{left:1px;border-width:0.5rem 0.5rem 0.5rem 0;border-right-color:#fff}.bs-popover-bottom,.bs-popover-auto[x-placement^=\"bottom\"]{margin-top:0.5rem}.bs-popover-bottom>.arrow,.bs-popover-auto[x-placement^=\"bottom\"]>.arrow{top:calc(-0.5rem - 1px)}.bs-popover-bottom>.arrow::before,.bs-popover-auto[x-placement^=\"bottom\"]>.arrow::before{top:0;border-width:0 0.5rem 0.5rem 0.5rem;border-bottom-color:rgba(0,0,0,0.25)}.bs-popover-bottom>.arrow::after,.bs-popover-auto[x-placement^=\"bottom\"]>.arrow::after{top:1px;border-width:0 0.5rem 0.5rem 0.5rem;border-bottom-color:#fff}.bs-popover-bottom .popover-header::before,.bs-popover-auto[x-placement^=\"bottom\"] .popover-header::before{position:absolute;top:0;left:50%;display:block;width:1rem;margin-left:-0.5rem;content:\"\";border-bottom:1px solid #f7f7f7}.bs-popover-left,.bs-popover-auto[x-placement^=\"left\"]{margin-right:0.5rem}.bs-popover-left>.arrow,.bs-popover-auto[x-placement^=\"left\"]>.arrow{right:calc(-0.5rem - 1px);width:0.5rem;height:1rem;margin:0.3rem 0}.bs-popover-left>.arrow::before,.bs-popover-auto[x-placement^=\"left\"]>.arrow::before{right:0;border-width:0.5rem 0 0.5rem 0.5rem;border-left-color:rgba(0,0,0,0.25)}.bs-popover-left>.arrow::after,.bs-popover-auto[x-placement^=\"left\"]>.arrow::after{right:1px;border-width:0.5rem 0 0.5rem 0.5rem;border-left-color:#fff}.popover-header{padding:0.5rem 0.75rem;margin-bottom:0;font-size:1.063rem;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-top-left-radius:calc(0.3rem - 1px);border-top-right-radius:calc(0.3rem - 1px)}.popover-header:empty{display:none}.popover-body{padding:0.5rem 0.75rem;color:#343a40}.carousel{position:relative}.carousel.pointer-event{touch-action:pan-y}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-inner::after{display:block;clear:both;content:\"\"}.carousel-item{position:relative;display:none;float:left;width:100%;margin-right:-100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:transform 0.6s ease-in-out}@media (prefers-reduced-motion: reduce){.carousel-item{transition:none}}.carousel-item.active,.carousel-item-next,.carousel-item-prev{display:block}.carousel-item-next:not(.carousel-item-left),.active.carousel-item-right{transform:translateX(100%)}.carousel-item-prev:not(.carousel-item-right),.active.carousel-item-left{transform:translateX(-100%)}.carousel-fade .carousel-item{opacity:0;transition-property:opacity;transform:none}.carousel-fade .carousel-item.active,.carousel-fade .carousel-item-next.carousel-item-left,.carousel-fade .carousel-item-prev.carousel-item-right{z-index:1;opacity:1}.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right{z-index:0;opacity:0;transition:opacity 0s 0.6s}@media (prefers-reduced-motion: reduce){.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right{transition:none}}.carousel-control-prev,.carousel-control-next{position:absolute;top:0;bottom:0;z-index:1;display:flex;align-items:center;justify-content:center;width:15%;color:#fff;text-align:center;opacity:0.5;transition:opacity 0.15s ease}@media (prefers-reduced-motion: reduce){.carousel-control-prev,.carousel-control-next{transition:none}}.carousel-control-prev:hover,.carousel-control-prev:focus,.carousel-control-next:hover,.carousel-control-next:focus{color:#fff;text-decoration:none;outline:0;opacity:0.9}.carousel-control-prev{left:0}.carousel-control-next{right:0}.carousel-control-prev-icon,.carousel-control-next-icon{display:inline-block;width:20px;height:20px;background:no-repeat 50% / 100% 100%}.carousel-control-prev-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e\")}.carousel-control-next-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e\")}.carousel-indicators{position:absolute;right:0;bottom:0;left:0;z-index:15;display:flex;justify-content:center;padding-left:0;margin-right:15%;margin-left:15%;list-style:none}.carousel-indicators li{box-sizing:content-box;flex:0 1 auto;width:30px;height:3px;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:#fff;background-clip:padding-box;border-top:10px solid transparent;border-bottom:10px solid transparent;opacity:.5;transition:opacity 0.6s ease}@media (prefers-reduced-motion: reduce){.carousel-indicators li{transition:none}}.carousel-indicators .active{opacity:1}.carousel-caption{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center}@-webkit-keyframes spinner-border{to{transform:rotate(360deg)}}@keyframes spinner-border{to{transform:rotate(360deg)}}.spinner-border{display:inline-block;width:2rem;height:2rem;vertical-align:text-bottom;border:0.25em solid currentColor;border-right-color:transparent;border-radius:50%;-webkit-animation:spinner-border .75s linear infinite;animation:spinner-border .75s linear infinite}.spinner-border-sm{width:1rem;height:1rem;border-width:0.2em}@-webkit-keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}@keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}.spinner-grow{display:inline-block;width:2rem;height:2rem;vertical-align:text-bottom;background-color:currentColor;border-radius:50%;opacity:0;-webkit-animation:spinner-grow .75s linear infinite;animation:spinner-grow .75s linear infinite}.spinner-grow-sm{width:1rem;height:1rem}.align-baseline{vertical-align:baseline !important}.align-top{vertical-align:top !important}.align-middle{vertical-align:middle !important}.align-bottom{vertical-align:bottom !important}.align-text-bottom{vertical-align:text-bottom !important}.align-text-top{vertical-align:text-top !important}.bg-primary{background-color:#4582EC !important}a.bg-primary:hover,a.bg-primary:focus,button.bg-primary:hover,button.bg-primary:focus{background-color:#1863e6 !important}.bg-secondary{background-color:#adb5bd !important}a.bg-secondary:hover,a.bg-secondary:focus,button.bg-secondary:hover,button.bg-secondary:focus{background-color:#919ca6 !important}.bg-success{background-color:#02B875 !important}a.bg-success:hover,a.bg-success:focus,button.bg-success:hover,button.bg-success:focus{background-color:#018655 !important}.bg-info{background-color:#17a2b8 !important}a.bg-info:hover,a.bg-info:focus,button.bg-info:hover,button.bg-info:focus{background-color:#117a8b !important}.bg-warning{background-color:#f0ad4e !important}a.bg-warning:hover,a.bg-warning:focus,button.bg-warning:hover,button.bg-warning:focus{background-color:#ec971f !important}.bg-danger{background-color:#d9534f !important}a.bg-danger:hover,a.bg-danger:focus,button.bg-danger:hover,button.bg-danger:focus{background-color:#c9302c !important}.bg-light{background-color:#f8f9fa !important}a.bg-light:hover,a.bg-light:focus,button.bg-light:hover,button.bg-light:focus{background-color:#dae0e5 !important}.bg-dark{background-color:#343a40 !important}a.bg-dark:hover,a.bg-dark:focus,button.bg-dark:hover,button.bg-dark:focus{background-color:#1d2124 !important}.bg-white{background-color:#fff !important}.bg-transparent{background-color:transparent !important}.border{border:1px solid #ddd !important}.border-top{border-top:1px solid #ddd !important}.border-right{border-right:1px solid #ddd !important}.border-bottom{border-bottom:1px solid #ddd !important}.border-left{border-left:1px solid #ddd !important}.border-0{border:0 !important}.border-top-0{border-top:0 !important}.border-right-0{border-right:0 !important}.border-bottom-0{border-bottom:0 !important}.border-left-0{border-left:0 !important}.border-primary{border-color:#4582EC !important}.border-secondary{border-color:#adb5bd !important}.border-success{border-color:#02B875 !important}.border-info{border-color:#17a2b8 !important}.border-warning{border-color:#f0ad4e !important}.border-danger{border-color:#d9534f !important}.border-light{border-color:#f8f9fa !important}.border-dark{border-color:#343a40 !important}.border-white{border-color:#fff !important}.rounded-sm{border-radius:0.2rem !important}.rounded{border-radius:0.25rem !important}.rounded-top{border-top-left-radius:0.25rem !important;border-top-right-radius:0.25rem !important}.rounded-right{border-top-right-radius:0.25rem !important;border-bottom-right-radius:0.25rem !important}.rounded-bottom{border-bottom-right-radius:0.25rem !important;border-bottom-left-radius:0.25rem !important}.rounded-left{border-top-left-radius:0.25rem !important;border-bottom-left-radius:0.25rem !important}.rounded-lg{border-radius:0.3rem !important}.rounded-circle{border-radius:50% !important}.rounded-pill{border-radius:50rem !important}.rounded-0{border-radius:0 !important}.clearfix::after{display:block;clear:both;content:\"\"}.d-none{display:none !important}.d-inline{display:inline !important}.d-inline-block{display:inline-block !important}.d-block{display:block !important}.d-table{display:table !important}.d-table-row{display:table-row !important}.d-table-cell{display:table-cell !important}.d-flex{display:flex !important}.d-inline-flex{display:inline-flex !important}@media (min-width: 576px){.d-sm-none{display:none !important}.d-sm-inline{display:inline !important}.d-sm-inline-block{display:inline-block !important}.d-sm-block{display:block !important}.d-sm-table{display:table !important}.d-sm-table-row{display:table-row !important}.d-sm-table-cell{display:table-cell !important}.d-sm-flex{display:flex !important}.d-sm-inline-flex{display:inline-flex !important}}@media (min-width: 768px){.d-md-none{display:none !important}.d-md-inline{display:inline !important}.d-md-inline-block{display:inline-block !important}.d-md-block{display:block !important}.d-md-table{display:table !important}.d-md-table-row{display:table-row !important}.d-md-table-cell{display:table-cell !important}.d-md-flex{display:flex !important}.d-md-inline-flex{display:inline-flex !important}}@media (min-width: 992px){.d-lg-none{display:none !important}.d-lg-inline{display:inline !important}.d-lg-inline-block{display:inline-block !important}.d-lg-block{display:block !important}.d-lg-table{display:table !important}.d-lg-table-row{display:table-row !important}.d-lg-table-cell{display:table-cell !important}.d-lg-flex{display:flex !important}.d-lg-inline-flex{display:inline-flex !important}}@media (min-width: 1200px){.d-xl-none{display:none !important}.d-xl-inline{display:inline !important}.d-xl-inline-block{display:inline-block !important}.d-xl-block{display:block !important}.d-xl-table{display:table !important}.d-xl-table-row{display:table-row !important}.d-xl-table-cell{display:table-cell !important}.d-xl-flex{display:flex !important}.d-xl-inline-flex{display:inline-flex !important}}@media print{.d-print-none{display:none !important}.d-print-inline{display:inline !important}.d-print-inline-block{display:inline-block !important}.d-print-block{display:block !important}.d-print-table{display:table !important}.d-print-table-row{display:table-row !important}.d-print-table-cell{display:table-cell !important}.d-print-flex{display:flex !important}.d-print-inline-flex{display:inline-flex !important}}.embed-responsive{position:relative;display:block;width:100%;padding:0;overflow:hidden}.embed-responsive::before{display:block;content:\"\"}.embed-responsive .embed-responsive-item,.embed-responsive iframe,.embed-responsive embed,.embed-responsive object,.embed-responsive video{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0}.embed-responsive-21by9::before{padding-top:42.8571428571%}.embed-responsive-16by9::before{padding-top:56.25%}.embed-responsive-4by3::before{padding-top:75%}.embed-responsive-1by1::before{padding-top:100%}.flex-row{flex-direction:row !important}.flex-column{flex-direction:column !important}.flex-row-reverse{flex-direction:row-reverse !important}.flex-column-reverse{flex-direction:column-reverse !important}.flex-wrap{flex-wrap:wrap !important}.flex-nowrap{flex-wrap:nowrap !important}.flex-wrap-reverse{flex-wrap:wrap-reverse !important}.flex-fill{flex:1 1 auto !important}.flex-grow-0{flex-grow:0 !important}.flex-grow-1{flex-grow:1 !important}.flex-shrink-0{flex-shrink:0 !important}.flex-shrink-1{flex-shrink:1 !important}.justify-content-start{justify-content:flex-start !important}.justify-content-end{justify-content:flex-end !important}.justify-content-center{justify-content:center !important}.justify-content-between{justify-content:space-between !important}.justify-content-around{justify-content:space-around !important}.align-items-start{align-items:flex-start !important}.align-items-end{align-items:flex-end !important}.align-items-center{align-items:center !important}.align-items-baseline{align-items:baseline !important}.align-items-stretch{align-items:stretch !important}.align-content-start{align-content:flex-start !important}.align-content-end{align-content:flex-end !important}.align-content-center{align-content:center !important}.align-content-between{align-content:space-between !important}.align-content-around{align-content:space-around !important}.align-content-stretch{align-content:stretch !important}.align-self-auto{align-self:auto !important}.align-self-start{align-self:flex-start !important}.align-self-end{align-self:flex-end !important}.align-self-center{align-self:center !important}.align-self-baseline{align-self:baseline !important}.align-self-stretch{align-self:stretch !important}@media (min-width: 576px){.flex-sm-row{flex-direction:row !important}.flex-sm-column{flex-direction:column !important}.flex-sm-row-reverse{flex-direction:row-reverse !important}.flex-sm-column-reverse{flex-direction:column-reverse !important}.flex-sm-wrap{flex-wrap:wrap !important}.flex-sm-nowrap{flex-wrap:nowrap !important}.flex-sm-wrap-reverse{flex-wrap:wrap-reverse !important}.flex-sm-fill{flex:1 1 auto !important}.flex-sm-grow-0{flex-grow:0 !important}.flex-sm-grow-1{flex-grow:1 !important}.flex-sm-shrink-0{flex-shrink:0 !important}.flex-sm-shrink-1{flex-shrink:1 !important}.justify-content-sm-start{justify-content:flex-start !important}.justify-content-sm-end{justify-content:flex-end !important}.justify-content-sm-center{justify-content:center !important}.justify-content-sm-between{justify-content:space-between !important}.justify-content-sm-around{justify-content:space-around !important}.align-items-sm-start{align-items:flex-start !important}.align-items-sm-end{align-items:flex-end !important}.align-items-sm-center{align-items:center !important}.align-items-sm-baseline{align-items:baseline !important}.align-items-sm-stretch{align-items:stretch !important}.align-content-sm-start{align-content:flex-start !important}.align-content-sm-end{align-content:flex-end !important}.align-content-sm-center{align-content:center !important}.align-content-sm-between{align-content:space-between !important}.align-content-sm-around{align-content:space-around !important}.align-content-sm-stretch{align-content:stretch !important}.align-self-sm-auto{align-self:auto !important}.align-self-sm-start{align-self:flex-start !important}.align-self-sm-end{align-self:flex-end !important}.align-self-sm-center{align-self:center !important}.align-self-sm-baseline{align-self:baseline !important}.align-self-sm-stretch{align-self:stretch !important}}@media (min-width: 768px){.flex-md-row{flex-direction:row !important}.flex-md-column{flex-direction:column !important}.flex-md-row-reverse{flex-direction:row-reverse !important}.flex-md-column-reverse{flex-direction:column-reverse !important}.flex-md-wrap{flex-wrap:wrap !important}.flex-md-nowrap{flex-wrap:nowrap !important}.flex-md-wrap-reverse{flex-wrap:wrap-reverse !important}.flex-md-fill{flex:1 1 auto !important}.flex-md-grow-0{flex-grow:0 !important}.flex-md-grow-1{flex-grow:1 !important}.flex-md-shrink-0{flex-shrink:0 !important}.flex-md-shrink-1{flex-shrink:1 !important}.justify-content-md-start{justify-content:flex-start !important}.justify-content-md-end{justify-content:flex-end !important}.justify-content-md-center{justify-content:center !important}.justify-content-md-between{justify-content:space-between !important}.justify-content-md-around{justify-content:space-around !important}.align-items-md-start{align-items:flex-start !important}.align-items-md-end{align-items:flex-end !important}.align-items-md-center{align-items:center !important}.align-items-md-baseline{align-items:baseline !important}.align-items-md-stretch{align-items:stretch !important}.align-content-md-start{align-content:flex-start !important}.align-content-md-end{align-content:flex-end !important}.align-content-md-center{align-content:center !important}.align-content-md-between{align-content:space-between !important}.align-content-md-around{align-content:space-around !important}.align-content-md-stretch{align-content:stretch !important}.align-self-md-auto{align-self:auto !important}.align-self-md-start{align-self:flex-start !important}.align-self-md-end{align-self:flex-end !important}.align-self-md-center{align-self:center !important}.align-self-md-baseline{align-self:baseline !important}.align-self-md-stretch{align-self:stretch !important}}@media (min-width: 992px){.flex-lg-row{flex-direction:row !important}.flex-lg-column{flex-direction:column !important}.flex-lg-row-reverse{flex-direction:row-reverse !important}.flex-lg-column-reverse{flex-direction:column-reverse !important}.flex-lg-wrap{flex-wrap:wrap !important}.flex-lg-nowrap{flex-wrap:nowrap !important}.flex-lg-wrap-reverse{flex-wrap:wrap-reverse !important}.flex-lg-fill{flex:1 1 auto !important}.flex-lg-grow-0{flex-grow:0 !important}.flex-lg-grow-1{flex-grow:1 !important}.flex-lg-shrink-0{flex-shrink:0 !important}.flex-lg-shrink-1{flex-shrink:1 !important}.justify-content-lg-start{justify-content:flex-start !important}.justify-content-lg-end{justify-content:flex-end !important}.justify-content-lg-center{justify-content:center !important}.justify-content-lg-between{justify-content:space-between !important}.justify-content-lg-around{justify-content:space-around !important}.align-items-lg-start{align-items:flex-start !important}.align-items-lg-end{align-items:flex-end !important}.align-items-lg-center{align-items:center !important}.align-items-lg-baseline{align-items:baseline !important}.align-items-lg-stretch{align-items:stretch !important}.align-content-lg-start{align-content:flex-start !important}.align-content-lg-end{align-content:flex-end !important}.align-content-lg-center{align-content:center !important}.align-content-lg-between{align-content:space-between !important}.align-content-lg-around{align-content:space-around !important}.align-content-lg-stretch{align-content:stretch !important}.align-self-lg-auto{align-self:auto !important}.align-self-lg-start{align-self:flex-start !important}.align-self-lg-end{align-self:flex-end !important}.align-self-lg-center{align-self:center !important}.align-self-lg-baseline{align-self:baseline !important}.align-self-lg-stretch{align-self:stretch !important}}@media (min-width: 1200px){.flex-xl-row{flex-direction:row !important}.flex-xl-column{flex-direction:column !important}.flex-xl-row-reverse{flex-direction:row-reverse !important}.flex-xl-column-reverse{flex-direction:column-reverse !important}.flex-xl-wrap{flex-wrap:wrap !important}.flex-xl-nowrap{flex-wrap:nowrap !important}.flex-xl-wrap-reverse{flex-wrap:wrap-reverse !important}.flex-xl-fill{flex:1 1 auto !important}.flex-xl-grow-0{flex-grow:0 !important}.flex-xl-grow-1{flex-grow:1 !important}.flex-xl-shrink-0{flex-shrink:0 !important}.flex-xl-shrink-1{flex-shrink:1 !important}.justify-content-xl-start{justify-content:flex-start !important}.justify-content-xl-end{justify-content:flex-end !important}.justify-content-xl-center{justify-content:center !important}.justify-content-xl-between{justify-content:space-between !important}.justify-content-xl-around{justify-content:space-around !important}.align-items-xl-start{align-items:flex-start !important}.align-items-xl-end{align-items:flex-end !important}.align-items-xl-center{align-items:center !important}.align-items-xl-baseline{align-items:baseline !important}.align-items-xl-stretch{align-items:stretch !important}.align-content-xl-start{align-content:flex-start !important}.align-content-xl-end{align-content:flex-end !important}.align-content-xl-center{align-content:center !important}.align-content-xl-between{align-content:space-between !important}.align-content-xl-around{align-content:space-around !important}.align-content-xl-stretch{align-content:stretch !important}.align-self-xl-auto{align-self:auto !important}.align-self-xl-start{align-self:flex-start !important}.align-self-xl-end{align-self:flex-end !important}.align-self-xl-center{align-self:center !important}.align-self-xl-baseline{align-self:baseline !important}.align-self-xl-stretch{align-self:stretch !important}}.float-left{float:left !important}.float-right{float:right !important}.float-none{float:none !important}@media (min-width: 576px){.float-sm-left{float:left !important}.float-sm-right{float:right !important}.float-sm-none{float:none !important}}@media (min-width: 768px){.float-md-left{float:left !important}.float-md-right{float:right !important}.float-md-none{float:none !important}}@media (min-width: 992px){.float-lg-left{float:left !important}.float-lg-right{float:right !important}.float-lg-none{float:none !important}}@media (min-width: 1200px){.float-xl-left{float:left !important}.float-xl-right{float:right !important}.float-xl-none{float:none !important}}.user-select-all{-webkit-user-select:all !important;-moz-user-select:all !important;-ms-user-select:all !important;user-select:all !important}.user-select-auto{-webkit-user-select:auto !important;-moz-user-select:auto !important;-ms-user-select:auto !important;user-select:auto !important}.user-select-none{-webkit-user-select:none !important;-moz-user-select:none !important;-ms-user-select:none !important;user-select:none !important}.overflow-auto{overflow:auto !important}.overflow-hidden{overflow:hidden !important}.position-static{position:static !important}.position-relative{position:relative !important}.position-absolute{position:absolute !important}.position-fixed{position:fixed !important}.position-sticky{position:-webkit-sticky !important;position:sticky !important}.fixed-top{position:fixed;top:0;right:0;left:0;z-index:1030}.fixed-bottom{position:fixed;right:0;bottom:0;left:0;z-index:1030}@supports ((position: -webkit-sticky) or (position: sticky)){.sticky-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto;white-space:normal}.shadow-sm{box-shadow:0 0.125rem 0.25rem rgba(0,0,0,0.075) !important}.shadow{box-shadow:0 0.5rem 1rem rgba(0,0,0,0.15) !important}.shadow-lg{box-shadow:0 1rem 3rem rgba(0,0,0,0.175) !important}.shadow-none{box-shadow:none !important}.w-25{width:25% !important}.w-50{width:50% !important}.w-75{width:75% !important}.w-100{width:100% !important}.w-auto{width:auto !important}.h-25{height:25% !important}.h-50{height:50% !important}.h-75{height:75% !important}.h-100{height:100% !important}.h-auto{height:auto !important}.mw-100{max-width:100% !important}.mh-100{max-height:100% !important}.min-vw-100{min-width:100vw !important}.min-vh-100{min-height:100vh !important}.vw-100{width:100vw !important}.vh-100{height:100vh !important}.m-0{margin:0 !important}.mt-0,.my-0{margin-top:0 !important}.mr-0,.mx-0{margin-right:0 !important}.mb-0,.my-0{margin-bottom:0 !important}.ml-0,.mx-0{margin-left:0 !important}.m-1{margin:0.25rem !important}.mt-1,.my-1{margin-top:0.25rem !important}.mr-1,.mx-1{margin-right:0.25rem !important}.mb-1,.my-1{margin-bottom:0.25rem !important}.ml-1,.mx-1{margin-left:0.25rem !important}.m-2{margin:0.5rem !important}.mt-2,.my-2{margin-top:0.5rem !important}.mr-2,.mx-2{margin-right:0.5rem !important}.mb-2,.my-2{margin-bottom:0.5rem !important}.ml-2,.mx-2{margin-left:0.5rem !important}.m-3{margin:1rem !important}.mt-3,.my-3{margin-top:1rem !important}.mr-3,.mx-3{margin-right:1rem !important}.mb-3,.my-3{margin-bottom:1rem !important}.ml-3,.mx-3{margin-left:1rem !important}.m-4{margin:1.5rem !important}.mt-4,.my-4{margin-top:1.5rem !important}.mr-4,.mx-4{margin-right:1.5rem !important}.mb-4,.my-4{margin-bottom:1.5rem !important}.ml-4,.mx-4{margin-left:1.5rem !important}.m-5{margin:3rem !important}.mt-5,.my-5{margin-top:3rem !important}.mr-5,.mx-5{margin-right:3rem !important}.mb-5,.my-5{margin-bottom:3rem !important}.ml-5,.mx-5{margin-left:3rem !important}.p-0{padding:0 !important}.pt-0,.py-0{padding-top:0 !important}.pr-0,.px-0{padding-right:0 !important}.pb-0,.py-0{padding-bottom:0 !important}.pl-0,.px-0{padding-left:0 !important}.p-1{padding:0.25rem !important}.pt-1,.py-1{padding-top:0.25rem !important}.pr-1,.px-1{padding-right:0.25rem !important}.pb-1,.py-1{padding-bottom:0.25rem !important}.pl-1,.px-1{padding-left:0.25rem !important}.p-2{padding:0.5rem !important}.pt-2,.py-2{padding-top:0.5rem !important}.pr-2,.px-2{padding-right:0.5rem !important}.pb-2,.py-2{padding-bottom:0.5rem !important}.pl-2,.px-2{padding-left:0.5rem !important}.p-3{padding:1rem !important}.pt-3,.py-3{padding-top:1rem !important}.pr-3,.px-3{padding-right:1rem !important}.pb-3,.py-3{padding-bottom:1rem !important}.pl-3,.px-3{padding-left:1rem !important}.p-4{padding:1.5rem !important}.pt-4,.py-4{padding-top:1.5rem !important}.pr-4,.px-4{padding-right:1.5rem !important}.pb-4,.py-4{padding-bottom:1.5rem !important}.pl-4,.px-4{padding-left:1.5rem !important}.p-5{padding:3rem !important}.pt-5,.py-5{padding-top:3rem !important}.pr-5,.px-5{padding-right:3rem !important}.pb-5,.py-5{padding-bottom:3rem !important}.pl-5,.px-5{padding-left:3rem !important}.m-n1{margin:-0.25rem !important}.mt-n1,.my-n1{margin-top:-0.25rem !important}.mr-n1,.mx-n1{margin-right:-0.25rem !important}.mb-n1,.my-n1{margin-bottom:-0.25rem !important}.ml-n1,.mx-n1{margin-left:-0.25rem !important}.m-n2{margin:-0.5rem !important}.mt-n2,.my-n2{margin-top:-0.5rem !important}.mr-n2,.mx-n2{margin-right:-0.5rem !important}.mb-n2,.my-n2{margin-bottom:-0.5rem !important}.ml-n2,.mx-n2{margin-left:-0.5rem !important}.m-n3{margin:-1rem !important}.mt-n3,.my-n3{margin-top:-1rem !important}.mr-n3,.mx-n3{margin-right:-1rem !important}.mb-n3,.my-n3{margin-bottom:-1rem !important}.ml-n3,.mx-n3{margin-left:-1rem !important}.m-n4{margin:-1.5rem !important}.mt-n4,.my-n4{margin-top:-1.5rem !important}.mr-n4,.mx-n4{margin-right:-1.5rem !important}.mb-n4,.my-n4{margin-bottom:-1.5rem !important}.ml-n4,.mx-n4{margin-left:-1.5rem !important}.m-n5{margin:-3rem !important}.mt-n5,.my-n5{margin-top:-3rem !important}.mr-n5,.mx-n5{margin-right:-3rem !important}.mb-n5,.my-n5{margin-bottom:-3rem !important}.ml-n5,.mx-n5{margin-left:-3rem !important}.m-auto{margin:auto !important}.mt-auto,.my-auto{margin-top:auto !important}.mr-auto,.mx-auto{margin-right:auto !important}.mb-auto,.my-auto{margin-bottom:auto !important}.ml-auto,.mx-auto{margin-left:auto !important}@media (min-width: 576px){.m-sm-0{margin:0 !important}.mt-sm-0,.my-sm-0{margin-top:0 !important}.mr-sm-0,.mx-sm-0{margin-right:0 !important}.mb-sm-0,.my-sm-0{margin-bottom:0 !important}.ml-sm-0,.mx-sm-0{margin-left:0 !important}.m-sm-1{margin:0.25rem !important}.mt-sm-1,.my-sm-1{margin-top:0.25rem !important}.mr-sm-1,.mx-sm-1{margin-right:0.25rem !important}.mb-sm-1,.my-sm-1{margin-bottom:0.25rem !important}.ml-sm-1,.mx-sm-1{margin-left:0.25rem !important}.m-sm-2{margin:0.5rem !important}.mt-sm-2,.my-sm-2{margin-top:0.5rem !important}.mr-sm-2,.mx-sm-2{margin-right:0.5rem !important}.mb-sm-2,.my-sm-2{margin-bottom:0.5rem !important}.ml-sm-2,.mx-sm-2{margin-left:0.5rem !important}.m-sm-3{margin:1rem !important}.mt-sm-3,.my-sm-3{margin-top:1rem !important}.mr-sm-3,.mx-sm-3{margin-right:1rem !important}.mb-sm-3,.my-sm-3{margin-bottom:1rem !important}.ml-sm-3,.mx-sm-3{margin-left:1rem !important}.m-sm-4{margin:1.5rem !important}.mt-sm-4,.my-sm-4{margin-top:1.5rem !important}.mr-sm-4,.mx-sm-4{margin-right:1.5rem !important}.mb-sm-4,.my-sm-4{margin-bottom:1.5rem !important}.ml-sm-4,.mx-sm-4{margin-left:1.5rem !important}.m-sm-5{margin:3rem !important}.mt-sm-5,.my-sm-5{margin-top:3rem !important}.mr-sm-5,.mx-sm-5{margin-right:3rem !important}.mb-sm-5,.my-sm-5{margin-bottom:3rem !important}.ml-sm-5,.mx-sm-5{margin-left:3rem !important}.p-sm-0{padding:0 !important}.pt-sm-0,.py-sm-0{padding-top:0 !important}.pr-sm-0,.px-sm-0{padding-right:0 !important}.pb-sm-0,.py-sm-0{padding-bottom:0 !important}.pl-sm-0,.px-sm-0{padding-left:0 !important}.p-sm-1{padding:0.25rem !important}.pt-sm-1,.py-sm-1{padding-top:0.25rem !important}.pr-sm-1,.px-sm-1{padding-right:0.25rem !important}.pb-sm-1,.py-sm-1{padding-bottom:0.25rem !important}.pl-sm-1,.px-sm-1{padding-left:0.25rem !important}.p-sm-2{padding:0.5rem !important}.pt-sm-2,.py-sm-2{padding-top:0.5rem !important}.pr-sm-2,.px-sm-2{padding-right:0.5rem !important}.pb-sm-2,.py-sm-2{padding-bottom:0.5rem !important}.pl-sm-2,.px-sm-2{padding-left:0.5rem !important}.p-sm-3{padding:1rem !important}.pt-sm-3,.py-sm-3{padding-top:1rem !important}.pr-sm-3,.px-sm-3{padding-right:1rem !important}.pb-sm-3,.py-sm-3{padding-bottom:1rem !important}.pl-sm-3,.px-sm-3{padding-left:1rem !important}.p-sm-4{padding:1.5rem !important}.pt-sm-4,.py-sm-4{padding-top:1.5rem !important}.pr-sm-4,.px-sm-4{padding-right:1.5rem !important}.pb-sm-4,.py-sm-4{padding-bottom:1.5rem !important}.pl-sm-4,.px-sm-4{padding-left:1.5rem !important}.p-sm-5{padding:3rem !important}.pt-sm-5,.py-sm-5{padding-top:3rem !important}.pr-sm-5,.px-sm-5{padding-right:3rem !important}.pb-sm-5,.py-sm-5{padding-bottom:3rem !important}.pl-sm-5,.px-sm-5{padding-left:3rem !important}.m-sm-n1{margin:-0.25rem !important}.mt-sm-n1,.my-sm-n1{margin-top:-0.25rem !important}.mr-sm-n1,.mx-sm-n1{margin-right:-0.25rem !important}.mb-sm-n1,.my-sm-n1{margin-bottom:-0.25rem !important}.ml-sm-n1,.mx-sm-n1{margin-left:-0.25rem !important}.m-sm-n2{margin:-0.5rem !important}.mt-sm-n2,.my-sm-n2{margin-top:-0.5rem !important}.mr-sm-n2,.mx-sm-n2{margin-right:-0.5rem !important}.mb-sm-n2,.my-sm-n2{margin-bottom:-0.5rem !important}.ml-sm-n2,.mx-sm-n2{margin-left:-0.5rem !important}.m-sm-n3{margin:-1rem !important}.mt-sm-n3,.my-sm-n3{margin-top:-1rem !important}.mr-sm-n3,.mx-sm-n3{margin-right:-1rem !important}.mb-sm-n3,.my-sm-n3{margin-bottom:-1rem !important}.ml-sm-n3,.mx-sm-n3{margin-left:-1rem !important}.m-sm-n4{margin:-1.5rem !important}.mt-sm-n4,.my-sm-n4{margin-top:-1.5rem !important}.mr-sm-n4,.mx-sm-n4{margin-right:-1.5rem !important}.mb-sm-n4,.my-sm-n4{margin-bottom:-1.5rem !important}.ml-sm-n4,.mx-sm-n4{margin-left:-1.5rem !important}.m-sm-n5{margin:-3rem !important}.mt-sm-n5,.my-sm-n5{margin-top:-3rem !important}.mr-sm-n5,.mx-sm-n5{margin-right:-3rem !important}.mb-sm-n5,.my-sm-n5{margin-bottom:-3rem !important}.ml-sm-n5,.mx-sm-n5{margin-left:-3rem !important}.m-sm-auto{margin:auto !important}.mt-sm-auto,.my-sm-auto{margin-top:auto !important}.mr-sm-auto,.mx-sm-auto{margin-right:auto !important}.mb-sm-auto,.my-sm-auto{margin-bottom:auto !important}.ml-sm-auto,.mx-sm-auto{margin-left:auto !important}}@media (min-width: 768px){.m-md-0{margin:0 !important}.mt-md-0,.my-md-0{margin-top:0 !important}.mr-md-0,.mx-md-0{margin-right:0 !important}.mb-md-0,.my-md-0{margin-bottom:0 !important}.ml-md-0,.mx-md-0{margin-left:0 !important}.m-md-1{margin:0.25rem !important}.mt-md-1,.my-md-1{margin-top:0.25rem !important}.mr-md-1,.mx-md-1{margin-right:0.25rem !important}.mb-md-1,.my-md-1{margin-bottom:0.25rem !important}.ml-md-1,.mx-md-1{margin-left:0.25rem !important}.m-md-2{margin:0.5rem !important}.mt-md-2,.my-md-2{margin-top:0.5rem !important}.mr-md-2,.mx-md-2{margin-right:0.5rem !important}.mb-md-2,.my-md-2{margin-bottom:0.5rem !important}.ml-md-2,.mx-md-2{margin-left:0.5rem !important}.m-md-3{margin:1rem !important}.mt-md-3,.my-md-3{margin-top:1rem !important}.mr-md-3,.mx-md-3{margin-right:1rem !important}.mb-md-3,.my-md-3{margin-bottom:1rem !important}.ml-md-3,.mx-md-3{margin-left:1rem !important}.m-md-4{margin:1.5rem !important}.mt-md-4,.my-md-4{margin-top:1.5rem !important}.mr-md-4,.mx-md-4{margin-right:1.5rem !important}.mb-md-4,.my-md-4{margin-bottom:1.5rem !important}.ml-md-4,.mx-md-4{margin-left:1.5rem !important}.m-md-5{margin:3rem !important}.mt-md-5,.my-md-5{margin-top:3rem !important}.mr-md-5,.mx-md-5{margin-right:3rem !important}.mb-md-5,.my-md-5{margin-bottom:3rem !important}.ml-md-5,.mx-md-5{margin-left:3rem !important}.p-md-0{padding:0 !important}.pt-md-0,.py-md-0{padding-top:0 !important}.pr-md-0,.px-md-0{padding-right:0 !important}.pb-md-0,.py-md-0{padding-bottom:0 !important}.pl-md-0,.px-md-0{padding-left:0 !important}.p-md-1{padding:0.25rem !important}.pt-md-1,.py-md-1{padding-top:0.25rem !important}.pr-md-1,.px-md-1{padding-right:0.25rem !important}.pb-md-1,.py-md-1{padding-bottom:0.25rem !important}.pl-md-1,.px-md-1{padding-left:0.25rem !important}.p-md-2{padding:0.5rem !important}.pt-md-2,.py-md-2{padding-top:0.5rem !important}.pr-md-2,.px-md-2{padding-right:0.5rem !important}.pb-md-2,.py-md-2{padding-bottom:0.5rem !important}.pl-md-2,.px-md-2{padding-left:0.5rem !important}.p-md-3{padding:1rem !important}.pt-md-3,.py-md-3{padding-top:1rem !important}.pr-md-3,.px-md-3{padding-right:1rem !important}.pb-md-3,.py-md-3{padding-bottom:1rem !important}.pl-md-3,.px-md-3{padding-left:1rem !important}.p-md-4{padding:1.5rem !important}.pt-md-4,.py-md-4{padding-top:1.5rem !important}.pr-md-4,.px-md-4{padding-right:1.5rem !important}.pb-md-4,.py-md-4{padding-bottom:1.5rem !important}.pl-md-4,.px-md-4{padding-left:1.5rem !important}.p-md-5{padding:3rem !important}.pt-md-5,.py-md-5{padding-top:3rem !important}.pr-md-5,.px-md-5{padding-right:3rem !important}.pb-md-5,.py-md-5{padding-bottom:3rem !important}.pl-md-5,.px-md-5{padding-left:3rem !important}.m-md-n1{margin:-0.25rem !important}.mt-md-n1,.my-md-n1{margin-top:-0.25rem !important}.mr-md-n1,.mx-md-n1{margin-right:-0.25rem !important}.mb-md-n1,.my-md-n1{margin-bottom:-0.25rem !important}.ml-md-n1,.mx-md-n1{margin-left:-0.25rem !important}.m-md-n2{margin:-0.5rem !important}.mt-md-n2,.my-md-n2{margin-top:-0.5rem !important}.mr-md-n2,.mx-md-n2{margin-right:-0.5rem !important}.mb-md-n2,.my-md-n2{margin-bottom:-0.5rem !important}.ml-md-n2,.mx-md-n2{margin-left:-0.5rem !important}.m-md-n3{margin:-1rem !important}.mt-md-n3,.my-md-n3{margin-top:-1rem !important}.mr-md-n3,.mx-md-n3{margin-right:-1rem !important}.mb-md-n3,.my-md-n3{margin-bottom:-1rem !important}.ml-md-n3,.mx-md-n3{margin-left:-1rem !important}.m-md-n4{margin:-1.5rem !important}.mt-md-n4,.my-md-n4{margin-top:-1.5rem !important}.mr-md-n4,.mx-md-n4{margin-right:-1.5rem !important}.mb-md-n4,.my-md-n4{margin-bottom:-1.5rem !important}.ml-md-n4,.mx-md-n4{margin-left:-1.5rem !important}.m-md-n5{margin:-3rem !important}.mt-md-n5,.my-md-n5{margin-top:-3rem !important}.mr-md-n5,.mx-md-n5{margin-right:-3rem !important}.mb-md-n5,.my-md-n5{margin-bottom:-3rem !important}.ml-md-n5,.mx-md-n5{margin-left:-3rem !important}.m-md-auto{margin:auto !important}.mt-md-auto,.my-md-auto{margin-top:auto !important}.mr-md-auto,.mx-md-auto{margin-right:auto !important}.mb-md-auto,.my-md-auto{margin-bottom:auto !important}.ml-md-auto,.mx-md-auto{margin-left:auto !important}}@media (min-width: 992px){.m-lg-0{margin:0 !important}.mt-lg-0,.my-lg-0{margin-top:0 !important}.mr-lg-0,.mx-lg-0{margin-right:0 !important}.mb-lg-0,.my-lg-0{margin-bottom:0 !important}.ml-lg-0,.mx-lg-0{margin-left:0 !important}.m-lg-1{margin:0.25rem !important}.mt-lg-1,.my-lg-1{margin-top:0.25rem !important}.mr-lg-1,.mx-lg-1{margin-right:0.25rem !important}.mb-lg-1,.my-lg-1{margin-bottom:0.25rem !important}.ml-lg-1,.mx-lg-1{margin-left:0.25rem !important}.m-lg-2{margin:0.5rem !important}.mt-lg-2,.my-lg-2{margin-top:0.5rem !important}.mr-lg-2,.mx-lg-2{margin-right:0.5rem !important}.mb-lg-2,.my-lg-2{margin-bottom:0.5rem !important}.ml-lg-2,.mx-lg-2{margin-left:0.5rem !important}.m-lg-3{margin:1rem !important}.mt-lg-3,.my-lg-3{margin-top:1rem !important}.mr-lg-3,.mx-lg-3{margin-right:1rem !important}.mb-lg-3,.my-lg-3{margin-bottom:1rem !important}.ml-lg-3,.mx-lg-3{margin-left:1rem !important}.m-lg-4{margin:1.5rem !important}.mt-lg-4,.my-lg-4{margin-top:1.5rem !important}.mr-lg-4,.mx-lg-4{margin-right:1.5rem !important}.mb-lg-4,.my-lg-4{margin-bottom:1.5rem !important}.ml-lg-4,.mx-lg-4{margin-left:1.5rem !important}.m-lg-5{margin:3rem !important}.mt-lg-5,.my-lg-5{margin-top:3rem !important}.mr-lg-5,.mx-lg-5{margin-right:3rem !important}.mb-lg-5,.my-lg-5{margin-bottom:3rem !important}.ml-lg-5,.mx-lg-5{margin-left:3rem !important}.p-lg-0{padding:0 !important}.pt-lg-0,.py-lg-0{padding-top:0 !important}.pr-lg-0,.px-lg-0{padding-right:0 !important}.pb-lg-0,.py-lg-0{padding-bottom:0 !important}.pl-lg-0,.px-lg-0{padding-left:0 !important}.p-lg-1{padding:0.25rem !important}.pt-lg-1,.py-lg-1{padding-top:0.25rem !important}.pr-lg-1,.px-lg-1{padding-right:0.25rem !important}.pb-lg-1,.py-lg-1{padding-bottom:0.25rem !important}.pl-lg-1,.px-lg-1{padding-left:0.25rem !important}.p-lg-2{padding:0.5rem !important}.pt-lg-2,.py-lg-2{padding-top:0.5rem !important}.pr-lg-2,.px-lg-2{padding-right:0.5rem !important}.pb-lg-2,.py-lg-2{padding-bottom:0.5rem !important}.pl-lg-2,.px-lg-2{padding-left:0.5rem !important}.p-lg-3{padding:1rem !important}.pt-lg-3,.py-lg-3{padding-top:1rem !important}.pr-lg-3,.px-lg-3{padding-right:1rem !important}.pb-lg-3,.py-lg-3{padding-bottom:1rem !important}.pl-lg-3,.px-lg-3{padding-left:1rem !important}.p-lg-4{padding:1.5rem !important}.pt-lg-4,.py-lg-4{padding-top:1.5rem !important}.pr-lg-4,.px-lg-4{padding-right:1.5rem !important}.pb-lg-4,.py-lg-4{padding-bottom:1.5rem !important}.pl-lg-4,.px-lg-4{padding-left:1.5rem !important}.p-lg-5{padding:3rem !important}.pt-lg-5,.py-lg-5{padding-top:3rem !important}.pr-lg-5,.px-lg-5{padding-right:3rem !important}.pb-lg-5,.py-lg-5{padding-bottom:3rem !important}.pl-lg-5,.px-lg-5{padding-left:3rem !important}.m-lg-n1{margin:-0.25rem !important}.mt-lg-n1,.my-lg-n1{margin-top:-0.25rem !important}.mr-lg-n1,.mx-lg-n1{margin-right:-0.25rem !important}.mb-lg-n1,.my-lg-n1{margin-bottom:-0.25rem !important}.ml-lg-n1,.mx-lg-n1{margin-left:-0.25rem !important}.m-lg-n2{margin:-0.5rem !important}.mt-lg-n2,.my-lg-n2{margin-top:-0.5rem !important}.mr-lg-n2,.mx-lg-n2{margin-right:-0.5rem !important}.mb-lg-n2,.my-lg-n2{margin-bottom:-0.5rem !important}.ml-lg-n2,.mx-lg-n2{margin-left:-0.5rem !important}.m-lg-n3{margin:-1rem !important}.mt-lg-n3,.my-lg-n3{margin-top:-1rem !important}.mr-lg-n3,.mx-lg-n3{margin-right:-1rem !important}.mb-lg-n3,.my-lg-n3{margin-bottom:-1rem !important}.ml-lg-n3,.mx-lg-n3{margin-left:-1rem !important}.m-lg-n4{margin:-1.5rem !important}.mt-lg-n4,.my-lg-n4{margin-top:-1.5rem !important}.mr-lg-n4,.mx-lg-n4{margin-right:-1.5rem !important}.mb-lg-n4,.my-lg-n4{margin-bottom:-1.5rem !important}.ml-lg-n4,.mx-lg-n4{margin-left:-1.5rem !important}.m-lg-n5{margin:-3rem !important}.mt-lg-n5,.my-lg-n5{margin-top:-3rem !important}.mr-lg-n5,.mx-lg-n5{margin-right:-3rem !important}.mb-lg-n5,.my-lg-n5{margin-bottom:-3rem !important}.ml-lg-n5,.mx-lg-n5{margin-left:-3rem !important}.m-lg-auto{margin:auto !important}.mt-lg-auto,.my-lg-auto{margin-top:auto !important}.mr-lg-auto,.mx-lg-auto{margin-right:auto !important}.mb-lg-auto,.my-lg-auto{margin-bottom:auto !important}.ml-lg-auto,.mx-lg-auto{margin-left:auto !important}}@media (min-width: 1200px){.m-xl-0{margin:0 !important}.mt-xl-0,.my-xl-0{margin-top:0 !important}.mr-xl-0,.mx-xl-0{margin-right:0 !important}.mb-xl-0,.my-xl-0{margin-bottom:0 !important}.ml-xl-0,.mx-xl-0{margin-left:0 !important}.m-xl-1{margin:0.25rem !important}.mt-xl-1,.my-xl-1{margin-top:0.25rem !important}.mr-xl-1,.mx-xl-1{margin-right:0.25rem !important}.mb-xl-1,.my-xl-1{margin-bottom:0.25rem !important}.ml-xl-1,.mx-xl-1{margin-left:0.25rem !important}.m-xl-2{margin:0.5rem !important}.mt-xl-2,.my-xl-2{margin-top:0.5rem !important}.mr-xl-2,.mx-xl-2{margin-right:0.5rem !important}.mb-xl-2,.my-xl-2{margin-bottom:0.5rem !important}.ml-xl-2,.mx-xl-2{margin-left:0.5rem !important}.m-xl-3{margin:1rem !important}.mt-xl-3,.my-xl-3{margin-top:1rem !important}.mr-xl-3,.mx-xl-3{margin-right:1rem !important}.mb-xl-3,.my-xl-3{margin-bottom:1rem !important}.ml-xl-3,.mx-xl-3{margin-left:1rem !important}.m-xl-4{margin:1.5rem !important}.mt-xl-4,.my-xl-4{margin-top:1.5rem !important}.mr-xl-4,.mx-xl-4{margin-right:1.5rem !important}.mb-xl-4,.my-xl-4{margin-bottom:1.5rem !important}.ml-xl-4,.mx-xl-4{margin-left:1.5rem !important}.m-xl-5{margin:3rem !important}.mt-xl-5,.my-xl-5{margin-top:3rem !important}.mr-xl-5,.mx-xl-5{margin-right:3rem !important}.mb-xl-5,.my-xl-5{margin-bottom:3rem !important}.ml-xl-5,.mx-xl-5{margin-left:3rem !important}.p-xl-0{padding:0 !important}.pt-xl-0,.py-xl-0{padding-top:0 !important}.pr-xl-0,.px-xl-0{padding-right:0 !important}.pb-xl-0,.py-xl-0{padding-bottom:0 !important}.pl-xl-0,.px-xl-0{padding-left:0 !important}.p-xl-1{padding:0.25rem !important}.pt-xl-1,.py-xl-1{padding-top:0.25rem !important}.pr-xl-1,.px-xl-1{padding-right:0.25rem !important}.pb-xl-1,.py-xl-1{padding-bottom:0.25rem !important}.pl-xl-1,.px-xl-1{padding-left:0.25rem !important}.p-xl-2{padding:0.5rem !important}.pt-xl-2,.py-xl-2{padding-top:0.5rem !important}.pr-xl-2,.px-xl-2{padding-right:0.5rem !important}.pb-xl-2,.py-xl-2{padding-bottom:0.5rem !important}.pl-xl-2,.px-xl-2{padding-left:0.5rem !important}.p-xl-3{padding:1rem !important}.pt-xl-3,.py-xl-3{padding-top:1rem !important}.pr-xl-3,.px-xl-3{padding-right:1rem !important}.pb-xl-3,.py-xl-3{padding-bottom:1rem !important}.pl-xl-3,.px-xl-3{padding-left:1rem !important}.p-xl-4{padding:1.5rem !important}.pt-xl-4,.py-xl-4{padding-top:1.5rem !important}.pr-xl-4,.px-xl-4{padding-right:1.5rem !important}.pb-xl-4,.py-xl-4{padding-bottom:1.5rem !important}.pl-xl-4,.px-xl-4{padding-left:1.5rem !important}.p-xl-5{padding:3rem !important}.pt-xl-5,.py-xl-5{padding-top:3rem !important}.pr-xl-5,.px-xl-5{padding-right:3rem !important}.pb-xl-5,.py-xl-5{padding-bottom:3rem !important}.pl-xl-5,.px-xl-5{padding-left:3rem !important}.m-xl-n1{margin:-0.25rem !important}.mt-xl-n1,.my-xl-n1{margin-top:-0.25rem !important}.mr-xl-n1,.mx-xl-n1{margin-right:-0.25rem !important}.mb-xl-n1,.my-xl-n1{margin-bottom:-0.25rem !important}.ml-xl-n1,.mx-xl-n1{margin-left:-0.25rem !important}.m-xl-n2{margin:-0.5rem !important}.mt-xl-n2,.my-xl-n2{margin-top:-0.5rem !important}.mr-xl-n2,.mx-xl-n2{margin-right:-0.5rem !important}.mb-xl-n2,.my-xl-n2{margin-bottom:-0.5rem !important}.ml-xl-n2,.mx-xl-n2{margin-left:-0.5rem !important}.m-xl-n3{margin:-1rem !important}.mt-xl-n3,.my-xl-n3{margin-top:-1rem !important}.mr-xl-n3,.mx-xl-n3{margin-right:-1rem !important}.mb-xl-n3,.my-xl-n3{margin-bottom:-1rem !important}.ml-xl-n3,.mx-xl-n3{margin-left:-1rem !important}.m-xl-n4{margin:-1.5rem !important}.mt-xl-n4,.my-xl-n4{margin-top:-1.5rem !important}.mr-xl-n4,.mx-xl-n4{margin-right:-1.5rem !important}.mb-xl-n4,.my-xl-n4{margin-bottom:-1.5rem !important}.ml-xl-n4,.mx-xl-n4{margin-left:-1.5rem !important}.m-xl-n5{margin:-3rem !important}.mt-xl-n5,.my-xl-n5{margin-top:-3rem !important}.mr-xl-n5,.mx-xl-n5{margin-right:-3rem !important}.mb-xl-n5,.my-xl-n5{margin-bottom:-3rem !important}.ml-xl-n5,.mx-xl-n5{margin-left:-3rem !important}.m-xl-auto{margin:auto !important}.mt-xl-auto,.my-xl-auto{margin-top:auto !important}.mr-xl-auto,.mx-xl-auto{margin-right:auto !important}.mb-xl-auto,.my-xl-auto{margin-bottom:auto !important}.ml-xl-auto,.mx-xl-auto{margin-left:auto !important}}.stretched-link::after{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;pointer-events:auto;content:\"\";background-color:rgba(0,0,0,0)}.text-monospace{font-family:SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace !important}.text-justify{text-align:justify !important}.text-wrap{white-space:normal !important}.text-nowrap{white-space:nowrap !important}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-left{text-align:left !important}.text-right{text-align:right !important}.text-center{text-align:center !important}@media (min-width: 576px){.text-sm-left{text-align:left !important}.text-sm-right{text-align:right !important}.text-sm-center{text-align:center !important}}@media (min-width: 768px){.text-md-left{text-align:left !important}.text-md-right{text-align:right !important}.text-md-center{text-align:center !important}}@media (min-width: 992px){.text-lg-left{text-align:left !important}.text-lg-right{text-align:right !important}.text-lg-center{text-align:center !important}}@media (min-width: 1200px){.text-xl-left{text-align:left !important}.text-xl-right{text-align:right !important}.text-xl-center{text-align:center !important}}.text-lowercase{text-transform:lowercase !important}.text-uppercase{text-transform:uppercase !important}.text-capitalize{text-transform:capitalize !important}.font-weight-light{font-weight:300 !important}.font-weight-lighter{font-weight:lighter !important}.font-weight-normal{font-weight:400 !important}.font-weight-bold{font-weight:700 !important}.font-weight-bolder{font-weight:bolder !important}.font-italic{font-style:italic !important}.text-white{color:#fff !important}.text-primary{color:#4582EC !important}a.text-primary:hover,a.text-primary:focus{color:#1559cf !important}.text-secondary{color:#adb5bd !important}a.text-secondary:hover,a.text-secondary:focus{color:#838f9b !important}.text-success{color:#02B875 !important}a.text-success:hover,a.text-success:focus{color:#016c45 !important}.text-info{color:#17a2b8 !important}a.text-info:hover,a.text-info:focus{color:#0f6674 !important}.text-warning{color:#f0ad4e !important}a.text-warning:hover,a.text-warning:focus{color:#df8a13 !important}.text-danger{color:#d9534f !important}a.text-danger:hover,a.text-danger:focus{color:#b52b27 !important}.text-light{color:#f8f9fa !important}a.text-light:hover,a.text-light:focus{color:#cbd3da !important}.text-dark{color:#343a40 !important}a.text-dark:hover,a.text-dark:focus{color:#121416 !important}.text-body{color:#343a40 !important}.text-muted{color:#868e96 !important}.text-black-50{color:rgba(0,0,0,0.5) !important}.text-white-50{color:rgba(255,255,255,0.5) !important}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.text-decoration-none{text-decoration:none !important}.text-break{word-wrap:break-word !important}.text-reset{color:inherit !important}.visible{visibility:visible !important}.invisible{visibility:hidden !important}@media print{*,*::before,*::after{text-shadow:none !important;box-shadow:none !important}a:not(.btn){text-decoration:underline}abbr[title]::after{content:\" (\" attr(title) \")\"}pre{white-space:pre-wrap !important}pre,blockquote{border:1px solid #adb5bd;page-break-inside:avoid}thead{display:table-header-group}tr,img{page-break-inside:avoid}p,h2,h3{orphans:3;widows:3}h2,h3{page-break-after:avoid}@page{size:a3}body{min-width:992px !important}.container{min-width:992px !important}.navbar{display:none}.badge{border:1px solid #000}.table{border-collapse:collapse !important}.table td,.table th{background-color:#fff !important}.table-bordered th,.table-bordered td{border:1px solid #ddd !important}.table-dark{color:inherit}.table-dark th,.table-dark td,.table-dark thead th,.table-dark tbody+tbody{border-color:rgba(0,0,0,0.1)}.table .thead-dark th{color:inherit;border-color:rgba(0,0,0,0.1)}}.navbar{font-size:0.930125rem}.navbar.bg-dark{background-color:#02B875 !important}.navbar.bg-light{background-color:#fff !important;border:1px solid rgba(0,0,0,0.1)}.navbar.bg-light.navbar-fixed-top{border-width:0 0 1px 0}.navbar.bg-light.navbar-fixed-bottom{border-width:1px 0 0 0}.btn{border-radius:1.078em}.btn-lg,.btn-group-lg>.btn{border-radius:2.688em}.btn-sm,.btn-group-sm>.btn{border-radius:0.844em}p{font-family:Georgia, Cambria, \"Times New Roman\", Times, serif}blockquote{font-style:italic}footer{font-size:0.930125rem}.lead{color:#868e96;font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"}table,.table{font-size:0.930125rem}table-primary,table-secondary,table-success,table-info,table-warning,table-danger,.table-primary,.table-secondary,.table-success,.table-info,.table-warning,.table-danger{color:#fff}.table-primary,.table-primary>th,.table-primary>td{background-color:#4582EC}.table-secondary,.table-secondary>th,.table-secondary>td{background-color:#adb5bd}.table-light,.table-light>th,.table-light>td{background-color:#f8f9fa}.table-dark,.table-dark>th,.table-dark>td{background-color:#343a40}.table-success,.table-success>th,.table-success>td{background-color:#02B875}.table-info,.table-info>th,.table-info>td{background-color:#17a2b8}.table-danger,.table-danger>th,.table-danger>td{background-color:#d9534f}.table-warning,.table-warning>th,.table-warning>td{background-color:#f0ad4e}.table-active,.table-active>th,.table-active>td{background-color:rgba(0,0,0,0.075)}.table-hover .table-primary:hover,.table-hover .table-primary:hover>th,.table-hover .table-primary:hover>td{background-color:#2e72ea}.table-hover .table-secondary:hover,.table-hover .table-secondary:hover>th,.table-hover .table-secondary:hover>td{background-color:#9fa8b2}.table-hover .table-light:hover,.table-hover .table-light:hover>th,.table-hover .table-light:hover>td{background-color:#e9ecef}.table-hover .table-dark:hover,.table-hover .table-dark:hover>th,.table-hover .table-dark:hover>td{background-color:#292d32}.table-hover .table-success:hover,.table-hover .table-success:hover>th,.table-hover .table-success:hover>td{background-color:#029f65}.table-hover .table-info:hover,.table-hover .table-info:hover>th,.table-hover .table-info:hover>td{background-color:#148ea1}.table-hover .table-danger:hover,.table-hover .table-danger:hover>th,.table-hover .table-danger:hover>td{background-color:#d43f3a}.table-hover .table-warning:hover,.table-hover .table-warning:hover>th,.table-hover .table-warning:hover>td{background-color:#eea236}.table-hover .table-active:hover,.table-hover .table-active:hover>th,.table-hover .table-active:hover>td{background-color:rgba(0,0,0,0.075)}.nav,.breadcrumb,.pagination{font-size:0.930125rem}.dropdown-menu{font-size:0.930125rem}.alert{color:#fff;font-size:0.930125rem}.alert,.alert p{font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"}.alert a,.alert .alert-link{color:#fff;font-weight:normal;text-decoration:underline}.alert-primary{background-color:#4582EC}.alert-secondary{background-color:#adb5bd}.alert-success{background-color:#02B875}.alert-info{background-color:#17a2b8}.alert-warning{background-color:#f0ad4e}.alert-danger{background-color:#d9534f}.alert-light{background-color:#f8f9fa}.alert-dark{background-color:#343a40}.alert-light,.alert-light a,.alert-light .alert-link{color:#343a40}.badge{vertical-align:bottom}.list-group{font-size:0.930125rem}\n", "",{"version":3,"sources":["/home/dinesh/work_dump/my_projects/space_blog/styles/bootstrap.min.css"],"names":[],"mappings":"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","file":"bootstrap.min.css","sourcesContent":["/*!\n * Bootswatch v4.5.0\n * Homepage: https://bootswatch.com\n * Copyright 2012-2020 Thomas Park\n * Licensed under MIT\n * Based on Bootstrap\n*//*!\n * Bootstrap v4.5.0 (https://getbootstrap.com/)\n * Copyright 2011-2020 The Bootstrap Authors\n * Copyright 2011-2020 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */:root{--blue: #4582EC;--indigo: #6610f2;--purple: #6f42c1;--pink: #e83e8c;--red: #d9534f;--orange: #fd7e14;--yellow: #f0ad4e;--green: #02B875;--teal: #20c997;--cyan: #17a2b8;--white: #fff;--gray: #868e96;--gray-dark: #343a40;--primary: #4582EC;--secondary: #adb5bd;--success: #02B875;--info: #17a2b8;--warning: #f0ad4e;--danger: #d9534f;--light: #f8f9fa;--dark: #343a40;--breakpoint-xs: 0;--breakpoint-sm: 576px;--breakpoint-md: 768px;--breakpoint-lg: 992px;--breakpoint-xl: 1200px;--font-family-sans-serif: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";--font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace}*,*::before,*::after{-webkit-box-sizing:border-box;box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0)}article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}body{margin:0;font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";font-size:1.063rem;font-weight:400;line-height:1.5;color:#343a40;text-align:left;background-color:#fff}[tabindex=\"-1\"]:focus:not(:focus-visible){outline:0 !important}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:0.5rem}p{margin-top:0;margin-bottom:1rem}abbr[title],abbr[data-original-title]{text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;border-bottom:0;text-decoration-skip-ink:none}address{margin-bottom:1rem;font-style:normal;line-height:inherit}ol,ul,dl{margin-top:0;margin-bottom:1rem}ol ol,ul ul,ol ul,ul ol{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}a{color:#4582EC;text-decoration:none;background-color:transparent}a:hover{color:#1559cf;text-decoration:underline}a:not([href]){color:inherit;text-decoration:none}a:not([href]):hover{color:inherit;text-decoration:none}pre,code,kbd,samp{font-family:SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;font-size:1em}pre{margin-top:0;margin-bottom:1rem;overflow:auto;-ms-overflow-style:scrollbar}figure{margin:0 0 1rem}img{vertical-align:middle;border-style:none}svg{overflow:hidden;vertical-align:middle}table{border-collapse:collapse}caption{padding-top:0.75rem;padding-bottom:0.75rem;color:#868e96;text-align:left;caption-side:bottom}th{text-align:inherit}label{display:inline-block;margin-bottom:0.5rem}button{border-radius:0}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}input,button,select,optgroup,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button,select{text-transform:none}[role=\"button\"]{cursor:pointer}select{word-wrap:normal}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button:not(:disabled),[type=\"button\"]:not(:disabled),[type=\"reset\"]:not(:disabled),[type=\"submit\"]:not(:disabled){cursor:pointer}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{padding:0;border-style:none}input[type=\"radio\"],input[type=\"checkbox\"]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}textarea{overflow:auto;resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{display:block;width:100%;max-width:100%;padding:0;margin-bottom:.5rem;font-size:1.5rem;line-height:inherit;color:inherit;white-space:normal}progress{vertical-align:baseline}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{outline-offset:-2px;-webkit-appearance:none}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}output{display:inline-block}summary{display:list-item;cursor:pointer}template{display:none}[hidden]{display:none !important}h1,h2,h3,h4,h5,h6,.h1,.h2,.h3,.h4,.h5,.h6{margin-bottom:0.5rem;font-weight:700;line-height:1.2}h1,.h1{font-size:2.6575rem}h2,.h2{font-size:2.126rem}h3,.h3{font-size:1.86025rem}h4,.h4{font-size:1.5945rem}h5,.h5{font-size:1.32875rem}h6,.h6{font-size:1.063rem}.lead{font-size:1.32875rem;font-weight:300}.display-1{font-size:6rem;font-weight:300;line-height:1.2}.display-2{font-size:5.5rem;font-weight:300;line-height:1.2}.display-3{font-size:4.5rem;font-weight:300;line-height:1.2}.display-4{font-size:3.5rem;font-weight:300;line-height:1.2}hr{margin-top:1rem;margin-bottom:1rem;border:0;border-top:1px solid rgba(0,0,0,0.1)}small,.small{font-size:80%;font-weight:400}mark,.mark{padding:0.2em;background-color:#fcf8e3}.list-unstyled{padding-left:0;list-style:none}.list-inline{padding-left:0;list-style:none}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:0.5rem}.initialism{font-size:90%;text-transform:uppercase}.blockquote{margin-bottom:1rem;font-size:1.32875rem}.blockquote-footer{display:block;font-size:80%;color:#868e96}.blockquote-footer::before{content:\"\\2014\\00A0\"}.img-fluid{max-width:100%;height:auto}.img-thumbnail{padding:0.25rem;background-color:#fff;border:1px solid #ddd;border-radius:0.25rem;max-width:100%;height:auto}.figure{display:inline-block}.figure-img{margin-bottom:0.5rem;line-height:1}.figure-caption{font-size:90%;color:#868e96}code{font-size:87.5%;color:#e83e8c;word-wrap:break-word}a>code{color:inherit}kbd{padding:0.2rem 0.4rem;font-size:87.5%;color:#fff;background-color:#212529;border-radius:0.2rem}kbd kbd{padding:0;font-size:100%;font-weight:700}pre{display:block;font-size:87.5%;color:#212529}pre code{font-size:inherit;color:inherit;word-break:normal}.pre-scrollable{max-height:340px;overflow-y:scroll}.container{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width: 576px){.container{max-width:540px}}@media (min-width: 768px){.container{max-width:720px}}@media (min-width: 992px){.container{max-width:960px}}@media (min-width: 1200px){.container{max-width:1140px}}.container-fluid,.container-sm,.container-md,.container-lg,.container-xl{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width: 576px){.container,.container-sm{max-width:540px}}@media (min-width: 768px){.container,.container-sm,.container-md{max-width:720px}}@media (min-width: 992px){.container,.container-sm,.container-md,.container-lg{max-width:960px}}@media (min-width: 1200px){.container,.container-sm,.container-md,.container-lg,.container-xl{max-width:1140px}}.row{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.no-gutters{margin-right:0;margin-left:0}.no-gutters>.col,.no-gutters>[class*=\"col-\"]{padding-right:0;padding-left:0}.col-1,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-10,.col-11,.col-12,.col,.col-auto,.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm,.col-sm-auto,.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12,.col-md,.col-md-auto,.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg,.col-lg-auto,.col-xl-1,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl,.col-xl-auto{position:relative;width:100%;padding-right:15px;padding-left:15px}.col{-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;min-width:0;max-width:100%}.row-cols-1>*{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.row-cols-2>*{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.row-cols-3>*{-webkit-box-flex:0;-ms-flex:0 0 33.3333333333%;flex:0 0 33.3333333333%;max-width:33.3333333333%}.row-cols-4>*{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.row-cols-5>*{-webkit-box-flex:0;-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%}.row-cols-6>*{-webkit-box-flex:0;-ms-flex:0 0 16.6666666667%;flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-auto{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.col-1{-webkit-box-flex:0;-ms-flex:0 0 8.3333333333%;flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-2{-webkit-box-flex:0;-ms-flex:0 0 16.6666666667%;flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-3{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-4{-webkit-box-flex:0;-ms-flex:0 0 33.3333333333%;flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-5{-webkit-box-flex:0;-ms-flex:0 0 41.6666666667%;flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-6{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-7{-webkit-box-flex:0;-ms-flex:0 0 58.3333333333%;flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-8{-webkit-box-flex:0;-ms-flex:0 0 66.6666666667%;flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-9{-webkit-box-flex:0;-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-10{-webkit-box-flex:0;-ms-flex:0 0 83.3333333333%;flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-11{-webkit-box-flex:0;-ms-flex:0 0 91.6666666667%;flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-12{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-first{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.order-last{-webkit-box-ordinal-group:14;-ms-flex-order:13;order:13}.order-0{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}.order-1{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.order-2{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.order-3{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.order-4{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}.order-5{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5}.order-6{-webkit-box-ordinal-group:7;-ms-flex-order:6;order:6}.order-7{-webkit-box-ordinal-group:8;-ms-flex-order:7;order:7}.order-8{-webkit-box-ordinal-group:9;-ms-flex-order:8;order:8}.order-9{-webkit-box-ordinal-group:10;-ms-flex-order:9;order:9}.order-10{-webkit-box-ordinal-group:11;-ms-flex-order:10;order:10}.order-11{-webkit-box-ordinal-group:12;-ms-flex-order:11;order:11}.order-12{-webkit-box-ordinal-group:13;-ms-flex-order:12;order:12}.offset-1{margin-left:8.3333333333%}.offset-2{margin-left:16.6666666667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.3333333333%}.offset-5{margin-left:41.6666666667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.3333333333%}.offset-8{margin-left:66.6666666667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.3333333333%}.offset-11{margin-left:91.6666666667%}@media (min-width: 576px){.col-sm{-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;min-width:0;max-width:100%}.row-cols-sm-1>*{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.row-cols-sm-2>*{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.row-cols-sm-3>*{-webkit-box-flex:0;-ms-flex:0 0 33.3333333333%;flex:0 0 33.3333333333%;max-width:33.3333333333%}.row-cols-sm-4>*{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.row-cols-sm-5>*{-webkit-box-flex:0;-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%}.row-cols-sm-6>*{-webkit-box-flex:0;-ms-flex:0 0 16.6666666667%;flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-sm-auto{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.col-sm-1{-webkit-box-flex:0;-ms-flex:0 0 8.3333333333%;flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-sm-2{-webkit-box-flex:0;-ms-flex:0 0 16.6666666667%;flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-sm-3{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-sm-4{-webkit-box-flex:0;-ms-flex:0 0 33.3333333333%;flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-sm-5{-webkit-box-flex:0;-ms-flex:0 0 41.6666666667%;flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-sm-6{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-sm-7{-webkit-box-flex:0;-ms-flex:0 0 58.3333333333%;flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-sm-8{-webkit-box-flex:0;-ms-flex:0 0 66.6666666667%;flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-sm-9{-webkit-box-flex:0;-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-sm-10{-webkit-box-flex:0;-ms-flex:0 0 83.3333333333%;flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-sm-11{-webkit-box-flex:0;-ms-flex:0 0 91.6666666667%;flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-sm-12{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-sm-first{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.order-sm-last{-webkit-box-ordinal-group:14;-ms-flex-order:13;order:13}.order-sm-0{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}.order-sm-1{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.order-sm-2{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.order-sm-3{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.order-sm-4{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}.order-sm-5{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5}.order-sm-6{-webkit-box-ordinal-group:7;-ms-flex-order:6;order:6}.order-sm-7{-webkit-box-ordinal-group:8;-ms-flex-order:7;order:7}.order-sm-8{-webkit-box-ordinal-group:9;-ms-flex-order:8;order:8}.order-sm-9{-webkit-box-ordinal-group:10;-ms-flex-order:9;order:9}.order-sm-10{-webkit-box-ordinal-group:11;-ms-flex-order:10;order:10}.order-sm-11{-webkit-box-ordinal-group:12;-ms-flex-order:11;order:11}.order-sm-12{-webkit-box-ordinal-group:13;-ms-flex-order:12;order:12}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.3333333333%}.offset-sm-2{margin-left:16.6666666667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.3333333333%}.offset-sm-5{margin-left:41.6666666667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.3333333333%}.offset-sm-8{margin-left:66.6666666667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.3333333333%}.offset-sm-11{margin-left:91.6666666667%}}@media (min-width: 768px){.col-md{-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;min-width:0;max-width:100%}.row-cols-md-1>*{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.row-cols-md-2>*{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.row-cols-md-3>*{-webkit-box-flex:0;-ms-flex:0 0 33.3333333333%;flex:0 0 33.3333333333%;max-width:33.3333333333%}.row-cols-md-4>*{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.row-cols-md-5>*{-webkit-box-flex:0;-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%}.row-cols-md-6>*{-webkit-box-flex:0;-ms-flex:0 0 16.6666666667%;flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-md-auto{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.col-md-1{-webkit-box-flex:0;-ms-flex:0 0 8.3333333333%;flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-md-2{-webkit-box-flex:0;-ms-flex:0 0 16.6666666667%;flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-md-3{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-md-4{-webkit-box-flex:0;-ms-flex:0 0 33.3333333333%;flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-md-5{-webkit-box-flex:0;-ms-flex:0 0 41.6666666667%;flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-md-6{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-md-7{-webkit-box-flex:0;-ms-flex:0 0 58.3333333333%;flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-md-8{-webkit-box-flex:0;-ms-flex:0 0 66.6666666667%;flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-md-9{-webkit-box-flex:0;-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-md-10{-webkit-box-flex:0;-ms-flex:0 0 83.3333333333%;flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-md-11{-webkit-box-flex:0;-ms-flex:0 0 91.6666666667%;flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-md-12{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-md-first{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.order-md-last{-webkit-box-ordinal-group:14;-ms-flex-order:13;order:13}.order-md-0{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}.order-md-1{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.order-md-2{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.order-md-3{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.order-md-4{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}.order-md-5{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5}.order-md-6{-webkit-box-ordinal-group:7;-ms-flex-order:6;order:6}.order-md-7{-webkit-box-ordinal-group:8;-ms-flex-order:7;order:7}.order-md-8{-webkit-box-ordinal-group:9;-ms-flex-order:8;order:8}.order-md-9{-webkit-box-ordinal-group:10;-ms-flex-order:9;order:9}.order-md-10{-webkit-box-ordinal-group:11;-ms-flex-order:10;order:10}.order-md-11{-webkit-box-ordinal-group:12;-ms-flex-order:11;order:11}.order-md-12{-webkit-box-ordinal-group:13;-ms-flex-order:12;order:12}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.3333333333%}.offset-md-2{margin-left:16.6666666667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.3333333333%}.offset-md-5{margin-left:41.6666666667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.3333333333%}.offset-md-8{margin-left:66.6666666667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.3333333333%}.offset-md-11{margin-left:91.6666666667%}}@media (min-width: 992px){.col-lg{-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;min-width:0;max-width:100%}.row-cols-lg-1>*{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.row-cols-lg-2>*{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.row-cols-lg-3>*{-webkit-box-flex:0;-ms-flex:0 0 33.3333333333%;flex:0 0 33.3333333333%;max-width:33.3333333333%}.row-cols-lg-4>*{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.row-cols-lg-5>*{-webkit-box-flex:0;-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%}.row-cols-lg-6>*{-webkit-box-flex:0;-ms-flex:0 0 16.6666666667%;flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-lg-auto{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.col-lg-1{-webkit-box-flex:0;-ms-flex:0 0 8.3333333333%;flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-lg-2{-webkit-box-flex:0;-ms-flex:0 0 16.6666666667%;flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-lg-3{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-lg-4{-webkit-box-flex:0;-ms-flex:0 0 33.3333333333%;flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-lg-5{-webkit-box-flex:0;-ms-flex:0 0 41.6666666667%;flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-lg-6{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-lg-7{-webkit-box-flex:0;-ms-flex:0 0 58.3333333333%;flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-lg-8{-webkit-box-flex:0;-ms-flex:0 0 66.6666666667%;flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-lg-9{-webkit-box-flex:0;-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-lg-10{-webkit-box-flex:0;-ms-flex:0 0 83.3333333333%;flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-lg-11{-webkit-box-flex:0;-ms-flex:0 0 91.6666666667%;flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-lg-12{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-lg-first{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.order-lg-last{-webkit-box-ordinal-group:14;-ms-flex-order:13;order:13}.order-lg-0{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}.order-lg-1{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.order-lg-2{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.order-lg-3{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.order-lg-4{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}.order-lg-5{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5}.order-lg-6{-webkit-box-ordinal-group:7;-ms-flex-order:6;order:6}.order-lg-7{-webkit-box-ordinal-group:8;-ms-flex-order:7;order:7}.order-lg-8{-webkit-box-ordinal-group:9;-ms-flex-order:8;order:8}.order-lg-9{-webkit-box-ordinal-group:10;-ms-flex-order:9;order:9}.order-lg-10{-webkit-box-ordinal-group:11;-ms-flex-order:10;order:10}.order-lg-11{-webkit-box-ordinal-group:12;-ms-flex-order:11;order:11}.order-lg-12{-webkit-box-ordinal-group:13;-ms-flex-order:12;order:12}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.3333333333%}.offset-lg-2{margin-left:16.6666666667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.3333333333%}.offset-lg-5{margin-left:41.6666666667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.3333333333%}.offset-lg-8{margin-left:66.6666666667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.3333333333%}.offset-lg-11{margin-left:91.6666666667%}}@media (min-width: 1200px){.col-xl{-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;min-width:0;max-width:100%}.row-cols-xl-1>*{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.row-cols-xl-2>*{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.row-cols-xl-3>*{-webkit-box-flex:0;-ms-flex:0 0 33.3333333333%;flex:0 0 33.3333333333%;max-width:33.3333333333%}.row-cols-xl-4>*{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.row-cols-xl-5>*{-webkit-box-flex:0;-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%}.row-cols-xl-6>*{-webkit-box-flex:0;-ms-flex:0 0 16.6666666667%;flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-xl-auto{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.col-xl-1{-webkit-box-flex:0;-ms-flex:0 0 8.3333333333%;flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-xl-2{-webkit-box-flex:0;-ms-flex:0 0 16.6666666667%;flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-xl-3{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-xl-4{-webkit-box-flex:0;-ms-flex:0 0 33.3333333333%;flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-xl-5{-webkit-box-flex:0;-ms-flex:0 0 41.6666666667%;flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-xl-6{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-xl-7{-webkit-box-flex:0;-ms-flex:0 0 58.3333333333%;flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-xl-8{-webkit-box-flex:0;-ms-flex:0 0 66.6666666667%;flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-xl-9{-webkit-box-flex:0;-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-xl-10{-webkit-box-flex:0;-ms-flex:0 0 83.3333333333%;flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-xl-11{-webkit-box-flex:0;-ms-flex:0 0 91.6666666667%;flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-xl-12{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-xl-first{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.order-xl-last{-webkit-box-ordinal-group:14;-ms-flex-order:13;order:13}.order-xl-0{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}.order-xl-1{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.order-xl-2{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.order-xl-3{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.order-xl-4{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}.order-xl-5{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5}.order-xl-6{-webkit-box-ordinal-group:7;-ms-flex-order:6;order:6}.order-xl-7{-webkit-box-ordinal-group:8;-ms-flex-order:7;order:7}.order-xl-8{-webkit-box-ordinal-group:9;-ms-flex-order:8;order:8}.order-xl-9{-webkit-box-ordinal-group:10;-ms-flex-order:9;order:9}.order-xl-10{-webkit-box-ordinal-group:11;-ms-flex-order:10;order:10}.order-xl-11{-webkit-box-ordinal-group:12;-ms-flex-order:11;order:11}.order-xl-12{-webkit-box-ordinal-group:13;-ms-flex-order:12;order:12}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.3333333333%}.offset-xl-2{margin-left:16.6666666667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.3333333333%}.offset-xl-5{margin-left:41.6666666667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.3333333333%}.offset-xl-8{margin-left:66.6666666667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.3333333333%}.offset-xl-11{margin-left:91.6666666667%}}.table{width:100%;margin-bottom:1rem;color:#343a40}.table th,.table td{padding:0.75rem;vertical-align:top;border-top:1px solid rgba(0,0,0,0.1)}.table thead th{vertical-align:bottom;border-bottom:2px solid rgba(0,0,0,0.1)}.table tbody+tbody{border-top:2px solid rgba(0,0,0,0.1)}.table-sm th,.table-sm td{padding:0.3rem}.table-bordered{border:1px solid rgba(0,0,0,0.1)}.table-bordered th,.table-bordered td{border:1px solid rgba(0,0,0,0.1)}.table-bordered thead th,.table-bordered thead td{border-bottom-width:2px}.table-borderless th,.table-borderless td,.table-borderless thead th,.table-borderless tbody+tbody{border:0}.table-striped tbody tr:nth-of-type(odd){background-color:rgba(0,0,0,0.05)}.table-hover tbody tr:hover{color:#343a40;background-color:rgba(0,0,0,0.075)}.table-primary,.table-primary>th,.table-primary>td{background-color:#cbdcfa}.table-primary th,.table-primary td,.table-primary thead th,.table-primary tbody+tbody{border-color:#9ebef5}.table-hover .table-primary:hover{background-color:#b4ccf8}.table-hover .table-primary:hover>td,.table-hover .table-primary:hover>th{background-color:#b4ccf8}.table-secondary,.table-secondary>th,.table-secondary>td{background-color:#e8eaed}.table-secondary th,.table-secondary td,.table-secondary thead th,.table-secondary tbody+tbody{border-color:#d4d9dd}.table-hover .table-secondary:hover{background-color:#dadde2}.table-hover .table-secondary:hover>td,.table-hover .table-secondary:hover>th{background-color:#dadde2}.table-success,.table-success>th,.table-success>td{background-color:#b8ebd8}.table-success th,.table-success td,.table-success thead th,.table-success tbody+tbody{border-color:#7bdab7}.table-hover .table-success:hover{background-color:#a4e5cd}.table-hover .table-success:hover>td,.table-hover .table-success:hover>th{background-color:#a4e5cd}.table-info,.table-info>th,.table-info>td{background-color:#bee5eb}.table-info th,.table-info td,.table-info thead th,.table-info tbody+tbody{border-color:#86cfda}.table-hover .table-info:hover{background-color:#abdde5}.table-hover .table-info:hover>td,.table-hover .table-info:hover>th{background-color:#abdde5}.table-warning,.table-warning>th,.table-warning>td{background-color:#fbe8cd}.table-warning th,.table-warning td,.table-warning thead th,.table-warning tbody+tbody{border-color:#f7d4a3}.table-hover .table-warning:hover{background-color:#f9ddb5}.table-hover .table-warning:hover>td,.table-hover .table-warning:hover>th{background-color:#f9ddb5}.table-danger,.table-danger>th,.table-danger>td{background-color:#f4cfce}.table-danger th,.table-danger td,.table-danger thead th,.table-danger tbody+tbody{border-color:#eba6a3}.table-hover .table-danger:hover{background-color:#efbbb9}.table-hover .table-danger:hover>td,.table-hover .table-danger:hover>th{background-color:#efbbb9}.table-light,.table-light>th,.table-light>td{background-color:#fdfdfe}.table-light th,.table-light td,.table-light thead th,.table-light tbody+tbody{border-color:#fbfcfc}.table-hover .table-light:hover{background-color:#ececf6}.table-hover .table-light:hover>td,.table-hover .table-light:hover>th{background-color:#ececf6}.table-dark,.table-dark>th,.table-dark>td{background-color:#c6c8ca}.table-dark th,.table-dark td,.table-dark thead th,.table-dark tbody+tbody{border-color:#95999c}.table-hover .table-dark:hover{background-color:#b9bbbe}.table-hover .table-dark:hover>td,.table-hover .table-dark:hover>th{background-color:#b9bbbe}.table-active,.table-active>th,.table-active>td{background-color:rgba(0,0,0,0.075)}.table-hover .table-active:hover{background-color:rgba(0,0,0,0.075)}.table-hover .table-active:hover>td,.table-hover .table-active:hover>th{background-color:rgba(0,0,0,0.075)}.table .thead-dark th{color:#fff;background-color:#343a40;border-color:#454d55}.table .thead-light th{color:#495057;background-color:#e9ecef;border-color:rgba(0,0,0,0.1)}.table-dark{color:#fff;background-color:#343a40}.table-dark th,.table-dark td,.table-dark thead th{border-color:#454d55}.table-dark.table-bordered{border:0}.table-dark.table-striped tbody tr:nth-of-type(odd){background-color:rgba(255,255,255,0.05)}.table-dark.table-hover tbody tr:hover{color:#fff;background-color:rgba(255,255,255,0.075)}@media (max-width: 575.98px){.table-responsive-sm{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-sm>.table-bordered{border:0}}@media (max-width: 767.98px){.table-responsive-md{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-md>.table-bordered{border:0}}@media (max-width: 991.98px){.table-responsive-lg{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-lg>.table-bordered{border:0}}@media (max-width: 1199.98px){.table-responsive-xl{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-xl>.table-bordered{border:0}}.table-responsive{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive>.table-bordered{border:0}.form-control{display:block;width:100%;height:calc(1.5em + 1rem + 2px);padding:0.5rem 1.1rem;font-size:1.063rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,0.1);border-radius:0.25rem;-webkit-transition:border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;transition:border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;transition:border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;transition:border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}@media (prefers-reduced-motion: reduce){.form-control{-webkit-transition:none;transition:none}}.form-control::-ms-expand{background-color:transparent;border:0}.form-control:-moz-focusring{color:transparent;text-shadow:0 0 0 #495057}.form-control:focus{color:#495057;background-color:#fff;border-color:#b9d0f8;outline:0;-webkit-box-shadow:0 0 0 0.2rem rgba(69,130,236,0.25);box-shadow:0 0 0 0.2rem rgba(69,130,236,0.25)}.form-control::-webkit-input-placeholder{color:#868e96;opacity:1}.form-control::-ms-input-placeholder{color:#868e96;opacity:1}.form-control::placeholder{color:#868e96;opacity:1}.form-control:disabled,.form-control[readonly]{background-color:#e9ecef;opacity:1}input[type=\"date\"].form-control,input[type=\"time\"].form-control,input[type=\"datetime-local\"].form-control,input[type=\"month\"].form-control{-webkit-appearance:none;-moz-appearance:none;appearance:none}select.form-control:focus::-ms-value{color:#495057;background-color:#fff}.form-control-file,.form-control-range{display:block;width:100%}.col-form-label{padding-top:calc(0.5rem + 1px);padding-bottom:calc(0.5rem + 1px);margin-bottom:0;font-size:inherit;line-height:1.5}.col-form-label-lg{padding-top:calc(0.5rem + 1px);padding-bottom:calc(0.5rem + 1px);font-size:1.32875rem;line-height:1.5}.col-form-label-sm{padding-top:calc(0.25rem + 1px);padding-bottom:calc(0.25rem + 1px);font-size:0.930125rem;line-height:1.5}.form-control-plaintext{display:block;width:100%;padding:0.5rem 0;margin-bottom:0;font-size:1.063rem;line-height:1.5;color:#343a40;background-color:transparent;border:solid transparent;border-width:1px 0}.form-control-plaintext.form-control-sm,.form-control-plaintext.form-control-lg{padding-right:0;padding-left:0}.form-control-sm{height:calc(1.5em + 0.5rem + 2px);padding:0.25rem 0.5rem;font-size:0.930125rem;line-height:1.5;border-radius:0.2rem}.form-control-lg{height:calc(1.5em + 1rem + 2px);padding:0.5rem 1rem;font-size:1.32875rem;line-height:1.5;border-radius:0.3rem}select.form-control[size],select.form-control[multiple]{height:auto}textarea.form-control{height:auto}.form-group{margin-bottom:1rem}.form-text{display:block;margin-top:0.25rem}.form-row{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-5px;margin-left:-5px}.form-row>.col,.form-row>[class*=\"col-\"]{padding-right:5px;padding-left:5px}.form-check{position:relative;display:block;padding-left:1.25rem}.form-check-input{position:absolute;margin-top:0.3rem;margin-left:-1.25rem}.form-check-input[disabled] ~ .form-check-label,.form-check-input:disabled ~ .form-check-label{color:#868e96}.form-check-label{margin-bottom:0}.form-check-inline{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:0;margin-right:0.75rem}.form-check-inline .form-check-input{position:static;margin-top:0;margin-right:0.3125rem;margin-left:0}.valid-feedback{display:none;width:100%;margin-top:0.25rem;font-size:80%;color:#02B875}.valid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:0.25rem 0.5rem;margin-top:.1rem;font-size:0.6875rem;line-height:1.5;color:#fff;background-color:rgba(2,184,117,0.9);border-radius:0.25rem}.was-validated :valid ~ .valid-feedback,.was-validated :valid ~ .valid-tooltip,.is-valid ~ .valid-feedback,.is-valid ~ .valid-tooltip{display:block}.was-validated .form-control:valid,.form-control.is-valid{border-color:#02B875;padding-right:calc(1.5em + 1rem);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2302B875' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right calc(0.375em + 0.25rem) center;background-size:calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)}.was-validated .form-control:valid:focus,.form-control.is-valid:focus{border-color:#02B875;-webkit-box-shadow:0 0 0 0.2rem rgba(2,184,117,0.25);box-shadow:0 0 0 0.2rem rgba(2,184,117,0.25)}.was-validated textarea.form-control:valid,textarea.form-control.is-valid{padding-right:calc(1.5em + 1rem);background-position:top calc(0.375em + 0.25rem) right calc(0.375em + 0.25rem)}.was-validated .custom-select:valid,.custom-select.is-valid{border-color:#02B875;padding-right:calc(0.75em + 2.85rem);background:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") no-repeat right 1.1rem center/8px 10px,url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2302B875' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\") #fff no-repeat center right 2.1rem/calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)}.was-validated .custom-select:valid:focus,.custom-select.is-valid:focus{border-color:#02B875;-webkit-box-shadow:0 0 0 0.2rem rgba(2,184,117,0.25);box-shadow:0 0 0 0.2rem rgba(2,184,117,0.25)}.was-validated .form-check-input:valid ~ .form-check-label,.form-check-input.is-valid ~ .form-check-label{color:#02B875}.was-validated .form-check-input:valid ~ .valid-feedback,.was-validated .form-check-input:valid ~ .valid-tooltip,.form-check-input.is-valid ~ .valid-feedback,.form-check-input.is-valid ~ .valid-tooltip{display:block}.was-validated .custom-control-input:valid ~ .custom-control-label,.custom-control-input.is-valid ~ .custom-control-label{color:#02B875}.was-validated .custom-control-input:valid ~ .custom-control-label::before,.custom-control-input.is-valid ~ .custom-control-label::before{border-color:#02B875}.was-validated .custom-control-input:valid:checked ~ .custom-control-label::before,.custom-control-input.is-valid:checked ~ .custom-control-label::before{border-color:#03ea95;background-color:#03ea95}.was-validated .custom-control-input:valid:focus ~ .custom-control-label::before,.custom-control-input.is-valid:focus ~ .custom-control-label::before{-webkit-box-shadow:0 0 0 0.2rem rgba(2,184,117,0.25);box-shadow:0 0 0 0.2rem rgba(2,184,117,0.25)}.was-validated .custom-control-input:valid:focus:not(:checked) ~ .custom-control-label::before,.custom-control-input.is-valid:focus:not(:checked) ~ .custom-control-label::before{border-color:#02B875}.was-validated .custom-file-input:valid ~ .custom-file-label,.custom-file-input.is-valid ~ .custom-file-label{border-color:#02B875}.was-validated .custom-file-input:valid:focus ~ .custom-file-label,.custom-file-input.is-valid:focus ~ .custom-file-label{border-color:#02B875;-webkit-box-shadow:0 0 0 0.2rem rgba(2,184,117,0.25);box-shadow:0 0 0 0.2rem rgba(2,184,117,0.25)}.invalid-feedback{display:none;width:100%;margin-top:0.25rem;font-size:80%;color:#d9534f}.invalid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:0.25rem 0.5rem;margin-top:.1rem;font-size:0.6875rem;line-height:1.5;color:#fff;background-color:rgba(217,83,79,0.9);border-radius:0.25rem}.was-validated :invalid ~ .invalid-feedback,.was-validated :invalid ~ .invalid-tooltip,.is-invalid ~ .invalid-feedback,.is-invalid ~ .invalid-tooltip{display:block}.was-validated .form-control:invalid,.form-control.is-invalid{border-color:#d9534f;padding-right:calc(1.5em + 1rem);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23d9534f' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23d9534f' stroke='none'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right calc(0.375em + 0.25rem) center;background-size:calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)}.was-validated .form-control:invalid:focus,.form-control.is-invalid:focus{border-color:#d9534f;-webkit-box-shadow:0 0 0 0.2rem rgba(217,83,79,0.25);box-shadow:0 0 0 0.2rem rgba(217,83,79,0.25)}.was-validated textarea.form-control:invalid,textarea.form-control.is-invalid{padding-right:calc(1.5em + 1rem);background-position:top calc(0.375em + 0.25rem) right calc(0.375em + 0.25rem)}.was-validated .custom-select:invalid,.custom-select.is-invalid{border-color:#d9534f;padding-right:calc(0.75em + 2.85rem);background:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") no-repeat right 1.1rem center/8px 10px,url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23d9534f' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23d9534f' stroke='none'/%3e%3c/svg%3e\") #fff no-repeat center right 2.1rem/calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)}.was-validated .custom-select:invalid:focus,.custom-select.is-invalid:focus{border-color:#d9534f;-webkit-box-shadow:0 0 0 0.2rem rgba(217,83,79,0.25);box-shadow:0 0 0 0.2rem rgba(217,83,79,0.25)}.was-validated .form-check-input:invalid ~ .form-check-label,.form-check-input.is-invalid ~ .form-check-label{color:#d9534f}.was-validated .form-check-input:invalid ~ .invalid-feedback,.was-validated .form-check-input:invalid ~ .invalid-tooltip,.form-check-input.is-invalid ~ .invalid-feedback,.form-check-input.is-invalid ~ .invalid-tooltip{display:block}.was-validated .custom-control-input:invalid ~ .custom-control-label,.custom-control-input.is-invalid ~ .custom-control-label{color:#d9534f}.was-validated .custom-control-input:invalid ~ .custom-control-label::before,.custom-control-input.is-invalid ~ .custom-control-label::before{border-color:#d9534f}.was-validated .custom-control-input:invalid:checked ~ .custom-control-label::before,.custom-control-input.is-invalid:checked ~ .custom-control-label::before{border-color:#e27c79;background-color:#e27c79}.was-validated .custom-control-input:invalid:focus ~ .custom-control-label::before,.custom-control-input.is-invalid:focus ~ .custom-control-label::before{-webkit-box-shadow:0 0 0 0.2rem rgba(217,83,79,0.25);box-shadow:0 0 0 0.2rem rgba(217,83,79,0.25)}.was-validated .custom-control-input:invalid:focus:not(:checked) ~ .custom-control-label::before,.custom-control-input.is-invalid:focus:not(:checked) ~ .custom-control-label::before{border-color:#d9534f}.was-validated .custom-file-input:invalid ~ .custom-file-label,.custom-file-input.is-invalid ~ .custom-file-label{border-color:#d9534f}.was-validated .custom-file-input:invalid:focus ~ .custom-file-label,.custom-file-input.is-invalid:focus ~ .custom-file-label{border-color:#d9534f;-webkit-box-shadow:0 0 0 0.2rem rgba(217,83,79,0.25);box-shadow:0 0 0 0.2rem rgba(217,83,79,0.25)}.form-inline{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.form-inline .form-check{width:100%}@media (min-width: 576px){.form-inline label{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-bottom:0}.form-inline .form-group{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:0}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .form-control-plaintext{display:inline-block}.form-inline .input-group,.form-inline .custom-select{width:auto}.form-inline .form-check{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-left:0}.form-inline .form-check-input{position:relative;-ms-flex-negative:0;flex-shrink:0;margin-top:0;margin-right:0.25rem;margin-left:0}.form-inline .custom-control{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.form-inline .custom-control-label{margin-bottom:0}}.btn{display:inline-block;font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";font-weight:400;color:#343a40;text-align:center;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;border:1px solid transparent;padding:0.5rem 1.1rem;font-size:0.875rem;line-height:1.5;border-radius:0.25rem;-webkit-transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}@media (prefers-reduced-motion: reduce){.btn{-webkit-transition:none;transition:none}}.btn:hover{color:#343a40;text-decoration:none}.btn:focus,.btn.focus{outline:0;-webkit-box-shadow:0 0 0 0.2rem rgba(69,130,236,0.25);box-shadow:0 0 0 0.2rem rgba(69,130,236,0.25)}.btn.disabled,.btn:disabled{opacity:0.65}.btn:not(:disabled):not(.disabled){cursor:pointer}a.btn.disabled,fieldset:disabled a.btn{pointer-events:none}.btn-primary{color:#fff;background-color:#4582EC;border-color:#4582EC}.btn-primary:hover{color:#fff;background-color:#226be8;border-color:#1863e6}.btn-primary:focus,.btn-primary.focus{color:#fff;background-color:#226be8;border-color:#1863e6;-webkit-box-shadow:0 0 0 0.2rem rgba(97,149,239,0.5);box-shadow:0 0 0 0.2rem rgba(97,149,239,0.5)}.btn-primary.disabled,.btn-primary:disabled{color:#fff;background-color:#4582EC;border-color:#4582EC}.btn-primary:not(:disabled):not(.disabled):active,.btn-primary:not(:disabled):not(.disabled).active,.show>.btn-primary.dropdown-toggle{color:#fff;background-color:#1863e6;border-color:#165edb}.btn-primary:not(:disabled):not(.disabled):active:focus,.btn-primary:not(:disabled):not(.disabled).active:focus,.show>.btn-primary.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 0.2rem rgba(97,149,239,0.5);box-shadow:0 0 0 0.2rem rgba(97,149,239,0.5)}.btn-secondary{color:#fff;background-color:#adb5bd;border-color:#adb5bd}.btn-secondary:hover{color:#fff;background-color:#98a2ac;border-color:#919ca6}.btn-secondary:focus,.btn-secondary.focus{color:#fff;background-color:#98a2ac;border-color:#919ca6;-webkit-box-shadow:0 0 0 0.2rem rgba(185,192,199,0.5);box-shadow:0 0 0 0.2rem rgba(185,192,199,0.5)}.btn-secondary.disabled,.btn-secondary:disabled{color:#fff;background-color:#adb5bd;border-color:#adb5bd}.btn-secondary:not(:disabled):not(.disabled):active,.btn-secondary:not(:disabled):not(.disabled).active,.show>.btn-secondary.dropdown-toggle{color:#fff;background-color:#919ca6;border-color:#8a95a1}.btn-secondary:not(:disabled):not(.disabled):active:focus,.btn-secondary:not(:disabled):not(.disabled).active:focus,.show>.btn-secondary.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 0.2rem rgba(185,192,199,0.5);box-shadow:0 0 0 0.2rem rgba(185,192,199,0.5)}.btn-success{color:#fff;background-color:#02B875;border-color:#02B875}.btn-success:hover{color:#fff;background-color:#02925d;border-color:#018655}.btn-success:focus,.btn-success.focus{color:#fff;background-color:#02925d;border-color:#018655;-webkit-box-shadow:0 0 0 0.2rem rgba(40,195,138,0.5);box-shadow:0 0 0 0.2rem rgba(40,195,138,0.5)}.btn-success.disabled,.btn-success:disabled{color:#fff;background-color:#02B875;border-color:#02B875}.btn-success:not(:disabled):not(.disabled):active,.btn-success:not(:disabled):not(.disabled).active,.show>.btn-success.dropdown-toggle{color:#fff;background-color:#018655;border-color:#01794d}.btn-success:not(:disabled):not(.disabled):active:focus,.btn-success:not(:disabled):not(.disabled).active:focus,.show>.btn-success.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 0.2rem rgba(40,195,138,0.5);box-shadow:0 0 0 0.2rem rgba(40,195,138,0.5)}.btn-info{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-info:hover{color:#fff;background-color:#138496;border-color:#117a8b}.btn-info:focus,.btn-info.focus{color:#fff;background-color:#138496;border-color:#117a8b;-webkit-box-shadow:0 0 0 0.2rem rgba(58,176,195,0.5);box-shadow:0 0 0 0.2rem rgba(58,176,195,0.5)}.btn-info.disabled,.btn-info:disabled{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-info:not(:disabled):not(.disabled):active,.btn-info:not(:disabled):not(.disabled).active,.show>.btn-info.dropdown-toggle{color:#fff;background-color:#117a8b;border-color:#10707f}.btn-info:not(:disabled):not(.disabled):active:focus,.btn-info:not(:disabled):not(.disabled).active:focus,.show>.btn-info.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 0.2rem rgba(58,176,195,0.5);box-shadow:0 0 0 0.2rem rgba(58,176,195,0.5)}.btn-warning{color:#fff;background-color:#f0ad4e;border-color:#f0ad4e}.btn-warning:hover{color:#fff;background-color:#ed9d2b;border-color:#ec971f}.btn-warning:focus,.btn-warning.focus{color:#fff;background-color:#ed9d2b;border-color:#ec971f;-webkit-box-shadow:0 0 0 0.2rem rgba(242,185,105,0.5);box-shadow:0 0 0 0.2rem rgba(242,185,105,0.5)}.btn-warning.disabled,.btn-warning:disabled{color:#fff;background-color:#f0ad4e;border-color:#f0ad4e}.btn-warning:not(:disabled):not(.disabled):active,.btn-warning:not(:disabled):not(.disabled).active,.show>.btn-warning.dropdown-toggle{color:#fff;background-color:#ec971f;border-color:#ea9214}.btn-warning:not(:disabled):not(.disabled):active:focus,.btn-warning:not(:disabled):not(.disabled).active:focus,.show>.btn-warning.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 0.2rem rgba(242,185,105,0.5);box-shadow:0 0 0 0.2rem rgba(242,185,105,0.5)}.btn-danger{color:#fff;background-color:#d9534f;border-color:#d9534f}.btn-danger:hover{color:#fff;background-color:#d23430;border-color:#c9302c}.btn-danger:focus,.btn-danger.focus{color:#fff;background-color:#d23430;border-color:#c9302c;-webkit-box-shadow:0 0 0 0.2rem rgba(223,109,105,0.5);box-shadow:0 0 0 0.2rem rgba(223,109,105,0.5)}.btn-danger.disabled,.btn-danger:disabled{color:#fff;background-color:#d9534f;border-color:#d9534f}.btn-danger:not(:disabled):not(.disabled):active,.btn-danger:not(:disabled):not(.disabled).active,.show>.btn-danger.dropdown-toggle{color:#fff;background-color:#c9302c;border-color:#bf2e29}.btn-danger:not(:disabled):not(.disabled):active:focus,.btn-danger:not(:disabled):not(.disabled).active:focus,.show>.btn-danger.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 0.2rem rgba(223,109,105,0.5);box-shadow:0 0 0 0.2rem rgba(223,109,105,0.5)}.btn-light{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:hover{color:#212529;background-color:#e2e6ea;border-color:#dae0e5}.btn-light:focus,.btn-light.focus{color:#212529;background-color:#e2e6ea;border-color:#dae0e5;-webkit-box-shadow:0 0 0 0.2rem rgba(216,217,219,0.5);box-shadow:0 0 0 0.2rem rgba(216,217,219,0.5)}.btn-light.disabled,.btn-light:disabled{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:not(:disabled):not(.disabled):active,.btn-light:not(:disabled):not(.disabled).active,.show>.btn-light.dropdown-toggle{color:#212529;background-color:#dae0e5;border-color:#d3d9df}.btn-light:not(:disabled):not(.disabled):active:focus,.btn-light:not(:disabled):not(.disabled).active:focus,.show>.btn-light.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 0.2rem rgba(216,217,219,0.5);box-shadow:0 0 0 0.2rem rgba(216,217,219,0.5)}.btn-dark{color:#fff;background-color:#343a40;border-color:#343a40}.btn-dark:hover{color:#fff;background-color:#23272b;border-color:#1d2124}.btn-dark:focus,.btn-dark.focus{color:#fff;background-color:#23272b;border-color:#1d2124;-webkit-box-shadow:0 0 0 0.2rem rgba(82,88,93,0.5);box-shadow:0 0 0 0.2rem rgba(82,88,93,0.5)}.btn-dark.disabled,.btn-dark:disabled{color:#fff;background-color:#343a40;border-color:#343a40}.btn-dark:not(:disabled):not(.disabled):active,.btn-dark:not(:disabled):not(.disabled).active,.show>.btn-dark.dropdown-toggle{color:#fff;background-color:#1d2124;border-color:#171a1d}.btn-dark:not(:disabled):not(.disabled):active:focus,.btn-dark:not(:disabled):not(.disabled).active:focus,.show>.btn-dark.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 0.2rem rgba(82,88,93,0.5);box-shadow:0 0 0 0.2rem rgba(82,88,93,0.5)}.btn-outline-primary{color:#4582EC;border-color:#4582EC}.btn-outline-primary:hover{color:#fff;background-color:#4582EC;border-color:#4582EC}.btn-outline-primary:focus,.btn-outline-primary.focus{-webkit-box-shadow:0 0 0 0.2rem rgba(69,130,236,0.5);box-shadow:0 0 0 0.2rem rgba(69,130,236,0.5)}.btn-outline-primary.disabled,.btn-outline-primary:disabled{color:#4582EC;background-color:transparent}.btn-outline-primary:not(:disabled):not(.disabled):active,.btn-outline-primary:not(:disabled):not(.disabled).active,.show>.btn-outline-primary.dropdown-toggle{color:#fff;background-color:#4582EC;border-color:#4582EC}.btn-outline-primary:not(:disabled):not(.disabled):active:focus,.btn-outline-primary:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-primary.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 0.2rem rgba(69,130,236,0.5);box-shadow:0 0 0 0.2rem rgba(69,130,236,0.5)}.btn-outline-secondary{color:#adb5bd;border-color:#adb5bd}.btn-outline-secondary:hover{color:#fff;background-color:#adb5bd;border-color:#adb5bd}.btn-outline-secondary:focus,.btn-outline-secondary.focus{-webkit-box-shadow:0 0 0 0.2rem rgba(173,181,189,0.5);box-shadow:0 0 0 0.2rem rgba(173,181,189,0.5)}.btn-outline-secondary.disabled,.btn-outline-secondary:disabled{color:#adb5bd;background-color:transparent}.btn-outline-secondary:not(:disabled):not(.disabled):active,.btn-outline-secondary:not(:disabled):not(.disabled).active,.show>.btn-outline-secondary.dropdown-toggle{color:#fff;background-color:#adb5bd;border-color:#adb5bd}.btn-outline-secondary:not(:disabled):not(.disabled):active:focus,.btn-outline-secondary:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-secondary.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 0.2rem rgba(173,181,189,0.5);box-shadow:0 0 0 0.2rem rgba(173,181,189,0.5)}.btn-outline-success{color:#02B875;border-color:#02B875}.btn-outline-success:hover{color:#fff;background-color:#02B875;border-color:#02B875}.btn-outline-success:focus,.btn-outline-success.focus{-webkit-box-shadow:0 0 0 0.2rem rgba(2,184,117,0.5);box-shadow:0 0 0 0.2rem rgba(2,184,117,0.5)}.btn-outline-success.disabled,.btn-outline-success:disabled{color:#02B875;background-color:transparent}.btn-outline-success:not(:disabled):not(.disabled):active,.btn-outline-success:not(:disabled):not(.disabled).active,.show>.btn-outline-success.dropdown-toggle{color:#fff;background-color:#02B875;border-color:#02B875}.btn-outline-success:not(:disabled):not(.disabled):active:focus,.btn-outline-success:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-success.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 0.2rem rgba(2,184,117,0.5);box-shadow:0 0 0 0.2rem rgba(2,184,117,0.5)}.btn-outline-info{color:#17a2b8;border-color:#17a2b8}.btn-outline-info:hover{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-outline-info:focus,.btn-outline-info.focus{-webkit-box-shadow:0 0 0 0.2rem rgba(23,162,184,0.5);box-shadow:0 0 0 0.2rem rgba(23,162,184,0.5)}.btn-outline-info.disabled,.btn-outline-info:disabled{color:#17a2b8;background-color:transparent}.btn-outline-info:not(:disabled):not(.disabled):active,.btn-outline-info:not(:disabled):not(.disabled).active,.show>.btn-outline-info.dropdown-toggle{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-outline-info:not(:disabled):not(.disabled):active:focus,.btn-outline-info:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-info.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 0.2rem rgba(23,162,184,0.5);box-shadow:0 0 0 0.2rem rgba(23,162,184,0.5)}.btn-outline-warning{color:#f0ad4e;border-color:#f0ad4e}.btn-outline-warning:hover{color:#fff;background-color:#f0ad4e;border-color:#f0ad4e}.btn-outline-warning:focus,.btn-outline-warning.focus{-webkit-box-shadow:0 0 0 0.2rem rgba(240,173,78,0.5);box-shadow:0 0 0 0.2rem rgba(240,173,78,0.5)}.btn-outline-warning.disabled,.btn-outline-warning:disabled{color:#f0ad4e;background-color:transparent}.btn-outline-warning:not(:disabled):not(.disabled):active,.btn-outline-warning:not(:disabled):not(.disabled).active,.show>.btn-outline-warning.dropdown-toggle{color:#fff;background-color:#f0ad4e;border-color:#f0ad4e}.btn-outline-warning:not(:disabled):not(.disabled):active:focus,.btn-outline-warning:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-warning.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 0.2rem rgba(240,173,78,0.5);box-shadow:0 0 0 0.2rem rgba(240,173,78,0.5)}.btn-outline-danger{color:#d9534f;border-color:#d9534f}.btn-outline-danger:hover{color:#fff;background-color:#d9534f;border-color:#d9534f}.btn-outline-danger:focus,.btn-outline-danger.focus{-webkit-box-shadow:0 0 0 0.2rem rgba(217,83,79,0.5);box-shadow:0 0 0 0.2rem rgba(217,83,79,0.5)}.btn-outline-danger.disabled,.btn-outline-danger:disabled{color:#d9534f;background-color:transparent}.btn-outline-danger:not(:disabled):not(.disabled):active,.btn-outline-danger:not(:disabled):not(.disabled).active,.show>.btn-outline-danger.dropdown-toggle{color:#fff;background-color:#d9534f;border-color:#d9534f}.btn-outline-danger:not(:disabled):not(.disabled):active:focus,.btn-outline-danger:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-danger.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 0.2rem rgba(217,83,79,0.5);box-shadow:0 0 0 0.2rem rgba(217,83,79,0.5)}.btn-outline-light{color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:hover{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:focus,.btn-outline-light.focus{-webkit-box-shadow:0 0 0 0.2rem rgba(248,249,250,0.5);box-shadow:0 0 0 0.2rem rgba(248,249,250,0.5)}.btn-outline-light.disabled,.btn-outline-light:disabled{color:#f8f9fa;background-color:transparent}.btn-outline-light:not(:disabled):not(.disabled):active,.btn-outline-light:not(:disabled):not(.disabled).active,.show>.btn-outline-light.dropdown-toggle{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:not(:disabled):not(.disabled):active:focus,.btn-outline-light:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-light.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 0.2rem rgba(248,249,250,0.5);box-shadow:0 0 0 0.2rem rgba(248,249,250,0.5)}.btn-outline-dark{color:#343a40;border-color:#343a40}.btn-outline-dark:hover{color:#fff;background-color:#343a40;border-color:#343a40}.btn-outline-dark:focus,.btn-outline-dark.focus{-webkit-box-shadow:0 0 0 0.2rem rgba(52,58,64,0.5);box-shadow:0 0 0 0.2rem rgba(52,58,64,0.5)}.btn-outline-dark.disabled,.btn-outline-dark:disabled{color:#343a40;background-color:transparent}.btn-outline-dark:not(:disabled):not(.disabled):active,.btn-outline-dark:not(:disabled):not(.disabled).active,.show>.btn-outline-dark.dropdown-toggle{color:#fff;background-color:#343a40;border-color:#343a40}.btn-outline-dark:not(:disabled):not(.disabled):active:focus,.btn-outline-dark:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-dark.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 0.2rem rgba(52,58,64,0.5);box-shadow:0 0 0 0.2rem rgba(52,58,64,0.5)}.btn-link{font-weight:400;color:#4582EC;text-decoration:none}.btn-link:hover{color:#1559cf;text-decoration:underline}.btn-link:focus,.btn-link.focus{text-decoration:underline}.btn-link:disabled,.btn-link.disabled{color:#868e96;pointer-events:none}.btn-lg,.btn-group-lg>.btn{padding:0.5rem 1rem;font-size:1.32875rem;line-height:1.5;border-radius:0.3rem}.btn-sm,.btn-group-sm>.btn{padding:0.25rem 0.5rem;font-size:0.688rem;line-height:1.5;border-radius:0.2rem}.btn-block{display:block;width:100%}.btn-block+.btn-block{margin-top:0.5rem}input[type=\"submit\"].btn-block,input[type=\"reset\"].btn-block,input[type=\"button\"].btn-block{width:100%}.fade{-webkit-transition:opacity 0.15s linear;transition:opacity 0.15s linear}@media (prefers-reduced-motion: reduce){.fade{-webkit-transition:none;transition:none}}.fade:not(.show){opacity:0}.collapse:not(.show){display:none}.collapsing{position:relative;height:0;overflow:hidden;-webkit-transition:height 0.35s ease;transition:height 0.35s ease}@media (prefers-reduced-motion: reduce){.collapsing{-webkit-transition:none;transition:none}}.dropup,.dropright,.dropdown,.dropleft{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle::after{display:inline-block;margin-left:0.255em;vertical-align:0.255em;content:\"\";border-top:0.3em solid;border-right:0.3em solid transparent;border-bottom:0;border-left:0.3em solid transparent}.dropdown-toggle:empty::after{margin-left:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;padding:0.5rem 0;margin:0.125rem 0 0;font-size:1.063rem;color:#343a40;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,0.15);border-radius:0.25rem}.dropdown-menu-left{right:auto;left:0}.dropdown-menu-right{right:0;left:auto}@media (min-width: 576px){.dropdown-menu-sm-left{right:auto;left:0}.dropdown-menu-sm-right{right:0;left:auto}}@media (min-width: 768px){.dropdown-menu-md-left{right:auto;left:0}.dropdown-menu-md-right{right:0;left:auto}}@media (min-width: 992px){.dropdown-menu-lg-left{right:auto;left:0}.dropdown-menu-lg-right{right:0;left:auto}}@media (min-width: 1200px){.dropdown-menu-xl-left{right:auto;left:0}.dropdown-menu-xl-right{right:0;left:auto}}.dropup .dropdown-menu{top:auto;bottom:100%;margin-top:0;margin-bottom:0.125rem}.dropup .dropdown-toggle::after{display:inline-block;margin-left:0.255em;vertical-align:0.255em;content:\"\";border-top:0;border-right:0.3em solid transparent;border-bottom:0.3em solid;border-left:0.3em solid transparent}.dropup .dropdown-toggle:empty::after{margin-left:0}.dropright .dropdown-menu{top:0;right:auto;left:100%;margin-top:0;margin-left:0.125rem}.dropright .dropdown-toggle::after{display:inline-block;margin-left:0.255em;vertical-align:0.255em;content:\"\";border-top:0.3em solid transparent;border-right:0;border-bottom:0.3em solid transparent;border-left:0.3em solid}.dropright .dropdown-toggle:empty::after{margin-left:0}.dropright .dropdown-toggle::after{vertical-align:0}.dropleft .dropdown-menu{top:0;right:100%;left:auto;margin-top:0;margin-right:0.125rem}.dropleft .dropdown-toggle::after{display:inline-block;margin-left:0.255em;vertical-align:0.255em;content:\"\"}.dropleft .dropdown-toggle::after{display:none}.dropleft .dropdown-toggle::before{display:inline-block;margin-right:0.255em;vertical-align:0.255em;content:\"\";border-top:0.3em solid transparent;border-right:0.3em solid;border-bottom:0.3em solid transparent}.dropleft .dropdown-toggle:empty::after{margin-left:0}.dropleft .dropdown-toggle::before{vertical-align:0}.dropdown-menu[x-placement^=\"top\"],.dropdown-menu[x-placement^=\"right\"],.dropdown-menu[x-placement^=\"bottom\"],.dropdown-menu[x-placement^=\"left\"]{right:auto;bottom:auto}.dropdown-divider{height:0;margin:0.5rem 0;overflow:hidden;border-top:1px solid #e9ecef}.dropdown-item{display:block;width:100%;padding:0.25rem 1.5rem;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background-color:transparent;border:0}.dropdown-item:hover,.dropdown-item:focus{color:#16181b;text-decoration:none;background-color:#f8f9fa}.dropdown-item.active,.dropdown-item:active{color:#fff;text-decoration:none;background-color:#4582EC}.dropdown-item.disabled,.dropdown-item:disabled{color:#868e96;pointer-events:none;background-color:transparent}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:0.5rem 1.5rem;margin-bottom:0;font-size:0.930125rem;color:#868e96;white-space:nowrap}.dropdown-item-text{display:block;padding:0.25rem 1.5rem;color:#212529}.btn-group,.btn-group-vertical{position:relative;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle}.btn-group>.btn,.btn-group-vertical>.btn{position:relative;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto}.btn-group>.btn:hover,.btn-group-vertical>.btn:hover{z-index:1}.btn-group>.btn:focus,.btn-group>.btn:active,.btn-group>.btn.active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn.active{z-index:1}.btn-toolbar{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group>.btn:not(:first-child),.btn-group>.btn-group:not(:first-child){margin-left:-1px}.btn-group>.btn:not(:last-child):not(.dropdown-toggle),.btn-group>.btn-group:not(:last-child)>.btn{border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn:not(:first-child),.btn-group>.btn-group:not(:first-child)>.btn{border-top-left-radius:0;border-bottom-left-radius:0}.dropdown-toggle-split{padding-right:0.825rem;padding-left:0.825rem}.dropdown-toggle-split::after,.dropup .dropdown-toggle-split::after,.dropright .dropdown-toggle-split::after{margin-left:0}.dropleft .dropdown-toggle-split::before{margin-right:0}.btn-sm+.dropdown-toggle-split,.btn-group-sm>.btn+.dropdown-toggle-split{padding-right:0.375rem;padding-left:0.375rem}.btn-lg+.dropdown-toggle-split,.btn-group-lg>.btn+.dropdown-toggle-split{padding-right:0.75rem;padding-left:0.75rem}.btn-group-vertical{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group{width:100%}.btn-group-vertical>.btn:not(:first-child),.btn-group-vertical>.btn-group:not(:first-child){margin-top:-1px}.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle),.btn-group-vertical>.btn-group:not(:last-child)>.btn{border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn:not(:first-child),.btn-group-vertical>.btn-group:not(:first-child)>.btn{border-top-left-radius:0;border-top-right-radius:0}.btn-group-toggle>.btn,.btn-group-toggle>.btn-group>.btn{margin-bottom:0}.btn-group-toggle>.btn input[type=\"radio\"],.btn-group-toggle>.btn input[type=\"checkbox\"],.btn-group-toggle>.btn-group>.btn input[type=\"radio\"],.btn-group-toggle>.btn-group>.btn input[type=\"checkbox\"]{position:absolute;clip:rect(0, 0, 0, 0);pointer-events:none}.input-group{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;width:100%}.input-group>.form-control,.input-group>.form-control-plaintext,.input-group>.custom-select,.input-group>.custom-file{position:relative;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;width:1%;min-width:0;margin-bottom:0}.input-group>.form-control+.form-control,.input-group>.form-control+.custom-select,.input-group>.form-control+.custom-file,.input-group>.form-control-plaintext+.form-control,.input-group>.form-control-plaintext+.custom-select,.input-group>.form-control-plaintext+.custom-file,.input-group>.custom-select+.form-control,.input-group>.custom-select+.custom-select,.input-group>.custom-select+.custom-file,.input-group>.custom-file+.form-control,.input-group>.custom-file+.custom-select,.input-group>.custom-file+.custom-file{margin-left:-1px}.input-group>.form-control:focus,.input-group>.custom-select:focus,.input-group>.custom-file .custom-file-input:focus ~ .custom-file-label{z-index:3}.input-group>.custom-file .custom-file-input:focus{z-index:4}.input-group>.form-control:not(:last-child),.input-group>.custom-select:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.form-control:not(:first-child),.input-group>.custom-select:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.input-group>.custom-file{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.input-group>.custom-file:not(:last-child) .custom-file-label,.input-group>.custom-file:not(:last-child) .custom-file-label::after{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.custom-file:not(:first-child) .custom-file-label{border-top-left-radius:0;border-bottom-left-radius:0}.input-group-prepend,.input-group-append{display:-webkit-box;display:-ms-flexbox;display:flex}.input-group-prepend .btn,.input-group-append .btn{position:relative;z-index:2}.input-group-prepend .btn:focus,.input-group-append .btn:focus{z-index:3}.input-group-prepend .btn+.btn,.input-group-prepend .btn+.input-group-text,.input-group-prepend .input-group-text+.input-group-text,.input-group-prepend .input-group-text+.btn,.input-group-append .btn+.btn,.input-group-append .btn+.input-group-text,.input-group-append .input-group-text+.input-group-text,.input-group-append .input-group-text+.btn{margin-left:-1px}.input-group-prepend{margin-right:-1px}.input-group-append{margin-left:-1px}.input-group-text{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0.5rem 1.1rem;margin-bottom:0;font-size:1.063rem;font-weight:400;line-height:1.5;color:#495057;text-align:center;white-space:nowrap;background-color:#e9ecef;border:1px solid rgba(0,0,0,0.1);border-radius:0.25rem}.input-group-text input[type=\"radio\"],.input-group-text input[type=\"checkbox\"]{margin-top:0}.input-group-lg>.form-control:not(textarea),.input-group-lg>.custom-select{height:calc(1.5em + 1rem + 2px)}.input-group-lg>.form-control,.input-group-lg>.custom-select,.input-group-lg>.input-group-prepend>.input-group-text,.input-group-lg>.input-group-append>.input-group-text,.input-group-lg>.input-group-prepend>.btn,.input-group-lg>.input-group-append>.btn{padding:0.5rem 1rem;font-size:1.32875rem;line-height:1.5;border-radius:0.3rem}.input-group-sm>.form-control:not(textarea),.input-group-sm>.custom-select{height:calc(1.5em + 0.5rem + 2px)}.input-group-sm>.form-control,.input-group-sm>.custom-select,.input-group-sm>.input-group-prepend>.input-group-text,.input-group-sm>.input-group-append>.input-group-text,.input-group-sm>.input-group-prepend>.btn,.input-group-sm>.input-group-append>.btn{padding:0.25rem 0.5rem;font-size:0.930125rem;line-height:1.5;border-radius:0.2rem}.input-group-lg>.custom-select,.input-group-sm>.custom-select{padding-right:2.1rem}.input-group>.input-group-prepend>.btn,.input-group>.input-group-prepend>.input-group-text,.input-group>.input-group-append:not(:last-child)>.btn,.input-group>.input-group-append:not(:last-child)>.input-group-text,.input-group>.input-group-append:last-child>.btn:not(:last-child):not(.dropdown-toggle),.input-group>.input-group-append:last-child>.input-group-text:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.input-group-append>.btn,.input-group>.input-group-append>.input-group-text,.input-group>.input-group-prepend:not(:first-child)>.btn,.input-group>.input-group-prepend:not(:first-child)>.input-group-text,.input-group>.input-group-prepend:first-child>.btn:not(:first-child),.input-group>.input-group-prepend:first-child>.input-group-text:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.custom-control{position:relative;display:block;min-height:1.5945rem;padding-left:1.5rem}.custom-control-inline{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;margin-right:1rem}.custom-control-input{position:absolute;left:0;z-index:-1;width:1rem;height:1.29725rem;opacity:0}.custom-control-input:checked ~ .custom-control-label::before{color:#fff;border-color:#4582EC;background-color:#4582EC}.custom-control-input:focus ~ .custom-control-label::before{-webkit-box-shadow:0 0 0 0.2rem rgba(69,130,236,0.25);box-shadow:0 0 0 0.2rem rgba(69,130,236,0.25)}.custom-control-input:focus:not(:checked) ~ .custom-control-label::before{border-color:#b9d0f8}.custom-control-input:not(:disabled):active ~ .custom-control-label::before{color:#fff;background-color:#e7effd;border-color:#e7effd}.custom-control-input[disabled] ~ .custom-control-label,.custom-control-input:disabled ~ .custom-control-label{color:#868e96}.custom-control-input[disabled] ~ .custom-control-label::before,.custom-control-input:disabled ~ .custom-control-label::before{background-color:#e9ecef}.custom-control-label{position:relative;margin-bottom:0;vertical-align:top}.custom-control-label::before{position:absolute;top:0.29725rem;left:-1.5rem;display:block;width:1rem;height:1rem;pointer-events:none;content:\"\";background-color:#fff;border:#adb5bd solid 1px}.custom-control-label::after{position:absolute;top:0.29725rem;left:-1.5rem;display:block;width:1rem;height:1rem;content:\"\";background:no-repeat 50% / 50% 50%}.custom-checkbox .custom-control-label::before{border-radius:0.25rem}.custom-checkbox .custom-control-input:checked ~ .custom-control-label::after{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/%3e%3c/svg%3e\")}.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::before{border-color:#4582EC;background-color:#4582EC}.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::after{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3e%3cpath stroke='%23fff' d='M0 2h4'/%3e%3c/svg%3e\")}.custom-checkbox .custom-control-input:disabled:checked ~ .custom-control-label::before{background-color:rgba(69,130,236,0.5)}.custom-checkbox .custom-control-input:disabled:indeterminate ~ .custom-control-label::before{background-color:rgba(69,130,236,0.5)}.custom-radio .custom-control-label::before{border-radius:50%}.custom-radio .custom-control-input:checked ~ .custom-control-label::after{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")}.custom-radio .custom-control-input:disabled:checked ~ .custom-control-label::before{background-color:rgba(69,130,236,0.5)}.custom-switch{padding-left:2.25rem}.custom-switch .custom-control-label::before{left:-2.25rem;width:1.75rem;pointer-events:all;border-radius:0.5rem}.custom-switch .custom-control-label::after{top:calc(0.29725rem + 2px);left:calc(-2.25rem + 2px);width:calc(1rem - 4px);height:calc(1rem - 4px);background-color:#adb5bd;border-radius:0.5rem;-webkit-transition:background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-transform 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;transition:background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-transform 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;transition:transform 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;transition:transform 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-transform 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}@media (prefers-reduced-motion: reduce){.custom-switch .custom-control-label::after{-webkit-transition:none;transition:none}}.custom-switch .custom-control-input:checked ~ .custom-control-label::after{background-color:#fff;-webkit-transform:translateX(0.75rem);transform:translateX(0.75rem)}.custom-switch .custom-control-input:disabled:checked ~ .custom-control-label::before{background-color:rgba(69,130,236,0.5)}.custom-select{display:inline-block;width:100%;height:calc(1.5em + 1rem + 2px);padding:0.5rem 2.1rem 0.5rem 1.1rem;font-size:1.063rem;font-weight:400;line-height:1.5;color:#495057;vertical-align:middle;background:#fff url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") no-repeat right 1.1rem center/8px 10px;border:1px solid rgba(0,0,0,0.1);border-radius:0.25rem;-webkit-appearance:none;-moz-appearance:none;appearance:none}.custom-select:focus{border-color:#b9d0f8;outline:0;-webkit-box-shadow:0 0 0 0.2rem rgba(69,130,236,0.25);box-shadow:0 0 0 0.2rem rgba(69,130,236,0.25)}.custom-select:focus::-ms-value{color:#495057;background-color:#fff}.custom-select[multiple],.custom-select[size]:not([size=\"1\"]){height:auto;padding-right:1.1rem;background-image:none}.custom-select:disabled{color:#868e96;background-color:#e9ecef}.custom-select::-ms-expand{display:none}.custom-select:-moz-focusring{color:transparent;text-shadow:0 0 0 #495057}.custom-select-sm{height:calc(1.5em + 0.5rem + 2px);padding-top:0.25rem;padding-bottom:0.25rem;padding-left:0.5rem;font-size:0.930125rem}.custom-select-lg{height:calc(1.5em + 1rem + 2px);padding-top:0.5rem;padding-bottom:0.5rem;padding-left:1rem;font-size:1.32875rem}.custom-file{position:relative;display:inline-block;width:100%;height:calc(1.5em + 1rem + 2px);margin-bottom:0}.custom-file-input{position:relative;z-index:2;width:100%;height:calc(1.5em + 1rem + 2px);margin:0;opacity:0}.custom-file-input:focus ~ .custom-file-label{border-color:#b9d0f8;-webkit-box-shadow:0 0 0 0.2rem rgba(69,130,236,0.25);box-shadow:0 0 0 0.2rem rgba(69,130,236,0.25)}.custom-file-input[disabled] ~ .custom-file-label,.custom-file-input:disabled ~ .custom-file-label{background-color:#e9ecef}.custom-file-input:lang(en) ~ .custom-file-label::after{content:\"Browse\"}.custom-file-input ~ .custom-file-label[data-browse]::after{content:attr(data-browse)}.custom-file-label{position:absolute;top:0;right:0;left:0;z-index:1;height:calc(1.5em + 1rem + 2px);padding:0.5rem 1.1rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;border:1px solid rgba(0,0,0,0.1);border-radius:0.25rem}.custom-file-label::after{position:absolute;top:0;right:0;bottom:0;z-index:3;display:block;height:calc(1.5em + 1rem);padding:0.5rem 1.1rem;line-height:1.5;color:#495057;content:\"Browse\";background-color:#e9ecef;border-left:inherit;border-radius:0 0.25rem 0.25rem 0}.custom-range{width:100%;height:1.4rem;padding:0;background-color:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none}.custom-range:focus{outline:none}.custom-range:focus::-webkit-slider-thumb{-webkit-box-shadow:0 0 0 1px #fff,0 0 0 0.2rem rgba(69,130,236,0.25);box-shadow:0 0 0 1px #fff,0 0 0 0.2rem rgba(69,130,236,0.25)}.custom-range:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 0.2rem rgba(69,130,236,0.25)}.custom-range:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 0.2rem rgba(69,130,236,0.25)}.custom-range::-moz-focus-outer{border:0}.custom-range::-webkit-slider-thumb{width:1rem;height:1rem;margin-top:-0.25rem;background-color:#4582EC;border:0;border-radius:1rem;-webkit-transition:background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;transition:background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;transition:background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;transition:background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;-webkit-appearance:none;appearance:none}@media (prefers-reduced-motion: reduce){.custom-range::-webkit-slider-thumb{-webkit-transition:none;transition:none}}.custom-range::-webkit-slider-thumb:active{background-color:#e7effd}.custom-range::-webkit-slider-runnable-track{width:100%;height:0.5rem;color:transparent;cursor:pointer;background-color:#ddd;border-color:transparent;border-radius:1rem}.custom-range::-moz-range-thumb{width:1rem;height:1rem;background-color:#4582EC;border:0;border-radius:1rem;-webkit-transition:background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;transition:background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;transition:background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;transition:background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;-moz-appearance:none;appearance:none}@media (prefers-reduced-motion: reduce){.custom-range::-moz-range-thumb{-webkit-transition:none;transition:none}}.custom-range::-moz-range-thumb:active{background-color:#e7effd}.custom-range::-moz-range-track{width:100%;height:0.5rem;color:transparent;cursor:pointer;background-color:#ddd;border-color:transparent;border-radius:1rem}.custom-range::-ms-thumb{width:1rem;height:1rem;margin-top:0;margin-right:0.2rem;margin-left:0.2rem;background-color:#4582EC;border:0;border-radius:1rem;-webkit-transition:background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;transition:background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;transition:background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;transition:background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;appearance:none}@media (prefers-reduced-motion: reduce){.custom-range::-ms-thumb{-webkit-transition:none;transition:none}}.custom-range::-ms-thumb:active{background-color:#e7effd}.custom-range::-ms-track{width:100%;height:0.5rem;color:transparent;cursor:pointer;background-color:transparent;border-color:transparent;border-width:0.5rem}.custom-range::-ms-fill-lower{background-color:#ddd;border-radius:1rem}.custom-range::-ms-fill-upper{margin-right:15px;background-color:#ddd;border-radius:1rem}.custom-range:disabled::-webkit-slider-thumb{background-color:#adb5bd}.custom-range:disabled::-webkit-slider-runnable-track{cursor:default}.custom-range:disabled::-moz-range-thumb{background-color:#adb5bd}.custom-range:disabled::-moz-range-track{cursor:default}.custom-range:disabled::-ms-thumb{background-color:#adb5bd}.custom-control-label::before,.custom-file-label,.custom-select{-webkit-transition:background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;transition:background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;transition:background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;transition:background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}@media (prefers-reduced-motion: reduce){.custom-control-label::before,.custom-file-label,.custom-select{-webkit-transition:none;transition:none}}.nav{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-link{display:block;padding:0.5rem 1rem}.nav-link:hover,.nav-link:focus{text-decoration:none}.nav-link.disabled{color:#868e96;pointer-events:none;cursor:default}.nav-tabs{border-bottom:1px solid #ddd}.nav-tabs .nav-item{margin-bottom:-1px}.nav-tabs .nav-link{border:1px solid transparent;border-top-left-radius:0.25rem;border-top-right-radius:0.25rem}.nav-tabs .nav-link:hover,.nav-tabs .nav-link:focus{border-color:#e9ecef #e9ecef #ddd}.nav-tabs .nav-link.disabled{color:#868e96;background-color:transparent;border-color:transparent}.nav-tabs .nav-link.active,.nav-tabs .nav-item.show .nav-link{color:#495057;background-color:#fff;border-color:#ddd #ddd #fff}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0}.nav-pills .nav-link{border-radius:0.25rem}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{color:#fff;background-color:#4582EC}.nav-fill .nav-item{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;text-align:center}.nav-justified .nav-item{-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;text-align:center}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:0.5rem 1rem}.navbar .container,.navbar .container-fluid,.navbar .container-sm,.navbar .container-md,.navbar .container-lg,.navbar .container-xl{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.navbar-brand{display:inline-block;padding-top:0.3006875rem;padding-bottom:0.3006875rem;margin-right:1rem;font-size:1.32875rem;line-height:inherit;white-space:nowrap}.navbar-brand:hover,.navbar-brand:focus{text-decoration:none}.navbar-nav{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .nav-link{padding-right:0;padding-left:0}.navbar-nav .dropdown-menu{position:static;float:none}.navbar-text{display:inline-block;padding-top:0.5rem;padding-bottom:0.5rem}.navbar-collapse{-ms-flex-preferred-size:100%;flex-basis:100%;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.navbar-toggler{padding:0.25rem 0.75rem;font-size:1.32875rem;line-height:1;background-color:transparent;border:1px solid transparent;border-radius:0.25rem}.navbar-toggler:hover,.navbar-toggler:focus{text-decoration:none}.navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;content:\"\";background:no-repeat center center;background-size:100% 100%}@media (max-width: 575.98px){.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid,.navbar-expand-sm>.container-sm,.navbar-expand-sm>.container-md,.navbar-expand-sm>.container-lg,.navbar-expand-sm>.container-xl{padding-right:0;padding-left:0}}@media (min-width: 576px){.navbar-expand-sm{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand-sm .navbar-nav{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-sm .navbar-nav .nav-link{padding-right:0.5rem;padding-left:0.5rem}.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid,.navbar-expand-sm>.container-sm,.navbar-expand-sm>.container-md,.navbar-expand-sm>.container-lg,.navbar-expand-sm>.container-xl{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand-sm .navbar-collapse{display:-webkit-box !important;display:-ms-flexbox !important;display:flex !important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand-sm .navbar-toggler{display:none}}@media (max-width: 767.98px){.navbar-expand-md>.container,.navbar-expand-md>.container-fluid,.navbar-expand-md>.container-sm,.navbar-expand-md>.container-md,.navbar-expand-md>.container-lg,.navbar-expand-md>.container-xl{padding-right:0;padding-left:0}}@media (min-width: 768px){.navbar-expand-md{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand-md .navbar-nav{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.navbar-expand-md .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-md .navbar-nav .nav-link{padding-right:0.5rem;padding-left:0.5rem}.navbar-expand-md>.container,.navbar-expand-md>.container-fluid,.navbar-expand-md>.container-sm,.navbar-expand-md>.container-md,.navbar-expand-md>.container-lg,.navbar-expand-md>.container-xl{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand-md .navbar-collapse{display:-webkit-box !important;display:-ms-flexbox !important;display:flex !important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}}@media (max-width: 991.98px){.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid,.navbar-expand-lg>.container-sm,.navbar-expand-lg>.container-md,.navbar-expand-lg>.container-lg,.navbar-expand-lg>.container-xl{padding-right:0;padding-left:0}}@media (min-width: 992px){.navbar-expand-lg{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand-lg .navbar-nav{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-lg .navbar-nav .nav-link{padding-right:0.5rem;padding-left:0.5rem}.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid,.navbar-expand-lg>.container-sm,.navbar-expand-lg>.container-md,.navbar-expand-lg>.container-lg,.navbar-expand-lg>.container-xl{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand-lg .navbar-collapse{display:-webkit-box !important;display:-ms-flexbox !important;display:flex !important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand-lg .navbar-toggler{display:none}}@media (max-width: 1199.98px){.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid,.navbar-expand-xl>.container-sm,.navbar-expand-xl>.container-md,.navbar-expand-xl>.container-lg,.navbar-expand-xl>.container-xl{padding-right:0;padding-left:0}}@media (min-width: 1200px){.navbar-expand-xl{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand-xl .navbar-nav{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xl .navbar-nav .nav-link{padding-right:0.5rem;padding-left:0.5rem}.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid,.navbar-expand-xl>.container-sm,.navbar-expand-xl>.container-md,.navbar-expand-xl>.container-lg,.navbar-expand-xl>.container-xl{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand-xl .navbar-collapse{display:-webkit-box !important;display:-ms-flexbox !important;display:flex !important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand-xl .navbar-toggler{display:none}}.navbar-expand{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand>.container,.navbar-expand>.container-fluid,.navbar-expand>.container-sm,.navbar-expand>.container-md,.navbar-expand>.container-lg,.navbar-expand>.container-xl{padding-right:0;padding-left:0}.navbar-expand .navbar-nav{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.navbar-expand .navbar-nav .dropdown-menu{position:absolute}.navbar-expand .navbar-nav .nav-link{padding-right:0.5rem;padding-left:0.5rem}.navbar-expand>.container,.navbar-expand>.container-fluid,.navbar-expand>.container-sm,.navbar-expand>.container-md,.navbar-expand>.container-lg,.navbar-expand>.container-xl{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand .navbar-collapse{display:-webkit-box !important;display:-ms-flexbox !important;display:flex !important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand .navbar-toggler{display:none}.navbar-light .navbar-brand{color:#343a40}.navbar-light .navbar-brand:hover,.navbar-light .navbar-brand:focus{color:#343a40}.navbar-light .navbar-nav .nav-link{color:rgba(0,0,0,0.5)}.navbar-light .navbar-nav .nav-link:hover,.navbar-light .navbar-nav .nav-link:focus{color:#343a40}.navbar-light .navbar-nav .nav-link.disabled{color:rgba(0,0,0,0.3)}.navbar-light .navbar-nav .show>.nav-link,.navbar-light .navbar-nav .active>.nav-link,.navbar-light .navbar-nav .nav-link.show,.navbar-light .navbar-nav .nav-link.active{color:#343a40}.navbar-light .navbar-toggler{color:rgba(0,0,0,0.5);border-color:rgba(0,0,0,0.1)}.navbar-light .navbar-toggler-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")}.navbar-light .navbar-text{color:rgba(0,0,0,0.5)}.navbar-light .navbar-text a{color:#343a40}.navbar-light .navbar-text a:hover,.navbar-light .navbar-text a:focus{color:#343a40}.navbar-dark .navbar-brand{color:#fff}.navbar-dark .navbar-brand:hover,.navbar-dark .navbar-brand:focus{color:#fff}.navbar-dark .navbar-nav .nav-link{color:rgba(255,255,255,0.6)}.navbar-dark .navbar-nav .nav-link:hover,.navbar-dark .navbar-nav .nav-link:focus{color:#fff}.navbar-dark .navbar-nav .nav-link.disabled{color:rgba(255,255,255,0.25)}.navbar-dark .navbar-nav .show>.nav-link,.navbar-dark .navbar-nav .active>.nav-link,.navbar-dark .navbar-nav .nav-link.show,.navbar-dark .navbar-nav .nav-link.active{color:#fff}.navbar-dark .navbar-toggler{color:rgba(255,255,255,0.6);border-color:rgba(255,255,255,0.1)}.navbar-dark .navbar-toggler-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.6%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")}.navbar-dark .navbar-text{color:rgba(255,255,255,0.6)}.navbar-dark .navbar-text a{color:#fff}.navbar-dark .navbar-text a:hover,.navbar-dark .navbar-text a:focus{color:#fff}.card{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,0.125);border-radius:0.25rem}.card>hr{margin-right:0;margin-left:0}.card>.list-group{border-top:inherit;border-bottom:inherit}.card>.list-group:first-child{border-top-width:0;border-top-left-radius:calc(0.25rem - 1px);border-top-right-radius:calc(0.25rem - 1px)}.card>.list-group:last-child{border-bottom-width:0;border-bottom-right-radius:calc(0.25rem - 1px);border-bottom-left-radius:calc(0.25rem - 1px)}.card-body{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;min-height:1px;padding:1.25rem}.card-title{margin-bottom:0.75rem}.card-subtitle{margin-top:-0.375rem;margin-bottom:0}.card-text:last-child{margin-bottom:0}.card-link:hover{text-decoration:none}.card-link+.card-link{margin-left:1.25rem}.card-header{padding:0.75rem 1.25rem;margin-bottom:0;background-color:rgba(0,0,0,0.03);border-bottom:1px solid rgba(0,0,0,0.125)}.card-header:first-child{border-radius:calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0}.card-header+.list-group .list-group-item:first-child{border-top:0}.card-footer{padding:0.75rem 1.25rem;background-color:rgba(0,0,0,0.03);border-top:1px solid rgba(0,0,0,0.125)}.card-footer:last-child{border-radius:0 0 calc(0.25rem - 1px) calc(0.25rem - 1px)}.card-header-tabs{margin-right:-0.625rem;margin-bottom:-0.75rem;margin-left:-0.625rem;border-bottom:0}.card-header-pills{margin-right:-0.625rem;margin-left:-0.625rem}.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:1.25rem}.card-img,.card-img-top,.card-img-bottom{-ms-flex-negative:0;flex-shrink:0;width:100%}.card-img,.card-img-top{border-top-left-radius:calc(0.25rem - 1px);border-top-right-radius:calc(0.25rem - 1px)}.card-img,.card-img-bottom{border-bottom-right-radius:calc(0.25rem - 1px);border-bottom-left-radius:calc(0.25rem - 1px)}.card-deck .card{margin-bottom:15px}@media (min-width: 576px){.card-deck{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap;margin-right:-15px;margin-left:-15px}.card-deck .card{-webkit-box-flex:1;-ms-flex:1 0 0%;flex:1 0 0%;margin-right:15px;margin-bottom:0;margin-left:15px}}.card-group>.card{margin-bottom:15px}@media (min-width: 576px){.card-group{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap}.card-group>.card{-webkit-box-flex:1;-ms-flex:1 0 0%;flex:1 0 0%;margin-bottom:0}.card-group>.card+.card{margin-left:0;border-left:0}.card-group>.card:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.card-group>.card:not(:last-child) .card-img-top,.card-group>.card:not(:last-child) .card-header{border-top-right-radius:0}.card-group>.card:not(:last-child) .card-img-bottom,.card-group>.card:not(:last-child) .card-footer{border-bottom-right-radius:0}.card-group>.card:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.card-group>.card:not(:first-child) .card-img-top,.card-group>.card:not(:first-child) .card-header{border-top-left-radius:0}.card-group>.card:not(:first-child) .card-img-bottom,.card-group>.card:not(:first-child) .card-footer{border-bottom-left-radius:0}}.card-columns .card{margin-bottom:0.75rem}@media (min-width: 576px){.card-columns{-webkit-column-count:3;column-count:3;-webkit-column-gap:1.25rem;column-gap:1.25rem;orphans:1;widows:1}.card-columns .card{display:inline-block;width:100%}}.accordion>.card{overflow:hidden}.accordion>.card:not(:last-of-type){border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.accordion>.card:not(:first-of-type){border-top-left-radius:0;border-top-right-radius:0}.accordion>.card>.card-header{border-radius:0;margin-bottom:-1px}.breadcrumb{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:0.75rem 1rem;margin-bottom:1rem;list-style:none;background-color:#e9ecef;border-radius:0.25rem}.breadcrumb-item{display:-webkit-box;display:-ms-flexbox;display:flex}.breadcrumb-item+.breadcrumb-item{padding-left:0.5rem}.breadcrumb-item+.breadcrumb-item::before{display:inline-block;padding-right:0.5rem;color:#868e96;content:\"/\"}.breadcrumb-item+.breadcrumb-item:hover::before{text-decoration:underline}.breadcrumb-item+.breadcrumb-item:hover::before{text-decoration:none}.breadcrumb-item.active{color:#868e96}.pagination{display:-webkit-box;display:-ms-flexbox;display:flex;padding-left:0;list-style:none;border-radius:0.25rem}.page-link{position:relative;display:block;padding:0.5rem 0.75rem;margin-left:-1px;line-height:1.25;color:#4582EC;background-color:#fff;border:1px solid #ddd}.page-link:hover{z-index:2;color:#1559cf;text-decoration:none;background-color:#e9ecef;border-color:#ddd}.page-link:focus{z-index:3;outline:0;-webkit-box-shadow:0 0 0 0.2rem rgba(69,130,236,0.25);box-shadow:0 0 0 0.2rem rgba(69,130,236,0.25)}.page-item:first-child .page-link{margin-left:0;border-top-left-radius:0.25rem;border-bottom-left-radius:0.25rem}.page-item:last-child .page-link{border-top-right-radius:0.25rem;border-bottom-right-radius:0.25rem}.page-item.active .page-link{z-index:3;color:#fff;background-color:#4582EC;border-color:#4582EC}.page-item.disabled .page-link{color:#868e96;pointer-events:none;cursor:auto;background-color:#fff;border-color:#ddd}.pagination-lg .page-link{padding:0.75rem 1.5rem;font-size:1.32875rem;line-height:1.5}.pagination-lg .page-item:first-child .page-link{border-top-left-radius:0.3rem;border-bottom-left-radius:0.3rem}.pagination-lg .page-item:last-child .page-link{border-top-right-radius:0.3rem;border-bottom-right-radius:0.3rem}.pagination-sm .page-link{padding:0.25rem 0.5rem;font-size:0.930125rem;line-height:1.5}.pagination-sm .page-item:first-child .page-link{border-top-left-radius:0.2rem;border-bottom-left-radius:0.2rem}.pagination-sm .page-item:last-child .page-link{border-top-right-radius:0.2rem;border-bottom-right-radius:0.2rem}.badge{display:inline-block;padding:0.6em 1.2em;font-size:75%;font-weight:normal;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:0.25rem;-webkit-transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}@media (prefers-reduced-motion: reduce){.badge{-webkit-transition:none;transition:none}}a.badge:hover,a.badge:focus{text-decoration:none}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.badge-pill{padding-right:0.6em;padding-left:0.6em;border-radius:10rem}.badge-primary{color:#fff;background-color:#4582EC}a.badge-primary:hover,a.badge-primary:focus{color:#fff;background-color:#1863e6}a.badge-primary:focus,a.badge-primary.focus{outline:0;-webkit-box-shadow:0 0 0 0.2rem rgba(69,130,236,0.5);box-shadow:0 0 0 0.2rem rgba(69,130,236,0.5)}.badge-secondary{color:#fff;background-color:#adb5bd}a.badge-secondary:hover,a.badge-secondary:focus{color:#fff;background-color:#919ca6}a.badge-secondary:focus,a.badge-secondary.focus{outline:0;-webkit-box-shadow:0 0 0 0.2rem rgba(173,181,189,0.5);box-shadow:0 0 0 0.2rem rgba(173,181,189,0.5)}.badge-success{color:#fff;background-color:#02B875}a.badge-success:hover,a.badge-success:focus{color:#fff;background-color:#018655}a.badge-success:focus,a.badge-success.focus{outline:0;-webkit-box-shadow:0 0 0 0.2rem rgba(2,184,117,0.5);box-shadow:0 0 0 0.2rem rgba(2,184,117,0.5)}.badge-info{color:#fff;background-color:#17a2b8}a.badge-info:hover,a.badge-info:focus{color:#fff;background-color:#117a8b}a.badge-info:focus,a.badge-info.focus{outline:0;-webkit-box-shadow:0 0 0 0.2rem rgba(23,162,184,0.5);box-shadow:0 0 0 0.2rem rgba(23,162,184,0.5)}.badge-warning{color:#fff;background-color:#f0ad4e}a.badge-warning:hover,a.badge-warning:focus{color:#fff;background-color:#ec971f}a.badge-warning:focus,a.badge-warning.focus{outline:0;-webkit-box-shadow:0 0 0 0.2rem rgba(240,173,78,0.5);box-shadow:0 0 0 0.2rem rgba(240,173,78,0.5)}.badge-danger{color:#fff;background-color:#d9534f}a.badge-danger:hover,a.badge-danger:focus{color:#fff;background-color:#c9302c}a.badge-danger:focus,a.badge-danger.focus{outline:0;-webkit-box-shadow:0 0 0 0.2rem rgba(217,83,79,0.5);box-shadow:0 0 0 0.2rem rgba(217,83,79,0.5)}.badge-light{color:#212529;background-color:#f8f9fa}a.badge-light:hover,a.badge-light:focus{color:#212529;background-color:#dae0e5}a.badge-light:focus,a.badge-light.focus{outline:0;-webkit-box-shadow:0 0 0 0.2rem rgba(248,249,250,0.5);box-shadow:0 0 0 0.2rem rgba(248,249,250,0.5)}.badge-dark{color:#fff;background-color:#343a40}a.badge-dark:hover,a.badge-dark:focus{color:#fff;background-color:#1d2124}a.badge-dark:focus,a.badge-dark.focus{outline:0;-webkit-box-shadow:0 0 0 0.2rem rgba(52,58,64,0.5);box-shadow:0 0 0 0.2rem rgba(52,58,64,0.5)}.jumbotron{padding:2rem 1rem;margin-bottom:2rem;background-color:#e9ecef;border-radius:0.3rem}@media (min-width: 576px){.jumbotron{padding:4rem 2rem}}.jumbotron-fluid{padding-right:0;padding-left:0;border-radius:0}.alert{position:relative;padding:0.75rem 1.25rem;margin-bottom:1rem;border:0 solid transparent;border-radius:0.25rem}.alert-heading{color:inherit}.alert-link{font-weight:700}.alert-dismissible{padding-right:4.0945rem}.alert-dismissible .close{position:absolute;top:0;right:0;padding:0.75rem 1.25rem;color:inherit}.alert-primary{color:#24447b;background-color:#dae6fb;border-color:#cbdcfa}.alert-primary hr{border-top-color:#b4ccf8}.alert-primary .alert-link{color:#182e54}.alert-secondary{color:#5a5e62;background-color:#eff0f2;border-color:#e8eaed}.alert-secondary hr{border-top-color:#dadde2}.alert-secondary .alert-link{color:#424547}.alert-success{color:#01603d;background-color:#ccf1e3;border-color:#b8ebd8}.alert-success hr{border-top-color:#a4e5cd}.alert-success .alert-link{color:#002e1d}.alert-info{color:#0c5460;background-color:#d1ecf1;border-color:#bee5eb}.alert-info hr{border-top-color:#abdde5}.alert-info .alert-link{color:#062c33}.alert-warning{color:#7d5a29;background-color:#fcefdc;border-color:#fbe8cd}.alert-warning hr{border-top-color:#f9ddb5}.alert-warning .alert-link{color:#573e1c}.alert-danger{color:#712b29;background-color:#f7dddc;border-color:#f4cfce}.alert-danger hr{border-top-color:#efbbb9}.alert-danger .alert-link{color:#4c1d1b}.alert-light{color:#818182;background-color:#fefefe;border-color:#fdfdfe}.alert-light hr{border-top-color:#ececf6}.alert-light .alert-link{color:#686868}.alert-dark{color:#1b1e21;background-color:#d6d8d9;border-color:#c6c8ca}.alert-dark hr{border-top-color:#b9bbbe}.alert-dark .alert-link{color:#040505}@-webkit-keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}@keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}.progress{display:-webkit-box;display:-ms-flexbox;display:flex;height:1rem;overflow:hidden;line-height:0;font-size:0.79725rem;background-color:#e9ecef;border-radius:0.25rem}.progress-bar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;overflow:hidden;color:#fff;text-align:center;white-space:nowrap;background-color:#4582EC;-webkit-transition:width 0.6s ease;transition:width 0.6s ease}@media (prefers-reduced-motion: reduce){.progress-bar{-webkit-transition:none;transition:none}}.progress-bar-striped{background-image:linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent);background-size:1rem 1rem}.progress-bar-animated{-webkit-animation:progress-bar-stripes 1s linear infinite;animation:progress-bar-stripes 1s linear infinite}@media (prefers-reduced-motion: reduce){.progress-bar-animated{-webkit-animation:none;animation:none}}.media{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.media-body{-webkit-box-flex:1;-ms-flex:1;flex:1}.list-group{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding-left:0;margin-bottom:0;border-radius:0.25rem}.list-group-item-action{width:100%;color:#495057;text-align:inherit}.list-group-item-action:hover,.list-group-item-action:focus{z-index:1;color:#495057;text-decoration:none;background-color:#f8f9fa}.list-group-item-action:active{color:#343a40;background-color:#e9ecef}.list-group-item{position:relative;display:block;padding:0.75rem 1.25rem;background-color:#fff;border:1px solid rgba(0,0,0,0.125)}.list-group-item:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.list-group-item:last-child{border-bottom-right-radius:inherit;border-bottom-left-radius:inherit}.list-group-item.disabled,.list-group-item:disabled{color:#868e96;pointer-events:none;background-color:#fff}.list-group-item.active{z-index:2;color:#fff;background-color:#4582EC;border-color:#4582EC}.list-group-item+.list-group-item{border-top-width:0}.list-group-item+.list-group-item.active{margin-top:-1px;border-top-width:1px}.list-group-horizontal{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.list-group-horizontal>.list-group-item:first-child{border-bottom-left-radius:0.25rem;border-top-right-radius:0}.list-group-horizontal>.list-group-item:last-child{border-top-right-radius:0.25rem;border-bottom-left-radius:0}.list-group-horizontal>.list-group-item.active{margin-top:0}.list-group-horizontal>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}@media (min-width: 576px){.list-group-horizontal-sm{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.list-group-horizontal-sm>.list-group-item:first-child{border-bottom-left-radius:0.25rem;border-top-right-radius:0}.list-group-horizontal-sm>.list-group-item:last-child{border-top-right-radius:0.25rem;border-bottom-left-radius:0}.list-group-horizontal-sm>.list-group-item.active{margin-top:0}.list-group-horizontal-sm>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-sm>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width: 768px){.list-group-horizontal-md{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.list-group-horizontal-md>.list-group-item:first-child{border-bottom-left-radius:0.25rem;border-top-right-radius:0}.list-group-horizontal-md>.list-group-item:last-child{border-top-right-radius:0.25rem;border-bottom-left-radius:0}.list-group-horizontal-md>.list-group-item.active{margin-top:0}.list-group-horizontal-md>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-md>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width: 992px){.list-group-horizontal-lg{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.list-group-horizontal-lg>.list-group-item:first-child{border-bottom-left-radius:0.25rem;border-top-right-radius:0}.list-group-horizontal-lg>.list-group-item:last-child{border-top-right-radius:0.25rem;border-bottom-left-radius:0}.list-group-horizontal-lg>.list-group-item.active{margin-top:0}.list-group-horizontal-lg>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-lg>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width: 1200px){.list-group-horizontal-xl{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.list-group-horizontal-xl>.list-group-item:first-child{border-bottom-left-radius:0.25rem;border-top-right-radius:0}.list-group-horizontal-xl>.list-group-item:last-child{border-top-right-radius:0.25rem;border-bottom-left-radius:0}.list-group-horizontal-xl>.list-group-item.active{margin-top:0}.list-group-horizontal-xl>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-xl>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}.list-group-flush{border-radius:0}.list-group-flush>.list-group-item{border-width:0 0 1px}.list-group-flush>.list-group-item:last-child{border-bottom-width:0}.list-group-item-primary{color:#24447b;background-color:#cbdcfa}.list-group-item-primary.list-group-item-action:hover,.list-group-item-primary.list-group-item-action:focus{color:#24447b;background-color:#b4ccf8}.list-group-item-primary.list-group-item-action.active{color:#fff;background-color:#24447b;border-color:#24447b}.list-group-item-secondary{color:#5a5e62;background-color:#e8eaed}.list-group-item-secondary.list-group-item-action:hover,.list-group-item-secondary.list-group-item-action:focus{color:#5a5e62;background-color:#dadde2}.list-group-item-secondary.list-group-item-action.active{color:#fff;background-color:#5a5e62;border-color:#5a5e62}.list-group-item-success{color:#01603d;background-color:#b8ebd8}.list-group-item-success.list-group-item-action:hover,.list-group-item-success.list-group-item-action:focus{color:#01603d;background-color:#a4e5cd}.list-group-item-success.list-group-item-action.active{color:#fff;background-color:#01603d;border-color:#01603d}.list-group-item-info{color:#0c5460;background-color:#bee5eb}.list-group-item-info.list-group-item-action:hover,.list-group-item-info.list-group-item-action:focus{color:#0c5460;background-color:#abdde5}.list-group-item-info.list-group-item-action.active{color:#fff;background-color:#0c5460;border-color:#0c5460}.list-group-item-warning{color:#7d5a29;background-color:#fbe8cd}.list-group-item-warning.list-group-item-action:hover,.list-group-item-warning.list-group-item-action:focus{color:#7d5a29;background-color:#f9ddb5}.list-group-item-warning.list-group-item-action.active{color:#fff;background-color:#7d5a29;border-color:#7d5a29}.list-group-item-danger{color:#712b29;background-color:#f4cfce}.list-group-item-danger.list-group-item-action:hover,.list-group-item-danger.list-group-item-action:focus{color:#712b29;background-color:#efbbb9}.list-group-item-danger.list-group-item-action.active{color:#fff;background-color:#712b29;border-color:#712b29}.list-group-item-light{color:#818182;background-color:#fdfdfe}.list-group-item-light.list-group-item-action:hover,.list-group-item-light.list-group-item-action:focus{color:#818182;background-color:#ececf6}.list-group-item-light.list-group-item-action.active{color:#fff;background-color:#818182;border-color:#818182}.list-group-item-dark{color:#1b1e21;background-color:#c6c8ca}.list-group-item-dark.list-group-item-action:hover,.list-group-item-dark.list-group-item-action:focus{color:#1b1e21;background-color:#b9bbbe}.list-group-item-dark.list-group-item-action.active{color:#fff;background-color:#1b1e21;border-color:#1b1e21}.close{float:right;font-size:1.5945rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.5}.close:hover{color:#000;text-decoration:none}.close:not(:disabled):not(.disabled):hover,.close:not(:disabled):not(.disabled):focus{opacity:.75}button.close{padding:0;background-color:transparent;border:0}a.close.disabled{pointer-events:none}.toast{max-width:350px;overflow:hidden;font-size:0.875rem;background-color:rgba(255,255,255,0.85);background-clip:padding-box;border:1px solid rgba(0,0,0,0.1);-webkit-box-shadow:0 0.25rem 0.75rem rgba(0,0,0,0.1);box-shadow:0 0.25rem 0.75rem rgba(0,0,0,0.1);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);opacity:0;border-radius:0.25rem}.toast:not(:last-child){margin-bottom:0.75rem}.toast.showing{opacity:1}.toast.show{display:block;opacity:1}.toast.hide{display:none}.toast-header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0.25rem 0.75rem;color:#868e96;background-color:rgba(255,255,255,0.85);background-clip:padding-box;border-bottom:1px solid rgba(0,0,0,0.05)}.toast-body{padding:0.75rem}.modal-open{overflow:hidden}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal{position:fixed;top:0;left:0;z-index:1050;display:none;width:100%;height:100%;overflow:hidden;outline:0}.modal-dialog{position:relative;width:auto;margin:0.5rem;pointer-events:none}.modal.fade .modal-dialog{-webkit-transition:-webkit-transform 0.3s ease-out;transition:-webkit-transform 0.3s ease-out;transition:transform 0.3s ease-out;transition:transform 0.3s ease-out, -webkit-transform 0.3s ease-out;-webkit-transform:translate(0, -50px);transform:translate(0, -50px)}@media (prefers-reduced-motion: reduce){.modal.fade .modal-dialog{-webkit-transition:none;transition:none}}.modal.show .modal-dialog{-webkit-transform:none;transform:none}.modal.modal-static .modal-dialog{-webkit-transform:scale(1.02);transform:scale(1.02)}.modal-dialog-scrollable{display:-webkit-box;display:-ms-flexbox;display:flex;max-height:calc(100% - 1rem)}.modal-dialog-scrollable .modal-content{max-height:calc(100vh - 1rem);overflow:hidden}.modal-dialog-scrollable .modal-header,.modal-dialog-scrollable .modal-footer{-ms-flex-negative:0;flex-shrink:0}.modal-dialog-scrollable .modal-body{overflow-y:auto}.modal-dialog-centered{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-height:calc(100% - 1rem)}.modal-dialog-centered::before{display:block;height:calc(100vh - 1rem);height:-webkit-min-content;height:-moz-min-content;height:min-content;content:\"\"}.modal-dialog-centered.modal-dialog-scrollable{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:100%}.modal-dialog-centered.modal-dialog-scrollable .modal-content{max-height:none}.modal-dialog-centered.modal-dialog-scrollable::before{content:none}.modal-content{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;pointer-events:auto;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,0.2);border-radius:0.3rem;outline:0}.modal-backdrop{position:fixed;top:0;left:0;z-index:1040;width:100vw;height:100vh;background-color:#000}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:0.5}.modal-header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:1rem 1rem;border-bottom:1px solid #ddd;border-top-left-radius:calc(0.3rem - 1px);border-top-right-radius:calc(0.3rem - 1px)}.modal-header .close{padding:1rem 1rem;margin:-1rem -1rem -1rem auto}.modal-title{margin-bottom:0;line-height:1.5}.modal-body{position:relative;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;padding:1rem}.modal-footer{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;padding:0.75rem;border-top:1px solid #ddd;border-bottom-right-radius:calc(0.3rem - 1px);border-bottom-left-radius:calc(0.3rem - 1px)}.modal-footer>*{margin:0.25rem}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media (min-width: 576px){.modal-dialog{max-width:500px;margin:1.75rem auto}.modal-dialog-scrollable{max-height:calc(100% - 3.5rem)}.modal-dialog-scrollable .modal-content{max-height:calc(100vh - 3.5rem)}.modal-dialog-centered{min-height:calc(100% - 3.5rem)}.modal-dialog-centered::before{height:calc(100vh - 3.5rem);height:-webkit-min-content;height:-moz-min-content;height:min-content}.modal-sm{max-width:300px}}@media (min-width: 992px){.modal-lg,.modal-xl{max-width:800px}}@media (min-width: 1200px){.modal-xl{max-width:1140px}}.tooltip{position:absolute;z-index:1070;display:block;margin:0;font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:0.6875rem;word-wrap:break-word;opacity:0}.tooltip.show{opacity:0.9}.tooltip .arrow{position:absolute;display:block;width:0.8rem;height:0.4rem}.tooltip .arrow::before{position:absolute;content:\"\";border-color:transparent;border-style:solid}.bs-tooltip-top,.bs-tooltip-auto[x-placement^=\"top\"]{padding:0.4rem 0}.bs-tooltip-top .arrow,.bs-tooltip-auto[x-placement^=\"top\"] .arrow{bottom:0}.bs-tooltip-top .arrow::before,.bs-tooltip-auto[x-placement^=\"top\"] .arrow::before{top:0;border-width:0.4rem 0.4rem 0;border-top-color:#000}.bs-tooltip-right,.bs-tooltip-auto[x-placement^=\"right\"]{padding:0 0.4rem}.bs-tooltip-right .arrow,.bs-tooltip-auto[x-placement^=\"right\"] .arrow{left:0;width:0.4rem;height:0.8rem}.bs-tooltip-right .arrow::before,.bs-tooltip-auto[x-placement^=\"right\"] .arrow::before{right:0;border-width:0.4rem 0.4rem 0.4rem 0;border-right-color:#000}.bs-tooltip-bottom,.bs-tooltip-auto[x-placement^=\"bottom\"]{padding:0.4rem 0}.bs-tooltip-bottom .arrow,.bs-tooltip-auto[x-placement^=\"bottom\"] .arrow{top:0}.bs-tooltip-bottom .arrow::before,.bs-tooltip-auto[x-placement^=\"bottom\"] .arrow::before{bottom:0;border-width:0 0.4rem 0.4rem;border-bottom-color:#000}.bs-tooltip-left,.bs-tooltip-auto[x-placement^=\"left\"]{padding:0 0.4rem}.bs-tooltip-left .arrow,.bs-tooltip-auto[x-placement^=\"left\"] .arrow{right:0;width:0.4rem;height:0.8rem}.bs-tooltip-left .arrow::before,.bs-tooltip-auto[x-placement^=\"left\"] .arrow::before{left:0;border-width:0.4rem 0 0.4rem 0.4rem;border-left-color:#000}.tooltip-inner{max-width:200px;padding:0.25rem 0.5rem;color:#fff;text-align:center;background-color:#000;border-radius:0.25rem}.popover{position:absolute;top:0;left:0;z-index:1060;display:block;max-width:276px;font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:0.930125rem;word-wrap:break-word;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,0.2);border-radius:0.3rem}.popover .arrow{position:absolute;display:block;width:1rem;height:0.5rem;margin:0 0.3rem}.popover .arrow::before,.popover .arrow::after{position:absolute;display:block;content:\"\";border-color:transparent;border-style:solid}.bs-popover-top,.bs-popover-auto[x-placement^=\"top\"]{margin-bottom:0.5rem}.bs-popover-top>.arrow,.bs-popover-auto[x-placement^=\"top\"]>.arrow{bottom:calc(-0.5rem - 1px)}.bs-popover-top>.arrow::before,.bs-popover-auto[x-placement^=\"top\"]>.arrow::before{bottom:0;border-width:0.5rem 0.5rem 0;border-top-color:rgba(0,0,0,0.25)}.bs-popover-top>.arrow::after,.bs-popover-auto[x-placement^=\"top\"]>.arrow::after{bottom:1px;border-width:0.5rem 0.5rem 0;border-top-color:#fff}.bs-popover-right,.bs-popover-auto[x-placement^=\"right\"]{margin-left:0.5rem}.bs-popover-right>.arrow,.bs-popover-auto[x-placement^=\"right\"]>.arrow{left:calc(-0.5rem - 1px);width:0.5rem;height:1rem;margin:0.3rem 0}.bs-popover-right>.arrow::before,.bs-popover-auto[x-placement^=\"right\"]>.arrow::before{left:0;border-width:0.5rem 0.5rem 0.5rem 0;border-right-color:rgba(0,0,0,0.25)}.bs-popover-right>.arrow::after,.bs-popover-auto[x-placement^=\"right\"]>.arrow::after{left:1px;border-width:0.5rem 0.5rem 0.5rem 0;border-right-color:#fff}.bs-popover-bottom,.bs-popover-auto[x-placement^=\"bottom\"]{margin-top:0.5rem}.bs-popover-bottom>.arrow,.bs-popover-auto[x-placement^=\"bottom\"]>.arrow{top:calc(-0.5rem - 1px)}.bs-popover-bottom>.arrow::before,.bs-popover-auto[x-placement^=\"bottom\"]>.arrow::before{top:0;border-width:0 0.5rem 0.5rem 0.5rem;border-bottom-color:rgba(0,0,0,0.25)}.bs-popover-bottom>.arrow::after,.bs-popover-auto[x-placement^=\"bottom\"]>.arrow::after{top:1px;border-width:0 0.5rem 0.5rem 0.5rem;border-bottom-color:#fff}.bs-popover-bottom .popover-header::before,.bs-popover-auto[x-placement^=\"bottom\"] .popover-header::before{position:absolute;top:0;left:50%;display:block;width:1rem;margin-left:-0.5rem;content:\"\";border-bottom:1px solid #f7f7f7}.bs-popover-left,.bs-popover-auto[x-placement^=\"left\"]{margin-right:0.5rem}.bs-popover-left>.arrow,.bs-popover-auto[x-placement^=\"left\"]>.arrow{right:calc(-0.5rem - 1px);width:0.5rem;height:1rem;margin:0.3rem 0}.bs-popover-left>.arrow::before,.bs-popover-auto[x-placement^=\"left\"]>.arrow::before{right:0;border-width:0.5rem 0 0.5rem 0.5rem;border-left-color:rgba(0,0,0,0.25)}.bs-popover-left>.arrow::after,.bs-popover-auto[x-placement^=\"left\"]>.arrow::after{right:1px;border-width:0.5rem 0 0.5rem 0.5rem;border-left-color:#fff}.popover-header{padding:0.5rem 0.75rem;margin-bottom:0;font-size:1.063rem;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-top-left-radius:calc(0.3rem - 1px);border-top-right-radius:calc(0.3rem - 1px)}.popover-header:empty{display:none}.popover-body{padding:0.5rem 0.75rem;color:#343a40}.carousel{position:relative}.carousel.pointer-event{-ms-touch-action:pan-y;touch-action:pan-y}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-inner::after{display:block;clear:both;content:\"\"}.carousel-item{position:relative;display:none;float:left;width:100%;margin-right:-100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transition:-webkit-transform 0.6s ease-in-out;transition:-webkit-transform 0.6s ease-in-out;transition:transform 0.6s ease-in-out;transition:transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out}@media (prefers-reduced-motion: reduce){.carousel-item{-webkit-transition:none;transition:none}}.carousel-item.active,.carousel-item-next,.carousel-item-prev{display:block}.carousel-item-next:not(.carousel-item-left),.active.carousel-item-right{-webkit-transform:translateX(100%);transform:translateX(100%)}.carousel-item-prev:not(.carousel-item-right),.active.carousel-item-left{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.carousel-fade .carousel-item{opacity:0;-webkit-transition-property:opacity;transition-property:opacity;-webkit-transform:none;transform:none}.carousel-fade .carousel-item.active,.carousel-fade .carousel-item-next.carousel-item-left,.carousel-fade .carousel-item-prev.carousel-item-right{z-index:1;opacity:1}.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right{z-index:0;opacity:0;-webkit-transition:opacity 0s 0.6s;transition:opacity 0s 0.6s}@media (prefers-reduced-motion: reduce){.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right{-webkit-transition:none;transition:none}}.carousel-control-prev,.carousel-control-next{position:absolute;top:0;bottom:0;z-index:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:15%;color:#fff;text-align:center;opacity:0.5;-webkit-transition:opacity 0.15s ease;transition:opacity 0.15s ease}@media (prefers-reduced-motion: reduce){.carousel-control-prev,.carousel-control-next{-webkit-transition:none;transition:none}}.carousel-control-prev:hover,.carousel-control-prev:focus,.carousel-control-next:hover,.carousel-control-next:focus{color:#fff;text-decoration:none;outline:0;opacity:0.9}.carousel-control-prev{left:0}.carousel-control-next{right:0}.carousel-control-prev-icon,.carousel-control-next-icon{display:inline-block;width:20px;height:20px;background:no-repeat 50% / 100% 100%}.carousel-control-prev-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e\")}.carousel-control-next-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e\")}.carousel-indicators{position:absolute;right:0;bottom:0;left:0;z-index:15;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding-left:0;margin-right:15%;margin-left:15%;list-style:none}.carousel-indicators li{-webkit-box-sizing:content-box;box-sizing:content-box;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;width:30px;height:3px;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:#fff;background-clip:padding-box;border-top:10px solid transparent;border-bottom:10px solid transparent;opacity:.5;-webkit-transition:opacity 0.6s ease;transition:opacity 0.6s ease}@media (prefers-reduced-motion: reduce){.carousel-indicators li{-webkit-transition:none;transition:none}}.carousel-indicators .active{opacity:1}.carousel-caption{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center}@-webkit-keyframes spinner-border{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-border{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.spinner-border{display:inline-block;width:2rem;height:2rem;vertical-align:text-bottom;border:0.25em solid currentColor;border-right-color:transparent;border-radius:50%;-webkit-animation:spinner-border .75s linear infinite;animation:spinner-border .75s linear infinite}.spinner-border-sm{width:1rem;height:1rem;border-width:0.2em}@-webkit-keyframes spinner-grow{0%{-webkit-transform:scale(0);transform:scale(0)}50%{opacity:1;-webkit-transform:none;transform:none}}@keyframes spinner-grow{0%{-webkit-transform:scale(0);transform:scale(0)}50%{opacity:1;-webkit-transform:none;transform:none}}.spinner-grow{display:inline-block;width:2rem;height:2rem;vertical-align:text-bottom;background-color:currentColor;border-radius:50%;opacity:0;-webkit-animation:spinner-grow .75s linear infinite;animation:spinner-grow .75s linear infinite}.spinner-grow-sm{width:1rem;height:1rem}.align-baseline{vertical-align:baseline !important}.align-top{vertical-align:top !important}.align-middle{vertical-align:middle !important}.align-bottom{vertical-align:bottom !important}.align-text-bottom{vertical-align:text-bottom !important}.align-text-top{vertical-align:text-top !important}.bg-primary{background-color:#4582EC !important}a.bg-primary:hover,a.bg-primary:focus,button.bg-primary:hover,button.bg-primary:focus{background-color:#1863e6 !important}.bg-secondary{background-color:#adb5bd !important}a.bg-secondary:hover,a.bg-secondary:focus,button.bg-secondary:hover,button.bg-secondary:focus{background-color:#919ca6 !important}.bg-success{background-color:#02B875 !important}a.bg-success:hover,a.bg-success:focus,button.bg-success:hover,button.bg-success:focus{background-color:#018655 !important}.bg-info{background-color:#17a2b8 !important}a.bg-info:hover,a.bg-info:focus,button.bg-info:hover,button.bg-info:focus{background-color:#117a8b !important}.bg-warning{background-color:#f0ad4e !important}a.bg-warning:hover,a.bg-warning:focus,button.bg-warning:hover,button.bg-warning:focus{background-color:#ec971f !important}.bg-danger{background-color:#d9534f !important}a.bg-danger:hover,a.bg-danger:focus,button.bg-danger:hover,button.bg-danger:focus{background-color:#c9302c !important}.bg-light{background-color:#f8f9fa !important}a.bg-light:hover,a.bg-light:focus,button.bg-light:hover,button.bg-light:focus{background-color:#dae0e5 !important}.bg-dark{background-color:#343a40 !important}a.bg-dark:hover,a.bg-dark:focus,button.bg-dark:hover,button.bg-dark:focus{background-color:#1d2124 !important}.bg-white{background-color:#fff !important}.bg-transparent{background-color:transparent !important}.border{border:1px solid #ddd !important}.border-top{border-top:1px solid #ddd !important}.border-right{border-right:1px solid #ddd !important}.border-bottom{border-bottom:1px solid #ddd !important}.border-left{border-left:1px solid #ddd !important}.border-0{border:0 !important}.border-top-0{border-top:0 !important}.border-right-0{border-right:0 !important}.border-bottom-0{border-bottom:0 !important}.border-left-0{border-left:0 !important}.border-primary{border-color:#4582EC !important}.border-secondary{border-color:#adb5bd !important}.border-success{border-color:#02B875 !important}.border-info{border-color:#17a2b8 !important}.border-warning{border-color:#f0ad4e !important}.border-danger{border-color:#d9534f !important}.border-light{border-color:#f8f9fa !important}.border-dark{border-color:#343a40 !important}.border-white{border-color:#fff !important}.rounded-sm{border-radius:0.2rem !important}.rounded{border-radius:0.25rem !important}.rounded-top{border-top-left-radius:0.25rem !important;border-top-right-radius:0.25rem !important}.rounded-right{border-top-right-radius:0.25rem !important;border-bottom-right-radius:0.25rem !important}.rounded-bottom{border-bottom-right-radius:0.25rem !important;border-bottom-left-radius:0.25rem !important}.rounded-left{border-top-left-radius:0.25rem !important;border-bottom-left-radius:0.25rem !important}.rounded-lg{border-radius:0.3rem !important}.rounded-circle{border-radius:50% !important}.rounded-pill{border-radius:50rem !important}.rounded-0{border-radius:0 !important}.clearfix::after{display:block;clear:both;content:\"\"}.d-none{display:none !important}.d-inline{display:inline !important}.d-inline-block{display:inline-block !important}.d-block{display:block !important}.d-table{display:table !important}.d-table-row{display:table-row !important}.d-table-cell{display:table-cell !important}.d-flex{display:-webkit-box !important;display:-ms-flexbox !important;display:flex !important}.d-inline-flex{display:-webkit-inline-box !important;display:-ms-inline-flexbox !important;display:inline-flex !important}@media (min-width: 576px){.d-sm-none{display:none !important}.d-sm-inline{display:inline !important}.d-sm-inline-block{display:inline-block !important}.d-sm-block{display:block !important}.d-sm-table{display:table !important}.d-sm-table-row{display:table-row !important}.d-sm-table-cell{display:table-cell !important}.d-sm-flex{display:-webkit-box !important;display:-ms-flexbox !important;display:flex !important}.d-sm-inline-flex{display:-webkit-inline-box !important;display:-ms-inline-flexbox !important;display:inline-flex !important}}@media (min-width: 768px){.d-md-none{display:none !important}.d-md-inline{display:inline !important}.d-md-inline-block{display:inline-block !important}.d-md-block{display:block !important}.d-md-table{display:table !important}.d-md-table-row{display:table-row !important}.d-md-table-cell{display:table-cell !important}.d-md-flex{display:-webkit-box !important;display:-ms-flexbox !important;display:flex !important}.d-md-inline-flex{display:-webkit-inline-box !important;display:-ms-inline-flexbox !important;display:inline-flex !important}}@media (min-width: 992px){.d-lg-none{display:none !important}.d-lg-inline{display:inline !important}.d-lg-inline-block{display:inline-block !important}.d-lg-block{display:block !important}.d-lg-table{display:table !important}.d-lg-table-row{display:table-row !important}.d-lg-table-cell{display:table-cell !important}.d-lg-flex{display:-webkit-box !important;display:-ms-flexbox !important;display:flex !important}.d-lg-inline-flex{display:-webkit-inline-box !important;display:-ms-inline-flexbox !important;display:inline-flex !important}}@media (min-width: 1200px){.d-xl-none{display:none !important}.d-xl-inline{display:inline !important}.d-xl-inline-block{display:inline-block !important}.d-xl-block{display:block !important}.d-xl-table{display:table !important}.d-xl-table-row{display:table-row !important}.d-xl-table-cell{display:table-cell !important}.d-xl-flex{display:-webkit-box !important;display:-ms-flexbox !important;display:flex !important}.d-xl-inline-flex{display:-webkit-inline-box !important;display:-ms-inline-flexbox !important;display:inline-flex !important}}@media print{.d-print-none{display:none !important}.d-print-inline{display:inline !important}.d-print-inline-block{display:inline-block !important}.d-print-block{display:block !important}.d-print-table{display:table !important}.d-print-table-row{display:table-row !important}.d-print-table-cell{display:table-cell !important}.d-print-flex{display:-webkit-box !important;display:-ms-flexbox !important;display:flex !important}.d-print-inline-flex{display:-webkit-inline-box !important;display:-ms-inline-flexbox !important;display:inline-flex !important}}.embed-responsive{position:relative;display:block;width:100%;padding:0;overflow:hidden}.embed-responsive::before{display:block;content:\"\"}.embed-responsive .embed-responsive-item,.embed-responsive iframe,.embed-responsive embed,.embed-responsive object,.embed-responsive video{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0}.embed-responsive-21by9::before{padding-top:42.8571428571%}.embed-responsive-16by9::before{padding-top:56.25%}.embed-responsive-4by3::before{padding-top:75%}.embed-responsive-1by1::before{padding-top:100%}.flex-row{-webkit-box-orient:horizontal !important;-webkit-box-direction:normal !important;-ms-flex-direction:row !important;flex-direction:row !important}.flex-column{-webkit-box-orient:vertical !important;-webkit-box-direction:normal !important;-ms-flex-direction:column !important;flex-direction:column !important}.flex-row-reverse{-webkit-box-orient:horizontal !important;-webkit-box-direction:reverse !important;-ms-flex-direction:row-reverse !important;flex-direction:row-reverse !important}.flex-column-reverse{-webkit-box-orient:vertical !important;-webkit-box-direction:reverse !important;-ms-flex-direction:column-reverse !important;flex-direction:column-reverse !important}.flex-wrap{-ms-flex-wrap:wrap !important;flex-wrap:wrap !important}.flex-nowrap{-ms-flex-wrap:nowrap !important;flex-wrap:nowrap !important}.flex-wrap-reverse{-ms-flex-wrap:wrap-reverse !important;flex-wrap:wrap-reverse !important}.flex-fill{-webkit-box-flex:1 !important;-ms-flex:1 1 auto !important;flex:1 1 auto !important}.flex-grow-0{-webkit-box-flex:0 !important;-ms-flex-positive:0 !important;flex-grow:0 !important}.flex-grow-1{-webkit-box-flex:1 !important;-ms-flex-positive:1 !important;flex-grow:1 !important}.flex-shrink-0{-ms-flex-negative:0 !important;flex-shrink:0 !important}.flex-shrink-1{-ms-flex-negative:1 !important;flex-shrink:1 !important}.justify-content-start{-webkit-box-pack:start !important;-ms-flex-pack:start !important;justify-content:flex-start !important}.justify-content-end{-webkit-box-pack:end !important;-ms-flex-pack:end !important;justify-content:flex-end !important}.justify-content-center{-webkit-box-pack:center !important;-ms-flex-pack:center !important;justify-content:center !important}.justify-content-between{-webkit-box-pack:justify !important;-ms-flex-pack:justify !important;justify-content:space-between !important}.justify-content-around{-ms-flex-pack:distribute !important;justify-content:space-around !important}.align-items-start{-webkit-box-align:start !important;-ms-flex-align:start !important;align-items:flex-start !important}.align-items-end{-webkit-box-align:end !important;-ms-flex-align:end !important;align-items:flex-end !important}.align-items-center{-webkit-box-align:center !important;-ms-flex-align:center !important;align-items:center !important}.align-items-baseline{-webkit-box-align:baseline !important;-ms-flex-align:baseline !important;align-items:baseline !important}.align-items-stretch{-webkit-box-align:stretch !important;-ms-flex-align:stretch !important;align-items:stretch !important}.align-content-start{-ms-flex-line-pack:start !important;align-content:flex-start !important}.align-content-end{-ms-flex-line-pack:end !important;align-content:flex-end !important}.align-content-center{-ms-flex-line-pack:center !important;align-content:center !important}.align-content-between{-ms-flex-line-pack:justify !important;align-content:space-between !important}.align-content-around{-ms-flex-line-pack:distribute !important;align-content:space-around !important}.align-content-stretch{-ms-flex-line-pack:stretch !important;align-content:stretch !important}.align-self-auto{-ms-flex-item-align:auto !important;align-self:auto !important}.align-self-start{-ms-flex-item-align:start !important;align-self:flex-start !important}.align-self-end{-ms-flex-item-align:end !important;align-self:flex-end !important}.align-self-center{-ms-flex-item-align:center !important;align-self:center !important}.align-self-baseline{-ms-flex-item-align:baseline !important;align-self:baseline !important}.align-self-stretch{-ms-flex-item-align:stretch !important;align-self:stretch !important}@media (min-width: 576px){.flex-sm-row{-webkit-box-orient:horizontal !important;-webkit-box-direction:normal !important;-ms-flex-direction:row !important;flex-direction:row !important}.flex-sm-column{-webkit-box-orient:vertical !important;-webkit-box-direction:normal !important;-ms-flex-direction:column !important;flex-direction:column !important}.flex-sm-row-reverse{-webkit-box-orient:horizontal !important;-webkit-box-direction:reverse !important;-ms-flex-direction:row-reverse !important;flex-direction:row-reverse !important}.flex-sm-column-reverse{-webkit-box-orient:vertical !important;-webkit-box-direction:reverse !important;-ms-flex-direction:column-reverse !important;flex-direction:column-reverse !important}.flex-sm-wrap{-ms-flex-wrap:wrap !important;flex-wrap:wrap !important}.flex-sm-nowrap{-ms-flex-wrap:nowrap !important;flex-wrap:nowrap !important}.flex-sm-wrap-reverse{-ms-flex-wrap:wrap-reverse !important;flex-wrap:wrap-reverse !important}.flex-sm-fill{-webkit-box-flex:1 !important;-ms-flex:1 1 auto !important;flex:1 1 auto !important}.flex-sm-grow-0{-webkit-box-flex:0 !important;-ms-flex-positive:0 !important;flex-grow:0 !important}.flex-sm-grow-1{-webkit-box-flex:1 !important;-ms-flex-positive:1 !important;flex-grow:1 !important}.flex-sm-shrink-0{-ms-flex-negative:0 !important;flex-shrink:0 !important}.flex-sm-shrink-1{-ms-flex-negative:1 !important;flex-shrink:1 !important}.justify-content-sm-start{-webkit-box-pack:start !important;-ms-flex-pack:start !important;justify-content:flex-start !important}.justify-content-sm-end{-webkit-box-pack:end !important;-ms-flex-pack:end !important;justify-content:flex-end !important}.justify-content-sm-center{-webkit-box-pack:center !important;-ms-flex-pack:center !important;justify-content:center !important}.justify-content-sm-between{-webkit-box-pack:justify !important;-ms-flex-pack:justify !important;justify-content:space-between !important}.justify-content-sm-around{-ms-flex-pack:distribute !important;justify-content:space-around !important}.align-items-sm-start{-webkit-box-align:start !important;-ms-flex-align:start !important;align-items:flex-start !important}.align-items-sm-end{-webkit-box-align:end !important;-ms-flex-align:end !important;align-items:flex-end !important}.align-items-sm-center{-webkit-box-align:center !important;-ms-flex-align:center !important;align-items:center !important}.align-items-sm-baseline{-webkit-box-align:baseline !important;-ms-flex-align:baseline !important;align-items:baseline !important}.align-items-sm-stretch{-webkit-box-align:stretch !important;-ms-flex-align:stretch !important;align-items:stretch !important}.align-content-sm-start{-ms-flex-line-pack:start !important;align-content:flex-start !important}.align-content-sm-end{-ms-flex-line-pack:end !important;align-content:flex-end !important}.align-content-sm-center{-ms-flex-line-pack:center !important;align-content:center !important}.align-content-sm-between{-ms-flex-line-pack:justify !important;align-content:space-between !important}.align-content-sm-around{-ms-flex-line-pack:distribute !important;align-content:space-around !important}.align-content-sm-stretch{-ms-flex-line-pack:stretch !important;align-content:stretch !important}.align-self-sm-auto{-ms-flex-item-align:auto !important;align-self:auto !important}.align-self-sm-start{-ms-flex-item-align:start !important;align-self:flex-start !important}.align-self-sm-end{-ms-flex-item-align:end !important;align-self:flex-end !important}.align-self-sm-center{-ms-flex-item-align:center !important;align-self:center !important}.align-self-sm-baseline{-ms-flex-item-align:baseline !important;align-self:baseline !important}.align-self-sm-stretch{-ms-flex-item-align:stretch !important;align-self:stretch !important}}@media (min-width: 768px){.flex-md-row{-webkit-box-orient:horizontal !important;-webkit-box-direction:normal !important;-ms-flex-direction:row !important;flex-direction:row !important}.flex-md-column{-webkit-box-orient:vertical !important;-webkit-box-direction:normal !important;-ms-flex-direction:column !important;flex-direction:column !important}.flex-md-row-reverse{-webkit-box-orient:horizontal !important;-webkit-box-direction:reverse !important;-ms-flex-direction:row-reverse !important;flex-direction:row-reverse !important}.flex-md-column-reverse{-webkit-box-orient:vertical !important;-webkit-box-direction:reverse !important;-ms-flex-direction:column-reverse !important;flex-direction:column-reverse !important}.flex-md-wrap{-ms-flex-wrap:wrap !important;flex-wrap:wrap !important}.flex-md-nowrap{-ms-flex-wrap:nowrap !important;flex-wrap:nowrap !important}.flex-md-wrap-reverse{-ms-flex-wrap:wrap-reverse !important;flex-wrap:wrap-reverse !important}.flex-md-fill{-webkit-box-flex:1 !important;-ms-flex:1 1 auto !important;flex:1 1 auto !important}.flex-md-grow-0{-webkit-box-flex:0 !important;-ms-flex-positive:0 !important;flex-grow:0 !important}.flex-md-grow-1{-webkit-box-flex:1 !important;-ms-flex-positive:1 !important;flex-grow:1 !important}.flex-md-shrink-0{-ms-flex-negative:0 !important;flex-shrink:0 !important}.flex-md-shrink-1{-ms-flex-negative:1 !important;flex-shrink:1 !important}.justify-content-md-start{-webkit-box-pack:start !important;-ms-flex-pack:start !important;justify-content:flex-start !important}.justify-content-md-end{-webkit-box-pack:end !important;-ms-flex-pack:end !important;justify-content:flex-end !important}.justify-content-md-center{-webkit-box-pack:center !important;-ms-flex-pack:center !important;justify-content:center !important}.justify-content-md-between{-webkit-box-pack:justify !important;-ms-flex-pack:justify !important;justify-content:space-between !important}.justify-content-md-around{-ms-flex-pack:distribute !important;justify-content:space-around !important}.align-items-md-start{-webkit-box-align:start !important;-ms-flex-align:start !important;align-items:flex-start !important}.align-items-md-end{-webkit-box-align:end !important;-ms-flex-align:end !important;align-items:flex-end !important}.align-items-md-center{-webkit-box-align:center !important;-ms-flex-align:center !important;align-items:center !important}.align-items-md-baseline{-webkit-box-align:baseline !important;-ms-flex-align:baseline !important;align-items:baseline !important}.align-items-md-stretch{-webkit-box-align:stretch !important;-ms-flex-align:stretch !important;align-items:stretch !important}.align-content-md-start{-ms-flex-line-pack:start !important;align-content:flex-start !important}.align-content-md-end{-ms-flex-line-pack:end !important;align-content:flex-end !important}.align-content-md-center{-ms-flex-line-pack:center !important;align-content:center !important}.align-content-md-between{-ms-flex-line-pack:justify !important;align-content:space-between !important}.align-content-md-around{-ms-flex-line-pack:distribute !important;align-content:space-around !important}.align-content-md-stretch{-ms-flex-line-pack:stretch !important;align-content:stretch !important}.align-self-md-auto{-ms-flex-item-align:auto !important;align-self:auto !important}.align-self-md-start{-ms-flex-item-align:start !important;align-self:flex-start !important}.align-self-md-end{-ms-flex-item-align:end !important;align-self:flex-end !important}.align-self-md-center{-ms-flex-item-align:center !important;align-self:center !important}.align-self-md-baseline{-ms-flex-item-align:baseline !important;align-self:baseline !important}.align-self-md-stretch{-ms-flex-item-align:stretch !important;align-self:stretch !important}}@media (min-width: 992px){.flex-lg-row{-webkit-box-orient:horizontal !important;-webkit-box-direction:normal !important;-ms-flex-direction:row !important;flex-direction:row !important}.flex-lg-column{-webkit-box-orient:vertical !important;-webkit-box-direction:normal !important;-ms-flex-direction:column !important;flex-direction:column !important}.flex-lg-row-reverse{-webkit-box-orient:horizontal !important;-webkit-box-direction:reverse !important;-ms-flex-direction:row-reverse !important;flex-direction:row-reverse !important}.flex-lg-column-reverse{-webkit-box-orient:vertical !important;-webkit-box-direction:reverse !important;-ms-flex-direction:column-reverse !important;flex-direction:column-reverse !important}.flex-lg-wrap{-ms-flex-wrap:wrap !important;flex-wrap:wrap !important}.flex-lg-nowrap{-ms-flex-wrap:nowrap !important;flex-wrap:nowrap !important}.flex-lg-wrap-reverse{-ms-flex-wrap:wrap-reverse !important;flex-wrap:wrap-reverse !important}.flex-lg-fill{-webkit-box-flex:1 !important;-ms-flex:1 1 auto !important;flex:1 1 auto !important}.flex-lg-grow-0{-webkit-box-flex:0 !important;-ms-flex-positive:0 !important;flex-grow:0 !important}.flex-lg-grow-1{-webkit-box-flex:1 !important;-ms-flex-positive:1 !important;flex-grow:1 !important}.flex-lg-shrink-0{-ms-flex-negative:0 !important;flex-shrink:0 !important}.flex-lg-shrink-1{-ms-flex-negative:1 !important;flex-shrink:1 !important}.justify-content-lg-start{-webkit-box-pack:start !important;-ms-flex-pack:start !important;justify-content:flex-start !important}.justify-content-lg-end{-webkit-box-pack:end !important;-ms-flex-pack:end !important;justify-content:flex-end !important}.justify-content-lg-center{-webkit-box-pack:center !important;-ms-flex-pack:center !important;justify-content:center !important}.justify-content-lg-between{-webkit-box-pack:justify !important;-ms-flex-pack:justify !important;justify-content:space-between !important}.justify-content-lg-around{-ms-flex-pack:distribute !important;justify-content:space-around !important}.align-items-lg-start{-webkit-box-align:start !important;-ms-flex-align:start !important;align-items:flex-start !important}.align-items-lg-end{-webkit-box-align:end !important;-ms-flex-align:end !important;align-items:flex-end !important}.align-items-lg-center{-webkit-box-align:center !important;-ms-flex-align:center !important;align-items:center !important}.align-items-lg-baseline{-webkit-box-align:baseline !important;-ms-flex-align:baseline !important;align-items:baseline !important}.align-items-lg-stretch{-webkit-box-align:stretch !important;-ms-flex-align:stretch !important;align-items:stretch !important}.align-content-lg-start{-ms-flex-line-pack:start !important;align-content:flex-start !important}.align-content-lg-end{-ms-flex-line-pack:end !important;align-content:flex-end !important}.align-content-lg-center{-ms-flex-line-pack:center !important;align-content:center !important}.align-content-lg-between{-ms-flex-line-pack:justify !important;align-content:space-between !important}.align-content-lg-around{-ms-flex-line-pack:distribute !important;align-content:space-around !important}.align-content-lg-stretch{-ms-flex-line-pack:stretch !important;align-content:stretch !important}.align-self-lg-auto{-ms-flex-item-align:auto !important;align-self:auto !important}.align-self-lg-start{-ms-flex-item-align:start !important;align-self:flex-start !important}.align-self-lg-end{-ms-flex-item-align:end !important;align-self:flex-end !important}.align-self-lg-center{-ms-flex-item-align:center !important;align-self:center !important}.align-self-lg-baseline{-ms-flex-item-align:baseline !important;align-self:baseline !important}.align-self-lg-stretch{-ms-flex-item-align:stretch !important;align-self:stretch !important}}@media (min-width: 1200px){.flex-xl-row{-webkit-box-orient:horizontal !important;-webkit-box-direction:normal !important;-ms-flex-direction:row !important;flex-direction:row !important}.flex-xl-column{-webkit-box-orient:vertical !important;-webkit-box-direction:normal !important;-ms-flex-direction:column !important;flex-direction:column !important}.flex-xl-row-reverse{-webkit-box-orient:horizontal !important;-webkit-box-direction:reverse !important;-ms-flex-direction:row-reverse !important;flex-direction:row-reverse !important}.flex-xl-column-reverse{-webkit-box-orient:vertical !important;-webkit-box-direction:reverse !important;-ms-flex-direction:column-reverse !important;flex-direction:column-reverse !important}.flex-xl-wrap{-ms-flex-wrap:wrap !important;flex-wrap:wrap !important}.flex-xl-nowrap{-ms-flex-wrap:nowrap !important;flex-wrap:nowrap !important}.flex-xl-wrap-reverse{-ms-flex-wrap:wrap-reverse !important;flex-wrap:wrap-reverse !important}.flex-xl-fill{-webkit-box-flex:1 !important;-ms-flex:1 1 auto !important;flex:1 1 auto !important}.flex-xl-grow-0{-webkit-box-flex:0 !important;-ms-flex-positive:0 !important;flex-grow:0 !important}.flex-xl-grow-1{-webkit-box-flex:1 !important;-ms-flex-positive:1 !important;flex-grow:1 !important}.flex-xl-shrink-0{-ms-flex-negative:0 !important;flex-shrink:0 !important}.flex-xl-shrink-1{-ms-flex-negative:1 !important;flex-shrink:1 !important}.justify-content-xl-start{-webkit-box-pack:start !important;-ms-flex-pack:start !important;justify-content:flex-start !important}.justify-content-xl-end{-webkit-box-pack:end !important;-ms-flex-pack:end !important;justify-content:flex-end !important}.justify-content-xl-center{-webkit-box-pack:center !important;-ms-flex-pack:center !important;justify-content:center !important}.justify-content-xl-between{-webkit-box-pack:justify !important;-ms-flex-pack:justify !important;justify-content:space-between !important}.justify-content-xl-around{-ms-flex-pack:distribute !important;justify-content:space-around !important}.align-items-xl-start{-webkit-box-align:start !important;-ms-flex-align:start !important;align-items:flex-start !important}.align-items-xl-end{-webkit-box-align:end !important;-ms-flex-align:end !important;align-items:flex-end !important}.align-items-xl-center{-webkit-box-align:center !important;-ms-flex-align:center !important;align-items:center !important}.align-items-xl-baseline{-webkit-box-align:baseline !important;-ms-flex-align:baseline !important;align-items:baseline !important}.align-items-xl-stretch{-webkit-box-align:stretch !important;-ms-flex-align:stretch !important;align-items:stretch !important}.align-content-xl-start{-ms-flex-line-pack:start !important;align-content:flex-start !important}.align-content-xl-end{-ms-flex-line-pack:end !important;align-content:flex-end !important}.align-content-xl-center{-ms-flex-line-pack:center !important;align-content:center !important}.align-content-xl-between{-ms-flex-line-pack:justify !important;align-content:space-between !important}.align-content-xl-around{-ms-flex-line-pack:distribute !important;align-content:space-around !important}.align-content-xl-stretch{-ms-flex-line-pack:stretch !important;align-content:stretch !important}.align-self-xl-auto{-ms-flex-item-align:auto !important;align-self:auto !important}.align-self-xl-start{-ms-flex-item-align:start !important;align-self:flex-start !important}.align-self-xl-end{-ms-flex-item-align:end !important;align-self:flex-end !important}.align-self-xl-center{-ms-flex-item-align:center !important;align-self:center !important}.align-self-xl-baseline{-ms-flex-item-align:baseline !important;align-self:baseline !important}.align-self-xl-stretch{-ms-flex-item-align:stretch !important;align-self:stretch !important}}.float-left{float:left !important}.float-right{float:right !important}.float-none{float:none !important}@media (min-width: 576px){.float-sm-left{float:left !important}.float-sm-right{float:right !important}.float-sm-none{float:none !important}}@media (min-width: 768px){.float-md-left{float:left !important}.float-md-right{float:right !important}.float-md-none{float:none !important}}@media (min-width: 992px){.float-lg-left{float:left !important}.float-lg-right{float:right !important}.float-lg-none{float:none !important}}@media (min-width: 1200px){.float-xl-left{float:left !important}.float-xl-right{float:right !important}.float-xl-none{float:none !important}}.user-select-all{-webkit-user-select:all !important;-moz-user-select:all !important;-ms-user-select:all !important;user-select:all !important}.user-select-auto{-webkit-user-select:auto !important;-moz-user-select:auto !important;-ms-user-select:auto !important;user-select:auto !important}.user-select-none{-webkit-user-select:none !important;-moz-user-select:none !important;-ms-user-select:none !important;user-select:none !important}.overflow-auto{overflow:auto !important}.overflow-hidden{overflow:hidden !important}.position-static{position:static !important}.position-relative{position:relative !important}.position-absolute{position:absolute !important}.position-fixed{position:fixed !important}.position-sticky{position:-webkit-sticky !important;position:sticky !important}.fixed-top{position:fixed;top:0;right:0;left:0;z-index:1030}.fixed-bottom{position:fixed;right:0;bottom:0;left:0;z-index:1030}@supports (position: -webkit-sticky) or (position: sticky){.sticky-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto;white-space:normal}.shadow-sm{-webkit-box-shadow:0 0.125rem 0.25rem rgba(0,0,0,0.075) !important;box-shadow:0 0.125rem 0.25rem rgba(0,0,0,0.075) !important}.shadow{-webkit-box-shadow:0 0.5rem 1rem rgba(0,0,0,0.15) !important;box-shadow:0 0.5rem 1rem rgba(0,0,0,0.15) !important}.shadow-lg{-webkit-box-shadow:0 1rem 3rem rgba(0,0,0,0.175) !important;box-shadow:0 1rem 3rem rgba(0,0,0,0.175) !important}.shadow-none{-webkit-box-shadow:none !important;box-shadow:none !important}.w-25{width:25% !important}.w-50{width:50% !important}.w-75{width:75% !important}.w-100{width:100% !important}.w-auto{width:auto !important}.h-25{height:25% !important}.h-50{height:50% !important}.h-75{height:75% !important}.h-100{height:100% !important}.h-auto{height:auto !important}.mw-100{max-width:100% !important}.mh-100{max-height:100% !important}.min-vw-100{min-width:100vw !important}.min-vh-100{min-height:100vh !important}.vw-100{width:100vw !important}.vh-100{height:100vh !important}.m-0{margin:0 !important}.mt-0,.my-0{margin-top:0 !important}.mr-0,.mx-0{margin-right:0 !important}.mb-0,.my-0{margin-bottom:0 !important}.ml-0,.mx-0{margin-left:0 !important}.m-1{margin:0.25rem !important}.mt-1,.my-1{margin-top:0.25rem !important}.mr-1,.mx-1{margin-right:0.25rem !important}.mb-1,.my-1{margin-bottom:0.25rem !important}.ml-1,.mx-1{margin-left:0.25rem !important}.m-2{margin:0.5rem !important}.mt-2,.my-2{margin-top:0.5rem !important}.mr-2,.mx-2{margin-right:0.5rem !important}.mb-2,.my-2{margin-bottom:0.5rem !important}.ml-2,.mx-2{margin-left:0.5rem !important}.m-3{margin:1rem !important}.mt-3,.my-3{margin-top:1rem !important}.mr-3,.mx-3{margin-right:1rem !important}.mb-3,.my-3{margin-bottom:1rem !important}.ml-3,.mx-3{margin-left:1rem !important}.m-4{margin:1.5rem !important}.mt-4,.my-4{margin-top:1.5rem !important}.mr-4,.mx-4{margin-right:1.5rem !important}.mb-4,.my-4{margin-bottom:1.5rem !important}.ml-4,.mx-4{margin-left:1.5rem !important}.m-5{margin:3rem !important}.mt-5,.my-5{margin-top:3rem !important}.mr-5,.mx-5{margin-right:3rem !important}.mb-5,.my-5{margin-bottom:3rem !important}.ml-5,.mx-5{margin-left:3rem !important}.p-0{padding:0 !important}.pt-0,.py-0{padding-top:0 !important}.pr-0,.px-0{padding-right:0 !important}.pb-0,.py-0{padding-bottom:0 !important}.pl-0,.px-0{padding-left:0 !important}.p-1{padding:0.25rem !important}.pt-1,.py-1{padding-top:0.25rem !important}.pr-1,.px-1{padding-right:0.25rem !important}.pb-1,.py-1{padding-bottom:0.25rem !important}.pl-1,.px-1{padding-left:0.25rem !important}.p-2{padding:0.5rem !important}.pt-2,.py-2{padding-top:0.5rem !important}.pr-2,.px-2{padding-right:0.5rem !important}.pb-2,.py-2{padding-bottom:0.5rem !important}.pl-2,.px-2{padding-left:0.5rem !important}.p-3{padding:1rem !important}.pt-3,.py-3{padding-top:1rem !important}.pr-3,.px-3{padding-right:1rem !important}.pb-3,.py-3{padding-bottom:1rem !important}.pl-3,.px-3{padding-left:1rem !important}.p-4{padding:1.5rem !important}.pt-4,.py-4{padding-top:1.5rem !important}.pr-4,.px-4{padding-right:1.5rem !important}.pb-4,.py-4{padding-bottom:1.5rem !important}.pl-4,.px-4{padding-left:1.5rem !important}.p-5{padding:3rem !important}.pt-5,.py-5{padding-top:3rem !important}.pr-5,.px-5{padding-right:3rem !important}.pb-5,.py-5{padding-bottom:3rem !important}.pl-5,.px-5{padding-left:3rem !important}.m-n1{margin:-0.25rem !important}.mt-n1,.my-n1{margin-top:-0.25rem !important}.mr-n1,.mx-n1{margin-right:-0.25rem !important}.mb-n1,.my-n1{margin-bottom:-0.25rem !important}.ml-n1,.mx-n1{margin-left:-0.25rem !important}.m-n2{margin:-0.5rem !important}.mt-n2,.my-n2{margin-top:-0.5rem !important}.mr-n2,.mx-n2{margin-right:-0.5rem !important}.mb-n2,.my-n2{margin-bottom:-0.5rem !important}.ml-n2,.mx-n2{margin-left:-0.5rem !important}.m-n3{margin:-1rem !important}.mt-n3,.my-n3{margin-top:-1rem !important}.mr-n3,.mx-n3{margin-right:-1rem !important}.mb-n3,.my-n3{margin-bottom:-1rem !important}.ml-n3,.mx-n3{margin-left:-1rem !important}.m-n4{margin:-1.5rem !important}.mt-n4,.my-n4{margin-top:-1.5rem !important}.mr-n4,.mx-n4{margin-right:-1.5rem !important}.mb-n4,.my-n4{margin-bottom:-1.5rem !important}.ml-n4,.mx-n4{margin-left:-1.5rem !important}.m-n5{margin:-3rem !important}.mt-n5,.my-n5{margin-top:-3rem !important}.mr-n5,.mx-n5{margin-right:-3rem !important}.mb-n5,.my-n5{margin-bottom:-3rem !important}.ml-n5,.mx-n5{margin-left:-3rem !important}.m-auto{margin:auto !important}.mt-auto,.my-auto{margin-top:auto !important}.mr-auto,.mx-auto{margin-right:auto !important}.mb-auto,.my-auto{margin-bottom:auto !important}.ml-auto,.mx-auto{margin-left:auto !important}@media (min-width: 576px){.m-sm-0{margin:0 !important}.mt-sm-0,.my-sm-0{margin-top:0 !important}.mr-sm-0,.mx-sm-0{margin-right:0 !important}.mb-sm-0,.my-sm-0{margin-bottom:0 !important}.ml-sm-0,.mx-sm-0{margin-left:0 !important}.m-sm-1{margin:0.25rem !important}.mt-sm-1,.my-sm-1{margin-top:0.25rem !important}.mr-sm-1,.mx-sm-1{margin-right:0.25rem !important}.mb-sm-1,.my-sm-1{margin-bottom:0.25rem !important}.ml-sm-1,.mx-sm-1{margin-left:0.25rem !important}.m-sm-2{margin:0.5rem !important}.mt-sm-2,.my-sm-2{margin-top:0.5rem !important}.mr-sm-2,.mx-sm-2{margin-right:0.5rem !important}.mb-sm-2,.my-sm-2{margin-bottom:0.5rem !important}.ml-sm-2,.mx-sm-2{margin-left:0.5rem !important}.m-sm-3{margin:1rem !important}.mt-sm-3,.my-sm-3{margin-top:1rem !important}.mr-sm-3,.mx-sm-3{margin-right:1rem !important}.mb-sm-3,.my-sm-3{margin-bottom:1rem !important}.ml-sm-3,.mx-sm-3{margin-left:1rem !important}.m-sm-4{margin:1.5rem !important}.mt-sm-4,.my-sm-4{margin-top:1.5rem !important}.mr-sm-4,.mx-sm-4{margin-right:1.5rem !important}.mb-sm-4,.my-sm-4{margin-bottom:1.5rem !important}.ml-sm-4,.mx-sm-4{margin-left:1.5rem !important}.m-sm-5{margin:3rem !important}.mt-sm-5,.my-sm-5{margin-top:3rem !important}.mr-sm-5,.mx-sm-5{margin-right:3rem !important}.mb-sm-5,.my-sm-5{margin-bottom:3rem !important}.ml-sm-5,.mx-sm-5{margin-left:3rem !important}.p-sm-0{padding:0 !important}.pt-sm-0,.py-sm-0{padding-top:0 !important}.pr-sm-0,.px-sm-0{padding-right:0 !important}.pb-sm-0,.py-sm-0{padding-bottom:0 !important}.pl-sm-0,.px-sm-0{padding-left:0 !important}.p-sm-1{padding:0.25rem !important}.pt-sm-1,.py-sm-1{padding-top:0.25rem !important}.pr-sm-1,.px-sm-1{padding-right:0.25rem !important}.pb-sm-1,.py-sm-1{padding-bottom:0.25rem !important}.pl-sm-1,.px-sm-1{padding-left:0.25rem !important}.p-sm-2{padding:0.5rem !important}.pt-sm-2,.py-sm-2{padding-top:0.5rem !important}.pr-sm-2,.px-sm-2{padding-right:0.5rem !important}.pb-sm-2,.py-sm-2{padding-bottom:0.5rem !important}.pl-sm-2,.px-sm-2{padding-left:0.5rem !important}.p-sm-3{padding:1rem !important}.pt-sm-3,.py-sm-3{padding-top:1rem !important}.pr-sm-3,.px-sm-3{padding-right:1rem !important}.pb-sm-3,.py-sm-3{padding-bottom:1rem !important}.pl-sm-3,.px-sm-3{padding-left:1rem !important}.p-sm-4{padding:1.5rem !important}.pt-sm-4,.py-sm-4{padding-top:1.5rem !important}.pr-sm-4,.px-sm-4{padding-right:1.5rem !important}.pb-sm-4,.py-sm-4{padding-bottom:1.5rem !important}.pl-sm-4,.px-sm-4{padding-left:1.5rem !important}.p-sm-5{padding:3rem !important}.pt-sm-5,.py-sm-5{padding-top:3rem !important}.pr-sm-5,.px-sm-5{padding-right:3rem !important}.pb-sm-5,.py-sm-5{padding-bottom:3rem !important}.pl-sm-5,.px-sm-5{padding-left:3rem !important}.m-sm-n1{margin:-0.25rem !important}.mt-sm-n1,.my-sm-n1{margin-top:-0.25rem !important}.mr-sm-n1,.mx-sm-n1{margin-right:-0.25rem !important}.mb-sm-n1,.my-sm-n1{margin-bottom:-0.25rem !important}.ml-sm-n1,.mx-sm-n1{margin-left:-0.25rem !important}.m-sm-n2{margin:-0.5rem !important}.mt-sm-n2,.my-sm-n2{margin-top:-0.5rem !important}.mr-sm-n2,.mx-sm-n2{margin-right:-0.5rem !important}.mb-sm-n2,.my-sm-n2{margin-bottom:-0.5rem !important}.ml-sm-n2,.mx-sm-n2{margin-left:-0.5rem !important}.m-sm-n3{margin:-1rem !important}.mt-sm-n3,.my-sm-n3{margin-top:-1rem !important}.mr-sm-n3,.mx-sm-n3{margin-right:-1rem !important}.mb-sm-n3,.my-sm-n3{margin-bottom:-1rem !important}.ml-sm-n3,.mx-sm-n3{margin-left:-1rem !important}.m-sm-n4{margin:-1.5rem !important}.mt-sm-n4,.my-sm-n4{margin-top:-1.5rem !important}.mr-sm-n4,.mx-sm-n4{margin-right:-1.5rem !important}.mb-sm-n4,.my-sm-n4{margin-bottom:-1.5rem !important}.ml-sm-n4,.mx-sm-n4{margin-left:-1.5rem !important}.m-sm-n5{margin:-3rem !important}.mt-sm-n5,.my-sm-n5{margin-top:-3rem !important}.mr-sm-n5,.mx-sm-n5{margin-right:-3rem !important}.mb-sm-n5,.my-sm-n5{margin-bottom:-3rem !important}.ml-sm-n5,.mx-sm-n5{margin-left:-3rem !important}.m-sm-auto{margin:auto !important}.mt-sm-auto,.my-sm-auto{margin-top:auto !important}.mr-sm-auto,.mx-sm-auto{margin-right:auto !important}.mb-sm-auto,.my-sm-auto{margin-bottom:auto !important}.ml-sm-auto,.mx-sm-auto{margin-left:auto !important}}@media (min-width: 768px){.m-md-0{margin:0 !important}.mt-md-0,.my-md-0{margin-top:0 !important}.mr-md-0,.mx-md-0{margin-right:0 !important}.mb-md-0,.my-md-0{margin-bottom:0 !important}.ml-md-0,.mx-md-0{margin-left:0 !important}.m-md-1{margin:0.25rem !important}.mt-md-1,.my-md-1{margin-top:0.25rem !important}.mr-md-1,.mx-md-1{margin-right:0.25rem !important}.mb-md-1,.my-md-1{margin-bottom:0.25rem !important}.ml-md-1,.mx-md-1{margin-left:0.25rem !important}.m-md-2{margin:0.5rem !important}.mt-md-2,.my-md-2{margin-top:0.5rem !important}.mr-md-2,.mx-md-2{margin-right:0.5rem !important}.mb-md-2,.my-md-2{margin-bottom:0.5rem !important}.ml-md-2,.mx-md-2{margin-left:0.5rem !important}.m-md-3{margin:1rem !important}.mt-md-3,.my-md-3{margin-top:1rem !important}.mr-md-3,.mx-md-3{margin-right:1rem !important}.mb-md-3,.my-md-3{margin-bottom:1rem !important}.ml-md-3,.mx-md-3{margin-left:1rem !important}.m-md-4{margin:1.5rem !important}.mt-md-4,.my-md-4{margin-top:1.5rem !important}.mr-md-4,.mx-md-4{margin-right:1.5rem !important}.mb-md-4,.my-md-4{margin-bottom:1.5rem !important}.ml-md-4,.mx-md-4{margin-left:1.5rem !important}.m-md-5{margin:3rem !important}.mt-md-5,.my-md-5{margin-top:3rem !important}.mr-md-5,.mx-md-5{margin-right:3rem !important}.mb-md-5,.my-md-5{margin-bottom:3rem !important}.ml-md-5,.mx-md-5{margin-left:3rem !important}.p-md-0{padding:0 !important}.pt-md-0,.py-md-0{padding-top:0 !important}.pr-md-0,.px-md-0{padding-right:0 !important}.pb-md-0,.py-md-0{padding-bottom:0 !important}.pl-md-0,.px-md-0{padding-left:0 !important}.p-md-1{padding:0.25rem !important}.pt-md-1,.py-md-1{padding-top:0.25rem !important}.pr-md-1,.px-md-1{padding-right:0.25rem !important}.pb-md-1,.py-md-1{padding-bottom:0.25rem !important}.pl-md-1,.px-md-1{padding-left:0.25rem !important}.p-md-2{padding:0.5rem !important}.pt-md-2,.py-md-2{padding-top:0.5rem !important}.pr-md-2,.px-md-2{padding-right:0.5rem !important}.pb-md-2,.py-md-2{padding-bottom:0.5rem !important}.pl-md-2,.px-md-2{padding-left:0.5rem !important}.p-md-3{padding:1rem !important}.pt-md-3,.py-md-3{padding-top:1rem !important}.pr-md-3,.px-md-3{padding-right:1rem !important}.pb-md-3,.py-md-3{padding-bottom:1rem !important}.pl-md-3,.px-md-3{padding-left:1rem !important}.p-md-4{padding:1.5rem !important}.pt-md-4,.py-md-4{padding-top:1.5rem !important}.pr-md-4,.px-md-4{padding-right:1.5rem !important}.pb-md-4,.py-md-4{padding-bottom:1.5rem !important}.pl-md-4,.px-md-4{padding-left:1.5rem !important}.p-md-5{padding:3rem !important}.pt-md-5,.py-md-5{padding-top:3rem !important}.pr-md-5,.px-md-5{padding-right:3rem !important}.pb-md-5,.py-md-5{padding-bottom:3rem !important}.pl-md-5,.px-md-5{padding-left:3rem !important}.m-md-n1{margin:-0.25rem !important}.mt-md-n1,.my-md-n1{margin-top:-0.25rem !important}.mr-md-n1,.mx-md-n1{margin-right:-0.25rem !important}.mb-md-n1,.my-md-n1{margin-bottom:-0.25rem !important}.ml-md-n1,.mx-md-n1{margin-left:-0.25rem !important}.m-md-n2{margin:-0.5rem !important}.mt-md-n2,.my-md-n2{margin-top:-0.5rem !important}.mr-md-n2,.mx-md-n2{margin-right:-0.5rem !important}.mb-md-n2,.my-md-n2{margin-bottom:-0.5rem !important}.ml-md-n2,.mx-md-n2{margin-left:-0.5rem !important}.m-md-n3{margin:-1rem !important}.mt-md-n3,.my-md-n3{margin-top:-1rem !important}.mr-md-n3,.mx-md-n3{margin-right:-1rem !important}.mb-md-n3,.my-md-n3{margin-bottom:-1rem !important}.ml-md-n3,.mx-md-n3{margin-left:-1rem !important}.m-md-n4{margin:-1.5rem !important}.mt-md-n4,.my-md-n4{margin-top:-1.5rem !important}.mr-md-n4,.mx-md-n4{margin-right:-1.5rem !important}.mb-md-n4,.my-md-n4{margin-bottom:-1.5rem !important}.ml-md-n4,.mx-md-n4{margin-left:-1.5rem !important}.m-md-n5{margin:-3rem !important}.mt-md-n5,.my-md-n5{margin-top:-3rem !important}.mr-md-n5,.mx-md-n5{margin-right:-3rem !important}.mb-md-n5,.my-md-n5{margin-bottom:-3rem !important}.ml-md-n5,.mx-md-n5{margin-left:-3rem !important}.m-md-auto{margin:auto !important}.mt-md-auto,.my-md-auto{margin-top:auto !important}.mr-md-auto,.mx-md-auto{margin-right:auto !important}.mb-md-auto,.my-md-auto{margin-bottom:auto !important}.ml-md-auto,.mx-md-auto{margin-left:auto !important}}@media (min-width: 992px){.m-lg-0{margin:0 !important}.mt-lg-0,.my-lg-0{margin-top:0 !important}.mr-lg-0,.mx-lg-0{margin-right:0 !important}.mb-lg-0,.my-lg-0{margin-bottom:0 !important}.ml-lg-0,.mx-lg-0{margin-left:0 !important}.m-lg-1{margin:0.25rem !important}.mt-lg-1,.my-lg-1{margin-top:0.25rem !important}.mr-lg-1,.mx-lg-1{margin-right:0.25rem !important}.mb-lg-1,.my-lg-1{margin-bottom:0.25rem !important}.ml-lg-1,.mx-lg-1{margin-left:0.25rem !important}.m-lg-2{margin:0.5rem !important}.mt-lg-2,.my-lg-2{margin-top:0.5rem !important}.mr-lg-2,.mx-lg-2{margin-right:0.5rem !important}.mb-lg-2,.my-lg-2{margin-bottom:0.5rem !important}.ml-lg-2,.mx-lg-2{margin-left:0.5rem !important}.m-lg-3{margin:1rem !important}.mt-lg-3,.my-lg-3{margin-top:1rem !important}.mr-lg-3,.mx-lg-3{margin-right:1rem !important}.mb-lg-3,.my-lg-3{margin-bottom:1rem !important}.ml-lg-3,.mx-lg-3{margin-left:1rem !important}.m-lg-4{margin:1.5rem !important}.mt-lg-4,.my-lg-4{margin-top:1.5rem !important}.mr-lg-4,.mx-lg-4{margin-right:1.5rem !important}.mb-lg-4,.my-lg-4{margin-bottom:1.5rem !important}.ml-lg-4,.mx-lg-4{margin-left:1.5rem !important}.m-lg-5{margin:3rem !important}.mt-lg-5,.my-lg-5{margin-top:3rem !important}.mr-lg-5,.mx-lg-5{margin-right:3rem !important}.mb-lg-5,.my-lg-5{margin-bottom:3rem !important}.ml-lg-5,.mx-lg-5{margin-left:3rem !important}.p-lg-0{padding:0 !important}.pt-lg-0,.py-lg-0{padding-top:0 !important}.pr-lg-0,.px-lg-0{padding-right:0 !important}.pb-lg-0,.py-lg-0{padding-bottom:0 !important}.pl-lg-0,.px-lg-0{padding-left:0 !important}.p-lg-1{padding:0.25rem !important}.pt-lg-1,.py-lg-1{padding-top:0.25rem !important}.pr-lg-1,.px-lg-1{padding-right:0.25rem !important}.pb-lg-1,.py-lg-1{padding-bottom:0.25rem !important}.pl-lg-1,.px-lg-1{padding-left:0.25rem !important}.p-lg-2{padding:0.5rem !important}.pt-lg-2,.py-lg-2{padding-top:0.5rem !important}.pr-lg-2,.px-lg-2{padding-right:0.5rem !important}.pb-lg-2,.py-lg-2{padding-bottom:0.5rem !important}.pl-lg-2,.px-lg-2{padding-left:0.5rem !important}.p-lg-3{padding:1rem !important}.pt-lg-3,.py-lg-3{padding-top:1rem !important}.pr-lg-3,.px-lg-3{padding-right:1rem !important}.pb-lg-3,.py-lg-3{padding-bottom:1rem !important}.pl-lg-3,.px-lg-3{padding-left:1rem !important}.p-lg-4{padding:1.5rem !important}.pt-lg-4,.py-lg-4{padding-top:1.5rem !important}.pr-lg-4,.px-lg-4{padding-right:1.5rem !important}.pb-lg-4,.py-lg-4{padding-bottom:1.5rem !important}.pl-lg-4,.px-lg-4{padding-left:1.5rem !important}.p-lg-5{padding:3rem !important}.pt-lg-5,.py-lg-5{padding-top:3rem !important}.pr-lg-5,.px-lg-5{padding-right:3rem !important}.pb-lg-5,.py-lg-5{padding-bottom:3rem !important}.pl-lg-5,.px-lg-5{padding-left:3rem !important}.m-lg-n1{margin:-0.25rem !important}.mt-lg-n1,.my-lg-n1{margin-top:-0.25rem !important}.mr-lg-n1,.mx-lg-n1{margin-right:-0.25rem !important}.mb-lg-n1,.my-lg-n1{margin-bottom:-0.25rem !important}.ml-lg-n1,.mx-lg-n1{margin-left:-0.25rem !important}.m-lg-n2{margin:-0.5rem !important}.mt-lg-n2,.my-lg-n2{margin-top:-0.5rem !important}.mr-lg-n2,.mx-lg-n2{margin-right:-0.5rem !important}.mb-lg-n2,.my-lg-n2{margin-bottom:-0.5rem !important}.ml-lg-n2,.mx-lg-n2{margin-left:-0.5rem !important}.m-lg-n3{margin:-1rem !important}.mt-lg-n3,.my-lg-n3{margin-top:-1rem !important}.mr-lg-n3,.mx-lg-n3{margin-right:-1rem !important}.mb-lg-n3,.my-lg-n3{margin-bottom:-1rem !important}.ml-lg-n3,.mx-lg-n3{margin-left:-1rem !important}.m-lg-n4{margin:-1.5rem !important}.mt-lg-n4,.my-lg-n4{margin-top:-1.5rem !important}.mr-lg-n4,.mx-lg-n4{margin-right:-1.5rem !important}.mb-lg-n4,.my-lg-n4{margin-bottom:-1.5rem !important}.ml-lg-n4,.mx-lg-n4{margin-left:-1.5rem !important}.m-lg-n5{margin:-3rem !important}.mt-lg-n5,.my-lg-n5{margin-top:-3rem !important}.mr-lg-n5,.mx-lg-n5{margin-right:-3rem !important}.mb-lg-n5,.my-lg-n5{margin-bottom:-3rem !important}.ml-lg-n5,.mx-lg-n5{margin-left:-3rem !important}.m-lg-auto{margin:auto !important}.mt-lg-auto,.my-lg-auto{margin-top:auto !important}.mr-lg-auto,.mx-lg-auto{margin-right:auto !important}.mb-lg-auto,.my-lg-auto{margin-bottom:auto !important}.ml-lg-auto,.mx-lg-auto{margin-left:auto !important}}@media (min-width: 1200px){.m-xl-0{margin:0 !important}.mt-xl-0,.my-xl-0{margin-top:0 !important}.mr-xl-0,.mx-xl-0{margin-right:0 !important}.mb-xl-0,.my-xl-0{margin-bottom:0 !important}.ml-xl-0,.mx-xl-0{margin-left:0 !important}.m-xl-1{margin:0.25rem !important}.mt-xl-1,.my-xl-1{margin-top:0.25rem !important}.mr-xl-1,.mx-xl-1{margin-right:0.25rem !important}.mb-xl-1,.my-xl-1{margin-bottom:0.25rem !important}.ml-xl-1,.mx-xl-1{margin-left:0.25rem !important}.m-xl-2{margin:0.5rem !important}.mt-xl-2,.my-xl-2{margin-top:0.5rem !important}.mr-xl-2,.mx-xl-2{margin-right:0.5rem !important}.mb-xl-2,.my-xl-2{margin-bottom:0.5rem !important}.ml-xl-2,.mx-xl-2{margin-left:0.5rem !important}.m-xl-3{margin:1rem !important}.mt-xl-3,.my-xl-3{margin-top:1rem !important}.mr-xl-3,.mx-xl-3{margin-right:1rem !important}.mb-xl-3,.my-xl-3{margin-bottom:1rem !important}.ml-xl-3,.mx-xl-3{margin-left:1rem !important}.m-xl-4{margin:1.5rem !important}.mt-xl-4,.my-xl-4{margin-top:1.5rem !important}.mr-xl-4,.mx-xl-4{margin-right:1.5rem !important}.mb-xl-4,.my-xl-4{margin-bottom:1.5rem !important}.ml-xl-4,.mx-xl-4{margin-left:1.5rem !important}.m-xl-5{margin:3rem !important}.mt-xl-5,.my-xl-5{margin-top:3rem !important}.mr-xl-5,.mx-xl-5{margin-right:3rem !important}.mb-xl-5,.my-xl-5{margin-bottom:3rem !important}.ml-xl-5,.mx-xl-5{margin-left:3rem !important}.p-xl-0{padding:0 !important}.pt-xl-0,.py-xl-0{padding-top:0 !important}.pr-xl-0,.px-xl-0{padding-right:0 !important}.pb-xl-0,.py-xl-0{padding-bottom:0 !important}.pl-xl-0,.px-xl-0{padding-left:0 !important}.p-xl-1{padding:0.25rem !important}.pt-xl-1,.py-xl-1{padding-top:0.25rem !important}.pr-xl-1,.px-xl-1{padding-right:0.25rem !important}.pb-xl-1,.py-xl-1{padding-bottom:0.25rem !important}.pl-xl-1,.px-xl-1{padding-left:0.25rem !important}.p-xl-2{padding:0.5rem !important}.pt-xl-2,.py-xl-2{padding-top:0.5rem !important}.pr-xl-2,.px-xl-2{padding-right:0.5rem !important}.pb-xl-2,.py-xl-2{padding-bottom:0.5rem !important}.pl-xl-2,.px-xl-2{padding-left:0.5rem !important}.p-xl-3{padding:1rem !important}.pt-xl-3,.py-xl-3{padding-top:1rem !important}.pr-xl-3,.px-xl-3{padding-right:1rem !important}.pb-xl-3,.py-xl-3{padding-bottom:1rem !important}.pl-xl-3,.px-xl-3{padding-left:1rem !important}.p-xl-4{padding:1.5rem !important}.pt-xl-4,.py-xl-4{padding-top:1.5rem !important}.pr-xl-4,.px-xl-4{padding-right:1.5rem !important}.pb-xl-4,.py-xl-4{padding-bottom:1.5rem !important}.pl-xl-4,.px-xl-4{padding-left:1.5rem !important}.p-xl-5{padding:3rem !important}.pt-xl-5,.py-xl-5{padding-top:3rem !important}.pr-xl-5,.px-xl-5{padding-right:3rem !important}.pb-xl-5,.py-xl-5{padding-bottom:3rem !important}.pl-xl-5,.px-xl-5{padding-left:3rem !important}.m-xl-n1{margin:-0.25rem !important}.mt-xl-n1,.my-xl-n1{margin-top:-0.25rem !important}.mr-xl-n1,.mx-xl-n1{margin-right:-0.25rem !important}.mb-xl-n1,.my-xl-n1{margin-bottom:-0.25rem !important}.ml-xl-n1,.mx-xl-n1{margin-left:-0.25rem !important}.m-xl-n2{margin:-0.5rem !important}.mt-xl-n2,.my-xl-n2{margin-top:-0.5rem !important}.mr-xl-n2,.mx-xl-n2{margin-right:-0.5rem !important}.mb-xl-n2,.my-xl-n2{margin-bottom:-0.5rem !important}.ml-xl-n2,.mx-xl-n2{margin-left:-0.5rem !important}.m-xl-n3{margin:-1rem !important}.mt-xl-n3,.my-xl-n3{margin-top:-1rem !important}.mr-xl-n3,.mx-xl-n3{margin-right:-1rem !important}.mb-xl-n3,.my-xl-n3{margin-bottom:-1rem !important}.ml-xl-n3,.mx-xl-n3{margin-left:-1rem !important}.m-xl-n4{margin:-1.5rem !important}.mt-xl-n4,.my-xl-n4{margin-top:-1.5rem !important}.mr-xl-n4,.mx-xl-n4{margin-right:-1.5rem !important}.mb-xl-n4,.my-xl-n4{margin-bottom:-1.5rem !important}.ml-xl-n4,.mx-xl-n4{margin-left:-1.5rem !important}.m-xl-n5{margin:-3rem !important}.mt-xl-n5,.my-xl-n5{margin-top:-3rem !important}.mr-xl-n5,.mx-xl-n5{margin-right:-3rem !important}.mb-xl-n5,.my-xl-n5{margin-bottom:-3rem !important}.ml-xl-n5,.mx-xl-n5{margin-left:-3rem !important}.m-xl-auto{margin:auto !important}.mt-xl-auto,.my-xl-auto{margin-top:auto !important}.mr-xl-auto,.mx-xl-auto{margin-right:auto !important}.mb-xl-auto,.my-xl-auto{margin-bottom:auto !important}.ml-xl-auto,.mx-xl-auto{margin-left:auto !important}}.stretched-link::after{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;pointer-events:auto;content:\"\";background-color:rgba(0,0,0,0)}.text-monospace{font-family:SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace !important}.text-justify{text-align:justify !important}.text-wrap{white-space:normal !important}.text-nowrap{white-space:nowrap !important}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-left{text-align:left !important}.text-right{text-align:right !important}.text-center{text-align:center !important}@media (min-width: 576px){.text-sm-left{text-align:left !important}.text-sm-right{text-align:right !important}.text-sm-center{text-align:center !important}}@media (min-width: 768px){.text-md-left{text-align:left !important}.text-md-right{text-align:right !important}.text-md-center{text-align:center !important}}@media (min-width: 992px){.text-lg-left{text-align:left !important}.text-lg-right{text-align:right !important}.text-lg-center{text-align:center !important}}@media (min-width: 1200px){.text-xl-left{text-align:left !important}.text-xl-right{text-align:right !important}.text-xl-center{text-align:center !important}}.text-lowercase{text-transform:lowercase !important}.text-uppercase{text-transform:uppercase !important}.text-capitalize{text-transform:capitalize !important}.font-weight-light{font-weight:300 !important}.font-weight-lighter{font-weight:lighter !important}.font-weight-normal{font-weight:400 !important}.font-weight-bold{font-weight:700 !important}.font-weight-bolder{font-weight:bolder !important}.font-italic{font-style:italic !important}.text-white{color:#fff !important}.text-primary{color:#4582EC !important}a.text-primary:hover,a.text-primary:focus{color:#1559cf !important}.text-secondary{color:#adb5bd !important}a.text-secondary:hover,a.text-secondary:focus{color:#838f9b !important}.text-success{color:#02B875 !important}a.text-success:hover,a.text-success:focus{color:#016c45 !important}.text-info{color:#17a2b8 !important}a.text-info:hover,a.text-info:focus{color:#0f6674 !important}.text-warning{color:#f0ad4e !important}a.text-warning:hover,a.text-warning:focus{color:#df8a13 !important}.text-danger{color:#d9534f !important}a.text-danger:hover,a.text-danger:focus{color:#b52b27 !important}.text-light{color:#f8f9fa !important}a.text-light:hover,a.text-light:focus{color:#cbd3da !important}.text-dark{color:#343a40 !important}a.text-dark:hover,a.text-dark:focus{color:#121416 !important}.text-body{color:#343a40 !important}.text-muted{color:#868e96 !important}.text-black-50{color:rgba(0,0,0,0.5) !important}.text-white-50{color:rgba(255,255,255,0.5) !important}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.text-decoration-none{text-decoration:none !important}.text-break{word-wrap:break-word !important}.text-reset{color:inherit !important}.visible{visibility:visible !important}.invisible{visibility:hidden !important}@media print{*,*::before,*::after{text-shadow:none !important;-webkit-box-shadow:none !important;box-shadow:none !important}a:not(.btn){text-decoration:underline}abbr[title]::after{content:\" (\" attr(title) \")\"}pre{white-space:pre-wrap !important}pre,blockquote{border:1px solid #adb5bd;page-break-inside:avoid}thead{display:table-header-group}tr,img{page-break-inside:avoid}p,h2,h3{orphans:3;widows:3}h2,h3{page-break-after:avoid}@page{size:a3}body{min-width:992px !important}.container{min-width:992px !important}.navbar{display:none}.badge{border:1px solid #000}.table{border-collapse:collapse !important}.table td,.table th{background-color:#fff !important}.table-bordered th,.table-bordered td{border:1px solid #ddd !important}.table-dark{color:inherit}.table-dark th,.table-dark td,.table-dark thead th,.table-dark tbody+tbody{border-color:rgba(0,0,0,0.1)}.table .thead-dark th{color:inherit;border-color:rgba(0,0,0,0.1)}}.navbar{font-size:0.930125rem}.navbar.bg-dark{background-color:#02B875 !important}.navbar.bg-light{background-color:#fff !important;border:1px solid rgba(0,0,0,0.1)}.navbar.bg-light.navbar-fixed-top{border-width:0 0 1px 0}.navbar.bg-light.navbar-fixed-bottom{border-width:1px 0 0 0}.btn{border-radius:1.078em}.btn-lg,.btn-group-lg>.btn{border-radius:2.688em}.btn-sm,.btn-group-sm>.btn{border-radius:0.844em}p{font-family:Georgia, Cambria, \"Times New Roman\", Times, serif}blockquote{font-style:italic}footer{font-size:0.930125rem}.lead{color:#868e96;font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"}table,.table{font-size:0.930125rem}table-primary,table-secondary,table-success,table-info,table-warning,table-danger,.table-primary,.table-secondary,.table-success,.table-info,.table-warning,.table-danger{color:#fff}.table-primary,.table-primary>th,.table-primary>td{background-color:#4582EC}.table-secondary,.table-secondary>th,.table-secondary>td{background-color:#adb5bd}.table-light,.table-light>th,.table-light>td{background-color:#f8f9fa}.table-dark,.table-dark>th,.table-dark>td{background-color:#343a40}.table-success,.table-success>th,.table-success>td{background-color:#02B875}.table-info,.table-info>th,.table-info>td{background-color:#17a2b8}.table-danger,.table-danger>th,.table-danger>td{background-color:#d9534f}.table-warning,.table-warning>th,.table-warning>td{background-color:#f0ad4e}.table-active,.table-active>th,.table-active>td{background-color:rgba(0,0,0,0.075)}.table-hover .table-primary:hover,.table-hover .table-primary:hover>th,.table-hover .table-primary:hover>td{background-color:#2e72ea}.table-hover .table-secondary:hover,.table-hover .table-secondary:hover>th,.table-hover .table-secondary:hover>td{background-color:#9fa8b2}.table-hover .table-light:hover,.table-hover .table-light:hover>th,.table-hover .table-light:hover>td{background-color:#e9ecef}.table-hover .table-dark:hover,.table-hover .table-dark:hover>th,.table-hover .table-dark:hover>td{background-color:#292d32}.table-hover .table-success:hover,.table-hover .table-success:hover>th,.table-hover .table-success:hover>td{background-color:#029f65}.table-hover .table-info:hover,.table-hover .table-info:hover>th,.table-hover .table-info:hover>td{background-color:#148ea1}.table-hover .table-danger:hover,.table-hover .table-danger:hover>th,.table-hover .table-danger:hover>td{background-color:#d43f3a}.table-hover .table-warning:hover,.table-hover .table-warning:hover>th,.table-hover .table-warning:hover>td{background-color:#eea236}.table-hover .table-active:hover,.table-hover .table-active:hover>th,.table-hover .table-active:hover>td{background-color:rgba(0,0,0,0.075)}.nav,.breadcrumb,.pagination{font-size:0.930125rem}.dropdown-menu{font-size:0.930125rem}.alert{color:#fff;font-size:0.930125rem}.alert,.alert p{font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"}.alert a,.alert .alert-link{color:#fff;font-weight:normal;text-decoration:underline}.alert-primary{background-color:#4582EC}.alert-secondary{background-color:#adb5bd}.alert-success{background-color:#02B875}.alert-info{background-color:#17a2b8}.alert-warning{background-color:#f0ad4e}.alert-danger{background-color:#d9534f}.alert-light{background-color:#f8f9fa}.alert-dark{background-color:#343a40}.alert-light,.alert-light a,.alert-light .alert-link{color:#343a40}.badge{vertical-align:bottom}.list-group{font-size:0.930125rem}\n"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/native-url/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/native-url/dist/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var e,t=(e=__webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js"))&&"object"==typeof e&&"default"in e?e.default:e,r=/https?|ftp|gopher|file/;function o(e){"string"==typeof e&&(e=g(e));var o=function(e,t,r){var o=e.auth,a=e.hostname,s=e.protocol||"",c=e.pathname||"",h=e.hash||"",p=e.query||"",n=!1;o=o?encodeURIComponent(o).replace(/%3A/i,":")+"@":"",e.host?n=o+e.host:a&&(n=o+(~a.indexOf(":")?"["+a+"]":a),e.port&&(n+=":"+e.port)),p&&"object"==typeof p&&(p=t.encode(p));var l=e.search||p&&"?"+p||"";return s&&":"!==s.substr(-1)&&(s+=":"),e.slashes||(!s||r.test(s))&&!1!==n?(n="//"+(n||""),c&&"/"!==c[0]&&(c="/"+c)):n||(n=""),h&&"#"!==h[0]&&(h="#"+h),l&&"?"!==l[0]&&(l="?"+l),{protocol:s,host:n,pathname:c=c.replace(/[?#]/g,encodeURIComponent),search:l=l.replace("#","%23"),hash:h}}(e,t,r);return""+o.protocol+o.host+o.pathname+o.search+o.hash}var a="http://",s="w.w",c=a+s,h=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,p=/https?|ftp|gopher|file/;function n(e,t){var r="string"==typeof e?g(e):e;e="object"==typeof e?o(e):e;var s=g(t),n="";r.protocol&&!r.slashes&&(n=r.protocol,e=e.replace(r.protocol,""),n+="/"===t[0]||"/"===e[0]?"/":""),n&&s.protocol&&(n="",s.slashes||(n=s.protocol,t=t.replace(s.protocol,"")));var l=e.match(h);l&&!s.protocol&&(e=e.substr((n=l[1]+(l[2]||"")).length),/^\/\/[^/]/.test(t)&&(n=n.slice(0,-1)));var i=new URL(e,c+"/"),f=new URL(t,i).toString().replace(c,""),u=s.protocol||r.protocol;return u+=r.slashes||s.slashes?"//":"",!n&&u?f=f.replace(a,u):n&&(f=f.replace(a,"")),p.test(f)||~t.indexOf(".")||"/"===e.slice(-1)||"/"===t.slice(-1)||"/"!==f.slice(-1)||(f=f.slice(0,-1)),n&&(f=n+("/"===f[0]?f.substr(1):f)),f}function l(){}l.parse=g,l.format=o,l.resolve=n,l.resolveObject=n;var i=/^https?|ftp|gopher|file/,f=/^(.*?)([#?].*)/,u=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,m=/^([a-z0-9.+-]*:)?\/\/\/*/i,v=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function d(e){try{return decodeURI(e)}catch(t){return e}}function g(e,r,a){if(void 0===r&&(r=!1),void 0===a&&(a=!1),e&&"object"==typeof e&&e instanceof l)return e;var h=(e=e.trim()).match(f);e=h?d(h[1]).replace(/\\/g,"/")+h[2]:d(e).replace(/\\/g,"/"),v.test(e)&&"/"!==e.slice(-1)&&(e+="/");var p=!/(^javascript)/.test(e)&&e.match(u),n=m.test(e),g="";p&&(i.test(p[1])||(g=p[1].toLowerCase(),e=""+p[2]+p[3]),p[2]||(n=!1,i.test(p[1])?(g=p[1],e=""+p[3]):e="//"+p[3]),3!==p[2].length&&1!==p[2].length||(g=p[1],e="/"+p[3]));var b,y=(h?h[1]:e).match(/(:[0-9]+)/),j="";y&&y[1]&&3===y[1].length&&(e=e.replace(j=y[1],j+"00"));var w=new l,x="",U="";try{b=new URL(e)}catch(t){x=t,g||a||!/^\/\//.test(e)||/^\/\/.+[@.]/.test(e)||(U="/",e=e.substr(1));try{b=new URL(e,c)}catch(e){return w.protocol=g,w.href=g,w}}w.slashes=n&&!U,w.host=b.host===s?"":b.host,w.hostname=b.hostname===s?"":b.hostname.replace(/(\[|\])/g,""),w.protocol=x?g||null:b.protocol,w.search=b.search.replace(/\\/g,"%5C"),w.hash=b.hash.replace(/\\/g,"%5C");var R=e.split("#");!w.search&&~R[0].indexOf("?")&&(w.search="?"),w.hash||""!==R[1]||(w.hash="#"),w.query=r?t.decode(b.search.substr(1)):w.search.substr(1),w.pathname=U+d(b.pathname).replace(/"/g,"%22"),"about:"===w.protocol&&"blank"===w.pathname&&(w.protocol="",w.pathname=""),x&&"/"!==e[0]&&(w.pathname=w.pathname.substr(1)),g&&!i.test(g)&&"/"!==e.slice(-1)&&"/"===w.pathname&&(w.pathname=""),w.path=w.pathname+w.search,w.auth=[b.username,b.password].map(decodeURIComponent).filter(Boolean).join(":"),w.port=b.port,j&&(w.host=w.host.replace(j+"00",j),w.port=w.port.slice(0,-2)),w.href=U?""+w.pathname+w.search+w.hash:o(w);var O=/^(file)/.test(w.href)?["host","hostname"]:[];return Object.keys(w).forEach(function(e){~O.indexOf(e)||(w[e]=w[e]||null)}),w}exports.parse=g,exports.format=o,exports.resolve=n,exports.resolveObject=function(e,t){return g(n(e,t))},exports.Url=l;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!./":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/_app", function() {
      var mod = __webpack_require__(/*! private-next-pages/_app.js */ "./pages/_app.js")
      if(true) {
        module.hot.accept(/*! private-next-pages/_app.js */ "./pages/_app.js", function() {
          if(!next.router.components["/_app"]) return
          var updatedPage = __webpack_require__(/*! private-next-pages/_app.js */ "./pages/_app.js")
          next.router.update("/_app", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _construct = __webpack_require__(/*! @babel/runtime/helpers/construct */ "./node_modules/@babel/runtime/helpers/construct.js");

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (true) {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
urlPropertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  return _react["default"].useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = _construct(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  var _iterator = _createForOfIteratorHelper(urlPropertyFields),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var property = _step.value;

      if (typeof _router[property] === 'object') {
        instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

        continue;
      }

      instance[property] = _router[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  instance.events = _router2["default"].events;
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react["default"].createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  var all = Object.create(null);
  return {
    on: function on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off: function off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type) {
      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        evts[_key - 1] = arguments[_key];
      }

      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(function (handler) {
        handler.apply(void 0, evts);
      });
    }
  };
}

exports["default"] = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.RouterContext = React.createContext(null);

if (true) {
  exports.RouterContext.displayName = 'RouterContext';
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

var mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

var prepareRoute = function prepareRoute(path) {
  return toRoute(!path || path === '/' ? '/index' : path);
};

function fetchNextData(pathname, query, isServerRender, cb) {
  var attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: "/_next/data/".concat(__NEXT_DATA__.buildId).concat(pathname, ".json"),
      query: query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(function (res) {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error("Failed to load static props");
      }

      return res.json();
    });
  }

  return getResponse().then(function (data) {
    return cb ? cb(data) : data;
  })["catch"](function (err) {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

var Router = /*#__PURE__*/function () {
  function Router(pathname, query, as, _ref) {
    var _this = this;

    var initialProps = _ref.initialProps,
        pageLoader = _ref.pageLoader,
        App = _ref.App,
        wrapApp = _ref.wrapApp,
        Component = _ref.Component,
        err = _ref.err,
        subscription = _ref.subscription,
        isFallback = _ref.isFallback;

    _classCallCheck(this, Router);

    // Static Data Cache
    this.sdc = {};

    this.onPopState = function (e) {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var _pathname = _this.pathname,
            _query = _this.query;

        _this.changeState('replaceState', utils_1.formatWithValidation({
          pathname: _pathname,
          query: _query
        }), utils_1.getURL());

        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && _this.isSsr && e.state.as === _this.asPath && url_1.parse(e.state.url).pathname === _this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (_this._bps && !_this._bps(e.state)) {
        return;
      }

      var _e$state = e.state,
          url = _e$state.url,
          as = _e$state.as,
          options = _e$state.options;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      _this.replace(url, as, options);
    };

    this._getStaticData = function (asPath) {
      var pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, _this.isSsr, function (data) {
        return _this.sdc[pathname] = data;
      });
    };

    this._getServerData = function (asPath) {
      var _url_1$parse = url_1.parse(asPath, true),
          pathname = _url_1$parse.pathname,
          query = _url_1$parse.query;

      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, _this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component: Component,
        props: initialProps,
        err: err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (true) {
      // in order for `e.state` to work on the `onpopstate` event
      // we have to register the initial route upon initialization
      this.changeState('replaceState', utils_1.formatWithValidation({
        pathname: pathname,
        query: query
      }), as);
      window.addEventListener('popstate', this.onPopState);
    }
  } // @deprecated backwards compatibility even though it's a private method.


  _createClass(Router, [{
    key: "update",
    value: function update(route, mod) {
      var Component = mod["default"] || mod;
      var data = this.components[route];

      if (!data) {
        throw new Error("Cannot update unavailable route: ".concat(route));
      }

      var newData = Object.assign(Object.assign({}, data), {
        Component: Component,
        __N_SSG: mod.__N_SSG,
        __N_SSP: mod.__N_SSP
      });
      this.components[route] = newData; // pages/_app.js updated

      if (route === '/_app') {
        this.notify(this.components[this.route]);
        return;
      }

      if (route === this.route) {
        this.notify(newData);
      }
    }
  }, {
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
    /**
     * Go back in history
     */

  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
    /**
     * Performs a `pushState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "push",
    value: function push(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('pushState', url, as, options);
    }
    /**
     * Performs a `replaceState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "replace",
    value: function replace(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function change(method, _url, _as, options) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        if (!options._h) {
          _this2.isSsr = false;
        } // marking route changes as a navigation start entry


        if (utils_1.ST) {
          performance.mark('routeChange');
        } // If url and as provided as an object representation,
        // we'll format them into the string version here.


        var url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
        var as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
        url = addBasePath(url);
        as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
        // "<page>/index.html" directly for the SSR page.

        if (false) { var rewriteUrlForNextExport; }

        _this2.abortComponentLoad(as); // If the url change is only related to a hash change
        // We should not proceed. We should only change the state.
        // WARNING: `_h` is an internal option for handing Next.js client-side
        // hydration. Your app should _never_ use this property. It may change at
        // any time without notice.


        if (!options._h && _this2.onlyAHashChange(as)) {
          _this2.asPath = as;
          Router.events.emit('hashChangeStart', as);

          _this2.changeState(method, url, as, options);

          _this2.scrollToHash(as);

          Router.events.emit('hashChangeComplete', as);
          return resolve(true);
        }

        var _url_1$parse2 = url_1.parse(url, true),
            pathname = _url_1$parse2.pathname,
            query = _url_1$parse2.query,
            protocol = _url_1$parse2.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return resolve(false);
        } // If asked to change the current URL we should reload the current page
        // (not location.reload() but reload getInitialProps and other Next.js stuffs)
        // We also need to set the method = replaceState always
        // as this should not go into the history (That's how browsers work)
        // We should compare the new asPath to the current asPath, not the url


        if (!_this2.urlIsNew(as)) {
          method = 'replaceState';
        }

        var route = toRoute(pathname);
        var _options$shallow = options.shallow,
            shallow = _options$shallow === void 0 ? false : _options$shallow;

        if (is_dynamic_1.isDynamicRoute(route)) {
          var _url_1$parse3 = url_1.parse(as),
              asPathname = _url_1$parse3.pathname;

          var routeRegex = route_regex_1.getRouteRegex(route);
          var routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

          if (!routeMatch) {
            var missingParams = Object.keys(routeRegex.groups).filter(function (param) {
              return !query[param];
            });

            if (missingParams.length > 0) {
              if (true) {
                console.warn("Mismatching `as` and `href` failed to manually provide " + "the params: ".concat(missingParams.join(', '), " in the `href`'s `query`"));
              }

              return reject(new Error("The provided `as` value (".concat(asPathname, ") is incompatible with the `href` value (").concat(route, "). ") + "Read more: https://err.sh/zeit/next.js/incompatible-href-as"));
            }
          } else {
            // Merge params into `query`, overwriting any specified in search
            Object.assign(query, routeMatch);
          }
        }

        Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

        _this2.getRouteInfo(route, pathname, query, as, shallow).then(function (routeInfo) {
          var error = routeInfo.error;

          if (error && error.cancelled) {
            return resolve(false);
          }

          Router.events.emit('beforeHistoryChange', as);

          _this2.changeState(method, url, as, options);

          if (true) {
            var appComp = _this2.components['/_app'].Component;
            window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
          }

          _this2.set(route, pathname, query, as, routeInfo);

          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        }, reject);
      });
    }
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (true) {
        if (typeof window.history === 'undefined') {
          console.error("Warning: window.history is not available.");
          return;
        }

        if (typeof window.history[method] === 'undefined') {
          console.error("Warning: window.history.".concat(method, " is not available"));
          return;
        }
      }

      if (method !== 'pushState' || utils_1.getURL() !== as) {
        window.history[method]({
          url: url,
          as: as,
          options: options
        }, // Most browsers currently ignores this parameter, although they may use it in the future.
        // Passing the empty string here should be safe against future changes to the method.
        // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
        '', as);
      }
    }
  }, {
    key: "getRouteInfo",
    value: function getRouteInfo(route, pathname, query, as) {
      var _this3 = this;

      var shallow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
      // If the route is already rendered on the screen.

      if (shallow && cachedRouteInfo && this.route === route) {
        return Promise.resolve(cachedRouteInfo);
      }

      var handleError = function handleError(err, loadErrorFail) {
        return new Promise(function (resolve) {
          if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
            // If we can't load the page it could be one of following reasons
            //  1. Page doesn't exists
            //  2. Page does exist in a different zone
            //  3. Internal error while loading the page
            // So, doing a hard reload is the proper way to deal with this.
            window.location.href = as; // Changing the URL doesn't block executing the current code path.
            // So, we need to mark it as a cancelled error and stop the routing logic.

            err.cancelled = true; // @ts-ignore TODO: fix the control flow here

            return resolve({
              error: err
            });
          }

          if (err.cancelled) {
            // @ts-ignore TODO: fix the control flow here
            return resolve({
              error: err
            });
          }

          resolve(_this3.fetchComponent('/_error').then(function (res) {
            var Component = res.page;
            var routeInfo = {
              Component: Component,
              err: err
            };
            return new Promise(function (resolve) {
              _this3.getInitialProps(Component, {
                err: err,
                pathname: pathname,
                query: query
              }).then(function (props) {
                routeInfo.props = props;
                routeInfo.error = err;
                resolve(routeInfo);
              }, function (gipErr) {
                console.error('Error in error page `getInitialProps`: ', gipErr);
                routeInfo.error = err;
                routeInfo.props = {};
                resolve(routeInfo);
              });
            });
          })["catch"](function (err) {
            return handleError(err, true);
          }));
        });
      };

      return new Promise(function (resolve, reject) {
        if (cachedRouteInfo) {
          return resolve(cachedRouteInfo);
        }

        _this3.fetchComponent(route).then(function (res) {
          return resolve({
            Component: res.page,
            __N_SSG: res.mod.__N_SSG,
            __N_SSP: res.mod.__N_SSP
          });
        }, reject);
      }).then(function (routeInfo) {
        var Component = routeInfo.Component,
            __N_SSG = routeInfo.__N_SSG,
            __N_SSP = routeInfo.__N_SSP;

        if (true) {
          var _require = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js"),
              isValidElementType = _require.isValidElementType;

          if (!isValidElementType(Component)) {
            throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));
          }
        }

        return _this3._getData(function () {
          return __N_SSG ? _this3._getStaticData(as) : __N_SSP ? _this3._getServerData(as) : _this3.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
          {
            pathname: pathname,
            query: query,
            asPath: as
          });
        }).then(function (props) {
          routeInfo.props = props;
          _this3.components[route] = routeInfo;
          return routeInfo;
        });
      })["catch"](handleError);
    }
  }, {
    key: "set",
    value: function set(route, pathname, query, as, data) {
      this.isFallback = false;
      this.route = route;
      this.pathname = pathname;
      this.query = query;
      this.asPath = as;
      this.notify(data);
    }
    /**
     * Callback to execute before replacing router state
     * @param cb callback to be executed
     */

  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._bps = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = _slicedToArray(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = _slicedToArray(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = _slicedToArray(_as$split3, 2),
          hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value


      if (hash === '') {
        window.scrollTo(0, 0);
        return;
      } // First we check if the element by id is found


      var idEl = document.getElementById(hash);

      if (idEl) {
        idEl.scrollIntoView();
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(hash)[0];

      if (nameEl) {
        nameEl.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      return this.asPath !== asPath;
    }
    /**
     * Prefetch page code, you may wait for the data during page rendering.
     * This feature only works in production!
     * @param url the href of prefetched page
     * @param asPath the as path of the prefetched page
     */

  }, {
    key: "prefetch",
    value: function prefetch(url) {
      var _this4 = this;

      var asPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return new Promise(function (resolve, reject) {
        var _url_1$parse4 = url_1.parse(url),
            pathname = _url_1$parse4.pathname,
            protocol = _url_1$parse4.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return;
        } // Prefetch is not supported in development mode because it would trigger on-demand-entries


        if (true) {
          return;
        }

        var route = delBasePath(toRoute(pathname));
        Promise.all([_this4.pageLoader.prefetchData(url, delBasePath(asPath)), _this4.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(function () {
          return resolve();
        }, reject);
      });
    }
  }, {
    key: "fetchComponent",
    value: function fetchComponent(route) {
      var cancelled, cancel, componentResult, error;
      return _regeneratorRuntime.async(function fetchComponent$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              cancelled = false;

              cancel = this.clc = function () {
                cancelled = true;
              };

              route = delBasePath(route);
              _context.next = 5;
              return _regeneratorRuntime.awrap(this.pageLoader.loadPage(route));

            case 5:
              componentResult = _context.sent;

              if (!cancelled) {
                _context.next = 10;
                break;
              }

              error = new Error("Abort fetching component for route: \"".concat(route, "\""));
              error.cancelled = true;
              throw error;

            case 10:
              if (cancel === this.clc) {
                this.clc = null;
              }

              return _context.abrupt("return", componentResult);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "_getData",
    value: function _getData(fn) {
      var _this5 = this;

      var cancelled = false;

      var cancel = function cancel() {
        cancelled = true;
      };

      this.clc = cancel;
      return fn().then(function (data) {
        if (cancel === _this5.clc) {
          _this5.clc = null;
        }

        if (cancelled) {
          var err = new Error('Loading initial props cancelled');
          err.cancelled = true;
          throw err;
        }

        return data;
      });
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(Component, ctx) {
      var App = this.components['/_app'].Component;

      var AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      return utils_1.loadGetInitialProps(App, {
        AppTree: AppTree,
        Component: Component,
        router: this,
        ctx: ctx
      });
    }
  }, {
    key: "abortComponentLoad",
    value: function abortComponentLoad(as) {
      if (this.clc) {
        var e = new Error('Route Cancelled');
        e.cancelled = true;
        Router.events.emit('routeChangeError', e, as);
        this.clc();
        this.clc = null;
      }
    }
  }, {
    key: "notify",
    value: function notify(data) {
      this.sub(data, this.components['/_app'].Component);
    }
  }], [{
    key: "_rewriteUrlForNextExport",
    value: function _rewriteUrlForNextExport(url) {
      if (false) { var rewriteUrlForNextExport; } else {
        return url;
      }
    }
  }]);

  return Router;
}();

exports["default"] = Router;
Router.events = mitt_1["default"]();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

var TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  var re = routeRegex.re,
      groups = routeRegex.groups;
  return function (pathname) {
    var routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    var decode = function decode(param) {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        var err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    var params = {};
    Object.keys(groups).forEach(function (slugName) {
      var g = groups[slugName];
      var m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(function (entry) {
          return decode(entry);
        }) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  var escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  var groups = {};
  var groupIndex = 1;
  var parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, function (_, $1) {
    var isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups: groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");
/**
 * Utils
 */


function execOnce(fn) {
  var used = false;
  var result;
  return function () {
    if (!used) {
      used = true;
      result = fn.apply(void 0, arguments);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

function loadGetInitialProps(App, ctx) {
  var _a, message, res, props, _message;

  return _regeneratorRuntime.async(function loadGetInitialProps$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          if (!((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps)) {
            _context.next = 4;
            break;
          }

          message = "\"".concat(getDisplayName(App), ".getInitialProps()\" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.");
          throw new Error(message);

        case 4:
          // when called from _app `ctx` is nested in `ctx`
          res = ctx.res || ctx.ctx && ctx.ctx.res;

          if (App.getInitialProps) {
            _context.next = 12;
            break;
          }

          if (!(ctx.ctx && ctx.Component)) {
            _context.next = 11;
            break;
          }

          _context.next = 9;
          return _regeneratorRuntime.awrap(loadGetInitialProps(ctx.Component, ctx.ctx));

        case 9:
          _context.t0 = _context.sent;
          return _context.abrupt("return", {
            pageProps: _context.t0
          });

        case 11:
          return _context.abrupt("return", {});

        case 12:
          _context.next = 14;
          return _regeneratorRuntime.awrap(App.getInitialProps(ctx));

        case 14:
          props = _context.sent;

          if (!(res && isResSent(res))) {
            _context.next = 17;
            break;
          }

          return _context.abrupt("return", props);

        case 17:
          if (props) {
            _context.next = 20;
            break;
          }

          _message = "\"".concat(getDisplayName(App), ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
          throw new Error(_message);

        case 20:
          if (true) {
            if (Object.keys(props).length === 0 && !ctx.ctx) {
              console.warn("".concat(getDisplayName(App), " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps"));
            }
          }

          return _context.abrupt("return", props);

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(function (key) {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn("Unknown key passed via urlObject into url.format: ".concat(key));
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_c2e10d183b950a67d9e7 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_c2e10d183b950a67d9e7 */ "dll-reference dll_c2e10d183b950a67d9e7"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

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
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.scss */ "./styles/globals.scss");
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/bootstrap.min.css */ "./styles/bootstrap.min.css");
/* harmony import */ var _styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_bootswatch_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/_bootswatch.scss */ "./styles/_bootswatch.scss");
/* harmony import */ var _styles_bootswatch_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_bootswatch_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_blog_layout_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/blog-layout.scss */ "./styles/blog-layout.scss");
/* harmony import */ var _styles_blog_layout_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_blog_layout_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_blog_list_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/blog-list.scss */ "./styles/blog-list.scss");
/* harmony import */ var _styles_blog_list_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_blog_list_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_recent_articles_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/recent-articles.scss */ "./styles/recent-articles.scss");
/* harmony import */ var _styles_recent_articles_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_recent_articles_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_landing_page_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/landing-page.scss */ "./styles/landing-page.scss");
/* harmony import */ var _styles_landing_page_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_landing_page_scss__WEBPACK_IMPORTED_MODULE_9__);

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
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.crossorigin = 'anonymous';
    script.setAttribute('data-ad-client', _constants_constants__WEBPACK_IMPORTED_MODULE_2__["adClientId"]);
    script.async = true;
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
    document.head.appendChild(script);
    script.addEventListener('load', onLoad);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  })), rerender);
}

/***/ }),

/***/ "./styles/_bootswatch.scss":
/*!*********************************!*\
  !*** ./styles/_bootswatch.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./_bootswatch.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/_bootswatch.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./_bootswatch.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/_bootswatch.scss",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./_bootswatch.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/_bootswatch.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./styles/blog-layout.scss":
/*!*********************************!*\
  !*** ./styles/blog-layout.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./blog-layout.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/blog-layout.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./blog-layout.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/blog-layout.scss",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./blog-layout.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/blog-layout.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./styles/blog-list.scss":
/*!*******************************!*\
  !*** ./styles/blog-list.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./blog-list.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/blog-list.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./blog-list.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/blog-list.scss",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./blog-list.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/blog-list.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./styles/bootstrap.min.css":
/*!**********************************!*\
  !*** ./styles/bootstrap.min.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./bootstrap.min.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/bootstrap.min.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./bootstrap.min.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/bootstrap.min.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./bootstrap.min.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/bootstrap.min.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./styles/globals.scss":
/*!*****************************!*\
  !*** ./styles/globals.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./globals.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/globals.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./globals.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/globals.scss",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./globals.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/globals.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./styles/landing-page.scss":
/*!**********************************!*\
  !*** ./styles/landing-page.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./landing-page.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/landing-page.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./landing-page.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/landing-page.scss",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./landing-page.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/landing-page.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./styles/recent-articles.scss":
/*!*************************************!*\
  !*** ./styles/recent-articles.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./recent-articles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/recent-articles.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./recent-articles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/recent-articles.scss",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./recent-articles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/recent-articles.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ 0:
/*!*******************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js ./node_modules/next/dist/client/router.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!./");
module.exports = __webpack_require__(/*! /home/dinesh/work_dump/my_projects/space_blog/node_modules/next/dist/client/router.js */"./node_modules/next/dist/client/router.js");


/***/ }),

/***/ "dll-reference dll_c2e10d183b950a67d9e7":
/*!*******************************************!*\
  !*** external "dll_c2e10d183b950a67d9e7" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_c2e10d183b950a67d9e7;

/***/ })

},[[0,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=_app.js.map