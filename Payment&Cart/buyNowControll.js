const BuyNow=require('./buyNowSchema')
const user=require('../User/userSchema')


const path =require('path')

const BuyNowOrder=((req,res)=>{
    let order1=new BuyNow({
        stockid:req.params.stockid,
        userId:req.params.userId,
    })
    order1.save()
    .then(response=>{
        res.json({
            msg:"saved"
        })
    })
    .catch(err=>{
        res.json({
            msg:"error"
        })
    })
})

const BuyNowUser = (req, res) => {
    const userId = req.params.userId;
    user.findById(userId)
      .then((user) => {
        if (!user) {
          return res.status(404).json({ msg: 'User not found' });
        }
        res.json(user);
      })
      .catch((err) => res.status(500).json({ err: 'Error fetching user profile' }));
  };


module.exports={BuyNowOrder,BuyNowUser}