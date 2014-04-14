angular.module('test', ['ngQueryString'])
.controller('TestCtrl', ['$scope', 'ngQueryString', function ($scope, ngQueryString) {

    $scope.demo = {};

    $scope.setQueryString = {}

    $scope.setQueryStringClick = function () {

        ngQueryString.setQueryString($scope.setQueryString.name, $scope.setQueryString.value);

    }

    $scope.getQueryString = {};

    $scope.getQueryStringClick = function () {

        $scope.getQueryString.submitted = true;
        $scope.getQueryString.results = ngQueryString.getQueryString($scope.getQueryString.name);


    };

    $scope.getAllQueryString = {};

    $scope.getAllQueryStringClick = function () {
        $scope.getAllQueryString.submitted = true;
        $scope.getAllQueryString.results = ngQueryString.getAllQueryString();
    }

    $scope.clearQueryString = {};

    $scope.clearQueryStringClick = function () {
         
        ngQueryString.clearQueryString($scope.clearQueryString.name);

    };


    $scope.clearAllQueryStringClick = function () {

        ngQueryString.clearAllQueryString();

    };

}])