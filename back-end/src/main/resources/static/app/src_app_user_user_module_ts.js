"use strict";
(self["webpackChunkfront_end"] = self["webpackChunkfront_end"] || []).push([["src_app_user_user_module_ts"],{

/***/ 8718:
/*!***************************************************************************!*\
  !*** ./src/app/user/create-account-page/create-account-page.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateAccountPageComponent": () => (/* binding */ CreateAccountPageComponent)
/* harmony export */ });
/* harmony import */ var _create_account_page_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-account-page.validator */ 8019);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_shared_backend_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/backend/user/user.service */ 4150);
/* harmony import */ var _shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/alert/alert.component */ 8332);
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/button/button.component */ 42);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_field_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/field/field.component */ 6885);
/* harmony import */ var _shared_components_logo_logo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/logo/logo.component */ 8168);











function CreateAccountPageComponent_app_alert_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-alert", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("close", function CreateAccountPageComponent_app_alert_1_Template_app_alert_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.showAlert = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("canClose", true)("message", ctx_r0.errorMessage)("type", "error");
} }
class CreateAccountPageComponent {
    constructor(formBuilder, router, userService, validator) {
        this.router = router;
        this.userService = userService;
        this.errorMessage = "";
        this.showAlert = false;
        this.form = formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl("", validator.name),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl("", validator.password),
            surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl("", validator.surname),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl("", validator.username)
        });
    }
    createAccount() {
        this.userService.create(this.form.value).subscribe({
            error: ((x) => {
                this.errorMessage = x.error.data;
                this.showAlert = true;
            }),
            next: value => {
                this.router.navigateByUrl("/user");
            }
        });
    }
}
CreateAccountPageComponent.ɵfac = function CreateAccountPageComponent_Factory(t) { return new (t || CreateAccountPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_backend_user_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_create_account_page_validator__WEBPACK_IMPORTED_MODULE_0__["default"])); };
CreateAccountPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: CreateAccountPageComponent, selectors: [["app-create-account-page"]], decls: 10, vars: 16, consts: [[3, "canClose", "message", "type", "close", 4, "ngIf"], [3, "formGroup", "noValidate"], ["formControlName", "name", 3, "abstractControl", "label"], ["formControlName", "surname", 3, "abstractControl", "label"], ["formControlName", "username", 3, "abstractControl", "label"], ["formControlName", "password", 3, "abstractControl", "label", "type"], [1, "buttons-row"], [3, "label", "routerLink", "type"], [3, "disabled", "label", "click"], [3, "canClose", "message", "type", "close"]], template: function CreateAccountPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CreateAccountPageComponent_app_alert_1_Template, 1, 3, "app-alert", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "app-field", 2)(4, "app-field", 3)(5, "app-field", 4)(6, "app-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "app-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "app-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CreateAccountPageComponent_Template_app_button_click_9_listener() { return ctx.createAccount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showAlert);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("abstractControl", ctx.form.controls["name"])("label", "Nome");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("abstractControl", ctx.form.controls["surname"])("label", "Sobrenome");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("abstractControl", ctx.form.controls["username"])("label", "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("abstractControl", ctx.form.controls["password"])("label", "Senha")("type", "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("label", "Voltar")("routerLink", "/user")("type", "secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.form.invalid)("label", "Cadastrar-se");
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__.AlertComponent, _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__.ButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_components_field_field_component__WEBPACK_IMPORTED_MODULE_4__.FieldComponent, _shared_components_logo_logo_component__WEBPACK_IMPORTED_MODULE_5__.LogoComponent], styles: ["[_nghost-%COMP%] {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    gap: 64px;\n    justify-content: center;\n    min-height: 100%;\n    padding: 24px;\n    width: 100%;\n}\n\nform[_ngcontent-%COMP%] {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    gap: 36px;\n    width: 376px;\n}\n\n.buttons-row[_ngcontent-%COMP%] {\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n    gap: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1hY2NvdW50LXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFFBQVE7QUFDWiIsImZpbGUiOiJjcmVhdGUtYWNjb3VudC1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA2NHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMjRweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuZm9ybSB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAzNnB4O1xuICAgIHdpZHRoOiAzNzZweDtcbn1cblxuLmJ1dHRvbnMtcm93IHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBnYXA6IDhweDtcbn0iXX0= */"] });


/***/ }),

