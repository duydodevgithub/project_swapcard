
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
    fimage: "https://www.grovia.com/media/catalog/product/cache/2/image/650x/040ec09b1e35df139433887a97daa66f/s/t/starbucks_giftcard.png",
    email:"duydo@gmail.com",
    bimage: "https://i.colnect.net/f/1247/826/10-Jahre-Starbucks-Deutschland-6078-back.jpg",
    exp: new Date(Date.now()),
    traderEmail:"",
    
  },
  {
    store: "Walmart",
    price: 100,
    email:"firas.lcc@gmail.com",
    fimage: "http://entertainkidsonadime.com/wp-content/uploads/2016/03/IMG_49692-2.jpg",
    bimage: "https://i.colnect.net/f/2468/534/Freeloader-back.jpg",
    exp: new Date(Date.now()),
    traderEmail:""
  },{
    store: "Macys",
    price: 200,
    email:"firas.lcc@gmail.com",
    fimage: "https://static2.cardlabcorp.com/Product+images/eGiftCards/Macys-GCM.jpg",
    bimage: "https://orig00.deviantart.net/9809/f/2012/165/7/8/macy__s_giftcard__back__by_ikon95-d53gi6d.png",
    exp: new Date(Date.now()),
    traderEmail:"",
  
  },{
    store: "Starbucks",
    price: 10000,
    chosen: false,
    fimage: "https://www.grovia.com/media/catalog/product/cache/2/image/650x/040ec09b1e35df139433887a97daa66f/s/t/starbucks_giftcard.png",
    email:"duydo@gmail.com",
    bimage: "https://i.colnect.net/f/1247/826/10-Jahre-Starbucks-Deutschland-6078-back.jpg",
    exp: new Date(Date.now()),
    traderEmail:""
    
  },{
    store: "Home Depot",
    price: 50,
    chosen: false,    
    fimage: "http://www.momfluential.net/wp-content/uploads/2013/07/home-depot-card.jpg",
    bimage: "https://i.colnect.net/f/1051/748/Happy-Birthday-back.jpg",
    email:"duydo@gmail.com",
    exp: new Date(Date.now()),
    traderEmail:""
  },
  {
    store: "Bestbuy",
    price: 50,
    fimage: "https://media.go2speed.org/brand/files/luxeads/2851/Best_Buy_300x250.jpg",
    bimage: "https://i.colnect.net/f/2385/777/BestBuy-Gift-Card-back.jpg",
    exp: new Date(Date.now()),
    traderEmail:""
  },
  {
    store: "Starbucks",
    price: 50,
    fimage: "https://www.grovia.com/media/catalog/product/cache/2/image/650x/040ec09b1e35df139433887a97daa66f/s/t/starbucks_giftcard.png",
    email:"duydo@gmail.com",
    bimage: "https://i.colnect.net/f/1247/826/10-Jahre-Starbucks-Deutschland-6078-back.jpg",
    exp: new Date(Date.now()),
    traderEmail:""
  },{
    store: "Disney",
    price: 500,
    fimage: "https://d2wgbggetablcw.cloudfront.net/giftcards/birthday-wishes.1x.jpg",
    bimage: "data:image/jpeg;base64,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",
    exp: new Date(Date.now()),
    email:"duydo@gmail.com",
    traderEmail:""
  },
  {
    store: "LA Fitness",
    price: 1000,
    fimage: "https://www.lafitness.com/GiftCard/Images/card3/lg",
    bimage: "https://s1.ticketm.net/tm/en-us/img/sys/common_new/giftcard_back.gif",
    exp: new Date(Date.now()),
    traderEmail:"",
    email:"duydo@gmail.com",
  },
  {
    store: "Walmart",
    price: 100,
    fimage: "http://entertainkidsonadime.com/wp-content/uploads/2016/03/IMG_49692-2.jpg",
    bimage: "https://i.colnect.net/f/2468/534/Freeloader-back.jpg",
    exp: new Date(Date.now()),
    traderEmail:"",
    email:"duydo@gmail.com",
  },
  {
    store: "Walmart",
    price: 100,
    fimage: "http://entertainkidsonadime.com/wp-content/uploads/2016/03/IMG_49692-2.jpg",
    bimage: "https://i.colnect.net/f/2468/534/Freeloader-back.jpg",
    exp: new Date(Date.now()),
    traderEmail:"",
    email:"duydo@gmail.com",
  },{
    store: "Macys",
    price: 200,
    fimage: "https://static2.cardlabcorp.com/Product+images/eGiftCards/Macys-GCM.jpg",
    bimage: "https://orig00.deviantart.net/9809/f/2012/165/7/8/macy__s_giftcard__back__by_ikon95-d53gi6d.png",
    exp: new Date(Date.now()),
    traderEmail:"",
    email:"duydo@gmail.com",
  },{
    store: "Starbucks",
    price: 50,
    fimage: "https://www.grovia.com/media/catalog/product/cache/2/image/650x/040ec09b1e35df139433887a97daa66f/s/t/starbucks_giftcard.png",
    bimage: "https://i.colnect.net/f/1247/826/10-Jahre-Starbucks-Deutschland-6078-back.jpg",
    exp: new Date(Date.now()),
    traderEmail:"",
    email:"duydo@gmail.com",
  },
  {
    store: "Starbucks",
    price: 50,
    fimage: "https://www.grovia.com/media/catalog/product/cache/2/image/650x/040ec09b1e35df139433887a97daa66f/s/t/starbucks_giftcard.png",
    email:"duydo@gmail.com",
    bimage: "https://i.colnect.net/f/1247/826/10-Jahre-Starbucks-Deutschland-6078-back.jpg",
    exp: new Date(Date.now()),traderEmail:""
  },
  {
    store: "Walmart",
    price: 100,
    fimage: "http://entertainkidsonadime.com/wp-content/uploads/2016/03/IMG_49692-2.jpg",
    bimage: "https://i.colnect.net/f/2468/534/Freeloader-back.jpg",
    email:"duydo@gmail.com",
    exp: new Date(Date.now()),traderEmail:""
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
