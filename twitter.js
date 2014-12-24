angular.module('Twitter', ['ngResource']);

function twitterSearch(result) {
	alert('this is ok');
}

function TwitterCtrl($scope, $resource) {
	$scope.twitter = $resource('https://api.twitter.com/1.1/search/tweets.json',
		{action:'search.json', q:'#CocaCola', callback: 'JSON_CALLBACK'},
		{get:{method: "JSONP"}});
	$scope.twitterResult = $scope.twitter.get(function(result){
		alert("this is better");
	});

}