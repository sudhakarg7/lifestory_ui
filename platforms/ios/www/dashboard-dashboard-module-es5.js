function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDashboardDashboardPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Write Story</ion-title>\n    <!-- <ion-buttons slot=\"end\">\n      <ion-button (click)=\"presentPopover($event)\">\n        <ion-icon slot=\"icon-only\" ios=\"ellipsis-horizontal\" md=\"ellipsis-vertical\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  \n    <ion-grid fixed>\n      <ion-row>\n        <ng-container *ngFor=\"let dash of dashboard\">\n        <ion-col size=\"12\" (click)=\"selectQuestions()\">\n          <ion-card style=\"background:url(assets/img/card_bg.png) center bottom; background-size: cover;\">\n            <ion-card-header>\n              <ion-card-title style=\"color: white;\">{{dash.title}}</ion-card-title>\n              <ion-card-subtitle style=\"color: white;\">{{dash.subtitle}}</ion-card-subtitle>\n            </ion-card-header>\n          </ion-card>\n        </ion-col>\n        </ng-container>\n        </ion-row>\n        </ion-grid>\n        \n  <!-- <ion-card>\n    <ion-grid fixed>\n      <ion-row>\n        <ion-col size=\"6\" (click)=\"selectQuestions()\">\n          <ion-card color=\"tertiary\">\n            <ion-card-header>\n              <ion-card-title>Title-1</ion-card-title>\n              <ion-card-subtitle>Question part -1</ion-card-subtitle>\n            </ion-card-header>\n          </ion-card>\n        </ion-col>\n        <ion-col size=\"6\" (click)=\"selectQuestions()\">\n          <ion-card>\n            <ion-card-header>\n              <ion-card-title>Title-2</ion-card-title>\n              <ion-card-subtitle>Question part -2</ion-card-subtitle>\n            </ion-card-header>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid fixed>\n      <ion-row>\n        <ion-col size=\"6\" color=\"success\" (click)=\"selectQuestions()\">\n          <ion-card>\n            <ion-card-header>\n              <ion-card-title>Title-3</ion-card-title>\n              <ion-card-subtitle>Question part -3</ion-card-subtitle>\n            </ion-card-header>\n          </ion-card>\n        </ion-col>\n        <ion-col size=\"6\" color=\"medium\" (click)=\"selectQuestions()\">\n          <ion-card>\n            <ion-card-header>\n            <ion-card-title>Title-4</ion-card-title>\n            <ion-card-subtitle>Question part -4</ion-card-subtitle>\n            </ion-card-header>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid fixed>\n      <ion-row>\n        <ion-col size=\"6\" color=\"dark\" (click)=\"selectQuestions()\">\n          <ion-card>\n            <ion-card-header>\n              <ion-card-title>Title-5</ion-card-title>\n              <ion-card-subtitle>Question part -5</ion-card-subtitle>\n            </ion-card-header>\n          </ion-card>\n        </ion-col>\n        <ion-col size=\"6\" color=\"danger\" (click)=\"selectQuestions()\">\n          <ion-card>\n            <ion-card-header>\n              <ion-card-title>Title-6</ion-card-title>\n              <ion-card-subtitle>Question part -6</ion-card-subtitle>\n            </ion-card-header>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card> -->\n</ion-content>\n\n";
    /***/
  },

  /***/
  "./src/app/pages/dashboard/dashboard-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: DashboardPageRoutingModule */

  /***/
  function srcAppPagesDashboardDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPageRoutingModule", function () {
      return DashboardPageRoutingModule;
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


    var _dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard.page */
    "./src/app/pages/dashboard/dashboard.page.ts");

    var routes = [{
      path: '',
      component: _dashboard_page__WEBPACK_IMPORTED_MODULE_3__["DashboardPage"]
    }];

    var DashboardPageRoutingModule = function DashboardPageRoutingModule() {
      _classCallCheck(this, DashboardPageRoutingModule);
    };

    DashboardPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DashboardPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/dashboard/dashboard.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
    \*****************************************************/

  /*! exports provided: DashboardPageModule */

  /***/
  function srcAppPagesDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function () {
      return DashboardPageModule;
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


    var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./dashboard-routing.module */
    "./src/app/pages/dashboard/dashboard-routing.module.ts");
    /* harmony import */


    var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dashboard.page */
    "./src/app/pages/dashboard/dashboard.page.ts");

    var DashboardPageModule = function DashboardPageModule() {
      _classCallCheck(this, DashboardPageModule);
    };

    DashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardPageRoutingModule"]],
      declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]]
    })], DashboardPageModule);
    /***/
  },

  /***/
  "./src/app/pages/dashboard/dashboard.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDashboardDashboardPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/dashboard/dashboard.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.page.ts ***!
    \***************************************************/

  /*! exports provided: DashboardPage */

  /***/
  function srcAppPagesDashboardDashboardPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPage", function () {
      return DashboardPage;
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

    var DashboardPage =
    /*#__PURE__*/
    function () {
      function DashboardPage(router) {
        _classCallCheck(this, DashboardPage);

        this.router = router;
        this.dashboard = [];
      }

      _createClass(DashboardPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.fun();
        }
      }, {
        key: "selectQuestions",
        value: function selectQuestions() {
          this.router.navigate(["/lifestoryqustions"]);
        }
      }, {
        key: "fun",
        value: function fun() {
          this.dashboard = [{
            title: 'The Beginning',
            subtitle: 'Question part -1'
          }, {
            title: 'Childhood',
            subtitle: 'Question part -2'
          }, {
            title: 'Teenage Years',
            subtitle: 'Question part -3'
          }, {
            title: 'Adulthood',
            subtitle: 'Question part -4'
          }, {
            title: 'Your Identity',
            subtitle: 'Question part -5'
          }, {
            title: 'Memory Bank',
            subtitle: 'Question part -6'
          }, {
            title: 'Being Me',
            subtitle: 'Question part -7'
          }, {
            title: 'Life lessons & legacies',
            subtitle: 'Question part -8'
          }];
        }
      }]);

      return DashboardPage;
    }();

    DashboardPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    DashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.page.scss */
      "./src/app/pages/dashboard/dashboard.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], DashboardPage);
    /***/
  }
}]);
//# sourceMappingURL=dashboard-dashboard-module-es5.js.map