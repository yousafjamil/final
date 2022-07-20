const router = require('express').Router();
const User = require('../models/user')
const jwt=require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Auth=require('../middleware/auth')

router.post('/signup', async (req, res) => {
  const { name, email, password, phone } = req.body;

  const ExistUser = await User.findOne({email})

//   const hashpass = await bcrypt.hash(password, 10)
try {
  
  if (ExistUser) {
    return res.status(201).json({ suceess:false,message: 'user already  exist with this email' })
  } else

    if (!name || !email || !password || !phone) {
    return  res.status(400).json({suceess:false, message: 'please fill  all  the required field' })
    } 
    
     else {
        const saveUser= await   User.create({  name, email, password, phone });

          return res.status(200).json({suceess:true, message: 'User successfully registered',token:generateToken(saveUser.id) })

        }
} catch (error) {
    
    throw new Error('error in singup')
//   res.status(500).json({
//     success:fasle,
//     message:"some internal error occured."
//   })
}


});


///login///////////////////////////////////////////////////////
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const loginUser = await User.findOne({ email });
  if(!loginUser){
    return res.json({success:false, message: "user does not exist." })
  }else 
  if (!email || !password) {
    return res.json({success:false, message: "fill all required fields.." })
  }

  if (loginUser) {
    const match = await bcrypt.compare(password, loginUser.password);
  
    if (!match) {
      return res.json({success:false, message: "Invalid Credentials..." })
    } else {
      loginUser.password=undefined;
      return res.json({success:true, message: "User Successfully login...",token:generateToken(loginUser.id) })
    }
  } else {
    return res.json({success:false, message: "Invalid Credentials..." })
  }


})
////////////display all  registered user
router.get('/alluser',Auth, async(req,res)=>{
 
  const  allUser=await  User.find({});
   res.json({allUser})
})


router.delete('/user/delete/:id',async(req,res)=>{
 
  const  deletedUser=await User.findByIdAndDelete({_id:req.params.id},{new:true})
  
  res.json({message:"user successfully Deleted..."})
})


const  generateToken=(id)=>{
  return token=jwt.sign({id},'some secret here')
}
module.exports = router;