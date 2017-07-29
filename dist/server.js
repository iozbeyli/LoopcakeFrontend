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
/******/ 	return __webpack_require__(__webpack_require__.s = 70);
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
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 5 */
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

var _cardModal = __webpack_require__(45);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Card = function (_React$Component) {
    _inherits(_Card, _React$Component);

    function _Card(props) {
        _classCallCheck(this, _Card);

        return _possibleConstructorReturn(this, (_Card.__proto__ || Object.getPrototypeOf(_Card)).call(this, props));
    }

    _createClass(_Card, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                title = _props.title,
                content = _props.content,
                editable = _props.editable;

            console.log("editable");
            console.log(editable);
            return _react2.default.createElement(
                _semanticUiReact.Card,
                { fluid: true },
                title && _react2.default.createElement(
                    _semanticUiReact.Button,
                    { color: 'blue' },
                    title
                ),
                _react2.default.createElement(
                    _semanticUiReact.Card.Content,
                    null,
                    content,
                    editable && _react2.default.createElement('br', null),
                    editable && _react2.default.createElement(_cardModal.CardModal, { title: editable.title, icon: editable.icon, content: editable.content, actions: editable.actions }),
                    editable && _react2.default.createElement(_cardModal.CardModal, { title: editable.title, icon: editable.icon, content: editable.content, actions: editable.actions })
                )
            );
        }
    }]);

    return _Card;
}(_react2.default.Component);

_Card.propTypes = {
    title: _propTypes2.default.string,
    content: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.arrayOf(_propTypes2.default.element)]).isRequired,
    editable: _propTypes2.default.shape({
        icon: _propTypes2.default.string.isRequired,
        title: _propTypes2.default.string.isRequired,
        content: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.arrayOf(_propTypes2.default.element)]).isRequired,
        actions: _propTypes2.default.arrayOf(_propTypes2.default.element)
    })
};

exports.default = _Card;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-cookie");

/***/ }),
/* 7 */
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

var _listItem = __webpack_require__(19);

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
    item: _propTypes2.default.arrayOf(_propTypes2.default.shape({
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _formInput = __webpack_require__(17);

var _formInput2 = _interopRequireDefault(_formInput);

var _form = __webpack_require__(54);

var _form2 = _interopRequireDefault(_form);

var _passwordMeter = __webpack_require__(18);

var _passwordMeter2 = _interopRequireDefault(_passwordMeter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    Form: _form2.default, FormInput: _formInput2.default, PasswordMeter: _passwordMeter2.default
};

/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.API_URL = undefined;

var _authentication = __webpack_require__(65);

var _authentication2 = _interopRequireDefault(_authentication);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var API_URL = exports.API_URL = "http://165.227.139.238:5567";
//export const API_URL = "http://172.20.120.133:5567";

module.exports = {
    Authentication: _authentication2.default
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _appRoutes = __webpack_require__(68);

var _appRoutes2 = _interopRequireDefault(_appRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    AppRoutes: _appRoutes2.default
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
     value: true
});
exports.loginAction = loginAction;

var _types = __webpack_require__(14);

function loginAction(email, token) {
     return {
          type: _types.LOGIN,
          token: token,
          email: email
     };
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  LOGIN: 'LOGIN'
};

/***/ }),
/* 15 */
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

var _announcement = __webpack_require__(38);

var _announcement2 = _interopRequireDefault(_announcement);

var _semanticUiReact = __webpack_require__(2);

var _card = __webpack_require__(5);

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
    editable: _propTypes2.default.bool
};

exports.default = AnnouncementCard;

/***/ }),
/* 16 */
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

var _list = __webpack_require__(7);

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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(2);

var _passwordMeter = __webpack_require__(18);

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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(2);

var _zxcvbn = __webpack_require__(91);

var _zxcvbn2 = _interopRequireDefault(_zxcvbn);

var _constants = __webpack_require__(63);

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
/* 19 */
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
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserList = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _list = __webpack_require__(7);

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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _FormComponents = __webpack_require__(8);

