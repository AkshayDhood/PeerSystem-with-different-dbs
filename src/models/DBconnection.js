// Database Connection

// Importing Modules
const mongoose = require('mongoose');
require('dotenv').config();

const database = process.env.DATABASE;
const host = process.env.HOST;
const dbport = process.env.DBPORT;
const url = `mongodb://${host}:${dbport}/${database}`;


// Mongoose to MongoDB connection
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));



// Mongoose Schema
const psSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    dateofjoining: {
        type: Date,
        required: true,
    },
    ratings: {
        type: Array,
    },
    comments: {
        type: Array,
    }
});


// Exporting Model
exports.PSModel = new mongoose.model("peersystemAPIcollection", psSchema);