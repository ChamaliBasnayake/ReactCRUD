const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Person = new Schema({
  name: {
    type: String
  },
  phone: {
    type: Number
  },
  address: {
    type: String
  }
},{
    collection: 'person'
});

module.exports = mongoose.model('Person', Person);