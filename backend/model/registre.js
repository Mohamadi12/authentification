const mongoose=require('mongoose')


const registreSchema=mongoose.Schema({
    name:String,
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    role:{
        type:String,
        default:"user"
    }
})

module.exports=mongoose.model('registreSchema',registreSchema)