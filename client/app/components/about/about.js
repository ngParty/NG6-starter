System.register(['angular', 'angular-ui-router', './about.component'], function(exports_1) {
    var angular, about_component_1;
    var aboutModule;
    return {
        setters:[
            function (angular_1) {
                angular = angular_1;
            },
            function (_1) {},
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            }],
        execute: function() {
            aboutModule = angular.module('about', [
                'ui.router'
            ])
                .config(function ($stateProvider) {
                $stateProvider
                    .state('about', {
                    url: '/about',
                    template: "<about></about>"
                });
            })
                .directive('about', about_component_1.default);
            exports_1("default",aboutModule);
        }
    }
});
//# sourceMappingURL=about.js.map