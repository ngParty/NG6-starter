System.register(['angular', 'angular-ui-router', './home.component'], function(exports_1) {
    var angular, home_component_1;
    var homeModule;
    return {
        setters:[
            function (angular_1) {
                angular = angular_1;
            },
            function (_1) {},
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            }],
        execute: function() {
            homeModule = angular.module('home', [
                'ui.router'
            ])
                .config(function ($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise('/');
                $stateProvider
                    .state('home', {
                    url: '/',
                    template: '<home></home>'
                });
            })
                .directive('home', home_component_1.default);
            exports_1("default",homeModule);
        }
    }
});
//# sourceMappingURL=home.js.map