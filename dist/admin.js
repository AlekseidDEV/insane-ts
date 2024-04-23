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

/***/ "./admin/src/modules/checkAutho.ts":
/*!*****************************************!*\
  !*** ./admin/src/modules/checkAutho.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.checkAutho = void 0;\nconst checkAutho = () => {\n    const coockies = document.cookie;\n    const examAuthorized = (status) => {\n        if (status !== \"Authorized\") {\n            window.location.pathname = \"/admin/index.html\";\n        }\n    };\n    coockies.split(\";\").forEach((str) => {\n        if (str.includes(\"userToken\")) {\n            examAuthorized(str.split(\"=\")[1].trim());\n        }\n    });\n};\nexports.checkAutho = checkAutho;\n\n\n//# sourceURL=webpack://insane-ts/./admin/src/modules/checkAutho.ts?");

/***/ }),

/***/ "./admin/src/modules/editService.ts":
/*!******************************************!*\
  !*** ./admin/src/modules/editService.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.editService = void 0;\nconst openModal_1 = __webpack_require__(/*! ./openModal */ \"./admin/src/modules/openModal.ts\");\nconst renderTable_1 = __webpack_require__(/*! ./renderTable */ \"./admin/src/modules/renderTable.ts\");\nconst editService = () => {\n    const tBody = document.querySelector(\"#tbody\");\n    const select = document.querySelector(\"#typeItem\");\n    const form = document.querySelector(\"#table-form\");\n    const typeInput = form.querySelector('input[name=\"type\"]');\n    const nameInput = form.querySelector('input[name=\"name\"]');\n    const unitsInput = form.querySelector('input[name=\"units\"]');\n    const costInput = form.querySelector('input[name=\"cost\"]');\n    const overlayModal = document.querySelector(\".modal__overlay\");\n    tBody === null || tBody === void 0 ? void 0 : tBody.addEventListener(\"click\", (e) => {\n        var _a;\n        if (e.target.closest(\".button.action-change\")) {\n            const tr = e.target.closest(\"tr\");\n            const id = tr.dataset[\"key_id\"];\n            (0, openModal_1.openModal)();\n            form === null || form === void 0 ? void 0 : form.setAttribute(\"data-method\", `${id}`);\n            (_a = window.servicePrise) === null || _a === void 0 ? void 0 : _a.getService(id).then((service) => {\n                typeInput.value = service.type;\n                nameInput.value = service.name;\n                unitsInput.value = service.units;\n                costInput.value = service.cost;\n            });\n        }\n    });\n    form === null || form === void 0 ? void 0 : form.addEventListener(\"submit\", (e) => {\n        var _a;\n        e.preventDefault();\n        if (form.dataset.method) {\n            const id = form.dataset.method;\n            const service = {\n                type: typeInput.value,\n                name: nameInput.value,\n                units: unitsInput.value,\n                cost: costInput.value,\n            };\n            (_a = window.servicePrise) === null || _a === void 0 ? void 0 : _a.editService(id, service).then(() => {\n                var _a;\n                (_a = window.servicePrise) === null || _a === void 0 ? void 0 : _a.getServices().then((data) => {\n                    (0, renderTable_1.renderTable)(data);\n                    form.reset();\n                    form.removeAttribute(\"data-method\");\n                    select.value = \"0\";\n                    overlayModal.style.display = \"none\";\n                });\n            });\n        }\n    });\n};\nexports.editService = editService;\n\n\n//# sourceURL=webpack://insane-ts/./admin/src/modules/editService.ts?");

/***/ }),

/***/ "./admin/src/modules/filterTable.ts":
/*!******************************************!*\
  !*** ./admin/src/modules/filterTable.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.filterTable = void 0;\nconst renderTable_1 = __webpack_require__(/*! ./renderTable */ \"./admin/src/modules/renderTable.ts\");\nconst filterTable = () => {\n    const select = document.querySelector(\"#typeItem\");\n    const filter = (e) => {\n        var _a, _b;\n        if (e.target.value === \"0\") {\n            (_a = window.servicePrise) === null || _a === void 0 ? void 0 : _a.getServices().then((data) => {\n                (0, renderTable_1.renderTable)(data);\n            });\n        }\n        else {\n            (_b = window.servicePrise) === null || _b === void 0 ? void 0 : _b.filterService(\"type\", e.target.value).then((data) => {\n                (0, renderTable_1.renderTable)(data);\n            });\n        }\n    };\n    select === null || select === void 0 ? void 0 : select.addEventListener(\"change\", filter);\n};\nexports.filterTable = filterTable;\n\n\n//# sourceURL=webpack://insane-ts/./admin/src/modules/filterTable.ts?");

/***/ }),

