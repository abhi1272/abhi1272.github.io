(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/all-countries/all-countries.component.css":
/*!***********************************************************!*\
  !*** ./src/app/all-countries/all-countries.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".filter{\r\n    margin-left: 4vw;\r\n    margin-bottom: 4vh;\r\n}\r\n.card{\r\n    width: 100%;\r\n    margin-left: 2vw;\r\n    margin-bottom: 1vh;\r\n}\r\n.card-img-top{\r\n    height: 40vh;\r\n    width: 100%;\r\n}\r\n.clickCurrency{\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\n.head{\r\n    font-family: sans-serif;\r\n    color: grey;\r\n}\r\n"

/***/ }),

/***/ "./src/app/all-countries/all-countries.component.html":
/*!************************************************************!*\
  !*** ./src/app/all-countries/all-countries.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container row\">\n  <div class=\"col-sm-1\"></div>\n  <div class=\"col-sm-3 select\">\n      <input [(ngModel)]=\"temp\" type=\"text\" class=\"col-sm-8\"  placeholder=\"Search Country...\">\n  </div>\n  <div class=\"col-sm-6\">\n      <h3 class=\"head\">Countries from <strong>{{region1}}</strong> region</h3>\n  </div>\n  <div class=\"col-sm-2\">\n      <a class=\"btn btn-warning\" (click)=\"goBackToPreviousPage()\">Go Back</a>\n  </div>\n</div><br>\n<div class=\"row filter\">\n  <div class=\"col-sm-6\">\n      <input [(ngModel)]=\"filterText1\" type=\"text\" class=\"col-sm-8\"  placeholder=\"Filter by language..\">\n  </div>\n  <div class=\"col-sm-6\">\n      <input [(ngModel)]=\"filterText2\" type=\"text\" class=\"col-sm-8\"  placeholder=\"Filter by currency..\">\n  </div>\n</div>\n<div class=\"container row\">\n  <div class=\"card\" class=\"col-sm-4\" *ngFor=\"let country of allCountries | \n        filter1: filterText1 | currencyFilter: filterText2 | selectFilter: temp\" style=\"width: 18rem;\">\n    <img class=\"card-img-top\" src=\"{{country.flag}}\" alt=\"Card image cap\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">{{country.name}}</h5>\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <strong>Name: </strong> {{country.name}}\n        </div>\n        <div class=\"col-sm-12\" *ngIf=\"country.capital !== ''\">\n          <strong>Capital: </strong>{{country.capital}}\n        </div>\n        <div class=\"col-sm-12\">\n          <strong>Subregion: </strong>{{country.subregion}}\n        </div>\n        <div class=\"col-sm-12\">\n          <strong>Timezone: </strong>{{country.timezones[0]}}\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <strong>\n            Currency: </strong><div *ngFor=\"let curr of country.currencies\">\n            <a class=\"clickCurrency\" *ngIf=\"curr.code !== null\" [routerLink]=\"['/currency',curr.code]\">\n              {{curr.name}}</a>\n          </div>\n        </div>\n        <div class=\"col-sm-12\">\n          <strong>\n              Language: </strong><div *ngFor=\"let lang of country.languages\">\n            <a class=\"clickCurrency\" *ngIf=\"lang.iso639_1 !== null\" [routerLink]=\"['/language',lang.iso639_1]\">\n              {{lang.name}}</a>\n          </div>\n        </div>\n      </div>\n      <br>\n      <a [routerLink]=\"['/name',country.name]\" class=\"btn btn-primary\">View Detail</a>\n      <br>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/all-countries/all-countries.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/all-countries/all-countries.component.ts ***!
  \**********************************************************/
