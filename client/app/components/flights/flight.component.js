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
var core_1 = require("@angular/core");
var flight_service_1 = require("../../services/flight.service");
var router_1 = require("@angular/router");
var FlightComponent = (function () {
    function FlightComponent(flightservice, router) {
        this.flightservice = flightservice;
        this.router = router;
    }
    FlightComponent.prototype.loadData = function () {
        var _this = this;
        this.flightservice.getFlights()
            .subscribe(function (res) { return _this.flights = res; }, function (error) { return console.log(error); });
    };
    FlightComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    FlightComponent.prototype.goFlight = function (id) {
        this.router.navigate(['/detail', id]);
    };
    FlightComponent.prototype.goNewFlight = function () {
        this.router.navigate(['/add']);
    };
    return FlightComponent;
}());
FlightComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'flight',
        templateUrl: 'flight.component.html'
    }),
    __metadata("design:paramtypes", [flight_service_1.FlightService,
        router_1.Router])
], FlightComponent);
exports.FlightComponent = FlightComponent;
//# sourceMappingURL=flight.component.js.map