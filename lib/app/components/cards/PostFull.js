"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouter = require("react-router");

var _TimeAgoWrapper = _interopRequireDefault(require("app/components/elements/TimeAgoWrapper"));

var _Icon = _interopRequireDefault(require("app/components/elements/Icon"));

var _reactRedux = require("react-redux");

var userActions = _interopRequireWildcard(require("app/redux/UserReducer"));

var transactionActions = _interopRequireWildcard(require("app/redux/TransactionReducer"));

var globalActions = _interopRequireWildcard(require("app/redux/GlobalReducer"));

var _Voting = _interopRequireDefault(require("app/components/elements/Voting"));

var _Reblog = _interopRequireDefault(require("app/components/elements/Reblog"));

var _MarkdownViewer = _interopRequireDefault(require("app/components/cards/MarkdownViewer"));

var _ReplyEditor = _interopRequireDefault(require("app/components/elements/ReplyEditor"));

var _Accessors = require("app/utils/Accessors");

var _ExtractContent = _interopRequireDefault(require("app/utils/ExtractContent"));

var _TagList = _interopRequireDefault(require("app/components/elements/TagList"));

var _Author = _interopRequireDefault(require("app/components/elements/Author"));

var _ParsersAndFormatters = require("app/utils/ParsersAndFormatters");

var _DMCAList = _interopRequireDefault(require("app/utils/DMCAList"));

var _ShareMenu = _interopRequireDefault(require("app/components/elements/ShareMenu"));

var _ServerApiClient = require("app/utils/ServerApiClient");

var _Userpic = _interopRequireDefault(require("app/components/elements/Userpic"));

var _client_config = require("app/client_config");

var _counterpart = _interopRequireDefault(require("counterpart"));

var _userIllegalContent = _interopRequireDefault(require("app/utils/userIllegalContent"));

var _ImageUserBlockList = _interopRequireDefault(require("app/utils/ImageUserBlockList"));

var _LoadingIndicator = _interopRequireDefault(require("app/components/elements/LoadingIndicator"));

var _StateFunctions = require("app/utils/StateFunctions");

var _GoogleAd = require("app/components/elements/GoogleAd");

var _ContentEditedWrapper = _interopRequireDefault(require("../elements/ContentEditedWrapper"));

