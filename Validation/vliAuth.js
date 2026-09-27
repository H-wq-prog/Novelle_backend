const Joi = require("joi")


const vliregest = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().required().email(),
   role: Joi.string().valid("admin","user"),
   password: Joi.string().min(8).required()
})
const vlilogin = Joi.object({
    email: Joi.string().required().email(),
   password: Joi.string().min(8).required()
})




module.exports = {vliregest, vlilogin} 