/***/ "./admin/src/modules/openModal.ts":
/*!****************************************!*\
  !*** ./admin/src/modules/openModal.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.openModal = void 0;\nconst openModal = () => {\n    const overlayModal = document.querySelector(\".modal__overlay\");\n    const form = document.querySelector(\"#table-form\");\n    overlayModal.style.display = \"flex\";\n    overlayModal === null || overlayModal === void 0 ? void 0 : overlayModal.addEventListener(\"click\", (e) => {\n        if (e.target === overlayModal) {\n            overlayModal.style.display = \"none\";\n            form === null || form === void 0 ? void 0 : form.removeAttribute(\"data-method\");\n        }\n        else if (e.target.closest(\".button__close\")) {\n            overlayModal.style.display = \"none\";\n            form === null || form === void 0 ? void 0 : form.removeAttribute(\"data-method\");\n        }\n    });\n};\nexports.openModal = openModal;\n\n\n//# sourceURL=webpack://insane-ts/./admin/src/modules/openModal.ts?");

/***/ }),

/***/ "./admin/src/modules/removeService.ts":
/*!********************************************!*\
  !*** ./admin/src/modules/removeService.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.removeService = void 0;\nconst renderTable_1 = __webpack_require__(/*! ./renderTable */ \"./admin/src/modules/renderTable.ts\");\nconst removeService = () => {\n    const tBody = document.querySelector(\"#tbody\");\n    const select = document.querySelector(\"#typeItem\");\n    tBody === null || tBody === void 0 ? void 0 : tBody.addEventListener(\"click\", (e) => {\n        var _a;\n        if (e.target.closest(\".button.action-remove\")) {\n            const tr = e.target.closest(\"tr\");\n            const id = tr.dataset[\"key_id\"];\n            (_a = window.servicePrise) === null || _a === void 0 ? void 0 : _a.removeService(id).then(() => {\n                var _a;\n                (_a = window.servicePrise) === null || _a === void 0 ? void 0 : _a.getServices().then((data) => {\n                    (0, renderTable_1.renderTable)(data);\n                    select.value = \"0\";\n                });\n            });\n        }\n    });\n};\nexports.removeService = removeService;\n\n\n//# sourceURL=webpack://insane-ts/./admin/src/modules/removeService.ts?");

/***/ }),

/***/ "./admin/src/modules/renderSelect.ts":
/*!*******************************************!*\
  !*** ./admin/src/modules/renderSelect.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.renderSelect = void 0;\nconst renderSelect = (data) => {\n    const select = document.querySelector(\"#typeItem\");\n    const uniqueKey = new Set();\n    let newOptionsVal = [];\n    select.innerHTML = \"\";\n    data.forEach((obj) => {\n        uniqueKey.add(obj.type);\n    });\n    newOptionsVal = Array.from(uniqueKey);\n    const generateOptions = (arr) => {\n        for (let i = 0; i <= arr.length; i++) {\n            const newOption = document.createElement(\"option\");\n            if (i !== arr.length) {\n                newOption.setAttribute(\"value\", `${arr[i]}`);\n                newOption.textContent = arr[i];\n            }\n            else {\n                newOption.setAttribute(\"selected\", \"selected\");\n                newOption.setAttribute(\"value\", \"0\");\n                newOption.textContent = \"Все услуги\";\n            }\n            select === null || select === void 0 ? void 0 : select.prepend(newOption);\n        }\n    };\n    generateOptions(newOptionsVal);\n};\nexports.renderSelect = renderSelect;\n\n\n//# sourceURL=webpack://insane-ts/./admin/src/modules/renderSelect.ts?");

/***/ }),

/***/ "./admin/src/modules/renderTable.ts":
/*!******************************************!*\
  !*** ./admin/src/modules/renderTable.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.renderTable = void 0;\nconst renderTable = (data) => {\n    const tBody = document.querySelector(\"#tBody\");\n    tBody.innerHTML = \"\";\n    data.forEach((obj) => {\n        tBody === null || tBody === void 0 ? void 0 : tBody.insertAdjacentHTML(\"beforeend\", `\r\n     <tr class=\"table__row\" data-key_id=\"${obj.id}\">\r\n        <td class=\"table__id table__cell\">${obj.id}</td>\r\n        <td class=\"table-type table__cell\">${obj.type}</td>\r\n        <td class=\"table-name table__cell\">\r\n            ${obj.name}\r\n        </td>\r\n        <td class=\"table-units table__cell\">\r\n        ${obj.units}\r\n        </td>\r\n        <td class=\"table-cost table__cell\">\r\n        ${obj.cost}\r\n        </td>\r\n        <td>\r\n            <div class=\"table__actions table__cell\">\r\n                <button class=\"button action-change\"><span class=\"svg_ui\"><svg class=\"action-icon_change\"><use xlink:href=\"./img/sprite.svg#change\"></use></svg></span><span>Изменить</span>\r\n                </button>\r\n                <button class=\"button action-remove\"><span class=\"svg_ui\"><svg class=\"action-icon_remove\"><use xlink:href=\"./img/sprite.svg#remove\"></use></svg></span><span>Удалить</span>\r\n                </button>\r\n            </div>\r\n        </td>\r\n    </tr> \r\n        `);\n    });\n};\nexports.renderTable = renderTable;\n\n\n//# sourceURL=webpack://insane-ts/./admin/src/modules/renderTable.ts?");

/***/ }),

