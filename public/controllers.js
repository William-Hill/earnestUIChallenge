var earnestChallengeApp = angular.module('earnestChallengeApp', ['xeditable']);

earnestChallengeApp.run(function(editableOptions) {
  editableOptions.theme = 'bs3';
});

earnestChallengeApp.controller('earnestChallengeCtrl', function($scope){
	$scope.users = [{ name: 'Alex', roles:['admin','user','custom'] },
					{ name: 'Tom', roles:['user','custom'] },
					{ name: 'Dana', roles:['admin','custom'] } ];

	// $scope.addUser = function(){
	// 	$scope.users.push({name: "", roles:[]})
	// }
	// 
	 // add user
  $scope.addUser = function() {
    $scope.inserted = {
      name: '',
      roles: ['user'],
    };
    $scope.users.push($scope.inserted);
  };

  $scope.validateUserName = function(data) {
  	console.log("data in validateUserName: ", data);
  	if(data == ""){
  		console.log("Name can't be blank");
  		return "Name can't be blank"
  	}
    // if (data !== 'awesome') {
    //   return "Username should be `awesome`";
    // }
  };

  $scope.addRole = function(user){
  	//$scope.users
  	console.log("user: ", user);
  	console.log("user roles length: ", user.roles.length);
  	console.log("roles typeof: ", typeof(user.roles));
  	user.roles.push("new Role ");
  };

  $scope.removeUser = function(userIndex){
  	console.log("user to be removed: ", userIndex);
  	$scope.users.splice(userIndex,1);
  }

	// $scope.editUser = function(index){
	// 	console.log("users: ",$scope.users );
	// 	// $scope.users[index].name = 
	// }

});