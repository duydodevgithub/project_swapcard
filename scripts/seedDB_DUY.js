
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

const cardSeed = [
  {
    store: "Starbucks",
    price: 10,
    chosen: false,    
    fimage: "https://www.grovia.com/media/catalog/product/cache/2/image/650x/040ec09b1e35df139433887a97daa66f/s/t/starbucks_giftcard.png",
    email:"duydo@gmail.com",
    bimage: "https://i.colnect.net/f/1247/826/10-Jahre-Starbucks-Deutschland-6078-back.jpg",
    exp: new Date(Date.now()),
    traderEmail:"",
    expectedOwner:""
    
  },
  {
    store: "Walmart",
    price: 100,
    chosen: false,    
    email:"duydo@gmail.com",
    fimage: "http://entertainkidsonadime.com/wp-content/uploads/2016/03/IMG_49692-2.jpg",
    bimage: "https://i.colnect.net/f/2468/534/Freeloader-back.jpg",
    exp: new Date(Date.now()),
    traderEmail:"",
    expectedOwner:""
  },
  {
    store: "Macys",
    price: 10,
    chosen: false,    
    email:"duydo@gmail.com",
    fimage: "https://static2.cardlabcorp.com/Product+images/eGiftCards/Macys-GCM.jpg",
    bimage: "https://orig00.deviantart.net/9809/f/2012/165/7/8/macy__s_giftcard__back__by_ikon95-d53gi6d.png",
    exp: new Date(Date.now()),
    traderEmail:"",
    expectedOwner:""
  
  },
  {
    store: "Home Depot",
    price: 100,
    chosen: false,    
    fimage: "http://www.momfluential.net/wp-content/uploads/2013/07/home-depot-card.jpg",
    bimage: "https://i.colnect.net/f/1051/748/Happy-Birthday-back.jpg",
    email:"duydo.dev@gmail.com",
    exp: new Date(Date.now()),
    traderEmail:"",
    expectedOwner:""
  }
];


  db.Card
  .remove({})
  .then(() => db.Card.collection.insertMany(cardSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


  