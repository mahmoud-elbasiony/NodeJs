const jwt=require("jsonwebtoken")

let Permissions=(req,res,next)=>{
    if(!req.header("x-auth-token")) return res.status(400).send("Access Denied..");//user not logged in
    let isAdmin=jwt.decode(req.header("x-auth-token"),"tokenkey");
    if(!isAdmin) return res.status(400).send("Access Denied..");//user not and admin
    //user is admin
    next();
}

module.exports=Permissions;