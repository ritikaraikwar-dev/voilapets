const User = require('../models/User');

const addCart = async(req, res)=>{
    try{
 
 
    const sessionId = req.sessionID;

        const{id, title, price, image, color} =   req.body;

         if (!sessionId) {
      return res.status(400).json({ message: "Session ID missing" });
    }
             
        const data = await User.create({id, title, price, image, color , session_id:sessionId});

        res.status(201).json({
            message:"data send successfully",
            userData:data
        })
    }
    catch(error){
          res.status(500).json({
            message:error.message
            
          })
    }
}

module.exports = addCart;