System.register(['./home.controller', './home.html!text', './home.css!'], function(exports_1) {
    var home_controller_1, home_html_text_1;
    var homeComponent;
    return {
        setters:[
            function (home_controller_1_1) {
                home_controller_1 = home_controller_1_1;
            },
            function (home_html_text_1_1) {
                home_html_text_1 = home_html_text_1_1;
            },
            function (_1) {}],
        execute: function() {
            homeComponent = function () {
                return {
                    template: home_html_text_1.default,
                    controller: home_controller_1.default,
                    restrict: 'E',
                    controllerAs: 'vm',
                    scope: {},
                    bindToController: {}
                };
            };
            exports_1("default",homeComponent);
        }
    }
});
//# sourceMappingURL=home.component.js.map