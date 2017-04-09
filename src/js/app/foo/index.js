'use strict';

module.exports = angular.module('myApp.foo',[])
    .config(require('./routes.js'))
    .config(['$httpProvider', require('./service/configHttpProvider')])
    .controller('appCtrl', require('./controllers/app.controller'))
    .controller('startCtrl', require('./controllers/start.controller'))
    .controller('pageCtrl', require('./controllers/page.controller'))
    .controller('addCommentCtrl', require('./controllers/addComment.controller'))
    .directive('addcommentDir',['$templateCache','requestsService', require('./directives/addcomment.directive')])
    .directive('commentsDir',['$templateCache', require('./directives/comments.directive')])
    .directive('inchangeDir', require('./directives/inchange.directive'))
    .directive('pageDir', require('./directives/page.directive'))
    .factory('requestsService', require('./service/requests.service'))
    .factory('textvalService', require('./service/textval.service'))
    .filter('myTrustAsHtmlFilter', require('./filters/myTrustAsHtml.filter'))
    .filter('mydateFilter', require('./filters/mydate.filter'))
    .value('appData', require('./service/appData.value.js'))

