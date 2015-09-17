'use strict';

config.$inject = [ '$stateProvider', '$urlRouterProvider' ];
function config( $stateProvider, $urlRouterProvider ) {

  $urlRouterProvider.otherwise( '/' );

  $stateProvider
    .state( 'home', {
    url: '/',
    template: '<home></home>'
  } );

}


export default config;
