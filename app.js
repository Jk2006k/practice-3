// const mongoose =require('mongoose')
const connectDB=require('./config/db')
const express=require('express')
const app=express();
const bookrouter=require('./router/Router')
const userRoutes=require('./router/UserRoutes')
const authmiddleware=require('./middleware/authmiddleware')

app.use(express.json())
app.use("/books",authmiddleware,bookrouter)
app.use('/auth',userRoutes)

app.get('/',  (req, res) =>{
    try {
        res.send("Hello world")
    } catch (error) {
        res.status(500).send("Server error");
    }
});

app.listen(3000, async ()=>{
    try {
        await connectDB();
        console.log(`Server is Running at ${3000}`)
    } catch (error) {
       console.log(error.message);
    }
})

