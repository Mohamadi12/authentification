const express=require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const registreSchema=require('../model/registre')

exports.register=async (req,res)=>{
    try {
        const{name,password,email}=req.body
        const found=await registreSchema.findOne({email})
        if(found){
            return  res.status(400).json({msg:'Desolé vous êtes dejà inscrit,allez à la page login'})
        }
       
        const newAjout=new registreSchema(req.body)
       
        const saltRounds = 10;
        const salt=bcrypt.getRounds(saltRounds)
        const hash=bcrypt.hashSync(password,salt)
        newAjout.password=hash

        await newAjout.save()
        res.status(200).json({msg:'Ajout',newAjout})
    } catch (error) {
        console.log(error.message)
        res.status(500).json(error.message)
    }
}


exports.login=async (req,res)=>{
    try {
        const{password,email}=req.body
        const found=await registreSchema.findOne({email})
        if(!found){
            return res.status(400).json({msg:'Email introuvable,veuillez vous enregistrer'})
        }
        const match=bcrypt.compare(password, found.password)
        if(!match){return res.json({msg:'Password erroné'})}
        //token
        const payload={id: found._id}
       var token=jwt.sign(payload, process.env.privateKey)
       res.json({msg:'Youre Welcome login',found,token})
    } catch (error) {
        console.log(error.message)
        res.status(500).json(error.message)
    }
}

