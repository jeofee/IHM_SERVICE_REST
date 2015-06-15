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

    var REST = 'http://poo-ihm-2015-rest.herokuapp.com/api/';

    $scope.recuperationUser = function(id, name, surname, email, website){
      $scope.id = id;
      $scope.name = name;
      $scope.surname = surname;
      $scope.email = email;
      $scope.website = website;

    };

    $scope.modificationUser = function( nom, prenom, email, website){
      $http.put(REST +'Users/' + $scope.id, {
        "name":nom,
        "surname":prenom,
        "email":email,
        "website":website
      })
        .success(function(data) {
          $scope.users.push({
            "id":$scope.id,
            "name":nom,
            "surname":prenom,
            "email":email,
            "website":website
          });
          //$scope.users.splice(index,1);
          console.log(data);
          console.log(data.data);
          success(data);



        })
        .error();
    };


    $scope.supressionUser = function(id,index){
      $http.delete(REST +'Users/' + id)
        .success(function(data) {
          $scope.users.splice(index,1);
          console.log(data);
          console.log(data.data);
          success(data);



        })
        .error();
    };


    $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users')
      .success(function(data) {
        $scope.users = data.data;
        //Permet de controller l'affichage de la liste avec un bouton
        $scope.myVar = false;
        $scope.Cach_Affic = "Cacher";

        $scope.toggle = function() {
          $scope.myVar = !$scope.myVar;
          if($scope.myVar === true){
            $scope.Cach_Affic = 'Afficher';
          }
          else{
            $scope.Cach_Affic = 'Cacher';
          }
        };

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

  }])
     */
  /*
  .service('Suppression', ['$http', function Suppression($http, $scope){

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
    */
  }]);
