const Sale = require('../models/sales-model')
const Shoes = require('../models/shoes-model')
const User = require('../models/user-model')
const dayjs = require('dayjs')

module.exports = {
    getSales: async (req, res) => {
      try {
        // Usar populate dentro de shoes.shoeId para expandir completamente los zapatos
        const sales = await Sale.find().populate('shoes.shoeId');

        const formattedSales = sales.map(sale => {
          return {
            ...sale.toObject(), // Usar toObject para convertir el documento a un objeto
            Date: dayjs(sale.Date).format('DD/MM/YYYY HH:mm')
          };
        });

        return res.status(200).json({ data: formattedSales });
      } catch (err) {
        return res.status(500).json({ error: err.message });
      }
    },

    createSale: async (req, res) => {
      try {
        const { userId, shoes } = req.body;
  
        // Validar que el usuario existe
        const user = await User.findById(userId);
        if (!user) {
          return res.status(404).json({ error: 'Usuario no encontrado' });
        }
  
        // Validar si todas las IDs de zapatos existen
        const shoeIds = shoes.map(shoe => shoe.shoeId);
        const shoesDocs = await Shoes.find({ _id: { $in: shoeIds } });
  
        if (shoesDocs.length !== shoeIds.length) {
          return res.status(400).json({ error: 'Uno o más zapatos no existen en la base de datos' });
        }
  
        // Calcular el precio total sumando los precios de cada zapato
        const totalPrice = shoes.reduce((total, shoe) => {
          const shoeDoc = shoesDocs.find(doc => doc._id.toString() === shoe.shoeId.toString());
          return total + shoeDoc.Price * shoe.quantity;
        }, 0);
  
        // Crear y guardar la venta
        const sale = new Sale({
          userId,
          shoes,
          totalPrice
        });
        const result = await sale.save();
  
        return res.status(201).json({ data: result });
      } catch (err) {
        return res.status(500).json({ error: err.message });
      }
    },

    getSale: async (req, res) => {
      try {
        const { id } = req.params;
        const sale = await Sale.findById(id);
    
        const formattedSale = {
          ...sale._doc,
          Date: dayjs(sale.Date).format('DD/MM/YYYY HH:mm')
        };
    
        return res.status(200).json({ data: formattedSale });
      } catch (err) {
        return res.status(500).json({ error: err });
      }
    },
    
    updateSale : async(req,res)=>{
      try{
        const {id} = req.params
        const saleUpdate = await Sale.findByIdAndUpdate(id, req.body)
          
        return res.status(200).json({data:saleUpdate})
      }catch(err){
        return res.status(500).json({error:err})
      }
    },
  
    deleteSale : async (req,res)=>{
      try {

        const result = await Sale.findByIdAndDelete(req.params.id)
        
        return res.status(200).json({data:result})
      } catch (error) {
        return res.status(500).json({error:error})
      }
  
    }
  }