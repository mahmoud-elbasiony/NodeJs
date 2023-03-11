const Ajv = require("ajv");
const ajv = new Ajv();


const courseSchema = {
    type: "object",
    properties: {
        name: {
            type: "string" ,
            pattern:"^[a-zA-Z]{2,4}$"
        },
        deg: {
            type: "string",
            enum:["A","B","C","F"]
        },
    },  
    required: ["name","deg"],
    additionalProperties: false
}

module.exports=ajv.compile(courseSchema);
