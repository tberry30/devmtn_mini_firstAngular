var app = angular.module('friendsList');

app.controller('mainCtrl', function($scope){

	$scope.name = 'Tim';

	$scope.friends = ['John', 'Tyson', 'Nick'];

	$scope.addFriend = function(name){
		$scope.friends.push(name);
		$scope.addedFriend = '';
	};


});