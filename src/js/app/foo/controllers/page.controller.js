'use strict';

module.exports = function($scope, requestsService, $filter, $routeParams, appData){

    $scope.comment={comment_id:false};
    $scope.page = $routeParams.pageId-1;
    

    $scope.$watch('page', function(newVal){
        $scope.page = newVal;
        if(newVal){
            alert($scope.page+1 + '  ' + $scope.comments.length);
            if ($scope.page == 0){
                $scope.leftBlock == true;
            } else
            if ($scope.page+1 == $scope.comments.length){
                alert(true);
                $scope.rightBlock == true;
                $apply();
            } else {
                $scope.leftBlock = false;
                $scope.rightBlock = false;
            }  
        } 
    })
  



    // $scope.sortField = 'userDate';
    // $scope.reverse = false;
    
    // $scope.commentsOnPage = 10;
    // $scope.leftBlock = true;
    // alert($scope.page);
    // console.log($scope.comments[$scope.page]);
    // $scope.$watch('page', function(newVal){
    //     if(newVal){
    //         rrr = $scope.comments[newVal];
    //     }
        
    // })

    // $scope.devidedIntoGroups = function(beforeArr){
    //     var after = [];
    //     for(var i=0, j=0; i<beforeArr.length;){
    //         if(i+10 <= beforeArr.length){
    //             after[j] = beforeArr.slice(i, i+10);
    //             i+=10;
    //         } else {
    //             after[j] = beforeArr.slice(i);
    //             break;
    //         }
    //         j++;
    //     } 
    //     return  after;      
    // }


    // $scope.$on('changeCommentsData', function(){
    //     $scope.commentsData = appData.comments;
    //     $scope.order($scope.sortField, $scope.reverse);
    //     $scope.comments = $scope.devidedIntoGroups($scope.commentsData);
    //     if ($scope.page == 0){
    //         $scope.leftBlock == true;
    //     } else
    //     if ($scope.page == $scope.comments.length){
    //         $scope.rightBlock == true;
    //     } else {
    //         $scope.leftBlock = false;
    //         $scope.rightBlock = false;
    //     } 
    // })

    // $scope.order = function(predicate, reverse){
    //     var orderBy = $filter('orderBy');
    //     $scope.commentsData = orderBy($scope.commentsData, $scope.sortField, $scope.reverse);
    //     $scope.comments = $scope.devidedIntoGroups($scope.commentsData);
    // }

    // $scope.orderByName = function(sortField){
    //     $scope.sortField = sortField;
    //     $scope.reverse = !$scope.reverse;
    //     $scope.order($scope.sortField, $scope.reverse);
    // }

    // $scope.orderByRating = function(sortField){
    //     $scope.sortField = sortField;
    //     $scope.reverse = !$scope.reverse; 
    //     $scope.order($scope.sortField, $scope.reverse);       
    // }

    // $scope.orderByDate = function(sortField){
    //     $scope.sortField = sortField;
    //     $scope.reverse = !$scope.reverse;  
    //     $scope.order($scope.sortField, $scope.reverse);     
    // }

}