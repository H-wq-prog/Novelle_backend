const jwt = require("jsonwebtoken")

const creatToken = (payload) => {
const Token =  jwt.sign(payload, process.env.SCRETKEY, {expiresIn: "1d"})
return Token
}
module.exports = creatToken