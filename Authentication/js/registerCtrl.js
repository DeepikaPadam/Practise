(function(){
    "use strict";

    angular.module('myApp').controller("registerController", ["userService", function(userService){

        var vm = this;
        vm.name = "";
        vm.username = "";
        vm.mobile = "";
        vm.password = "";
        vm.users = [];

        vm.registerUser = function(){
            if( vm.name !="" && vm.username !="" && vm.mobile !="" && vm.password !=""){
                var user = userService.enterUser(vm.name,vm.username,vm.mobile,vm.password );
                vm.users.push(user);
                vm.formEmpty();
            }
        };

        vm.formEmpty = function () {
            vm.name = "";
            vm.username = "";
            vm.mobile = "";
            vm.password = "";
        };
    }]);
})();
