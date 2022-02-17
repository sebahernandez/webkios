webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/contexts/auth/auth.provider.tsx":
/*!*********************************************!*\
  !*** ./src/contexts/auth/auth.provider.tsx ***!
  \*********************************************/
/*! exports provided: AuthProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AuthProvider\", function() { return AuthProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_sebastian_space_web_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! /Users/sebastian/space/web/node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"../../node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _auth_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.context */ \"./src/contexts/auth/auth.context.tsx\");\n/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! universal-cookie */ \"../../node_modules/universal-cookie/es6/index.js\");\n/* harmony import */ var utils_graphql_query_suscripcion_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/graphql/query/suscripcion.query */ \"./src/utils/graphql/query/suscripcion.query.ts\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ \"../../node_modules/@apollo/client/index.js\");\n/* harmony import */ var _components_Loading_loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Loading/loading */ \"./src/components/Loading/loading.tsx\");\n\n\n\nvar _jsxFileName = \"/Users/sebastian/space/web/packages/shop-restaurant/src/contexts/auth/auth.provider.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_sebastian_space_web_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar isBrowser = true;\n\n\n\n\nvar cookie = new universal_cookie__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\nvar INITIAL_STATE = {\n  isAuthenticated: isBrowser && !!cookie.get('access_token'),\n  currentForm: 'signIn'\n};\n\nfunction reducer(state, action) {\n  console.log(state, 'auth');\n\n  switch (action.type) {\n    case 'SIGNIN':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        currentForm: 'signIn'\n      });\n\n    case 'SIGNIN_SUCCESS':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isAuthenticated: true\n      });\n\n    case 'SIGN_OUT':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isAuthenticated: false\n      });\n\n    case 'SIGNUP':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        currentForm: 'signUp'\n      });\n\n    case 'FORGOTPASS':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        currentForm: 'forgotPass'\n      });\n\n    default:\n      return state;\n  }\n}\n\nvar AuthProvider = function AuthProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      host = _useState[0],\n      setHost = _useState[1];\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__[\"useQuery\"])(utils_graphql_query_suscripcion_query__WEBPACK_IMPORTED_MODULE_5__[\"GET_SUSCRIPCION_X_HOST\"], {\n    variables: {\n      host: host\n    }\n  }),\n      data = _useQuery.data,\n      loading = _useQuery.loading;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (window.location.hostname === 'localhost') {\n      setHost(\"%\".concat('shop').concat(\"%\"));\n    } else if (window) {\n      setHost(\"%\".concat(window.location.hostname).concat(\"%\"));\n    }\n\n    if (data && data.suscripciones.length > 0) {\n      console.log('SUCCESFULL >>>>>>>>>>> clientid data:', JSON.stringify(data));\n      cookie.remove('clientid');\n      cookie.set('suscriptor', data.suscripciones[0]);\n      cookie.set('clientid', data.suscripciones[0].clientid);\n      cookie.set('host', JSON.stringify(data.suscripciones[0].negocio_web));\n      cookie.set('tmp', data.suscripciones[0].token_mercado);\n    }\n  }, [host, data]);\n\n  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useReducer\"])(reducer, INITIAL_STATE),\n      authState = _useReducer[0],\n      authDispatch = _useReducer[1];\n\n  if (loading) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Loading_loading__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 13\n    }, _this);\n  } else {\n    return data && data.suscripciones.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_auth_context__WEBPACK_IMPORTED_MODULE_3__[\"AuthContext\"].Provider, {\n      value: {\n        authState: authState,\n        authDispatch: authDispatch\n      },\n      children: children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 49\n    }, _this);\n  }\n};\n\n_s(AuthProvider, \"NfXmHG8pVLJhfHNwpdRBrDR5zXI=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_6__[\"useQuery\"]];\n});\n\n_c = AuthProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"AuthProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"../../node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL2F1dGgvYXV0aC5wcm92aWRlci50c3g/YWExZSJdLCJuYW1lcyI6WyJpc0Jyb3dzZXIiLCJjb29raWUiLCJDb29raWVzIiwiSU5JVElBTF9TVEFURSIsImlzQXV0aGVudGljYXRlZCIsImdldCIsImN1cnJlbnRGb3JtIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwiaG9zdCIsInNldEhvc3QiLCJ1c2VRdWVyeSIsIkdFVF9TVVNDUklQQ0lPTl9YX0hPU1QiLCJ2YXJpYWJsZXMiLCJkYXRhIiwibG9hZGluZyIsInVzZUVmZmVjdCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaG9zdG5hbWUiLCJjb25jYXQiLCJzdXNjcmlwY2lvbmVzIiwibGVuZ3RoIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlbW92ZSIsInNldCIsImNsaWVudGlkIiwibmVnb2Npb193ZWIiLCJ0b2tlbl9tZXJjYWRvIiwidXNlUmVkdWNlciIsImF1dGhTdGF0ZSIsImF1dGhEaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsSUFBTUEsU0FBUyxPQUFmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQyxNQUFNLEdBQUcsSUFBSUMsd0RBQUosRUFBZjtBQUVBLElBQU1DLGFBQWEsR0FBRztBQUNwQkMsaUJBQWUsRUFBRUosU0FBUyxJQUFJLENBQUMsQ0FBQ0MsTUFBTSxDQUFDSSxHQUFQLENBQVcsY0FBWCxDQURaO0FBRXBCQyxhQUFXLEVBQUU7QUFGTyxDQUF0Qjs7QUFLQSxTQUFTQyxPQUFULENBQWlCQyxLQUFqQixFQUE2QkMsTUFBN0IsRUFBMEM7QUFDeENDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFaLEVBQW1CLE1BQW5COztBQUVBLFVBQVFDLE1BQU0sQ0FBQ0csSUFBZjtBQUNFLFNBQUssUUFBTDtBQUNFLDZDQUNLSixLQURMO0FBRUVGLG1CQUFXLEVBQUU7QUFGZjs7QUFJRixTQUFLLGdCQUFMO0FBQ0UsNkNBQ0tFLEtBREw7QUFFRUosdUJBQWUsRUFBRTtBQUZuQjs7QUFJRixTQUFLLFVBQUw7QUFDRSw2Q0FDS0ksS0FETDtBQUVFSix1QkFBZSxFQUFFO0FBRm5COztBQUlGLFNBQUssUUFBTDtBQUNFLDZDQUNLSSxLQURMO0FBRUVGLG1CQUFXLEVBQUU7QUFGZjs7QUFJRixTQUFLLFlBQUw7QUFDRSw2Q0FDS0UsS0FETDtBQUVFRixtQkFBVyxFQUFFO0FBRmY7O0FBSUY7QUFDRSxhQUFPRSxLQUFQO0FBM0JKO0FBNkJEOztBQUVNLElBQU1LLFlBQXFDLEdBQUcsU0FBeENBLFlBQXdDLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUFBLGtCQUU3Q0Msc0RBQVEsQ0FBQyxJQUFELENBRnFDO0FBQUEsTUFFOURDLElBRjhEO0FBQUEsTUFFeERDLE9BRndEOztBQUFBLGtCQUczQ0MsK0RBQVEsQ0FBQ0MsNEZBQUQsRUFDaEM7QUFDSUMsYUFBUyxFQUFFO0FBQ1RKLFVBQUksRUFBRUE7QUFERztBQURmLEdBRGdDLENBSG1DO0FBQUEsTUFHN0RLLElBSDZELGFBRzdEQSxJQUg2RDtBQUFBLE1BR3ZEQyxPQUh1RCxhQUd2REEsT0FIdUQ7O0FBV3BFQyx5REFBUyxDQUFDLFlBQU07QUFFWCxRQUFHQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLFFBQWhCLEtBQTJCLFdBQTlCLEVBQ0E7QUFDRVQsYUFBTyxDQUFDLElBQUlVLE1BQUosQ0FBVyxNQUFYLEVBQW1CQSxNQUFuQixDQUEwQixHQUExQixDQUFELENBQVA7QUFDRCxLQUhELE1BSUEsSUFBR0gsTUFBSCxFQUFXO0FBQ1RQLGFBQU8sQ0FBQyxJQUFJVSxNQUFKLENBQVdILE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsUUFBM0IsRUFBcUNDLE1BQXJDLENBQTRDLEdBQTVDLENBQUQsQ0FBUDtBQUNBOztBQUVELFFBQUdOLElBQUksSUFBSUEsSUFBSSxDQUFDTyxhQUFMLENBQW1CQyxNQUFuQixHQUE0QixDQUF2QyxFQUEwQztBQUN6Q25CLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLHVDQUFaLEVBQXNEbUIsSUFBSSxDQUFDQyxTQUFMLENBQWVWLElBQWYsQ0FBdEQ7QUFDQXBCLFlBQU0sQ0FBQytCLE1BQVAsQ0FBYyxVQUFkO0FBQ0EvQixZQUFNLENBQUNnQyxHQUFQLENBQVcsWUFBWCxFQUF3QlosSUFBSSxDQUFDTyxhQUFMLENBQW1CLENBQW5CLENBQXhCO0FBQ0EzQixZQUFNLENBQUNnQyxHQUFQLENBQVcsVUFBWCxFQUFzQlosSUFBSSxDQUFDTyxhQUFMLENBQW1CLENBQW5CLEVBQXNCTSxRQUE1QztBQUNBakMsWUFBTSxDQUFDZ0MsR0FBUCxDQUFXLE1BQVgsRUFBa0JILElBQUksQ0FBQ0MsU0FBTCxDQUFlVixJQUFJLENBQUNPLGFBQUwsQ0FBbUIsQ0FBbkIsRUFBc0JPLFdBQXJDLENBQWxCO0FBQ0FsQyxZQUFNLENBQUNnQyxHQUFQLENBQVcsS0FBWCxFQUFpQlosSUFBSSxDQUFDTyxhQUFMLENBQW1CLENBQW5CLEVBQXNCUSxhQUF2QztBQUNEO0FBRU4sR0FuQlMsRUFtQlAsQ0FBRXBCLElBQUYsRUFBUUssSUFBUixDQW5CTyxDQUFUOztBQVhvRSxvQkFpQ25DZ0Isd0RBQVUsQ0FBQzlCLE9BQUQsRUFBVUosYUFBVixDQWpDeUI7QUFBQSxNQWlDOURtQyxTQWpDOEQ7QUFBQSxNQWlDbkRDLFlBakNtRDs7QUFvQ3JFLE1BQUlqQixPQUFKLEVBQWM7QUFFWix3QkFBUSxxRUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVI7QUFFRCxHQUpELE1BSU87QUFFTCxXQUNFRCxJQUFJLElBQUlBLElBQUksQ0FBQ08sYUFBTCxDQUFtQkMsTUFBbkIsR0FBNEIsQ0FBcEMsaUJBQTBDLHFFQUFDLHlEQUFELENBQWEsUUFBYjtBQUFzQixXQUFLLEVBQUU7QUFBRVMsaUJBQVMsRUFBVEEsU0FBRjtBQUFhQyxvQkFBWSxFQUFaQTtBQUFiLE9BQTdCO0FBQUEsZ0JBQ3ZDekI7QUFEdUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUQ1QztBQU1EO0FBR0YsQ0FuRE07O0dBQU1ELFk7VUFHZUssdUQ7OztLQUhmTCxZIiwiZmlsZSI6Ii4vc3JjL2NvbnRleHRzL2F1dGgvYXV0aC5wcm92aWRlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnLi9hdXRoLmNvbnRleHQnO1xuY29uc3QgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG5pbXBvcnQgQ29va2llcyAgZnJvbSAndW5pdmVyc2FsLWNvb2tpZSc7XG5pbXBvcnQgeyBHRVRfU1VTQ1JJUENJT05fWF9IT1NUIH0gZnJvbSAndXRpbHMvZ3JhcGhxbC9xdWVyeS9zdXNjcmlwY2lvbi5xdWVyeSc7IFxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgTG9hZGluZ1dyYXBwZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Mb2FkaW5nL2xvYWRpbmcnXG5cbmNvbnN0IGNvb2tpZSA9IG5ldyBDb29raWVzKClcblxuY29uc3QgSU5JVElBTF9TVEFURSA9IHtcbiAgaXNBdXRoZW50aWNhdGVkOiBpc0Jyb3dzZXIgJiYgISFjb29raWUuZ2V0KCdhY2Nlc3NfdG9rZW4nKSxcbiAgY3VycmVudEZvcm06ICdzaWduSW4nLFxufTtcblxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZTogYW55LCBhY3Rpb246IGFueSkge1xuICBjb25zb2xlLmxvZyhzdGF0ZSwgJ2F1dGgnKTtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnU0lHTklOJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjdXJyZW50Rm9ybTogJ3NpZ25JbicsXG4gICAgICB9O1xuICAgIGNhc2UgJ1NJR05JTl9TVUNDRVNTJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6IHRydWUsXG4gICAgICB9O1xuICAgIGNhc2UgJ1NJR05fT1VUJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlLFxuICAgICAgfTtcbiAgICBjYXNlICdTSUdOVVAnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGN1cnJlbnRGb3JtOiAnc2lnblVwJyxcbiAgICAgIH07XG4gICAgY2FzZSAnRk9SR09UUEFTUyc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY3VycmVudEZvcm06ICdmb3Jnb3RQYXNzJyxcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcblxuICBjb25zdCBbaG9zdCwgc2V0SG9zdF0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCB7IGRhdGEsIGxvYWRpbmcgfSA9IHVzZVF1ZXJ5KEdFVF9TVVNDUklQQ0lPTl9YX0hPU1QsXG4gICAge1xuICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICBob3N0OiBob3N0XG4gICAgICAgIH1cbiAgfSk7IFxuIFxuICBcbiAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICBcbiAgICAgICAgaWYod2luZG93LmxvY2F0aW9uLmhvc3RuYW1lPT09J2xvY2FsaG9zdCcpXG4gICAgICAgIHtcbiAgICAgICAgICBzZXRIb3N0KFwiJVwiLmNvbmNhdCgnc2hvcCcpLmNvbmNhdChcIiVcIikpXG4gICAgICAgIH0gZWxzZSBcbiAgICAgICAgaWYod2luZG93KSB7XG4gICAgICAgICAgc2V0SG9zdChcIiVcIi5jb25jYXQod2luZG93LmxvY2F0aW9uLmhvc3RuYW1lKS5jb25jYXQoXCIlXCIpKVxuICAgICAgICAgfSAgXG4gICAgICAgICBcbiAgICAgICAgIGlmKGRhdGEgJiYgZGF0YS5zdXNjcmlwY2lvbmVzLmxlbmd0aCA+IDApIHsgIFxuICAgICAgICAgIGNvbnNvbGUubG9nKCdTVUNDRVNGVUxMID4+Pj4+Pj4+Pj4+IGNsaWVudGlkIGRhdGE6JyAsIEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuICAgICAgICAgIGNvb2tpZS5yZW1vdmUoJ2NsaWVudGlkJykgIFxuICAgICAgICAgIGNvb2tpZS5zZXQoJ3N1c2NyaXB0b3InLGRhdGEuc3VzY3JpcGNpb25lc1swXSlcbiAgICAgICAgICBjb29raWUuc2V0KCdjbGllbnRpZCcsZGF0YS5zdXNjcmlwY2lvbmVzWzBdLmNsaWVudGlkKSAgICBcbiAgICAgICAgICBjb29raWUuc2V0KCdob3N0JyxKU09OLnN0cmluZ2lmeShkYXRhLnN1c2NyaXBjaW9uZXNbMF0ubmVnb2Npb193ZWIpKSAgICBcbiAgICAgICAgICBjb29raWUuc2V0KCd0bXAnLGRhdGEuc3VzY3JpcGNpb25lc1swXS50b2tlbl9tZXJjYWRvKSAgICAgICAgICAgICAgICAgIFxuICAgICAgICB9ICBcblxuICB9LCBbIGhvc3QsIGRhdGEgXSk7XG5cblxuICBjb25zdCBbYXV0aFN0YXRlLCBhdXRoRGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBJTklUSUFMX1NUQVRFKTtcbiAgXG4gIFxuICBpZiggbG9hZGluZyApIHtcblxuICAgIHJldHVybiAoPExvYWRpbmdXcmFwcGVyPjwvTG9hZGluZ1dyYXBwZXI+KVxuICAgICAgICBcbiAgfSBlbHNlIHtcblxuICAgIHJldHVybiAoXG4gICAgICBkYXRhICYmIGRhdGEuc3VzY3JpcGNpb25lcy5sZW5ndGggPiAwICYmICg8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgYXV0aFN0YXRlLCBhdXRoRGlzcGF0Y2ggfX0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+KVxuICAgICk7XG5cbiAgfVxuICBcbiBcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/auth/auth.provider.tsx\n");

