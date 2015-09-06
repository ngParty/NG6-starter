System.register(['angular-mocks', './user-test'], function(exports_1) {
    var user_test_1;
    return {
        setters:[
            function (_1) {},
            function (user_test_1_1) {
                user_test_1 = user_test_1_1;
            }],
        execute: function() {
            describe('User', function () {
                it('should run this test', function () {
                    expect(4).to.equal(4);
                });
                it('should import properly', function () {
                    expect(user_test_1.default.hello).to.equal('world');
                });
            });
        }
    }
});
//# sourceMappingURL=user.spec.js.map