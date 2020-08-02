webpackHotUpdate("static/development/pages/archive.js",{

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
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("a", {
    "aria-label": "space science",
    className: "jsx-1121977759" + " " + "navbar-brand",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, "Space Science")), __jsx("button", {
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
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "jsx-1121977759" + " " + "navbar-toggler-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-1121977759" + " " + "collapse navbar-collapse ".concat(open ? 'show' : ''),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx("ul", {
    className: "jsx-1121977759" + " " + "navbar-nav ml-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, topics.map(function (top, index) {
    return __jsx("li", {
      key: index,
      className: "jsx-1121977759" + " " + "nav-item active",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 15
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/archive?name=".concat(top.name, "&id=").concat(top.id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }
    }, __jsx("a", {
      "aria-label": top.label,
      className: "jsx-1121977759" + " " + "nav-link",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 19
      }
    }, top.label)));
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1121977759",
    __self: this
  }, ".cover-image.jsx-1121977759{width:100%;height:20vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RpbmVzaC93b3JrX2R1bXAvbXlfcHJvamVjdHMvc3BhY2VfYmxvZy9jb21wb25lbnRzL05hdkJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ1MsQUFHNEIsV0FDQyxZQUNoQiIsImZpbGUiOiIvaG9tZS9kaW5lc2gvd29ya19kdW1wL215X3Byb2plY3RzL3NwYWNlX2Jsb2cvY29tcG9uZW50cy9OYXZCYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5pbXBvcnQgeyBuYXZMaW5rcyB9IGZyb20gJy4uL2NvbnN0YW50cy9jb25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZCYXIoKSB7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB0b3BpY3MgPSBuYXZMaW5rcztcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1kYXJrIGJnLXByaW1hcnlcIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8YSBhcmlhLWxhYmVsPVwic3BhY2Ugc2NpZW5jZVwiIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPlNwYWNlIFNjaWVuY2U8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlclwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKCFvcGVuKX0gYXJpYS1jb250cm9scz1cIm5hdmJhckNvbG9yMDNcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCIgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlICR7b3BlbiA/ICdzaG93JyA6ICcnfWB9PlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1sLWF1dG9cIj5cbiAgICAgICAgICAgIHt0b3BpY3MubWFwKCh0b3AsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJuYXYtaXRlbSBhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2FyY2hpdmU/bmFtZT0ke3RvcC5uYW1lfSZpZD0ke3RvcC5pZH1gfT5cbiAgICAgICAgICAgICAgICAgIDxhIGFyaWEtbGFiZWw9e3RvcC5sYWJlbH0gY2xhc3NOYW1lPVwibmF2LWxpbmtcIj57dG9wLmxhYmVsfTwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIHsvKiA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIiBhcz1cIi9hYm91dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5BYm91dDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+ICovfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICAgICA8c3R5bGUganN4PVwibmFiYmFyLXN0eWxlXCI+XG4gICAgICAgIHtgXG4gICAgICAgICAgICAuY292ZXItaW1hZ2Uge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjB2aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/home/dinesh/work_dump/my_projects/space_blog/components/NavBar.js */"));
}

/***/ })

})
//# sourceMappingURL=archive.js.9edcf0ffc9fa1785e023.hot-update.js.map