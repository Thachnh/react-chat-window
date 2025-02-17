'use strict';

exports.__esModule = true;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WindowPlaceHolder = function (_Component) {
  _inherits(WindowPlaceHolder, _Component);

  function WindowPlaceHolder(props) {
    _classCallCheck(this, WindowPlaceHolder);

    return _possibleConstructorReturn(this, _Component.call(this, props));
  }

  WindowPlaceHolder.prototype.render = function render() {
    var classList = ['sc-chat-window', this.props.isOpen ? 'opened' : 'closed'];
    return _react2.default.createElement(
      'div',
      { className: classList.join(' ') },
      _react2.default.createElement(_Header2.default, {
        teamName: this.props.agentProfile.teamName,
        desc: this.props.agentProfile.desc,
        imageUrl: this.props.agentProfile.imageUrl,
        onClose: this.props.onClose
      }),
      this.props.children
    );
  };

  return WindowPlaceHolder;
}(_react.Component);

WindowPlaceHolder.propTypes = process.env.NODE_ENV !== "production" ? {
  agentProfile: _propTypes2.default.object.isRequired,
  isOpen: _propTypes2.default.bool.isRequired,
  onClose: _propTypes2.default.func.isRequired
} : {};

exports.default = WindowPlaceHolder;
module.exports = exports['default'];