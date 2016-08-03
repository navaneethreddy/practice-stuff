/**
 * Created by Navaneeth on 6/12/2016.
 */
one.filter('words',function(){
   return function(input){
     switch(input){
         case 1:
             return "one";
         break;
         case 2:
             return "two";
         break;
         case 3:
             return "three";
         break;
     }
   };
});