var _semanticUiReact = __webpack_require__(2);

var _database = __webpack_require__(10);

var _reactCookie = __webpack_require__(6);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(4);

var _authentication = __webpack_require__(13);

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
                    (0, _authentication.loginAction)({
                        email: 'iozbeyli@ku.edu.tr',
                        token: resp.body.data.token
                    });
                }
            };
            //this.props.loginAction("da","fa");
            _database.Authentication.Login(data, handleResponse);
        };

        console.log("Login Props");
        console.log(props);
        _this.state = {};
        return _this;
    }

    _createClass(LoginPage, [{
        key: 'componentWillUpdate',
        value: function componentWillUpdate(nextProps, nextState) {
            console.log("Next Props");
            console.log(nextProps);
        }
    }, {
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
                        _react2.default.createElement(_semanticUiReact.Image, { centered: true, height: 50, size: 'small', src: __webpack_require__(30) }),
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

exports.default = (0, _reactCookie.withCookies)(LoginPage);

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _HomePage = __webpack_require__(73);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _LoginPage = __webpack_require__(28);

var _LoginPage2 = _interopRequireDefault(_LoginPage);

var _RegisterPage = __webpack_require__(74);

var _RegisterPage2 = _interopRequireDefault(_RegisterPage);

var _AnnouncementPage = __webpack_require__(71);

var _AnnouncementPage2 = _interopRequireDefault(_AnnouncementPage);

var _CoursePage = __webpack_require__(72);

var _CoursePage2 = _interopRequireDefault(_CoursePage);

var _RepoPage = __webpack_require__(75);

var _RepoPage2 = _interopRequireDefault(_RepoPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = { Home: _HomePage2.default, Login: _LoginPage2.default, AnnouncementPage: _AnnouncementPage2.default, CoursePage: _CoursePage2.default, RepoPage: _RepoPage2.default, Register: _RegisterPage2.default };

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "loopcakeWhiteLogoWithText.svg?5a4f08fe673e24a06ece825d23f477ea";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _reactRouterDom = __webpack_require__(3);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _routes = __webpack_require__(11);

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
        key: 'componentWillMount',
        value: function componentWillMount() {
            var cookies = this.props.cookies;


            cookies.set('name', "naber", { path: '/' });
        }
    }, {
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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _redux = __webpack_require__(12);

var _userReducer = __webpack_require__(67);

var _userReducer2 = _interopRequireDefault(_userReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
   user: _userReducer2.default
});

/***/ }),
/* 33 */
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
/* 34 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("universal-cookie-express");

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _types = __webpack_require__(14);

var _types2 = _interopRequireDefault(_types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    Types: _types2.default
};

/***/ }),
/* 38 */
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

var _announcementContent = __webpack_require__(39);

var _announcementContent2 = _interopRequireDefault(_announcementContent);

var _announcementTitle = __webpack_require__(41);

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
                    _react2.default.createElement(_announcementTitle2.default, { title: this.props.title, courseTitle: this.props.courseTitle, date: this.props.date })
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
/* 39 */
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

var _announcementModal = __webpack_require__(40);

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
/* 40 */
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
/* 41 */
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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AttachmentCard = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _card = __webpack_require__(5);

var _card2 = _interopRequireDefault(_card);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _attachmentList = __webpack_require__(16);

var _semanticUiReact = __webpack_require__(2);

var _folder = __webpack_require__(44);

var _folder2 = _interopRequireDefault(_folder);

var _attachmentEditor = __webpack_require__(43);

