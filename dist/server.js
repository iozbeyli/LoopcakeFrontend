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
/******/ 	return __webpack_require__(__webpack_require__.s = 59);
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(2);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _cardModal = __webpack_require__(41);

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
                    editable && _react2.default.createElement(_cardModal.CardModal, { title: editable.title, icon: editable.icon, content: editable.content })
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
        content: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.arrayOf(_propTypes2.default.element)]).isRequired
    })
};

exports.default = _Card;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-cookie");

/***/ }),
/* 6 */
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

var _listItem = __webpack_require__(17);

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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _formInput = __webpack_require__(15);

var _formInput2 = _interopRequireDefault(_formInput);

var _form = __webpack_require__(45);

var _form2 = _interopRequireDefault(_form);

var _passwordMeter = __webpack_require__(16);

var _passwordMeter2 = _interopRequireDefault(_passwordMeter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    Form: _form2.default, FormInput: _formInput2.default, PasswordMeter: _passwordMeter2.default
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(2);

var _views = __webpack_require__(26);

var _components = __webpack_require__(53);

var _components2 = _interopRequireDefault(_components);

var _reactRouterDom = __webpack_require__(3);

var _reactCookie = __webpack_require__(5);

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
        console.log(props.match);
        return _this;
    }

    _createClass(App, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var cookies = this.props.cookies;

            console.log(cookies.get('token'));
        }
    }, {
        key: 'render',
        value: function render() {
            var left = [{ destination: "/app", title: "Home" }];
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
                        _react2.default.createElement(_reactRouterDom.Route, { path: this.props.match.url + '/home', component: _views.Home }),
                        _react2.default.createElement(_reactRouterDom.Route, { path: this.props.match.url + '/announcements', component: _views.AnnouncementPage }),
                        _react2.default.createElement(_reactRouterDom.Route, { path: this.props.match.url + '/course', component: _views.CoursePage }),
                        _react2.default.createElement(_reactRouterDom.Route, { path: this.props.match.url + '/repo', component: _views.RepoPage })
                    )
                )
            );
        }
    }]);

    return App;
}(_react2.default.Component);

App.propTypes = {
    cookies: (0, _propTypes.instanceOf)(_reactCookie.Cookies).isRequired
};
;

exports.default = (0, _reactCookie.withCookies)(App);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.API_URL = undefined;

var _authentication = __webpack_require__(55);

var _authentication2 = _interopRequireDefault(_authentication);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var API_URL = exports.API_URL = "http://207.154.203.163:5567";
//export const API_URL = "http://172.20.120.133:5567";

module.exports = {
    Authentication: _authentication2.default
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _appRoutes = __webpack_require__(58);

var _appRoutes2 = _interopRequireDefault(_appRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    AppRoutes: _appRoutes2.default
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _announcement = __webpack_require__(35);

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
/* 14 */
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

var _list = __webpack_require__(6);

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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(2);

var _passwordMeter = __webpack_require__(16);

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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(2);

var _zxcvbn = __webpack_require__(81);

var _zxcvbn2 = _interopRequireDefault(_zxcvbn);

var _constants = __webpack_require__(54);

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
/* 17 */
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _buttonMenuItem = __webpack_require__(18);

var _buttonMenuItem2 = _interopRequireDefault(_buttonMenuItem);

var _linkMenuItem = __webpack_require__(20);

var _linkMenuItem2 = _interopRequireDefault(_linkMenuItem);

var _subMenu = __webpack_require__(23);

var _subMenu2 = _interopRequireDefault(_subMenu);

var _subMenuItem = __webpack_require__(24);

var _subMenuItem2 = _interopRequireDefault(_subMenuItem);

var _menu = __webpack_require__(21);

var _menu2 = _interopRequireDefault(_menu);

var _menuItem = __webpack_require__(22);

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
/* 20 */
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
/* 21 */
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

var _menuItem = __webpack_require__(22);

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
/* 22 */
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

var _linkMenuItem = __webpack_require__(20);

var _linkMenuItem2 = _interopRequireDefault(_linkMenuItem);

var _buttonMenuItem = __webpack_require__(18);

var _buttonMenuItem2 = _interopRequireDefault(_buttonMenuItem);

var _subMenuItem = __webpack_require__(24);

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
/* 23 */
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
/* 24 */
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

var _subMenu = __webpack_require__(23);

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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserList = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _list = __webpack_require__(6);

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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _HomePage = __webpack_require__(62);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _LoginPage = __webpack_require__(63);

var _LoginPage2 = _interopRequireDefault(_LoginPage);

var _RegisterPage = __webpack_require__(64);

var _RegisterPage2 = _interopRequireDefault(_RegisterPage);

var _AnnouncementPage = __webpack_require__(60);

var _AnnouncementPage2 = _interopRequireDefault(_AnnouncementPage);

var _CoursePage = __webpack_require__(61);

var _CoursePage2 = _interopRequireDefault(_CoursePage);

var _RepoPage = __webpack_require__(65);

var _RepoPage2 = _interopRequireDefault(_RepoPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = { Home: _HomePage2.default, Login: _LoginPage2.default, AnnouncementPage: _AnnouncementPage2.default, CoursePage: _CoursePage2.default, RepoPage: _RepoPage2.default, Register: _RegisterPage2.default };

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(11);

var _reactRouterDom = __webpack_require__(3);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _routes = __webpack_require__(10);

var _reactCookie = __webpack_require__(5);

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
                _routes.AppRoutes
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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _redux = __webpack_require__(12);

var _userReducer = __webpack_require__(57);

var _userReducer2 = _interopRequireDefault(_userReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
   user: _userReducer2.default
});

/***/ }),
/* 29 */
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
/* 30 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("universal-cookie-express");

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _types = __webpack_require__(34);

var _types2 = _interopRequireDefault(_types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    Types: _types2.default
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  LOGIN: 'LOGIN'
};

/***/ }),
/* 35 */
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

