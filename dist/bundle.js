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

eval("\nvar _a;\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst accordNumber_1 = __webpack_require__(/*! ./modules/accordNumber */ \"./src/modules/accordNumber.ts\");\nconst accordion_1 = __webpack_require__(/*! ./modules/accordion */ \"./src/modules/accordion.ts\");\nconst formSend_1 = __webpack_require__(/*! ./modules/formSend */ \"./src/modules/formSend.ts\");\nconst getDataTable_1 = __webpack_require__(/*! ./modules/getDataTable */ \"./src/modules/getDataTable.ts\");\nconst inputMask_1 = __webpack_require__(/*! ./modules/helpers/inputMask */ \"./src/modules/helpers/inputMask.ts\");\nconst menu_1 = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.ts\");\nconst mobileTips_1 = __webpack_require__(/*! ./modules/mobileTips */ \"./src/modules/mobileTips.ts\");\nconst openPopup_1 = __webpack_require__(/*! ./modules/openPopup */ \"./src/modules/openPopup.ts\");\nconst portfolioSlider_1 = __webpack_require__(/*! ./modules/portfolioSlider */ \"./src/modules/portfolioSlider.ts\");\nconst renderTable_1 = __webpack_require__(/*! ./modules/renderTable */ \"./src/modules/renderTable.ts\");\nconst repairSliderMob_1 = __webpack_require__(/*! ./modules/repairSliderMob */ \"./src/modules/repairSliderMob.ts\");\nconst repairSliders_1 = __webpack_require__(/*! ./modules/repairSliders */ \"./src/modules/repairSliders.ts\");\nconst sliderReviews_1 = __webpack_require__(/*! ./modules/sliderReviews */ \"./src/modules/sliderReviews.ts\");\nconst smoothScroll_1 = __webpack_require__(/*! ./modules/smoothScroll */ \"./src/modules/smoothScroll.ts\");\nconst tips_1 = __webpack_require__(/*! ./modules/tips */ \"./src/modules/tips.ts\");\nconst trasparancy_1 = __webpack_require__(/*! ./modules/trasparancy */ \"./src/modules/trasparancy.ts\");\n(0, accordNumber_1.numAccordion)();\nif (window.innerWidth > 576) {\n    (0, menu_1.menuFunc)(\"translate3d(0px, 0px, 0px)\", \"translate3d(645px, 0px, 0px)\");\n}\nelse {\n    (0, menu_1.menuFunc)(\"translate3d(0px, 0px, 0px)\", \"translate3d(0px, 750px, 0px)\");\n}\n(0, inputMask_1.maskPhone)('input[name=\"phone\"]');\n(0, tips_1.tips)();\n(0, mobileTips_1.mobileTips)();\n(0, repairSliders_1.repairSliders)();\n(0, repairSliderMob_1.repairSliderMob)(\"#nav-arrow-repair-left_base\", '#nav-arrow-repair-right_base');\n(0, portfolioSlider_1.portfolioSlider)(\".portfolio-slider-wrap\", \"#portfolio-arrow_right\", \"#portfolio-arrow_left\", \".portfolio-slider__slide-frame\", '.portfolio-slider__slide.fade-tab', '.slider_track');\n(0, trasparancy_1.transparancy)();\n(0, sliderReviews_1.sliderReviews)();\n(0, accordion_1.accordion)();\n(0, getDataTable_1.getDataTable)(\"0\").then((data) => {\n    (0, renderTable_1.renderTable)(data);\n}).catch((error) => {\n    console.error(error);\n});\ndocument.addEventListener('click', (e) => {\n    if (e.target.matches('.button.button_wide')) {\n        (0, openPopup_1.openPopup)(\".popup-consultation\", '.close-consultation');\n    }\n    else if (e.target.matches(\".link-privacy\")) {\n        (0, openPopup_1.openPopup)('.popup-privacy', '.close-privacy');\n    }\n});\ndocument.addEventListener('submit', (e) => {\n    e.preventDefault();\n    (0, formSend_1.formSend)(e, e.target);\n});\n(_a = document.querySelector('.button-footer')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', (e) => {\n    e.preventDefault();\n    (0, smoothScroll_1.smoothScroll)(e.target.hash);\n});\n\n\n//# sourceURL=webpack://insane-ts/./src/index.ts?");

/***/ }),

