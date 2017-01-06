angular.module('userProfiles')
.controller('profileCtrl', function( $scope, friendService ) {
	// FIX ME - assign values to $scope.currentUser and $scope.friends
  $scope.getFriends = friendService.getFriends().then(function(result) {
    $scope.currentUser = result.data.currentUser;
    $scope.friends = result.data.friends;
  });
});