var _announcementContent = __webpack_require__(36);

var _announcementContent2 = _interopRequireDefault(_announcementContent);

var _announcementTitle = __webpack_require__(38);

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
/* 36 */
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

var _announcementModal = __webpack_require__(37);

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
/* 37 */
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
/* 38 */
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
/* 39 */
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

var _attachmentList = __webpack_require__(14);

var _semanticUiReact = __webpack_require__(2);

var _folder = __webpack_require__(40);

var _folder2 = _interopRequireDefault(_folder);

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
        )
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
/* 40 */
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

var _attachmentList = __webpack_require__(14);

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
/* 41 */
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

var CardModal = exports.CardModal = function CardModal(_ref) {
    var icon = _ref.icon,
        title = _ref.title,
        content = _ref.content;
    return _react2.default.createElement(
        _semanticUiReact.Modal,
        { trigger: _react2.default.createElement(
                _semanticUiReact.Label,
                { color: 'red', attached: 'bottom right' },
                _react2.default.createElement(_semanticUiReact.Icon, { name: icon }),
                title
            ) },
        _react2.default.createElement(
            _semanticUiReact.Modal.Content,
            null,
            content
        )
    );
};

CardModal.propTypes = {
    icon: _propTypes2.default.string.isRequired,
    title: _propTypes2.default.string.isRequired,
    content: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.arrayOf(_propTypes2.default.element)]).isRequired
};

/***/ }),
/* 42 */
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

var _ListComponents = __webpack_require__(46);

var _card = __webpack_require__(4);

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
/* 43 */
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

var _userList = __webpack_require__(25);

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
/* 44 */
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

var _list = __webpack_require__(6);

var _list2 = _interopRequireDefault(_list);

var _userList = __webpack_require__(25);

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
/* 45 */
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

var _formInput = __webpack_require__(15);

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
                _react2.default.createElement(
                    _semanticUiReact.Button,
                    { type: 'submit' },
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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _listItem = __webpack_require__(17);

var _list = __webpack_require__(6);

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    ListItem: _listItem.ListItem,
    List: _list2.default

};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _navigationBar = __webpack_require__(48);

var _navigationBar2 = _interopRequireDefault(_navigationBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    NavigationBar: _navigationBar2.default
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(2);

var _app = __webpack_require__(8);

var _app2 = _interopRequireDefault(_app);

var _MenuComponents = __webpack_require__(19);

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
            _react2.default.createElement('img', { src: __webpack_require__(71) })
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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCodemirror = __webpack_require__(78);

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
        __webpack_require__(75);
        window.CodeMirror = __webpack_require__(74);
        //require ('node_modules/codemirror/addon/mode/loadmode.js');
        __webpack_require__(76);
        __webpack_require__(77);
        __webpack_require__(68);
    }
}

CodeEditor.propTypes = {
    readOnly: _propTypes2.default.bool,
    code: _propTypes2.default.string.isRequired,
    fileName: _propTypes2.default.string.isRequired
};

exports.default = CodeEditor;

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

var _reactGitgraph = __webpack_require__(79);

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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _sidebarMenu = __webpack_require__(52);

