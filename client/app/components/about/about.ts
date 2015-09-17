import * as angular from 'angular';
import 'angular-ui-router';

import {makeDirective,makeSelector} from '../../common/utils/metadata/metadata'

import config from './about.config';
import AboutComponent from './about.component';

const ngModule = angular.module( 'about', [
  'ui.router'
] )
  .config( config )
  .directive( makeSelector( AboutComponent ), makeDirective( AboutComponent ) );

export default ngModule;
