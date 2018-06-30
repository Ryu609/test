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
var serv_service_1 = require("../shared/serv.service");
require("rxjs/add/observable/of");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var angular_ts_math_1 = require("angular-ts-math");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
var ServiceListComponent = /** @class */ (function () {
    function ServiceListComponent(servService) {
        var _this = this;
        this.servService = servService;
        this.p = 1;
        this.total = 6;
        this.subcription2 = servService.searchFilter$.subscribe(function (filter) { _this.filter = filter; });
        this.subscription = servService.servAnnouced$.subscribe(function (services) {
            _this.services = services;
        });
        // this.services = [{"firstName":"Amardev","lastName":"Joynauth","serviceName":"Web Developer","serviceDescription":"I provide IT Solution for business problems","regionName":"New Grove","districtName":"GrandPort","likes":0,"total":0},{"firstName":"Amardev","lastName":"Joynauth","serviceName":"Web Developer","serviceDescription":"I provide IT Solution for business problems","regionName":"New Grove","districtName":"GrandPort","likes":0,"total":0}]
    }
    ServiceListComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.subcription2.unsubscribe();
    };
    ServiceListComponent.prototype.getPage = function (page) {
        var _this = this;
        this.loading = true;
        var asyncServs = this.servService.getServList(this.filter, page);
        var mme = asyncServs.then(function (val) {
            _this.services = _this.grindIt(val);
            _this.total = 6;
            _this.p = page;
            _this.loading = false;
        });
    };
    ServiceListComponent.prototype.grindIt = function (service) {
        var count = service.length;
        var index = 0;
        var rows = angular_ts_math_1.angularMath.nextIntegerOfNumber(service.length / 5);
        var gri = [];
        for (var i = 0; i < rows; i++) {
            gri[i] = [];
            for (var j = 0; j < 5; j++) {
                if (service[index] != null)
                    gri[i][j] = service[index];
                index++;
            }
        }
        return gri;
    };
    ;
    ServiceListComponent = __decorate([
        core_1.Component({
            selector: 'app-service-list',
            templateUrl: './service-list.component.html',
            styleUrls: ['./service-list.component.css'],
            changeDetection: core_1.ChangeDetectionStrategy.Default
        }),
        __metadata("design:paramtypes", [serv_service_1.ServService])
    ], ServiceListComponent);
    return ServiceListComponent;
}());
exports.ServiceListComponent = ServiceListComponent;
//# sourceMappingURL=service-list.component.js.map