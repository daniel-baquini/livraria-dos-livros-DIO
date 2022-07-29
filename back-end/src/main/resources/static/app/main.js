"use strict";
(self["webpackChunkfront_end"] = self["webpackChunkfront_end"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_components_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/components/not-found-page/not-found-page.component */ 5084);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_authentication_authentication_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./authentication/authentication.module */ 1082)).then(m => m.AuthenticationModule),
        path: "authentication"
    },
    {
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_book_book_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./book/book.module */ 3265)).then(m => m.BookModule),
        path: "book"
    },
    {
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_cart_cart_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./cart/cart.module */ 2943)).then(m => m.CartModule),
        path: "cart"
    },
    {
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(m => m.HomeModule),
        path: ""
    },
    {
        component: _shared_components_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_0__.NotFoundPageComponent,
        path: "**"
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { useHash: true }), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);





class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ }),

/***/ 698:
/*!***************************************************!*\
  !*** ./src/app/cart/cart-item/cart-item.model.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class CartItem {
    constructor(book, quantity) {
        this.book = book;
        this.quantity = quantity;
    }
    get totalPrice() {
        return this.book.price * this.quantity;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartItem);


/***/ }),

/***/ 971:
/*!*************************************************!*\
  !*** ./src/app/cart/cart-management.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartManagementService": () => (/* binding */ CartManagementService)
/* harmony export */ });
/* harmony import */ var _cart_item_cart_item_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart-item/cart-item.model */ 698);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class CartManagementService {
    constructor() {
        this.cart = [];
    }
    addItem(book) {
        if (this.isOnCart(book.id))
            return;
        this.cart.push(new _cart_item_cart_item_model__WEBPACK_IMPORTED_MODULE_0__["default"](book, 1));
    }
    deleteItem(bookId) {
        const cartItemIndex = this.cart.findIndex(x => x.book.id === bookId);
        if (cartItemIndex === -1)
            return;
        this.cart.splice(cartItemIndex, 1);
    }
    decrementItem(bookId) {
        const cartItemToDecrement = this.cart.find(x => x.book.id === bookId);
        if (!cartItemToDecrement)
            return;
        cartItemToDecrement.quantity--;
        if (cartItemToDecrement.quantity <= 0)
            this.deleteItem(bookId);
    }
    incrementItem(bookId) {
        const cartItemToIncrement = this.cart.find(x => x.book.id === bookId);
        if (!cartItemToIncrement)
            return;
        cartItemToIncrement.quantity++;
    }
    isOnCart(bookId) {
        return !!this.cart.find(x => x.book.id === bookId);
    }
}
CartManagementService.ɵfac = function CartManagementService_Factory(t) { return new (t || CartManagementService)(); };
CartManagementService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CartManagementService, factory: CartManagementService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8332:
/*!************************************************************!*\
  !*** ./src/app/shared/components/alert/alert.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertComponent": () => (/* binding */ AlertComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function AlertComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 5);
} }
class AlertComponent {
    constructor() {
        this.canClose = false;
        this.message = "";
        this.type = "error";
    }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(); };
AlertComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertComponent, selectors: [["app-alert"]], inputs: { canClose: "canClose", message: "message", type: "type" }, decls: 7, vars: 5, consts: [[1, "icon-error", "message-icon"], [1, "icon-check-full", "message-icon"], [1, "icon-warning", "message-icon"], [1, "message", "text-preset-460"], ["class", "close-icon icon-close", 4, "ngIf"], [1, "close-icon", "icon-close"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 0)(2, "span", 1)(3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AlertComponent_span_6_Template, 1, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("host ", ctx.type, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.canClose);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: ["[_nghost-%COMP%] {\n    display: block;\n}\n\n.host[_ngcontent-%COMP%] {\n    align-items: center;\n    border-radius: 8px;\n    display: flex;\n    flex-direction: row;\n    gap: 24px;\n    padding: 24px;\n    width: 100%;\n}\n\n.host.error[_ngcontent-%COMP%] {\n    background-color: var(--c-red-60);\n}\n\n.host.success[_ngcontent-%COMP%] {\n    background-color: var(--c-green-60);\n}\n\n.host.warning[_ngcontent-%COMP%] {\n    background-color: var(--c-yellow-60);\n}\n\n.message-icon[_ngcontent-%COMP%] {\n    display: none;\n}\n\n.host.error[_ngcontent-%COMP%]    > .icon-error[_ngcontent-%COMP%] {\n    display: block;\n}\n\n.host.success[_ngcontent-%COMP%]    > .icon-check-full[_ngcontent-%COMP%] {\n    display: block;\n}\n\n.host.warning[_ngcontent-%COMP%]    > .icon-warning[_ngcontent-%COMP%] {\n    display: block;\n}\n\n.message-icon[_ngcontent-%COMP%], .close-icon[_ngcontent-%COMP%]  {\n    color: var(--c-white-10);\n    font-size: 32px;\n}\n\n.message[_ngcontent-%COMP%] {\n    color: var(--c-white-10);\n    flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsZXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLE9BQU87QUFDWCIsImZpbGUiOiJhbGVydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaG9zdCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGdhcDogMjRweDtcbiAgICBwYWRkaW5nOiAyNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uaG9zdC5lcnJvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYy1yZWQtNjApO1xufVxuXG4uaG9zdC5zdWNjZXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jLWdyZWVuLTYwKTtcbn1cblxuLmhvc3Qud2FybmluZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYy15ZWxsb3ctNjApO1xufVxuXG4ubWVzc2FnZS1pY29uIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uaG9zdC5lcnJvciA+IC5pY29uLWVycm9yIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmhvc3Quc3VjY2VzcyA+IC5pY29uLWNoZWNrLWZ1bGwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaG9zdC53YXJuaW5nID4gLmljb24td2FybmluZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5tZXNzYWdlLWljb24sIC5jbG9zZS1pY29uICB7XG4gICAgY29sb3I6IHZhcigtLWMtd2hpdGUtMTApO1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbn1cblxuLm1lc3NhZ2Uge1xuICAgIGNvbG9yOiB2YXIoLS1jLXdoaXRlLTEwKTtcbiAgICBmbGV4OiAxO1xufSJdfQ== */"] });


/***/ }),

/***/ 42:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/button/button.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonComponent": () => (/* binding */ ButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function ButtonComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button")(1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.label);
} }
function ButtonComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ButtonComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6)(1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.label);
} }
class ButtonComponent {
    constructor() {
        this.label = "";
        this.type = "primary";
    }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
ButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonComponent, selectors: [["app-button"]], inputs: { label: "label", type: "type" }, decls: 3, vars: 3, consts: [[4, "ngIf"], ["class", "search-button", 4, "ngIf"], ["class", "secondary-button", 4, "ngIf"], [1, "text-preset-420"], [1, "search-button"], [1, "icon-search"], [1, "secondary-button"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ButtonComponent_button_0_Template, 3, 1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ButtonComponent_button_1_Template, 2, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ButtonComponent_button_2_Template, 3, 1, "button", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "secondary");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: ["[_nghost-%COMP%] {\n    display: inline-block;\n}\n\nbutton[_ngcontent-%COMP%] {\n    align-items: center;\n    background-color: var(--c-primary-60);\n    border: none;\n    border-radius: 8px;\n    color: var(--c-white-10);\n    cursor: pointer;\n    display: flex;\n    height: 100%;\n    justify-content: center;\n    outline: none;\n    padding: 16px 24px;\n    width: 100%;\n}\n\n.search-button[_ngcontent-%COMP%] {\n    font-size: 24px;\n}\n\n.secondary-button[_ngcontent-%COMP%] {\n    background-color: transparent;\n    border: 1px solid var(--c-primary-60);\n    color: var(--c-primary-60);\n    padding: 15px 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHFDQUFxQztJQUNyQyxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsYUFBYTtJQUNiLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHFDQUFxQztJQUNyQywwQkFBMEI7SUFDMUIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6ImJ1dHRvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuYnV0dG9uIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWMtcHJpbWFyeS02MCk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBjb2xvcjogdmFyKC0tYy13aGl0ZS0xMCk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgcGFkZGluZzogMTZweCAyNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uc2VhcmNoLWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uc2Vjb25kYXJ5LWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYy1wcmltYXJ5LTYwKTtcbiAgICBjb2xvcjogdmFyKC0tYy1wcmltYXJ5LTYwKTtcbiAgICBwYWRkaW5nOiAxNXB4IDI0cHg7XG59Il19 */"] });


