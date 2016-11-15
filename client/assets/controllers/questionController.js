app.controller('questionController', ['$scope', 'userFactory', '$location', 'questionFactory', '$routeParams', 'answerFactory', function($s, uf, $l, qf, $r, af){

    $s.user;
    $s.showQuestion;
    $s.errors;

    uf.getUser(function(lUser){
        if(lUser){
            $s.user = lUser;
        }else{
            $l.url('login');
        }
    });

    if($r.id){
        qf.getQuestion($r.id, function(rQuestion){
            $s.showQuestion = rQuestion;
        });
    }

    $s.addQuestion = function() {
        qf.addQuestion($s.question, function(nQuestions){
            $l.url('dashboard');
        },
        function(error){
            $s.errors = error;
        });
    }

    $s.addAnswer = function() {
        if($s.answer != undefined){
            $s.answer._question = $s.showQuestion._id;
            $s.answer._user = $s.user;
        }
        af.addAnswer($s.answer, function(nAnswer){
            $l.url('dashboard');
        },
        function(error){
            $s.errors = error;
        });
    }

    $s.like = function(answer){
        af.like(answer);
    }

    $s.cancel = function(){
        $l.url('dashboard');
    }

    $s.logout = function(){
        uf.logout();
        $l.url('login');
    }
}]);
