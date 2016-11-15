
var userController = require('../controllers/userController.js');
var questionController = require('../controllers/questionController.js');
var answerController = require('../controllers/answerController.js');
module.exports = function(app){
    // access params with request.params.id
    // access form data with request.body

    app.post("/users", userController.login);

    app.get('/questions', questionController.showAll);
    app.get('/questions/:id', questionController.showOne);
    app.post('/questions', questionController.addQuestion);

    app.get("/answers/:id/like", answerController.like);
    app.post("/answers", answerController.addAnswer);

    // app.put('/users/:id', userController.update);
    // app.delete('/users/:id', userController.delete);
}
