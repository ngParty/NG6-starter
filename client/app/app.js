System.register(['angular', 'angular-ui-router', './common/common', './components/components', './app.component', 'normalize.css'], function(exports_1) {
    var angular, common_1, components_1, app_component_1;
    var appModule;
    return {
        setters:[
            function (angular_1) {
                angular = angular_1;
            },
            function (_1) {},
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (components_1_1) {
                components_1 = components_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (_2) {}],
        execute: function() {
            appModule = angular.module('app', [
                'ui.router',
                common_1.default.name,
                components_1.default.name
            ])
                .directive('app', app_component_1.default);
            /*
             * As we are using ES6 with Angular 1.x we can't use ng-app directive
             * to bootstrap the application as modules are loaded asynchronously.
             * Instead, we need to bootstrap the application manually
             */
            angular.element(document).ready(function () {
                angular.bootstrap(document, [appModule.name]), {
                    strictDi: true
                };
            });
            exports_1("default",appModule);
        }
    }
});
//# sourceMappingURL=app.js.map