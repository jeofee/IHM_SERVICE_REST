'use strict';

/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pooIhmExemplesApp
 */
angular.module('IHM_Service_Rest')
  .controller('UsersCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users')
      .success(function(data) {
        $scope.users = data.data;
        //Permet de controller l'affichage de la liste avec un bouton
        $scope.myVar = false;
        $scope.Cach_Affic = "Cache";

        $scope.toggle = function() {
          $scope.myVar = !$scope.myVar;
          if($scope.myVar == true){
            $scope.Cach_Affic = "Affiche";
          }
          else{
            $scope.Cach_Affic = "Cache";
          }
        }

      });
    /*
    if($routeParams.userId) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + $routeParams.userId)
      .success(function(data) {
        if (data.status == "success") {
          $scope.currentUser = data.data;
        }
      });
    }
    */
  }])
  .service('Suppression', ['$http', function Suppression($http, $scope){
    var REST = 'http://poo-ihm-2015-rest.herokuapp.com/api/';
    $scope.idActuel = 0;

    this.supressionUser = function(id,success){

      $http.delete(REST +'Users/' + $scope.idActuel)
        .success(function(data) {
          console.log(data);
          console.log(data.data);
          success(data);


        })
        .error();
    }
  }]);
