var express = require('express');
var cors = require('cors')
var router = express();
var bodyParser = require('body-parser');
var _ = require('underscore-node');

router.use(bodyParser.urlencoded({
    extended: true
}));
router.use(bodyParser.json());
router.use(cors())

var loginController =   require('../controllers/loginController');

router.post('/login/',loginController.login);

module.exports = router;

