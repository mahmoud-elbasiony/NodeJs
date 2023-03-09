const validateUser=require("../utils/usersValidations");
const userModel=require("../models/usersModel")
const bcrypt=require("bcrypt");
const saltRounds = 9;

let login=async (req,res)=>{
    let user=req.body;
    let foundUser;
    try {
        foundUser=await userModel.findOne({"email":user.email});
    } catch (error) {
        
    }
    if(foundUser){
        if(foundUser.password==user.password){
            res.status(200).json("login success");
        }else{
            res.status(400).json("Invalid email or password");

        }

    }else{
        res.status(400).json("Invalid email or password");
    }
}

let addNewUser=async (req,res)=>{
    let user=req.body;
    console.log(user)
    if(validateUser(user)){
        let foundUser;
        try {
            foundUser=await userModel.findOne({"email":user.email});
        } catch (error) {
            
        }
        if(!foundUser){
            user.password=await bcrypt.hash(user.password, saltRounds)
            console.log(user.password)
            let newUser=new userModel(user);
            newUser=newUser.save();
            if(newUser){
                res.status(201).json("user added");
            }else{
                res.status(301).json("couldent add user");
            }
        }else{
            res.status(401).json("user already exits login");
        }
    }else{
        res.status(401).json("check ur data");

    }
}

module.exports={
    login,
    addNewUser
}