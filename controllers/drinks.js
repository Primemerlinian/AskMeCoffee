import {Drink} from '../models/drink.js'

function index(req, res) {
  Drink.find({})
  .then(drinks => {
    res.render('drinks/index', {
      drinks,
      title: "🥤",
      user: req.user ? req.user : null, 
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function create(req, res) {
  req.body.owner = req.user.profile._id
  req.body.iced = !!req.body.iced
  Drink.create(req.body)
  .then(drink => {
    res.redirect('/tacos')
  })
  .catch(err => {
    console.log(err)
    res.redirect("/tacos")
  })
}

export {
  index,
  create,
}