const express = require("express"),
  db = require("../data/helpers/usersModel"),
  auth = require("../authentication/authentication"),
  router = express.Router();

router.get("/", auth.restricted, (req, res) => {
  db.getUsers()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res
        .status(500)
        .json({
          error: "There was an error retrieving users from the database."
        });
    });
});

module.exports = router;
