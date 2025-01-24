const mongoose=require('mongoose');

const connnectDb=async()=>{
    try{
        mongoose.connect('mongodb+srv://kishoore004:Siva%405@jk.itech.mongodb.net/practice3')
        console.log("MongoDb is connected ")
    }catch(error){
        console.error("connection failed")

    }
}

module.exports=connnectDb;
 