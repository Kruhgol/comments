'use strict';

module.exports = function($routeProvider){
	$routeProvider
    .when('/',{
        templateUrl: 'start.html',
        controller: 'startCtrl'
    })
    .when('/page/:pageId', {
        templateUrl: 'page.html',
        controller: 'pageCtrl'
    })
	.otherwise({
		redirectTo: "/"
	});
}


    // .when('/',{
    //  templateUrl: "home.html",
    //  controller: "homeCtrl"
    // })