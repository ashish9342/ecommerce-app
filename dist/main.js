/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/cart/cart.js":
/*!*************************************!*\
  !*** ./src/components/cart/cart.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _configs_text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../configs/text */ \"./src/configs/text.js\");\n\n\nfunction cart() {\n  document.getElementById(\"cart\").innerHTML = `\n  <div class=\"cart\">\n    <h2 class=\"section-header\">${_configs_text__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cart}</h2>\n    <div class=\"cart-row\">\n      <span class=\"cart-item cart-header cart-column\">${_configs_text__WEBPACK_IMPORTED_MODULE_0__[\"default\"].item}</span>\n      <span class=\"cart-price cart-header cart-column\">${_configs_text__WEBPACK_IMPORTED_MODULE_0__[\"default\"].price}</span>\n      <span class=\"cart-quantity cart-header cart-column\">${_configs_text__WEBPACK_IMPORTED_MODULE_0__[\"default\"].quantity}</span>\n    </div>\n    <div class=\"cart-items\">\n\n\n    </div>\n    <div class=\"cart-total\">\n      <p class=\"cart-total-title\">${_configs_text__WEBPACK_IMPORTED_MODULE_0__[\"default\"].total}</p>\n      <p class=\"\">${_configs_text__WEBPACK_IMPORTED_MODULE_0__[\"default\"].items} : <span class=\"items-count\">0</span>  </p>\n      <p class=\"\">${_configs_text__WEBPACK_IMPORTED_MODULE_0__[\"default\"].discount} : <span class=\"items-discount\"> 0</span></p>\n      <p class=\"bg-grey\">${_configs_text__WEBPACK_IMPORTED_MODULE_0__[\"default\"].orderTotal} : <span class=\"cart-total-price\">$ 0</span></p>\n    </div>\n</div>`;\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (cart);\n\n\n//# sourceURL=webpack:///./src/components/cart/cart.js?");

/***/ }),

/***/ "./src/components/header/header.js":
/*!*****************************************!*\
  !*** ./src/components/header/header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return header; });\n/* harmony import */ var _configs_text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../configs/text */ \"./src/configs/text.js\");\n\n\nfunction header() {\n  document.getElementById(\"header\").innerHTML = `<h1> ${_configs_text__WEBPACK_IMPORTED_MODULE_0__[\"default\"].header} </h1>`;\n}\n\n\n//# sourceURL=webpack:///./src/components/header/header.js?");

/***/ }),

/***/ "./src/components/products/products.js":
/*!*********************************************!*\
  !*** ./src/components/products/products.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (9:54)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n|         `<div class=\\\"product shop-item\\\">\\n|         <div class=\\\"img-holder\\\">\\n>           <img class=\\\"shop-item-image\\\" src=\\\"${product?.image}\\\">\\n|           <span class=\\\"discount\\\">${product?.discount + text?.off}</span>\\n|         </div>\");\n\n//# sourceURL=webpack:///./src/components/products/products.js?");

/***/ }),

/***/ "./src/components/toast/toast.js":
/*!***************************************!*\
  !*** ./src/components/toast/toast.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Toast; });\n/* harmony import */ var _configs_text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../configs/text */ \"./src/configs/text.js\");\n\n\nfunction Toast(title) {\n  let node = document.createElement(\"div\");\n  node.classList.add(\"toast\");\n  node.innerHTML = ` ${title + \" \" + _configs_text__WEBPACK_IMPORTED_MODULE_0__[\"default\"].itemAdded}`;\n  document.getElementById(\"header\").append(node);\n}\n\n\n//# sourceURL=webpack:///./src/components/toast/toast.js?");

/***/ }),

/***/ "./src/configs/config.js":
/*!*******************************!*\
  !*** ./src/configs/config.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst CONFIG = {\n  url: \"https://run.mocky.io/v3/cf2a3f46-42a0-43f2-a8ba-d6296f1b5e2f\"\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CONFIG);\n\n\n//# sourceURL=webpack:///./src/configs/config.js?");

/***/ }),

