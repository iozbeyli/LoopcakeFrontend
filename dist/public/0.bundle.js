webpackJsonp([0],{

/***/ 1055:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactAddonsCssTransitionGroup = __webpack_require__(1064);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _cancelButton = __webpack_require__(1065);

var _cancelButton2 = _interopRequireDefault(_cancelButton);

var _deleteButton = __webpack_require__(1066);

var _deleteButton2 = _interopRequireDefault(_deleteButton);

var _dropzone = __webpack_require__(1067);

var _dropzone2 = _interopRequireDefault(_dropzone);

var _fileInput = __webpack_require__(1068);

var _fileInput2 = _interopRequireDefault(_fileInput);

var _filename = __webpack_require__(1070);

var _filename2 = _interopRequireDefault(_filename);

var _filesize = __webpack_require__(1071);

var _filesize2 = _interopRequireDefault(_filesize);

var _retryButton = __webpack_require__(1080);

var _retryButton2 = _interopRequireDefault(_retryButton);

var _pauseResumeButton = __webpack_require__(1078);

var _pauseResumeButton2 = _interopRequireDefault(_pauseResumeButton);

var _progressBar = __webpack_require__(1079);

var _progressBar2 = _interopRequireDefault(_progressBar);

var _status = __webpack_require__(1081);

var _status2 = _interopRequireDefault(_status);

var _thumbnail = __webpack_require__(1082);

var _thumbnail2 = _interopRequireDefault(_thumbnail);

var _pauseIcon = __webpack_require__(1072);

var _pauseIcon2 = _interopRequireDefault(_pauseIcon);

var _playIcon = __webpack_require__(1073);

var _playIcon2 = _interopRequireDefault(_playIcon);

var _uploadIcon = __webpack_require__(1075);

var _uploadIcon2 = _interopRequireDefault(_uploadIcon);

var _uploadFailedIcon = __webpack_require__(1074);

var _uploadFailedIcon2 = _interopRequireDefault(_uploadFailedIcon);

var _uploadSuccessIcon = __webpack_require__(1076);

var _uploadSuccessIcon2 = _interopRequireDefault(_uploadSuccessIcon);

var _xIcon = __webpack_require__(1077);

var _xIcon2 = _interopRequireDefault(_xIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Gallery = function (_Component) {
    _inherits(Gallery, _Component);

    function Gallery(props) {
        _classCallCheck(this, Gallery);

        var _this = _possibleConstructorReturn(this, (Gallery.__proto__ || Object.getPrototypeOf(Gallery)).call(this, props));

        _this.state = {
            visibleFiles: []
        };

        var statusEnum = props.uploader.qq.status;

        _this._onStatusChange = function (id, oldStatus, status) {
            var visibleFiles = _this.state.visibleFiles;

            if (status === statusEnum.SUBMITTING) {
                visibleFiles.push({ id: id });
                _this.setState({ visibleFiles: visibleFiles });
            } else if (isFileGone(status, statusEnum)) {
                _this._removeVisibleFile(id);
            } else if (status === statusEnum.UPLOAD_SUCCESSFUL || status === statusEnum.UPLOAD_FAILED) {
                if (status === statusEnum.UPLOAD_SUCCESSFUL) {
                    var visibleFileIndex = _this._findFileIndex(id);
                    if (visibleFileIndex < 0) {
                        visibleFiles.push({ id: id, fromServer: true });
                    }
                }
                _this._updateVisibleFileStatus(id, status);
            }
        };
        return _this;
    }

    _createClass(Gallery, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.uploader.on('statusChange', this._onStatusChange);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.props.uploader.off('statusChange', this._onStatusChange);
        }
    }, {
        key: 'render',
        value: function render() {
            var cancelButtonProps = getComponentProps('cancelButton', this.props);
            var dropzoneProps = getComponentProps('dropzone', this.props);
            var fileInputProps = getComponentProps('fileInput', this.props);
            var filenameProps = getComponentProps('filename', this.props);
            var filesizeProps = getComponentProps('filesize', this.props);
            var progressBarProps = getComponentProps('progressBar', this.props);
            var retryButtonProps = getComponentProps('retryButton', this.props);
            var statusProps = getComponentProps('status', this.props);
            var thumbnailProps = getComponentProps('thumbnail', this.props);
            var uploader = this.props.uploader;

            var chunkingEnabled = uploader.options.chunking && uploader.options.chunking.enabled;
            var deleteEnabled = uploader.options.deleteFile && uploader.options.deleteFile.enabled;
            var deleteButtonProps = deleteEnabled && getComponentProps('deleteButton', this.props);
            var pauseResumeButtonProps = chunkingEnabled && getComponentProps('pauseResumeButton', this.props);

            return _react2.default.createElement(
                MaybeDropzone,
                _extends({ content: this.props.children,
                    hasVisibleFiles: this.state.visibleFiles.length > 0,
                    uploader: uploader
                }, dropzoneProps),
                !fileInputProps.disabled && _react2.default.createElement(FileInputComponent, _extends({ uploader: uploader }, fileInputProps)),
                _react2.default.createElement(_progressBar2.default, _extends({ className: 'react-fine-uploader-gallery-total-progress-bar',
                    uploader: uploader
                }, progressBarProps)),
                _react2.default.createElement(
                    _reactAddonsCssTransitionGroup2.default,
                    { className: 'react-fine-uploader-gallery-files',
                        component: 'ul',
                        transitionEnter: !this.props.animationsDisabled,
                        transitionEnterTimeout: 500,
                        transitionLeave: !this.props.animationsDisabled,
                        transitionLeaveTimeout: 300,
                        transitionName: 'react-fine-uploader-gallery-files'
                    },
                    this.state.visibleFiles.map(function (_ref) {
                        var id = _ref.id,
                            status = _ref.status,
                            fromServer = _ref.fromServer;
                        return _react2.default.createElement(
                            'li',
                            { key: id,
                                className: 'react-fine-uploader-gallery-file'
                            },
                            _react2.default.createElement(_progressBar2.default, _extends({ className: 'react-fine-uploader-gallery-progress-bar',
                                id: id,
                                uploader: uploader
                            }, progressBarProps)),
                            _react2.default.createElement(_thumbnail2.default, _extends({ className: 'react-fine-uploader-gallery-thumbnail',
                                id: id,
                                fromServer: fromServer,
                                uploader: uploader
                            }, thumbnailProps)),
                            status === 'upload successful' && _react2.default.createElement(
                                'span',
                                null,
                                _react2.default.createElement(_uploadSuccessIcon2.default, { className: 'react-fine-uploader-gallery-upload-success-icon' }),
                                _react2.default.createElement('div', { className: 'react-fine-uploader-gallery-thumbnail-icon-backdrop' })
                            ),
                            status === 'upload failed' && _react2.default.createElement(
                                'span',
                                null,
                                _react2.default.createElement(_uploadFailedIcon2.default, { className: 'react-fine-uploader-gallery-upload-failed-icon' }),
                                _react2.default.createElement('div', { className: 'react-fine-uploader-gallery-thumbnail-icon-backdrop' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'react-fine-uploader-gallery-file-footer' },
                                _react2.default.createElement(_filename2.default, _extends({ className: 'react-fine-uploader-gallery-filename',
                                    id: id,
                                    uploader: uploader
                                }, filenameProps)),
                                _react2.default.createElement(_status2.default, _extends({ className: 'react-fine-uploader-gallery-status',
                                    id: id,
                                    uploader: uploader
                                }, statusProps)),
                                _react2.default.createElement(_filesize2.default, _extends({ className: 'react-fine-uploader-gallery-filesize',
                                    id: id,
                                    uploader: uploader
                                }, filesizeProps))
                            ),
                            _react2.default.createElement(_cancelButton2.default, _extends({ className: 'react-fine-uploader-gallery-cancel-button',
                                id: id,
                                uploader: uploader
                            }, cancelButtonProps)),
                            _react2.default.createElement(_retryButton2.default, _extends({ className: 'react-fine-uploader-gallery-retry-button',
                                id: id,
                                uploader: uploader
                            }, retryButtonProps)),
                            deleteEnabled && _react2.default.createElement(_deleteButton2.default, _extends({ className: 'react-fine-uploader-gallery-delete-button',
                                id: id,
                                uploader: uploader
                            }, deleteButtonProps)),
                            chunkingEnabled && _react2.default.createElement(_pauseResumeButton2.default, _extends({ className: 'react-fine-uploader-gallery-pause-resume-button',
                                id: id,
                                uploader: uploader
                            }, pauseResumeButtonProps))
                        );
                    })
                )
            );
        }
    }, {
        key: '_removeVisibleFile',
        value: function _removeVisibleFile(id) {
            var visibleFileIndex = this._findFileIndex(id);

            if (visibleFileIndex >= 0) {
                var visibleFiles = this.state.visibleFiles;

                visibleFiles.splice(visibleFileIndex, 1);
                this.setState({ visibleFiles: visibleFiles });
            }
        }
    }, {
        key: '_updateVisibleFileStatus',
        value: function _updateVisibleFileStatus(id, status) {
            var _this2 = this;

            this.state.visibleFiles.some(function (file) {
                if (file.id === id) {
                    file.status = status;
                    _this2.setState({ visibleFiles: _this2.state.visibleFiles });
                    return true;
                }
            });
        }
    }, {
        key: '_findFileIndex',
        value: function _findFileIndex(id) {
            var visibleFileIndex = -1;

            this.state.visibleFiles.some(function (file, index) {
                if (file.id === id) {
                    visibleFileIndex = index;
                    return true;
                }
            });

            return visibleFileIndex;
        }
    }]);

    return Gallery;
}(_react.Component);

Gallery.propTypes = {
    className: _propTypes2.default.string,
    uploader: _propTypes2.default.object.isRequired
};
Gallery.defaultProps = {
    className: '',
    'cancelButton-children': _react2.default.createElement(_xIcon2.default, null),
    'deleteButton-children': _react2.default.createElement(_xIcon2.default, null),
    'dropzone-disabled': false,
    'dropzone-dropActiveClassName': 'react-fine-uploader-gallery-dropzone-active',
    'dropzone-multiple': true,
    'fileInput-multiple': true,
    'pauseResumeButton-pauseChildren': _react2.default.createElement(_pauseIcon2.default, null),
    'pauseResumeButton-resumeChildren': _react2.default.createElement(_playIcon2.default, null),
    'retryButton-children': _react2.default.createElement(_playIcon2.default, null),
    'thumbnail-maxSize': 130
};


var MaybeDropzone = function MaybeDropzone(_ref2) {
    var children = _ref2.children,
        content = _ref2.content,
        hasVisibleFiles = _ref2.hasVisibleFiles,
        uploader = _ref2.uploader,
        props = _objectWithoutProperties(_ref2, ['children', 'content', 'hasVisibleFiles', 'uploader']);

    var disabled = props.disabled,
        dropzoneProps = _objectWithoutProperties(props, ['disabled']);

    var dropzoneDisabled = disabled;
    if (!dropzoneDisabled) {
        dropzoneDisabled = !uploader.qq.supportedFeatures.fileDrop;
    }

    if (hasVisibleFiles) {
        content = _react2.default.createElement('span', null);
    } else {
        content = content || getDefaultMaybeDropzoneContent({ content: content, disabled: dropzoneDisabled });
    }

    if (dropzoneDisabled) {
        return _react2.default.createElement(
            'div',
            { className: 'react-fine-uploader-gallery-nodrop-container' },
            content,
            children
        );
    }

    return _react2.default.createElement(
        _dropzone2.default,
        _extends({ className: 'react-fine-uploader-gallery-dropzone',
            uploader: uploader
        }, dropzoneProps),
        content,
        children
    );
};

var FileInputComponent = function FileInputComponent(_ref3) {
    var uploader = _ref3.uploader,
        props = _objectWithoutProperties(_ref3, ['uploader']);

    var children = props.children,
        fileInputProps = _objectWithoutProperties(props, ['children']);

    var content = children || _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(_uploadIcon2.default, { className: 'react-fine-uploader-gallery-file-input-upload-icon' }),
        'Select Files'
    );

    return _react2.default.createElement(
        _fileInput2.default,
        _extends({ className: 'react-fine-uploader-gallery-file-input-container',
            uploader: uploader
        }, fileInputProps),
        _react2.default.createElement(
            'span',
            { className: 'react-fine-uploader-gallery-file-input-content' },
            content
        )
    );
};

var getComponentProps = function getComponentProps(componentName, allProps) {
    var componentProps = {};

    Object.keys(allProps).forEach(function (propName) {
        if (propName.indexOf(componentName + '-') === 0) {
            var componentPropName = propName.substr(componentName.length + 1);
            componentProps[componentPropName] = allProps[propName];
        }
    });

    return componentProps;
};

