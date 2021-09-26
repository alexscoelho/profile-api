const { Router } = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');
const router = Router();

const {
  createProfile,
  getProfiles,
  updateProfile,
  deleteProfile,
} = require('../controllers/profile');

router.get('/', getProfiles);

router.post(
  '/',
  [
    check('name', 'You must provide a name').not().isEmpty(),
    check('phone', 'You must provide a phone number').not().isEmpty(),
    check('email', 'You must provide a valid email').isEmail(),
    validateFields,
  ],
  createProfile
);

router.put('/:id', updateProfile);

router.delete('/:id', deleteProfile);

module.exports = router;
