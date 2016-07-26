var app2=angular.module("app2",[]);
app2.controller("heroCtrl",function($scope,$rootScope){
  $scope.hn="akhila";
  $scope.hero=
  [
    {realName:"bruce",heroName:"batman"},
    {realName:"clark", heroName:"superman"}
  ];
  $scope.getHeroData=function(){
    heroSearch($scope.hn);
  };
  function heroSearch(name){
    $scope.heroData="not found";
    for(var i=0;i<$scope.hero.length;i++){
      if($scope.hero[i].heroName===name){
        $scope.heroData=$scope.hero[i].realName+ " is " +$scope.hero[i].heroName;
      }
    }
  }

  $scope.$on("heroUpdated",function(event,args){
    console.log( "real:" +args.realName+ " hero :" +args.heroName);
    $scope.hero.push({
      realName: args.realName, heroName :args.heroName
    });
  });

$scope.addHeroData=function(anewReal, anewHero){
  $rootScope.$broadcast("heroUpdated",
  {
    realName: anewReal, heroName: anewHero
  });
  console.log("real :" +realName+ "hero :" +heroName);
};
});