/***/ "./src/modules/accordNumber.ts":
/*!*************************************!*\
  !*** ./src/modules/accordNumber.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.numAccordion = void 0;\nconst numAccordion = () => {\n    const arrowAccord = document.querySelector('.header-contacts__arrow');\n    const accordWrapper = document.querySelector('.header-contacts__phone-number-accord');\n    const linkNumber = accordWrapper.querySelector('a');\n    let clicker = false;\n    const changeAccorrdion = (e) => {\n        clicker = !clicker;\n        if (clicker) {\n            arrowAccord.style.transform = 'rotate(-90deg)';\n            accordWrapper.style.top = '30px';\n            linkNumber.style.opacity = '1';\n        }\n        else {\n            arrowAccord.style.transform = 'rotate(0deg)';\n            accordWrapper.style.top = '0';\n            linkNumber.style.opacity = '0';\n        }\n    };\n    arrowAccord === null || arrowAccord === void 0 ? void 0 : arrowAccord.addEventListener('click', changeAccorrdion);\n};\nexports.numAccordion = numAccordion;\n\n\n//# sourceURL=webpack://insane-ts/./src/modules/accordNumber.ts?");

/***/ }),

/***/ "./src/modules/accordion.ts":
/*!**********************************!*\
  !*** ./src/modules/accordion.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.accordion = void 0;\nconst accordion = () => {\n    const accordionBlock = document.querySelector('.accordion_faq');\n    const titleBlocks = accordionBlock === null || accordionBlock === void 0 ? void 0 : accordionBlock.querySelectorAll('.title_block');\n    const changeAccordion = (e) => {\n        if (e.target.matches('.title_block')) {\n            titleBlocks === null || titleBlocks === void 0 ? void 0 : titleBlocks.forEach((block) => {\n                if (e.target === block) {\n                    block.classList.toggle('msg-active');\n                }\n                else {\n                    block.classList.remove('msg-active');\n                }\n            });\n        }\n    };\n    accordionBlock === null || accordionBlock === void 0 ? void 0 : accordionBlock.addEventListener('click', changeAccordion);\n};\nexports.accordion = accordion;\n\n\n//# sourceURL=webpack://insane-ts/./src/modules/accordion.ts?");

/***/ }),

/***/ "./src/modules/formSend.ts":
/*!*********************************!*\
  !*** ./src/modules/formSend.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.formSend = void 0;\nconst renderMessage_1 = __webpack_require__(/*! ./renderMessage */ \"./src/modules/renderMessage.ts\");\nconst formSend = (e, form) => {\n    const allInputs = form.querySelectorAll('input');\n    const checkbox = form.querySelector('input[type=\"checkbox\"]');\n    const formData = new FormData(form);\n    const dataBody = {};\n    formData.forEach((value, key) => {\n        dataBody[key] = value;\n    });\n    const formSendServer = (data) => {\n        return fetch('https://jsonplaceholder.typicode.com/posts', {\n            method: 'POST',\n            headers: {\n                \"Content-Type\": \"application/json;charset=utf-8\"\n            },\n            body: JSON.stringify(data)\n        }).then(res => res.json());\n    };\n    const isFromValue = (inputs) => {\n        let succes = false;\n        succes = Array.from(inputs).every((input) => {\n            if (input.value === '' && input.type !== 'checkbox') {\n                return false;\n            }\n            else {\n                return true;\n            }\n        });\n        return succes;\n    };\n    if (isFromValue(allInputs) && checkbox.checked) {\n        formSendServer(dataBody)\n            .then(() => {\n            allInputs.forEach((input) => {\n                input.value = '';\n            });\n            checkbox.checked = false;\n            (0, renderMessage_1.rennderMessage)(0);\n            if (e.target.id === 'feedback6') {\n                form.closest('.popup').style.visibility = 'hidden';\n            }\n        })\n            .catch(() => (0, renderMessage_1.rennderMessage)(2));\n    }\n    else {\n        (0, renderMessage_1.rennderMessage)(1);\n    }\n};\nexports.formSend = formSend;\n\n\n//# sourceURL=webpack://insane-ts/./src/modules/formSend.ts?");

/***/ }),

