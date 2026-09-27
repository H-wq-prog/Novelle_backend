const USER = require("../models/User")
const crypt =require("bcryptjs")
const creatToken = require("../utlits/creaToken")
const {vliregest, vlilogin}=  require("../Validation/vliAuth")

const Signup = async(req,res) =>{
try{
    const {error: err, value} = vliregest.validate(req.body, {abortEarly:false, stripUnknown: true})

   if (err)return res.status(400).json({ msg: "not valid data intre", data:err})


    const {name,email,role,password} = value
    const user = await USER.findOne({email})
    if(user)return res.status(400).json({ msg: "Tise user is exssest"})

    const hashpass = await crypt.hash(password, 10)
    
    const cuser = await USER.create({ 
        name,email, role,
        password : hashpass
    })

    const token = creatToken({name,email, role,id : cuser._id})
    
    res.status(201).json({ msg: "scssfyl creat user", Data:cuser, token})
}
catch(err){
    res.status(500).json({ msg: "Server is crashed", Data: err})
}
}





const Login = async(req,res) =>{
try{
     const {error: err, value} = vlilogin.validate(req.body, {abortEarly:false, stripUnknown: true})

   if (err)return res.status(400).json({ msg: "not valid data intre", data:err})
    const {email,password} = value
    const user = await USER.findOne({email})
    if(!user)return res.status(400).json({ msg: "Tise user is NOT exssest"})
    const validpass =await crypt.compare(password, user.password)
    if(!validpass) return res.status(400).json({ msg: "password is NOT corecte"})
    console.log("acsses DON")

     const token = creatToken({name:user.name,email, role:user.role ,id : user._id})
     res.status(200).json({ msg: "scssfyl login", Data:user, token})
}
catch(err){
    res.status(500).json({ msg: "Server is crashed", Data: err})
}
}


module.exports = 
{ 
    Signup,
    Login
}