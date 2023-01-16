import { Router } from 'express'
import * as drinksCtrl from '../controllers/drinks.js'
import { isLoggedIn } from '../middleware/middleware.js'


const router = Router()

router.get('/', drinksCtrl.index)
router.post('/', isLoggedIn, drinksCtrl.create)
router.get('/:id', drinksCtrl.show)

export {
  router
}

