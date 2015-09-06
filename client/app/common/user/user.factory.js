System.register([], function(exports_1) {
    var UserFactory;
    return {
        setters:[],
        execute: function() {
            UserFactory = function () {
                var user = {
                    isSignedIn: false
                };
                var getUser = function () {
                    return user;
                };
                var isSignedIn = function () {
                    return user.isSignedIn;
                };
                return { getUser: getUser, isSignedIn: isSignedIn };
            };
            exports_1("default",UserFactory);
        }
    }
});
//# sourceMappingURL=user.factory.js.map