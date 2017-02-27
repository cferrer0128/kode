
import {Injectable} from '@angular/core';

import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/publishReplay';



@Injectable()
export class FlightService{

 _flights:Observable<any> = null;

 

    constructor (private _http:Http){
        console.log('Flight service has been Initialized!!');
    }

    getFlights(){
        //return this.myFlights;
        if(!this._flights){
             this._flights = this._http.get('./data.json')
                    .map(res =>res.json().flights);
                    Observable.of(this._flights);
        }
        else{
            Observable.of(this._flights);
        }
       return this._flights;
       
       
    }

    getFlight(Id){
        
        //return this.myFlights.find(flight => flight.Id.toString() === Id);
           if(!this._flights){
               console.log('from null object in service!!!');
               return this._http.get('./data.json')
                    .map(res =>res.json().flights.find(flight => flight.Id == Id));
                  
           }
           else{
                   console.log('from cache object in service!!!');
                  return this._http.get('./data.json')
                    .map(res =>res.json().flights.find(flight => flight.Id == Id));
                    
           }
       
        

    }

    
}