/*! exports provided: AllCountriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllCountriesComponent", function() { return AllCountriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _map_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map.service */ "./src/app/map.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AllCountriesComponent = /** @class */ (function () {
    function AllCountriesComponent(MapService, _route, router, location) {
        this.MapService = MapService;
        this._route = _route;
        this.router = router;
        this.location = location;
    }
    AllCountriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        var region = this._route.snapshot.paramMap.get('region').toLowerCase();
        this.region1 = region.toUpperCase();
        this.MapService.getAllCountries(region).subscribe(function (data) {
            console.log(data);
            _this.allCountries = data;
        });
    };
    AllCountriesComponent.prototype.goBackToPreviousPage = function () {
        this.location.back();
    };
    AllCountriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-all-countries',
            template: __webpack_require__(/*! ./all-countries.component.html */ "./src/app/all-countries/all-countries.component.html"),
            styles: [__webpack_require__(/*! ./all-countries.component.css */ "./src/app/all-countries/all-countries.component.css")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]]
        }),
        __metadata("design:paramtypes", [_map_service__WEBPACK_IMPORTED_MODULE_1__["MapService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], AllCountriesComponent);
    return AllCountriesComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <ul class=\"nav navbar\">\n        <li><a  routerLink=\"/home\">Home</a></li>\n       </ul>\n  <router-outlet></router-outlet>\n</div>\n\n    "

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _map_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map.service */ "./src/app/map.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _all_countries_all_countries_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./all-countries/all-countries.component */ "./src/app/all-countries/all-countries.component.ts");
/* harmony import */ var _single_country_single_country_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./single-country/single-country.component */ "./src/app/single-country/single-country.component.ts");
/* harmony import */ var _currency_view_currency_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./currency-view/currency-view.component */ "./src/app/currency-view/currency-view.component.ts");
/* harmony import */ var _language_view_language_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./language-view/language-view.component */ "./src/app/language-view/language-view.component.ts");
/* harmony import */ var _filter1_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./filter1.pipe */ "./src/app/filter1.pipe.ts");
/* harmony import */ var _currency_filter_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./currency-filter.pipe */ "./src/app/currency-filter.pipe.ts");
/* harmony import */ var _select_filter_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./select-filter.pipe */ "./src/app/select-filter.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _all_countries_all_countries_component__WEBPACK_IMPORTED_MODULE_9__["AllCountriesComponent"],
                _single_country_single_country_component__WEBPACK_IMPORTED_MODULE_10__["SingleCountryComponent"],
                _currency_view_currency_view_component__WEBPACK_IMPORTED_MODULE_11__["CurrencyViewComponent"],
                _language_view_language_view_component__WEBPACK_IMPORTED_MODULE_12__["LanguageViewComponent"],
                _filter1_pipe__WEBPACK_IMPORTED_MODULE_13__["Filter1Pipe"],
                _currency_filter_pipe__WEBPACK_IMPORTED_MODULE_14__["CurrencyFilterPipe"],
                _select_filter_pipe__WEBPACK_IMPORTED_MODULE_15__["SelectFilterPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot([
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'region/:region', component: _all_countries_all_countries_component__WEBPACK_IMPORTED_MODULE_9__["AllCountriesComponent"] },
                    { path: 'name/:name', component: _single_country_single_country_component__WEBPACK_IMPORTED_MODULE_10__["SingleCountryComponent"] },
                    { path: 'currency/:currency', component: _currency_view_currency_view_component__WEBPACK_IMPORTED_MODULE_11__["CurrencyViewComponent"] },
                    { path: 'language/:language', component: _language_view_language_view_component__WEBPACK_IMPORTED_MODULE_12__["LanguageViewComponent"] }
                ], { useHash: true })
            ],
            providers: [_map_service__WEBPACK_IMPORTED_MODULE_5__["MapService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/currency-filter.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/currency-filter.pipe.ts ***!
  \*****************************************/
/*! exports provided: CurrencyFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyFilterPipe", function() { return CurrencyFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CurrencyFilterPipe = /** @class */ (function () {
    function CurrencyFilterPipe() {
    }
    CurrencyFilterPipe.prototype.transform = function (value, args) {
        if (!args) {
            return value;
        }
        else {
            args = args.toUpperCase();
        }
        return value.filter(function (item) {
            var regex = new RegExp(args, 'gi');
            return item.currencies[0].name.match(regex);
        });
    };
    CurrencyFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'currencyFilter'
        })
    ], CurrencyFilterPipe);
    return CurrencyFilterPipe;
}());



