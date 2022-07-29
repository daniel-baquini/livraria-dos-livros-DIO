"use strict";
(self["webpackChunkfront_end"] = self["webpackChunkfront_end"] || []).push([["src_app_cart_cart_module_ts"],{

/***/ 3108:
/*!*******************************************************!*\
  !*** ./src/app/cart/cart-item/cart-item.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartItemComponent": () => (/* binding */ CartItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _cart_management_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cart-management.service */ 5971);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_small_button_small_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/small-button/small-button.component */ 6593);




function CartItemComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CartItemComponent_ng_container_0_Template_span_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.deleteItem()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Remover item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 9)(13, "app-small-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CartItemComponent_ng_container_0_Template_app_small_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.decrementItem()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "app-small-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CartItemComponent_ng_container_0_Template_app_small_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.incrementItem()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r0.cartItem.book.bookCoverUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.cartItem.book.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.cartItem.book.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.cartItem.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("R$ ", ctx_r0.priceInReal, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](",", ctx_r0.priceInCentavos, "");
} }
class CartItemComponent {
    constructor(cartManagementService) {
        this.cartManagementService = cartManagementService;
    }
    get priceInCentavos() {
        if (!this.cartItem)
            return "";
        return `${Math.floor((this.cartItem.totalPrice - Math.floor(this.cartItem.totalPrice)) * 100)}`.padEnd(2, "0");
    }
    get priceInReal() {
        if (!this.cartItem)
            return 0;
        return Math.floor(this.cartItem.totalPrice);
    }
    decrementItem() {
        this.cartManagementService.decrementItem(this.cartItem.book.id);
    }
    deleteItem() {
        this.cartManagementService.deleteItem(this.cartItem.book.id);
    }
    incrementItem() {
        this.cartManagementService.incrementItem(this.cartItem.book.id);
    }
}
CartItemComponent.ɵfac = function CartItemComponent_Factory(t) { return new (t || CartItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_cart_management_service__WEBPACK_IMPORTED_MODULE_0__.CartManagementService)); };
CartItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CartItemComponent, selectors: [["app-cart-item"]], inputs: { cartItem: "cartItem" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "book-cover"], ["alt", "Capa do livro", 3, "src"], [1, "book-data"], [1, "book-data__name-author-and-remove-item"], [1, "book-data__name-and-author"], [1, "book-data__name", "text-preset-430"], [1, "book-data__author", "text-preset-350"], [1, "book-data__remove-item", "text-preset-350", 3, "click"], [1, "book-data__quantity"], [3, "label", "click"], [1, "quantity__label", "text-preset-420"], [1, "book-data__price", "text-preset-430"], [1, "text-preset-230"]], template: function CartItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CartItemComponent_ng_container_0_Template, 21, 8, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.cartItem);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _shared_components_small_button_small_button_component__WEBPACK_IMPORTED_MODULE_1__.SmallButtonComponent], styles: ["[_nghost-%COMP%] {\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n    gap: 24px;\n}\n\n.book-cover[_ngcontent-%COMP%] {\n    height: 200px;\n    overflow: hidden;\n    position: relative;\n    width: 128px;\n}\n\n.book-cover[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    left: 50%;\n    max-width: 100%;\n    position: absolute;\n    transform: translate(-50%, -50%);\n    top: 50%;\n}\n\n.book-data[_ngcontent-%COMP%] {\n    align-items: center;\n    display: flex;\n    flex: 1;\n    flex-direction: row;\n    gap: 64px;\n}\n\n.book-data__name-author-and-remove-item[_ngcontent-%COMP%] {\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    gap: 24px;\n}\n\n.book-data__name-and-author[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n}\n\n.book-data__name[_ngcontent-%COMP%] {\n    color: var(--c-dark-80);\n}\n\n.book-data__author[_ngcontent-%COMP%] {\n    color: var(--c-dark-60);\n}\n\n.book-data__remove-item[_ngcontent-%COMP%] {\n    color: var(--c-primary-60);\n    cursor: pointer;\n}\n\n.book-data__quantity[_ngcontent-%COMP%] {\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n    gap: 8px;\n}\n\n.quantity__label[_ngcontent-%COMP%] {\n    color: var(--c-dark-80);\n}\n\n.book-data__price[_ngcontent-%COMP%] {\n    color: var(--c-dark-80);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLE9BQU87SUFDUCxtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLE9BQU87SUFDUCxzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCIiwiZmlsZSI6ImNhcnQtaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGdhcDogMjRweDtcbn1cblxuLmJvb2stY292ZXIge1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEyOHB4O1xufVxuXG4uYm9vay1jb3ZlciA+IGltZyB7XG4gICAgbGVmdDogNTAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdG9wOiA1MCU7XG59XG5cbi5ib29rLWRhdGEge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZ2FwOiA2NHB4O1xufVxuXG4uYm9vay1kYXRhX19uYW1lLWF1dGhvci1hbmQtcmVtb3ZlLWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMjRweDtcbn1cblxuLmJvb2stZGF0YV9fbmFtZS1hbmQtYXV0aG9yIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5ib29rLWRhdGFfX25hbWUge1xuICAgIGNvbG9yOiB2YXIoLS1jLWRhcmstODApO1xufVxuXG4uYm9vay1kYXRhX19hdXRob3Ige1xuICAgIGNvbG9yOiB2YXIoLS1jLWRhcmstNjApO1xufVxuXG4uYm9vay1kYXRhX19yZW1vdmUtaXRlbSB7XG4gICAgY29sb3I6IHZhcigtLWMtcHJpbWFyeS02MCk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYm9vay1kYXRhX19xdWFudGl0eSB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZ2FwOiA4cHg7XG59XG5cbi5xdWFudGl0eV9fbGFiZWwge1xuICAgIGNvbG9yOiB2YXIoLS1jLWRhcmstODApO1xufVxuXG4uYm9vay1kYXRhX19wcmljZSB7XG4gICAgY29sb3I6IHZhcigtLWMtZGFyay04MCk7XG59Il19 */"] });


