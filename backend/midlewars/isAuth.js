var jwt = require('jsonwebtoken')
const registreSchema=require('../model/registre')


exports.isAuth=async (req,res,next)=>{
    try {
        const token=req.header('Authorization')
        
        var decoded=jwt.verify(token.process.env.privateKey)
        if(!decoded){
            return res.json({errors})
        }
        const user=await registreSchema.findById(decoded.id)
        res.user=user
        next()
    } catch (error) {
        console.log(error.message)
        res.status(500).json(error.message)
}
}