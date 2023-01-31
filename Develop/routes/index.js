/* eslint-disable linebreak-style */
/* eslint-disable new-cap */
/* eslint-disable linebreak-style */
const router = require('express').Router('express');
apiRoutes = require('./api');

router.use('api', apiRoutes);

router.use((req, res) => {
  return res.send('wrong route!');
});

module.exports = router;
