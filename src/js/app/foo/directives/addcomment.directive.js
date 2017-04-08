'use strict';

module.exports = function($templateCache){
    return {
        link: function(scope, element, attribute){
            scope.$watch('comment.comment_id', function(newVal){
                if (newVal){
                    scope.comment.comment_id = newVal;
                }
            })          
        },

        restrict: 'EA',

        scope: {
            comment: "=comment"
        },

        template: $templateCache.get('addcomment.html')

    }
}