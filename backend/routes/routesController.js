const express=require('express')
const controllerRoute=express.Router()

const{register, login}=require('../controllerRoutes/controllerRoutes')

const{isAuth}=require('../midlewars/isAuth')
const{resgistreVaidation, loginVaidation, validation}=require('../midlewars/RegistreValidation')

controllerRoute.post('/register',resgistreVaidation,validation,register)
controllerRoute.post('/login',loginVaidation,validation,login)


controllerRoute.get('/moncompte',isAuth,(req,res)=>{
    res.send(req.user)
})




module.exports=controllerRoute