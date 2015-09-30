System.config({
  baseURL: (typeof __karma__ !== "undefined") ? "base" : "/", // #Workiva/karma-jspm/issues/91
  defaultJSExtensions: true,
  transpiler: "typescript",
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "angular": "npm:angular@1.4.7",
    "angular-mocks": "github:angular/bower-angular-mocks@1.4.7",
    "angular-ui-router": "npm:angular-ui-router@0.2.15",
    "core-js": "npm:core-js@0.9.18",
    "css": "github:systemjs/plugin-css@0.1.18",
    "normalize.css": "github:necolas/normalize.css@3.0.3",
    "text": "github:systemjs/plugin-text@0.0.2",
    "typescript": "npm:typescript@1.6.2",
    "github:angular/bower-angular-mocks@1.4.7": {
      "angular": "github:angular/bower-angular@1.4.7"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:necolas/normalize.css@3.0.3": {
      "css": "github:systemjs/plugin-css@0.1.18"
    },
    "npm:angular-ui-router@0.2.15": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:angular@1.4.7": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    }
  }
});
