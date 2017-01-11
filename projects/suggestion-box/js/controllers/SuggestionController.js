app.controller('SuggestionController', ['$scope', '$routeParams', 'suggestions', function($scope, $routeParams, suggestions) {
	$scope.post = suggestions.posts[$routeParams.id];

	$scope.addComment = function() {

		if(!$scope.comment || $scope.comment === "") {
			return;
		}

		$scope.post.comments.push({
			body: $scope.comment,
			upVotes: 0
		});

		$scope.comment = '';
	};

	$scope.upVoteComment = function(comment) {
		comment.upVotes += 1;
	};

	console.log('post ' + $scope.post.comments);

	
}]);