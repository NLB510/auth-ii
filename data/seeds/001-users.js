exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "usertestone",
          password: "password",
          department: "PM"
        },
        {
          username: "usertesttwo",
          password: "password",
          department: "Instructor"
        }
      ]);
    });
};
