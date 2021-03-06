/**
 * Created by mdeepika on 8/3/17.
 */
(function(){
    'use strict';

    var app = angular.module("myApp", ["ng-fusioncharts"]);

    app.controller('MyController', function($scope) {

        $scope.myDataSource = {
            chart: {
                caption: "Harry's SuperMart",
                subCaption: "Top 5 stores in last month by revenue",
                numberPrefix: "$",
                theme: "carbon"
            },
            data: [{
                label: "Bakersfield Central",
                value: "880000"
            }, {
                label: "Garden Groove harbour",
                value: "730000"
            }, {
                label: "Los Angeles Topanga",
                value: "590000"
            }, {
                label: "Compton-Rancho Dom",
                value: "520000"
            }, {
                label: "Daly City Serramonte",
                value: "330000"
            }]
        };


   $scope.data= {
        chart: {
            caption: "Monthly revenue for last year",
            subCaption: "Harry's SuperMart",
            xAxisName: "Month",
            yAxisName: "Revenue",
            numberPrefix: "$",
            theme: "zune,zune-v1"
    },
        data: [
        {
            "label": "Jan",
            "value": "420000"
        },
        {
            "label": "Feb",
            "value": "810000"
        },
        {
            "label": "Mar",
            "value": "720000"
        },
        {
            "label": "Apr",
            "value": "550000"
        },
        {
            "label": "May",
            "value": "910000"
        },
        {
            "label": "Jun",
            "value": "510000"
        },
        {
            "label": "Jul",
            "value": "680000"
        },
        {
            "label": "Aug",
            "value": "620000"
        },
        {
            "label": "Sep",
            "value": "610000"
        },
        {
            "label": "Oct",
            "value": "490000"
        },
        {
            "label": "Nov",
            "value": "900000"
        },
        {
            "label": "Dec",
            "value": "730000"
        }]
    };
    });

})();
