const Shoe = require('../models/shoes-model')


module.exports = {
    getShoes : async(req,res)=>{
      try{
        const result = await Shoe.find()

        return res.status(200).json({data:result})
      }catch(err){
        return res.status(500).json({err:err})
      }
    },
    createShoe : async(req,res)=>{
      try{
        const shoe = new Shoe(req.body)
        const result = await shoe.save()
  
        return res.status(201).json({data:result})
      }catch(err){
        return res.status(500).json({err:err})
      } 
    },
    
    //nuevo
    getShoeBrand: async (req, res) => {
      try {
        const { brand } = req.params;
        const result = await Shoe.find({ Brand: brand });
    
        if (result.length === 0) {
          return res.status(404).json({ error: 'No se encontraron zapatos con esa marca' });
        }
    
        return res.status(200).json({ data: result });
      } catch (err) {
        return res.status(500).json({ error: err });
      }
    },

    //nuevo
    getShoeId: async (req, res) => {
      try{
        const {id} = req.params
        const result = await Shoe.findById(id)

        return res.status(200).json({data:result})
      }catch(err){
        return res.status(500).json({error:err})
      }
    },
    
    updateShoe : async(req,res)=>{
      try{
        const {id} = req.params
        const shoeUpdate = await Shoe.findByIdAndUpdate(id, req.body)
          
        return res.status(200).json({data:shoeUpdate})
      }catch(err){
        return res.status(500).json({error:err})
      }
    },
  
    deleteShoe : async (req,res)=>{
      try {

        const result = await Shoe.findByIdAndDelete(req.params.id)
        
        return res.status(200).json({data:result})
      } catch (error) {
        return res.status(500).json({error:error})
      }
  
    }
  }