/***/ }),

/***/ 7350:
/*!*******************************************************!*\
  !*** ./src/app/cart/cart-page/cart-page.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartPageComponent": () => (/* binding */ CartPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _cart_management_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cart-management.service */ 5971);
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/button/button.component */ 42);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_default_page_default_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/default-page/default-page.component */ 8014);
/* harmony import */ var _cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart-item/cart-item.component */ 3108);






function CartPageComponent_ng_container_3_app_cart_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-cart-item", 7);
} if (rf & 2) {
    const cartItem_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("cartItem", cartItem_r3);
} }
function CartPageComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, CartPageComponent_ng_container_3_app_cart_item_2_Template, 1, 1, "app-cart-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "app-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.cart);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("label", "Fechar pedido")("type", "primary");
} }
function CartPageComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Nenhum item no carrinho");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class CartPageComponent {
    constructor(cartManagementService) {
        this.cartManagementService = cartManagementService;
    }
    get cart() {
        return this.cartManagementService.cart;
    }
}
CartPageComponent.ɵfac = function CartPageComponent_Factory(t) { return new (t || CartPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_cart_management_service__WEBPACK_IMPORTED_MODULE_0__.CartManagementService)); };
CartPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CartPageComponent, selectors: [["app-cart-page"]], decls: 5, vars: 2, consts: [[1, "page-title", "text-preset-650"], [4, "ngIf"], ["class", "empty-cart-label text-preset-450", 4, "ngIf"], [1, "items"], [3, "cartItem", 4, "ngFor", "ngForOf"], [1, "buttons-row"], [3, "label", "type"], [3, "cartItem"], [1, "empty-cart-label", "text-preset-450"]], template: function CartPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-default-page")(1, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Seu carrinho");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, CartPageComponent_ng_container_3_Template, 5, 3, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, CartPageComponent_span_4_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.cart.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.cart.length === 0);
    } }, dependencies: [_shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_1__.ButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _shared_components_default_page_default_page_component__WEBPACK_IMPORTED_MODULE_2__.DefaultPageComponent, _cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_3__.CartItemComponent], styles: ["[_nghost-%COMP%] {\n    display: contents;\n}\n\n.page-title[_ngcontent-%COMP%] {\n    color: var(--c-dark-80);\n}\n\n.items[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n    max-width: 800px;\n    width: 100%;\n}\n\n.items[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.buttons-row[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n    max-width: 800px;\n    width: 100%;\n}\n\n.empty-cart-label[_ngcontent-%COMP%] {\n    color: var(--c-dark-80);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0IiLCJmaWxlIjoiY2FydC1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogY29udGVudHM7XG59XG5cbi5wYWdlLXRpdGxlIHtcbiAgICBjb2xvcjogdmFyKC0tYy1kYXJrLTgwKTtcbn1cblxuLml0ZW1zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxNnB4O1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5pdGVtcyA+ICoge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uYnV0dG9ucy1yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5lbXB0eS1jYXJ0LWxhYmVsIHtcbiAgICBjb2xvcjogdmFyKC0tYy1kYXJrLTgwKTtcbn0iXX0= */"] });


