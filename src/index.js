const express = require("express")
const morgan = require('morgan')
const cors = require('cors')

const app = express()


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