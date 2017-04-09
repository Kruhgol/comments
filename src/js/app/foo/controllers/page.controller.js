'use strict';

module.exports = function($scope, requestsService, $filter, $routeParams, appData){

    //$scope.comment={comment_id:false};

    $scope.page = $routeParams.pageId-1;


    //arrow Left and arrow Right  is blocked and show in gray color
    if($routeParams.pageId == 1){
        $scope.leftBlock = true;         
    }
   
    $scope.$watch('page', function(newVal){
        $scope.page = newVal;
        if(newVal && $scope.comments){
            if ($scope.page == 0){
                $scope.leftBlock = true;
                $scope.rightBlock =false
            } else
            if ($scope.page+1 == $scope.comments.length){
                $scope.rightBlock = true;
                $scope.leftBlock = false;
            } else {
                $scope.leftBlock = false;
                $scope.rightBlock = false;
            }  
        } 
    })

}