const express = require("express");

const db = require("../data/helpers/usersModel");

const router = express.Router();

router.get('/', (req, res) => {

  db.getUsers()
  .then(users => {
    res.status(200).json(users)
  })
  .catch(err => {
    res.status(500).json({error: "There was an error retrieving users from the database."})
  })

})



module.exports = router;
