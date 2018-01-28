//<![CDATA[
//*This File From KyunQIB AnimeLoker Website*//
var myApp=angular.module('tabs',[]);
myApp.controller('shift_tabs',function(){
  this.activeTab;
  this.makeShift=function(e){
    this.activeTab=e;
  }
  this.isActive=function(f){
    if(f==this.activeTab){
      return true
    }
  }
});
//]]>
