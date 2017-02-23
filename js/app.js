var portalApp = angular.module('portalApp',['ui.router']);

portalApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/portal');
    
    $stateProvider
        
        .state('portal', {
            url: '/portal',
            template:" <portal-app-comp></portal-app-comp>",
            controllerAs: '$ctrl'
        
            })
 

});