/***/ "./src/modules/galleryPortfolio.ts":
/*!*****************************************!*\
  !*** ./src/modules/galleryPortfolio.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.galleryPortfolio = void 0;\nconst galleryPortfolio = () => {\n    const popupGallery = document.querySelector('.popup-portfolio');\n    const allSlidesText = document.querySelectorAll('.popup-portfolio-text');\n    const slides = document.querySelectorAll('.popup-portfolio-slider__slide');\n    const totalSpan = popupGallery.querySelector('.slider-counter-content__total');\n    const curentSpan = popupGallery.querySelector('.slider-counter-content__current');\n    let count = 0;\n    slides.forEach((slide, index) => {\n        if (slide.classList.contains('actvie_portfolio_slider')) {\n            count = index;\n        }\n    });\n    popupGallery.style.visibility = 'visible';\n    totalSpan.textContent = `${slides.length}`;\n    const sliderStart = (imgClass, textClass) => {\n        const activeImg = document.querySelector(imgClass);\n        const textActive = document.querySelector(textClass);\n        if (count > slides.length - 1) {\n            count = 0;\n        }\n        if (count < 0) {\n            count = slides.length - 1;\n        }\n        curentSpan.textContent = `${count + 1}`;\n        activeImg === null || activeImg === void 0 ? void 0 : activeImg.classList.remove(imgClass.slice(1));\n        textActive === null || textActive === void 0 ? void 0 : textActive.classList.remove(textClass.slice(1));\n        allSlidesText[count].classList.add(textClass.slice(1));\n        slides[count].classList.add(imgClass.slice(1));\n    };\n    popupGallery === null || popupGallery === void 0 ? void 0 : popupGallery.addEventListener('click', (e) => {\n        if (e.target === popupGallery) {\n            popupGallery.style.visibility = 'hidden';\n        }\n        else if (e.target.closest('.close')) {\n            popupGallery.style.visibility = 'hidden';\n        }\n        else if (e.target.closest('#popup_portfolio_left')) {\n            count--;\n            sliderStart(\".actvie_portfolio_slider\", \".text-content_active\");\n        }\n        else if (e.target.closest('#popup_portfolio_right')) {\n            count++;\n            sliderStart(\".actvie_portfolio_slider\", \".text-content_active\");\n        }\n    });\n};\nexports.galleryPortfolio = galleryPortfolio;\n\n\n//# sourceURL=webpack://insane-ts/./src/modules/galleryPortfolio.ts?");

/***/ }),

/***/ "./src/modules/getDataTable.ts":
/*!*************************************!*\
  !*** ./src/modules/getDataTable.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getDataTable = void 0;\nconst getDataTable = (searchUrl) => {\n    let urlHost = \"http://localhost:1808/\";\n    return fetch(urlHost + searchUrl).then((res) => res.json());\n};\nexports.getDataTable = getDataTable;\n\n\n//# sourceURL=webpack://insane-ts/./src/modules/getDataTable.ts?");

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

/***/ "./src/modules/mobileTips.ts":
/*!***********************************!*\
  !*** ./src/modules/mobileTips.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.mobileTips = void 0;\nconst mobileTips = () => {\n    const sliderWrapp = document.querySelector('.formula-slider-wrap');\n    const sliderCont = document.querySelector('.formula-slider');\n    let slides = document.querySelectorAll('.formula-slider__slide');\n    let slideIndex = 1;\n    let posIndex = 0;\n    let clicker = false;\n    const appendSlide = () => {\n        if (posIndex > slides.length - 1) {\n            posIndex = 0;\n        }\n        sliderCont === null || sliderCont === void 0 ? void 0 : sliderCont.append(slides[posIndex]);\n    };\n    const prependSlide = () => {\n        if (posIndex < 0) {\n            posIndex = slides.length - 1;\n        }\n        sliderCont === null || sliderCont === void 0 ? void 0 : sliderCont.prepend(slides[posIndex]);\n    };\n    const prev = (curentSlide, classElem) => {\n        curentSlide.classList.remove(classElem);\n        clicker = false;\n    };\n    const next = (curentSlide, classElem) => {\n        curentSlide.classList.add(classElem);\n    };\n    const swithSlides = (e) => {\n        prev(slides[slideIndex], \"active-item\");\n        prev(slides[slideIndex], \"active-item-pop\");\n        if (e.target.closest('#formula-arrow_left')) {\n            slideIndex--;\n            posIndex--;\n            prependSlide();\n        }\n        else if (e.target.closest('#formula-arrow_right')) {\n            slideIndex++;\n            appendSlide();\n            posIndex++;\n        }\n        if (slideIndex > slides.length - 1) {\n            slideIndex = 0;\n        }\n        if (slideIndex < 0) {\n            slideIndex = slides.length - 1;\n        }\n        next(slides[slideIndex], \"active-item\");\n    };\n    const tipsOpen = (target) => {\n        if (clicker) {\n            target.classList.add('active-item-pop');\n        }\n        else {\n            target.classList.remove('active-item-pop');\n        }\n    };\n    sliderWrapp === null || sliderWrapp === void 0 ? void 0 : sliderWrapp.addEventListener('click', (e) => {\n        if (e.target.closest('.formula-slider__slide.active-item')) {\n            clicker = !clicker;\n            tipsOpen(e.target);\n        }\n        else {\n            swithSlides(e);\n        }\n    });\n};\nexports.mobileTips = mobileTips;\n\n\n//# sourceURL=webpack://insane-ts/./src/modules/mobileTips.ts?");

/***/ }),

