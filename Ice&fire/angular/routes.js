//var myApp = angular.module('blogApp', ['ngRoute']); 

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/',{
            // location of the template
            templateUrl     : 'views/index-view.html',
            // Which controller it should use 
            controller      : 'mainController',
            // what is the alias of that controller.
            controllerAs    : 'myBook'
        })
        .when('/:class/:id',{
            templateUrl     : 'views/detail-view.html',
            controller      : 'detailController',
            controllerAs    : 'detailName'
        })
    
        .otherwise(
            {
                //redirectTo:'/'
                template   : '<h1>404 page not found</h1>'
            }
        );
}]);