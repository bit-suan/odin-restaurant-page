/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\nbody {\r\n  font-family: Arial, sans-serif;\r\n  background-color: #080420;\r\n  color: white;\r\n  display: block;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100vh;\r\n}\r\nnav {\r\n  display: flex;\r\n  gap: 30px;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 10px 500px;\r\n  background-color: #0d0d30;\r\n  border-radius: 10px;\r\n  margin-bottom: 20px;\r\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\r\n}\r\nnav button {\r\n  background-color: #4e0eff;\r\n  color: white;\r\n  padding: 10px 20px;\r\n  border: none;\r\n  border-radius: 20px;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\r\n  cursor: pointer;\r\n  font-size: 20px;\r\n}\r\nnav button:hover {\r\n  background-color: #3a0bdc;\r\n}\r\nnav button.active {\r\n  background-color: #fff;      \r\n  color: #4e0eff;\r\n  font-weight: bold;\r\n  border: 1px solid #4e0eff;\r\n  transform: scale(1.05);      \r\n}\r\n\r\n#content {\r\n  width: 70%;\r\n  margin: 0 auto;\r\n  font-family: \"Poppins\", sans-serif;\r\n  color: #333;\r\n  padding: 20px;\r\n  border-radius: 20px;\r\n  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n#content h1 {\r\n  text-align: center;\r\n  font-size: 36px;\r\n  font-weight: 700;\r\n  margin-bottom: 30px;\r\n  color: #4e0eff;\r\n  text-transform: uppercase;\r\n  letter-spacing: 1px;\r\n}\r\n/* ===== Menu Page ===== */\r\n.menu-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\r\n  gap: 30px;\r\n  margin-top: 20px;\r\n}\r\n.menu-card {\r\n  background: #fff;\r\n  border-radius: 15px;\r\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\r\n  padding: 20px;\r\n  text-align: center;\r\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\r\n}\r\n.menu-card:hover {\r\n  transform: translateY(-6px);\r\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);\r\n}\r\n.menu-card .diamond {\r\n  width: 100px;\r\n  height: 100px;\r\n  transform: rotate(45deg);\r\n  overflow: hidden;\r\n  border-radius: 12px;\r\n  margin: 0 auto 15px;\r\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\r\n}\r\n.menu-card .diamond img {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n  transform: rotate(-45deg) scale(1.3);\r\n}\r\n.menu-card h2 {\r\n  font-size: 20px;\r\n  font-weight: 700;\r\n  margin: 10px 0 15px;\r\n  color: #4e0eff;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.5px;\r\n}\r\n.menu-card ul {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n.menu-card li {\r\n  display: flex;\r\n  align-items: center;\r\n  margin: 6px 0;\r\n  padding: 4px 0;\r\n  transition: background 0.2s ease;\r\n}\r\n.menu-card li:hover {\r\n  background: rgba(78, 14, 255, 0.05);\r\n  border-radius: 6px;\r\n}\r\n.item-name {\r\n  margin-right: 10px;\r\n  font-weight: 500;\r\n}\r\n.dots {\r\n  flex-grow: 1;\r\n  border-bottom: 1px dotted #aaa;\r\n  margin: 0 10px;\r\n}\r\n.item-price {\r\n  font-weight: 600;\r\n  color: #4e0eff;\r\n}\r\n\r\n/* ===== Menu Footer ===== */\r\n.menu-footer {\r\n  margin-top: 40px;\r\n  text-align: center;\r\n  font-size: 14px;\r\n  color: #555;\r\n  padding: 20px 0;\r\n  border-top: 1px solid #ddd;\r\n}\r\n\r\n.menu-footer p {\r\n  margin: 5px 0;\r\n}\r\n\r\n.menu-footer .socials {\r\n  margin-top: 8px;\r\n  font-weight: 500;\r\n  color: #4e0eff;\r\n  letter-spacing: 1px;\r\n  cursor: pointer;\r\n}\r\n.menu-footer .socials:hover {\r\n  text-decoration: underline;\r\n}\r\n/* ===== Contact Page ===== */\r\n.contact-headline {\r\n  text-align: center;\r\n  font-size: 32px;\r\n  margin-bottom: 10px;\r\n  color: white;\r\n}\r\n.contact-description {\r\n  text-align: center;\r\n  font-size: 16px;\r\n  color: white;\r\n  margin-bottom: 20px;\r\n}\r\n.contact-info {\r\n  text-align: center;\r\n  font-size: 15px;\r\n  color: #4e0eff;\r\n  margin: 5px 0;\r\n}\r\n.contact-info:hover {\r\n  text-decoration: underline;\r\n  cursor: pointer;\r\n}\r\n.contact-card {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 20px;\r\n  background: #fff;\r\n  border-radius: 12px;\r\n  padding: 20px;\r\n  margin: 20px auto;\r\n  max-width: 600px;\r\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\r\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\r\n}\r\n\r\n.contact-card:hover {\r\n  transform: scale(1.02);\r\n  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);\r\n}\r\n.contact-card img {\r\n  width: 120px;\r\n  height: 120px;\r\n  border-radius: 50%;\r\n  object-fit: cover;\r\n  border: none;\r\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\r\n}\r\n.contact-card h2 {\r\n  margin: 0;\r\n  font-size: 20px;\r\n  color: #0d0d30;\r\n}\r\n.contact-card p {\r\n  margin: 6px 0;\r\n  font-size: 14px;\r\n  color: #555;\r\n}\r\n.small-email {\r\n  font-size: 13px;\r\n  color: #4e0eff;\r\n  font-weight: 500;\r\n}\r\n.small-email:hover {\r\n  text-decoration: underline;\r\n  cursor: pointer;\r\n}\r\n.contact-card .role {\r\n  font-size: 14px;\r\n  color: #888;\r\n  margin-bottom: 8px;\r\n}\r\n.home-image-container {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 350px; \r\n  margin-bottom: 25px;\r\n}\r\n.home-image-scattered {\r\n  position: absolute;\r\n  width: 300px;\r\n  height: 200px;\r\n  object-fit: cover;\r\n  border-radius: 15px;\r\n  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);\r\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\r\n}\r\n.home-image-scattered:nth-child(1) {\r\n  top: 8%;\r\n  left: 12%;\r\n  transform: rotate(-12deg) scale(1.05);\r\n  z-index: 2;\r\n}\r\n.home-image-scattered:nth-child(2) {\r\n  top: 28%;\r\n  left: 48%;\r\n  transform: rotate(6deg) scale(1.1);\r\n  z-index: 3;\r\n}\r\n.home-image-scattered:nth-child(3) {\r\n  top: 18%;\r\n  left: 78%;\r\n  transform: rotate(-7deg) scale(0.95);\r\n  z-index: 1;\r\n}\r\n.home-image-scattered:hover {\r\n  transform: scale(1.1) rotate(0deg);\r\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);\r\n}\r\n/* ===== Home Page ===== */\r\n.home-headline {\r\n  font-size: 3rem;\r\n  font-weight: 700;\r\n  color: #4e0eff;\r\n  text-align: center;\r\n  margin-bottom: 20px;\r\n  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);\r\n}\r\n.home-description {\r\n  font-size: 1.1rem;\r\n  line-height: 1.6;\r\n  color: #e0d9d9;\r\n  text-align: center;\r\n  margin-bottom: 25px;\r\n}\r\n.home-image {\r\n  display: block;\r\n  margin: 0 auto 25px auto;\r\n  max-width: 100%;\r\n  height: auto;\r\n  border-radius: 15px;\r\n  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);\r\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\r\n}\r\n.home-image:hover {\r\n  transform: scale(1.05);\r\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);\r\n}\r\n.home-info {\r\n  font-size: 1.1rem;\r\n  font-weight: 600;\r\n  color: #4e0eff;\r\n  text-align: center;\r\n  margin-bottom: 10px;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction loadContact() {\r\n  const content = document.getElementById(\"content\");\r\n  content.innerHTML = \"\";\r\n  const headline = document.createElement(\"h1\");\r\n  headline.textContent = \"Contact Us\";\r\n  headline.classList.add(\"contact-headline\");\r\n\r\n  const description = document.createElement(\"p\");\r\n  description.textContent =\r\n    \"If you have any questions or feedback, feel free to reach out to us!\";\r\n  description.classList.add(\"contact-description\");\r\n  const email = document.createElement(\"p\");\r\n  email.textContent = \"Email: info@cozybyte.com\";\r\n  email.classList.add(\"contact-info\");\r\n  const phone = document.createElement(\"p\");\r\n  phone.textContent = \"Phone: (123) 456-7890\";\r\n  phone.classList.add(\"contact-info\");\r\n  // Chef card\r\n  const chef = document.createElement(\"div\");\r\n  chef.classList.add(\"contact-card\");\r\n  chef.innerHTML = `\r\n    <img src=\"images/chef.jpg\" alt=\" \">\r\n    <div>\r\n      <h2>Our Chef</h2>\r\n      <p>Chef John Doe is a culinary expert with over 10 years of experience.</p>\r\n      <p class=\"small-email\">Email: chef@cozybyte.com</p>\r\n    </div>\r\n  `;\r\n  // Manager card\r\n  const manager = document.createElement(\"div\");\r\n  manager.classList.add(\"contact-card\");\r\n  manager.innerHTML = `\r\n    <img src=\"images/manager.jpg\" alt=\" \">\r\n    <div>\r\n      <h2>Our Manager</h2>\r\n      <p>Manager Jane Smith has been leading our team with passion and dedication.</p>\r\n      <p class=\"small-email\">Email: manager@cozybyte.com</p>\r\n    </div>\r\n  `;\r\n  content.appendChild(headline);\r\n  content.appendChild(description);\r\n  content.appendChild(email);\r\n  content.appendChild(phone);\r\n  content.appendChild(manager);\r\n  content.appendChild(chef);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?\n}");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHome)\n/* harmony export */ });\nfunction loadHome() {\r\n  const content = document.getElementById(\"content\");\r\n  content.innerHTML = \"\";\r\n\r\n  const headline = document.createElement(\"h1\");\r\n  headline.textContent = \"The Cozy Byte\";\r\n  headline.classList.add(\"home-headline\");\r\n\r\n  const description = document.createElement(\"p\");\r\n  description.textContent =\r\n    \"The Cozy Byte is a warm and inviting cafe offering a delightful selection of food and beverages. Join us for a unique dining experience.\";\r\n  description.classList.add(\"home-description\");\r\n  const imageContainer = document.createElement(\"div\");\r\n  imageContainer.classList.add(\"home-image-container\");\r\n  const imageUrls = [\r\n    \"https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=385&auto=format&fit=crop\",\r\n    \"https://plus.unsplash.com/premium_photo-1661433201283-fcb240e88ad4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\",\r\n    \"https://plus.unsplash.com/premium_photo-1723120606839-31c009a7cb2c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\",\r\n  ];\r\n\r\n  imageUrls.forEach((url, index) => {\r\n    const img = document.createElement(\"img\");\r\n    img.src = url;\r\n    img.alt = `Cafe Image ${index + 1}`;\r\n    img.classList.add(\"home-image-scattered\");\r\n    imageContainer.appendChild(img);\r\n  });\r\n\r\n  const workingHours = document.createElement(\"p\");\r\n  workingHours.textContent =\r\n    \"Working Hours: Mon-Fri 8am - 8pm, Sat-Sun 9am - 5pm\";\r\n  workingHours.classList.add(\"home-info\");\r\n\r\n  const address = document.createElement(\"p\");\r\n  address.textContent = \"Address: 123 Main St, Addis Ababa, Ethiopia\";\r\n  address.classList.add(\"home-info\");\r\n\r\n  content.appendChild(headline);\r\n  content.appendChild(imageContainer);\r\n  content.appendChild(description);\r\n  content.appendChild(workingHours);\r\n  content.appendChild(address);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\n\r\nconst homeBtn = document.getElementById(\"home\");\r\nconst menuBtn = document.getElementById(\"menu\");\r\nconst contactBtn = document.getElementById(\"contact\");\r\nfunction setActiveButton(button) {\r\n  document.querySelectorAll(\"nav button\").forEach((btn) => {\r\n    btn.classList.remove(\"active\");\r\n  });\r\n  button.classList.add(\"active\");\r\n}\r\n// Load Home by default\r\n(0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\nsetActiveButton(homeBtn);\r\n\r\nhomeBtn.addEventListener(\"click\", () => {\r\n  (0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  setActiveButton(homeBtn);\r\n});\r\nmenuBtn.addEventListener(\"click\", () => {\r\n  (0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  setActiveButton(menuBtn);\r\n});\r\ncontactBtn.addEventListener(\"click\", () => {\r\n  (0,_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n  setActiveButton(contactBtn);\r\n});\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?\n}");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction loadMenu() {\r\n  const content = document.getElementById(\"content\");\r\n  content.innerHTML = \"\";\r\n\r\n  const headline = document.createElement(\"h1\");\r\n  headline.textContent = \"Restaurant Food Menu\";\r\n  content.appendChild(headline);\r\n\r\n  const menuContainer = document.createElement(\"div\");\r\n  menuContainer.classList.add(\"menu-container\");\r\n\r\n  // ===== Categories =====\r\n  const categories = {\r\n    Burger: [\r\n      { name: \"Beef Burger\", price: 6 },\r\n      { name: \"Chicken Burger\", price: 4 },\r\n      { name: \"Cheese Burger\", price: 7 },\r\n      { name: \"Veggie Burger\", price: 5 },\r\n    ],\r\n    Pizza: [\r\n      { name: \"Margherita\", price: 6 },\r\n      { name: \"Pepperoni\", price: 8 },\r\n      { name: \"BBQ Chicken\", price: 9 },\r\n      { name: \"Veggie Delight\", price: 7 },\r\n    ],\r\n    Kebab: [\r\n      { name: \"Doner Kebab\", price: 6 },\r\n      { name: \"Lamb Shish\", price: 4 },\r\n      { name: \"Mixed Shish\", price: 7 },\r\n      { name: \"Chicken Shish\", price: 5 },\r\n    ],\r\n    Beverages: [\r\n      { name: \"Coffee\", price: 2.5 },\r\n      { name: \"Tea\", price: 2 },\r\n      { name: \"Orange Juice\", price: 3 },\r\n      { name: \"Soda\", price: 1.5 },\r\n      { name: \"Milkshake\", price: 4 },\r\n    ],\r\n  };\r\n  const categoryImages = {\r\n    Burger:\r\n      \"https://plus.unsplash.com/premium_photo-1683655058728-415f4f2674bf?q=80&w=387&auto=format&fit=crop\",\r\n    Pizza:\r\n      \"https://images.unsplash.com/photo-1593504049359-74330189a345?q=80&w=327&auto=format&fit=crop\",\r\n    Kebab:\r\n      \"https://plus.unsplash.com/premium_photo-1663854478523-877ed0dde4af?q=80&w=387&auto=format&fit=crop\",\r\n    Beverages:\r\n      \"https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=387&auto=format&fit=crop\",\r\n  };\r\n\r\n  Object.keys(categories).forEach((category) => {\r\n    const catCard = document.createElement(\"div\");\r\n    catCard.classList.add(\"menu-card\");\r\n    const imgWrapper = document.createElement(\"div\");\r\n    imgWrapper.classList.add(\"diamond\");\r\n    const img = document.createElement(\"img\");\r\n    img.src = categoryImages[category];\r\n    img.alt = `${category} image`;\r\n    imgWrapper.appendChild(img);\r\n    catCard.appendChild(imgWrapper);\r\n    const catTitle = document.createElement(\"h2\");\r\n    catTitle.textContent = category;\r\n    catCard.appendChild(catTitle);\r\n\r\n    const ul = document.createElement(\"ul\");\r\n    categories[category].forEach((item) => {\r\n      const li = document.createElement(\"li\");\r\n      li.innerHTML = `\r\n        <span class=\"item-name\">${item.name}</span>\r\n        <span class=\"dots\"></span>\r\n        <span class=\"item-price\">$${item.price}</span>\r\n      `;\r\n      ul.appendChild(li);\r\n    });\r\n    catCard.appendChild(ul);\r\n\r\n    menuContainer.appendChild(catCard);\r\n  });\r\n\r\n  content.appendChild(menuContainer);\r\n  // Footer\r\n  const footer = document.createElement(\"div\");\r\n  footer.classList.add(\"menu-footer\");\r\n  footer.innerHTML = `\r\n    <p><strong>Free Home Delivery</strong><br>(+0123) 0123 456</p>\r\n    <p>Address: 123 Main St, Addis Ababa, Ethiopia</p>\r\n    <p>Open:  Mon-Fri 8am - 8pm, Sat-Sun 9am - 5pm</p>\r\n    <p>Follow us on \r\n      <a href=\"#\" target=\"_blank\">Facebook</a>, \r\n      <a href=\"#\" target=\"_blank\">Instagram</a>, \r\n      <a href=\"#\" target=\"_blank\">Twitter</a>\r\n    </p>\r\n  `;\r\n  content.appendChild(footer);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?\n}");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;