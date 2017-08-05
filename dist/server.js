/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 102);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(2);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _cardModal = __webpack_require__(79);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Card = function (_React$Component) {
    _inherits(_Card, _React$Component);

    function _Card(props) {
        _classCallCheck(this, _Card);

        var _this = _possibleConstructorReturn(this, (_Card.__proto__ || Object.getPrototypeOf(_Card)).call(this, props));

        _this._handleClick = function () {
            _this.setState(_extends({}, _this.state, { hidden: !_this.state.hidden }));
        };

        _this.state = { hidden: props.hidable };
        return _this;
    }

    _createClass(_Card, [{
        key: '_renderContent',
        value: function _renderContent() {
            if (this.state.hidden) {
                return null;
            }
            var _props = this.props,
                title = _props.title,
                content = _props.content,
                editable = _props.editable;

            return _react2.default.createElement(
                _semanticUiReact.Card.Content,
                null,
                content,
                editable && _react2.default.createElement('br', null),
                editable && _react2.default.createElement(_cardModal.CardModal, { title: editable.title, icon: editable.icon, content: editable.content, actions: editable.actions }),
                editable && _react2.default.createElement(_cardModal.CardModal, { title: editable.title, icon: editable.icon, content: editable.content, actions: editable.actions })
            );
        }
    }, {
        key: '_renderHidableOptionSelectorLabelWithIcon',
        value: function _renderHidableOptionSelectorLabelWithIcon() {
            if (!this.props.hidable) {
                return null;
            }
            return _react2.default.createElement(
                _semanticUiReact.Label,
                { size: 'large', onClick: this._handleClick, as: 'a', color: 'blue', attached: 'top right' },
                _react2.default.createElement(_semanticUiReact.Icon, { name: this.state.hidden ? 'triangle right' : 'dropdown' })
            );
        }
    }, {
        key: '_renderRightIcon',
        value: function _renderRightIcon() {
            return _react2.default.createElement(
                _semanticUiReact.Label,
                { size: 'large', color: 'blue', attached: 'top left' },
                _react2.default.createElement(_semanticUiReact.Icon, { name: this.props.icon })
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                title = _props2.title,
                content = _props2.content,
                editable = _props2.editable,
                icon = _props2.icon;

            return _react2.default.createElement(
                _semanticUiReact.Card,
                { fluid: true },
                title && _react2.default.createElement(
                    _semanticUiReact.Button,
                    { color: 'blue' },
                    title
                ),
                icon && this._renderRightIcon(),
                this._renderHidableOptionSelectorLabelWithIcon(),
                this._renderContent()
            );
        }
    }]);

    return _Card;
}(_react2.default.Component);

_Card.propTypes = {
    title: _propTypes2.default.string,
    icon: _propTypes2.default.string,
    content: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.arrayOf(_propTypes2.default.element)]).isRequired,
    editable: _propTypes2.default.shape({
        icon: _propTypes2.default.string.isRequired,
        title: _propTypes2.default.string.isRequired,
        content: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.arrayOf(_propTypes2.default.element)]).isRequired,
        actions: _propTypes2.default.arrayOf(_propTypes2.default.element)
    }),
    hidable: _propTypes2.default.bool
};

exports.default = _Card;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _assign = __webpack_require__(23);

var ReactCurrentOwner = __webpack_require__(12);

var warning = __webpack_require__(10);
var canDefineProperty = __webpack_require__(13);
var hasOwnProperty = Object.prototype.hasOwnProperty;

var REACT_ELEMENT_TYPE = __webpack_require__(26);

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};

var specialPropKeyWarningShown, specialPropRefWarningShown;

function hasValidRef(config) {
  if (process.env.NODE_ENV !== 'production') {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.ref !== undefined;
}

function hasValidKey(config) {
  if (process.env.NODE_ENV !== 'production') {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    if (!specialPropKeyWarningShown) {
      specialPropKeyWarningShown = true;
      process.env.NODE_ENV !== 'production' ? warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
    }
  };
  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    if (!specialPropRefWarningShown) {
      specialPropRefWarningShown = true;
      process.env.NODE_ENV !== 'production' ? warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
    }
  };
  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, no instanceof check
 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
 * @internal
 */
var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allow us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner
  };

  if (process.env.NODE_ENV !== 'production') {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {};

    // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.
    if (canDefineProperty) {
      Object.defineProperty(element._store, 'validated', {
        configurable: false,
        enumerable: false,
        writable: true,
        value: false
      });
      // self and source are DEV only properties.
      Object.defineProperty(element, '_self', {
        configurable: false,
        enumerable: false,
        writable: false,
        value: self
      });
      // Two elements created in two different places should be considered
      // equal for testing purposes and therefore we hide it from enumeration.
      Object.defineProperty(element, '_source', {
        configurable: false,
        enumerable: false,
        writable: false,
        value: source
      });
    } else {
      element._store.validated = false;
      element._self = self;
      element._source = source;
    }
    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};

/**
 * Create and return a new ReactElement of the given type.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.createelement
 */
ReactElement.createElement = function (type, config, children) {
  var propName;

  // Reserved names are extracted
  var props = {};

  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    if (process.env.NODE_ENV !== 'production') {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  if (process.env.NODE_ENV !== 'production') {
    if (key || ref) {
      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
        if (key) {
          defineKeyPropWarningGetter(props, displayName);
        }
        if (ref) {
          defineRefPropWarningGetter(props, displayName);
        }
      }
    }
  }
  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
};

/**
 * Return a function that produces ReactElements of a given type.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.createfactory
 */
ReactElement.createFactory = function (type) {
  var factory = ReactElement.createElement.bind(null, type);
  // Expose the type on the factory and the prototype so that it can be
  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
  // This should not be named `constructor` since this may not be the function
  // that created the element, and it may not even be a constructor.
  // Legacy hook TODO: Warn if this is accessed
  factory.type = type;
  return factory;
};

ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

  return newElement;
};

/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.cloneelement
 */
ReactElement.cloneElement = function (element, config, children) {
  var propName;

  // Original props are copied
  var props = _assign({}, element.props);

  // Reserved names are extracted
  var key = element.key;
  var ref = element.ref;
  // Self is preserved since the owner is preserved.
  var self = element._self;
  // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.
  var source = element._source;

  // Owner will be preserved, unless ref is overridden
  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    // Remaining properties override existing props
    var defaultProps;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
};

/**
 * Verifies the object is a ReactElement.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a valid component.
 * @final
 */
ReactElement.isValidElement = function (object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
};

module.exports = ReactElement;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-cookie");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */


/**
 * WARNING: DO NOT manually require this module.
 * This is a replacement for `invariant(...)` used by the error code system
 * and will _only_ be required by the corresponding babel pass.
 * It always throws.
 */

function reactProdInvariant(code) {
  var argCount = arguments.length - 1;

  var message = 'Minified React error #' + code + '; visit ' + 'http://facebook.github.io/react/docs/error-decoder.html?invariant=' + code;

  for (var argIdx = 0; argIdx < argCount; argIdx++) {
    message += '&args[]=' + encodeURIComponent(arguments[argIdx + 1]);
  }

  message += ' for the full message or use the non-minified dev environment' + ' for full errors and additional helpful warnings.';

  var error = new Error(message);
  error.name = 'Invariant Violation';
  error.framesToPop = 1; // we don't care about reactProdInvariant's own frame

  throw error;
}

module.exports = reactProdInvariant;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("fbjs/lib/invariant");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("fbjs/lib/warning");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _semanticUiReact = __webpack_require__(2);

var _listItem = __webpack_require__(36);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _List = function (_React$Component) {
    _inherits(_List, _React$Component);

    function _List(props) {
        _classCallCheck(this, _List);

        return _possibleConstructorReturn(this, (_List.__proto__ || Object.getPrototypeOf(_List)).call(this, props));
    }

    _createClass(_List, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _semanticUiReact.List,
                null,
                this.props.items.map(function (item) {
                    return _react2.default.createElement(_listItem.ListItem, _extends({ key: item.header }, item));
                })
            );
        }
    }]);

    return _List;
}(_react2.default.Component);

_List.propTypes = {
    items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        icon: _propTypes2.default.string,
        image: _propTypes2.default.string,
        header: _propTypes2.default.string.isRequired,
        description: _propTypes2.default.string,
        buttons: _propTypes2.default.oneOfType([_propTypes2.default.shape({
            title: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]).isRequired,
            onClick: _propTypes2.default.func.isRequired
        }), _propTypes2.default.arrayOf(_propTypes2.default.shape({
            title: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]).isRequired,
            onClick: _propTypes2.default.func.isRequired
        }))])

    }))

};

exports.default = _List;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

module.exports = ReactCurrentOwner;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



var canDefineProperty = false;
if (process.env.NODE_ENV !== 'production') {
  try {
    // $FlowFixMe https://github.com/facebook/flow/issues/285
    Object.defineProperty({}, 'x', { get: function () {} });
    canDefineProperty = true;
  } catch (x) {
    // IE will fail on defineProperty
  }
}

module.exports = canDefineProperty;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _appRoutes = __webpack_require__(101);

var _appRoutes2 = _interopRequireDefault(_appRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    AppRoutes: _appRoutes2.default
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2016-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



var _prodInvariant = __webpack_require__(8);

var ReactCurrentOwner = __webpack_require__(12);

var invariant = __webpack_require__(9);
var warning = __webpack_require__(10);

function isNative(fn) {
  // Based on isNative() from Lodash
  var funcToString = Function.prototype.toString;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var reIsNative = RegExp('^' + funcToString
  // Take an example native function source for comparison
  .call(hasOwnProperty
  // Strip regex characters so we can use it for regex
  ).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&'
  // Remove hasOwnProperty from the template to make it generic
  ).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
  try {
    var source = funcToString.call(fn);
    return reIsNative.test(source);
  } catch (err) {
    return false;
  }
}

var canUseCollections =
// Array.from
typeof Array.from === 'function' &&
// Map
typeof Map === 'function' && isNative(Map) &&
// Map.prototype.keys
Map.prototype != null && typeof Map.prototype.keys === 'function' && isNative(Map.prototype.keys) &&
// Set
typeof Set === 'function' && isNative(Set) &&
// Set.prototype.keys
Set.prototype != null && typeof Set.prototype.keys === 'function' && isNative(Set.prototype.keys);

var setItem;
var getItem;
var removeItem;
var getItemIDs;
var addRoot;
var removeRoot;
var getRootIDs;

if (canUseCollections) {
  var itemMap = new Map();
  var rootIDSet = new Set();

  setItem = function (id, item) {
    itemMap.set(id, item);
  };
  getItem = function (id) {
    return itemMap.get(id);
  };
  removeItem = function (id) {
    itemMap['delete'](id);
  };
  getItemIDs = function () {
    return Array.from(itemMap.keys());
  };

  addRoot = function (id) {
    rootIDSet.add(id);
  };
  removeRoot = function (id) {
    rootIDSet['delete'](id);
  };
  getRootIDs = function () {
    return Array.from(rootIDSet.keys());
  };
} else {
  var itemByKey = {};
  var rootByKey = {};

  // Use non-numeric keys to prevent V8 performance issues:
  // https://github.com/facebook/react/pull/7232
  var getKeyFromID = function (id) {
    return '.' + id;
  };
  var getIDFromKey = function (key) {
    return parseInt(key.substr(1), 10);
  };

  setItem = function (id, item) {
    var key = getKeyFromID(id);
    itemByKey[key] = item;
  };
  getItem = function (id) {
    var key = getKeyFromID(id);
    return itemByKey[key];
  };
  removeItem = function (id) {
    var key = getKeyFromID(id);
    delete itemByKey[key];
  };
  getItemIDs = function () {
    return Object.keys(itemByKey).map(getIDFromKey);
  };

  addRoot = function (id) {
    var key = getKeyFromID(id);
    rootByKey[key] = true;
  };
  removeRoot = function (id) {
    var key = getKeyFromID(id);
    delete rootByKey[key];
  };
  getRootIDs = function () {
    return Object.keys(rootByKey).map(getIDFromKey);
  };
}

var unmountedIDs = [];

function purgeDeep(id) {
  var item = getItem(id);
  if (item) {
    var childIDs = item.childIDs;

    removeItem(id);
    childIDs.forEach(purgeDeep);
  }
}

function describeComponentFrame(name, source, ownerName) {
  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
}

function getDisplayName(element) {
  if (element == null) {
    return '#empty';
  } else if (typeof element === 'string' || typeof element === 'number') {
    return '#text';
  } else if (typeof element.type === 'string') {
    return element.type;
  } else {
    return element.type.displayName || element.type.name || 'Unknown';
  }
}

function describeID(id) {
  var name = ReactComponentTreeHook.getDisplayName(id);
  var element = ReactComponentTreeHook.getElement(id);
  var ownerID = ReactComponentTreeHook.getOwnerID(id);
  var ownerName;
  if (ownerID) {
    ownerName = ReactComponentTreeHook.getDisplayName(ownerID);
  }
  process.env.NODE_ENV !== 'production' ? warning(element, 'ReactComponentTreeHook: Missing React element for debugID %s when ' + 'building stack', id) : void 0;
  return describeComponentFrame(name, element && element._source, ownerName);
}

var ReactComponentTreeHook = {
  onSetChildren: function (id, nextChildIDs) {
    var item = getItem(id);
    !item ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Item must have been set') : _prodInvariant('144') : void 0;
    item.childIDs = nextChildIDs;

    for (var i = 0; i < nextChildIDs.length; i++) {
      var nextChildID = nextChildIDs[i];
      var nextChild = getItem(nextChildID);
      !nextChild ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected hook events to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('140') : void 0;
      !(nextChild.childIDs != null || typeof nextChild.element !== 'object' || nextChild.element == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().') : _prodInvariant('141') : void 0;
      !nextChild.isMounted ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('71') : void 0;
      if (nextChild.parentID == null) {
        nextChild.parentID = id;
        // TODO: This shouldn't be necessary but mounting a new root during in
        // componentWillMount currently causes not-yet-mounted components to
        // be purged from our tree data so their parent id is missing.
      }
      !(nextChild.parentID === id) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).', nextChildID, nextChild.parentID, id) : _prodInvariant('142', nextChildID, nextChild.parentID, id) : void 0;
    }
  },
  onBeforeMountComponent: function (id, element, parentID) {
    var item = {
      element: element,
      parentID: parentID,
      text: null,
      childIDs: [],
      isMounted: false,
      updateCount: 0
    };
    setItem(id, item);
  },
  onBeforeUpdateComponent: function (id, element) {
    var item = getItem(id);
    if (!item || !item.isMounted) {
      // We may end up here as a result of setState() in componentWillUnmount().
      // In this case, ignore the element.
      return;
    }
    item.element = element;
  },
  onMountComponent: function (id) {
    var item = getItem(id);
    !item ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Item must have been set') : _prodInvariant('144') : void 0;
    item.isMounted = true;
    var isRoot = item.parentID === 0;
    if (isRoot) {
      addRoot(id);
    }
  },
  onUpdateComponent: function (id) {
    var item = getItem(id);
    if (!item || !item.isMounted) {
      // We may end up here as a result of setState() in componentWillUnmount().
      // In this case, ignore the element.
      return;
    }
    item.updateCount++;
  },
  onUnmountComponent: function (id) {
    var item = getItem(id);
    if (item) {
      // We need to check if it exists.
      // `item` might not exist if it is inside an error boundary, and a sibling
      // error boundary child threw while mounting. Then this instance never
      // got a chance to mount, but it still gets an unmounting event during
      // the error boundary cleanup.
      item.isMounted = false;
      var isRoot = item.parentID === 0;
      if (isRoot) {
        removeRoot(id);
      }
    }
    unmountedIDs.push(id);
  },
  purgeUnmountedComponents: function () {
    if (ReactComponentTreeHook._preventPurging) {
      // Should only be used for testing.
      return;
    }

    for (var i = 0; i < unmountedIDs.length; i++) {
      var id = unmountedIDs[i];
      purgeDeep(id);
    }
    unmountedIDs.length = 0;
  },
  isMounted: function (id) {
    var item = getItem(id);
    return item ? item.isMounted : false;
  },
  getCurrentStackAddendum: function (topElement) {
    var info = '';
    if (topElement) {
      var name = getDisplayName(topElement);
      var owner = topElement._owner;
      info += describeComponentFrame(name, topElement._source, owner && owner.getName());
    }

    var currentOwner = ReactCurrentOwner.current;
    var id = currentOwner && currentOwner._debugID;

    info += ReactComponentTreeHook.getStackAddendumByID(id);
    return info;
  },
  getStackAddendumByID: function (id) {
    var info = '';
    while (id) {
      info += describeID(id);
      id = ReactComponentTreeHook.getParentID(id);
    }
    return info;
  },
  getChildIDs: function (id) {
    var item = getItem(id);
    return item ? item.childIDs : [];
  },
  getDisplayName: function (id) {
    var element = ReactComponentTreeHook.getElement(id);
    if (!element) {
      return null;
    }
    return getDisplayName(element);
  },
  getElement: function (id) {
    var item = getItem(id);
    return item ? item.element : null;
  },
  getOwnerID: function (id) {
    var element = ReactComponentTreeHook.getElement(id);
    if (!element || !element._owner) {
      return null;
    }
    return element._owner._debugID;
  },
  getParentID: function (id) {
    var item = getItem(id);
    return item ? item.parentID : null;
  },
  getSource: function (id) {
    var item = getItem(id);
    var element = item ? item.element : null;
    var source = element != null ? element._source : null;
    return source;
  },
  getText: function (id) {
    var element = ReactComponentTreeHook.getElement(id);
    if (typeof element === 'string') {
      return element;
    } else if (typeof element === 'number') {
      return '' + element;
    } else {
      return null;
    }
  },
  getUpdateCount: function (id) {
    var item = getItem(id);
    return item ? item.updateCount : 0;
  },


  getRootIDs: getRootIDs,
  getRegisteredIDs: getItemIDs,

  pushNonStandardWarningStack: function (isCreatingElement, currentSource) {
    if (typeof console.reactStack !== 'function') {
      return;
    }

    var stack = [];
    var currentOwner = ReactCurrentOwner.current;
    var id = currentOwner && currentOwner._debugID;

    try {
      if (isCreatingElement) {
        stack.push({
          name: id ? ReactComponentTreeHook.getDisplayName(id) : null,
          fileName: currentSource ? currentSource.fileName : null,
          lineNumber: currentSource ? currentSource.lineNumber : null
        });
      }

      while (id) {
        var element = ReactComponentTreeHook.getElement(id);
        var parentID = ReactComponentTreeHook.getParentID(id);
        var ownerID = ReactComponentTreeHook.getOwnerID(id);
        var ownerName = ownerID ? ReactComponentTreeHook.getDisplayName(ownerID) : null;
        var source = element && element._source;
        stack.push({
          name: ownerName,
          fileName: source ? source.fileName : null,
          lineNumber: source ? source.lineNumber : null
        });
        id = parentID;
      }
    } catch (err) {
      // Internal state is messed up.
      // Stop building the stack (it's just a nice to have).
    }

    console.reactStack(stack);
  },
  popNonStandardWarningStack: function () {
    if (typeof console.reactStackEnd !== 'function') {
      return;
    }
    console.reactStackEnd();
  }
};

module.exports = ReactComponentTreeHook;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = lowPriorityWarning;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.loginAction = loginAction;
exports.tokenAction = tokenAction;
exports.logoutAction = logoutAction;

var _types = __webpack_require__(30);

function loginAction(user, token) {
	return {
		type: _types.LOGIN,
		token: token,
		user: user
	};
}

function tokenAction(user, token) {
	return {
		type: _types.TOKEN,
		token: token,
		user: user
	};
}

function logoutAction() {
	return {
		type: LOGOUT
	};
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _announcement = __webpack_require__(71);

var _announcement2 = _interopRequireDefault(_announcement);

var _semanticUiReact = __webpack_require__(2);

var _card = __webpack_require__(4);

var _card2 = _interopRequireDefault(_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AnnouncementCard = function (_React$Component) {
    _inherits(AnnouncementCard, _React$Component);

    function AnnouncementCard(props) {
        _classCallCheck(this, AnnouncementCard);

        return _possibleConstructorReturn(this, (AnnouncementCard.__proto__ || Object.getPrototypeOf(AnnouncementCard)).call(this, props));
    }

    _createClass(AnnouncementCard, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_card2.default, {
                icon: 'alarm',
                hidable: this.props.hidable,
                title: 'Announcements',
                content: this.props.announcements.map(function (announcement) {
                    return _react2.default.createElement(_announcement2.default, {
                        key: announcement.title + announcement.date + announcement.content,
                        title: announcement.title,
                        courseTitle: announcement.courseTitle,
                        date: announcement.date,
                        content: announcement.content });
                }),
                editable: this.props.editable && {
                    content: _react2.default.createElement(
                        _semanticUiReact.Button,
                        null,
                        'Edit'
                    ),
                    title: 'Make Announcement',
                    icon: 'announcement'
                }
            });
        }
    }]);

    return AnnouncementCard;
}(_react2.default.Component);

