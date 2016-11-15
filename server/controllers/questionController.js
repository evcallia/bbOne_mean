
var mongoose = require('mongoose');
var Question = mongoose.model("Question");

function QuestionController() {
    this.showAll = function(req, res) {
        Question.find({}, function(err, questions){
            if(err){console.log(err);}
            return res.json(questions);
        })
    };
    this.addQuestion = function(req, res) {
        var question = new Question(req.body);
        question.save(function(err){
            if(err){return res.json(err)}
            return res.json(question);
        });
    };
    this.showOne = function(req, res) {
        Question.findOne({_id: req.params.id})
        .populate({
            path: 'answers',
            model: 'Answer',
            populate:{
                path: '_user',
                model: 'User'
            }
        })
        .exec(function(err, question){
            if(err){console.log(err);}
            return res.json(question);
        })
    };
}

module.exports = new QuestionController();
