'use strict';

angular.module('IHM_Service_Rest')
  .controller('ProjectsCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {

    var service_REST = "http://poo-ihm-2015-rest.herokuapp.com/api/";

    $scope.unUser = {};

    $scope.supprimeUser = function(user){
      $scope.unUser = user.id;
    };

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    /* Cette partie sert à pouvoir supprimer un projet en cliquant sur le bouton supprimer
    $scope.projects.splice(index,1) sert à pouvoir rafraichir le tableau une fois que l'element a été supprimé
     */
    var REST = 'http://poo-ihm-2015-rest.herokuapp.com/api/';


    $scope.supressionProject = function(id,index){
      $http.delete(REST +'Projects/' + id)
        .success(function(data) {
          $scope.projects.splice(index,1);
          console.log(data);
          console.log(data.data);
          success(data);
        })
        .error();
    }

    $http.get("http://poo-ihm-2015-rest.herokuapp.com/api/Projects")
      .success(function(data) {
        $scope.projects = data.data;
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
        }

      });

    if($routeParams.userId) {
      $http.get(service_REST +"Projects/" + $routeParams.ProjectId)
        .success(function(data) {
          if (data.status === 'success') {
            $scope.currentProject = data.data;
          }
        });
    }
  }]);
