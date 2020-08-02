webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavBar; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/constants */ "./constants/constants.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_constants_constants__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/dinesh/work_dump/my_projects/space_blog/components/NavBar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function NavBar() {
  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      open = _useState[0],
      setOpen = _useState[1];

  var topics = _constants_constants__WEBPACK_IMPORTED_MODULE_3__["navLinks"];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("nav", {
    className: "jsx-1121977759" + " " + "navbar navbar-expand-lg navbar-dark bg-primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "/",
    "aria-label": "space science",
    className: "jsx-1121977759" + " " + "navbar-brand",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, "Space Science"), __jsx("button", {
    type: "button",
    onClick: function onClick() {
      return setOpen(!open);
    },
    "aria-controls": "navbarColor03",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation",
    className: "jsx-1121977759" + " " + "navbar-toggler",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "jsx-1121977759" + " " + "navbar-toggler-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-1121977759" + " " + "collapse navbar-collapse ".concat(open ? 'show' : ''),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("ul", {
    className: "jsx-1121977759" + " " + "navbar-nav ml-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, topics.map(function (top, index) {
    return __jsx("li", {
      key: index,
      className: "jsx-1121977759" + " " + "nav-item active",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 15
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/archive?name=".concat(top.name, "&id=").concat(top.id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }
    }, __jsx("a", {
      "aria-label": top.label,
      className: "jsx-1121977759" + " " + "nav-link",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 19
      }
    }, top.label)));
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1121977759",
    __self: this
  }, ".cover-image.jsx-1121977759{width:100%;height:20vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RpbmVzaC93b3JrX2R1bXAvbXlfcHJvamVjdHMvc3BhY2VfYmxvZy9jb21wb25lbnRzL05hdkJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ1MsQUFHNEIsV0FDQyxZQUNoQiIsImZpbGUiOiIvaG9tZS9kaW5lc2gvd29ya19kdW1wL215X3Byb2plY3RzL3NwYWNlX2Jsb2cvY29tcG9uZW50cy9OYXZCYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5pbXBvcnQgeyBuYXZMaW5rcyB9IGZyb20gJy4uL2NvbnN0YW50cy9jb25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZCYXIoKSB7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB0b3BpY3MgPSBuYXZMaW5rcztcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1kYXJrIGJnLXByaW1hcnlcIj5cbiAgICAgICAgPGEgaHJlZj1cIi9cIiBhcmlhLWxhYmVsPVwic3BhY2Ugc2NpZW5jZVwiIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPlNwYWNlIFNjaWVuY2U8L2E+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gc2V0T3Blbighb3Blbil9IGFyaWEtY29udHJvbHM9XCJuYXZiYXJDb2xvcjAzXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZSAke29wZW4gPyAnc2hvdycgOiAnJ31gfT5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtbC1hdXRvXCI+XG4gICAgICAgICAgICB7dG9waWNzLm1hcCgodG9wLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwibmF2LWl0ZW0gYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9hcmNoaXZlP25hbWU9JHt0b3AubmFtZX0maWQ9JHt0b3AuaWR9YH0+XG4gICAgICAgICAgICAgICAgICA8YSBhcmlhLWxhYmVsPXt0b3AubGFiZWx9IGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+e3RvcC5sYWJlbH08L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICB7LyogPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIGFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCIgYXM9XCIvYWJvdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+QWJvdXQ8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPiAqL31cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuICAgICAgPHN0eWxlIGpzeD1cIm5hYmJhci1zdHlsZVwiPlxuICAgICAgICB7YFxuICAgICAgICAgICAgLmNvdmVyLWltYWdlIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwdmg7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/home/dinesh/work_dump/my_projects/space_blog/components/NavBar.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.d4501348f7bc85c2bc3e.hot-update.js.map