(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <h3 style=\"text-align: center;color: blue\">Omex Pharma</h3>\n    <div class=\"row\">\n        <div class=\"col-md-2\"><a  class=\"nav\" routerLink='/products'>Products</a></div>\n        <div class=\"col-md-2\"><a  class=\"nav active\" routerLink='/customers' >Customers</a></div>\n        <div class=\"col-md-2\"><a  class=\"nav\" routerLink='/bills'>Bills</a></div>\n        <div class=\"col-md-2\"><a  class=\"nav\" routerLink='/report'>Report</a></div>\n    </div>\n    <!-- <ul class=\"nav\">\n        <li class=\"nav-item\">\n            <a class=\"nav-link active\" routerLink='/products'>Products</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink='/customers'>Customers</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink='/bills'>Bills</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink='/report'>Report</a>\n        </li>\n    </ul> -->\n</div>\n\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bill/bill.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bill/bill.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br>\n<div class=\"container\" *ngIf=\"billDataArr\">\n    <div class=\"row\">\n        <div class=\"col-sm-6\">\n            Bill No: <input type=\"text\" placeholder=\"search...\" [(ngModel)]=\"temp\">\n        </div>\n        <div class=\"col-sm-6\">\n            Customer Name: <input type=\"text\" placeholder=\"search...\" [(ngModel)]=\"searchValue\">\n        </div>\n    </div>\n</div>\n\n\n<div class=\"container\" *ngIf=\"!billDataArr\">\n    <div class=\"loader\">\n        <span></span>\n    </div>\n</div>\n\n<div class=\"container\" *ngIf=\"billDataArr\">\n    <div class=\"row\">\n        <div class=\"card col-sm-3\" *ngFor=\"let bill of billDataArr | search: searchValue | billFilter : temp\"\n            style=\"width: 18rem;\">\n            <div class=\"card-header\">\n                <a [routerLink]=\"['/payment',bill._id]\">{{ bill.Customer }}</a>\n            </div>\n            <ul class=\"list-group list-group-flush\">\n                <li class=\"list-group-item\">Bill_No: {{ bill.Bill_No }}</li>\n                <li class=\"list-group-item\">Amount: &#x20b9; {{ bill.billAmount }}</li>\n                <li class=\"list-group-item\">Place: {{bill.Address}}</li>\n                <li class=\"list-group-item\">Date: {{bill.Date}}</li>\n                <li class=\"list-group-item\">Time: {{bill.Time}}</li>\n                <li class=\"list-group-item\">Payments: {{bill.paymentIds.length}}</li>\n            </ul>\n        </div>\n        &nbsp;\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br>\n<div class=\"container\" *ngIf=\"customerDataArr\">\n    Customer Name: <input type=\"text\" placeholder=\"search...\" [(ngModel)]=\"searchValue\">\n</div>\n\n<div class=\"container\">\n    <div class=\"row\" *ngIf=\"customerDataArr\">\n        <div class=\"card col-sm-3\" *ngFor=\"let customer of customerDataArr | customerFilter : searchValue\" style=\"width: 18rem;\">\n            <div class=\"card-header\">\n                {{ customer.Customer_Name }}\n            </div>\n            <ul class=\"list-group list-group-flush\">\n                <li class=\"list-group-item\">Street: {{ customer.Address }}</li>\n                <li class=\"list-group-item\">Place: {{ customer.Place }}</li>\n                <li class=\"list-group-item\">Gst: {{customer.GSTIN}}</li>\n            </ul>\n        </div>\n        &nbsp;\n    </div>\n</div>\n\n<!-- loader -->\n\n<div class=\"container\" *ngIf=\"!customerDataArr\">\n\t<div class=\"loader\">\n\t\t<span></span>\n\t</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/payment/payment.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payment/payment.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" *ngIf=\"!billData\">\n\t<div class=\"loader\">\n\t\t<span></span>\n\t</div>\n</div>\n\n<div class=\"container\" *ngIf=\"billData\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <h5 class=\"heading\">{{billData.Customer}} - {{billData.Bill_No}} - &#x20b9;{{billData.billAmount}}</h5>\n            <!-- <di class=\"row\">\n                <div class=\"col\">Bill No</div>\n                <div class=\"col\">Bill No</div>\n                <div class=\"col\">Bill No</div>\n                <div class=\"col\">Bill No</div>\n                <div class=\"col\">Bill No</div>\n            </di> -->\n            \n            <table class=\"table\">\n                <thead>\n                    <tr class=\"row\">\n                        <th class=\"col\">Sr. No</th>\n                        <th class=\"col\">Paid</th>\n                        <th class=\"col\">Rest</th>\n                        <th class=\"col\">Date</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr class=\"row\" *ngFor=\"let bill of paymemntHistory; let i = index\">\n                        <td class=\"col\">{{ i + 1 }}</td>\n                        <td class=\"col\">{{ bill.paidAmount }}</td>\n                        <td class=\"col\">{{ bill.restAmount }}</td>\n                        <td class=\"col\">{{ bill.createdAt | date: \"M/d/yy\" }}</td>\n                    </tr>\n                    <tr>\n                        <div class=\"row\">\n                                Paid Amount: <input type=\"number\" name=\"paidAmount\" #paidAmount>\n                                <button class=\"btn btn-primary\" (click)=\"addAmount(paidAmount.value)\">Add</button>\n                        </div>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br>\n<div class=\"container\" *ngIf=\"productData\">\n    <div class=\"row\">\n        <div class=\"col-sm-6\">\n                Company Name: <input type=\"text\" placeholder=\"search...\" [(ngModel)]=\"searchValue\">\n        </div>\n        <div class=\"col-sm-6\">\n            Product Name: <input type=\"text\" placeholder=\"search...\" [(ngModel)]=\"temp\">\n        </div>\n    </div>\n</div>\n\n<div class=\"container\" *ngIf=\"!productData\">\n\t<div class=\"loader\">\n\t\t<span></span>\n\t</div>\n</div>\n\n<div class=\"container\">\n    <div class=\"row\" *ngIf=\"productData\">\n        <div class=\"card col-sm-3\" *ngFor=\"let product of productData.data | companyFilter : searchValue | productFilter :temp\" style=\"width: 18rem;\">\n            <div class=\"card-header\">\n                {{ product.Item_Name }}\n            </div>\n            <ul class=\"list-group list-group-flush\">    \n                <li class=\"list-group-item\">Mrp: {{ product.Mrp }}</li>\n                <li class=\"list-group-item\">Quantity: {{ product.Quantity }}</li>\n                <li class=\"list-group-item\">Batch: {{product.Batch}}</li>\n                <li class=\"list-group-item\">Exp_Dt: {{product.Exp_Dt}}</li>\n                <li class=\"list-group-item\">Company: {{ product.Comp_Code }}</li>\n            </ul>\n        </div>\n        &nbsp;\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/report/report.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/report/report.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>report works!</p>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer/customer.component */ "./src/app/customer/customer.component.ts");
/* harmony import */ var _bill_bill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bill/bill.component */ "./src/app/bill/bill.component.ts");
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./report/report.component */ "./src/app/report/report.component.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/payment/payment.component.ts");








