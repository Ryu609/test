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
var serv_service_1 = require("../service/shared/serv.service");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
var angular_tree_component_1 = require("angular-tree-component");
var ngx_toastr_1 = require("ngx-toastr");
var angular_ts_math_1 = require("angular-ts-math");
var FilterComponent = /** @class */ (function () {
    function FilterComponent(servService, http, toastr) {
        var _this = this;
        this.servService = servService;
        this.http = http;
        this.toastr = toastr;
        this.subscription = this.servService.selectedCountry$.subscribe(function (mydata) { _this.selectedCountry = mydata; console.log(_this.selectedCountry); });
        this.subscription2 = this.servService.searchFilter$.subscribe(function (filter) { _this.searchText = filter; console.log(filter); });
    }
    FilterComponent.prototype.ngOnInit = function () {
        this.getRegionList("Mauritius");
    };
    FilterComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    FilterComponent.prototype.announce = function (service) {
        var grid = this.grindIt(service);
        this.servService.announceServ(grid);
        this.servService.announceFilter(this.searchText);
    };
    FilterComponent.prototype.addNode = function (region) {
        var _this = this;
        console.log(region);
        console.log(this.searchText);
        var my = this.servService.getServList(this.searchText, 1, region);
        console.log(my);
        var mme = my.then(function (val) { return _this.announce(val); });
    };
    FilterComponent.prototype.grindIt = function (service) {
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
    FilterComponent.prototype.getRegionList = function (country) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = "http://localhost/TheEye/api/DataSource/GetRegion";
            _this.http.get(apiURL, { params: { Country: country } })
                .toPromise()
                .then(function (res) {
                _this.nodes = res.json();
                resolve(res.json());
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    ;
    FilterComponent = __decorate([
        core_1.Component({
            selector: 'app-filter',
            templateUrl: './filter.component.html',
            styleUrls: ['./filter.component.css']
        }),
        __metadata("design:paramtypes", [serv_service_1.ServService, http_1.Http, ngx_toastr_1.ToastrService])
    ], FilterComponent);
    return FilterComponent;
}());
exports.FilterComponent = FilterComponent;
var actionMapping = {
    mouse: {
        click: angular_tree_component_1.TREE_ACTIONS.TOGGLE_ACTIVE_MULTI
    },
    keys: (_a = {},
        _a[angular_tree_component_1.KEYS.ENTER] = function (tree, node, $event) { return alert("This is   " + node.data.name); },
        _a)
};
var _a;
//# sourceMappingURL=filter.component.js.map