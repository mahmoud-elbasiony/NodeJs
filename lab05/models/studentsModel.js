const mongoose=require("mongoose");
const URL='mongodb://127.0.0.1:27017/school'
async function main() {
    await mongoose.connect(URL,{useNewUrlParser:true});
    
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
main();
// mongoose.connect(URL,{useNewUrlParser:true});
const studentSchema = new mongoose.Schema({
    name: {
        type:"String",
        required:true,
        min: 3
    },
    age:{
        type: "Number",
        min:15,
        max:50,
        required:true
    },
    courses: {
        type: "String",
        enum:["SD","OS","SWA","AI"],
        required:true
    }
});


module.exports=mongoose.model('students', studentSchema);