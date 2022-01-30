"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _counterpart = _interopRequireDefault(require("counterpart"));

var _reactRouter = require("react-router");

var _NativeSelect = _interopRequireDefault(require("app/components/elements/NativeSelect"));

var _client_config = require("app/client_config");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var SortOrder = function SortOrder(_ref) {
  var topic = _ref.topic,
      sortOrder = _ref.sortOrder,
      horizontal = _ref.horizontal,
      pathname = _ref.pathname;

  /*
   * We do not sort the user feed by anything other than 'new'.
   * So don't make links to it from the SortOrder component.
   * Instead fall back to the 'all tags' route when a user attempts to sort from a feed page.
   * If a user lands on the 'feed' page and the sort order is displayed (e.g. a mobile user)
   * display the active sort as 'new'.
   */
  var tag = topic;
  var sort = sortOrder;

  if (topic === 'feed') {
    tag = '';
    sort = 'created';
  } // If we are at the homepage, the sort order is 'hot'


  if (pathname === '/') {
    tag = '';
    sort = 'hot';
  }

  var makeRoute = function makeRoute(tag, sort) {
    console.log("tag:".concat(tag, ", sort.value:").concat(sort.value));

    if (sort.value === 'recommended') {
      return "/@".concat(_client_config.RECOMMENDED_FOLLOW_ACCOUNT, "/feed");
    } else {
      return tag ? "/".concat(sort.value, "/").concat(tag) : "/".concat(sort.value);
    }
  };

  var handleChange = function handleChange(tag) {
    return function (sort) {
      _reactRouter.browserHistory.replace(makeRoute(tag, sort));
    };
  };

  var sorts = function sorts(tag) {
    return [{
      value: 'hot',
      label: (0, _counterpart["default"])('main_menu.hot'),
      link: "/hot/".concat(tag)
    }, {
      value: 'trending',
      label: (0, _counterpart["default"])('main_menu.trending'),
      link: "/trending/".concat(tag)
    }, {
      value: 'created',
      label: (0, _counterpart["default"])('g.new'),
      link: "/created/".concat(tag)
    }, {
      value: 'dapps',
      label: "DApps",
      link: "/dapps"
    } // {
    //     value: 'recommended',
    //     label: tt('g.recommended'),
    //     link: `/@${RECOMMENDED_FOLLOW_ACCOUNT}/feed`,
    // },
    ];
  };

  return horizontal ? /*#__PURE__*/_react["default"].createElement("ul", {
    className: "nav__block-list"
  }, sorts(tag).map(function (i) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: i.value,
      className: "nav__block-list-item ".concat(i.value === sort ? 'nav__block-list-item--active' : '')
    }, /*#__PURE__*/_react["default"].createElement(_reactRouter.Link, {
      to: i.link
    }, i.label));
  })) : /*#__PURE__*/_react["default"].createElement(_NativeSelect["default"], {
    currentlySelected: sort,
    options: sorts(tag),
    onChange: handleChange(tag)
  });
};

SortOrder.propTypes = {
  topic: _propTypes["default"].string,
  sortOrder: _propTypes["default"].string,
  horizontal: _propTypes["default"].bool,
  pathname: _propTypes["default"].string
};
SortOrder.defaultProps = {
  horizontal: false,
  topic: '',
  sortOrder: '',
  pathname: ''
};
var _default = SortOrder;
exports["default"] = _default;