System.register(['angular', 'angular-mocks', './hero', './hero.controller', './hero.component', './hero.html!text'], function(exports_1) {
    var angular, hero_1, hero_controller_1, hero_component_1, hero_html_text_1;
    return {
        setters:[
            function (angular_1) {
                angular = angular_1;
            },
            function (_1) {},
            function (hero_1_1) {
                hero_1 = hero_1_1;
            },
            function (hero_controller_1_1) {
                hero_controller_1 = hero_controller_1_1;
            },
            function (hero_component_1_1) {
                hero_component_1 = hero_component_1_1;
            },
            function (hero_html_text_1_1) {
                hero_html_text_1 = hero_html_text_1_1;
            }],
        execute: function() {
            describe('Hero', function () {
                var $rootScope, makeController;
                beforeEach(angular.mock.module(hero_1.default.name));
                beforeEach(angular.mock.inject(function (_$rootScope_) {
                    $rootScope = _$rootScope_;
                    makeController = function () { return new hero_controller_1.default(); };
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
                        expect(hero_html_text_1.default).to.match(/{{\s?vm\.name\s?}}/g);
                    });
                });
                describe('Component', function () {
                    // test the component/directive itself
                    var component = hero_component_1.default();
                    it('should use the right template', function () {
                        expect(component.template).to.equal(hero_html_text_1.default);
                    });
                    it('should use controllerAs', function () {
                        expect(component).to.have.property('controllerAs');
                    });
                    it('should use the right controller', function () {
                        expect(component.controller).to.equal(hero_controller_1.default);
                    });
                });
            });
        }
    }
});
//# sourceMappingURL=hero.spec.js.map