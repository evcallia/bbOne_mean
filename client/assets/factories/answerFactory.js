app.factory('answerFactory', ['$http', function($http){
    var factory = {}

    factory.addAnswer = function(answer, success, error){
        $http.post('/answers', answer).then(function(data){
            if(data.data.errors){
                error(data.data.errors);
            }else{
                success(data.data);
            }
        });
    }

    factory.like = function(answer){
        $http.get(`/answers/${answer._id}/like`).then(function(data){
            answer.likes++;
        });
    }

    // var friends = [];
    //
    // factory.getAllFriends = function(callback){
    //     $http.get('/friends').then(function(data){
    //         friends = data.data;
    //         callback(friends);
    //     })
    // }
    //
    // factory.addFriend = function(friend, callback){
    //     $http.post('/friends', friend).then(function(data){
    //         friends.push(data);
    //         callback(data)
    //     })
    // }
    //
    // factory.getFriendById = function(id, callback){
    //     $http.get(`/friends/${id}`).then(function(data){
    //         data.data[0].birthday = new Date(data.data[0].birthday);
    //         callback(data.data[0]);
    //     })
    // }
    //
    // factory.updateFriend = function(friend){
    //     $http.put(`/friends/${friend._id}`, friend)
    // }
    //
    // factory.delete = function(friend){
    //     $http.delete(`/friends/${friend._id}`);
    // }

    return factory;
}]);
