import { Router } from 'express'
import * as drinksCtrl from '../controllers/drinks.js'
import { isLoggedIn } from '../middleware/middleware.js'


const router = Router()

router.get('/', drinksCtrl.index)
router.get('/:id', drinksCtrl.show)
router.get('/:id/edit', isLoggedIn, drinksCtrl.edit)
router.post('/', isLoggedIn, drinksCtrl.create)
router.patch('/:id/flip-iced', isLoggedIn, drinksCtrl.flipIced)
router.put('/:id', isLoggedIn, drinksCtrl.update)
router.delete('/:id', isLoggedIn, drinksCtrl.delete)

export {
  router
}

