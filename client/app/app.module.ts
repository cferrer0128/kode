import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component'
import { HomeComponent } from './components/home/home.component';

import { TasksComponent } from './components/tasks/tasks.component';

import {routing , appRoutingProviders} from './app.routing';


@NgModule({
    imports: [BrowserModule , HttpModule , FormsModule , routing],
    declarations:[AppComponent , TasksComponent , HomeComponent],
    bootstrap:[AppComponent],
    providers:[
        appRoutingProviders
    ]

})

export class AppModule {}