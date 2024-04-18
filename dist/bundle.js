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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst accordNumber_1 = __webpack_require__(/*! ./modules/accordNumber */ \"./src/modules/accordNumber.ts\");\n(0, accordNumber_1.numAccordion)();\n\n\n//# sourceURL=webpack://insane-ts/./src/index.ts?");

/***/ }),

/***/ "./src/modules/accordNumber.ts":
/*!*************************************!*\
  !*** ./src/modules/accordNumber.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.numAccordion = void 0;\nconst numAccordion = () => {\n    const arrowAccord = document.querySelector('.header-contacts__arrow');\n    const accordWrapper = document.querySelector('.header-contacts__phone-number-accord');\n    const linkNumber = accordWrapper.querySelector('a');\n    let clicker = false;\n    const changeAccorrdion = (e) => {\n        clicker = !clicker;\n        if (clicker) {\n            arrowAccord.style.transform = 'rotate(-90deg)';\n            accordWrapper.style.top = '30px';\n            linkNumber.style.opacity = '1';\n        }\n        else {\n            arrowAccord.style.transform = 'rotate(0deg)';\n            accordWrapper.style.top = '0';\n            linkNumber.style.opacity = '0';\n        }\n    };\n    arrowAccord === null || arrowAccord === void 0 ? void 0 : arrowAccord.addEventListener('click', changeAccorrdion);\n};\nexports.numAccordion = numAccordion;\n\n\n//# sourceURL=webpack://insane-ts/./src/modules/accordNumber.ts?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;