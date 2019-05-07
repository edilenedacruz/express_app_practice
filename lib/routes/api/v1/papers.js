const express = require('express');
const router = express.Router();
const papersController = require('../../../controllers/papers_controller');

router.get('/', papersController.index);
router.get('/:id', papersController.show);
router.get('/:id/footnotes', papersController.footnotes);
router.post('/', papersController.create);

module.exports = router
