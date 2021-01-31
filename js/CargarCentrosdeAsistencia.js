function CargarCentros()
{      
    
	
   
	$.ajax({url: "centrosdeasistencia.json", success: function(result){
		DibujarCentros(result.data, 'data');
	});
	
}

CargarCentros();