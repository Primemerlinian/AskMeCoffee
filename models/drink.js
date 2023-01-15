import mongoose from "mongoose";

const Schema = mongoose.Schema

const drinkSchema = new Schema({
  size: String,
  drinkBase: String, 
  sweetnessRating: Number,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
},{
  timestamps: true
})

const Drink = mongoose.model('Drink', drinkSchema)

export {
  Drink
}