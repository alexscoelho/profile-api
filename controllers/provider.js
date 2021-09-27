const { response } = require('express');
const Provider = require('../models/Provider');

const createProvider = async (req, res = response) => {
  const { name } = req.body;

  try {
    let provider = await Provider.findOne({ name });

    if (provider) {
      return res.status(400).json({
        ok: false,
        msg: 'This name is already in use',
      });
    }

    provider = new Provider(req.body);

    await provider.save();

    return res.status(201).json({
      ok: true,
      uid: provider.id,
      name: provider.name,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: 'Please contact the administrator',
    });
  }
};

const getProviders = async (req, res = response) => {
  const providers = await Provider.find();

  res.json({
    ok: true,
    providers,
  });
};

module.exports = {
  createProvider,
  getProviders,
};