/***/ }),

/***/ "./src/site-settings/site-translation/lang/es.json":
/*!*********************************************************!*\
  !*** ./src/site-settings/site-translation/lang/es.json ***!
  \*********************************************************/
/*! exports provided: nav.home, nav.grocery, nav.makeup, nav.bags, nav.clothing, nav.furniture, nav.book, nav.medicine, nav.foods, nav.terms_and_services, nav.privacy_policy, nav.offer, nav.help, nav.profile, nav.checkout, nav.order_received, nav.logout, nav.login, nav.order, groceriesTitle, groceriesSubTitle, bakeryTitle, bakerySubTitle, makeupTitle, makeupSubTitle, bagsTitle, bagsSubTitle, womenClothsTitle, womenClothsSubTitle, furnitureTitle, furnitureSubTitle, booksTitle, booksSubTitle, medicineTitle, medicineSubTitle, foodsTitle, foodsSubTitle, alternativeCheckout, termAndConditionHelper, termAndCondition, reqMedicine, submitRequest, noteHead, noteDescription, rmMedicineName, rmMedicineQuantity, rmPrescripttionUpload, rmUploadText, cartTitle, discountText, vatText, searchPlaceholder, searchButtonText, mobileSignInButtonText, navlinkAccountSettings, cartItems, cartItem, addCartButton, addToCartButton, backBtn, noProductFound, specialCode, couponApplied, couponPlaceholder, sidebarYourOrder, profilePageTitle, profileNameField, profileEmailField, profileSaveBtn, contactNumberTItle, addContactBtn, deliveryAddresTitle, addAddressBtn, addNew, paymentCardTitle, addCardBtn, savedCardsId, savedContactId, savedAddressId, siteFooter, itemsText, shippinFeeText, voucherText, voucherApply, couponError, deliverySchedule, checkoutDeliveryAddress, contactNumberText, selectPaymentText, processCheckout, backHomeBtn, pago, orderReceivedText, orderReceivedSuccess, orderNumberText, orderDateText, paymenMethodText, databuyer, paymentMethodName, orderDetailsText, totalItemText, orderTimeText, deliveryTimeText, deliveryLocationText, totalAmountText, loadMoreBtn, welcomeBack, loginText, emailAddressPlaceholder, passwordPlaceholder, continueBtn, orText, continueFacebookBtn, continueGoogleBtn, dontHaveAccount, signUpBtnText, forgotPasswordText, resetText, signUpText, termsConditionText, alreadyHaveAccount, backToSign, loginBtnText, forgotPassText, sendResetPassText, resetPasswordBtn, intlCopyBtnId, intlCopySuccessId, locationModalheading, locationModalSubHeading, locationModalFooter, saleText, offText, faqNo1Title, faqNo1Desc, faqNo2Title, faqNo2Desc, faqNo3Title, faqNo3Desc, faqNo4Title, faqNo4Desc, totalText, subTotal, intlOrderDetailsDiscount, intlOrderDetailsDelivery, intlOrderPageTitle, intlNoOrderFound, intlOrderPageDetails, intlTableColTitle2, intlTableColTitle3, intlOrderCardTitleText, customerlabel, intlOrderCardDateText, intlOrderCardTotalText, joinButton, ar, zh, en, de, he, es, intlTextBy, intlReletedItems, readFreeSampleButton, bookSectionTitle, authorSectionTitle, defaultIntlId, noResultFound, deliveryText, cuisineText, minOrderText, fromText, loadMoreButton, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"nav.home\\\":\\\"Inicio\\\",\\\"nav.grocery\\\":\\\"Pastelería\\\",\\\"nav.makeup\\\":\\\"Maquillaje\\\",\\\"nav.bags\\\":\\\"Pantalones\\\",\\\"nav.clothing\\\":\\\"Ropa\\\",\\\"nav.furniture\\\":\\\"Mueble\\\",\\\"nav.book\\\":\\\"Libro\\\",\\\"nav.medicine\\\":\\\"Medicamento\\\",\\\"nav.foods\\\":\\\"Alimentos\\\",\\\"nav.terms_and_services\\\":\\\"Términos y servicios\\\",\\\"nav.privacy_policy\\\":\\\"Política de privacidad\\\",\\\"nav.offer\\\":\\\"Ver Cupones\\\",\\\"nav.help\\\":\\\"Necesitas ayuda\\\",\\\"nav.profile\\\":\\\"Perfil\\\",\\\"nav.checkout\\\":\\\"Realizar el Pedido\\\",\\\"nav.order_received\\\":\\\"Factura de pedido\\\",\\\"nav.logout\\\":\\\"Cerrar sesión\\\",\\\"nav.login\\\":\\\"Iniciar sesión\\\",\\\"nav.order\\\":\\\"Mis Pedidos\\\",\\\"groceriesTitle\\\":\\\"Tú Pedido en minutos\\\",\\\"groceriesSubTitle\\\":\\\"Disfrute todos nuestros productos saludables entregados en su puerta todo el día todos los días\\\",\\\"bakeryTitle\\\":\\\"Reciba sus artículos de panadería\\\",\\\"bakerySubTitle\\\":\\\"Obtenga sus artículos de panadería favoritos horneados y entregados en su puerta en cualquier momento\\\",\\\"makeupTitle\\\":\\\"Maquillajes de marca e importados\\\",\\\"makeupSubTitle\\\":\\\"La forma más fácil y económica de obtener sus maquillajes de marca e importados\\\",\\\"bagsTitle\\\":\\\"Bolsos exclusivos de marca\\\",\\\"bagsSubTitle\\\":\\\"Obtenga sus bolsos exclusivos y de marca entregados en poco tiempo\\\",\\\"womenClothsTitle\\\":\\\"Compra tus vestidos de diseñador\\\",\\\"womenClothsSubTitle\\\":\\\"Listo para usar vestidos a medida para usted en línea. Date prisa mientras duren las existencias.\\\",\\\"furnitureTitle\\\":\\\"Muebles exclusivos a precio económico\\\",\\\"furnitureSubTitle\\\":\\\"Haga de su casa un hogar con nuestra amplia colección de hermosos muebles.\\\",\\\"booksTitle\\\":\\\"Tu propia tienda de libros\\\",\\\"booksSubTitle\\\":\\\"Obtenga sus libros favoritos de nuestra amplia gama de libros.\\\",\\\"medicineTitle\\\":\\\"Su medicamento, entregado\\\",\\\"medicineSubTitle\\\":\\\"Diga adiós a todas sus preocupaciones de atención médica con nosotros.\\\",\\\"foodsTitle\\\":\\\"Tu orden lo entregamos\\\",\\\"foodsSubTitle\\\":\\\"Obtenga sus comidas favoritas en menos de una hora\\\",\\\"alternativeCheckout\\\":\\\"Alternativa de pago\\\",\\\"termAndConditionHelper\\\":\\\"Al realizar esta compra, usted acepta nuestro\\\",\\\"termAndCondition\\\":\\\"Términos y Condiciones.\\\",\\\"reqMedicine\\\":\\\"Solicitar medicina\\\",\\\"submitRequest\\\":\\\"Enviar peticion\\\",\\\"noteHead\\\":\\\"Nota\\\",\\\"noteDescription\\\":\\\"La disponibilidad del producto y el precio se confirmarán por teléfono. Cargo por entrega dentro de la ciudad $ 5 y fuera de la ciudad $ 10.\\\",\\\"rmMedicineName\\\":\\\"Nombre de medicina\\\",\\\"rmMedicineQuantity\\\":\\\"Cantidad\\\",\\\"rmPrescripttionUpload\\\":\\\"Sube tu receta\\\",\\\"rmUploadText\\\":\\\"Arrastra / sube tu archivo aquí.\\\",\\\"cartTitle\\\":\\\"Mi Pedido\\\",\\\"discountText\\\":\\\"Descuento\\\",\\\"vatText\\\":\\\"Incl. IVA\\\",\\\"searchPlaceholder\\\":\\\"Busque sus productos desde aquí\\\",\\\"searchButtonText\\\":\\\"Buscar\\\",\\\"mobileSignInButtonText\\\":\\\"Unirse\\\",\\\"navlinkAccountSettings\\\":\\\"Mi cuenta\\\",\\\"cartItems\\\":\\\"Productos\\\",\\\"cartItem\\\":\\\"Producto\\\",\\\"addCartButton\\\":\\\"Comprar\\\",\\\"addToCartButton\\\":\\\"Añadir al carrito\\\",\\\"backBtn\\\":\\\"atrás\\\",\\\"noProductFound\\\":\\\"No se encontraron productos.\\\",\\\"specialCode\\\":\\\"¿Tienes un cupón?\\\",\\\"couponApplied\\\":\\\"Cupón Aplicado\\\",\\\"couponPlaceholder\\\":\\\"Ingrese el código de cupón aquí\\\",\\\"sidebarYourOrder\\\":\\\"Orden\\\",\\\"profilePageTitle\\\":\\\"Mi Cuenta\\\",\\\"profileNameField\\\":\\\"Nombre\\\",\\\"profileEmailField\\\":\\\"Email\\\",\\\"profileSaveBtn\\\":\\\"Aceptar\\\",\\\"contactNumberTItle\\\":\\\"Número de contacto\\\",\\\"addContactBtn\\\":\\\"Nuevo\\\",\\\"deliveryAddresTitle\\\":\\\"Dirección de entrega\\\",\\\"addAddressBtn\\\":\\\"Nuevo\\\",\\\"addNew\\\":\\\"Agregar nuevo\\\",\\\"paymentCardTitle\\\":\\\"Tarjeta de pagos\\\",\\\"addCardBtn\\\":\\\"Agregar tarjeta\\\",\\\"savedCardsId\\\":\\\"Tarjetas guardadas\\\",\\\"savedContactId\\\":\\\"Guardar contacto\\\",\\\"savedAddressId\\\":\\\"Guardar dirección\\\",\\\"siteFooter\\\":\\\"es un producto de\\\",\\\"itemsText\\\":\\\"artículos\\\",\\\"shippinFeeText\\\":\\\"Gastos de envío\\\",\\\"voucherText\\\":\\\"Vale\\\",\\\"voucherApply\\\":\\\"Aplicar\\\",\\\"couponError\\\":\\\"Cupón Inválido\\\",\\\"deliverySchedule\\\":\\\"Calendario de entregas\\\",\\\"checkoutDeliveryAddress\\\":\\\"Dirección de entrega\\\",\\\"contactNumberText\\\":\\\"Número de contacto\\\",\\\"selectPaymentText\\\":\\\"Opción de pago\\\",\\\"processCheckout\\\":\\\"Procesar Pedido\\\",\\\"backHomeBtn\\\":\\\"Revisar Estado de Pedido\\\",\\\"pago\\\":\\\"Pagar mi Orden\\\",\\\"orderReceivedText\\\":\\\"Orden Recibida\\\",\\\"orderReceivedSuccess\\\":\\\"¡Felicitaciones!. Tu orden ha sido recibida!\\\",\\\"orderNumberText\\\":\\\"Número de orden\\\",\\\"orderDateText\\\":\\\"Fecha\\\",\\\"paymenMethodText\\\":\\\"Método de pago\\\",\\\"databuyer\\\":\\\"Datos Cliente\\\",\\\"paymentMethodName\\\":\\\"Contra reembolso\\\",\\\"orderDetailsText\\\":\\\"Detalles del pedido\\\",\\\"totalItemText\\\":\\\"Artículo total\\\",\\\"orderTimeText\\\":\\\"Tiempo Estimado Entrega\\\",\\\"deliveryTimeText\\\":\\\"El tiempo de entrega\\\",\\\"deliveryLocationText\\\":\\\"Lugar de entrega\\\",\\\"totalAmountText\\\":\\\"Cantidad total\\\",\\\"loadMoreBtn\\\":\\\"Carga más\\\",\\\"welcomeBack\\\":\\\"Le damos la Bienvenida\\\",\\\"loginText\\\":\\\"Inicie sesión con su correo electrónico y contraseña\\\",\\\"emailAddressPlaceholder\\\":\\\"Dirección de correo electrónico o número de contacto\\\",\\\"passwordPlaceholder\\\":\\\"Contraseña (mínimo {minCharacter} caracteres)\\\",\\\"continueBtn\\\":\\\"Continuar\\\",\\\"orText\\\":\\\"o\\\",\\\"continueFacebookBtn\\\":\\\"Continuar con Facebook\\\",\\\"continueGoogleBtn\\\":\\\"Continuar con Google\\\",\\\"dontHaveAccount\\\":\\\"¿No tienes cuenta?\\\",\\\"signUpBtnText\\\":\\\"Regístrate\\\",\\\"forgotPasswordText\\\":\\\"¿Olvidaste tu contraseña?\\\",\\\"resetText\\\":\\\"Reinicialo\\\",\\\"signUpText\\\":\\\"Al registrarte, aceptas ingresar al sitio\\\",\\\"termsConditionText\\\":\\\"Términos y condiciones\\\",\\\"alreadyHaveAccount\\\":\\\"¿Ya tienes una cuenta?\\\",\\\"backToSign\\\":\\\"De regreso\\\",\\\"loginBtnText\\\":\\\"Iniciar sesión\\\",\\\"forgotPassText\\\":\\\"Se te olvidó tu contraseña\\\",\\\"sendResetPassText\\\":\\\"Le enviaremos un enlace para restablecer su contraseña\\\",\\\"resetPasswordBtn\\\":\\\"Restablecer contraseñas\\\",\\\"intlCopyBtnId\\\":\\\"Copiar\\\",\\\"intlCopySuccessId\\\":\\\"Copiado\\\",\\\"locationModalheading\\\":\\\"Selecciona tu ubicación\\\",\\\"locationModalSubHeading\\\":\\\"Debe seleccionar su ubicación para el servicio de entrega\\\",\\\"locationModalFooter\\\":\\\"Entrega gratuita para el primer pedido\\\",\\\"saleText\\\":\\\"Rebaja\\\",\\\"offText\\\":\\\"Apagada\\\",\\\"faqNo1Title\\\":\\\"¿Cómo contactar con el Servicio al Cliente?\\\",\\\"faqNo1Desc\\\":\\\"Nuestro equipo de experiencia del cliente está disponible los {number1} días de la semana y ofrecemos {number2} formas de ponerse en contacto: correo electrónico y chat. Intentamos responder rápidamente, por lo que no debe esperar demasiado para recibir una respuesta.\\\",\\\"faqNo2Title\\\":\\\"La instalación de la aplicación falló, ¿cómo actualizar la información del sistema?\\\",\\\"faqNo2Desc\\\":\\\"Por favor lea la documentación cuidadosamente. También tenemos algunos videos tutoriales en línea sobre este tema. Si el problema persiste, abra un ticket en el foro de soporte\\\",\\\"faqNo3Title\\\":\\\"Respuesta del sitio web tomando tiempo, ¿cómo mejorar?\\\",\\\"faqNo3Desc\\\":\\\"Al principio, verifique su conexión a internet. También tenemos algunos videos tutoriales en línea sobre este tema. Si el problema persiste, abra un ticket en el foro de soporte.\\\",\\\"faqNo4Title\\\":\\\"¿Cómo creo una cuenta?\\\",\\\"faqNo4Desc\\\":\\\"Si desea abrir una cuenta para uso personal, puede hacerlo por teléfono o en línea. Abrir una cuenta en línea solo debería tomar unos minutos.\\\",\\\"totalText\\\":\\\"Total\\\",\\\"subTotal\\\":\\\"Subtotal\\\",\\\"intlOrderDetailsDiscount\\\":\\\"Descuento\\\",\\\"intlOrderDetailsDelivery\\\":\\\"Gastos de envío\\\",\\\"intlOrderPageTitle\\\":\\\"Mis Pedidos\\\",\\\"intlNoOrderFound\\\":\\\"No se ha encontrado ningún pedido.\\\",\\\"intlOrderPageDetails\\\":\\\"Detalles del pedido\\\",\\\"intlTableColTitle2\\\":\\\"Cantidad\\\",\\\"intlTableColTitle3\\\":\\\"Precio\\\",\\\"intlOrderCardTitleText\\\":\\\"Orden\\\",\\\"customerlabel\\\":\\\"Cliente\\\",\\\"intlOrderCardDateText\\\":\\\"Fecha de orden\\\",\\\"intlOrderCardTotalText\\\":\\\"Precio total\\\",\\\"joinButton\\\":\\\"Unirse\\\",\\\"ar\\\":\\\"Arábica\\\",\\\"zh\\\":\\\"Chino\\\",\\\"en\\\":\\\"Inglés\\\",\\\"de\\\":\\\"Alemán\\\",\\\"he\\\":\\\"Hebreo\\\",\\\"es\\\":\\\"Español\\\",\\\"intlTextBy\\\":\\\"por\\\",\\\"intlReletedItems\\\":\\\"Productos Relacionados\\\",\\\"readFreeSampleButton\\\":\\\"Leer muestra gratis\\\",\\\"bookSectionTitle\\\":\\\"Acerca del libro\\\",\\\"authorSectionTitle\\\":\\\"Sobre el autor\\\",\\\"defaultIntlId\\\":\\\"Agregue un marcador de posición del archivo de idioma\\\",\\\"noResultFound\\\":\\\"Lo sentimos, no se encontraron resultados :(\\\",\\\"deliveryText\\\":\\\"Entrega\\\",\\\"cuisineText\\\":\\\"Cocina\\\",\\\"minOrderText\\\":\\\"La orden mínima\\\",\\\"fromText\\\":\\\"Desde\\\",\\\"loadMoreButton\\\":\\\"Carga más\\\"}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9zaXRlLXNldHRpbmdzL3NpdGUtdHJhbnNsYXRpb24vbGFuZy9lcy5qc29uLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/site-settings/site-translation/lang/es.json\n");

/***/ })

})