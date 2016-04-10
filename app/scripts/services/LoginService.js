/**
 * Created by WG45 on 4/9/2016.
 */
serviceModule.service('LoginService',function ($http) {
  var userUrl = 'http://localhost:3000/fp/users';
  var userLogin= function(){
    $http.get(userUrl)
  }

});
