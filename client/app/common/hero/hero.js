System.register(['angular', 'angular-ui-router', './hero.component'], function(exports_1) {
    var angular, hero_component_1;
    var heroModule;
    return {
        setters:[
            function (angular_1) {
                angular = angular_1;
            },
            function (_1) {},
            function (hero_component_1_1) {
                hero_component_1 = hero_component_1_1;
            }],
        execute: function() {
            heroModule = angular.module('hero', [
                'ui.router'
            ])
                .directive('hero', hero_component_1.default);
            exports_1("default",heroModule);
        }
    }
});
//# sourceMappingURL=hero.js.map