var _attachmentEditor2 = _interopRequireDefault(_attachmentEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AttachmentCard = exports.AttachmentCard = function AttachmentCard(_ref) {
    var attachments = _ref.attachments,
        folders = _ref.folders;

    return _react2.default.createElement(_card2.default, {
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
    }))
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
/* 44 */
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

var _attachmentList = __webpack_require__(16);

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
/* 45 */
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
/* 46 */
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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _checklist = __webpack_require__(46);

var _checklist2 = _interopRequireDefault(_checklist);

var _checklistCreator = __webpack_require__(48);

var _checklistCreator2 = _interopRequireDefault(_checklistCreator);

var _card = __webpack_require__(5);

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
/* 48 */
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

var _checklistForm = __webpack_require__(49);

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
/* 49 */
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

var _checklistFormInput = __webpack_require__(50);

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
/* 50 */
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
/* 51 */
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

var _ListComponents = __webpack_require__(55);

var _card = __webpack_require__(5);

var _card2 = _interopRequireDefault(_card);

var _reactRouterDom = __webpack_require__(3);

var _semanticUiReact = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProjectCard = exports.ProjectCard = function ProjectCard(_ref) {
    var items = _ref.items;


    var temp = [];
    items.map(function (item) {
        temp.push({
            header: item.header,
            buttons: [{
                title: _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: "/app/student/" + item.header },
                    'Go To Page'
                ),
                onClick: function onClick() {}
            }],
            extra: _react2.default.createElement(_semanticUiReact.Progress, { color: 'yellow', percent: item.progressPercent, size: 'small' })
        });
    });

    return _react2.default.createElement(_card2.default, {
        title: 'Project List',
        content: _react2.default.createElement(_ListComponents.List, { items: temp }),
        editable: {
            icon: 'add square',
            title: 'Create Project',
            content: _react2.default.createElement(
                'a',
                null,
                'aasdf'
            )
        }
    });
};

ProjectCard.propTypes = {
    items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        header: _propTypes2.default.string.isRequired,
        progressPercent: _propTypes2.default.number.isRequired
    }))
};

/***/ }),
/* 52 */
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

var _card = __webpack_require__(5);

var _card2 = _interopRequireDefault(_card);

var _userList = __webpack_require__(27);

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
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DetailsCard = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _card = __webpack_require__(5);

var _card2 = _interopRequireDefault(_card);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _semanticUiReact = __webpack_require__(2);

var _list = __webpack_require__(7);

var _list2 = _interopRequireDefault(_list);

var _userList = __webpack_require__(27);

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
/* 54 */
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

var _formInput = __webpack_require__(17);

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
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _listItem = __webpack_require__(19);

var _list = __webpack_require__(7);

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    ListItem: _listItem.ListItem,
    List: _list2.default

};

/***/ }),
/* 56 */,
/* 57 */,
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCodemirror = __webpack_require__(88);

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
        __webpack_require__(85);
        window.CodeMirror = __webpack_require__(84);
        //require ('node_modules/codemirror/addon/mode/loadmode.js');
        __webpack_require__(86);
        __webpack_require__(87);
        __webpack_require__(78);
    }
}

CodeEditor.propTypes = {
    readOnly: _propTypes2.default.bool,
    code: _propTypes2.default.string.isRequired,
    fileName: _propTypes2.default.string.isRequired
};

exports.default = CodeEditor;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactGitgraph = __webpack_require__(89);

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
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _colors = __webpack_require__(82);

var _colors2 = _interopRequireDefault(_colors);

var _strings = __webpack_require__(83);

var _strings2 = _interopRequireDefault(_strings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    colors: _colors2.default,
    strings: _strings2.default
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactRedux = __webpack_require__(4);

var _LoginPage = __webpack_require__(28);

var _LoginPage2 = _interopRequireDefault(_LoginPage);

var _authentication = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
    return _extends({}, state);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        loginAction: function loginAction(email, token) {
            console.log("Login Action");
            dispatch((0, _authentication.loginAction)(email, token));
        }
    };
};

var VisibleLoginPage = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_LoginPage2.default);

exports.default = VisibleLoginPage;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _communicationController = __webpack_require__(66);

var _database = __webpack_require__(10);

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
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.post = post;
exports.get = get;

var _superagent = __webpack_require__(90);