/***/ }),

/***/ "./src/app/currency-view/currency-view.component.css":
/*!***********************************************************!*\
  !*** ./src/app/currency-view/currency-view.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n    width: 100%\r\n}\r\n.card-img-top{\r\n    height: 40vh;\r\n}\r\n.clickCurrency{\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\n.head{\r\n    font-family: sans-serif;\r\n    color: grey;\r\n}\r\n"

/***/ }),

/***/ "./src/app/currency-view/currency-view.component.html":
/*!************************************************************!*\
  !*** ./src/app/currency-view/currency-view.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container row\">\n    <div class=\"col-sm-3\"></div>\n    <div class=\"col-sm-7\">\n        <h3 class=\"head\"><strong>\"{{currency1}}\"</strong>currency code view of Countries</h3>\n    </div>\n    <div class=\"col-sm-2\">\n        <a class=\"btn btn-warning\" (click)=\"goBackToPreviousPage()\">Go Back</a>\n    </div>\n  </div>\n<div class=\"container\">\n  <div class=\"card mb-4\" *ngFor=\"let country of sameCurrencyCountry\">\n    <img class=\"card-img-top\" src=\"{{country.flag}}\" alt=\"Card image cap\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">{{country.name}}</h5>\n      <div class=\"row\">\n        <div class=\"col-sm-3\">\n          <strong>Name: </strong> {{country.name}}\n        </div>\n        <div class=\"col-sm-3\" *ngIf=\"country.capital !== ''\">\n          <strong>Capital: </strong>{{country.capital}}\n        </div>\n        <div class=\"col-sm-3\">\n          <strong>Subregion: </strong>{{country.subregion}}\n        </div>\n        <div class=\"col-sm-3\">\n          <strong>Timezone: </strong>{{country.timezones[0]}}\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-6\" *ngIf=\"country.currencies[0].code !== null\">\n          <strong>\n            Currency: </strong><div *ngFor=\"let curr of country.currencies\">\n            <a class=\"clickCurrency\" *ngIf=\"curr.code !== null\" [routerLink]=\"['/currency',curr.code]\">\n              {{curr.name}}</a>\n          </div>\n        </div>\n        <div class=\"col-sm-6\" *ngIf=\"country.languages[0].iso639_1 !== null\">\n          <strong>\n            Language: </strong><div *ngFor=\"let lang of country.languages\">\n            <a class=\"clickCurrency\" [routerLink]=\"['/language',lang.iso639_1]\">\n              {{lang.name}}</a>\n          </div>\n        </div>\n      </div>\n      <br>\n      <a [routerLink]=\"['/name',country.name]\" class=\"btn btn-primary\">View Detail</a>\n      <br>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/currency-view/currency-view.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/currency-view/currency-view.component.ts ***!
  \**********************************************************/
/*! exports provided: CurrencyViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyViewComponent", function() { return CurrencyViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _map_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map.service */ "./src/app/map.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CurrencyViewComponent = /** @class */ (function () {
    function CurrencyViewComponent(_http, router, MapService, location) {
        this._http = _http;
        this.router = router;
        this.MapService = MapService;
        this.location = location;
    }
    CurrencyViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var currency = this._http.snapshot.paramMap.get('currency');
        this.currency1 = currency;
        this.MapService.getCurrencyView(currency).subscribe(function (data) {
            _this.sameCurrencyCountry = data;
            console.log(data);
        });
    };
    CurrencyViewComponent.prototype.goBackToPreviousPage = function () {
        this.location.back();
    };
    CurrencyViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-currency-view',
            template: __webpack_require__(/*! ./currency-view.component.html */ "./src/app/currency-view/currency-view.component.html"),
            styles: [__webpack_require__(/*! ./currency-view.component.css */ "./src/app/currency-view/currency-view.component.css")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _map_service__WEBPACK_IMPORTED_MODULE_1__["MapService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], CurrencyViewComponent);
    return CurrencyViewComponent;
}());



