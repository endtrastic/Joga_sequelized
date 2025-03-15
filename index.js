const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}));

// Connecting to the database
const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://arm:qwerty@localhost:3306/joga_sequelize')

sequelize
    .authenticate()
    .then(() => {
        console.log('Connected to the database')
    })
    .catch(err => {
        console.error('Unable to connect to the database because of', err)
    });

const articleRouter = require('./routes/article')
app.use('/', articleRouter)
app.use('/article', articleRouter)
app.use('/author', articleRouter)
app.use('admin/article', articleRouter)


app.listen(3005, () => {
    console.log('Server is running on http://localhost:3005')
})