/**
 * Created by Navaneeth on 6/7/2016.
 */
var news=angular.module("myapps",[]);
news.controller("mycontroller1",function($scope,myfactory,myfactory1){
    $scope.names=[{ones:"navaneeth",age:24},
    {ones:"nitin",age:23}];
    myfactory.name(function(results){
        $scope.data=results.records;
        $scope.show=results.record;
    });

});

news.factory('myfactory1',function($http){
    return {datas : function(getdata){
        $http({methdo:'GET',url:'data1.json'})
            .success(function(data){
                getdata(data);
            })
    }
    };
});

news.factory("myfactory",function($http){

    return {name : function(getresults){
        $http({method:'GET',url:'http://www.w3schools.com/angular/customers.php'})
        .success(function(data,status,header,config){
            getresults(data);
        })
    }};
});