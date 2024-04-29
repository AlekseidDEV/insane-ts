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

/***/ "./src/autorizedPage.ts":
/*!******************************!*\
  !*** ./src/autorizedPage.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst autorized_1 = __webpack_require__(/*! ./modules/admin/autorized */ \"./src/modules/admin/autorized.ts\");\n(0, autorized_1.autorized)();\n\n\n//# sourceURL=webpack://insane-ts/./src/autorizedPage.ts?");

/***/ }),

/***/ "./src/modules/admin/autorized.ts":
/*!****************************************!*\
  !*** ./src/modules/admin/autorized.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.autorized = void 0;\nconst autorized = () => {\n    const form = document.querySelector(\"form\");\n    const nameInput = form.querySelector(\"#name\");\n    const passInput = form.querySelector(\"#pass\");\n    const spanErrorName = nameInput.nextElementSibling;\n    const spanErrorPass = passInput.nextElementSibling;\n    const passwordValid = (inputPass, dataPass) => {\n        const date = new Date();\n        const dateLiveCoockie = new Date(date.setTime(date.getTime() + 1 * 24 * 60 * 60 * 1000));\n        const expires = dateLiveCoockie.toUTCString();\n        if (inputPass !== dataPass) {\n            spanErrorPass.style.display = \"flex\";\n        }\n        else {\n            spanErrorPass.style.display = \"none\";\n            document.cookie = `userToken=${\"Authorized\"}; expires=${expires}; path=/;`;\n            window.location.pathname = \"admin/table.html\";\n        }\n    };\n    const getDataUser = (login) => {\n        return fetch(`http://localhost:1808/user?login=${login}`)\n            .then((res) => res.json())\n            .catch((error) => {\n            console.error(`ошибка ${error}`);\n        });\n    };\n    form === null || form === void 0 ? void 0 : form.addEventListener(\"submit\", (e) => {\n        e.preventDefault();\n        if (nameInput.value !== \"\" && passInput.value !== \"\") {\n            getDataUser(nameInput.value).then((data) => {\n                if (data.length === 0) {\n                    spanErrorName.style.display = \"flex\";\n                }\n                else {\n                    spanErrorName.style.display = \"none\";\n                    passwordValid(passInput.value, data[0].pass);\n                }\n            });\n        }\n        else {\n            alert(\"заполните поля\");\n        }\n    });\n};\nexports.autorized = autorized;\n\n\n//# sourceURL=webpack://insane-ts/./src/modules/admin/autorized.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/autorizedPage.ts");
/******/ 	
/******/ })()
;