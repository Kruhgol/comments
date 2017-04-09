'use strict';

module.exports = function($templateCache){
    return {
        link: function(scope, element, attribute){
            scope.$watch('comment.comment_id', function(newVal){
                if (newVal){
                    scope.comment.comment_id = newVal;
                }
            });
            var textarea = element.find("form")[0].comment
            scope.addI = function(){
                var commentText = textarea.value;
                commentText += '<i></i>'
                textarea.value = commentText;
            }
            scope.addStrong = function(){
                var commentText = textarea.value;
                commentText += '<strong></strong>'
                textarea.value = commentText;
            }
            scope.addCode = function(){
                var commentText = textarea.value;
                commentText += '<code></code>'
                textarea.value = commentText;
            }
            scope.addA = function(){
                var commentText = textarea.value;
                commentText += '<a href="" title=""></a>'
                textarea.value = commentText;
            }
        },

        restrict: 'EA',

        scope: {
            comment: "=comment"
        },

        template: $templateCache.get('addcomment.html')

    }
}