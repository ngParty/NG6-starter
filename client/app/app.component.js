System.register(['./app.html!text', './app.css!'], function(exports_1) {
    var app_html_text_1;
    var appComponent;
    return {
        setters:[
            function (app_html_text_1_1) {
                app_html_text_1 = app_html_text_1_1;
            },
            function (_1) {}],
        execute: function() {
            appComponent = function () {
                return {
                    template: app_html_text_1.default,
                    restrict: 'E'
                };
            };
            exports_1("default",appComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map