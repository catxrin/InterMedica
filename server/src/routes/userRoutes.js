const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.getAll);
router.get('/:userId', userController.getUser);

module.exports = router;
