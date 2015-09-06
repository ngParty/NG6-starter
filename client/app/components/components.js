System.register(['angular', './home/home', './about/about'], function(exports_1) {
    var angular, home_1, about_1;
    var componentModule;
    return {
        setters:[
            function (angular_1) {
                angular = angular_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (about_1_1) {
                about_1 = about_1_1;
            }],
        execute: function() {
            componentModule = angular.module('app.components', [
                home_1.default.name,
                about_1.default.name
            ]);
            exports_1("default",componentModule);
        }
    }
});
//# sourceMappingURL=components.js.map