/***/ "./src/modules/openPopup.ts":
/*!**********************************!*\
  !*** ./src/modules/openPopup.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.openPopup = void 0;\nconst openPopup = (popup, closeIcon) => {\n    const popupBlock = document.querySelector(popup);\n    popupBlock.style.visibility = 'visible';\n    popupBlock.addEventListener('click', (e) => {\n        if (e.target === popupBlock) {\n            popupBlock.style.visibility = 'hidden';\n        }\n        else if (e.target.closest(closeIcon)) {\n            popupBlock.style.visibility = 'hidden';\n        }\n    });\n};\nexports.openPopup = openPopup;\n\n\n//# sourceURL=webpack://insane-ts/./src/modules/openPopup.ts?");

/***/ }),

/***/ "./src/modules/portfolioSlider.ts":
/*!****************************************!*\
  !*** ./src/modules/portfolioSlider.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.portfolioSlider = void 0;\nconst galleryPortfolio_1 = __webpack_require__(/*! ./galleryPortfolio */ \"./src/modules/galleryPortfolio.ts\");\nconst portfolioSlider = (sliderClass, rightArrow, leftArrow, frameImg, slideClass, sliderTrack) => {\n    const sliderWrapper = document.querySelector(sliderClass);\n    const slidertrack = sliderWrapper.querySelector(sliderTrack);\n    const slides = document.querySelectorAll(slideClass);\n    const arrowRight = document.getElementById(rightArrow.slice(1));\n    const arrowLeft = document.getElementById(leftArrow.slice(1));\n    let stepCount = 0;\n    const prev = (entries, observer) => {\n        entries.forEach((entry) => {\n            if (!entry.isIntersecting) {\n                let step = slides[0].clientWidth;\n                stepCount += -step;\n                if (stepCount < 0) {\n                    stepCount = 0;\n                }\n                slidertrack.style.transform = `translateX(${-stepCount}px)`;\n                observer.unobserve(entry.target);\n            }\n            if (stepCount === 0) {\n                arrowRight.style.display = 'flex';\n                arrowLeft.style.display = 'none';\n            }\n        });\n    };\n    const next = (entries, observer) => {\n        entries.forEach((entry) => {\n            if (!entry.isIntersecting) {\n                let step = slides[0].clientWidth;\n                stepCount += step;\n                slidertrack.style.transform = `translateX(${-stepCount}px)`;\n                observer.unobserve(entry.target);\n            }\n            else {\n                arrowRight.style.display = 'none';\n                arrowLeft.style.display = 'flex';\n                observer.unobserve(entry.target);\n            }\n        });\n    };\n    const nextObserv = new IntersectionObserver(next, {\n        rootMargin: '50px',\n        threshold: 0\n    });\n    const prevObserv = new IntersectionObserver(prev, {\n        rootMargin: '50px',\n        threshold: 1\n    });\n    sliderWrapper === null || sliderWrapper === void 0 ? void 0 : sliderWrapper.addEventListener('click', (e) => {\n        if (e.target.closest(rightArrow)) {\n            nextObserv.observe(slides[slides.length - 1]);\n        }\n        else if (e.target.closest(leftArrow)) {\n            prevObserv.observe(slides[0]);\n        }\n        else if (e.target.matches(frameImg)) {\n            (0, galleryPortfolio_1.galleryPortfolio)();\n        }\n    });\n};\nexports.portfolioSlider = portfolioSlider;\n\n\n//# sourceURL=webpack://insane-ts/./src/modules/portfolioSlider.ts?");

/***/ }),

/***/ "./src/modules/renderMessage.ts":
/*!**************************************!*\
  !*** ./src/modules/renderMessage.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.rennderMessage = void 0;\nconst rennderMessage = (status) => {\n    const modalsAjax = document.querySelectorAll('.modal_ajax');\n    switch (status) {\n        case 2:\n            modalsAjax[status].style.visibility = 'visible';\n            break;\n        case 1:\n            modalsAjax[status].style.visibility = 'visible';\n            break;\n        case 0:\n            modalsAjax[status].style.visibility = 'visible';\n            break;\n    }\n    modalsAjax.forEach((modal) => {\n        modal.addEventListener('click', (e) => {\n            e.preventDefault();\n            if (e.target === modal) {\n                modal.style.visibility = 'hidden';\n            }\n            else if (e.target.matches('.close_ajax')) {\n                modal.style.visibility = 'hidden';\n            }\n        });\n    });\n};\nexports.rennderMessage = rennderMessage;\n\n\n//# sourceURL=webpack://insane-ts/./src/modules/renderMessage.ts?");

/***/ }),

