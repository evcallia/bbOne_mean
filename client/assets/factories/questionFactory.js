app.factory('questionFactory', ['$http', function($http){
    var factory = {}
    var questions = [];

    factory.getQuestions = function(callback){
        $http.get('/questions').then(function(data){
            questions = data.data;
            callback(questions);
        });
    }

    factory.addQuestion = function(question, success, error){
        $http.post('/questions', question).then(function(data){
            if(data.data.errors){
                error(data.data.errors);
            }else{
                questions.push(data.data);
                success(questions[questions.length -1]);
            }
        });
    }

    factory.getQuestion = function(id, callback){
        $http.get(`/questions/${id}`).then(function(data){
            callback(data.data);
        });
    }

    return factory;
}]);
