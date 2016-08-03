/**
 * Created by Navaneeth on 6/14/2016.
 */
var one=angular.module('uimodule',['ui.router']);

one.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/home');
    $stateProvider.state('home',{url:'/home',templateUrl:'./uiroutehome.html',controller:'homecontroller'})
        .state('students',{url:'/students',templateUrl:'uiroutestudents.html',controller:'studentscontroller'})
        .state('details',{url:'/students/:id',templateUrl:'showme.html',controller:'showmecontroller'})
        .state('home.inpage',{url:'/inpage',templateUrl:'./pages.html',controller:'see'})
        .state('home.inpage2',{url:'/',templateUrl:'./inpages2.html',controller:'see2'})
});

one.controller('homecontroller',function($scope){
   $scope.heading="Home Page For UI Router";
    $scope.names="nava";
        $scope.doit="nitin";
});
one.controller('studentscontroller',function($scope){
   $scope.data=[{studentid:1,name:"navaneeth",place:"oklahoma"},
       {studentid:2,name:"nitin",place:"hyderabad"}];
});
one.controller('showmecontroller',function($scope){
   $scope.names="this is me";
});
one.controller('see',function($scope){
    $scope.pagedata=[{naming:"navaneeth",age:24},
        {naming:"nitin",age:23}];
});
one.controller('see2',function($scope){
    $scope.pagedata=[{naming:"josh",age:28},
        {naming:"nani",age:24}];
});
