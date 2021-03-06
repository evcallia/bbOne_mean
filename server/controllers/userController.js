
var mongoose = require('mongoose');
var User = mongoose.model("User");

function UserController() {
    this.login = function(req, res) {
        User.findOne({name: req.body.name}, function(err, user){
            if(err){console.log(err);}
            if(user){
                // console.log('user found and returned');
                return res.json(user);
            }else{
                // console.log('create users', req.body);
                var user = new User(req.body);
                user.save(function(err){
                    if(err){
                        console.log('******** validation errors:', err);
                        return res.json(err);
                    }else{
                        return res.json(user);
                    }
                });
            }
        })
    };
    // this.index = function(req, res) {
    //     User.find({}, function(err, users){
    //         if(err){console.log(err);}
    //         return res.json(users);
    //     })
    // };
    // this.create = function(req, res) {
    //     var user = new User(req.body);
    //     user.save();
    //     res.json(user);
    // };
    // this.update = function(req, res) {
    //     User.update({_id: req.params.id}, req.body, function(err){
    //         if(err){console.log(err);}
    //         res.json();
    //     })
    // };
    // this.delete = function(req, res) {
    //     User.remove({_id: req.params.id}, function(err){
    //         if(err){console.log(err);}
    //         res.json();
    //     });
    // };
    // this.show = function(req, res) {
    //     User.find({_id: req.params.id}, function(err, user){
    //         if(err){console.log(err);}
    //         res.json(user);
    //     })
    // };
}

module.exports = new UserController();
