const { Router } = require('express');
const PeopleController = require('../controllers/PeopleController.js');

const peopleController = new PeopleController(); 

const router = Router();

router
    .get('/people', (req, res) => peopleController.getAll(req, res))
    .put('/people/:id', (req,res)=> peopleController.update(req,res)) 
    .post('/people', (req,res)=> peopleController.create(req,res))
    .get('/people/:estudentId/matriculas', (req, res) => peopleController.GetRegister(req, res))

module.exports = router;