AnnouncementCard.propTypes = {
    announcements: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        title: _propTypes2.default.string.isRequired,
        courseTitle: _propTypes2.default.string,
        date: _propTypes2.default.string.isRequired,
        content: _propTypes2.default.string.isRequired
    })).isRequired,
    editable: _propTypes2.default.bool,
    hidable: _propTypes2.default.bool
};

exports.default = AnnouncementCard;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _formInput = __webpack_require__(33);

var _formInput2 = _interopRequireDefault(_formInput);

var _form = __webpack_require__(89);

var _form2 = _interopRequireDefault(_form);

var _passwordMeter = __webpack_require__(34);

var _passwordMeter2 = _interopRequireDefault(_passwordMeter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    Form: _form2.default, FormInput: _formInput2.default, PasswordMeter: _passwordMeter2.default
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(2);

var _views = __webpack_require__(22);

var _visibleHomePage = __webpack_require__(128);

var _visibleHomePage2 = _interopRequireDefault(_visibleHomePage);

var _AnnouncementPage = __webpack_require__(47);

var _AnnouncementPage2 = _interopRequireDefault(_AnnouncementPage);

var _components = __webpack_require__(96);

var _components2 = _interopRequireDefault(_components);

var _reactRouterDom = __webpack_require__(3);

var _reactCookie = __webpack_require__(6);

var _reactRedux = __webpack_require__(7);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavigationBar = _components2.default.NavigationComponents.NavigationBar;
var SidebarMenu = _components2.default.SidebarComponents.SidebarMenu;

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.hideSidebar = function () {
            _this.setState({
                sidebarOpen: !_this.state.sidebarOpen
            });
        };

        _this.state = {
            sidebarOpen: true
        };

        return _this;
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            console.log("App Props");
            console.log(this.props);
            var left = [{ destination: "/", title: "Dashboard" }];
            var right = [{ destination: "/logout", title: "Logout" }];
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(NavigationBar, { hide: this.hideSidebar, right: right, left: left }),
                _react2.default.createElement(
                    _semanticUiReact.Grid,
                    { padded: true },
                    this.state.sidebarOpen && _react2.default.createElement(
                        _semanticUiReact.Grid.Column,
                        { stretched: true, width: 3 },
                        _react2.default.createElement(SidebarMenu, null)
                    ),
                    _react2.default.createElement(
                        _semanticUiReact.Grid.Column,
                        { width: this.state.sidebarOpen ? 13 : 16 },
                        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '' + this.props.match.url, component: _visibleHomePage2.default }),
                        _react2.default.createElement(_reactRouterDom.Route, { path: this.props.match.url + 'announcements', component: _AnnouncementPage2.default }),
                        _react2.default.createElement(_reactRouterDom.Route, { path: this.props.match.url + 'course', component: _views.CoursePage }),
                        _react2.default.createElement(_reactRouterDom.Route, { path: this.props.match.url + 'repo', component: _views.RepoPage })
                    )
                )
            );
        }
    }]);

    return App;
}(_react2.default.Component);

;

exports.default = App;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _authentication = __webpack_require__(98);

var _authentication2 = _interopRequireDefault(_authentication);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var API_URL = "http://loopcake.com:5567";
//export const API_URL = "http://172.20.120.133:5567";

module.exports = {
    Authentication: _authentication2.default,
    API_URL: API_URL
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _HomePage = __webpack_require__(104);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _LoginPage = __webpack_require__(48);

var _LoginPage2 = _interopRequireDefault(_LoginPage);

var _RegisterPage = __webpack_require__(105);

var _RegisterPage2 = _interopRequireDefault(_RegisterPage);

var _AnnouncementPage = __webpack_require__(47);

var _AnnouncementPage2 = _interopRequireDefault(_AnnouncementPage);

var _CoursePage = __webpack_require__(103);

var _CoursePage2 = _interopRequireDefault(_CoursePage);

var _RepoPage = __webpack_require__(106);

var _RepoPage2 = _interopRequireDefault(_RepoPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = { Home: _HomePage2.default, Login: _LoginPage2.default, AnnouncementPage: _AnnouncementPage2.default, CoursePage: _CoursePage2.default, RepoPage: _RepoPage2.default, Register: _RegisterPage2.default };

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("object-assign");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _prodInvariant = __webpack_require__(8),
    _assign = __webpack_require__(23);

var ReactNoopUpdateQueue = __webpack_require__(28);

var canDefineProperty = __webpack_require__(13);
var emptyObject = __webpack_require__(122);
var invariant = __webpack_require__(9);
var lowPriorityWarning = __webpack_require__(16);

/**
 * Base class helpers for the updating state of a component.
 */
function ReactComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

ReactComponent.prototype.isReactComponent = {};

/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */
ReactComponent.prototype.setState = function (partialState, callback) {
  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : _prodInvariant('85') : void 0;
  this.updater.enqueueSetState(this, partialState);
  if (callback) {
    this.updater.enqueueCallback(this, callback, 'setState');
  }
};

/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */
ReactComponent.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this);
  if (callback) {
    this.updater.enqueueCallback(this, callback, 'forceUpdate');
  }
};

/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */
if (process.env.NODE_ENV !== 'production') {
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };
  var defineDeprecationWarning = function (methodName, info) {
    if (canDefineProperty) {
      Object.defineProperty(ReactComponent.prototype, methodName, {
        get: function () {
          lowPriorityWarning(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
          return undefined;
        }
      });
    }
  };
  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

/**
 * Base class helpers for the updating state of a component.
 */
function ReactPureComponent(props, context, updater) {
  // Duplicated from ReactComponent.
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

function ComponentDummy() {}
ComponentDummy.prototype = ReactComponent.prototype;
ReactPureComponent.prototype = new ComponentDummy();
ReactPureComponent.prototype.constructor = ReactPureComponent;
// Avoid an extra prototype jump for these methods.
_assign(ReactPureComponent.prototype, ReactComponent.prototype);
ReactPureComponent.prototype.isPureReactComponent = true;

module.exports = {
  Component: ReactComponent,
  PureComponent: ReactPureComponent
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



// The Symbol used to tag the ReactElement type. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.

var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

module.exports = REACT_ELEMENT_TYPE;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

/**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */



var ReactCurrentOwner = __webpack_require__(12);
var ReactComponentTreeHook = __webpack_require__(15);
var ReactElement = __webpack_require__(5);

var checkReactTypeSpec = __webpack_require__(65);

var canDefineProperty = __webpack_require__(13);
var getIteratorFn = __webpack_require__(29);
var warning = __webpack_require__(10);
var lowPriorityWarning = __webpack_require__(16);

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = ReactCurrentOwner.current.getName();
    if (name) {
      return ' Check the render method of `' + name + '`.';
    }
  }
  return '';
}

function getSourceInfoErrorAddendum(elementProps) {
  if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
    var source = elementProps.__source;
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return ' Check your code at ' + fileName + ':' + lineNumber + '.';
  }
  return '';
}

/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */
var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
    if (parentName) {
      info = ' Check the top-level render call using <' + parentName + '>.';
    }
  }
  return info;
}

/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */
function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }
  element._store.validated = true;

  var memoizer = ownerHasKeyUseWarning.uniqueKey || (ownerHasKeyUseWarning.uniqueKey = {});

  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
  if (memoizer[currentComponentErrorInfo]) {
    return;
  }
  memoizer[currentComponentErrorInfo] = true;

  // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.
  var childOwner = '';
  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = ' It was passed a child from ' + element._owner.getName() + '.';
  }

  process.env.NODE_ENV !== 'production' ? warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, ReactComponentTreeHook.getCurrentStackAddendum(element)) : void 0;
}

/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */
function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }
  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];
      if (ReactElement.isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (ReactElement.isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);
    // Entry iterators provide implicit keys.
    if (iteratorFn) {
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;
        while (!(step = iterator.next()).done) {
          if (ReactElement.isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}

/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */
function validatePropTypes(element) {
  var componentClass = element.type;
  if (typeof componentClass !== 'function') {
    return;
  }
  var name = componentClass.displayName || componentClass.name;
  if (componentClass.propTypes) {
    checkReactTypeSpec(componentClass.propTypes, element.props, 'prop', name, element, null);
  }
  if (typeof componentClass.getDefaultProps === 'function') {
    process.env.NODE_ENV !== 'production' ? warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
  }
}

var ReactElementValidator = {
  createElement: function (type, props, children) {
    var validType = typeof type === 'string' || typeof type === 'function';
    // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.
    if (!validType) {
      if (typeof type !== 'function' && typeof type !== 'string') {
        var info = '';
        if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
          info += ' You likely forgot to export your component from the file ' + "it's defined in.";
        }

        var sourceInfo = getSourceInfoErrorAddendum(props);
        if (sourceInfo) {
          info += sourceInfo;
        } else {
          info += getDeclarationErrorAddendum();
        }

        info += ReactComponentTreeHook.getCurrentStackAddendum();

        var currentSource = props !== null && props !== undefined && props.__source !== undefined ? props.__source : null;
        ReactComponentTreeHook.pushNonStandardWarningStack(true, currentSource);
        process.env.NODE_ENV !== 'production' ? warning(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', type == null ? type : typeof type, info) : void 0;
        ReactComponentTreeHook.popNonStandardWarningStack();
      }
    }

    var element = ReactElement.createElement.apply(this, arguments);

    // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.
    if (element == null) {
      return element;
    }

    // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)
    if (validType) {
      for (var i = 2; i < arguments.length; i++) {
        validateChildKeys(arguments[i], type);
      }
    }

    validatePropTypes(element);

    return element;
  },

  createFactory: function (type) {
    var validatedFactory = ReactElementValidator.createElement.bind(null, type);
    // Legacy hook TODO: Warn if this is accessed
    validatedFactory.type = type;

    if (process.env.NODE_ENV !== 'production') {
      if (canDefineProperty) {
        Object.defineProperty(validatedFactory, 'type', {
          enumerable: false,
          get: function () {
            lowPriorityWarning(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
            Object.defineProperty(this, 'type', {
              value: type
            });
            return type;
          }
        });
      }
    }

    return validatedFactory;
  },

  cloneElement: function (element, props, children) {
    var newElement = ReactElement.cloneElement.apply(this, arguments);
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], newElement.type);
    }
    validatePropTypes(newElement);
    return newElement;
  }
};

module.exports = ReactElementValidator;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var warning = __webpack_require__(10);

function warnNoop(publicInstance, callerName) {
  if (process.env.NODE_ENV !== 'production') {
    var constructor = publicInstance.constructor;
    process.env.NODE_ENV !== 'production' ? warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, constructor && (constructor.displayName || constructor.name) || 'ReactClass') : void 0;
  }
}

/**
 * This is the abstract API for an update queue.
 */
var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Enqueue a callback that will be executed after all the pending updates
   * have processed.
   *
   * @param {ReactClass} publicInstance The instance to use as `this` context.
   * @param {?function} callback Called after state is updated.
   * @internal
   */
  enqueueCallback: function (publicInstance, callback) {},

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState) {
    warnNoop(publicInstance, 'setState');
  }
};

module.exports = ReactNoopUpdateQueue;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



/* global Symbol */

var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

/**
 * Returns the iterator method function contained on the iterable object.
 *
 * Be sure to invoke the function with the iterable as context:
 *
 *     var iteratorFn = getIteratorFn(myIterable);
 *     if (iteratorFn) {
 *       var iterator = iteratorFn.call(myIterable);
 *       ...
 *     }
 *
 * @param {?object} maybeIterable
 * @return {?function}
 */
function getIteratorFn(maybeIterable) {
  var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
  if (typeof iteratorFn === 'function') {
    return iteratorFn;
  }
}

module.exports = getIteratorFn;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  LOGIN: 'LOGIN',
  TOKEN: 'TOKEN',
  LOGOUT: 'LOGOUT',
  COURSE_SUMMARY: 'COURSE_SUMMARY'
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AttachmentList = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _list = __webpack_require__(11);

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AttachmentList = exports.AttachmentList = function AttachmentList(_ref) {
    var attachments = _ref.attachments;


    var findFileIcon = function findFileIcon(fileType) {
        if (fileType === 'pdf') {
            return 'file pdf outline';
        } else {
            return 'file outline';
        }
    };
    var temp = [];
    attachments.map(function (attachment) {

        temp.push({
            icon: findFileIcon(attachment.fileType),
            header: attachment.name,
            buttons: [{
                title: 'Download',
                onClick: function onClick() {}
            }, {
                title: 'View',
                onClick: function onClick() {}
            }]
        });
    });

    return _react2.default.createElement(_list2.default, { items: temp });
};

AttachmentList.propTypes = {
    attachments: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        fileType: _propTypes2.default.string.isRequired,
        name: _propTypes2.default.string.isRequired
    }))
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ProjectCard = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ListComponents = __webpack_require__(35);

var _card = __webpack_require__(4);

var _card2 = _interopRequireDefault(_card);

var _reactRouterDom = __webpack_require__(3);

