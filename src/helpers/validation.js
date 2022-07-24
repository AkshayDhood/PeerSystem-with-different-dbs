// Validation

// importing Modules
const Joi = require('joi');


// Login Validation
exports.loginValidator = Joi.object({
    email: Joi.string()
        .email()
        .max(100)
        .required(),
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .required(),
});



// Validation for Registering Employee
exports.registerEmpValidator = Joi.object({
    email: Joi.string()
        .email()
        .max(100)
        .case('lower')
        .required(),
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    confirmpass: Joi.ref('password'),
    name: Joi.string()
        .required()
        .max(100),
    age: Joi.number()
        .required()
        .max(150),
    department: Joi.string()
        .required()
        .max(50),
    dateofjoining: Joi.date()
        .required(),
});