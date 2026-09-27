const JWT = require("jsonwebtoken") 

const valideToken = async (req, res, next) => {
    try{
    const auth =  req.headers.authorization
     if(!auth) return res.status(400).json({msg: "Not fond auth"})
     const taken = auth.split(" ")[1]
     const decoded = await JWT.verify(taken,process.env.SKRETKE)

     req.user = decoded
        next()
    }
    catch(err){
        res.status(401).json({msg: "token not valid ", error:err})
    }
   

}
module.exports = valideToken


