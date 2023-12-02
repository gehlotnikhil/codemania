const express = require("express")
const router = express.Router()
const Question = require("../model/Question")



// Route 1: Get All Question - GET Request
router.get("/getallquestion",async(req,res)=>{
    let result = await Question.find({})
    res.send(result)
})

// Route 2: Create a Question - POST Request
router.post("/create", async (req, res) => {
    let question = new Question({
        name: req.body.name,
        description: req.body.description,
        difficulty: req.body.difficulty,
        timeComplexity: req.body.timeComplexity,
        spaceComplexity: req.body.spaceComplexity,
        companies: req.body.companies,
        testcase1: req.body.testcase1,
        testcase2: req.body.testcase2,
        testcase3: req.body.testcase3,
        outputOfTestcase1: req.body.outputOfTestcase1,
        outputOfTestcase2: req.body.outputOfTestcase2,
        outputOfTestcase3: req.body.outputOfTestcase3,
        sampleInput1: req.body.sampleInput1,
        sampleInput2: req.body.sampleInput2,
        sampleInput3: req.body.sampleInput3,
        sampleOutput1: req.body.sampleOutput1,
        sampleOutput2: req.body.sampleOutput2,
        sampleOutput3: req.body.sampleOutput3,
        accepted: req.body.accepted,
        submission: req.body.submission
    })
    try {
        const result = await question.save()
        console.log(result)
        res.send(result)
    }
    catch (err) {
        console.log(err)
        for (field in err.errors) {
            console.log(err.errors[field])
        }
        res.status(409).send("Internal Server Error")
    }

})


// Route 3: Update Existing Question - PUT Request
router.put("/update/:id",async (req,res)=>{
    let q1 = await Question.findById(req.params.id) // return object if found otherwise returns null
    // if question is not found then  if-block will be execute
    if(!q1){
        return res.send("Question not found")
    }

    // if user update any value then update logic will be executed
    let question = {}
    if(req.body.name){
        question.name = req.body.name
    }
    if(req.body.description){
        question.description = req.body.description
    }
    if(req.body.difficulty){
        question.difficulty = req.body.difficulty
    }
    if(req.body.timeComplexity){
        question.timeComplexity = req.body.timeComplexity
    }
    if(req.body.spaceComplexity){
        question.spaceComplexity = req.body.spaceComplexity
    }
    if(req.body.companies){
        question.companies = req.body.companies
    }
    if(req.body.testcase1){
        question.testcase1 = req.body.testcase1
    }
    if(req.body.testcase2){
        question.testcase2 = req.body.testcase2
    }
    if(req.body.testcase3){
        question.testcase3 = req.body.testcase3
    }
    if(req.body.outputOfTestcase1){
        question.outputOfTestcase1 = req.body.outputOfTestcase1
    }
    if(req.body.outputOfTestcase2){
        question.outputOfTestcase2 = req.body.outputOfTestcase2
    }
    if(req.body.outputOfTestcase3){
        question.outputOfTestcase3 = req.body.outputOfTestcase3
    }
    if(req.body.sampleInput1){
        question.sampleInput1 = req.body.sampleInput1
    }
    if(req.body.sampleInput2){
        question.sampleInput2 = req.body.sampleInput2
    }
    if(req.body.sampleInput3){
        question.sampleInput3 = req.body.sampleInput3
    }
    if(req.body.sampleOutput1){
        question.sampleOutput1 = req.body.sampleOutput1
    }
    if(req.body.sampleOutput2){
        question.sampleOutput2 = req.body.sampleOutput2
    }
    if(req.body.sampleOutput3){
        question.sampleOutput3 = req.body.sampleOutput3
    }
    if(req.body.accepted){
        question.accepted = req.body.accepted
    }
    if(req.body.submission){
        question.submission = req.body.submission
    }

    try {
        const result = await Question.findOneAndUpdate({_id:req.params.id},{$set : question},{$new: true})
        console.log(result)
        res.send(result)
    }
    catch (err) {
        console.log(err)
        for (field in err.errors) {
            console.log(err.errors[field])
        }
        res.status(409).send("Internal Server Error")
    }
})



module.exports = router
