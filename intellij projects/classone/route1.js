/**
 * Created by Navaneeth on 6/13/2016.
 */
routeapp.config(function($routeProvider){
   $routeProvider.when("/home",{templateUrl:"./home1.html",controller:'homecontroller'})
                  .when('/details',{templateUrl:'./details.html',controller:'detailcontroller'})
       .when('/details/:id',{templateUrl:'./links.html',controller:"linkcontroller"})
       .otherwise({redirectTo:'/home'});
});
routeapp.controller('homecontroller',function($scope){
   $scope.hpage="HOME PAGE";
});
routeapp.controller('detailcontroller',function($scope){
   $scope.dataa=[{id:1,name:"navaneeth",place:"oklahoma"},
                  {id:2,name:"nitin",place:"iran"}];
});
routeapp.controller('linkcontroller',function($scope,$routeParams){
   if($routeParams.id == 1){
      $scope.listofdata=[{name:"navaneeth",place:"oklahoma",age:24},
         { name:"navaneeth",place:"oklahoma",age:24}];
   }
});