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
    .factory('requestsService', require('./service/requests.service'))
    .factory('textvalService', require('./service/textval.service'))
    .filter('mydateFilter', function(){
        return function(param){
            var months = {
                '01':'января',
                '02':'февраля',
                '03':'марта',
                '04':'апреля',
                '05':'мая',
                '06':'июня',
                '07':'июля',
                '08':'августа',
                '09':'сентября',
                '10':'октября',
                '11':'ноября',
                '12':'декабря'
            }
            var getMonth = function(d){
                return months[d.slice(6,8)]
            }

            var regTime = /\d{2}:\d{2}/;
            var date = param.slice(9, 11) + ' ' + getMonth(param)+ ' ' + param.slice(1, 5);
            var time = param.match(regTime)
            var value = date + ' в ' + time;
            return value;
        }
    })



//     .config(require('./routes.js'))
 //    .config(['$httpProvider', require('./service/configHttpProvider')])
 //    .directive('headerDir', ['$templateCache', '$location', 'languageService', require('./directives/header.directive')])
 //    .controller('relinkCtrl', require('./controllers/relink.controller'))
 //    .factory('requestsService', require('./service/requests.service'))
 //    .value('userConfig', require('./service/user.service'))
