const express = require("express")
const router = express.Router()
const User = require("../model/User")
const Admin = require("../model/Admin")

//Route 1: Authenticate the user
router.get("/login",async (req,res)=>{
    const user = await User.findOne({email:req.body.email})
    if(!user){
        // if email is unable to find
        return res.status(401).send("E-Please provide correct Credential")
    }
    console.log(user)
    const password = (user.password===req.body.password?true:null)
    if(!password){
        // if password is wrong
        return res.status(401).send("P-Please provide correct Credential")
    }
    res.send(user)
})

//Route 2: Create a user
router.post("/register", async (req,res)=>{
    // create new user
    const u1 = new User({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        age: parseInt(req.body.age),
        institude: req.body.institude
    })
    try{
        const result = await u1.save()
        console.log(result)
        res.send(result)
    }
    catch(err){
        console.log(err)
        for (field in err.errors) {
            console.log(err.errors[field])
        }
        res.status(409).send("Internal Server Error")
    }
})

// Route 3: Update User Details 
router.get("/update/:id",async (req,res)=>{
    let user = {}
    if(req.body.name){
        user.name = req.body.name
    }
    if(req.body.username){
        user.username = req.body.username
    }
    if(req.body.institude){
        user.institude = req.body.institude
    }
    if(req.body.age){
        user.age = req.body.age
    }  


    let result = await User.findByIdAndUpdate(req.params.id,{$set:user},{$new:true})
    console.log(result)
    res.send(result)
})

//Route 4: Authenticate the admin 
router.get("/admin",async (req,res)=>{
    const admin = await Admin.findOne({email:req.body.email})
    if(!admin){
        // if email is unable to find
        return res.status(401).send("E-Please provide correct Credential")
    }
    console.log(admin)
    const password = (admin.password===req.body.password?true:null)
    if(!password){
        // if password is wrong
        return res.status(401).send("P-Please provide correct Credential")
    }
    res.send(admin)
})


module.exports = router