/***/ "./src/configs/text.js":
/*!*****************************!*\
  !*** ./src/configs/text.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst text = {\n  item: \"ITEM\",\n  price: \"PRICE\",\n  quantity: \"QUANTITY\",\n  total: \"TOTAL\",\n  cart: \"CART\",\n  items: \"Items\",\n  discount: \"Discount\",\n  orderTotal: \"Order Total\",\n  addToCart: \"ADD TO CART\",\n  off: \"% off\",\n  loading: \"Loading....\",\n  errorAPI: \"There was some Error. Please try after sometime\",\n  header: \"All Items\",\n  itemAdded: \" has been added to Cart\"\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (text);\n\n\n//# sourceURL=webpack:///./src/configs/text.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _configs_text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configs/text */ \"./src/configs/text.js\");\n/* harmony import */ var _configs_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configs/config */ \"./src/configs/config.js\");\n/* harmony import */ var _components_products_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/products/products */ \"./src/components/products/products.js\");\n/* harmony import */ var _components_products_products__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_products_products__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_cart_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/cart/cart */ \"./src/components/cart/cart.js\");\n/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header */ \"./src/components/header/header.js\");\n/* harmony import */ var _components_toast_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/toast/toast */ \"./src/components/toast/toast.js\");\n// import \"./styles/styles.css\";\n// import data from \"../data/data\";\n\n\n\n\n\n\n\nconst ecomm = {\n  renderProducts: async () => {\n    document.getElementById(\"productCatalouge\").innerHTML = _configs_text__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loading;\n    try {\n      const response = await fetch(_configs_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].url);\n      const data = await response.json();\n      // console.log(\"data\", data);\n      _components_products_products__WEBPACK_IMPORTED_MODULE_2___default()(data.items);\n      ecomm.addEventListener();\n    } catch (e) {\n      document.getElementById(\"productCatalouge\").innerHTML = _configs_text__WEBPACK_IMPORTED_MODULE_0__[\"default\"].errorAPI;\n      console.log(\"Error : \", e.message);\n    }\n  },\n  renderCart: () => {\n    Object(_components_header_header__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    Object(_components_cart_cart__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  },\n  renderToast: (title) => {\n    Object(_components_toast_toast__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(title);\n    // hide\n    setTimeout(function () {\n      document.getElementsByClassName(\"toast\")[0].remove();\n    }, 1000);\n  },\n  addEventListener: () => {\n    let removeCartItemButtons = document.getElementsByClassName(\"btn-danger\");\n    for (let i = 0; i < removeCartItemButtons.length; i++) {\n      let button = removeCartItemButtons[i];\n      button.addEventListener(\"click\", ecomm.removeCartItem);\n    }\n\n    let quantityInputs = document.getElementsByClassName(\"cart-quantity-input\");\n    for (let i = 0; i < quantityInputs.length; i++) {\n      let input = quantityInputs[i];\n      input.addEventListener(\"change\", ecomm.quantityChanged);\n    }\n\n    let addToCartButtons = document.getElementsByClassName(\"shop-item-button\");\n    for (let i = 0; i < addToCartButtons.length; i++) {\n      let button = addToCartButtons[i];\n      button.addEventListener(\"click\", ecomm.addToCartClicked);\n    }\n  },\n  removeCartItem: (event) => {\n    let buttonClicked = event.target;\n    buttonClicked.parentElement.parentElement.remove();\n    ecomm.updateCartTotal();\n  },\n  quantityChanged: (event) => {\n    let input = event.target;\n    if (isNaN(input.value) || input.value <= 0) {\n      input.value = 1;\n    }\n    ecomm.updateCartTotal();\n  },\n  addToCartClicked: (event) => {\n    // let discount = 0;\n    let button = event.target;\n    let shopItem = button.parentElement.parentElement;\n    let title = shopItem.getElementsByClassName(\"shop-item-title\")[0].innerText;\n    let price = shopItem.getElementsByClassName(\"shop-item-price\")[0].innerText;\n    let orgPrice = shopItem.getElementsByClassName(\"shop-item-display\")[0]\n      .innerText;\n    let imageSrc = shopItem.getElementsByClassName(\"shop-item-image\")[0].src;\n    // discount = orgPrice - price;\n    // console.log(discount);\n    ecomm.addItemToCart(title, price, imageSrc, orgPrice);\n    ecomm.updateCartTotal();\n    // show toast\n  },\n  addItemToCart: (title, price, imageSrc, orgPrice) => {\n    let cartRow = document.createElement(\"div\");\n    cartRow.classList.add(\"cart-row\");\n    let cartItems = document.getElementsByClassName(\"cart-items\")[0];\n    let cartItemNames = cartItems.getElementsByClassName(\"cart-item-title\");\n    for (let i = 0; i < cartItemNames.length; i++) {\n      if (cartItemNames[i].innerText === title) {\n        alert(\"This item is already added to the cart\");\n        return;\n      }\n    }\n    let cartRowContents = `\n        <div class=\"cart-item cart-column\">\n            <img class=\"cart-item-image\" src=\"${imageSrc}\" width=\"100\" height=\"100\">\n            <span class=\"cart-item-title\">${title}</span>\n        </div>\n        <span class=\"cart-price cart-column\">${price}</span>\n        <input class=\"cart-org-price\" type=\"hidden\" value=\"${orgPrice}\">\n        <div class=\"cart-quantity cart-column\">\n            <input class=\"cart-quantity-input\" type=\"number\" value=\"1\">\n            <button class=\"btn btn-danger\" type=\"button\">REMOVE</button>\n        </div>`;\n    cartRow.innerHTML = cartRowContents;\n    cartItems.append(cartRow);\n    cartRow\n      .getElementsByClassName(\"btn-danger\")[0]\n      .addEventListener(\"click\", ecomm.removeCartItem);\n    cartRow\n      .getElementsByClassName(\"cart-quantity-input\")[0]\n      .addEventListener(\"change\", ecomm.quantityChanged);\n\n    ecomm.renderToast(title);\n  },\n  updateTotalItemsAndDiscount: (cartRows) => {\n    let count = 0,\n      discount = 0;\n    for (let i = 0; i < cartRows.length; i++) {\n      let cartRow = cartRows[i];\n      let quantityElement = cartRow.getElementsByClassName(\n        \"cart-quantity-input\"\n      )[0];\n      let priceElement = cartRow.getElementsByClassName(\"cart-price\")[0]\n        .innerText;\n      let orgPrice = cartRow.getElementsByClassName(\"cart-org-price\")[0].value;\n      let quantity = quantityElement.value;\n      discount += (parseFloat(orgPrice) - parseFloat(priceElement)) * quantity;\n      console.log(discount, priceElement, orgPrice);\n\n      count += parseFloat(quantity);\n    }\n    console.log(\"discount\", discount);\n    document.getElementsByClassName(\"items-discount\")[0].innerText = discount;\n    document.getElementsByClassName(\"items-count\")[0].innerText = count;\n  },\n  updateCartTotal: () => {\n    let cartItemContainer = document.getElementsByClassName(\"cart-items\")[0];\n    let cartRows = cartItemContainer.getElementsByClassName(\"cart-row\");\n    let total = 0;\n    for (let i = 0; i < cartRows.length; i++) {\n      let cartRow = cartRows[i];\n      let priceElement = cartRow.getElementsByClassName(\"cart-price\")[0];\n      let quantityElement = cartRow.getElementsByClassName(\n        \"cart-quantity-input\"\n      )[0];\n      let price = parseFloat(priceElement.innerText.replace(\"$\", \"\"));\n      let quantity = quantityElement.value;\n\n      total = total + price * quantity;\n    }\n    ecomm.updateTotalItemsAndDiscount(cartRows);\n    // ecomm.updateDiscount(cartRows);\n    document.getElementsByClassName(\"cart-total-price\")[0].innerText =\n      \"$\" + total;\n  },\n  render: () => {\n    ecomm.renderCart();\n    ecomm.renderProducts();\n  }\n};\n\necomm.render();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });