const express = require('express');
const CandidateController = require('./controllers/CandidateController');
const routes = new express.Router();

routes.post('/register', CandidateController.register);

routes.get('/', (req, resp) => {
    resp.send('teste');
})



module.exports = routes;