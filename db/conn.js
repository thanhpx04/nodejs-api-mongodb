
// const { MongoClient } = require("mongodb");
const mongoose = require('mongoose');
const connectionString = process.env.ATLAS_URI;
// const client = new MongoClient(connectionString, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

let dbConnection;

module.exports = {
  connectToServer: function (callback) {
    // Implement Database connection
    mongoose.connect(connectionString, {
      useNewUrlParser: true
    }, (err, db) => {
      if (err || !db) {
        return callback(err);
      }

      // dbConnection = db.db("sample_airbnb");
      console.log("Connected to MongoDB.");

      return callback();
    });
  },

  getDb: function () {
    return dbConnection;
  },
};
