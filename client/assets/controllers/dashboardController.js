app.controller('dashboardController', ['$scope', 'userFactory', '$location', 'questionFactory', function($s, uf, $l, qf){
    $s.user;
    $s.questions = [];

    uf.getUser(function(lUser){
        if(lUser){
            $s.user = lUser;
        }else{
            $l.url('login');
        }
    });

    qf.getQuestions(function(aQuestions){
        $s.questions = aQuestions;
    });

    $s.logout = function(){
        uf.logout();
        $l.url('login');
    }
}]);
