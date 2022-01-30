"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SidebarModule = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var SidebarModule = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(SidebarModule, _React$Component);

  var _super = _createSuper(SidebarModule);

  function SidebarModule() {
    (0, _classCallCheck2["default"])(this, SidebarModule);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(SidebarModule, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "c-sidebar__module"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "c-sidebar__header"
      }, /*#__PURE__*/_react["default"].createElement("h3", {
        className: "c-sidebar__h3"
      }, "Links React Component")), /*#__PURE__*/_react["default"].createElement("div", {
        className: "c-sidebar__content"
      }, /*#__PURE__*/_react["default"].createElement("ul", {
        className: "c-sidebar__list"
      }, /*#__PURE__*/_react["default"].createElement("li", {
        className: "c-sidebar__list-item"
      }, /*#__PURE__*/_react["default"].createElement("a", {
        className: "c-sidebar__link",
        href: "#"
      }, "Test")))));
    }
  }]);
  return SidebarModule;
}(_react["default"].Component);

exports.SidebarModule = SidebarModule;