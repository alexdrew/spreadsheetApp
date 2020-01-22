/* eslint-disable no-console */
const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://alex:sbRzqC0E9jfbgoHU@cluster0-4nsbn.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'awww_sheeet',
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const sheetSchema = new Schema({
  type: Array,
});

const workbookSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  data: {
    type: Array,
    required: true,
  },
});

const User = mongoose.model('user', userSchema);
const Workbook = mongoose.model('workbook', workbookSchema);

module.exports = {
  User,
  Workbook,
};
