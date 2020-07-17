const express = require("express");
const router = express.Router();
const {crow,user,op}=require('../controller/crop')

router.get('/',user,op,crow);


module.exports = router;