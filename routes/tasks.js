var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://test1:test1@ds163718.mlab.com:63718/cferrerdb',['tasks']);

var request = require('request');

var sUrl = 'https://api.mlab.com/api/1/databases/cferrerdb/collections/tasks?apiKey=yaHRmnujm_qQwp3OSRuJJ8l4vPMyMvZF'
// Get All Tasks
router.get('/tasks', function(req, res, next){
    request(sUrl, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body) // Show the HTML for the Google homepage.
            res.json(body);
        }else{
            console.log(error) // Show the HTML for the Google homepage.
        }
    });
    //
    
});

// Get Single Task
router.get('/task/:id', function(req, res, next){
    db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });
});

//Save Task
router.post('/task', function(req, res, next){
    var task = req.body;
    console.log(req.body);
    if(!task.Title || !(task.isdone + '')){
        res.status(400);
        res.json({
            "error": "Bad Data!!!"
        });
    } else {
        db.tasks.save(task, function(err, task){
            if(err){
                res.send(err);
            }
            res.json(task);
        });
    }
});

// Delete Task
router.delete('/task/:id', function(req, res, next){
    db.tasks.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });
});

// Update Task
router.put('/task/:id', function(req, res, next){
    var task = req.body;
      console.log(req.body);
    var updTask = {};
    
    if(task.isdone){
        updTask.isdone = task.isdone;
    }
    
    if(task.Title){
        updTask.Title = task.Title;
    }
    
    if(!updTask){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    } else {
        db.tasks.update({_id: mongojs.ObjectId(req.params.id)},updTask, {}, function(err, task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });
    }
});

module.exports = router;