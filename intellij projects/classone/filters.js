
///<reference path="new1.js"/>
news.filter("agenumbers",function(){
   return function(agenumber){
       switch(agenumber) {
           case 24:
               return "twentyfour";
           case 23:
               return "twentythree";
       }
   }
});

news.filter("research",function(){
   return function(searchs){
        switch(parseInt(searchs)){
            case 1:
                return "navaneeth";
            case 2:
                return "nitin";
        }
    }
});