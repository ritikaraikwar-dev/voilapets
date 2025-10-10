const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(

  
    {
        session_id:{
          type:String,
          required:true
        },
          id:{
            type:String,
             
          },
           title:{
            type:String,
             
           },
         price:{
            type:Number,
             
          },
          image:{
            type:String
          },
          color:{
            type:String,
             
          },
          quantity:{
            type:Number,
            default:1
          }
         
    }    
);

module.exports =   mongoose.model("User", userSchema);