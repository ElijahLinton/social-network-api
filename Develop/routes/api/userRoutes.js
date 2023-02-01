/* eslint-disable linebreak-style */
/* eslint-disable new-cap */
/* eslint-disable linebreak-style */
const router = require('express').Router();

const {
  findUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../../controllers/userControllers');

router.route('/').get(findUsers).post(createUser);


router.route('/:userId')
  .get(getOneUser)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
