(function(){
    "use strict";

   angular.module('myApp').service("userService", function(){
/*
       var user = {};
       return {
           enterUser: function (name, username, mobile, password) {
               user.name = name;
               user.username = username;
               user.mobile = mobile;
               user.password = password;
           },
           getUser: function () {
               return user;
           }
       }*/

       var newUser = [];
       return {
           enterUser: function (name, username, mobile, password) {
               var user = {};
               user.name = name;
               user.username = username;
               user.mobile = mobile;
               user.password = password;
               newUser.push(user);
               console.log(newUser);
           },
           getUser: function () {
               return newUser;
           }
       }
   });
})();

