const mongoose=require('mongoose')


const UserAdressSchema=mongoose.Schema({
address:{
    type:String,
    required:true
}
})
module.exports=mongoose.model('Buyaddress',UserAdressSchema) 

