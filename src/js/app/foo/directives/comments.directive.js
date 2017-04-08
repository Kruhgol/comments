'use strict';

module.exports = function($templateCache){
    return {
        link: function(scope, element, attribute){
            scope.$watch("inputComments", function(newValue){
                if(newValue){
                    scope.comments = JSON.parse(newValue);
                }
            })
        },

        restrict: 'EA',

        controller: function($scope, requestsService, appData, $rootScope){
            $scope.addForm = false;

            $scope.getLike = function(comment){
                console.log('like');
                requestsService.getLike(comment.comment_id).then(function(result){
                    appData.comments = result.data;
                    $rootScope.$broadcast('changeCommentsData');
                })
            }

            $scope.getDislike = function(comment){
                console.log('dislike');
                requestsService.getDislike(comment.comment_id).then(function(result){
                    appData.comments = result.data;
                    $rootScope.$broadcast('changeCommentsData');
                })                
            }

        },

        scope: {
            inputComments: "@comments"
        },

        template: $templateCache.get('comments.html')

    }
}