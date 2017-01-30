
import {Injectable} from '@angular/core';

import {Http, Headers} from '@angular/http';

import 'rxjs/add/operator/map';

var sUrl = 'https://api.mlab.com/api/1/databases/cferrerdb/collections/tasks?apiKey=yaHRmnujm_qQwp3OSRuJJ8l4vPMyMvZF'

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
        return this.http.post(sUrl,JSON.stringify(newTask),{headers:headers})
        .map(res => res.json());
    }

    deleteTask(id){
        var headers = new Headers();
        headers.append('Content-Type','application/json');
        
         console.log('Task befor delting !!' + id);
        return this.http.delete(sUrl.replace('?','/'+id+'?'),{headers:headers})
            .map(res => res.json());
    }

    updateTask(task){
        var headers = new Headers();
        headers.append('Content-Type','application/json');
          console.log('Task befor upding !!' + JSON.stringify(task));
          return this.http.put(sUrl.replace('?','/'+task._id.$oid+'?'),JSON.stringify(task),{headers:headers})
            .map(res => res.json());
    }
}