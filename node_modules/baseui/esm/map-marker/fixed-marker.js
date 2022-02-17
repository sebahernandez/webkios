function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { useStyletron } from '../styles/index.js';
import { getOverrides } from '../helpers/overrides.js';
import { PINHEAD_TYPES, NEEDLE_SIZES, NEEDLE_HEIGHTS, PINHEAD_SIZES_SHAPES, dragShadowHeight, dragShadowMarginTop, dragShadowWidth } from './constants.js';
import PinHead from './pin-head.js';
import { FixedMarkerDragContainer as StyledFixedMarkerDragContainer, FixedMarkerRoot as StyledRoot, Needle as StyledNeedle, DragShadow as StyledDragShadow, DragShadowContainer as StyledDragShadowContainer } from './styled-components.js';

var Needle = function Needle(_ref) {
  var size = _ref.size,
      background = _ref.background,
      _ref$overrides = _ref.overrides,
      overrides = _ref$overrides === void 0 ? {} : _ref$overrides;

  var _getOverrides = getOverrides(overrides.Needle, StyledNeedle),
      _getOverrides2 = _slicedToArray(_getOverrides, 2),
      Needle = _getOverrides2[0],
      needleProps = _getOverrides2[1];

  return /*#__PURE__*/React.createElement(Needle, _extends({
    $background: background,
    $height: NEEDLE_HEIGHTS[size]
  }, needleProps));
};

var DragShadow = function DragShadow(_ref2) {
  var background = _ref2.background,
      dragging = _ref2.dragging,
      height = _ref2.height,
      _ref2$overrides = _ref2.overrides,
      overrides = _ref2$overrides === void 0 ? {} : _ref2$overrides;

  var _getOverrides3 = getOverrides(overrides.DragShadowContainer, StyledDragShadowContainer),
      _getOverrides4 = _slicedToArray(_getOverrides3, 2),
      DragShadowContainer = _getOverrides4[0],
      dragShadowContainerProps = _getOverrides4[1];

  var _getOverrides5 = getOverrides(overrides.DragShadow, StyledDragShadow),
      _getOverrides6 = _slicedToArray(_getOverrides5, 2),
      DragShadow = _getOverrides6[0],
      dragShadowProps = _getOverrides6[1];

  return /*#__PURE__*/React.createElement(DragShadowContainer, _extends({
    $width: dragShadowWidth,
    $height: height,
    $dragging: dragging
  }, dragShadowContainerProps), /*#__PURE__*/React.createElement(DragShadow, _extends({
    $width: dragShadowWidth,
    $background: background
  }, dragShadowProps)));
};

var FixedMarker = function FixedMarker(_ref3) {
  var _ref3$size = _ref3.size,
      size = _ref3$size === void 0 ? PINHEAD_SIZES_SHAPES.medium : _ref3$size,
      _ref3$needle = _ref3.needle,
      needle = _ref3$needle === void 0 ? NEEDLE_SIZES.medium : _ref3$needle,
      label = _ref3.label,
      startEnhancer = _ref3.startEnhancer,
      endEnhancer = _ref3.endEnhancer,
      color = _ref3.color,
      background = _ref3.background,
      _ref3$dragging = _ref3.dragging,
      dragging = _ref3$dragging === void 0 ? false : _ref3$dragging,
      _ref3$overrides = _ref3.overrides,
      overrides = _ref3$overrides === void 0 ? {} : _ref3$overrides;

  var _useStyletron = useStyletron(),
      _useStyletron2 = _slicedToArray(_useStyletron, 2),
      theme = _useStyletron2[1];

  var _theme$colors = theme.colors,
      backgroundInversePrimary = _theme$colors.backgroundInversePrimary,
      primaryB = _theme$colors.primaryB;
  color = color || primaryB;
  background = background || backgroundInversePrimary;
  var doesPinHeadTransformOnDrag = needle !== NEEDLE_SIZES.none;

  var _getOverrides7 = getOverrides(overrides.Root, StyledRoot),
      _getOverrides8 = _slicedToArray(_getOverrides7, 2),
      Root = _getOverrides8[0],
      rootProps = _getOverrides8[1];

  var _getOverrides9 = getOverrides(overrides.DragContainer, StyledFixedMarkerDragContainer),
      _getOverrides10 = _slicedToArray(_getOverrides9, 2),
      FixedMarkerDragContainer = _getOverrides10[0],
      fixedMarkerDragContainerProps = _getOverrides10[1];

  return /*#__PURE__*/React.createElement(Root, _extends({
    "data-baseweb": "fixed-map-marker"
  }, rootProps), /*#__PURE__*/React.createElement(FixedMarkerDragContainer, _extends({
    $translateAmount: dragShadowMarginTop + dragShadowHeight,
    $performTranslate: doesPinHeadTransformOnDrag && dragging
  }, fixedMarkerDragContainerProps), /*#__PURE__*/React.createElement(PinHead, _extends({
    size: size,
    label: label
  }, startEnhancer ? {
    startEnhancer: startEnhancer
  } : {}, endEnhancer ? {
    endEnhancer: endEnhancer
  } : {}, {
    color: color,
    background: background,
    type: PINHEAD_TYPES.fixed,
    overrides: overrides
  })), /*#__PURE__*/React.createElement(Needle, {
    size: needle,
    background: background,
    overrides: overrides
  })), doesPinHeadTransformOnDrag && /*#__PURE__*/React.createElement(DragShadow, {
    background: background,
    dragging: dragging,
    height: dragShadowMarginTop + dragShadowHeight,
    overrides: overrides
  }));
};

export default FixedMarker;