/***/ "./src/modules/renderTable.ts":
/*!************************************!*\
  !*** ./src/modules/renderTable.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.renderTable = void 0;\nconst renderTable = (data) => {\n    const tBody = document.querySelector('#tBody');\n    tBody.innerHTML = '';\n    data.forEach((obj) => {\n        tBody === null || tBody === void 0 ? void 0 : tBody.insertAdjacentHTML('beforeend', `\r\n        <tr class=\"mobile-row showHide\">\r\n            <td class=\"repair-types-name\">${obj.name}</td>\r\n            <td class=\"repair-types-value\">${obj.units.charAt(0)}<sup>${obj.units.charAt(1)}</sup></td>\r\n            <td class=\"repair-types-value\">${obj.cost}</td>\r\n        </tr>\r\n        `);\n    });\n};\nexports.renderTable = renderTable;\n\n\n//# sourceURL=webpack://insane-ts/./src/modules/renderTable.ts?");

/***/ }),

/***/ "./src/modules/repairSliderMob.ts":
/*!****************************************!*\
  !*** ./src/modules/repairSliderMob.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.repairSliderMob = void 0;\nconst repairTable_1 = __webpack_require__(/*! ./repairTable */ \"./src/modules/repairTable.ts\");\nconst repairSliderMob = (leftArrow, rightArrow) => {\n    const navCarousel = document.querySelector('.nav-wrap-repair');\n    const listRepair = navCarousel.querySelector('.nav-list-repair');\n    const btns = navCarousel.querySelectorAll('button');\n    const linkPrice = document.querySelector('.link-list-repair.desktop-hide');\n    let count = 0;\n    let countWidth = 0;\n    const heandleNext = (entries, observer) => {\n        entries.forEach((entry) => {\n            if (!entry.isIntersecting) {\n                let currentWidth = btns[count].clientWidth;\n                countWidth += currentWidth + 10;\n                listRepair.style.transform = `translate(${-countWidth}px, 0px)`;\n                count++;\n                observer.unobserve(entry.target);\n            }\n            else {\n                listRepair.style.transform = `translate(0px, 0px)`;\n                countWidth = 0;\n                count = 0;\n                observer.unobserve(entry.target);\n            }\n        });\n    };\n    const heandlePrev = (entries, observer) => {\n        entries.forEach((entry) => {\n            if (!entry.isIntersecting) {\n                let currentWidth = btns[count].clientWidth;\n                countWidth += -currentWidth + -10;\n                listRepair.style.transform = `translate(${-countWidth}px, 0px)`;\n                count--;\n                observer.unobserve(entry.target);\n            }\n            else {\n                countWidth = 0;\n                count = 0;\n                observer.unobserve(entry.target);\n            }\n        });\n    };\n    const observerNext = new IntersectionObserver(heandleNext, {\n        rootMargin: \"50px\",\n        threshold: 0.9\n    });\n    const observerPrev = new IntersectionObserver(heandlePrev, {\n        rootMargin: \"50px\",\n        threshold: 0.9\n    });\n    navCarousel === null || navCarousel === void 0 ? void 0 : navCarousel.addEventListener('click', (e) => {\n        if (e.target.matches(leftArrow)) {\n            observerPrev.observe(btns[0]);\n        }\n        else if (e.target.matches(rightArrow)) {\n            observerNext.observe(btns[btns.length - 1]);\n        }\n    });\n    linkPrice === null || linkPrice === void 0 ? void 0 : linkPrice.addEventListener('click', () => {\n        (0, repairTable_1.repairTable)();\n    });\n};\nexports.repairSliderMob = repairSliderMob;\n\n\n//# sourceURL=webpack://insane-ts/./src/modules/repairSliderMob.ts?");

/***/ }),

