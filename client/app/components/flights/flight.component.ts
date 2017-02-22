
import { Component, OnInit } from '@angular/core';
import { FlightService } from '../../services/flight.service'

import { Router } from '@angular/router';

@Component({
    moduleId:module.id,
    selector:'flight',
    templateUrl:'flight.component.html',
    providers:[FlightService]
})

export class FlightComponent implements OnInit{

     flights;

    constructor (private flightservice:FlightService , 
    private router:Router){         
        
    }
    ngOnInit(): void {
         this.flightservice.getFlights()
         .subscribe(data =>{

             this.flights = data;
             
         })
    
  }

    goFlight(id){
           this.router.navigate(['/detail', id]);
    }

}