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

router.route('/:videoId/responses').post(thoughtResponse);

router.route('/:videoId/responses/:responseId').post(removeResponse);

module.exports = router;