var getDefaultMaybeDropzoneContent = function getDefaultMaybeDropzoneContent(_ref4) {
    var content = _ref4.content,
        disabled = _ref4.disabled;

    var className = disabled ? 'react-fine-uploader-gallery-nodrop-content' : 'react-fine-uploader-gallery-dropzone-content';

    if (disabled && !content) {
        return _react2.default.createElement(
            'span',
            { className: className },
            'Upload files'
        );
    } else if (content) {
        return _react2.default.createElement(
            'span',
            { className: className },
            content
        );
    } else if (!disabled) {
        return _react2.default.createElement(
            'span',
            { className: className },
            _react2.default.createElement(_uploadIcon2.default, { className: 'react-fine-uploader-gallery-dropzone-upload-icon' }),
            'Drop files here'
        );
    }
};

var isFileGone = function isFileGone(statusToCheck, statusEnum) {
    return [statusEnum.CANCELED, statusEnum.DELETED].indexOf(statusToCheck) >= 0;
};

exports.default = Gallery;

/***/ }),

/***/ 1056:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
module.exports = exports['default'];

/***/ }),

/***/ 1057:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.nameShape = undefined;
exports.transitionTimeout = transitionTimeout;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function transitionTimeout(transitionType) {
  var timeoutPropName = 'transition' + transitionType + 'Timeout';
  var enabledPropName = 'transition' + transitionType;

  return function (props) {
    // If the transition is enabled
    if (props[enabledPropName]) {
      // If no timeout duration is provided
      if (props[timeoutPropName] == null) {
        return new Error(timeoutPropName + ' wasn\'t supplied to CSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.');

        // If the duration isn't a number
      } else if (typeof props[timeoutPropName] !== 'number') {
        return new Error(timeoutPropName + ' must be a number (in milliseconds)');
      }
    }

    return null;
  };
}

var nameShape = exports.nameShape = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
  enter: _propTypes2.default.string,
  leave: _propTypes2.default.string,
  active: _propTypes2.default.string
}), _propTypes2.default.shape({
  enter: _propTypes2.default.string,
  enterActive: _propTypes2.default.string,
  leave: _propTypes2.default.string,
  leaveActive: _propTypes2.default.string,
  appear: _propTypes2.default.string,
  appearActive: _propTypes2.default.string
})]);

/***/ }),

/***/ 1058:
/***/ (function(module, exports) {


module.exports = function chain(){
  var len = arguments.length
  var args = [];

  for (var i = 0; i < len; i++)
    args[i] = arguments[i]

  args = args.filter(function(fn){ return fn != null })

  if (args.length === 0) return undefined
  if (args.length === 1) return args[0]

  return args.reduce(function(current, next){
    return function chainedFunction() {
      current.apply(this, arguments);
      next.apply(this, arguments);
    };
  })
}


/***/ }),

/***/ 1059:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addClass;

var _hasClass = __webpack_require__(1060);

var _hasClass2 = _interopRequireDefault(_hasClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass2.default)(element)) element.className = element.className + ' ' + className;
}
module.exports = exports['default'];

/***/ }),

/***/ 1060:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hasClass;
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + element.className + " ").indexOf(" " + className + " ") !== -1;
}
module.exports = exports["default"];

/***/ }),

/***/ 1061:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else element.className = element.className.replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
};

/***/ }),

/***/ 1062:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = undefined;

var _inDOM = __webpack_require__(1056);

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transform = 'transform';
var prefix = void 0,
    transitionEnd = void 0,
    animationEnd = void 0;
var transitionProperty = void 0,
    transitionDuration = void 0,
    transitionTiming = void 0,
    transitionDelay = void 0;
var animationName = void 0,
    animationDuration = void 0,
    animationTiming = void 0,
    animationDelay = void 0;

if (_inDOM2.default) {
  var _getTransitionPropert = getTransitionProperties();

  prefix = _getTransitionPropert.prefix;
  exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd;
  exports.animationEnd = animationEnd = _getTransitionPropert.animationEnd;


  exports.transform = transform = prefix + '-' + transform;
  exports.transitionProperty = transitionProperty = prefix + '-transition-property';
  exports.transitionDuration = transitionDuration = prefix + '-transition-duration';
  exports.transitionDelay = transitionDelay = prefix + '-transition-delay';
  exports.transitionTiming = transitionTiming = prefix + '-transition-timing-function';

  exports.animationName = animationName = prefix + '-animation-name';
  exports.animationDuration = animationDuration = prefix + '-animation-duration';
  exports.animationTiming = animationTiming = prefix + '-animation-delay';
  exports.animationDelay = animationDelay = prefix + '-animation-timing-function';
}

exports.transform = transform;
exports.transitionProperty = transitionProperty;
exports.transitionTiming = transitionTiming;
exports.transitionDelay = transitionDelay;
exports.transitionDuration = transitionDuration;
exports.transitionEnd = transitionEnd;
exports.animationName = animationName;
exports.animationDuration = animationDuration;
exports.animationTiming = animationTiming;
exports.animationDelay = animationDelay;
exports.animationEnd = animationEnd;
exports.default = {
  transform: transform,
  end: transitionEnd,
  property: transitionProperty,
  timing: transitionTiming,
  delay: transitionDelay,
  duration: transitionDuration
};


function getTransitionProperties() {
  var style = document.createElement('div').style;

  var vendorMap = {
    O: function O(e) {
      return 'o' + e.toLowerCase();
    },
    Moz: function Moz(e) {
      return e.toLowerCase();
    },
    Webkit: function Webkit(e) {
      return 'webkit' + e;
    },
    ms: function ms(e) {
      return 'MS' + e;
    }
  };

  var vendors = Object.keys(vendorMap);

  var transitionEnd = void 0,
      animationEnd = void 0;
  var prefix = '';

  for (var i = 0; i < vendors.length; i++) {
    var vendor = vendors[i];

    if (vendor + 'TransitionProperty' in style) {
      prefix = '-' + vendor.toLowerCase();
      transitionEnd = vendorMap[vendor]('TransitionEnd');
      animationEnd = vendorMap[vendor]('AnimationEnd');
      break;
    }
  }

  if (!transitionEnd && 'transitionProperty' in style) transitionEnd = 'transitionend';

  if (!animationEnd && 'animationName' in style) animationEnd = 'animationend';

  style = null;

  return { animationEnd: animationEnd, transitionEnd: transitionEnd, prefix: prefix };
}

/***/ }),

/***/ 1063:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inDOM = __webpack_require__(1056);

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var vendors = ['', 'webkit', 'moz', 'o', 'ms'];
var cancel = 'clearTimeout';
var raf = fallback;
var compatRaf = void 0;

var getKey = function getKey(vendor, k) {
  return vendor + (!vendor ? k : k[0].toUpperCase() + k.substr(1)) + 'AnimationFrame';
};

if (_inDOM2.default) {
  vendors.some(function (vendor) {
    var rafKey = getKey(vendor, 'request');

    if (rafKey in window) {
      cancel = getKey(vendor, 'cancel');
      return raf = function raf(cb) {
        return window[rafKey](cb);
      };
    }
  });
}

/* https://github.com/component/raf */
var prev = new Date().getTime();
function fallback(fn) {
  var curr = new Date().getTime(),
      ms = Math.max(0, 16 - (curr - prev)),
      req = setTimeout(fn, ms);

  prev = curr;
  return req;
}

compatRaf = function compatRaf(cb) {
  return raf(cb);
};
compatRaf.cancel = function (id) {
  window[cancel] && typeof window[cancel] === 'function' && window[cancel](id);
};
exports.default = compatRaf;
module.exports = exports['default'];

/***/ }),

/***/ 1064:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



module.exports = __webpack_require__(1086);


/***/ }),

/***/ 1065:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CancelButton = function (_Component) {
    _inherits(CancelButton, _Component);

    function CancelButton(props) {
        _classCallCheck(this, CancelButton);

        var _this = _possibleConstructorReturn(this, (CancelButton.__proto__ || Object.getPrototypeOf(CancelButton)).call(this, props));

        _this.state = { cancelable: true };

        var statusEnum = props.uploader.qq.status;

        _this._onStatusChange = function (id, oldStatus, newStatus) {
            if (id === _this.props.id && !_this._unmounted) {
                if (!isCancelable(newStatus, statusEnum) && _this.state.cancelable) {
                    _this.setState({ cancelable: false });
                } else if (isCancelable(newStatus, statusEnum) && !_this.state.cancelable) {
                    _this.setState({ cancelable: true });
                } else if (newStatus === statusEnum.DELETED || newStatus === statusEnum.CANCELED) {
                    _this._unregisterStatusChangeHandler();
                }
            }
        };

        _this._onClick = function () {
            return _this.props.uploader.methods.cancel(_this.props.id);
        };
        return _this;
    }

    _createClass(CancelButton, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.uploader.on('statusChange', this._onStatusChange);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this._unmounted = true;
            this._unregisterStatusChangeHandler();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                onlyRenderIfCancelable = _props.onlyRenderIfCancelable,
                id = _props.id,
                uploader = _props.uploader,
                elementProps = _objectWithoutProperties(_props, ['children', 'onlyRenderIfCancelable', 'id', 'uploader']); // eslint-disable-line no-unused-vars


            var content = children || 'Cancel';

            if (this.state.cancelable || !onlyRenderIfCancelable) {
                return _react2.default.createElement(
                    'button',
                    _extends({ 'aria-label': 'cancel',
                        className: 'react-fine-uploader-cancel-button ' + (this.props.className || ''),
                        disabled: !this.state.cancelable,
                        onClick: this.state.cancelable && this._onClick,
                        type: 'button'
                    }, elementProps),
                    content
                );
            }

            return null;
        }
    }, {
        key: '_unregisterStatusChangeHandler',
        value: function _unregisterStatusChangeHandler() {
            this.props.uploader.off('statusChange', this._onStatusChange);
        }
    }]);

    return CancelButton;
}(_react.Component);

CancelButton.propTypes = {
    children: _propTypes2.default.node,
    id: _propTypes2.default.number.isRequired,
    onlyRenderIfCancelable: _propTypes2.default.bool,
    uploader: _propTypes2.default.object.isRequired
};
CancelButton.defaultProps = {
    onlyRenderIfCancelable: true
};


var isCancelable = function isCancelable(statusToCheck, statusEnum) {
    return [statusEnum.DELETE_FAILED, statusEnum.PAUSED, statusEnum.QUEUED, statusEnum.UPLOAD_RETRYING, statusEnum.SUBMITTED, statusEnum.UPLOADING, statusEnum.UPLOAD_FAILED].indexOf(statusToCheck) >= 0;
};

exports.default = CancelButton;

/***/ }),

/***/ 1066:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DeleteButton = function (_Component) {
    _inherits(DeleteButton, _Component);

    function DeleteButton(props) {
        _classCallCheck(this, DeleteButton);

        var _this = _possibleConstructorReturn(this, (DeleteButton.__proto__ || Object.getPrototypeOf(DeleteButton)).call(this, props));

        _this.state = {
            deletable: false,
            deleting: false
        };

        var statusEnum = props.uploader.qq.status;

        _this._onStatusChange = function (id, oldStatus, newStatus) {
            if (id === _this.props.id && !_this._unmounted) {
                if (!isDeletable(newStatus, statusEnum) && newStatus !== statusEnum.DELETING && _this.state.deletable) {
                    !_this._unmounted && _this.setState({
                        deletable: false,
                        deleting: false
                    });
                    _this._unregisterStatusChangeHandler();
                } else if (isDeletable(newStatus, statusEnum) && !_this.state.deletable) {
                    _this.setState({
                        deletable: true,
                        deleting: false
                    });
                } else if (newStatus === statusEnum.DELETING && !_this.state.deleting) {
                    _this.setState({ deleting: true });
                }
            }
        };

        _this._onClick = function () {
            return _this.props.uploader.methods.deleteFile(_this.props.id);
        };
        return _this;
    }

    _createClass(DeleteButton, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.uploader.on('statusChange', this._onStatusChange);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this._unmounted = true;
            this._unregisterStatusChangeHandler();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                onlyRenderIfDeletable = _props.onlyRenderIfDeletable,
                id = _props.id,
                uploader = _props.uploader,
                elementProps = _objectWithoutProperties(_props, ['children', 'onlyRenderIfDeletable', 'id', 'uploader']); // eslint-disable-line no-unused-vars


            var content = children || 'Delete';

            if (this.state.deletable || this.state.deleting || !onlyRenderIfDeletable) {
                return _react2.default.createElement(
                    'button',
                    _extends({ 'aria-label': 'delete',
                        className: 'react-fine-uploader-delete-button ' + (this.props.className || ''),
                        disabled: !this.state.deletable || this.state.deleting,
                        onClick: this.state.deletable && !this.state.deleting && this._onClick,
                        type: 'button'
                    }, elementProps),
                    content
                );
            }

            return null;
        }
    }, {
        key: '_unregisterStatusChangeHandler',
        value: function _unregisterStatusChangeHandler() {
            this.props.uploader.off('statusChange', this._onStatusChange);
        }
    }]);

    return DeleteButton;
}(_react.Component);

