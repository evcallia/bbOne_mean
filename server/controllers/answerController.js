
var mongoose = require('mongoose');
var Answer = mongoose.model("Answer");
var Question = mongoose.model("Question");

function AnswerController() {
    this.addAnswer = function(req, res) {
        Question.findOne({_id: req.body._question}, function(err, question){
            var answer = new Answer(req.body);
            answer.save(function(err){
                if(err){return res.json(err)}
                question.answers.push(answer);
                question.save();
                return res.json(answer);
            });
        });
    };
    this.like = function(req, res) {
        Answer.findOne({_id: req.params.id}, function(err, answer) {
            if(err){console.log(err);}
            answer.likes++;
            answer.save(function(err){
                if(err){console.log(err);}
                return res.json(answer);
            });
        })
    };
}

module.exports = new AnswerController();
