var myApp = angular.module('testApp' , []);

myApp.controller('myCtr' , function($scope , $http){
    $http.get("https://api.github.com/users").then(function(x){
    $scope.users = x.data;
    });
});


// function getData(method , url){
//     return new Promise(function(resolve , reject){
//         var xhr = new XMLHttpRequest();
//         xhr.open(method , url);

//         xhr.onload = function(){
//             if(this.status >=200 && this.status < 300){
//                 resolve(xhr.response);
//             }else {
//                 reject({
//                     status : this.status,
//                     statusText : xhr.statusText
//                 })
//             }
//         } //onload

//         xhr.onerror = function(){
//             reject({
//                 status : this.status,
//                 statusText : xhr.statusText
//             }); 
//         }//.onerror

//         xhr.send();
//     });
// };

// getData('GET' , "https://api.github.com/users").then(function(data){
//     console.log(data);

//     var gitUsers = JSON.parse(data);
//     var output = '';
    
//     for(let user of gitUsers){
//         output +=`
//            <h1> ${user.login}</h1>
//            <img src="${user.avatar_url}" />
//         `
//     }

//     document.getElementById('template').innerHTML = output;
// }).catch(function(err){
//     console.log(err)
// });

