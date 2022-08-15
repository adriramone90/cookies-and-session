const express = require('express');
const router = express.Router();

const {loginView,sessionView,loginProcess} = require('../controllers/indexController')

const formValidator = require('../validations/formValidator');

router
    .get('/',loginView)
    .post('/sesion',formValidator,loginProcess)
    .get('/sesion',sessionView)

module.exports = router;