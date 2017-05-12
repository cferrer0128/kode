import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component'
import { HomeComponent } from './components/home/home.component';

import { MyDatePickerModule } from 'mydatepicker';

import { TasksComponent } from './components/tasks/tasks.component';

import { FlightComponent } from './components/flights/flight.component';

import { FlightDetailComponent } from './components/flights/flightdetail.component';

import {AppRoutingModule} from './app.routing';

import { FlightService } from './services/flight.service'



@NgModule({
    imports: [BrowserModule , HttpModule , 
    FormsModule, AppRoutingModule , MyDatePickerModule ],
    declarations:[AppComponent , TasksComponent , 
    HomeComponent , FlightComponent, FlightDetailComponent],
    bootstrap:[AppComponent],
    providers:[
        FlightService
    ]

})

export class AppModule {}