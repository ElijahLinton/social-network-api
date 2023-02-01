/* eslint-disable linebreak-style */
const {Schema, Types, model} = require('mongoose');

userSchema = new Schema(
  {

    username: {
      type: String,
      required: true,
      maxlength: 50,
      minlength: 5,
    },
    accountCreated: {
      type: Date,
      required: true,
      default: Date.now,
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  },
);
const User = model('User', userSchema);
module.exports = User;
