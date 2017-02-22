
import {Injectable} from '@angular/core';

import {Http, Headers} from '@angular/http';

import 'rxjs/add/operator/map';






@Injectable()
export class FlightService{

myFlights:any = [
   {Id:1, description:'description 1'},
   {Id:2, description:'description 2'},
   {Id:3, description:'description 3'},
   {Id:4, description:'description 4'},
   
];

 flights:any;
 

    constructor (private http:Http){
        console.log('Flight service has been Initialized!!');
    }

    getFlights(){
        //return this.myFlights;
       return this.http.get('./data.json')
        .map(res =>res.json().flights);
       
    }

    getFlight(Id){
        
        //return this.myFlights.find(flight => flight.Id.toString() === Id);
        return this.http.get('./data.json')
        .map(res =>res.json().flights.find(flight => flight.Id == Id));
                
    }

    
}