/***/ "./src/modules/repairSliders.ts":
/*!**************************************!*\
  !*** ./src/modules/repairSliders.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.repairSliders = void 0;\nconst repairTable_1 = __webpack_require__(/*! ./repairTable */ \"./src/modules/repairTable.ts\");\nconst repairSliders = () => {\n    const sliderWrapper = document.querySelector('.repair-types-slider-wrap');\n    const repairTab = document.querySelector('.repair-types-tab');\n    const slidersArr = document.querySelectorAll('.types-repair');\n    let countSlideCurrent = sliderWrapper.querySelector('.slider-counter-content__current');\n    let countSlideTotal = sliderWrapper.querySelector('.slider-counter-content__total');\n    let actvieSlider = document.querySelector('.types-repair.active-slider');\n    let count = 0;\n    countSlideTotal.textContent = `${actvieSlider.querySelectorAll('div').length}`;\n    const changeListSlider = (targetBtn, classBtn, indexSlide, classSlider) => {\n        const activeBtn = repairTab.querySelector(`.${classBtn}`);\n        actvieSlider = document.querySelector('.types-repair.active-slider');\n        activeBtn === null || activeBtn === void 0 ? void 0 : activeBtn.classList.remove(classBtn);\n        targetBtn.classList.add(classBtn);\n        actvieSlider === null || actvieSlider === void 0 ? void 0 : actvieSlider.classList.remove(classSlider);\n        slidersArr[indexSlide].classList.add(classSlider);\n        count = 0;\n        countSlideCurrent.textContent = '1';\n        countSlideTotal.textContent = `${slidersArr[indexSlide].querySelectorAll('div').length}`;\n    };\n    const changeSlide = (slideClass) => {\n        actvieSlider = document.querySelector('.types-repair.active-slider');\n        const activeSlide = actvieSlider.querySelector(`.${slideClass}`);\n        const slides = actvieSlider.querySelectorAll('.repair-types-slider__slide');\n        if (count > slides.length - 1) {\n            count = 0;\n        }\n        if (count < 0) {\n            count = slides.length - 1;\n        }\n        countSlideCurrent.textContent = `${count + 1}`;\n        activeSlide === null || activeSlide === void 0 ? void 0 : activeSlide.classList.remove(slideClass);\n        slides[count].classList.add(slideClass);\n    };\n    sliderWrapper === null || sliderWrapper === void 0 ? void 0 : sliderWrapper.addEventListener('click', (e) => {\n        if (e.target.closest('#repair-types-arrow_right')) {\n            count++;\n            changeSlide(\"active-slide\");\n        }\n        else if (e.target.closest('#repair-types-arrow_left')) {\n            count--;\n            changeSlide(\"active-slide\");\n        }\n    });\n    repairTab === null || repairTab === void 0 ? void 0 : repairTab.addEventListener('click', (e) => {\n        if (e.target.localName === 'button') {\n            changeListSlider(e.target, 'active', Number(e.target.dataset['index']), \"active-slider\");\n        }\n        else if (e.target.closest('.link-list-repair.mobile-hide')) {\n            (0, repairTable_1.repairTable)();\n        }\n    });\n};\nexports.repairSliders = repairSliders;\n\n\n//# sourceURL=webpack://insane-ts/./src/modules/repairSliders.ts?");

/***/ }),

/***/ "./src/modules/repairTable.ts":
/*!************************************!*\
  !*** ./src/modules/repairTable.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.repairTable = void 0;\nconst getDataTable_1 = __webpack_require__(/*! ./getDataTable */ \"./src/modules/getDataTable.ts\");\nconst renderTable_1 = __webpack_require__(/*! ./renderTable */ \"./src/modules/renderTable.ts\");\nconst repairTable = () => {\n    const popupBlock = document.querySelector('.popup-repair-types');\n    const btns = popupBlock.querySelectorAll('.popup-repair-types-nav__item');\n    const titleTable = popupBlock.querySelector('#switch-inner');\n    popupBlock.style.visibility = 'visible';\n    const changeTable = (btnTarget) => {\n        btns.forEach((btn, index) => {\n            if (btnTarget === btn) {\n                btn.classList.add('active_o');\n                titleTable.textContent = btn.textContent;\n                (0, getDataTable_1.getDataTable)(`${index}`).then((data) => {\n                    (0, renderTable_1.renderTable)(data);\n                });\n            }\n            else {\n                btn.classList.remove('active_o');\n            }\n        });\n    };\n    popupBlock.addEventListener('click', (e) => {\n        if (e.target === popupBlock) {\n            popupBlock.style.visibility = 'hidden';\n        }\n        else if (e.target.closest('.close')) {\n            popupBlock.style.visibility = 'hidden';\n        }\n        else if (e.target.matches('.popup-repair-types-nav__item')) {\n            changeTable(e.target);\n        }\n    });\n};\nexports.repairTable = repairTable;\n\n\n//# sourceURL=webpack://insane-ts/./src/modules/repairTable.ts?");

