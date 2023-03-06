// const http=require("http")
const PORT=process.PORT || 7000;
const fs=require("fs")
let welcomeHtml=fs.readFileSync("../client/welcome.html").toString()
const path=require("path");
let jsonFile=fs.readFileSync("file.json").toString()
const express=require("express")
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
function getPath(rp){
    return path.join(__dirname,rp);
}

// let mainHtml=fs.readFileSync("src/index.html").toString()
// let welcomeJs=fs.readFileSync("src/welcome.js").toString()
// let scriptJs=fs.readFileSync("src/script.js").toString()
// let StyleCss=fs.readFileSync("src/style.css").toString()
// let favIco=fs.readFileSync("src/favicon.ico")

app.get("/",(req,res)=>{
    res.sendFile(getPath("../client/index.html"));
});
app.get("index.html",(req,res)=>{
    res.sendFile(getPath("../client/index.html"));
});
app.get("/style.css",(req,res)=>{
    res.sendFile(getPath("../client/style.css"));
});
app.get("/script.js",(req,res)=>{
    res.sendFile(getPath("../client/script.js"));
});
app.get("/welcome.js",(req,res)=>{
    res.sendFile(getPath("../client/welcome.js"));
});
app.post("/welcome.html",(req,res)=>{
    welcomeHtml=welcomeHtml.replace("{username}",req.body.name).replace("{email}",req.body.email).replace("{phone}",req.body.phone).replace("{address}",req.body.address);
    addToJson(req.body)
    res.send(welcomeHtml);
});
app.get("/favicon.ico",(req,res)=>{
    res.sendFile(getPath("../client/favicon.ico"));
});
app.get("/users",(req,res)=>{
    res.sendFile(getPath("file.json"));
});




/*
http.createServer((req,res)=>{

    let url=req.url;
    //region get
    if(req.method=="GET"){
        console.log(url);
        switch(url){
            case "/index.html":
                
                res.writeHead(200,"ok",{"content-type":"text/html"})
                res.write(mainHtml);
            break;
            case "/welcome.html":
                
                res.writeHead(200,"ok",{"content-type":"text/html"})
                res.write(welcomeHtml);
            break;
            case "/welcome.html":
                
                res.writeHead(200,"ok",{"content-type":"text/html"})
                res.write(welcomeHtml);
            break;
            case "/style.css":
                
                res.writeHead(200,"ok",{"content-type":"text/css"})
                res.write(StyleCss);
            break;
            case "/script.js":
                
                res.writeHead(200,"ok",{"content-type":"text/javascript"})
                res.write(scriptJs);
            break;
            case "/welcome.js":
                
                res.writeHead(200,"ok",{"content-type":"text/javascript"})
                res.write(welcomeJs);
            break;
            case "/favicon.ico":
                
                res.writeHead(200,"ok",{"content-type":"image/vnd.microsoft.icon"})
                res.write(favIco);
            break;
            case "/users":
                res.writeHead(200,"ok",{"content-type":"application/json"})
                // res.json();

                res.write(jsonFile);
            break;
        }
        
        res.end()
        //region post
}else if(req.method=="POST"){
    let req.body={};
    req.on("data",(data)=>{
        // console.log(data.toString());
        let parsedData= new URLSearchParams(data.toString())
        for (var pair of parsedData.entries()) {
            userObj[pair[0]] = pair[1];
        }
        console.log(userObj)
        // userObj=toObject(data.toString())

        addToJson(userObj)
    })
    req.on("end",()=>{
        welcomeHtml=welcomeHtml.replace("{username}",userObj.name).replace("{email}",userObj.email).replace("{phone}",userObj.phone).replace("{address}",userObj.address)
        res.write(welcomeHtml);
        res.end();
    })

    }
    


}).listen(7000,console.log("lisenning on port 7000"))
*/
function addToJson(data){
    if(fs.existsSync("file.json")){
        console.log("file found")
        let jsonFile=fs.readFileSync("file.json").toString();
        jsonFile=JSON.parse(jsonFile);
        jsonFile.push(data);

        fs.writeFileSync("file.json",JSON.stringify(jsonFile))

    }else{
        fs.writeFileSync("file.json",JSON.stringify([data]))
        console.log("file notfound")

    }
}
// addToJson("asd")

function toObject(text){
    let ar=text.split("&");
    // console.log(ar);
    let obj={};
    ar.forEach(element => {
        let input=element.split("=")
        // console.log(input[0],input[1]);
        obj[input[0]]=decodeURIComponent(input[1])

        
    });
    // console.log(obj);
    return obj;

}

app.listen(PORT,()=>{console.log("localhost:"+PORT)})