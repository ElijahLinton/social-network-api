/* eslint-disable linebreak-style */
const {Schema, model} = require('mongoose');


const ThoughtsSchema = new Schema({

  thoughtsText: {
    type: String,
    required: true,
    maxlength: 50,
    minlength: 4,
  },
  username: {
    type: String,
    required: true,
  },
  DateCreated: {
    type: Date,
    default: Date.now,
  },
},
{
  toJSON: {
    virtuals: true,
    getters: true,
  },
  id: false,
},
);

const Thoughts = model('Thoughts', ThoughtsSchema);

module.exports = Thoughts;