DeleteButton.propTypes = {
    children: _propTypes2.default.node,
    id: _propTypes2.default.number.isRequired,
    onlyRenderIfDeletable: _propTypes2.default.bool,
    uploader: _propTypes2.default.object.isRequired
};
DeleteButton.defaultProps = {
    onlyRenderIfDeletable: true
};


var isDeletable = function isDeletable(statusToCheck, statusEnum) {
    return [statusEnum.DELETE_FAILED, statusEnum.UPLOAD_SUCCESSFUL].indexOf(statusToCheck) >= 0;
};

exports.default = DeleteButton;

/***/ }),

/***/ 1067:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dnd = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"fine-uploader/lib/dnd\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _dnd2 = _interopRequireDefault(_dnd);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropzoneElement = function (_Component) {
    _inherits(DropzoneElement, _Component);

    function DropzoneElement() {
        _classCallCheck(this, DropzoneElement);

        return _possibleConstructorReturn(this, (DropzoneElement.__proto__ || Object.getPrototypeOf(DropzoneElement)).apply(this, arguments));
    }

    _createClass(DropzoneElement, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this._registerDropzone();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this._registerDropzone();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this._qqDropzone && this._qqDropzone.dispose();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                uploader = _props.uploader,
                elementProps = _objectWithoutProperties(_props, ['uploader']); // eslint-disable-line no-unused-vars

            return _react2.default.createElement(
                'div',
                _extends({}, getElementProps(this.props), {
                    className: 'fine-uploader-dropzone-container ' + (this.props.className || ''),
                    ref: 'dropZone'
                }),
                this.props.children
            );
        }
    }, {
        key: '_onDropError',
        value: function _onDropError(errorCode, errorData) {
            console.error(errorCode, errorData);

            this.props.onDropError && this.props.onDropError(errorCode, errorData);
        }
    }, {
        key: '_onProcessingDroppedFilesComplete',
        value: function _onProcessingDroppedFilesComplete(files) {
            this.props.uploader.methods.addFiles(files);

            if (this.props.onProcessingDroppedFilesComplete) {
                this.props.onProcessingDroppedFilesComplete(files);
            }
        }
    }, {
        key: '_registerDropzone',
        value: function _registerDropzone() {
            this._qqDropzone && this._qqDropzone.dispose();

            var dropzoneEl = this.props.element || this.refs.dropZone;

            this._qqDropzone = new _dnd2.default.DragAndDrop({
                allowMultipleItems: !!this.props.multiple,
                callbacks: {
                    dropError: this._onDropError.bind(this),
                    processingDroppedFiles: this.props.onProcessingDroppedFiles || function () {},
                    processingDroppedFilesComplete: this._onProcessingDroppedFilesComplete.bind(this)
                },
                classes: {
                    dropActive: this.props.dropActiveClassName || ''
                },
                dropZoneElements: [dropzoneEl]
            });
        }
    }]);

    return DropzoneElement;
}(_react.Component);

DropzoneElement.propTypes = {
    children: _propTypes2.default.node,
    dropActiveClassName: _propTypes2.default.string,
    element: _propTypes2.default.object,
    multiple: _propTypes2.default.bool,
    onDropError: _propTypes2.default.func,
    onProcessingDroppedFiles: _propTypes2.default.func,
    onProcessingDroppedFilesComplete: _propTypes2.default.func,
    uploader: _propTypes2.default.object.isRequired
};
DropzoneElement.defaultProps = {
    dropActiveClassName: 'react-fine-uploader-dropzone-active'
};


var getElementProps = function getElementProps(actualProps) {
    var actualPropsCopy = _extends({}, actualProps);
    var expectedPropNames = Object.keys(DropzoneElement.propTypes);

    expectedPropNames.forEach(function (expectedPropName) {
        return delete actualPropsCopy[expectedPropName];
    });
    return actualPropsCopy;
};

exports.default = DropzoneElement;

/***/ }),

/***/ 1068:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styleableElement = __webpack_require__(1069);

var _styleableElement2 = _interopRequireDefault(_styleableElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FileInput = function (_Component) {
    _inherits(FileInput, _Component);

    function FileInput() {
        _classCallCheck(this, FileInput);

        var _this = _possibleConstructorReturn(this, (FileInput.__proto__ || Object.getPrototypeOf(FileInput)).call(this));

        _this.state = { key: newKey() };
        _this._onFilesSelected = onFilesSelected.bind(_this);
        return _this;
    }

    _createClass(FileInput, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                text = _props.text,
                uploader = _props.uploader,
                elementProps = _objectWithoutProperties(_props, ['text', 'uploader']); // eslint-disable-line no-unused-vars

            return _react2.default.createElement(
                _styleableElement2.default,
                _extends({}, elementProps, {
                    key: this.state.key,
                    onChange: this._onFilesSelected
                }),
                this.props.children ? this.props.children : _react2.default.createElement(
                    'span',
                    null,
                    elementProps.multiple ? text.selectFiles : text.selectFile
                )
            );
        }
    }, {
        key: '_resetInput',
        value: function _resetInput() {
            this.setState({ key: newKey() });
        }
    }]);

    return FileInput;
}(_react.Component);

FileInput.propTypes = {
    text: _propTypes2.default.shape({
        selectFile: _propTypes2.default.string,
        selectFiles: _propTypes2.default.string
    }),
    uploader: _propTypes2.default.object.isRequired
};
FileInput.defaultProps = {
    text: {
        selectFile: 'Select a File',
        selectFiles: 'Select Files'
    }
};


var onFilesSelected = function onFilesSelected(onChangeEvent) {
    this.props.uploader.methods.addFiles(onChangeEvent.target);
    this._resetInput();
};

var newKey = function newKey() {
    return Date.now();
};

exports.default = FileInput;

/***/ }),

/***/ 1069:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var containerStyle = {
    display: 'inline-block',
    position: 'relative'
};

var inputStyle = {
    bottom: 0,
    cursor: 'pointer',
    height: '100%',
    left: 0,
    margin: 0,
    opacity: 0,
    padding: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    width: '100%'
};

var StyleableFileInput = function StyleableFileInput(_ref) {
    var children = _ref.children,
        className = _ref.className,
        onChange = _ref.onChange,
        params = _objectWithoutProperties(_ref, ['children', 'className', 'onChange']);

    return _react2.default.createElement(
        'div',
        { className: 'react-fine-uploader-file-input-container ' + (className || ''),
            style: containerStyle
        },
        children,
        _react2.default.createElement('input', _extends({}, params, {
            className: 'react-fine-uploader-file-input',
            onChange: onChange,
            style: inputStyle,
            type: 'file'
        }))
    );
};

exports.default = StyleableFileInput;

/***/ }),

/***/ 1070:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filename = function (_Component) {
    _inherits(Filename, _Component);

    function Filename(props) {
        _classCallCheck(this, Filename);

        var _this = _possibleConstructorReturn(this, (Filename.__proto__ || Object.getPrototypeOf(Filename)).call(this, props));

        _this.state = {
            filename: props.uploader.methods.getName(props.id)
        };

        _this._interceptSetName();
        return _this;
    }

    _createClass(Filename, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return nextState.filename !== this.state.filename;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'span',
                { className: 'react-fine-uploader-filename ' + (this.props.className || '') },
                this.state.filename
            );
        }
    }, {
        key: '_interceptSetName',
        value: function _interceptSetName() {
            var _this2 = this;

            var oldSetName = this.props.uploader.methods.setName;

            this.props.uploader.methods.setName = function (id, newName) {
                oldSetName.call(_this2.props.uploader.methods, id, newName);

                if (id === _this2.props.id) {
                    _this2.setState({
                        filename: newName
                    });
                }
            };
        }
    }]);

    return Filename;
}(_react.Component);

Filename.propTypes = {
    id: _propTypes2.default.number.isRequired,
    uploader: _propTypes2.default.object.isRequired
};
exports.default = Filename;

/***/ }),

/***/ 1071:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filesize = function (_Component) {
    _inherits(Filesize, _Component);

    function Filesize(props) {
        _classCallCheck(this, Filesize);

        var _this = _possibleConstructorReturn(this, (Filesize.__proto__ || Object.getPrototypeOf(Filesize)).call(this, props));

        _this.state = {
            size: props.uploader.methods.getSize(props.id)
        };

        // Don't bother to check size at upload time if scaling feature is not enabled.
        var scalingOption = _this.props.uploader.options.scaling;
        if (scalingOption && scalingOption.sizes.length) {
            // If this is a scaled image, the size won't be known until upload time.
            _this._onUploadHandler = function (id) {
                if (id === _this.props.id) {
                    _this.setState({
                        size: _this.props.uploader.methods.getSize(id)
                    });
                }
            };
        }
        return _this;
    }

    _createClass(Filesize, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this._onUploadHandler && this.props.uploader.on('upload', this._onUploadHandler);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this._onUploadHandler && this.props.uploader.off('upload', this._onUploadHandler);
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return nextState.size !== this.state.size || !areUnitsEqual(nextProps.units, this.props.units);
        }
    }, {
        key: 'render',
        value: function render() {
            var size = this.state.size;

            if (size == null || size < 0) {
                return _react2.default.createElement('span', { className: 'react-fine-uploader-filesize ' + (this.props.className || '') });
            }

            var units = this.props.units;

            var _formatSizeAndUnits = formatSizeAndUnits({ size: size, units: units }),
                formattedSize = _formatSizeAndUnits.formattedSize,
                formattedUnits = _formatSizeAndUnits.formattedUnits;

            return _react2.default.createElement(
                'span',
                { className: 'react-fine-uploader-filesize ' + (this.props.className || '') },
                _react2.default.createElement(
                    'span',
                    { className: 'react-fine-uploader-filesize-value' },
                    formattedSize
                ),
                _react2.default.createElement(
                    'span',
                    { className: 'react-fine-uploader-filesize-separator' },
                    ' '
                ),
                _react2.default.createElement(
                    'span',
                    { className: 'react-fine-uploader-filesize-unit' },
                    formattedUnits
                )
            );
        }
    }]);

    return Filesize;
}(_react.Component);

Filesize.propTypes = {
    id: _propTypes2.default.number.isRequired,
    units: _propTypes2.default.shape({
        byte: _propTypes2.default.string,
        kilobyte: _propTypes2.default.string,
        megabyte: _propTypes2.default.string,
        gigabyte: _propTypes2.default.string,
        terabyte: _propTypes2.default.string
    }),
    uploader: _propTypes2.default.object.isRequired
};
Filesize.defaultProps = {
    units: {
        byte: 'B',
        kilobyte: 'KB',
        megabyte: 'MB',
        gigabyte: 'GB',
        terabyte: 'TB'
    }
};


var formatSizeAndUnits = function formatSizeAndUnits(_ref) {
    var size = _ref.size,
        units = _ref.units;

    var formattedSize = void 0,
        formattedUnits = void 0;

    if (size < 1e+3) {
        formattedSize = size;
        formattedUnits = units.byte;
    } else if (size >= 1e+3 && size < 1e+6) {
        formattedSize = (size / 1e+3).toFixed(2);
        formattedUnits = units.kilobyte;
    } else if (size >= 1e+6 && size < 1e+9) {
        formattedSize = (size / 1e+6).toFixed(2);
        formattedUnits = units.megabyte;
    } else if (size >= 1e+9 && size < 1e+12) {
        formattedSize = (size / 1e+9).toFixed(2);
        formattedUnits = units.gigabyte;
    } else {
        formattedSize = (size / 1e+12).toFixed(2);
        formattedUnits = units.terabyte;
    }

    return { formattedSize: formattedSize, formattedUnits: formattedUnits };
};

var areUnitsEqual = function areUnitsEqual(units1, units2) {
    var keys1 = Object.keys(units1);

    if (keys1.length === Object.keys(units2).length) {
        return keys1.every(function (key1) {
            return units1[key1] === units2[key1];
        });
    }

    return false;
};

exports.default = Filesize;

/***/ }),

