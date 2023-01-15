import { Router } from "express";
import * as drinksCtrl from "../controllers/drinks.js"

const router = Router()

router.get('/', drinksCtrl.index)

export {
  router
}