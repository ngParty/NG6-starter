System.register(['./hero.html!text', './hero.controller', './hero.css!'], function(exports_1) {
    var hero_html_text_1, hero_controller_1;
    var heroComponent;
    return {
        setters:[
            function (hero_html_text_1_1) {
                hero_html_text_1 = hero_html_text_1_1;
            },
            function (hero_controller_1_1) {
                hero_controller_1 = hero_controller_1_1;
            },
            function (_1) {}],
        execute: function() {
            heroComponent = function () {
                return {
                    template: hero_html_text_1.default,
                    controller: hero_controller_1.default,
                    restrict: 'E',
                    controllerAs: 'vm',
                    scope: {},
                    bindToController: true
                };
            };
            exports_1("default",heroComponent);
        }
    }
});
//# sourceMappingURL=hero.component.js.map