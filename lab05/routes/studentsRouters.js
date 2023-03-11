const express=require("express");
const Router=express.Router();
const studentsController=require("../controllers/studentsControllers");
const Permissions=require("../middleWares/permissions")


Router.get("/",Permissions,studentsController.getAllStudents)
Router.get("/:id",Permissions,studentsController.getStudentsById)
Router.post("/add",Permissions,studentsController.addNewStudent)
Router.put("/:id",Permissions,studentsController.updateStudentById)
Router.delete("/:id",Permissions,studentsController.deleteStudentByID)

module.exports=Router;