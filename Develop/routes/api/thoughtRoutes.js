/* eslint-disable linebreak-style */
/* eslint-disable new-cap */
/* eslint-disable linebreak-style */
const router = require('express').Router();

const {
  getThoughts,
  getOneThought,
  createThought,
  updatethought,
  deleteThought,

} = require('../../controllers/thoughtsController');

router.route('/').get(getThoughts).post(createThought);

router
  .route('/:thoughtId')
  .get(getOneThought)
  .put(updatethought)
  .delete(deleteThought);

module.exports = router;
