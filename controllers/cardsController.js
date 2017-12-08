
const db = require("../models");
const notifyEmail = require("./email.js");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    // console.log("From controller findall: " + req.params.email)
    db.Card
      .find({'email':{$ne: req.params.email}})
      .sort({ date: -1 })
      // .then(dbModel => res.json(dbModel))
      .then(dbModel => res.send(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Card
    .findById(req.params.id)
    .then(dbModel => res.send(dbModel))
    .catch(err => res.status(422).json(err));
  },
  notify: function(req, res) {
    notifyEmail(req.params.email);
    // console.log(req.params);
    db.Card
    .findOneAndUpdate({ _id: req.params.id }, {chosen: true, traderEmail: req.params.traderEmail} )
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
    // console.log(req.params.email);
  },
  getUserProfile: function(req, res) {
    db.User
    .find({email:req.params.email})
    .then(dbUserProfile => {     
      // console.log(dbUserProfile);
      res.send(dbUserProfile[0]);
      })
    .catch(err => res.status(422).json(err));
  },
  findByEmail: function(req, res) {
    // console.log("from controller:" + req.params.email)
    db.Card
    .find({$and: [{'email':req.params.email},{'chosen' : false}]})
    .then(cards => {
      // console.log(cards);
      res.send(cards);
      })
    .catch(err => res.status(422).json(err));
    
  },
  addNewCard: function(req,res) {
    // console.log(req.params);
    let data = {
      store: req.params.store,
      price: req.params.price,
      chosen: false,    
      fimage: req.params.fimage,
      email: req.params.email,
      bimage: req.params.bimage,
      exp: new Date(Date.now()),
      traderEmail:"",
      expectedOwner:""
    }
    db.Card
    .collection.insertOne(data)
    .then(card => {
      res.send(card);
      })
    .catch(err => res.status(422).json(err));
  },
  getTradeCards: function(req, res) {
    db.Card
    .find({$and: [{'email':req.params.email},{'chosen' : true}]})
    .then(card => {
      res.send(card);
      })
    .catch(err => res.status(422).json(err));
  },
  cancelTradeCard: function(req, res) {
    db.Card
    .findOneAndUpdate({ _id: req.params.id }, {chosen: false} )
    .then(card => {
      res.send(card);
      })
    .catch(err => res.status(422).json(err));

    db.Card
    .findOneAndUpdate({ _id: req.params.id2 }, {expectedOwner: ""} )
    .then(card => {
      res.send(card);
      })
    .catch(err => res.status(422).json(err));
  },
  getCardsSamePrice: function(req, res) {
    db.Card
    .find({$and: [{'email':req.params.email},{'price' : req.params.price}]})
    .then(card => {
      res.send(card);
      })
    .catch(err => res.status(422).json(err));
  },
  removeCard: function(req, res) {
    // console.log(req.params)    
    db.Card
    .remove({_id: req.params.id})
    .then(card => {
      res.send(card);
      })
    .catch(err => res.status(422).json(err));
  },
  acceptTrade: function(req, res) {
    // console.log(req.params);
    db.Card
    .findOneAndUpdate({ _id: req.params.id }, {chosen: false, email: req.params.traderEmail, traderEmail: "", expectedOwner: ""} )
    .then(card => {
      res.send(card);
      })
    .catch(err => res.status(422).json(err));

    db.Card
    .findOneAndUpdate({ _id: req.params.id2 }, {chosen: false, email: req.params.email, traderEmail: "", expectedOwner: ""} )
    .then(card => {
      res.send(card);
      })
    .catch(err => res.status(422).json(err));
  },
  ownerGet: function(req, res) {
    // console.log(req.params);
    db.Card
    .findOneAndUpdate({_id: req.params.id}, {expectedOwner: req.params.ownerEmail})
    .then(card => {
      res.send(card);
      })
    .catch(err => res.status(422).json(err));
  },
  getOtherCard: function(req, res) {
    // console.log(req.params);
    db.Card
    .find({expectedOwner: req.params.email})
    .then(card => {
      res.send(card);
      })
    .catch(err => res.status(422).json(err));
  }
}
