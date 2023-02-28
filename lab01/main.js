const http = require("http")
const fs=require("fs")
http.createServer((req,res)=>{
    if(req.url != "/favicon.ico"){
        let operation=req.url.split("/")
        operation.shift()
        let operator=operation.shift()

        let numbers=operation.map((n)=>Number.parseFloat(n))
        let result;
        switch(operator){
            case "add":
                
                result=sum(numbers);
                fs.appendFileSync("./opertaion.txt",`sum:${result}\n`)
                res.write(`<h1>sum: ${result}</h1>`)

                break;
            case "multiply":
                result=multiply(numbers);
                fs.appendFileSync("./opertaion.txt",`multiply: ${result}\n`)
                res.write(`<h1>multiply: ${result}</h1>`)
                break;
            case "sub":
                result=sub(numbers);
                fs.appendFileSync("./opertaion.txt",`subtract: ${result}\n`)
                res.write(`<h1>subtract: ${result}</h1>`)
                break;
            case "divide":
                result=divide(numbers);
                fs.appendFileSync("./opertaion.txt",`divide: ${result}\n`)
                res.write(`<h1>divide: ${result}</h1>`)
                break;

        }
    }
    res.end();

})
    .listen(8000,()=>{console.log("listenning on port 8000")})

function sum(arr){
    let sum=0;
    arr.forEach(n=>sum+=n)
    return sum;

}
function multiply(arr){
    let mult=1;
    arr.forEach(n=>mult*=n)
    return mult;

}
function sub(arr){
    let res=arr[0];
    for(let i=1;i<arr.length;i++){
        res-=arr[i];
    }
    return res;

}
function divide(arr){
    let res=arr[0];
    for(let i=1;i<arr.length;i++){
        res/=arr[i];
    }
    return res;

}