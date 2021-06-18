/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uwwcCustomers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uwwcCustomers */ \"./src/uwwcCustomers.js\");\n/* harmony import */ var _uwwcCustomers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_uwwcCustomers__WEBPACK_IMPORTED_MODULE_0__);\n\n\nlet prefabArray = [\n  \"26X42\",\n  \"26X48\",\n  \"26X54\",\n  \"26X58\",\n  \"26X66\",\n  \"26X70\",\n  \"26X78\",\n  \"26X82\",\n  \"38X54\",\n  \"38X58\",\n  \"38X66\",\n  \"38X70\",\n  \"38X78\",\n  \"38X82\",\n];\nlet prefabObjects = [];\n//table = steel table\nlet table = document.getElementById(\"table\");\n//table2 = clear table\nlet table2 = document.getElementById(\"table2\");\n\nfunction Prefabs(\n  size,\n  style,\n  inv,\n  open,\n  confirmed,\n  allocated,\n  available,\n  minimum,\n  maximum\n) {\n  this.size = size;\n  this.style = style;\n  this.inv = inv;\n  this.open = open;\n  this.confirmed = confirmed;\n  this.allocated = allocated;\n  this.available = available;\n  this.minimum = minimum;\n  this.maximum = maximum;\n}\n\nfunction generateProducts() {\n  for (let i = 0; i < prefabArray.length; i++) {\n    let newPrefab = new Prefabs(prefabArray[i], \"Steel\", 0, 0, 0, 0, 0, 0, 0);\n    prefabObjects.push(newPrefab);\n  }\n\n  for (let i = 0; i < prefabArray.length; i++) {\n    let newPrefab = new Prefabs(prefabArray[i], \"Clear\", 0, 0, 0, 0, 0, 0, 0);\n    prefabObjects.push(newPrefab);\n  }\n}\n\nfunction displayTable() {\n  for (let i = 0; i < prefabObjects.length; i++) {\n    let tableRow = document.createElement(\"tr\");\n\n    let name = document.createElement(\"td\");\n    name.classList.add(\"item-qty\");\n    let size = document.createElement(\"strong\");\n    let style = document.createElement(\"span\");\n    let onHand = document.createElement(\"td\");\n    let open = document.createElement(\"td\");\n    let confirmed = document.createElement(\"td\");\n    let allocated = document.createElement(\"td\");\n    let available = document.createElement(\"td\");\n    let minimum = document.createElement(\"td\");\n    let maximum = document.createElement(\"td\");\n    size.textContent = prefabObjects[i].size;\n    size.classList.add(\"productName\");\n    style.textContent = prefabObjects[i].style;\n    style.classList.add(\"text-offset\");\n    onHand.textContent = prefabObjects[i].inv;\n    onHand.classList.add(\"item-qty\");\n    open.textContent = prefabObjects[i].open;\n    open.classList.add(\"item-qty\");\n    confirmed.textContent = prefabObjects[i].confirmed;\n    confirmed.classList.add(\"item-qty\");\n    allocated.textContent = prefabObjects[i].allocated;\n    allocated.classList.add(\"item-qty\");\n    available.textContent = prefabObjects[i].available;\n    available.classList.add(\"item-qty\");\n    minimum.textContent = prefabObjects[i].minimum;\n    minimum.classList.add(\"item-qty\");\n    maximum.textContent = prefabObjects[i].maximum;\n    maximum.classList.add(\"item-qty\");\n    if (prefabObjects[i].size != \"\" && prefabObjects[i].style === \"Steel\") {\n      table.appendChild(tableRow);\n      name.appendChild(size);\n      name.appendChild(style);\n      tableRow.append(\n        name,\n        onHand,\n        open,\n        confirmed,\n        allocated,\n        available,\n        minimum,\n        maximum\n      );\n    } else if (\n      prefabObjects[i].size != \"\" &&\n      prefabObjects[i].style === \"Clear\"\n    ) {\n      table2.appendChild(tableRow);\n      name.appendChild(size);\n      name.appendChild(style);\n      tableRow.append(\n        name,\n        onHand,\n        open,\n        confirmed,\n        allocated,\n        available,\n        minimum,\n        maximum\n      );\n    }\n  }\n}\n\nfunction updateOnHand(size, style, onHand) {\n  for (let i = 0; i < prefabObjects.length; i++) {\n    if (prefabObjects[i].size === size && prefabObjects[i].style === style) {\n      prefabObjects[i].inv = onHand;\n    }\n  }\n  clearTable();\n  displayTable();\n}\n\nfunction clearTable() {\n  let rowCount = table.rows.length;\n  for (let i = 1; i < rowCount; i++) {\n    table.deleteRow(1);\n    table2.deleteRow(1);\n  }\n}\n\ngenerateProducts();\n//console.log(prefabObjects);\ndisplayTable();\n\nupdateOnHand(\"38X54\", \"Steel\", 50);\n\nfunction hide() {\n  let title = document.getElementById(\"title\");\n  table.style.display = \"none\";\n  table2.style.display = \"none\";\n  title.style.display = \"none\";\n}\n\nwindow.hide = hide;\n\n\n//# sourceURL=webpack://inventoryprefabs/./src/index.js?");

/***/ }),

/***/ "./src/uwwcCustomers.js":
/*!******************************!*\
  !*** ./src/uwwcCustomers.js ***!
  \******************************/
/***/ (() => {

eval("//function test(){\n//    console.log('hello')\n//}\n//\n//export default test;\n\n\n\n\n//# sourceURL=webpack://inventoryprefabs/./src/uwwcCustomers.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;