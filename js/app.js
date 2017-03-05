var portalApp = angular.module('portalApp',['ui.router']);

portalApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/portal');
    
    $stateProvider
        
        .state('portal', {
            url: '/portal',
            template:" <portal-app-comp></portal-app-comp>",
            controllerAs: '$ctrl'
        
        })
        .state('popup',{
            url:'/popup',
            template:" <popup-app-comp></popup-app-comp>",
            controllerAs: '$ctrl'
        })
 

});
portalApp.service('modalService',function(){
    this.modalList;

    this.setModal = function(obj){
        this.modalList = obj;

    }
    this.getModal = function(){
         return this.modalList;
    }
   
});
portalApp.factory('modalFactory',function(){
    var modalList;

    var setModal = function(obj){
        modalList = obj;

    }
    var getModal = function(){
         return modalList;
    }
    return {
        "setModal":setModal,
        "getModal":getModal

    }
});
