/**
 * Created by mdeepika on 15/3/17.
 */

(function(){
    "use strict";

    angular.module("myApp").controller("cartController", function(jsonService, $q){
        var vm = this;
        vm.addCart = [];
        vm.total = 0;

        jsonService.getData()
            .then(function(response) {
                vm.products = response;
                console.log(vm.products);
            }, function(error) {
                alert("Data not found");
            });

        vm.addToCart = function(item){
            console.log(item);
                if(vm.addCart.length == 0){
                    item.count = 1;
                    vm.addCart.push(item);
                    console.log( vm.addCart);

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
            vm.total -= parseFloat(item.price);
        };
    });

})();
