var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new CardSchema object
// This is similar to a Sequelize model
var cardSchema = new Schema({
 
  store: {
    type: String,
    required: true
  },
 
  price: {
    type: Number, 
    required: true
  },
  email:{
    type:String,
    required:true
  },
  fimage: {
    type: String,
    required: true
  },
  bimage: {
    type: String,
    required: true
  },
  exp: {
    type: Date,
    required: true
  },
  chosen:{
    type:Boolean,
    default:false,
    required :true
  },
  // `card` is an object that stores a card id
  // The ref property links the ObjectId to the card model
  // This allows us to populate the card with an associated Note
  card: {
    type: Schema.Types.ObjectId,
    ref: "Card"
  },
  traderEmail:{
    type:String,
    default:""
  },
  expectedOwner:{
    type:String,
    default:""
  }
});

// This creates our model from the above schema, using mongoose's model method
var Card = mongoose.model("Card", cardSchema);

// Export the Article model
module.exports = Card;