var _semanticUiReact = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProjectCard = exports.ProjectCard = function ProjectCard(_ref) {
    var items = _ref.items,
        isEditable = _ref.isEditable,
        hidable = _ref.hidable;


    var temp = [];
    items.map(function (item) {
        temp.push({
            header: item.name,
            buttons: [{
                title: _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: "/app/project/" + item.name },
                    'Go To Page'
                ),
                onClick: function onClick() {}
            }],
            extra: _react2.default.createElement(_semanticUiReact.Progress, { color: 'yellow', percent: 30, size: 'small' })
        });
    });

    return _react2.default.createElement(_card2.default, {
        icon: 'coffee',
        title: 'Project List',
        content: _react2.default.createElement(_ListComponents.List, { items: temp }),
        editable: isEditable && {
            icon: 'add square',
            title: 'Create Project',
            content: _react2.default.createElement(
                'a',
                null,
                'aasdf'
            )
        },
        hidable: hidable
    });
};

ProjectCard.propTypes = {
    items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        name: _propTypes2.default.string.isRequired,
        progressPercent: _propTypes2.default.number
    })),
    isEditable: _propTypes2.default.bool,
    hidable: _propTypes2.default.bool
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(2);

var _passwordMeter = __webpack_require__(34);

var _passwordMeter2 = _interopRequireDefault(_passwordMeter);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormInput = function (_React$Component) {
    _inherits(FormInput, _React$Component);

    function FormInput(props) {
        _classCallCheck(this, FormInput);

        var _this = _possibleConstructorReturn(this, (FormInput.__proto__ || Object.getPrototypeOf(FormInput)).call(this, props));

        _this.handleChange = function (e) {
            _this.setState({
                value: e.target.value
            });
            _this.props.onChange(e);
        };

        _this.state = {
            value: ""
        };
        return _this;
    }

    _createClass(FormInput, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement('br', null),
                _react2.default.createElement(_semanticUiReact.Form.Input, {
                    label: this.props.label,
                    placeholder: this.props.placeholder,
                    onChange: this.handleChange,
                    type: this.props.type,
                    name: this.props.name
                }),
                this.props.type === 'password' && this.props.withMeter && _react2.default.createElement(_passwordMeter2.default, { password: this.state.value })
            );
        }
    }]);

    return FormInput;
}(_react2.default.Component);

;

FormInput.propTypes = {
    name: _propTypes2.default.string.isRequired,
    label: _propTypes2.default.string.isRequired,
    type: _propTypes2.default.string.isRequired,
    placeholder: _propTypes2.default.string,
    onChange: _propTypes2.default.func.isRequired,
    withMeter: _propTypes2.default.bool
};

FormInput.defaultProps = {
    withMeter: false
};

exports.default = FormInput;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(2);

var _zxcvbn = __webpack_require__(127);

var _zxcvbn2 = _interopRequireDefault(_zxcvbn);

var _constants = __webpack_require__(45);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PasswordMeter = function PasswordMeter(_ref) {
    var password = _ref.password;

    console.log(password);
    var results = (0, _zxcvbn2.default)(password);
    return _react2.default.createElement(
        _semanticUiReact.Progress,
        { size: 'tiny', percent: results.score * 25, color: _constants.colors.passwordColors[results.score] },
        _constants.strings.passwordStrings[results.score]
    );
};

PasswordMeter.propTypes = {
    password: _propTypes2.default.string.isRequired
};

exports.default = PasswordMeter;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _listItem = __webpack_require__(36);

var _list = __webpack_require__(11);

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    ListItem: _listItem.ListItem,
    List: _list2.default

};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ListItem = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(2);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListItem = exports.ListItem = function ListItem(_ref) {
    var icon = _ref.icon,
        image = _ref.image,
        header = _ref.header,
        description = _ref.description,
        buttons = _ref.buttons,
        extra = _ref.extra;
    return _react2.default.createElement(
        _semanticUiReact.List.Item,
        null,
        _react2.default.createElement(
            _semanticUiReact.List.Content,
            null,
            _react2.default.createElement(
                _semanticUiReact.Grid,
                null,
                _react2.default.createElement(
                    _semanticUiReact.Grid.Column,
                    { width: buttons ? 8 : 16 },
                    _react2.default.createElement(
                        _semanticUiReact.List.Header,
                        null,
                        icon ? _react2.default.createElement(_semanticUiReact.List.Icon, { name: icon }) : image && _react2.default.createElement(_semanticUiReact.Image, { avatar: true, src: image }),
                        header
                    ),
                    description && _react2.default.createElement(
                        _semanticUiReact.List.Description,
                        null,
                        description
                    )
                ),
                buttons && _react2.default.createElement(
                    _semanticUiReact.Grid.Column,
                    { textAlign: 'right', width: 8 },
                    buttons.map(function (button) {
                        return _react2.default.createElement(
                            _semanticUiReact.Label,
                            { key: button.title, color: 'teal', onClick: button.onClick },
                            button.title
                        );
                    })
                ),
                extra && _react2.default.createElement(
                    _semanticUiReact.Grid.Column,
                    { width: 16 },
                    extra
                )
            )
        )
    );
};

ListItem.propTypes = {
    icon: _propTypes2.default.string,
    image: _propTypes2.default.string,
    header: _propTypes2.default.string.isRequired,
    description: _propTypes2.default.string,
    buttons: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        title: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]).isRequired,
        onClick: _propTypes2.default.func.isRequired
    })),
    extra: _propTypes2.default.element
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _semanticUiReact = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonMenuItem = function (_React$Component) {
    _inherits(ButtonMenuItem, _React$Component);

    function ButtonMenuItem(props) {
        _classCallCheck(this, ButtonMenuItem);

        var _this = _possibleConstructorReturn(this, (ButtonMenuItem.__proto__ || Object.getPrototypeOf(ButtonMenuItem)).call(this, props));

        _this.changeIcon = function () {
            _this.setState({
                first: !_this.state.first
            });
        };

        _this.handleClick = function () {
            _this.props.changingIcon && _this.changeIcon();
            _this.props.onClick();
        };

        _this.state = {
            first: true
        };
        return _this;
    }

    _createClass(ButtonMenuItem, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _semanticUiReact.Menu.Item,
                null,
                _react2.default.createElement(_semanticUiReact.Icon, { size: 'large', name: this.state.first ? this.props.iconFirst : this.props.iconSecond, onClick: this.handleClick })
            );
        }
    }]);

    return ButtonMenuItem;
}(_react2.default.Component);

ButtonMenuItem.propTypes = {
    onClick: _propTypes2.default.func.isRequired,
    changingIcon: _propTypes2.default.bool.isRequired,
    iconFirst: _propTypes2.default.string.isRequired,
    iconSecond: _propTypes2.default.string
};

ButtonMenuItem.defaultProps = {
    changingIcon: false
};
exports.default = ButtonMenuItem;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _buttonMenuItem = __webpack_require__(37);

var _buttonMenuItem2 = _interopRequireDefault(_buttonMenuItem);

var _linkMenuItem = __webpack_require__(39);

var _linkMenuItem2 = _interopRequireDefault(_linkMenuItem);

var _subMenu = __webpack_require__(42);

var _subMenu2 = _interopRequireDefault(_subMenu);

var _subMenuItem = __webpack_require__(43);

var _subMenuItem2 = _interopRequireDefault(_subMenuItem);

var _menu = __webpack_require__(40);

var _menu2 = _interopRequireDefault(_menu);

var _menuItem = __webpack_require__(41);

var _menuItem2 = _interopRequireDefault(_menuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    ButtonMenuItem: _buttonMenuItem2.default,
    LinkMenuItem: _linkMenuItem2.default,
    SubMenuItem: _subMenuItem2.default,
    Menu: _menu2.default,
    MenuItem: _menuItem2.default
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(3);

var _semanticUiReact = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinkMenuItem = function (_React$Component) {
    _inherits(LinkMenuItem, _React$Component);

    function LinkMenuItem(props) {
        _classCallCheck(this, LinkMenuItem);

        return _possibleConstructorReturn(this, (LinkMenuItem.__proto__ || Object.getPrototypeOf(LinkMenuItem)).call(this, props));
    }

    _createClass(LinkMenuItem, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _semanticUiReact.Menu.Item,
                null,
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: this.props.destination },
                    this.props.title
                )
            );
        }
    }]);

    return LinkMenuItem;
}(_react2.default.Component);

exports.default = LinkMenuItem;


LinkMenuItem.propTypes = {
    destination: _propTypes2.default.string.isRequired,
    title: _propTypes2.default.string.isRequired
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(2);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _menuItem = __webpack_require__(41);

var _menuItem2 = _interopRequireDefault(_menuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Menu = function (_React$Component) {
    _inherits(_Menu, _React$Component);

    function _Menu(props) {
        _classCallCheck(this, _Menu);

        return _possibleConstructorReturn(this, (_Menu.__proto__ || Object.getPrototypeOf(_Menu)).call(this, props));
    }

    _createClass(_Menu, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _semanticUiReact.Menu,
                this.props.props,
                this.props.items.map(function (item) {
                    return _react2.default.createElement(_menuItem2.default, {
                        key: item.name,
                        type: item.type,
                        name: item.name,
                        properties: item.properties });
                })
            );
        }
    }]);

    return _Menu;
}(_react2.default.Component);

;

_Menu.propTypes = {
    items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        type: _propTypes2.default.string.isRequired,
        name: _propTypes2.default.string.isRequired,
        properties: _propTypes2.default.object.isRequired
    })).isRequired

};

exports.default = _Menu;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _linkMenuItem = __webpack_require__(39);

var _linkMenuItem2 = _interopRequireDefault(_linkMenuItem);

var _buttonMenuItem = __webpack_require__(37);

var _buttonMenuItem2 = _interopRequireDefault(_buttonMenuItem);

var _subMenuItem = __webpack_require__(43);

var _subMenuItem2 = _interopRequireDefault(_subMenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuItem = function (_React$Component) {
    _inherits(MenuItem, _React$Component);

    function MenuItem(props) {
        _classCallCheck(this, MenuItem);

        return _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call(this, props));
    }

    _createClass(MenuItem, [{
        key: 'render',
        value: function render() {
            var type = this.props.type;
            var properties = this.props.properties;
            return _react2.default.createElement(
                'div',
                null,
                type === 'button' && _react2.default.createElement(_buttonMenuItem2.default, properties),
                type === 'subMenu' && _react2.default.createElement(_subMenuItem2.default, properties),
                type === 'link' && _react2.default.createElement(_linkMenuItem2.default, properties)
            );
        }
    }]);

    return MenuItem;
}(_react2.default.Component);

;

MenuItem.propTypes = {
    type: _propTypes2.default.string.isRequired,
    name: _propTypes2.default.string.isRequired,
    properties: _propTypes2.default.object.isRequired
};

exports.default = MenuItem;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(2);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubMenu = function (_React$Component) {
    _inherits(SubMenu, _React$Component);

    function SubMenu() {
        _classCallCheck(this, SubMenu);

        return _possibleConstructorReturn(this, (SubMenu.__proto__ || Object.getPrototypeOf(SubMenu)).apply(this, arguments));
    }

    _createClass(SubMenu, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _semanticUiReact.Menu.Menu,
                null,
                this.props.items.map(function (item) {
                    return _react2.default.createElement(
                        _semanticUiReact.Menu.Item,
                        { key: item.name, name: item.name },
                        item.element
                    );
                })
            );
        }
    }]);

    return SubMenu;
}(_react2.default.Component);

exports.default = SubMenu;


SubMenu.propTypes = {
    items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        name: _propTypes2.default.string.isRequired,
        element: _propTypes2.default.element
    })).isRequired
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _semanticUiReact = __webpack_require__(2);

var _subMenu = __webpack_require__(42);

var _subMenu2 = _interopRequireDefault(_subMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Melih on 13.06.2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var SubMenuItem = function (_React$Component) {
    _inherits(SubMenuItem, _React$Component);

    function SubMenuItem(props) {
        _classCallCheck(this, SubMenuItem);

        var _this = _possibleConstructorReturn(this, (SubMenuItem.__proto__ || Object.getPrototypeOf(SubMenuItem)).call(this, props));

        console.log("subMenu", props);
        return _this;
    }

    _createClass(SubMenuItem, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _semanticUiReact.Menu.Item,
                null,
                _react2.default.createElement(
                    _semanticUiReact.Menu.Header,
                    { onClick: this.props.onClick },
                    this.props.header
                ),
                _react2.default.createElement(_subMenu2.default, { items: this.props.items })
            );
        }
    }]);

    return SubMenuItem;
}(_react2.default.Component);

SubMenuItem.propTypes = {
    header: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]).isRequired,
    onClick: _propTypes2.default.func,
    items: _propTypes2.default.array.isRequired
};

exports.default = SubMenuItem;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserList = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _list = __webpack_require__(11);

var _list2 = _interopRequireDefault(_list);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserList = exports.UserList = function UserList(_ref) {
    var items = _ref.items;


    var temp = [];
    items.map(function (item) {
        temp.push({
            image: item.image,
            header: item.header,
            buttons: [{
                title: _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: "/app/student/" + item.header },
                    'Go To Page'
                ),
                onClick: function onClick() {}
            }]
        });
    });

    return _react2.default.createElement(_list2.default, { items: temp });
};

UserList.propTypes = {
    items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        image: _propTypes2.default.string.isRequired,
        header: _propTypes2.default.string.isRequired
    }))
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _colors = __webpack_require__(113);

var _colors2 = _interopRequireDefault(_colors);

var _strings = __webpack_require__(115);

var _strings2 = _interopRequireDefault(_strings);

var _placeholders = __webpack_require__(114);

var _placeholders2 = _interopRequireDefault(_placeholders);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    colors: _colors2.default,
    strings: _strings2.default,
    placeholders: _placeholders2.default
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactRedux = __webpack_require__(7);

var _LoginPage = __webpack_require__(48);

var _LoginPage2 = _interopRequireDefault(_LoginPage);

var _authentication = __webpack_require__(17);

var _reactCookie = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
    return _extends({}, state);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        loginAction: function loginAction(user, token) {
            console.log("Login Action");
            dispatch((0, _authentication.loginAction)(user, token));
        }
    };
};

var VisibleLoginPage = (0, _reactCookie.withCookies)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_LoginPage2.default));

exports.default = VisibleLoginPage;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _announcementCard = __webpack_require__(18);

var _announcementCard2 = _interopRequireDefault(_announcementCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AnnouncementPage = function (_React$Component) {
    _inherits(AnnouncementPage, _React$Component);

    function AnnouncementPage(props) {
        _classCallCheck(this, AnnouncementPage);

        var _this = _possibleConstructorReturn(this, (AnnouncementPage.__proto__ || Object.getPrototypeOf(AnnouncementPage)).call(this, props));

        _this.state = {
            announcements: [{ title: "Loopcake", courseTitle: "Computer Design", date: "Yesterday", content: "Awesome" }, { title: "Loopcak", courseTitle: "Computer Design", date: "Yesterday", content: "Awesome" }, { title: "Loopca", courseTitle: "Computer Design", date: "Yesterday", content: "Awesome" }]
        };
        return _this;
    }

    _createClass(AnnouncementPage, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_announcementCard2.default, { announcements: this.state.announcements });
        }
    }]);

    return AnnouncementPage;
}(_react2.default.Component);

exports.default = AnnouncementPage;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _FormComponents = __webpack_require__(19);

var _semanticUiReact = __webpack_require__(2);

var _database = __webpack_require__(21);

var _reactCookie = __webpack_require__(6);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(7);

