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
  thoughtResponse,
  removeResponse,
} = require('../../controllers/thoughtsController');

router.route('/').get(getThoughts).post(createThought);

router
  .route('/:thoughtId')
  .get(getOneThought)
  .put(updatethought)
  .delete(deleteThought);

router.route('/:thoughtId/reactions')
  .post(thoughtResponse);

router.route('/:thoughtId/reactions/:reactionId')
  .delete(removeResponse);

module.exports = router;
