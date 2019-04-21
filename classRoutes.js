/*jshint esversion: 6*/

(function () {
    'use strict';
})();

let path = require('path');
let express = require('express');
let router = express.Router();
let classList1 = require("./classList.js");


let classList = ['tumisho', 'mamodile' , 'tm']; //our class list array
//RESTful api


router.get('/', function (req, res) {
res.sendFile(path.join(__dirname, 'views', 'class', 'index.html'));
});
router.get('/create', function(req, res){
res.sendFile(path.join(__dirname, 'views', 'class', 'create.html'));
});
router.get('/delete', function(req, res){
res.sendFile(path.join(__dirname, 'views', 'class', 'delete.html'));
});
router.get('/edit', function(req, res){
res.sendFile(path.join(__dirname, 'views', 'class', 'edit.html'));
});
router.get('/addStudentNumberNCourse', function(req, res){
res.sendFile(path.join(__dirname, 'views', 'class', 'addStudentNumberNCourse.html'));
}); 
    

router.get('/api/list', function (req, res) {
res.json( classList1.getList() ); //Respond with JSON
});
router.get('/api/get/:id', function (req, res) {
res.json(classList[req.params.id]); //Notice the wildcard in the URL?
//Try browsing to /api/get/0 once you've added some entries
});
router.post('/api/create', function(req, res){
    console.log("Creating the following student:", req.body.student);
    classList1.add(req.body.student) ;
    res.redirect(req.baseUrl + '/create');
});

router.post('/api/delete', function(req, res){
    console.log("Deleting the following student:", req.body.student);
    classList = classList.filter(e => e !== req.body.student ) ;
    res.redirect(req.baseUrl + '/delete');
});

router.post('/api/edit', function(req, res){
    console.log("Editing the following student:",req.body.student  );
    const student = req.body.student  ;

    const index = classList.indexOf( (student.toString()));
    console.log(index);

    classList[index]= req.body.Newstudent ;

    res.redirect(req.baseUrl + '/edit');

});

router.post('/api/addStudentNumberNCourse', function(req, res){
    console.log("Adding propertist to  :",req.body.student  );
    const student = req.body.student  ;

    const index = classList.indexOf( (student.toString()));
    console.log(index);

    classList[index]= req.body.Newstudent ;

    res.redirect(req.baseUrl + '/api/list');

});

module.exports = router;
