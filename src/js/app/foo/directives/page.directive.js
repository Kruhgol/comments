
module.exports = function($rootScope){
    return {
        link: function(scope, element, attribute){
            var index = attribute['index'];
            console.log(index);
            console.log(scope.page);
            if(scope.page == index){
                element.attr('style','background-color: #267B08; color: #ffffff;')
            }
        },

        restrict: 'A',

    }
}