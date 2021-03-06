"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var home_component_1 = require("./components/home/home.component");
var mydatepicker_1 = require("mydatepicker");
var tasks_component_1 = require("./components/tasks/tasks.component");
var flight_component_1 = require("./components/flights/flight.component");
var flightdetail_component_1 = require("./components/flights/flightdetail.component");
var app_routing_1 = require("./app.routing");
var flight_service_1 = require("./services/flight.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule,
            forms_1.FormsModule, app_routing_1.AppRoutingModule, mydatepicker_1.MyDatePickerModule],
        declarations: [app_component_1.AppComponent, tasks_component_1.TasksComponent,
            home_component_1.HomeComponent, flight_component_1.FlightComponent, flightdetail_component_1.FlightDetailComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [
            flight_service_1.FlightService
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map