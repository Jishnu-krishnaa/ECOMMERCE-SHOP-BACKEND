const mongoose=require('mongoose')


const AddCartSchema=new mongoose.Schema({

productId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'product',
    required:true
},
userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user',
    required:true

}
})
module.exports= new mongoose.model('addtocart',AddCartSchema)

