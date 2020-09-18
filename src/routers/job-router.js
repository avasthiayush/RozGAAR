const express= require('express')
const Job = require('../models/job-model')
const router = express.Router()

router.post('/jobs',async (req,res)=>{
    const job = new Job(req.body)
    try {
        await job.save()
        res.status(201).send(job)
    }
    catch{
        res.status(400).send()
    }
    
})

module.exports=router