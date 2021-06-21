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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uwwcOpenCustomers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uwwcOpenCustomers */ \"./src/uwwcOpenCustomers.js\");\n\n\n\n\n\nlet prefabArray = [\n  \"26 x 42\",\n  \"26 x 48\",\n  \"26 x 54\",\n  \"26 x 58\",\n  \"26 x 66\",\n  \"26 x 70\",\n  \"26 x 78\",\n  \"26 x 82\",\n  \"38 x 54\",\n  \"38 x 58\",\n  \"38 x 66\",\n  \"38 x 70\",\n  \"38 x 78\",\n  \"38 x 82\",\n];\nlet prefabObjects = [];\n\n\n//table = steel table\nlet table = document.getElementById(\"UWWC Steel Inventory\");\n//table2 = clear table\nlet table2 = document.getElementById(\"UWWC Clear Inventory\");\n\n\n\nfunction Prefabs(\n  size,\n  style,\n  inv,\n  open,\n  confirmed,\n  allocated,\n  available,\n  minimum,\n  maximum\n) {\n  this.size = size;\n  this.style = style;\n  this.inv = inv;\n  this.open = open;\n  this.confirmed = confirmed;\n  this.allocated = allocated;\n  this.available = available;\n  this.minimum = minimum;\n  this.maximum = maximum;\n}\n\nfunction generateProducts() {\n  for (let i = 0; i < prefabArray.length; i++) {\n    let newPrefab = new Prefabs(prefabArray[i], \"Steel\", 0, 0, 0, 0, 0, 0, 0);\n    prefabObjects.push(newPrefab);\n  }\n\n  for (let i = 0; i < prefabArray.length; i++) {\n    let newPrefab = new Prefabs(prefabArray[i], \"Clear\", 0, 0, 0, 0, 0, 0, 0);\n    prefabObjects.push(newPrefab);\n  }\n}\n\nfunction displayTable() {\n  for (let i = 0; i < prefabObjects.length; i++) {\n    let tableRow = document.createElement(\"tr\");\n\n    let name = document.createElement(\"td\");\n    name.classList.add(\"item-qty\");\n    let size = document.createElement(\"strong\");\n    let style = document.createElement(\"span\");\n    let onHand = document.createElement(\"td\");\n    let open = document.createElement(\"td\");\n    let confirmed = document.createElement(\"td\");\n    let allocated = document.createElement(\"td\");\n    let available = document.createElement(\"td\");\n    let minimum = document.createElement(\"td\");\n    let maximum = document.createElement(\"td\");\n    size.textContent = prefabObjects[i].size;\n    size.classList.add(\"productName\");\n    style.textContent = prefabObjects[i].style;\n    style.classList.add(\"text-offset\");\n    onHand.textContent = prefabObjects[i].inv;\n    onHand.classList.add(\"item-qty\");\n    open.textContent = prefabObjects[i].open;\n    open.classList.add(\"item-qty\");\n    confirmed.textContent = prefabObjects[i].confirmed;\n    confirmed.classList.add(\"item-qty\");\n    allocated.textContent = prefabObjects[i].allocated;\n    allocated.classList.add(\"item-qty\");\n    available.textContent = prefabObjects[i].available;\n    available.classList.add(\"item-qty\");\n    minimum.textContent = prefabObjects[i].minimum;\n    minimum.classList.add(\"item-qty\");\n    maximum.textContent = prefabObjects[i].maximum;\n    maximum.classList.add(\"item-qty\");\n    if (prefabObjects[i].size != \"\" && prefabObjects[i].style === \"Steel\") {\n      table.appendChild(tableRow);\n      name.appendChild(size);\n      name.appendChild(style);\n      tableRow.append(\n        name,\n        onHand,\n        open,\n        confirmed,\n        allocated,\n        available,\n        minimum,\n        maximum\n      );\n    } else if (\n      prefabObjects[i].size != \"\" &&\n      prefabObjects[i].style === \"Clear\"\n    ) {\n      table2.appendChild(tableRow);\n      name.appendChild(size);\n      name.appendChild(style);\n      tableRow.append(\n        name,\n        onHand,\n        open,\n        confirmed,\n        allocated,\n        available,\n        minimum,\n        maximum\n      );\n    }\n  }\n}\n\nfunction updateOnHand(size, style, onHand) {\n  for (let i = 0; i < prefabObjects.length; i++) {\n    if (prefabObjects[i].size === size && prefabObjects[i].style === style) {\n      prefabObjects[i].inv += onHand;\n    }\n    \n  }\n  //saveLocal();\n  clearTable();\n  displayTable();\n}\n\nfunction clearTable() {\n  let rowCount = table.rows.length;\n  for (let i = 1; i < rowCount; i++) {\n    table.deleteRow(1);\n    table2.deleteRow(1);\n  }\n}\n\n\n\ngenerateProducts();\n//console.log(prefabObjects);\n//restoreLocal();\ndisplayTable();\n\n//updateOnHand(\"38X54\", \"Steel\", 42);\n\nfunction hide() {\n  let title = document.getElementById(\"title\");\n  table.style.display = \"none\";\n  table2.style.display = \"none\";\n  title.style.display = \"none\";\n}\n\nwindow.hide = hide;\n\nwindow.updateOnHand = updateOnHand;\n\n\n\n//function saveLocal(){\n//localStorage.setItem('prefabObjects',JSON.stringify(prefabObjects));\n//}\n//\n//function restoreLocal()\n//{\n//   prefabObjects = JSON.parse(localStorage.getItem(\"prefabObjects\"));\n//   if (prefabObjects === null) \n//   prefabObjects = []\n//}\n\nfunction uwwcOpen()\n{\n    hide()\n    ;(0,_uwwcOpenCustomers__WEBPACK_IMPORTED_MODULE_0__.default)()\n\n}\nwindow.uwwcOpen = uwwcOpen;\n\n//# sourceURL=webpack://inventoryprefabs/./src/index.js?");

