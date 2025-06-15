require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
mongoose.set('strictQuery', true); // Corrige avisos sobre filtros de consulta
mongoose.set('debug', true);   

const app = express()

const allowedOrigins = [
    '*',
    'http://localhost:3000',
];

const corsOptions = {
  origin: function(origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200,
  allowedHeaders: ['Content-Type', 'x-api-key'] 
};

function checkApiKey(req, res, next) {

  const userKey = req.headers['x-api-key'];

  if (userKey && userKey === API_KEY) {

    next();

  } else {

    res.status(403).json({ error: 'Chave de API inválida ou ausente' });
    
  }

}

app.use(cors(corsOptions))
app.options('/api/', cors(corsOptions))
app.use(bodyParser.json())


const URI = process.env.URI
const API_KEY = process.env.API_KEY;

mongoose.connect(URI)
    .then(() => console.log('Conectado ao MongoDB com sucesso!'))
    .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

//routes
const companyRoutes = require('./routes/companyRoutes')
const inventoryRoutes = require('./routes/inventoryRoutes')
const memberRoutes = require('./routes/memberRoutes')
const productRoutes = require('./routes/productRoutes')
const trackingRoutes = require('./routes/trackingRoutes')
const vehicleRoutes = require('./routes/vehicleRoutes')

app.use('/api/company', checkApiKey, companyRoutes)
app.use('/api/inventory', checkApiKey, inventoryRoutes)
app.use('/api/members', checkApiKey, memberRoutes) //futuramente
app.use('/api/product', checkApiKey, productRoutes)
app.use('/api/tracking', checkApiKey, trackingRoutes)
app.use('/api/vehicle', checkApiKey, vehicleRoutes)
app.use('/api/auth', checkApiKey, companyRoutes) // pode deixar

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {

    res.json({message: "Rota Aberta >>>> KappSolutions"})

})

app.listen(PORT, () => {

    console.log(`Server rodando na porta: ${PORT}`)

})