// bower init
// bower install --save angular
// bower install --save angular-route
var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
        .when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'userController'
        })
        .when('/dashboard', {
            templateUrl: 'partials/dashboard.html',
            controller: 'dashboardController'
        })
        .when('/new-question', {
            templateUrl: 'partials/newQuestion.html',
            controller: 'questionController'
        })
        .when('/questions/:id', {
            templateUrl: 'partials/showQuestion.html',
            controller: 'questionController'
        })
        .when('/questions/:id/answer', {
            templateUrl: 'partials/answer.html',
            controller: 'questionController'
        })
        .otherwise({
            redirectTo:'/login'
        })
})
