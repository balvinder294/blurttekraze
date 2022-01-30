"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _CloseButton = _interopRequireDefault(require("app/components/elements/CloseButton"));

var _Reveal = _interopRequireDefault(require("app/components/elements/Reveal"));

var _reactNotification = require("react-notification");

var _immutable = require("immutable");

var _counterpart = _interopRequireDefault(require("counterpart"));

var userActions = _interopRequireWildcard(require("app/redux/UserReducer"));

var appActions = _interopRequireWildcard(require("app/redux/AppReducer"));

var transactionActions = _interopRequireWildcard(require("app/redux/TransactionReducer"));

var _LoginForm = _interopRequireDefault(require("app/components/modules/LoginForm"));

var _ConfirmTransactionForm = _interopRequireDefault(require("app/components/modules/ConfirmTransactionForm"));

var _shouldComponentUpdate = _interopRequireDefault(require("app/utils/shouldComponentUpdate"));

var _TermsAgree = _interopRequireDefault(require("app/components/modules/TermsAgree"));

var _PostAdvancedSettings = _interopRequireDefault(require("app/components/modules/PostAdvancedSettings"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Modals = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Modals, _React$Component);

  var _super = _createSuper(Modals);

  function Modals() {
    var _this;

    (0, _classCallCheck2["default"])(this, Modals);
    _this = _super.call(this);
    _this.shouldComponentUpdate = (0, _shouldComponentUpdate["default"])((0, _assertThisInitialized2["default"])(_this), 'Modals');
    return _this;
  }

  (0, _createClass2["default"])(Modals, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          show_login_modal = _this$props.show_login_modal,
          show_confirm_modal = _this$props.show_confirm_modal,
          show_bandwidth_error_modal = _this$props.show_bandwidth_error_modal,
          show_transaction_fee_error_modal = _this$props.show_transaction_fee_error_modal,
          show_post_advanced_settings_modal = _this$props.show_post_advanced_settings_modal,
          hideLogin = _this$props.hideLogin,
          hideConfirm = _this$props.hideConfirm,
          show_terms_modal = _this$props.show_terms_modal,
          notifications = _this$props.notifications,
          removeNotification = _this$props.removeNotification,
          hidePromotePost = _this$props.hidePromotePost,
          show_promote_post_modal = _this$props.show_promote_post_modal,
          hideBandwidthError = _this$props.hideBandwidthError,
          hideTransactionFeeError = _this$props.hideTransactionFeeError,
          hidePostAdvancedSettings = _this$props.hidePostAdvancedSettings,
          username = _this$props.username;
      var notifications_array = notifications ? notifications.toArray().map(function (n) {
        n.onClick = function () {
          return removeNotification(n.key);
        };

        return n;
      }) : [];

      var buySteemPower = function buySteemPower(e) {// if (e && e.preventDefault) e.preventDefault();
        // const new_window = window.open();
        // new_window.opener = null;
        // new_window.location =
        //     'https://blocktrades.us/?input_coin_type=eth&output_coin_type=steem_power&receive_address=' +
        //     username;
      };

      var buyBlurt = function buyBlurt(e) {
        if (e && e.preventDefault) e.preventDefault();
        var new_window = window.open();
        new_window.opener = null;
        new_window.location = 'https://ionomy.com/en/markets/btc-blurt';
      };

      return /*#__PURE__*/_react["default"].createElement("div", null, show_login_modal && /*#__PURE__*/_react["default"].createElement(_Reveal["default"], {
        onHide: hideLogin,
        show: show_login_modal
      }, /*#__PURE__*/_react["default"].createElement(_LoginForm["default"], {
        onCancel: hideLogin
      })), show_confirm_modal && /*#__PURE__*/_react["default"].createElement(_Reveal["default"], {
        onHide: hideConfirm,
        show: show_confirm_modal
      }, /*#__PURE__*/_react["default"].createElement(_CloseButton["default"], {
        onClick: hideConfirm
      }), /*#__PURE__*/_react["default"].createElement(_ConfirmTransactionForm["default"], {
        onCancel: hideConfirm
      })), show_terms_modal && /*#__PURE__*/_react["default"].createElement(_Reveal["default"], {
        show: show_terms_modal
      }, /*#__PURE__*/_react["default"].createElement(_TermsAgree["default"], {
        onCancel: hideLogin
      })), show_bandwidth_error_modal && /*#__PURE__*/_react["default"].createElement(_Reveal["default"], {
        onHide: hideBandwidthError,
        show: show_bandwidth_error_modal
      }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_CloseButton["default"], {
        onClick: hideBandwidthError
      }), /*#__PURE__*/_react["default"].createElement("h4", null, (0, _counterpart["default"])('modals_jsx.your_transaction_failed')), /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement("h5", null, (0, _counterpart["default"])('modals_jsx.out_of_bandwidth_title')), /*#__PURE__*/_react["default"].createElement("p", null, (0, _counterpart["default"])('modals_jsx.out_of_bandwidth_reason')), /*#__PURE__*/_react["default"].createElement("p", null, (0, _counterpart["default"])('modals_jsx.out_of_bandwidth_reason_2')), /*#__PURE__*/_react["default"].createElement("p", null, (0, _counterpart["default"])('modals_jsx.out_of_bandwidth_option_title')), /*#__PURE__*/_react["default"].createElement("ol", null, /*#__PURE__*/_react["default"].createElement("li", null, (0, _counterpart["default"])('modals_jsx.out_of_bandwidth_option_1')), /*#__PURE__*/_react["default"].createElement("li", null, (0, _counterpart["default"])('modals_jsx.out_of_bandwidth_option_2')), /*#__PURE__*/_react["default"].createElement("li", null, (0, _counterpart["default"])('modals_jsx.out_of_bandwidth_option_3'))), /*#__PURE__*/_react["default"].createElement("button", {
        className: "button",
        onClick: buySteemPower
      }, (0, _counterpart["default"])('g.buy_blurt_power')))), show_transaction_fee_error_modal && /*#__PURE__*/_react["default"].createElement(_Reveal["default"], {
        onHide: hideTransactionFeeError,
        show: show_transaction_fee_error_modal
      }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_CloseButton["default"], {
        onClick: hideTransactionFeeError
      }), /*#__PURE__*/_react["default"].createElement("h4", null, (0, _counterpart["default"])('modals_jsx.your_transaction_failed')), /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement("h5", null, (0, _counterpart["default"])('modals_jsx.out_of_transaction_fee_title')), /*#__PURE__*/_react["default"].createElement("p", null, (0, _counterpart["default"])('modals_jsx.out_of_transaction_fee_reason')), /*#__PURE__*/_react["default"].createElement("p", null, (0, _counterpart["default"])('modals_jsx.out_of_transaction_fee_option_title')), /*#__PURE__*/_react["default"].createElement("ol", null, /*#__PURE__*/_react["default"].createElement("li", null, (0, _counterpart["default"])('modals_jsx.out_of_transaction_fee_option_1'))), /*#__PURE__*/_react["default"].createElement("button", {
        className: "button",
        onClick: buyBlurt
      }, (0, _counterpart["default"])('g.buy_blurt')))), show_post_advanced_settings_modal && /*#__PURE__*/_react["default"].createElement(_Reveal["default"], {
        onHide: hidePostAdvancedSettings,
        show: show_post_advanced_settings_modal ? true : false
      }, /*#__PURE__*/_react["default"].createElement(_CloseButton["default"], {
        onClick: hidePostAdvancedSettings
      }), /*#__PURE__*/_react["default"].createElement(_PostAdvancedSettings["default"], {
        formId: show_post_advanced_settings_modal
      })), /*#__PURE__*/_react["default"].createElement(_reactNotification.NotificationStack, {
        style: false,
        notifications: notifications_array,
        onDismiss: function onDismiss(n) {
          return removeNotification(n.key);
        }
      }));
    }
  }]);
  return Modals;
}(_react["default"].Component);

