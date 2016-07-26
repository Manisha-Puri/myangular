var app3=angular.module("app3",[]);
app3.controller("mainCtrl",function(){
  this.name="animal";
  this.sound="grrr";
  this.animalClick=function(){
    alert(this.name+ " says " +this.sound);
  }
});
app3.controller('dogCtrl',function($controller){
  var child=this;
  child.parent=$controller('mainCtrl',{});
 child.parent.name="dog";
  child.parent.bark="woofff";
  child.parent.love="true";
  child.parent.dogData=function(){
    alert(this.name);
  }
});
