(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  \n\n    <ion-title>Login</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n  <div class=\"login-logo\">\n    <img src=\"assets/img/appicon.png\" alt=\"Ionic logo\">\n  </div>\n\n  <form #loginForm=\"ngForm\" novalidate>\n    <ion-list>\n      <ion-item>\n        <ion-label position=\"stacked\" color=\"dark\">Username</ion-label>\n        <ion-input [(ngModel)]=\"login.username\" name=\"emailID\" type=\"text\" #emailID=\"ngModel\" spellcheck=\"false\" autocapitalize=\"off\"\n          required>\n        </ion-input>\n      </ion-item>\n\n      <ion-text color=\"danger\">\n        <p [hidden]=\"emailID.valid || submitted == false\" class=\"ion-padding-start\">\n          Username is required\n        </p>\n      </ion-text>\n\n      <ion-item>\n        <ion-label position=\"stacked\" color=\"dark\">Password</ion-label>\n        <ion-input [(ngModel)]=\"login.password\" name=\"password\" type=\"password\" #password=\"ngModel\" required>\n        </ion-input>\n      </ion-item>\n\n      <ion-text color=\"danger\">\n        <p [hidden]=\"password.valid || submitted == false\" class=\"ion-padding-start\">\n          Password is required\n        </p>\n      </ion-text>\n    </ion-list>\n    <ion-text color=\"danger\">\n      <p *ngIf=\"wrongpassword\" class=\"ion-padding-start\">\n        Incorrect username/password.\n      </p>\n    </ion-text>\n    <ion-row>\n      <ion-col>\n        <ion-button (click)=\"onLogin(loginForm)\" type=\"submit\" expand=\"block\" style=\"--background:#61968D\">Login</ion-button>\n      </ion-col>\n      <!-- <ion-col>\n        <ion-button (click)=\"onSignup()\" color=\"light\" expand=\"block\">Signup</ion-button>\n      </ion-col> -->\n    </ion-row>\n  </form>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/login/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login */ "./src/app/pages/login/login.ts");




const routes = [
    {
        path: '',
        component: _login__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/login/login.css":
/*!***************************************!*\
  !*** ./src/app/pages/login/login.css ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-logo {\n  padding: 20px 0;\n  min-height: 200px;\n  text-align: center;\n}\n\n.login-logo img {\n  max-width: 150px;\n}\n\n.list {\n  margin-bottom: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tbG9nbyB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ2luLWxvZ28gaW1nIHtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbn1cblxuLmxpc3Qge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login */ "./src/app/pages/login/login.ts");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");







let LoginModule = class LoginModule {
};
LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_6__["LoginPageRoutingModule"]
        ],
        declarations: [
            _login__WEBPACK_IMPORTED_MODULE_5__["LoginPage"],
        ]
    })
], LoginModule);



/***/ }),

/***/ "./src/app/pages/login/login.ts":
/*!**************************************!*\
  !*** ./src/app/pages/login/login.ts ***!
  \**************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _service_storage_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/storage-service.service */ "./src/app/service/storage-service.service.ts");
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/user-data */ "./src/app/providers/user-data.ts");






let LoginPage = class LoginPage {
    constructor(userData, router, api, storage) {
        this.userData = userData;
        this.router = router;
        this.api = api;
        this.storage = storage;
        this.login = {};
        this.wrongpassword = false;
        // login: UserOptions = { username: '', password: '' };
        this.submitted = false;
    }
    onLogin(form) {
        this.submitted = true;
        if (form.valid) {
            this.api.loginPost(this.login).then((res) => {
                console.log(res);
                if (res && res.token) {
                    let loginData = {
                        emailID: res.user_email,
                        password: this.login.password,
                        name: res.user_nicename
                    };
                    this.api.login(loginData).then((res) => {
                        console.log(this.login);
                        if (res.status == 'success') {
                            this.storage.setData({ token: res.token, userType: res.userType });
                            this.router.navigateByUrl('/app/tabs/dashboard');
                        }
                        else {
                            console.log("failuer");
                            if (res.status === 'failure') {
                                this.wrongpassword = true;
                            }
                        }
                    })
                        .catch(err => {
                        console.log(err);
                    });
                }
                else {
                    alert('invalid user login');
                }
            }).catch(err => {
                console.log(err);
                alert('invalid user login');
            });
        }
    }
    onSignup() {
        this.router.navigateByUrl('/signup');
    }
};
LoginPage.ctorParameters = () => [
    { type: _providers_user_data__WEBPACK_IMPORTED_MODULE_5__["UserData"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _service_storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageServiceService"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.css */ "./src/app/pages/login/login.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_user_data__WEBPACK_IMPORTED_MODULE_5__["UserData"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
        _service_storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageServiceService"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map