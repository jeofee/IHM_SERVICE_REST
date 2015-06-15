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



    $scope.toggle = function(title, description, year,success, unsuccess) {
      $http.post(REST +'Projects/', {
        "title": title,
        "description":description,
        "year":year,

      })
        .success(function(data) {
          console.log(data);
          console.log(data.data);
          success(data);


        })
        .error();
    }


  }]);

