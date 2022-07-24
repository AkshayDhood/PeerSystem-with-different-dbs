// Routes Pages

// Importing Modules
const express = require('express');
const router = express.Router();
const controller = require('../src/controller/employee.controller');


exports.adminRoutes = () => {

    router.get("/employeelogin", controller.employeeLogin);

    router.put("/ratecomment", controller.rateComment);

    router.put("/ratecomment", controller.rateComment);

};