import { Router } from 'express'
import * as drinksCtrl from '../controllers/drinks.js'
import { isLoggedIn } from '../middleware/middleware.js'


const router = Router()

router.get('/', drinksCtrl.index)
router.post('/', isLoggedIn, drinksCtrl.create)
router.get('/:id', drinksCtrl.show)
router.patch('/:id/flip-iced', isLoggedIn, drinksCtrl.flipIced)
router.get('/:id/edit', isLoggedIn, drinksCtrl.edit)

export {
  router
}

