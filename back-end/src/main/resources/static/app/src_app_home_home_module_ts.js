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


function BookPreviewComponent_ng_container_0_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Fora de estoque");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, BookPreviewComponent_ng_container_0_span_13_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.book.quantity === 0);
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
BookPreviewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookPreviewComponent, selectors: [["app-book-preview"]], inputs: { book: "book" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "book-cover"], ["alt", "Capa do livro", 3, "src"], [1, "book-data"], [1, "book-data__name-and-author"], [1, "book-data__name", "text-preset-430"], [1, "book-data__author", "text-preset-350"], [1, "book-data__price", "text-preset-430"], [1, "text-preset-230"], ["class", "book-data__out-of-stock text-preset-350", 4, "ngIf"], [1, "book-data__out-of-stock", "text-preset-350"]], template: function BookPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BookPreviewComponent_ng_container_0_Template, 14, 6, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.book);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: ["[_nghost-%COMP%] {\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n    gap: 24px;\n}\n\n.book-cover[_ngcontent-%COMP%] {\n    height: 200px;\n    overflow: hidden;\n    position: relative;\n    width: 128px;\n}\n\n.book-cover[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    left: 50%;\n    max-width: 100%;\n    position: absolute;\n    transform: translate(-50%, -50%);\n    top: 50%;\n}\n\n.book-data[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n    width: 172px;\n}\n\n.book-data__name-and-author[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n}\n\n.book-data__name[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    color: var(--c-dark-80);\n    line-clamp: 2;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 2;\n}\n\n.book-data__author[_ngcontent-%COMP%] {\n    color: var(--c-dark-60);\n}\n\n.book-data__price[_ngcontent-%COMP%] {\n    color: var(--c-dark-80);\n}\n\n.book-data__out-of-stock[_ngcontent-%COMP%] {\n    color: var(--c-red-60);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2stcHJldmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLDRCQUE0QjtJQUM1QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUIiLCJmaWxlIjoiYm9vay1wcmV2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZ2FwOiAyNHB4O1xufVxuXG4uYm9vay1jb3ZlciB7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTI4cHg7XG59XG5cbi5ib29rLWNvdmVyID4gaW1nIHtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB0b3A6IDUwJTtcbn1cblxuLmJvb2stZGF0YSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTZweDtcbiAgICB3aWR0aDogMTcycHg7XG59XG5cbi5ib29rLWRhdGFfX25hbWUtYW5kLWF1dGhvciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNHB4O1xufVxuXG4uYm9vay1kYXRhX19uYW1lIHtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBjb2xvcjogdmFyKC0tYy1kYXJrLTgwKTtcbiAgICBsaW5lLWNsYW1wOiAyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG59XG5cbi5ib29rLWRhdGFfX2F1dGhvciB7XG4gICAgY29sb3I6IHZhcigtLWMtZGFyay02MCk7XG59XG5cbi5ib29rLWRhdGFfX3ByaWNlIHtcbiAgICBjb2xvcjogdmFyKC0tYy1kYXJrLTgwKTtcbn1cblxuLmJvb2stZGF0YV9fb3V0LW9mLXN0b2NrIHtcbiAgICBjb2xvcjogdmFyKC0tYy1yZWQtNjApO1xufSJdfQ== */"] });


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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 1989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 8977);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_backend_book_book_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/backend/book/book.service */ 2649);
/* harmony import */ var src_app_shared_services_user_preferences_user_preferences_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/user-preferences/user-preferences.service */ 4685);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_default_page_default_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/default-page/default-page.component */ 8014);
/* harmony import */ var _shared_components_field_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/field/field.component */ 6885);
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/modal/modal.component */ 312);
/* harmony import */ var _book_preview_book_preview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../book-preview/book-preview.component */ 1584);










