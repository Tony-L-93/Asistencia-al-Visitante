
function CargarEstados()
{
    
	$.ajax(
		{
            url:url+urlStates,
            dataType: "json",
			type: "GET",
			async: false,
            contentType: "application/json; charset=utf-8", success: function(result)
            {
             
               DibujarEstadosenLista(result.states, 'states');
             
                    
            }
        });
        
       
}


CargarEstados();