/***/ }),

/***/ 8014:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/default-page/default-page.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultPageComponent": () => (/* binding */ DefaultPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../nav/nav.component */ 3749);


const _c0 = ["*"];
class DefaultPageComponent {
}
DefaultPageComponent.ɵfac = function DefaultPageComponent_Factory(t) { return new (t || DefaultPageComponent)(); };
DefaultPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DefaultPageComponent, selectors: [["app-default-page"]], ngContentSelectors: _c0, decls: 3, vars: 0, template: function DefaultPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, dependencies: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_0__.NavComponent], styles: ["[_nghost-%COMP%] {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    gap: 64px;\n    min-height: 100%;\n    overflow: scroll;\n    padding: 40px;\n    width: 100%;\n}\n\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n    max-width: 1200px;\n    width: 100%;\n}\n\nmain[_ngcontent-%COMP%] {\n    align-items: center;\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    gap: 64px;\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmF1bHQtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLE9BQU87SUFDUCxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFdBQVc7QUFDZiIsImZpbGUiOiJkZWZhdWx0LXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDY0cHg7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbjpob3N0ID4gKiB7XG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbm1haW4ge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA2NHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufSJdfQ== */"] });


/***/ }),

/***/ 6885:
/*!************************************************************!*\
  !*** ./src/app/shared/components/field/field.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FieldComponent": () => (/* binding */ FieldComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function FieldComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.label);
} }
const _c0 = function (a0) { return { "labeless": a0 }; };
class FieldComponent {
}
FieldComponent.ɵfac = function FieldComponent_Factory(t) { return new (t || FieldComponent)(); };
FieldComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FieldComponent, selectors: [["app-field"]], inputs: { label: "label" }, decls: 3, vars: 4, consts: [["class", "label-wrapper", 4, "ngIf"], [1, "field-group", 3, "ngClass"], ["type", "text", 1, "text-preset-450"], [1, "label-wrapper"], [1, "label-wrapper__left-margin-label"], [1, "label-wrapper__label", "text-preset-320"], [1, "label-wrapper__right-margin-label"]], template: function FieldComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FieldComponent_div_0_Template, 5, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, !ctx.label));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: ["[_nghost-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    height: 64px;\n    width: 100%;\n}\n\n.label-wrapper[_ngcontent-%COMP%] {\n    align-items: flex-end;\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n}\n\n.label-wrapper__left-margin-label[_ngcontent-%COMP%] {\n    border-color: var(--c-dark-40);\n    border-radius: 4px 0px 0px 0px;\n    border-style: solid;\n    border-width: 1px 0px 0px 1px;\n    height: 8px;\n    width: 16px;\n}\n\n.label-wrapper__label[_ngcontent-%COMP%] {\n    color: var(--c-dark-60);\n    padding: 0px 4px;\n}\n\n.label-wrapper__right-margin-label[_ngcontent-%COMP%] {\n    border-color: var(--c-dark-40);\n    border-radius: 0px 4px 0px 0px;\n    border-style: solid;\n    border-width: 1px 1px 0px 0px;\n    flex: 1;\n    height: 8px;\n}\n\n.field-group[_ngcontent-%COMP%] {\n    align-items: center;\n    border-color: var(--c-dark-40);\n    border-radius: 0px 0px 4px 4px;\n    border-style: solid;\n    border-width: 0px 1px 1px 1px;\n    display: flex;\n    flex: 1;\n    flex-direction: row;\n    gap: 16px;\n    padding: 8px 16px 16px;\n    width: 100%;\n}\n\n.field-group.labeless[_ngcontent-%COMP%] {\n    border-radius: 4px;\n    border-width: 1px;\n    padding: 16px;\n}\n\ninput[_ngcontent-%COMP%] {\n    background-color: transparent;\n    border: none;\n    color: var(--c-dark-60);\n    flex: 1;\n    outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpZWxkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsT0FBTztJQUNQLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLE9BQU87SUFDUCxtQkFBbUI7SUFDbkIsU0FBUztJQUNULHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixPQUFPO0lBQ1AsYUFBYTtBQUNqQiIsImZpbGUiOiJmaWVsZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDY0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5sYWJlbC13cmFwcGVyIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubGFiZWwtd3JhcHBlcl9fbGVmdC1tYXJnaW4tbGFiZWwge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYy1kYXJrLTQwKTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHggMHB4IDBweCAwcHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDFweCAwcHggMHB4IDFweDtcbiAgICBoZWlnaHQ6IDhweDtcbiAgICB3aWR0aDogMTZweDtcbn1cblxuLmxhYmVsLXdyYXBwZXJfX2xhYmVsIHtcbiAgICBjb2xvcjogdmFyKC0tYy1kYXJrLTYwKTtcbiAgICBwYWRkaW5nOiAwcHggNHB4O1xufVxuXG4ubGFiZWwtd3JhcHBlcl9fcmlnaHQtbWFyZ2luLWxhYmVsIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWMtZGFyay00MCk7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDRweCAwcHggMHB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHggMXB4IDBweCAwcHg7XG4gICAgZmxleDogMTtcbiAgICBoZWlnaHQ6IDhweDtcbn1cblxuLmZpZWxkLWdyb3VwIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYy1kYXJrLTQwKTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDRweCA0cHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDBweCAxcHggMXB4IDFweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6IDE7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBnYXA6IDE2cHg7XG4gICAgcGFkZGluZzogOHB4IDE2cHggMTZweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmZpZWxkLWdyb3VwLmxhYmVsZXNzIHtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgcGFkZGluZzogMTZweDtcbn1cblxuaW5wdXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogdmFyKC0tYy1kYXJrLTYwKTtcbiAgICBmbGV4OiAxO1xuICAgIG91dGxpbmU6IG5vbmU7XG59Il19 */"] });