var _authentication = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginPage = function (_React$Component) {
    _inherits(LoginPage, _React$Component);

    function LoginPage(props) {
        _classCallCheck(this, LoginPage);

        var _this = _possibleConstructorReturn(this, (LoginPage.__proto__ || Object.getPrototypeOf(LoginPage)).call(this, props));

        _this.handleSubmit = function (formData) {
            var data = _extends({}, formData);
            var handleResponse = function handleResponse(err, resp) {
                if (err) {} else {
                    console.log(resp);
                    _this.props.cookies.set('token', resp.body.data.token, { path: '/' });
                    _this.props.cookies.set('user', resp.body.data.user, { path: '/' });
                    _this.props.loginAction(resp.body.data.user, resp.body.data.token);
                }
            };
            _database.Authentication.Login(data, handleResponse);
        };

        console.log("Login Props");
        console.log(props);
        _this.state = {};
        return _this;
    }

    _createClass(LoginPage, [{
        key: 'render',
        value: function render() {
            var formFieldData = [{
                label: "Email",
                name: "email",
                type: "text",
                placeholder: "abc@loopcake.com"
            }, {
                label: "Password",
                name: "password",
                type: "password"
            }];
            return _react2.default.createElement(
                _semanticUiReact.Grid,
                { style: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        overflow: 'auto',
                        background: '#2c3e50'
                    } },
                _react2.default.createElement(_semanticUiReact.Grid.Row, null),
                _react2.default.createElement(
                    _semanticUiReact.Grid.Row,
                    { centered: true },
                    _react2.default.createElement(
                        _semanticUiReact.Grid.Column,
                        { width: 5 },
                        _react2.default.createElement(_semanticUiReact.Image, { centered: true, height: 50, size: 'small', src: __webpack_require__(49) }),
                        _react2.default.createElement('br', null),
                        _react2.default.createElement(
                            _semanticUiReact.Card,
                            { fluid: true },
                            _react2.default.createElement(
                                _semanticUiReact.Card.Content,
                                null,
                                _react2.default.createElement(
                                    _semanticUiReact.Header,
                                    { as: 'h1', textAlign: 'center' },
                                    'Log In'
                                ),
                                _react2.default.createElement(_FormComponents.Form, { extra: _react2.default.createElement(
                                        'a',
                                        null,
                                        'Forgot My Password'
                                    ), onSubmit: this.handleSubmit, formData: formFieldData })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return LoginPage;
}(_react2.default.Component);

LoginPage.propTypes = {
    cookies: (0, _propTypes.instanceOf)(_reactCookie.Cookies).isRequired
};
;

exports.default = LoginPage;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "loopcakeWhiteLogoWithText.svg?5a4f08fe673e24a06ece825d23f477ea";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(7);

var _reactRouterDom = __webpack_require__(3);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _routes = __webpack_require__(14);

var _reactCookie = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RoutesRoot = function (_React$Component) {
    _inherits(RoutesRoot, _React$Component);

    function RoutesRoot() {
        _classCallCheck(this, RoutesRoot);

        return _possibleConstructorReturn(this, (RoutesRoot.__proto__ || Object.getPrototypeOf(RoutesRoot)).apply(this, arguments));
    }

    _createClass(RoutesRoot, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_routes.AppRoutes, null)
            );
        }
    }]);

    return RoutesRoot;
}(_react2.default.Component);

RoutesRoot.propTypes = {
    cookies: (0, _propTypes.instanceOf)(_reactCookie.Cookies).isRequired
};
exports.default = (0, _reactCookie.withCookies)(RoutesRoot);

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _redux = __webpack_require__(24);

var _userReducer = __webpack_require__(100);

var _userReducer2 = _interopRequireDefault(_userReducer);

var _course = __webpack_require__(131);

var _course2 = _interopRequireDefault(_course);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
   user: _userReducer2.default,
   course: _course2.default
});

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (body) {
    return function (initialState) {
        return "\n    <!DOCTYPE html>\n    <html>\n        <head>\n            <meta charset=\"UTF-8\">\n        </head>\n        <body>\n            <link rel=\"stylesheet\" href=\"/semantic.min.css\"></link>\n            <div id=\"app\" style=\"height:'100%'\">" + body + "</div>\n            <script>\n                window.__INITIAL_STATE__ = " + JSON.stringify(initialState) + "\n            </script>\n            <script src=\"/bundle.js\"></script>\n        </body>\n    </html>\n";
    };
};

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("universal-cookie-express");

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });

  return '$' + escapedString;
}

/**
 * Unescape and unwrap key for human-readable display
 *
 * @param {string} key to unescape.
 * @return {string} the unescaped key.
 */
function unescape(key) {
  var unescapeRegex = /(=0|=2)/g;
  var unescaperLookup = {
    '=0': '=',
    '=2': ':'
  };
  var keySubstring = key[0] === '.' && key[1] === '$' ? key.substring(2) : key.substring(1);

  return ('' + keySubstring).replace(unescapeRegex, function (match) {
    return unescaperLookup[match];
  });
}

var KeyEscapeUtils = {
  escape: escape,
  unescape: unescape
};

module.exports = KeyEscapeUtils;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



var _prodInvariant = __webpack_require__(8);

var invariant = __webpack_require__(9);

/**
 * Static poolers. Several custom versions for each potential number of
 * arguments. A completely generic pooler is easy to implement, but would
 * require accessing the `arguments` object. In each of these, `this` refers to
 * the Class itself, not an instance. If any others are needed, simply add them
 * here, or in their own files.
 */
var oneArgumentPooler = function (copyFieldsFrom) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, copyFieldsFrom);
    return instance;
  } else {
    return new Klass(copyFieldsFrom);
  }
};

var twoArgumentPooler = function (a1, a2) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2);
    return instance;
  } else {
    return new Klass(a1, a2);
  }
};

var threeArgumentPooler = function (a1, a2, a3) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3);
    return instance;
  } else {
    return new Klass(a1, a2, a3);
  }
};

var fourArgumentPooler = function (a1, a2, a3, a4) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3, a4);
    return instance;
  } else {
    return new Klass(a1, a2, a3, a4);
  }
};

var standardReleaser = function (instance) {
  var Klass = this;
  !(instance instanceof Klass) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Trying to release an instance into a pool of a different type.') : _prodInvariant('25') : void 0;
  instance.destructor();
  if (Klass.instancePool.length < Klass.poolSize) {
    Klass.instancePool.push(instance);
  }
};

var DEFAULT_POOL_SIZE = 10;
var DEFAULT_POOLER = oneArgumentPooler;

/**
 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
 * itself (statically) not adding any prototypical fields. Any CopyConstructor
 * you give this may have a `poolSize` property, and will look for a
 * prototypical `destructor` on instances.
 *
 * @param {Function} CopyConstructor Constructor that can be used to reset.
 * @param {Function} pooler Customizable pooler.
 */
var addPoolingTo = function (CopyConstructor, pooler) {
  // Casting as any so that flow ignores the actual implementation and trusts
  // it to match the type we declared
  var NewKlass = CopyConstructor;
  NewKlass.instancePool = [];
  NewKlass.getPooled = pooler || DEFAULT_POOLER;
  if (!NewKlass.poolSize) {
    NewKlass.poolSize = DEFAULT_POOL_SIZE;
  }
  NewKlass.release = standardReleaser;
  return NewKlass;
};

var PooledClass = {
  addPoolingTo: addPoolingTo,
  oneArgumentPooler: oneArgumentPooler,
  twoArgumentPooler: twoArgumentPooler,
  threeArgumentPooler: threeArgumentPooler,
  fourArgumentPooler: fourArgumentPooler
};

module.exports = PooledClass;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _assign = __webpack_require__(23);

var ReactBaseClasses = __webpack_require__(25);
var ReactChildren = __webpack_require__(59);
var ReactDOMFactories = __webpack_require__(60);
var ReactElement = __webpack_require__(5);
var ReactPropTypes = __webpack_require__(62);
var ReactVersion = __webpack_require__(64);

var createReactClass = __webpack_require__(66);
var onlyChild = __webpack_require__(67);

var createElement = ReactElement.createElement;
var createFactory = ReactElement.createFactory;
var cloneElement = ReactElement.cloneElement;

if (process.env.NODE_ENV !== 'production') {
  var lowPriorityWarning = __webpack_require__(16);
  var canDefineProperty = __webpack_require__(13);
  var ReactElementValidator = __webpack_require__(27);
  var didWarnPropTypesDeprecated = false;
  createElement = ReactElementValidator.createElement;
  createFactory = ReactElementValidator.createFactory;
  cloneElement = ReactElementValidator.cloneElement;
}

var __spread = _assign;
var createMixin = function (mixin) {
  return mixin;
};

if (process.env.NODE_ENV !== 'production') {
  var warnedForSpread = false;
  var warnedForCreateMixin = false;
  __spread = function () {
    lowPriorityWarning(warnedForSpread, 'React.__spread is deprecated and should not be used. Use ' + 'Object.assign directly or another helper function with similar ' + 'semantics. You may be seeing this warning due to your compiler. ' + 'See https://fb.me/react-spread-deprecation for more details.');
    warnedForSpread = true;
    return _assign.apply(null, arguments);
  };

  createMixin = function (mixin) {
    lowPriorityWarning(warnedForCreateMixin, 'React.createMixin is deprecated and should not be used. ' + 'In React v16.0, it will be removed. ' + 'You can use this mixin directly instead. ' + 'See https://fb.me/createmixin-was-never-implemented for more info.');
    warnedForCreateMixin = true;
    return mixin;
  };
}

var React = {
  // Modern

  Children: {
    map: ReactChildren.map,
    forEach: ReactChildren.forEach,
    count: ReactChildren.count,
    toArray: ReactChildren.toArray,
    only: onlyChild
  },

  Component: ReactBaseClasses.Component,
  PureComponent: ReactBaseClasses.PureComponent,

  createElement: createElement,
  cloneElement: cloneElement,
  isValidElement: ReactElement.isValidElement,

  // Classic

  PropTypes: ReactPropTypes,
  createClass: createReactClass,
  createFactory: createFactory,
  createMixin: createMixin,

  // This looks DOM specific but these are actually isomorphic helpers
  // since they are just generating DOM strings.
  DOM: ReactDOMFactories,

  version: ReactVersion,

  // Deprecated hook for JSX spread, don't use this for anything.
  __spread: __spread
};

if (process.env.NODE_ENV !== 'production') {
  var warnedForCreateClass = false;
  if (canDefineProperty) {
    Object.defineProperty(React, 'PropTypes', {
      get: function () {
        lowPriorityWarning(didWarnPropTypesDeprecated, 'Accessing PropTypes via the main React package is deprecated,' + ' and will be removed in  React v16.0.' + ' Use the latest available v15.* prop-types package from npm instead.' + ' For info on usage, compatibility, migration and more, see ' + 'https://fb.me/prop-types-docs');
        didWarnPropTypesDeprecated = true;
        return ReactPropTypes;
      }
    });

    Object.defineProperty(React, 'createClass', {
      get: function () {
        lowPriorityWarning(warnedForCreateClass, 'Accessing createClass via the main React package is deprecated,' + ' and will be removed in React v16.0.' + " Use a plain JavaScript class instead. If you're not yet " + 'ready to migrate, create-react-class v15.* is available ' + 'on npm as a temporary, drop-in replacement. ' + 'For more info see https://fb.me/react-create-class');
        warnedForCreateClass = true;
        return createReactClass;
      }
    });
  }

  // React.DOM factories are deprecated. Wrap these methods so that
  // invocations of the React.DOM namespace and alert users to switch
  // to the `react-dom-factories` package.
  React.DOM = {};
  var warnedForFactories = false;
  Object.keys(ReactDOMFactories).forEach(function (factory) {
    React.DOM[factory] = function () {
      if (!warnedForFactories) {
        lowPriorityWarning(false, 'Accessing factories like React.DOM.%s has been deprecated ' + 'and will be removed in v16.0+. Use the ' + 'react-dom-factories package instead. ' + ' Version 1.0 provides a drop-in replacement.' + ' For more info, see https://fb.me/react-dom-factories', factory);
        warnedForFactories = true;
      }
      return ReactDOMFactories[factory].apply(ReactDOMFactories, arguments);
    };
  });
}

module.exports = React;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var PooledClass = __webpack_require__(57);
var ReactElement = __webpack_require__(5);

var emptyFunction = __webpack_require__(121);
var traverseAllChildren = __webpack_require__(68);

var twoArgumentPooler = PooledClass.twoArgumentPooler;
var fourArgumentPooler = PooledClass.fourArgumentPooler;

var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

/**
 * PooledClass representing the bookkeeping associated with performing a child
 * traversal. Allows avoiding binding callbacks.
 *
 * @constructor ForEachBookKeeping
 * @param {!function} forEachFunction Function to perform traversal with.
 * @param {?*} forEachContext Context to perform context with.
 */
function ForEachBookKeeping(forEachFunction, forEachContext) {
  this.func = forEachFunction;
  this.context = forEachContext;
  this.count = 0;
}
ForEachBookKeeping.prototype.destructor = function () {
  this.func = null;
  this.context = null;
  this.count = 0;
};
PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;

  func.call(context, child, bookKeeping.count++);
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.foreach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }
  var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  ForEachBookKeeping.release(traverseContext);
}

/**
 * PooledClass representing the bookkeeping associated with performing a child
 * mapping. Allows avoiding binding callbacks.
 *
 * @constructor MapBookKeeping
 * @param {!*} mapResult Object containing the ordered map of results.
 * @param {!function} mapFunction Function to perform mapping with.
 * @param {?*} mapContext Context to perform mapping with.
 */
function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
  this.result = mapResult;
  this.keyPrefix = keyPrefix;
  this.func = mapFunction;
  this.context = mapContext;
  this.count = 0;
}
MapBookKeeping.prototype.destructor = function () {
  this.result = null;
  this.keyPrefix = null;
  this.func = null;
  this.context = null;
  this.count = 0;
};
PooledClass.addPoolingTo(MapBookKeeping, fourArgumentPooler);

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;


  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
  } else if (mappedChild != null) {
    if (ReactElement.isValidElement(mappedChild)) {
      mappedChild = ReactElement.cloneAndReplaceKey(mappedChild,
      // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }
    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  MapBookKeeping.release(traverseContext);
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.map
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}

function forEachSingleChildDummy(traverseContext, child, name) {
  return null;
}

/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.count
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */
function countChildren(children, context) {
  return traverseAllChildren(children, forEachSingleChildDummy, null);
}

/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.toarray
 */
function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
  return result;
}

var ReactChildren = {
  forEach: forEachChildren,
  map: mapChildren,
  mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
  count: countChildren,
  toArray: toArray
};

module.exports = ReactChildren;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var ReactElement = __webpack_require__(5);

/**
 * Create a factory that creates HTML tag elements.
 *
 * @private
 */
var createDOMFactory = ReactElement.createFactory;
if (process.env.NODE_ENV !== 'production') {
  var ReactElementValidator = __webpack_require__(27);
  createDOMFactory = ReactElementValidator.createFactory;
}

/**
 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
 *
 * @public
 */
var ReactDOMFactories = {
  a: createDOMFactory('a'),
  abbr: createDOMFactory('abbr'),
  address: createDOMFactory('address'),
  area: createDOMFactory('area'),
  article: createDOMFactory('article'),
  aside: createDOMFactory('aside'),
  audio: createDOMFactory('audio'),
  b: createDOMFactory('b'),
  base: createDOMFactory('base'),
  bdi: createDOMFactory('bdi'),
  bdo: createDOMFactory('bdo'),
  big: createDOMFactory('big'),
  blockquote: createDOMFactory('blockquote'),
  body: createDOMFactory('body'),
  br: createDOMFactory('br'),
  button: createDOMFactory('button'),
  canvas: createDOMFactory('canvas'),
  caption: createDOMFactory('caption'),
  cite: createDOMFactory('cite'),
  code: createDOMFactory('code'),
  col: createDOMFactory('col'),
  colgroup: createDOMFactory('colgroup'),
  data: createDOMFactory('data'),
  datalist: createDOMFactory('datalist'),
  dd: createDOMFactory('dd'),
  del: createDOMFactory('del'),
  details: createDOMFactory('details'),
  dfn: createDOMFactory('dfn'),
  dialog: createDOMFactory('dialog'),
  div: createDOMFactory('div'),
  dl: createDOMFactory('dl'),
  dt: createDOMFactory('dt'),
  em: createDOMFactory('em'),
  embed: createDOMFactory('embed'),
  fieldset: createDOMFactory('fieldset'),
  figcaption: createDOMFactory('figcaption'),
  figure: createDOMFactory('figure'),
  footer: createDOMFactory('footer'),
  form: createDOMFactory('form'),
  h1: createDOMFactory('h1'),
  h2: createDOMFactory('h2'),
  h3: createDOMFactory('h3'),
  h4: createDOMFactory('h4'),
  h5: createDOMFactory('h5'),
  h6: createDOMFactory('h6'),
  head: createDOMFactory('head'),
  header: createDOMFactory('header'),
  hgroup: createDOMFactory('hgroup'),
  hr: createDOMFactory('hr'),
  html: createDOMFactory('html'),
  i: createDOMFactory('i'),
  iframe: createDOMFactory('iframe'),
  img: createDOMFactory('img'),
  input: createDOMFactory('input'),
  ins: createDOMFactory('ins'),
  kbd: createDOMFactory('kbd'),
  keygen: createDOMFactory('keygen'),
  label: createDOMFactory('label'),
  legend: createDOMFactory('legend'),
  li: createDOMFactory('li'),
  link: createDOMFactory('link'),
  main: createDOMFactory('main'),
  map: createDOMFactory('map'),
  mark: createDOMFactory('mark'),
  menu: createDOMFactory('menu'),
  menuitem: createDOMFactory('menuitem'),
  meta: createDOMFactory('meta'),
  meter: createDOMFactory('meter'),
  nav: createDOMFactory('nav'),
  noscript: createDOMFactory('noscript'),
  object: createDOMFactory('object'),
  ol: createDOMFactory('ol'),
  optgroup: createDOMFactory('optgroup'),
  option: createDOMFactory('option'),
  output: createDOMFactory('output'),
  p: createDOMFactory('p'),
  param: createDOMFactory('param'),
  picture: createDOMFactory('picture'),
  pre: createDOMFactory('pre'),
  progress: createDOMFactory('progress'),
  q: createDOMFactory('q'),
  rp: createDOMFactory('rp'),
  rt: createDOMFactory('rt'),
  ruby: createDOMFactory('ruby'),
  s: createDOMFactory('s'),
  samp: createDOMFactory('samp'),
  script: createDOMFactory('script'),
  section: createDOMFactory('section'),
  select: createDOMFactory('select'),
  small: createDOMFactory('small'),
  source: createDOMFactory('source'),
  span: createDOMFactory('span'),
  strong: createDOMFactory('strong'),
  style: createDOMFactory('style'),
  sub: createDOMFactory('sub'),
  summary: createDOMFactory('summary'),
  sup: createDOMFactory('sup'),
  table: createDOMFactory('table'),
  tbody: createDOMFactory('tbody'),
  td: createDOMFactory('td'),
  textarea: createDOMFactory('textarea'),
  tfoot: createDOMFactory('tfoot'),
  th: createDOMFactory('th'),
  thead: createDOMFactory('thead'),
  time: createDOMFactory('time'),
  title: createDOMFactory('title'),
  tr: createDOMFactory('tr'),
  track: createDOMFactory('track'),
  u: createDOMFactory('u'),
  ul: createDOMFactory('ul'),
  'var': createDOMFactory('var'),
  video: createDOMFactory('video'),
  wbr: createDOMFactory('wbr'),

  // SVG
  circle: createDOMFactory('circle'),
  clipPath: createDOMFactory('clipPath'),
  defs: createDOMFactory('defs'),
  ellipse: createDOMFactory('ellipse'),
  g: createDOMFactory('g'),
  image: createDOMFactory('image'),
  line: createDOMFactory('line'),
  linearGradient: createDOMFactory('linearGradient'),
  mask: createDOMFactory('mask'),
  path: createDOMFactory('path'),
  pattern: createDOMFactory('pattern'),
  polygon: createDOMFactory('polygon'),
  polyline: createDOMFactory('polyline'),
  radialGradient: createDOMFactory('radialGradient'),
  rect: createDOMFactory('rect'),
  stop: createDOMFactory('stop'),
  svg: createDOMFactory('svg'),
  text: createDOMFactory('text'),
  tspan: createDOMFactory('tspan')
};

module.exports = ReactDOMFactories;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



var ReactPropTypeLocationNames = {};

if (process.env.NODE_ENV !== 'production') {
  ReactPropTypeLocationNames = {
    prop: 'prop',
    context: 'context',
    childContext: 'child context'
  };
}

module.exports = ReactPropTypeLocationNames;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _require = __webpack_require__(5),
    isValidElement = _require.isValidElement;

var factory = __webpack_require__(123);

module.exports = factory(isValidElement);

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



module.exports = '15.6.1';

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _prodInvariant = __webpack_require__(8);

var ReactPropTypeLocationNames = __webpack_require__(61);
var ReactPropTypesSecret = __webpack_require__(63);

var invariant = __webpack_require__(9);
var warning = __webpack_require__(10);

var ReactComponentTreeHook;

if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'test') {
  // Temporary hack.
  // Inline requires don't work well with Jest:
  // https://github.com/facebook/react/issues/7240
  // Remove the inline requires when we don't need them anymore:
  // https://github.com/facebook/react/pull/7178
  ReactComponentTreeHook = __webpack_require__(15);
}

