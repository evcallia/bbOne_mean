app.factory('userFactory', ['$http', function($http){
    var factory = {}
    var user;

    factory.login = function(lUser, success, error){
        $http.post('/users', lUser).then(function(data){
            if(data.data.errors){
                error(data.data.errors);
            }else{
                user = data.data;
                success(user);
            }
        });
    }

    factory.getUser = function(callback){
        callback(user);
    }

    factory.logout = function(){
        user = null;
    }

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
