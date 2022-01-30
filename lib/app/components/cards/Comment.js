"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.sortComments = sortComments;

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

var _Author = _interopRequireDefault(require("app/components/elements/Author"));

var _ReplyEditor = _interopRequireDefault(require("app/components/elements/ReplyEditor"));

var _MarkdownViewer = _interopRequireDefault(require("app/components/cards/MarkdownViewer"));

var _shouldComponentUpdate = _interopRequireDefault(require("app/utils/shouldComponentUpdate"));

var _Voting = _interopRequireDefault(require("app/components/elements/Voting"));

var _reactRedux = require("react-redux");

var _reactRouter = require("react-router");

var userActions = _interopRequireWildcard(require("app/redux/UserReducer"));

var _TimeAgoWrapper = _interopRequireDefault(require("app/components/elements/TimeAgoWrapper"));

var _Userpic = _interopRequireDefault(require("app/components/elements/Userpic"));

var transactionActions = _interopRequireWildcard(require("app/redux/TransactionReducer"));

var _counterpart = _interopRequireDefault(require("counterpart"));

var _ParsersAndFormatters = require("app/utils/ParsersAndFormatters");

var _bytebuffer = require("bytebuffer");

var _StateFunctions = require("app/utils/StateFunctions");

var _ImageUserBlockList = _interopRequireDefault(require("app/utils/ImageUserBlockList"));