/***/ 1072:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PauseIcon = function PauseIcon(_ref) {
    var props = _objectWithoutProperties(_ref, []);

    return _react2.default.createElement(
        'svg',
        _extends({ height: '24', fill: '#000000', viewBox: '0 0 24 24', width: '24' }, props),
        _react2.default.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
        _react2.default.createElement('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z' })
    );
};

exports.default = PauseIcon;

/***/ }),

/***/ 1073:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PlayIcon = function PlayIcon(_ref) {
    var props = _objectWithoutProperties(_ref, []);

    return _react2.default.createElement(
        'svg',
        _extends({ height: '24', fill: '#000000', viewBox: '0 0 24 24', width: '24' }, props),
        _react2.default.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
        _react2.default.createElement('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z' })
    );
};

exports.default = PlayIcon;

/***/ }),

/***/ 1074:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var UploadFailIcon = function UploadFailIcon(_ref) {
    var props = _objectWithoutProperties(_ref, []);

    return _react2.default.createElement(
        'svg',
        _extends({ height: '24', fill: '#000000', viewBox: '0 0 24 24', width: '24' }, props),
        _react2.default.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
        _react2.default.createElement('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' })
    );
};

exports.default = UploadFailIcon;

/***/ }),

/***/ 1075:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var UploadIcon = function UploadIcon(_ref) {
    var props = _objectWithoutProperties(_ref, []);

    return _react2.default.createElement(
        'svg',
        _extends({ fill: '#000000', height: '24', viewBox: '0 0 24 24', width: '24' }, props),
        _react2.default.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
        _react2.default.createElement('path', { d: 'M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z' })
    );
};

exports.default = UploadIcon;

/***/ }),

/***/ 1076:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var UploadSuccessIcon = function UploadSuccessIcon(_ref) {
    var props = _objectWithoutProperties(_ref, []);

    return _react2.default.createElement(
        'svg',
        _extends({ height: '24', fill: '#000000', viewBox: '0 0 24 24', width: '24' }, props),
        _react2.default.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
        _react2.default.createElement('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' })
    );
};

exports.default = UploadSuccessIcon;

/***/ }),

/***/ 1077:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var XIcon = function XIcon(_ref) {
    var props = _objectWithoutProperties(_ref, []);

    return _react2.default.createElement(
        'svg',
        _extends({ height: '24', fill: '#000000', viewBox: '0 0 24 24', width: '24' }, props),
        _react2.default.createElement('path', { d: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z' }),
        _react2.default.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
    );
};

exports.default = XIcon;

/***/ }),

/***/ 1078:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PauseResumeButton = function (_Component) {
    _inherits(PauseResumeButton, _Component);

    function PauseResumeButton(props) {
        _classCallCheck(this, PauseResumeButton);

        var _this = _possibleConstructorReturn(this, (PauseResumeButton.__proto__ || Object.getPrototypeOf(PauseResumeButton)).call(this, props));

        _this.state = {
            pausable: false,
            resumable: false
        };

        var statusEnum = props.uploader.qq.status;

        _this._onStatusChange = function (id, oldStatus, newStatus) {
            if (id === _this.props.id && !_this._unmounted) {
                var pausable = newStatus === statusEnum.UPLOADING;
                var resumable = !pausable && newStatus === statusEnum.PAUSED;

                if (!pausable && _this.state.pausable) {
                    _this.setState({ pausable: pausable, resumable: resumable });
                } else if (resumable && !_this.state.resumable) {
                    _this.setState({ pausable: pausable, resumable: resumable });
                } else if (!resumable && _this.state.resumable) {
                    _this.setState({ pausable: pausable, resumable: resumable });
                } else if (newStatus === statusEnum.DELETED || newStatus === statusEnum.CANCELED || newStatus === statusEnum.UPLOAD_SUCCESSFUL) {
                    _this._unregisterStatusChangeHandler();
                    _this._unregisterOnUploadChunkHandler();
                }
            }
        };

        _this._onClick = function () {
            if (_this.state.pausable) {
                _this.props.uploader.methods.pauseUpload(_this.props.id);
            } else if (_this.state.resumable) {
                _this.props.uploader.methods.continueUpload(_this.props.id);
            }
        };

        _this._onUploadChunk = function (id, name, chunkData) {
            if (id === _this.props.id && !_this._unmounted) {
                if (chunkData.partIndex > 0 && !_this.state.pausable) {
                    _this.setState({
                        pausable: true,
                        resumable: false
                    });
                } else if (chunkData.partIndex === 0 && _this.state.pausable) {
                    _this.setState({
                        pausable: false,
                        resumable: false
                    });
                }
            }
        };
        return _this;
    }

    _createClass(PauseResumeButton, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.uploader.on('statusChange', this._onStatusChange);
            this.props.uploader.on('uploadChunk', this._onUploadChunk);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this._unmounted = true;
            this._unregisterOnStatusChangeHandler();
            this._unregisterOnUploadChunkHandler();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                onlyRenderIfEnabled = _props.onlyRenderIfEnabled,
                id = _props.id,
                uploader = _props.uploader,
                elementProps = _objectWithoutProperties(_props, ['onlyRenderIfEnabled', 'id', 'uploader']); // eslint-disable-line no-unused-vars

            if (this.state.pausable || this.state.resumable || !onlyRenderIfEnabled) {
                return _react2.default.createElement(
                    'button',
                    _extends({ 'aria-label': getButtonLabel(this.state),
                        className: 'react-fine-uploader-pause-resume-button ' + getButtonClassName(this.state) + ' ' + (this.props.className || ''),
                        disabled: !this.state.pausable && !this.state.resumable,
                        onClick: this._onClick,
                        type: 'button'
                    }, elementProps),
                    getButtonContent(this.state, this.props)
                );
            }

            return null;
        }
    }, {
        key: '_unregisterOnStatusChangeHandler',
        value: function _unregisterOnStatusChangeHandler() {
            this.props.uploader.off('statusChange', this._onStatusChange);
        }
    }, {
        key: '_unregisterOnUploadChunkHandler',
        value: function _unregisterOnUploadChunkHandler() {
            this.props.uploader.off('uploadChunk', this._onUploadChunk);
        }
    }, {
        key: '_unregisterStatusChangeHandler',
        value: function _unregisterStatusChangeHandler() {
            this.props.uploader.off('statusChange', this._onStatusChange);
        }
    }]);

    return PauseResumeButton;
}(_react.Component);

PauseResumeButton.propTypes = {
    id: _propTypes2.default.number.isRequired,
    onlyRenderIfEnabled: _propTypes2.default.bool,
    pauseChildren: _propTypes2.default.node,
    resumeChildren: _propTypes2.default.node,
    uploader: _propTypes2.default.object.isRequired
};
PauseResumeButton.defaultProps = {
    onlyRenderIfEnabled: true
};


var getButtonClassName = function getButtonClassName(state) {
    var resumable = state.resumable;


    return resumable ? 'react-fine-uploader-resume-button' : 'react-fine-uploader-pause-button';
};

var getButtonContent = function getButtonContent(state, props) {
    var resumable = state.resumable;
    var pauseChildren = props.pauseChildren,
        resumeChildren = props.resumeChildren;


    if (resumable) {
        return resumeChildren || 'Resume';
    }

    return pauseChildren || 'Pause';
};

var getButtonLabel = function getButtonLabel(state) {
    var resumable = state.resumable;


    return resumable ? 'resume' : 'pause';
};

exports.default = PauseResumeButton;

/***/ }),

/***/ 1079:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProgressBar = function (_Component) {
    _inherits(ProgressBar, _Component);

    function ProgressBar(props) {
        _classCallCheck(this, ProgressBar);

        var _this = _possibleConstructorReturn(this, (ProgressBar.__proto__ || Object.getPrototypeOf(ProgressBar)).call(this, props));

        _this.state = {
            bytesUploaded: null,
            hidden: props.hideBeforeStart,
            totalSize: null
        };

        _this._createEventHandlers();
        return _this;
    }

    _createClass(ProgressBar, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this._isTotalProgress) {
                this.props.uploader.on('totalProgress', this._trackProgressEventHandler);
            } else {
                this.props.uploader.on('progress', this._trackProgressEventHandler);
            }

            this.props.uploader.on('statusChange', this._trackStatusEventHandler);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this._unmounted = true;
            this._unregisterEventHandlers();
        }
    }, {
        key: 'render',
        value: function render() {
            var className = this._isTotalProgress ? 'react-fine-uploader-total-progress-bar' : 'react-fine-uploader-file-progress-bar';
            var customContainerClassName = this.props.className ? this.props.className + '-container' : '';
            var percentWidth = this.state.bytesUploaded / this.state.totalSize * 100 || 0;

            return _react2.default.createElement(
                'div',
                { className: className + '-container ' + customContainerClassName,
                    hidden: this.state.hidden
                },
                _react2.default.createElement('div', { 'aria-valuemax': '100',
                    'aria-valuemin': '0',
                    'aria-valuenow': percentWidth,
                    className: className + ' ' + (this.props.className || ''),
                    role: 'progressbar',
                    style: { width: percentWidth + '%' }
                })
            );
        }
    }, {
        key: '_createEventHandlers',
        value: function _createEventHandlers() {
            var _this2 = this;

            if (this._isTotalProgress) {
                this._trackProgressEventHandler = function (bytesUploaded, totalSize) {
                    _this2.setState({ bytesUploaded: bytesUploaded, totalSize: totalSize });
                };
            } else {
                this._trackProgressEventHandler = function (id, name, bytesUploaded, totalSize) {
                    if (id === _this2.props.id) {
                        _this2.setState({ bytesUploaded: bytesUploaded, totalSize: totalSize });
                    }
                };
            }

            var statusEnum = this.props.uploader.qq.status;

            this._trackStatusEventHandler = function (id, oldStatus, newStatus) {
                if (!_this2._unmounted) {
                    if (_this2._isTotalProgress) {
                        if (!_this2.state.hidden && _this2.props.hideOnComplete && isUploadComplete(newStatus, statusEnum) && !_this2.props.uploader.methods.getInProgress()) {

                            _this2.setState({ hidden: true });
                        } else if (_this2.state.hidden && _this2.props.uploader.methods.getInProgress()) {
                            _this2.setState({ hidden: false });
                        }
                    } else if (id === _this2.props.id) {
                        if (_this2.state.hidden && newStatus === statusEnum.UPLOADING) {
                            _this2.setState({ hidden: false });
                        } else if (!_this2.state.hidden && _this2.props.hideOnComplete && isUploadComplete(newStatus, statusEnum)) {
                            _this2.setState({ hidden: true });
                        }
                    }
                }
            };
        }
    }, {
        key: '_unregisterEventHandlers',
        value: function _unregisterEventHandlers() {
            if (this._isTotalProgress) {
                this.props.uploader.off('totalProgress', this._trackProgressEventHandler);
            } else {
                this.props.uploader.off('progress', this._trackProgressEventHandler);
            }

            this.props.uploader.off('statusChange', this._trackStatusEventHandler);
        }
    }, {
        key: '_isTotalProgress',
        get: function get() {
            return this.props.id == null;
        }
    }]);

    return ProgressBar;
}(_react.Component);

ProgressBar.propTypes = {
    id: _propTypes2.default.number,
    hideBeforeStart: _propTypes2.default.bool,
    hideOnComplete: _propTypes2.default.bool,
    uploader: _propTypes2.default.object.isRequired
};
ProgressBar.defaultProps = {
    hideBeforeStart: true,
    hideOnComplete: true
};


var isUploadComplete = function isUploadComplete(statusToCheck, statusEnum) {
    return statusToCheck === statusEnum.UPLOAD_FAILED || statusToCheck === statusEnum.UPLOAD_SUCCESSFUL || statusToCheck === statusEnum.CANCELED;
};

exports.default = ProgressBar;

/***/ }),

