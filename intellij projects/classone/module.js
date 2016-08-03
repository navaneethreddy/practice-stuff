/**
 * Created by Navaneeth on 6/12/2016.
 */
var one=angular.module("myapp1",["ngRoute"]);
one.config(function($routeProvider){
    $routeProvider.when("/home",{templateUrl:"./home.html",controller:"homecontroller as home"})
        .when("/courses",{templateUrl:"./courses.html",controller:"coursescontroller"})
        .when("/students",{templateUrl:"./students.html",controller:"studentscontroller"})
        .otherwise({redirectTo:'/home'})

});
   one.controller("mycontroller",['$scope',function($scope){
        $scope.headname="Welcome To Route In AngularJs";
    }]);
one.controller('coursescontroller',function($scope){
    $scope.heading="courses page";
        $scope.courseslist=[{name:"C"},{name:"C+"},{name:"JAVA"},{name:"JAVA SCRIPT"}];
});
one.controller("studentscontroller",['$scope','httpserver','$q','againhttp',function($scope,httpserver,$q,againhttp){
    $scope.hname="List Of Students";
    $scope.words=[{id:1,name:"navaneeth"},
        {id:2,name:"chintu"},
        {id:3,name:"nitin"}];
        httpserver.datas(function(result){
            $scope.two=result.records;
        });
    againhttp.againdatas().then(function(results){
        $scope.four=results.records;
    })
}]);
one.controller("homecontroller",function(){
    this.homepage="HOME PAGE";
});
