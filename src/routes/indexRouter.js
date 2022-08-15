const express = require('express');
const router = express.Router();

const {loginView,sessionView,loginProcess,exitSession} = require('../controllers/indexController')

const formValidator = require('../validations/formValidator');

router
    .get('/',loginView)
    .post('/sesion',formValidator,loginProcess)
    .get('/sesion',sessionView)
    .get('/exit',exitSession)

module.exports = router;