//directive for change background-color numberPage block
module.exports = function($rootScope){
    return {
        link: function(scope, element, attribute){
            var index = attribute['index'];
            if(scope.page == index){
                element.attr('style','background-color: #267B08; color: #ffffff;')
            }
        },

        restrict: 'A',

    }
}