/**
 * Created by WG45 on 4/7/2016.
 */
app.controller('MainCtrl',function($scope,$location){
  $scope.username = '';
  $scope.password = '';
  $scope.loginUser = function(uname,pword){
    if(uname === 'admin' && pword === 'password'){
      $location.path('/users');
    }else {
      alert("Invalid Credentials");
    }
  }
});
