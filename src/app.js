// Main Application

// Importing Modules
const express = require('express');
const routes = require("./routes/main.routes");
const port = process.env.PORT || 1000;
require('dotenv').config();


// Server Class
class App {

    constructor() {
        // Creating App
        this.app = express();
        this.main();
        this.listen();
    }

    main() {



        // Getting Data from HTML pages
        this.app.use(express.urlencoded({ extended: true }));

        // Data to json
        this.app.use(express.json());

        // getting routes
        this.app.use("/", routes);
    }

    listen() {
        // Listening to Port 1000
        this.app.listen(port, () => {
            console.log(`Server Running on http://localhost:${port}`);
        });
    }
}


// Exports
module.exports = App;