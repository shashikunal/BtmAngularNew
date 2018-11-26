var myApp = angular.module("myApp" , []);

myApp.controller("myCtr" , ($scope)=>{

   $scope.remove = function(user){
       var removedItem = $scope.users.indexOf(user);
       $scope.users.splice(removedItem , 1);
   };

$scope.addusers = function(){
    $scope.users.push({
        name:$scope.newUser.name,
        age : $scope.newUser.age,
        company:$scope.newUser.company
    })
}

    $scope.users = [
        {
            name:"shashi",
            age : 30 , 
            company:"testyantra"
        },

        {
            name:"vinay",
            age : 40 , 
            company:"qspiders"  
        },
        {
            name:"manu",
            age : 40 , 
            company:"qspiders"  
        },
    ]
})