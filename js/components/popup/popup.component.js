angular.module("portalApp").component("popupAppComp",{
    
    templateUrl:"js/components/popup/popup.template.html",
    controller:function($http,$scope,modalService,modalFactory){
   
//$scope.hello = modalService.getModal();  
$scope.hello = modalFactory.getModal();    
  

    }});

