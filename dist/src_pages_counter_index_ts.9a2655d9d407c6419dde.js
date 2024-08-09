"use strict";
(self["webpackChunkulbi"] = self["webpackChunkulbi"] || []).push([["src_pages_counter_index_ts"],{

/***/ "./src/pages/counter/index.ts":
/*!************************************!*\
  !*** ./src/pages/counter/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Counter: () => (/* reexport safe */ _ui_Counter__WEBPACK_IMPORTED_MODULE_0__.Counter)
/* harmony export */ });
/* harmony import */ var _ui_Counter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/Counter */ "./src/pages/counter/ui/Counter.tsx");




/***/ }),

/***/ "./src/pages/counter/ui/Counter.tsx":
/*!******************************************!*\
  !*** ./src/pages/counter/ui/Counter.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Counter: () => (/* binding */ Counter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _model_counterSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/counterSlice */ "./src/pages/counter/model/counterSlice.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");



var Counter = function () {
    var counter = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) { return state.counterSlice.value; });
    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "container", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { onClick: function () { return dispatch((0,_model_counterSlice__WEBPACK_IMPORTED_MODULE_1__.incrementByAmount)(counter)); }, children: "click" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: counter })] }));
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX2NvdW50ZXJfaW5kZXhfdHMuOWEyNjU1ZDlkNDA3YzY0MTlkZGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDcEI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0Q0QztBQUNMO0FBQ0g7QUFDaEQ7QUFDUCxrQkFBa0Isd0RBQVcsb0JBQW9CLGtDQUFrQztBQUNuRixtQkFBbUIsd0RBQVc7QUFDOUIsWUFBWSx1REFBSyxVQUFVLG1DQUFtQyxzREFBSSxhQUFhLHVCQUF1QixnQkFBZ0Isc0VBQWlCLGFBQWEscUJBQXFCLEdBQUcsc0RBQUksVUFBVSxtQkFBbUIsSUFBSTtBQUNqTiIsInNvdXJjZXMiOlsid2VicGFjazovL3VsYmkvLi9zcmMvcGFnZXMvY291bnRlci9pbmRleC50cyIsIndlYnBhY2s6Ly91bGJpLy4vc3JjL3BhZ2VzL2NvdW50ZXIvdWkvQ291bnRlci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ291bnRlciB9IGZyb20gXCIuL3VpL0NvdW50ZXJcIjtcbmV4cG9ydCB7IENvdW50ZXIgfTtcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBpbmNyZW1lbnRCeUFtb3VudCB9IGZyb20gXCIuLi9tb2RlbC9jb3VudGVyU2xpY2VcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuZXhwb3J0IHZhciBDb3VudGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBjb3VudGVyID0gdXNlU2VsZWN0b3IoZnVuY3Rpb24gKHN0YXRlKSB7IHJldHVybiBzdGF0ZS5jb3VudGVyU2xpY2UudmFsdWU7IH0pO1xuICAgIHZhciBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJjb250YWluZXJcIiwgY2hpbGRyZW46IFtfanN4KFwiYnV0dG9uXCIsIHsgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gZGlzcGF0Y2goaW5jcmVtZW50QnlBbW91bnQoY291bnRlcikpOyB9LCBjaGlsZHJlbjogXCJjbGlja1wiIH0pLCBfanN4KFwiZGl2XCIsIHsgY2hpbGRyZW46IGNvdW50ZXIgfSldIH0pKTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=