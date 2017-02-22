import {OnInit,  Component} from '@angular/core';
//import { Component } from '@angular/core';
import { FlightService } from '../../services/flight.service'
import {Router, ActivatedRoute, Params} from '@angular/router';

import {IMyOptions, IMyDateModel} from 'mydatepicker';

@Component({
    moduleId:module.id,
    selector:'flightdetail',
    templateUrl:'flightdetail.component.html',
    providers:[FlightService]
})

export class FlightDetailComponent implements OnInit {

    flight:any;
    id: any;
    newDepartDate:any;
    newArriveDate:any;
   
 private myDatePickerOptions: IMyOptions = {
        // other options...
        dateFormat: 'mm/dd/yyyy',
    };

    onDateChanged(event: IMyDateModel) {
        // event properties are: event.date, event.jsdate, event.formatted and event.epoc
    }
   
    constructor (private flightservice:FlightService, 
    private activatedRoute: ActivatedRoute,
    private router:Router){

        console.log('Flight detail service Running!!!!');

        //getting flight...
       
    }

    goFlights(){
           this.router.navigate(['/flights']);
    }

 ngOnInit() {
    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
        this.id = +params['id'];
        
      });

        this.flightservice.getFlight(this.id)
        .subscribe(data =>{
           
           if(data){
                console.log(data);
              
                this.newDepartDate = new Date(data.datedepa);
                this.newArriveDate = new Date(data.datearrive)

                this.newArriveDate = {
                    date:{
                        year:this.newArriveDate.getFullYear(),month:this.newArriveDate.getMonth()+1,day:this.newArriveDate.getDate()
                    }
                }
                this.newDepartDate = {
                    date:{
                        year:this.newDepartDate.getFullYear(),month:this.newDepartDate.getMonth()+1,day:this.newDepartDate.getDate()
                    }
                }
                 console.log(this.model);

                 this.flight = data;
           }
           
          
       
        });
        
       
  }

 

}