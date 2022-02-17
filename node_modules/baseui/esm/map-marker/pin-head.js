function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { useStyletron, styled } from '../styles/index.js';
import { getOverrides } from '../helpers/overrides.js';
import { InnerXSmallAnchor as StyledInnerXSmallAnchor, OuterXSmallAnchor as StyledOuterXSmallAnchor, PinHead as StyledPinHead } from './styled-components.js';
import { PINHEAD_DIMENSIONS, PINHEAD_TYPES, PINHEAD_SIZES_SHAPES } from './constants.js';
export var _ContentItem = styled('div', function (_ref) {
  var _match;

  var $theme = _ref.$theme,
      $color = _ref.$color,
      $height = _ref.$height,
      $size = _ref.$size;
  var match = (_match = {}, _defineProperty(_match, PINHEAD_SIZES_SHAPES.xSmallCircle, 'LabelSmall'), _defineProperty(_match, PINHEAD_SIZES_SHAPES.xSmallSquare, 'LabelSmall'), _defineProperty(_match, PINHEAD_SIZES_SHAPES.small, 'LabelSmall'), _defineProperty(_match, PINHEAD_SIZES_SHAPES.medium, 'LabelMedium'), _defineProperty(_match, PINHEAD_SIZES_SHAPES.large, 'LabelLarge'), _match);
  return _objectSpread(_objectSpread({}, $theme.typography[match[$size]]), {}, {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    lineHeight: "".concat($height, "px"),
    height: "".concat($height, "px"),
    color: $color
  });
});
_ContentItem.displayName = "_ContentItem";

var PinHead = function PinHead(_ref2) {
  var _ref2$size = _ref2.size,
      size = _ref2$size === void 0 ? PINHEAD_SIZES_SHAPES.medium : _ref2$size,
      _ref2$label = _ref2.label,
      label = _ref2$label === void 0 ? '' : _ref2$label,
      StartEnhancer = _ref2.startEnhancer,
      EndEnhancer = _ref2.endEnhancer,
      color = _ref2.color,
      background = _ref2.background,
      _ref2$type = _ref2.type,
      type = _ref2$type === void 0 ? PINHEAD_TYPES.fixed : _ref2$type,
      anchorType = _ref2.anchorType,
      _ref2$overrides = _ref2.overrides,
      overrides = _ref2$overrides === void 0 ? {} : _ref2$overrides;

  var _useStyletron = useStyletron(),
      _useStyletron2 = _slicedToArray(_useStyletron, 2),
      theme = _useStyletron2[1];

  var _theme$colors = theme.colors,
      backgroundPrimary = _theme$colors.backgroundPrimary,
      primaryA = _theme$colors.primaryA;
  color = color || backgroundPrimary;
  background = background || primaryA;
  var activeElements = [label, StartEnhancer, EndEnhancer].filter(function (x) {
    return x;
  });
  var gridTemplateColumns = activeElements.map(function () {
    return 'auto';
  }).join(' ');
  var forceCircle = activeElements.length === 1 && !label;
  var _PINHEAD_DIMENSIONS$s = PINHEAD_DIMENSIONS[size],
      height = _PINHEAD_DIMENSIONS$s.height,
      icon = _PINHEAD_DIMENSIONS$s.icon;

  var _getOverrides = getOverrides(overrides.PinHead, StyledPinHead),
      _getOverrides2 = _slicedToArray(_getOverrides, 2),
      PinHead = _getOverrides2[0],
      pinHeadProps = _getOverrides2[1];

  var _getOverrides3 = getOverrides(overrides.PinHeadContent, _ContentItem),
      _getOverrides4 = _slicedToArray(_getOverrides3, 2),
      ContentItem = _getOverrides4[0],
      contentItemProps = _getOverrides4[1];

  var _getOverrides5 = getOverrides(overrides.InnerAnchor, StyledInnerXSmallAnchor),
      _getOverrides6 = _slicedToArray(_getOverrides5, 2),
      InnerXSmallAnchor = _getOverrides6[0],
      innerXSmallAnchorProps = _getOverrides6[1];

  var _getOverrides7 = getOverrides(overrides.OuterAnchor, StyledOuterXSmallAnchor),
      _getOverrides8 = _slicedToArray(_getOverrides7, 2),
      OuterXSmallAnchor = _getOverrides8[0],
      outerXSmallAnchorProps = _getOverrides8[1];

  if (type === PINHEAD_TYPES.fixed && (size === PINHEAD_SIZES_SHAPES.xSmallSquare || size === PINHEAD_SIZES_SHAPES.xSmallCircle)) {
    var round = size === PINHEAD_SIZES_SHAPES.xSmallCircle;
    return /*#__PURE__*/React.createElement(OuterXSmallAnchor, _extends({
      $round: round,
      $background: background,
      $size: height
    }, outerXSmallAnchorProps), /*#__PURE__*/React.createElement(InnerXSmallAnchor, _extends({
      $color: color,
      $round: round,
      $size: icon
    }, innerXSmallAnchorProps)));
  }

  return /*#__PURE__*/React.createElement(PinHead, _extends({
    $background: background,
    $height: height,
    $gridTemplateColumns: gridTemplateColumns,
    $forceCircle: forceCircle,
    $type: type
  }, pinHeadProps), StartEnhancer && /*#__PURE__*/React.createElement(ContentItem, _extends({
    $height: height,
    $color: color,
    $size: size
  }, contentItemProps), /*#__PURE__*/React.createElement(StartEnhancer, {
    size: icon
  })), label && /*#__PURE__*/React.createElement(ContentItem, _extends({
    $height: height,
    $color: color,
    $size: size
  }, contentItemProps), label), EndEnhancer && /*#__PURE__*/React.createElement(ContentItem, _extends({
    $height: height,
    $color: color,
    $size: size
  }, contentItemProps), /*#__PURE__*/React.createElement(EndEnhancer, {
    size: icon
  })));
};

export default PinHead;