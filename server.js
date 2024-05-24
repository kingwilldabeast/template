const express = require('express')
const cors = require('cors')
const catController = require('./controllers/CatController')
const dogController = require('./controllers/DogController')
const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`)
})

app.get('/', (req,res) => {
    res.send(`working!`)
})

app.get('/cats', catController.getCats)

app.get('/cats/:id', catController.getCat)

app.get('/dogs', dogController.getDogs)

app.get('/dogs/:id', dogController.getDog)

app.get('/dogsName/:id', dogController.getDogName)

app.get('/dogsColor/:color', dogController.getDogColor)
