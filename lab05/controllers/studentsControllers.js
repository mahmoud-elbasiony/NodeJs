const validateStudent=require("../utils/studentsValidations");
const studentModel=require("../models/studentsModel")


// get all students
let getAllStudents=async (req,res)=>{
    console.log("get al students")
        let Students=await studentModel.find({});
        res.status(201).json(Students)
    }
// get student by id
let getStudentsById=async (req,res)=>{
    console.log("get student by id");
    let id=req.params.id;
    let student=null;
    try {
        student =await studentModel.findById({"_id":id});
    } catch (error) {
        //  console.log(error);
    }
    if(student){
        res.status(201).json(student);
    }else{
        res.status(401).json("not found");
    }
}
// add new students
let addNewStudent=async (req,res)=>{
    console.log("add students")
    let newStudent=req.body;
    if(validateStudent(newStudent)){
        // if(studentModel.find({email:newStudent.email}).exec()) {return res.status(401).send("student already exist.")};
        console.log(newStudent)
        let student=new studentModel(newStudent);
        console.log("2")
        await student.save();
        console.log("3")
        // console.log(addedStudent);
        // if(!student){return res.status(301).send("couldnet add student")}
            res.status(201).json(student);
    }else{
        res.status(301).send("check ur data");
    }
    
}
// update students
let updateStudentById=async (req,res)=>{
    console.log("update students")
    let id=req.params.id;
    let student=req.body;
    let updatedStudent;
    if(validateStudent(student)){
        try{
            updatedStudent=await studentModel.findOneAndUpdate({"_id":id},
            {
                "$set":student
            },{
                returnOriginal: false
            }
            )
        }catch(err){
        }
        if(updatedStudent){
            res.status(201).json(updatedStudent);
        }else{
            res.status(401).json("couldent update");
        }
        
    }else{
        res.status(401).send("check ur data")
    }
    
}
//delete student
let deleteStudentByID=async (req,res)=>{
    console.log("delete student by id")
    let id=req.params.id;
    
    let deletedStudent;
    try {
        
        deletedStudent=await studentModel.findOneAndDelete({"_id":id}); 
    } catch (error) {
        console.log(error); 
    }
    // console.log(deletedStudent); 
    if(deletedStudent)  {
        res.status(201).json("deleted");
    }else{
        res.status(401).json("not found");

    }
    
}

module.exports={
    getAllStudents,
    getStudentsById,
    addNewStudent,
    updateStudentById,
    deleteStudentByID
}
/*
class Student{
    static id=studentModel.aggregate({"$max":"id"});
    constructor(StudentObj){
        this.studentData=StudentObj;
    }
    addNewStudent(req,res){
        
        if(validateStudent(newStudent)){
            // newStudent.id=++id;
            studentModel.find({"id":});
            Students.push(newStudent)
            res.status(201).json(newStudent);
        }else{
            res.status(301).send("check ur data");
        }
        
    }
}
*/
// Students.find((s)=>{
//     if(s.email == req.body.email){
//         found=true;
//         return
//     }
// })
// if(!found){
//         newStudent.id=++id;
//         Students.push(newStudent)
//         res.status(201).json(newStudent)
// }else{
//     res.status(201).json("student already exist")
// }