System.register(['./about.html!text', './about.controller', './about.css!'], function(exports_1) {
    var about_html_text_1, about_controller_1;
    var aboutComponent;
    return {
        setters:[
            function (about_html_text_1_1) {
                about_html_text_1 = about_html_text_1_1;
            },
            function (about_controller_1_1) {
                about_controller_1 = about_controller_1_1;
            },
            function (_1) {}],
        execute: function() {
            aboutComponent = function () {
                return {
                    template: about_html_text_1.default,
                    controller: about_controller_1.default,
                    restrict: 'E',
                    controllerAs: 'vm',
                    scope: {},
                    bindToController: {}
                };
            };
            exports_1("default",aboutComponent);
        }
    }
});
//# sourceMappingURL=about.component.js.map