/***/ }),

/***/ "./src/uwwcOpenCustomers.js":
/*!**********************************!*\
  !*** ./src/uwwcOpenCustomers.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet currentCustomers = [];\n\n\nfunction display_UWWC_open_customers()\n{    restoreLocalCustomers()\n    document.getElementById('UWWCOpenCustomers').style.display = 'block';\n   let tableElements = document.getElementById('UWWCtable');\n    \n    let wells = currentCustomers[0]['Wells'];\n    \n\n    \n    \n   \n    \n    \n    for (const well in wells) {\n        let tableRow = document.createElement(\"tr\");\n        tableElements.appendChild(tableRow);\n        let customerName = document.createElement(\"td\");\n        customerName.classList.add(\"item-qty\");\n        customerName.textContent = currentCustomers[0]['name'];\n        \n        let sizeBox = document.createElement(\"td\");\n        sizeBox.classList.add(\"item-qty\");\n        let styleBox = document.createElement(\"td\");\n        styleBox.classList.add(\"item-qty\");\n        let orderDateBox = document.createElement(\"td\");\n        orderDateBox.classList.add(\"item-qty\");\n      let style = ''\n      if(wells[well]['Style'] === 0){\n      style = 'Steel'}\n      else\n      {\n          style = 'Clear'\n      }\n     \n     let size=  wells[well]['prefab_type'];\n     let orderDate = currentCustomers[0]['Date'];\n     \n      \n     orderDateBox.textContent = orderDate;\n     sizeBox.textContent = size;\n    styleBox.textContent = style;\n    let quantity = 1;\n    let quantityBox = document.createElement('td');\n    quantityBox.classList.add('item-qty');\n    quantityBox.textContent = quantity;\n    \n    let deliveryBox = document.createElement('td');\n    deliveryBox.classList.add('item-qty')\n    deliveryBox.textContent = currentCustomers[0]['prefab_select_delivery']\n\ntableRow.append(customerName,styleBox,sizeBox,quantityBox,orderDateBox,deliveryBox)\n\n     console.log(size);\n    }\n    console.log(wells)\n    \n}\n\n\n\n\n\n\n\n//async function getOpenOrders()\n//{   let date = new Date;\n//    date = date.toJSON().split('T')[0];\n//    let response = await fetch('crm28.  api)\n//    let data = await response.json()\n//    for (let i = 0; i<100000;i++){\n//        let info3 = \"\";\n//        if (data[i] !== undefined && data[i]['Date'] === date && (data[i]['prefab_select_delivery'] === 'Deliver and Install' ||data[i]['prefab_select_delivery'] === 'Just Deliver' || data[i]['prefab_select_delivery'] === 'Customer Pickup'))\n//        {\n//        \n//        info3 = data[i];\n//       \n//       currentCustomers.push(info3);\n//       \n//        saveLocalCustomers();\n//        }\n//      }\n//\n//}\n//getOpenOrders();\n\nfunction saveLocalCustomers(){\nlocalStorage.setItem('PrefabCustomers',JSON.stringify(currentCustomers));\nconsole.log(currentCustomers);\n}\n\nfunction restoreLocalCustomers()\n{\n    currentCustomers = JSON.parse(localStorage.getItem('PrefabCustomers'));\n    if(currentCustomers === null)\n    currentCustomers = []\n    console.log(currentCustomers)\n}\n\n\n\nfunction wellInfo()\n{\n \n\n}\n\n//wellInfo();\n//getOpenOrders().then(data => console.log(data));\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (display_UWWC_open_customers);\n\n\n/*\nThis will need to be from an API call to CrmWells\nWe also need to alter the table that stores prefab customers\nI'll have to talk to Scott about that \n\n//Name\nDate\nFranchise\nprefab select deivery\nStyle\nSize\n\n\n{ ID=35063.0, name=Julie Haen, prefab_select_delivery=Customer Pickup, \n\nWells={70={ prefab_type=38 x 54, Style=0}, 71={ prefab_type=26 x 54, Style=0}}, \nDate=2021-05-24, Franchise=18}\n\n\n\n*/\n\n//# sourceURL=webpack://inventoryprefabs/./src/uwwcOpenCustomers.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;