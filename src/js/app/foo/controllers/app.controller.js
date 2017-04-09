'use strict';

module.exports = function($scope, requestsService, appData, $rootScope, $filter) {
    //default values
    $scope.sortField = 'userDate';
    $scope.reverse = false;
    $scope.commentsOnPage = 10;

    // get comments from server
    // result with comments (Array) save in appData.value service for storing 
    // event 'changeCommentsData' informs in App that appData is has changed
    requestsService.getComments().then(function(result) {
        appData.comments = result.data;
        $rootScope.$broadcast('changeCommentsData');
    });

    //function devides beforeArr to groups, saves they to outputArr and returns it
    $scope.devidedIntoGroups = function(inputArr) {
        var outputArr = [];
        for (var i = 0, j = 0; i < inputArr.length; j++) {
            if (i + $scope.commentsOnPage <= inputArr.length) {
                outputArr[j] = inputArr.slice(i, i + $scope.commentsOnPage);
                i += $scope.commentsOnPage;
            } else {
                outputArr[j] = inputArr.slice(i);
                break;
            }
        }
        return outputArr;
    }

    //event 'changeCommentsData' - appData.comments has changed
    //function gets comments from appData, sort this Array and saves comments in $scope.comments
    $scope.$on('changeCommentsData', function() {
        $scope.commentsData = appData.comments;
        $scope.order($scope.sortField, $scope.reverse);
        $scope.comments = $scope.devidedIntoGroups($scope.commentsData);
    })

    //function sorts comments
    //@param predicate - comment sort field
    $scope.order = function(predicate, reverse) {
        var orderBy = $filter('orderBy');
        $scope.commentsData = orderBy($scope.commentsData, $scope.sortField, $scope.reverse);
        $scope.comments = $scope.devidedIntoGroups($scope.commentsData);
    }

    $scope.orderByName = function(sortField) {
        $scope.sortField = sortField;
        $scope.reverse = !$scope.reverse;
        $scope.order($scope.sortField, $scope.reverse);
    }

    $scope.orderByRating = function(sortField) {
        $scope.sortField = sortField;
        $scope.reverse = !$scope.reverse;
        $scope.order($scope.sortField, $scope.reverse);
    }

    $scope.orderByDate = function(sortField) {
        $scope.sortField = sortField;
        $scope.reverse = !$scope.reverse;
        $scope.order($scope.sortField, $scope.reverse);
    }
}