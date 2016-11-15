
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var AnswerSchema = new mongoose.Schema({
    answer:{
        type: String,
        required: [true, 'Answer is required'],
        minlength: [5, 'Answer must be at least 5 characters long']
    },
    support:{
        type: String
    },
    likes:{
        type: Number,
        default: 0
    },
    _user:{type: Schema.Types.ObjectId, ref: 'User'}
}, {timestamps: true})

mongoose.model('Answer', AnswerSchema);
var Answer = mongoose.model('Answer');