(0, _defineProperty2["default"])(Modals, "defaultProps", {
  username: '',
  notifications: undefined,
  removeNotification: function removeNotification() {},
  show_terms_modal: false,
  show_promote_post_modal: false,
  show_bandwidth_error_modal: false,
  show_confirm_modal: false,
  show_login_modal: false,
  show_post_advanced_settings_modal: ''
});
(0, _defineProperty2["default"])(Modals, "propTypes", {
  show_login_modal: _propTypes["default"].bool,
  show_confirm_modal: _propTypes["default"].bool,
  show_bandwidth_error_modal: _propTypes["default"].bool,
  show_transaction_fee_error_modal: _propTypes["default"].bool,
  show_promote_post_modal: _propTypes["default"].bool,
  show_post_advanced_settings_modal: _propTypes["default"].string,
  hideLogin: _propTypes["default"].func.isRequired,
  username: _propTypes["default"].string,
  hideConfirm: _propTypes["default"].func.isRequired,
  hidePromotePost: _propTypes["default"].func.isRequired,
  hideBandwidthError: _propTypes["default"].func.isRequired,
  hideTransactionFeeError: _propTypes["default"].func.isRequired,
  hidePostAdvancedSettings: _propTypes["default"].func.isRequired,
  notifications: _propTypes["default"].object,
  show_terms_modal: _propTypes["default"].bool,
  removeNotification: _propTypes["default"].func
});

