const express = require("express")
const router = express.Router()
const User = require("../model/User")
const Admin = require("../model/Admin")
const { body, validationResult } = require("express-validator")


//Route 1: Authenticate the user
router.get("/login", [
    body("email", "Please Enter a Email in the Field").isEmail(),
    body("password", "Please Enter Your Password").exists()
], async (req, res) => {
    const error = validationResult(req)
    // after checking credential, if error occur then execute if statement
    if (!error.isEmpty()) {
        return res.status(403).json({error: error.array() })
    }
    //checking email is exist or not 
    const user = await User.findOne({ email: req.body.email })
    // if email is unable to find
    if (!user) {
        return res.status(401).send("E-Please provide correct Credential")
    }
    console.log(user)
    const password = (user.password === req.body.password ? true : null)
    if (!password) {
        // if password is wrong
        return res.status(401).send("P-Please provide correct Credential")
    }
    res.send(user)
})

//Route 2: Create a user
router.post("/register", [
    body("name", "Please Enter a Name").isLength({ min: 3 }),
    body("username", "Please Enter a username").exists(),
    body("email", "Please Enter a email").isEmail(),
    body("password", "Please Enter a password").isLength({ min: 3 }),
    body("age", "Please Enter a age").exists(),
    body("institude", "Please Enter a institude").exists(),

], async (req, res) => {
    const error = validationResult(req)
    // after checking credential, if error occur then execute if statement
    if (!error.isEmpty()) {
        return res.status(403).json({error: error.array() })
    }


    const user = await User.findOne({ email: req.body.email })
    console.log(user)
    if(user){
       return res.status(410).send("This Email Already Exist")
    }
    // create new user
    const u1 = new User({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        age: parseInt(req.body.age),
        institude: req.body.institude
    })
    try {
        const result = await u1.save()
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

// Route 3: Update User Details 
router.get("/update/:id", async (req, res) => {
    let user = {}
    if (req.body.name) {
        user.name = req.body.name
    }
    if (req.body.username) {
        user.username = req.body.username
    }
    if (req.body.institude) {
        user.institude = req.body.institude
    }
    if (req.body.age) {
        user.age = req.body.age
    }


    let result = await User.findByIdAndUpdate(req.params.id, { $set: user }, { $new: true })
    console.log(result)
    res.send(result)
})

//Route 4: Authenticate the admin 
router.get("/admin", [
    body("email", "Please Enter a Email in the Field").isEmail(),
    body("password", "Please Enter Your Password").exists()
], async (req, res) => {
    const error = validationResult(req)
    // after checking credential, if error occur then execute if statement
    if (!error.isEmpty()) {
        return res.status(403).json({error: error.array() })
    }

    const admin = await Admin.findOne({ email: req.body.email })
    if (!admin) {
        // if email is unable to find
        return res.status(401).send("E-Please provide correct Credential")
    }
    console.log(admin)
    const password = (admin.password === req.body.password ? true : null)
    if (!password) {
        // if password is wrong
        return res.status(401).send("P-Please provide correct Credential")
    }
    res.send(admin)
})


module.exports = router