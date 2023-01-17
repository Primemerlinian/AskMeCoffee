import mongoose from "mongoose";

const Schema = mongoose.Schema

// const commentSchema = new Schema({
//   content: String,
//   commenter: { Type: Schema.Types.ObjectId, ref: "Profile"},
// })

const drinkSchema = new Schema({
  name: String,
  drinkBase: String, 
  sweetnessRating: Number,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
  iced: Boolean,
  // comments: [commentSchema],

},{
  timestamps: true
})

const Drink = mongoose.model('Drink', drinkSchema)

export {
  Drink
}