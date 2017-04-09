'use strict';
//redirect to comments page
module.exports = function($scope){
    $scope.$on('changeCommentsData', function(){
    window.location.assign('#/page/1');
  });
    
}

