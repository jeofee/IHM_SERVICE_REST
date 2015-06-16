'use strict';

angular.module('IHM_Service_Rest')
  .controller('createProjectCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var REST = 'http://poo-ihm-2015-rest.herokuapp.com/api/';

    $scope.title = '';
    $scope.description = '';
    //$scope.year = 2015;
    $scope.selectedRole ={};
    $scope.selectedUser ={};

    $scope.definirRoles = function(){
      $http.get(REST + '/Roles')
        .success(function (data) {
          $scope.roles = data.data; //On obtient ici un tableau contenant des objects

          success(data);
        });
    };

    $scope.definirUsers = function(){
      $http.get(REST + '/Users')
        .success(function (data) {
          $scope.users = data.data; //On obtient ici un tableau contenant des objects

          success(data);
        });
    };

    $scope.toggle = function(title, description, year,success, unsuccess) {
      $http.post(REST +'Projects/', {
        "title": title,
        "description":description,
        "year":year,

      })
        .success(function(data) {
          $scope.thisProjectId = data.id;
          console.log(data);
          console.log(data.data);
          success(data);


        })
        .error();
      $http.post(REST +'Roles/', {
        "name":selectedRole.name,
        "UserId":selectedUser.id,
        "ProjectId":$scope.thisProjectId
      })
        .success(function(data){
          success(data)
      })
      .error();
    }

    $scope.definirRoles();
    $scope.definirUsers();

  }]);

