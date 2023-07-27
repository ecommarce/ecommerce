import users from "../models/userModes.js";
import generateToken from "../utils/generateToken.js";

  

  export const register = async(req , res)=>{
    const{name,email,password,address,phone,}= req.body;
    
      const userExists = users.findOne({email})
      if(userExists){
        res.status(400).json({message:'user already exists'})
      }
    


    const user  = users.create({   
        name,email,password,address,phone,
    })

    if(user){
        res.status(201).json({  
            _id:user._id,
            name:user.name,
            email:user.email, 
            password:user.password,
            phone:user.phone,
            address:user.address,
            token:generateToken(user._id)
        })
    }
else{
    res.status(401).json({message:'invalid User Data'});
}
  }

  export const login = async( req, res)=>{
    const{ email, password} = req.body;

    const user = user.findOne({email});
    if(user && password == user.password){
        res.status(200).json({
            _id:user._id,
            name:user.name, 
            email:user.email,
            password:user.password,  
            phone:user.phone,
            address:user.address,
            token:generateToken(user._id)
        })
    }else{
        res.status(404).json({message:'invalid Email or password'});
    }

  }