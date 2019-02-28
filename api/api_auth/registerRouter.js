require("dotenv").config();

const express = require("express");
const bcrypt = require("bcryptjs");
const db = require("../../data/helpers/usersModel");
const auth = require("../../authentication/authentication");

const router = express.Router();

// const secret = process.env.JWT_SECRET

router.post("/", (req, res) => {
  const { username, password, department } = req.body;

  const user = req.body;

  console.log(user.password);

  if (!username || !password || !department) {
    return res.status(400).json({
      errorMessage: "Please provide a username, password, and department."
    });
  } else {
    // Hash user password and return user
    const hashedUser = auth.hashUser(user);

    db.addUser(hashedUser)
      .then(user => {
        // generate a token on register
        const token = auth.generateToken(user);
        res.status(201).json({
          message: "Registration Successful!",
          user,
          token
        });
      })
      .catch(err => {
        res.status(500).json({
          errorMessage: "There was an error registering to the database."
        });
      });
  }
});

module.exports = router;
