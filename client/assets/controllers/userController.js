app.controller('userController', ['$scope', 'userFactory', '$location', function($s, uf, $l){
    $s.errors;

    $s.login = function(){
        uf.login($s.user, function(nUser){
            $l.url('/dashboard')
        },
        function(error){
            $s.errors = error;
        });
    }
}]);
