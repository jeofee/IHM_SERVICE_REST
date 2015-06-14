angular.module('IHM_Service_Rest')
  .controller('ProjectsCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {

    var service_REST = "http://poo-ihm-2015-rest.herokuapp.com/api/";
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get("http://poo-ihm-2015-rest.herokuapp.com/api/Projects")
      .success(function(data) {
        $scope.projects = data.data;
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

    if($routeParams.userId) {
      $http.get(service_REST +"Projects/" + $routeParams.ProjectId)
        .success(function(data) {
          if (data.status == "success") {
            $scope.currentProject = data.data;
          }
        });
    }
  }]);
