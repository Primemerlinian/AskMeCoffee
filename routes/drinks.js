import { Router } from 'express'
import * as drinksCtrl from '../controllers/drinks.js'
import { isLoggedIn } from '../middleware/middleware.js'


const router = Router()

router.get('/', drinksCtrl.index)
router.get('/:id', drinksCtrl.show)
router.get('/:id/edit', isLoggedIn, drinksCtrl.edit)
router.get('/:id', drinksCtrl.show)
router.get(
	'/:drinkId/comments/:commentId/edit', 
	isLoggedIn, 
	drinksCtrl.editComment
)
router.post('/', isLoggedIn, drinksCtrl.create)
router.post('/:id/comments', isLoggedIn, drinksCtrl.addComment)
router.patch('/:id/flip-iced', isLoggedIn, drinksCtrl.flipIced)
router.put('/:id', isLoggedIn, drinksCtrl.update)
router.put('/:drinkId/comments/:commentId', isLoggedIn, drinksCtrl.updateComment)
router.delete('/:id', isLoggedIn, drinksCtrl.delete)

export {
  router
}

