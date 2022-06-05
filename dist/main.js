/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var Education;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\nfunction Player(videoElementWrapperId, opts) {\n  this.videoElementWrapperId = videoElementWrapperId;\n  this.opts = opts;\n  this.videoElement = null;\n  this.videoElementWrapper = null;\n}\n\nPlayer.prototype.build = function () {\n  this.videoElementWrapper = document.getElementById(this.videoElementWrapperId);\n  this.videoElement = document.createElement('video');\n  this.videoElement.src = this.opts.src;\n  if (this.opts.controls) {\n    this.videoElement.controls = true;\n  }\n  if (this.opts.loop) {\n    this.videoElement.loop = true;\n  }\n  if (this.opts.autoplay) {\n    this.videoElement.autoplay = true;\n    // https://developer.mozilla.org/en-US/docs/Web/Media/Autoplay_guide#best_practices\n    this.videoElement.playsinline = true;\n    this.videoElement.muted = true;\n    setInterval(() => this.pressPlay(), 5000); // keep trying to play\n  }\n  this.videoElementWrapper.appendChild(this.videoElement);\n};\n\nPlayer.prototype.pressPlay = function () {\n  if (\n    // video has stopped\n    this.videoElement.currentTime > 0\n    && !this.videoElement.paused\n    && !this.videoElement.ended\n    && this.videoElement.readyState > 2\n  ) {\n    this.videoElement.play();\n  }\n};\n\n\n\n\n//# sourceURL=webpack://Education/./src/Player.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/Player.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	Education = __webpack_exports__;
/******/ 	
/******/ })()
;