/***/ }),

/***/ 8168:
/*!**********************************************************!*\
  !*** ./src/app/shared/components/logo/logo.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoComponent": () => (/* binding */ LogoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class LogoComponent {
    constructor(router) {
        this.router = router;
    }
    onHostClick() {
        this.router.navigateByUrl("");
    }
}
LogoComponent.ɵfac = function LogoComponent_Factory(t) { return new (t || LogoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
LogoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoComponent, selectors: [["app-logo"]], hostBindings: function LogoComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LogoComponent_click_HostBindingHandler() { return ctx.onHostClick(); });
    } }, decls: 6, vars: 0, consts: [[1, "icon-books"], [1, "name"], [1, "name__first-name"], [1, "name__second-name"]], template: function LogoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Livraria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "dos livros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, styles: ["[_nghost-%COMP%] {\n    align-items: center;\n    cursor: pointer;\n    display: flex;\n    flex-direction: row;\n    gap: 8px;\n}\n\n.icon-books[_ngcontent-%COMP%] {\n    font-size: 60px;\n}\n\n.name[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n}\n\n.name__first-name[_ngcontent-%COMP%] {\n    color: var(--c-dark-80);\n    font-family: 'Roboto';\n    font-size: 34px;\n    font-weight: 700;\n    line-height: 100%;\n}\n\n.name__second-name[_ngcontent-%COMP%] {\n    color: var(--c-dark-80);\n    font-family: 'Roboto';\n    font-size: 24px;\n    font-weight: 700;\n    line-height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ28uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6ImxvZ28uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZ2FwOiA4cHg7XG59XG5cbi5pY29uLWJvb2tzIHtcbiAgICBmb250LXNpemU6IDYwcHg7XG59XG5cbi5uYW1lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5uYW1lX19maXJzdC1uYW1lIHtcbiAgICBjb2xvcjogdmFyKC0tYy1kYXJrLTgwKTtcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gICAgZm9udC1zaXplOiAzNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEwMCU7XG59XG5cbi5uYW1lX19zZWNvbmQtbmFtZSB7XG4gICAgY29sb3I6IHZhcigtLWMtZGFyay04MCk7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxMDAlO1xufSJdfQ== */"] });


/***/ }),

