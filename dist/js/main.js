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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/validate */ \"./modules/validate.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('20 december 2021');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_validate__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n    const menuBtn = document.querySelector('.menu');\r\n    const menu = document.querySelector('menu');\r\n    const closeBtn = menu.querySelector('.close-btn');\r\n    const menuItems = menu.querySelectorAll('ul>li>a');\r\n\r\n    console.dir(menuItems);\r\n\r\n    const handleMenu = () => {\r\n        menu.classList.toggle('active-menu');\r\n    }\r\n\r\n    menuBtn.addEventListener('click', handleMenu);\r\n\r\n\r\n    menu.addEventListener('click', (e) => {\r\n        if (e.target.classList.contains('close-btn') || e.target.nodeName == 'A') {\r\n            handleMenu();\r\n        }\r\n\r\n        console.log(e.target.classList.contains('active-menu'));\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n    const buttons = document.querySelectorAll('.popup-btn');\r\n    const modal = document.querySelector('.popup');\r\n    const modalContent = document.querySelector('.popup-content');\r\n    const popupBtnClose = modal.querySelector('.popup-close');\r\n\r\n    let idAnimation;\r\n    let coord = 0;\r\n    const maxCoord = 200;\r\n\r\n    const windowInnerWidth = window.innerWidth\r\n\r\n    modalContent.style.transform = `translateY(0)px)`;\r\n\r\n    // function animate() {\r\n    //     coord += 5;\r\n\r\n    //     idAnimation = requestAnimationFrame(animate);\r\n\r\n    //     if (coord < maxCoord && windowInnerWidth > 768) {\r\n    //         modalContent.style.transform = `translateY(${coord}px)`;\r\n    //     } else {\r\n    //         cancelAnimationFrame(idAnimation);\r\n    //     }\r\n    // };\r\n\r\n    buttons.forEach(btn => {\r\n        btn.addEventListener('click', () => {\r\n            modal.style.display = 'block';\r\n        })\r\n    });\r\n\r\n    //закрытие модального окна по клику вне попапа\r\n\r\n    modal.addEventListener('click', (e) => {\r\n        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\r\n            modal.style.display = 'none';\r\n        }\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\n    const tabPanel = document.querySelector('.service-header');\n    const tabContent = document.querySelectorAll('.service-tab');\n    const tabs = document.querySelectorAll('.service-header-tab');\n\n    tabPanel.addEventListener('click', (e) => {\n        if (e.target.closest('.service-header-tab')) {\n            const tabBtn = e.target.closest('.service-header-tab');\n\n            tabs.forEach((tab, index) => {\n                if (tab == tabBtn) {\n                    tab.classList.add('active');\n                    tabContent[index].classList.remove('d-none');\n                } else {\n                    tab.classList.remove('active');\n                    tabContent[index].classList.add('d-none');\n                }\n            })\n        }\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n    const timerHours = document.getElementById('timer-hours');\r\n    const timerMinutes = document.getElementById('timer-minutes');\r\n    const timerSeconds = document.getElementById('timer-seconds');\r\n\r\n    const getTimeRemaining = () => {\r\n        let dateStop = new Date(deadline).getTime();\r\n        let dateNow = new Date().getTime();\r\n        let timeRemaining = (dateStop - dateNow) / 1000;\r\n        // let days = Math.floor(timeRemaining / 60 / 60 / 24);\r\n        // let hours = Math.floor(timeRemaining / 60 / 60);\r\n        let hours = Math.floor((timeRemaining / 60 / 60) % 24);\r\n        let minutes = Math.floor((timeRemaining / 60) % 60);\r\n        let seconds = Math.floor(timeRemaining % 60);\r\n\r\n        return {timeRemaining, hours, minutes, seconds}\r\n    }\r\n\r\n    const updateClock = () => {\r\n        let getTime = getTimeRemaining();\r\n\r\n        timerHours.textContent = getTime.hours < 10 ? '0'+ getTime.hours : getTime.hours;\r\n        timerMinutes.textContent = getTime.minutes < 10 ? '0'+ getTime.minutes : getTime.minutes;\r\n        timerSeconds.textContent = getTime.seconds < 10 ? '0'+ getTime.seconds : getTime.seconds;\r\n        console.log('секунда');\r\n    }\r\n\r\n    let interval = setInterval(function() {\r\n        let getTime = getTimeRemaining();\r\n        updateClock();\r\n\r\n        if (getTime.timeRemaining <= 0) {\r\n            clearInterval(interval);\r\n\r\n            timerHours.innerHTML = '00';\r\n            timerMinutes.innerHTML = '00';\r\n            timerSeconds.innerHTML = '00';\r\n        }\r\n    }, 1000);\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/validate.js":
/*!*****************************!*\
  !*** ./modules/validate.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validate = () => {\r\n    const inputs = document.querySelectorAll('.validate-number');\r\n    const inputText = document.querySelectorAll('input[placeholder=\"Ваше сообщение\"]');\r\n    const inputEmail = document.querySelectorAll('input[type=email]');\r\n    const inputTel = document.querySelectorAll('input[type=tel]');\r\n\r\n    inputs.forEach(input => {\r\n        input.addEventListener('input', () => {\r\n            input.value = input.value.replace(/\\D+/, '');\r\n        })\r\n    });\r\n\r\n    inputText.forEach(input => {\r\n        input.addEventListener('input', () => {\r\n            input.value = input.value.replace(/[^А-Яа-я -]+/g, '');\r\n        })\r\n    });\r\n\r\n    inputEmail.forEach(input => {\r\n        input.addEventListener('input', () => {\r\n            input.value = input.value.replace(/[^A-Z0-9-_~@.]+/gi, '');\r\n            // input.value = input.value.replace(/[A-Z-_~]+\\@[A-Z-_~]+\\.[A-Z]+/gi, ''); //валидация email\r\n        })\r\n    });\r\n\r\n    inputTel.forEach(input => {\r\n        input.addEventListener('input', () => {\r\n            input.value = input.value.replace(/[^0-9()-]+/g, '');\r\n        })\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack:///./modules/validate.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;