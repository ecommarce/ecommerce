import mongoose from "mongoose";

const  userschema = mongoose.userschema({
   name:{
      type:String,
      required: true,
     },
     email:{
      type:String,
      required: true,
     },
     password:{
      type:String,
      required: true,
     },
     phone:{
      type:Number,
      required: true,
     },
     address:{
      type:String,
      required: true,
     },
     isAdmin:{
      type:Boolean,
      required: true,
      default: false
     },

})
     
const Users = mongoose.model("user" , userschema)
  

export default Users
