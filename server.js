const express = require('express')
const logger = require('morgan')
const connectDB = require('./config/db')
const bodyParser = require('body-parser')
const cors = require('cors')
// Config dotev
require('dotenv').config({
    path: './config/config.env'
})


const app = express()



// Connect to database
connectDB();

// body parser
app.use(bodyParser.json())
// Load routes
const authRouter = require('./routes/auth.route')
const postRouter = require('./routes/posts.route')
const userRouter = require('./routes/user.route')

// Dev Logginf Middleware

    app.use(cors())


// Use Routes
app.use('/api', authRouter)
app.use('/api', postRouter)
app.use('/api', userRouter)

app.use(logger('dev'))
app.use((req, res) => {
    res.status(404).json({
        success: false,
        msg: "Page not founded"
    })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});