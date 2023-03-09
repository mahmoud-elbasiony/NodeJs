const express=require("express");
const Router=express.Router();
const studentsController=require("../controllers/studentsControllers");


Router.get("/",studentsController.getAllStudents)
Router.get("/:id",studentsController.getStudentsById)
Router.post("/add",studentsController.addNewStudent)
Router.put("/:id",studentsController.updateStudentById)
Router.delete("/:id",studentsController.deleteStudentByID)

module.exports=Router;