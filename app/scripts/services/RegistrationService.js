/**
 * Created by WG45 on 4/10/2016.
 */
app.service('RegistrationService', function($http){
  var url = "http://localhost:3000/fp/users";
  this.authUser = function(user){
    $http.post(url,user).success(function (data) {
      var auth = data;
      console.log(auth);
    })
  }
});
