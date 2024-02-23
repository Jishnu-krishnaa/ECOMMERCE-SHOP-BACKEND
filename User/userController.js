const user=require('./userSchema')
const Buyaddress=require('./UserAdressSchema')
const jwt=require('jsonwebtoken')
const secret = "your-secret-key";


const createToken = (cust) => {
    return jwt.sign({ userId: cust._id }, secret, { expiresIn: "1h" });
  };


const registerUser=(req,res)=>{
    const newUser=new user({
        name:req.body.name,
        age:req.body.age,
        email:req.body.email,
        phone:req.body.phone,
        gender:req.body.gender,
        password:req.body.password
    })
    newUser.save().then(data=>{
        res.json({
            status:200,
            msg:"Inserted successfully",
            data:data
        })
    }).catch(err=>{
        res.json({
            status:500,
            msg:"Data not Inserted",
            Error:err
        })
    })
}

const loginUser=(req,res)=>{
    const{email,password}=req.body

    user.findOne({email}).exec()
    .then((cust)=>{
        if(!cust){
            return res.json({
                status:404,
                msg:"User not found, (Check your Email or Password)"
            })    
        }
        if(cust.password!==password){
            return res.json({
                status:500,
                msg:"Incorrect password"
            })
        }
        const token=createToken(cust)

        return res.json({
            status:200,
            cust,token
        })
    }).catch((err=>{
        console.error(err);
        return res.json({
            status:500,
            msg:'Something went wrong!'
        })
    }))

    
}

const ViewAllUsers = (req, res) => { 
    user.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json({ err: 'Error fetching users' }));
  }

  const ViewMyProfile = (req, res) => {
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
  
  const SetDeliveryAddress=(req,res)=>{
    const newAddress=new Buyaddress({
        address:req.body.address
    })
    newAddress.save().then(data=>{
        res.json({
            status:200,
            msg:"Address successfully",
            dataAdr:dataAdr
        })
    }).catch(err=>{
        res.json({
            status:500,
            msg:"Address not Inserted",
            Error:err
        })
    })
}

const ViewAddressbyId = (req, res) => {
    const address = req.params.address;
    Buyaddress.findById(address)
      .then((Buyaddress) => {
        if (!Buyaddress) {
          return res.status(404).json({ msg: 'User not found' });
        }
        res.json(Buyaddress);
      })
      .catch((err) => res.status(500).json({ err: 'Error fetching user profile' }));
  };
  


// const ViewAllUsers = (req, res) => {
//     user.find().exec()
//     .then((user) => {
//         if (user.length > 0) {
//           res.json({
//             status: 200,
//             msg: "Data obtained successfully",
//             data: data,
//           });
//         } else {
//           res.json({
//             status: 200,
//             msg: "No Data obtained ",
//           });
//         }
//       })
//       .catch((err) => {
//         res.json({
//           status: 500,
//           msg: "Data not used",
//           Error: err,
//         });
//       });
//     }

module.exports={registerUser, loginUser, ViewAllUsers, ViewMyProfile, SetDeliveryAddress, ViewAddressbyId}
