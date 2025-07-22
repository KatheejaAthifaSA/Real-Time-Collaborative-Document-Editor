const mongoose = require('mongoose');

const DocumentSchema = new mongoose.Schema({
  docId: String,
  content: String
});

module.exports = mongoose.model('Document', DocumentSchema);
