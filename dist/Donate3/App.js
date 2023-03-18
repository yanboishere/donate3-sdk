function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import classNames from 'classnames/bind';
import React, { useRef, useState } from 'react';
import styles from "./App.module.css";
import DonateButton from "./components/DonateButton/DonateButton";
import Footer from "./components/Footer/Footer";
import FormSection from "./components/FormSection/FormSection";
import Header from "./components/Header/Header";
import UserAvatar from "./components/UserAvatar/UserAvatar";
import { ReactComponent as Close } from "./images/close.svg";
import { getElementPosition } from "./utils/index";
function App(props) {
  console.log('-------App');
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    showForm = _useState2[0],
    setShowForm = _useState2[1];
  var _useState3 = useState({}),
    _useState4 = _slicedToArray(_useState3, 2),
    dialogStyle = _useState4[0],
    setDialogStyle = _useState4[1];
  var dialogRef = useRef(null);
  var cx = classNames.bind(styles);
  var handleSwitchDialog = function handleSwitchDialog(event) {
    var defaultStyle = {
      right: 0,
      left: 0,
      top: 0,
      bottom: 0,
      margin: 'auto'
    };
    if (props.type === '2') {
      setDialogStyle(defaultStyle);
    } else {
      var _getElementPosition = getElementPosition(event === null || event === void 0 ? void 0 : event.currentTarget),
        elementBottom = _getElementPosition.elementBottom,
        elementRight = _getElementPosition.elementRight;
      if (!showForm) {
        if (window.innerWidth > 768) {
          setDialogStyle({
            right: elementRight,
            bottom: elementBottom + 70
          });
        } else {
          setDialogStyle(defaultStyle);
        }
      }
    }
    setShowForm(!showForm);
  };
  var renderDonate3Button = function renderDonate3Button(type) {
    if (type === '1') {
      return /*#__PURE__*/React.createElement("div", {
        className: cx({
          close: showForm
        }, {
          floatmode: !showForm
        }, styles.btn, styles['btn-animated'], styles['btn-white'], styles.donate3btn),
        onClick: handleSwitchDialog
      }, showForm ? /*#__PURE__*/React.createElement(Close, {
        className: styles.closeimg
      }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DonateButton, {
        type: props.type
      })));
    } else {
      return /*#__PURE__*/React.createElement("div", {
        className: cx(styles.donate3btn)
      }, /*#__PURE__*/React.createElement(Header, {
        address: props.address,
        name: props.name,
        type: props.type,
        normalmode: true
      }), /*#__PURE__*/React.createElement("div", {
        onClick: handleSwitchDialog
      }, /*#__PURE__*/React.createElement(DonateButton, {
        type: props.type
      })), /*#__PURE__*/React.createElement(UserAvatar, {
        type: props.type,
        normalmode: true
      }));
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, props.type === '2' && showForm ? /*#__PURE__*/React.createElement("div", {
    className: styles.mask,
    onClick: function onClick() {
      setShowForm(false);
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    className: showForm ? "".concat(styles.app, " dialogAnimation") : styles.hidden,
    style: _objectSpread({}, dialogStyle),
    ref: dialogRef
  }, /*#__PURE__*/React.createElement(Header, {
    address: props.address,
    name: props.name,
    type: props.type
  }), /*#__PURE__*/React.createElement(FormSection, {
    type: props.type,
    toAddress: props.address
  }), /*#__PURE__*/React.createElement(Footer, null)), renderDonate3Button(props.type));
}
export default /*#__PURE__*/React.memo(App);