var _Blacklist = _interopRequireDefault(require("../elements/Blacklist"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function TimeAuthorCategory(_ref) {
  var content = _ref.content,
      authorRepLog10 = _ref.authorRepLog10,
      showTags = _ref.showTags;
  return /*#__PURE__*/_react["default"].createElement("span", {
    className: "PostFull__time_author_category vcard"
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    name: "clock",
    className: "space-right"
  }), /*#__PURE__*/_react["default"].createElement(_TimeAgoWrapper["default"], {
    date: content.created
  }), " ", (0, _counterpart["default"])('g.by'), ' ', /*#__PURE__*/_react["default"].createElement(_Author["default"], {
    author: content.author,
    authorRepLog10: authorRepLog10,
    showAffiliation: true
  }), /*#__PURE__*/_react["default"].createElement(_Blacklist["default"], {
    author: content.author
  }), showTags && /*#__PURE__*/_react["default"].createElement("span", null, ' ', (0, _counterpart["default"])('g.in'), " ", /*#__PURE__*/_react["default"].createElement(_TagList["default"], {
    post: content,
    single: true
  })));
}

function TimeAuthorCategoryLarge(_ref2) {
  var content = _ref2.content,
      authorRepLog10 = _ref2.authorRepLog10;
  return /*#__PURE__*/_react["default"].createElement("span", {
    className: "PostFull__time_author_category_large vcard"
  }, /*#__PURE__*/_react["default"].createElement(_Userpic["default"], {
    account: content.author
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "right-side"
  }, /*#__PURE__*/_react["default"].createElement(_Author["default"], {
    author: content.author,
    authorRepLog10: authorRepLog10,
    showAffiliation: true
  }), /*#__PURE__*/_react["default"].createElement(_Blacklist["default"], {
    author: content.author
  }), /*#__PURE__*/_react["default"].createElement("span", null, ' ', (0, _counterpart["default"])('g.in'), " ", /*#__PURE__*/_react["default"].createElement(_TagList["default"], {
    post: content,
    single: true
  })), ' ', "\u2022\xA0 ", /*#__PURE__*/_react["default"].createElement(_TimeAgoWrapper["default"], {
    date: content.created
  }), "\xA0", ' ', /*#__PURE__*/_react["default"].createElement(_ContentEditedWrapper["default"], {
    createDate: content.created,
    updateDate: content.last_update
  })));
}

var PostFull = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(PostFull, _React$Component);

  var _super = _createSuper(PostFull);

  function PostFull() {
    var _this;

    (0, _classCallCheck2["default"])(this, PostFull);
    _this = _super.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "showPromotePost", function () {
      var post_content = _this.props.cont.get(_this.props.post);

      if (!post_content) return;
      var author = post_content.get('author');
      var permlink = post_content.get('permlink');

      _this.props.showPromotePost(author, permlink);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "showExplorePost", function () {
      var permlink = _this.share_params.link;
      var title = _this.share_params.rawtitle;

      _this.props.showExplorePost(permlink, title);
    });
    _this.state = {};
    _this.fbShare = _this.fbShare.bind((0, _assertThisInitialized2["default"])(_this));
    _this.twitterShare = _this.twitterShare.bind((0, _assertThisInitialized2["default"])(_this));
    _this.redditShare = _this.redditShare.bind((0, _assertThisInitialized2["default"])(_this));
    _this.linkedInShare = _this.linkedInShare.bind((0, _assertThisInitialized2["default"])(_this));
    _this.showExplorePost = _this.showExplorePost.bind((0, _assertThisInitialized2["default"])(_this));

    _this.onShowReply = function () {
      var _assertThisInitialize = (0, _assertThisInitialized2["default"])(_this),
          _assertThisInitialize2 = _assertThisInitialize.state,
          showReply = _assertThisInitialize2.showReply,
          formId = _assertThisInitialize2.formId;

      _this.setState({
        showReply: !showReply,
        showEdit: false
      });

      saveOnShow(formId, !showReply ? 'reply' : null);
    };

    _this.onShowEdit = function () {
      var _assertThisInitialize3 = (0, _assertThisInitialized2["default"])(_this),
          _assertThisInitialize4 = _assertThisInitialize3.state,
          showEdit = _assertThisInitialize4.showEdit,
          formId = _assertThisInitialize4.formId;

      _this.setState({
        showEdit: !showEdit,
        showReply: false
      });

      saveOnShow(formId, !showEdit ? 'edit' : null);
    };

    _this.onDeletePost = function () {
      var _assertThisInitialize5 = (0, _assertThisInitialized2["default"])(_this),
          deletePost = _assertThisInitialize5.props.deletePost;

      var content = _this.props.cont.get(_this.props.post);

      deletePost(content.get('author'), content.get('permlink'), _this.props.operation_flat_fee, _this.props.bandwidth_kbytes_fee);
    };

    return _this;
  }

  (0, _createClass2["default"])(PostFull, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var post = this.props.post;
      var formId = "postFull-".concat(post);
      this.setState({
        formId: formId,
        PostFullReplyEditor: (0, _ReplyEditor["default"])(formId + '-reply'),
        PostFullEditEditor: (0, _ReplyEditor["default"])(formId + '-edit')
      });

      if (process.env.BROWSER) {
        var showEditor = localStorage.getItem('showEditor-' + formId);

        if (showEditor) {
          showEditor = JSON.parse(showEditor);

          if (showEditor.type === 'reply') {
            this.setState({
              showReply: true
            });
          }

          if (showEditor.type === 'edit') {
            this.setState({
              showEdit: true
            });
          }
        }
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      var _this2 = this;

      var names = 'cont, post, username'.split(', ');
      return names.findIndex(function (name) {
        return _this2.props[name] !== nextProps[name];
      }) !== -1 || this.state !== nextState;
    }
  }, {
    key: "fbShare",
    value: function fbShare(e) {
      var href = this.share_params.url;
      e.preventDefault();
      window.open("https://www.facebook.com/sharer/sharer.php?u=".concat(href), 'fbshare', 'width=600, height=400, scrollbars=no');
      (0, _ServerApiClient.serverApiRecordEvent)('FbShare', this.share_params.link);
    }
  }, {
    key: "twitterShare",
    value: function twitterShare(e) {
      (0, _ServerApiClient.serverApiRecordEvent)('TwitterShare', this.share_params.link);
      e.preventDefault();
      var winWidth = 640;
      var winHeight = 460;
      var winTop = screen.height / 2 - winHeight / 2;
      var winLeft = screen.width / 2 - winWidth / 2;
      var s = this.share_params;
      var q = 'text=' + encodeURIComponent(s.title) + '&url=' + encodeURIComponent(s.url);
      window.open('http://twitter.com/share?' + q, 'Share', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);
    }
  }, {
    key: "redditShare",
    value: function redditShare(e) {
      (0, _ServerApiClient.serverApiRecordEvent)('RedditShare', this.share_params.link);
      e.preventDefault();
      var s = this.share_params;
      var q = 'title=' + encodeURIComponent(s.title) + '&url=' + encodeURIComponent(s.url);
      window.open('https://www.reddit.com/submit?' + q, 'Share');
    }
  }, {
    key: "linkedInShare",
    value: function linkedInShare(e) {
      (0, _ServerApiClient.serverApiRecordEvent)('LinkedInShare', this.share_params.link);
      e.preventDefault();
      var winWidth = 720;
      var winHeight = 480;
      var winTop = screen.height / 2 - winHeight / 2;
      var winLeft = screen.width / 2 - winWidth / 2;
      var s = this.share_params;
      var q = 'title=' + encodeURIComponent(s.title) + '&url=' + encodeURIComponent(s.url) + '&source=Blurt&mini=true';
      window.open('https://www.linkedin.com/shareArticle?' + q, 'Share', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          username = _this$props.username,
          post = _this$props.post,
          _this$state = this.state,
          PostFullReplyEditor = _this$state.PostFullReplyEditor,
          PostFullEditEditor = _this$state.PostFullEditEditor,
          formId = _this$state.formId,
          showReply = _this$state.showReply,
          showEdit = _this$state.showEdit,
          onShowReply = this.onShowReply,
          onShowEdit = this.onShowEdit,
          onDeletePost = this.onDeletePost;
      var post_content = this.props.cont.get(this.props.post);
      if (!post_content) return null;
      var p = (0, _ExtractContent["default"])(_Accessors.immutableAccessor, post_content);
      var content = post_content.toJS();
      var author = content.author,
          permlink = content.permlink,
          parent_author = content.parent_author,
          parent_permlink = content.parent_permlink;
      var jsonMetadata = this.state.showReply ? null : p.json_metadata; // let author_link = '/@' + content.author;

      var link = "/@".concat(content.author, "/").concat(content.permlink);
      if (content.category) link = "/".concat(content.category).concat(link);
      var category = content.category,
          title = content.title,
          body = content.body;
      if (process.env.BROWSER && title) document.title = title + ' — ' + _client_config.APP_NAME;
      var content_body = content.body;
      var url = "/".concat(category, "/@").concat(author, "/").concat(permlink);

      var bDMCAStop = _DMCAList["default"].includes(url);

      var bIllegalContentUser = _userIllegalContent["default"].includes(content.author);

      if (bDMCAStop) {
        content_body = (0, _counterpart["default"])('postfull_jsx.this_post_is_not_available_due_to_a_copyright_claim');
      } // detect illegal users


      if (bIllegalContentUser) {
        content_body = 'Not available for legal reasons.';
      }

      var bShowLoading = !bIllegalContentUser && !bDMCAStop && content.body.length < content.body_length; // hide images if user is on blacklist

      var hideImages = _ImageUserBlockList["default"].includes(content.author);

      var replyParams = {
        author: author,
        permlink: permlink,
        parent_author: parent_author,
        parent_permlink: parent_permlink,
        category: category,
        title: title,
        body: body
      };
      this.share_params = {
        link: link,
        url: 'https://' + _client_config.APP_DOMAIN + link,
        rawtitle: title,
        title: title + ' — ' + _client_config.APP_NAME,
        desc: p.desc
      };
      var share_menu = [{
        link: '#',
        onClick: this.fbShare,
        value: 'Facebook',
        title: (0, _counterpart["default"])('postfull_jsx.share_on_facebook'),
        icon: 'facebook'
      }, {
        link: '#',
        onClick: this.twitterShare,
        value: 'Twitter',
        title: (0, _counterpart["default"])('postfull_jsx.share_on_twitter'),
        icon: 'twitter'
      }, {
        link: '#',
        onClick: this.redditShare,
        value: 'Reddit',
        title: (0, _counterpart["default"])('postfull_jsx.share_on_reddit'),
        icon: 'reddit'
      }];
      var Editor = this.state.showReply ? PostFullReplyEditor : PostFullEditEditor;
      var renderedEditor = null;

      if (showReply || showEdit) {
        renderedEditor = /*#__PURE__*/_react["default"].createElement("div", {
          key: "editor"
        }, /*#__PURE__*/_react["default"].createElement(Editor, (0, _extends2["default"])({}, replyParams, {
          type: this.state.showReply ? 'submit_comment' : 'edit',
          successCallback: function successCallback() {
            _this3.setState({
              showReply: false,
              showEdit: false
            });

            saveOnShow(formId, null);
          },
          onCancel: function onCancel() {
            _this3.setState({
              showReply: false,
              showEdit: false
            });

            saveOnShow(formId, null);
          },
          jsonMetadata: jsonMetadata
        })));
      }

      var pending_payout = (0, _ParsersAndFormatters.parsePayoutAmount)(content.pending_payout_value);
      var total_payout = (0, _ParsersAndFormatters.parsePayoutAmount)(content.total_payout_value);
      var high_quality_post = pending_payout + total_payout > 10.0;

      var post_header = /*#__PURE__*/_react["default"].createElement("h1", {
        className: "entry-title"
      }, content.title);

      if (content.depth > 0) {
        var parent_link = "/".concat(content.category, "/@").concat(content.parent_author, "/").concat(content.parent_permlink);
        var direct_parent_link;

        if (content.depth > 1) {
          direct_parent_link = /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_reactRouter.Link, {
            to: parent_link
          }, (0, _counterpart["default"])('postfull_jsx.view_the_direct_parent')));
        }

        post_header = /*#__PURE__*/_react["default"].createElement("div", {
          className: "callout"
        }, /*#__PURE__*/_react["default"].createElement("h3", {
          className: "entry-title"
        }, (0, _counterpart["default"])('g.re'), ": ", content.root_title), /*#__PURE__*/_react["default"].createElement("h5", null, (0, _counterpart["default"])('postfull_jsx.you_are_viewing_a_single_comments_thread_from'), ":"), /*#__PURE__*/_react["default"].createElement("p", null, content.root_title), /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_reactRouter.Link, {
          to: content.url
        }, (0, _counterpart["default"])('postfull_jsx.view_the_full_context'))), direct_parent_link));
      }

      var _isPaidout = post_content.get('cashout_time') === '1969-12-31T23:59:59'; // TODO: audit after HF19. #1259


      var showReblog = !_isPaidout;
      var showPromote = false; //username && !_isPaidout && post_content.get('depth') == 0;

      var showReplyOption = username !== undefined && post_content.get('depth') < 255;
      var showEditOption = username === author;
      var showDeleteOption = username === author && (0, _StateFunctions.allowDelete)(post_content) && !_isPaidout;
      var authorRepLog10 = (0, _ParsersAndFormatters.repLog10)(content.author_reputation);
      var isPreViewCount = Date.parse(post_content.get('created')) < 1480723200000; // check if post was created before view-count tracking began (2016-12-03)

      var contentBody;

      if (bShowLoading) {
        contentBody = /*#__PURE__*/_react["default"].createElement(_LoadingIndicator["default"], {
          type: "circle-strong"
        });
      } else {
        contentBody = /*#__PURE__*/_react["default"].createElement(_MarkdownViewer["default"], {
          formId: formId + '-viewer',
          text: content_body,
          jsonMetadata: jsonMetadata,
          large: true,
          highQualityPost: high_quality_post,
          noImage: content.stats.gray,
          hideImages: hideImages
        });
      }

      var payoutValueInDollar = parseFloat((total_payout < pending_payout ? pending_payout : total_payout) * this.props.pricePerBlurt).toFixed(2);
      return /*#__PURE__*/_react["default"].createElement("article", {
        className: "PostFull hentry",
        itemScope: true,
        itemType: "http://schema.org/Blog"
      }, showEdit ? renderedEditor : /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "PostFull__header"
      }, post_header, /*#__PURE__*/_react["default"].createElement(TimeAuthorCategoryLarge, {
        content: content,
        authorRepLog10: authorRepLog10
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "PostFull__body entry-content"
      }, contentBody)), showPromote && /*#__PURE__*/_react["default"].createElement("button", {
        className: "Promote__button float-right button hollow tiny",
        onClick: this.showPromotePost
      }, (0, _counterpart["default"])('g.promote')), /*#__PURE__*/_react["default"].createElement(_TagList["default"], {
        post: content,
        horizontal: true
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "PostFull__footer row"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "columns medium-12 large-4"
      }, /*#__PURE__*/_react["default"].createElement(TimeAuthorCategory, {
        content: content,
        authorRepLog10: authorRepLog10
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "columns medium-12 large-2 "
      }, /*#__PURE__*/_react["default"].createElement(_Voting["default"], {
        post: post
      }), "\xA0", /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement("b", {
        style: {
          color: '#F2652D'
        }
      }, "$", payoutValueInDollar))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "RightShare__Menu small-11 medium-12 large-6 columns"
      }, showReblog && /*#__PURE__*/_react["default"].createElement(_Reblog["default"], {
        author: author,
        permlink: permlink
      }), /*#__PURE__*/_react["default"].createElement("span", {
        className: "PostFull__reply"
      }, showReplyOption && /*#__PURE__*/_react["default"].createElement("a", {
        onClick: onShowReply
      }, (0, _counterpart["default"])('g.reply')), ' ', showEditOption && !showEdit && /*#__PURE__*/_react["default"].createElement("a", {
        onClick: onShowEdit
      }, (0, _counterpart["default"])('g.edit')), ' ', showDeleteOption && !showReply && /*#__PURE__*/_react["default"].createElement("a", {
        onClick: onDeletePost
      }, (0, _counterpart["default"])('g.delete'))), /*#__PURE__*/_react["default"].createElement("span", {
        className: "PostFull__responses"
      }, /*#__PURE__*/_react["default"].createElement(_reactRouter.Link, {
        to: link,
        title: (0, _counterpart["default"])('g.responses', {
          count: content.children
        })
      }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        name: "chatboxes",
        className: "space-right"
      }), content.children)), /*#__PURE__*/_react["default"].createElement(_ShareMenu["default"], {
        menu: share_menu
      }), /*#__PURE__*/_react["default"].createElement("button", {
        className: "explore-post",
        title: (0, _counterpart["default"])('g.share_this_post'),
        onClick: this.showExplorePost
      }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        name: "link",
        className: "chain-right"
      })))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "row"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "column large-8 medium-10 small-12"
      }, showReply && renderedEditor)));
    }
  }]);
  return PostFull;
}(_react["default"].Component);

