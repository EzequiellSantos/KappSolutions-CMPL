require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
mongoose.set('strictQuery', true); // Corrige avisos sobre filtros de consulta
mongoose.set('debug', true);   

const app = express()

const corsOptions = {
    origin: '*',
    optionsSucessStatus: 200
}

app.use(cors(corsOptions))
app.options('/api/', cors(corsOptions))
app.use(bodyParser.json())


const URI = process.env.URI

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

app.use('/api/company', companyRoutes)
app.use('/api/inventory', inventoryRoutes)
app.use('/api/members', memberRoutes)
app.use('/api/product', productRoutes)
app.use('/api/tracking', trackingRoutes)
app.use('/api/vehicle', vehicleRoutes)
app.use('/api/auth', companyRoutes)

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {

    res.json({message: "Rota Aberta >>>> KappSolutions"})

})

app.listen(PORT, () => {

    console.log(`Server rodando na porta: ${PORT}`)

})