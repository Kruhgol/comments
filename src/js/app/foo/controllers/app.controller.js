'use strict';

module.exports = function($scope, requestsService, appData, $rootScope, $filter){

    $scope.sortField = 'userDate';
    $scope.reverse = false;
    $scope.commentsOnPage = 10;
    $scope.leftBlock = true;


    requestsService.getComments().then(function(result){
        //$scope.commentsWithServer = result.data;
        appData.comments = result.data;
        $rootScope.$broadcast('changeCommentsData');
    });

    $scope.devidedIntoGroups = function(beforeArr){
        var after = [];
        for(var i=0, j=0; i<beforeArr.length;){
            if(i+10 <= beforeArr.length){
                after[j] = beforeArr.slice(i, i+10);
                i+=10;
            } else {
                after[j] = beforeArr.slice(i);
                break;
            }
            j++;
        } 
        return  after;      
    }


    $scope.$on('changeCommentsData', function(){
        $scope.commentsData = appData.comments;
        $scope.order($scope.sortField, $scope.reverse);
        $scope.comments = $scope.devidedIntoGroups($scope.commentsData);
        // if ($scope.page == 0){
        //     $scope.leftBlock == true;
        // } else
        // if ($scope.page == $scope.comments.length){
        //     $scope.rightBlock == true;
        // } else {
        //     $scope.leftBlock = false;
        //     $scope.rightBlock = false;
        // } 
    })

    $scope.order = function(predicate, reverse){
        var orderBy = $filter('orderBy');
        $scope.commentsData = orderBy($scope.commentsData, $scope.sortField, $scope.reverse);
        $scope.comments = $scope.devidedIntoGroups($scope.commentsData);
    }

    $scope.orderByName = function(sortField){
        $scope.sortField = sortField;
        $scope.reverse = !$scope.reverse;
        $scope.order($scope.sortField, $scope.reverse);
    }

    $scope.orderByRating = function(sortField){
        $scope.sortField = sortField;
        $scope.reverse = !$scope.reverse; 
        $scope.order($scope.sortField, $scope.reverse);       
    }

    $scope.orderByDate = function(sortField){
        $scope.sortField = sortField;
        $scope.reverse = !$scope.reverse;  
        $scope.order($scope.sortField, $scope.reverse);     
    }


}

