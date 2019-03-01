const db = require("../dbConfig");

module.exports = {
  getUsers,
  findById,
  addUser,
  findUserByName
};

function findById(id) {
  return db("users")
    .select("username", "department")
    .where({ id })
    .first();
}

function getUsers() {
  return db("users").select("username", "department");
}

function addUser(user) {
  return db("users")
    .insert(user)
    .then(([id]) => findById(id));
}


function findUserByName(username) {
  return db('users')
  .where("username", username)
  .first()
}