/***/ "./admin/src/modules/serviceAdd.ts":
/*!*****************************************!*\
  !*** ./admin/src/modules/serviceAdd.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.serviceAdd = void 0;\nconst renderTable_1 = __webpack_require__(/*! ./renderTable */ \"./admin/src/modules/renderTable.ts\");\nconst openModal_1 = __webpack_require__(/*! ./openModal */ \"./admin/src/modules/openModal.ts\");\nconst renderSelect_1 = __webpack_require__(/*! ./renderSelect */ \"./admin/src/modules/renderSelect.ts\");\nconst serviceAdd = () => {\n    const addBtn = document.querySelector(\".btn-addItem\");\n    const form = document.querySelector(\"#table-form\");\n    const inputs = form.querySelectorAll(\"input\");\n    const select = document.querySelector(\"#typeItem\");\n    const overlayModal = document.querySelector(\".modal__overlay\");\n    const validInput = (inputs) => {\n        let succes = false;\n        succes = Array.from(inputs).every((input) => {\n            if (input.value === \"\") {\n                return false;\n            }\n            else {\n                return true;\n            }\n        });\n        return succes;\n    };\n    const addServiceServer = () => {\n        var _a;\n        const formData = new FormData(form);\n        const dataBody = {};\n        formData.forEach((value, key) => {\n            dataBody[key] = value;\n        });\n        console.log(dataBody);\n        (_a = window.servicePrise) === null || _a === void 0 ? void 0 : _a.addService(dataBody).then(() => {\n            var _a;\n            (_a = window.servicePrise) === null || _a === void 0 ? void 0 : _a.getServices().then((data) => {\n                (0, renderTable_1.renderTable)(data);\n                (0, renderSelect_1.renderSelect)(data);\n                form === null || form === void 0 ? void 0 : form.reset();\n                select.value = \"0\";\n                overlayModal.style.display = \"none\";\n            });\n        });\n    };\n    addBtn === null || addBtn === void 0 ? void 0 : addBtn.addEventListener(\"click\", openModal_1.openModal);\n    form === null || form === void 0 ? void 0 : form.addEventListener(\"submit\", (e) => {\n        e.preventDefault();\n        if (!(form === null || form === void 0 ? void 0 : form.dataset.method) && validInput(inputs)) {\n            addServiceServer();\n        }\n        else if (!(form === null || form === void 0 ? void 0 : form.dataset.method)) {\n            alert(\"заполните поля\");\n        }\n    });\n};\nexports.serviceAdd = serviceAdd;\n\n\n//# sourceURL=webpack://insane-ts/./admin/src/modules/serviceAdd.ts?");

/***/ }),

/***/ "./admin/src/modules/serviceData.ts":
/*!******************************************!*\
  !*** ./admin/src/modules/serviceData.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ServicePrice = void 0;\nclass ServicePrice {\n    getRequest(url) {\n        return fetch(url)\n            .then((res) => res.json())\n            .catch((error) => {\n            console.error(`ошибка ${error}`);\n        });\n    }\n    PostRequest(url, obj) {\n        return fetch(url, obj)\n            .then((res) => res.json())\n            .catch((error) => {\n            console.error(`ошибка ${error}`);\n        });\n    }\n    getServices() {\n        return this.getRequest(\"http://localhost:1808/service\");\n    }\n    filterService(key, value) {\n        return this.getRequest(`http://localhost:1808/service?${key}=${value}`);\n    }\n    sortService(options) {\n        if (options.count === \"0\") {\n            return this.getRequest(`http://localhost:1808/service?_sort=${options.viewTh}&_order=${options.mod}`);\n        }\n        else {\n            return this.getRequest(`http://localhost:1808/service?${options.key}=${options.value}&_sort=${options.viewTh}&_order=${options.mod}`);\n        }\n    }\n    addService(service) {\n        return this.PostRequest(`http://localhost:1808/service`, {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\",\n            },\n            body: JSON.stringify(service),\n        });\n    }\n    removeService(id) {\n        return this.PostRequest(`http://localhost:1808/service/${id}`, {\n            method: \"DELETE\",\n        });\n    }\n    getService(id) {\n        return this.getRequest(`http://localhost:1808/service/${id}`);\n    }\n    editService(id, service) {\n        return this.PostRequest(`http://localhost:1808/service/${id}`, {\n            method: \"PUT\",\n            headers: {\n                \"Content-Type\": \"application/json\",\n            },\n            body: JSON.stringify(service),\n        });\n    }\n}\nexports.ServicePrice = ServicePrice;\n\n\n//# sourceURL=webpack://insane-ts/./admin/src/modules/serviceData.ts?");

/***/ }),

