import express from 'express'
import cors from 'cors'
import ProductRoute from './routes/ProductRoute.js'
import userRoute from './routes/UserRoute.js'
const app = express()
app.use(cors())
app.use(express.json())
app.use(ProductRoute)
app.use(userRoute)

app.listen(5000, () => console.log('Server Running => ...'))