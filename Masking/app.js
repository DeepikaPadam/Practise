/**
 * Created by mdeepika on 24/3/17.
 */

var app = angular.module("myApp", []);

app.controller("myController", function($scope){

    $scope.mainStr = "";

    $scope.maskNumber = function(){
        var str = $scope.mainStr.slice(-4);
        var count ="";
        for(var i = ($scope.mainStr.length)-4; i>0; i--){
            count += '*';

        }
        $scope.mask = (count+str);
    };
});
