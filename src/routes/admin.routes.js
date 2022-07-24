// Routes Pages

// Importing Modules
const express = require('express');
const router = express.Router();
const Acontroller = require('../src/controller/admin.controller');



exports.adminRoutes = () => {

    router.post("/adminlogin", controller.adminlogin);

    router.post("/registerAdmin", controller.registerAdmin);

    router.post("/registerEmployee", controller.registerEmployee);

    router.post("/registerDepartment", controller.registerDepartment);

    router.put("/updateEmployee", controller.updateEmployee);

    router.put("/updateDepartment", controller.updateDepartment);

    router.delete("/deleteEmployee", controller.deleteEmployee);

    router.delete("/deleteDepartment", controller.deleteDepartment);

    router.delete("/deleteAdmin", controller.deleteAdmin);
};