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
        return this.crudBackendService.read(this.controllerPath, id);
    }
    readAll() {
        return this.crudBackendService.readAll(this.controllerPath);
    }
}
BookService.ɵfac = function BookService_Factory(t) { return new (t || BookService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_crud_backend_service__WEBPACK_IMPORTED_MODULE_0__.CrudBackendService)); };
BookService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BookService, factory: BookService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8811:
/*!********************************************************!*\
  !*** ./src/app/shared/backend/crud-backend.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrudBackendService": () => (/* binding */ CrudBackendService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class CrudBackendService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    create(controllerPath, model) {
        return this.httpClient.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.backendUrl}/api/${controllerPath}/create`, model, { headers: { "Content-type": "application/json" } });
    }
    delete(id) {
        throw new Error('Method not implemented.');
    }
    read(controllerPath, id) {
        return this.httpClient.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.backendUrl}/api/${controllerPath}/get/${id}`, { headers: { "Content-type": "application/json" } });
    }
    readAll(controllerPath) {
        return this.httpClient.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.backendUrl}/api/${controllerPath}/getAll`, { headers: { "Content-type": "application/json" } });
    }
    update(model) {
        throw new Error('Method not implemented.');
    }
}
CrudBackendService.ɵfac = function CrudBackendService_Factory(t) { return new (t || CrudBackendService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
CrudBackendService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CrudBackendService, factory: CrudBackendService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map