function HomePageComponent_app_book_preview_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-book-preview", 8);
} if (rf & 2) {
    const book_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("book", book_r3)("routerLink", "/book/" + book_r3.id);
} }
function HomePageComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HomePageComponent_span_8_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r4.loadMore()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Carregar mais");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function HomePageComponent_app_modal_9_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-modal", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("closeButtonClick", function HomePageComponent_app_modal_9_Template_app_modal_closeButtonClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r6.closeButtonClick()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("closeButtonLabel", "Entendido")("textContent", "Esse aplicativo \u00E9 uma demo de um e-commerce de livros. Por ser uma demo, as compras n\u00E3o podem ser conclu\u00EDdas, mas, voc\u00EA pode adicionar itens ao carrinho, fornecer um endere\u00E7o de entrega e escolher um m\u00E9todo de pagamento.\n\nOs dados dos livros foram retirados da amazon no dia 28/07/2022")("title", "Boas vindas!");
} }
class HomePageComponent {
    constructor(bookService, userPreferencesService) {
        this.bookService = bookService;
        this.userPreferencesService = userPreferencesService;
        this.books = [];
        this.canLoadMore = false;
        this._pageSize = 6;
        this.loadMore();
    }
    get showWelcomeModal() {
        return this.userPreferencesService.userPreferences.showWelcomeModal;
    }
    closeButtonClick() {
        this.userPreferencesService.setProperty("showWelcomeModal", false);
    }
    loadMore() {
        this.bookService.readAll(this.books.length / this._pageSize).subscribe(x => {
            if (x !== undefined) {
                this.books.push(...x);
                this.canLoadMore = x.length === 6;
            }
        });
    }
    onSearch(event) {
        const value = event.target.value;
        if (value.length < 2) {
            this.filteredBooks = undefined;
            return;
        }
        (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(value).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(250), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.switchMap)(searchTerm => this.bookService.filter(searchTerm))).subscribe(x => {
            this.filteredBooks = x;
        });
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_backend_book_book_service__WEBPACK_IMPORTED_MODULE_0__.BookService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_user_preferences_user_preferences_service__WEBPACK_IMPORTED_MODULE_1__.UserPreferencesService)); };
HomePageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 10, vars: 3, consts: [[1, "search"], [1, "text-preset-650", "welcome-message"], [1, "search-group"], [3, "onFieldInput"], [1, "books"], [3, "book", "routerLink", 4, "ngFor", "ngForOf"], ["class", "load-more text-preset-460", 3, "click", 4, "ngIf"], [3, "closeButtonLabel", "textContent", "title", "closeButtonClick", 4, "ngIf"], [3, "book", "routerLink"], [1, "load-more", "text-preset-460", 3, "click"], [3, "closeButtonLabel", "textContent", "title", "closeButtonClick"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-default-page")(1, "div", 0)(2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Boas-vindas! Fa\u00E7a a busca pelo nome do livro ou autor(a)");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 2)(5, "app-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onFieldInput", function HomePageComponent_Template_app_field_onFieldInput_5_listener($event) { return ctx.onSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, HomePageComponent_app_book_preview_7_Template, 1, 2, "app-book-preview", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, HomePageComponent_span_8_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, HomePageComponent_app_modal_9_Template, 1, 3, "app-modal", 7);
    } if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", (tmp_0_0 = ctx.filteredBooks) !== null && tmp_0_0 !== undefined ? tmp_0_0 : ctx.books);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.canLoadMore && ctx.filteredBooks === undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showWelcomeModal);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _shared_components_default_page_default_page_component__WEBPACK_IMPORTED_MODULE_2__.DefaultPageComponent, _shared_components_field_field_component__WEBPACK_IMPORTED_MODULE_3__.FieldComponent, _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__.ModalComponent, _book_preview_book_preview_component__WEBPACK_IMPORTED_MODULE_5__.BookPreviewComponent], styles: ["[_nghost-%COMP%] {\n    display: contents;\n}\n\n.search[_ngcontent-%COMP%] {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    gap: 24px;\n    max-width: 720px;\n    width: 100%;\n}\n\n.welcome-message[_ngcontent-%COMP%] {\n    color: var(--c-dark-80);\n}\n\n.search-group[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n}\n\n.books[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    gap: 48px;\n    justify-content: center;\n}\n\napp-book-preview[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n\n.load-more[_ngcontent-%COMP%] {\n    color: var(--c-dark-80);\n    cursor: pointer;\n    transition: 250ms;\n}\n\n.load-more[_ngcontent-%COMP%]:hover {\n    color: var(--c-dark-100);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFNBQVM7SUFDVCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUIiLCJmaWxlIjoiaG9tZS1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogY29udGVudHM7XG59XG5cbi5zZWFyY2gge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMjRweDtcbiAgICBtYXgtd2lkdGg6IDcyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ud2VsY29tZS1tZXNzYWdlIHtcbiAgICBjb2xvcjogdmFyKC0tYy1kYXJrLTgwKTtcbn1cblxuLnNlYXJjaC1ncm91cCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uYm9va3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZ2FwOiA0OHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5hcHAtYm9vay1wcmV2aWV3IHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5sb2FkLW1vcmUge1xuICAgIGNvbG9yOiB2YXIoLS1jLWRhcmstODApO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAyNTBtcztcbn1cblxuLmxvYWQtbW9yZTpob3ZlciB7XG4gICAgY29sb3I6IHZhcigtLWMtZGFyay0xMDApO1xufSJdfQ== */"] });


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


/***/ }),

/***/ 1989:
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/debounceTime.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "debounceTime": () => (/* binding */ debounceTime)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 6936);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lift */ 1944);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperatorSubscriber */ 3945);



function debounceTime(dueTime, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)((source, subscriber) => {
    let activeTask = null;
    let lastValue = null;
    let lastTime = null;

    const emit = () => {
      if (activeTask) {
        activeTask.unsubscribe();
        activeTask = null;
        const value = lastValue;
        lastValue = null;
        subscriber.next(value);
      }
    };

    function emitWhenIdle() {
      const targetTime = lastTime + dueTime;
      const now = scheduler.now();

      if (now < targetTime) {
        activeTask = this.schedule(undefined, targetTime - now);
        subscriber.add(activeTask);
        return;
      }

      emit();
    }

    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, value => {
      lastValue = value;
      lastTime = scheduler.now();

      if (!activeTask) {
        activeTask = scheduler.schedule(emitWhenIdle, dueTime);
        subscriber.add(activeTask);
      }
    }, () => {
      emit();
      subscriber.complete();
    }, undefined, () => {
      lastValue = activeTask = null;
    }));
  });
}

/***/ }),

/***/ 8977:
/*!*******************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/distinctUntilChanged.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "distinctUntilChanged": () => (/* binding */ distinctUntilChanged)
/* harmony export */ });
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/identity */ 9173);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lift */ 1944);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperatorSubscriber */ 3945);



function distinctUntilChanged(comparator, keySelector = _util_identity__WEBPACK_IMPORTED_MODULE_0__.identity) {
  comparator = comparator !== null && comparator !== void 0 ? comparator : defaultCompare;
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)((source, subscriber) => {
    let previousKey;
    let first = true;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, value => {
      const currentKey = keySelector(value);

      if (first || !comparator(previousKey, currentKey)) {
        first = false;
        previousKey = currentKey;
        subscriber.next(value);
      }
    }));
  });
}

function defaultCompare(a, b) {
  return a === b;
}

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map