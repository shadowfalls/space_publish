webpackHotUpdate("static/development/pages/archive.js",{

/***/ "./pages/archive/index.js":
/*!********************************!*\
  !*** ./pages/archive/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Type; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/utils */ "./services/utils.js");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/NavBar */ "./components/NavBar.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Footer */ "./components/Footer.js");
/* harmony import */ var _styles_BlogList_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/BlogList.style */ "./styles/BlogList.style.js");
var _jsxFileName = "/home/dinesh/work_dump/my_projects/space_blog/pages/archive/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function Type() {
  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      blogs = _useState[0],
      setBlogs = _useState[1];

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])(),
      query = _useRouter.query;

  var name = query.name,
      id = query.id;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!id) return;
    Object(_services_utils__WEBPACK_IMPORTED_MODULE_3__["getBlogsByCategory"])(id).then(function (res) {
      if (res.data && Array.isArray(res.data)) setBlogs(res.data);else if (res.data && res.data.data && Array.isArray(res.data.data)) {
        setBlogs(res.data.data.map(function (b) {
          return {
            blogId: b.id,
            blogName: b.title,
            date: b.date,
            readTimeMin: b.readTimeMin
          };
        }));
      }
    })["catch"](function () {
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/', '/', {
        shallow: false
      });
    });
  }, [id]);

  var openArticle = function openArticle(id) {
    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("".concat(Object(_services_utils__WEBPACK_IMPORTED_MODULE_3__["getArticleUrl"])(id)));
  };

  var list = blogs.map(function (c) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      key: c.blogId,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "card-wrapper",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }
    }, __jsx("div", {
      onClick: function onClick() {
        return openArticle(c.blogId);
      },
      className: "card",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "card-body",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }
    }, __jsx("h5", {
      className: "card-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 15
      }
    }, c.blogName), __jsx("div", {
      className: "details",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 15
      }
    }, "".concat(Object(_services_utils__WEBPACK_IMPORTED_MODULE_3__["printDate"])(c.date), " - ").concat(c.readTimeMin, " mins read"))))));
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_NavBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }), __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, "Dinesh Murali"), __jsx("meta", {
    name: "description",
    content: "Articles regarding ".concat(name),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }), __jsx("meta", {
    itemProp: "name",
    content: "Dinesh Murali",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }), __jsx("meta", {
    itemProp: "description",
    content: "Articles regarding ".concat(name),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  })), __jsx(_styles_BlogList_style__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "blog_list__container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  }, __jsx("h1", {
    className: "heading-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, name), name && __jsx("p", {
    className: "lead",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 26
    }
  }, "Available articles"))), __jsx("div", {
    className: "d-flex justify-content-start flex-wrap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, list)))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./styles/BlogList.style.js":
/*!**********************************!*\
  !*** ./styles/BlogList.style.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var BlogListContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span.withConfig({
  displayName: "BlogListstyle__BlogListContainer",
  componentId: "sc-1ch3ikz-0"
})([".heading-advertise{height:10vh;background-color:white;margin-left:30%;margin-right:30%;}.blog_list__container{margin-top:30px;margin-bottom:60px;.heading-text{font-size:3rem;font-weight:300;line-height:1.2;text-align:center;}.advertise{background-color:white;}.lead{text-align:center;}.card-wrapper{margin-right:20px;margin-bottom:1.5em;min-width:45%;.card{cursor:pointer;min-width:100%;background-color:", ";border:1px solid ", ";.card-body{min-width:100%;}.details{color:", ";fill:", ";font-size:16px;}}}.card-title{font-weight:600;font-size:20px;}}@media only screen and (max-width:500px){.blog_list__container{margin-top:30px;.heading-text{font-size:2.5rem;font-weight:300;line-height:1.2;text-align:center;}.card-wrapper{min-width:100%;}.advertise{background-color:white;}.lead{font-size:1rem;text-align:center;}}}"], function (props) {
  return props.theme.bg.primary;
}, function (props) {
  return props.theme.bg.secondary;
}, function (props) {
  return props.theme.text.secondary;
}, function (props) {
  return props.theme.text.secondary;
});
/* harmony default export */ __webpack_exports__["default"] = (BlogListContainer);

/***/ })

})
//# sourceMappingURL=archive.js.e0a9c244f47c822c8c33.hot-update.js.map