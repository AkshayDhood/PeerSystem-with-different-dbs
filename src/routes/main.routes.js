// Routes Pages

// Importing Modules
const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');


// Home Page
router.get('/', (req, res) => {
    res.json('home');
});


// For log in
router.post('/login', controller.login);


// For registering new Employee
router.post('/registeremp', controller.registerEmp);


// For deleting emp
router.post('/deleteemp', controller.deleteEmp);


// For adding comments
router.post('/ratingcomments', controller.ratingComments);



module.exports = router;