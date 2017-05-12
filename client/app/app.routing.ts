
import {NgModule} from '@angular/core';

import {RouterModule , Routes} from '@angular/router';

import { AppComponent } from './app.component'

import {FlightDetailComponent} from './components/flights/flightdetail.component';

import {FlightComponent} from './components/flights/flight.component';

import {TasksComponent} from './components/tasks/tasks.component';

import {HomeComponent} from './components/home/home.component';

const routes:Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'detail/:id',component:FlightDetailComponent},
    {path:'add',component:FlightDetailComponent},
    {path:'flights',component:FlightComponent},
    {path:'tasks',component:TasksComponent},
    {path:'home',component:HomeComponent}
  

    
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}