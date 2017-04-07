module.exports = function($http, $rootScope){
    return new Request($http, $rootScope);
}

function Request($http, $rootScope){
    var getComments = '/getcomments',
        getCaptcha = '/getcaptcha',
        postComment = '/postcomment',
        like = '/like/';

    //controller's GET requests

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

    this.postComment = function(fd) {
        var adr = postComment + '/';
        // console.log("___request___");
        // console.log(answer);
        return $http({
            url: adr,
            method: 'POST',
            data: fd,
            //assign content-type as undefined, the browser
            //will assign the correct boundary for us
            headers: { 'Content-Type': undefined},
            //prevents serializing payload.  don't do it.
            transformRequest: angular.identity

        });//.post(adr, answer);
    };



}