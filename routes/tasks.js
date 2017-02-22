var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://test1:test1@ds163718.mlab.com:63718/cferrerdb',['tasks']);
var http =require('http');

var request = require('request');

var sUrl = 'https://api.mlab.com/api/1/databases/cferrerdb/collections/tasks?apiKey=yaHRmnujm_qQwp3OSRuJJ8l4vPMyMvZF'
// Get All Tasks
router.get('/tasks', function(req, res, next){
    request(sUrl, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          
           var newBody = JSON.parse(body).filter(function(el){
              
                if(el && el.isdeleted == false) return el;
           });
            console.log(JSON.stringify(newBody)) // Show the HTML for the Google homepage.
            console.log(body);

            res.json(JSON.stringify(newBody));
        }else{
            console.log(error) // Show the HTML for the Google homepage.
        }
    });
    //
    
});


//Save Task
router.post('/task', function(req, res, next){
    var task = req.body;
    task.isdeleted = false;
    console.log(req.body) // Show the HTML for the Google homepage.
    if(!task.Title || !(task.isdone + '')){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        var options ={
            url:sUrl,
            json:  {Title:task.Title,isdone:task.isdone,isdeleted:task.isdeleted} ,
            headers:{
                'Content-Type':'application/json'}
             };
        request.post(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
           // console.log(body) // Show the HTML for the Google homepage.
            res.json(body);
        }else{
            console.log(response.statusCode) // Show the HTML for the Google homepage.
        }
    });
        
        
    }
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


// Delete Task
router.delete('/task/:id', function(req, res, next){
      //console.log(req);
       var payload = JSON.stringify(req.body);
       var options ={
            host:'api.mlab.com',
            path:'/api/1/databases/cferrerdb/collections/tasks?apiKey=yaHRmnujm_qQwp3OSRuJJ8l4vPMyMvZF',
            method:'DELETE',
            headers: {
                'Content-Type':'application/json'
               
                
            }
       }
        

        var request = http.request(options, function (authResponse) {
        var responseString = "";
        console.log('calling the delete!!!');

        authResponse.on('data', function (data) {
            responseString += data;
            console.log('data  '+responseString); // print token response to console
        });
            authResponse.on("end", function () {
                console.log('end ' + responseString); // print token response to console
            });
        });

       // request.write(payload);
        request.end();
});

// Update Task
router.put('/task/:id', function(req, res, next){
    var task = req.body;
      console.log('Put method ' + JSON.stringify(req.body));
      
    if(!task){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    } else {
         var options ={
            url:sUrl,
            json:req.body,
            headers:{
                'Content-Type':'application/json'}
             };
        request.post(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
           // console.log(body) // Show the HTML for the Google homepage.
            res.json(body);
        }else{
            console.log(body) // Show the HTML for the Google homepage.
        }
    });
    }
});

module.exports = router;