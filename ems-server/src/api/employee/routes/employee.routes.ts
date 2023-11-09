import { Router } from "express";
import { findAll, findOne, update, remove, create } from './../controllers/employee.controllers'
import { authenticated } from "../../../middleware/auth.middleware";
const router = Router()

router.get('/', authenticated, findAll)
router.get('/:id', authenticated, findOne)
router.post('/', authenticated, create)
router.put('/:id', authenticated, update)
router.delete('/:id', authenticated, remove)

export default router