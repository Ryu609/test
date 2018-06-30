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
var serv_service_1 = require("../service/shared/serv.service");
var ngx_toastr_1 = require("ngx-toastr");
var angular_ts_math_1 = require("angular-ts-math");
var SearchbarComponent = /** @class */ (function () {
    //product: Product[];  
    function SearchbarComponent(servService, toastr) {
        this.servService = servService;
        this.toastr = toastr;
        this.searchText = "";
        this.countries = [{ name: "Mauritius" }, { name: "Rodrigues" }];
        this.selectedCountry = this.countries[0].name;
    }
    SearchbarComponent.prototype.ngOnInit = function () {
        this.selectedCountry = this.countries[0].name;
        this.servService.announceCountry(this.selectedCountry);
    };
    SearchbarComponent.prototype.announce = function (service) {
        var grid = this.grindIt(service);
        this.servService.announceServ(grid);
        this.servService.announceFilter(this.searchText);
    };
    SearchbarComponent.prototype.onChange = function (newValue) {
        this.selectedCountry = newValue;
        this.servService.announceCountry(this.selectedCountry);
    };
    SearchbarComponent.prototype.search = function () {
        var _this = this;
        var my = this.servService.getServList(this.searchText, 1);
        var mme = my.then(function (val) { return _this.announce(val); });
    };
    SearchbarComponent.prototype.grindIt = function (service) {
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
    SearchbarComponent = __decorate([
        core_1.Component({
            selector: 'app-searchbar',
            templateUrl: './searchbar.component.html',
            styleUrls: ['./searchbar.component.css'],
            providers: [serv_service_1.ServService]
        }),
        __metadata("design:paramtypes", [serv_service_1.ServService, ngx_toastr_1.ToastrService])
    ], SearchbarComponent);
    return SearchbarComponent;
}());
exports.SearchbarComponent = SearchbarComponent;
//# sourceMappingURL=searchbar.component.js.map