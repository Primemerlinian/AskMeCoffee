import {Drink} from '../models/drink.js'

function index(req, res) {
  Drink.find({})
  .then(tacos => {
    res.render('drinks/index', {
      tacos,
      title: "🥤"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}



export {
  index 
}