require('dotenv').config();
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs')



module.exports = {
  authenticate,
  generateToken,
  hashUser
};

const secret = process.env.JWT_SECRET || "Is it safe";

function hashUser(user) {
  const hash = bcrypt.hashSync(user.password, 12);
  user.password = hash;

  return user

}

function authenticate(req, res, next) {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: "Unverified User" });
      } else {
        req.decodedJwt = decodedToken;
        next();
      }
    });
  } else {
    res.status(401).json({
      message: "You shall not pass"
    });
  }
}

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    department: user.department
  };

  const options = {
    expiresIn: "1d"
  };

  return jwt.sign(payload, secret, options);
}
