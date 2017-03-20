(function(){
    "use strict";

    angular.module('myApp').controller("loginController", ["userService", function(userService){

        var vm = this;
        vm.username = "";
        vm.password = "";
        vm.userList = [];
        vm.userList = userService.getUser();
        console.log(vm.userList);

        /*vm.loginUser = function(){
            if(vm.username == vm.userList.username && vm.password == vm.userList.password){
                alert("loggedin succesfully");
                vm.formEmpty();
            }

        };*/

        vm.loginUser = function(){
            for(var i=0; i < vm.userList.length; i++){
                if(vm.username == vm.userList[i].username && vm.password == vm.userList[i].password){
                    alert("Loggedin Succesfully");
                    vm.formEmpty();
                }
            }
        };

        vm.formEmpty = function () {
            vm.username = "";
            vm.password = "";
        };
    }]);
})();