/***/ 8019:
/*!***************************************************************************!*\
  !*** ./src/app/user/create-account-page/create-account-page.validator.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class CreateAccountPageValidator {
    name(control) {
        const value = `${control.value ?? ""}`.trim();
        if (value.length === 0) {
            return { "name": "Necessário fornecer um nome" };
        }
        return null;
    }
    password(control) {
        const value = `${control.value ?? ""}`.trim();
        if (value.length === 0) {
            return { "password": "Necessário fornecer uma senha" };
        }
        return null;
    }
    surname(control) {
        const value = `${control.value ?? ""}`.trim();
        if (value.length === 0) {
            return { "surname": "Necessário fornecer um sobrenome" };
        }
        return null;
    }
    username(control) {
        const value = `${control.value ?? ""}`.trim();
        if (value.length === 0) {
            return { email: "Necessário fornecer um email" };
        }
        if (!(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value))) {
            return { 'email': "Formato de e-mail inválido." };
        }
        return null;
    }
}
CreateAccountPageValidator.ɵfac = function CreateAccountPageValidator_Factory(t) { return new (t || CreateAccountPageValidator)(); };
CreateAccountPageValidator.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CreateAccountPageValidator, factory: CreateAccountPageValidator.ɵfac, providedIn: "root" });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateAccountPageValidator);


/***/ }),

/***/ 6493:
/*!*****************************************************************************!*\
  !*** ./src/app/user/forgot-password-page/forgot-password-page.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordPageComponent": () => (/* binding */ ForgotPasswordPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _forgot_password_page_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password-page.validator */ 454);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_shared_backend_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/backend/user/user.service */ 4150);
/* harmony import */ var _shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/alert/alert.component */ 8332);
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/button/button.component */ 42);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_field_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/field/field.component */ 6885);
/* harmony import */ var _shared_components_logo_logo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/logo/logo.component */ 8168);











function ForgotPasswordPageComponent_app_alert_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-alert", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("close", function ForgotPasswordPageComponent_app_alert_1_Template_app_alert_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.showAlert = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("canClose", true)("message", ctx_r0.errorMessage)("type", "error");
} }
class ForgotPasswordPageComponent {
    constructor(formBuilder, router, userService, validator) {
        this.router = router;
        this.userService = userService;
        this.errorMessage = "";
        this.showAlert = false;
        this.form = formBuilder.group({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl("", validator.password),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl("", validator.username)
        });
    }
    retrievePassword() {
        this.userService.forgotPassword(this.form.value).subscribe({
            error: ((x) => {
                console.log(x);
                this.errorMessage = x.error.data;
                this.showAlert = true;
            }),
            next: value => {
                this.router.navigate(["/user"], {
                    queryParams: {
                        "success-message": value.data
                    }
                });
            }
        });
    }
}
ForgotPasswordPageComponent.ɵfac = function ForgotPasswordPageComponent_Factory(t) { return new (t || ForgotPasswordPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_backend_user_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_forgot_password_page_validator__WEBPACK_IMPORTED_MODULE_0__["default"])); };
ForgotPasswordPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ForgotPasswordPageComponent, selectors: [["app-forgot-password-page"]], decls: 8, vars: 12, consts: [[3, "canClose", "message", "type", "close", 4, "ngIf"], [3, "formGroup", "noValidate"], ["formControlName", "username", 3, "abstractControl", "label"], ["formControlName", "password", 3, "abstractControl", "label", "type"], [1, "buttons-row"], [3, "label", "routerLink", "type"], [3, "disabled", "label", "btnClick"], [3, "canClose", "message", "type", "close"]], template: function ForgotPasswordPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ForgotPasswordPageComponent_app_alert_1_Template, 1, 3, "app-alert", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "app-field", 2)(4, "app-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "app-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "app-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("btnClick", function ForgotPasswordPageComponent_Template_app_button_btnClick_7_listener() { return ctx.retrievePassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showAlert);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("abstractControl", ctx.form.controls["username"])("label", "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("abstractControl", ctx.form.controls["password"])("label", "Nova senha")("type", "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("label", "Voltar")("routerLink", "/user")("type", "secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.form.invalid)("label", "Alterar senha");
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__.AlertComponent, _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__.ButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_components_field_field_component__WEBPACK_IMPORTED_MODULE_4__.FieldComponent, _shared_components_logo_logo_component__WEBPACK_IMPORTED_MODULE_5__.LogoComponent], styles: ["[_nghost-%COMP%] {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    gap: 64px;\n    justify-content: center;\n    min-height: 100%;\n    padding: 24px;\n    width: 100%;\n}\n\nform[_ngcontent-%COMP%] {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    gap: 36px;\n    width: 376px;\n}\n\n.buttons-row[_ngcontent-%COMP%] {\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n    gap: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdC1wYXNzd29yZC1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixRQUFRO0FBQ1oiLCJmaWxlIjoiZm9yZ290LXBhc3N3b3JkLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDY0cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAyNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5mb3JtIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDM2cHg7XG4gICAgd2lkdGg6IDM3NnB4O1xufVxuXG4uYnV0dG9ucy1yb3cge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGdhcDogOHB4O1xufSJdfQ== */"] });


