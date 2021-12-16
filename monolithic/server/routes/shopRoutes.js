import express from 'express'
const router = express.Router()
import {getShops,getShopById,updateShop, deleteShop, createShop} from '../controllers/shopControllers.js'
import {admin, protect} from '../middlewares/authMiddlewares.js'

router.route('/').get(protect, admin, getShops).post(protect, admin, createShop)
router.route('/:id').delete(protect, admin, deleteShop).get(protect, admin, getShopById).put(protect, admin, updateShop)

export default router