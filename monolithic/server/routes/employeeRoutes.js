import express from 'express'
const router = express.Router()
import {createEmployee, deleteEmployee, getEmployees} from '../controllers/employeeContollers.js'
import {admin, protect} from '../middlewares/authMiddlewares.js'

router.route('/').post(protect, admin, createEmployee)
router.route('/:shopId').get(protect, admin, getEmployees)
router.route('/emp/:id').delete(protect, admin , deleteEmployee)
export default router