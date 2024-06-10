const express = require("express")
const morgan = require('morgan')
const cors = require('cors')

const app = express()


//Api Sales
const swaggerUI = require('swagger-ui-express')


//ventas
const swaggerSpec = require('./swagger')
app.use('/docs',swaggerUI.serve,swaggerUI.setup(swaggerSpec))
app.use('/sales', require('./routes/sales-routes'));


//zapatos
const swaggerSpec2 = require('./swaggerShoes')
app.use('/docsShoes',swaggerUI.serve,swaggerUI.setup(swaggerSpec2))
app.use('/shoes', require('./routes/shoes-routes'));



//usuarios
const swaggerSpec3 = require('./swaggerUsers')
app.use('/docsUsers',swaggerUI.serve,swaggerUI.setup(swaggerSpec3))
app.use('/users', require('./routes/user-routes'));



app.set("PORT", process.env.PORT || 3000);
app.listen(app.get('PORT'),()=>console.log(`Server Ready al port ${app.get('PORT')}`))

//Connect to database
require('./drivers/connect-db')

// Middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

// Routes
app.use(require('./routes/shoes-routes'))
app.use(require('./routes/user-routes'))
app.use(require('./routes/sales-routes'))