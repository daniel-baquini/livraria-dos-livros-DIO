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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/button/button.component */ 42);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_default_page_default_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/default-page/default-page.component */ 8014);
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/modal/modal.component */ 312);





function BookDetailPageComponent_app_modal_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-modal", 28)(1, "table", 29)(2, "tbody")(3, "tr")(4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "1x sem juros");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "tr")(10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "2x sem juros");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "tr")(16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "3x sem juros");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "tr")(22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "4x sem juros");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](26, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "tr")(28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "5x com juros (2% ao m\u00EAs)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](32, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("closeButtonLabel", "Entendido")("title", "Op\u00E7\u00F5es de parcelamento");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 7, 70));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 9, 35));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](20, 11, 23.34));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](26, 13, 17.5));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](32, 15, 14.28));
} }
class BookDetailPageComponent {
    constructor() {
        this.showInstallmentModal = false;
    }
}
BookDetailPageComponent.ɵfac = function BookDetailPageComponent_Factory(t) { return new (t || BookDetailPageComponent)(); };
BookDetailPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: BookDetailPageComponent, selectors: [["app-book-detail-page"]], decls: 42, vars: 4, consts: [[1, "book-info"], [1, "book-cover"], ["alt", "Capa do livro", "src", "./assets/images/a.png"], [1, "book-data"], [1, "book-data__name-author-and-rate"], [1, "book-data__name-and-author"], [1, "book-data__name", "text-preset-520"], [1, "book-data__author", "text-preset-350"], [1, "book-data__rate"], [1, "rate__stars"], [1, "icon-full-star"], [1, "icon-empty-star"], [1, "rate__quantity"], [1, "book-data__price-and-installment"], [1, "book-data__price", "text-preset-430"], [1, "text-preset-230"], [1, "book-data__installment", "text-preset-350"], [1, "installment__link"], [1, "book-buy-or-add-to-cart"], [3, "label"], [3, "label", "type"], [1, "book-added-to-cart"], [1, "icon-check"], [1, "book-added-to-cart__label"], [1, "book-synopsis"], [1, "book-synopsis__section-title", "text-preset-520"], [1, "book-synopsis__description", "text-preset-450"], [3, "closeButtonLabel", "title", 4, "ngIf"], [3, "closeButtonLabel", "title"], [1, "table"], [1, "price-cell"]], template: function BookDetailPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-default-page")(1, "div", 0)(2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Do Mil ao Milh\u00E3o. Sem Cortar o Cafezinho");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Por: Thiago Nigro");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8)(12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "span", 10)(14, "span", 10)(15, "span", 10)(16, "span", 10)(17, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "(1100)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 13)(21, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "R$ 70");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, ",00");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "ou at\u00E9 4x de R$ 17,50 sem juros - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Ver parcelamento");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "app-button", 19)(31, "app-button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Adicionado ao carrinho");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 24)(37, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Sinopse");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Em seu primeiro livro, Thiago Nigro, criador da plataforma O Primo Rico, ensina aos leitores os tr\u00EAs pilares para atingir a independ\u00EAncia financeira: gastar bem, investir melhor e ganhar mais. Por meio de dados e de sua pr\u00F3pria experi\u00EAncia como investidor e assessor, Nigro mostra que a riqueza \u00E9 poss\u00EDvel para todos \u2013 basta estar disposto a aprender e se dedicar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, BookDetailPageComponent_app_modal_41_Template, 33, 17, "app-modal", 27);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", "Comprar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", "Adicionar ao carrinho")("type", "secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showInstallmentModal);
    } }, dependencies: [_shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_0__.ButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _shared_components_default_page_default_page_component__WEBPACK_IMPORTED_MODULE_1__.DefaultPageComponent, _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_2__.ModalComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CurrencyPipe], styles: ["[_nghost-%COMP%] {\n    display: contents;\n}\n\n.book-info[_ngcontent-%COMP%] {\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n    gap: 40px;\n    max-width: 800px;\n    width: 100%;\n}\n\n.book-cover[_ngcontent-%COMP%] {\n    height: 300px;\n    overflow: hidden;\n    position: relative;\n    width: 192px;\n}\n\n.book-cover[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    left: 50%;\n    max-width: 100%;\n    position: absolute;\n    transform: translate(-50%, -50%);\n    top: 50%;\n}\n\n.book-data[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 24px;\n}\n\n.book-data__name-author-and-rate[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n\n.book-data__name-and-author[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n}\n\n.book-data__name[_ngcontent-%COMP%] {\n    color: var(--c-dark-80);\n}\n\n.book-data__author[_ngcontent-%COMP%] {\n    color: var(--c-dark-60);\n}\n\n.book-data__rate[_ngcontent-%COMP%] {\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n    gap: 4px;\n}\n\n.book-data__price-and-installment[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n}\n\n.book-data__price[_ngcontent-%COMP%] {\n    color: var(--c-dark-80);\n}\n\n.book-data__installment[_ngcontent-%COMP%] {\n    color: var(--c-dark-60);\n}\n\n.installment__link[_ngcontent-%COMP%] {\n    color: var(--c-primary-60);\n    cursor: pointer;\n    transition: 250ms;\n}\n\n.installment__link[_ngcontent-%COMP%]:hover {\n    color: var(--c-primary-80);\n}\n\n.book-buy-or-add-to-cart[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    gap: 8px;\n}\n\n.book-added-to-cart[_ngcontent-%COMP%] {\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n    gap: 8px;\n}\n\n.book-added-to-cart[_ngcontent-%COMP%]    > .icon-check[_ngcontent-%COMP%] {\n    color: var(--c-dark-100);\n    font-size: 16px;\n}\n\n.book-added-to-cart__label[_ngcontent-%COMP%] {\n    color: var(--c-dark-60);\n}\n\n.book-synopsis[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n    max-width: 800px;\n    width: 100%;\n}\n\n.book-synopsis__section-title[_ngcontent-%COMP%] {\n    color: var(--c-dark-80);\n}\n\n.book-synopsis__description[_ngcontent-%COMP%] {\n    color: var(--c-dark-60);\n}\n\n.price-cell[_ngcontent-%COMP%] {\n    text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2stZGV0YWlsLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6ImJvb2stZGV0YWlsLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBjb250ZW50cztcbn1cblxuLmJvb2staW5mbyB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZ2FwOiA0MHB4O1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5ib29rLWNvdmVyIHtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxOTJweDtcbn1cblxuLmJvb2stY292ZXIgPiBpbWcge1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHRvcDogNTAlO1xufVxuXG4uYm9vay1kYXRhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAyNHB4O1xufVxuXG4uYm9vay1kYXRhX19uYW1lLWF1dGhvci1hbmQtcmF0ZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogOHB4O1xufVxuXG4uYm9vay1kYXRhX19uYW1lLWFuZC1hdXRob3Ige1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmJvb2stZGF0YV9fbmFtZSB7XG4gICAgY29sb3I6IHZhcigtLWMtZGFyay04MCk7XG59XG5cbi5ib29rLWRhdGFfX2F1dGhvciB7XG4gICAgY29sb3I6IHZhcigtLWMtZGFyay02MCk7XG59XG5cbi5ib29rLWRhdGFfX3JhdGUge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGdhcDogNHB4O1xufVxuXG4uYm9vay1kYXRhX19wcmljZS1hbmQtaW5zdGFsbG1lbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmJvb2stZGF0YV9fcHJpY2Uge1xuICAgIGNvbG9yOiB2YXIoLS1jLWRhcmstODApO1xufVxuXG4uYm9vay1kYXRhX19pbnN0YWxsbWVudCB7XG4gICAgY29sb3I6IHZhcigtLWMtZGFyay02MCk7XG59XG5cbi5pbnN0YWxsbWVudF9fbGluayB7XG4gICAgY29sb3I6IHZhcigtLWMtcHJpbWFyeS02MCk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IDI1MG1zO1xufVxuXG4uaW5zdGFsbG1lbnRfX2xpbms6aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS1jLXByaW1hcnktODApO1xufVxuXG4uYm9vay1idXktb3ItYWRkLXRvLWNhcnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBnYXA6IDhweDtcbn1cblxuLmJvb2stYWRkZWQtdG8tY2FydCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZ2FwOiA4cHg7XG59XG5cbi5ib29rLWFkZGVkLXRvLWNhcnQgPiAuaWNvbi1jaGVjayB7XG4gICAgY29sb3I6IHZhcigtLWMtZGFyay0xMDApO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmJvb2stYWRkZWQtdG8tY2FydF9fbGFiZWwge1xuICAgIGNvbG9yOiB2YXIoLS1jLWRhcmstNjApO1xufVxuXG4uYm9vay1zeW5vcHNpcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNHB4O1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5ib29rLXN5bm9wc2lzX19zZWN0aW9uLXRpdGxlIHtcbiAgICBjb2xvcjogdmFyKC0tYy1kYXJrLTgwKTtcbn1cblxuLmJvb2stc3lub3BzaXNfX2Rlc2NyaXB0aW9uIHtcbiAgICBjb2xvcjogdmFyKC0tYy1kYXJrLTYwKTtcbn1cblxuLnByaWNlLWNlbGwge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufSJdfQ== */"] });


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