/***/ 1080:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RetryButton = function (_Component) {
    _inherits(RetryButton, _Component);

    function RetryButton(props) {
        _classCallCheck(this, RetryButton);

        var _this = _possibleConstructorReturn(this, (RetryButton.__proto__ || Object.getPrototypeOf(RetryButton)).call(this, props));

        _this.state = { retryable: false };

        _this._onComplete = function (id, name, response) {
            if (id === _this.props.id && !_this._unmounted) {
                var retryForbidden = isRetryForbidden(response, _this.props.uploader);

                if (!response.success && !retryForbidden && !_this.state.retryable) {
                    _this.setState({ retryable: true });
                } else if (response.success && _this.state.retryable) {
                    _this.setState({ retryable: false });
                } else if (retryForbidden && _this.state.retryable) {
                    _this.setState({ retryable: false });
                    _this._unregisterEventHandlers();
                }
            }
        };

        _this._onStatusChange = function (id, oldStatus, newStatus) {
            if (id === _this.props.id && !_this._unmounted && newStatus === props.uploader.qq.status.UPLOAD_RETRYING) {
                _this.setState({ retryable: false });
            }
        };

        _this._onClick = function () {
            return _this.props.uploader.methods.retry(_this.props.id);
        };
        return _this;
    }

    _createClass(RetryButton, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.uploader.on('complete', this._onComplete);
            this.props.uploader.on('statusChange', this._onStatusChange);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this._unmounted = true;
            this._unregisterEventHandlers();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                onlyRenderIfRetryable = _props.onlyRenderIfRetryable,
                id = _props.id,
                uploader = _props.uploader,
                elementProps = _objectWithoutProperties(_props, ['children', 'onlyRenderIfRetryable', 'id', 'uploader']); // eslint-disable-line no-unused-vars


            var content = children || 'Retry';

            if (this.state.retryable || !onlyRenderIfRetryable) {
                return _react2.default.createElement(
                    'button',
                    _extends({ 'aria-label': 'retry',
                        className: 'react-fine-uploader-retry-button ' + (this.props.className || ''),
                        disabled: !this.state.retryable,
                        onClick: this.state.retryable && this._onClick,
                        type: 'button'
                    }, elementProps),
                    content
                );
            }

            return null;
        }
    }, {
        key: '_unregisterEventHandlers',
        value: function _unregisterEventHandlers() {
            this.props.uploader.off('complete', this._onComplete);
            this.props.uploader.off('statusChange', this._onStatusChange);
        }
    }]);

    return RetryButton;
}(_react.Component);

RetryButton.propTypes = {
    children: _propTypes2.default.node,
    id: _propTypes2.default.number.isRequired,
    onlyRenderIfRetryable: _propTypes2.default.bool,
    uploader: _propTypes2.default.object.isRequired
};
RetryButton.defaultProps = {
    onlyRenderIfRetryable: true
};


var isRetryForbidden = function isRetryForbidden(response, uploader) {
    var preventRetryResponseProperty = uploader.options.retry && uploader.options.retry.preventRetryResponseProperty || 'preventRetry';

    return !!response[preventRetryResponseProperty];
};

exports.default = RetryButton;

/***/ }),

/***/ 1081:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _objectAssign = __webpack_require__(15);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Status = function (_Component) {
    _inherits(Status, _Component);

    function Status(props) {
        _classCallCheck(this, Status);

        var _this = _possibleConstructorReturn(this, (Status.__proto__ || Object.getPrototypeOf(Status)).call(this, props));

        _this.state = {
            status: '',
            text: (0, _objectAssign2.default)({}, Status.defaultProps.text, props.text || {})
        };

        _this._onStatusChange = function (id, oldStatus, newStatus) {
            if (id === _this.props.id && !_this._unmounted) {
                var newStatusToDisplay = getStatusToDisplay({
                    displayMap: _this.state.text,
                    status: newStatus
                });

                newStatusToDisplay && _this.setState({ status: newStatusToDisplay });
            }
        };
        return _this;
    }

    _createClass(Status, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.uploader.on('statusChange', this._onStatusChange);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.text) {
                this.setState({
                    text: (0, _objectAssign2.default)({}, this.state.text, nextProps.text)
                });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this._unmounted = true;
            this._unregisterStatusChangeHandler();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'span',
                { className: 'react-fine-uploader-status ' + this.props.className },
                this.state.status
            );
        }
    }, {
        key: '_unregisterStatusChangeHandler',
        value: function _unregisterStatusChangeHandler() {
            this.props.uploader.off('statusChange', this._onStatusChange);
        }
    }]);

    return Status;
}(_react.Component);

Status.propTypes = {
    id: _propTypes2.default.number.isRequired,
    className: _propTypes2.default.string,
    text: _propTypes2.default.shape({
        deleting: _propTypes2.default.string,
        paused: _propTypes2.default.string,
        queued: _propTypes2.default.string,
        retrying_upload: _propTypes2.default.string,
        submitting: _propTypes2.default.string,
        uploading: _propTypes2.default.string,
        upload_failed: _propTypes2.default.string,
        upload_successful: _propTypes2.default.string
    }),
    uploader: _propTypes2.default.object.isRequired
};
Status.defaultProps = {
    className: '',
    text: {
        deleting: 'Deleting...',
        paused: 'Paused',
        queued: 'Queued',
        retrying_upload: 'Retrying...',
        submitting: 'Submitting...',
        uploading: 'Uploading...',
        upload_failed: 'Failed',
        upload_successful: 'Completed'
    }
};


var getStatusToDisplay = function getStatusToDisplay(_ref) {
    var displayMap = _ref.displayMap,
        status = _ref.status;

    var key = void 0;

    if (status.indexOf(' ') > 0) {
        var statusParts = status.split(' ');

        key = statusParts[0] + '_' + statusParts[1];
    } else {
        key = status;
    }

    return displayMap[key];
};

exports.default = Status;

/***/ }),

/***/ 1082:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.waitingStatus = exports.notAvailableStatus = exports.defaultMaxSize = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _placeholder = __webpack_require__(1084);

var _placeholder2 = _interopRequireDefault(_placeholder);

var _notAvailablePlaceholder = __webpack_require__(1083);

var _notAvailablePlaceholder2 = _interopRequireDefault(_notAvailablePlaceholder);

var _waitingPlaceholder = __webpack_require__(1085);

var _waitingPlaceholder2 = _interopRequireDefault(_waitingPlaceholder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultMaxSize = exports.defaultMaxSize = 120;
var notAvailableStatus = exports.notAvailableStatus = 'not-available';
var waitingStatus = exports.waitingStatus = 'waiting';

var Thumbnail = function (_Component) {
    _inherits(Thumbnail, _Component);

    function Thumbnail() {
        _classCallCheck(this, Thumbnail);

        var _this = _possibleConstructorReturn(this, (Thumbnail.__proto__ || Object.getPrototypeOf(Thumbnail)).call(this));

        _this.state = {
            drawComplete: false
        };
        return _this;
    }

    _createClass(Thumbnail, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.props.uploader.methods.drawThumbnail(this.props.id, this._canvas, this.props.maxSize, this.props.fromServer, this.props.customResizer).then(function () {
                _this2.setState({
                    drawComplete: true,
                    success: true
                });
            }, function () {
                _this2.setState({
                    drawComplete: true,
                    success: false
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var customContainerClassName = this.props.className && this.props.className + '-container';

            return _react2.default.createElement(
                'span',
                { className: 'react-fine-uploader-thumbnail-container ' + (customContainerClassName || '') },
                _react2.default.createElement('canvas', { className: 'react-fine-uploader-thumbnail ' + (this.props.className || ''),
                    hidden: !this.state.drawComplete || this._failure,
                    ref: function ref(component) {
                        return _this3._canvas = component;
                    }
                }),
                this._maybePlaceholder
            );
        }
    }, {
        key: '_failure',
        get: function get() {
            return this.state.drawComplete && !this.state.success;
        }
    }, {
        key: '_maybePlaceholder',
        get: function get() {
            if (this._failure) {
                var notAvailableImage = _react2.default.createElement(_notAvailablePlaceholder2.default, { maxSize: this.props.maxSize });

                return _react2.default.createElement(_placeholder2.default, { className: 'react-fine-uploader-thumbnail ' + (this.props.className || ''),
                    image: this.props.notAvailablePlaceholder || notAvailableImage,
                    size: this.props.maxSize,
                    status: notAvailableStatus
                });
            } else if (!this.state.drawComplete) {
                var waitingImage = _react2.default.createElement(_waitingPlaceholder2.default, { maxSize: this.props.maxSize });

                return _react2.default.createElement(_placeholder2.default, { className: 'react-fine-uploader-thumbnail ' + (this.props.className || ''),
                    image: this.props.waitingPlaceholder || waitingImage,
                    size: this.props.maxSize,
                    status: waitingStatus
                });
            }

            return _react2.default.createElement('span', null);
        }
    }]);

    return Thumbnail;
}(_react.Component);

Thumbnail.propTypes = {
    customResizer: _propTypes2.default.func,
    fromServer: _propTypes2.default.bool,
    id: _propTypes2.default.number.isRequired,
    maxSize: _propTypes2.default.number,
    notAvailablePlaceholder: _propTypes2.default.element,
    uploader: _propTypes2.default.object.isRequired,
    waitingPlaceholder: _propTypes2.default.element
};
Thumbnail.defaultProps = {
    maxSize: defaultMaxSize
};
exports.default = Thumbnail;

/***/ }),

