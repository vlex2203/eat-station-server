const mongoose = require('mongoose');
const { Schema } = mongoose;

const ListSchema = new Schema({
  id: Number,
  name: String
});


mongoose.model('lists', ListSchema);
