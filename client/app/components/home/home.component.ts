
import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service'
@Component({
    moduleId:module.id,
    selector:'home',
    templateUrl:'home.component.html',
    providers:[TaskService]
})

export class HomeComponent{home=" Home"}