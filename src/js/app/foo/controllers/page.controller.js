'use strict';

module.exports = function($scope, requestsService){
    alert('page');
    requestsService.getComments().then(function(result){
        $scope.comments = result.data;
        console.log(result.data);


    });

    // requestsService.getCaptcha().then(function(result){
    //     $scope.captcha = result.data;
    //     console.log("__ __ __ __");
    //     console.log(result.captcha);

    // });

}