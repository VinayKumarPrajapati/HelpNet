const express = require('express');
const router = express.Router({ mergeParams: true });

const User = require('../models/User');

router.get('/', getUser);
router.put('/', updateUser);

module.exports = router;