(0, _defineProperty2["default"])(PostFull, "propTypes", {
  // html props

  /* Show extra options (component is being viewed alone) */
  cont: _propTypes["default"].object.isRequired,
  post: _propTypes["default"].string.isRequired,
  // connector props
  username: _propTypes["default"].string,
  unlock: _propTypes["default"].func.isRequired,
  deletePost: _propTypes["default"].func.isRequired,
  showPromotePost: _propTypes["default"].func.isRequired,
  showExplorePost: _propTypes["default"].func.isRequired
});

var _default = (0, _reactRedux.connect)( // mapStateToProps
function (state, ownProps) {
  return _objectSpread(_objectSpread({}, ownProps), {}, {
    username: state.user.getIn(['current', 'username']),
    operation_flat_fee: state.global.getIn(['props', 'operation_flat_fee']),
    bandwidth_kbytes_fee: state.global.getIn(['props', 'bandwidth_kbytes_fee']),
    pricePerBlurt: state.global.getIn(['props', 'price_per_blurt'])
  });
}, // mapDispatchToProps
function (dispatch) {
  return {
    dispatchSubmit: function dispatchSubmit(data) {
      dispatch(userActions.usernamePasswordLogin(_objectSpread({}, data)));
    },
    clearError: function clearError() {
      dispatch(userActions.loginError({
        error: null
      }));
    },
    unlock: function unlock() {
      dispatch(userActions.showLogin());
    },
    deletePost: function deletePost(author, permlink, operationFlatFee, bandwidthKbytesFee) {
      var operation = {
        author: author,
        permlink: permlink
      };
      var size = JSON.stringify(operation).replace(/[\[\]\,\"]/g, '').length;
      var bw_fee = Math.max(0.001, (size / 1024 * bandwidthKbytesFee).toFixed(3));
      var fee = (operationFlatFee + bw_fee).toFixed(3);
      dispatch(transactionActions.broadcastOperation({
        type: 'delete_comment',
        operation: operation,
        confirm: (0, _counterpart["default"])('g.operation_cost', {
          fee: fee
        })
      }));
    },
    showPromotePost: function showPromotePost(author, permlink) {
      dispatch(globalActions.showDialog({
        name: 'promotePost',
        params: {
          author: author,
          permlink: permlink
        }
      }));
    },
    showExplorePost: function showExplorePost(permlink, title) {
      dispatch(globalActions.showDialog({
        name: 'explorePost',
        params: {
          permlink: permlink,
          title: title
        }
      }));
    }
  };
})(PostFull);

exports["default"] = _default;

var saveOnShow = function saveOnShow(formId, type) {
  if (process.env.BROWSER) {
    if (type) localStorage.setItem('showEditor-' + formId, JSON.stringify({
      type: type
    }, null, 0));else {
      // console.log('del formId', formId)
      localStorage.removeItem('showEditor-' + formId);
      localStorage.removeItem('replyEditorData-' + formId + '-reply');
      localStorage.removeItem('replyEditorData-' + formId + '-edit');
    }
  }
};