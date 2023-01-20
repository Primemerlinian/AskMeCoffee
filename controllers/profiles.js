import { Profile } from "../models/profile.js";

function index(req, res) {
  Profile.find({})
    .then((profiles) => {
      res.render("profiles/index", {
        profiles,
        title: "Profiles",
      });
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/");
    });
}

function show(req, res) {
  Profile.findById(req.params.id)
    .populate("drinks")
    .then((profile) => {
      const isSelf = profile._id.equals(req.user.profile._id);
      console.log(profile);
      res.render("profiles/show", {
        title: `${profile.name}'s profile`,
        isSelf,
        profile,
      });
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/profiles");
    });
}

export { index, show };