/***/ 1083:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotAvailablePlaceholder = function (_Component) {
    _inherits(NotAvailablePlaceholder, _Component);

    function NotAvailablePlaceholder() {
        _classCallCheck(this, NotAvailablePlaceholder);

        return _possibleConstructorReturn(this, (NotAvailablePlaceholder.__proto__ || Object.getPrototypeOf(NotAvailablePlaceholder)).apply(this, arguments));
    }

    _createClass(NotAvailablePlaceholder, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'svg',
                { height: this.props.maxSize, width: this.props.maxSize, viewBox: '0 0 252 300', version: '1.1' },
                _react2.default.createElement('path', { fill: '#ffffff', d: ' M 0.00 0.00 L 252.00 0.00 L 252.00 300.00 L 0.00 300.00 L 0.00 279.07 C 0.21 281.56 2.43 283.73 4.98 283.51 C 54.33 283.52 103.68 283.47 153.03 283.53 C 163.75 293.62 178.22 299.86 193.02 299.75 C 209.68 300.16 226.27 292.72 237.25 280.22 C 246.51 269.83 252.00 255.97 251.75 242.00 C 252.22 227.72 246.68 213.46 237.19 202.83 C 236.46 201.92 235.43 201.19 235.01 200.08 C 234.92 158.48 235.13 116.87 234.91 75.28 C 215.93 56.82 196.64 38.69 177.62 20.28 C 170.86 14.13 164.58 7.44 157.65 1.49 C 106.73 1.51 55.82 1.49 4.90 1.50 C 2.72 1.29 1.25 3.08 0.00 4.58 L 0.00 0.00 Z' }),
                _react2.default.createElement('path', { fill: '#525352', d: ' M 0.00 4.58 C 1.25 3.08 2.72 1.29 4.90 1.50 C 55.82 1.49 106.73 1.51 157.65 1.49 C 164.58 7.44 170.86 14.13 177.62 20.28 C 196.64 38.69 215.93 56.82 234.91 75.28 C 235.13 116.87 234.92 158.48 235.01 200.08 C 235.43 201.19 236.46 201.92 237.19 202.83 C 246.68 213.46 252.22 227.72 251.75 242.00 C 252.00 255.97 246.51 269.83 237.25 280.22 C 226.27 292.72 209.68 300.16 193.02 299.75 C 178.22 299.86 163.75 293.62 153.03 283.53 C 103.68 283.47 54.33 283.52 4.98 283.51 C 2.43 283.73 0.21 281.56 0.00 279.07 L 0.00 4.58 Z' }),
                _react2.default.createElement('path', { fill: '#bababa', d: ' M 18.27 19.97 C 19.84 19.39 21.63 19.90 23.28 19.79 C 21.74 21.53 19.73 22.95 18.62 25.03 C 18.50 28.06 18.60 31.09 18.69 34.11 C 23.87 29.67 28.43 24.52 33.33 19.77 C 37.67 19.77 42.01 19.65 46.34 19.84 C 37.18 29.45 27.59 38.65 18.27 48.11 C 18.40 38.72 17.69 29.36 18.27 19.97 Z' }),
                _react2.default.createElement('path', { fill: '#ffffff', d: ' M 23.28 19.79 C 26.63 19.71 29.98 19.75 33.33 19.77 C 28.43 24.52 23.87 29.67 18.69 34.11 C 18.60 31.09 18.50 28.06 18.62 25.03 C 19.73 22.95 21.74 21.53 23.28 19.79 Z' }),
                _react2.default.createElement('path', { fill: '#ffffff', d: ' M 46.34 19.84 C 49.71 19.63 53.13 19.80 56.52 19.77 C 43.83 32.57 31.13 45.37 18.25 57.99 C 18.26 54.69 18.22 51.40 18.27 48.11 C 27.59 38.65 37.18 29.45 46.34 19.84 Z' }),
                _react2.default.createElement('path', { fill: '#bababa', d: ' M 56.52 19.77 C 60.83 19.74 65.14 19.71 69.45 19.79 C 52.52 37.03 35.29 53.98 18.27 71.12 C 18.23 66.74 18.25 62.36 18.25 57.99 C 31.13 45.37 43.83 32.57 56.52 19.77 Z' }),
                _react2.default.createElement('path', { fill: '#ffffff', d: ' M 69.45 19.79 C 72.81 19.70 76.17 19.76 79.53 19.77 C 59.20 40.32 38.60 60.61 18.28 81.17 C 18.23 77.82 18.23 74.47 18.27 71.12 C 35.29 53.98 52.52 37.03 69.45 19.79 Z' }),
                _react2.default.createElement('path', { fill: '#bababa', d: ' M 79.53 19.77 C 83.77 19.95 88.19 19.29 92.32 20.11 C 67.83 44.98 43.05 69.60 18.30 94.22 C 18.22 89.87 18.23 85.52 18.28 81.17 C 38.60 60.61 59.20 40.32 79.53 19.77 Z' }),
                _react2.default.createElement('path', { fill: '#ffffff', d: ' M 92.32 20.11 L 92.70 19.72 C 96.04 19.80 99.39 19.71 102.74 19.77 C 74.71 48.09 46.39 76.13 18.28 104.37 C 18.25 100.98 18.20 97.60 18.30 94.22 C 43.05 69.60 67.83 44.98 92.32 20.11 Z' }),
                _react2.default.createElement('path', { fill: '#bababa', d: ' M 102.74 19.77 C 106.92 19.93 111.25 19.32 115.34 20.09 C 112.00 23.83 108.31 27.23 104.81 30.81 C 75.95 59.59 47.26 88.53 18.30 117.21 C 18.22 112.93 18.23 108.64 18.28 104.37 C 46.39 76.13 74.71 48.09 102.74 19.77 Z' }),
                _react2.default.createElement('path', { fill: '#ffffff', d: ' M 115.34 20.09 L 115.69 19.72 C 119.04 19.80 122.38 19.71 125.73 19.77 C 90.04 55.76 54.06 91.46 18.28 127.37 C 18.25 123.98 18.19 120.59 18.30 117.21 C 47.26 88.53 75.95 59.59 104.81 30.81 C 108.31 27.23 112.00 23.83 115.34 20.09 Z' }),
                _react2.default.createElement('path', { fill: '#bababa', d: ' M 125.73 19.77 C 129.88 20.06 134.43 19.06 138.31 20.29 C 136.70 22.34 134.76 24.09 132.93 25.94 C 102.10 56.77 71.27 87.60 40.44 118.43 C 33.04 125.71 25.89 133.24 18.33 140.34 C 18.18 136.02 18.25 131.69 18.28 127.37 C 54.06 91.46 90.04 55.76 125.73 19.77 Z' }),
                _react2.default.createElement('path', { fill: '#ffffff', d: ' M 138.31 20.29 L 138.78 19.74 C 142.18 19.77 145.58 19.73 148.97 19.77 C 105.53 63.48 61.86 106.99 18.27 150.56 C 18.28 147.15 18.15 143.74 18.33 140.34 C 25.89 133.24 33.04 125.71 40.44 118.43 C 71.27 87.60 102.10 56.77 132.93 25.94 C 134.76 24.09 136.70 22.34 138.31 20.29 Z' }),
                _react2.default.createElement('path', { fill: '#bababa', d: ' M 148.97 19.77 C 149.41 19.77 150.29 19.77 150.73 19.77 C 150.76 23.59 150.76 27.40 150.74 31.21 C 109.55 72.22 68.53 113.39 27.41 154.46 C 24.39 157.43 21.49 160.54 18.32 163.36 C 18.18 159.09 18.26 154.82 18.27 150.56 C 61.86 106.99 105.53 63.48 148.97 19.77 Z' }),
                _react2.default.createElement('path', { fill: '#ffffff', d: ' M 27.41 154.46 C 68.53 113.39 109.55 72.22 150.74 31.21 C 150.76 34.49 150.75 37.78 150.75 41.06 C 106.64 85.27 62.49 129.44 18.26 173.53 C 18.28 170.14 18.16 166.74 18.32 163.36 C 21.49 160.54 24.39 157.43 27.41 154.46 Z' }),
                _react2.default.createElement('path', { fill: '#bababa', d: ' M 18.26 173.53 C 62.49 129.44 106.64 85.27 150.75 41.06 C 150.74 45.52 150.78 49.99 150.73 54.45 C 106.53 98.56 62.38 142.72 18.26 186.92 C 18.25 182.46 18.23 177.99 18.26 173.53 Z' }),
                _react2.default.createElement('path', { fill: '#ffffff', d: ' M 18.26 186.92 C 62.38 142.72 106.53 98.56 150.73 54.45 C 150.69 57.78 150.90 61.14 150.64 64.46 C 149.89 65.10 149.15 65.76 148.44 66.44 C 105.03 109.79 61.71 153.23 18.27 196.56 C 18.23 193.34 18.24 190.13 18.26 186.92 Z' }),
                _react2.default.createElement('path', { fill: '#bababa', d: ' M 148.44 66.44 C 149.15 65.76 149.89 65.10 150.64 64.46 C 150.87 68.77 150.72 73.11 150.73 77.43 C 106.56 121.58 62.35 165.71 18.26 209.94 C 18.26 205.48 18.22 201.01 18.27 196.56 C 61.71 153.23 105.03 109.79 148.44 66.44 Z' }),
                _react2.default.createElement('path', { fill: '#ffffff', d: ' M 18.26 209.94 C 62.35 165.71 106.56 121.58 150.73 77.43 C 150.51 80.16 150.59 83.44 153.47 84.78 C 108.27 129.65 63.42 174.88 18.26 219.80 C 18.24 216.51 18.24 213.22 18.26 209.94 Z' }),
                _react2.default.createElement('path', { fill: '#bababa', d: ' M 153.47 84.78 C 157.68 85.24 161.92 84.84 166.14 85.07 C 117.01 134.57 67.55 183.74 18.27 233.09 C 18.24 228.66 18.24 224.23 18.26 219.80 C 63.42 174.88 108.27 129.65 153.47 84.78 Z' }),
                _react2.default.createElement('path', { fill: '#ffffff', d: ' M 166.14 85.07 C 169.49 84.92 172.85 85.00 176.20 85.04 C 123.43 137.48 71.02 190.31 18.26 242.77 C 18.25 239.54 18.22 236.32 18.27 233.09 C 67.55 183.74 117.01 134.57 166.14 85.07 Z' }),
                _react2.default.createElement('path', { fill: '#bababa', d: ' M 176.20 85.04 C 180.51 84.97 184.82 84.95 189.12 85.08 C 132.35 142.26 75.19 199.07 18.27 256.11 C 18.24 251.66 18.24 247.22 18.26 242.77 C 71.02 190.31 123.43 137.48 176.20 85.04 Z' }),
                _react2.default.createElement('path', { fill: '#ffffff', d: ' M 189.12 85.08 C 192.54 84.91 195.97 85.01 199.39 85.03 C 142.78 141.53 86.28 198.13 29.71 254.67 C 26.34 258.11 22.79 261.40 19.56 264.98 L 18.98 265.60 C 17.33 263.02 18.67 259.18 18.27 256.11 C 75.19 199.07 132.35 142.26 189.12 85.08 Z' }),
                _react2.default.createElement('path', { fill: '#bababa', d: ' M 199.39 85.03 C 203.66 85.00 207.95 84.90 212.22 85.11 C 198.55 99.45 184.25 113.18 170.34 127.28 C 124.40 173.28 78.35 219.17 32.48 265.23 C 28.18 265.12 23.80 265.58 19.56 264.98 C 22.79 261.40 26.34 258.11 29.71 254.67 C 86.28 198.13 142.78 141.53 199.39 85.03 Z' }),
                _react2.default.createElement('path', { fill: '#ffffff', d: ' M 212.22 85.11 C 213.79 84.88 215.40 85.02 216.98 85.01 C 216.96 86.94 217.14 88.89 216.87 90.80 C 201.36 105.62 186.47 121.10 171.20 136.17 C 139.03 168.35 106.85 200.53 74.67 232.70 C 64.06 243.45 53.17 253.94 42.73 264.85 L 42.33 265.28 C 39.05 265.20 35.76 265.29 32.48 265.23 C 78.35 219.17 124.40 173.28 170.34 127.28 C 184.25 113.18 198.55 99.45 212.22 85.11 Z' }),
                _react2.default.createElement('path', { fill: '#bababa', d: ' M 171.20 136.17 C 186.47 121.10 201.36 105.62 216.87 90.80 C 217.12 95.07 216.98 99.35 216.97 103.62 C 163.19 157.54 109.22 211.27 55.49 265.23 C 51.26 265.02 46.80 265.76 42.73 264.85 C 53.17 253.94 64.06 243.45 74.67 232.70 C 106.85 200.53 139.03 168.35 171.20 136.17 Z' }),
                _react2.default.createElement('path', { fill: '#ffffff', d: ' M 55.49 265.23 C 109.22 211.27 163.19 157.54 216.97 103.62 C 216.98 107.04 217.09 110.47 216.92 113.89 C 169.72 160.66 122.91 207.83 75.87 254.76 C 72.45 258.24 68.88 261.57 65.61 265.19 C 62.24 265.32 58.86 265.23 55.49 265.23 Z' }),
                _react2.default.createElement('path', { fill: '#bababa', d: ' M 75.87 254.76 C 122.91 207.83 169.72 160.66 216.92 113.89 C 217.06 118.13 217.01 122.37 216.97 126.61 C 170.87 172.88 124.54 218.92 78.49 265.23 C 74.20 265.25 69.90 265.31 65.61 265.19 C 68.88 261.57 72.45 258.24 75.87 254.76 Z' }),
                _react2.default.createElement('path', { fill: '#ffffff', d: ' M 78.49 265.23 C 124.54 218.92 170.87 172.88 216.97 126.61 C 217.00 130.02 217.07 133.43 216.94 136.83 C 199.92 153.51 183.23 170.52 166.31 187.30 C 164.81 188.76 163.34 190.26 162.10 191.94 C 159.60 194.48 156.45 196.32 153.93 198.86 C 150.05 202.08 147.44 206.51 143.95 210.08 C 140.61 212.64 137.88 215.88 134.84 218.78 C 119.44 234.28 103.85 249.59 88.57 265.20 C 85.21 265.30 81.85 265.23 78.49 265.23 Z' }),
                _react2.default.createElement('path', { fill: '#bababa', d: ' M 166.31 187.30 C 183.23 170.52 199.92 153.51 216.94 136.83 C 217.03 141.15 217.04 145.47 216.95 149.78 C 205.65 161.41 194.02 172.72 182.63 184.27 C 175.92 185.62 169.42 188.04 163.54 191.58 C 163.18 191.67 162.46 191.85 162.10 191.94 C 163.34 190.26 164.81 188.76 166.31 187.30 Z' }),
                _react2.default.createElement('path', { fill: '#ffffff', d: ' M 182.63 184.27 C 194.02 172.72 205.65 161.41 216.95 149.78 C 217.02 153.17 217.03 156.56 216.97 159.95 C 209.19 167.66 201.42 175.39 193.74 183.20 C 190.01 183.32 186.30 183.64 182.63 184.27 Z' }),
                _react2.default.createElement('path', { fill: '#bababa', d: ' M 193.74 183.20 C 201.42 175.39 209.19 167.66 216.97 159.95 C 217.01 164.23 217.04 168.51 216.96 172.80 C 213.60 176.97 208.68 179.97 206.09 184.65 C 202.04 183.69 197.88 183.37 193.74 183.20 Z' }),
                _react2.default.createElement('path', { fill: '#ffffff', d: ' M 206.09 184.65 C 208.68 179.97 213.60 176.97 216.96 172.80 C 216.97 176.81 217.19 180.83 216.73 184.83 L 215.42 184.54 C 215.53 185.11 215.73 186.25 215.83 186.82 C 212.45 186.71 209.40 185.16 206.09 184.65 Z' }),
                _react2.default.createElement('path', { fill: '#bababa', d: ' M 134.84 218.78 C 137.88 215.88 140.61 212.64 143.95 210.08 C 143.87 210.46 143.70 211.23 143.62 211.61 C 140.00 217.58 137.54 224.21 136.28 231.07 L 136.28 231.07 C 135.42 231.60 134.62 232.21 133.92 232.93 C 123.19 243.72 112.39 254.43 101.67 265.23 C 97.30 265.26 92.93 265.29 88.57 265.20 C 103.85 249.59 119.44 234.28 134.84 218.78 Z' }),
                _react2.default.createElement('path', { fill: '#ffffff', d: ' M 133.92 232.93 C 134.62 232.21 135.42 231.60 136.28 231.07 C 135.60 234.54 135.44 238.06 135.44 241.58 C 127.40 249.32 119.58 257.30 111.72 265.22 C 108.37 265.29 105.02 265.25 101.67 265.23 C 112.39 254.43 123.19 243.72 133.92 232.93 Z' }),
                _react2.default.createElement('path', { fill: '#ffffff', d: ' M 162.75 232.54 C 183.33 232.46 203.91 232.49 224.48 232.52 C 224.51 238.51 224.52 244.49 224.48 250.48 C 203.91 250.50 183.33 250.54 162.76 250.47 C 162.74 244.49 162.75 238.51 162.75 232.54 Z' }),
                _react2.default.createElement('path', { fill: '#bababa', d: ' M 111.72 265.22 C 119.58 257.30 127.40 249.32 135.44 241.58 C 135.36 245.55 135.82 249.48 136.51 253.39 C 132.54 257.31 128.60 261.27 124.66 265.23 C 120.35 265.27 116.03 265.28 111.72 265.22 Z' }),
                _react2.default.createElement('path', { fill: '#ffffff', d: ' M 124.66 265.23 C 128.60 261.27 132.54 257.31 136.51 253.39 C 136.91 256.83 139.27 260.12 138.36 263.61 L 139.68 263.56 C 139.81 263.80 140.07 264.30 140.20 264.54 C 138.21 264.75 136.08 264.17 134.27 265.28 C 131.07 265.21 127.86 265.29 124.66 265.23 Z' })
            );
        }
    }]);

    return NotAvailablePlaceholder;
}(_react.Component);

