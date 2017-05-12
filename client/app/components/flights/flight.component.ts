
import { Component, OnInit } from '@angular/core';

import { FlightService } from '../../services/flight.service'

import { Router } from '@angular/router';

@Component({
    moduleId:module.id,
    selector:'flight',
    templateUrl:'flight.component.html'
   
})

export class FlightComponent implements OnInit{

     flights;

    constructor (private flightservice:FlightService , 
    private router:Router){         
        
    }

     loadData(){
          this.flightservice.getFlights()
         .subscribe(res =>this.flights = res,
                    error => console.log(error));
  }

    ngOnInit(): void {
        this.loadData();

  }

    goFlight(id){
           this.router.navigate(['/detail', id]);
    }

    goNewFlight(){
           this.router.navigate(['/add']);
    }
}