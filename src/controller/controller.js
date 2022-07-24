// Controller

// Importing modules
const { loginValidator, registerEmpValidator } = require("../helpers/validation");
const { PeerSystemModel } = require('../models/DBconnection');
const bcrypt = require("bcrypt");


// For Home Page
exports.login = async (req, res) => {
    try {
        const validation = await loginValidator.validateAsync(req.body);
        const { email, password } = validation;
        if (email === "admin@gmail.com") {
            if (password === "abd") {
                res.send('admin login');
            } else {
                res.send("Wrong Admin Password!");
            }
        } else {
            const result = await PeerSystemModel.find({ email });
            if (result.length > 0) {
                const passverify = await bcrypt.compare(validation.password, result[0].password);
                if (passverify) {
                    res.send('empprofile');
                } else {
                    res.send("Wrong Password!");
                }
            } else {
                res.send("Wrong Email!");
            }
        }
    } catch (error) {
        console.log(error);
    }
};


// For Admin to Register new Employee
exports.registerEmp = async (req, res) => {
    try {
        const validation = await registerEmpValidator.validateAsync(req.body);
        const result = await PeerSystemModel.find({ email: validation.email });
        if (result.length > 0) {
            res.render('adminpage', { registeremp: true, message: "Employee already registered!" });
        } else {
            const hashpass = await bcrypt.hash(validation.password, 8);
            const insertEmp = new PeerSystemModel({
                name: validation.name,
                email: validation.email,
                password: hashpass,
                age: validation.age,
                department: validation.department,
                dateofjoining: validation.dateofjoining,
            });
            insertEmp.save();
            res.render('adminpage', { registeremp: true, message: "Employee Registered" });
        }
    } catch (error) {
        if (error.isJoi === true) {
            error.status = 422;
            res.render('adminpage', { registeremp: true, message: error });
        }
        console.log(error);
    }
};


// For Admin to delete Employee
exports.deleteEmp = async (req, res) => {
    try {
        const { name, department } = req.body;
        const result = await PeerSystemModel.find({ name, department });
        if (result.length > 0) {
            await PeerSystemModel.deleteMany({ name, department }).then(() => {
                res.render('adminpage', { deleteemp: true, message: "Employee Deleted" });
            })
        } else {
            res.render('adminpage', { deleteemp: true, message: "Employee not Found" });
        }
    } catch (error) {
        console.log(error);
    }
};


// For employee to rating and comments
exports.ratingComments = async (req, res) => {
    const { name, ratings, comments } = req.body;
    const result = await PeerSystemModel.findOneAndUpdate({ name }, {
        $push: {
            ratings,
            comments,
        }
    })
    res.send("ratings")
    console.log(req.body);
    console.log(result);
};