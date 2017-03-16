/**
 * Created by mdeepika on 16/3/17.
 */

(function(){
    angular.module("myApp").service('jsonService', function ($http, $q) {
        this.getData = function() {
            return $http.get("js/data.json")
                .then(function(response) {
                    console.log(response.data);
                    return response.data;
                }, function(error) {
                    return $q.reject(error);
                });
        };
    });
})();
