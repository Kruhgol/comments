'use strict';

module.exports = function($scope, 
                          $http, 
                          $location, 
                          $routeParams, 
                          userConfig, 
                          requestsService, 
                          languageService){

    languageService.language();
    $scope.dictionary = languageService.dictionary;
    $scope.ruLanguage = languageService.isRuLanguage;
    $scope.isRu = true;

    $scope.$on('changeLanguage', function(event, arg){
      $scope.dictionary = arg.dictionary;
      $scope.isRu = arg.isRu;
      $scope.$digest();
    });

    requestsService.getMarks().then(function(result){
        $scope.marks = result.data;
        for(var i=0; i<$scope.marks.length; i++){
            $scope.marks[i].name = $scope.marks[i][languageService.howLanguage()].name
        }

    });
}