/***/ }),

/***/ 454:
/*!*****************************************************************************!*\
  !*** ./src/app/user/forgot-password-page/forgot-password-page.validator.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ForgotPasswordPageValidator {
    password(control) {
        const value = `${control.value ?? ""}`.trim();
        if (value.length === 0) {
            return { "password": "Necessário fornecer uma senha" };
        }
        return null;
    }
    username(control) {
        const value = `${control.value ?? ""}`.trim();
        if (value.length === 0) {
            return { email: "Necessário fornecer um email" };
        }
        if (!(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value))) {
            return { 'email': "Formato de e-mail inválido." };
        }
        return null;
    }
}
ForgotPasswordPageValidator.ɵfac = function ForgotPasswordPageValidator_Factory(t) { return new (t || ForgotPasswordPageValidator)(); };
ForgotPasswordPageValidator.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ForgotPasswordPageValidator, factory: ForgotPasswordPageValidator.ɵfac, providedIn: "root" });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForgotPasswordPageValidator);


/***/ }),

/***/ 7217:
/*!*********************************************************!*\
  !*** ./src/app/user/login-page/login-page.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageComponent": () => (/* binding */ LoginPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _login_page_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-page.validator */ 3775);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_shared_backend_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/backend/user/user.service */ 4150);
/* harmony import */ var _shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/alert/alert.component */ 8332);
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/button/button.component */ 42);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_field_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/field/field.component */ 6885);
/* harmony import */ var _shared_components_logo_logo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/logo/logo.component */ 8168);











function LoginPageComponent_app_alert_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-alert", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("close", function LoginPageComponent_app_alert_1_Template_app_alert_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.router.navigateByUrl("/user")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("canClose", true)("message", ctx_r0.successMessageQueryParam)("type", "success");
} }
function LoginPageComponent_app_alert_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-alert", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("close", function LoginPageComponent_app_alert_2_Template_app_alert_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r4.showAlert = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("canClose", true)("message", ctx_r1.errorMessage)("type", "error");
} }
class LoginPageComponent {
    constructor(activatedRoute, formBuilder, router, userService, validator) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.userService = userService;
        this.errorMessage = "";
        this.showAlert = false;
        this.form = formBuilder.group({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl("", validator.password),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl("", validator.username)
        });
    }
    get successMessageQueryParam() {
        return this.activatedRoute.snapshot.queryParams["success-message"];
    }
    get returnToQueryParam() {
        return this.activatedRoute.snapshot.queryParams["return-to"];
    }
    login() {
        this.userService.login(this.form.value)
            .then(x => {
            this.router.navigateByUrl(this.returnToQueryParam ?? "/");
        })
            .catch((x) => {
            this.errorMessage = x.error.data;
            this.showAlert = true;
        });
    }
}
LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) { return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_backend_user_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_login_page_validator__WEBPACK_IMPORTED_MODULE_0__["default"])); };
LoginPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: LoginPageComponent, selectors: [["app-login-page"]], decls: 14, vars: 12, consts: [[3, "canClose", "message", "type", "close", 4, "ngIf"], [3, "formGroup", "noValidate"], ["formControlName", "username", 3, "abstractControl", "label"], ["formControlName", "password", 3, "abstractControl", "label", "type"], [1, "form-buttons"], [3, "disabled", "label", "click"], [1, "form-buttons__forgot-password", 3, "routerLink"], [1, "create-account", "text-preset-450"], [1, "create-account__create-one", "text-preset-470", 3, "routerLink"], [3, "canClose", "message", "type", "close"]], template: function LoginPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, LoginPageComponent_app_alert_1_Template, 1, 3, "app-alert", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, LoginPageComponent_app_alert_2_Template, 1, 3, "app-alert", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "app-field", 2)(5, "app-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 4)(7, "app-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LoginPageComponent_Template_app_button_click_7_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Esqueceu sua senha?");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, " N\u00E3o tem uma conta? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Crie uma");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !!ctx.successMessageQueryParam);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showAlert);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("abstractControl", ctx.form.controls["username"])("label", "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("abstractControl", ctx.form.controls["password"])("label", "Senha")("type", "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.form.invalid)("label", "Entrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", "/user/forgot-password");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", "/user/create-account");
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__.AlertComponent, _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__.ButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_components_field_field_component__WEBPACK_IMPORTED_MODULE_4__.FieldComponent, _shared_components_logo_logo_component__WEBPACK_IMPORTED_MODULE_5__.LogoComponent], styles: ["[_nghost-%COMP%] {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    gap: 64px;\n    justify-content: center;\n    min-height: 100%;\n    padding: 24px;\n    width: 100%;\n}\n\nform[_ngcontent-%COMP%] {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    gap: 36px;\n    width: 376px;\n}\n\n.form-buttons[_ngcontent-%COMP%] {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n    width: 320px;\n}\n\n.form-buttons[_ngcontent-%COMP%]    > app-button[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.form-buttons__forgot-password[_ngcontent-%COMP%] {\n    color: var(--c-primary-60);\n    cursor: pointer;\n}\n\n.create-account[_ngcontent-%COMP%] {\n    color: var(--c-dark-60);\n}\n\n.create-account__create-one[_ngcontent-%COMP%] {\n    color: var(--c-primary-60);\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsZUFBZTtBQUNuQiIsImZpbGUiOiJsb2dpbi1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA2NHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMjRweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuZm9ybSB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAzNnB4O1xuICAgIHdpZHRoOiAzNzZweDtcbn1cblxuLmZvcm0tYnV0dG9ucyB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxNnB4O1xuICAgIHdpZHRoOiAzMjBweDtcbn1cblxuLmZvcm0tYnV0dG9ucyA+IGFwcC1idXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZm9ybS1idXR0b25zX19mb3Jnb3QtcGFzc3dvcmQge1xuICAgIGNvbG9yOiB2YXIoLS1jLXByaW1hcnktNjApO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNyZWF0ZS1hY2NvdW50IHtcbiAgICBjb2xvcjogdmFyKC0tYy1kYXJrLTYwKTtcbn1cblxuLmNyZWF0ZS1hY2NvdW50X19jcmVhdGUtb25lIHtcbiAgICBjb2xvcjogdmFyKC0tYy1wcmltYXJ5LTYwKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"] });


