import dotenv from "dotenv"
import jwt from "jsonwebtoken"


dotenv.config()
const TokenController = {
    genToken: (req,res) =>{
        const payload = req.body
        const SECRET_KEY = process.env.SECRET_KEY
        const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "10m"})
        res.status(200).send({
            token: token
        })
    },
    checkToken: (req,res) => {
        let token = req.header['authorized']
        token = token.replaceAll("Bearer ", "")
        const SECRET_KEY = process.env.SECRET_KEY

        jwt.verify(token, SECRET_KEY, (err, data) =>{
            if (err){
                res.status(401).send({
                    message:err.message

                })
            } else {
                res.status(200).send({
                    message:token
                })
            }
        })
    }
}

export default TokenController;
