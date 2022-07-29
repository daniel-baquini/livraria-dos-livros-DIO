"use strict";
(self["webpackChunkfront_end"] = self["webpackChunkfront_end"] || []).push([["src_app_home_home_module_ts"],{

/***/ 6122:
/*!*******************************************************!*\
  !*** ./src/app/home/home-page/home-page.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageComponent": () => (/* binding */ HomePageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_backend_book_book_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/backend/book/book.service */ 2649);
/* harmony import */ var src_app_shared_services_user_preferences_user_preferences_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/user-preferences/user-preferences.service */ 4685);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_components_book_preview_book_preview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/book-preview/book-preview.component */ 9842);
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/button/button.component */ 42);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_default_page_default_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/default-page/default-page.component */ 8014);
/* harmony import */ var _shared_components_field_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/field/field.component */ 6885);
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/modal/modal.component */ 312);










function HomePageComponent_app_book_preview_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-book-preview", 8);
} if (rf & 2) {
    const book_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("book", book_r2)("routerLink", "/book/" + book_r2.id);
} }
function HomePageComponent_app_modal_11_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-modal", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("closeButtonClick", function HomePageComponent_app_modal_11_Template_app_modal_closeButtonClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.closeButtonClick()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("closeButtonLabel", "Entendido")("textContent", "Esse aplicativo \u00E9 uma demo de um e-commerce de livros. Por ser uma demo, as compras n\u00E3o podem ser conclu\u00EDdas, mas, voc\u00EA pode adicionar itens ao carrinho, fornecer um endere\u00E7o de entrega e escolher um m\u00E9todo de pagamento.\n\nOs dados dos livros foram retirados da amazon no dia 03/07/2022")("title", "Boas vindas!");
} }
class HomePageComponent {
    constructor(bookService, userPreferencesService) {
        this.bookService = bookService;
        this.userPreferencesService = userPreferencesService;
        this.books = [];
    }
    ngOnInit() {
        this.bookService.readAll().subscribe(x => {
            this.books = x;
        });
    }
    get showWelcomeModal() {
        return this.userPreferencesService.userPreferences.showWelcomeModal;
    }
    closeButtonClick() {
        this.userPreferencesService.setProperty("showWelcomeModal", false);
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_backend_book_book_service__WEBPACK_IMPORTED_MODULE_0__.BookService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_user_preferences_user_preferences_service__WEBPACK_IMPORTED_MODULE_1__.UserPreferencesService)); };
HomePageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 12, vars: 3, consts: [[1, "search"], [1, "text-preset-650", "welcome-message"], [1, "search-group"], [3, "type"], [1, "books"], [3, "book", "routerLink", 4, "ngFor", "ngForOf"], [1, "load-more", "text-preset-470"], [3, "closeButtonLabel", "textContent", "title", "closeButtonClick", 4, "ngIf"], [3, "book", "routerLink"], [3, "closeButtonLabel", "textContent", "title", "closeButtonClick"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-default-page")(1, "div", 0)(2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Boas-vindas! Fa\u00E7a a busca pelo nome do livro ou autor(a)");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "app-field")(6, "app-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, HomePageComponent_app_book_preview_8_Template, 1, 2, "app-book-preview", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Carregar mais");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, HomePageComponent_app_modal_11_Template, 1, 3, "app-modal", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("type", "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.books);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showWelcomeModal);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _shared_components_book_preview_book_preview_component__WEBPACK_IMPORTED_MODULE_2__.BookPreviewComponent, _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__.ButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_components_default_page_default_page_component__WEBPACK_IMPORTED_MODULE_4__.DefaultPageComponent, _shared_components_field_field_component__WEBPACK_IMPORTED_MODULE_5__.FieldComponent, _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_6__.ModalComponent], styles: ["[_nghost-%COMP%] {\n    display: contents;\n}\n\n.search[_ngcontent-%COMP%] {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    gap: 24px;\n    max-width: 720px;\n    width: 100%;\n}\n\n.welcome-message[_ngcontent-%COMP%] {\n    color: var(--c-dark-80);\n}\n\n.search-group[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n}\n\n.books[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    gap: 48px;\n    justify-content: center;\n}\n\napp-book-preview[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFNBQVM7SUFDVCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6ImhvbWUtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xufVxuXG4uc2VhcmNoIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDI0cHg7XG4gICAgbWF4LXdpZHRoOiA3MjBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLndlbGNvbWUtbWVzc2FnZSB7XG4gICAgY29sb3I6IHZhcigtLWMtZGFyay04MCk7XG59XG5cbi5zZWFyY2gtZ3JvdXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmJvb2tzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGdhcDogNDhweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuYXBwLWJvb2stcHJldmlldyB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"] });


/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page/home-page.component */ 6122);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const homeRoutes = [
    {
        component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_0__.HomePageComponent,
        path: ""
    }
];
class HomeModule {
}
HomeModule.ɵfac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(homeRoutes),
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_0__.HomePageComponent], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] }); })();


/***/ }),

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
    }
    create(model) {
        throw new Error('Method not implemented.');
    }
    delete(id) {
        throw new Error('Method not implemented.');
    }
    read(id) {
        throw new Error('Method not implemented.');
    }
    readAll() {
        return this.crudBackendService.readAll("book");
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
    read(id) {
        throw new Error('Method not implemented.');
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

/***/ 4685:
/*!******************************************************************************!*\
  !*** ./src/app/shared/services/user-preferences/user-preferences.service.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPreferencesService": () => (/* binding */ UserPreferencesService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

const defaultUserPreferences = {
    showWelcomeModal: true
};
class UserPreferencesService {
    constructor() {
        this.userPreferencesKey = "user-preferences";
        const userPreferencesString = localStorage.getItem(this.userPreferencesKey);
        let userPreferences;
        if (userPreferencesString === null) {
            userPreferences = defaultUserPreferences;
        }
        else {
            userPreferences = JSON.parse(userPreferencesString);
            let key;
            // After an update on user preferences, if a new key is create, it will be assigned to the
            // already existing preferences.
            for (key in defaultUserPreferences) {
                if (!Object.keys(userPreferences).includes(key)) {
                    userPreferences[key] = defaultUserPreferences[key];
                }
            }
        }
        localStorage.setItem(this.userPreferencesKey, JSON.stringify(userPreferences));
    }
    get userPreferences() {
        // The object will not return null, because it's initialized in the service constructor
        return JSON.parse(localStorage.getItem(this.userPreferencesKey));
    }
    setProperty(propertyName, value) {
        const userPreferences = this.userPreferences;
        userPreferences[propertyName] = value;
        localStorage.setItem(this.userPreferencesKey, JSON.stringify(userPreferences));
    }
}
UserPreferencesService.ɵfac = function UserPreferencesService_Factory(t) { return new (t || UserPreferencesService)(); };
UserPreferencesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserPreferencesService, factory: UserPreferencesService.ɵfac, providedIn: 'root' });


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
//# sourceMappingURL=src_app_home_home_module_ts.js.map