webpackHotUpdate_N_E(3,{

/***/ "./src/layouts/header/menu/authorized-menu.tsx":
/*!*****************************************************!*\
  !*** ./src/layouts/header/menu/authorized-menu.tsx ***!
  \*****************************************************/
/*! exports provided: AuthorizedMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AuthorizedMenu\", function() { return AuthorizedMenu; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_sebastian_space_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! /Users/sebastian/space/web/node_modules/next/node_modules/@babel/runtime/regenerator */ \"../../node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_sebastian_space_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_sebastian_space_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_sebastian_space_web_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! /Users/sebastian/space/web/node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"../../node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_sebastian_space_web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! /Users/sebastian/space/web/node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"../../node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ \"../../node_modules/react-intl/lib/index.js\");\n/* harmony import */ var components_nav_link_nav_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/nav-link/nav-link */ \"./src/components/nav-link/nav-link.tsx\");\n/* harmony import */ var site_settings_site_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! site-settings/site-navigation */ \"./src/site-settings/site-navigation.ts\");\n/* harmony import */ var contexts_cart_use_cart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! contexts/cart/use-cart */ \"./src/contexts/cart/use-cart.tsx\");\n/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! universal-cookie */ \"../../node_modules/universal-cookie/es6/index.js\");\n/* harmony import */ var contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! contexts/auth/auth.context */ \"./src/contexts/auth/auth.context.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ \"../../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! localforage */ \"../../node_modules/localforage/dist/localforage.js\");\n/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @apollo/client */ \"../../node_modules/@apollo/client/index.js\");\n/* harmony import */ var utils_graphql_query_abandonados_query__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! utils/graphql/query/abandonados.query */ \"./src/utils/graphql/query/abandonados.query.ts\");\n/* harmony import */ var utils_graphql_mutation_abandonados__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! utils/graphql/mutation/abandonados */ \"./src/utils/graphql/mutation/abandonados.ts\");\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/sebastian/space/web/packages/shop-restaurant/src/layouts/header/menu/authorized-menu.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar AuthorizedMenu = function AuthorizedMenu(_ref) {\n  _s();\n\n  var onLogout = _ref.onLogout;\n  var cookie = new universal_cookie__WEBPACK_IMPORTED_MODULE_9__[\"default\"]();\n  var cid = cookie.get('clientid');\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_10__[\"AuthContext\"]),\n      authDispatch = _useContext.authDispatch;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(''),\n      carrito = _useState[0],\n      setCarrito = _useState[1];\n\n  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_13__[\"useMutation\"])(utils_graphql_mutation_abandonados__WEBPACK_IMPORTED_MODULE_15__[\"AGREGAR_ABANDONADO\"]),\n      _useMutation2 = Object(_Users_sebastian_space_web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_useMutation, 1),\n      insert_abandonado = _useMutation2[0];\n\n  var _useMutation3 = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_13__[\"useMutation\"])(utils_graphql_mutation_abandonados__WEBPACK_IMPORTED_MODULE_15__[\"UPGRADE_ABANDONADO\"]),\n      _useMutation4 = Object(_Users_sebastian_space_web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_useMutation3, 1),\n      upgrade_abandonado = _useMutation4[0];\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_13__[\"useQuery\"])(utils_graphql_query_abandonados_query__WEBPACK_IMPORTED_MODULE_14__[\"GET_ABANDONADOS\"], {\n    variables: {\n      clientid: cid,\n      customerid: cookie.get('customer') && cookie.get('customer').id\n    }\n  }),\n      data = _useQuery.data;\n\n  var _useCart = Object(contexts_cart_use_cart__WEBPACK_IMPORTED_MODULE_8__[\"useCart\"])(),\n      clearCart = _useCart.clearCart;\n\n  var init = /*#__PURE__*/function () {\n    var _ref2 = Object(_Users_sebastian_space_web_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_sebastian_space_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {\n      var keys;\n      return _Users_sebastian_space_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              if (!localforage__WEBPACK_IMPORTED_MODULE_12___default.a) {\n                _context2.next = 6;\n                break;\n              }\n\n              _context2.next = 3;\n              return localforage__WEBPACK_IMPORTED_MODULE_12___default.a.keys();\n\n            case 3:\n              keys = _context2.sent;\n              console.log('key', keys);\n              return _context2.abrupt(\"return\", Promise.all(keys.map( /*#__PURE__*/function () {\n                var _ref3 = Object(_Users_sebastian_space_web_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_sebastian_space_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(key) {\n                  return _Users_sebastian_space_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n                    while (1) {\n                      switch (_context.prev = _context.next) {\n                        case 0:\n                          if (!(key === '@session')) {\n                            _context.next = 11;\n                            break;\n                          }\n\n                          _context.t0 = console;\n                          _context.next = 4;\n                          return localforage__WEBPACK_IMPORTED_MODULE_12___default.a.getItem(key);\n\n                        case 4:\n                          _context.t1 = _context.sent;\n\n                          _context.t0.log.call(_context.t0, '|||||', _context.t1);\n\n                          _context.t2 = setCarrito;\n                          _context.next = 9;\n                          return localforage__WEBPACK_IMPORTED_MODULE_12___default.a.getItem(key);\n\n                        case 9:\n                          _context.t3 = _context.sent;\n                          (0, _context.t2)(_context.t3);\n\n                        case 11:\n                        case \"end\":\n                          return _context.stop();\n                      }\n                    }\n                  }, _callee);\n                }));\n\n                return function (_x) {\n                  return _ref3.apply(this, arguments);\n                };\n              }())));\n\n            case 6:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function init() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    init();\n  });\n\n  function deleteAllCookies() {\n    var cookies = document.cookie.split(\";\");\n\n    for (var i = 0; i < cookies.length; i++) {\n      var cookie = cookies[i];\n      var eqPos = cookie.indexOf(\"=\");\n      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;\n      document.cookie = name + \"=;expires=Thu, 01 Jan 1970 00:00:00 GMT\";\n    }\n  }\n\n  var push = /*#__PURE__*/function () {\n    var _ref4 = Object(_Users_sebastian_space_web_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_sebastian_space_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {\n      return _Users_sebastian_space_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              console.log('push!', carrito);\n\n              if (!(carrito !== '' && carrito !== '{\\\"isOpen\\\":false,\\\"items\\\":[],\\\"isRestaurant\\\":false,\\\"coupon\\\":null}')) {\n                _context3.next = 4;\n                break;\n              }\n\n              _context3.next = 4;\n              return insert_abandonado({\n                variables: {\n                  clientid: cid,\n                  customerid: cookie.get('customer') && cookie.get('customer').id,\n                  data_json: carrito\n                }\n              });\n\n            case 4:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    }));\n\n    return function push() {\n      return _ref4.apply(this, arguments);\n    };\n  }();\n\n  var put = /*#__PURE__*/function () {\n    var _ref5 = Object(_Users_sebastian_space_web_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_sebastian_space_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {\n      return _Users_sebastian_space_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {\n        while (1) {\n          switch (_context4.prev = _context4.next) {\n            case 0:\n              if (!(carrito !== '' && carrito !== '{\\\"isOpen\\\":false,\\\"items\\\":[],\\\"isRestaurant\\\":false,\\\"coupon\\\":null}')) {\n                _context4.next = 3;\n                break;\n              }\n\n              _context4.next = 3;\n              return upgrade_abandonado({\n                variables: {\n                  \"clientid\": cid,\n                  \"customerid\": cookie.get('customer') && cookie.get('customer').id,\n                  \"data_json\": carrito\n                }\n              });\n\n            case 3:\n            case \"end\":\n              return _context4.stop();\n          }\n        }\n      }, _callee4);\n    }));\n\n    return function put() {\n      return _ref5.apply(this, arguments);\n    };\n  }();\n\n  var handleLogout = /*#__PURE__*/function () {\n    var _ref6 = Object(_Users_sebastian_space_web_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_sebastian_space_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5() {\n      return _Users_sebastian_space_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {\n        while (1) {\n          switch (_context5.prev = _context5.next) {\n            case 0:\n              if (!(data && data.carritos_abandonados && data.carritos_abandonados.length > 0)) {\n                _context5.next = 3;\n                break;\n              }\n\n              _context5.next = 3;\n              return put();\n\n            case 3:\n              if (!(data && data.carritos_abandonados && data.carritos_abandonados.length === 0)) {\n                _context5.next = 6;\n                break;\n              }\n\n              _context5.next = 6;\n              return push();\n\n            case 6:\n              _context5.next = 8;\n              return cookie.remove('access_token');\n\n            case 8:\n              _context5.next = 10;\n              return cookie.remove('customer');\n\n            case 10:\n              _context5.next = 12;\n              return cookie.remove('user_logged');\n\n            case 12:\n              localforage__WEBPACK_IMPORTED_MODULE_12___default.a.removeItem('@session');\n              _context5.next = 15;\n              return deleteAllCookies();\n\n            case 15:\n              _context5.next = 17;\n              return clearCart();\n\n            case 17:\n              authDispatch({\n                type: 'SIGN_OUT'\n              });\n              next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push('/grocery');\n\n            case 19:\n            case \"end\":\n              return _context5.stop();\n          }\n        }\n      }, _callee5);\n    }));\n\n    return function handleLogout() {\n      return _ref6.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [site_settings_site_navigation__WEBPACK_IMPORTED_MODULE_7__[\"AUTHORIZED_MENU_ITEMS\"].map(function (item, idx) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_nav_link_nav_link__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        className: \"menu-item\",\n        href: item.href,\n        label: item.defaultMessage,\n        intlId: item.id\n      }, idx, false, {\n        fileName: _jsxFileName,\n        lineNumber: 129,\n        columnNumber: 9\n      }, _this);\n    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"menu-item\",\n      onClick: handleLogout,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_intl__WEBPACK_IMPORTED_MODULE_5__[\"FormattedMessage\"], {\n            id: \"nav.logout\",\n            defaultMessage: \"Logout\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 140,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 139,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 138,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(AuthorizedMenu, \"Y/zMeS3z5kMKLWfNvIbg2MPKSNw=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_13__[\"useMutation\"], _apollo_client__WEBPACK_IMPORTED_MODULE_13__[\"useMutation\"], _apollo_client__WEBPACK_IMPORTED_MODULE_13__[\"useQuery\"], contexts_cart_use_cart__WEBPACK_IMPORTED_MODULE_8__[\"useCart\"]];\n});\n\n_c = AuthorizedMenu;\n\nvar _c;\n\n$RefreshReg$(_c, \"AuthorizedMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"../../node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xheW91dHMvaGVhZGVyL21lbnUvYXV0aG9yaXplZC1tZW51LnRzeD9iMTk4Il0sIm5hbWVzIjpbIkF1dGhvcml6ZWRNZW51Iiwib25Mb2dvdXQiLCJjb29raWUiLCJDb29raWVzIiwiY2lkIiwiZ2V0IiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwiYXV0aERpc3BhdGNoIiwidXNlU3RhdGUiLCJjYXJyaXRvIiwic2V0Q2Fycml0byIsInVzZU11dGF0aW9uIiwiQUdSRUdBUl9BQkFORE9OQURPIiwiaW5zZXJ0X2FiYW5kb25hZG8iLCJVUEdSQURFX0FCQU5ET05BRE8iLCJ1cGdyYWRlX2FiYW5kb25hZG8iLCJ1c2VRdWVyeSIsIkdFVF9BQkFORE9OQURPUyIsInZhcmlhYmxlcyIsImNsaWVudGlkIiwiY3VzdG9tZXJpZCIsImlkIiwiZGF0YSIsInVzZUNhcnQiLCJjbGVhckNhcnQiLCJpbml0IiwibG9jYWxGb3JhZ2UiLCJrZXlzIiwiY29uc29sZSIsImxvZyIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJrZXkiLCJnZXRJdGVtIiwidXNlRWZmZWN0IiwiZGVsZXRlQWxsQ29va2llcyIsImNvb2tpZXMiLCJkb2N1bWVudCIsInNwbGl0IiwiaSIsImxlbmd0aCIsImVxUG9zIiwiaW5kZXhPZiIsIm5hbWUiLCJzdWJzdHIiLCJwdXNoIiwiZGF0YV9qc29uIiwicHV0IiwiaGFuZGxlTG9nb3V0IiwiY2Fycml0b3NfYWJhbmRvbmFkb3MiLCJyZW1vdmUiLCJyZW1vdmVJdGVtIiwidHlwZSIsIlJvdXRlciIsIkFVVEhPUklaRURfTUVOVV9JVEVNUyIsIml0ZW0iLCJpZHgiLCJocmVmIiwiZGVmYXVsdE1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT08s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QUFFRSxpQkFBUyxFQUFDLFdBRlo7QUFHRSxZQUFJLEVBQUVELElBQUksQ0FBQ0UsSUFIYjtBQUlFLGFBQUssRUFBRUYsSUFBSSxDQUFDRyxjQUpkO0FBS0UsY0FBTSxFQUFFSCxJQUFJLENBQUNuQztBQUxmLFNBQ09vQyxHQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEeUI7QUFBQSxLQUExQixDQURILGVBVUU7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUEyQixhQUFPLEVBQUVSLFlBQXBDO0FBQUEsNkJBQ0U7QUFBQSwrQkFDRTtBQUFBLGlDQUNFLHFFQUFDLDJEQUFEO0FBQWtCLGNBQUUsRUFBQyxZQUFyQjtBQUFrQywwQkFBYyxFQUFDO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFWRjtBQUFBLGtCQURGO0FBb0JELENBOUhNOztHQUFNbEQsYztVQU9pQlksMkQsRUFDQ0EsMkQsRUFFWkssd0QsRUFZYk8sOEQ7OztLQXRCT3hCLGMiLCJmaWxlIjoiLi9zcmMvbGF5b3V0cy9oZWFkZXIvbWVudS9hdXRob3JpemVkLW1lbnUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGb3JtYXR0ZWRNZXNzYWdlIH0gZnJvbSAncmVhY3QtaW50bCc7XG5pbXBvcnQgTmF2TGluayBmcm9tICdjb21wb25lbnRzL25hdi1saW5rL25hdi1saW5rJztcbmltcG9ydCB7IEFVVEhPUklaRURfTUVOVV9JVEVNUyB9IGZyb20gJ3NpdGUtc2V0dGluZ3Mvc2l0ZS1uYXZpZ2F0aW9uJztcbmltcG9ydCB7IHVzZUNhcnQgfSBmcm9tICdjb250ZXh0cy9jYXJ0L3VzZS1jYXJ0JztcbmltcG9ydCBDb29raWVzICBmcm9tICd1bml2ZXJzYWwtY29va2llJztcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnY29udGV4dHMvYXV0aC9hdXRoLmNvbnRleHQnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgbG9jYWxGb3JhZ2UgZnJvbSAnbG9jYWxmb3JhZ2UnOyBcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCB7IEdFVF9BQkFORE9OQURPUyB9IGZyb20gJ3V0aWxzL2dyYXBocWwvcXVlcnkvYWJhbmRvbmFkb3MucXVlcnknO1xuaW1wb3J0IHsgQUdSRUdBUl9BQkFORE9OQURPIH0gZnJvbSAndXRpbHMvZ3JhcGhxbC9tdXRhdGlvbi9hYmFuZG9uYWRvcyc7XG5pbXBvcnQgeyBVUEdSQURFX0FCQU5ET05BRE8gfSBmcm9tICd1dGlscy9ncmFwaHFsL211dGF0aW9uL2FiYW5kb25hZG9zJztcblxudHlwZSBQcm9wcyA9IHtcbiAgb25Mb2dvdXQ6ICgpID0+IHZvaWQ7XG59O1xuXG5cbmV4cG9ydCBjb25zdCBBdXRob3JpemVkTWVudTogUmVhY3QuRkM8UHJvcHM+ID0gKHsgb25Mb2dvdXQgfSkgPT4ge1xuXG4gIGNvbnN0IGNvb2tpZSA9IG5ldyBDb29raWVzKClcbiAgY29uc3QgY2lkID0gY29va2llLmdldCgnY2xpZW50aWQnKVxuICBjb25zdCB7IGF1dGhEaXNwYXRjaCB9ID0gdXNlQ29udGV4dDxhbnk+KEF1dGhDb250ZXh0KTtcbiAgdmFyIFtjYXJyaXRvLCBzZXRDYXJyaXRvXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBbaW5zZXJ0X2FiYW5kb25hZG9dID0gdXNlTXV0YXRpb24oQUdSRUdBUl9BQkFORE9OQURPKTsgXG4gIGNvbnN0IFt1cGdyYWRlX2FiYW5kb25hZG9dID0gdXNlTXV0YXRpb24oVVBHUkFERV9BQkFORE9OQURPKTsgXG5cbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VRdWVyeShcbiAgICBHRVRfQUJBTkRPTkFET1MsXG4gICAge1xuICAgICAgdmFyaWFibGVzOiB7IFxuICAgICAgICBjbGllbnRpZDogY2lkLFxuICAgICAgICBjdXN0b21lcmlkOiBjb29raWUuZ2V0KCdjdXN0b21lcicpICYmICBjb29raWUuZ2V0KCdjdXN0b21lcicpLmlkXG4gICAgICB9XG4gICAgfVxuICApO1xuXG4gIGNvbnN0IHsgXG4gICAgY2xlYXJDYXJ0LFxuICB9ID0gdXNlQ2FydCgpO1xuXG4gIGNvbnN0IGluaXQgPSBhc3luYyAoKT0+IHtcbiAgICBpZiAobG9jYWxGb3JhZ2UpIHtcbiAgICAgIHZhciBrZXlzID0gYXdhaXQgbG9jYWxGb3JhZ2Uua2V5cygpXG4gICAgICBjb25zb2xlLmxvZygna2V5JyxrZXlzKVxuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKGtleXMubWFwKGFzeW5jIGtleSA9PiB7XG4gICAgICAgIGlmKGtleT09PSdAc2Vzc2lvbicpe1xuICAgICAgICAgIGNvbnNvbGUubG9nKCd8fHx8fCcsIGF3YWl0IGxvY2FsRm9yYWdlLmdldEl0ZW0oa2V5KSlcbiAgICAgICAgICBzZXRDYXJyaXRvKGF3YWl0IGxvY2FsRm9yYWdlLmdldEl0ZW0oa2V5KSlcbiAgICAgICAgfSAgXG4gICAgICB9KSlcbiAgICAgfVxuICB9XG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICBpbml0KClcbiAgfSlcblxuXG4gIGZ1bmN0aW9uIGRlbGV0ZUFsbENvb2tpZXMoKSB7XG4gIFxuICAgIHZhciBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiO1wiKTtcbiAgXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb29raWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjb29raWUgPSBjb29raWVzW2ldO1xuICAgICAgICB2YXIgZXFQb3MgPSBjb29raWUuaW5kZXhPZihcIj1cIik7XG4gICAgICAgIHZhciBuYW1lID0gZXFQb3MgPiAtMSA/IGNvb2tpZS5zdWJzdHIoMCwgZXFQb3MpIDogY29va2llO1xuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBuYW1lICsgXCI9O2V4cGlyZXM9VGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMCBHTVRcIjtcbiAgICB9XG4gIH1cbiBcbiAgY29uc3QgcHVzaCA9IGFzeW5jICgpID0+IHtcblxuICAgIGNvbnNvbGUubG9nKCdwdXNoIScsIGNhcnJpdG8pICBcbiAgICBpZihjYXJyaXRvICE9PSAnJyAmJiBjYXJyaXRvICE9PSAne1xcXCJpc09wZW5cXFwiOmZhbHNlLFxcXCJpdGVtc1xcXCI6W10sXFxcImlzUmVzdGF1cmFudFxcXCI6ZmFsc2UsXFxcImNvdXBvblxcXCI6bnVsbH0nKVxuICAgIHtcbiAgICAgIGF3YWl0IGluc2VydF9hYmFuZG9uYWRvKHtcbiAgICAgICAgdmFyaWFibGVzOiB7IFxuICAgICAgICAgIGNsaWVudGlkOiBjaWQsXG4gICAgICAgICAgY3VzdG9tZXJpZDogY29va2llLmdldCgnY3VzdG9tZXInKSAmJiBjb29raWUuZ2V0KCdjdXN0b21lcicpLmlkLFxuICAgICAgICAgIGRhdGFfanNvbjogY2Fycml0b1xuICAgICAgICB9LFxuICAgICAgfSk7ICBcbiAgICB9ICBcbiAgXG59XG5cbiAgY29uc3QgcHV0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmKGNhcnJpdG8gIT09ICcnICYmIGNhcnJpdG8gIT09ICd7XFxcImlzT3BlblxcXCI6ZmFsc2UsXFxcIml0ZW1zXFxcIjpbXSxcXFwiaXNSZXN0YXVyYW50XFxcIjpmYWxzZSxcXFwiY291cG9uXFxcIjpudWxsfScpXG4gICAge1xuICAgICAgYXdhaXQgdXBncmFkZV9hYmFuZG9uYWRvKHtcbiAgICAgICAgdmFyaWFibGVzOiB7IFxuICAgICAgICAgIFwiY2xpZW50aWRcIjogY2lkLFxuICAgICAgICAgIFwiY3VzdG9tZXJpZFwiOiBjb29raWUuZ2V0KCdjdXN0b21lcicpICYmIGNvb2tpZS5nZXQoJ2N1c3RvbWVyJykuaWQsXG4gICAgICAgICAgXCJkYXRhX2pzb25cIjogY2Fycml0b1xuICAgICAgICB9LFxuICAgICAgfSk7ICBcbiAgIH0gXG4gIH1cblxuICAgXG5cbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gYXN5bmMgKCkgPT4geyBcbiAgXG5cbiAgICAgaWYgKCBkYXRhICYmIGRhdGEuY2Fycml0b3NfYWJhbmRvbmFkb3MgJiYgZGF0YS5jYXJyaXRvc19hYmFuZG9uYWRvcy5sZW5ndGggPiAwICkge1xuICAgICAgICBhd2FpdCBwdXQoKVxuICAgICB9IFxuICAgICBpZiAoIGRhdGEgJiYgZGF0YS5jYXJyaXRvc19hYmFuZG9uYWRvcyAmJiBkYXRhLmNhcnJpdG9zX2FiYW5kb25hZG9zLmxlbmd0aCA9PT0gMCApIHtcbiAgICAgICAgYXdhaXQgcHVzaCgpXG4gICAgIH0gIFxuICAgICBcbiAgICAgIGF3YWl0IGNvb2tpZS5yZW1vdmUoJ2FjY2Vzc190b2tlbicpO1xuICAgICAgYXdhaXQgY29va2llLnJlbW92ZSgnY3VzdG9tZXInKTsgXG4gICAgICBhd2FpdCBjb29raWUucmVtb3ZlKCd1c2VyX2xvZ2dlZCcpOyBcbiAgICAgIGxvY2FsRm9yYWdlLnJlbW92ZUl0ZW0oJ0BzZXNzaW9uJyk7XG4gICAgICBhd2FpdCBkZWxldGVBbGxDb29raWVzKCk7IFxuICAgICAgYXdhaXQgY2xlYXJDYXJ0KCk7IFxuICAgICAgYXV0aERpc3BhdGNoKHsgdHlwZTogJ1NJR05fT1VUJyB9KTtcbiAgICAgIFJvdXRlci5wdXNoKCcvZ3JvY2VyeScpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtBVVRIT1JJWkVEX01FTlVfSVRFTVMubWFwKChpdGVtLCBpZHgpID0+IChcbiAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICBrZXk9e2lkeH1cbiAgICAgICAgICBjbGFzc05hbWU9J21lbnUtaXRlbSdcbiAgICAgICAgICBocmVmPXtpdGVtLmhyZWZ9XG4gICAgICAgICAgbGFiZWw9e2l0ZW0uZGVmYXVsdE1lc3NhZ2V9XG4gICAgICAgICAgaW50bElkPXtpdGVtLmlkfVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVudS1pdGVtJyBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PlxuICAgICAgICA8YT5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPSduYXYubG9nb3V0JyBkZWZhdWx0TWVzc2FnZT0nTG9nb3V0JyAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/layouts/header/menu/authorized-menu.tsx\n");

/***/ })

})