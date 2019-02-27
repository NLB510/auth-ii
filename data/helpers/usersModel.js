const db = require('../dbConfig');



module.exports = {
  getUsers,
  findById,
  addUser
};

function findById(id) {
  return db('users')
  .where({id})
  .first();
}

function getUsers() {
  return db('users')
  .select('username', 'department')
}


function addUser(user) {
  return db('users')
  .insert(user)
  .then(([id]) => findById(id))
}