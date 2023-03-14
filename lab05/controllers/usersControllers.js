const validateUser=require("../utils/usersValidations");
const userModel=require("../models/usersModel");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");
const saltRounds = 9;

let login=async (req,res)=>{
    let user=req.body;
    let foundUser;
    try {
        foundUser=await userModel.findOne({"email":user.email});
    } catch (error) {   
    }
    if(!foundUser){
        return res.status(400).render({error:"Invalid email or password"});
    }
    var token = jwt.sign({ userID: foundUser._id },'tokenkey');
    bcrypt.compare(user.password,foundUser.password,function(err,same){
        if(same){
            res.cookie('x-auth-token',token, { maxAge: 900000, httpOnly: true });
            res.header("x-auth-token",token)
            return res.status(200).redirect("/dashboard");
            // return res.status(200).json("login success");
        }else{
            return res.status(400).render("login.ejs",{error:"Invalid email or password"}); 
            // return res.status(400).json("Invalid email or password");
            
        }
    });
}

let addNewUser=async (req,res)=>{
    let user={
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    };
    // console.log(req.header)
    // console.log(user)
    // if(!validateUser(user)){
    //     return res.status(301).render("register",{error:"data is not correct"});
    //     // return res.status(401).json("check ur data");
    // }
    let foundUser;
    try {
        foundUser=await userModel.findOne({"email":user.email});
    } catch (error) {
        
    }
    if(foundUser){
        return res.status(301).render("register",{error:"email already exist"});
        // return  res.status(401).json("user already exits login");
    }

    user.password=await bcrypt.hash(user.password, saltRounds)
    console.log(user.password)
    let newUser=new userModel(user);
    newUser=newUser.save();
    if(newUser){
        return res.status(201).render("login.ejs");
    }else{
        return res.status(301).render("register",{error:"couldn't add user try again"});
        // return res.status(301).json("couldn't add user try again");

    }
}

module.exports={
    login,
    addNewUser
}