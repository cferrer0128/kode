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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var sUrl = 'https://api.mlab.com/api/1/databases/cferrerdb/collections/tasks?apiKey=yaHRmnujm_qQwp3OSRuJJ8l4vPMyMvZF';
var TaskService = (function () {
    function TaskService(http) {
        this.http = http;
        console.log('Task service has been Initialized!!');
    }
    TaskService.prototype.getTasks = function () {
        return this.http.get('/api/tasks')
            .map(function (res) { return res.json(); });
    };
    TaskService.prototype.addTask = function (newTask) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(sUrl, JSON.stringify(newTask), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TaskService.prototype.deleteTask = function (id) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        console.log('Task befor delting !!' + id);
        return this.http.delete(sUrl.replace('?', '/' + id + '?'), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TaskService.prototype.updateTask = function (task) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        console.log('Task befor upding !!' + JSON.stringify(task));
        return this.http.put(sUrl.replace('?', '/' + task._id.$oid + '?'), JSON.stringify(task), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return TaskService;
}());
TaskService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map