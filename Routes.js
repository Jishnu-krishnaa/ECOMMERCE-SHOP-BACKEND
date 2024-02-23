const express=require('express')
const router=express.Router()
const userController=require('./User/userController')
const addProductController=require('./Admin/addProductController')
const AddCartController=require('./Payment&Cart/AddCartController')
const buyNowControll=require('./Payment&Cart/buyNowControll')



router.post('/registerUser',userController.registerUser)
router.post('/loginUser',userController.loginUser)
router.get('/ViewAllUsers',userController.ViewAllUsers)
router.get('/ViewMyProfile/:userId',userController.ViewMyProfile)
router.post('/addProduct',addProductController.upload, addProductController.addProduct)
router.get('/ViewAllProductsbyCatagory/:catagory',addProductController.ViewAllProductsbyCatagory)
router.get('/DeleteProduct/:productId',addProductController.DeleteProduct)
router.get('/ViewAllProductsbyTrend/:trend',addProductController.ViewAllProductsbyTrend)
router.post('/addtocart',AddCartController.addtocart)
router.get('/ViewAllCart/:id',AddCartController.ViewAllCart)
router.get('/deletecart/:productId',AddCartController.deletecart)
router.post('/BuyNowOrder/:stockid',buyNowControll.BuyNowOrder)
router.get('/BuyNowUser/:userId',buyNowControll.BuyNowUser)
router.get('/ViewProductbyId/:id',addProductController.ViewProductbyId)
router.post('/SetDeliveryAddress',userController.SetDeliveryAddress)
router.get('/ViewAddressbyId/:address',userController.ViewAddressbyId)






module.exports=router