var loggedTypeFailures = {};

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?object} element The React element that is being type-checked
 * @param {?number} debugID The React component instance that is being type-checked
 * @private
 */
function checkReactTypeSpec(typeSpecs, values, location, componentName, element, debugID) {
  for (var typeSpecName in typeSpecs) {
    if (typeSpecs.hasOwnProperty(typeSpecName)) {
      var error;
      // Prop type validation may throw. In case they do, we don't want to
      // fail the render phase where it didn't fail before. So we log it.
      // After these have been cleaned up, we'll let them throw.
      try {
        // This is intentionally an invariant that gets caught. It's the same
        // behavior as without this statement except with a better message.
        !(typeof typeSpecs[typeSpecName] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : _prodInvariant('84', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : void 0;
        error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
      } catch (ex) {
        error = ex;
      }
      process.env.NODE_ENV !== 'production' ? warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName, typeof error) : void 0;
      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
        // Only monitor this failure once because there tends to be a lot of the
        // same error.
        loggedTypeFailures[error.message] = true;

        var componentStackInfo = '';

        if (process.env.NODE_ENV !== 'production') {
          if (!ReactComponentTreeHook) {
            ReactComponentTreeHook = __webpack_require__(15);
          }
          if (debugID !== null) {
            componentStackInfo = ReactComponentTreeHook.getStackAddendumByID(debugID);
          } else if (element !== null) {
            componentStackInfo = ReactComponentTreeHook.getCurrentStackAddendum(element);
          }
        }

        process.env.NODE_ENV !== 'production' ? warning(false, 'Failed %s type: %s%s', location, error.message, componentStackInfo) : void 0;
      }
    }
  }
}

module.exports = checkReactTypeSpec;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _require = __webpack_require__(25),
    Component = _require.Component;

var _require2 = __webpack_require__(5),
    isValidElement = _require2.isValidElement;

var ReactNoopUpdateQueue = __webpack_require__(28);
var factory = __webpack_require__(120);

module.exports = factory(Component, isValidElement, ReactNoopUpdateQueue);

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */


var _prodInvariant = __webpack_require__(8);

var ReactElement = __webpack_require__(5);

var invariant = __webpack_require__(9);

/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.only
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */
function onlyChild(children) {
  !ReactElement.isValidElement(children) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'React.Children.only expected to receive a single React element child.') : _prodInvariant('143') : void 0;
  return children;
}

module.exports = onlyChild;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _prodInvariant = __webpack_require__(8);

var ReactCurrentOwner = __webpack_require__(12);
var REACT_ELEMENT_TYPE = __webpack_require__(26);

var getIteratorFn = __webpack_require__(29);
var invariant = __webpack_require__(9);
var KeyEscapeUtils = __webpack_require__(56);
var warning = __webpack_require__(10);

var SEPARATOR = '.';
var SUBSEPARATOR = ':';

/**
 * This is inlined from ReactElement since this file is shared between
 * isomorphic and renderers. We could extract this to a
 *
 */

/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */

var didWarnAboutMaps = false;

/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (component && typeof component === 'object' && component.key != null) {
    // Explicit key
    return KeyEscapeUtils.escape(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  if (children === null || type === 'string' || type === 'number' ||
  // The following is inlined from ReactElement. This means we can optimize
  // some checks. React Fiber also inlines this logic for similar purposes.
  type === 'object' && children.$$typeof === REACT_ELEMENT_TYPE) {
    callback(traverseContext, children,
    // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);
    if (iteratorFn) {
      var iterator = iteratorFn.call(children);
      var step;
      if (iteratorFn !== children.entries) {
        var ii = 0;
        while (!(step = iterator.next()).done) {
          child = step.value;
          nextName = nextNamePrefix + getComponentKey(child, ii++);
          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
        }
      } else {
        if (process.env.NODE_ENV !== 'production') {
          var mapsAsChildrenAddendum = '';
          if (ReactCurrentOwner.current) {
            var mapsAsChildrenOwnerName = ReactCurrentOwner.current.getName();
            if (mapsAsChildrenOwnerName) {
              mapsAsChildrenAddendum = ' Check the render method of `' + mapsAsChildrenOwnerName + '`.';
            }
          }
          process.env.NODE_ENV !== 'production' ? warning(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.%s', mapsAsChildrenAddendum) : void 0;
          didWarnAboutMaps = true;
        }
        // Iterator will provide entry [k,v] tuples rather than values.
        while (!(step = iterator.next()).done) {
          var entry = step.value;
          if (entry) {
            child = entry[1];
            nextName = nextNamePrefix + KeyEscapeUtils.escape(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
          }
        }
      }
    } else if (type === 'object') {
      var addendum = '';
      if (process.env.NODE_ENV !== 'production') {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
        if (children._isReactElement) {
          addendum = " It looks like you're using an element created by a different " + 'version of React. Make sure to use only one copy of React.';
        }
        if (ReactCurrentOwner.current) {
          var name = ReactCurrentOwner.current.getName();
          if (name) {
            addendum += ' Check the render method of `' + name + '`.';
          }
        }
      }
      var childrenString = String(children);
       true ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : _prodInvariant('31', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : void 0;
    }
  }

  return subtreeCount;
}

/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

module.exports = traverseAllChildren;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(58);


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _types = __webpack_require__(30);

var _types2 = _interopRequireDefault(_types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    Types: _types2.default
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _semanticUiReact = __webpack_require__(2);

var _announcementContent = __webpack_require__(72);

var _announcementContent2 = _interopRequireDefault(_announcementContent);

var _announcementTitle = __webpack_require__(74);

var _announcementTitle2 = _interopRequireDefault(_announcementTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Announcement = function (_React$Component) {
    _inherits(Announcement, _React$Component);

    function Announcement(props) {
        _classCallCheck(this, Announcement);

        return _possibleConstructorReturn(this, (Announcement.__proto__ || Object.getPrototypeOf(Announcement)).call(this, props));
    }

    _createClass(Announcement, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _semanticUiReact.Accordion,
                null,
                _react2.default.createElement(
                    _semanticUiReact.Accordion.Title,
                    null,
                    _react2.default.createElement(_announcementTitle2.default, { title: this.props.title, courseTitle: this.props.courseTitle, date: new Date(this.props.date).toDateString() })
                ),
                _react2.default.createElement(
                    _semanticUiReact.Accordion.Content,
                    null,
                    _react2.default.createElement(_announcementContent2.default, { content: this.props.content })
                )
            );
        }
    }]);

    return Announcement;
}(_react2.default.Component);

Announcement.propTypes = {
    title: _propTypes2.default.string.isRequired,
    courseTitle: _propTypes2.default.string,
    date: _propTypes2.default.string.isRequired,
    content: _propTypes2.default.string.isRequired
};

exports.default = Announcement;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(2);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _announcementModal = __webpack_require__(73);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AnnouncementContent = function (_React$Component) {
    _inherits(AnnouncementContent, _React$Component);

    function AnnouncementContent(props) {
        _classCallCheck(this, AnnouncementContent);

        return _possibleConstructorReturn(this, (AnnouncementContent.__proto__ || Object.getPrototypeOf(AnnouncementContent)).call(this, props));
    }

    _createClass(AnnouncementContent, [{
        key: 'render',
        value: function render() {
            var content = this.props.content;

            return _react2.default.createElement(
                _semanticUiReact.Grid,
                { centered: true },
                _react2.default.createElement(
                    _semanticUiReact.Grid.Column,
                    { width: 15 },
                    content.substring(0, Math.min(140, content.length)) + " ",
                    _react2.default.createElement(_announcementModal.AnnouncementModal, { content: content, trigger: _react2.default.createElement(
                            'a',
                            null,
                            '...more'
                        ) }),
                    _react2.default.createElement('br', null)
                )
            );
        }
    }]);

    return AnnouncementContent;
}(_react2.default.Component);

AnnouncementContent.propTypes = {
    content: _propTypes2.default.string.isRequired
};

exports.default = AnnouncementContent;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AnnouncementModal = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _semanticUiReact = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AnnouncementModal = exports.AnnouncementModal = function AnnouncementModal(_ref) {
    var content = _ref.content,
        trigger = _ref.trigger;
    return _react2.default.createElement(
        _semanticUiReact.Modal,
        { trigger: trigger },
        _react2.default.createElement(
            _semanticUiReact.Modal.Content,
            null,
            _react2.default.createElement(
                'p',
                null,
                content
            )
        )
    );
};

AnnouncementModal.propTypes = {
    content: _propTypes2.default.string.isRequired,
    trigger: _propTypes2.default.element.isRequired
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(2);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AnnouncementTitle = function (_React$Component) {
    _inherits(AnnouncementTitle, _React$Component);

    function AnnouncementTitle(props) {
        _classCallCheck(this, AnnouncementTitle);

        return _possibleConstructorReturn(this, (AnnouncementTitle.__proto__ || Object.getPrototypeOf(AnnouncementTitle)).call(this, props));
    }

    _createClass(AnnouncementTitle, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _semanticUiReact.Grid,
                null,
                _react2.default.createElement(
                    _semanticUiReact.Grid.Row,
                    null,
                    _react2.default.createElement(
                        _semanticUiReact.Grid.Column,
                        { width: 8 },
                        _react2.default.createElement(_semanticUiReact.Icon, { name: 'dropdown' }),
                        this.props.title
                    ),
                    _react2.default.createElement(
                        _semanticUiReact.Grid.Column,
                        { width: 8, textAlign: 'right' },
                        this.props.courseTitle && _react2.default.createElement(
                            _semanticUiReact.Label,
                            { color: 'yellow' },
                            this.props.courseTitle
                        ),
                        _react2.default.createElement(
                            _semanticUiReact.Label,
                            { color: 'teal' },
                            this.props.date
                        )
                    )
                )
            );
        }
    }]);

    return AnnouncementTitle;
}(_react2.default.Component);

AnnouncementTitle.propTypes = {
    title: _propTypes2.default.string.isRequired,
    courseTitle: _propTypes2.default.string,
    date: _propTypes2.default.string.isRequired
};

exports.default = AnnouncementTitle;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AttachmentCard = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _card = __webpack_require__(4);

var _card2 = _interopRequireDefault(_card);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _attachmentList = __webpack_require__(31);

var _semanticUiReact = __webpack_require__(2);

var _folder = __webpack_require__(77);

var _folder2 = _interopRequireDefault(_folder);

var _attachmentEditor = __webpack_require__(76);

var _attachmentEditor2 = _interopRequireDefault(_attachmentEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AttachmentCard = exports.AttachmentCard = function AttachmentCard(_ref) {
    var attachments = _ref.attachments,
        folders = _ref.folders,
        hidable = _ref.hidable;

    return _react2.default.createElement(_card2.default, {
        hidable: hidable,
        title: 'Attachments',
        content: _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_attachmentList.AttachmentList, { attachments: attachments }),
            folders.map(function (folder) {
                return _react2.default.createElement(_folder2.default, { key: folder.name, name: folder.name, attachments: folder.attachments });
            })
        ),
        editable: {
            icon: "pencil",
            title: "Edit Attachments",
            content: _react2.default.createElement(_attachmentEditor2.default, null)
        }
    });
};

AttachmentCard.propTypes = {
    attachments: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        fileType: _propTypes2.default.string.isRequired,
        name: _propTypes2.default.string.isRequired
    })),
    folders: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        name: _propTypes2.default.string.isRequired,
        attachments: _propTypes2.default.arrayOf(_propTypes2.default.shape({
            fileType: _propTypes2.default.string.isRequired,
            name: _propTypes2.default.string.isRequired
        }))
    })),
    hidable: _propTypes2.default.bool
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _semanticUiReact = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var panes = [{ menuItem: 'Upload Attachment', render: function render() {
        return _react2.default.createElement(
            _semanticUiReact.Tab.Pane,
            { attached: false },
            'Tab 1 Content'
        );
    } }, { menuItem: 'Create Folder', render: function render() {
        return _react2.default.createElement(
            _semanticUiReact.Tab.Pane,
            { attached: false },
            'Tab 2 Content'
        );
    } }];

var AttachmentEditor = function (_React$Component) {
    _inherits(AttachmentEditor, _React$Component);

    function AttachmentEditor(props) {
        _classCallCheck(this, AttachmentEditor);

        return _possibleConstructorReturn(this, (AttachmentEditor.__proto__ || Object.getPrototypeOf(AttachmentEditor)).call(this, props));
    }

    _createClass(AttachmentEditor, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_semanticUiReact.Tab, { panes: panes });
        }
    }]);

    return AttachmentEditor;
}(_react2.default.Component);

exports.default = AttachmentEditor;


AttachmentEditor.propTypes = {
    folders: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        name: _propTypes2.default.string.isRequired,
        attachments: _propTypes2.default.arrayOf(_propTypes2.default.shape({
            fileType: _propTypes2.default.string.isRequired,
            name: _propTypes2.default.string.isRequired
        }))
    }))
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _semanticUiReact = __webpack_require__(2);

var _attachmentList = __webpack_require__(31);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Folder = function (_React$Component) {
    _inherits(Folder, _React$Component);

    function Folder(props) {
        _classCallCheck(this, Folder);

        var _this = _possibleConstructorReturn(this, (Folder.__proto__ || Object.getPrototypeOf(Folder)).call(this, props));

        _this.handleClick = function () {
            _this.setState({
                open: !_this.state.open
            });
        };

        _this.state = {
            open: false
        };
        return _this;
    }

    _createClass(Folder, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                name = _props.name,
                attachments = _props.attachments;

            return _react2.default.createElement(
                _semanticUiReact.Accordion,
                { onTitleClick: this.handleClick },
                _react2.default.createElement(
                    _semanticUiReact.Accordion.Title,
                    null,
                    _react2.default.createElement(_semanticUiReact.Icon, { name: this.state.open ? 'folder open outline' : 'folder outline' }),
                    name
                ),
                _react2.default.createElement(
                    _semanticUiReact.Accordion.Content,
                    null,
                    _react2.default.createElement(_attachmentList.AttachmentList, { attachments: attachments })
                )
            );
        }
    }]);

    return Folder;
}(_react2.default.Component);

exports.default = Folder;


