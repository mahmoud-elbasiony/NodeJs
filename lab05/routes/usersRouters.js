const express=require("express");
const Router=express.Router();
const usersController=require("../controllers/usersControllers");

Router.post("/login",usersController.login)
Router.post("/add",usersController.addNewUser)

module.exports=Router;