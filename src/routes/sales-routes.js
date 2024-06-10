const router = require('express').Router()

const {
  getSales,
  getSale,
  createSale
  } = require('./../controllers/controll-sales')



/**
 * @swagger
 * /sales:
 *   get:
 *     summary: Obtener todas las ventas
 *     description: Obtiene todas las ventas de la base de datos.
 *     responses:
 *       200:
 *         description: Se obtuvieron las ventas exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Sale'
 *       500:
 *         description: Error interno del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
router.get('/sales', getSales)




/**
 * @swagger
 * /sales/{userId}:
 *   get:
 *     summary: Obtener una venta por ID de usuario
 *     description: Obtiene una venta específica según el ID de usuario proporcionado.
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID del usuario para buscar la venta.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Venta encontrada.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/Sale'
 *       404:
 *         description: No se encontró ninguna venta para el usuario especificado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *       500:
 *         description: Error interno del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
router.get('/sales/:userId', getSale)



/**
 * @swagger
 * /sales:
 *   post:
 *     summary: Crear una nueva venta
 *     description: Crea una nueva venta en la base de datos.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 description: ID del usuario que realiza la venta.
 *               shoes:
 *                 type: array
 *                 description: Lista de zapatos para la venta.
 *                 items:
 *                   type: object
 *                   properties:
 *                     shoeId:
 *                       type: string
 *                       description: ID del zapato.
 *                     quantity:
 *                       type: number
 *                       description: Cantidad de este zapato vendido.
 *     responses:
 *       201:
 *         description: Venta creada exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/Sale'
 *       400:
 *         description: Datos de entrada inválidos o insuficientes.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *       404:
 *         description: El usuario especificado no fue encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *       500:
 *         description: Error interno del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
router.post('/sales', createSale)



module.exports = router



/**
 * @swagger
 * components:
 *   schemas:
 *     Sale:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: ID de la venta.
 *         userId:
 *           type: string
 *           description: ID del usuario que realizó la venta.
 *         shoes:
 *           type: array
 *           description: Lista de zapatos vendidos.
 *           items:
 *             type: object
 *             properties:
 *               shoeId:
 *                 type: string
 *                 description: ID del zapato vendido.
 *               quantity:
 *                 type: number
 *                 description: Cantidad de este zapato vendido.
 *         totalPrice:
 *           type: number
 *           description: Precio total de la venta.
 *         Date:
 *           type: string
 *           description: Fecha y hora de la venta en formato 'DD/MM/YYYY HH:mm'.
 */