/***/ "./admin/src/modules/sortTable.ts":
/*!****************************************!*\
  !*** ./admin/src/modules/sortTable.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.sortTable = void 0;\nconst renderTable_1 = __webpack_require__(/*! ./renderTable */ \"./admin/src/modules/renderTable.ts\");\nconst sortTable = () => {\n    const tHead = document.querySelector(\".table thead\");\n    const allTh = tHead === null || tHead === void 0 ? void 0 : tHead.querySelectorAll(\"tr > th\");\n    const select = document.querySelector(\"#typeItem\");\n    let isSort = false;\n    const sort = (view) => {\n        var _a, _b;\n        if (select.value === \"0\") {\n            (_a = window.servicePrise) === null || _a === void 0 ? void 0 : _a.sortService({\n                viewTh: view,\n                mod: isSort ? \"asc\" : \"desc\",\n                count: \"0\",\n            }).then((data) => {\n                (0, renderTable_1.renderTable)(data);\n            });\n            isSort = !isSort;\n        }\n        else {\n            (_b = window.servicePrise) === null || _b === void 0 ? void 0 : _b.sortService({\n                key: \"type\",\n                value: select.value,\n                viewTh: view,\n                mod: isSort ? \"asc\" : \"desc\",\n                count: \"1\",\n            }).then((data) => {\n                (0, renderTable_1.renderTable)(data);\n            });\n            isSort = !isSort;\n        }\n    };\n    tHead === null || tHead === void 0 ? void 0 : tHead.addEventListener(\"click\", (e) => {\n        if (e.target.closest(\".table-th\")) {\n            allTh === null || allTh === void 0 ? void 0 : allTh.forEach((th, index) => {\n                if (e.target === th && index !== allTh.length - 1) {\n                    th.classList.add(\"active_th_sort\");\n                    sort(th.id);\n                }\n                else {\n                    th.classList.remove(\"active_th_sort\");\n                }\n            });\n        }\n    });\n};\nexports.sortTable = sortTable;\n\n\n//# sourceURL=webpack://insane-ts/./admin/src/modules/sortTable.ts?");

/***/ }),

/***/ "./admin/src/tablePage.ts":
/*!********************************!*\
  !*** ./admin/src/tablePage.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst renderSelect_1 = __webpack_require__(/*! ./modules/renderSelect */ \"./admin/src/modules/renderSelect.ts\");\nconst renderTable_1 = __webpack_require__(/*! ./modules/renderTable */ \"./admin/src/modules/renderTable.ts\");\nconst serviceData_1 = __webpack_require__(/*! ./modules/serviceData */ \"./admin/src/modules/serviceData.ts\");\nconst filterTable_1 = __webpack_require__(/*! ./modules/filterTable */ \"./admin/src/modules/filterTable.ts\");\nconst sortTable_1 = __webpack_require__(/*! ./modules/sortTable */ \"./admin/src/modules/sortTable.ts\");\nconst serviceAdd_1 = __webpack_require__(/*! ./modules/serviceAdd */ \"./admin/src/modules/serviceAdd.ts\");\nconst removeService_1 = __webpack_require__(/*! ./modules/removeService */ \"./admin/src/modules/removeService.ts\");\nconst editService_1 = __webpack_require__(/*! ./modules/editService */ \"./admin/src/modules/editService.ts\");\nconst checkAutho_1 = __webpack_require__(/*! ./modules/checkAutho */ \"./admin/src/modules/checkAutho.ts\");\nwindow.servicePrise = new serviceData_1.ServicePrice();\n(0, checkAutho_1.checkAutho)();\nwindow.servicePrise.getServices().then((data) => {\n    (0, renderSelect_1.renderSelect)(data);\n    (0, renderTable_1.renderTable)(data);\n});\n(0, filterTable_1.filterTable)();\n(0, sortTable_1.sortTable)();\n(0, serviceAdd_1.serviceAdd)();\n(0, removeService_1.removeService)();\n(0, editService_1.editService)();\n\n\n//# sourceURL=webpack://insane-ts/./admin/src/tablePage.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./admin/src/tablePage.ts");
/******/ 	
/******/ })()
;