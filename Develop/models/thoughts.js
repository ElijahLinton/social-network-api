/* eslint-disable linebreak-style */
const {Schema, Types, model} = require('mongoose');


const ThoughtsSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  thoughtsText: {
    type: String,
    required: true,
    maxlength: 50,
    minlength: 4,
  },
  byUser: {
    type: String,
    required: true,
    maxlength: 20,
  },
  DateCreated: {
    type: Date,
    default: Date.now,
  },
},
{
  toJSON: {
    getters: true,
  },
  id: true,
},
);

const Thoughts = model('Thoughts', ThoughtsSchema);

module.exports = Thoughts;
