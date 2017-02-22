"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var task_service_1 = require("../../services/task.service");
var TasksComponent = (function () {
    function TasksComponent(taskservice) {
        var _this = this;
        this.taskservice = taskservice;
        this.taskservice.getTasks()
            .subscribe(function (mytask) {
            _this.tasks = JSON.parse(mytask);
            // console.log(this.tasks );
        });
    }
    //add
    TasksComponent.prototype.addTask = function (event) {
        var _this = this;
        event.preventDefault();
        var newTask = {
            Title: this.title,
            isdone: false
        };
        //calling the service....
        this.taskservice.addTask(newTask)
            .subscribe(function (task) {
            console.log('before saving ' + task);
            _this.tasks.push(task);
        });
    };
    //delete task...
    TasksComponent.prototype.deleteTask = function (task) {
        var _this = this;
        task.isdeleted = true;
        this.taskservice.deleteTask(task)
            .subscribe(function (data) {
            console.log('Delete task... ' + JSON.stringify(data));
            for (var i = 0; i < _this.tasks.length; i++) {
                if (_this.tasks[i]._id.$oid == data._id.$oid) {
                    console.log('Delete task... ' + JSON.stringify(_this.tasks[i]));
                    _this.tasks.splice(i, 1);
                }
            }
        });
    };
    //update Task
    TasksComponent.prototype.updateTask = function (task) {
        // console.log('before updating ' + task)
        var _task = {
            Title: task.Title,
            _id: task._id,
            isdone: !task.isdone
        };
        this.taskservice.updateTask(_task)
            .subscribe(function (data) {
            task.isdone = !task.isdone;
        });
    };
    return TasksComponent;
}());
TasksComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'tasks',
        templateUrl: 'tasks.component.html'
    }),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], TasksComponent);
exports.TasksComponent = TasksComponent;
//# sourceMappingURL=tasks.component.js.map