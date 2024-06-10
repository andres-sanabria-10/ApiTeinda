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
    
    createUser: async (req, res) => {
      try {
        const { mail, password, role } = req.body;
    
        // Establecer el valor predeterminado del rol si no se proporciona
        const defaultRole = 'Usuario';
        const userRole = role || defaultRole;
    
        const user = new User({
          mail,
          password,
          role: userRole
        });
    
        const result = await user.save();
    
        return res.status(201).json({ data: result });
      } catch (err) {
        return res.status(500).json({ err: err });
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