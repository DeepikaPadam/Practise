/**
 * Created by mdeepika on 21/3/17.
 */
(function(){
    angular.module("myApp", []);

    angular.module("myApp").controller("myController", function($scope){
         $scope.checkBox = {};
        $scope.checkBox.approveAll = false;
        $scope.checkBox.values = [
            { "key": 1, "value": "checkbox 1" },
            { "key": 2, "value": "checkbox 2" },
            { "key": 3, "value": "checkbox 3" }
        ];
       $scope.approveCheckAll = function(){
            for(var i=0; i< $scope.checkBox.values.length; i++){
                $scope.checkBox.values[i].isChecked = $scope.checkBox.approveAll;
            }
        };
       $scope.approveUnCheck = function() {
           for (var i = 0; i < $scope.checkBox.values.length; i++) {
               if (!$scope.checkBox.values[i].isChecked) {
                   $scope.checkBox.approveAll = false;
                   return;
               }else{
                   $scope.checkBox.approveAll = true;
               }
           }
       };


       $scope.rejectCheckAll = function(){
            for(var i=0; i< $scope.checkBox.values.length; i++){
                $scope.checkBox.values[i].isRejectChecked = $scope.checkBox.rejectAll;
            }
        };
       $scope.rejectUnCheck = function() {
           for (var i = 0; i < $scope.checkBox.values.length; i++) {
               if (!$scope.checkBox.values[i].isRejectChecked) {
                   $scope.checkBox.rejectAll = false;
                   return;
               }else{
                   $scope.checkBox.rejectAll = true;
               }
           }
       };
    });
})();
