
//factory service with requests

module.exports = function($http, $rootScope){
    return new Request($http, $rootScope);
}

function Request($http, $rootScope){
    var getComments = '/getcomments',
        getCaptcha = '/getcaptcha',
        postComment = '/postcomment',
        like = '/like/',
        disLike = '/dislike/'

    this.getComments = function(){
        var adr = getComments + '/';
        return $http.get(adr);
    };

    this.getCaptcha = function(){
        var adr = getCaptcha + '/';
        return $http.get(adr);
    };

    this.getLike = function(id) {
        var adr = like + id + '/';
        return $http.get(adr);
    };

    this.getDislike = function(id) {
        var adr = disLike + id + '/';
        return $http.get(adr);
    };

    this.postComment = function(fd) {
        var adr = postComment + '/';
        return $http({
            url: adr,
            method: 'POST',
            data: fd,
            headers: { 'Content-Type': undefined},
            transformRequest: angular.identity

        });
    };



}