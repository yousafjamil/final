const mongoose=require('mongoose');

const blogSchema=mongoose.Schema({

title:{
    type:String,
    require:true
},
blogbody:{
    type:String,
    require:true
},
auther:{
    type:String,
    require:true
},
image:{
    type:String,
    require:true
},
catogery:{
    type:String,
    require:true
},


},
{timetamps:true}
);


module.exports=mongoose.model('blog',blogSchema);