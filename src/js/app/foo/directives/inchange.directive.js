
module.exports = function($rootScope){
    return {
        link: function(scope, element, attribute){
            element.bind("change", function(event){
                $rootScope.$broadcast("inputFileChange");
            })
        },

        restrict: 'A'

    }
}