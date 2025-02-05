const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the sequalized application.'})
})

app.listen(3005, () => {
    console.log('Server is running on http://localhost:3005')
})