/**
 * Created by mdeepika on 15/3/17.
 */

(function(){
   "use strict";

   angular.module("myApp").controller("cartController", function(){
        var vm = this;
        vm.products = [{
           id: 1,
           name: 'product1',
           price: 100.0,
            image: 'images/laptop.jpg'
       },{
           id: 2,
           name: 'product2',
           price: 14.5,
            image: 'images/watch.jpg'
       },{
           id: 3,
           name: 'product3',
           price: 100.43,
           image: 'images/ipod.jpg'
       },{
           id: 4,
           name: 'product4',
           price: 99.9,
            image: 'images/cam.jpg'
       }];
       vm.addCart = [];
       vm.total = 0;

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
           vm.total -= parseFloat(item.price);
       };
   });
})();
