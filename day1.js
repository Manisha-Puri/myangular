var app1=angular.module('app1',[]);
app1.controller('ctrl1',function($scope){

  $scope.first=1;
  $scope.last=1;
  $scope.randomNum1=Math.floor((Math.random()*10)+1);
  $scope.randomNum2=Math.floor((Math.random()*10)+1);
  $scope.updateValue=function(){
    $scope.calculation=$scope.first+ '+' +$scope.last+ "=" +(+$scope.last + +$scope.first);
  };
  });
  app1.controller('badCtrl',function($scope){
    var badFeelings=["sad","lonely","incomplete"];
    $scope.bad=badFeelings[Math.floor((Math.random()*4)+1)];
  });
  app1.controller('goodCtrl',function($scope){
    var goodFeelings=["complete","happy","high"];
        $scope.good=goodFeelings[Math.floor((Math.random()*4))];
  });
  app1.controller('gListCtrl',function($scope){
    $scope.groceries=[{item:"bread",purchased:false},{item:"jam",purchased:false},{item:"butter",purchased:true}];
    $scope.getList=function(){
      return $scope.showList?"ulgrocerylist.html":"grocerylist.html";
    };

  });
  app1.controller("eventCtrl",function($scope)
  {
    $scope.blur=0;
    $scope.click=0;
    $scope.dblclick=0;
    $scope.copy=0;
    $scope.paste=0;
    $scope.cut=0;
    $scope.focus=0;
    $scope.change=0;
    $scope.keydown=function(e){
    $scope.kdkey=String.fromCharCode(e.keyCode)};
    $scope.daytimebutton=true;
  //  $scope.capitals=[{"city":"berlin", "state":"germany"},{"city":"chandigarh", "state":"punjab"}];
  $scope.capitals = [
      {"City": "Montgomery",
      "State": "Alabama"},
      {"City": "Juneau",
      "State": "Alaska"},
      {"City": "Phoenix",
      "State": "Arizona"},
      {"City": "Little Rock",
      "State": "Arkansas"}
    ];

});
