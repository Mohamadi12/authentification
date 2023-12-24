const mongoose=require('mongoose')

const connectDB=async ()=>{
    try {
        await mongoose.connect('mongodb+srv://moha1:Tkoh2RneT2s7ryyj@cluster0.n06tzyl.mongodb.net/?retryWrites=true&w=majority')
        console.log('Successfull')
    } catch (err) {
        console.log(err)
    }
}
module.exports=connectDB