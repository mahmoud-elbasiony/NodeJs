const PORT=process.env.PORT || 7000;
const express=require("express");
const path=require("path");
const studentRouter=require("./routes/studentsRouters")
const userRouter=require("./routes/usersRouters")


const app=express();

//#region middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("*",(req,res,next)=>{
    console.log("logging");
    next();
})

//#endregion

//#region sudents routes
app.use("/api/students",studentRouter);
app.use("/api/users",userRouter);


//#endregion


app.listen(PORT,()=>{ console.log("http://localhost:"+PORT)})