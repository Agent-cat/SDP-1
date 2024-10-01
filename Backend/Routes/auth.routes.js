const express = require('express');
const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin );
router.get("/",protect,allusers);
module.exports = router;