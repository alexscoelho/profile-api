const { Schema, model } = require('mongoose');

const ProviderSchema = Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

ProviderSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = model('Provider', ProviderSchema);
