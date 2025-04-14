import { User } from "../models/user.model.js";
import bcrypt from 'bcrypt';

export const signup = async(req,res)=>{
    try {
        const {Fullname,Email,Password} = req.body;
        const user = await User.findOne({Email});
        if(user){
            return res.status(400).json({
                message:"User Already Exists"
            })
          
        }
        const hashPassword = await bcrypt.hash(Password,10);
        const createdUser = new User({
            Fullname,
            Email,
            Password : hashPassword,
        })
       await createdUser.save()
        res.status(201).json({
            message:"new user created",
            user:{
              _id:createdUser._id,
              Fullname:createdUser.Fullname,
              Email:createdUser.Email
            }
        })
    } catch (error) {
        console.log("error in user creation ",error);
        res.status(500).json({
            message:"internal server error"
        })
    }
}

// export const login = async(req,res)=>{
//     try{
//     const {Email,Password} = req.body;
//     const user = await User.find({Email});
//     const checkPassword = await bcrypt.compare(Password,user.Password)

//     if(!(user || checkPassword)){
//         return res.status(400).json({
//             message:"Invaild credentials "
//         })
//     }
//     else{
//         return res.status(200).json({
//             message:"Login Successful",
//             user:{
//                 _id: user._id,
//                 Fullname:user.Fullname,
//                 Email : user.Email
//             }
//         })
//     }
//     }catch(error){
//         console.log("error in login ",error);
//         res.status(500).json({
//             message:"Error encountered for login"
//         })
//     }
// }

export const login = async (req, res) => {
    try {
      const { Email, Password } = req.body;
  
      const user = await User.findOne({ Email }).select('+Password'); // select password explicitly if your schema hides it
  
      if (!user) {
        return res.status(400).json({
          message: "User does not exists"
        });
      }
  
      const checkPassword = await bcrypt.compare(Password, user.Password);
  
      if (!checkPassword) {
        return res.status(400).json({
          message: "Invalid credentials"
        });
      }
  
      return res.status(200).json({
        message: "Login Successful",
        user: {
          _id: user._id,
          Fullname: user.Fullname,
          Email: user.Email
        }
      });
  
    } catch (error) {
      console.log("error in login ", error);
      res.status(500).json({
        message: "Error encountered for login"
      });
    }
  };
  