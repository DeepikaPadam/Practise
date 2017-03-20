/**
 * Created by mdeepika on 17/3/17.
 */

(function(){
    angular.module("myApp").controller("tableController", function($scope,$filter,ngTableParams){
       /* $scope.users = [{"id":1,"first_name":"Philip","last_name":"Kim","email":"pkim0@mediafire.com","country":"Indonesia"},
            {"id":2,"first_name":"Judith","last_name":"Austin","email":"jaustin1@mapquest.com","country":"China"},
            {"id":3,"first_name":"Julie","last_name":"Wells","email":"jwells2@illinois.edu","country":"Finland"}];*/
        $scope.users = [
            { name: "Madhav Sai", age: 10, location: 'Nagpur' },
            { name: "Suresh Dasari", age: 30, location: 'Chennai' },
            { name: "Rohini Alavala", age: 29, location: 'Chennai' },
            { name: "Praveen Kumar", age: 25, location: 'Bangalore' },
            { name: "Sateesh Chandra", age: 27, location: 'Vizag' },
            { name: "Philip", age: 10, location: 'Indonesia' },
            { name: "Judith", age: 30, location: 'China' },
            { name: "Julie", age: 29, location: 'Finland' },
            { name: "Wells", age: 25, location: 'Ireland' },
            { name: "Gloria", age: 27, location: 'Indonesia' },
            { name: "Greene", age: 10, location: 'England' },
            { name: "Andrea", age: 30, location: 'Russia' },
            { name: "Austin", age: 29, location: 'USA' },
            { name: " Kim", age: 25, location: 'Korea' },
            { name: "George", age: 27, location: 'Australia' },
            { name: "Wilson", age: 10, location: 'UK' },
            { name: "John", age: 30, location: 'USA' },
            { name: "Moroni", age: 29, location: 'Canada' },
            { name: "Jacob", age: 25, location: 'London' },
            { name: "Simon", age: 27, location: 'England' },
        ];
        $scope.usersTable = new ngTableParams({
            page:1,
            count:5
        }, {
            total : $scope.users.length,
            getData : function($defer, params){
                $scope.data = params.sorting() ? $filter('orderBy')($scope.users, params.orderBy()) : $scope.users;
                $scope.data = params.filter() ? $filter('filter')($scope.data, params.filter()) : $scope.data;
                $scope.data = $scope.data.slice((params.page()-1)*params.count(),params.page()*params.count());
                $defer.resolve($scope.data);
            }

        });
    });
})();
