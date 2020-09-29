webpackHotUpdate("static/development/pages/blog/mercury_the_innermost_planet.js",{

/***/ "./pages/blog/mercury_the_innermost_planet.js":
/*!****************************************************!*\
  !*** ./pages/blog/mercury_the_innermost_planet.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_social_sharing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-social-sharing */ "./node_modules/react-social-sharing/dist-es6/index.js");
/* harmony import */ var react_social_sharing__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_social_sharing__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_gist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-gist */ "./node_modules/react-gist/es/index.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants/constants */ "./constants/constants.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_constants_constants__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/NavBar */ "./components/NavBar.js");
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/utils */ "./services/utils.js");
/* harmony import */ var _components_RecentArticles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/RecentArticles */ "./components/RecentArticles.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_VerticalAd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/VerticalAd */ "./components/VerticalAd.js");
/* harmony import */ var _services_useBlogLoader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/useBlogLoader */ "./services/useBlogLoader.js");


var _jsxFileName = "/home/dinesh/work_dump/my_projects/space_blog/pages/blog/mercury_the_innermost_planet.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




 // import AdSense from 'react-adsense';








/**
 * This file is used only in development. Any change in this must be manually
 * copied into /pages/blog.js file to apply that in production
 */

function Blogs() {
  var _this = this;

  var id = 'mercury_the_innermost_planet';
  var blogTitle = 'Mercury the innermost planet';
  var blogDescription = 'Mercury is the closest planet to the sun. It is also the smallest planet in our solar system';

  var _useBlogLoader = Object(_services_useBlogLoader__WEBPACK_IMPORTED_MODULE_13__["default"])({
    id: id
  }),
      blog = _useBlogLoader.blog,
      recent = _useBlogLoader.recent;

  var shareLinks = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([{
    provider: 'linkedin',
    url: "https://www.linkedin.com/sharing/share-offsite/?url=http%3A%2F%2F".concat(_constants_constants__WEBPACK_IMPORTED_MODULE_7__["domain"])
  }]),
      socialLinks = _useState[0],
      setSocialLinks = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    /**
     * Fetching the links to create own social share links
     */
    if (shareLinks.current && id && _constants_constants__WEBPACK_IMPORTED_MODULE_7__["domain"]) {
      var blocks = shareLinks.current.querySelectorAll('a');
      var links = JSON.parse(JSON.stringify(socialLinks));

      for (var i = 0; i < blocks.length; i += 1) {
        if (blocks[i].href) {
          if (blocks[i].href.includes('twitter')) {
            links.push({
              provider: 'twitter',
              url: blocks[i].href
            });
          } else if (blocks[i].href.includes('facebook')) {
            links.push({
              provider: 'facebook',
              url: blocks[i].href
            });
          }
        }
      }

      setSocialLinks(links);
    }
  }, [shareLinks, id, _constants_constants__WEBPACK_IMPORTED_MODULE_7__["domain"]]); // eslint-disable-line

  var renderBlog = function renderBlog(content) {
    if (!content || content.length <= 0) return null;
    var bloger = content.map(function (line, index) {
      if (line.isImage && line.imageUrl) {
        return __jsx("div", {
          key: index,
          className: "d-flex justify-content-center image",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 11
          }
        }, __jsx("img", {
          src: line.imageUrl,
          alt: "",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }
        }));
      }

      if (line.isGist && line.gist) return __jsx(react_gist__WEBPACK_IMPORTED_MODULE_6__["default"], {
        key: index,
        className: "mt-3 mb-3",
        id: line.gist,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 44
        }
      });
      if (line.isMainHeading) return __jsx("div", {
        className: "main-heading",
        key: index,
        dangerouslySetInnerHTML: {
          __html: line.html
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 38
        }
      });
      if (line.isSubHeading) return __jsx("div", {
        className: "sub-heading",
        key: index,
        dangerouslySetInnerHTML: {
          __html: line.html
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 37
        }
      });
      if (line.isCodeSection) return __jsx("div", {
        className: "code-section",
        key: index,
        dangerouslySetInnerHTML: {
          __html: line.html
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 38
        }
      });
      if (line.isQuoted) return __jsx("div", {
        className: "quote",
        key: index,
        dangerouslySetInnerHTML: {
          __html: line.html
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 33
        }
      });
      return __jsx("div", {
        key: index,
        dangerouslySetInnerHTML: {
          __html: line.html
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 14
        }
      });
    });
    return bloger;
  };

  var onSocialShare = function onSocialShare(url) {
    if (url) window.open(url, '', 'width=500,height=500');
  };

  var printBlog = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return renderBlog(blog.content);
  }, [blog.content]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_NavBar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }
  }), __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, blogTitle), __jsx("meta", {
    name: "description",
    content: blogDescription,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }), __jsx("meta", {
    itemProp: "name",
    content: blogTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }), __jsx("meta", {
    itemProp: "description",
    content: blogDescription,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  })), __jsx("span", {
    className: "blog-page",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "blog-page__container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }, __jsx(_components_VerticalAd__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-12 header-ad",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 15
    }
  }, __jsx("h1", {
    className: "heading-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 17
    }
  }, blogTitle), __jsx("p", {
    className: "lead",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 17
    }
  }, Object(_services_utils__WEBPACK_IMPORTED_MODULE_9__["printDate"])(blog.date), "\xA0-\xA0", blog.readTimeMin, ' ', "mins read"), __jsx("ul", {
    className: "share",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 17
    }
  }, __jsx("li", {
    ref: shareLinks,
    className: "hide-links",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 19
    }
  }, __jsx(react_social_sharing__WEBPACK_IMPORTED_MODULE_5__["Twitter"], {
    link: "https://www.".concat(_constants_constants__WEBPACK_IMPORTED_MODULE_7__["domain"], "/").concat(id),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 21
    }
  }), __jsx(react_social_sharing__WEBPACK_IMPORTED_MODULE_5__["Facebook"], {
    link: "https://www.".concat(_constants_constants__WEBPACK_IMPORTED_MODULE_7__["domain"], "/").concat(id),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 21
    }
  })), socialLinks.map(function (links, index) {
    return __jsx("li", {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 21
      }
    }, __jsx("a", {
      "aria-label": links.provider,
      style: {
        cursor: 'pointer'
      },
      className: "mr-5",
      rel: "noopener noreferrer",
      onClick: function onClick() {
        return onSocialShare(links.url);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 23
      }
    }, __jsx("i", {
      className: "fab fa-".concat(links.provider),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 25
      }
    })));
  }))), __jsx("div", {
    className: "contents col-12 col-sm-12 col-md-8 col-xl-8 col-lg-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 15
    }
  }, printBlog ? printBlog : blogDescription), __jsx("div", {
    className: "d-none d-sm-none d-md-block d-xl-block d-lg-block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 15
    }
  }, __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "recent",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 13
    }
  }, "You might be interested in:"), __jsx(_components_RecentArticles__WEBPACK_IMPORTED_MODULE_10__["default"], {
    articles: recent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 13
    }
  })))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 7
    }
  }));
}

Blogs.getInitialProps = function _callee(_ref) {
  var Component, pageProps;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          Component = _ref.Component, pageProps = _ref.pageProps;
          return _context.abrupt("return", __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, pageProps, {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 186,
              columnNumber: 10
            }
          })));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, null, this, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Blogs);

/***/ })

})
//# sourceMappingURL=mercury_the_innermost_planet.js.88e17acc90db15851e05.hot-update.js.map