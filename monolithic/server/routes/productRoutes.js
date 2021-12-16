import express from 'express'
const router = express.Router()
import {getProductById, getProducts, createProduct, deleteProduct, updateProduct} from '../controllers/productControllers.js'
import {admin, protect} from '../middlewares/authMiddlewares.js'

router.route('/').post(protect, admin, createProduct)
router.route('/:shopId').get(protect, admin, getProducts)
router.route('/:id').get(protect, admin, getProductById).delete(protect, admin , deleteProduct).put(protect, admin, updateProduct)

export default router