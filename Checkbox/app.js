/**
 * Created by mdeepika on 21/3/17.
 */
(function(){
    angular.module("myApp", []);

    angular.module("myApp").controller("myController", function($scope){
         $scope.checkBox = {};
        $scope.checkBox.selectAll = false;
        $scope.checkBox.values = [
            { "key": 1, "value": "checkbox 1" },
            { "key": 2, "value": "checkbox 2" },
            { "key": 3, "value": "checkbox 3" }
        ];
       $scope.checkAll = function(){
            for(var i=0; i< $scope.checkBox.values.length; i++){
                $scope.checkBox.values[i].isChecked = $scope.checkBox.selectAll;
            }
        };
       $scope.unCheck = function() {
           for (var i = 0; i < $scope.checkBox.values.length; i++) {
               if (!$scope.checkBox.values[i].isChecked) {
                   $scope.checkBox.selectAll = false;
                   return;
               }else{
                   $scope.checkBox.selectAll = true;
               }
           }
       };
    });
})();