Folder.propTypes = {
    name: _propTypes2.default.string.isRequired,
    attachments: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        fileType: _propTypes2.default.string.isRequired,
        name: _propTypes2.default.string.isRequired
    }))
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ListComponents = __webpack_require__(35);

var _card = __webpack_require__(4);

var _card2 = _interopRequireDefault(_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CalendarCard = function (_React$Component) {
	_inherits(CalendarCard, _React$Component);

	function CalendarCard() {
		_classCallCheck(this, CalendarCard);

		return _possibleConstructorReturn(this, (CalendarCard.__proto__ || Object.getPrototypeOf(CalendarCard)).apply(this, arguments));
	}

	_createClass(CalendarCard, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_card2.default, {
				icon: 'calendar',
				hidable: this.props.hidable,
				title: 'Calendar',
				content: _react2.default.createElement(_ListComponents.List, { items: CalendarCard.data })
			});
		}
	}]);

	return CalendarCard;
}(_react2.default.Component);

CalendarCard.data = [{ header: 'Midterm', description: '17.07.2017', buttons: [{ title: "View", onClick: function onClick() {
			return console.warn('clicked');
		} }] }, { header: 'Project', description: '16.07.2017', buttons: [{ title: "View", onClick: function onClick() {
			return console.log('clicked');
		} }] }, { header: 'E-Tutor', description: '14.07.2017', buttons: [{ title: "View", onClick: function onClick() {
			return console.log('clicked');
		} }] }];
exports.default = CalendarCard;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CardModal = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _semanticUiReact = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var panes = [{ menuItem: 'Upload Attachment' }, { menuItem: 'Create Folder' }];

var CardModal = exports.CardModal = function CardModal(_ref) {
    var icon = _ref.icon,
        title = _ref.title,
        content = _ref.content,
        actions = _ref.actions;
    console.log("Actions");console.log(actions);return _react2.default.createElement(
        _semanticUiReact.Modal,
        { trigger: _react2.default.createElement(
                _semanticUiReact.Label,
                { color: 'red', attached: 'bottom right' },
                _react2.default.createElement(_semanticUiReact.Icon, { name: icon }),
                title
            ) },
        _react2.default.createElement(
            _semanticUiReact.Modal.Header,
            null,
            _react2.default.createElement(_semanticUiReact.Header, { icon: icon, content: title })
        ),
        _react2.default.createElement(
            _semanticUiReact.Modal.Content,
            null,
            content
        ),
        _react2.default.createElement(
            _semanticUiReact.Modal.Actions,
            null,
            actions
        )
    );
};

CardModal.propTypes = {
    icon: _propTypes2.default.string.isRequired,
    title: _propTypes2.default.string.isRequired,
    content: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.arrayOf(_propTypes2.default.element)]).isRequired,
    actions: _propTypes2.default.arrayOf(_propTypes2.default.element)
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(2);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Checklist = function (_React$Component) {
  _inherits(Checklist, _React$Component);

  function Checklist(props) {
    _classCallCheck(this, Checklist);

    var _this = _possibleConstructorReturn(this, (Checklist.__proto__ || Object.getPrototypeOf(Checklist)).call(this, props));

    _this.checkpointsToState = function (checkpoints) {
      var stateCheck = {};

      checkpoints.map(function (check) {
        stateCheck[check.label] = check;
      });
      _this.setState({
        checkpoints: stateCheck
      });
    };

    _this.toggle = function (e, numer, fa) {
      var stateCheck = _this.state.checkpoints;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = stateCheck[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var value = _step.value;

          if (value.label === numer.label) {
            value.status = !value.status;
            break;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      _this.setState({
        checkpoints: stateCheck
      });
      _this.props.changeChecklist(stateCheck);
    };

    _this.state = {
      checkpoints: props.checkpoints
    };
    props.changeChecklist(_this.props.checkpoints);
    return _this;
  }

  _createClass(Checklist, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _semanticUiReact.Grid,
        null,
        _react2.default.createElement(
          _semanticUiReact.Grid.Row,
          null,
          _react2.default.createElement(
            _semanticUiReact.Grid.Column,
            { width: 16 },
            _react2.default.createElement(
              _semanticUiReact.List,
              null,
              this.state.checkpoints.map(function (checkpoint) {
                return _react2.default.createElement(
                  _semanticUiReact.List.Item,
                  { key: checkpoint.label },
                  _react2.default.createElement(
                    _semanticUiReact.List.Content,
                    { floated: 'right' },
                    _react2.default.createElement(
                      _semanticUiReact.Label,
                      { color: 'blue' },
                      checkpoint.point,
                      ' Points'
                    )
                  ),
                  _react2.default.createElement(
                    _semanticUiReact.List.Content,
                    null,
                    _react2.default.createElement(_semanticUiReact.Checkbox, { checked: checkpoint.status, onChange: _this2.toggle, toggle: true, label: checkpoint.label })
                  )
                );
              })
            )
          )
        )
      );
    }
  }]);

  return Checklist;
}(_react2.default.Component);

exports.default = Checklist;


Checklist.propTypes = {
  checkpoints: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    point: _propTypes2.default.number,
    status: _propTypes2.default.bool,
    label: _propTypes2.default.string
  })),
  changeChecklist: _propTypes2.default.func.isRequired
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _checklist = __webpack_require__(80);

var _checklist2 = _interopRequireDefault(_checklist);

var _checklistCreator = __webpack_require__(82);

var _checklistCreator2 = _interopRequireDefault(_checklistCreator);

var _card = __webpack_require__(4);

var _card2 = _interopRequireDefault(_card);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _semanticUiReact = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChecklistCard = function (_React$Component) {
  _inherits(ChecklistCard, _React$Component);

  function ChecklistCard(props) {
    _classCallCheck(this, ChecklistCard);

    var _this = _possibleConstructorReturn(this, (ChecklistCard.__proto__ || Object.getPrototypeOf(ChecklistCard)).call(this, props));

    _this.changeProgress = function (checklist) {
      var points = 0;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = checklist[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var check = _step.value;

          if (check.status) {
            points += check.point;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      _this.setState({
        progress: points
      });
    };

    _this.handleActions = function (actions) {
      var editable = _this.state.editable;
      editable.actions = actions;
      _this.setState({
        editable: editable
      });
    };

    _this.state = {
      progress: 55,
      actions: [],
      editable: {
        icon: "save",
        title: "Save Checklist"
      }
    };
    return _this;
  }

  _createClass(ChecklistCard, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var editable = true ? {
        icon: "pencil",
        title: "Edit Checklist",
        content: _react2.default.createElement(_checklistCreator2.default, { setActions: this.handleActions, checkpoints: [{ point: 10, status: true, label: "Naber" }, { point: 30, status: false, label: "fas" }] }),
        actions: this.state.actions
      } : {
        icon: "save",
        title: "Save Checklist"
      };
      this.setState({
        editable: editable
      });
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(_card2.default, {
        title: 'Checklist',
        content: _react2.default.createElement(
          _semanticUiReact.Grid,
          null,
          _react2.default.createElement(
            _semanticUiReact.Grid.Column,
            { width: 16 },
            _react2.default.createElement(_semanticUiReact.Progress, { percent: this.state.progress, size: 'small', color: 'yellow' }),
            _react2.default.createElement(_checklist2.default, { checkpoints: [{ point: 10, status: true, label: "Naber" }, { point: 30, status: false, label: "fas" }], changeChecklist: this.changeProgress })
          )
        ),
        editable: this.state.editable

      });
    }
  }]);

  return ChecklistCard;
}(_react2.default.Component);

exports.default = ChecklistCard;


ChecklistCard.propTypes = {
  userType: _propTypes2.default.oneOf(['Student', 'Instructor'])
};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _semanticUiReact = __webpack_require__(2);

var _checklistForm = __webpack_require__(83);

var _checklistForm2 = _interopRequireDefault(_checklistForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChecklistCreator = function (_React$Component) {
	_inherits(ChecklistCreator, _React$Component);

	function ChecklistCreator(props) {
		_classCallCheck(this, ChecklistCreator);

		var _this = _possibleConstructorReturn(this, (ChecklistCreator.__proto__ || Object.getPrototypeOf(ChecklistCreator)).call(this, props));

		_this.handleSubmit = function (formData) {};

		_this.state = {};

		return _this;
	}

	_createClass(ChecklistCreator, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			if (this.props.setActions) {
				this.props.setActions([_react2.default.createElement(
					_semanticUiReact.Button,
					{ key: 'Cancel' },
					'Cancel'
				), _react2.default.createElement(
					_semanticUiReact.Button,
					{ key: 'Save' },
					'Save'
				)]);
			};
		}
	}, {
		key: 'render',
		value: function render() {

			return _react2.default.createElement(_checklistForm2.default, { checkpoints: this.props.checkpoints });
		}
	}]);

	return ChecklistCreator;
}(_react2.default.Component);

exports.default = ChecklistCreator;


ChecklistCreator.propTypes = {
	checkpoints: _propTypes2.default.arrayOf(_propTypes2.default.shape({
		point: _propTypes2.default.number,
		status: _propTypes2.default.bool,
		label: _propTypes2.default.string
	})),
	setActions: _propTypes2.default.func
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _semanticUiReact = __webpack_require__(2);

var _checklistFormInput = __webpack_require__(84);

var _checklistFormInput2 = _interopRequireDefault(_checklistFormInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChecklistForm = function (_React$Component) {
	_inherits(ChecklistForm, _React$Component);

	function ChecklistForm(props) {
		_classCallCheck(this, ChecklistForm);

		var _this = _possibleConstructorReturn(this, (ChecklistForm.__proto__ || Object.getPrototypeOf(ChecklistForm)).call(this, props));

		_this.handleDelete = function (label) {
			console.log(label);
			var checks = _this.state.checkpoints;
			var index = -1;
			var found = false;
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = checks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var check = _step.value;

					index++;
					if (check.label === label) {
						found = true;
						break;
					};
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			if (found) {
				checks.splice(index, 1);
			}
			_this.setState({
				checkpoints: checks
			});
			console.log(checks);
		};

		_this.state = {
			checkpoints: props.checkpoints
		};
		return _this;
	}

	_createClass(ChecklistForm, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				_semanticUiReact.Container,
				{ textAlign: 'center' },
				_react2.default.createElement(
					_semanticUiReact.Form,
					null,
					this.state.checkpoints.map(function (check) {
						return _react2.default.createElement(_checklistFormInput2.default, { key: check.label, label: check.label, point: check.point, onDelete: _this2.handleDelete });
					})
				)
			);
		}
	}]);

	return ChecklistForm;
}(_react2.default.Component);

exports.default = ChecklistForm;


ChecklistForm.propTypes = {
	checkpoints: _propTypes2.default.arrayOf(_propTypes2.default.shape({
		point: _propTypes2.default.number,
		status: _propTypes2.default.bool,
		label: _propTypes2.default.string
	}))
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(2);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChecklistFormInput = function (_React$Component) {
	_inherits(ChecklistFormInput, _React$Component);

	function ChecklistFormInput(props) {
		_classCallCheck(this, ChecklistFormInput);

		var _this = _possibleConstructorReturn(this, (ChecklistFormInput.__proto__ || Object.getPrototypeOf(ChecklistFormInput)).call(this, props));

		_this.handleDelete = function (e) {
			e.preventDefault();
			_this.props.onDelete(_this.props.label);
		};

		return _this;
	}

	_createClass(ChecklistFormInput, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_semanticUiReact.Form.Group,
				{ widths: 'equal' },
				_react2.default.createElement(
					_semanticUiReact.Form.Field,
					null,
					_react2.default.createElement(_semanticUiReact.Input, { label: _react2.default.createElement(
							_semanticUiReact.Label,
							{ color: 'blue' },
							'Label'
						), placeholder: this.props.label })
				),
				_react2.default.createElement(
					_semanticUiReact.Form.Field,
					null,
					_react2.default.createElement(_semanticUiReact.Input, { label: _react2.default.createElement(
							_semanticUiReact.Label,
							{ color: 'blue' },
							'Points'
						), placeholder: this.props.point })
				),
				_react2.default.createElement(
					_semanticUiReact.Button,
					{ color: 'red', onClick: this.handleDelete },
					'Delete'
				)
			);
		}
	}]);

	return ChecklistFormInput;
}(_react2.default.Component);

exports.default = ChecklistFormInput;


ChecklistFormInput.propTypes = {
	label: _propTypes2.default.string,
	point: _propTypes2.default.number,
	onDelete: _propTypes2.default.func
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(2);

var _announcementCard = __webpack_require__(18);

var _announcementCard2 = _interopRequireDefault(_announcementCard);

var _constants = __webpack_require__(45);

var _calendarCard = __webpack_require__(78);

var _calendarCard2 = _interopRequireDefault(_calendarCard);

var _ProjectCard = __webpack_require__(32);

var _gradeCard = __webpack_require__(86);

var _gradeCard2 = _interopRequireDefault(_gradeCard);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _courseHeader = __webpack_require__(132);

var _courseHeader2 = _interopRequireDefault(_courseHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CourseCard = function (_React$Component) {
	_inherits(CourseCard, _React$Component);

	function CourseCard() {
		_classCallCheck(this, CourseCard);

		return _possibleConstructorReturn(this, (CourseCard.__proto__ || Object.getPrototypeOf(CourseCard)).apply(this, arguments));
	}

	_createClass(CourseCard, [{
		key: 'render',
		value: function render() {
			var announcementList = [{ title: "Loopcake", date: "Yesterday", content: "Awesome" }, { title: "Loopcak", date: "Yesterday", content: "Awesome" }, { title: "Loopca", date: "Yesterday", content: "Awesome" }];
			return _react2.default.createElement(
				_semanticUiReact.Card,
				{ fluid: true },
				_react2.default.createElement(
					_semanticUiReact.Card.Content,
					null,
					_react2.default.createElement(_courseHeader2.default, { course: this.props.data.course })
				),
				_react2.default.createElement(
					_semanticUiReact.Card.Content,
					{ extra: true },
					_react2.default.createElement(_announcementCard2.default, { hidable: true, announcements: this.props.data.announcements })
				),
				_react2.default.createElement(
					_semanticUiReact.Card.Content,
					{ extra: true },
					_react2.default.createElement(_calendarCard2.default, { hidable: true })
				),
				_react2.default.createElement(
					_semanticUiReact.Card.Content,
					{ extra: true },
					_react2.default.createElement(_ProjectCard.ProjectCard, { hidable: true, items: this.props.data.projects /*[{header:'Writing Scheme Using Scheme', progressPercent: 0}]*/ })
				),
				_react2.default.createElement(
					_semanticUiReact.Card.Content,
					{ extra: true },
					_react2.default.createElement(_gradeCard2.default, { hidable: true })
				)
			);
		}
	}]);

	return CourseCard;
}(_react2.default.Component);

exports.default = CourseCard;


CourseCard.propTypes = {
	data: _propTypes2.default.shape({
		course: _propTypes2.default.shape({
			_id: _propTypes2.default.string,
			name: _propTypes2.default.string,
			abbreviation: _propTypes2.default.string,
			code: _propTypes2.default.string,
			details: _propTypes2.default.shape({
				year: _propTypes2.default.string,
				_id: _propTypes2.default.string,
				relatedCourses: _propTypes2.default.array,
				programmingLanguages: _propTypes2.default.array,
				sections: _propTypes2.default.array
			}),
			attachments: _propTypes2.default.array,
			instructors: _propTypes2.default.arrayOf(_propTypes2.default.shape({
				_id: _propTypes2.default.string,
				email: _propTypes2.default.string,
				name: _propTypes2.default.string,
				surname: _propTypes2.default.string,
				photo: _propTypes2.default.string
			}))
		}),
		announcements: _propTypes2.default.array,
		calender: _propTypes2.default.array,
		grades: _propTypes2.default.array,
		myGroups: _propTypes2.default.array,
		projects: _propTypes2.default.array
	})
};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _React = __webpack_require__(69);

var _React2 = _interopRequireDefault(_React);

var _card = __webpack_require__(4);

var _card2 = _interopRequireDefault(_card);

var _list = __webpack_require__(11);

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GradeCard = function (_Component) {
    _inherits(GradeCard, _Component);

    function GradeCard() {
        _classCallCheck(this, GradeCard);

        return _possibleConstructorReturn(this, (GradeCard.__proto__ || Object.getPrototypeOf(GradeCard)).apply(this, arguments));
    }

    _createClass(GradeCard, [{
        key: '_renderList',
        value: function _renderList() {
            return _React2.default.createElement(_list2.default, { items: GradeCard.placeholder });
        }
    }, {
        key: 'render',
        value: function render() {
            return _React2.default.createElement(_card2.default, {
                icon: 'font',
                hidable: this.props.hidable,
                title: 'Grades',
                content: this._renderList()
            });
        }
    }]);

    return GradeCard;
}(_React.Component);

GradeCard.placeholder = [{ header: 'Midterm 2', description: '90.0/200.0', icon: 'student' }];
exports.default = GradeCard;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StudentCard = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _card = __webpack_require__(4);

var _card2 = _interopRequireDefault(_card);

var _userList = __webpack_require__(44);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StudentCard = exports.StudentCard = function StudentCard(_ref) {
    var items = _ref.items;


    return _react2.default.createElement(_card2.default, {
        title: 'Students',
        content: _react2.default.createElement(_userList.UserList, { items: items }),
        editable: {
            content: _react2.default.createElement(
                'a',
                null,
                'fasd'
            ),
            icon: 'add square',
            title: 'Add Student'
        }
    });
};

StudentCard.propTypes = {
    items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        image: _propTypes2.default.string.isRequired,
        header: _propTypes2.default.string.isRequired
    }))
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DetailsCard = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _card = __webpack_require__(4);

