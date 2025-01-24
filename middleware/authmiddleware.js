const jwt=require("jsonwebtoken")

const authmiddleware=async (req,res,next)=>{
    try{
        const authhead=req.headers.authorization
        if(!authhead){
            res.status(500).json({success:false,message:"Please provide the token"})
        }
        const token=authhead.split(" ")[1]
        if(!token){
            res.status(500).json({success:false,message:"Please provide the token"})
        }
        const decoded=jwt.verify(token,"secret")
        req.exituser=decoded;
        next()

    }catch(error){
        res.status(500).json({message:"Internal server error",Description:error.message})
    }
}

module.exports=authmiddleware;