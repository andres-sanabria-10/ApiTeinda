const User = require('../models/user-model')


module.exports = {
    getUsers : async(req,res)=>{
      try{
        const result = await User.find()

        return res.status(200).json({data:result})
      }catch(err){
        return res.status(500).json({err:err})
      }
    },
    createUser : async(req,res)=>{
      try{
        const user = new User(req.body)
        const result = await user.save()
  
        return res.status(201).json({data:result})
      }catch(err){
        return res.status(500).json({err:err})
      } 
    },
    getUser : async( req,res )=>{
      try{
        const {id} = req.params
        const result = await User.findById(id)
  
        return res.status(200).json({data:result})
      }catch(err){
        return res.status(500).json({error:err})
      }
    },
    updateUser : async(req,res)=>{
      try{
        const {id} = req.params
        const userUpdate = await User.findByIdAndUpdate(id, req.body)
          
        return res.status(200).json({data:userUpdate})
      }catch(err){
        return res.status(500).json({error:err})
      }
    },
  
    deleteUser : async (req,res)=>{
      try {

        const result = await User.findByIdAndDelete(req.params.id)
        
        return res.status(200).json({data:result})
      } catch (error) {
        return res.status(500).json({error:error})
      }
  
    }
  }