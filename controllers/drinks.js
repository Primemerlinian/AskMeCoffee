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
    res.redirect('/drinks')
  })
  .catch(err => {
    console.log(err)
    res.redirect("/drinks")
  })
}

function show(req,res) {
  Drink.findById(req.params.id)
  .populate("owner")
  .then(drink => {
    res.render('drinks/show', {
      drink,
      title: "🥤 show "
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/drinks")
  })
}

function flipIced(req, res) {
  Drink.findById(req.params.id)
  .then(drink => {
    drink.iced = !drink.iced
    drink.save()
    .then(() => {
      res.redirect(`/drinks/${drink._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/drinks")
  })
}

function edit(req, res) {
  Drink.findById(req.params.id)
  .then(drink => {
    res.render('drinks/edit', {
      drink,
      title: "Edit ✎"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/drinks")
  })
}

function update(req, res) {
  Drink.findById(req.params.id)
  .then(drink => {
    if (drink.owner.equals(req.user.profile._id)) {
      req.body.iced = !!req.body.iced
      drink.updateOne(req.body)
      .then(()=> {
        res.redirect(`/drinks/${drink._id}`)
      })
    } else {
      throw new Error('🚫 Not authorized 🚫')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/drinks`)
  })
}

export {
  index,
  create,
  show,
  flipIced,
  edit,
  update, 
}