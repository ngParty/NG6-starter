System.register(['angular', 'angular-mocks', './home', './home.controller', './home.component', './home.html!text'], function(exports_1) {
    var angular, home_1, home_controller_1, home_component_1, home_html_text_1;
    return {
        setters:[
            function (angular_1) {
                angular = angular_1;
            },
            function (_1) {},
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (home_controller_1_1) {
                home_controller_1 = home_controller_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (home_html_text_1_1) {
                home_html_text_1 = home_html_text_1_1;
            }],
        execute: function() {
            describe('Home', function () {
                var $rootScope, makeController;
                beforeEach(angular.mock.module(home_1.default.name));
                beforeEach(angular.mock.inject(function (_$rootScope_) {
                    $rootScope = _$rootScope_;
                    makeController = function () { return new home_controller_1.default(); };
                }));
                describe('Module', function () {
                    // test things about the component module
                    // checking to see if it registers certain things and what not
                    // test for best practices with naming too
                    // test for routing
                });
                describe('Controller', function () {
                    // test your controller here
                    it('should have a name property [REMOVE]', function () {
                        var controller = makeController();
                        expect(controller).to.have.property('name');
                    });
                });
                describe('Template', function () {
                    // test the template
                    // use Regexes to test that you are using the right bindings {{  }}
                    it('should have name in template [REMOVE]', function () {
                        expect(home_html_text_1.default).to.match(/{{\s?vm\.name\s?}}/g);
                    });
                });
                describe('Component', function () {
                    // test the component/directive itself
                    var component = home_component_1.default();
                    it('should use the right template', function () {
                        expect(component.template).to.equal(home_html_text_1.default);
                    });
                    it('should use controllerAs', function () {
                        expect(component).to.have.property('controllerAs');
                    });
                    it('should use the right controller', function () {
                        expect(component.controller).to.equal(home_controller_1.default);
                    });
                });
            });
        }
    }
});
//# sourceMappingURL=home.spec.js.map