/***/ }),

/***/ 2943:
/*!*************************************!*\
  !*** ./src/app/cart/cart.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartModule": () => (/* binding */ CartModule)
/* harmony export */ });
/* harmony import */ var _cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart-item/cart-item.component */ 3108);
/* harmony import */ var _cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart-page/cart-page.component */ 7350);
/* harmony import */ var _delivery_address_page_delivery_address_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delivery-address-page/delivery-address-page.component */ 9891);
/* harmony import */ var _payment_method_page_payment_method_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment-method-page/payment-method-page.component */ 594);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);








const cartRoutes = [
    {
        component: _cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_1__.CartPageComponent,
        path: ""
    },
    {
        component: _delivery_address_page_delivery_address_page_component__WEBPACK_IMPORTED_MODULE_2__.DeliveryAddressPageComponent,
        path: "delivery-address"
    },
    {
        component: _payment_method_page_payment_method_page_component__WEBPACK_IMPORTED_MODULE_3__.PaymentMethodPageComponent,
        path: "payment-method"
    }
];
class CartModule {
}
CartModule.ɵfac = function CartModule_Factory(t) { return new (t || CartModule)(); };
CartModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: CartModule });
CartModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(cartRoutes),
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](CartModule, { declarations: [_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_0__.CartItemComponent,
        _cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_1__.CartPageComponent,
        _delivery_address_page_delivery_address_page_component__WEBPACK_IMPORTED_MODULE_2__.DeliveryAddressPageComponent,
        _payment_method_page_payment_method_page_component__WEBPACK_IMPORTED_MODULE_3__.PaymentMethodPageComponent], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule] }); })();


/***/ }),

/***/ 9891:
/*!*******************************************************************************!*\
  !*** ./src/app/cart/delivery-address-page/delivery-address-page.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeliveryAddressPageComponent": () => (/* binding */ DeliveryAddressPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/button/button.component */ 42);
/* harmony import */ var _shared_components_default_page_default_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/default-page/default-page.component */ 8014);
/* harmony import */ var _shared_components_field_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/field/field.component */ 6885);




class DeliveryAddressPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
DeliveryAddressPageComponent.ɵfac = function DeliveryAddressPageComponent_Factory(t) { return new (t || DeliveryAddressPageComponent)(); };
DeliveryAddressPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DeliveryAddressPageComponent, selectors: [["app-delivery-address-page"]], decls: 21, vars: 11, consts: [[1, "page-title", "text-preset-650"], [1, "grid", 3, "noValidate"], [1, "col-2"], [3, "label"], [1, "col-6"], [1, "col-4"], [1, "col-8"], [1, "buttons-row"], [3, "label", "type"]], template: function DeliveryAddressPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-default-page")(1, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Seu carrinho");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "form", 1)(4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "app-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "app-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "app-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "app-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "app-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "app-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "app-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "app-button", 8)(20, "app-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", "CPF (Opcional)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", "Logradouro");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", "N\u00FAmero");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", "Bairro");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", "Cidade");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", "Estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", "Complemento (Opcional)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", "Voltar")("type", "secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", "Forma de pagamento")("type", "primary");
    } }, dependencies: [_shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_0__.ButtonComponent, _shared_components_default_page_default_page_component__WEBPACK_IMPORTED_MODULE_1__.DefaultPageComponent, _shared_components_field_field_component__WEBPACK_IMPORTED_MODULE_2__.FieldComponent], styles: ["[_nghost-%COMP%] {\n    display: contents;\n}\n\n.page-title[_ngcontent-%COMP%] {\n    color: var(--c-dark-80);\n}\n\nform[_ngcontent-%COMP%] {\n    flex: 1;\n    max-width: 800px;\n    width: 100%;\n}\n\n.buttons-row[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    gap: 8px;\n    justify-content: flex-end;\n    max-width: 800px;\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGl2ZXJ5LWFkZHJlc3MtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksT0FBTztJQUNQLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZiIsImZpbGUiOiJkZWxpdmVyeS1hZGRyZXNzLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBjb250ZW50cztcbn1cblxuLnBhZ2UtdGl0bGUge1xuICAgIGNvbG9yOiB2YXIoLS1jLWRhcmstODApO1xufVxuXG5mb3JtIHtcbiAgICBmbGV4OiAxO1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5idXR0b25zLXJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGdhcDogOHB4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbn0iXX0= */"] });