var _ContentEditedWrapper = _interopRequireDefault(require("../elements/ContentEditedWrapper"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

// returns true if the comment has a 'hide' flag AND has no descendants w/ positive payout
function hideSubtree(cont, c) {
  return cont.getIn([c, 'stats', 'hide']) && !hasPositivePayout(cont, c);
}

function hasPositivePayout(postmap, post_url) {
  var post = postmap.get(post_url);

  if (parseFloat(post.get('net_rshares')) > 0) {
    return true;
  }

  if (post.get('replies').find(function (url) {
    return hasPositivePayout(postmap, url);
  })) {
    return true;
  }

  return false;
}

function sortComments(cont, comments, sort_order) {
  function netNegative(a) {
    return a.get('net_rshares') < 0;
  }

  function totalPayout(a) {
    return (0, _ParsersAndFormatters.parsePayoutAmount)(a.get('pending_payout_value')) + (0, _ParsersAndFormatters.parsePayoutAmount)(a.get('total_payout_value')) + (0, _ParsersAndFormatters.parsePayoutAmount)(a.get('curator_payout_value'));
  }

  function netRshares(a) {
    return _bytebuffer.Long.fromString(String(a.get('net_rshares')));
  }

  function countUpvotes(a) {
    return a.get('active_votes').filter(function (vote) {
      return vote.get('percent') > 0;
    }).size;
  }
  /** sorts replies by upvotes, age, or payout */


  var sort_orders = {
    votes: function votes(a, b) {
      var aactive = countUpvotes(cont.get(a));
      var bactive = countUpvotes(cont.get(b));
      return bactive - aactive;
    },
    "new": function _new(a, b) {
      var acontent = cont.get(a);
      var bcontent = cont.get(b);

      if (netNegative(acontent)) {
        return 1;
      } else if (netNegative(bcontent)) {
        return -1;
      }

      var aactive = Date.parse(acontent.get('created'));
      var bactive = Date.parse(bcontent.get('created'));
      return bactive - aactive;
    },
    trending: function trending(a, b) {
      var acontent = cont.get(a);
      var bcontent = cont.get(b);

      if (netNegative(acontent)) {
        return 1;
      } else if (netNegative(bcontent)) {
        return -1;
      }

      var apayout = totalPayout(acontent);
      var bpayout = totalPayout(bcontent);

      if (apayout !== bpayout) {
        return bpayout - apayout;
      } // If SBD payouts were equal, fall back to rshares sorting


      return netRshares(bcontent).compare(netRshares(acontent));
    }
  };
  comments.sort(sort_orders[sort_order]);
}

var CommentImpl = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(CommentImpl, _React$Component);

  var _super = _createSuper(CommentImpl);

  function CommentImpl() {
    var _this;

    (0, _classCallCheck2["default"])(this, CommentImpl);
    _this = _super.call(this);
    _this.state = {
      collapsed: false,
      hide_body: false,
      highlight: false
    };
    _this.revealBody = _this.revealBody.bind((0, _assertThisInitialized2["default"])(_this));
    _this.shouldComponentUpdate = (0, _shouldComponentUpdate["default"])((0, _assertThisInitialized2["default"])(_this), 'Comment');

    _this.onShowReply = function () {
      var showReply = _this.state.showReply;

      _this.setState({
        showReply: !showReply,
        showEdit: false
      });

      _this.saveOnShow(!showReply ? 'reply' : null);
    };

    _this.onShowEdit = function () {
      var showEdit = _this.state.showEdit;

      _this.setState({
        showEdit: !showEdit,
        showReply: false
      });

      _this.saveOnShow(!showEdit ? 'edit' : null);
    };

    _this.saveOnShow = function (type) {
      if (process.env.BROWSER) {
        var cont = _this.props.cont;
        var content = cont.get(_this.props.content);
        var formId = content.get('author') + '/' + content.get('permlink');
        if (type) localStorage.setItem('showEditor-' + formId, JSON.stringify({
          type: type
        }, null, 0));else {
          localStorage.removeItem('showEditor-' + formId);
          localStorage.removeItem('replyEditorData-' + formId + '-reply');
          localStorage.removeItem('replyEditorData-' + formId + '-edit');
        }
      }
    };

    _this.saveOnShow = _this.saveOnShow.bind((0, _assertThisInitialized2["default"])(_this));

    _this.onDeletePost = function () {
      var _assertThisInitialize = (0, _assertThisInitialized2["default"])(_this),
          deletePost = _assertThisInitialize.props.deletePost;

      var content = _this.props.cont.get(_this.props.content);

      deletePost(content.get('author'), content.get('permlink'), _this.props.operation_flat_fee, _this.props.bandwidth_kbytes_fee);
    };

    _this.toggleCollapsed = _this.toggleCollapsed.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(CommentImpl, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.initEditor(this.props);

      this._checkHide(this.props);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (window.location.hash == this.props.anchor_link) {
        this.setState({
          highlight: true
        }); // eslint-disable-line react/no-did-mount-set-state
      }
    }
    /**
     * - `hide` is based on author reputation, and will hide the entire post on initial render.
     * - `hide_body` is true when comment rshares OR author rep is negative.
     *    it hides the comment body (but not the header) until the "reveal comment" link is clicked.
     */
    // eslint-disable-next-line no-underscore-dangle

  }, {
    key: "_checkHide",
    value: function _checkHide(props) {
      var content = props.cont.get(props.content);

      if (content) {
        var hide = hideSubtree(props.cont, props.content);
        var gray = content.getIn(['stats', 'gray']);
        var author = content.get('author');
        var username = this.props.username;
        var notOwn = username !== author;

        if (hide) {
          var onHide = this.props.onHide; // console.log('Comment --> onHide')

          if (onHide) onHide();
        }

        this.setState({
          hide: hide,
          hide_body: notOwn && (hide || gray)
        });
      }
    }
  }, {
    key: "toggleCollapsed",
    value: function toggleCollapsed() {
      this.setState({
        collapsed: !this.state.collapsed
      });
    }
  }, {
    key: "revealBody",
    value: function revealBody() {
      this.setState({
        hide_body: false
      });
    }
  }, {
    key: "initEditor",
    value: function initEditor(props) {
      if (this.state.PostReplyEditor) return;
      var cont = this.props.cont;
      var content = cont.get(props.content);
      if (!content) return;
      var post = content.get('author') + '/' + content.get('permlink');
      var PostReplyEditor = (0, _ReplyEditor["default"])(post + '-reply');
      var PostEditEditor = (0, _ReplyEditor["default"])(post + '-edit');

      if (process.env.BROWSER) {
        var formId = post;
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

      this.setState({
        PostReplyEditor: PostReplyEditor,
        PostEditEditor: PostEditEditor
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          cont = _this$props.cont,
          content = _this$props.content;
      var collapsed = this.state.collapsed;
      var dis = cont.get(content);

      if (!dis) {
        return /*#__PURE__*/_react["default"].createElement("div", null, (0, _counterpart["default"])('g.loading'), "...");
      } // Don't server-side render the comment if it has a certain number of newlines


      if (global['process'] !== undefined && (dis.get('body').match(/\r?\n/g) || '').length > 25) {
        return /*#__PURE__*/_react["default"].createElement("div", null, (0, _counterpart["default"])('g.loading'), "...");
      }

      var comment = dis.toJS();

      if (!comment.stats) {
        console.error('Comment -- missing stats object');
        comment.stats = {};
      }

      var gray = comment.stats.gray;
      var authorRepLog10 = (0, _ParsersAndFormatters.repLog10)(comment.author_reputation);
      var author = comment.author,
          json_metadata = comment.json_metadata;
      var _this$props2 = this.props,
          username = _this$props2.username,
          depth = _this$props2.depth,
          anchor_link = _this$props2.anchor_link,
          showNegativeComments = _this$props2.showNegativeComments,
          ignore_list = _this$props2.ignore_list,
          noImage = _this$props2.noImage;
      var onShowReply = this.onShowReply,
          onShowEdit = this.onShowEdit,
          onDeletePost = this.onDeletePost;
      var post = comment.author + '/' + comment.permlink;
      var _this$state = this.state,
          PostReplyEditor = _this$state.PostReplyEditor,
          PostEditEditor = _this$state.PostEditEditor,
          showReply = _this$state.showReply,
          showEdit = _this$state.showEdit,
          hide = _this$state.hide,
          hide_body = _this$state.hide_body;
      var Editor = showReply ? PostReplyEditor : PostEditEditor;
      var rootComment = this.props.rootComment;

      if (!rootComment && depth === 1) {
        rootComment = comment.parent_author + '/' + comment.parent_permlink;
      }

      var comment_link = "/".concat(comment.category, "/@").concat(rootComment, "#@").concat(comment.author, "/").concat(comment.permlink);
      var ignore = ignore_list && ignore_list.has(comment.author);

      if (!showNegativeComments && (hide || ignore)) {
        return null;
      }

      var jsonMetadata = null;

      try {
        if (!showReply) jsonMetadata = JSON.parse(json_metadata);
      } catch (error) {// console.error('Invalid json metadata string', json_metadata, 'in post', this.props.content);
      } // hide images if author is in blacklist


      var hideImages = _ImageUserBlockList["default"].includes(author);

      var _isPaidout = comment.cashout_time === '1969-12-31T23:59:59'; // TODO: audit after HF19. #1259


      var showEditOption = username === author;
      var showDeleteOption = username === author && (0, _StateFunctions.allowDelete)(comment) && !_isPaidout;
      var showReplyOption = username !== undefined && comment.depth < 255;
      var body = null;
      var controls = null;

      if (!collapsed && !hide_body) {
        body = /*#__PURE__*/_react["default"].createElement(_MarkdownViewer["default"], {
          formId: post + '-viewer',
          text: comment.body,
          noImage: noImage || gray,
          hideImages: hideImages,
          jsonMetadata: jsonMetadata
        });
        var pricePerBlurt = this.props.pricePerBlurt;
        var totalAmount = (0, _ParsersAndFormatters.parsePayoutAmount)(comment.pending_payout_value) + (0, _ParsersAndFormatters.parsePayoutAmount)(comment.total_payout_value) + (0, _ParsersAndFormatters.parsePayoutAmount)(comment.curator_payout_value);
        var payoutValueInDollar = parseFloat(totalAmount * pricePerBlurt).toFixed(2);
        controls = /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Voting["default"], {
          post: post
        }), /*#__PURE__*/_react["default"].createElement("span", {
          style: {
            'border-right': '1px solid #eee',
            'padding-right': '1rem'
          }
        }, /*#__PURE__*/_react["default"].createElement("b", {
          style: {
            color: '#F2652D'
          }
        }, "$", payoutValueInDollar)), /*#__PURE__*/_react["default"].createElement("span", {
          className: "Comment__footer__controls"
        }, showReplyOption && /*#__PURE__*/_react["default"].createElement("a", {
          onClick: onShowReply
        }, (0, _counterpart["default"])('g.reply')), ' ', showEditOption && /*#__PURE__*/_react["default"].createElement("a", {
          onClick: onShowEdit
        }, (0, _counterpart["default"])('g.edit')), ' ', showDeleteOption && /*#__PURE__*/_react["default"].createElement("a", {
          onClick: onDeletePost
        }, (0, _counterpart["default"])('g.delete'))));
      }

      var replies = null;

      if (!collapsed && comment.children > 0) {
        if (depth > 7) {
          var comment_permlink = "/".concat(comment.category, "/@").concat(comment.author, "/").concat(comment.permlink);
          replies = /*#__PURE__*/_react["default"].createElement(_reactRouter.Link, {
            to: comment_permlink
          }, "Show ", comment.children, " more", ' ', comment.children == 1 ? 'reply' : 'replies');
        } else {
          replies = comment.replies;
          sortComments(cont, replies, this.props.comments_sort_order); // When a comment has hidden replies and is collapsed, the reply count is off
          //console.log("replies:", replies.length, "num_visible:", replies.filter( reply => !cont.get(reply).getIn(['stats', 'hide'])).length)

          replies = replies.map(function (reply, idx) {
            return /*#__PURE__*/_react["default"].createElement(Comment, {
              key: idx,
              content: reply,
              cont: cont,
              sort_order: _this2.props.comments_sort_order,
              depth: depth + 1,
              rootComment: rootComment,
              showNegativeComments: showNegativeComments,
              onHide: _this2.props.onHide
            });
          });
        }
      }

      var commentClasses = ['hentry'];
      commentClasses.push('Comment');
      commentClasses.push(this.props.root ? 'root' : 'reply');
      if (collapsed) commentClasses.push('collapsed');
      var innerCommentClass = 'Comment__block';

      if (ignore || gray) {
        innerCommentClass += ' downvoted clearfix';

        if (!hide_body) {
          innerCommentClass += ' revealed';
        }
      }

      if (this.state.highlight) innerCommentClass += ' highlighted'; //console.log(comment);

      var renderedEditor = null;

      if (showReply || showEdit) {
        renderedEditor = /*#__PURE__*/_react["default"].createElement("div", {
          key: "editor"
        }, /*#__PURE__*/_react["default"].createElement(Editor, (0, _extends2["default"])({}, comment, {
          type: showReply ? 'submit_comment' : 'edit',
          successCallback: function successCallback() {
            _this2.setState({
              showReply: false,
              showEdit: false
            });

            _this2.saveOnShow(null);
          },
          onCancel: function onCancel() {
            _this2.setState({
              showReply: false,
              showEdit: false
            });

            _this2.saveOnShow(null);
          },
          jsonMetadata: jsonMetadata
        })));
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: commentClasses.join(' '),
        id: anchor_link,
        itemScope: true,
        itemType: "http://schema.org/comment"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: innerCommentClass
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "Comment__Userpic show-for-medium"
      }, /*#__PURE__*/_react["default"].createElement(_Userpic["default"], {
        account: comment.author
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "Comment__header"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "Comment__header_collapse"
      }, /*#__PURE__*/_react["default"].createElement("a", {
        title: (0, _counterpart["default"])('g.collapse_or_expand'),
        onClick: this.toggleCollapsed
      }, collapsed ? '[+]' : '[-]')), /*#__PURE__*/_react["default"].createElement("span", {
        className: "Comment__header-user"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "Comment__Userpic-small"
      }, /*#__PURE__*/_react["default"].createElement(_Userpic["default"], {
        account: comment.author
      })), /*#__PURE__*/_react["default"].createElement(_Author["default"], {
        author: comment.author,
        authorRepLog10: authorRepLog10,
        showAffiliation: true
      })), "\xA0 \xB7 \xA0", /*#__PURE__*/_react["default"].createElement(_reactRouter.Link, {
        to: comment_link,
        className: "PlainLink"
      }, /*#__PURE__*/_react["default"].createElement(_TimeAgoWrapper["default"], {
        date: comment.created
      })), "\xA0", /*#__PURE__*/_react["default"].createElement(_ContentEditedWrapper["default"], {
        createDate: comment.created,
        updateDate: comment.last_update
      }), (collapsed || hide_body) && /*#__PURE__*/_react["default"].createElement(_Voting["default"], {
        post: post,
        showList: false
      }), collapsed && comment.children > 0 && /*#__PURE__*/_react["default"].createElement("span", {
        className: "marginLeft1rem"
      }, (0, _counterpart["default"])('g.reply_count', {
        count: comment.children
      })), !collapsed && hide_body && /*#__PURE__*/_react["default"].createElement("a", {
        className: "marginLeft1rem",
        onClick: this.revealBody
      }, (0, _counterpart["default"])('g.reveal_comment')), !collapsed && !hide_body && (ignore || gray) && /*#__PURE__*/_react["default"].createElement("span", null, "\xA0 \xB7 \xA0", ' ', (0, _counterpart["default"])('g.will_be_hidden_due_to_low_rating'))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "Comment__body entry-content"
      }, showEdit ? renderedEditor : body), /*#__PURE__*/_react["default"].createElement("div", {
        className: "Comment__footer"
      }, controls)), /*#__PURE__*/_react["default"].createElement("div", {
        className: "Comment__replies hfeed"
      }, showReply && renderedEditor, replies));
    }
  }]);
  return CommentImpl;
}(_react["default"].Component);

