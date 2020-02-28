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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/javascript/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\\n\\n/* Document\\n   ========================================================================== */\\n\\n/**\\n * 1. Correct the line height in all browsers.\\n * 2. Prevent adjustments of font size after orientation changes in iOS.\\n */\\n\\nhtml {\\n  line-height: 1.15; /* 1 */\\n  -webkit-text-size-adjust: 100%; /* 2 */\\n}\\n\\n/* Sections\\n   ========================================================================== */\\n\\n/**\\n * Remove the margin in all browsers.\\n */\\n\\nbody {\\n  margin: 0;\\n}\\n\\n/**\\n * Render the `main` element consistently in IE.\\n */\\n\\nmain {\\n  display: block;\\n}\\n\\n/**\\n * Correct the font size and margin on `h1` elements within `section` and\\n * `article` contexts in Chrome, Firefox, and Safari.\\n */\\n\\nh1 {\\n  font-size: 2em;\\n  margin: 0.67em 0;\\n}\\n\\n/* Grouping content\\n   ========================================================================== */\\n\\n/**\\n * 1. Add the correct box sizing in Firefox.\\n * 2. Show the overflow in Edge and IE.\\n */\\n\\nhr {\\n  box-sizing: content-box; /* 1 */\\n  height: 0; /* 1 */\\n  overflow: visible; /* 2 */\\n}\\n\\n/**\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\n * 2. Correct the odd `em` font sizing in all browsers.\\n */\\n\\npre {\\n  font-family: monospace, monospace; /* 1 */\\n  font-size: 1em; /* 2 */\\n}\\n\\n/* Text-level semantics\\n   ========================================================================== */\\n\\n/**\\n * Remove the gray background on active links in IE 10.\\n */\\n\\na {\\n  background-color: transparent;\\n}\\n\\n/**\\n * 1. Remove the bottom border in Chrome 57-\\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\\n */\\n\\nabbr[title] {\\n  border-bottom: none; /* 1 */\\n  text-decoration: underline; /* 2 */\\n  text-decoration: underline dotted; /* 2 */\\n}\\n\\n/**\\n * Add the correct font weight in Chrome, Edge, and Safari.\\n */\\n\\nb,\\nstrong {\\n  font-weight: bolder;\\n}\\n\\n/**\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\n * 2. Correct the odd `em` font sizing in all browsers.\\n */\\n\\ncode,\\nkbd,\\nsamp {\\n  font-family: monospace, monospace; /* 1 */\\n  font-size: 1em; /* 2 */\\n}\\n\\n/**\\n * Add the correct font size in all browsers.\\n */\\n\\nsmall {\\n  font-size: 80%;\\n}\\n\\n/**\\n * Prevent `sub` and `sup` elements from affecting the line height in\\n * all browsers.\\n */\\n\\nsub,\\nsup {\\n  font-size: 75%;\\n  line-height: 0;\\n  position: relative;\\n  vertical-align: baseline;\\n}\\n\\nsub {\\n  bottom: -0.25em;\\n}\\n\\nsup {\\n  top: -0.5em;\\n}\\n\\n/* Embedded content\\n   ========================================================================== */\\n\\n/**\\n * Remove the border on images inside links in IE 10.\\n */\\n\\nimg {\\n  border-style: none;\\n}\\n\\n/* Forms\\n   ========================================================================== */\\n\\n/**\\n * 1. Change the font styles in all browsers.\\n * 2. Remove the margin in Firefox and Safari.\\n */\\n\\nbutton,\\ninput,\\noptgroup,\\nselect,\\ntextarea {\\n  font-family: inherit; /* 1 */\\n  font-size: 100%; /* 1 */\\n  line-height: 1.15; /* 1 */\\n  margin: 0; /* 2 */\\n}\\n\\n/**\\n * Show the overflow in IE.\\n * 1. Show the overflow in Edge.\\n */\\n\\nbutton,\\ninput { /* 1 */\\n  overflow: visible;\\n}\\n\\n/**\\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\\n * 1. Remove the inheritance of text transform in Firefox.\\n */\\n\\nbutton,\\nselect { /* 1 */\\n  text-transform: none;\\n}\\n\\n/**\\n * Correct the inability to style clickable types in iOS and Safari.\\n */\\n\\nbutton,\\n[type=\\\"button\\\"],\\n[type=\\\"reset\\\"],\\n[type=\\\"submit\\\"] {\\n  -webkit-appearance: button;\\n}\\n\\n/**\\n * Remove the inner border and padding in Firefox.\\n */\\n\\nbutton::-moz-focus-inner,\\n[type=\\\"button\\\"]::-moz-focus-inner,\\n[type=\\\"reset\\\"]::-moz-focus-inner,\\n[type=\\\"submit\\\"]::-moz-focus-inner {\\n  border-style: none;\\n  padding: 0;\\n}\\n\\n/**\\n * Restore the focus styles unset by the previous rule.\\n */\\n\\nbutton:-moz-focusring,\\n[type=\\\"button\\\"]:-moz-focusring,\\n[type=\\\"reset\\\"]:-moz-focusring,\\n[type=\\\"submit\\\"]:-moz-focusring {\\n  outline: 1px dotted ButtonText;\\n}\\n\\n/**\\n * Correct the padding in Firefox.\\n */\\n\\nfieldset {\\n  padding: 0.35em 0.75em 0.625em;\\n}\\n\\n/**\\n * 1. Correct the text wrapping in Edge and IE.\\n * 2. Correct the color inheritance from `fieldset` elements in IE.\\n * 3. Remove the padding so developers are not caught out when they zero out\\n *    `fieldset` elements in all browsers.\\n */\\n\\nlegend {\\n  box-sizing: border-box; /* 1 */\\n  color: inherit; /* 2 */\\n  display: table; /* 1 */\\n  max-width: 100%; /* 1 */\\n  padding: 0; /* 3 */\\n  white-space: normal; /* 1 */\\n}\\n\\n/**\\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\\n */\\n\\nprogress {\\n  vertical-align: baseline;\\n}\\n\\n/**\\n * Remove the default vertical scrollbar in IE 10+.\\n */\\n\\ntextarea {\\n  overflow: auto;\\n}\\n\\n/**\\n * 1. Add the correct box sizing in IE 10.\\n * 2. Remove the padding in IE 10.\\n */\\n\\n[type=\\\"checkbox\\\"],\\n[type=\\\"radio\\\"] {\\n  box-sizing: border-box; /* 1 */\\n  padding: 0; /* 2 */\\n}\\n\\n/**\\n * Correct the cursor style of increment and decrement buttons in Chrome.\\n */\\n\\n[type=\\\"number\\\"]::-webkit-inner-spin-button,\\n[type=\\\"number\\\"]::-webkit-outer-spin-button {\\n  height: auto;\\n}\\n\\n/**\\n * 1. Correct the odd appearance in Chrome and Safari.\\n * 2. Correct the outline style in Safari.\\n */\\n\\n[type=\\\"search\\\"] {\\n  -webkit-appearance: textfield; /* 1 */\\n  outline-offset: -2px; /* 2 */\\n}\\n\\n/**\\n * Remove the inner padding in Chrome and Safari on macOS.\\n */\\n\\n[type=\\\"search\\\"]::-webkit-search-decoration {\\n  -webkit-appearance: none;\\n}\\n\\n/**\\n * 1. Correct the inability to style clickable types in iOS and Safari.\\n * 2. Change font properties to `inherit` in Safari.\\n */\\n\\n::-webkit-file-upload-button {\\n  -webkit-appearance: button; /* 1 */\\n  font: inherit; /* 2 */\\n}\\n\\n/* Interactive\\n   ========================================================================== */\\n\\n/*\\n * Add the correct display in Edge, IE 10+, and Firefox.\\n */\\n\\ndetails {\\n  display: block;\\n}\\n\\n/*\\n * Add the correct display in all browsers.\\n */\\n\\nsummary {\\n  display: list-item;\\n}\\n\\n/* Misc\\n   ========================================================================== */\\n\\n/**\\n * Add the correct display in IE 10+.\\n */\\n\\ntemplate {\\n  display: none;\\n}\\n\\n/**\\n * Add the correct display in IE 10.\\n */\\n\\n[hidden] {\\n  display: none;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./node_modules/normalize.css/normalize.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/styles.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/styles.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../images/svg/bg-small.svg */ \"./src/images/svg/bg-small.svg\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../images/svg/image-mask.svg */ \"./src/images/svg/image-mask.svg\");\nvar ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../images/svg/check.svg */ \"./src/images/svg/check.svg\");\nvar ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ../images/svg/bg.svg */ \"./src/images/svg/bg.svg\");\nvar ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(/*! ../images/svg/geometric.svg */ \"./src/images/svg/geometric.svg\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Muli:400,700,800&display=swap);\"]);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Roboto&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);\n// Module\nexports.push([module.i, \".text-center {\\n  text-align: center; }\\n\\n* {\\n  font-family: 'Muli'; }\\n\\nh1 {\\n  font-size: 1.875rem; }\\n\\nh2 {\\n  font-size: 1.5rem;\\n  line-height: 1.6875rem; }\\n\\n.titleh2 {\\n  font-size: 1.5rem; }\\n\\nh3.subtitle {\\n  font-size: 1rem;\\n  font-weight: normal; }\\n\\n.subtitle {\\n  color: white; }\\n  .subtitleh3 {\\n    font-size: 1rem;\\n    font-weight: normal; }\\n\\nheader {\\n  padding: 2rem;\\n  padding-bottom: 0;\\n  background: #2b2b2b; }\\n  header .logo {\\n    width: 105px; }\\n\\n.description {\\n  font-size: 1.125rem;\\n  line-height: 1.4375rem;\\n  color: #262626; }\\n\\nimg,\\nsvg {\\n  max-width: 100%; }\\n\\nbutton,\\n.button {\\n  background: #F73048;\\n  font-weight: 800;\\n  color: white;\\n  border-radius: 5px;\\n  border: none;\\n  font-size: 1.125rem;\\n  padding: 0;\\n  margin: 0.9375rem 0 0.625rem;\\n  width: 100%;\\n  display: inline-block;\\n  text-align: center;\\n  cursor: pointer;\\n  height: 57px;\\n  line-height: 57px; }\\n\\nheader {\\n  background: #2b2b2b; }\\n\\n.hero {\\n  display: flex;\\n  flex-flow: column nowrap;\\n  padding: 0.8rem 2rem;\\n  padding-bottom: 0;\\n  background: #2b2b2b;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-position: 100% 123%;\\n  background-repeat: no-repeat; }\\n  .hero.bottom {\\n    padding: 4.8rem 2rem;\\n    background-image: none; }\\n    .hero.bottom .title {\\n      color: white;\\n      font-size: 1.5rem;\\n      line-height: 1.6875rem;\\n      margin-top: 0.4rem; }\\n  .hero .title {\\n    color: white;\\n    font-family: 'Muli';\\n    font-weight: normal;\\n    font-size: 1.875rem;\\n    line-height: 2.1875rem; }\\n  .hero h5 {\\n    color: #CACACA;\\n    font-size: 1.125rem;\\n    font-weight: normal;\\n    line-height: 1.5625rem; }\\n  .hero form {\\n    display: flex;\\n    flex-flow: column nowrap; }\\n    .hero form .field {\\n      display: flex;\\n      width: 100%;\\n      flex-flow: column nowrap; }\\n      .hero form .field .error-message {\\n        display: none; }\\n      .hero form .field.error input {\\n        border-color: #FF0036; }\\n      .hero form .field.error .error-message {\\n        display: inline;\\n        color: #FF0036;\\n        top: -5px;\\n        position: relative;\\n        font-size: 1rem; }\\n    .hero form input {\\n      background: rgba(255, 255, 255, 0.15);\\n      border: 1px solid rgba(0, 0, 0, 0.5);\\n      font-size: 1rem;\\n      padding: 0.5625rem;\\n      color: white;\\n      margin-bottom: 0.5rem;\\n      margin-left: -1px;\\n      margin-right: -1px; }\\n      .hero form input:focus {\\n        outline: none; }\\n      .hero form input::-webkit-input-placeholder {\\n        color: rgba(255, 255, 255, 0.3);\\n        font-size: 1rem; }\\n      .hero form input:-moz-placeholder {\\n        color: rgba(255, 255, 255, 0.3);\\n        font-size: 1rem; }\\n      .hero form input::-moz-placeholder {\\n        color: rgba(255, 255, 255, 0.3);\\n        font-size: 1rem; }\\n      .hero form input:-ms-input-placeholder {\\n        color: rgba(255, 255, 255, 0.3);\\n        font-size: 1rem; }\\n    .hero form label {\\n      color: #CACACA;\\n      font-size: 1rem;\\n      margin: 0.3125rem 0.0625rem 0.1875rem; }\\n  .hero.thankyou .ebook-presentation {\\n    padding: 3rem 10% 4rem;\\n    top: 0; }\\n  .hero.thankyou .share-ebook {\\n    margin-top: 3.2rem;\\n    color: white;\\n    font-size: 1em;\\n    display: flex;\\n    flex-flow: column nowrap; }\\n    .hero.thankyou .share-ebook .share-social {\\n      display: flex;\\n      align-items: center;\\n      padding-top: 0.8rem; }\\n      .hero.thankyou .share-ebook .share-social a {\\n        margin: 0.4rem;\\n        width: 38px; }\\n      .hero.thankyou .share-ebook .share-social svg {\\n        width: 100%; }\\n\\n.ebook-presentation {\\n  padding: 0 3.2rem;\\n  position: relative;\\n  top: 3.2rem;\\n  display: flex;\\n  align-items: start;\\n  justify-content: center;\\n  flex: 1; }\\n  .ebook-presentation img {\\n    max-width: 100%;\\n    height: auto;\\n    box-shadow: 0px 9px 31px rgba(0, 0, 0, 0.25); }\\n\\n.briefing {\\n  margin-top: 3.2rem;\\n  padding: 2rem;\\n  padding-bottom: 4.8rem; }\\n\\n.author {\\n  background: #F3F3F3;\\n  padding: 3.2rem 2rem 3.2rem; }\\n  .author figure {\\n    margin: 2rem 0 3.2rem;\\n    position: relative; }\\n    .author figure:before {\\n      content: '';\\n      position: absolute;\\n      background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n      background-size: contain;\\n      background-repeat: no-repeat;\\n      top: -12px;\\n      left: 12px;\\n      width: 20%;\\n      padding-bottom: 20%; }\\n  .author .title {\\n    margin-bottom: 0.8rem; }\\n  .author .subtitle {\\n    text-transform: uppercase;\\n    font-size: 1rem;\\n    line-height: 1.25rem;\\n    font-style: italic;\\n    color: #262626;\\n    margin: 0;\\n    padding-bottom: 0.8rem; }\\n  .author article {\\n    margin: 0.8rem 0;\\n    margin-right: 0.8rem; }\\n    .author article p {\\n      line-height: 1.25rem;\\n      font-size: 1rem;\\n      margin: 1.6rem 0; }\\n\\n.card {\\n  margin: 2rem 2rem 0.8rem 0;\\n  display: flex;\\n  flex-flow: column nowrap; }\\n  .card:last-of-type {\\n    margin-bottom: 0; }\\n  .card--title {\\n    display: flex;\\n    align-items: center;\\n    position: relative;\\n    padding-left: 40px;\\n    color: #262626;\\n    font-size: 1.125rem;\\n    margin: 0.8rem 0; }\\n    .card--title:before {\\n      content: '';\\n      width: 32px;\\n      height: 32px;\\n      left: 0;\\n      position: absolute;\\n      background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") no-repeat left center;\\n      background-size: contain;\\n      display: flex; }\\n  .card--description {\\n    display: flex;\\n    padding-left: 40px;\\n    color: #5F5F5F;\\n    line-height: 1.25rem;\\n    font-size: 1rem; }\\n\\nfooter {\\n  padding: 2rem;\\n  padding-bottom: 0.8rem; }\\n  footer .logo {\\n    max-width: 68%;\\n    margin: 0 auto; }\\n    footer .logo path:first-of-type {\\n      stroke: #262626; }\\n    footer .logo path:last-of-type {\\n      fill: #262626; }\\n  footer .social {\\n    margin-top: 0.8rem;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center; }\\n    footer .social a {\\n      margin: 0.4rem;\\n      min-width: 38px;\\n      width: 15%; }\\n    footer .social svg {\\n      width: 100%; }\\n  footer.thankyou {\\n    padding: 0 10%; }\\n    footer.thankyou p {\\n      font-size: 0.875rem; }\\n\\n@media (min-width: 960px) {\\n  .button {\\n    min-width: 360px; }\\n  header {\\n    padding: 4.8rem 10% 0.4rem; }\\n  .hero {\\n    padding: 0.8rem 10%;\\n    display: flex;\\n    flex-flow: row nowrap;\\n    background-position: center right;\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \"); }\\n    .hero .title {\\n      font-size: 2.5rem;\\n      line-height: 2.8125rem;\\n      margin-bottom: 0.4rem; }\\n    .hero .subtitle {\\n      max-width: 450px;\\n      margin-top: 0.8rem; }\\n    .hero .container {\\n      max-width: 50%;\\n      padding-right: 2rem; }\\n    .hero form {\\n      max-width: 22.5rem;\\n      margin: 2rem 0 4.8rem; }\\n      .hero form input {\\n        height: 26px; }\\n    .hero .button {\\n      margin: 1.6rem 0 0.8rem; }\\n    .hero .ebook-presentation {\\n      top: 5.5rem;\\n      height: 100%;\\n      max-width: 500px; }\\n    .hero.thankyou {\\n      height: calc(100vh - 240px);\\n      padding-bottom: 5rem; }\\n      .hero.thankyou .ebook-presentation {\\n        top: -3rem;\\n        padding-left: 3.2rem; }\\n      .hero.thankyou .share-ebook .share-social {\\n        padding-left: 0.8rem; }\\n    .hero.bottom {\\n      flex-flow: column nowrap;\\n      align-items: center;\\n      background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \"); }\\n      .hero.bottom .title {\\n        font-size: 2.25rem;\\n        line-height: 2.625rem;\\n        max-width: 600px; }\\n      .hero.bottom button {\\n        margin-top: 2rem; }\\n  section.briefing {\\n    padding: 3.2rem 10% 6.4rem; }\\n    section.briefing .chapters {\\n      display: flex;\\n      margin-top: 1rem; }\\n      section.briefing .chapters .card {\\n        max-width: 25%;\\n        padding-right: 3.2rem; }\\n    section.briefing h2 {\\n      font-size: 2.25rem;\\n      line-height: 2.5rem;\\n      margin-bottom: 1rem;\\n      max-width: 45%; }\\n  section.author {\\n    padding: 4.8rem 10%;\\n    display: flex;\\n    flex-flow: row nowrap;\\n    align-items: center; }\\n    section.author figure {\\n      display: flex;\\n      flex: 1;\\n      max-width: 40%;\\n      padding-right: 9.6rem;\\n      margin: 3rem 0; }\\n      section.author figure:before {\\n        top: -22px;\\n        left: 22px;\\n        width: 18%; }\\n      section.author figure img {\\n        width: 100%;\\n        object-fit: cover; }\\n    section.author article {\\n      max-width: 30%; }\\n  footer {\\n    padding: 0.8rem 10%;\\n    display: flex;\\n    flex-flow: row nowrap;\\n    align-items: center;\\n    justify-content: space-between; }\\n    footer .logo {\\n      width: 190px;\\n      margin: 0; }\\n    footer .social {\\n      margin: 0; }\\n      footer .social a {\\n        width: 38px; } }\\n\\n@media (min-width: 1920px) {\\n  .hero {\\n    justify-content: center; }\\n    .hero .ebook-presentation img {\\n      max-height: calc(100vh - 360px);\\n      height: 100%; } }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/sass/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\n\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../css-loader/dist/cjs.js!./normalize.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./node_modules/normalize.css/normalize.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/images/svg/bg-small.svg":
/*!*************************************!*\
  !*** ./src/images/svg/bg-small.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/bg-small.svg\";\n\n//# sourceURL=webpack:///./src/images/svg/bg-small.svg?");

/***/ }),

