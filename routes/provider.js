const { Router } = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');
const router = Router();

const { createProvider, getProviders } = require('../controllers/provider');

router.get('/', getProviders);

router.post(
  '/',
  [check('name', 'You must provide a name').not().isEmpty(), validateFields],
  createProvider
);

module.exports = router;
