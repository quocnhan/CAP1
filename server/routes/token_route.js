const express = require('express');
let router = express.Router();
// const http = require();

const token = require('../controllers/token_controllers');
/* GET users listing. */
router.post('/', token.viewToken);

module.exports = router;