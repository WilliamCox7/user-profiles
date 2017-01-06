angular.module('userProfiles')
.controller('settingsCtrl', function( $scope, friendService ) {
  $scope.updateName = function(updatedName) {
    friendService.updateName(updatedName).then(function(result) {
      console.log(result);
      $scope.userName = result.data.userName;
    });
  }
  $scope.updatePass = function(updatedPass) {
    friendService.updatePass(updatedPass);
  }
});
