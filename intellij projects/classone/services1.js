/**
 * Created by Navaneeth on 6/12/2016.
 */
one.factory('httpserver',function($http){
   return {datas : function(show,show1){
       $http({method:'GET',url:'http://www.w3schools.com/angular/customers.php'})
           .success(function(data,status,header,config){
            show(data);
       })
           .error(function(data){
               show1("unknown");
           })
   }
   };
});

one.service('againhttp',function($http,$q){
   this.againdatas = function(){
        var de = $q.defer();
       $http({method:'GET',url:'http://www.w3schools.com/angular/customers.php'})
           .success(function(data,status){
               de.resolve(data);
           });
       return de.promise;
   }

});