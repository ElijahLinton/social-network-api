/* eslint-disable linebreak-style */
// eslint-disable-next-line new-cap
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtUsers = require('./thoughtRoutes');

router.use('/user', userRoutes);
router.use('/thoughts', thoughtUsers);

module.exports = router;
