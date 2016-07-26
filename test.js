angular.module("Myapp",[])
.controller("ctrl", function($scope,$http)
{
 $scope.profile=[];
 $scope.getData=function()
 {
   $http.get("http://localhost:3000/profile").success(function(data)
   {
     c
   }
});