/***/ "./src/images/svg/bg.svg":
/*!*******************************!*\
  !*** ./src/images/svg/bg.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/bg.svg\";\n\n//# sourceURL=webpack:///./src/images/svg/bg.svg?");

/***/ }),

/***/ "./src/images/svg/check.svg":
/*!**********************************!*\
  !*** ./src/images/svg/check.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/check.svg\";\n\n//# sourceURL=webpack:///./src/images/svg/check.svg?");

/***/ }),

/***/ "./src/images/svg/geometric.svg":
/*!**************************************!*\
  !*** ./src/images/svg/geometric.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/geometric.svg\";\n\n//# sourceURL=webpack:///./src/images/svg/geometric.svg?");

/***/ }),

/***/ "./src/images/svg/image-mask.svg":
/*!***************************************!*\
  !*** ./src/images/svg/image-mask.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/image-mask.svg\";\n\n//# sourceURL=webpack:///./src/images/svg/image-mask.svg?");

/***/ }),

/***/ "./src/javascript/index.js":
/*!*********************************!*\
  !*** ./src/javascript/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize.css */ \"./node_modules/normalize.css/normalize.css\");\n/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/styles.scss */ \"./src/sass/styles.scss\");\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sass_styles_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst validations = {\n  required: {\n    message: 'digite seu',\n    valid: function (value) {\n      return value !== '';\n    }\n  },\n  email: {\n    message: 'digite um email válido',\n    valid: function (value) {\n      return value.match(/^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/);\n    }\n  }\n};\n\nconst formValidate = function () {\n  let form = document.getElementById('form'),\n      inputsArr = form.querySelectorAll('input'),\n      errorMessage = undefined;\n  form.addEventListener('submit', function (e) {\n    var i = 0;\n\n    while (i < inputsArr.length) {\n      var attr = inputsArr[i].getAttribute('data-validation'),\n          rules = attr ? attr.split(' ') : '',\n          parent = inputsArr[i].closest(\".field\"),\n          j = 0;\n\n      while (j < rules.length) {\n        errorMessage = parent.querySelector('.error-message');\n\n        if (!validations[rules[j]].valid(inputsArr[i].value)) {\n          e.preventDefault();\n          errorMessage.innerHTML = rules[j] == 'email' ? validations[rules[j]].message : validations[rules[j]].message + ' ' + inputsArr[i].name;\n          parent.className = \"field error\";\n          return false;\n        }\n\n        errorMessage.className = \"error-message hidden\";\n        parent.className = \"field\";\n        j++;\n      }\n\n      i++;\n    }\n\n    e.preventDefault();\n  }, false);\n};\n\nformValidate();\n\n//# sourceURL=webpack:///./src/javascript/index.js?");

/***/ }),

/***/ "./src/sass/styles.scss":
/*!******************************!*\
  !*** ./src/sass/styles.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/styles.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/sass/styles.scss?");

/***/ })

/******/ });