var _sidebarMenu2 = _interopRequireDefault(_sidebarMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    SidebarMenu: _sidebarMenu2.default
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(2);

var _app = __webpack_require__(8);

var _app2 = _interopRequireDefault(_app);

var _MenuComponents = __webpack_require__(19);

var _reactRouterDom = __webpack_require__(3);

var _menu = __webpack_require__(21);

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SidebarMenu = function SidebarMenu() {

    var menuItems = [{
        type: 'subMenu',
        name: 'announcements',
        properties: {
            header: _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/app/announcements', style: { color: 'black' } },
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
                    { to: '/app/course/Computer Graphics', style: { color: 'black' } },
                    'Computer Graphics'
                )
            }, {
                name: 'Computer Network',
                element: _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/app/course/Computer Network', style: { color: 'black' } },
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
                    { to: '/app/repo/Loopcake Frontend', style: { color: 'black' } },
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
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _FormComponents = __webpack_require__(7);

var _FormComponents2 = _interopRequireDefault(_FormComponents);

var _NavigationComponents = __webpack_require__(47);

var _NavigationComponents2 = _interopRequireDefault(_NavigationComponents);

var _SidebarComponents = __webpack_require__(51);

var _SidebarComponents2 = _interopRequireDefault(_SidebarComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    FormComponents: _FormComponents2.default,
    NavigationComponents: _NavigationComponents2.default,
    SidebarComponents: _SidebarComponents2.default
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _colors = __webpack_require__(72);

var _colors2 = _interopRequireDefault(_colors);

var _strings = __webpack_require__(73);

var _strings2 = _interopRequireDefault(_strings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    colors: _colors2.default,
    strings: _strings2.default
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _communicationController = __webpack_require__(56);

var _database = __webpack_require__(9);

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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.post = post;
exports.get = get;

var _superagent = __webpack_require__(80);

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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actions = __webpack_require__(33);

var INITIAL_STATE = {};

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
    var action = arguments[1];

    switch (action.type) {
        case _actions.Types.LOGIN:
            return _extends({}, state, { loggedIn: Boolean(action.token), token: action.token, tokenValid: Boolean(action.token), userMail: action.userMail });
        default:
            return state;
    }
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

var _views = __webpack_require__(26);

var _app = __webpack_require__(8);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactRouterDom.Route, { path: '/app', component: _app2.default }),
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _views.Login }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/register', component: _views.Register })
);

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(30);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(31);

var _server2 = _interopRequireDefault(_server);

var _template = __webpack_require__(29);

var _template2 = _interopRequireDefault(_template);

var _reactRouterDom = __webpack_require__(3);

var _redux = __webpack_require__(12);

var _reactRedux = __webpack_require__(11);

var _reducers = __webpack_require__(28);

var _reducers2 = _interopRequireDefault(_reducers);

var _routes = __webpack_require__(10);

var _reactCookie = __webpack_require__(5);

var _RoutesRoot = __webpack_require__(27);

var _RoutesRoot2 = _interopRequireDefault(_RoutesRoot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var context = {};

var cookiesMiddleware = __webpack_require__(32);


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
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _announcementCard = __webpack_require__(13);

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
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _StudentCard = __webpack_require__(43);

var _reactRouterDom = __webpack_require__(3);

var _semanticUiReact = __webpack_require__(2);

var _ProjectCard = __webpack_require__(42);

var _detailsCard = __webpack_require__(44);

var _announcementCard = __webpack_require__(13);

var _announcementCard2 = _interopRequireDefault(_announcementCard);

var _attachmentCard = __webpack_require__(39);

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
/* 62 */
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
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _FormComponents = __webpack_require__(7);

var _semanticUiReact = __webpack_require__(2);

var _database = __webpack_require__(9);

var _reactCookie = __webpack_require__(5);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

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
                }
            };
            _database.Authentication.Login(data, handleResponse);
        };

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
                { centered: true },
                _react2.default.createElement(
                    _semanticUiReact.Grid.Row,
                    { stretched: true },
                    _react2.default.createElement(
                        _semanticUiReact.Grid.Column,
                        { width: 5 },
                        _react2.default.createElement(
                            _semanticUiReact.Card,
                            null,
                            _react2.default.createElement(
                                _semanticUiReact.Card.Content,
                                null,
                                _react2.default.createElement(_FormComponents.Form, { onSubmit: this.handleSubmit, formData: formFieldData })
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
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _FormComponents = __webpack_require__(7);

var _semanticUiReact = __webpack_require__(2);

var _database = __webpack_require__(9);

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
        { centered: true },
        _react2.default.createElement(
            _semanticUiReact.Grid.Column,
            { width: 5 },
            _react2.default.createElement(
                _semanticUiReact.Card,
                null,
                _react2.default.createElement(
                    _semanticUiReact.Card.Content,
                    null,
                    _react2.default.createElement(_FormComponents.Form, { onSubmit: handleSubmit, formData: formFieldData })
                )
            )
        )
    );
};
exports.default = RegisterPage;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _codeEditor = __webpack_require__(49);

var _codeEditor2 = _interopRequireDefault(_codeEditor);

var _commitGraph = __webpack_require__(50);

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
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(67)(undefined);
// imports


// module
exports.push([module.i, ".CodeMirror{\n    height: auto;\n}", ""]);

// exports


/***/ }),
/* 67 */
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
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(66);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(69)(content, options);
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
/* 69 */
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

var	fixUrls = __webpack_require__(70);

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
/* 70 */
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
/* 71 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports= {
  passwordColors: [
      "red","orange","yellow","olive","green"
  ]
};

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = {
    passwordStrings: ["Very Weak","Weak","Normal","Strong","Very Strong"]
};


/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("codemirror");

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("codemirror/lib/codemirror.css");

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/meta.js");

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = require("codemirror/theme/rubyblue.css");

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = require("react-codemirror");

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("react-gitgraph");

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = require("superagent");

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("zxcvbn");

/***/ })
/******/ ]);