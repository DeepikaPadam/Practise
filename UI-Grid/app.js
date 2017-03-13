/**
 * Created by mdeepika on 10/3/17.
 */

(function(){
    angular.module("myApp").controller("gridController", function(){
        var vm = this;
        vm.data = [
            {
                "firstName": "Deepika",
                "lastName": "Padam",
                "company": "VSoft",
                "employed": true
            },
            {
                "firstName": "Lorraine",
                "lastName": "Wise",
                "company": "Comveyer",
                "employed": false
            },
            {
                "firstName": "Nancy",
                "lastName": "Waters",
                "company": "Fuelton",
                "employed": false
            }
        ];
    });
})();
