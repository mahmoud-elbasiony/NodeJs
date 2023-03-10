const PORT=process.env.PORT || 7000;
const express=require("express");
const path=require("path");
const studentRouter=require("./routes/studentsRouters")
const userRouter=require("./routes/usersRouters")
const Permissions=require("./middleWares/permissions")
const coursesRouter=require("./routes/coursesRouters")
const cookieParser = require('cookie-parser');

const app=express();

//#region middlewares
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname+"/public"))
app.set("view engine","ejs");

app.get("*",(req,res,next)=>{
    console.log("logging");
    next();
})

app.post("*",(req,res,next)=>{
    console.log(req.body)
    next();

})

//#endregion

//#region sudents routes
app.use("/api/students",studentRouter);
app.use("/api/users",userRouter);
app.use("/api/courses",coursesRouter);
app.use("/",userRouter);
//#endregion


app.listen(PORT,()=>{ console.log("http://localhost:"+PORT)})