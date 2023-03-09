const mongoose=require("mongoose");
const URL='mongodb://127.0.0.1:27017/school'
async function main() {
    await mongoose.connect(URL,{useNewUrlParser:true});
    
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
main();
const usersSchema = new mongoose.Schema({
    name: {
        type:"String",
        required:true
    },
    email:{
        type: "String",
        required:true
    },
    password: {
        type: "String",
        required:true
    }
});


module.exports=mongoose.model('users', usersSchema);