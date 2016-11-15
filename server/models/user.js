
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Name is required'] }
}, {timestamps: true})

mongoose.model('User', UserSchema);
var User = mongoose.model('User');
