/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["vcvWebpackJsonp4x"] = self["vcvWebpackJsonp4x"] || []).push([["element"],{

/***/ "./googleMaps/component.js":
/*!*********************************!*\
  !*** ./googleMaps/component.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GoogleMaps; }\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var vc_cake__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vc-cake */ \"./node_modules/vc-cake/index.js\");\n/* harmony import */ var vc_cake__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(vc_cake__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar vcvAPI = vc_cake__WEBPACK_IMPORTED_MODULE_9___default().getService('api');\n\nvar GoogleMaps = /*#__PURE__*/function (_vcvAPI$elementCompon) {\n  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(GoogleMaps, _vcvAPI$elementCompon);\n\n  var _super = _createSuper(GoogleMaps);\n\n  function GoogleMaps() {\n    var _this;\n\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, GoogleMaps);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"defaultSize\", {\n      width: '600',\n      height: '450'\n    });\n\n    return _this;\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(GoogleMaps, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      if (this.props.atts.embed) {\n        this.setCustomSize(this.props.atts, this.getDefaultSize(this.props.atts.embed));\n        this.appendMap(this.props.atts.embed);\n      }\n    }\n    /* eslint-disable */\n\n  }, {\n    key: \"UNSAFE_componentWillReceiveProps\",\n    value: function UNSAFE_componentWillReceiveProps(nextProps) {\n      if (nextProps.atts.embed && (this.props.atts.embed !== nextProps.atts.embed || this.props.atts.width !== nextProps.atts.width || this.props.atts.height !== nextProps.atts.height)) {\n        this.setCustomSize(nextProps.atts, this.getDefaultSize(nextProps.atts.embed));\n        this.appendMap(nextProps.atts.embed);\n      }\n    }\n    /* eslint-enable */\n\n  }, {\n    key: \"getSizeFromEmbed\",\n    value: function getSizeFromEmbed(embed) {\n      var size = {};\n      var widthAttr = embed.match(/width=\"\\d+\"/g);\n      widthAttr = widthAttr ? widthAttr[0] : '';\n\n      if (widthAttr) {\n        var width = widthAttr.match(/\\d+/g);\n        width = width ? width[0] : '';\n        size.width = width;\n      }\n\n      var heightAttr = embed.match(/height=\"\\d+\"/g);\n      heightAttr = heightAttr ? heightAttr[0] : '';\n\n      if (heightAttr) {\n        var height = heightAttr.match(/\\d+/g);\n        height = height ? height[0] : '';\n        size.height = height;\n      }\n\n      return size;\n    }\n  }, {\n    key: \"getDefaultSize\",\n    value: function getDefaultSize(embed) {\n      var size = embed ? this.getSizeFromEmbed(embed) : '';\n      return {\n        width: size && size.width ? size.width : this.defaultSize.width,\n        height: size && size.height ? size.height : this.defaultSize.height\n      };\n    }\n  }, {\n    key: \"setCustomSize\",\n    value: function setCustomSize(atts, defaultSize) {\n      var width = this.validateSize(atts.width);\n      var height = this.validateSize(atts.height);\n      width = /^\\d+$/.test(width) ? \"\".concat(width, \"px\") : width;\n      height = /^\\d+$/.test(height) ? \"\".concat(height, \"px\") : height;\n      var customSize = {\n        width: width || \"\".concat(defaultSize.width, \"px\"),\n        height: height || \"\".concat(defaultSize.height, \"px\")\n      };\n\n      if (!height) {\n        customSize.paddingBottom = defaultSize.height / defaultSize.width * 100 + '%';\n        customSize.height = 'auto';\n        this.setSizeState(customSize);\n      } else {\n        this.setSizeState(customSize);\n      }\n    }\n  }, {\n    key: \"setSizeState\",\n    value: function setSizeState(size) {\n      this.setState({\n        size: size\n      });\n    }\n  }, {\n    key: \"validateSize\",\n    value: function validateSize(value) {\n      var units = ['px', 'em', 'rem', '%', 'vw', 'vh'];\n      var re = new RegExp('^-?\\\\d*(\\\\.\\\\d{0,9})?(' + units.join('|') + ')?$');\n\n      if (value === '' || value.match(re)) {\n        return value;\n      } else {\n        return null;\n      }\n    }\n  }, {\n    key: \"appendMap\",\n    value: function appendMap() {\n      var tagString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n      var component = this.refs.mapInner;\n      component.innerHTML = tagString;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          id = _this$props.id,\n          atts = _this$props.atts,\n          editor = _this$props.editor;\n      var customClass = atts.customClass,\n          alignment = atts.alignment,\n          width = atts.width,\n          height = atts.height,\n          metaCustomId = atts.metaCustomId;\n      var classes = 'vce-google-maps';\n      var innerClasses = 'vce-google-maps-inner';\n      var wrapperClasses = 'vce-google-maps-wrapper vce';\n      var customProps = {};\n      var innerProps = {};\n      var wrapperProps = {};\n\n      if (typeof customClass === 'string' && customClass) {\n        classes += ' ' + customClass;\n      }\n\n      wrapperProps.style = {\n        width: this.state ? this.state.size ? this.state.size.width : null : null,\n        height: this.state ? this.state.size ? this.state.size.height : null : null\n      };\n      innerProps.style = {\n        paddingBottom: this.state ? this.state.size ? this.state.size.paddingBottom : null : null\n      };\n\n      if (width) {\n        wrapperClasses += ' vce-google-maps--width-custom';\n      }\n\n      if (height) {\n        wrapperClasses += ' vce-google-maps--height-custom';\n      } else {\n        wrapperClasses += ' vce-google-maps-proportional';\n      }\n\n      if (alignment) {\n        classes += \" vce-google-maps--align-\".concat(alignment);\n      }\n\n      customProps.key = \"customProps:\".concat(id);\n\n      if (metaCustomId) {\n        customProps.id = metaCustomId;\n      }\n\n      var doAll = this.applyDO('all');\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(\"div\", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, customProps, {\n        className: classes\n      }, editor), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(\"div\", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        className: wrapperClasses\n      }, wrapperProps, {\n        id: 'el-' + id\n      }, doAll), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(\"div\", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        className: innerClasses\n      }, innerProps, {\n        ref: \"mapInner\"\n      }))));\n    }\n  }]);\n\n  return GoogleMaps;\n}(vcvAPI.elementComponent);\n\n\n\n//# sourceURL=webpack:///./googleMaps/component.js?");

/***/ }),

