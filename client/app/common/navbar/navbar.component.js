System.register(['./navbar.html!text', './navbar.controller', './navbar.css!'], function(exports_1) {
    var navbar_html_text_1, navbar_controller_1;
    var navbarComponent;
    return {
        setters:[
            function (navbar_html_text_1_1) {
                navbar_html_text_1 = navbar_html_text_1_1;
            },
            function (navbar_controller_1_1) {
                navbar_controller_1 = navbar_controller_1_1;
            },
            function (_1) {}],
        execute: function() {
            navbarComponent = function () {
                return {
                    template: navbar_html_text_1.default,
                    controller: navbar_controller_1.default,
                    restrict: 'E',
                    controllerAs: 'vm',
                    scope: {},
                    bindToController: true
                };
            };
            exports_1("default",navbarComponent);
        }
    }
});
//# sourceMappingURL=navbar.component.js.map