

const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')
const passport = require('passport')
const bodyParser = require('body-parser')
const routes=require('./routes/index')

connectDB()

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(passport.initialize())
require('./config/passport')(passport)




app.use(routes);







const PORT =3000

app.listen(PORT, console.log(`Server running in  ${PORT}`))

