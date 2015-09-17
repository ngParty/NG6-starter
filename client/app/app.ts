import * as angular from 'angular';
import 'angular-ui-router';

import {makeDirective,makeSelector} from './common/utils/metadata/metadata';

import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';

import 'normalize.css';

const ngModule = angular.module( 'app', [
  'ui.router',
  Common.name,
  Components.name
] )
  .directive( makeSelector( AppComponent ), makeDirective( AppComponent ) );



/*
 * As we are using ES6 with Angular 1.x we can't use ng-app directive
 * to bootstrap the application as modules are loaded asynchronously.
 * Instead, we need to bootstrap the application manually
 */

angular.element( document ).ready( ()=> {
  angular.bootstrap( document, [ ngModule.name ], {
    strictDi: true
  } )
} );

export default ngModule;
