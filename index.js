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

// Initialze simple route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the sequalized application.'})
})

app.listen(3005, () => {
    console.log('Server is running on http://localhost:3005')
})