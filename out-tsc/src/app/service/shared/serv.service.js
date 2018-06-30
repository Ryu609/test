"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var rxjs_1 = require("rxjs");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
var ServService = /** @class */ (function () {
    function ServService(http) {
        this.http = http;
        this.selectedCountry = new rxjs_1.Subject();
        this.servAnnounceSource = new rxjs_1.Subject();
        this.servAnnounceFilter = new rxjs_1.Subject();
        this.servAnnouced$ = this.servAnnounceSource.asObservable();
        this.selectedCountry$ = this.selectedCountry.asObservable();
        this.searchFilter$ = this.servAnnounceFilter.asObservable();
    }
    ServService.prototype.announceCountry = function (country) {
        this.selectedCountry.next(country);
    };
    ServService.prototype.announceServ = function (serv) {
        this.servAnnounceSource.next(serv);
    };
    ServService.prototype.announceFilter = function (filter) {
        this.servAnnounceFilter.next(filter);
    };
    ServService.prototype.getServList = function (searchfilter, page, region) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = "http://localhost/TheEye/api/Services/GetServices";
            _this.http.get(apiURL, { params: { filter: searchfilter, page: page, region: region } })
                .toPromise()
                .then(function (res) {
                _this.servList = res.json();
                resolve(res.json());
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    ServService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], ServService);
    return ServService;
}());
exports.ServService = ServService;
//# sourceMappingURL=serv.service.js.map