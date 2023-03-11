const express = require("express");
const CourseController = require("../controllers/coursesControllers");
let router = express.Router();

router.get("/",CourseController.getAllcourses);

router.post("/add",CourseController.addNewCourse);

router.delete("/:id",CourseController.deleteCourseByID);


module.exports = router;