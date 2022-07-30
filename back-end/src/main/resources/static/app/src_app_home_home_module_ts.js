"use strict";
(self["webpackChunkfront_end"] = self["webpackChunkfront_end"] || []).push([["src_app_home_home_module_ts"],{

/***/ 1584:
/*!*************************************************************!*\
  !*** ./src/app/home/book-preview/book-preview.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookPreviewComponent": () => (/* binding */ BookPreviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function BookPreviewComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.book.bookCoverUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.book.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.book.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("R$ ", ctx_r0.priceInReal, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](",", ctx_r0.priceInCentavos, "");
} }
class BookPreviewComponent {
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
}
BookPreviewComponent.ɵfac = function BookPreviewComponent_Factory(t) { return new (t || BookPreviewComponent)(); };
BookPreviewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookPreviewComponent, selectors: [["app-book-preview"]], inputs: { book: "book" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "book-cover"], ["alt", "Capa do livro", 3, "src"], [1, "book-data"], [1, "book-data__name-and-author"], [1, "book-data__name", "text-preset-430"], [1, "book-data__author", "text-preset-350"], [1, "book-data__price", "text-preset-430"], [1, "text-preset-230"]], template: function BookPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BookPreviewComponent_ng_container_0_Template, 13, 5, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.book);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: ["[_nghost-%COMP%] {\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n    gap: 24px;\n}\n\n.book-cover[_ngcontent-%COMP%] {\n    height: 200px;\n    overflow: hidden;\n    position: relative;\n    width: 128px;\n}\n\n.book-cover[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    left: 50%;\n    max-width: 100%;\n    position: absolute;\n    transform: translate(-50%, -50%);\n    top: 50%;\n}\n\n.book-data[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n    width: 172px;\n}\n\n.book-data__name-and-author[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n}\n\n.book-data__name[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    color: var(--c-dark-80);\n    line-clamp: 2;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 2;\n}\n\n.book-data__author[_ngcontent-%COMP%] {\n    color: var(--c-dark-60);\n}\n\n.book-data__price[_ngcontent-%COMP%] {\n    color: var(--c-dark-80);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2stcHJldmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLDRCQUE0QjtJQUM1QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0IiLCJmaWxlIjoiYm9vay1wcmV2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZ2FwOiAyNHB4O1xufVxuXG4uYm9vay1jb3ZlciB7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTI4cHg7XG59XG5cbi5ib29rLWNvdmVyID4gaW1nIHtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB0b3A6IDUwJTtcbn1cblxuLmJvb2stZGF0YSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTZweDtcbiAgICB3aWR0aDogMTcycHg7XG59XG5cbi5ib29rLWRhdGFfX25hbWUtYW5kLWF1dGhvciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNHB4O1xufVxuXG4uYm9vay1kYXRhX19uYW1lIHtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBjb2xvcjogdmFyKC0tYy1kYXJrLTgwKTtcbiAgICBsaW5lLWNsYW1wOiAyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG59XG5cbi5ib29rLWRhdGFfX2F1dGhvciB7XG4gICAgY29sb3I6IHZhcigtLWMtZGFyay02MCk7XG59XG5cbi5ib29rLWRhdGFfX3ByaWNlIHtcbiAgICBjb2xvcjogdmFyKC0tYy1kYXJrLTgwKTtcbn0iXX0= */"] });


/***/ }),

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
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/button/button.component */ 42);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_default_page_default_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/default-page/default-page.component */ 8014);
/* harmony import */ var _shared_components_field_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/field/field.component */ 6885);
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/modal/modal.component */ 312);
/* harmony import */ var _book_preview_book_preview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../book-preview/book-preview.component */ 1584);










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
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("closeButtonLabel", "Entendido")("textContent", "Esse aplicativo \u00E9 uma demo de um e-commerce de livros. Por ser uma demo, as compras n\u00E3o podem ser conclu\u00EDdas, mas, voc\u00EA pode adicionar itens ao carrinho, fornecer um endere\u00E7o de entrega e escolher um m\u00E9todo de pagamento.\n\nOs dados dos livros foram retirados da amazon no dia 28/07/2022")("title", "Boas vindas!");
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
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__.ButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_components_default_page_default_page_component__WEBPACK_IMPORTED_MODULE_3__.DefaultPageComponent, _shared_components_field_field_component__WEBPACK_IMPORTED_MODULE_4__.FieldComponent, _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__.ModalComponent, _book_preview_book_preview_component__WEBPACK_IMPORTED_MODULE_6__.BookPreviewComponent], styles: ["[_nghost-%COMP%] {\n    display: contents;\n}\n\n.search[_ngcontent-%COMP%] {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    gap: 24px;\n    max-width: 720px;\n    width: 100%;\n}\n\n.welcome-message[_ngcontent-%COMP%] {\n    color: var(--c-dark-80);\n}\n\n.search-group[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n}\n\n.books[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    gap: 48px;\n    justify-content: center;\n}\n\napp-book-preview[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFNBQVM7SUFDVCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6ImhvbWUtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xufVxuXG4uc2VhcmNoIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDI0cHg7XG4gICAgbWF4LXdpZHRoOiA3MjBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLndlbGNvbWUtbWVzc2FnZSB7XG4gICAgY29sb3I6IHZhcigtLWMtZGFyay04MCk7XG59XG5cbi5zZWFyY2gtZ3JvdXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmJvb2tzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGdhcDogNDhweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuYXBwLWJvb2stcHJldmlldyB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"] });


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
/* harmony import */ var _book_preview_book_preview_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book-preview/book-preview.component */ 1584);
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page/home-page.component */ 6122);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






const homeRoutes = [
    {
        component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__.HomePageComponent,
        path: ""
    }
];
class HomeModule {
}
HomeModule.ɵfac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(homeRoutes),
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_book_preview_book_preview_component__WEBPACK_IMPORTED_MODULE_0__.BookPreviewComponent,
        _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__.HomePageComponent], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


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


/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map