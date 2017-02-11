"use strict";
var router_1 = require("@angular/router");
var tasks_component_1 = require("./components/tasks/tasks.component");
var home_component_1 = require("./components/home/home.component");
var appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'tasks',
        component: tasks_component_1.TasksComponent
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map