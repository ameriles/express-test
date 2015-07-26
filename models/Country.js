var mongoose = require('mongoose');

var CountrySchema = new mongoose.Schema({
   name: String,
   lang: String,
   updated_at: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Country', CountrySchema);