'use strict';

config.$inject = [ '$stateProvider' ];
function config( $stateProvider ) {
  $stateProvider
    .state( 'about', {
    url: '/about',
    template: `<about></about>`
  } );
}

export default config;
