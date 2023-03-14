const jwt=require("jsonwebtoken")

let Permissions=(req,res,next)=>{
    var isLogged = req.cookies["x-auth-token"];
    // if(!req.header("x-auth-token")) return res.status(400).send("Access Denied..");//user not logged in
    if(!isLogged) return res.status(400).send("Access Denied..");//user not logged in

    isLogged=jwt.decode(isLogged,"tokenkey");

    if(!isLogged) return res.status(400).send("Access Denied..");//user not and admin
    //user is admin
    next();
}

module.exports=Permissions;