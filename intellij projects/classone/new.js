/**
 * Created by Navaneeth on 5/31/2016.
 */

var http= new XMLHttpRequest();
url="sto.json";

http.onreadystatechange=function(){
    if(http.readystate == 4 && http.readystate == 200){
        names(http.responseText);
    }
}

http.open("GET",url,true);
http.send();

var modules=angular.module("myapp",[]);
var modules2=angular.module("myapp2",[]);
modules.controller("mycontroller",function($scope){
    $scope.students=[{name:"navaneeth",age:24,like:0,dislike:0},{name:"yashu",age:24,like:0,dislike:0},
    {name:"nitn",age:23,like:0,dislike:0}];
    $scope.increase=function (student){
        student.like++;
    }
    $scope.decrease=function (student){
        student.dislike++;
    }
});
modules.controller("mycontroller1",function($scope){
    $scope.names=function(response){
        $scope.nows=JSON.parse(response);
    };

    $scope.obj=function(){
        $scope.change={};
    }
});
modules2.controller("mycontroller2",function($scope){
    $scope.stor=[];
    $scope.strin='';
    $scope.nextss=function(){
        $scope.stor.push($scope.strin);
        $scope.strin='';
    }

});

var two=angular.module("contain",["myapp","myapp2"]);
angular.bootstarp(two,["contain"]);
