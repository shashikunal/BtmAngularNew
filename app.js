var myApp = angular.module('testApp' , []);

myApp.controller('myCtr' , function($scope , $http){
    $http.get("./data.json").then(function(x){
    $scope.users = x.data;
    });
});


