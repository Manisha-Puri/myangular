var app1=angular.module("app1",[]);
app1.controller("gListCtrl",function($scope){
  $scope.groceries=[{item:"apple",purchase:true},{item:"berries",purchase:true},{item:"jam",purchase:true},{item:"juice",purchase:true}];
  console.log($scope.firstname);
$scope.addItem=function(newItem){
  if(!(newItem===undefined||newItem===""))
  {
    $scope.groceries.push({
      item:newItem, purchased:false
    });
    $scope.missingNewItemError="";
  }
  else
  {
  $scope.missingNewItemError="Please enter an item";
 }
};
});
app1.controller("userCtrl",function($scope){
$scope.user=[{
  fName:"derek",
  lName:"Banas",
  street:"mary 23 road",
  subscribe:"Subscribe",
  delivery: "Email"
}];
$scope.saveUser=function(userInfo){
  if($scope.userForm.$valid){
    $scope.user.push({
      fName:userInfo.fName,
      lName:userInfo.lName,
      street:userInfo.street,
      subscribe:userInfo.subscribe,
      delivery:userInfo.delivery

    });
    console.log("User Saved");
  }else{
    console.log("Error:Couldn't save user");
  }
};

});
