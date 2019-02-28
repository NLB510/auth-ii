const express = require("express");
const bcrypt = require("bcryptjs");
const auth = require("../../authentication/authentication");
const db = require("../../data/helpers/usersModel");

const router = express.Router();

router.post("/", (req, res) => {
  const { username, password } = req.body;
  
  if (!username || !password) {
    return res.status(400).json({
      message: "Please include a username and password"
    });
  } else {
    db.findUserByName(username)
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = auth.generateToken(user);

          res.status(200).json({
            message: `Welcome ${username}!`,
            token
          });
        } else {
          res.status(401).json({
            message: "Invalid Credentials"
          });
        }
      })
      .catch(err => {
        res.status(500).json({
          errorMessage: "There was an error logging in"
        });
      });
  }
});

module.exports = router;
