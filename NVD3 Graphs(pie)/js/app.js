/**
 * Created by mdeepika on 16/3/17.
 */

(function(){
   angular.module("myApp", ['nvd3']).controller("pieChartController", function(){
       var vm = this;
       vm.options={
           chart:{
               type:'pieChart',
               height: 500,
               x: function(d){return d.key;},
               y: function(d){ return d.value;},
               showLabels: true,
               labelThreshold: 0.01,
               labelSunbeamlayout: true,
               legend:{
                   margin:{
                       top:50,
                       right:450,
                       bottom:50,
                       left:0
                   }
               }

           }
       };
       vm.data = [
           {
               key:'one',
               value:5
            },
           {
               key:'two',
               value:7
           },
           {
               key:'three',
               value:3
           },
           {
               key:'four',
               value:6
           },
           {
               key:'five',
               value:9
           }

       ];
   }) ;
})();