/***/ }),

/***/ "./src/app/filter1.pipe.ts":
/*!*********************************!*\
  !*** ./src/app/filter1.pipe.ts ***!
  \*********************************/
/*! exports provided: Filter1Pipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Filter1Pipe", function() { return Filter1Pipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Filter1Pipe = /** @class */ (function () {
    function Filter1Pipe() {
    }
    Filter1Pipe.prototype.transform = function (value, args) {
        if (!args) {
            return value;
        }
        else {
            args = args.toUpperCase();
        }
        return value.filter(function (item) {
            var regex = new RegExp(args, 'gi');
            return item.languages[0].name.match(regex);
        });
    };
    Filter1Pipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filter1'
        })
    ], Filter1Pipe);
    return Filter1Pipe;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Container holding the image and the text */\r\n.main {\r\n    position: relative;\r\n    text-align: center;\r\n    color: white;\r\n}\r\n/* Top left text */\r\n.top-left {\r\n    position: absolute;\r\n    top: 35%;\r\n    left: 70%;\r\n    -webkit-transform: translate(-70%, -30%);\r\n            transform: translate(-70%, -30%);\r\n}\r\n/* Centered text */\r\n.centered {\r\n    position: absolute;\r\n    top: 40%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-70%, -50%);\r\n            transform: translate(-70%, -50%);\r\n}\r\n/* Centered text */\r\n.Africa {\r\n    position: absolute;\r\n    top: 60%;\r\n    left: 55%;\r\n    -webkit-transform: translate(-50%, -45%);\r\n            transform: translate(-50%, -45%);\r\n}\r\n.Oceania{\r\n    position: absolute;\r\n    top: 75%;\r\n    left: 70%;\r\n    -webkit-transform: translate(-45%, -30%);\r\n            transform: translate(-45%, -30%);\r\n}\r\n.Americas{\r\n    position: absolute;\r\n    top: 30%;\r\n    left: 20%;\r\n    -webkit-transform: translate(-80%, -80%);\r\n            transform: translate(-80%, -80%);\r\n}\r\n.Polar{\r\n    position: absolute;\r\n    top: 90%;\r\n    left: 70%;\r\n    -webkit-transform: translate(-30%, -30%);\r\n            transform: translate(-30%, -30%);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n    <img src=\"./assets/map.jpg\" alt=\"Snow\" style=\"width:100%;\">\n    <div *ngFor=\"let region of regions; let i = index\">\n        <div class=\"top-left\" *ngIf=\"region === 'Asia'\" [routerLink]=\"['/region',region]\">\n            {{region}}\n        </div>\n        <div class=\"centered\" *ngIf=\"region === 'Europe'\" [routerLink]=\"['/region',region]\">\n            {{region}}\n        </div>\n        <div class=\"Africa\" *ngIf=\"region === 'Africa'\" [routerLink]=\"['/region',region]\">\n            {{region}}\n        </div>\n        <div class=\"Oceania\" *ngIf=\"region === 'Oceania'\" [routerLink]=\"['/region',region]\">\n            {{region}}\n        </div>\n        <div class=\"Americas\" *ngIf=\"region === 'Americas'\" [routerLink]=\"['/region',region]\">\n            {{region}}\n        </div>\n        <div class=\"Polar\" *ngIf=\"region === 'Polar'\" [routerLink]=\"['/region',region]\">\n            {{region}}\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _map_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map.service */ "./src/app/map.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(MapService) {
        this.MapService = MapService;
        this.arr = [];
        console.log('home component called');
    }
    HomeComponent.prototype.ngOnInit = function () {
        document.body.classList.add('bg-img');
        console.log('ngoinit called');
        this.getCountryName();
    };
    HomeComponent.prototype.getCountryName = function () {
        var _this = this;
        this.MapService.getCountryData().subscribe(function (data) {
            //this.regions = data
            data.map(function (item) {
                _this.arr.push(item.region);
            });
            _this.regions = new Set(_this.arr);
            console.log(_this.regions);
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_map_service__WEBPACK_IMPORTED_MODULE_1__["MapService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/language-view/language-view.component.css":
/*!***********************************************************!*\
  !*** ./src/app/language-view/language-view.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n    width: 100%\r\n}\r\n.card-img-top{\r\n    height: 40vh;\r\n}\r\n.clickCurrency{\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\n.head{\r\n    font-family: sans-serif;\r\n    color: grey;\r\n}\r\n"

/***/ }),

/***/ "./src/app/language-view/language-view.component.html":
/*!************************************************************!*\
  !*** ./src/app/language-view/language-view.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container row\">\n    <div class=\"col-sm-3\"></div>\n    <div class=\"col-sm-7\">\n        <h3 class=\"head\"> <strong>\"{{language1}}\"</strong> code language view of Countries</h3>\n    </div>\n    <div class=\"col-sm-2\">\n        <a class=\"btn btn-warning\" (click)=\"goBackToPreviousPage()\">Go Back</a>\n    </div>\n  </div>\n<div class=\"container\">\n  <div class=\"card mb-4\" *ngFor=\"let country of sameLanguageCountry\">\n    <img class=\"card-img-top\" src=\"{{country.flag}}\" alt=\"Card image cap\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">{{country.name}}</h5>\n      <div class=\"row\">\n        <div class=\"col-sm-3\">\n          <strong>Name: </strong> {{country.name}}\n        </div>\n        <div class=\"col-sm-3\" *ngIf=\"country.capital !== ''\">\n          <strong>Capital: </strong>{{country.capital}}\n        </div>\n        <div class=\"col-sm-3\">\n          <strong>Subregion: </strong>{{country.subregion}}\n        </div>\n        <div class=\"col-sm-3\">\n          <strong>Timezone: </strong>{{country.timezones[0]}}\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-6\" *ngIf=\"country.currencies[0].code !== null\">\n          <strong>\n            Currency: </strong><div *ngFor=\"let curr of country.currencies\">\n            <a class=\"clickCurrency\" *ngIf=\"curr.code !== null\" [routerLink]=\"['/currency',curr.code]\">\n              {{curr.name}}</a>\n          </div>\n        </div>\n        <div class=\"col-sm-6\">\n          <strong>\n            Language: </strong><div *ngFor=\"let lang of country.languages\">\n            <a class=\"clickCurrency\" *ngIf=\"lang.code !== null\" [routerLink]=\"['/language',lang.iso639_1]\">\n              {{lang.name}}</a>\n          </div>\n        </div>\n      </div>\n      <br>\n      <a [routerLink]=\"['/name',country.name]\" class=\"btn btn-primary\">View Detail</a>\n      <br>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/language-view/language-view.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/language-view/language-view.component.ts ***!
  \**********************************************************/
/*! exports provided: LanguageViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageViewComponent", function() { return LanguageViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _map_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map.service */ "./src/app/map.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LanguageViewComponent = /** @class */ (function () {
    function LanguageViewComponent(_http, router, MapService, location) {
        this._http = _http;
        this.router = router;
        this.MapService = MapService;
        this.location = location;
    }
    LanguageViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var language = this._http.snapshot.paramMap.get('language');
        this.language1 = language;
        this.MapService.getLanguageView(language).subscribe(function (data) {
            _this.sameLanguageCountry = data;
            console.log(data);
        });
    };
    LanguageViewComponent.prototype.goBackToPreviousPage = function () {
        this.location.back();
    };
    LanguageViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-language-view',
            template: __webpack_require__(/*! ./language-view.component.html */ "./src/app/language-view/language-view.component.html"),
            styles: [__webpack_require__(/*! ./language-view.component.css */ "./src/app/language-view/language-view.component.css")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _map_service__WEBPACK_IMPORTED_MODULE_1__["MapService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], LanguageViewComponent);
    return LanguageViewComponent;
}());



/***/ }),

