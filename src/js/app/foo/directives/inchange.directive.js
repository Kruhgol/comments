
//directive for observing for change in input[type=file] and checking input value

module.exports = function($rootScope){
    return {
        link: function(scope, element, attribute){
            scope.$watch('comment', function(newVal){
                scope.formId = element.parent()[0].id;                
            })
            element.bind("change", function(event){           
                var f = element[0].files[0];
                if(f.size < 3000000 && 
                    (
                        f.type == 'image/jpeg' ||
                        f.type == 'image/jpg' ||
                        f.type == 'image/png' ||
                        f.type == 'image/gif'
                        )){
                    scope.fileValid = true;
                    scope.$apply();
                } else {
                    scope.fileValid = false;
                    scope.$apply();
               }
            })
        },

        restrict: 'A',

    }
}