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
//import { Component } from '@angular/core';
var flight_service_1 = require("../../services/flight.service");
var router_1 = require("@angular/router");
var FlightDetailComponent = (function () {
    function FlightDetailComponent(flightservice, activatedRoute, router) {
        this.flightservice = flightservice;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.isNew = true;
        this.myDatePickerOptions = {
            // other options...
            dateFormat: 'mm/dd/yyyy',
        };
        console.log('Flight detail service Running!!!!');
        //getting flight...
    }
    FlightDetailComponent.prototype.onDateChanged = function (event) {
        // event properties are: event.date, event.jsdate, event.formatted and event.epoc
    };
    FlightDetailComponent.prototype.goFlights = function () {
        this.router.navigate(['/flights']);
    };
    FlightDetailComponent.prototype.addPassanager = function (event) {
        event.preventDefault();
        this.newflight.passengers.push({
            name: this.name, seat: this.seat
        });
    };
    FlightDetailComponent.prototype.addNotes = function (event) {
        event.preventDefault();
        this.newflight.notes.push({
            note: this.note, noteDT: new Date()
        });
    };
    FlightDetailComponent.prototype.addFlight = function (event) {
        var _this = this;
        event.preventDefault();
        this.flightservice.getFlights()
            .subscribe(function (res) { return _this.flights = res; }, function (error) { return console.log(error); });
    };
    FlightDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // subscribe to router event
        this.activatedRoute.params.subscribe(function (params) {
            _this.id = +params['id'];
            if (params['id'])
                _this.isNew = false;
            else {
                _this.flight = {};
                _this.newflight = {
                    passengers: [],
                    notes: []
                };
            }
        });
        this.flightservice.getFlight(this.id)
            .subscribe(function (data) {
            if (data) {
                _this.newDepartDate = new Date(data.datedepa);
                _this.newArriveDate = new Date(data.datearrive);
                _this.newArriveDate = {
                    date: {
                        year: _this.newArriveDate.getFullYear(), month: _this.newArriveDate.getMonth() + 1, day: _this.newArriveDate.getDate()
                    }
                };
                _this.newDepartDate = {
                    date: {
                        year: _this.newDepartDate.getFullYear(), month: _this.newDepartDate.getMonth() + 1, day: _this.newDepartDate.getDate()
                    }
                };
                _this.flight = data;
            }
        });
    };
    return FlightDetailComponent;
}());
FlightDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'flightdetail',
        templateUrl: 'flightdetail.component.html',
        providers: [flight_service_1.FlightService]
    }),
    __metadata("design:paramtypes", [flight_service_1.FlightService,
        router_1.ActivatedRoute,
        router_1.Router])
], FlightDetailComponent);
exports.FlightDetailComponent = FlightDetailComponent;
//# sourceMappingURL=flightdetail.component.js.map