/***/ "./src/app/map.service.ts":
/*!********************************!*\
  !*** ./src/app/map.service.ts ***!
  \********************************/
/*! exports provided: MapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapService", function() { return MapService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapService = /** @class */ (function () {
    function MapService(_http) {
        this._http = _http;
        this.mapBaseUrl = 'https://restcountries.eu/rest/v2';
    }
    MapService.prototype.getCountryData = function () {
        var response = this._http.get(this.mapBaseUrl);
        return response;
    };
    MapService.prototype.getAllCountries = function (regionName) {
        var response = this._http.get(this.mapBaseUrl + '/' + 'region' + '/' + regionName);
        return response;
    };
    MapService.prototype.getSingleCountry = function (countryName) {
        var response = this._http.get(this.mapBaseUrl + '/' + 'name' + '/' + countryName + '?fullText=true');
        return response;
    };
    MapService.prototype.getCurrencyView = function (currency) {
        var response = this._http.get(this.mapBaseUrl + '/' + 'currency' + '/' + currency);
        console.log(response);
        return response;
    };
    MapService.prototype.getLanguageView = function (language) {
        var response = this._http.get(this.mapBaseUrl + '/' + 'lang' + '/' + language);
        console.log(response);
        return response;
    };
    MapService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MapService);
    return MapService;
}());



