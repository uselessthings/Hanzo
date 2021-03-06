webpackJsonp([1,4],{

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 110;


/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(137);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.result = false;
        this.done = false;
        this.color = "accent";
        this.spin = false;
        this.spinner1 = false;
        this.spinner2 = false;
        this.spinner3 = false;
        this.loadDelay = 5000;
        this.msgDelay = 4000;
    }
    AppComponent.prototype.calculate = function () {
        var _this = this;
        this.spin = true;
        this.spinner1 = !this.spinner1;
        setTimeout(function () {
            _this.color = "primary";
            _this.spinner1 = !_this.spinner1;
            _this.spinner2 = !_this.spinner2;
            setTimeout(function () {
                _this.color = "warn";
                _this.spinner2 = !_this.spinner2;
                _this.spinner3 = !_this.spinner3;
                setTimeout(function () {
                    _this.spinner3 = !_this.spinner3;
                    _this.spin = false;
                    _this.color = "accent";
                    _this.result = !_this.result;
                    _this.msg();
                }, _this.loadDelay);
            }, _this.loadDelay);
        }, this.loadDelay);
    };
    AppComponent.prototype.msg = function () {
        var _this = this;
        this.spinner1 = !this.spinner1;
        setTimeout(function () {
            _this.spinner1 = !_this.spinner1;
            _this.spinner2 = !_this.spinner2;
            setTimeout(function () {
                _this.spinner2 = !_this.spinner2;
                _this.spinner3 = !_this.spinner3;
                setTimeout(function () {
                    _this.done = true;
                }, _this.msgDelay);
            }, _this.msgDelay);
        }, this.msgDelay);
    };
    AppComponent.prototype.reset = function () {
        this.spinner1 = false;
        this.spinner2 = false;
        this.spinner3 = false;
        this.result = false;
        this.done = false;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(193),
        styles: [__webpack_require__(192)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(135);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MdTabsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MdGridListModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["g" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["h" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["i" /* MdSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["j" /* MdProgressBarModule */],
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(38)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 193:
/***/ (function(module, exports) {

module.exports = "<md-sidenav-container fullscreen>\n  <div fxFlexFill fxLayout=\"row\" fxLayoutAlign=\"center\" fullscreen>\n\n    <div fxFlex fxLayout=\"column\" fxLayoutAlign=\"center\" *ngIf=\"!result\" style=\"margin-top:100px;\">\n\n      <img style=\"width:200px;margin:auto;\" md-image src=\"assets/img/hanzo.png\">\n      <h1 fxFlex *ngIf=\"!spinner1 && !spinner2 && !spinner3\" class=\"auto_margin\">Should you pick Hanzo?</h1>\n      <md-input-container *ngIf=\"!spinner1 && !spinner2 && !spinner3\" #input style=\"width:200px;\" class=\"auto_margin\" color=\"accent\" required>\n        <input mdInput placeholder=\"Enter Username\" value=\"\">\n      </md-input-container>\n      <button md-raised-button style=\"margin:auto;width:100px;\" *ngIf=\"!spinner1 && !spinner2 && !spinner3\" color=\"primary\" (click)=\"calculate()\">\n        Calculate\n      </button>\n\n      <div fxFlex class=\"auto_margin\">\n        <md-spinner *ngIf=\"spin\" class=\"auto_margin\" color=\"{{ color }}\"></md-spinner>\n        <div class=\"auto_margin\" *ngIf=\"spinner1\">\n          <p style=\"font-size:20px;\" *ngIf=\"spinner1 && !spinner2 && !spinner3\" class=\"pulsate auto_margin\">Fetching Data..</p>\n        </div>\n        <div class=\"auto_margin\" *ngIf=\"spinner2\">\n          <p style=\"font-size:20px;\" *ngIf=\"!spinner1 && spinner2 && !spinner3\" class=\"pulsate auto_margin\">Calculating Pro-Level..</p>\n        </div>\n        <div class=\"auto_margin\" *ngIf=\"spinner3\">\n          <p style=\"font-size:20px;\" *ngIf=\"!spinner1 && !spinner2 && spinner3\" class=\"pulsate auto_margin\">Finalizing Results..</p>\n        </div>\n      </div>\n\n    </div>\n\n    <div fxFlex fxLayout=\"column\" fxLayoutAlign=\"center\" *ngIf=\"result\">\n\n      <div class=\"auto_margin\">\n        <div class=\"auto_margin\" *ngIf=\"spinner1\" style=\"text-align:center;\">\n          <h1 *ngIf=\"spinner1 && !spinner2 && !spinner3\" class=\"auto_margin\">\n            No.\n          </h1>\n        </div>\n        <div class=\"auto_margin\" *ngIf=\"spinner2\" style=\"text-align:center;\">\n          <h1 *ngIf=\"!spinner1 && spinner2 && !spinner3\" class=\"auto_margin\">\n            Don't be that guy/gal.\n          </h1>\n        </div>\n        <div class=\"auto_margin\" *ngIf=\"spinner3\" style=\"text-align:center;\">\n          <h1 *ngIf=\"!spinner1 && !spinner2 && spinner3\" class=\"auto_margin\">\n            Be like Reinhardt!\n            <br>\n            Be a team player!\n          </h1>\n          <button style=\"margin:auto;width:100px;\" md-raised-button *ngIf=\"done\" color=\"primary\" (click)=\"reset()\">\n            Reset\n          </button>\n          <button style=\"margin:auto;width:100px;\" md-raised-button *ngIf=\"done\" color=\"primary\" (click)=\"sidenav.open()\">\n            Info\n          </button>\n        </div>\n      </div>\n\n\n    </div>\n  </div>\n\n  <md-sidenav #sidenav mode=\"over\" align=\"end\" style=\"width:75%;\" fullscreen>\n    <button md-raised-button color=\"primary\" (click)=sidenav.close()>\n      Close\n    </button>\n    <div class=\"auto_margin\" style=\"width:80%;padding:5px;\">\n      <h2 class=\"auto_margin\">About This Site</h2>\n      <p class=\"auto_margin\">\n        This site is pure and utter nonsense and should be considered as such. It was made late at night after one too many games of\n        Overwatch starring the not-so-rare “Pro Hanzo”. You know the one who, instead of picking a tank or healer, brags about his gold eliminations\n        shotly before getting zapped down by Winston for the 28th time.\n        <br>\n        <br>\n        This guide does obviously not apply to all Hanzo's. Some are out there pulling their weight by pushing the payload, taking\n        out Torbjörns turret and delivering those headshots with a reasonable frequency.\n        <br>\n        <br>\n        But if you play Hanzo and don’t recognize any ofthe above *Hint hint*.\n        <br>\n        <br>\n        The image used is protected by copyright.\n        <br>\n        ®2016 Blizzard Entertainment, Inc. All rights reserved. Overwatch is a trademark or registered trademark of Blizzard Entertainment, Inc. in the U.S. and/or other countries.\n        <br>\n        <br>\n        <a href=\"http://us.blizzard.com/en-us/company/about/legal-faq.html\">Blizzard Legal FAQ</a>\n      </p>\n    </div>\n  </md-sidenav>\n\n</md-sidenav-container>\n"

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(111);


/***/ })

},[243]);
//# sourceMappingURL=main.bundle.js.map