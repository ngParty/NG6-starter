System.register(['angular', './user.factory'], function(exports_1) {
    var angular, user_factory_1;
    var userModule;
    return {
        setters:[
            function (angular_1) {
                angular = angular_1;
            },
            function (user_factory_1_1) {
                user_factory_1 = user_factory_1_1;
            }],
        execute: function() {
            userModule = angular.module('user', [])
                .factory('User', user_factory_1.default);
            exports_1("default",userModule);
        }
    }
});
//# sourceMappingURL=user.js.map