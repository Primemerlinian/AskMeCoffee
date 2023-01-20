import mongoose from "mongoose";

const Schema = mongoose.Schema;

const profileSchema = new Schema(
  {
    name: String,
    avatar: String,
    drinks: [
      {
        type: Schema.Types.ObjectId,
        ref: "Drink",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Profile = mongoose.model("Profile", profileSchema);

export { Profile };
