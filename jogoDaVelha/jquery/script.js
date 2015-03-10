$(document).ready(function() {
		creatTable();
		contarClick();
        var total = 0;
		var x = [];    
		function creatTable(){
			for (var i = 1; i<8; i+=3) {
				var row = "<tr>"+
				           '<td><button class="styled-button-1" id="'+i+'">'+i+'</button></td>' +
				           '<td><button class="styled-button-1" id="'+(i+1)+'">'+(i+1)+'</button></td>' +
				           '<td><button class="styled-button-1" id="'+(i+2)+'">'+(i+2)+'</button></td>' +
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
                   
           	   }else if(total%2==1 && total!=9){
           	   	$(this).text("X");
           	   	$(this).off('click');  
           	   	 x[ $(this).attr("id") ] = 'X'; 
           	   }
           	   else{
           	   	alert("O Jogo terminou empate!!!");
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
			    for (var j = 1; j<4; j++) {
			    	console.log(j);
			    	if(x[j]==="X" && x[j+1]==="X" && x[j+2]==="X") {
                    	console.log("Jogador 1 Ganhou");
                    	return 1;	
				    }else if (x[j]==="O" && x[j+1]==="O" && x[j+2]==="O") {
				    	return 2;
				    }else if (x[j]==="X" && x[j+3]==="X" && x[j+6]==="X") {
				    	return 1;
				    }else if (x[j]==="O" && x[j+3]==="O" && x[j+6]==="O") {
				    	return 2;
				    }else if (x[j+2]==="X" && x[j+4]==="X" && x[j+6]==="X") {
				    	return 1;
				    }else if (x[j+2]==="O" && x[j+4]==="O" && x[j+6]==="O") {
				    	return 2;
				    }else if (x[j]==="X" && x[j+4]==="X" && x[j+8]==="X") {
				    	return 1;
				    }else if (x[j]==="O" && x[j+4]==="O" && x[j+8]==="O") {
				    	return 2;
				    }
			    	
			    }		
		};
        


		

		

	
});