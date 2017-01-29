
import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service'
import { Task } from '../../../Task'

@Component({
    moduleId:module.id,
    selector:'tasks',
    templateUrl:'tasks.component.html'
})

export class TasksComponent{
    tasks: Task[];
    title: string;
    
    constructor (private taskservice:TaskService){

        this.taskservice.getTasks()
        .subscribe(mytask =>{

               this.tasks = JSON.parse(mytask);

            console.log(this.tasks );

        });
    }

}