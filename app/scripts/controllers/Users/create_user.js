'use strict';

angular.module('IHM_Service_Rest')
  .controller('CreateUserCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var REST = 'http://poo-ihm-2015-rest.herokuapp.com/api/';

    $scope.nom = '';
    $scope.prenom = '';
    $scope.email = '';
    $scope.website = '';
    $scope.roles = [];
    $scope.projects = [];



    $scope.toggle = function(nom, prenom, email, website,success, unsuccess) {
      $http.post(REST +'Users/', {
        "name":nom,
        "surname":prenom,
        "email":email,
        "website":website

      })
        .success(function(data) {
          console.log(data);
          console.log(data.data);
          success(data);


        })
        .error();
    };


  }]);
