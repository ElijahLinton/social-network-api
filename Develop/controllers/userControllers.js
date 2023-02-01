/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable operator-linebreak */
/* eslint-disable linebreak-style */
const User = require('../models/User');

module.exports = {
  findUsers(req, res) {
    User.find()
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  getOneUser(req, res) {
    User.findOne({_id: req.params.userId})
      .populate("thoughts")
      .populate("friends")
      .select('-__V')
      .then((user) =>
        !user
          // eslint-disable-next-line operator-linebreak
          ? res.status(404).json({message: 'no such user exist!'})
          : res.json(user),
      )
      .catch((err) => res.status(500).json(err));
  },
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },


  updateUser(req, res) {
    User.findOneAndUpdate(
      {_id: req.params.usereId},
      {$set: req.body},
      {runValidators: true, new: true},
    )
      .then((user) =>
        !User
          ? res.status(404)
            .json({message: 'No such thoughts exist....try again?'})
          : res.json(user),
      )
      .catch((err) => res.status(500).json(err));
  },

  deleteUser(req, res) {
    User.findOneAndDelete({_id: req.params.UserId})
      .then((user) =>
        !user
          ? res.status(404)
            .json({message: 'No such thoughts exist....try again?'})
          : User.deleteMany({_id: {$in: user.thoughts}}),
      )
      .then(() => res.json({message: "User and Thought deleted!"}))
      .catch((err) => res.status(500).json(err));
  },

};
