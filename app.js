const express = require('express')
const numberRoutes = require('./src/routes/routeNumbers')
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')

const app = express()
//Gestion des CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content, Accept, Content-Type, Authorization")
  res.setHeader("Access-Control-Allow-Methods","GET, POST, PUT, DELETE, PATCH, OPTIONS")
  next()
})
//JSON
app.use(express.json())
//les points de terminaisons :
app.use('/api/number', numberRoutes)
//Sécurité
const limiter = rateLimit({
  windowMs: 15 *60 * 1000,
  max: 100
});
app.use(limiter);
app.use(helmet());

//On ajoute la gestion des erreurs 404
app.use(({ res }) => {
    const message = 'Impossible de trouver la ressource demandée ! Vous pouvez essayer une autre URL.'
    res.status(404).json({ message })
})

module.exports = app