const routes = [
    { path: 'products', component: _product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"] },
    { path: 'customers', component: _customer_customer_component__WEBPACK_IMPORTED_MODULE_4__["CustomerComponent"] },
    { path: 'bills', component: _bill_bill_component__WEBPACK_IMPORTED_MODULE_5__["BillComponent"] },
    { path: 'payment/:id', component: _payment_payment_component__WEBPACK_IMPORTED_MODULE_7__["PaymentComponent"] },
    { path: 'report', component: _report_report_component__WEBPACK_IMPORTED_MODULE_6__["ReportComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a{\n    color: black;\n    font-weight: 400;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhe1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuIl19 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'pharma-newClient';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customer/customer.component */ "./src/app/customer/customer.component.ts");
/* harmony import */ var _bill_bill_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bill/bill.component */ "./src/app/bill/bill.component.ts");
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./report/report.component */ "./src/app/report/report.component.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/payment/payment.component.ts");
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./search.pipe */ "./src/app/search.pipe.ts");
/* harmony import */ var _pipes_bill_filter_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipes/bill-filter.pipe */ "./src/app/pipes/bill-filter.pipe.ts");
/* harmony import */ var _pipes_customer_filter_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pipes/customer-filter.pipe */ "./src/app/pipes/customer-filter.pipe.ts");
/* harmony import */ var _pipes_product_filter_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pipes/product-filter.pipe */ "./src/app/pipes/product-filter.pipe.ts");
/* harmony import */ var _pipes_company_filter_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pipes/company-filter.pipe */ "./src/app/pipes/company-filter.pipe.ts");




// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _product_product_component__WEBPACK_IMPORTED_MODULE_7__["ProductComponent"],
            _customer_customer_component__WEBPACK_IMPORTED_MODULE_8__["CustomerComponent"],
            _report_report_component__WEBPACK_IMPORTED_MODULE_10__["ReportComponent"],
            _payment_payment_component__WEBPACK_IMPORTED_MODULE_11__["PaymentComponent"],
            _bill_bill_component__WEBPACK_IMPORTED_MODULE_9__["BillComponent"],
            _search_pipe__WEBPACK_IMPORTED_MODULE_12__["SearchPipe"],
            _pipes_bill_filter_pipe__WEBPACK_IMPORTED_MODULE_13__["BillFilterPipe"],
            _pipes_customer_filter_pipe__WEBPACK_IMPORTED_MODULE_14__["CustomerFilterPipe"],
            _pipes_product_filter_pipe__WEBPACK_IMPORTED_MODULE_15__["ProductFilterPipe"],
            _pipes_company_filter_pipe__WEBPACK_IMPORTED_MODULE_16__["CompanyFilterPipe"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            // NgbModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/bill/bill.component.css":
/*!*****************************************!*\
  !*** ./src/app/bill/bill.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-header{\n    font-weight: bold;\n}\n.card{\n    border: 1px solid white;\n    margin-bottom: 4vh;\n    padding: 25px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlsbC9iaWxsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2JpbGwvYmlsbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtaGVhZGVye1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNhcmR7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgbWFyZ2luLWJvdHRvbTogNHZoO1xuICAgIHBhZGRpbmc6IDI1cHg7XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/bill/bill.component.ts":
/*!****************************************!*\
  !*** ./src/app/bill/bill.component.ts ***!
  \****************************************/
/*! exports provided: BillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillComponent", function() { return BillComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _pharma_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pharma.service */ "./src/app/pharma.service.ts");



let BillComponent = class BillComponent {
    constructor(pharma) {
        this.pharma = pharma;
    }
    ngOnInit() {
        this.billData();
    }
    billData() {
        this.pharma.getBillData().subscribe((data) => {
            this.billDataArr = data;
        });
    }
};
BillComponent.ctorParameters = () => [
    { type: _pharma_service__WEBPACK_IMPORTED_MODULE_2__["PharmaService"] }
];
BillComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bill',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bill.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bill/bill.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bill.component.css */ "./src/app/bill/bill.component.css")).default]
    })
], BillComponent);



/***/ }),

/***/ "./src/app/customer/customer.component.css":
/*!*************************************************!*\
  !*** ./src/app/customer/customer.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-header{\n    font-weight: bold;\n}\n.card{\n    border: 1px solid white;\n    margin-bottom: 4vh;\n    padding: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXIvY3VzdG9tZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tZXIvY3VzdG9tZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWhlYWRlcntcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jYXJke1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIG1hcmdpbi1ib3R0b206IDR2aDtcbiAgICBwYWRkaW5nOiAyNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/customer/customer.component.ts":
/*!************************************************!*\
  !*** ./src/app/customer/customer.component.ts ***!
  \************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _pharma_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pharma.service */ "./src/app/pharma.service.ts");



let CustomerComponent = class CustomerComponent {
    constructor(pharma) {
        this.pharma = pharma;
    }
    ngOnInit() {
        this.customerData();
    }
    customerData() {
        this.pharma.getCustomerData().subscribe((data) => {
            this.customerDataArr = data;
        });
    }
};
CustomerComponent.ctorParameters = () => [
    { type: _pharma_service__WEBPACK_IMPORTED_MODULE_2__["PharmaService"] }
];
CustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customer.component.css */ "./src/app/customer/customer.component.css")).default]
    })
], CustomerComponent);



