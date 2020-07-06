function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-page-tabs-page-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.html":
  /*!******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.html ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAboutAboutHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"presentPopover($event)\">\n          <ion-icon slot=\"icon-only\" ios=\"ellipsis-horizontal\" md=\"ellipsis-vertical\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n  <div class=\"about-header\">\n    <!-- Instead of loading an image each time the select changes, use opacity to transition them -->\n    <div class=\"about-image madison\" [ngStyle]=\"location === 'madison' && {'opacity': '1'}\"></div>\n    <div class=\"about-image austin\" [ngStyle]=\"location === 'austin' && {'opacity': '1'}\"></div>\n    <div class=\"about-image chicago\" [ngStyle]=\"location === 'chicago' && {'opacity': '1'}\"></div>\n    <div class=\"about-image seattle\" [ngStyle]=\"location === 'seattle' && {'opacity': '1'}\"></div>\n  </div>\n\n  <div class=\"about-info\">\n    <h3 class=\"ion-padding-top ion-padding-start\">About</h3>\n\n    <p class=\"ion-padding-start ion-padding-end\">\n      The Ionic Conference is a one-day conference on {{ conferenceDate | date: 'mediumDate' }} featuring talks from the Ionic team. It is focused on Ionic applications being built with Ionic Framework. This includes migrating apps to the latest version of the framework, Angular concepts, Webpack, Sass, and many other technologies used in Ionic 2. Tickets are completely sold out, and we’re expecting more than 1000 developers – making this the largest Ionic conference ever!\n    </p>\n\n    <h3 class=\"ion-padding-top ion-padding-start\">Details</h3>\n\n    <ion-list lines=\"none\">\n      <ion-item>\n        <ion-label>\n          Location\n        </ion-label>\n        <ion-select [(ngModel)]=\"location\" [interfaceOptions]=\"selectOptions\">\n          <ion-select-option value=\"madison\">Madison, WI</ion-select-option>\n          <ion-select-option value=\"austin\">Austin, TX</ion-select-option>\n          <ion-select-option value=\"chicago\">Chicago, IL</ion-select-option>\n          <ion-select-option value=\"seattle\">Seattle, WA</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          Date\n        </ion-label>\n        <ion-datetime\n          displayFormat=\"MMM DD, YYYY\"\n          max=\"2056\"\n          [(ngModel)]=\"conferenceDate\">\n        </ion-datetime>\n      </ion-item>\n    </ion-list>\n\n    <h3 class=\"ion-padding-top ion-padding-start\">Internet</h3>\n\n    <ion-list lines=\"none\">\n      <ion-item>\n        <ion-label>\n          Wifi network\n        </ion-label>\n        <ion-label class=\"ion-text-end\">\n          ica{{conferenceDate | date: 'y'}}\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          Password\n        </ion-label>\n        <ion-label class=\"ion-text-end\">\n          makegoodthings\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/map/map.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/map/map.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMapMapHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Map</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div #mapCanvas class=\"map-canvas\"></div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/schedule-filter/schedule-filter.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/schedule-filter/schedule-filter.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesScheduleFilterScheduleFilterHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header translucent=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button *ngIf=\"ios\" (click)=\"dismiss()\">Cancel</ion-button>\n      <ion-button *ngIf=\"!ios\" (click)=\"selectAll(false)\">Reset</ion-button>\n    </ion-buttons>\n\n    <ion-title>\n      Filter Sessions\n    </ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"applyFilters()\" strong>Done</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list [lines]=\"ios ? 'inset' : 'full'\">\n    <ion-list-header>Tracks</ion-list-header>\n\n    <ion-item *ngFor=\"let track of tracks\" [attr.track]=\"track.name | lowercase\">\n      <ion-icon *ngIf=\"ios\" slot=\"start\" [name]=\"track.icon\" color=\"medium\"></ion-icon>\n      <ion-label>{{track.name}}</ion-label>\n      <ion-checkbox [(ngModel)]=\"track.isChecked\"></ion-checkbox>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n<ion-footer translucent=\"true\" *ngIf=\"ios\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"selectAll(false)\">Deselect All</ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"selectAll(true)\">Select All</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/schedule/schedule.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/schedule/schedule.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesScheduleScheduleHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header translucent=\"true\">\n  <ion-toolbar>\n    <ion-buttons *ngIf=\"!showSearchbar\" slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-segment *ngIf=\"ios\" [(ngModel)]=\"segment\" (ionChange)=\"updateSchedule()\">\n      <ion-segment-button value=\"all\">\n        All\n      </ion-segment-button>\n      <ion-segment-button value=\"favorites\">\n        Favorites\n      </ion-segment-button>\n    </ion-segment>\n    <ion-title *ngIf=\"!ios && !showSearchbar\">Schedule</ion-title>\n    <ion-searchbar *ngIf=\"showSearchbar\" showCancelButton=\"always\" [(ngModel)]=\"queryText\" (ionChange)=\"updateSchedule()\" (ionCancel)=\"showSearchbar = false\" placeholder=\"Search\"></ion-searchbar>\n    <ion-buttons slot=\"end\">\n      <ion-button *ngIf=\"!ios && !showSearchbar\" (click)=\"showSearchbar = true\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n      <ion-button *ngIf=\"!showSearchbar\" (click)=\"presentFilter()\">\n        <span *ngIf=\"ios\">Filter</span>\n        <span *ngIf=\"!ios\">\n          <ion-icon slot=\"icon-only\" name=\"options\"></ion-icon>\n        </span>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar *ngIf=\"!ios\">\n    <ion-segment [(ngModel)]=\"segment\" (ionChange)=\"updateSchedule()\">\n      <ion-segment-button value=\"all\">\n        All\n      </ion-segment-button>\n      <ion-segment-button value=\"favorites\">\n        Favorites\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Schedule</ion-title>\n    </ion-toolbar>\n    <ion-toolbar>\n      <ion-searchbar [(ngModel)]=\"queryText\" (ionChange)=\"updateSchedule()\" placeholder=\"Search\"></ion-searchbar>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-list #scheduleList [hidden]=\"shownSessions === 0\">\n    <ion-item-group *ngFor=\"let group of groups\" [hidden]=\"group.hide\">\n      <ion-item-divider sticky>\n        <ion-label>\n          {{group.time}}\n        </ion-label>\n      </ion-item-divider>\n\n      <ion-item-sliding *ngFor=\"let session of group.sessions\" #slidingItem [attr.track]=\"session.tracks[0] | lowercase\"\n        [hidden]=\"session.hide\">\n        <ion-item routerLink=\"/app/tabs/schedule/session/{{session.id}}\">\n          <ion-label>\n            <h3>{{session.name}}</h3>\n            <p>\n              {{session.timeStart}} &mdash; {{session.timeEnd}}: {{session.location}}\n            </p>\n          </ion-label>\n        </ion-item>\n        <ion-item-options>\n          <ion-item-option color=\"favorite\" (click)=\"addFavorite(slidingItem, session)\" *ngIf=\"segment === 'all'\">\n            Favorite\n          </ion-item-option>\n          <ion-item-option color=\"danger\" (click)=\"removeFavorite(slidingItem, session, 'Remove Favorite')\"\n            *ngIf=\"segment === 'favorites'\">\n            Remove\n          </ion-item-option>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-item-group>\n  </ion-list>\n\n  <ion-list-header [hidden]=\"shownSessions > 0\">\n    No Sessions Found\n  </ion-list-header>\n\n  <ion-fab slot=\"fixed\" vertical=\"bottom\" horizontal=\"end\" #fab>\n    <ion-fab-button>\n      <ion-icon name=\"share-social\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n      <ion-fab-button color=\"vimeo\" (click)=\"openSocial('Vimeo', fab)\">\n        <ion-icon name=\"logo-vimeo\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button color=\"instagram\" (click)=\"openSocial('Instagram', fab)\">\n        <ion-icon name=\"logo-instagram\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button color=\"twitter\" (click)=\"openSocial('Twitter', fab)\">\n        <ion-icon name=\"logo-twitter\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button color=\"facebook\" (click)=\"openSocial('Facebook', fab)\">\n        <ion-icon name=\"logo-facebook\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/session-detail/session-detail.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/session-detail/session-detail.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSessionDetailSessionDetailHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button [defaultHref]=\"defaultHref\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"toggleFavorite()\">\n        <ion-icon *ngIf=\"!isFavorite\" slot=\"icon-only\" name=\"star-outline\"></ion-icon>\n        <ion-icon *ngIf=\"isFavorite\" slot=\"icon-only\" name=\"star\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"shareSession()\">\n        <ion-icon slot=\"icon-only\" name=\"share\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"session\" class=\"ion-padding\">\n    <h1>{{session.name}}</h1>\n    <span *ngFor=\"let track of session?.tracks\" [class]=\"'session-track-'+track.toLowerCase()\">{{track}}</span>\n    <p>{{session.description}}</p>\n    <ion-text color=\"medium\">\n      {{session.timeStart}} &ndash; {{session.timeEnd}}\n      <br /> {{session.location}}\n    </ion-text>\n  </div>\n\n  <ion-list>\n    <ion-item (click)=\"sessionClick('watch')\" button>\n      <ion-label color=\"primary\">Watch</ion-label>\n    </ion-item>\n    <ion-item (click)=\"sessionClick('add to calendar')\" button>\n      <ion-label color=\"primary\">Add to Calendar</ion-label>\n    </ion-item>\n    <ion-item (click)=\"sessionClick('mark as unwatched')\" button>\n      <ion-label color=\"primary\">Mark as Unwatched</ion-label>\n    </ion-item>\n    <ion-item (click)=\"sessionClick('download video')\" button>\n      <ion-label color=\"primary\">Download Video</ion-label>\n      <ion-icon slot=\"end\" color=\"primary\" size=\"small\" name=\"cloud-download\"></ion-icon>\n    </ion-item>\n    <ion-item (click)=\"sessionClick('leave feedback')\" button>\n      <ion-label color=\"primary\">Leave Feedback</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/speaker-detail/speaker-detail.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/speaker-detail/speaker-detail.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSpeakerDetailSpeakerDetailHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"speaker-detail\">\n  <ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"/app/tabs/speakers\"></ion-back-button>\n      </ion-buttons>\n      <ion-buttons *ngIf=\"speaker\" slot=\"end\">\n        <ion-button (click)=\"openContact(speaker)\">\n          <ion-icon slot=\"icon-only\" ios=\"call-outline\" md=\"call-sharp\"></ion-icon>\n        </ion-button>\n        <ion-button (click)=\"openSpeakerShare(speaker)\">\n          <ion-icon slot=\"icon-only\" ios=\"share-outline\" md=\"share-sharp\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n  <div class=\"speaker-background\">\n    <img [src]=\"speaker?.profilePic\" [alt]=\"speaker?.name\">\n    <h2>{{speaker?.name}}</h2>\n  </div>\n\n  <div class=\"ion-padding speaker-detail\">\n    <p>{{speaker?.about}} Say hello on social media!</p>\n\n    <hr>\n\n    <ion-chip color=\"twitter\" button (click)=\"openExternalUrl('https://twitter.com/' + speaker.twitter)\">\n      <ion-icon name=\"logo-twitter\"></ion-icon>\n      <ion-label>Twitter</ion-label>\n    </ion-chip>\n\n    <ion-chip color=\"dark\" button (click)=\"openExternalUrl('https://github.com/ionic-team/ionic')\">\n      <ion-icon name=\"logo-github\"></ion-icon>\n      <ion-label>GitHub</ion-label>\n    </ion-chip>\n\n    <ion-chip color=\"instagram\" button (click)=\"openExternalUrl('https://instagram.com/ionicframework')\">\n      <ion-icon name=\"logo-instagram\"></ion-icon>\n      <ion-label>Instagram</ion-label>\n    </ion-chip>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/speaker-list/speaker-list.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/speaker-list/speaker-list.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSpeakerListSpeakerListHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Speakers</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Speakers</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"12\" size-md=\"6\" *ngFor=\"let speaker of speakers\">\n        <ion-card class=\"speaker-card\">\n          <ion-card-header>\n            <ion-item detail=\"false\" lines=\"none\" class=\"speaker-item\" routerLink=\"/app/tabs/speakers/speaker-details/{{speaker.id}}\">\n              <ion-avatar slot=\"start\">\n                <img [src]=\"speaker.profilePic\" [alt]=\"speaker.name + ' profile picture'\">\n              </ion-avatar>\n              <ion-label>\n                <h2>{{speaker.name}}</h2>\n                <p>{{speaker.title}}</p>\n              </ion-label>\n            </ion-item>\n          </ion-card-header>\n\n          <ion-card-content>\n            <ion-list lines=\"none\">\n              <ion-item *ngFor=\"let session of speaker.sessions\" detail=\"false\" routerLink=\"/app/tabs/speakers/session/{{session.id}}\">\n                <ion-label>\n                  <h3>{{session.name}}</h3>\n                </ion-label>\n              </ion-item>\n\n              <ion-item detail=\"false\" routerLink=\"/app/tabs/speakers/speaker-details/{{speaker.id}}\">\n                <ion-label>\n                  <h3>About {{speaker.name}}</h3>\n                </ion-label>\n              </ion-item>\n            </ion-list>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs-page/tabs-page.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs-page/tabs-page.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTabsPageTabsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"schedule\">\n      <ion-icon name=\"calendar\"></ion-icon>\n      <ion-label>Schedule</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"speakers\">\n      <ion-icon name=\"people\"></ion-icon>\n      <ion-label>Speakers</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"map\">\n      <ion-icon name=\"location\"></ion-icon>\n      <ion-label>Map</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"about\">\n      <ion-icon name=\"information-circle\"></ion-icon>\n      <ion-label>About</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>\n";
    /***/
  },

  /***/
  "./src/app/pages/about-popover/about-popover.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/about-popover/about-popover.ts ***!
    \******************************************************/

  /*! exports provided: PopoverPage */

  /***/
  function srcAppPagesAboutPopoverAboutPopoverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopoverPage", function () {
      return PopoverPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var PopoverPage =
    /*#__PURE__*/
    function () {
      function PopoverPage(popoverCtrl) {
        _classCallCheck(this, PopoverPage);

        this.popoverCtrl = popoverCtrl;
      }

      _createClass(PopoverPage, [{
        key: "support",
        value: function support() {
          // this.app.getRootNavs()[0].push('/support');
          this.popoverCtrl.dismiss();
        }
      }, {
        key: "close",
        value: function close(url) {
          window.open(url, '_blank');
          this.popoverCtrl.dismiss();
        }
      }]);

      return PopoverPage;
    }();

    PopoverPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }];
    };

    PopoverPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: "\n    <ion-list>\n      <ion-item button (click)=\"close('https://ionicframework.com/getting-started')\">\n        <ion-label>Learn Ionic</ion-label>\n      </ion-item>\n      <ion-item button (click)=\"close('https://ionicframework.com/docs/')\">\n        <ion-label>Documentation</ion-label>\n      </ion-item>\n      <ion-item button (click)=\"close('https://showcase.ionicframework.com')\">\n        <ion-label>Showcase</ion-label>\n      </ion-item>\n      <ion-item button (click)=\"close('https://github.com/ionic-team/ionic')\">\n        <ion-label>GitHub Repo</ion-label>\n      </ion-item>\n      <ion-item button (click)=\"support()\">\n        <ion-label>Support</ion-label>\n      </ion-item>\n    </ion-list>\n  "
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])], PopoverPage);
    /***/
  },

  /***/
  "./src/app/pages/about/about-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/about/about-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: AboutPageRoutingModule */

  /***/
  function srcAppPagesAboutAboutRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutPageRoutingModule", function () {
      return AboutPageRoutingModule;
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


    var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./about */
    "./src/app/pages/about/about.ts");

    var routes = [{
      path: '',
      component: _about__WEBPACK_IMPORTED_MODULE_3__["AboutPage"]
    }];

    var AboutPageRoutingModule = function AboutPageRoutingModule() {
      _classCallCheck(this, AboutPageRoutingModule);
    };

    AboutPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AboutPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/about/about.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/about/about.module.ts ***!
    \*********************************************/

  /*! exports provided: AboutModule */

  /***/
  function srcAppPagesAboutAboutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutModule", function () {
      return AboutModule;
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


    var _about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./about */
    "./src/app/pages/about/about.ts");
    /* harmony import */


    var _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../about-popover/about-popover */
    "./src/app/pages/about-popover/about-popover.ts");
    /* harmony import */


    var _about_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./about-routing.module */
    "./src/app/pages/about/about-routing.module.ts");

    var AboutModule = function AboutModule() {
      _classCallCheck(this, AboutModule);
    };

    AboutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _about_routing_module__WEBPACK_IMPORTED_MODULE_7__["AboutPageRoutingModule"]],
      declarations: [_about__WEBPACK_IMPORTED_MODULE_5__["AboutPage"], _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_6__["PopoverPage"]],
      entryComponents: [_about_popover_about_popover__WEBPACK_IMPORTED_MODULE_6__["PopoverPage"]],
      bootstrap: [_about__WEBPACK_IMPORTED_MODULE_5__["AboutPage"]]
    })], AboutModule);
    /***/
  },

  /***/
  "./src/app/pages/about/about.scss":
  /*!****************************************!*\
    !*** ./src/app/pages/about/about.scss ***!
    \****************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAboutAboutScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-toolbar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  --background: transparent;\n  --color: white;\n}\n\nion-toolbar ion-button,\nion-toolbar ion-back-button,\nion-toolbar ion-menu-button {\n  --color: white;\n}\n\n.about-header {\n  position: relative;\n  width: 100%;\n  height: 30%;\n}\n\n.about-header .about-image {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  opacity: 0;\n  -webkit-transition: opacity 500ms ease-in-out;\n  transition: opacity 500ms ease-in-out;\n}\n\n.about-header .madison {\n  background-image: url(/assets/img/about/madison.jpg);\n}\n\n.about-header .austin {\n  background-image: url(/assets/img/about/austin.jpg);\n}\n\n.about-header .chicago {\n  background-image: url(/assets/img/about/chicago.jpg);\n}\n\n.about-header .seattle {\n  background-image: url(/assets/img/about/seattle.jpg);\n}\n\n.about-info {\n  position: absolute;\n  margin-top: -10px;\n  border-radius: 10px;\n  background: var(--ion-background-color, #fff);\n}\n\n.about-info h3 {\n  margin-top: 0;\n}\n\n.about-info ion-list {\n  padding-top: 0;\n}\n\n.about-info p {\n  line-height: 130%;\n  color: var(--ion-color-dark);\n}\n\n.about-info ion-icon {\n  -webkit-margin-end: 32px;\n          margin-inline-end: 32px;\n}\n\n/*\n * iOS Only\n */\n\n.ios .about-info {\n  --ion-padding: 19px;\n}\n\n.ios .about-info h3 {\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dyb3VwMTAvRG9jdW1lbnRzL1N1ZGhha2FyL0xlYXJuaW5nL2Jja3VwL2xpZmVTdG9yeUFwcC91aS9saWZlc3RvcnlfdWkvc3JjL2FwcC9wYWdlcy9hYm91dC9hYm91dC5zY3NzIiwic3JjL2FwcC9wYWdlcy9hYm91dC9hYm91dC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFFQSx5QkFBQTtFQUNBLGNBQUE7QUNERjs7QURJQTs7O0VBR0UsY0FBQTtBQ0RGOztBRElBO0VBQ0Usa0JBQUE7RUFFQSxXQUFBO0VBQ0EsV0FBQTtBQ0ZGOztBREtBO0VBQ0Usa0JBQUE7RUFFQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBRUEsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBRUEsVUFBQTtFQUVBLDZDQUFBO0VBQUEscUNBQUE7QUNORjs7QURTQTtFQUNFLG9EQUFBO0FDTkY7O0FEUUE7RUFDRSxtREFBQTtBQ0xGOztBRE9BO0VBQ0Usb0RBQUE7QUNKRjs7QURNQTtFQUNFLG9EQUFBO0FDSEY7O0FETUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2Q0FBQTtBQ0hGOztBRE1BO0VBQ0UsYUFBQTtBQ0hGOztBRE1BO0VBQ0UsY0FBQTtBQ0hGOztBRE1BO0VBQ0UsaUJBQUE7RUFFQSw0QkFBQTtBQ0pGOztBRE9BO0VBQ0Usd0JBQUE7VUFBQSx1QkFBQTtBQ0pGOztBRE9BOztFQUFBOztBQUlBO0VBQ0UsbUJBQUE7QUNMRjs7QURRQTtFQUNFLGdCQUFBO0FDTEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hYm91dC9hYm91dC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcblxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbixcbmlvbi10b29sYmFyIGlvbi1iYWNrLWJ1dHRvbixcbmlvbi10b29sYmFyIGlvbi1tZW51LWJ1dHRvbiB7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG4uYWJvdXQtaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwJTtcbn1cblxuLmFib3V0LWhlYWRlciAuYWJvdXQtaW1hZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblxuICBvcGFjaXR5OiAwO1xuXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgNTAwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5hYm91dC1oZWFkZXIgLm1hZGlzb24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvYWJvdXQvbWFkaXNvbi5qcGcpO1xufVxuLmFib3V0LWhlYWRlciAuYXVzdGluIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2Fib3V0L2F1c3Rpbi5qcGcpO1xufVxuLmFib3V0LWhlYWRlciAuY2hpY2FnbyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy9hYm91dC9jaGljYWdvLmpwZyk7XG59XG4uYWJvdXQtaGVhZGVyIC5zZWF0dGxlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2Fib3V0L3NlYXR0bGUuanBnKTtcbn1cblxuLmFib3V0LWluZm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZik7XG59XG5cbi5hYm91dC1pbmZvIGgzIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLmFib3V0LWluZm8gaW9uLWxpc3Qge1xuICBwYWRkaW5nLXRvcDogMDtcbn1cblxuLmFib3V0LWluZm8gcCB7XG4gIGxpbmUtaGVpZ2h0OiAxMzAlO1xuXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59XG5cbi5hYm91dC1pbmZvIGlvbi1pY29uIHtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDMycHg7XG59XG5cbi8qXG4gKiBpT1MgT25seVxuICovXG5cbi5pb3MgLmFib3V0LWluZm8ge1xuICAtLWlvbi1wYWRkaW5nOiAxOXB4O1xufVxuXG4uaW9zIC5hYm91dC1pbmZvIGgzIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbiIsImlvbi10b29sYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbixcbmlvbi10b29sYmFyIGlvbi1iYWNrLWJ1dHRvbixcbmlvbi10b29sYmFyIGlvbi1tZW51LWJ1dHRvbiB7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG4uYWJvdXQtaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMCU7XG59XG5cbi5hYm91dC1oZWFkZXIgLmFib3V0LWltYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSA1MDBtcyBlYXNlLWluLW91dDtcbn1cblxuLmFib3V0LWhlYWRlciAubWFkaXNvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy9hYm91dC9tYWRpc29uLmpwZyk7XG59XG5cbi5hYm91dC1oZWFkZXIgLmF1c3RpbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy9hYm91dC9hdXN0aW4uanBnKTtcbn1cblxuLmFib3V0LWhlYWRlciAuY2hpY2FnbyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy9hYm91dC9jaGljYWdvLmpwZyk7XG59XG5cbi5hYm91dC1oZWFkZXIgLnNlYXR0bGUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvYWJvdXQvc2VhdHRsZS5qcGcpO1xufVxuXG4uYWJvdXQtaW5mbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKTtcbn1cblxuLmFib3V0LWluZm8gaDMge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4uYWJvdXQtaW5mbyBpb24tbGlzdCB7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4uYWJvdXQtaW5mbyBwIHtcbiAgbGluZS1oZWlnaHQ6IDEzMCU7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59XG5cbi5hYm91dC1pbmZvIGlvbi1pY29uIHtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDMycHg7XG59XG5cbi8qXG4gKiBpT1MgT25seVxuICovXG4uaW9zIC5hYm91dC1pbmZvIHtcbiAgLS1pb24tcGFkZGluZzogMTlweDtcbn1cblxuLmlvcyAuYWJvdXQtaW5mbyBoMyB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/about/about.ts":
  /*!**************************************!*\
    !*** ./src/app/pages/about/about.ts ***!
    \**************************************/

  /*! exports provided: AboutPage */

  /***/
  function srcAppPagesAboutAboutTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutPage", function () {
      return AboutPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../about-popover/about-popover */
    "./src/app/pages/about-popover/about-popover.ts");

    var AboutPage =
    /*#__PURE__*/
    function () {
      function AboutPage(popoverCtrl) {
        _classCallCheck(this, AboutPage);

        this.popoverCtrl = popoverCtrl;
        this.location = 'madison';
        this.conferenceDate = '2047-05-17';
        this.selectOptions = {
          header: 'Select a Location'
        };
      }

      _createClass(AboutPage, [{
        key: "presentPopover",
        value: function presentPopover(event) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var popover;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.popoverCtrl.create({
                      component: _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_3__["PopoverPage"],
                      event: event
                    });

                  case 2:
                    popover = _context.sent;
                    _context.next = 5;
                    return popover.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return AboutPage;
    }();

    AboutPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }];
    };

    AboutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-about',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about.scss */
      "./src/app/pages/about/about.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])], AboutPage);
    /***/
  },

  /***/
  "./src/app/pages/map/map-dark-style.js":
  /*!*********************************************!*\
    !*** ./src/app/pages/map/map-dark-style.js ***!
    \*********************************************/

  /*! exports provided: darkStyle */

  /***/
  function srcAppPagesMapMapDarkStyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "darkStyle", function () {
      return darkStyle;
    });

    var darkStyle = [{
      "elementType": "geometry",
      "stylers": [{
        "color": "#242f3e"
      }]
    }, {
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#746855"
      }]
    }, {
      "elementType": "labels.text.stroke",
      "stylers": [{
        "color": "#242f3e"
      }]
    }, {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#d59563"
      }]
    }, {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#d59563"
      }]
    }, {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [{
        "color": "#263c3f"
      }]
    }, {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#6b9a76"
      }]
    }, {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [{
        "color": "#38414e"
      }]
    }, {
      "featureType": "road",
      "elementType": "geometry.stroke",
      "stylers": [{
        "color": "#212a37"
      }]
    }, {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#9ca5b3"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [{
        "color": "#746855"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [{
        "color": "#1f2835"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#f3d19c"
      }]
    }, {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [{
        "color": "#2f3948"
      }]
    }, {
      "featureType": "transit.station",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#d59563"
      }]
    }, {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [{
        "color": "#17263c"
      }]
    }, {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#515c6d"
      }]
    }, {
      "featureType": "water",
      "elementType": "labels.text.stroke",
      "stylers": [{
        "color": "#17263c"
      }]
    }];
    /***/
  },

  /***/
  "./src/app/pages/map/map-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/map/map-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: MapPageRoutingModule */

  /***/
  function srcAppPagesMapMapRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapPageRoutingModule", function () {
      return MapPageRoutingModule;
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


    var _map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./map */
    "./src/app/pages/map/map.ts");

    var routes = [{
      path: '',
      component: _map__WEBPACK_IMPORTED_MODULE_3__["MapPage"]
    }];

    var MapPageRoutingModule = function MapPageRoutingModule() {
      _classCallCheck(this, MapPageRoutingModule);
    };

    MapPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MapPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/map/map.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/map/map.module.ts ***!
    \*****************************************/

  /*! exports provided: MapModule */

  /***/
  function srcAppPagesMapMapModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapModule", function () {
      return MapModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./map */
    "./src/app/pages/map/map.ts");
    /* harmony import */


    var _map_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./map-routing.module */
    "./src/app/pages/map/map-routing.module.ts");

    var MapModule = function MapModule() {
      _classCallCheck(this, MapModule);
    };

    MapModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _map_routing_module__WEBPACK_IMPORTED_MODULE_5__["MapPageRoutingModule"]],
      declarations: [_map__WEBPACK_IMPORTED_MODULE_4__["MapPage"]]
    })], MapModule);
    /***/
  },

  /***/
  "./src/app/pages/map/map.scss":
  /*!************************************!*\
    !*** ./src/app/pages/map/map.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMapMapScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".map-canvas {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: transparent;\n  opacity: 0;\n  -webkit-transition: opacity 150ms ease-in;\n  transition: opacity 150ms ease-in;\n}\n\n.show-map {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dyb3VwMTAvRG9jdW1lbnRzL1N1ZGhha2FyL0xlYXJuaW5nL2Jja3VwL2xpZmVTdG9yeUFwcC91aS9saWZlc3RvcnlfdWkvc3JjL2FwcC9wYWdlcy9tYXAvbWFwLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21hcC9tYXAuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBRUEsWUFBQTtFQUNBLFdBQUE7RUFFQSw2QkFBQTtFQUVBLFVBQUE7RUFDQSx5Q0FBQTtFQUFBLGlDQUFBO0FDRkY7O0FES0E7RUFDRSxVQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYXAvbWFwLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwLWNhbnZhcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMTUwbXMgZWFzZS1pbjtcbn1cblxuLnNob3ctbWFwIHtcbiAgb3BhY2l0eTogMTtcbn1cbiIsIi5tYXAtY2FudmFzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBlYXNlLWluO1xufVxuXG4uc2hvdy1tYXAge1xuICBvcGFjaXR5OiAxO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/map/map.ts":
  /*!**********************************!*\
    !*** ./src/app/pages/map/map.ts ***!
    \**********************************/

  /*! exports provided: MapPage */

  /***/
  function srcAppPagesMapMapTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapPage", function () {
      return MapPage;
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


    var _providers_conference_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../providers/conference-data */
    "./src/app/providers/conference-data.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _map_dark_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./map-dark-style */
    "./src/app/pages/map/map-dark-style.js");

    var MapPage =
    /*#__PURE__*/
    function () {
      function MapPage(doc, confData, platform) {
        _classCallCheck(this, MapPage);

        this.doc = doc;
        this.confData = confData;
        this.platform = platform;
      }

      _createClass(MapPage, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            var appEl, isDark, style, googleMaps, map, observer;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    appEl = this.doc.querySelector('ion-app');
                    isDark = false;
                    style = [];

                    if (appEl.classList.contains('dark-theme')) {
                      style = _map_dark_style__WEBPACK_IMPORTED_MODULE_5__["darkStyle"];
                    }

                    _context2.next = 6;
                    return getGoogleMaps('AIzaSyB8pf6ZdFQj5qw7rc_HSGrhUwQKfIe9ICw');

                  case 6:
                    googleMaps = _context2.sent;
                    this.confData.getMap().subscribe(function (mapData) {
                      var mapEle = _this.mapElement.nativeElement;
                      map = new googleMaps.Map(mapEle, {
                        center: mapData.find(function (d) {
                          return d.center;
                        }),
                        zoom: 16,
                        styles: style
                      });
                      mapData.forEach(function (markerData) {
                        var infoWindow = new googleMaps.InfoWindow({
                          content: "<h5>".concat(markerData.name, "</h5>")
                        });
                        var marker = new googleMaps.Marker({
                          position: markerData,
                          map: map,
                          title: markerData.name
                        });
                        marker.addListener('click', function () {
                          infoWindow.open(map, marker);
                        });
                      });
                      googleMaps.event.addListenerOnce(map, 'idle', function () {
                        mapEle.classList.add('show-map');
                      });
                    });
                    observer = new MutationObserver(function (mutations) {
                      mutations.forEach(function (mutation) {
                        if (mutation.attributeName === 'class') {
                          var el = mutation.target;
                          isDark = el.classList.contains('dark-theme');

                          if (map && isDark) {
                            map.setOptions({
                              styles: _map_dark_style__WEBPACK_IMPORTED_MODULE_5__["darkStyle"]
                            });
                          } else if (map) {
                            map.setOptions({
                              styles: []
                            });
                          }
                        }
                      });
                    });
                    observer.observe(appEl, {
                      attributes: true
                    });

                  case 10:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return MapPage;
    }();

    MapPage.ctorParameters = function () {
      return [{
        type: Document,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
        }]
      }, {
        type: _providers_conference_data__WEBPACK_IMPORTED_MODULE_2__["ConferenceData"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mapCanvas', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], MapPage.prototype, "mapElement", void 0);
    MapPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-map',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./map.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/map/map.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./map.scss */
      "./src/app/pages/map/map.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Document, _providers_conference_data__WEBPACK_IMPORTED_MODULE_2__["ConferenceData"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])], MapPage);

    function getGoogleMaps(apiKey) {
      var win = window;
      var googleModule = win.google;

      if (googleModule && googleModule.maps) {
        return Promise.resolve(googleModule.maps);
      }

      return new Promise(function (resolve, reject) {
        var script = document.createElement('script');
        script.src = "https://maps.googleapis.com/maps/api/js?key=".concat(apiKey, "&v=3.31");
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        script.onload = function () {
          var googleModule2 = win.google;

          if (googleModule2 && googleModule2.maps) {
            resolve(googleModule2.maps);
          } else {
            reject('google maps not available');
          }
        };
      });
    }
    /***/

  },

  /***/
  "./src/app/pages/schedule-filter/schedule-filter.scss":
  /*!************************************************************!*\
    !*** ./src/app/pages/schedule-filter/schedule-filter.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesScheduleFilterScheduleFilterScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*\n * Material Design\n */\n.md ion-toolbar ion-button {\n  text-transform: capitalize;\n  letter-spacing: 0;\n}\n.md ion-checkbox {\n  --background-checked: transparent;\n  --border-color: transparent;\n  --border-color-checked: transparent;\n  --checkmark-color: var(--ion-color-primary);\n}\n.md ion-list {\n  background: inherit;\n}\n/*\n * iOS\n */\n.ios ion-list-header {\n  margin-top: 10px;\n}\n.ios ion-label {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dyb3VwMTAvRG9jdW1lbnRzL1N1ZGhha2FyL0xlYXJuaW5nL2Jja3VwL2xpZmVTdG9yeUFwcC91aS9saWZlc3RvcnlfdWkvc3JjL2FwcC9wYWdlcy9zY2hlZHVsZS1maWx0ZXIvc2NoZWR1bGUtZmlsdGVyLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NjaGVkdWxlLWZpbHRlci9zY2hlZHVsZS1maWx0ZXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFBQTtBQUlBO0VBQ0UsMEJBQUE7RUFDQSxpQkFBQTtBQ0FGO0FER0E7RUFDRSxpQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQ0FBQTtBQ0FGO0FER0E7RUFDRSxtQkFBQTtBQ0FGO0FESUE7O0VBQUE7QUFJQTtFQUNFLGdCQUFBO0FDRkY7QURLQTtFQUNFLCtCQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zY2hlZHVsZS1maWx0ZXIvc2NoZWR1bGUtZmlsdGVyLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogTWF0ZXJpYWwgRGVzaWduXG4gKi9cblxuLm1kIGlvbi10b29sYmFyIGlvbi1idXR0b24ge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG5cbi5tZCBpb24tY2hlY2tib3gge1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG4gIC0tY2hlY2ttYXJrLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5tZCBpb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG59XG5cblxuLypcbiAqIGlPU1xuICovXG5cbi5pb3MgaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmlvcyBpb24tbGFiZWwge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuIiwiLypcbiAqIE1hdGVyaWFsIERlc2lnblxuICovXG4ubWQgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbiB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cblxuLm1kIGlvbi1jaGVja2JveCB7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcbiAgLS1jaGVja21hcmstY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLm1kIGlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuLypcbiAqIGlPU1xuICovXG4uaW9zIGlvbi1saXN0LWhlYWRlciB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5pb3MgaW9uLWxhYmVsIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/schedule-filter/schedule-filter.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/schedule-filter/schedule-filter.ts ***!
    \**********************************************************/

  /*! exports provided: ScheduleFilterPage */

  /***/
  function srcAppPagesScheduleFilterScheduleFilterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScheduleFilterPage", function () {
      return ScheduleFilterPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _providers_conference_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../providers/conference-data */
    "./src/app/providers/conference-data.ts");

    var ScheduleFilterPage =
    /*#__PURE__*/
    function () {
      function ScheduleFilterPage(confData, config, modalCtrl, navParams) {
        _classCallCheck(this, ScheduleFilterPage);

        this.confData = confData;
        this.config = config;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.tracks = [];
      }

      _createClass(ScheduleFilterPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this2 = this;

          this.ios = this.config.get('mode') === "ios"; // passed in array of track names that should be excluded (unchecked)

          var excludedTrackNames = this.navParams.get('excludedTracks');
          this.confData.getTracks().subscribe(function (tracks) {
            tracks.forEach(function (track) {
              _this2.tracks.push({
                name: track.name,
                icon: track.icon,
                isChecked: excludedTrackNames.indexOf(track.name) === -1
              });
            });
          });
        }
      }, {
        key: "selectAll",
        value: function selectAll(check) {
          // set all to checked or unchecked
          this.tracks.forEach(function (track) {
            track.isChecked = check;
          });
        }
      }, {
        key: "applyFilters",
        value: function applyFilters() {
          // Pass back a new array of track names to exclude
          var excludedTrackNames = this.tracks.filter(function (c) {
            return !c.isChecked;
          }).map(function (c) {
            return c.name;
          });
          this.dismiss(excludedTrackNames);
        }
      }, {
        key: "dismiss",
        value: function dismiss(data) {
          // using the injected ModalController this page
          // can "dismiss" itself and pass back data
          this.modalCtrl.dismiss(data);
        }
      }]);

      return ScheduleFilterPage;
    }();

    ScheduleFilterPage.ctorParameters = function () {
      return [{
        type: _providers_conference_data__WEBPACK_IMPORTED_MODULE_3__["ConferenceData"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Config"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }];
    };

    ScheduleFilterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-schedule-filter',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./schedule-filter.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/schedule-filter/schedule-filter.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./schedule-filter.scss */
      "./src/app/pages/schedule-filter/schedule-filter.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_conference_data__WEBPACK_IMPORTED_MODULE_3__["ConferenceData"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Config"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])], ScheduleFilterPage);
    /***/
  },

  /***/
  "./src/app/pages/schedule/schedule-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/schedule/schedule-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: SchedulePageRoutingModule */

  /***/
  function srcAppPagesScheduleScheduleRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SchedulePageRoutingModule", function () {
      return SchedulePageRoutingModule;
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


    var _schedule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./schedule */
    "./src/app/pages/schedule/schedule.ts");

    var routes = [{
      path: '',
      component: _schedule__WEBPACK_IMPORTED_MODULE_3__["SchedulePage"]
    }];

    var SchedulePageRoutingModule = function SchedulePageRoutingModule() {
      _classCallCheck(this, SchedulePageRoutingModule);
    };

    SchedulePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SchedulePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/schedule/schedule.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/schedule/schedule.module.ts ***!
    \***************************************************/

  /*! exports provided: ScheduleModule */

  /***/
  function srcAppPagesScheduleScheduleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScheduleModule", function () {
      return ScheduleModule;
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


    var _schedule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./schedule */
    "./src/app/pages/schedule/schedule.ts");
    /* harmony import */


    var _schedule_filter_schedule_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../schedule-filter/schedule-filter */
    "./src/app/pages/schedule-filter/schedule-filter.ts");
    /* harmony import */


    var _schedule_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./schedule-routing.module */
    "./src/app/pages/schedule/schedule-routing.module.ts");

    var ScheduleModule = function ScheduleModule() {
      _classCallCheck(this, ScheduleModule);
    };

    ScheduleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _schedule_routing_module__WEBPACK_IMPORTED_MODULE_7__["SchedulePageRoutingModule"]],
      declarations: [_schedule__WEBPACK_IMPORTED_MODULE_5__["SchedulePage"], _schedule_filter_schedule_filter__WEBPACK_IMPORTED_MODULE_6__["ScheduleFilterPage"]],
      entryComponents: [_schedule_filter_schedule_filter__WEBPACK_IMPORTED_MODULE_6__["ScheduleFilterPage"]]
    })], ScheduleModule);
    /***/
  },

  /***/
  "./src/app/pages/schedule/schedule.scss":
  /*!**********************************************!*\
    !*** ./src/app/pages/schedule/schedule.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesScheduleScheduleScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-fab-button {\n  --background: var(--ion-color-step-150, #fff);\n  --background-hover: var(--ion-color-step-200, #f2f2f2);\n  --background-focused: var(--ion-color-step-250, #d9d9d9);\n  --color: var(--ion-color-primary, #3880ff);\n}\n\n/*\n * Material Design uses the ripple for activated\n * so only style the iOS activated background\n */\n\n.ios ion-fab-button {\n  --background-activated: var(--ion-color-step-250, #d9d9d9);\n}\n\nion-item-sliding[track=ionic] ion-label {\n  border-left: 2px solid var(--ion-color-primary);\n  padding-left: 10px;\n}\n\nion-item-sliding[track=angular] ion-label {\n  border-left: 2px solid #ac282b;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=communication] ion-label {\n  border-left: 2px solid #8e8d93;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=tooling] ion-label {\n  border-left: 2px solid #fe4c52;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=services] ion-label {\n  border-left: 2px solid #fd8b2d;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=design] ion-label {\n  border-left: 2px solid #fed035;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=workshop] ion-label {\n  border-left: 2px solid #69bb7b;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=food] ion-label {\n  border-left: 2px solid #3bc7c4;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=documentation] ion-label {\n  border-left: 2px solid #b16be3;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=navigation] ion-label {\n  border-left: 2px solid #6600cc;\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dyb3VwMTAvRG9jdW1lbnRzL1N1ZGhha2FyL0xlYXJuaW5nL2Jja3VwL2xpZmVTdG9yeUFwcC91aS9saWZlc3RvcnlfdWkvc3JjL2FwcC9wYWdlcy9zY2hlZHVsZS9zY2hlZHVsZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zY2hlZHVsZS9zY2hlZHVsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkNBQUE7RUFDQSxzREFBQTtFQUNBLHdEQUFBO0VBRUEsMENBQUE7QUNBRjs7QURHQTs7O0VBQUE7O0FBSUE7RUFDRSwwREFBQTtBQ0FGOztBRGlCRTtFQUNFLCtDQUFBO0VBQ0Esa0JBQUE7QUNkSjs7QURZRTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7QUNUSjs7QURPRTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7QUNKSjs7QURFRTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURIRTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7QUNNSjs7QURSRTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7QUNXSjs7QURiRTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7QUNnQko7O0FEbEJFO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtBQ3FCSjs7QUR2QkU7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0FDMEJKOztBRDVCRTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7QUMrQkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zY2hlZHVsZS9zY2hlZHVsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWZhYi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2ZmZik7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMjAwLCAjZjJmMmYyKTtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTI1MCwgI2Q5ZDlkOSk7XG5cbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzODgwZmYpO1xufVxuXG4vKlxuICogTWF0ZXJpYWwgRGVzaWduIHVzZXMgdGhlIHJpcHBsZSBmb3IgYWN0aXZhdGVkXG4gKiBzbyBvbmx5IHN0eWxlIHRoZSBpT1MgYWN0aXZhdGVkIGJhY2tncm91bmRcbiAqL1xuLmlvcyBpb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTI1MCwgI2Q5ZDlkOSk7XG59XG5cbiRjYXRlZ29yaWVzOiAoXG4gIGlvbmljOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSksXG4gIGFuZ3VsYXI6ICNhYzI4MmIsXG4gIGNvbW11bmljYXRpb246ICM4ZThkOTMsXG4gIHRvb2xpbmc6ICNmZTRjNTIsXG4gIHNlcnZpY2VzOiAjZmQ4YjJkLFxuICBkZXNpZ246ICNmZWQwMzUsXG4gIHdvcmtzaG9wOiAjNjliYjdiLFxuICBmb29kOiAjM2JjN2M0LFxuICBkb2N1bWVudGF0aW9uOiAjYjE2YmUzLFxuICBuYXZpZ2F0aW9uOiAjNjYwMGNjXG4pO1xuXG5AZWFjaCAkdHJhY2ssICR2YWx1ZSBpbiBtYXAtcmVtb3ZlKCRjYXRlZ29yaWVzKSB7XG4gIGlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9JyN7JHRyYWNrfSddIGlvbi1sYWJlbCB7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAkdmFsdWU7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB9XG59XG4iLCJpb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZmZmKTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB2YXIoLS1pb24tY29sb3Itc3RlcC0yMDAsICNmMmYyZjIpO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMjUwLCAjZDlkOWQ5KTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzODgwZmYpO1xufVxuXG4vKlxuICogTWF0ZXJpYWwgRGVzaWduIHVzZXMgdGhlIHJpcHBsZSBmb3IgYWN0aXZhdGVkXG4gKiBzbyBvbmx5IHN0eWxlIHRoZSBpT1MgYWN0aXZhdGVkIGJhY2tncm91bmRcbiAqL1xuLmlvcyBpb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTI1MCwgI2Q5ZDlkOSk7XG59XG5cbmlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9aW9uaWNdIGlvbi1sYWJlbCB7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9YW5ndWxhcl0gaW9uLWxhYmVsIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjYWMyODJiO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9Y29tbXVuaWNhdGlvbl0gaW9uLWxhYmVsIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjOGU4ZDkzO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9dG9vbGluZ10gaW9uLWxhYmVsIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZmU0YzUyO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9c2VydmljZXNdIGlvbi1sYWJlbCB7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2ZkOGIyZDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24taXRlbS1zbGlkaW5nW3RyYWNrPWRlc2lnbl0gaW9uLWxhYmVsIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZmVkMDM1O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9d29ya3Nob3BdIGlvbi1sYWJlbCB7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzY5YmI3YjtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24taXRlbS1zbGlkaW5nW3RyYWNrPWZvb2RdIGlvbi1sYWJlbCB7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzNiYzdjNDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24taXRlbS1zbGlkaW5nW3RyYWNrPWRvY3VtZW50YXRpb25dIGlvbi1sYWJlbCB7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2IxNmJlMztcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24taXRlbS1zbGlkaW5nW3RyYWNrPW5hdmlnYXRpb25dIGlvbi1sYWJlbCB7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzY2MDBjYztcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/schedule/schedule.ts":
  /*!********************************************!*\
    !*** ./src/app/pages/schedule/schedule.ts ***!
    \********************************************/

  /*! exports provided: SchedulePage */

  /***/
  function srcAppPagesScheduleScheduleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SchedulePage", function () {
      return SchedulePage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _schedule_filter_schedule_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../schedule-filter/schedule-filter */
    "./src/app/pages/schedule-filter/schedule-filter.ts");
    /* harmony import */


    var _providers_conference_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../providers/conference-data */
    "./src/app/providers/conference-data.ts");
    /* harmony import */


    var _providers_user_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../providers/user-data */
    "./src/app/providers/user-data.ts");

    var SchedulePage =
    /*#__PURE__*/
    function () {
      function SchedulePage(alertCtrl, confData, loadingCtrl, modalCtrl, router, routerOutlet, toastCtrl, user, config) {
        _classCallCheck(this, SchedulePage);

        this.alertCtrl = alertCtrl;
        this.confData = confData;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.routerOutlet = routerOutlet;
        this.toastCtrl = toastCtrl;
        this.user = user;
        this.config = config;
        this.dayIndex = 0;
        this.queryText = '';
        this.segment = 'all';
        this.excludeTracks = [];
        this.shownSessions = [];
        this.groups = [];
      }

      _createClass(SchedulePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.updateSchedule();
          this.ios = this.config.get('mode') === 'ios';
        }
      }, {
        key: "updateSchedule",
        value: function updateSchedule() {
          var _this3 = this;

          // Close any open sliding items when the schedule updates
          if (this.scheduleList) {
            this.scheduleList.closeSlidingItems();
          }

          this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe(function (data) {
            _this3.shownSessions = data.shownSessions;
            _this3.groups = data.groups;
          });
        }
      }, {
        key: "presentFilter",
        value: function presentFilter() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var modal, _ref, data;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.modalCtrl.create({
                      component: _schedule_filter_schedule_filter__WEBPACK_IMPORTED_MODULE_4__["ScheduleFilterPage"],
                      swipeToClose: true,
                      presentingElement: this.routerOutlet.nativeEl,
                      componentProps: {
                        excludedTracks: this.excludeTracks
                      }
                    });

                  case 2:
                    modal = _context3.sent;
                    _context3.next = 5;
                    return modal.present();

                  case 5:
                    _context3.next = 7;
                    return modal.onWillDismiss();

                  case 7:
                    _ref = _context3.sent;
                    data = _ref.data;

                    if (data) {
                      this.excludeTracks = data;
                      this.updateSchedule();
                    }

                  case 10:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "addFavorite",
        value: function addFavorite(slidingItem, sessionData) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var toast;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (!this.user.hasFavorite(sessionData.name)) {
                      _context4.next = 4;
                      break;
                    }

                    // Prompt to remove favorite
                    this.removeFavorite(slidingItem, sessionData, 'Favorite already added');
                    _context4.next = 11;
                    break;

                  case 4:
                    // Add as a favorite
                    this.user.addFavorite(sessionData.name); // Close the open item

                    slidingItem.close(); // Create a toast

                    _context4.next = 8;
                    return this.toastCtrl.create({
                      header: "".concat(sessionData.name, " was successfully added as a favorite."),
                      duration: 3000,
                      buttons: [{
                        text: 'Close',
                        role: 'cancel'
                      }]
                    });

                  case 8:
                    toast = _context4.sent;
                    _context4.next = 11;
                    return toast.present();

                  case 11:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "removeFavorite",
        value: function removeFavorite(slidingItem, sessionData, title) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var _this4 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.alertCtrl.create({
                      header: title,
                      message: 'Would you like to remove this session from your favorites?',
                      buttons: [{
                        text: 'Cancel',
                        handler: function handler() {
                          // they clicked the cancel button, do not remove the session
                          // close the sliding item and hide the option buttons
                          slidingItem.close();
                        }
                      }, {
                        text: 'Remove',
                        handler: function handler() {
                          // they want to remove this session from their favorites
                          _this4.user.removeFavorite(sessionData.name);

                          _this4.updateSchedule(); // close the sliding item and hide the option buttons


                          slidingItem.close();
                        }
                      }]
                    });

                  case 2:
                    alert = _context5.sent;
                    _context5.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "openSocial",
        value: function openSocial(network, fab) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var loading;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.loadingCtrl.create({
                      message: "Posting to ".concat(network),
                      duration: Math.random() * 1000 + 500
                    });

                  case 2:
                    loading = _context6.sent;
                    _context6.next = 5;
                    return loading.present();

                  case 5:
                    _context6.next = 7;
                    return loading.onWillDismiss();

                  case 7:
                    fab.close();

                  case 8:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }]);

      return SchedulePage;
    }();

    SchedulePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _providers_conference_data__WEBPACK_IMPORTED_MODULE_5__["ConferenceData"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRouterOutlet"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }, {
        type: _providers_user_data__WEBPACK_IMPORTED_MODULE_6__["UserData"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Config"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scheduleList', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonList"])], SchedulePage.prototype, "scheduleList", void 0);
    SchedulePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-schedule',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./schedule.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/schedule/schedule.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./schedule.scss */
      "./src/app/pages/schedule/schedule.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _providers_conference_data__WEBPACK_IMPORTED_MODULE_5__["ConferenceData"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRouterOutlet"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _providers_user_data__WEBPACK_IMPORTED_MODULE_6__["UserData"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Config"]])], SchedulePage);
    /***/
  },

  /***/
  "./src/app/pages/session-detail/session-detail-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/session-detail/session-detail-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: SessionDetailPageRoutingModule */

  /***/
  function srcAppPagesSessionDetailSessionDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SessionDetailPageRoutingModule", function () {
      return SessionDetailPageRoutingModule;
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


    var _session_detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./session-detail */
    "./src/app/pages/session-detail/session-detail.ts");

    var routes = [{
      path: '',
      component: _session_detail__WEBPACK_IMPORTED_MODULE_3__["SessionDetailPage"]
    }];

    var SessionDetailPageRoutingModule = function SessionDetailPageRoutingModule() {
      _classCallCheck(this, SessionDetailPageRoutingModule);
    };

    SessionDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SessionDetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/session-detail/session-detail.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/session-detail/session-detail.module.ts ***!
    \***************************************************************/

  /*! exports provided: SessionDetailModule */

  /***/
  function srcAppPagesSessionDetailSessionDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SessionDetailModule", function () {
      return SessionDetailModule;
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


    var _session_detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./session-detail */
    "./src/app/pages/session-detail/session-detail.ts");
    /* harmony import */


    var _session_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./session-detail-routing.module */
    "./src/app/pages/session-detail/session-detail-routing.module.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var SessionDetailModule = function SessionDetailModule() {
      _classCallCheck(this, SessionDetailModule);
    };

    SessionDetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _session_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__["SessionDetailPageRoutingModule"]],
      declarations: [_session_detail__WEBPACK_IMPORTED_MODULE_3__["SessionDetailPage"]]
    })], SessionDetailModule);
    /***/
  },

  /***/
  "./src/app/pages/session-detail/session-detail.scss":
  /*!**********************************************************!*\
    !*** ./src/app/pages/session-detail/session-detail.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSessionDetailSessionDetailScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".session-track-ionic {\n  color: var(--ion-color-primary);\n}\n\n.session-track-angular {\n  color: var(--ion-color-angular);\n}\n\n.session-track-communication {\n  color: var(--ion-color-communication);\n}\n\n.session-track-tooling {\n  color: var(--ion-color-tooling);\n}\n\n.session-track-services {\n  color: var(--ion-color-services);\n}\n\n.session-track-design {\n  color: var(--ion-color-design);\n}\n\n.session-track-workshop {\n  color: var(--ion-color-workshop);\n}\n\n.session-track-food {\n  color: var(--ion-color-food);\n}\n\n.session-track-documentation {\n  color: var(--ion-color-documentation);\n}\n\n.session-track-navigation {\n  color: var(--ion-color-navigation);\n}\n\n/* Favorite Icon\n * --------------------------------------------------------\n */\n\n.show-favorite {\n  position: relative;\n}\n\n.icon-heart-empty,\n.icon-heart {\n  --border-radius: 50%;\n  --padding-start: 0;\n  --padding-end: 0;\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  width: 48px;\n  height: 48px;\n  font-size: 16px;\n  -webkit-transition: -webkit-transform 300ms ease;\n  transition: -webkit-transform 300ms ease;\n  transition: transform 300ms ease;\n  transition: transform 300ms ease, -webkit-transform 300ms ease;\n}\n\n.icon-heart-empty {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n\n.icon-heart {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n\n.show-favorite .icon-heart {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n\n.show-favorite .icon-heart-empty {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n\nh1 {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dyb3VwMTAvRG9jdW1lbnRzL1N1ZGhha2FyL0xlYXJuaW5nL2Jja3VwL2xpZmVTdG9yeUFwcC91aS9saWZlc3RvcnlfdWkvc3JjL2FwcC9wYWdlcy9zZXNzaW9uLWRldGFpbC9zZXNzaW9uLWRldGFpbC5zY3NzIiwic3JjL2FwcC9wYWdlcy9zZXNzaW9uLWRldGFpbC9zZXNzaW9uLWRldGFpbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7QUNDRjs7QURFQTtFQUNFLCtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQ0FBQTtBQ0NGOztBREVBO0VBQ0UsK0JBQUE7QUNDRjs7QURFQTtFQUNFLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0NBQUE7QUNDRjs7QURFQTtFQUNFLDRCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQ0FBQTtBQ0NGOztBREVBO0VBQ0Usa0NBQUE7QUNDRjs7QURFQTs7RUFBQTs7QUFJQTtFQUNFLGtCQUFBO0FDQUY7O0FER0E7O0VBRUUsb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBRUEsa0JBQUE7RUFFQSxRQUFBO0VBQ0EsVUFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBRUEsZUFBQTtFQUVBLGdEQUFBO0VBQUEsd0NBQUE7RUFBQSxnQ0FBQTtFQUFBLDhEQUFBO0FDTEY7O0FEUUE7RUFDRSwyQkFBQTtVQUFBLG1CQUFBO0FDTEY7O0FEUUE7RUFDRSwyQkFBQTtVQUFBLG1CQUFBO0FDTEY7O0FEUUE7RUFDRSwyQkFBQTtVQUFBLG1CQUFBO0FDTEY7O0FEUUE7RUFDRSwyQkFBQTtVQUFBLG1CQUFBO0FDTEY7O0FEUUE7RUFDRSxTQUFBO0FDTEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZXNzaW9uLWRldGFpbC9zZXNzaW9uLWRldGFpbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlc3Npb24tdHJhY2staW9uaWMge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uc2Vzc2lvbi10cmFjay1hbmd1bGFyIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1hbmd1bGFyKTtcbn1cblxuLnNlc3Npb24tdHJhY2stY29tbXVuaWNhdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItY29tbXVuaWNhdGlvbik7XG59XG5cbi5zZXNzaW9uLXRyYWNrLXRvb2xpbmcge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRvb2xpbmcpO1xufVxuXG4uc2Vzc2lvbi10cmFjay1zZXJ2aWNlcyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2VydmljZXMpO1xufVxuXG4uc2Vzc2lvbi10cmFjay1kZXNpZ24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRlc2lnbik7XG59XG5cbi5zZXNzaW9uLXRyYWNrLXdvcmtzaG9wIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13b3Jrc2hvcCk7XG59XG5cbi5zZXNzaW9uLXRyYWNrLWZvb2Qge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWZvb2QpO1xufVxuXG4uc2Vzc2lvbi10cmFjay1kb2N1bWVudGF0aW9uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kb2N1bWVudGF0aW9uKTtcbn1cblxuLnNlc3Npb24tdHJhY2stbmF2aWdhdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbmF2aWdhdGlvbik7XG59XG5cbi8qIEZhdm9yaXRlIEljb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuLnNob3ctZmF2b3JpdGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pY29uLWhlYXJ0LWVtcHR5LFxuLmljb24taGVhcnQge1xuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLXBhZGRpbmctZW5kOiAwO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICB0b3A6IDVweDtcbiAgcmlnaHQ6IDVweDtcblxuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuXG4gIGZvbnQtc2l6ZTogMTZweDtcblxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZTtcbn1cblxuLmljb24taGVhcnQtZW1wdHkge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4uaWNvbi1oZWFydCB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG59XG5cbi5zaG93LWZhdm9yaXRlIC5pY29uLWhlYXJ0IHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLnNob3ctZmF2b3JpdGUgLmljb24taGVhcnQtZW1wdHkge1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xufVxuXG5oMSB7XG4gIG1hcmdpbjogMDtcbn0iLCIuc2Vzc2lvbi10cmFjay1pb25pYyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5zZXNzaW9uLXRyYWNrLWFuZ3VsYXIge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWFuZ3VsYXIpO1xufVxuXG4uc2Vzc2lvbi10cmFjay1jb21tdW5pY2F0aW9uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1jb21tdW5pY2F0aW9uKTtcbn1cblxuLnNlc3Npb24tdHJhY2stdG9vbGluZyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdG9vbGluZyk7XG59XG5cbi5zZXNzaW9uLXRyYWNrLXNlcnZpY2VzIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZXJ2aWNlcyk7XG59XG5cbi5zZXNzaW9uLXRyYWNrLWRlc2lnbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGVzaWduKTtcbn1cblxuLnNlc3Npb24tdHJhY2std29ya3Nob3Age1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdvcmtzaG9wKTtcbn1cblxuLnNlc3Npb24tdHJhY2stZm9vZCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZm9vZCk7XG59XG5cbi5zZXNzaW9uLXRyYWNrLWRvY3VtZW50YXRpb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRvY3VtZW50YXRpb24pO1xufVxuXG4uc2Vzc2lvbi10cmFjay1uYXZpZ2F0aW9uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1uYXZpZ2F0aW9uKTtcbn1cblxuLyogRmF2b3JpdGUgSWNvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuLnNob3ctZmF2b3JpdGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pY29uLWhlYXJ0LWVtcHR5LFxuLmljb24taGVhcnQge1xuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLXBhZGRpbmctZW5kOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICByaWdodDogNXB4O1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlO1xufVxuXG4uaWNvbi1oZWFydC1lbXB0eSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5pY29uLWhlYXJ0IHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbn1cblxuLnNob3ctZmF2b3JpdGUgLmljb24taGVhcnQge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4uc2hvdy1mYXZvcml0ZSAuaWNvbi1oZWFydC1lbXB0eSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG59XG5cbmgxIHtcbiAgbWFyZ2luOiAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/session-detail/session-detail.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/session-detail/session-detail.ts ***!
    \********************************************************/

  /*! exports provided: SessionDetailPage */

  /***/
  function srcAppPagesSessionDetailSessionDetailTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SessionDetailPage", function () {
      return SessionDetailPage;
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


    var _providers_conference_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../providers/conference-data */
    "./src/app/providers/conference-data.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _providers_user_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../providers/user-data */
    "./src/app/providers/user-data.ts");

    var SessionDetailPage =
    /*#__PURE__*/
    function () {
      function SessionDetailPage(dataProvider, userProvider, route) {
        _classCallCheck(this, SessionDetailPage);

        this.dataProvider = dataProvider;
        this.userProvider = userProvider;
        this.route = route;
        this.isFavorite = false;
        this.defaultHref = '';
      }

      _createClass(SessionDetailPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this5 = this;

          this.dataProvider.load().subscribe(function (data) {
            if (data && data.schedule && data.schedule[0] && data.schedule[0].groups) {
              var sessionId = _this5.route.snapshot.paramMap.get('sessionId');

              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = data.schedule[0].groups[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var group = _step.value;

                  if (group && group.sessions) {
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                      for (var _iterator2 = group.sessions[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var session = _step2.value;

                        if (session && session.id === sessionId) {
                          _this5.session = session;
                          _this5.isFavorite = _this5.userProvider.hasFavorite(_this5.session.name);
                          break;
                        }
                      }
                    } catch (err) {
                      _didIteratorError2 = true;
                      _iteratorError2 = err;
                    } finally {
                      try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                          _iterator2.return();
                        }
                      } finally {
                        if (_didIteratorError2) {
                          throw _iteratorError2;
                        }
                      }
                    }
                  }
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }
            }
          });
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.defaultHref = "/app/tabs/schedule";
        }
      }, {
        key: "sessionClick",
        value: function sessionClick(item) {
          console.log('Clicked', item);
        }
      }, {
        key: "toggleFavorite",
        value: function toggleFavorite() {
          if (this.userProvider.hasFavorite(this.session.name)) {
            this.userProvider.removeFavorite(this.session.name);
            this.isFavorite = false;
          } else {
            this.userProvider.addFavorite(this.session.name);
            this.isFavorite = true;
          }
        }
      }, {
        key: "shareSession",
        value: function shareSession() {
          console.log('Clicked share session');
        }
      }]);

      return SessionDetailPage;
    }();

    SessionDetailPage.ctorParameters = function () {
      return [{
        type: _providers_conference_data__WEBPACK_IMPORTED_MODULE_2__["ConferenceData"]
      }, {
        type: _providers_user_data__WEBPACK_IMPORTED_MODULE_4__["UserData"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    SessionDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-session-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./session-detail.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/session-detail/session-detail.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./session-detail.scss */
      "./src/app/pages/session-detail/session-detail.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_conference_data__WEBPACK_IMPORTED_MODULE_2__["ConferenceData"], _providers_user_data__WEBPACK_IMPORTED_MODULE_4__["UserData"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], SessionDetailPage);
    /***/
  },

  /***/
  "./src/app/pages/speaker-detail/speaker-detail-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/speaker-detail/speaker-detail-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: SpeakerDetailPageRoutingModule */

  /***/
  function srcAppPagesSpeakerDetailSpeakerDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpeakerDetailPageRoutingModule", function () {
      return SpeakerDetailPageRoutingModule;
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


    var _speaker_detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./speaker-detail */
    "./src/app/pages/speaker-detail/speaker-detail.ts");

    var routes = [{
      path: '',
      component: _speaker_detail__WEBPACK_IMPORTED_MODULE_3__["SpeakerDetailPage"]
    }];

    var SpeakerDetailPageRoutingModule = function SpeakerDetailPageRoutingModule() {
      _classCallCheck(this, SpeakerDetailPageRoutingModule);
    };

    SpeakerDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SpeakerDetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/speaker-detail/speaker-detail.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/speaker-detail/speaker-detail.module.ts ***!
    \***************************************************************/

  /*! exports provided: SpeakerDetailModule */

  /***/
  function srcAppPagesSpeakerDetailSpeakerDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpeakerDetailModule", function () {
      return SpeakerDetailModule;
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


    var _speaker_detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./speaker-detail */
    "./src/app/pages/speaker-detail/speaker-detail.ts");
    /* harmony import */


    var _speaker_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./speaker-detail-routing.module */
    "./src/app/pages/speaker-detail/speaker-detail-routing.module.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var SpeakerDetailModule = function SpeakerDetailModule() {
      _classCallCheck(this, SpeakerDetailModule);
    };

    SpeakerDetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _speaker_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__["SpeakerDetailPageRoutingModule"]],
      declarations: [_speaker_detail__WEBPACK_IMPORTED_MODULE_3__["SpeakerDetailPage"]]
    })], SpeakerDetailModule);
    /***/
  },

  /***/
  "./src/app/pages/speaker-detail/speaker-detail.scss":
  /*!**********************************************************!*\
    !*** ./src/app/pages/speaker-detail/speaker-detail.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSpeakerDetailSpeakerDetailScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*\n * Speaker Background\n */\nion-toolbar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  --background: transparent;\n  --color: white;\n}\nion-toolbar ion-button,\nion-toolbar ion-back-button,\nion-toolbar ion-menu-button {\n  --color: white;\n}\n.speaker-background {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  padding-top: var(--ion-safe-area-top);\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: calc(250px + var(--ion-safe-area-top));\n  background: center/cover url(/assets/img/speaker-background.png) no-repeat;\n}\n.speaker-background img {\n  width: 70px;\n  border-radius: 50%;\n  margin-top: calc(-1 * var(--ion-safe-area-top));\n}\n.speaker-background h2 {\n  position: absolute;\n  bottom: 10px;\n  color: white;\n}\n.md .speaker-background {\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;\n}\n.ios .speaker-background {\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 16px;\n}\n/*\n * Speaker Details\n */\n.speaker-detail p {\n  margin-left: 6px;\n  margin-right: 6px;\n}\n.speaker-detail hr {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  background: var(--ion-color-step-150, #d7d8da);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dyb3VwMTAvRG9jdW1lbnRzL1N1ZGhha2FyL0xlYXJuaW5nL2Jja3VwL2xpZmVTdG9yeUFwcC91aS9saWZlc3RvcnlfdWkvc3JjL2FwcC9wYWdlcy9zcGVha2VyLWRldGFpbC9zcGVha2VyLWRldGFpbC5zY3NzIiwic3JjL2FwcC9wYWdlcy9zcGVha2VyLWRldGFpbC9zcGVha2VyLWRldGFpbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUFBO0FBSUE7RUFDRSxrQkFBQTtFQUVBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUVBLHlCQUFBO0VBQ0EsY0FBQTtBQ0ZGO0FES0E7OztFQUdFLGNBQUE7QUNGRjtBREtBO0VBQ0Usa0JBQUE7RUFFQSxvQkFBQTtFQUFBLGFBQUE7RUFFQSxxQ0FBQTtFQUVBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBRUEsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBRUEsOENBQUE7RUFFQSwwRUFBQTtBQ1JGO0FEV0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQ0FBQTtBQ1JGO0FEV0E7RUFDRSxrQkFBQTtFQUVBLFlBQUE7RUFFQSxZQUFBO0FDVkY7QURhQTtFQUNFLHlIQUFBO0FDVkY7QURhQTtFQUNFLDRDQUFBO0FDVkY7QURhQTs7RUFBQTtBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ1hGO0FEY0E7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBRUEsOENBQUE7QUNaRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NwZWFrZXItZGV0YWlsL3NwZWFrZXItZGV0YWlsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogU3BlYWtlciBCYWNrZ3JvdW5kXG4gKi9cblxuaW9uLXRvb2xiYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcblxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbixcbmlvbi10b29sYmFyIGlvbi1iYWNrLWJ1dHRvbixcbmlvbi10b29sYmFyIGlvbi1tZW51LWJ1dHRvbiB7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG4uc3BlYWtlci1iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgcGFkZGluZy10b3A6IHZhcigtLWlvbi1zYWZlLWFyZWEtdG9wKTtcblxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gIGhlaWdodDogY2FsYygyNTBweCArIHZhcigtLWlvbi1zYWZlLWFyZWEtdG9wKSk7XG5cbiAgYmFja2dyb3VuZDogY2VudGVyIC8gY292ZXIgdXJsKC9hc3NldHMvaW1nL3NwZWFrZXItYmFja2dyb3VuZC5wbmcpIG5vLXJlcGVhdDtcbn1cblxuLnNwZWFrZXItYmFja2dyb3VuZCBpbWcge1xuICB3aWR0aDogNzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tdG9wOiBjYWxjKC0xICogdmFyKC0taW9uLXNhZmUtYXJlYS10b3ApKTtcbn1cblxuLnNwZWFrZXItYmFja2dyb3VuZCBoMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICBib3R0b206IDEwcHg7XG5cbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWQgLnNwZWFrZXItYmFja2dyb3VuZCB7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggM3B4IDFweCAtMnB4LCByZ2JhKDAsIDAsIDAsIDAuMTQpIDBweCAycHggMnB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggMXB4IDVweCAwcHg7XG59XG5cbi5pb3MgLnNwZWFrZXItYmFja2dyb3VuZCB7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDRweCAxNnB4O1xufVxuXG4vKlxuICogU3BlYWtlciBEZXRhaWxzXG4gKi9cblxuLnNwZWFrZXItZGV0YWlsIHAge1xuICBtYXJnaW4tbGVmdDogNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbn1cblxuLnNwZWFrZXItZGV0YWlsIGhyIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xufVxuIiwiLypcbiAqIFNwZWFrZXIgQmFja2dyb3VuZFxuICovXG5pb24tdG9vbGJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbmlvbi10b29sYmFyIGlvbi1idXR0b24sXG5pb24tdG9vbGJhciBpb24tYmFjay1idXR0b24sXG5pb24tdG9vbGJhciBpb24tbWVudS1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnNwZWFrZXItYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy10b3A6IHZhcigtLWlvbi1zYWZlLWFyZWEtdG9wKTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogY2FsYygyNTBweCArIHZhcigtLWlvbi1zYWZlLWFyZWEtdG9wKSk7XG4gIGJhY2tncm91bmQ6IGNlbnRlci9jb3ZlciB1cmwoL2Fzc2V0cy9pbWcvc3BlYWtlci1iYWNrZ3JvdW5kLnBuZykgbm8tcmVwZWF0O1xufVxuXG4uc3BlYWtlci1iYWNrZ3JvdW5kIGltZyB7XG4gIHdpZHRoOiA3MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi10b3A6IGNhbGMoLTEgKiB2YXIoLS1pb24tc2FmZS1hcmVhLXRvcCkpO1xufVxuXG4uc3BlYWtlci1iYWNrZ3JvdW5kIGgyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1kIC5zcGVha2VyLWJhY2tncm91bmQge1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDNweCAxcHggLTJweCwgcmdiYSgwLCAwLCAwLCAwLjE0KSAwcHggMnB4IDJweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDFweCA1cHggMHB4O1xufVxuXG4uaW9zIC5zcGVha2VyLWJhY2tncm91bmQge1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCA0cHggMTZweDtcbn1cblxuLypcbiAqIFNwZWFrZXIgRGV0YWlsc1xuICovXG4uc3BlYWtlci1kZXRhaWwgcCB7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xufVxuXG4uc3BlYWtlci1kZXRhaWwgaHIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/speaker-detail/speaker-detail.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/speaker-detail/speaker-detail.ts ***!
    \********************************************************/

  /*! exports provided: SpeakerDetailPage */

  /***/
  function srcAppPagesSpeakerDetailSpeakerDetailTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpeakerDetailPage", function () {
      return SpeakerDetailPage;
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


    var _providers_conference_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../providers/conference-data */
    "./src/app/providers/conference-data.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/ngx/index.js");

    var SpeakerDetailPage =
    /*#__PURE__*/
    function () {
      function SpeakerDetailPage(dataProvider, route, actionSheetCtrl, confData, inAppBrowser) {
        _classCallCheck(this, SpeakerDetailPage);

        this.dataProvider = dataProvider;
        this.route = route;
        this.actionSheetCtrl = actionSheetCtrl;
        this.confData = confData;
        this.inAppBrowser = inAppBrowser;
      }

      _createClass(SpeakerDetailPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this6 = this;

          this.dataProvider.load().subscribe(function (data) {
            var speakerId = _this6.route.snapshot.paramMap.get('speakerId');

            if (data && data.speakers) {
              var _iteratorNormalCompletion3 = true;
              var _didIteratorError3 = false;
              var _iteratorError3 = undefined;

              try {
                for (var _iterator3 = data.speakers[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                  var speaker = _step3.value;

                  if (speaker && speaker.id === speakerId) {
                    _this6.speaker = speaker;
                    break;
                  }
                }
              } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                    _iterator3.return();
                  }
                } finally {
                  if (_didIteratorError3) {
                    throw _iteratorError3;
                  }
                }
              }
            }
          });
        }
      }, {
        key: "openExternalUrl",
        value: function openExternalUrl(url) {
          this.inAppBrowser.create(url, '_blank');
        }
      }, {
        key: "openSpeakerShare",
        value: function openSpeakerShare(speaker) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            var actionSheet;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.actionSheetCtrl.create({
                      header: 'Share ' + speaker.name,
                      buttons: [{
                        text: 'Copy Link',
                        handler: function handler() {
                          console.log('Copy link clicked on https://twitter.com/' + speaker.twitter);

                          if (window.cordova && window.cordova.plugins.clipboard) {
                            window.cordova.plugins.clipboard.copy('https://twitter.com/' + speaker.twitter);
                          }
                        }
                      }, {
                        text: 'Share via ...'
                      }, {
                        text: 'Cancel',
                        role: 'cancel'
                      }]
                    });

                  case 2:
                    actionSheet = _context7.sent;
                    _context7.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "openContact",
        value: function openContact(speaker) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            var mode, actionSheet;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    mode = 'ios'; // this.config.get('mode');

                    _context8.next = 3;
                    return this.actionSheetCtrl.create({
                      header: 'Contact ' + speaker.name,
                      buttons: [{
                        text: "Email ( ".concat(speaker.email, " )"),
                        icon: mode !== 'ios' ? 'mail' : null,
                        handler: function handler() {
                          window.open('mailto:' + speaker.email);
                        }
                      }, {
                        text: "Call ( ".concat(speaker.phone, " )"),
                        icon: mode !== 'ios' ? 'call' : null,
                        handler: function handler() {
                          window.open('tel:' + speaker.phone);
                        }
                      }, {
                        text: 'Cancel',
                        role: 'cancel'
                      }]
                    });

                  case 3:
                    actionSheet = _context8.sent;
                    _context8.next = 6;
                    return actionSheet.present();

                  case 6:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }]);

      return SpeakerDetailPage;
    }();

    SpeakerDetailPage.ctorParameters = function () {
      return [{
        type: _providers_conference_data__WEBPACK_IMPORTED_MODULE_3__["ConferenceData"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]
      }, {
        type: _providers_conference_data__WEBPACK_IMPORTED_MODULE_3__["ConferenceData"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"]
      }];
    };

    SpeakerDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-speaker-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./speaker-detail.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/speaker-detail/speaker-detail.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./speaker-detail.scss */
      "./src/app/pages/speaker-detail/speaker-detail.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_conference_data__WEBPACK_IMPORTED_MODULE_3__["ConferenceData"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"], _providers_conference_data__WEBPACK_IMPORTED_MODULE_3__["ConferenceData"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"]])], SpeakerDetailPage);
    /***/
  },

  /***/
  "./src/app/pages/speaker-list/speaker-list-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/speaker-list/speaker-list-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: SpeakerListPageRoutingModule */

  /***/
  function srcAppPagesSpeakerListSpeakerListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpeakerListPageRoutingModule", function () {
      return SpeakerListPageRoutingModule;
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


    var _speaker_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./speaker-list */
    "./src/app/pages/speaker-list/speaker-list.ts");

    var routes = [{
      path: '',
      component: _speaker_list__WEBPACK_IMPORTED_MODULE_3__["SpeakerListPage"]
    }];

    var SpeakerListPageRoutingModule = function SpeakerListPageRoutingModule() {
      _classCallCheck(this, SpeakerListPageRoutingModule);
    };

    SpeakerListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SpeakerListPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/speaker-list/speaker-list.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/speaker-list/speaker-list.module.ts ***!
    \***********************************************************/

  /*! exports provided: SpeakerListModule */

  /***/
  function srcAppPagesSpeakerListSpeakerListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpeakerListModule", function () {
      return SpeakerListModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _speaker_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./speaker-list */
    "./src/app/pages/speaker-list/speaker-list.ts");
    /* harmony import */


    var _speaker_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./speaker-list-routing.module */
    "./src/app/pages/speaker-list/speaker-list-routing.module.ts");

    var SpeakerListModule = function SpeakerListModule() {
      _classCallCheck(this, SpeakerListModule);
    };

    SpeakerListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _speaker_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["SpeakerListPageRoutingModule"]],
      declarations: [_speaker_list__WEBPACK_IMPORTED_MODULE_4__["SpeakerListPage"]]
    })], SpeakerListModule);
    /***/
  },

  /***/
  "./src/app/pages/speaker-list/speaker-list.scss":
  /*!******************************************************!*\
    !*** ./src/app/pages/speaker-list/speaker-list.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSpeakerListSpeakerListScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".speaker-card {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n/* Due to the fact the cards are inside of columns the margins don't overlap\n * properly so we want to remove the extra margin between cards\n */\n\nion-col:not(:last-of-type) .speaker-card {\n  margin-bottom: 0;\n}\n\n.speaker-card .speaker-item {\n  --min-height: 85px;\n}\n\n.speaker-card .speaker-item h2 {\n  font-size: 18px;\n  font-weight: 500;\n  letter-spacing: 0.02em;\n}\n\n.speaker-card .speaker-item p {\n  font-size: 13px;\n  letter-spacing: 0.02em;\n}\n\n.speaker-card ion-card-header {\n  padding: 0;\n}\n\n.speaker-card ion-card-content {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  padding: 0;\n}\n\n.ios ion-list {\n  margin-bottom: 10px;\n}\n\n.md ion-list {\n  border-top: 1px solid var(--ion-color-step-150, #d7d8da);\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dyb3VwMTAvRG9jdW1lbnRzL1N1ZGhha2FyL0xlYXJuaW5nL2Jja3VwL2xpZmVTdG9yeUFwcC91aS9saWZlc3RvcnlfdWkvc3JjL2FwcC9wYWdlcy9zcGVha2VyLWxpc3Qvc3BlYWtlci1saXN0LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NwZWFrZXItbGlzdC9zcGVha2VyLWxpc3Quc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0NGOztBREVBOztFQUFBOztBQUdBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtVQUFBLGNBQUE7RUFFQSxVQUFBO0FDQUY7O0FER0E7RUFDRSxtQkFBQTtBQ0FGOztBREdBO0VBQ0Usd0RBQUE7RUFFQSxVQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zcGVha2VyLWxpc3Qvc3BlYWtlci1saXN0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3BlYWtlci1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLyogRHVlIHRvIHRoZSBmYWN0IHRoZSBjYXJkcyBhcmUgaW5zaWRlIG9mIGNvbHVtbnMgdGhlIG1hcmdpbnMgZG9uJ3Qgb3ZlcmxhcFxuICogcHJvcGVybHkgc28gd2Ugd2FudCB0byByZW1vdmUgdGhlIGV4dHJhIG1hcmdpbiBiZXR3ZWVuIGNhcmRzXG4gKi9cbmlvbi1jb2w6bm90KDpsYXN0LW9mLXR5cGUpIC5zcGVha2VyLWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uc3BlYWtlci1jYXJkIC5zcGVha2VyLWl0ZW0ge1xuICAtLW1pbi1oZWlnaHQ6IDg1cHg7XG59XG5cbi5zcGVha2VyLWNhcmQgLnNwZWFrZXItaXRlbSBoMiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbn1cblxuLnNwZWFrZXItY2FyZCAuc3BlYWtlci1pdGVtIHAge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG59XG5cbi5zcGVha2VyLWNhcmQgaW9uLWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLnNwZWFrZXItY2FyZCBpb24tY2FyZC1jb250ZW50IHtcbiAgZmxleDogMSAxIGF1dG87XG5cbiAgcGFkZGluZzogMDtcbn1cblxuLmlvcyBpb24tbGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5tZCBpb24tbGlzdCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xuXG4gIHBhZGRpbmc6IDA7XG59IiwiLnNwZWFrZXItY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi8qIER1ZSB0byB0aGUgZmFjdCB0aGUgY2FyZHMgYXJlIGluc2lkZSBvZiBjb2x1bW5zIHRoZSBtYXJnaW5zIGRvbid0IG92ZXJsYXBcbiAqIHByb3Blcmx5IHNvIHdlIHdhbnQgdG8gcmVtb3ZlIHRoZSBleHRyYSBtYXJnaW4gYmV0d2VlbiBjYXJkc1xuICovXG5pb24tY29sOm5vdCg6bGFzdC1vZi10eXBlKSAuc3BlYWtlci1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnNwZWFrZXItY2FyZCAuc3BlYWtlci1pdGVtIHtcbiAgLS1taW4taGVpZ2h0OiA4NXB4O1xufVxuXG4uc3BlYWtlci1jYXJkIC5zcGVha2VyLWl0ZW0gaDIge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG59XG5cbi5zcGVha2VyLWNhcmQgLnNwZWFrZXItaXRlbSBwIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xufVxuXG4uc3BlYWtlci1jYXJkIGlvbi1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5zcGVha2VyLWNhcmQgaW9uLWNhcmQtY29udGVudCB7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uaW9zIGlvbi1saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLm1kIGlvbi1saXN0IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2Q3ZDhkYSk7XG4gIHBhZGRpbmc6IDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/speaker-list/speaker-list.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/speaker-list/speaker-list.ts ***!
    \****************************************************/

  /*! exports provided: SpeakerListPage */

  /***/
  function srcAppPagesSpeakerListSpeakerListTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpeakerListPage", function () {
      return SpeakerListPage;
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


    var _providers_conference_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../providers/conference-data */
    "./src/app/providers/conference-data.ts");

    var SpeakerListPage =
    /*#__PURE__*/
    function () {
      function SpeakerListPage(confData) {
        _classCallCheck(this, SpeakerListPage);

        this.confData = confData;
        this.speakers = [];
      }

      _createClass(SpeakerListPage, [{
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this7 = this;

          this.confData.getSpeakers().subscribe(function (speakers) {
            _this7.speakers = speakers;
          });
        }
      }]);

      return SpeakerListPage;
    }();

    SpeakerListPage.ctorParameters = function () {
      return [{
        type: _providers_conference_data__WEBPACK_IMPORTED_MODULE_2__["ConferenceData"]
      }];
    };

    SpeakerListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-speaker-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./speaker-list.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/speaker-list/speaker-list.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./speaker-list.scss */
      "./src/app/pages/speaker-list/speaker-list.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_conference_data__WEBPACK_IMPORTED_MODULE_2__["ConferenceData"]])], SpeakerListPage);
    /***/
  },

  /***/
  "./src/app/pages/tabs-page/tabs-page-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/tabs-page/tabs-page-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: TabsPageRoutingModule */

  /***/
  function srcAppPagesTabsPageTabsPageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function () {
      return TabsPageRoutingModule;
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


    var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tabs-page */
    "./src/app/pages/tabs-page/tabs-page.ts");
    /* harmony import */


    var _schedule_schedule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../schedule/schedule */
    "./src/app/pages/schedule/schedule.ts");

    var routes = [{
      path: 'tabs',
      component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
      children: [{
        path: 'schedule',
        children: [{
          path: '',
          component: _schedule_schedule__WEBPACK_IMPORTED_MODULE_4__["SchedulePage"]
        }, {
          path: 'session/:sessionId',
          loadChildren: function loadChildren() {
            return Promise.resolve().then(__webpack_require__.bind(null,
            /*! ../session-detail/session-detail.module */
            "./src/app/pages/session-detail/session-detail.module.ts")).then(function (m) {
              return m.SessionDetailModule;
            });
          }
        }]
      }, {
        path: 'speakers',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.resolve().then(__webpack_require__.bind(null,
            /*! ../speaker-list/speaker-list.module */
            "./src/app/pages/speaker-list/speaker-list.module.ts")).then(function (m) {
              return m.SpeakerListModule;
            });
          }
        }, {
          path: 'session/:sessionId',
          loadChildren: function loadChildren() {
            return Promise.resolve().then(__webpack_require__.bind(null,
            /*! ../session-detail/session-detail.module */
            "./src/app/pages/session-detail/session-detail.module.ts")).then(function (m) {
              return m.SessionDetailModule;
            });
          }
        }, {
          path: 'speaker-details/:speakerId',
          loadChildren: function loadChildren() {
            return Promise.resolve().then(__webpack_require__.bind(null,
            /*! ../speaker-detail/speaker-detail.module */
            "./src/app/pages/speaker-detail/speaker-detail.module.ts")).then(function (m) {
              return m.SpeakerDetailModule;
            });
          }
        }]
      }, {
        path: 'map',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.resolve().then(__webpack_require__.bind(null,
            /*! ../map/map.module */
            "./src/app/pages/map/map.module.ts")).then(function (m) {
              return m.MapModule;
            });
          }
        }]
      }, {
        path: 'about',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.resolve().then(__webpack_require__.bind(null,
            /*! ../about/about.module */
            "./src/app/pages/about/about.module.ts")).then(function (m) {
              return m.AboutModule;
            });
          }
        }]
      }, {
        path: '',
        redirectTo: '/app/tabs/schedule',
        pathMatch: 'full'
      }]
    }];

    var TabsPageRoutingModule = function TabsPageRoutingModule() {
      _classCallCheck(this, TabsPageRoutingModule);
    };

    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TabsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/tabs-page/tabs-page.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/tabs-page/tabs-page.module.ts ***!
    \*****************************************************/

  /*! exports provided: TabsModule */

  /***/
  function srcAppPagesTabsPageTabsPageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsModule", function () {
      return TabsModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _tabs_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./tabs-page */
    "./src/app/pages/tabs-page/tabs-page.ts");
    /* harmony import */


    var _tabs_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tabs-page-routing.module */
    "./src/app/pages/tabs-page/tabs-page-routing.module.ts");
    /* harmony import */


    var _about_about_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../about/about.module */
    "./src/app/pages/about/about.module.ts");
    /* harmony import */


    var _map_map_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../map/map.module */
    "./src/app/pages/map/map.module.ts");
    /* harmony import */


    var _schedule_schedule_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../schedule/schedule.module */
    "./src/app/pages/schedule/schedule.module.ts");
    /* harmony import */


    var _session_detail_session_detail_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../session-detail/session-detail.module */
    "./src/app/pages/session-detail/session-detail.module.ts");
    /* harmony import */


    var _speaker_detail_speaker_detail_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../speaker-detail/speaker-detail.module */
    "./src/app/pages/speaker-detail/speaker-detail.module.ts");
    /* harmony import */


    var _speaker_list_speaker_list_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../speaker-list/speaker-list.module */
    "./src/app/pages/speaker-list/speaker-list.module.ts");

    var TabsModule = function TabsModule() {
      _classCallCheck(this, TabsModule);
    };

    TabsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_about_about_module__WEBPACK_IMPORTED_MODULE_6__["AboutModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _map_map_module__WEBPACK_IMPORTED_MODULE_7__["MapModule"], _schedule_schedule_module__WEBPACK_IMPORTED_MODULE_8__["ScheduleModule"], _session_detail_session_detail_module__WEBPACK_IMPORTED_MODULE_9__["SessionDetailModule"], _speaker_detail_speaker_detail_module__WEBPACK_IMPORTED_MODULE_10__["SpeakerDetailModule"], _speaker_list_speaker_list_module__WEBPACK_IMPORTED_MODULE_11__["SpeakerListModule"], _tabs_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]],
      declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_4__["TabsPage"]]
    })], TabsModule);
    /***/
  },

  /***/
  "./src/app/pages/tabs-page/tabs-page.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/tabs-page/tabs-page.ts ***!
    \**********************************************/

  /*! exports provided: TabsPage */

  /***/
  function srcAppPagesTabsPageTabsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPage", function () {
      return TabsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TabsPage = function TabsPage() {
      _classCallCheck(this, TabsPage);
    };

    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tabs-page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs-page/tabs-page.html")).default
    })], TabsPage);
    /***/
  },

  /***/
  "./src/app/providers/conference-data.ts":
  /*!**********************************************!*\
    !*** ./src/app/providers/conference-data.ts ***!
    \**********************************************/

  /*! exports provided: ConferenceData */

  /***/
  function srcAppProvidersConferenceDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConferenceData", function () {
      return ConferenceData;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _user_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user-data */
    "./src/app/providers/user-data.ts");

    var ConferenceData =
    /*#__PURE__*/
    function () {
      function ConferenceData(http, user) {
        _classCallCheck(this, ConferenceData);

        this.http = http;
        this.user = user;
      }

      _createClass(ConferenceData, [{
        key: "load",
        value: function load() {
          if (this.data) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.data);
          } else {
            return this.http.get('assets/data/data.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.processData, this));
          }
        }
      }, {
        key: "processData",
        value: function processData(data) {
          var _this8 = this;

          // just some good 'ol JS fun with objects and arrays
          // build up the data by linking speakers to sessions
          this.data = data; // loop through each day in the schedule

          this.data.schedule.forEach(function (day) {
            // loop through each timeline group in the day
            day.groups.forEach(function (group) {
              // loop through each session in the timeline group
              group.sessions.forEach(function (session) {
                session.speakers = [];

                if (session.speakerNames) {
                  session.speakerNames.forEach(function (speakerName) {
                    var speaker = _this8.data.speakers.find(function (s) {
                      return s.name === speakerName;
                    });

                    if (speaker) {
                      session.speakers.push(speaker);
                      speaker.sessions = speaker.sessions || [];
                      speaker.sessions.push(session);
                    }
                  });
                }
              });
            });
          });
          return this.data;
        }
      }, {
        key: "getTimeline",
        value: function getTimeline(dayIndex) {
          var _this9 = this;

          var queryText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          var excludeTracks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
          var segment = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'all';
          return this.load().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            var day = data.schedule[dayIndex];
            day.shownSessions = 0;
            queryText = queryText.toLowerCase().replace(/,|\.|-/g, ' ');
            var queryWords = queryText.split(' ').filter(function (w) {
              return !!w.trim().length;
            });
            day.groups.forEach(function (group) {
              group.hide = true;
              group.sessions.forEach(function (session) {
                // check if this session should show or not
                _this9.filterSession(session, queryWords, excludeTracks, segment);

                if (!session.hide) {
                  // if this session is not hidden then this group should show
                  group.hide = false;
                  day.shownSessions++;
                }
              });
            });
            return day;
          }));
        }
      }, {
        key: "filterSession",
        value: function filterSession(session, queryWords, excludeTracks, segment) {
          var matchesQueryText = false;

          if (queryWords.length) {
            // of any query word is in the session name than it passes the query test
            queryWords.forEach(function (queryWord) {
              if (session.name.toLowerCase().indexOf(queryWord) > -1) {
                matchesQueryText = true;
              }
            });
          } else {
            // if there are no query words then this session passes the query test
            matchesQueryText = true;
          } // if any of the sessions tracks are not in the
          // exclude tracks then this session passes the track test


          var matchesTracks = false;
          session.tracks.forEach(function (trackName) {
            if (excludeTracks.indexOf(trackName) === -1) {
              matchesTracks = true;
            }
          }); // if the segment is 'favorites', but session is not a user favorite
          // then this session does not pass the segment test

          var matchesSegment = false;

          if (segment === 'favorites') {
            if (this.user.hasFavorite(session.name)) {
              matchesSegment = true;
            }
          } else {
            matchesSegment = true;
          } // all tests must be true if it should not be hidden


          session.hide = !(matchesQueryText && matchesTracks && matchesSegment);
        }
      }, {
        key: "getSpeakers",
        value: function getSpeakers() {
          return this.load().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data.speakers.sort(function (a, b) {
              var aName = a.name.split(' ').pop();
              var bName = b.name.split(' ').pop();
              return aName.localeCompare(bName);
            });
          }));
        }
      }, {
        key: "getTracks",
        value: function getTracks() {
          return this.load().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data.tracks.sort();
          }));
        }
      }, {
        key: "getMap",
        value: function getMap() {
          return this.load().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data.map;
          }));
        }
      }]);

      return ConferenceData;
    }();

    ConferenceData.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _user_data__WEBPACK_IMPORTED_MODULE_5__["UserData"]
      }];
    };

    ConferenceData = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _user_data__WEBPACK_IMPORTED_MODULE_5__["UserData"]])], ConferenceData);
    /***/
  }
}]);
//# sourceMappingURL=pages-tabs-page-tabs-page-module-es5.js.map