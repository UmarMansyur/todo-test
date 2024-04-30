const router = require('express').Router();
const todo = require('./todo');


router.use('/', todo)


module.exports = router;