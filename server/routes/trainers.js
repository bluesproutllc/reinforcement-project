// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++ Router for methods to grab client work out session history +++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const express = require('express');
const router = express.Router();
const trainersControllers = require('../controllers/trainersControllers');

router.post('/assignWorkout/:trainer_id', trainersControllers.assignWorkout, (req, res) =>{
    res.status(200).json(res.locals.assigned)
})

router.get('/trainerid', trainersControllers.getClients, (req, res) => res.status(200).send('here is the cookie'))

module.exports = router;