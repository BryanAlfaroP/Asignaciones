

/*!
 * All Rights Reserved
 * This software is proprietary information of
 * Intelligent Sense
 * Use is subject to license terms.
 * Filename: main.js
 */


var app = angular.module('ngApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl : 'views/home.html',
        controller  : 'appCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);




app.controller('appCtrl', function($scope, $http){
	var users = {};
	$http.get('http://intelligentsense.com/trainings/twitterUser.json')
	.success(function(data){
		users = data.users;

		$scope.letters = getArrayFirstLetterName(data);
		$scope.users = data.users;

	});

	$scope.getFilterLetter = function(pLetter){
		var filterUsers = [];

		$scope.users = {};

		if(pLetter === "ALL"){
			$scope.users = users;

		}else{
			users.filter(function(user, index) {
				if(pLetter === user.Name.charAt(0).toUpperCase()){
					filterUsers.push(user);
				}

				return filterUsers;
			});

			$scope.users = filterUsers;
		};
	};
});

function getArrayFirstLetterName(pArrayObject){
	var letterArray = [];

	pArrayObject.users.filter(function(user, index) {
		letterArray.push(user.Name.charAt(0).toUpperCase());
	});

	letterArray = letterArray.unique();
	letterArray = getSortString(letterArray);

	return letterArray;
};

Array.prototype.unique=function(a){
	return function(){
  		return this.filter(a)
  	}
}(function(a,b,c){
  	return c.indexOf(a,b+1)<0
});

function getSortString(pArrayLetters){
	return ["ALL"].concat(pArrayLetters.sort());
};