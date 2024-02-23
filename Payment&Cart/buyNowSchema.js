const mongoose=require('mongoose')


const buyNowschema=new mongoose.Schema({


    stockid:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:'product'
    },
    userId:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }
   

})
module.exports=new mongoose.model("BuyNow",buyNowschema)