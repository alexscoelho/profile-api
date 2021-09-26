const { response } = require('express');
const Profile = require('../models/Profile');

const createProfile = async (req, res = response) => {
  const { email } = req.body;

  try {
    let profile = await Profile.findOne({ email });

    if (profile) {
      return res.status(400).json({
        ok: false,
        msg: 'This email is already in use',
      });
    }

    profile = new Profile(req.body);

    await profile.save();

    return res.status(201).json({
      ok: true,
      uid: profile.id,
      name: profile.name,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: 'Please contact the administrator',
    });
  }
};

module.exports = {
  createProfile,
};
