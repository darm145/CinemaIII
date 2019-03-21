
app=(function(){
	return {
		getCinemaByName:function(name){
                    return api.getCinemaByName(name,function(cinema){
                    	//$("#CinemaTable > tr").remove();
                    	
                    	var data =$("#CinemaTable");
                    	data.empty();
                    	data.append("<tr><th>Cinema</th><th>Function</th> <th>sillas</th><th>fecha</th><th> ver sillas </th></tr>");
                    	
                    	for (var i=0;i<cinema.functions.length;i++){
                    		data.append("<tr>"+
                    				"<td>"+cinema.name+"</td>"+
                    				"<td>"+cinema.functions[i].movie.name+"</td>"+
                    				"<td>"+cinema.functions[i].freeSeats+"</td>"+
                    				"<td>"+cinema.functions[i].date+"</td>"+
                    				"<td align='center'>"+'<button type="button" id="'+i+'" class="btn btn-primary" onclick="app.findLocation('+i+')" data-toggle="modal" data-target="#ModalSillas">Ver</button>'+"</td>"+
                    				+"</tr>");
                    	}
                    	
                    	
                    });
                },
        getSeats:function(name,date,movie){
        	return api.getSeats(name,date,movie,function(seats){
        		var data=$("#SillasBody");
        		data.empty();
        		
        		for (var i=0;i<seats.length;i++){
        			var row=seats[i];
        			for(var j=0; j<row.length;j++){
        				//data.append(seat)
        				data.append(seats[i][j]+" ");
        			}
        			data.append("<br>");
        		}
        		
        	});
        },
       findLocation: function(ide){
    	   var data=$("#CinemaTable");
    	   console.log("holi");
    	   app.getSeats("cineMark","2018-12-18 15:30","Miedo");
    	   var lon =data.length;
    	   var i=0;
    	   while(i<lon){
    		   row=data.rows[i];
    		   if(row[4].id==ide){
    			   getSeats(rows[0],rows[1],rows[3]);
    		   }
    	   }
    	   
       }
	

	}	
	
})();