import { Router } from 'express'
import addController from '../controllers/add.controller.js'
import finishController from '../controllers/finish.controller.js'
import updateController from '../controllers/update.controller.js'
import displayController from '../controllers/display.controller.js'
import deleteController from '../controllers/delete.controller.js'
const router = Router()

router.post('/add', addController)
router.post('/finish', finishController)
router.put('/update', updateController)
router.get('/display',displayController)
router.delete('/delete',deleteController)
export default router