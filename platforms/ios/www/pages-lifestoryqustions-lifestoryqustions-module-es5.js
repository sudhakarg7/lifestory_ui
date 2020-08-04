function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-lifestoryqustions-lifestoryqustions-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lifestoryqustions/lifestoryqustions.page.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lifestoryqustions/lifestoryqustions.page.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLifestoryqustionsLifestoryqustionsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Life-story Qustions</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form class=\"products\" [formGroup]=\"qustionsForm\" (ngSubmit)=\"productSubmit()\">\n    <ion-item color=\"light\">\n      <ion-label position=\"floating\">What do you do?</ion-label>\n      <ion-textarea formControlName=\"qustion1\"></ion-textarea>\n    </ion-item>\n    <ion-item color=\"light\">\n      <ion-label position=\"floating\">Are you married ?</ion-label>\n      <ion-textarea formControlName=\"qustion2\"></ion-textarea>\n    </ion-item>\n    <ion-item color=\"light\">\n      <ion-label position=\"floating\">Why are you studying English ?</ion-label>\n      <ion-textarea formControlName=\"qustion3\"></ion-textarea>\n    </ion-item>\n    <ion-item color=\"light\">\n      <ion-label position=\"floating\">Where / How did you learn English ?</ion-label>\n      <ion-textarea formControlName=\"qustion4\"></ion-textarea>\n    </ion-item>\n    <ion-item color=\"light\">\n      <ion-label position=\"floating\">What do you do in your free time ?</ion-label>\n      <ion-textarea formControlName=\"qustion5\"></ion-textarea>\n    </ion-item>\n    <ion-item color=\"light\">\n      <ion-label position=\"floating\">What\"s the weather like? / How\"s the weather ?</ion-label>\n      <ion-textarea formControlName=\"qustion6\"></ion-textarea>\n    </ion-item>\n    <ion-item color=\"light\">\n      <ion-label position=\"floating\">What time is it ? / Do you have the time?</ion-label>\n      <ion-textarea formControlName=\"qustion7\"></ion-textarea>\n    </ion-item>\n    <ion-item color=\"light\">\n      <ion-label position=\"floating\">Can I help you ? / Do you need any help?</ion-label>\n      <ion-textarea formControlName=\"qustion8\"></ion-textarea>\n    </ion-item>\n    <ion-item color=\"light\">\n      <ion-label position=\"floating\">Description</ion-label>\n      <ion-textarea formControlName=\"description\"></ion-textarea>\n    </ion-item>\n    <ion-button expand=\"full\" type=\"submit\">Submit</ion-button>\n  </form>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/lifestoryqustions/lifestoryqustions-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/lifestoryqustions/lifestoryqustions-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: LifestoryqustionsPageRoutingModule */

  /***/
  function srcAppPagesLifestoryqustionsLifestoryqustionsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LifestoryqustionsPageRoutingModule", function () {
      return LifestoryqustionsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _lifestoryqustions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./lifestoryqustions.page */
    "./src/app/pages/lifestoryqustions/lifestoryqustions.page.ts");

    var routes = [{
      path: '',
      component: _lifestoryqustions_page__WEBPACK_IMPORTED_MODULE_3__["LifestoryqustionsPage"]
    }];

    var LifestoryqustionsPageRoutingModule = function LifestoryqustionsPageRoutingModule() {
      _classCallCheck(this, LifestoryqustionsPageRoutingModule);
    };

    LifestoryqustionsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LifestoryqustionsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/lifestoryqustions/lifestoryqustions.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/lifestoryqustions/lifestoryqustions.module.ts ***!
    \*********************************************************************/

  /*! exports provided: LifestoryqustionsPageModule */

  /***/
  function srcAppPagesLifestoryqustionsLifestoryqustionsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LifestoryqustionsPageModule", function () {
      return LifestoryqustionsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _lifestoryqustions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./lifestoryqustions-routing.module */
    "./src/app/pages/lifestoryqustions/lifestoryqustions-routing.module.ts");
    /* harmony import */


    var _lifestoryqustions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./lifestoryqustions.page */
    "./src/app/pages/lifestoryqustions/lifestoryqustions.page.ts");

    var LifestoryqustionsPageModule = function LifestoryqustionsPageModule() {
      _classCallCheck(this, LifestoryqustionsPageModule);
    };

    LifestoryqustionsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _lifestoryqustions_routing_module__WEBPACK_IMPORTED_MODULE_5__["LifestoryqustionsPageRoutingModule"]],
      declarations: [_lifestoryqustions_page__WEBPACK_IMPORTED_MODULE_6__["LifestoryqustionsPage"]]
    })], LifestoryqustionsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/lifestoryqustions/lifestoryqustions.page.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/lifestoryqustions/lifestoryqustions.page.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLifestoryqustionsLifestoryqustionsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xpZmVzdG9yeXF1c3Rpb25zL2xpZmVzdG9yeXF1c3Rpb25zLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/lifestoryqustions/lifestoryqustions.page.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/lifestoryqustions/lifestoryqustions.page.ts ***!
    \*******************************************************************/

  /*! exports provided: LifestoryqustionsPage */

  /***/
  function srcAppPagesLifestoryqustionsLifestoryqustionsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LifestoryqustionsPage", function () {
      return LifestoryqustionsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var LifestoryqustionsPage =
    /*#__PURE__*/
    function () {
      function LifestoryqustionsPage(fb) {
        _classCallCheck(this, LifestoryqustionsPage);

        this.fb = fb;
        this.submitted = false;
        this.qustions = [];
      }

      _createClass(LifestoryqustionsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // this.qus()
          this.qusFormLoad();
        } // qus() {
        //   this.qustions = ['What do you do?',
        //     'Are you married ?',
        //     'Why are you studying English ?',
        //     'Where / How did you learn English ?',
        //     'What do you do in your free time ?',
        //     ' What"s the weather like? / How"s the weather ?',
        //     'What time is it ? / Do you have the time?',
        //     'Can I help you ? / Do you need any help?']
        // }

      }, {
        key: "qusFormLoad",
        value: function qusFormLoad() {
          this.qustionsForm = this.fb.group({
            qustion1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            qustion2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            qustion3: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            qustion4: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            qustion5: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            qustion6: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            qustion7: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            qustion8: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          });
        }
      }, {
        key: "productSubmit",
        value: function productSubmit() {
          console.log(this.qustionsForm.value);
        }
      }]);

      return LifestoryqustionsPage;
    }();

    LifestoryqustionsPage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    LifestoryqustionsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-lifestoryqustions',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./lifestoryqustions.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lifestoryqustions/lifestoryqustions.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./lifestoryqustions.page.scss */
      "./src/app/pages/lifestoryqustions/lifestoryqustions.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])], LifestoryqustionsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-lifestoryqustions-lifestoryqustions-module-es5.js.map