
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
                    				"<td align='center'>"+'<form><input id="fun'+i+'" type=submit value="Ver">'+"</td>"+
                    				+"</tr>");
                    	}
                    });
                }

	}	

})();