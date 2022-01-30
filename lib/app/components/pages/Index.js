"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _SvgImage = _interopRequireDefault(require("app/components/elements/SvgImage"));

var _Translator = require("app/Translator");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Index = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Index, _React$Component);

  var _super = _createSuper(Index);

  function Index() {
    (0, _classCallCheck2["default"])(this, Index);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Index, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "Index"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "text-center"
      }, /*#__PURE__*/_react["default"].createElement(_SvgImage["default"], {
        name: "blurt",
        width: "480px",
        height: "240px"
      })), /*#__PURE__*/_react["default"].createElement("h1", {
        className: "center text-center"
      }, (0, _Translator.translateHtml)('APP_NAME_is_a_social_media_platform_where_everyone_gets_paid_for_creating_and_curating_content'), "."), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("br", null));
    }
  }]);
  return Index;
}(_react["default"].Component);

exports["default"] = Index;