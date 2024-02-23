const product=require('./addProductSchema')
const multer=require('multer')
const path =require('path')

    const storage=multer.diskStorage({
       destination:function(req,res,cb){
           cb(null,'./upload')
       },
       filename:function(req,file,cb){
           cb(null,file.originalname)
       }
    })

    const upload=multer({storage:storage}).single('pic')

const addProduct=(req,res)=>{
    const newProduct=new product({
        name:req.body.name,
        price:req.body.price,
        pic:req.file,
        desc:req.body.desc,
        catagory:req.body.catagory,
        trend:req.body.trend
    })
    newProduct.save().then(data=>{
        res.json({
            status:200,
            msg:"Product Added Successfully",
            data:data
        })
    }).catch(err=>{
        res.json({
            status:500,
            msg:"Product updating Failed",
            Error:err
        })
    })
}

// const ViewAllProducts = (req, res) => {
//     product.find()
//       .then((products) => res.json(products))
//       .catch((err) => res.status(500).json({ err: 'Error fetching products' }));
//   }

const ViewAllProductsbyCatagory = (req, res) => {
    product.find({catagory: req.params.catagory})
      .then((products) => res.json(products))
      .catch((err) => res.status(500).json({ err: 'Error fetching products' }));
  }

const DeleteProduct= (req,res)=>{
    product.findByIdAndDelete(req.params.productId)
    .then((deletedProduct) => {
      if (!deletedProduct) {
        res.status(404).json({ message: 'Product not found' });
      } else {
        res.status(200).json({ message: 'Product deleted successfully', deletedProduct });
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    });
}

const ViewAllProductsbyTrend = (req, res) => {
    product.find({trend: req.params.trend})
      .then((products) => res.json(products))
      .catch((err) => res.status(500).json({ err: 'Error fetching products' }));
}

const ViewProductbyId = (req, res) => {
  const id = req.params.id;
  product.findById(id)
    .then((product) => {
      if (!product) {
        return res.status(404).json({ msg: 'User not found' });
      }
      res.json(product);
    })
    .catch((err) => {console.log(err)
      res.status(500).json  
      ({ err: 'Error fetching user profile' })});
    
};

module.exports={addProduct,upload,ViewAllProductsbyCatagory,DeleteProduct, ViewAllProductsbyTrend, ViewProductbyId}
