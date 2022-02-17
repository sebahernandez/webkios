var _Object$freeze, _Object$freeze2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
export var NEEDLE_SIZES = Object.freeze({
  none: 'none',
  short: 'short',
  medium: 'medium',
  tall: 'tall'
});
export var NEEDLE_HEIGHTS = Object.freeze((_Object$freeze = {}, _defineProperty(_Object$freeze, NEEDLE_SIZES.none, 0), _defineProperty(_Object$freeze, NEEDLE_SIZES.short, 4), _defineProperty(_Object$freeze, NEEDLE_SIZES.medium, 12), _defineProperty(_Object$freeze, NEEDLE_SIZES.tall, 20), _Object$freeze));
export var PINHEAD_SIZES_SHAPES = Object.freeze({
  xSmallCircle: 'x-small-circle',
  xSmallSquare: 'x-small-square',
  small: 'small',
  medium: 'medium',
  large: 'large'
});
export var xSmallPinheadDimension = {
  height: 16,
  icon: 4
};
export var PINHEAD_DIMENSIONS = Object.freeze((_Object$freeze2 = {}, _defineProperty(_Object$freeze2, PINHEAD_SIZES_SHAPES.xSmallSquare, xSmallPinheadDimension), _defineProperty(_Object$freeze2, PINHEAD_SIZES_SHAPES.xSmallCircle, xSmallPinheadDimension), _defineProperty(_Object$freeze2, PINHEAD_SIZES_SHAPES.small, {
  height: 24,
  icon: 16
}), _defineProperty(_Object$freeze2, PINHEAD_SIZES_SHAPES.medium, {
  height: 36,
  icon: 16
}), _defineProperty(_Object$freeze2, PINHEAD_SIZES_SHAPES.large, {
  height: 48,
  icon: 24
}), _Object$freeze2));
export var PINHEAD_TYPES = Object.freeze({
  floating: 'floating',
  fixed: 'fixed'
});
export var FLOATING_MARKER_SIZES = Object.freeze({
  small: 'small',
  medium: 'medium',
  large: 'large'
});
export var FLOATING_MARKER_ANCHOR_POSITIONS = Object.freeze({
  none: 'none',
  topLeft: 'top-left',
  topRight: 'top-right',
  bottomRight: 'bottom-right',
  bottomLeft: 'bottom-left'
});
export var FLOATING_MARKER_ANCHOR_TYPES = Object.freeze({
  circle: 'circle',
  square: 'square'
});
export var dragShadowHeight = 4;
export var dragShadowMarginTop = 6;
export var dragShadowWidth = 6;
export var anchorSize = 16;