/***/ }),

/***/ 594:
/*!***************************************************************************!*\
  !*** ./src/app/cart/payment-method-page/payment-method-page.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentMethodPageComponent": () => (/* binding */ PaymentMethodPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/alert/alert.component */ 8332);
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/button/button.component */ 42);
/* harmony import */ var _shared_components_default_page_default_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/default-page/default-page.component */ 8014);
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/modal/modal.component */ 312);





class PaymentMethodPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
PaymentMethodPageComponent.ɵfac = function PaymentMethodPageComponent_Factory(t) { return new (t || PaymentMethodPageComponent)(); };
PaymentMethodPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: PaymentMethodPageComponent, selectors: [["app-payment-method-page"]], decls: 17, vars: 10, consts: [[1, "page-title", "text-preset-650"], [3, "canClose", "message", "type"], [1, "payment-options"], [1, "payment-options__option", "text-preset-450"], [1, "payment-options__option", "payment-options__option--active", "text-preset-450"], [1, "buttons-row"], [3, "label", "type"], [3, "closeButtonLabel", "textContent", "title"]], template: function PaymentMethodPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-default-page")(1, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Forma de pagamento");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-alert", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 2)(5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Boleto");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Cart\u00E3o de cr\u00E9dito");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Paypal");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Pix");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "app-button", 6)(15, "app-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "app-modal", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("canClose", false)("message", "Por ser uma demo, nenhum dado ser\u00E1 exigido nesta etapa, basta selecionar o m\u00E9todo de pagamento e finalizar a compra.")("type", "warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("label", "Voltar")("type", "secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("label", "Finalizar pedido")("type", "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("closeButtonLabel", "Ir para p\u00E1gina inicial")("textContent", "Este aplicativo foi criado apenas como demonstra\u00E7\u00E3o de como eu desenvolvo uma aplica\u00E7\u00E3o utilizando o Angular no front-end e Java no back-end. O objetivo n\u00E3o \u00E9 fazer uma compra real, apenas demonstrar funcionalidades no aplicativo.")("title", "Fim da demo");
    } }, dependencies: [_shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_0__.AlertComponent, _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_1__.ButtonComponent, _shared_components_default_page_default_page_component__WEBPACK_IMPORTED_MODULE_2__.DefaultPageComponent, _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__.ModalComponent], styles: ["[_nghost-%COMP%] {\n    display: contents;\n}\n\napp-alert[_ngcontent-%COMP%], .payment-options[_ngcontent-%COMP%], .buttons-row[_ngcontent-%COMP%] {\n    max-width: 800px;\n    width: 100%;\n}\n\n.payment-options[_ngcontent-%COMP%] {\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    gap: 16px;\n}\n\n.payment-options__option[_ngcontent-%COMP%] {\n    background-color: var(--c-white-30);\n    border-radius: 4px;\n    color: var(--c-dark-80);\n    cursor: pointer;\n    padding: 20px 12px;\n    width: 100%;\n}\n\n.payment-options__option--active[_ngcontent-%COMP%] {\n    background-color: transparent;\n    border: 1px solid var(--c-primary-60);\n}\n\n.buttons-row[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    gap: 8px;\n    justify-content: flex-end;\n    max-width: 800px;\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQtbWV0aG9kLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsT0FBTztJQUNQLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZiIsImZpbGUiOiJwYXltZW50LW1ldGhvZC1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogY29udGVudHM7XG59XG5cbmFwcC1hbGVydCwgLnBheW1lbnQtb3B0aW9ucywgLmJ1dHRvbnMtcm93IHtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ucGF5bWVudC1vcHRpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6IDE7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDE2cHg7XG59XG5cbi5wYXltZW50LW9wdGlvbnNfX29wdGlvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYy13aGl0ZS0zMCk7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGNvbG9yOiB2YXIoLS1jLWRhcmstODApO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiAyMHB4IDEycHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5wYXltZW50LW9wdGlvbnNfX29wdGlvbi0tYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jLXByaW1hcnktNjApO1xufVxuXG4uYnV0dG9ucy1yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBnYXA6IDhweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59Il19 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_cart_cart_module_ts.js.map