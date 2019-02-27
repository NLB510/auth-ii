const db = require('../dbConfig');



module.exports = {
  getUsers
}



function getUsers() {
  return db('users')
}