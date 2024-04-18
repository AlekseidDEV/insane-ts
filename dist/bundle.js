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

eval("\nvar _a;\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst accordNumber_1 = __webpack_require__(/*! ./modules/accordNumber */ \"./src/modules/accordNumber.ts\");\nconst inputMask_1 = __webpack_require__(/*! ./modules/helpers/inputMask */ \"./src/modules/helpers/inputMask.ts\");\nconst menu_1 = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.ts\");\nconst smoothScroll_1 = __webpack_require__(/*! ./modules/smoothScroll */ \"./src/modules/smoothScroll.ts\");\n(0, accordNumber_1.numAccordion)();\nif (window.innerWidth > 576) {\n    (0, menu_1.menuFunc)(\"translate3d(0px, 0px, 0px)\", \"translate3d(645px, 0px, 0px)\");\n}\nelse {\n    (0, menu_1.menuFunc)(\"translate3d(0px, 0px, 0px)\", \"translate3d(0px, 750px, 0px)\");\n}\n(_a = document.querySelector('.button-footer')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', (e) => {\n    e.preventDefault();\n    (0, smoothScroll_1.smoothScroll)(e.target.hash);\n});\n(0, inputMask_1.maskPhone)('input[name=\"phone\"]');\n\n\n//# sourceURL=webpack://insane-ts/./src/index.ts?");

/***/ }),

/***/ "./src/modules/accordNumber.ts":
/*!*************************************!*\
  !*** ./src/modules/accordNumber.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.numAccordion = void 0;\nconst numAccordion = () => {\n    const arrowAccord = document.querySelector('.header-contacts__arrow');\n    const accordWrapper = document.querySelector('.header-contacts__phone-number-accord');\n    const linkNumber = accordWrapper.querySelector('a');\n    let clicker = false;\n    const changeAccorrdion = (e) => {\n        clicker = !clicker;\n        if (clicker) {\n            arrowAccord.style.transform = 'rotate(-90deg)';\n            accordWrapper.style.top = '30px';\n            linkNumber.style.opacity = '1';\n        }\n        else {\n            arrowAccord.style.transform = 'rotate(0deg)';\n            accordWrapper.style.top = '0';\n            linkNumber.style.opacity = '0';\n        }\n    };\n    arrowAccord === null || arrowAccord === void 0 ? void 0 : arrowAccord.addEventListener('click', changeAccorrdion);\n};\nexports.numAccordion = numAccordion;\n\n\n//# sourceURL=webpack://insane-ts/./src/modules/accordNumber.ts?");

/***/ }),

/***/ "./src/modules/helpers/inputMask.ts":
/*!******************************************!*\
  !*** ./src/modules/helpers/inputMask.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.maskPhone = void 0;\nfunction maskPhone(selector, masked = \"+7 (___) ___-__-__\") {\n    const elems = document.querySelectorAll(selector);\n    function mask(event) {\n        const template = masked, def = template.replace(/\\D/g, \"\"), val = event.target.value.replace(/\\D/g, \"\");\n        let i = 0, newValue = template.replace(/[_\\d]/g, function (a) {\n            return i < val.length ? val.charAt(i++) || def.charAt(i) : a;\n        });\n        i = newValue.indexOf(\"_\");\n        if (i !== -1) {\n            newValue = newValue.slice(0, i);\n        }\n        let reg = template\n            .slice(0, event.target.value.length)\n            .replace(/_+/g, function (a) {\n            return \"\\\\d{1,\" + a.length + \"}\";\n        })\n            .replace(/[+()]/g, \"\\\\$&\");\n        let numReg = new RegExp(\"^\" + reg + \"$\");\n        if (!numReg.test(event.target.value) || event.target.value.length < 5) {\n            event.target.value = newValue;\n        }\n        if (event.type === \"blur\" && event.target.value.length < 5) {\n            event.target.value = \"\";\n        }\n        if (event.type === 'mouseup') {\n            event.target.setSelectionRange(4, 4);\n        }\n    }\n    elems.forEach((elem) => {\n        elem.addEventListener(\"input\", mask);\n        elem.addEventListener(\"focus\", mask);\n        elem.addEventListener(\"blur\", mask);\n        elem.addEventListener(\"mouseup\", mask);\n    });\n}\nexports.maskPhone = maskPhone;\n\n\n//# sourceURL=webpack://insane-ts/./src/modules/helpers/inputMask.ts?");

/***/ }),

/***/ "./src/modules/menu.ts":
/*!*****************************!*\
  !*** ./src/modules/menu.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.menuFunc = void 0;\nconst smoothScroll_1 = __webpack_require__(/*! ./smoothScroll */ \"./src/modules/smoothScroll.ts\");\nconst menuFunc = (openStyle, closeStyle) => {\n    const popupWindow = document.querySelector(\".popup-menu\");\n    const popupMenu = document.querySelector(\".popup-dialog-menu\");\n    const linkMenu = document.querySelector(\".menu__icon\");\n    const openMenu = (e) => {\n        e.preventDefault();\n        if (e.target === linkMenu) {\n            popupWindow.style.visibility = \"visible\";\n            popupMenu.style.transform = openStyle;\n        }\n        else if (e.target.closest(\".close-menu\") ||\n            e.target === popupWindow) {\n            popupWindow.style.visibility = \"hidden\";\n            popupMenu.style.transform = closeStyle;\n        }\n        else if (e.target.matches(\".menu-link\")) {\n            popupWindow.style.visibility = \"hidden\";\n            popupMenu.style.transform = closeStyle;\n            (0, smoothScroll_1.smoothScroll)(e.target.hash);\n        }\n    };\n    linkMenu === null || linkMenu === void 0 ? void 0 : linkMenu.addEventListener(\"click\", openMenu);\n    popupWindow === null || popupWindow === void 0 ? void 0 : popupWindow.addEventListener(\"click\", openMenu);\n};\nexports.menuFunc = menuFunc;\n\n\n//# sourceURL=webpack://insane-ts/./src/modules/menu.ts?");

/***/ }),

/***/ "./src/modules/repairPopupOpen.ts":
/*!****************************************!*\
  !*** ./src/modules/repairPopupOpen.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.repairPopupOpen = void 0;\nconst repairPopupOpen = () => {\n    const windowRepair = document.querySelector('.popup-repair-types');\n    windowRepair.style.visibility = 'visible';\n    windowRepair === null || windowRepair === void 0 ? void 0 : windowRepair.addEventListener('click', (e) => {\n        if (e.target === windowRepair) {\n            windowRepair.style.visibility = 'hidden';\n        }\n    });\n};\nexports.repairPopupOpen = repairPopupOpen;\n\n\n//# sourceURL=webpack://insane-ts/./src/modules/repairPopupOpen.ts?");

/***/ }),

/***/ "./src/modules/smoothScroll.ts":
/*!*************************************!*\
  !*** ./src/modules/smoothScroll.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.smoothScroll = void 0;\nconst repairPopupOpen_1 = __webpack_require__(/*! ./repairPopupOpen */ \"./src/modules/repairPopupOpen.ts\");\nconst smoothScroll = (id) => {\n    var _a;\n    if (id) {\n        (_a = document.getElementById(id.slice(1))) === null || _a === void 0 ? void 0 : _a.scrollIntoView({\n            behavior: 'smooth',\n            block: 'start'\n        });\n    }\n    else {\n        (0, repairPopupOpen_1.repairPopupOpen)();\n    }\n};\nexports.smoothScroll = smoothScroll;\n\n\n//# sourceURL=webpack://insane-ts/./src/modules/smoothScroll.ts?");

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