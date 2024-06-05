
const MiddleWare = {
    registerAccount: (req, res, next) =>{
        try{
            const {username, password, fullName} = req.body
            if (!username) throw new Error("Username must be not empty!")
            if (!password) throw new Error("Password must be not empty!")
            if (!fullName) throw new Error("FullName must be not empty!")

            next()
        } catch (err){
            res.status(400).send({
                message: err.message
            })
        }
    },
    login: (req, res, next) =>{
        try{
            const {username, password} = req.body
            if (!username) throw new Error("Username must be not empty!")
            if (!password) throw new Error("Password must be not empty!")

            next()
        } catch (err){
            res.status(400).send({
                message: err.message
            })
        }
    },
};

export default MiddleWare