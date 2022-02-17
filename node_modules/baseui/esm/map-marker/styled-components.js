function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled } from '../styles/index.js';
import { FLOATING_MARKER_ANCHOR_POSITIONS, xSmallPinheadDimension } from './constants.js';
export var getAnchorTransform = function getAnchorTransform(anchor, anchorSize) {
  var _FLOATING_MARKER_ANCH;

  return (_FLOATING_MARKER_ANCH = {}, _defineProperty(_FLOATING_MARKER_ANCH, FLOATING_MARKER_ANCHOR_POSITIONS.none, ""), _defineProperty(_FLOATING_MARKER_ANCH, FLOATING_MARKER_ANCHOR_POSITIONS.topLeft, "translate(".concat(anchorSize, "px, ").concat(anchorSize, "px)")), _defineProperty(_FLOATING_MARKER_ANCH, FLOATING_MARKER_ANCHOR_POSITIONS.topRight, "translate(-100%, ".concat(anchorSize, "px)")), _defineProperty(_FLOATING_MARKER_ANCH, FLOATING_MARKER_ANCHOR_POSITIONS.bottomLeft, "translate(".concat(anchorSize, "px, -100%)")), _defineProperty(_FLOATING_MARKER_ANCH, FLOATING_MARKER_ANCHOR_POSITIONS.bottomRight, "translate(-100%, -100%)"), _FLOATING_MARKER_ANCH)[anchor];
};
export var DragShadowContainer = styled('div', function (_ref) {
  var $theme = _ref.$theme,
      $height = _ref.$height,
      $width = _ref.$width,
      $dragging = _ref.$dragging;
  return {
    width: "".concat($width, "px"),
    height: "".concat($height, "px"),
    opacity: $dragging ? 1 : 0,
    visibility: $dragging ? 'visible' : 'hidden',
    transition: "".concat($theme.animation.timing300, " ").concat($theme.animation.easeOutCurve, " all"),
    position: 'relative',
    boxShadow: $theme.lighting.shadow600
  };
});
DragShadowContainer.displayName = "DragShadowContainer";
export var DragShadow = styled('div', function (_ref2) {
  var $theme = _ref2.$theme,
      $background = _ref2.$background,
      $width = _ref2.$width;
  return {
    background: $background,
    borderRadius: '50%',
    width: "".concat($width, "px"),
    height: "".concat(4, "px"),
    position: 'absolute',
    bottom: 0
  };
});
DragShadow.displayName = "DragShadow";
export var Needle = styled('div', function (_ref3) {
  var $theme = _ref3.$theme,
      $background = _ref3.$background,
      $height = _ref3.$height;
  return {
    background: $background,
    width: '4px',
    height: "".concat($height, "px"),
    boxShadow: $theme.lighting.shadow600
  };
});
Needle.displayName = "Needle";
export var FloatingMarkerRoot = styled('div', function () {
  return {
    position: 'relative',
    height: "".concat(xSmallPinheadDimension.height, "px"),
    width: "".concat(xSmallPinheadDimension.height, "px")
  };
});
FloatingMarkerRoot.displayName = "FloatingMarkerRoot";
export var FloatingMarkerPinHeadContainer = styled('div', function (_ref4) {
  var $theme = _ref4.$theme,
      $anchor = _ref4.$anchor,
      $anchorSize = _ref4.$anchorSize;
  return {
    position: 'absolute',
    transition: "".concat($theme.animation.timing300, " ").concat($theme.animation.easeOutCurve, " all"),
    transform: getAnchorTransform($anchor, $anchorSize)
  };
});
FloatingMarkerPinHeadContainer.displayName = "FloatingMarkerPinHeadContainer";
export var FloatingMarkerAnchorContainer = styled('div', function () {
  return {
    position: 'absolute'
  };
});
FloatingMarkerAnchorContainer.displayName = "FloatingMarkerAnchorContainer";
export var FixedMarkerRoot = styled('div', function () {
  return {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  };
});
FixedMarkerRoot.displayName = "FixedMarkerRoot";
export var FixedMarkerDragContainer = styled('div', function (_ref5) {
  var $theme = _ref5.$theme,
      $translateAmount = _ref5.$translateAmount,
      $performTranslate = _ref5.$performTranslate;
  return {
    transform: "translateY(".concat($performTranslate ? '0px' : "".concat($translateAmount, "px"), ")"),
    transition: "".concat($theme.animation.timing300, " ").concat($theme.animation.easeOutCurve, " all"),
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  };
});
FixedMarkerDragContainer.displayName = "FixedMarkerDragContainer";
export var OuterXSmallAnchor = styled('div', function (_ref6) {
  var $theme = _ref6.$theme,
      $round = _ref6.$round,
      $background = _ref6.$background,
      $size = _ref6.$size;
  return {
    background: $background,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: "".concat($size, "px"),
    width: "".concat($size, "px"),
    borderRadius: $round ? '50%' : 0,
    boxShadow: $theme.lighting.shadow600
  };
});
OuterXSmallAnchor.displayName = "OuterXSmallAnchor";
export var InnerXSmallAnchor = styled('div', function (_ref7) {
  var $round = _ref7.$round,
      $color = _ref7.$color,
      $size = _ref7.$size;
  return {
    background: $color,
    height: "".concat($size, "px"),
    width: "".concat($size, "px"),
    borderRadius: $round ? '50%' : 0
  };
});
InnerXSmallAnchor.displayName = "InnerXSmallAnchor";
export var PinHead = styled('div', function (_ref8) {
  var $theme = _ref8.$theme,
      $height = _ref8.$height,
      $background = _ref8.$background,
      $gridTemplateColumns = _ref8.$gridTemplateColumns,
      $type = _ref8.$type,
      $forceCircle = _ref8.$forceCircle;
  var sharedStyles = {
    fixed: {
      padding: '0px 12px',
      borderRadius: "".concat($height, "px")
    },
    floating: {
      padding: '0px 8px'
    }
  };
  return _objectSpread(_objectSpread({
    background: $background,
    height: "".concat($height, "px"),
    display: 'grid',
    gridTemplateColumns: $gridTemplateColumns,
    gap: '8px',
    boxShadow: $theme.lighting.shadow600,
    whiteSpace: 'nowrap'
  }, sharedStyles[$type]), $forceCircle && {
    width: "".concat($height, "px"),
    display: 'flex',
    justifyContent: 'center',
    boxSizing: 'border-box'
  });
});
PinHead.displayName = "PinHead";