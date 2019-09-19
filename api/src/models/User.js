const mongoose = require('mongoose');

module.exports = mongoose.model('User', {
    name: String,
    discordID: String,
    steamID: String
});