/***/ }),

/***/ "./src/app/select-filter.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/select-filter.pipe.ts ***!
  \***************************************/
/*! exports provided: SelectFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectFilterPipe", function() { return SelectFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SelectFilterPipe = /** @class */ (function () {
    function SelectFilterPipe() {
    }
    SelectFilterPipe.prototype.transform = function (value, args) {
        if (!args) {
            return value;
        }
        else {
            args = args.toUpperCase();
        }
        return value.filter(function (item) {
            var regex = new RegExp(args, 'gi');
            return item.name.match(regex);
        });
    };
    SelectFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'selectFilter'
        })
    ], SelectFilterPipe);
    return SelectFilterPipe;
}());



/***/ }),

/***/ "./src/app/single-country/single-country.component.css":
/*!*************************************************************!*\
  !*** ./src/app/single-country/single-country.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-img-top{\r\n    height: 60vh;\r\n}\r\n.clickCurrency{\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\n.head{\r\n    font-family: sans-serif;\r\n    color: grey;\r\n}\r\n"

/***/ }),

/***/ "./src/app/single-country/single-country.component.html":
/*!**************************************************************!*\
  !*** ./src/app/single-country/single-country.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container row\">\n    <div class=\"col-sm-4\"></div>\n    <div class=\"col-sm-6\">\n        <h3 class=\"head\"><strong>{{countyName1}}</strong> Country view</h3>\n    </div>\n    <div class=\"col-sm-2\">\n        <a class=\"btn btn-warning\" (click)=\"goBackToPreviousPage()\">Go Back</a>\n    </div>\n  </div>\n<div class=\"card mb-3\" *ngIf=\"countryDetails\">\n  <img class=\"card-img-top\" src=\"{{countryDetails[0].flag}}\" alt=\"Card image cap\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">{{countryDetails[0].name}}</h5>\n    <ul class=\"list-group\">\n      <div class=\"row\">\n        <div class=\"col-sm-3\">\n          <li class=\"list-group-item\">\n            <strong>Capital: </strong>{{countryDetails[0].capital}}\n          </li>\n        </div>\n        <div class=\"col-sm-3\">\n          <li class=\"list-group-item\">\n            <strong>Region: </strong>{{countryDetails[0].region}}\n          </li>\n        </div>\n        <div class=\"col-sm-3\">\n          <li class=\"list-group-item\">\n            <strong>Subregion: </strong> {{countryDetails[0].subregion}}\n          </li>\n        </div>\n        <div class=\"col-sm-3\">\n          <li class=\"list-group-item\">\n            <strong>Population: </strong> {{countryDetails[0].population}}\n          </li>\n        </div>\n      </div>\n      <br>\n      <div class=\"row\">\n        <div class=\"col-sm-3\">\n          <li class=\"list-group-item\">\n            <strong>Area: </strong>{{countryDetails[0].area}} KM\n          </li>\n        </div>\n        <div class=\"col-sm-3\">\n          <li class=\"list-group-item\">\n            <strong>Alpha2Code: </strong>{{countryDetails[0].alpha2Code}}\n          </li>\n        </div>\n        <div class=\"col-sm-3\">\n            <li class=\"list-group-item\">\n              <strong>NumericCode: </strong>{{countryDetails[0].numericCode}}\n            </li>\n          </div>\n        <div class=\"col-sm-3\">\n          <li class=\"list-group-item\">\n            <strong>NativeName: </strong> {{countryDetails[0].nativeName}}\n          </li>\n        </div>\n      </div>\n      <br>\n      <div class=\"row\">\n          <div class=\"col\">\n            <li class=\"list-group-item\">\n              <strong>TimeZone: </strong> {{countryDetails[0].timezones}}\n            </li>\n          </div>\n        </div>\n        <br>\n        <div class=\"row\">\n            <div class=\"col\">\n              <li class=\"list-group-item\">\n                <strong>Currencies: </strong><div *ngFor=\"let curr of countryDetails[0].currencies\">\n                  <a class=\"clickCurrency\" *ngIf=\"curr.code !== null\" [routerLink]=\"['/currency',curr.code]\">\n                    {{curr.name}}</a>\n                    </div>\n              </li>\n            </div>\n          </div>\n        <br>\n      <div class=\"row\">\n        <div class=\"col\">\n          <li class=\"list-group-item\">\n            <strong>Borders: </strong>{{countryDetails[0].borders}}\n          </li>\n        </div>\n      </div>\n      <br>\n      <div class=\"row\">\n          <div class=\"col\">\n            <li class=\"list-group-item\">\n              <strong>Languages: </strong><div *ngFor=\"let lang of countryDetails[0].languages\">\n                  <a class=\"clickCurrency\" [routerLink]=\"['/language',lang.iso639_1]\">\n                    {{lang.name}}</a>\n                </div>\n            </li>\n          </div>\n        </div>\n    </ul>\n  </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/single-country/single-country.component.ts":
/*!************************************************************!*\
  !*** ./src/app/single-country/single-country.component.ts ***!
  \************************************************************/
/*! exports provided: SingleCountryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleCountryComponent", function() { return SingleCountryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _map_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map.service */ "./src/app/map.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SingleCountryComponent = /** @class */ (function () {
    function SingleCountryComponent(_route, router, MapService, location) {
        this._route = _route;
        this.router = router;
        this.MapService = MapService;
        this.location = location;
        this.timezones = [];
    }
    SingleCountryComponent.prototype.ngOnInit = function () {
        var _this = this;
        var countryName = this._route.snapshot.paramMap.get('name');
        this.countyName1 = countryName;
        this.MapService.getSingleCountry(countryName).subscribe(function (data) {
            _this.countryDetails = data;
            console.log(_this.countryDetails);
        });
    };
    SingleCountryComponent.prototype.goBackToPreviousPage = function () {
        this.location.back();
    };
    SingleCountryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-single-country',
            template: __webpack_require__(/*! ./single-country.component.html */ "./src/app/single-country/single-country.component.html"),
            styles: [__webpack_require__(/*! ./single-country.component.css */ "./src/app/single-country/single-country.component.css")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _map_service__WEBPACK_IMPORTED_MODULE_1__["MapService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], SingleCountryComponent);
    return SingleCountryComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Barh\Desktop\World_Map\Map\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map