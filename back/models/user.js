
const  mongoose=require('mongoose');



const  userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },

    password:{
        type:String,
        required:true
    }
})

module.exports=Umodel=mongoose.model('user',userSchema);
//////////////////generet token at the time of login  for user
//   userSchema.methods.generatetoken = async function (){

//     const  token=await jwt.sign({_id:this._id},'some secret here');
//     this.tokens=this.tokens.concat({token})
//      await this.save();
//      return token

// }

