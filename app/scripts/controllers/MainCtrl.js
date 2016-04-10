/**
 * Created by WG45 on 4/7/2016.
 */
app.controller('MainCtrl',function($scope,$location,RegistrationService){
  $scope.usrname = '';
  $scope.pword = '';
  $scope.name = '';
  $scope.email = '';
  $scope.password = '';
  $scope.dob = '';
  $scope.loginUser = function(uname,pword){
    if(uname === 'admin' && pword === 'password'){
      $location.path('/users');
    }else {
      alert("Invalid Credentials");
    }
  }

  /*registration of user*/
  $scope.userRegistration = function(name, email, pWord, dob){
    $scope.name = name;
    $scope.password = pWord;
    $scope.email = email;
    $scope.dob = dob;
    if($scope.name === '' || $scope.password === ''||$scope.email === '' || $scope.dob === ''){
        alert("Value Required!");
    }
    $scope.user = {
      'name' : name,
      'email': email,
      'password': pWord,
      'dob' : dob
    }

    RegistrationService.authUser($scope.user);
  }
});
