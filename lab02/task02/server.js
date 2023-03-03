const http=require("http")
const fs=require("fs")
let mainHtml=fs.readFileSync("src/index.html").toString()
let welcomeHtml=fs.readFileSync("src/welcome.html").toString()
let welcomeJs=fs.readFileSync("src/welcome.js").toString()
let jsonFile=fs.readFileSync("file.json").toString()
let scriptJs=fs.readFileSync("src/script.js").toString()
let StyleCss=fs.readFileSync("src/style.css").toString()
let favIco=fs.readFileSync("src/favicon.ico")


// console.log(jsonFile);
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
    let userObj={};
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