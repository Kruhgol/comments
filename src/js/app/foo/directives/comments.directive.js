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

        controller: function($scope, requestsService){
            $scope.addForm = false;

            $scope.like = function(comment){
                requestsService.like(comment.comment_id).then(function(resulr){
                    comment.userRating = result.data;
                })
            }

            $scope.dislike = function(comment){
                
            }

        },

        scope: {
            inputComments: "@comments"
        },

        template: $templateCache.get('comments.html')

    }
}