/***/ }),

/***/ "./src/modules/sliderReviews.ts":
/*!**************************************!*\
  !*** ./src/modules/sliderReviews.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.sliderReviews = void 0;\nconst sliderReviews = () => {\n    const slider = document.querySelector(\".reviews-slider-wrap\");\n    const slides = slider.querySelectorAll(\".reviews-slider__slide\");\n    let arrDots = [];\n    let count = 0;\n    const startSlider = () => {\n        const activeSlide = slider.querySelector(\".active_reviews\");\n        const activeDot = document.querySelector(`.${\"dot_active\"}`);\n        const dots = document.querySelectorAll(`.${\"dot-reviews\"}`);\n        if (count > slides.length - 1) {\n            count = 0;\n        }\n        if (count < 0) {\n            count = slides.length - 1;\n        }\n        activeSlide === null || activeSlide === void 0 ? void 0 : activeSlide.classList.remove(\".active_reviews\".slice(1));\n        slides[count].classList.add(\".active_reviews\".slice(1));\n        activeDot === null || activeDot === void 0 ? void 0 : activeDot.classList.remove(\"dot_active\");\n        dots[count].classList.add(\"dot_active\");\n    };\n    const addDots = () => {\n        const dotBlock = document.querySelector(\".slider-dots-reviews\");\n        for (let i = 0; i <= slides.length - 1; i++) {\n            const innerDot = document.createElement('div');\n            const dot = document.createElement('div');\n            innerDot.classList.add(\"dot__inner\");\n            dot.classList.add(\"dot\", \"dot-reviews\");\n            dot.append(innerDot);\n            dotBlock === null || dotBlock === void 0 ? void 0 : dotBlock.append(dot);\n        }\n        arrDots = dotBlock.querySelectorAll(`.${\"dot-reviews\"}`);\n        arrDots.forEach((dot, index) => {\n            if (index === 0) {\n                dot.classList.add(\"dot_active\");\n            }\n        });\n    };\n    addDots();\n    slider === null || slider === void 0 ? void 0 : slider.addEventListener('click', (e) => {\n        if (e.target.closest('#reviews-arrow_left')) {\n            count--;\n            startSlider();\n        }\n        else if (e.target.closest('#reviews-arrow_right')) {\n            count++;\n            startSlider();\n        }\n    });\n};\nexports.sliderReviews = sliderReviews;\n\n\n//# sourceURL=webpack://insane-ts/./src/modules/sliderReviews.ts?");

/***/ }),

/***/ "./src/modules/smoothScroll.ts":
/*!*************************************!*\
  !*** ./src/modules/smoothScroll.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.smoothScroll = void 0;\nconst repairTable_1 = __webpack_require__(/*! ./repairTable */ \"./src/modules/repairTable.ts\");\nconst smoothScroll = (id) => {\n    var _a;\n    if (id) {\n        (_a = document.getElementById(id.slice(1))) === null || _a === void 0 ? void 0 : _a.scrollIntoView({\n            behavior: 'smooth',\n            block: 'start'\n        });\n    }\n    else {\n        (0, repairTable_1.repairTable)();\n    }\n};\nexports.smoothScroll = smoothScroll;\n\n\n//# sourceURL=webpack://insane-ts/./src/modules/smoothScroll.ts?");

/***/ }),

/***/ "./src/modules/tips.ts":
/*!*****************************!*\
  !*** ./src/modules/tips.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.tips = void 0;\nconst tips = () => {\n    const wrapperTips = document.querySelector('.tips-wrapper');\n    let stateVisible = false;\n    const isVisibleTips = (target, text, childElem) => {\n        const row = childElem.parentElement;\n        let rect = target.getBoundingClientRect();\n        if (rect.y < 0) {\n            target.style.cssText = `\r\n            transform: rotate(180deg);\r\n            padding-top: 30px;\r\n            top: 150px;\r\n            `;\n            text.style.transform = 'rotate(-180deg)';\n            row.style.zIndex = \"100\";\n        }\n        else {\n            target === null || target === void 0 ? void 0 : target.removeAttribute('style');\n            text === null || text === void 0 ? void 0 : text.removeAttribute('style');\n            row === null || row === void 0 ? void 0 : row.removeAttribute('style');\n        }\n    };\n    const openTips = (target) => {\n        const numberItem = target.querySelector('span');\n        const tip = document.querySelector(`.formula-item-popup-${numberItem === null || numberItem === void 0 ? void 0 : numberItem.textContent}`);\n        const textTip = tip.querySelector('div');\n        stateVisible = !stateVisible;\n        isVisibleTips(tip, textTip, target);\n        if (stateVisible) {\n            target === null || target === void 0 ? void 0 : target.classList.add('active-item');\n        }\n        else {\n            target === null || target === void 0 ? void 0 : target.classList.remove('active-item');\n        }\n    };\n    wrapperTips === null || wrapperTips === void 0 ? void 0 : wrapperTips.addEventListener('mouseover', (e) => {\n        if (e.target.closest('.formula-item__icon')) {\n            openTips(e.target.closest('.formula-item'));\n        }\n    });\n    wrapperTips === null || wrapperTips === void 0 ? void 0 : wrapperTips.addEventListener('mouseout', (e) => {\n        if (e.target.closest('.formula-item__icon')) {\n            openTips(e.target.closest('.formula-item'));\n        }\n    });\n};\nexports.tips = tips;\n\n\n//# sourceURL=webpack://insane-ts/./src/modules/tips.ts?");

/***/ }),

