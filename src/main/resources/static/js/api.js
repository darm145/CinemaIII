api=(function(){
    return{
        getCinemaByName:function(name,callback){
            $.get("/cinema/"+name,function(data){
                callback(data);
            });
        },
        getSeats:function(name,date,movie,callback){
    	     $.get("/cinema/"+name+"/"+date+"/"+movie+"/seats",function(data){
    	            callback(data);
    	        });
    	 } 
        
	    
    } 
})();