
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

           // console.log(this.tasks );

        });
    }
        //add
        addTask(event){
            event.preventDefault();
            var newTask = {
                Title: this.title,
                isdone:false
            }
            //calling the service....
            this.taskservice.addTask(newTask)
                .subscribe(task =>{
                    console.log('before saving ' + task)
                    this.tasks.push(task);
                })

        }
        //delete task...
        deleteTask(id){
            var tasks = this.tasks;
                this.taskservice.deleteTask(id.$oid)
                .subscribe(data =>{
                    if(data)
                        for(var i = 0;i<tasks.length; i++){
                            if(tasks[i]._id.$oid == id.$oid){
                                tasks.splice(i, 1);
                             }
                        }
                })

        }
        //update Task
        updateTask(task){
             console.log('before updating ' + task)
            var _task = {
                Title:task.Title,
                _id:task._id,
                isdone:!task.isdone
            };
            this.taskservice.updateTask(_task)
            .subscribe(data =>{
                task.isdone = !task.isdone;
            })
        }
}