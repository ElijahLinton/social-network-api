/* eslint-disable linebreak-style */
const {Thoughts, User} = require('../models');
// eslint-disable-next-line linebreak-style

module.exports = {
  getThoughts(req, res) {
    Thoughts.find()
      .then((thoughts) => json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  getoneThought(req, res) {
    Thoughts.findOne({_id: req.params.thoughtsId})
      .then((thought) =>
        !thought ?
          res.status(404).json({message: 'no such thought id exist'}) :
          res.json(thought),
      );
  },


  createThought(req, res) {
    Thoughts.create(req.body);
    then((thought) =>{
      return User.findOneAndUpdate(
        {_id: req.body.userId},
        {$addToSet: {thoughts: Thoughts._id}},
        {new: true},
      );
    }).catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  },
  updatethought(req, res) {
    Thoughts.findOneAndUpdate(
      {_id: req.params.thoughtsId},
      {$set: req.body},
      {runValidators: true, new: true},
    ) .then((video) =>
      !thought ?
        res.status(404).json({message: 'No video with this id!'}) :
        res.json(video),
    ).catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  },
};

