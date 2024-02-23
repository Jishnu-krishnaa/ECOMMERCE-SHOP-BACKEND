const mongoose=require('mongoose')


const addProductSchema=mongoose.Schema({

name:{
    type:String,
    required:true
},
price:{
    type:Number,
    required:true
},
pic:{
    type:Object,
    required: true,
},
catagory:{
    type:String,
    required: true
},
trend:{
    type:String,
    required:true
},
desc:{
    type:String,
    required:true
}
})
module.exports=mongoose.model('product',addProductSchema)

