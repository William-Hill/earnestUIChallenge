describe("earnestChallengeCtrl", function(){

	beforeEach(module('earnestChallengeApp'));

	  var $controller;

  	beforeEach(inject(function(_$controller_){
    	// The injector unwraps the underscores (_) from around the parameter names when matching
    	$controller = _$controller_;
  	}));

	it("users not empty", inject(function($controller){

		  var scope = {},ctrl = $controller('earnestChallengeCtrl', {$scope:scope});

    	  expect(scope.users.length).toBe(3);
	}));

	it("add user", inject(function($controller){
		var scope = {},ctrl = $controller('earnestChallengeCtrl', {$scope:scope});
		var numberOfUsers = scope.users.length;
		scope.addUser();
		expect(scope.users.length).toBe(numberOfUsers +1);
	}));

	it("remove user", inject(function($controller){
		var scope = {},ctrl = $controller('earnestChallengeCtrl', {$scope:scope});
		var numberOfUsers = scope.users.length;
		scope.removeUser(1);
		expect(scope.users.length).toBe(numberOfUsers -1);
	}));

	it("add role", inject(function($controller){
		var scope = {},ctrl = $controller('earnestChallengeCtrl', {$scope:scope});
		var user = scope.users[1];
		var numOfRoles = user.roles.length;
		scope.addRole(user);
		expect(user.roles.length).toBe(numOfRoles +1);
	}));
});