/***/ }),

/***/ "./src/app/payment/payment.component.css":
/*!***********************************************!*\
  !*** ./src/app/payment/payment.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".heading{\n    margin-top: 4vh;\n    color: blue;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5bWVudC9wYXltZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3BheW1lbnQvcGF5bWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRpbmd7XG4gICAgbWFyZ2luLXRvcDogNHZoO1xuICAgIGNvbG9yOiBibHVlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/payment/payment.component.ts":
/*!**********************************************!*\
  !*** ./src/app/payment/payment.component.ts ***!
  \**********************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pharma_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pharma.service */ "./src/app/pharma.service.ts");




let PaymentComponent = class PaymentComponent {
    constructor(route, pharma) {
        this.route = route;
        this.pharma = pharma;
    }
    ngOnInit() {
        this.route.params.subscribe((data) => {
            this.billId = data.id;
        });
        this.getBillData();
        this.getPaymentHistory();
    }
    getBillData() {
        this.pharma.getSingleBillData(this.billId).subscribe((data) => {
            this.billData = data;
        });
    }
    getPaymentHistory() {
        this.pharma.getPaymentByBillId(this.billId).subscribe((data) => {
            this.paymemntHistory = data;
        });
    }
    addAmount(paidAmount) {
        let paymentObj = ({
            billId: this.billId,
            paidAmount: paidAmount
        });
        this.pharma.addPayment(paymentObj).subscribe(data => {
            let newPayment = 'newPayment';
            this.paymemntHistory.push(data[newPayment]);
        }, error => {
            console.log(error);
        });
    }
};
PaymentComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _pharma_service__WEBPACK_IMPORTED_MODULE_3__["PharmaService"] }
];
PaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./payment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/payment/payment.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./payment.component.css */ "./src/app/payment/payment.component.css")).default]
    })
], PaymentComponent);



/***/ }),

/***/ "./src/app/pharma.service.ts":
/*!***********************************!*\
  !*** ./src/app/pharma.service.ts ***!
  \***********************************/
/*! exports provided: PharmaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PharmaService", function() { return PharmaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let PharmaService = class PharmaService {
    constructor(http) {
        this.http = http;
        // public baseUrl = 'http://localhost:5000/api/v1'
        this.baseUrl = 'https://omexbackend.herokuapp.com/api/v1';
    }
    getProductData() {
        return this.http.get(`${this.baseUrl}/products`);
    }
    getCustomerData() {
        return this.http.get(`${this.baseUrl}/customers`);
    }
    getBillData() {
        return this.http.get(`${this.baseUrl}/bills`);
    }
    getSingleBillData(billId) {
        return this.http.get(`${this.baseUrl}/bills/${billId}`);
    }
    getPaymentByBillId(billId) {
        return this.http.get(`${this.baseUrl}/payment/${billId}`);
    }
    addPayment(paymentObj) {
        return this.http.post(`${this.baseUrl}/payment/${paymentObj.billId}`, paymentObj);
    }
};
PharmaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PharmaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PharmaService);



/***/ }),

/***/ "./src/app/pipes/bill-filter.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/pipes/bill-filter.pipe.ts ***!
  \*******************************************/
/*! exports provided: BillFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillFilterPipe", function() { return BillFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BillFilterPipe = class BillFilterPipe {
    transform(value, ...args) {
        if (!args[0]) {
            return value;
        }
        else {
            let searhText = args[0].toLowerCase();
            return value.filter((item) => {
                if (item.Bill_No !== null) {
                    if (item.Bill_No.toLowerCase().includes(searhText)) {
                        return item;
                    }
                }
            });
        }
    }
};
BillFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'billFilter'
    })
], BillFilterPipe);



/***/ }),

/***/ "./src/app/pipes/company-filter.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/pipes/company-filter.pipe.ts ***!
  \**********************************************/
