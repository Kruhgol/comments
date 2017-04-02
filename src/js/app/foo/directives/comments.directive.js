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

        controller: function($scope){


        },

        scope: {
            inputComments: "@comments"
        },

        template: $templateCache.get('comments.html')

    }
}