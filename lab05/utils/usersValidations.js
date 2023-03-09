const Ajv =require("ajv");
// const validator=require("validator");
const ajv = new Ajv()


const userSchema = {
    type: "object",
    properties: {
    name: {
        type: "string" ,
        pattern:"^[a-zA-Z]{3,}$"
    },
    email: {
        type: "string",
        // pattern:"[a-zA-Z]{1}\w*\@{1}[a-zA-Z]+\.{1}[a-zA-Z]*$",
    },
    password: {
        type: "string",
        // pattern:"^[a-zA-Z]{5,}$"
        minLength: 6,
        // pattern:"(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
        }
    },
    required: ["name","email","password"],
    additionalProperties: false
}

module.exports=ajv.compile(userSchema);
