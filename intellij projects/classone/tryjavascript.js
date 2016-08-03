/**
 * Created by Navaneeth on 6/15/2016.
 */
var modi=angular.module('mod3',["ui.router"]);
modi.config(function($stateProvider){
   $stateProvider.state('home',{url:'/home',templateUrl:'./cars.html',controller:"newcontroller"})
    .state('card',{url:'/cardetails/:c',templateUrl:'./cardetails.html',controller:"newcontroller1"})
       .state('card.nextopen',{url:'/nextopen',templateUrl:'./nextopen.html',controller:"newcontroller0"})


});
modi.controller('newcontroller',['$scope',function($scope){
    $scope.newdata=[{cars:"audi"},{cars:"honda"},{cars:"hyundai"}];
}]);
modi.controller('newcontroller1',['$scope',function($scope){
    $scope.carname={name:"camry",year:2004};
}]);