NotAvailablePlaceholder.propTypes = {
    maxSize: _propTypes2.default.number
};
exports.default = NotAvailablePlaceholder;

/***/ }),

/***/ 1084:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Placeholder = function Placeholder(_ref) {
    var className = _ref.className,
        image = _ref.image,
        size = _ref.size,
        status = _ref.status;

    var style = {
        display: 'inline-block',
        maxHeight: size,
        maxWidth: size
    };

    return _react2.default.createElement(
        'div',
        { className: 'react-fine-uploader-thumbnail-placeholder react-fine-uploader-thumbnail-' + status + ' ' + (className || ''),
            style: style
        },
        image
    );
};

Placeholder.propTypes = {
    image: _propTypes2.default.node.isRequired,
    size: _propTypes2.default.number.isRequired,
    status: _propTypes2.default.string.isRequired
};

exports.default = Placeholder;

/***/ }),

/***/ 1085:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WaitingPlaceholder = function (_Component) {
    _inherits(WaitingPlaceholder, _Component);

    function WaitingPlaceholder() {
        _classCallCheck(this, WaitingPlaceholder);

        return _possibleConstructorReturn(this, (WaitingPlaceholder.__proto__ || Object.getPrototypeOf(WaitingPlaceholder)).apply(this, arguments));
    }

    _createClass(WaitingPlaceholder, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'svg',
                { height: this.props.maxSize, width: this.props.maxSize, viewBox: '0 0 251 300', version: '1.1' },
                _react2.default.createElement('path', { fill: '#ffffff', d: ' M 0.00 0.00 L 5.50 0.00 C 3.57 0.58 1.55 1.87 1.38 4.07 C 1.02 9.12 1.37 14.18 1.25 19.24 C 3.20 19.24 5.16 19.25 7.11 19.25 C 7.40 28.45 9.49 37.52 12.75 46.10 C 18.73 61.86 27.86 76.33 38.93 89.01 C 51.26 103.08 66.33 115.05 83.64 122.38 C 92.38 125.91 101.16 130.29 107.51 137.46 C 111.25 141.69 113.80 147.59 112.27 153.28 C 110.17 161.20 103.40 166.70 96.69 170.79 C 89.30 175.47 80.72 177.72 73.23 182.19 C 49.26 195.79 30.23 217.29 17.84 241.76 C 11.88 253.74 7.50 266.77 7.12 280.25 C 5.17 280.24 3.21 280.25 1.25 280.25 C 1.33 285.16 1.08 290.08 1.33 294.98 C 1.27 297.00 2.89 298.48 4.63 299.18 L 3.28 300.00 L 0.00 300.00 L 0.00 0.00 Z' }),
                _react2.default.createElement('path', { fill: '#525352', d: ' M 5.50 0.00 L 247.37 0.00 C 248.74 1.06 250.50 2.15 250.61 4.09 C 250.98 9.13 250.63 14.20 250.74 19.25 C 248.78 19.25 246.83 19.25 244.88 19.24 C 165.62 19.26 86.37 19.25 7.11 19.25 C 5.16 19.25 3.20 19.24 1.25 19.24 C 1.37 14.18 1.02 9.12 1.38 4.07 C 1.55 1.87 3.57 0.58 5.50 0.00 Z' }),
                _react2.default.createElement('path', { fill: '#ffffff', d: ' M 247.37 0.00 L 251.00 0.00 L 251.00 280.03 C 248.96 280.02 246.91 280.00 244.88 280.00 C 244.45 266.87 240.25 254.16 234.50 242.45 C 221.25 215.98 200.24 192.80 173.59 179.46 C 165.71 175.90 157.44 172.91 150.54 167.53 C 144.88 163.36 139.54 157.36 139.33 149.97 C 139.30 143.07 143.94 137.23 149.09 133.12 C 153.86 129.29 159.25 126.29 164.85 123.87 C 192.12 113.26 214.12 91.86 229.08 67.08 C 237.62 52.52 244.37 36.33 244.88 19.24 C 246.83 19.25 248.78 19.25 250.74 19.25 C 250.63 14.20 250.98 9.13 250.61 4.09 C 250.50 2.15 248.74 1.06 247.37 0.00 Z' }),
                _react2.default.createElement('path', { fill: '#bababa', d: ' M 7.11 19.25 C 86.37 19.25 165.62 19.26 244.88 19.24 C 244.37 36.33 237.62 52.52 229.08 67.08 C 214.12 91.86 192.12 113.26 164.85 123.87 C 159.25 126.29 153.86 129.29 149.09 133.12 C 143.94 137.23 139.30 143.07 139.33 149.97 C 139.54 157.36 144.88 163.36 150.54 167.53 C 157.44 172.91 165.71 175.90 173.59 179.46 C 200.24 192.80 221.25 215.98 234.50 242.45 C 240.25 254.16 244.45 266.87 244.88 280.00 C 246.91 280.00 248.96 280.02 251.00 280.03 L 251.00 300.00 L 3.28 300.00 L 4.63 299.18 C 32.74 298.76 60.88 299.12 88.99 299.00 C 141.33 298.98 193.67 299.04 246.01 298.97 C 248.39 299.36 250.34 297.28 250.43 295.00 C 250.84 290.16 250.49 285.30 250.54 280.46 C 235.08 280.04 219.61 280.35 204.14 280.24 C 204.25 271.94 200.83 262.74 192.78 259.18 C 179.36 253.86 164.31 255.95 150.76 251.10 C 146.18 249.52 142.78 245.77 140.47 241.63 C 136.29 234.23 134.05 225.89 132.66 217.56 C 129.77 193.84 127.20 169.41 132.91 145.89 C 135.79 134.35 141.55 122.37 152.34 116.37 C 169.77 109.21 183.92 95.49 193.57 79.51 C 199.34 69.89 203.67 59.09 204.10 47.77 C 151.96 47.74 99.82 47.74 47.69 47.77 C 48.53 64.72 57.24 80.21 67.92 92.97 C 76.39 102.82 86.86 111.13 98.92 116.11 C 109.46 121.51 115.24 132.92 118.35 143.87 C 124.19 165.77 122.50 188.78 119.91 211.03 C 119.06 220.86 116.79 230.67 112.47 239.57 C 109.94 244.79 105.92 249.73 100.15 251.43 C 87.83 255.43 74.51 254.35 62.11 258.03 C 57.61 259.31 53.55 262.18 51.19 266.26 C 48.40 270.33 47.98 275.36 47.70 280.13 C 34.18 280.41 20.65 280.18 7.12 280.25 C 7.50 266.77 11.88 253.74 17.84 241.76 C 30.23 217.29 49.26 195.79 73.23 182.19 C 80.72 177.72 89.30 175.47 96.69 170.79 C 103.40 166.70 110.17 161.20 112.27 153.28 C 113.80 147.59 111.25 141.69 107.51 137.46 C 101.16 130.29 92.38 125.91 83.64 122.38 C 66.33 115.05 51.26 103.08 38.93 89.01 C 27.86 76.33 18.73 61.86 12.75 46.10 C 9.49 37.52 7.40 28.45 7.11 19.25 Z' }),
                _react2.default.createElement('path', { fill: '#525352', d: ' M 47.69 47.77 C 99.82 47.74 151.96 47.74 204.10 47.77 C 203.67 59.09 199.34 69.89 193.57 79.51 C 183.92 95.49 169.77 109.21 152.34 116.37 C 141.55 122.37 135.79 134.35 132.91 145.89 C 127.20 169.41 129.77 193.84 132.66 217.56 C 134.05 225.89 136.29 234.23 140.47 241.63 C 142.78 245.77 146.18 249.52 150.76 251.10 C 164.31 255.95 179.36 253.86 192.78 259.18 C 200.83 262.74 204.25 271.94 204.14 280.24 C 219.61 280.35 235.08 280.04 250.54 280.46 C 250.49 285.30 250.84 290.16 250.43 295.00 C 250.34 297.28 248.39 299.36 246.01 298.97 C 193.67 299.04 141.33 298.98 88.99 299.00 C 60.88 299.12 32.74 298.76 4.63 299.18 C 2.89 298.48 1.27 297.00 1.33 294.98 C 1.08 290.08 1.33 285.16 1.25 280.25 C 3.21 280.25 5.17 280.24 7.12 280.25 C 20.65 280.18 34.18 280.41 47.70 280.13 C 47.98 275.36 48.40 270.33 51.19 266.26 C 53.55 262.18 57.61 259.31 62.11 258.03 C 74.51 254.35 87.83 255.43 100.15 251.43 C 105.92 249.73 109.94 244.79 112.47 239.57 C 116.79 230.67 119.06 220.86 119.91 211.03 C 122.50 188.78 124.19 165.77 118.35 143.87 C 115.24 132.92 109.46 121.51 98.92 116.11 C 86.86 111.13 76.39 102.82 67.92 92.97 C 57.24 80.21 48.53 64.72 47.69 47.77 Z' })
            );
        }
    }]);

    return WaitingPlaceholder;
}(_react.Component);

WaitingPlaceholder.propTypes = {
    maxSize: _propTypes2.default.number
};
exports.default = WaitingPlaceholder;

/***/ }),

/***/ 1086:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TransitionGroup = __webpack_require__(1088);

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _CSSTransitionGroupChild = __webpack_require__(1087);

var _CSSTransitionGroupChild2 = _interopRequireDefault(_CSSTransitionGroupChild);

var _PropTypes = __webpack_require__(1057);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  transitionName: _PropTypes.nameShape.isRequired,

  transitionAppear: _propTypes2.default.bool,
  transitionEnter: _propTypes2.default.bool,
  transitionLeave: _propTypes2.default.bool,
  transitionAppearTimeout: (0, _PropTypes.transitionTimeout)('Appear'),
  transitionEnterTimeout: (0, _PropTypes.transitionTimeout)('Enter'),
  transitionLeaveTimeout: (0, _PropTypes.transitionTimeout)('Leave')
};

var defaultProps = {
  transitionAppear: false,
  transitionEnter: true,
  transitionLeave: true
};

