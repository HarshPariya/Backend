const express=require('express')
const router = express.Router()
const Controller=require('../Controller/user.js')

router.post("/register",Controller.registerUser)

module.exports = router;