
import {Injectable} from '@angular/core';

import {Http, Headers} from '@angular/http';

import 'rxjs/add/operator/map';


@Injectable()
export class TaskService{

    constructor (private http:Http){
        console.log('Task service has been Initialized!!');
    }

    getTasks(){
        return this.http.get('/api/tasks')
        .map(res =>res.json())
    }


    addTask(newTask){
        var headers = new Headers();
        headers.append('Content-Type','application/json');
        return this.http.post('api/task',JSON.stringify(newTask),{headers:headers})
        .map(res => res.json());
    }

    deleteTask(task){

        console.log('Task befor delting !!' + JSON.stringify(task));

        task.isdeleted = true;

       
          var headers = new Headers();
        headers.append('Content-Type','application/json');
        
          return this.http.put('/api/task/'+task._id,JSON.stringify(task),{headers:headers})
            .map(res => res.json());
    }

    updateTask(task){
        task.isdeleted = false;
        var headers = new Headers();
        headers.append('Content-Type','application/json');
          console.log('Task befor upding !!' + JSON.stringify(task));
          return this.http.put('/api/task/'+task._id.$oid,JSON.stringify(task),{headers:headers})
            .map(res => res.json());
    }
}