'use strict';

//directive for show comments
//scope isolated
//loval variable inputComments is Array of comments to show

module.exports = function($templateCache) {
    return {
        link: function(scope, element, attribute) {

            scope.$watch("inputComments", function(newValue) {
                if (newValue) {
                    scope.comments = JSON.parse(newValue);
                }
            })
        },

        restrict: 'EA',

        controller: function($scope, requestsService, appData, $rootScope, $sce) {
            //show form for answering this comment           

            $scope.addForm = false;

            //GET request for like or dislike
            // result with comments (Array) save in appData.value service for storing 
            // event 'changeCommentsData' informs in App that appData is has changed            

            $scope.getLike = function(comment) {
                console.log('like');
                requestsService.getLike(comment.comment_id).then(function(result) {
                    appData.comments = result.data;
                    $rootScope.$broadcast('changeCommentsData');
                })
            }

            $scope.getDislike = function(comment) {
                console.log('dislike');
                requestsService.getDislike(comment.comment_id).then(function(result) {
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