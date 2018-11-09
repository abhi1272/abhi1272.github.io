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

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about{\r\n    margin-top:2vh;\r\n}"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n <h3 class=\"about\">About US</h3><br>\n  <div class=\"row\">\n    <div class=\"col-sm-7\">\n        <h1>Improving health through superior products</h1>\n      <p>\n          Founded by the late Mr. Amrut Mody, Unichem Laboratories Ltd. is one of India’s most respected pharmaceutical companies committed to deliver better health through superior products.<br>\n          <br>\n          Unichem has several pharma products that address the needs of relevant and growing therapeutic areas like gastroenterology, cardiology, diabetology, psychiatry, neurology, anti-bacterials, anti-infectives and pain management.\n        \n      </p>\n    </div>\n    <img class=\"col-sm-5 img-responsive\"  src=\"./assets/img/logos/med1.jpg\">\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        console.log('about constructor called');
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav{\r\n\tbackground-color: lightblue;\r\n}\r\n.navbar-inner{\r\n\tbackground: transparent;\r\n\t\r\n}\r\n.footer-distributed{\r\n\tbackground-color: #292c2f;\r\n\tbox-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);\r\n\tbox-sizing: border-box;\r\n\twidth: 100%;\r\n\ttext-align: left;\r\n\tfont: bold 16px sans-serif;\r\n\tpadding: 55px 50px;\r\n\tmargin-top: 80px;\r\n}\r\n.footer-distributed .footer-left,\r\n.footer-distributed .footer-center,\r\n.footer-distributed .footer-right{\r\n\tdisplay: inline-block;\r\n\tvertical-align: top;\r\n}\r\n/* Footer left */\r\n.footer-distributed .footer-left{\r\n\twidth: 40%;\r\n}\r\n/* The company logo */\r\n.footer-distributed h3{\r\n\tcolor:  #ffffff;\r\n\tfont: normal 36px 'Cookie', cursive;\r\n\tmargin: 0;\r\n}\r\n.footer-distributed h3 span{\r\n\tcolor:  #5383d3;\r\n}\r\n/* Footer links */\r\n.footer-distributed .footer-links{\r\n\tcolor:  #ffffff;\r\n\tmargin: 20px 0 12px;\r\n\tpadding: 0;\r\n}\r\n.footer-distributed .footer-links a{\r\n\tdisplay:inline-block;\r\n\tline-height: 1.8;\r\n\ttext-decoration: none;\r\n\tcolor:  inherit;\r\n}\r\n.footer-distributed .footer-company-name{\r\n\tcolor:  #8f9296;\r\n\tfont-size: 14px;\r\n\tfont-weight: normal;\r\n\tmargin: 0;\r\n}\r\n/* Footer Center */\r\n.footer-distributed .footer-center{\r\n\twidth: 35%;\r\n}\r\n.footer-distributed .footer-center i{\r\n\tbackground-color:  #33383b;\r\n\tcolor: #ffffff;\r\n\tfont-size: 25px;\r\n\twidth: 38px;\r\n\tborder-radius: 50%;\r\n\ttext-align: center;\r\n\tline-height: 30px;\r\n\tmargin: 10px 15px;\r\n\tvertical-align: middle;\r\n}\r\n.footer-distributed .footer-center i.fa-envelope{\r\n\tfont-size: 17px;\r\n\tline-height: 38px;\r\n}\r\n.footer-distributed .footer-center p{\r\n\tdisplay: inline-block;\r\n\tcolor: #ffffff;\r\n\tvertical-align: middle;\r\n\tmargin:0;\r\n}\r\n.footer-distributed .footer-center p span{\r\n\tdisplay:block;\r\n\tfont-weight: normal;\r\n\tfont-size:14px;\r\n\tline-height:2;\r\n}\r\n.footer-distributed .footer-center p a{\r\n\tcolor:  #5383d3;\r\n\ttext-decoration: none;;\r\n}\r\n/* Footer Right */\r\n.footer-distributed .footer-right{\r\n\twidth: 20%;\r\n}\r\n.footer-distributed .footer-company-about{\r\n\tline-height: 20px;\r\n\tcolor:  #92999f;\r\n\tfont-size: 13px;\r\n\tfont-weight: normal;\r\n\tmargin: 0;\r\n}\r\n.footer-distributed .footer-company-about span{\r\n\tdisplay: block;\r\n\tcolor:  #ffffff;\r\n\tfont-size: 14px;\r\n\tfont-weight: bold;\r\n\tmargin-bottom: 20px;\r\n}\r\n.footer-distributed .footer-icons{\r\n\tmargin-top: 25px;\r\n}\r\n.footer-distributed .footer-icons a{\r\n\tdisplay: inline-block;\r\n\twidth: 35px;\r\n\theight: 35px;\r\n\tcursor: pointer;\r\n\tbackground-color:  #33383b;\r\n\tborder-radius: 2px;\r\n\r\n\tfont-size: 20px;\r\n\tcolor: #ffffff;\r\n\ttext-align: center;\r\n\tline-height: 35px;\r\n\r\n\tmargin-right: 3px;\r\n\tmargin-bottom: 5px;\r\n}\r\n/* If you don't want the footer to be responsive, remove these media queries */\r\n@media (max-width: 880px) {\r\n\r\n\t.footer-distributed{\r\n\t\tfont: bold 14px sans-serif;\r\n\t}\r\n\r\n\t.footer-distributed .footer-left,\r\n\t.footer-distributed .footer-center,\r\n\t.footer-distributed .footer-right{\r\n\t\tdisplay: block;\r\n\t\twidth: 100%;\r\n\t\tmargin-bottom: 40px;\r\n\t\ttext-align: center;\r\n\t}\r\n\r\n\t.footer-distributed .footer-center i{\r\n\t\tmargin-left: 0;\r\n\t}\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-expand-lg navbar-blue bg-dark\">\n  <div class=\"container navbar-inner\">\n    <a class=\"navbar-brand\" routerLink=\"/home\">Awzing</a>\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\"\n      aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\">Home</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/about\">About</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/product\">Product</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/contact\">Contact</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<br><br>\n<div>\n  <router-outlet></router-outlet>\n</div>\n<!-- Footer -->\n<footer class=\"footer-distributed\">\n\n  <div class=\"footer-left\">\n\n    <h3>Awzing<span></span></h3>\n\n    <p class=\"footer-links\">\n      <a href=\"#\">Home</a> ·\n      <a href=\"#\">About</a> ·\n      <a href=\"#\">Product</a>.\n      <a href=\"#\">Contact</a>\n    </p>\n\n    <p class=\"footer-company-name\">Awzing Healthcare pvt. ltd. &copy; 2018</p>\n\n    <div class=\"footer-icons\">\n\n\n      <a href=\"https://www.facebook.com/AwzingPvt/\"><i class=\"fa fa-facebook\"></i></a>\n\n    </div>\n\n  </div>\n\n  <div class=\"footer-center\">\n\n    <div>\n      <i class=\"fa fa-map-marker\"></i>\n      <p><span>21 Revolution Street</span> Patna, India</p>\n    </div>\n\n    <div>\n      <i class=\"fa fa-phone\"></i>\n      <p>+91 9135048439</p>\n    </div>\n\n    <div>\n      <i class=\"fa fa-envelope\"></i>\n      <p><a href=\"mailto:support@company.com\">support@awzing.com</a></p>\n    </div>\n\n  </div>\n\n  <div class=\"footer-right\">\n\n    <p class=\"footer-company-about\">\n      <span>About the company</span> Awzing Heathcare pvt. ltd. is a pharmaceutical company headquartered at New Delhi, The\n      capital of India. Our main activities are focused on to improve the quality of life by providing better health services\n      by developing and marketing quality and proprietary pharmaceutical product.\n    </p>\n\n  </div>\n\n</footer>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//Router module used for setting up the application level route 







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_5__["ProductComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
                    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], pathMatch: 'full' },
                    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"] },
                    { path: 'product', component: _product_product_component__WEBPACK_IMPORTED_MODULE_5__["ProductComponent"] },
                    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"] },
                    { path: "**", component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"] }
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*, *:before, *:after {\r\n    box-sizing: border-box;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n  }\r\n  \r\n  body {\r\n    background: linear-gradient(to right, #ea1d6f 0%, #eb466b 100%);\r\n    font-size: 12px;\r\n  }\r\n  \r\n  body, button, input {\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight: 700;\r\n    letter-spacing: 1.4px;\r\n  }\r\n  \r\n  .background {\r\n    display: flex;\r\n    min-height: 100vh;\r\n  }\r\n  \r\n  .container {\r\n    flex: 0 1 700px;\r\n    margin: auto;\r\n    padding: 10px;\r\n  }\r\n  \r\n  .screen {\r\n    position: relative;\r\n    background: #3e3e3e;\r\n    border-radius: 15px;\r\n  }\r\n  \r\n  .screen:after {\r\n    content: '';\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 20px;\r\n    right: 20px;\r\n    bottom: 0;\r\n    border-radius: 15px;\r\n    box-shadow: 0 20px 40px rgba(0, 0, 0, .4);\r\n    z-index: -1;\r\n  }\r\n  \r\n  .screen-header {\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 10px 20px;\r\n    background: #4d4d4f;\r\n    border-top-left-radius: 15px;\r\n    border-top-right-radius: 15px;\r\n  }\r\n  \r\n  .screen-header-left {\r\n    margin-right: auto;\r\n  }\r\n  \r\n  .screen-header-button {\r\n    display: inline-block;\r\n    width: 8px;\r\n    height: 8px;\r\n    margin-right: 3px;\r\n    border-radius: 8px;\r\n    background: white;\r\n  }\r\n  \r\n  .screen-header-button.close {\r\n    background: #ed1c6f;\r\n  }\r\n  \r\n  .screen-header-button.maximize {\r\n    background: #e8e925;\r\n  }\r\n  \r\n  .screen-header-button.minimize {\r\n    background: #74c54f;\r\n  }\r\n  \r\n  .screen-header-right {\r\n    display: flex;\r\n  }\r\n  \r\n  .screen-header-ellipsis {\r\n    width: 3px;\r\n    height: 3px;\r\n    margin-left: 2px;\r\n    border-radius: 8px;\r\n    background: #999;\r\n  }\r\n  \r\n  .screen-body {\r\n    display: flex;\r\n  }\r\n  \r\n  .screen-body-item {\r\n    flex: 1;\r\n    padding: 50px;\r\n  }\r\n  \r\n  .screen-body-item.left {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .app-title {\r\n    display: flex;\r\n    flex-direction: column;\r\n    position: relative;\r\n    color: #ea1d6f;\r\n    font-size: 26px;\r\n  }\r\n  \r\n  .app-title:after {\r\n    content: '';\r\n    display: block;\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: -10px;\r\n    width: 25px;\r\n    height: 4px;\r\n    background: #ea1d6f;\r\n  }\r\n  \r\n  .app-contact {\r\n    margin-top: auto;\r\n    font-size: 8px;\r\n    color: #888;\r\n  }\r\n  \r\n  .app-form-group {\r\n    margin-bottom: 15px;\r\n  }\r\n  \r\n  .app-form-group.message {\r\n    margin-top: 40px;\r\n  }\r\n  \r\n  .app-form-group.buttons {\r\n    margin-bottom: 0;\r\n    text-align: right;\r\n  }\r\n  \r\n  .app-form-control {\r\n    width: 100%;\r\n    padding: 10px 0;\r\n    background: none;\r\n    border: none;\r\n    border-bottom: 1px solid #666;\r\n    color: #ddd;\r\n    font-size: 14px;\r\n    text-transform: uppercase;\r\n    outline: none;\r\n    transition: border-color .2s;\r\n  }\r\n  \r\n  .app-form-control::-webkit-input-placeholder {\r\n    color: #666;\r\n  }\r\n  \r\n  .app-form-control:-ms-input-placeholder {\r\n    color: #666;\r\n  }\r\n  \r\n  .app-form-control::-ms-input-placeholder {\r\n    color: #666;\r\n  }\r\n  \r\n  .app-form-control::placeholder {\r\n    color: #666;\r\n  }\r\n  \r\n  .app-form-control:focus {\r\n    border-bottom-color: #ddd;\r\n  }\r\n  \r\n  .app-form-button {\r\n    background: none;\r\n    border: none;\r\n    color: #ea1d6f;\r\n    font-size: 14px;\r\n    cursor: pointer;\r\n    outline: none;\r\n  }\r\n  \r\n  .app-form-button:hover {\r\n    color: #b9134f;\r\n  }\r\n  \r\n  .credits {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-top: 20px;\r\n    color: #ffa4bd;\r\n    font-family: 'Roboto Condensed', sans-serif;\r\n    font-size: 16px;\r\n    font-weight: normal;\r\n  }\r\n  \r\n  .credits-link {\r\n    display: flex;\r\n    align-items: center;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  .dribbble {\r\n    width: 20px;\r\n    height: 20px;\r\n    margin: 0 5px;\r\n  }\r\n  \r\n  @media screen and (max-width: 520px) {\r\n    .screen-body {\r\n      flex-direction: column;\r\n    }\r\n  \r\n    .screen-body-item.left {\r\n      margin-bottom: 30px;\r\n    }\r\n  \r\n    .app-title {\r\n      flex-direction: row;\r\n    }\r\n  \r\n    .app-title span {\r\n      margin-right: 12px;\r\n    }\r\n  \r\n    .app-title:after {\r\n      display: none;\r\n    }\r\n  }\r\n  \r\n  @media screen and (max-width: 600px) {\r\n    .screen-body {\r\n      padding: 40px;\r\n    }\r\n  \r\n    .screen-body-item {\r\n      padding: 0;\r\n    }\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\n  <div class=\"container\">\n    <div class=\"screen\">\n      <div class=\"screen-header\">\n        <div class=\"screen-header-left\">\n          <div class=\"screen-header-button close\"></div>\n          <div class=\"screen-header-button maximize\"></div>\n          <div class=\"screen-header-button minimize\"></div>\n        </div>\n        <div class=\"screen-header-right\">\n          <div class=\"screen-header-ellipsis\"></div>\n          <div class=\"screen-header-ellipsis\"></div>\n          <div class=\"screen-header-ellipsis\"></div>\n        </div>\n      </div>\n      <div class=\"screen-body\">\n        <div class=\"screen-body-item left\">\n          <div class=\"app-title\">\n            <span>CONTACT</span>\n            <span>US</span>\n          </div>\n          <div class=\"app-contact\">CONTACT INFO : +62 81 314 928 595</div>\n        </div>\n        <div class=\"screen-body-item\">\n          <div class=\"app-form\">\n            <div class=\"app-form-group\">\n              <input class=\"app-form-control\" placeholder=\"NAME\" value=\"Krisantus Wanandi\">\n            </div>\n            <div class=\"app-form-group\">\n              <input class=\"app-form-control\" placeholder=\"EMAIL\">\n            </div>\n            <div class=\"app-form-group\">\n              <input class=\"app-form-control\" placeholder=\"CONTACT NO\">\n            </div>\n            <div class=\"app-form-group message\">\n              <input class=\"app-form-control\" placeholder=\"MESSAGE\">\n            </div>\n            <div class=\"app-form-group buttons\">\n              <button class=\"app-form-button\">CANCEL</button>\n              <button class=\"app-form-button\">SEND</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"credits\">\n      inspired by\n      <a class=\"credits-link\" href=\"https://dribbble.com/shots/2666271-Contact\" target=\"_blank\">\n        <svg class=\"dribbble\" viewBox=\"0 0 200 200\">\n          <g stroke=\"#ffffff\" fill=\"none\">\n            <circle cx=\"100\" cy=\"100\" r=\"90\" stroke-width=\"20\"></circle>\n            <path d=\"M62.737004,13.7923523 C105.08055,51.0454853 135.018754,126.906957 141.768278,182.963345\"\n              stroke-width=\"20\"></path>\n            <path d=\"M10.3787186,87.7261455 C41.7092324,90.9577894 125.850356,86.5317271 163.474536,38.7920951\"\n              stroke-width=\"20\"></path>\n            <path d=\"M41.3611549,163.928627 C62.9207607,117.659048 137.020642,86.7137169 189.041451,107.858103\"\n              stroke-width=\"20\"></path>\n          </g>\n        </svg>\n        Gururaj\n      </a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welimg{\r\n    margin: 7vh 0vw 0 0;\r\n\r\n}\r\n.portfolio-item{\r\n    margin-bottom: 2vh;\r\n}\r\n.about{\r\n    font-size: 1rem;\r\n    margin: 2vh;\r\n    padding: 4vh;\r\n}\r\n.readMore{\r\n    margin-top: -1vh 10vw;\r\n}\r\n.ourProduct{\r\n    font-size: 2rem;\r\n    font-family: Helvetica, sans-serif;\r\n    margin-bottom: 3vh;\r\n    color: grey;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n    </ol>\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n        <img class=\"d-block w-100 img-fluid\" src=\"./assets/img/slides/7.jpg\" alt=\"First slide\">\n      </div>\n      <div class=\"carousel-item\">\n        <img class=\"d-block w-100 img-fluid\" src=\"./assets/img/slides/4.jpg\" alt=\"Second slide\">\n      </div>\n      <div class=\"carousel-item\">\n        <img class=\"d-block w-100 img-fluid\" src=\"./assets/img/slides/5.jpg\" alt=\"Third slide\">\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n    <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n  </div>\n</header>\n<!-- Page Content -->\n<div class=\"container\">\n\n  <div class=\"row\">\n    <div class=\"col-md-5\">\n      <img class=\"welimg img-fluid\" src=\"./assets/img/slides/wel1.jpg\">\n    </div>\n    <div class=\"about col-md-6\">\n      <h3>Welcome to Awzing Heathcare pvt. ltd.</h3>\n        <p>Awzing Heathcare pvt. ltd. is a pharmaceutical company headquartered at New Delhi, The capital of India. Our main activities are focused on to improve the quality of life by providing better health services by developing and marketing quality and proprietary pharmaceutical product.\n        Every molecule here is researched to trace the soul of happiness. Our significant achievements during the last few years have helped us build an Organization and infrastructure that has led Amox to spread its wings. </p>\n        <p>At Awzing, New and innovative business models are in motion to make the most of emerging opportunities. We aim to market high quality and affordable pharmaceuticals to be made available everywhere, everyday.</p>\n        <div class=\"readMore\"> <a href=\"\" class=\"btn\">Read More</a></div>\n      </div>\n  </div>\n  <p class=\"ourProduct\">Our Products</p>\n\n  <div class=\"row\">\n    <div class=\"col-lg-4 col-sm-6 portfolio-item\">\n      <div class=\"card\">\n        <a href=\"#\"><img class=\"card-img-top\" src=\"./assets/img/logos/1.JPG\" alt=\"\"></a>\n        <h4 class=\"card-title text-center\">\n          <a href=\"#\">Zingofolvin</a>\n        </h4>\n      </div>\n    </div>\n    \n    <div class=\"col-lg-4 col-sm-6 portfolio-item\">\n      <div class=\"card\">\n        <a href=\"#\"><img class=\"card-img-top\" src=\"./assets/img/logos/2.JPG\" alt=\"\"></a>\n        <h4 class=\"card-title text-center\">\n          <a href=\"#\">Zawinac-P</a>\n        </h4>\n      </div>\n    </div>\n\n    <div class=\"col-lg-4 col-sm-6 portfolio-item\">\n      <div class=\"card\">\n        <a href=\"#\"><img class=\"card-img-top\" src=\"./assets/img/logos/3.JPG\" alt=\"\"></a>\n        <h4 class=\"card-title text-center\">\n          <a href=\"#\">Klorofen</a>\n        </h4>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- /.row -->\n"

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
    function HomeComponent() {
        this.home = 'home';
        console.log('home constructor called');
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/product/product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n    margin-bottom: 4vh;\r\n}\r\n.prod{\r\n    width: 100%;\r\n    height: 50vh;\r\n}"

/***/ }),

/***/ "./src/app/product/product.component.html":
/*!************************************************!*\
  !*** ./src/app/product/product.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src=\"./assets/img/logos/prod.jpg\" class=\"prod img-responsive\">\n<br>\n<div class=\"container\" style=\"margin-top:2vh\">\n  <h4>Products</h4>\n  <h2>\n    We make a wide range of prescription<br>\n    medicines, vaccines and consumer<br>\n    healthcare products\n  </h2>\n  <h2 class=\"ourProduct\">Our Products</h2><br>\n  <div class=\"row\">\n    <div class=\"col-md-4 col-sm-6 portfolio-item\">\n      <div class=\"card\">\n        <a href=\"#\"><img class=\"card-img-top\" src=\"./assets/img/logos/1.JPG\" alt=\"\"></a>\n        <h4 class=\"card-title text-center\">\n          <a href=\"#\">Zingofolvin</a>\n        </h4>\n      </div>\n    </div>\n\n    <div class=\"col-md-4 col-sm-6 portfolio-item\">\n      <div class=\"card\">\n        <a href=\"#\"><img class=\"card-img-top\" src=\"./assets/img/logos/2.JPG\" alt=\"\"></a>\n        <h4 class=\"card-title text-center\">\n          <a href=\"#\">Zawinac-P</a>\n        </h4>\n      </div>\n    </div>\n\n    <div class=\"col-md-4 col-sm-6 portfolio-item\">\n      <div class=\"card\">\n        <a href=\"#\"><img class=\"card-img-top\" src=\"./assets/img/logos/3.JPG\" alt=\"\"></a>\n        <h4 class=\"card-title text-center\">\n          <a href=\"#\">Klorofen</a>\n        </h4>\n      </div>\n    </div>\n\n    <div class=\"col-md-4 col-sm-6 portfolio-item\">\n      <div class=\"card\">\n        <a href=\"#\"><img class=\"card-img-top\" src=\"./assets/img/logos/4.JPG\" alt=\"\"></a>\n        <h4 class=\"card-title text-center\">\n          <a href=\"#\">Klorofen</a>\n        </h4>\n      </div>\n    </div>\n\n    <div class=\"col-md-4 col-sm-6 portfolio-item\">\n      <div class=\"card\">\n        <a href=\"#\"><img class=\"card-img-top\" src=\"./assets/img/logos/5.JPG\" alt=\"\"></a>\n        <h4 class=\"card-title text-center\">\n          <a href=\"#\">Klorofen</a>\n        </h4>\n      </div>\n    </div>\n    <div class=\"col-md-4 col-sm-6 portfolio-item\">\n      <div class=\"card\">\n        <a href=\"#\"><img class=\"card-img-top\" src=\"./assets/img/logos/6.JPG\" alt=\"\"></a>\n        <h4 class=\"card-title text-center\">\n          <a href=\"#\">Klorofen</a>\n        </h4>\n      </div>\n    </div>\n    <div class=\"col-md-4 col-sm-6 portfolio-item\">\n      <div class=\"card\">\n        <a href=\"#\"><img class=\"card-img-top\" src=\"./assets/img/logos/7.JPG\" alt=\"\"></a>\n        <h4 class=\"card-title text-center\">\n          <a href=\"#\">Klorofen</a>\n        </h4>\n      </div>\n    </div>\n\n    <div class=\"col-md-4 col-sm-6 portfolio-item\">\n      <div class=\"card\">\n        <a href=\"#\"><img class=\"card-img-top\" src=\"./assets/img/logos/8.JPG\" alt=\"\"></a>\n        <h4 class=\"card-title text-center\">\n          <a href=\"#\">Klorofen</a>\n        </h4>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductComponent);
    return ProductComponent;
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

module.exports = __webpack_require__(/*! C:\Users\Barh\Desktop\Awazing_Pharma\Awzing\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map