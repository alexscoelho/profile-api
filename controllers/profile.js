const { response } = require('express');
const Profile = require('../models/Profile');

const createProfile = async (req, res = response) => {
  const { email, providers } = req.body;

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

const getProfiles = async (req, res = response) => {
  const profiles = await Profile.find().populate('providers', '_id');

  res.json({
    ok: true,
    profiles,
  });
};
const updateProfile = async (req, res = response) => {
  profileId = req.params.id;

  try {
    const profile = await Profile.findById(profileId);

    if (!profile) {
      return res.status(404).json({
        ok: false,
        msg: 'Profile not found with that id',
      });
    }

    updatedProfile = await Profile.findByIdAndUpdate(profileId, req.body, {
      new: true,
    });

    res.status(200).json({
      ok: true,
      profile: updatedProfile,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Please contact the administrator',
    });
  }
};
const deleteProfile = async (req, res = response) => {
  profileId = req.params.id;
  try {
    const profile = await Profile.findById(profileId);

    if (!profile) {
      return res.status(404).json({
        ok: false,
        msg: 'Profile not found with that id',
      });
    }

    console.log(profile);

    await Profile.findByIdAndDelete(profileId);

    res.status(200).json({
      ok: true,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Please contact the administrator',
    });
  }
};

module.exports = {
  getProfiles,
  createProfile,
  updateProfile,
  deleteProfile,
};
