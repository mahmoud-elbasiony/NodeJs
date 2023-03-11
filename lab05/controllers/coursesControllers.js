const validateCourse=require("../utils/coursesValidations");
const courseModel=require("../models/coursesModel")



// get all courses
let getAllcourses=async (req,res)=>{
    console.log("get all courses")
        let courses=await courseModel.find({});
        res.status(201).json(courses)
}
// add new cousrses
let addNewCourse=async (req,res)=>{
    console.log("add course")
    let newCourse=req.body;
    let foundCourse;
    try {
        foundCourse=await courseModel.findOne({"name":newCousrse.name});
    } catch (error) {   
    }
    if(foundCourse){
        return res.status(400).json("Course already Exist");
    }
    if(validateCourse(newCourse)){
        console.log(newCourse)
        let course=new courseModel(newCourse);
        await course.save();
        res.status(201).json(course);
    }else{
        res.status(400).send("check ur data");
    }
    
}
// delete course
let deleteCourseByID=async (req,res)=>{
    console.log("delete course by id")
    let id=req.params.id;
    
    let deletedCourse;
    try {
        
        deletedCourse=await courseModel.findOneAndDelete({"_id":id}); 
    } catch (error) {
        console.log(error); 
    }
    // console.log(deletedCourse); 
    if(deletedCourse)  {
        res.status(201).json("deleted");
    }else{
        res.status(400).json("not found");

    }
    
}
module.exports={
    getAllcourses,
    addNewCourse,
    deleteCourseByID,
}