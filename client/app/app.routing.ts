import {ModuleWithProviders} from '@angular/core';

import {Routes , RouterModule } from '@angular/router';

import { TasksComponent } from './components/tasks/tasks.component';

import { HomeComponent } from './components/home/home.component';

import { AppComponent } from './app.component';


const appRoutes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'tasks',
        component:TasksComponent

    }
];

export const appRoutingProviders: any[] =[];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

