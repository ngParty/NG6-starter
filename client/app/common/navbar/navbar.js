System.register(['angular', 'angular-ui-router', './navbar.component'], function(exports_1) {
    var angular, navbar_component_1;
    var navbarModule;
    return {
        setters:[
            function (angular_1) {
                angular = angular_1;
            },
            function (_1) {},
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            }],
        execute: function() {
            navbarModule = angular.module('navbar', [
                'ui.router'
            ])
                .directive('navbar', navbar_component_1.default);
            exports_1("default",navbarModule);
        }
    }
});
//# sourceMappingURL=navbar.js.map