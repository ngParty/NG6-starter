import * as angular from 'angular';
import Home from './home/home';
import About from './about/about';

const ngModule = angular.module('app.components', [
	Home.name,
	About.name
]);

export default ngModule;
