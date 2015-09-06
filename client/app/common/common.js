System.register(['angular', './navbar/navbar', './hero/hero', './user/user'], function(exports_1) {
    var angular, navbar_1, hero_1, user_1;
    var commonModule;
    return {
        setters:[
            function (angular_1) {
                angular = angular_1;
            },
            function (navbar_1_1) {
                navbar_1 = navbar_1_1;
            },
            function (hero_1_1) {
                hero_1 = hero_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            }],
        execute: function() {
            commonModule = angular.module('app.common', [
                navbar_1.default.name,
                hero_1.default.name,
                user_1.default.name
            ]);
            exports_1("default",commonModule);
        }
    }
});
//# sourceMappingURL=common.js.map