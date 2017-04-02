'use strict';

module.exports = function($templateCache, $location, languageService){
    return {
        link: function(scope, element, attribute){
            if($location.path() == '/') {
                document.getElementById("titul").style.display="block";
                document.getElementById('header-img').src = "media/images/headfoto.png";
            }
            if($location.path().substring(0,8) == '/country'){
                document.getElementById("country-name").style.display="block";

                scope.$watch('country', function(newValue, oldValue){ 
                    if(newValue){
                        document.getElementById('header-img').src = newValue.picture;
                        document.getElementById('header-img').style.marginTop = "40px";
                    }
                });
           
            }
            if($location.path().substring(0,8) == '/article'){
                document.getElementById("article-name").style.display="block";

                scope.$watch('article', function(newValue, oldValue){ 
                    if(newValue){
                        document.getElementById('header-img').src = newValue.picture;
                        document.getElementById('header-img').style.marginTop = "40px";
                    }
                });
          
            }
            if($location.path().substring(0,5) == '/mark' 
                || $location.path().substring(0,7) == '/author'
                || $location.path().substring(0,7) == '/design'
                || $location.path().substring(0,4) == '/map'
                || $location.path().substring(0,9) == '/contacts'){
                var menuRow = document.getElementById('menu-row');
                //menuRow.style.backgroundColor = 'grey';
                menuRow.style.borderBottom = 'solid 1px #000000';
                menuRow.style.position = 'absolute';
                menuRow.style.top = '0px';
                menuRow.style.height = '40px';
                menuRow.style.width = '100%';
            }
            scope.$watch('dictionary', function(newValue){
                if (languageService){
                    if (languageService.isRuLanguage){
                        document.getElementById("language-flag").classList.add("flag-RU")
                    } else {
                        document.getElementById("language-flag").classList.add("flag-GB")
                    }                    
                }                
            })
        },

        restrict: 'EA',

        template: $templateCache.get('header.html')

    }
}