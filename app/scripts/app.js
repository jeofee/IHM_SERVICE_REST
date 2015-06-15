'use strict';

/**
 * @ngdoc overview
 * @name IHM_Service_Rest
 * @description
 * # pooIhmExemplesApp
 *
 * Main module of the application.
 */
angular
  .module('IHM_Service_Rest', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/users' , {
        templateUrl: '../views/Users/all_users.html',
        controller: 'UsersCtrl'
      })
      /*
      .when('/users/:userId', {
        templateUrl: '../views/Users/all_projects.html',
        controller: 'UsersCtrl'
      })
      */
      .when('/projects' , {
        templateUrl: '../views/Projects/all_projects.html',
        controller: 'ProjectsCtrl'
      })
      .when('/create_project' , {
        templateUrl: '../views/Projects/create_project.html',
        controller: 'createProjectCtrl'
      })
      .when('/create_user' , {
        templateUrl: '../views/Users/create_user.html',
        controller: 'CreateUserCtrl'
      })


      .otherwise({
        redirectTo: '/'
      });
  });
