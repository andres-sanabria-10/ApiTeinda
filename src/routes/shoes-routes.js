const router = require('express').Router()

const {
  getShoes,
  getShoeBrand,
  getShoeId,
  createShoe,
  updateShoe,
  deleteShoe
  } = require('./../controllers/controll-shoes')



   /**
 * @swagger
 * /shoes:
 *   get:
 *     summary: Obtiene todos los zapatos
 *     responses:
 *       200:
 *         description: Éxito, devuelve la lista de zapatos
 *       500:
 *         description: Error del servidor
 */
router.get('/shoes', getShoes)


/**
 * @swagger
 * /shoesBrand/{brand}:
 *   get:
 *     summary: Obtiene zapatos por marca
 *     parameters:
 *       - in: path
 *         name: brand
 *         required: true
 *         description: Marca del zapato
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Éxito, devuelve los zapatos de la marca especificada
 *       404:
 *         description: No se encontraron zapatos con esa marca
 *       500:
 *         description: Error del servidor
 */
router.get('/shoesBrand/:brand', getShoeBrand)




/**
 * @swagger
 * /shoes/{id}:
 *   get:
 *     summary: Obtiene un zapato por su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del zapato
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Éxito, devuelve el zapato
 *       404:
 *         description: No se encontró el zapato
 *       500:
 *         description: Error del servidor
 */
router.get('/shoes/:id', getShoeId)



/**
 * @swagger
 * /shoes:
 *   post:
 *     summary: Crea un nuevo zapato
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - Brand
 *               - Model
 *               - Size
 *               - Color
 *               - Price
 *               - Stock
 *               - Image
 *             properties:
 *               Brand:
 *                 type: string
 *                 description: Marca del zapato
 *                 example: Nike
 *               Model:
 *                 type: string
 *                 description: Modelo del zapato
 *                 example: Air Max
 *               Size:
 *                 type: number
 *                 description: Talla del zapato
 *                 example: 42
 *               Color:
 *                 type: string
 *                 description: Color del zapato
 *                 example: Red
 *               Price:
 *                 type: number
 *                 description: Precio del zapato
 *                 example: 100
 *               Stock:
 *                 type: number
 *                 description: Stock del zapato
 *                 example: 50
 *               Image:
 *                 type: string
 *                 description: URL de la imagen del zapato
 *                 example: http://example.com/image.jpg
 *     responses:
 *       201:
 *         description: Zapato creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/Shoe'
 *       500:
 *         description: Error del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
router.post('/shoes', createShoe)




/**
 * @swagger
 * /shoes/{id}:
 *   put:
 *     summary: Actualiza un zapato existente por su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del zapato a actualizar
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Shoe'
 *     responses:
 *       200:
 *         description: Zapato actualizado exitosamente
 *       500:
 *         description: Error del servidor
 */
router.put('/shoes/:id', updateShoe)




/**
 * @swagger
 * /shoes/{id}:
 *   delete:
 *     summary: Elimina un zapato por su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del zapato a eliminar
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Zapato eliminado exitosamente
 *       500:
 *         description: Error del servidor
 */
router.delete('/shoes/:id', deleteShoe)




module.exports = router


/**
 * @swagger
 * components:
 *   schemas:
 *     Shoe:
 *       type: object
 *       required:
 *         - Brand
 *         - Model
 *         - Size
 *         - Color
 *         - Price
 *         - Stock
 *         - Image
 *       properties:
 *         _id:
 *           type: string
 *           description: ID del zapato (generado automáticamente)
 *           example: 550e8400-e29b-41d4-a716-446655440000
 *         Brand:
 *           type: string
 *           description: Marca del zapato
 *           example: Nike
 *         Model:
 *           type: string
 *           description: Modelo del zapato
 *           example: Air Max
 *         Size:
 *           type: number
 *           description: Talla del zapato
 *           example: 42
 *         Color:
 *           type: string
 *           description: Color del zapato
 *           example: Red
 *         Price:
 *           type: number
 *           description: Precio del zapato
 *           example: 100
 *         Stock:
 *           type: number
 *           description: Stock del zapato
 *           example: 50
 *         Image:
 *           type: string
 *           description: URL de la imagen del zapato
 *           example: http://example.com/image.jpg
 */
