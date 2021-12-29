const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model.js');

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then((results) => {
      console.log('results, ', results);
      res.render('drones/list', {drones: results});
    })
    .catch((err) => {
      console.log(`Something went wrong! Error: `, err);
    });
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form');
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  Drone.create(req.body)
    .then((results) => {
      res.render('drones/list', {
        title: `${results.name} has been added!`
      });
    })
    .catch((err) => {
      console.log(`Error while creating drone: `, err);
      res.render('drones/create-form', {
        title: `Something went wrong, please try again!`
      });
    })
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  Drone.findById(req.params.id)
    .then((results) => {
      res.render('drones/update-form', results);
    })
    .catch((err) => {
      console.log('Error finding match in database: ', err);
      res.render('drones/list', {
        title: `An error occurred, please try again!`
      });
    });
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  console.log(`id: `, req.params.id);
  console.log('req.body: ', req.body);
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
