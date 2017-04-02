module.exports = function($http, $rootScope){
    return new Request($http, $rootScope);
}

function Request($http, $rootScope){
    var getComments = '/getcomments',
        getCaptcha = '/getcaptcha';

    //controller's GET requests

    this.getComments = function(){
        var adr = getComments + '/';
        return $http.get(adr);
    };

    this.getCaptcha = function(){
        var adr = getCaptcha + '/';
        return $http.get(adr);
    };

}