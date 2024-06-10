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
    
        // Verificar si el correo electrónico ya está registrado
        const existingUser = await User.findOne({ mail });
        if (existingUser) {
          return res.status(400).json({ error: 'El correo electrónico ya está registrado' });
        }
    
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
    }
  }