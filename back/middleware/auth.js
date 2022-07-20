const  jwt=require('jsonwebtoken');
const User=require('../models/user');


const  auth=async(req,res,next)=>{
let token;
if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){

    try {
        
        token=req.headers.authorization.split(' ')[1];
        const  decoded=jwt.verify(token,'some secret here');
        req.user=await User.findById(decoded.id);
        next()
    } catch (error) {
       
        res.status(401).json({msg:'Access Denied Unauthorized.'})
   
    }
}

}

module.exports=auth;


