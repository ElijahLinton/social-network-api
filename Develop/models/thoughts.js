/* eslint-disable linebreak-style */
const {Schema, Types} = require('mongoose');
const UserSchema = require('./user');

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
  byUser: [UserSchema],
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
