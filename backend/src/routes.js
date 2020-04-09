const express = require('express');
const routes = express.Router();
const OngController = require('./controllers/OngController');
const incidentsController = require('./controllers/IncidentController');
const ProfileOngController = require('./controllers/ProfilleOngController');
const SessionLoginController = require('./controllers/SessionLoginController');


routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.store);
routes.post('/incidents', incidentsController.store);
routes.get('/incidents', incidentsController.index);
routes.delete('/incidents/:id', incidentsController.destroy);
routes.get('/profile', ProfileOngController.index);
routes.post('/sessions', SessionLoginController.store);

module.exports = routes;