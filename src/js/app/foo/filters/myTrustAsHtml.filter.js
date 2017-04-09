module.exports = function($sce){
        return function(param){
            return $sce.trustAsHtml(param);
        }
    }