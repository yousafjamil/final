const mongoose=require('mongoose');

const reviewsSchema=mongoose.Schema({

comments:{
    type:[String],
    
},
users:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"blog"
}
}

);


module.exports=mongoose.model('reviews',reviewsSchema);