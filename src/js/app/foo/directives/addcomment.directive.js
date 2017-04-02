'use strict';

module.exports = function($templateCache){
    return {
        link: function(scope, element, attribute){

        },

        restrict: 'EA',

        controller: function($scope){

        },

        template: $templateCache.get('addcomment.html')

    }
}