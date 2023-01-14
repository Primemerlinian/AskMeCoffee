import mongoose from "mongoose";

const schema = mongoose.schema

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