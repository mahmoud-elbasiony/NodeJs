// import { io } from "socket.io-client";
// const { io } = require("socket.io-client");
const socket = io();
const send=document.getElementById("send");
const join=document.getElementById("join");
const messages=document.querySelector(".messages");
const textMessage=document.querySelector(".send-message-container input")

// client-side
socket.on("connect", () => {
    console.log(socket.id); 
});
socket.on("recieve-event", (MSG) => {
    console.log(MSG);
    displayMessage(MSG.message,"");
});


send.addEventListener("click",function(){
    if(textMessage.value!=""){
        socket.emit("send-event",{ message: textMessage.value });
        displayMessage(textMessage.value,"send");
        console.log("sending");
        textMessage.value="";

    }
})
function displayMessage(txt,style){
        messages.innerHTML+=messageDiv.replace("{text}",txt).replace("{style}",style);
}


let messageDiv=`<div class="message {style}">{text}</div>`;