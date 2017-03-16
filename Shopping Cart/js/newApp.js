/**
 * Created by mdeepika on 15/3/17.
 */

(function(){
    "use strict";

    angular.module("myApp").controller("cartController", function(jsonService){
        var vm = this;
        vm.addCart = [];
        vm.total = 0;
        vm.products = {};
        vm.addToCart = function(item){
            console.log(item);
            if(vm.addCart.length == 0){
                item.count = 1;
                vm.addCart.push(item);
            }else{
                var flag = false;
                for(var i=0; i< vm.addCart.length; i++){
                    if(vm.addCart[i].id == item.id){
                        flag = true;
                        vm.addCart[i].count++;


                    }
                }
                if(!flag){
                    item.count = 1;
                    vm.addCart.push(item);
                }
            }
            vm.total += parseFloat(item.price);
            console.log(vm.total);
        };

        vm.removeFromCart = function(item){
            if(item.count == 1){
                var index = vm.addCart.indexOf(item);
                vm.addCart.splice(index, 1);
            }else if(item.count > 1){
                item.count--;
            }
        };

        jsonService.getJson("js/data.json").
        then(function(data) {
            vm.products = data;
            console.log(vm.products);

        });
    });

    angular.module("myApp").service('jsonService', function ($http, $q) {
        this.getJson= function(url) {
            return $http.get(url)
                .then(function(response) {
                    console.log(response.data);
                    return response.data;
                }, function(error) {
                    return $q.reject(error);
                });
        }
    });
})();
