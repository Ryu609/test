"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var angular_bootstrap_md_1 = require("angular-bootstrap-md");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require(".//app-routing.module");
var searchbar_component_1 = require("./searchbar/searchbar.component");
var service_list_component_1 = require("./service/service-list/service-list.component");
var forms_1 = require("@angular/forms");
var ngx_toastr_1 = require("ngx-toastr");
var filter_component_1 = require("./filter/filter.component");
var angular_tree_component_1 = require("angular-tree-component");
var ngx_pagination_1 = require("ngx-pagination");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                searchbar_component_1.SearchbarComponent,
                service_list_component_1.ServiceListComponent,
                filter_component_1.FilterComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                angular_tree_component_1.TreeModule,
                angular_bootstrap_md_1.MDBBootstrapModule.forRoot(),
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                ngx_toastr_1.ToastrModule.forRoot(),
                ngx_pagination_1.NgxPaginationModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map