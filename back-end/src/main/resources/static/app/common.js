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
    create(model) {
        throw new Error('Method not implemented.');
    }
    delete(id) {
        throw new Error('Method not implemented.');
    }
    read(id) {
        return this.crudBackendService.read(this.controllerPath, id);
    }
    readAll() {
        return this.crudBackendService.readAll(this.controllerPath);
    }
    update(model) {
        throw new Error('Method not implemented.');
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);




class CrudBackendService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    create(model) {
        throw new Error('Method not implemented.');
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.firstValueFrom)(this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.backendUrl, JSON.stringify(model), { headers: { "Content-type": "application/json" } }));
    }
    delete(id) {
        throw new Error('Method not implemented.');
    }
    read(controllerPath, id) {
        return this.httpClient.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.backendUrl}/${controllerPath}/get/${id}`, { headers: { "Content-type": "application/json" } });
    }
    readAll(controllerPath) {
        return this.httpClient.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.backendUrl}/${controllerPath}/getAll`, { headers: { "Content-type": "application/json" } });
    }
    update(model) {
        throw new Error('Method not implemented.');
    }
}
CrudBackendService.ɵfac = function CrudBackendService_Factory(t) { return new (t || CrudBackendService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
CrudBackendService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CrudBackendService, factory: CrudBackendService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4363:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/firstValueFrom.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "firstValueFrom": () => (/* binding */ firstValueFrom)
/* harmony export */ });
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/EmptyError */ 4423);
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscriber */ 9904);


function firstValueFrom(source, config) {
  const hasConfig = typeof config === 'object';
  return new Promise((resolve, reject) => {
    const subscriber = new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.SafeSubscriber({
      next: value => {
        resolve(value);
        subscriber.unsubscribe();
      },
      error: reject,
      complete: () => {
        if (hasConfig) {
          resolve(config.defaultValue);
        } else {
          reject(new _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__.EmptyError());
        }
      }
    });
    source.subscribe(subscriber);
  });
}

/***/ })

}]);
//# sourceMappingURL=common.js.map