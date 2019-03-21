
app=(function(){
	return {
		getCinemaByName:function(name){
                    return api.getCinemaByName(name,function(cinema){
                    	//$("#CinemaTable > tr").remove();
                    	
                    	var data =$("#CinemaTable");
                    	data.empty();
                    	data.append('<tr><th style="color:yellow">Cinema</th><th style="color:red">Function</th> <th style="color:yellow">sillas</th><th style="color:red">fecha</th><th style="color:yellow"> ver sillas </th></tr>');
                    	
                    	for (var i=0;i<cinema.functions.length;i++){
                    		//var concat='("'+cinema.name+'","'+cinema.functions[i].date+'","'+cinema.functions[i].movie.name+'")';
                    		var concat="('"+cinema.name+"','"+cinema.functions[i].date+"','"+cinema.functions[i].movie.name+"')";
                    		console.log(concat);
                    		data.append("<tr>"+
                    				'<td style="color:yellow">'+cinema.name+"</td>"+
                    				'<td style="color:red">'+cinema.functions[i].movie.name+"</td>"+
                    				'<td style="color:yellow">'+cinema.functions[i].freeSeats+"</td>"+
                    				'<td style="color:red">'+cinema.functions[i].date+"</td>"+
                    				"<td align='center'>"+'<button type="button" id="'+i+'" class="btn btn-primary" onclick="app.getSeats'+concat+'" data-toggle="modal" data-target="#ModalSillas">Ver</button>'+"</td>"+
                    				+"</tr>");
                    		//("name","date","movie")
                    	}
                    	
                    	
                    });
                },
        getSeats:function(name,date,movie){
        	//'"'+cinema.name+'","'+cinema.functions[i].date+'","'+cinema.functions[i].movie.name+
        	return api.getSeats(name,date,movie,function(seats){
        		var data=$("#SillasBody");
        		data.empty();
        		
        		for (var i=0;i<seats.length;i++){
        			var row=seats[i];
        			for(var j=0; j<row.length;j++){
        				//data.append(seat)
        				if(seats[i][j]){
        					data.append('<img src="/imagenes/free.png" height="42" width="42">');
        				}
        				else{
        					data.append('<img src="/imagenes/occupied.png" height="42" width="42">');
        				}
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
    			   app.getSeats(rows[0],rows[1],rows[3]);
    		   }
    	   }
    	   
       }
	

	}	
	
})();