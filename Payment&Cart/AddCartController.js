const cart=require('./AddCartSchema')
const path =require('path')


const addtocart=((req,res)=>{
  let cart1=new cart({
      productId:req.body.productId,
      userId:req.body.userId,
  })
  cart1.save().then(data=>{
    res.json({
        status:200,
        msg:"Product Added cart Successfully",
        data:data
    })
}).catch(err=>{
    res.json({
        status:500,
        msg:"Product updating Failed", 
        Error:err
    })
})
})

const cartfindbyid=((req,res)=>{
  cart.find({userId:(req.params.id)}).populate('productId').exec()
  .then(response=>{
      res.json({
          msg:response
      })
  })
  .catch(err=>{
      res.json({
          msg:"Error occured"
      })
  })
})

const deletecart=((req,res)=>{
    cart.findByIdAndDelete(req.params.productId)
    .then((deletedCart) => {
      if (!deletedCart) {
        res.status(404).json({ message: 'Product not found' });
      } else {
        res.status(200).json({ message: 'Product deleted successfully', deletedCart });
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    });  
})  


const ViewAllCart = (req, res) => { 
    cart.find({userId:(req.params.id)})
    .populate('productId').exec()
      .then((products) => {
          res.status(200).json({
              status: 200,
              data: products
          });
      })
      .catch((err) => {
          res.status(500).json({ 
              status: 500,
              error: 'Error fetching products' 
          });
      });
    }



module.exports={addtocart,cartfindbyid,deletecart,ViewAllCart}