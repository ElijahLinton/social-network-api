/* eslint-disable linebreak-style */
/* eslint-disable new-cap */
/* eslint-disable linebreak-style */
const router = require('express').Router();
const {
  findUsers,
  getOneUser,
  newUser,
} = require('../../controllers/userControllers');

router.route('/:userId').get(findUsers).post(newUser);

router.route('/:userId').get(getOneUser);

module.exports = router;
