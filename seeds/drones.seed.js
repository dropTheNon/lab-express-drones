// Iteration #1
const mongoose = require('mongoose');
const Drone = require('../models/drone.model.js');

const droneArr = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];

mongoose
    .connect('mongodb://localhost/lab-express-drones', {
    })
    .then((x) => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    })
    .catch((err) => {
        console.error('Error connecting to mongo: ', err);
    });

Drone.create(droneArr)
    .then((results) => {
        console.log(`Success! ${results.length} drones added to database!`);
        mongoose.connection.close();
    })
    .catch((err) => {
        console.log('Something went wrong: ', err);
    });