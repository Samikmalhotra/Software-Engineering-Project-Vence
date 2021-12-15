import express from 'express'
const router = express.Router()
import {getProductById, getProducts, createProduct, deleteProduct, updateProduct} from '../controllers/productController.js'
import {admin, protect} from '../middleware/authMiddleware.js'

router.route('/').post(protect, admin, createProduct)
router.route('/:shopId').get(protect, admin, getProducts)
router.route('/:id').get(protect, admin, getProductById).delete(protect, admin , deleteProduct).put(protect, admin, updateProduct)
router.route('/:id/reviews').post(protect, createProductReview)

export default router