var _card2 = _interopRequireDefault(_card);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _semanticUiReact = __webpack_require__(2);

var _list = __webpack_require__(11);

var _list2 = _interopRequireDefault(_list);

var _userList = __webpack_require__(44);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _Header = function _Header(_ref) {
    var title = _ref.title;
    return _react2.default.createElement(
        _semanticUiReact.Grid.Column,
        { textAlign: 'center', width: 16 },
        _react2.default.createElement(
            _semanticUiReact.Header,
            { as: 'h3' },
            title
        )
    );
};

var DetailsCard = exports.DetailsCard = function DetailsCard(props) {
    return _react2.default.createElement(_card2.default, {
        title: 'Details',
        content: _react2.default.createElement(
            _semanticUiReact.Grid,
            null,
            _react2.default.createElement(
                _semanticUiReact.Grid.Column,
                { width: 16 },
                _react2.default.createElement(
                    _semanticUiReact.Grid.Row,
                    { textAlign: 'center' },
                    _react2.default.createElement(
                        _semanticUiReact.Header,
                        null,
                        props.name,
                        _react2.default.createElement(
                            _semanticUiReact.Header.Subheader,
                            null,
                            props.abbreviation
                        ),
                        _react2.default.createElement(
                            _semanticUiReact.Header.Subheader,
                            null,
                            props.term,
                            ' ',
                            props.year
                        )
                    )
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    _semanticUiReact.Grid.Row,
                    null,
                    _react2.default.createElement(_Header, { title: 'Programming Languages' }),
                    props.programmingLanguages.map(function (lang) {
                        return _react2.default.createElement(
                            _semanticUiReact.Label,
                            { color: 'yellow', key: lang },
                            lang
                        );
                    })
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    _semanticUiReact.Grid.Row,
                    null,
                    _react2.default.createElement(_Header, { title: 'Assistants' }),
                    _react2.default.createElement(_userList.UserList, { items: props.assistants })
                )
            )
        ) });
};

DetailsCard.propTypes = {
    programmingLanguages: _propTypes2.default.arrayOf(_propTypes2.default.string),
    year: _propTypes2.default.number,
    term: _propTypes2.default.string,
    name: _propTypes2.default.string.isRequired,
    abbreviation: _propTypes2.default.string.isRequired,
    department: _propTypes2.default.string,
    assistants: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        image: _propTypes2.default.string.isRequired,
        header: _propTypes2.default.string.isRequired
    })),
    syllabus: _propTypes2.default.string
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(2);

var _formInput = __webpack_require__(33);

var _formInput2 = _interopRequireDefault(_formInput);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LCForm = function (_React$Component) {
    _inherits(LCForm, _React$Component);

    function LCForm(props) {
        _classCallCheck(this, LCForm);

        var _this = _possibleConstructorReturn(this, (LCForm.__proto__ || Object.getPrototypeOf(LCForm)).call(this, props));

        _initialiseProps.call(_this);

        _this.state = {};

        return _this;
    }

    _createClass(LCForm, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.initializeState(this.props);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                _semanticUiReact.Form,
                { onSubmit: this.handleSubmit },
                this.props.formData.map(function (props) {
                    return _react2.default.createElement(_formInput2.default, _extends({ key: props.name }, props, { onChange: _this2.handleChange }));
                }),
                _react2.default.createElement('br', null),
                this.props.extra,
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    _semanticUiReact.Button,
                    { floated: 'right', color: 'red', type: 'submit' },
                    'Submit'
                )
            );
        }
    }]);

    return LCForm;
}(_react2.default.Component);

LCForm.propTypes = {
    formData: _propTypes2.default.array.isRequired,
    onSubmit: _propTypes2.default.func.isRequired
};

var _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.initializeState = function (props) {
        var temp = {};
        props.formData.map(function (data) {
            temp[data.name] = "";
        });
        _this3.setState({
            values: temp
        });
    };

    this.handleChange = function (e) {
        var name = e.target.name;
        var value = e.target.value;
        var temp = _this3.state.values;
        temp[name] = value;
        _this3.setState({
            temp: temp
        });
    };

    this.handleSubmit = function (e) {
        e.preventDefault();
        _this3.props.onSubmit(_this3.state.values);
    };
};

;

exports.default = LCForm;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _navigationBar = __webpack_require__(91);

var _navigationBar2 = _interopRequireDefault(_navigationBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    NavigationBar: _navigationBar2.default
};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(2);

var _app = __webpack_require__(20);

var _app2 = _interopRequireDefault(_app);

var _MenuComponents = __webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationBar = function NavigationBar(_ref) {
    var hide = _ref.hide,
        right = _ref.right,
        left = _ref.left;
    return _react2.default.createElement(
        _semanticUiReact.Menu,
        { fluid: true },
        _react2.default.createElement(_MenuComponents.ButtonMenuItem, { onClick: function onClick() {
                return hide();
            }, changingIcon: true, iconFirst: 'hide', iconSecond: 'sidebar' }),
        _react2.default.createElement(
            _semanticUiReact.Menu.Item,
            null,
            _react2.default.createElement('img', { src: __webpack_require__(112) })
        ),
        left.map(function (item) {
            return _react2.default.createElement(_MenuComponents.LinkMenuItem, { key: item.title, destination: item.destination, title: item.title });
        }),
        _react2.default.createElement(
            _semanticUiReact.Menu.Menu,
            { position: 'right' },
            right.map(function (item) {
                return _react2.default.createElement(_MenuComponents.LinkMenuItem, { key: item.title, destination: item.destination, title: item.title });
            })
        )
    );
};

exports.default = NavigationBar;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCodemirror = __webpack_require__(124);

var _reactCodemirror2 = _interopRequireDefault(_reactCodemirror);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CodeEditor = function (_React$Component) {
    _inherits(CodeEditor, _React$Component);

    function CodeEditor(props) {
        _classCallCheck(this, CodeEditor);

        var _this = _possibleConstructorReturn(this, (CodeEditor.__proto__ || Object.getPrototypeOf(CodeEditor)).call(this, props));

        _this.state = {
            code: "// Code",
            mode: 'clike',
            readOnly: false,
            theme: 'rubyblue',
            initialized: false,
            fullscreen: false,
            spec: 'x-java',
            codemirror: undefined
        };
        return _this;
    }

    _createClass(CodeEditor, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            initCodemirror(window);
            window.CodeMirror.modeURL = "codemirror/mode/%N/%N.js";
            this.setState({
                codemirror: window.CodeMirror
            });
            this.forceUpdate();
        }
    }, {
        key: 'initialize',
        value: function initialize() {
            var m = void 0,
                mode = void 0,
                spec = void 0;
            if (m = /.+\.([^.]+)$/.exec(this.props.fileName)) {
                var info = this.state.codemirror.findModeByExtension(m[1]);
                if (info) {
                    mode = info.mode;
                    spec = info.mime;
                }
            } else if (/\//.test(this.props.fileName)) {
                var _info = this.state.codemirror.findModeByMIME(this.props.fileName);
                if (_info) {
                    mode = _info.mode;
                    spec = this.props.fileName;
                }
            } else {
                mode = spec = this.props.fileName;
            }
            if (mode) {
                this.setState(_extends({}, this.state, {
                    initialized: true,
                    mode: spec,
                    code: this.props.code
                }));
            } else {
                this.setState(_extends({}, this.state, {
                    initialized: true,
                    mode: 'clike',
                    code: this.props.code
                }));
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var options = {
                lineNumbers: true,
                styleActiveLine: true,
                autoCloseBrackets: true,
                autoCloseTags: true,
                lineWrapping: true,
                foldGutter: true,
                height: 'auto',
                readOnly: this.props.readOnly,
                mode: this.state.spec,
                theme: 'rubyblue',
                extraKeys: { "Ctrl-Space": "autocomplete",
                    "Alt-F": "findPersistent",
                    "Ctrl-Q": function CtrlQ(cm) {
                        cm.foldCode(cm.getCursor());
                    },
                    "Ctrl-X": function CtrlX(cm) {
                        _this2.saveCode();
                    }
                },
                gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
            };
            this.state.codemirror && !this.state.initialized && this.initialize();
            return this.state.codemirror ? _react2.default.createElement(_reactCodemirror2.default, {
                ref: function ref(editor) {
                    _this2.editor = editor;
                },
                codeMirrorInstance: this.state.codemirror,
                value: this.props.code,
                options: options
            }) : _react2.default.createElement(
                'a',
                null,
                'No Server Side CodeMirror'
            );
        }
    }]);

    return CodeEditor;
}(_react2.default.Component);

function initCodemirror(window) {
    if (!window.CodeMirror) {
        __webpack_require__(117);
        window.CodeMirror = __webpack_require__(116);
        //require ('node_modules/codemirror/addon/mode/loadmode.js');
        __webpack_require__(118);
        __webpack_require__(119);
        __webpack_require__(109);
    }
}

CodeEditor.propTypes = {
    readOnly: _propTypes2.default.bool,
    code: _propTypes2.default.string.isRequired,
    fileName: _propTypes2.default.string.isRequired
};

exports.default = CodeEditor;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactGitgraph = __webpack_require__(125);

var _reactGitgraph2 = _interopRequireDefault(_reactGitgraph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommitGraph = function (_React$Component) {
  _inherits(CommitGraph, _React$Component);

  function CommitGraph(props) {
    _classCallCheck(this, CommitGraph);

    var _this = _possibleConstructorReturn(this, (CommitGraph.__proto__ || Object.getPrototypeOf(CommitGraph)).call(this, props));

    _this.initializeGraph = _this.initializeGraph.bind(_this);
    _this.onChangeGraph = _this.onChangeGraph.bind(_this);
    return _this;
  }

  _createClass(CommitGraph, [{
    key: 'onChangeGraph',
    value: function onChangeGraph() {
      this.gitgraph.getGitGraph().commit();
    }
  }, {
    key: 'initializeGraph',
    value: function initializeGraph(gitgraph) {
      var master = gitgraph.branch("master");
      gitgraph.commit().commit().commit(); // 3 commits upon HEAD
      var develop = gitgraph.branch("develop"); // New branch from HEAD
      var myfeature = develop.branch("myfeature"); // New branch from develop
      var hotfix = gitgraph.branch({
        parentBranch: develop,
        name: "hotfix",
        column: 2 // which column index it should be displayed in
      });
      gitgraph.commit().commit().commit();
      master.commit().commit().commit();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactGitgraph2.default, {
          initializeGraph: this.initializeGraph,
          ref: function ref(gitgraph) {
            _this2.gitgraph = gitgraph;
          },
          options: {
            template: "metro",
            reverseArrow: false,
            orientation: "horizontal",
            mode: "compact" } }),
        _react2.default.createElement(
          'button',
          { onClick: this.onChangeGraph },
          'Change'
        )
      );
    }
  }]);

  return CommitGraph;
}(_react2.default.Component);

exports.default = CommitGraph;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _sidebarMenu = __webpack_require__(95);

var _sidebarMenu2 = _interopRequireDefault(_sidebarMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    SidebarMenu: _sidebarMenu2.default
};

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(2);

var _app = __webpack_require__(20);

var _app2 = _interopRequireDefault(_app);

var _MenuComponents = __webpack_require__(38);

var _reactRouterDom = __webpack_require__(3);

var _menu = __webpack_require__(40);

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SidebarMenu = function SidebarMenu() {

    var menuItems = [{
        type: 'subMenu',
        name: 'announcements',
        properties: {
            header: _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/announcements', style: { color: 'black' } },
                'Announcements'
            ),
            items: []
        }
    }, {
        type: 'subMenu',
        name: 'courses',
        properties: {
            header: 'Courses',
            items: [{
                name: 'Computer Graphics',
                element: _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/course/Computer Graphics', style: { color: 'black' } },
                    'Computer Graphics'
                )
            }, {
                name: 'Computer Network',
                element: _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/course/Computer Network', style: { color: 'black' } },
                    'Computer Network'
                )
            }]
        }
    }, {
        type: 'subMenu',
        name: 'projects',
        properties: {
            header: 'Projects',
            items: [{ name: 'Rubic Cube' }, { name: 'Texture Mapping' }]
        }
    }, {
        type: 'subMenu',
        name: 'repos',
        properties: {
            header: 'Repos',
            items: [{
                name: 'Loopcake Frontend',
                element: _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/repo/Loopcake Frontend', style: { color: 'black' } },
                    'Loopcake Frontend'
                )
            }, { name: 'LoopcakeMobile' }]
        }
    }];

    return _react2.default.createElement(
        _semanticUiReact.Card,
        { fluid: true, raised: true },
        _react2.default.createElement(
            _semanticUiReact.Card.Content,
            null,
            _react2.default.createElement(_menu2.default, { props: { vertical: true, fluid: true, secondary: true }, items: menuItems })
        )
    );
};

exports.default = SidebarMenu;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _FormComponents = __webpack_require__(19);

var _FormComponents2 = _interopRequireDefault(_FormComponents);

var _NavigationComponents = __webpack_require__(90);

var _NavigationComponents2 = _interopRequireDefault(_NavigationComponents);

var _SidebarComponents = __webpack_require__(94);

var _SidebarComponents2 = _interopRequireDefault(_SidebarComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    FormComponents: _FormComponents2.default,
    NavigationComponents: _NavigationComponents2.default,
    SidebarComponents: _SidebarComponents2.default
};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(7);

var _reactRouterDom = __webpack_require__(3);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _routes = __webpack_require__(14);

var _reactCookie = __webpack_require__(6);

var _visibleLoginPage = __webpack_require__(46);

var _visibleLoginPage2 = _interopRequireDefault(_visibleLoginPage);

var _app = __webpack_require__(20);

var _app2 = _interopRequireDefault(_app);

var _authentication = __webpack_require__(17);

var _views = __webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state) {
    return _extends({}, state);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        tokenAction: function tokenAction(user, token) {
            console.log("Token Action");
            dispatch((0, _authentication.tokenAction)(user, token));
        }
    };
};

var Entry = function (_React$Component) {
    _inherits(Entry, _React$Component);

    function Entry(props) {
        _classCallCheck(this, Entry);

        var _this = _possibleConstructorReturn(this, (Entry.__proto__ || Object.getPrototypeOf(Entry)).call(this, props));

        console.log("Entry");
        console.log(props);
        _this.state = {
            register: false
        };
        return _this;
    }

    _createClass(Entry, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var cookies = this.props.cookies;

            var token = cookies.get('token');
            var user = cookies.get('user');
            this.props.tokenAction(user, token);
        }
    }, {
        key: 'render',
        value: function render() {
            console.log("state");
            console.log(this.state);
            if (this.props.user.loggedIn) {
                return _react2.default.createElement(_app2.default, this.props);
            } else {
                if (this.state.register) {
                    return _react2.default.createElement(_views.Register, this.props);
                } else {
                    return _react2.default.createElement(_visibleLoginPage2.default, this.props);
                }
            }
        }
    }]);

    return Entry;
}(_react2.default.Component);

Entry.propTypes = {
    cookies: (0, _propTypes.instanceOf)(_reactCookie.Cookies).isRequired
};
exports.default = (0, _reactCookie.withCookies)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Entry));

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _communicationController = __webpack_require__(99);

var _database = __webpack_require__(21);

function Login(formData, respFunc) {

    var handleResponse = function handleResponse(err, resp) {
        console.log(resp.body.data.token);
        respFunc(err, resp);
    };

    console.log(_database.API_URL);
    (0, _communicationController.post)(_database.API_URL + "/user/login", formData, handleResponse);
};

function Register(formData, respFunc) {
    var handleResponse = function handleResponse(err, resp) {
        console.log(resp.body.data.token);
        respFunc(err, resp);
    };
    (0, _communicationController.post)(_database.API_URL + "/user/register", formData, handleResponse);
};

module.exports = {
    Login: Login,
    Register: Register
};

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.post = post;
exports.get = get;

var _superagent = __webpack_require__(126);