/***/ }),

/***/ 3775:
/*!*********************************************************!*\
  !*** ./src/app/user/login-page/login-page.validator.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class LoginPageValidator {
    password(control) {
        const value = `${control.value ?? ""}`.trim();
        if (value.length === 0) {
            return { "password": "Necessário fornecer uma senha" };
        }
        return null;
    }
    username(control) {
        const value = `${control.value ?? ""}`.trim();
        if (value.length === 0) {
            return { email: "Necessário fornecer um email" };
        }
        if (!(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value))) {
            return { 'email': "Formato de e-mail inválido." };
        }
        return null;
    }
}
LoginPageValidator.ɵfac = function LoginPageValidator_Factory(t) { return new (t || LoginPageValidator)(); };
LoginPageValidator.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginPageValidator, factory: LoginPageValidator.ɵfac, providedIn: "root" });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginPageValidator);


/***/ }),

/***/ 8524:
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserModule": () => (/* binding */ UserModule)
/* harmony export */ });
/* harmony import */ var _create_account_page_create_account_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-account-page/create-account-page.component */ 8718);
/* harmony import */ var _forgot_password_page_forgot_password_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password-page/forgot-password-page.component */ 6493);
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-page/login-page.component */ 7217);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);








const userRoutes = [
    {
        component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_2__.LoginPageComponent,
        path: ""
    },
    {
        component: _create_account_page_create_account_page_component__WEBPACK_IMPORTED_MODULE_0__.CreateAccountPageComponent,
        path: "create-account"
    },
    {
        component: _forgot_password_page_forgot_password_page_component__WEBPACK_IMPORTED_MODULE_1__.ForgotPasswordPageComponent,
        path: "forgot-password"
    }
];
class UserModule {
}
UserModule.ɵfac = function UserModule_Factory(t) { return new (t || UserModule)(); };
UserModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: UserModule });
UserModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(userRoutes),
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](UserModule, { declarations: [_create_account_page_create_account_page_component__WEBPACK_IMPORTED_MODULE_0__.CreateAccountPageComponent,
        _forgot_password_page_forgot_password_page_component__WEBPACK_IMPORTED_MODULE_1__.ForgotPasswordPageComponent,
        _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_2__.LoginPageComponent], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_user_user_module_ts.js.map