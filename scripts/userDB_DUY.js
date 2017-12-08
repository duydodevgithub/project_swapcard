const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Cards collection and inserts the cards below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/sedlab",
  {
    useMongoClient: true
  }
);

const UserSeed = [
  {
    fullname: "Walter",
    email:"duydo@gmail.com",
    password: "12345",
    userCreated: new Date(Date.now()),
  },
  {
    fullname: "Shelock Homes",
    email:"duydo.dev@gmail.com",
    password: "12345",
    userCreated: new Date(Date.now()),
  },
  {
    fullname: "Duy Do 2",
    email:"duydo2@gmail.com",
    password: "12345",
    userCreated: new Date(Date.now()),
  }
  ];

  
  
    db.User
    .remove({})
    .then(() => db.User.collection.insertMany(UserSeed))
    .then(data => {
      console.log(data.insertedIds.length + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
  

