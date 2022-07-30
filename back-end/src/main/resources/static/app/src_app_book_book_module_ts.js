"use strict";
(self["webpackChunkfront_end"] = self["webpackChunkfront_end"] || []).push([["src_app_book_book_module_ts"],{

/***/ 2006:
/*!*********************************************************************!*\
  !*** ./src/app/book/book-detail-page/book-detail-page.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookDetailPageComponent": () => (/* binding */ BookDetailPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_shared_backend_book_book_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/backend/book/book.service */ 2649);
/* harmony import */ var src_app_cart_cart_management_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cart/cart-management.service */ 5971);
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/button/button.component */ 42);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_default_page_default_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/default-page/default-page.component */ 8014);







function BookDetailPageComponent_ng_container_1_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17)(1, "app-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("btnClick", function BookDetailPageComponent_ng_container_1_div_15_Template_app_button_btnClick_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.buyNow()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "app-button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("btnClick", function BookDetailPageComponent_ng_container_1_div_15_Template_app_button_btnClick_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.addToCart()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("label", "Comprar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("label", "Adicionar ao carrinho")("type", "secondary");
} }
function BookDetailPageComponent_ng_container_1_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Adicionado ao carrinho");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function BookDetailPageComponent_ng_container_1_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Fora de estoque");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function BookDetailPageComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1)(2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, BookDetailPageComponent_ng_container_1_div_15_Template, 3, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, BookDetailPageComponent_ng_container_1_div_16_Template, 4, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, BookDetailPageComponent_ng_container_1_span_17_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 14)(19, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Sinopse");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r0.book.bookCoverUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.book.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Por: ", ctx_r0.book.author, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("R$ ", ctx_r0.priceInReal, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](",", ctx_r0.priceInCentavos, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.isItemOnCart && ctx_r0.book.quantity > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.isItemOnCart && ctx_r0.book.quantity > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.book.quantity === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.book.description);
} }
class BookDetailPageComponent {
    constructor(activatedRoute, bookService, cartManagementService, router) {
        this.activatedRoute = activatedRoute;
        this.cartManagementService = cartManagementService;
        this.router = router;
        const routeId = activatedRoute.snapshot.params["id"];
        if (routeId === undefined) {
            this.router.navigateByUrl("/");
        }
        bookService.read(routeId).subscribe(x => {
            this.book = x;
        });
    }
    get isItemOnCart() {
        return this.cartManagementService.isOnCart(parseInt(this.activatedRoute.snapshot.params['id']));
    }
    get priceInCentavos() {
        if (!this.book)
            return "";
        return `${Math.floor((this.book.price - Math.floor(this.book.price)) * 100)}`.padEnd(2, "0");
    }
    get priceInReal() {
        if (!this.book)
            return 0;
        return Math.floor(this.book.price);
    }
    addToCart() {
        // This function is called only from a element that will be rendered when this.book !== undefined,
        // so, we can use the "!".
        this.cartManagementService.addItem(this.book);
    }
    buyNow() {
        this.addToCart();
        this.router.navigateByUrl("/cart");
    }
}
BookDetailPageComponent.ɵfac = function BookDetailPageComponent_Factory(t) { return new (t || BookDetailPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_backend_book_book_service__WEBPACK_IMPORTED_MODULE_0__.BookService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_cart_cart_management_service__WEBPACK_IMPORTED_MODULE_1__.CartManagementService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
BookDetailPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: BookDetailPageComponent, selectors: [["app-book-detail-page"]], decls: 2, vars: 1, consts: [[4, "ngIf"], [1, "book-info"], [1, "book-cover"], ["alt", "Capa do livro", 3, "src"], [1, "book-data"], [1, "book-data__name-author-and-rate"], [1, "book-data__name-and-author"], [1, "book-data__name", "text-preset-520"], [1, "book-data__author", "text-preset-350"], [1, "book-data__price", "text-preset-430"], [1, "text-preset-230"], ["class", "book-buy-or-add-to-cart", 4, "ngIf"], ["class", "book-added-to-cart", 4, "ngIf"], ["class", "book-data__out-of-stock text-preset-350", 4, "ngIf"], [1, "book-synopsis"], [1, "book-synopsis__section-title", "text-preset-520"], [1, "book-synopsis__description", "text-preset-450"], [1, "book-buy-or-add-to-cart"], [3, "label", "btnClick"], [3, "label", "type", "btnClick"], [1, "book-added-to-cart"], [1, "icon-check"], [1, "book-added-to-cart__label"], [1, "book-data__out-of-stock", "text-preset-350"]], template: function BookDetailPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-default-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, BookDetailPageComponent_ng_container_1_Template, 23, 9, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.book);
    } }, dependencies: [_shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__.ButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _shared_components_default_page_default_page_component__WEBPACK_IMPORTED_MODULE_3__.DefaultPageComponent], styles: ["[_nghost-%COMP%] {\n    display: contents;\n}\n\n.book-info[_ngcontent-%COMP%] {\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n    gap: 40px;\n    max-width: 800px;\n    width: 100%;\n}\n\n.book-cover[_ngcontent-%COMP%] {\n    height: 300px;\n    overflow: hidden;\n    position: relative;\n    width: 192px;\n}\n\n.book-cover[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    left: 50%;\n    max-width: 100%;\n    position: absolute;\n    transform: translate(-50%, -50%);\n    top: 50%;\n}\n\n.book-data[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 24px;\n}\n\n.book-data__name-author-and-rate[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n\n.book-data__name-and-author[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n}\n\n.book-data__name[_ngcontent-%COMP%] {\n    color: var(--c-dark-80);\n}\n\n.book-data__author[_ngcontent-%COMP%] {\n    color: var(--c-dark-60);\n}\n\n.book-data__price[_ngcontent-%COMP%] {\n    color: var(--c-dark-80);\n}\n\n.book-buy-or-add-to-cart[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    gap: 8px;\n}\n\n.book-added-to-cart[_ngcontent-%COMP%] {\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n    gap: 8px;\n}\n\n.book-added-to-cart[_ngcontent-%COMP%]    > .icon-check[_ngcontent-%COMP%] {\n    color: var(--c-dark-100);\n    font-size: 16px;\n}\n\n.book-added-to-cart__label[_ngcontent-%COMP%] {\n    color: var(--c-dark-60);\n}\n\n.book-data__out-of-stock[_ngcontent-%COMP%] {\n    color: var(--c-red-60);\n}\n\n.book-synopsis[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n    max-width: 800px;\n    width: 100%;\n    white-space:pre-wrap;\n}\n\n.book-synopsis__section-title[_ngcontent-%COMP%] {\n    color: var(--c-dark-80);\n}\n\n.book-synopsis__description[_ngcontent-%COMP%] {\n    color: var(--c-dark-60);\n}\n\n.price-cell[_ngcontent-%COMP%] {\n    text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2stZGV0YWlsLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJib29rLWRldGFpbC1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogY29udGVudHM7XG59XG5cbi5ib29rLWluZm8ge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGdhcDogNDBweDtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uYm9vay1jb3ZlciB7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTkycHg7XG59XG5cbi5ib29rLWNvdmVyID4gaW1nIHtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB0b3A6IDUwJTtcbn1cblxuLmJvb2stZGF0YSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMjRweDtcbn1cblxuLmJvb2stZGF0YV9fbmFtZS1hdXRob3ItYW5kLXJhdGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDhweDtcbn1cblxuLmJvb2stZGF0YV9fbmFtZS1hbmQtYXV0aG9yIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5ib29rLWRhdGFfX25hbWUge1xuICAgIGNvbG9yOiB2YXIoLS1jLWRhcmstODApO1xufVxuXG4uYm9vay1kYXRhX19hdXRob3Ige1xuICAgIGNvbG9yOiB2YXIoLS1jLWRhcmstNjApO1xufVxuXG4uYm9vay1kYXRhX19wcmljZSB7XG4gICAgY29sb3I6IHZhcigtLWMtZGFyay04MCk7XG59XG5cbi5ib29rLWJ1eS1vci1hZGQtdG8tY2FydCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGdhcDogOHB4O1xufVxuXG4uYm9vay1hZGRlZC10by1jYXJ0IHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBnYXA6IDhweDtcbn1cblxuLmJvb2stYWRkZWQtdG8tY2FydCA+IC5pY29uLWNoZWNrIHtcbiAgICBjb2xvcjogdmFyKC0tYy1kYXJrLTEwMCk7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uYm9vay1hZGRlZC10by1jYXJ0X19sYWJlbCB7XG4gICAgY29sb3I6IHZhcigtLWMtZGFyay02MCk7XG59XG5cbi5ib29rLWRhdGFfX291dC1vZi1zdG9jayB7XG4gICAgY29sb3I6IHZhcigtLWMtcmVkLTYwKTtcbn1cblxuLmJvb2stc3lub3BzaXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDRweDtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHdoaXRlLXNwYWNlOnByZS13cmFwO1xufVxuXG4uYm9vay1zeW5vcHNpc19fc2VjdGlvbi10aXRsZSB7XG4gICAgY29sb3I6IHZhcigtLWMtZGFyay04MCk7XG59XG5cbi5ib29rLXN5bm9wc2lzX19kZXNjcmlwdGlvbiB7XG4gICAgY29sb3I6IHZhcigtLWMtZGFyay02MCk7XG59XG5cbi5wcmljZS1jZWxsIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn0iXX0= */"] });


/***/ }),

/***/ 3265:
/*!*************************************!*\
  !*** ./src/app/book/book.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookModule": () => (/* binding */ BookModule)
/* harmony export */ });
/* harmony import */ var _book_detail_page_book_detail_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book-detail-page/book-detail-page.component */ 2006);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const bookRoutes = [
    {
        component: _book_detail_page_book_detail_page_component__WEBPACK_IMPORTED_MODULE_0__.BookDetailPageComponent,
        path: ":id"
    }
];
class BookModule {
}
BookModule.ɵfac = function BookModule_Factory(t) { return new (t || BookModule)(); };
BookModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: BookModule });
BookModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(bookRoutes),
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](BookModule, { declarations: [_book_detail_page_book_detail_page_component__WEBPACK_IMPORTED_MODULE_0__.BookDetailPageComponent], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_book_book_module_ts.js.map