/***/ "./googleMaps/index.js":
/*!*****************************!*\
  !*** ./googleMaps/index.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vc_cake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vc-cake */ \"./node_modules/vc-cake/index.js\");\n/* harmony import */ var vc_cake__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vc_cake__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ \"./googleMaps/component.js\");\n/* eslint-disable import/no-webpack-loader-syntax */\n\n\nvar vcvAddElement = vc_cake__WEBPACK_IMPORTED_MODULE_0___default().getService('cook').add;\nvcvAddElement(__webpack_require__(/*! ./settings.json */ \"./googleMaps/settings.json\"), // Component callback\nfunction (component) {\n  component.add(_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n}, // css settings // css for element\n{\n  css: __webpack_require__(/*! raw-loader!./styles.css */ \"./node_modules/raw-loader/index.js!./googleMaps/styles.css\"),\n  editorCss: __webpack_require__(/*! raw-loader!./editor.css */ \"./node_modules/raw-loader/index.js!./googleMaps/editor.css\")\n}, '');\n\n//# sourceURL=webpack:///./googleMaps/index.js?");

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./googleMaps/editor.css":
/*!**********************************************************************!*\
  !*** ../../node_modules/raw-loader/index.js!./googleMaps/editor.css ***!
  \**********************************************************************/
/***/ (function(module) {

eval("module.exports = \"[data-vcv-element-disable-interaction=\\\"true\\\"] .vce-google-maps-inner::after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n  z-index: 999;\\n}\\n\\n.vce-google-maps {\\n  min-height: 1em;\\n}\\n\"\n\n//# sourceURL=webpack:///./googleMaps/editor.css?../../node_modules/raw-loader/index.js");

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./googleMaps/styles.css":
/*!**********************************************************************!*\
  !*** ../../node_modules/raw-loader/index.js!./googleMaps/styles.css ***!
  \**********************************************************************/
/***/ (function(module) {

eval("module.exports = \".vce-google-maps-wrapper {\\n  display: inline-block;\\n  vertical-align: top;\\n  max-width: 100%;\\n}\\n\\n.vce-google-maps-inner {\\n  position: relative;\\n}\\n\\n.vce-google-maps-proportional {\\n  position: relative;\\n  height: auto;\\n}\\n\\n.vce-google-maps-wrapper.vce-google-maps-proportional {\\n  height: auto;\\n}\\n\\n.vce-google-maps-wrapper.vce-google-maps-proportional .vce-google-maps-inner {\\n  height: 0;\\n}\\n\\n.vce-google-maps--width-custom .vce-google-maps-inner {\\n  width: 100%;\\n}\\n\\n.vce-google-maps--height-custom .vce-google-maps-inner {\\n  height: 100%;\\n}\\n\\n.vce-google-maps--width-custom iframe {\\n  width: 100%;\\n}\\n\\n.vce-google-maps--height-custom iframe {\\n  height: 100%;\\n}\\n\\n.vce-google-maps-inner iframe {\\n  max-width: 100%;\\n  display: block;\\n  vertical-align: top;\\n}\\n\\n.vce-google-maps-proportional iframe {\\n  width: 100%;\\n  height: 100%;\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n}\\n\\n.vce-google-maps--align-center {\\n  text-align: center;\\n}\\n\\n.vce-google-maps--align-right {\\n  text-align: right;\\n}\\n\\n.vce-google-maps--align-left {\\n  text-align: left;\\n}\\n\\n\"\n\n//# sourceURL=webpack:///./googleMaps/styles.css?../../node_modules/raw-loader/index.js");

/***/ }),

/***/ "./googleMaps/settings.json":
/*!**********************************!*\
  !*** ./googleMaps/settings.json ***!
  \**********************************/
/***/ (function(module) {

"use strict";
eval("module.exports = JSON.parse('{\"embed\":{\"type\":\"string\",\"access\":\"public\",\"value\":\"<iframe src=\\\\\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51958.85712317783!2d-122.07918491530957!3d37.39946933872877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2slv!4v1476280809540\\\\\" width=\\\\\"600\\\\\" height=\\\\\"450\\\\\" frameborder=\\\\\"0\\\\\" style=\\\\\"border:0\\\\\" allowfullscreen></iframe>\",\"options\":{\"label\":\"Map embed iframe\",\"description\":\"Visit Google maps to create your map. Follow step by step: 1) Find location 2) Click the cog symbol in the lower right corner and select \\\\\"Share or embed map\\\\\" 3) On modal window select \\\\\"Embed map\\\\\" 4) Copy iframe code and paste it.\"}},\"designOptions\":{\"type\":\"designOptions\",\"access\":\"public\",\"value\":{},\"options\":{\"label\":\"Design Options\"}},\"editFormTab1\":{\"type\":\"group\",\"access\":\"protected\",\"value\":[\"embed\",\"width\",\"height\",\"alignment\",\"metaCustomId\",\"customClass\"],\"options\":{\"label\":\"General\"}},\"metaEditFormTabs\":{\"type\":\"group\",\"access\":\"protected\",\"value\":[\"editFormTab1\",\"designOptions\"]},\"relatedTo\":{\"type\":\"group\",\"access\":\"protected\",\"value\":[\"General\"]},\"customClass\":{\"type\":\"string\",\"access\":\"public\",\"value\":\"\",\"options\":{\"label\":\"Extra class name\",\"description\":\"Add an extra class name to the element and refer to it from the custom CSS option.\"}},\"width\":{\"type\":\"string\",\"access\":\"public\",\"value\":\"\",\"options\":{\"label\":\"Width\",\"description\":\"Enter width in pixels or percentages (example: 200px).\"}},\"height\":{\"type\":\"string\",\"access\":\"public\",\"value\":\"\",\"options\":{\"label\":\"Height\",\"description\":\"Enter height in pixels or percentages (example: 200px).\"}},\"alignment\":{\"type\":\"buttonGroup\",\"access\":\"public\",\"value\":\"left\",\"options\":{\"label\":\"Alignment\",\"values\":[{\"label\":\"Left\",\"value\":\"left\",\"icon\":\"vcv-ui-icon-attribute-alignment-left\"},{\"label\":\"Center\",\"value\":\"center\",\"icon\":\"vcv-ui-icon-attribute-alignment-center\"},{\"label\":\"Right\",\"value\":\"right\",\"icon\":\"vcv-ui-icon-attribute-alignment-right\"}]}},\"metaDisableInteractionInEditor\":{\"type\":\"toggle\",\"access\":\"protected\",\"value\":true},\"metaCustomId\":{\"type\":\"customId\",\"access\":\"public\",\"value\":\"\",\"options\":{\"label\":\"Element ID\",\"description\":\"Apply a unique ID to the element to link it directly by using #your_id (for element ID use lowercase input only).\"}},\"tag\":{\"access\":\"protected\",\"type\":\"string\",\"value\":\"googleMaps\"},\"metaPublicJs\":{\"access\":\"protected\",\"type\":\"string\",\"value\":{\"libraries\":[{\"libPaths\":\"public/dist/googleMaps.min.js\"}]}}}');\n\n//# sourceURL=webpack:///./googleMaps/settings.json?");

/***/ })

},[['./googleMaps/index.js']]]);