var CSSTransitionGroup = function (_React$Component) {
  _inherits(CSSTransitionGroup, _React$Component);

  function CSSTransitionGroup() {
    var _temp, _this, _ret;

    _classCallCheck(this, CSSTransitionGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this._wrapChild = function (child) {
      return _react2.default.createElement(_CSSTransitionGroupChild2.default, {
        name: _this.props.transitionName,
        appear: _this.props.transitionAppear,
        enter: _this.props.transitionEnter,
        leave: _this.props.transitionLeave,
        appearTimeout: _this.props.transitionAppearTimeout,
        enterTimeout: _this.props.transitionEnterTimeout,
        leaveTimeout: _this.props.transitionLeaveTimeout
      }, child);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // We need to provide this childFactory so that
  // ReactCSSTransitionGroupChild can receive updates to name, enter, and
  // leave while it is leaving.


  CSSTransitionGroup.prototype.render = function render() {
    return _react2.default.createElement(_TransitionGroup2.default, _extends({}, this.props, { childFactory: this._wrapChild }));
  };

  return CSSTransitionGroup;
}(_react2.default.Component);

CSSTransitionGroup.displayName = 'CSSTransitionGroup';


CSSTransitionGroup.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
CSSTransitionGroup.defaultProps = defaultProps;

exports.default = CSSTransitionGroup;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 1087:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _addClass = __webpack_require__(1059);

var _addClass2 = _interopRequireDefault(_addClass);

var _removeClass = __webpack_require__(1061);

var _removeClass2 = _interopRequireDefault(_removeClass);

var _requestAnimationFrame = __webpack_require__(1063);

var _requestAnimationFrame2 = _interopRequireDefault(_requestAnimationFrame);

var _properties = __webpack_require__(1062);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(103);

var _PropTypes = __webpack_require__(1057);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var events = [];
if (_properties.transitionEnd) events.push(_properties.transitionEnd);
if (_properties.animationEnd) events.push(_properties.animationEnd);

function addEndListener(node, listener) {
  if (events.length) {
    events.forEach(function (e) {
      return node.addEventListener(e, listener, false);
    });
  } else {
    setTimeout(listener, 0);
  }

  return function () {
    if (!events.length) return;
    events.forEach(function (e) {
      return node.removeEventListener(e, listener, false);
    });
  };
}

var propTypes = {
  children: _propTypes2.default.node,
  name: _PropTypes.nameShape.isRequired,

  // Once we require timeouts to be specified, we can remove the
  // boolean flags (appear etc.) and just accept a number
  // or a bool for the timeout flags (appearTimeout etc.)
  appear: _propTypes2.default.bool,
  enter: _propTypes2.default.bool,
  leave: _propTypes2.default.bool,
  appearTimeout: _propTypes2.default.number,
  enterTimeout: _propTypes2.default.number,
  leaveTimeout: _propTypes2.default.number
};

var CSSTransitionGroupChild = function (_React$Component) {
  _inherits(CSSTransitionGroupChild, _React$Component);

  function CSSTransitionGroupChild() {
    var _temp, _this, _ret;

    _classCallCheck(this, CSSTransitionGroupChild);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.componentWillAppear = function (done) {
      if (_this.props.appear) {
        _this.transition('appear', done, _this.props.appearTimeout);
      } else {
        done();
      }
    }, _this.componentWillEnter = function (done) {
      if (_this.props.enter) {
        _this.transition('enter', done, _this.props.enterTimeout);
      } else {
        done();
      }
    }, _this.componentWillLeave = function (done) {
      if (_this.props.leave) {
        _this.transition('leave', done, _this.props.leaveTimeout);
      } else {
        done();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  CSSTransitionGroupChild.prototype.componentWillMount = function componentWillMount() {
    this.classNameAndNodeQueue = [];
    this.transitionTimeouts = [];
  };

  CSSTransitionGroupChild.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unmounted = true;

    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.transitionTimeouts.forEach(function (timeout) {
      clearTimeout(timeout);
    });

    this.classNameAndNodeQueue.length = 0;
  };

  CSSTransitionGroupChild.prototype.transition = function transition(animationType, finishCallback, timeout) {
    var node = (0, _reactDom.findDOMNode)(this);

    if (!node) {
      if (finishCallback) {
        finishCallback();
      }
      return;
    }

    var className = this.props.name[animationType] || this.props.name + '-' + animationType;
    var activeClassName = this.props.name[animationType + 'Active'] || className + '-active';
    var timer = null;
    var removeListeners = void 0;

    (0, _addClass2.default)(node, className);

    // Need to do this to actually trigger a transition.
    this.queueClassAndNode(activeClassName, node);

    // Clean-up the animation after the specified delay
    var finish = function finish(e) {
      if (e && e.target !== node) {
        return;
      }

      clearTimeout(timer);
      if (removeListeners) removeListeners();

      (0, _removeClass2.default)(node, className);
      (0, _removeClass2.default)(node, activeClassName);

      if (removeListeners) removeListeners();

      // Usually this optional callback is used for informing an owner of
      // a leave animation and telling it to remove the child.
      if (finishCallback) {
        finishCallback();
      }
    };

    if (timeout) {
      timer = setTimeout(finish, timeout);
      this.transitionTimeouts.push(timer);
    } else if (_properties.transitionEnd) {
      removeListeners = addEndListener(node, finish);
    }
  };

  CSSTransitionGroupChild.prototype.queueClassAndNode = function queueClassAndNode(className, node) {
    var _this2 = this;

    this.classNameAndNodeQueue.push({
      className: className,
      node: node
    });

    if (!this.rafHandle) {
      this.rafHandle = (0, _requestAnimationFrame2.default)(function () {
        return _this2.flushClassNameAndNodeQueue();
      });
    }
  };

  CSSTransitionGroupChild.prototype.flushClassNameAndNodeQueue = function flushClassNameAndNodeQueue() {
    if (!this.unmounted) {
      this.classNameAndNodeQueue.forEach(function (obj) {
        // This is for to force a repaint,
        // which is necessary in order to transition styles when adding a class name.
        /* eslint-disable no-unused-expressions */
        obj.node.scrollTop;
        /* eslint-enable no-unused-expressions */
        (0, _addClass2.default)(obj.node, obj.className);
      });
    }
    this.classNameAndNodeQueue.length = 0;
    this.rafHandle = null;
  };

  CSSTransitionGroupChild.prototype.render = function render() {
    var props = _extends({}, this.props);
    delete props.name;
    delete props.appear;
    delete props.enter;
    delete props.leave;
    delete props.appearTimeout;
    delete props.enterTimeout;
    delete props.leaveTimeout;
    delete props.children;
    return _react2.default.cloneElement(_react2.default.Children.only(this.props.children), props);
  };

  return CSSTransitionGroupChild;
}(_react2.default.Component);

CSSTransitionGroupChild.displayName = 'CSSTransitionGroupChild';


CSSTransitionGroupChild.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};

exports.default = CSSTransitionGroupChild;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 1088:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _chainFunction = __webpack_require__(1058);

var _chainFunction2 = _interopRequireDefault(_chainFunction);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = __webpack_require__(61);

var _warning2 = _interopRequireDefault(_warning);

var _ChildMapping = __webpack_require__(1089);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  component: _propTypes2.default.any,
  childFactory: _propTypes2.default.func,
  children: _propTypes2.default.node
};

var defaultProps = {
  component: 'span',
  childFactory: function childFactory(child) {
    return child;
  }
};

var TransitionGroup = function (_React$Component) {
  _inherits(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    _classCallCheck(this, TransitionGroup);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.performAppear = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillAppear) {
        component.componentWillAppear(_this._handleDoneAppearing.bind(_this, key, component));
      } else {
        _this._handleDoneAppearing(key, component);
      }
    };

    _this._handleDoneAppearing = function (key, component) {
      if (component.componentDidAppear) {
        component.componentDidAppear();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        // This was removed before it had fully appeared. Remove it.
        _this.performLeave(key, component);
      }
    };

    _this.performEnter = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillEnter) {
        component.componentWillEnter(_this._handleDoneEntering.bind(_this, key, component));
      } else {
        _this._handleDoneEntering(key, component);
      }
    };

    _this._handleDoneEntering = function (key, component) {
      if (component.componentDidEnter) {
        component.componentDidEnter();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        // This was removed before it had fully entered. Remove it.
        _this.performLeave(key, component);
      }
    };

    _this.performLeave = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillLeave) {
        component.componentWillLeave(_this._handleDoneLeaving.bind(_this, key, component));
      } else {
        // Note that this is somewhat dangerous b/c it calls setState()
        // again, effectively mutating the component before all the work
        // is done.
        _this._handleDoneLeaving(key, component);
      }
    };

    _this._handleDoneLeaving = function (key, component) {
      if (component.componentDidLeave) {
        component.componentDidLeave();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
        // This entered again before it fully left. Add it again.
        _this.keysToEnter.push(key);
      } else {
        _this.setState(function (state) {
          var newChildren = _extends({}, state.children);
          delete newChildren[key];
          return { children: newChildren };
        });
      }
    };

    _this.childRefs = Object.create(null);

    _this.state = {
      children: (0, _ChildMapping.getChildMapping)(props.children)
    };
    return _this;
  }

  TransitionGroup.prototype.componentWillMount = function componentWillMount() {
    this.currentlyTransitioningKeys = {};
    this.keysToEnter = [];
    this.keysToLeave = [];
  };

  TransitionGroup.prototype.componentDidMount = function componentDidMount() {
    var initialChildMapping = this.state.children;
    for (var key in initialChildMapping) {
      if (initialChildMapping[key]) {
        this.performAppear(key, this.childRefs[key]);
      }
    }
  };

  TransitionGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var nextChildMapping = (0, _ChildMapping.getChildMapping)(nextProps.children);
    var prevChildMapping = this.state.children;

    this.setState({
      children: (0, _ChildMapping.mergeChildMappings)(prevChildMapping, nextChildMapping)
    });

    for (var key in nextChildMapping) {
      var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
      if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
        this.keysToEnter.push(key);
      }
    }

    for (var _key in prevChildMapping) {
      var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(_key);
      if (prevChildMapping[_key] && !hasNext && !this.currentlyTransitioningKeys[_key]) {
        this.keysToLeave.push(_key);
      }
    }

    // If we want to someday check for reordering, we could do it here.
  };

  TransitionGroup.prototype.componentDidUpdate = function componentDidUpdate() {
    var _this2 = this;

    var keysToEnter = this.keysToEnter;
    this.keysToEnter = [];
    keysToEnter.forEach(function (key) {
      return _this2.performEnter(key, _this2.childRefs[key]);
    });

    var keysToLeave = this.keysToLeave;
    this.keysToLeave = [];
    keysToLeave.forEach(function (key) {
      return _this2.performLeave(key, _this2.childRefs[key]);
    });
  };

  TransitionGroup.prototype.render = function render() {
    var _this3 = this;

    // TODO: we could get rid of the need for the wrapper node
    // by cloning a single child
    var childrenToRender = [];

    var _loop = function _loop(key) {
      var child = _this3.state.children[key];
      if (child) {
        var isCallbackRef = typeof child.ref !== 'string';
        var factoryChild = _this3.props.childFactory(child);
        var ref = function ref(r) {
          _this3.childRefs[key] = r;
        };

        process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(isCallbackRef, 'string refs are not supported on children of TransitionGroup and will be ignored. ' + 'Please use a callback ref instead: https://facebook.github.io/react/docs/refs-and-the-dom.html#the-ref-callback-attribute') : void 0;

        // Always chaining the refs leads to problems when the childFactory
        // wraps the child. The child ref callback gets called twice with the
        // wrapper and the child. So we only need to chain the ref if the
        // factoryChild is not different from child.
        if (factoryChild === child && isCallbackRef) {
          ref = (0, _chainFunction2.default)(child.ref, ref);
        }

        // You may need to apply reactive updates to a child as it is leaving.
        // The normal React way to do it won't work since the child will have
        // already been removed. In case you need this behavior you can provide
        // a childFactory function to wrap every child, even the ones that are
        // leaving.
        childrenToRender.push(_react2.default.cloneElement(factoryChild, {
          key: key,
          ref: ref
        }));
      }
    };

    for (var key in this.state.children) {
      _loop(key);
    }

    // Do not forward TransitionGroup props to primitive DOM nodes
    var props = _extends({}, this.props);
    delete props.transitionLeave;
    delete props.transitionName;
    delete props.transitionAppear;
    delete props.transitionEnter;
    delete props.childFactory;
    delete props.transitionLeaveTimeout;
    delete props.transitionEnterTimeout;
    delete props.transitionAppearTimeout;
    delete props.component;

    return _react2.default.createElement(this.props.component, props, childrenToRender);
  };

  return TransitionGroup;
}(_react2.default.Component);

TransitionGroup.displayName = 'TransitionGroup';


TransitionGroup.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
TransitionGroup.defaultProps = defaultProps;

exports.default = TransitionGroup;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 1089:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;

var _react = __webpack_require__(1);

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */
function getChildMapping(children) {
  if (!children) {
    return children;
  }
  var result = {};
  _react.Children.map(children, function (child) {
    return child;
  }).forEach(function (child) {
    result[child.key] = child;
  });
  return result;
}

/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */
function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    if (next.hasOwnProperty(key)) {
      return next[key];
    }

    return prev[key];
  }

  // For each key of `next`, the list of keys to insert before that key in
  // the combined list
  var nextKeysPending = {};

  var pendingKeys = [];
  for (var prevKey in prev) {
    if (next.hasOwnProperty(prevKey)) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i = void 0;
  var childMapping = {};
  for (var nextKey in next) {
    if (nextKeysPending.hasOwnProperty(nextKey)) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }
    childMapping[nextKey] = getValueForKey(nextKey);
  }

  // Finally, add the keys which didn't appear before any key in `next`
  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

/***/ })

});