/***/ 312:
/*!************************************************************!*\
  !*** ./src/app/shared/components/modal/modal.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalComponent": () => (/* binding */ ModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);



function ModalComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.textContent);
} }
function ModalComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = ["*"];
class ModalComponent {
    constructor() {
        this.closeButtonLabel = "Fechar";
        this.textContent = "";
        this.title = "";
        this.closeButtonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(); };
ModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["app-modal"]], inputs: { closeButtonLabel: "closeButtonLabel", textContent: "textContent", title: "title" }, outputs: { closeButtonClick: "closeButtonClick" }, ngContentSelectors: _c0, decls: 8, vars: 4, consts: [[1, "modal"], [1, "modal-title", "text-preset-500"], ["class", "modal-body text-preset-450", 4, "ngIf"], ["class", "model-body", 4, "ngIf"], [1, "modal-buttons"], [1, "close-button", "text-preset-350", 3, "click"], [1, "modal-body", "text-preset-450"], [1, "model-body"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ModalComponent_span_3_Template, 2, 1, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ModalComponent_div_4_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4)(6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_span_click_6_listener() { return ctx.closeButtonClick.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.textContent !== "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.textContent === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.closeButtonLabel);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: ["[_nghost-%COMP%] {\n    align-items: center;\n    -webkit-backdrop-filter: blur(12px);\n            backdrop-filter: blur(12px);\n    background: rgba(0, 0, 0, 0.6);\n    display: flex;\n    height: 100%;\n    justify-content: center;\n    padding: 20px;\n    position: absolute;\n    width: 100%;\n}\n\n.modal[_ngcontent-%COMP%] {\n    background-color: var(--c-white-10);\n    border-radius: 8px;\n    display: flex;\n    flex-direction: column;\n    gap: 24px;\n    max-width: 520px;\n    padding: 24px;\n    width: 100%;\n}\n\n.modal-title[_ngcontent-%COMP%] {\n    color: var(--c-dark-80);\n}\n\n.modal-body[_ngcontent-%COMP%] {\n    color: var(--c-dark-60);\n    white-space: pre-wrap;\n}\n\n.modal-buttons[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n}\n\n.close-button[_ngcontent-%COMP%] {\n    color: var(--c-primary-60);\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQiw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGVBQWU7QUFDbkIiLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMnB4KTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5tb2RhbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYy13aGl0ZS0xMCk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDI0cHg7XG4gICAgbWF4LXdpZHRoOiA1MjBweDtcbiAgICBwYWRkaW5nOiAyNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubW9kYWwtdGl0bGUge1xuICAgIGNvbG9yOiB2YXIoLS1jLWRhcmstODApO1xufVxuXG4ubW9kYWwtYm9keSB7XG4gICAgY29sb3I6IHZhcigtLWMtZGFyay02MCk7XG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuXG4ubW9kYWwtYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5jbG9zZS1idXR0b24ge1xuICAgIGNvbG9yOiB2YXIoLS1jLXByaW1hcnktNjApO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"] });


/***/ }),

/***/ 3749:
/*!********************************************************!*\
  !*** ./src/app/shared/components/nav/nav.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavComponent": () => (/* binding */ NavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_cart_cart_management_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/cart/cart-management.service */ 971);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logo/logo.component */ 8168);





function NavComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6)(1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.cartItemQuantity);
} }
class NavComponent {
    constructor(cartManagementService) {
        this.cartManagementService = cartManagementService;
    }
    get cartItemQuantity() {
        return this.cartManagementService.cart.length;
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_cart_cart_management_service__WEBPACK_IMPORTED_MODULE_0__.CartManagementService)); };
NavComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 8, vars: 3, consts: [[1, "nav-links"], [1, "cart-wrapper", 3, "routerLink"], [1, "cart-wrapper__icon", "icon-cart"], ["class", "cart-wrapper__itens-quantity-wrapper", 4, "ngIf"], [1, "vertical-divider"], [1, "nav-links__link", 3, "routerLink"], [1, "cart-wrapper__itens-quantity-wrapper"], [1, "itens-quantity-wrapper__label", "text-preset-250"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0)(2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, NavComponent_div_4_Template, 3, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Entrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "/cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.cartItemQuantity > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "/authentication");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _logo_logo_component__WEBPACK_IMPORTED_MODULE_1__.LogoComponent], styles: ["[_nghost-%COMP%] {\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n\n.nav-links[_ngcontent-%COMP%] {\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n    gap: 16px;\n}\n\n.cart-wrapper[_ngcontent-%COMP%] {\n    align-items: center;\n    cursor: pointer;\n    display: flex;\n    flex-direction: row;\n    gap: 4px;\n}\n\n.cart-wrapper__icon[_ngcontent-%COMP%] {\n    font-size: 24px;\n}\n\n.cart-wrapper__itens-quantity-wrapper[_ngcontent-%COMP%] {\n    align-items: center;\n    border-radius: 10px;\n    background-color: var(--c-red-60);\n    color: var(--c-white-10);\n    display: flex;\n    justify-content: center;\n    padding: 6px 8px;\n}\n\n.vertical-divider[_ngcontent-%COMP%] {\n    background-color: var(--c-dark-80);\n    height: 16px;\n    width: 1px;\n}\n\n.nav-links__link[_ngcontent-%COMP%] {\n    color: var(--c-dark-60);\n    cursor: pointer;\n    transition: 250ms;\n}\n\n.nav-links__link[_ngcontent-%COMP%]:hover {\n    color: var(--c-dark-100);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGlDQUFpQztJQUNqQyx3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCIiwiZmlsZSI6Im5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLm5hdi1saW5rcyB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZ2FwOiAxNnB4O1xufVxuXG4uY2FydC13cmFwcGVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZ2FwOiA0cHg7XG59XG5cbi5jYXJ0LXdyYXBwZXJfX2ljb24ge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLmNhcnQtd3JhcHBlcl9faXRlbnMtcXVhbnRpdHktd3JhcHBlciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWMtcmVkLTYwKTtcbiAgICBjb2xvcjogdmFyKC0tYy13aGl0ZS0xMCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA2cHggOHB4O1xufVxuXG4udmVydGljYWwtZGl2aWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYy1kYXJrLTgwKTtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgd2lkdGg6IDFweDtcbn1cblxuLm5hdi1saW5rc19fbGluayB7XG4gICAgY29sb3I6IHZhcigtLWMtZGFyay02MCk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IDI1MG1zO1xufVxuXG4ubmF2LWxpbmtzX19saW5rOmhvdmVyIHtcbiAgICBjb2xvcjogdmFyKC0tYy1kYXJrLTEwMCk7XG59Il19 */"] });


/***/ }),

/***/ 5084:
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/not-found-page/not-found-page.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundPageComponent": () => (/* binding */ NotFoundPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../button/button.component */ 42);



class NotFoundPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundPageComponent.ɵfac = function NotFoundPageComponent_Factory(t) { return new (t || NotFoundPageComponent)(); };
NotFoundPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NotFoundPageComponent, selectors: [["app-not-found-page"]], decls: 9, vars: 3, consts: [[1, "error-404"], [1, "error-404__code"], [1, "error-404__description"], [1, "explanation", "text-preset-600"], [3, "label", "routerLink", "type"]], template: function NotFoundPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main")(1, "div", 0)(2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "P\u00E1gina n\u00E3o encontrada");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "O conte\u00FAdo que voc\u00EA tentou acessar n\u00E3o foi encontrado.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "app-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", "Ir para a p\u00E1gina inicial")("routerLink", "")("type", "primary");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _button_button_component__WEBPACK_IMPORTED_MODULE_0__.ButtonComponent], styles: ["[_nghost-%COMP%] {\n    display: contents;\n}\n\nmain[_ngcontent-%COMP%] {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    gap: 56px;\n    height: 100%;\n    justify-content: center;\n    padding: 40px;\n    width: 100%;\n}\n\n.error-404[_ngcontent-%COMP%] {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n}\n\n.error-404[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    color: var(--c-dark-80);\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 700;\n    line-height: 100%;\n}\n\n.error-404__code[_ngcontent-%COMP%] {\n    font-size: 140px;\n}\n\n.error-404__description[_ngcontent-%COMP%] {\n    font-size: 40px;\n}\n\n.explanation[_ngcontent-%COMP%] {\n    color: var(--c-dark-60);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC1mb3VuZC1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0IiLCJmaWxlIjoibm90LWZvdW5kLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBjb250ZW50cztcbn1cblxubWFpbiB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA1NnB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA0MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZXJyb3ItNDA0IHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDE2cHg7XG59XG5cbi5lcnJvci00MDQgPiAqIHtcbiAgICBjb2xvcjogdmFyKC0tYy1kYXJrLTgwKTtcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEwMCU7XG59XG5cbi5lcnJvci00MDRfX2NvZGUge1xuICAgIGZvbnQtc2l6ZTogMTQwcHg7XG59XG5cbi5lcnJvci00MDRfX2Rlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG59XG5cbi5leHBsYW5hdGlvbiB7XG4gICAgY29sb3I6IHZhcigtLWMtZGFyay02MCk7XG59Il19 */"] });