var _default = (0, _reactRedux.connect)(function (state) {
  return {
    username: state.user.getIn(['current', 'username']),
    show_login_modal: state.user.get('show_login_modal'),
    show_confirm_modal: state.transaction.get('show_confirm_modal'),
    show_promote_post_modal: state.user.get('show_promote_post_modal'),
    notifications: state.app.get('notifications'),
    show_terms_modal: state.user.get('show_terms_modal') && state.routing.locationBeforeTransitions.pathname !== '/tos.html' && state.routing.locationBeforeTransitions.pathname !== '/privacy.html',
    show_bandwidth_error_modal: state.transaction.getIn(['errors', 'bandwidthError']),
    show_transaction_fee_error_modal: state.transaction.getIn(['errors', 'transactionFeeError']),
    show_post_advanced_settings_modal: state.user.get('show_post_advanced_settings_modal')
  };
}, function (dispatch) {
  return {
    hideLogin: function hideLogin(e) {
      if (e) e.preventDefault();
      dispatch(userActions.hideLogin());
    },
    hideConfirm: function hideConfirm(e) {
      if (e) e.preventDefault();
      dispatch(transactionActions.hideConfirm());
    },
    hidePromotePost: function hidePromotePost(e) {
      if (e) e.preventDefault();
      dispatch(userActions.hidePromotePost());
    },
    hideBandwidthError: function hideBandwidthError(e) {
      if (e) e.preventDefault();
      dispatch(transactionActions.dismissError({
        key: 'bandwidthError'
      }));
    },
    hideTransactionFeeError: function hideTransactionFeeError(e) {
      if (e) e.preventDefault();
      dispatch(transactionActions.dismissError({
        key: 'transactionFeeError'
      }));
    },
    hidePostAdvancedSettings: function hidePostAdvancedSettings(e) {
      if (e) e.preventDefault();
      dispatch(userActions.hidePostAdvancedSettings());
    },
    // example: addNotification: ({key, message}) => dispatch({type: 'ADD_NOTIFICATION', payload: {key, message}}),
    removeNotification: function removeNotification(key) {
      return dispatch(appActions.removeNotification({
        key: key
      }));
    }
  };
})(Modals);

exports["default"] = _default;