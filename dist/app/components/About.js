"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_Component) {
    _inherits(About, _Component);

    function About() {
        _classCallCheck(this, About);

        //BAD
        var _this = _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).call(this));

        _this.members = ["member 1", "member 2", "member 5"];
        //this.addMember = this.addMember.bind(this);
        return _this;
    }

    _createClass(About, [{
        key: "addMember",
        value: function addMember() {
            //BAD:
            this.members.push("Member " + Math.random());
            this.forceUpdate();
            //this.render();
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var list = this.members.map(function (member, index) {
                return _react2.default.createElement(
                    "li",
                    { key: index },
                    member
                );
            });

            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "h2",
                    null,
                    "About"
                ),
                _react2.default.createElement(
                    "button",
                    { onClick: function onClick() {
                            return _this2.addMember();
                        } },
                    "Add"
                ),
                _react2.default.createElement(
                    "ul",
                    null,
                    list
                )
            );
        }
    }]);

    return About;
}(_react.Component);

exports.default = About;