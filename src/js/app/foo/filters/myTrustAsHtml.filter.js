//filter for output text with HTML tags
module.exports = function($sce) {
    return function(param) {
        return $sce.trustAsHtml(param);
    }
}