var _superagent2 = _interopRequireDefault(_superagent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function post(api, postData, respFunc) {
    _superagent2.default.post(api).send(postData).set('X-API-Key', 'foobar').set('Accept', 'application/json').end(function (err, res) {
        respFunc(err, res);
    });
};

function get(api, getData, respFunc) {
    _superagent2.default.get(api).query(getData).end(function (err, res) {
        respFunc(err, res);
    });
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actions = __webpack_require__(37);

var INITIAL_STATE = {};

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
    var action = arguments[1];

    console.log("reducer");
    console.log(action);
    switch (action.type) {
        case _actions.Types.LOGIN:
            return _extends({}, state, { loggedIn: Boolean(action.token), token: action.token, tokenValid: Boolean(action.token), userMail: action.email });
        default:
            return state;
    }
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

var _views = __webpack_require__(29);

var _visibleLoginPage = __webpack_require__(64);

var _visibleLoginPage2 = _interopRequireDefault(_visibleLoginPage);

var _containers = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../containers/\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _containers2 = _interopRequireDefault(_containers);

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
        _react2.default.createElement(_reactRouterDom.Route, { path: '/app', component: _containers2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/register', component: _views.Register })
      );
    }
  }]);

  return AppRoutes;
}(_react2.default.Component);

exports.default = AppRoutes;

/***/ }),
/* 69 */,
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(34);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(35);

var _server2 = _interopRequireDefault(_server);

var _template = __webpack_require__(33);

var _template2 = _interopRequireDefault(_template);

var _reactRouterDom = __webpack_require__(3);

var _redux = __webpack_require__(12);

var _reactRedux = __webpack_require__(4);

var _reducers = __webpack_require__(32);

var _reducers2 = _interopRequireDefault(_reducers);

var _routes = __webpack_require__(11);

var _reactCookie = __webpack_require__(6);

var _RoutesRoot = __webpack_require__(31);

var _RoutesRoot2 = _interopRequireDefault(_RoutesRoot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var context = {};

var cookiesMiddleware = __webpack_require__(36);


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
    console.log("body", html);
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
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _announcementCard = __webpack_require__(15);

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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _StudentCard = __webpack_require__(52);

var _reactRouterDom = __webpack_require__(3);

var _semanticUiReact = __webpack_require__(2);

var _ProjectCard = __webpack_require__(51);

var _detailsCard = __webpack_require__(53);

var _announcementCard = __webpack_require__(15);

var _announcementCard2 = _interopRequireDefault(_announcementCard);

var _attachmentCard = __webpack_require__(42);

var _checklistCard = __webpack_require__(47);

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
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

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
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        'Hello World'
      );
    }
  }]);

  return Home;
}(_react2.default.Component);

exports.default = Home;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _FormComponents = __webpack_require__(8);

var _semanticUiReact = __webpack_require__(2);

var _database = __webpack_require__(10);

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
                _react2.default.createElement(_semanticUiReact.Image, { centered: true, height: 50, size: 'small', src: __webpack_require__(30) }),
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
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _codeEditor = __webpack_require__(58);

var _codeEditor2 = _interopRequireDefault(_codeEditor);

var _commitGraph = __webpack_require__(59);

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
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(77)(undefined);
// imports


// module
exports.push([module.i, ".CodeMirror{\n    height: auto;\n}", ""]);

// exports


/***/ }),
/* 77 */
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
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(76);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(79)(content, options);
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
/* 79 */
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

var	fixUrls = __webpack_require__(80);

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
/* 80 */
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
/* 81 */,
/* 82 */
/***/ (function(module, exports) {

module.exports= {
  passwordColors: [
      "red","orange","yellow","olive","green"
  ]
};

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = {
    passwordStrings: ["Very Weak","Weak","Normal","Strong","Very Strong"]
};


/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = require("codemirror");

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = require("codemirror/lib/codemirror.css");

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/meta.js");

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = require("codemirror/theme/rubyblue.css");

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = require("react-codemirror");

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = require("react-gitgraph");

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = require("superagent");

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = require("zxcvbn");

/***/ })
/******/ ]);