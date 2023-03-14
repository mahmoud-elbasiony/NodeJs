const express=require("express");
const Router=express.Router();
const usersController=require("../controllers/usersControllers");
const Permissions=require("../middleWares/permissions")



Router.get("/home",(req,res)=>{
    res.render("home.ejs")
})
Router.get("/dashboard",Permissions,(req,res)=>{
    res.render("dashboard.ejs")
})
Router.get("/login",(req,res)=>{
    res.render("login.ejs",{error:0})
})
Router.get("/register",(req,res)=>{
    res.render("register.ejs",{error:0})
})


Router.post("/login",usersController.login)
Router.post("/register",usersController.addNewUser)

module.exports=Router;