var _superagent2 = _interopRequireDefault(_superagent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function post(api, postData, respFunc, token) {
    _superagent2.default.post(api).send(postData).set('X-API-Key', 'foobar').set('Accept', 'application/json').set('Authorization', 'Bearer ' + token).end(function (err, res) {
        respFunc(err, res);
    });
};

function get(api, getData, respFunc, token) {
    _superagent2.default.get(api).set('Authorization', 'Bearer ' + token).query(getData).end(function (err, res) {
        respFunc(err, res);
    });
};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actions = __webpack_require__(70);

var INITIAL_STATE = {};

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
    var action = arguments[1];

    console.log("reducer");
    console.log(action);
    switch (action.type) {
        case _actions.Types.LOGIN:
            return _extends({}, state, { loggedIn: Boolean(action.token), token: action.token, tokenValid: Boolean(action.token), user: action.user });
        case _actions.Types.TOKEN:
            return _extends({}, state, { loggedIn: Boolean(action.token), token: action.token, user: action.user });
        case _actions.Types.LOGOUT:
            return _extends({}, state, { loggedIn: false, token: undefined, tokenValid: false, user: undefined });
        default:
            return state;
    }
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

var _views = __webpack_require__(22);

var _visibleLoginPage = __webpack_require__(46);

var _visibleLoginPage2 = _interopRequireDefault(_visibleLoginPage);

var _entry = __webpack_require__(97);

var _entry2 = _interopRequireDefault(_entry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppRoutes = function (_React$Component) {
  _inherits(AppRoutes, _React$Component);

  function AppRoutes(props) {
    _classCallCheck(this, AppRoutes);

    return _possibleConstructorReturn(this, (AppRoutes.__proto__ || Object.getPrototypeOf(AppRoutes)).call(this, props));
  }

  _createClass(AppRoutes, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactRouterDom.Route, { path: '/', component: _entry2.default })
      );
    }
  }]);

  return AppRoutes;
}(_react2.default.Component);

exports.default = AppRoutes;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(53);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(54);

var _server2 = _interopRequireDefault(_server);

var _template = __webpack_require__(52);

var _template2 = _interopRequireDefault(_template);

var _reactRouterDom = __webpack_require__(3);

var _redux = __webpack_require__(24);

var _reactRedux = __webpack_require__(7);

var _reducers = __webpack_require__(51);

var _reducers2 = _interopRequireDefault(_reducers);

var _routes = __webpack_require__(14);

var _reactCookie = __webpack_require__(6);

var _RoutesRoot = __webpack_require__(50);

var _RoutesRoot2 = _interopRequireDefault(_RoutesRoot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var context = {};

var cookiesMiddleware = __webpack_require__(55);


app.use(_express2.default.static('dist/public'));
app.use(cookiesMiddleware());

app.get('*', function (req, res) {

    var initMOCKstore = {};
    var store = (0, _redux.createStore)(_reducers2.default, initMOCKstore);

    var body = _server2.default.renderToString(_react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
            _reactRouterDom.StaticRouter,
            {
                location: req.url,
                context: context
            },
            _react2.default.createElement(
                _reactCookie.CookiesProvider,
                { cookies: req.universalCookies },
                _react2.default.createElement(_RoutesRoot2.default, null)
            )
        )
    ));

    var initialState = store.getState();
    var html = (0, _template2.default)(body)(initialState);

    if (context.url) {
        res.writeHead(301, {
            Location: context.url
        });
        res.end();
    } else {
        res.send(html);
    }
});

app.listen(3000, function () {
    console.log("Listening on port 3000");
});

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _StudentCard = __webpack_require__(87);

var _reactRouterDom = __webpack_require__(3);

var _semanticUiReact = __webpack_require__(2);

var _ProjectCard = __webpack_require__(32);

var _detailsCard = __webpack_require__(88);

var _announcementCard = __webpack_require__(18);

var _announcementCard2 = _interopRequireDefault(_announcementCard);

var _attachmentCard = __webpack_require__(75);

var _checklistCard = __webpack_require__(81);

var _checklistCard2 = _interopRequireDefault(_checklistCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CoursePage = function (_React$Component) {
    _inherits(CoursePage, _React$Component);

    function CoursePage(props) {
        _classCallCheck(this, CoursePage);

        return _possibleConstructorReturn(this, (CoursePage.__proto__ || Object.getPrototypeOf(CoursePage)).call(this, props));
    }

    _createClass(CoursePage, [{
        key: 'render',
        value: function render() {
            var studentList = [{
                image: '',
                header: 'İsmet Melih Özbeyli'
            }, {
                image: '',
                header: 'Mehmet Berk Gürçay'
            }];
            var projectList = [{
                header: 'Rubic Cube',
                progressPercent: 25
            }, {
                header: 'Texture Mapping',
                progressPercent: 12
            }];
            var announcementList = [{ title: "Loopcake", date: "Yesterday", content: "Awesome" }, { title: "Loopcak", date: "Yesterday", content: "Awesome" }, { title: "Loopca", date: "Yesterday", content: "Awesome" }];

            var details = {
                programmingLanguages: ['C++', 'C', 'C#'],
                year: 2012,
                term: 'Fall',
                name: 'Computer Graphics',
                abbreviation: 'Comp 410',
                department: 'Computer Engineering',
                assistants: [{
                    image: '',
                    header: 'Yahya Hassanzadeh'
                }, {
                    image: '',
                    header: 'Leila Basri'
                }]

            };
            var attachments = [{
                fileType: 'pdf',
                name: 'Lecture 1'
            }, {
                fileType: '',
                name: 'Lectures'
            }];

            var folders = [{
                name: 'Lecture Slides',
                attachments: attachments
            }, {
                name: 'Slides',
                attachments: attachments
            }];
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_checklistCard2.default, null),
                _react2.default.createElement(_attachmentCard.AttachmentCard, { attachments: attachments, folders: folders }),
                _react2.default.createElement(_detailsCard.DetailsCard, details),
                _react2.default.createElement(_announcementCard2.default, { announcements: announcementList, editable: true }),
                _react2.default.createElement(_ProjectCard.ProjectCard, { items: projectList }),
                _react2.default.createElement(_StudentCard.StudentCard, { items: studentList })
            );
        }
    }]);

    return CoursePage;
}(_react2.default.Component);

exports.default = CoursePage;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _courseCard = __webpack_require__(85);

var _courseCard2 = _interopRequireDefault(_courseCard);

var _semanticUiReact = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
	_inherits(Home, _React$Component);

	function Home() {
		_classCallCheck(this, Home);

		return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
	}

	_createClass(Home, [{
		key: '_renderCourses',
		value: function _renderCourses() {
			if (!this.props.courses) {
				return null;
			}
			return this.props.courses.map(function (course) {
				return _react2.default.createElement(
					_semanticUiReact.Grid.Column,
					{ key: course.course._id, width: 5 },
					_react2.default.createElement(_courseCard2.default, { data: course })
				);
			});
		}
	}, {
		key: 'render',
		value: function render() {
			console.log("Home Page", this.props);
			return _react2.default.createElement(
				_semanticUiReact.Grid,
				null,
				this._renderCourses()
			);
		}
	}]);

	return Home;
}(_react2.default.Component);

exports.default = Home;


Home.propTypes = {
	courses: _propTypes2.default.arrayOf(_propTypes2.default.shape({
		announcements: _propTypes2.default.array,
		calender: _propTypes2.default.array,
		course: _propTypes2.default.object,
		grades: _propTypes2.default.array,
		myGroups: _propTypes2.default.array,
		projects: _propTypes2.default.array
	}))
};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _FormComponents = __webpack_require__(19);

var _semanticUiReact = __webpack_require__(2);

var _database = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RegisterPage = function RegisterPage() {
    var formFieldData = [{
        label: "Email",
        name: "email",
        type: "text",
        placeholder: "abc@loopcake.com"
    }, {
        label: "Name",
        name: "name",
        type: "text"
    }, {
        label: "Surname",
        name: "surname",
        type: "text"
    }, {
        label: "Password",
        name: "password",
        type: "password",
        withMeter: true
    }, {
        label: "Repeat",
        name: "repeat",
        type: "password"
    }];
    var handleSubmit = function handleSubmit(formData) {
        console.log(formData);
        var handleResponse = function handleResponse(err, resp) {
            if (err) {} else {
                console.log(resp);
            }
        };
        _database.Authentication.Register(formData, handleResponse);
    };
    return _react2.default.createElement(
        _semanticUiReact.Grid,
        { style: {
                position: 'fixed',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                overflow: 'auto',
                background: '#2c3e50'
            } },
        _react2.default.createElement(_semanticUiReact.Grid.Row, null),
        _react2.default.createElement(
            _semanticUiReact.Grid.Row,
            { centered: true },
            _react2.default.createElement(
                _semanticUiReact.Grid.Column,
                { width: 5 },
                _react2.default.createElement(_semanticUiReact.Image, { centered: true, height: 50, size: 'small', src: __webpack_require__(49) }),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    _semanticUiReact.Card,
                    { fluid: true },
                    _react2.default.createElement(
                        _semanticUiReact.Card.Content,
                        null,
                        _react2.default.createElement(
                            _semanticUiReact.Header,
                            { as: 'h1', textAlign: 'center' },
                            'Register'
                        ),
                        _react2.default.createElement(_FormComponents.Form, { onSubmit: handleSubmit, formData: formFieldData })
                    )
                )
            )
        )
    );
};
exports.default = RegisterPage;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _codeEditor = __webpack_require__(92);

var _codeEditor2 = _interopRequireDefault(_codeEditor);

var _commitGraph = __webpack_require__(93);

var _commitGraph2 = _interopRequireDefault(_commitGraph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RepoPage = function (_React$Component) {
  _inherits(RepoPage, _React$Component);

  function RepoPage() {
    _classCallCheck(this, RepoPage);

    return _possibleConstructorReturn(this, (RepoPage.__proto__ || Object.getPrototypeOf(RepoPage)).apply(this, arguments));
  }

  _createClass(RepoPage, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_codeEditor2.default, { code: 'void fas(){}', fileName: 'app.java' }),
        _react2.default.createElement(_commitGraph2.default, null)
      );
    }
  }]);

  return RepoPage;
}(_react2.default.Component);

exports.default = RepoPage;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(108)(undefined);
// imports


// module
exports.push([module.i, ".CodeMirror{\n    height: auto;\n}", ""]);

// exports


/***/ }),
/* 108 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(107);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(110)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./codeEditorStyle.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./codeEditorStyle.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(111);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 111 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 113 */
/***/ (function(module, exports) {

module.exports= {
  passwordColors: [
      "red","orange","yellow","olive","green"
  ]
};

/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports = {
    instructorPhoto: "http://www2.denizyuret.com/public_html/dyuret-cropped.jpg"
};


/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = {
    passwordStrings: ["Very Weak","Weak","Normal","Strong","Very Strong"]
};


/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports = require("codemirror");

/***/ }),
/* 117 */
/***/ (function(module, exports) {

module.exports = require("codemirror/lib/codemirror.css");

/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/meta.js");

/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = require("codemirror/theme/rubyblue.css");

/***/ }),
/* 120 */
/***/ (function(module, exports) {

module.exports = require("create-react-class/factory");

/***/ }),
/* 121 */
/***/ (function(module, exports) {

module.exports = require("fbjs/lib/emptyFunction");

/***/ }),
/* 122 */
/***/ (function(module, exports) {

module.exports = require("fbjs/lib/emptyObject");

/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = require("prop-types/factory");

/***/ }),
/* 124 */
/***/ (function(module, exports) {

module.exports = require("react-codemirror");

/***/ }),
/* 125 */
/***/ (function(module, exports) {

module.exports = require("react-gitgraph");

/***/ }),
/* 126 */
/***/ (function(module, exports) {

module.exports = require("superagent");

/***/ }),
/* 127 */
/***/ (function(module, exports) {

module.exports = require("zxcvbn");

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(7);

var _views = __webpack_require__(22);

__webpack_require__(17);

var _reactCookie = __webpack_require__(6);

var _course = __webpack_require__(129);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _course2 = __webpack_require__(130);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _VisibleHomePage = function (_Component) {
  _inherits(_VisibleHomePage, _Component);

  function _VisibleHomePage() {
    _classCallCheck(this, _VisibleHomePage);

    return _possibleConstructorReturn(this, (_VisibleHomePage.__proto__ || Object.getPrototypeOf(_VisibleHomePage)).apply(this, arguments));
  }

  _createClass(_VisibleHomePage, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      console.log("Props: ", this.props);
      var handleResponse = function handleResponse(err, resp) {
        if (err) {
          console.log(err);
        } else {
          console.log(resp);
          var courses = [];
          resp.body.data.forEach(function (element) {
            var handleCourseResponse = function handleCourseResponse(err, resp) {
              if (err) {} else {
                console.log("Course", resp);
                _this2.props.courseSummaryAction(resp.body.data);
              }
            };
            (0, _course.getCourseSummary)(element._id, _this2.props.user.token, handleCourseResponse);
          }, _this2);
        }
      };
      (0, _course.getAttendedCourses)(this.props.user.user._id, this.props.user.token, handleResponse);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return this.props.course ? _react2.default.createElement(_views.Home, { courses: Object.keys(this.props.course).map(function (k) {
          return _this3.props.course[k];
        }) }) : null;
    }
  }]);

  return _VisibleHomePage;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return _extends({}, state, {
    getAttendedCourses: _course.getAttendedCourses
  });
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    courseSummaryAction: function courseSummaryAction(course) {
      console.log("Course Action");
      dispatch((0, _course2.courseSummaryAction)(course));
    }
  };
};

var VisibleHomePage = (0, _reactCookie.withCookies)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_VisibleHomePage));

exports.default = VisibleHomePage;

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getAttendedCourses = getAttendedCourses;
exports.getCourseSummary = getCourseSummary;

var _communicationController = __webpack_require__(99);

var _index = __webpack_require__(21);

function getAttendedCourses(userId, token, responseFunc) {
    (0, _communicationController.post)(_index.API_URL + '/course/attended', { _id: userId }, responseFunc, token);
}

function getCourseSummary(courseId, token, responseFunc) {
    (0, _communicationController.get)(_index.API_URL + '/course/' + courseId + '/summary', {}, responseFunc, token);
}

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
     value: true
});
exports.courseSummaryAction = courseSummaryAction;

var _types = __webpack_require__(30);

function courseSummaryAction(course) {
     return {
          type: _types.COURSE_SUMMARY,
          course: course
     };
}

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actions = __webpack_require__(70);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var INITIAL_STATE = {};

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
    var action = arguments[1];

    console.log("course reducer");
    console.log(action);
    switch (action.type) {

        case _actions.Types.COURSE_SUMMARY:
            return _extends({}, state, _defineProperty({}, action.course.course._id, action.course));
        default:
            return state;
    }
};

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(2);

var _constants = __webpack_require__(45);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CourseHeader = function (_React$Component) {
  _inherits(CourseHeader, _React$Component);

  function CourseHeader() {
    _classCallCheck(this, CourseHeader);

    return _possibleConstructorReturn(this, (CourseHeader.__proto__ || Object.getPrototypeOf(CourseHeader)).apply(this, arguments));
  }

  _createClass(CourseHeader, [{
    key: '_getHeader',
    value: function _getHeader() {
      console.log("Props ", this.props);
      if (this.props.course) {
        console.log("Datum: ", this.props.course.name);
        var course = this.props.course;
        return course.name;
      }
    }
  }, {
    key: '_getDetail',
    value: function _getDetail() {
      if (this.props.course) {
        var course = this.props.course;
        console.log("C ", course);
        var str = "";
        for (var i = 0; i < course.instructors.length; ++i) {
          var ins = course.instructors[i];
          str += ins.name + " " + ins.surname;
          if (i != course.instructors.length) {
            str += "\n";
          }
        }
        return str;
      }
    }
  }, {
    key: '_getAbv',
    value: function _getAbv() {
      if (this.props.course) {
        var course = this.props.course;
        return course.abbreviation + " " + course.code;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _semanticUiReact.Grid,
        null,
        _react2.default.createElement(
          _semanticUiReact.Grid.Column,
          { width: 5 },
          _react2.default.createElement(_semanticUiReact.Image, { shape: 'circular', src: _constants.placeholders.instructorPhoto })
        ),
        _react2.default.createElement(
          _semanticUiReact.Grid.Column,
          { width: 11 },
          _react2.default.createElement(
            _semanticUiReact.Card.Header,
            null,
            this._getHeader()
          ),
          _react2.default.createElement(
            _semanticUiReact.Card.Meta,
            null,
            _react2.default.createElement(
              'span',
              { className: 'date' },
              this._getAbv()
            )
          ),
          _react2.default.createElement(
            _semanticUiReact.Card.Description,
            null,
            this._getDetail()
          )
        )
      );
    }
  }]);

  return CourseHeader;
}(_react2.default.Component);

exports.default = CourseHeader;


CourseHeader.propTypes = {
  course: _propTypes2.default.shape({
    _id: _propTypes2.default.string,
    name: _propTypes2.default.string,
    abbreviation: _propTypes2.default.string,
    code: _propTypes2.default.string,
    details: _propTypes2.default.shape({
      year: _propTypes2.default.string,
      _id: _propTypes2.default.string,
      relatedCourses: _propTypes2.default.array,
      programmingLanguages: _propTypes2.default.array,
      sections: _propTypes2.default.array
    }),
    attachments: _propTypes2.default.array,
    instructors: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      _id: _propTypes2.default.string,
      email: _propTypes2.default.string,
      name: _propTypes2.default.string,
      surname: _propTypes2.default.string,
      photo: _propTypes2.default.string
    }))
  })
};

/***/ })
/******/ ]);