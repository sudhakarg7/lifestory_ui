function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-create-qustions-createqustions-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-qustions/createqustions.page.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-qustions/createqustions.page.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCreateQustionsCreatequstionsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Life-story Qustions</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form class=\"products\" [formGroup]=\"createQuestForm\" (ngSubmit)=\"productSubmit()\">\n\n    <ion-item color=\"light\">\n      <ion-label position=\"floating\">Question Title</ion-label>\n      <ion-input formControlName=\"questionTitle\"></ion-input>\n    </ion-item>\n\n    <ion-item color=\"light\">\n      <ion-label position=\"floating\">Week</ion-label>\n      <ion-select formControlName=\"week\">\n        <ion-select-option value=\"1\">week 1</ion-select-option>\n        <ion-select-option value=\"2\">Week 2</ion-select-option>\n        <ion-select-option value=\"3\">Week 3</ion-select-option>\n        <ion-select-option value=\"4\">Week 4</ion-select-option>\n        <ion-select-option value=\"5\">Week 5</ion-select-option>\n        <ion-select-option value=\"6\">Week 6</ion-select-option>\n        <ion-select-option value=\"7\">Week 7</ion-select-option>\n        <ion-select-option value=\"8\">Week 8</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ng-container formArrayName=\"questions\" *ngFor=\"let item of createQuestForm.get('questions')['controls']; let i = index;\">\n      <div [formGroupName]=\"i\">\n        <ion-item color=\"light\">\n          <ion-label position=\"floating\">Question Type</ion-label>\n          <ion-select formControlName=\"type\">\n            <ion-select-option value=\"textarea\">Textarea</ion-select-option>\n            <ion-select-option value=\"upload\">Fileupload</ion-select-option>\n          </ion-select>\n        </ion-item>\n        \n        <ion-item color=\"light\">\n          <ion-label position=\"floating\">Enter questions</ion-label>\n          <ion-textarea formControlName=\"question\"></ion-textarea>\n        </ion-item>\n      </div>\n    </ng-container>\n    <ion-button expand=\"full\" type=\"button\" (click)=\"addItem()\">Add Question</ion-button>\n\n    <ion-button expand=\"full\" type=\"submit\">Submit</ion-button>\n  </form>\n</ion-content>\n\n\n<!-- Chosen name: {{ createQuestForm.controls.questions.controls[i].controls.questions.value }} -->";
    /***/
  },

  /***/
  "./src/app/pages/create-qustions/createqustions-routing.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/pages/create-qustions/createqustions-routing.module.ts ***!
    \************************************************************************/

  /*! exports provided: CreatequstionsPageRoutingModule */

  /***/
  function srcAppPagesCreateQustionsCreatequstionsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreatequstionsPageRoutingModule", function () {
      return CreatequstionsPageRoutingModule;
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


    var _createqustions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./createqustions.page */
    "./src/app/pages/create-qustions/createqustions.page.ts");

    var routes = [{
      path: '',
      component: _createqustions_page__WEBPACK_IMPORTED_MODULE_3__["CreatequstionsPage"]
    }];

    var CreatequstionsPageRoutingModule = function CreatequstionsPageRoutingModule() {
      _classCallCheck(this, CreatequstionsPageRoutingModule);
    };

    CreatequstionsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CreatequstionsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/create-qustions/createqustions.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/create-qustions/createqustions.module.ts ***!
    \****************************************************************/

  /*! exports provided: CreatequstionsPageModule */

  /***/
  function srcAppPagesCreateQustionsCreatequstionsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreatequstionsPageModule", function () {
      return CreatequstionsPageModule;
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


    var _createqustions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./createqustions-routing.module */
    "./src/app/pages/create-qustions/createqustions-routing.module.ts");
    /* harmony import */


    var _createqustions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./createqustions.page */
    "./src/app/pages/create-qustions/createqustions.page.ts");

    var CreatequstionsPageModule = function CreatequstionsPageModule() {
      _classCallCheck(this, CreatequstionsPageModule);
    };

    CreatequstionsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _createqustions_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreatequstionsPageRoutingModule"]],
      declarations: [_createqustions_page__WEBPACK_IMPORTED_MODULE_6__["CreatequstionsPage"]]
    })], CreatequstionsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/create-qustions/createqustions.page.scss":
  /*!****************************************************************!*\
    !*** ./src/app/pages/create-qustions/createqustions.page.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCreateQustionsCreatequstionsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NyZWF0ZS1xdXN0aW9ucy9jcmVhdGVxdXN0aW9ucy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/create-qustions/createqustions.page.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/create-qustions/createqustions.page.ts ***!
    \**************************************************************/

  /*! exports provided: CreatequstionsPage */

  /***/
  function srcAppPagesCreateQustionsCreatequstionsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreatequstionsPage", function () {
      return CreatequstionsPage;
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
    /* harmony import */


    var _service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../service/api.service */
    "./src/app/service/api.service.ts");
    /* harmony import */


    var _service_storage_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../service/storage-service.service */
    "./src/app/service/storage-service.service.ts");

    var CreatequstionsPage =
    /*#__PURE__*/
    function () {
      function CreatequstionsPage(formBuilder, api, storage) {
        _classCallCheck(this, CreatequstionsPage);

        this.formBuilder = formBuilder;
        this.api = api;
        this.storage = storage;
        this.sysToken = this.storage.get('token');
      }

      _createClass(CreatequstionsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.createForm();
          this.addItem();
        }
      }, {
        key: "createForm",
        value: function createForm() {
          this.createQuestForm = this.formBuilder.group({
            questionTitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            week: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            questions: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([])
          });
        }
      }, {
        key: "createItem",
        value: function createItem() {
          return this.formBuilder.group({
            type: 'textarea',
            question: ''
          });
        }
      }, {
        key: "addItem",
        value: function addItem() {
          this.questions = this.createQuestForm.get('questions');
          this.questions.push(this.createItem());
        }
      }, {
        key: "productSubmit",
        value: function productSubmit() {
          console.log(this.createQuestForm.value);
          var obj = Object.assign({
            token: this.sysToken
          }, this.createQuestForm.value);

          if (this.createQuestForm.valid) {
            this.api.createQuest(obj).then(function (res) {
              console.log(res);
            }).catch(function (err) {
              console.log(err);
            });
          }
        }
      }]);

      return CreatequstionsPage;
    }();

    CreatequstionsPage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _service_storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageServiceService"]
      }];
    };

    CreatequstionsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-createqustions',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./createqustions.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-qustions/createqustions.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./createqustions.page.scss */
      "./src/app/pages/create-qustions/createqustions.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _service_storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageServiceService"]])], CreatequstionsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-create-qustions-createqustions-module-es5.js.map