(0, _defineProperty2["default"])(CommentImpl, "propTypes", {
  // html props
  cont: _propTypes["default"].object.isRequired,
  content: _propTypes["default"].string.isRequired,
  sort_order: _propTypes["default"].oneOf(['votes', 'new', 'trending']).isRequired,
  root: _propTypes["default"].bool,
  showNegativeComments: _propTypes["default"].bool,
  onHide: _propTypes["default"].func,
  noImage: _propTypes["default"].bool,
  // component props (for recursion)
  depth: _propTypes["default"].number,
  // redux props
  username: _propTypes["default"].string,
  rootComment: _propTypes["default"].string,
  anchor_link: _propTypes["default"].string.isRequired,
  deletePost: _propTypes["default"].func.isRequired
});
(0, _defineProperty2["default"])(CommentImpl, "defaultProps", {
  depth: 1
});
var Comment = (0, _reactRedux.connect)( // mapStateToProps
function (state, ownProps) {
  var content = ownProps.content;
  var username = state.user.getIn(['current', 'username']);
  var ignore_list = username ? state.global.getIn(['follow', 'getFollowingAsync', username, 'ignore_result']) : null;
  return _objectSpread(_objectSpread({}, ownProps), {}, {
    anchor_link: '#@' + content,
    // Using a hash here is not standard but intentional; see issue #124 for details
    username: username,
    ignore_list: ignore_list,
    comments_sort_order: state.app.getIn(['user_preferences', 'defaultCommentsSortOrder'], 'new'),
    operation_flat_fee: state.global.getIn(['props', 'operation_flat_fee']),
    bandwidth_kbytes_fee: state.global.getIn(['props', 'bandwidth_kbytes_fee']),
    pricePerBlurt: state.global.getIn(['props', 'price_per_blurt'])
  });
}, // mapDispatchToProps
function (dispatch) {
  return {
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
    }
  };
})(CommentImpl);
var _default = Comment;
exports["default"] = _default;