/***/ }),

/***/ 6593:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/small-button/small-button.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SmallButtonComponent": () => (/* binding */ SmallButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class SmallButtonComponent {
    constructor() {
        this.label = "";
    }
}
SmallButtonComponent.ɵfac = function SmallButtonComponent_Factory(t) { return new (t || SmallButtonComponent)(); };
SmallButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SmallButtonComponent, selectors: [["app-small-button"]], inputs: { label: "label" }, decls: 3, vars: 1, consts: [[1, "text-preset-250"]], template: function SmallButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button")(1, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);
    } }, styles: ["[_nghost-%COMP%] {\n    display: contents;\n}\n\nbutton[_ngcontent-%COMP%] {\n    align-items: center;\n    background-color: var(--c-primary-60);\n    border: none;\n    border-radius: 8px;\n    color: var(--c-white-10);\n    cursor: pointer;\n    display: flex;\n    height: 20px;\n    outline: none;\n    padding: 0px 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtYWxsLWJ1dHRvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHFDQUFxQztJQUNyQyxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNtYWxsLWJ1dHRvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xufVxuXG5idXR0b24ge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYy1wcmltYXJ5LTYwKTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGNvbG9yOiB2YXIoLS1jLXdoaXRlLTEwKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwcHggOHB4O1xufSJdfQ== */"] });


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/alert/alert.component */ 8332);
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/button/button.component */ 42);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_default_page_default_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/default-page/default-page.component */ 8014);
/* harmony import */ var _components_field_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/field/field.component */ 6885);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/logo/logo.component */ 8168);
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/modal/modal.component */ 312);
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/nav/nav.component */ 3749);
/* harmony import */ var _components_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/not-found-page/not-found-page.component */ 5084);
/* harmony import */ var _components_small_button_small_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/small-button/small-button.component */ 6593);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);













class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_0__.AlertComponent,
        _components_button_button_component__WEBPACK_IMPORTED_MODULE_1__.ButtonComponent,
        _components_default_page_default_page_component__WEBPACK_IMPORTED_MODULE_2__.DefaultPageComponent,
        _components_field_field_component__WEBPACK_IMPORTED_MODULE_3__.FieldComponent,
        _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_4__.LogoComponent,
        _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__.ModalComponent,
        _components_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_7__.NotFoundPageComponent,
        _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__.NavComponent,
        _components_small_button_small_button_component__WEBPACK_IMPORTED_MODULE_8__.SmallButtonComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule], exports: [_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_0__.AlertComponent,
        _components_button_button_component__WEBPACK_IMPORTED_MODULE_1__.ButtonComponent,
        _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _components_default_page_default_page_component__WEBPACK_IMPORTED_MODULE_2__.DefaultPageComponent,
        _components_field_field_component__WEBPACK_IMPORTED_MODULE_3__.FieldComponent,
        _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_4__.LogoComponent,
        _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__.ModalComponent,
        _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__.NavComponent,
        _components_small_button_small_button_component__WEBPACK_IMPORTED_MODULE_8__.SmallButtonComponent] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    backendUrl: "http://localhost:8080",
    production: false
};
/*
* For easier debugging in development mode, you can import the following file
* to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
*
* This import should be commented out in production mode because it will have a negative impact
* on performance if an error is thrown.
*/
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map