/*! exports provided: CompanyFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyFilterPipe", function() { return CompanyFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CompanyFilterPipe = class CompanyFilterPipe {
    transform(value, ...args) {
        if (!args[0]) {
            return value;
        }
        else {
            let searhText = args[0].toLowerCase();
            return value.filter((item) => {
                if (item.Comp_Code !== null) {
                    if (item.Comp_Code.toLowerCase().includes(searhText)) {
                        return item;
                    }
                }
            });
        }
    }
};
CompanyFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'companyFilter'
    })
], CompanyFilterPipe);



/***/ }),

/***/ "./src/app/pipes/customer-filter.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/pipes/customer-filter.pipe.ts ***!
  \***********************************************/
/*! exports provided: CustomerFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerFilterPipe", function() { return CustomerFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CustomerFilterPipe = class CustomerFilterPipe {
    transform(value, ...args) {
        if (!args[0]) {
            return value;
        }
        else {
            let searhText = args[0].toLowerCase();
            return value.filter((item) => {
                if (item.Customer_Name !== null) {
                    if (item.Customer_Name.toLowerCase().includes(searhText)) {
                        return item;
                    }
                }
            });
        }
    }
};
CustomerFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'customerFilter'
    })
], CustomerFilterPipe);



/***/ }),

/***/ "./src/app/pipes/product-filter.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/pipes/product-filter.pipe.ts ***!
  \**********************************************/
/*! exports provided: ProductFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFilterPipe", function() { return ProductFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductFilterPipe = class ProductFilterPipe {
    transform(value, ...args) {
        if (!args[0]) {
            return value;
        }
        else {
            let searhText = args[0].toLowerCase();
            return value.filter((item) => {
                if (item.Item_Name !== null) {
                    if (item.Item_Name.toLowerCase().includes(searhText)) {
                        return item;
                    }
                }
            });
        }
    }
};
ProductFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'productFilter'
    })
], ProductFilterPipe);



/***/ }),

/***/ "./src/app/product/product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-header{\n    font-weight: bold;\n}\n.card{\n    border: 1px solid white;\n    margin-bottom: 4vh;\n    padding: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtaGVhZGVye1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNhcmR7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgbWFyZ2luLWJvdHRvbTogNHZoO1xuICAgIHBhZGRpbmc6IDI1cHg7XG59Il19 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _pharma_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pharma.service */ "./src/app/pharma.service.ts");



let ProductComponent = class ProductComponent {
    constructor(pharma) {
        this.pharma = pharma;
    }
    ngOnInit() {
        this.pharma.getProductData().subscribe((data) => {
            this.productData = data;
            console.log(this.productData);
        });
    }
};
ProductComponent.ctorParameters = () => [
    { type: _pharma_service__WEBPACK_IMPORTED_MODULE_2__["PharmaService"] }
];
ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product.component.css */ "./src/app/product/product.component.css")).default]
    })
], ProductComponent);



/***/ }),

/***/ "./src/app/report/report.component.css":
/*!*********************************************!*\
  !*** ./src/app/report/report.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9yZXBvcnQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/report/report.component.ts":
/*!********************************************!*\
  !*** ./src/app/report/report.component.ts ***!
  \********************************************/
/*! exports provided: ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComponent", function() { return ReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ReportComponent = class ReportComponent {
    constructor() { }
    ngOnInit() {
    }
};
ReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-report',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./report.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/report/report.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./report.component.css */ "./src/app/report/report.component.css")).default]
    })
], ReportComponent);



/***/ }),

/***/ "./src/app/search.pipe.ts":
/*!********************************!*\
  !*** ./src/app/search.pipe.ts ***!
  \********************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SearchPipe = class SearchPipe {
    transform(value, ...searchValue) {
        if (!searchValue[0]) {
            return value;
        }
        else {
            let searhText = searchValue[0].toLowerCase();
            return value.filter((item) => {
                if (item.Customer !== null) {
                    if (item.Customer.toLowerCase().includes(searhText)) {
                        return item;
                    }
                }
            });
        }
    }
};
SearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'search'
    })
], SearchPipe);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/abhishek/Documents/Abhi/Awzing/pharma/pharma-newClient/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map