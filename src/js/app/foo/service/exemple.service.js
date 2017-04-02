module.exports = function($http, $rootScope){
    return new Request($http, $rootScope);
}

function Request($http, $rootScope){
    var article = '/article/';
        author = '/author/',
        requestsUrl = '/requests',
        comments = '/comments/',
        articles = '/articles/',
        country = '/country/',
        header = '/header/',
        searchMark = '/searchMark/',
        mark = '/mark/',
        marks = '/marks/',
        randomArticles = '/randomArticles/';

    //controller's GET requests

    this.getArticle = function(id){
        var adr = requestsUrl + article + id + '/';
        return $http.get(adr);
    };
    this.getAuthorArticles = function(id){
        var adr = requestsUrl + author + id + '/';
        return $http.get(adr);
    };
    this.getArticleComments = function(id){
        var adr = requestsUrl + comments + id + '/';
        return $http.get(adr);
    };
    this.getCountry = function(id){
        var adr = requestsUrl + country + id + '/';
        return $http.get(adr);
    };
    this.getArticles = function(id){
        var adr = requestsUrl + articles + id + '/';
        return $http.get(adr);
    };
    this.getHeader = function(){
        var adr = requestsUrl + header;
        return $http.get(adr);
    };
    this.getMarkArticles = function(id){
        var adr = requestsUrl + mark + id + '/';
        return $http.get(adr);
    };
    this.getMarks = function(){
        var adr = requestsUrl + marks;
        return $http.get(adr);
    };
    this.getRandomArticles = function() {
        var adr = requestsUrl + randomArticles;
        return $http.get(adr);
    };

    //controller's POST requests

    this.postArticleComment = function(id, answer) {
        var adr = requestsUrl + '/' + id + '/addcomment/';
        return $http.post(adr, answer);
    };
    this.postSearch = function(answer) {
        var adr = requestsUrl + searchMark;
        return $http.post(adr, answer);
    };    
}
