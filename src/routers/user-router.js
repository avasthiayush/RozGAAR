const express= require('express')
const User = require('../models/user-model')
const router = express.Router()

router.post('/users',async (req,res)=>{
    const user = new User(req.body)
    try {
        await user.save()
        res.status(201).send(user)
    }
    catch{
        res.status(400).send()
    }
    
})

module.exports=router