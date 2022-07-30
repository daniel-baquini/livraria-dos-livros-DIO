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
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _crud_backend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crud-backend.service */ 8811);
/* harmony import */ var _services_default_http_default_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/default-http/default-http.service */ 7817);




class BookService {
    constructor(crudBackendService, defaultHttpService) {
        this.crudBackendService = crudBackendService;
        this.defaultHttpService = defaultHttpService;
        this.controllerPath = "book";
    }
    read(id) {
        return this.crudBackendService.get(this.controllerPath, id);
    }
    readAll(page) {
        return this.defaultHttpService.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.backendUrl}/api/${this.controllerPath}/getAll/${page}`);
    }
}
BookService.ɵfac = function BookService_Factory(t) { return new (t || BookService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_crud_backend_service__WEBPACK_IMPORTED_MODULE_1__.CrudBackendService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_default_http_default_http_service__WEBPACK_IMPORTED_MODULE_2__.DefaultHttpService)); };
BookService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: BookService, factory: BookService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map