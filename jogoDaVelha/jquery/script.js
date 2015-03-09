$(document).ready(function() {
		creatTable();
		contarClick();
        var total = 0;
		var x = [];    
		function creatTable(){
			for (var i = 1; i<4; i++) {
				var row = "<tr>"+
				           '<td><button class="styled-button-1" id="'+i+'">'+i+'</button></td>' +
				           '<td><button class="styled-button-1" id="'+(i+3)+'">'+(i+3)+'</button></td>' +
				           '<td><button class="styled-button-1" id="'+(i+6)+'">'+(i+6)+'</button></td>' +
				           '</tr>';
				$("#table1").append(row);
		    }
			
		};
		function contarClick(){
           $("button").on("click",function(){
           	   total = parseInt(1+total) ;
           	   if(total%2==0){
                  $(this).text("O");    
                  $(this).off('click');
                  x[ $(this).attr("id") ] = 'O';
                   
           	   }else{
           	   	$(this).text("X");
           	   	$(this).off('click');  
           	   	 x[ $(this).attr("id") ] = 'X'; 
           	   }
           	   var vencedor = 0;
           	   vencedor = logica();
           	   	if(vencedor==1){
           	   		alert("Jogador 1, vencedor!!!");
           	   		$('button').off('click');
           	   	}else if(vencedor==2){
           	   		alert("Jogador 2, vencedor!!!");
           	   		$('button').off('click');
           	   	} 
           }); 	
		};
		function logica(){
				for (var j = 1; j < 8; j+=3) {
                  	console.log(j);
                  	if(x[j]==="X" && x[j+1]==="X" && x[j+2]==="X") {
                    	console.log("Jogador 1 Ganhou");
                    	return 1;	
				    }else if (x[j]==="O" && x[j+1]==="O" && x[j+2]==="O") {

				    	return 2;
				    }
					for (var i = 1; i < 4; i++) {
						if(x[i]==="X" && x[i+3]==="X" && x[i+6]==="X") {							
		                    console.log("Jogador 1 Ganhou");	
		                    return 1;
						}else if (x[i]==="O" && x[i+3]==="O" && x[i+6]==="O") {

							console.log("Jogador 2 Ganhou");	
							return 2;
						}
					}
					
			    }
			    
			
			
		};
        


		

		

	
});