angular.module('userProfiles')
.service('friendService', function( $http ) {


    this.login = function( user ) {
      return $http ({
        method: 'POST',
        url: '/api/login',
        data: user
      });
    };

    this.getFriends = function() {
      return $http ({
        method: 'GET',
        url: '/api/profiles',
      });
    };

    this.updateName = function(updatedName) {
      return $http ({
        method: 'PUT',
        url: '/api/user',
        data: { name: updatedName }
      })
    }

    this.updatePass = function(updatedPass) {
      return $http ({
        method: 'PUT',
        url: '/api/pass',
        data: { pass: updatedPass }
      })
    }

});
