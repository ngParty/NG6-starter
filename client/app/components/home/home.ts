import * as angular from 'angular';
import 'angular-ui-router';

import {makeDirective,makeSelector} from '../../common/utils/metadata/metadata'

import config from './home.config';
import HomeComponent from './home.component';


const ngModule = angular.module( 'home', [
    'ui.router'
  ] )
    .config( config )
    .directive( makeSelector( HomeComponent ), makeDirective( HomeComponent ) );

export default ngModule;
