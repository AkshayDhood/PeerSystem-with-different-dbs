// Main Server

// Importing App file
const App = require("./src/app");

try {
    new App();
} catch (error) {
    console.error("Something went wrong!!!!!");
}
