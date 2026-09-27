const mongoose = require("mongoose")


const conctDB =  async () => {

try{
    await mongoose.connect(process.env.DB)
    console.log("scssful concted mongoDB")
}
catch(err){
    console.log({msg:"filed conction mongoDB" , error: err  
    });
    
}}
module.exports = conctDB