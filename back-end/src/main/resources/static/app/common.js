"use strict";
(self["webpackChunkfront_end"] = self["webpackChunkfront_end"] || []).push([["common"],{

/***/ 2649:
/*!*****************************************************!*\
  !*** ./src/app/shared/backend/book/book.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookService": () => (/* binding */ BookService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _crud_backend_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../crud-backend.service */ 8811);


class BookService {
    constructor(crudBackendService) {
        this.crudBackendService = crudBackendService;
        this.controllerPath = "book";
    }
    read(id) {
        return this.crudBackendService.get(this.controllerPath, id);
    }
    readAll() {
        return this.crudBackendService.getAll(this.controllerPath);
    }
}
BookService.ɵfac = function BookService_Factory(t) { return new (t || BookService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_crud_backend_service__WEBPACK_IMPORTED_MODULE_0__.CrudBackendService)); };
BookService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BookService, factory: BookService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map