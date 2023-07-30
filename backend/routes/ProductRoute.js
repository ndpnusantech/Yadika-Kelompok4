import express from 'express'
import { createProduct, deleteProduct, getProduct, getProductById, updateProduct } from '../controllers/ProductController.js'
import { createCategory, getProductsByCategory } from '../controllers/CategoryController.js'

const router = express.Router()

router.get('/product', getProduct)
router.get('/product/:id', getProductById)
router.post('/product', createProduct)
router.patch('/product/:id', updateProduct)
router.delete('/product/:id', deleteProduct)

router.get('/product/category/:category', getProductsByCategory) 
router.post('/product/category', createCategory) 

export default router