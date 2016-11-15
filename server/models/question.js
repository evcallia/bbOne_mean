
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var QuestionSchema = new mongoose.Schema({
    question:{
        type: String,
        required: [true, 'Question is required'],
        minlength: [10, 'Question must be at least 10 characters long']
    },
    description:{
        type: String
    },
    answers:[{type: Schema.Types.ObjectId, ref: 'Answer', default: []}]
}, {timestamps: true})

mongoose.model('Question', QuestionSchema);
var Question = mongoose.model('Question');
