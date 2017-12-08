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
    fullname: "Firas AlOmairi",
    email:"firas.lcc@gmail.com",
    password: "Firas123356827525",
    userCreated: new Date(Date.now()),
    // giftcard:[{
    //   store: "Walmart",
    //   price: 100,
    //   fimage: "http://entertainkidsonadime.com/wp-content/uploads/2016/03/IMG_49692-2.jpg",
    //   bimage: "https://i.colnect.net/f/2468/534/Freeloader-back.jpg",
    //   exp: new Date(Date.now()),
    //   stored:false
    // },
    //   {
    //   store: "Starbucks",
    //   price: 50,
    //   fimage: "https://www.grovia.com/media/catalog/product/cache/2/image/650x/040ec09b1e35df139433887a97daa66f/s/t/starbucks_giftcard.png",
    //   bimage: "https://i.colnect.net/f/1247/826/10-Jahre-Starbucks-Deutschland-6078-back.jpg",
    //   exp: new Date(Date.now()),
    //   stored:false
    // }
    // ]
  },
  {
    fullname: "Duy Do",
    email:"duydo@gmail.com",
    password: "12345",
    userCreated: new Date(Date.now()),
    // giftcard:[{
    //   store: "Walmart",
    //   price: 100,
    //   fimage: "http://entertainkidsonadime.com/wp-content/uploads/2016/03/IMG_49692-2.jpg",
    //   bimage: "https://i.colnect.net/f/2468/534/Freeloader-back.jpg",
    //   exp: new Date(Date.now()),
    //   stored:false
    // },
    //   {
    //   store: "Starbucks",
    //   price: 50,
    //   fimage: "https://www.grovia.com/media/catalog/product/cache/2/image/650x/040ec09b1e35df139433887a97daa66f/s/t/starbucks_giftcard.png",
    //   bimage: "https://i.colnect.net/f/1247/826/10-Jahre-Starbucks-Deutschland-6078-back.jpg",
    //   exp: new Date(Date.now()),
    //   stored:false
    // }
    // ]
  },
  {
    fullname: "Duy Do 2",
    email:"duydo2@gmail.com",
    password: "12345",
    userCreated: new Date(Date.now()),
    // giftcard:[{
    //   store: "Walmart",
    //   price: 100,
    //   fimage: "http://entertainkidsonadime.com/wp-content/uploads/2016/03/IMG_49692-2.jpg",
    //   bimage: "https://i.colnect.net/f/2468/534/Freeloader-back.jpg",
    //   exp: new Date(Date.now()),
    //   stored:false
    // },
    //   {
    //   store: "Starbucks",
    //   price: 50,
    //   fimage: "https://www.grovia.com/media/catalog/product/cache/2/image/650x/040ec09b1e35df139433887a97daa66f/s/t/starbucks_giftcard.png",
    //   bimage: "https://i.colnect.net/f/1247/826/10-Jahre-Starbucks-Deutschland-6078-back.jpg",
    //   exp: new Date(Date.now()),
    //   stored:false
    // }
    // ]
  },
  
  {
    fullname: "Dan Byers",
    email:"dan@gmail.com",
    password: "Danny54321",
    userCreated: new Date(Date.now()),
    // giftcard:[{
    //   store: "Dirt Bar",
    //   price: 100,
    //   fimage: "http://entertainkidsonadime.com/wp-content/uploads/2016/03/IMG_49692-2.jpg",
    //   bimage: "https://i.colnect.net/f/2468/534/Freeloader-back.jpg",
    //   exp: new Date(Date.now()),
    //   stored:false
    // },
    //   {
    //   store: "Starbucks",
    //   price: 150,
    //   fimage: "https://www.grovia.com/media/catalog/product/cache/2/image/650x/040ec09b1e35df139433887a97daa66f/s/t/starbucks_giftcard.png",
    //   bimage: "https://i.colnect.net/f/1247/826/10-Jahre-Starbucks-Deutschland-6078-back.jpg",
    //   exp: new Date(Date.now()),
    //   stored:false
    // }
    // ]
  }];
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