/***/ "./src/modules/trasparancy.ts":
/*!************************************!*\
  !*** ./src/modules/trasparancy.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.transparancy = void 0;\nconst transparancy = () => {\n    const sliderBlock = document.querySelector(\".transparency-slider-wrap\");\n    const popupTrans = document.querySelector(\".popup-transparency\");\n    const insideSlides = document.querySelectorAll(\".popup-transparency-slider__slide\");\n    const totalSpan = popupTrans.querySelector(\".slider-counter-content__total\");\n    const curentSpan = popupTrans.querySelector(\".slider-counter-content__current\");\n    const items = sliderBlock.querySelectorAll(\".transparency-item\");\n    let countInside = 0;\n    let count = 0;\n    totalSpan.textContent = `${insideSlides.length}`;\n    curentSpan.textContent = '1';\n    const mobileTrans = () => {\n        const activeItem = document.querySelector(\".transparency-item_active\");\n        if (count > items.length - 1) {\n            count = 0;\n        }\n        if (count < 0) {\n            count = items.length - 1;\n        }\n        activeItem === null || activeItem === void 0 ? void 0 : activeItem.classList.remove(\".transparency-item_active\".slice(1));\n        items[count].classList.add(\".transparency-item_active\".slice(1));\n    };\n    const startSlider = (activeClass) => {\n        const activeSlide = document.querySelector(activeClass);\n        if (countInside > insideSlides.length - 1) {\n            countInside = 0;\n        }\n        if (countInside < 0) {\n            countInside = insideSlides.length - 1;\n        }\n        curentSpan.textContent = `${countInside + 1}`;\n        activeSlide === null || activeSlide === void 0 ? void 0 : activeSlide.classList.remove(activeClass.slice(1));\n        insideSlides[countInside].classList.add(activeClass.slice(1));\n    };\n    const openPopup = (indexItem) => {\n        insideSlides.forEach((slide, index) => {\n            if (indexItem === index) {\n                slide.classList.add(\".active_trans_slide\".slice(1));\n            }\n            else {\n                slide.classList.remove(\".active_trans_slide\".slice(1));\n            }\n        });\n        popupTrans.style.visibility = 'visible';\n    };\n    sliderBlock === null || sliderBlock === void 0 ? void 0 : sliderBlock.addEventListener('click', (e) => {\n        if (e.target.matches('.transparency-item__img')) {\n            openPopup(Number(e.target.dataset['item']));\n        }\n        else if (e.target.closest('#transparency-arrow_left')) {\n            count--;\n            mobileTrans();\n        }\n        else if (e.target.closest('#transparency-arrow_right')) {\n            count++;\n            mobileTrans();\n        }\n    });\n    popupTrans === null || popupTrans === void 0 ? void 0 : popupTrans.addEventListener('click', (e) => {\n        if (e.target === popupTrans) {\n            popupTrans.style.visibility = 'hidden';\n            countInside = 0;\n        }\n        else if (e.target.closest('.close')) {\n            popupTrans.style.visibility = 'hidden';\n            countInside = 0;\n        }\n        else if (e.target.closest('#transparency_right')) {\n            countInside++;\n            startSlider(\".active_trans_slide\");\n        }\n        else if (e.target.closest('#transparency_left')) {\n            countInside--;\n            startSlider(\".active_trans_slide\");\n        }\n    });\n};\nexports.transparancy = transparancy;\n\n\n//# sourceURL=webpack://insane-ts/./src/modules/trasparancy.ts?");

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