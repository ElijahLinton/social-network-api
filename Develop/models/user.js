/* eslint-disable linebreak-style */
const {Schema, Types} = require('mongoose');

UserSchema = new Schema(
  {
    userId: {
      // eslint-disable-next-line new-cap
      type: Schema.Types.ObjectId(),
      default: () => new Types.ObjectId(),
    },
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
  },
  {
    toJSON: {
      getters: true,
    },
    id: true,
  },
);
const User = model('user', userSchema);
module.exports = User;
