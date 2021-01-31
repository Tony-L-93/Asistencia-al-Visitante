var movilesPositions;
var movilestados; 
function CargarPosiciones(id)
{
	$.ajax(
	{
		url: url+urlTrucks+id+'/positions/', 
		dataType: "json",
		type: "GET",
		async: false,
		contentType: "application/json; charset=utf-8",
		success: function(result)
		{
			
			var positions = result.positions;
			
			
				var listaPosiciones = new Array();
				var listaEstados=new Array();
				for(i = 0; i < positions.length; i++)
				{
					var posicion = positions[i].position;
					listaPosiciones.push(new L.latLng(posicion.lat, posicion.lon));
					listaEstados.push( positions[i].state);
				}
				 listaPosiciones;
				 movilesPositions=listaPosiciones;
				movilestados=listaEstados;
		}
			
	});


}

function CargarMoviles()
{

	$.ajax(
		{
            url:url+urlTrucks,
            dataType: "json",
			type: "GET",
			async: false,
			contentType: "application/json; charset=utf-8",
            success: function(result)
            {
              var todosmoviles=result.supportTrucks;

                todosmoviles.forEach(myFunction);

                function myFunction(item) {
                    var movil=null;
					
					CargarPosiciones(item.id);

					movil=new Movil(item.id,item.state_id,movilesPositions,movilestados);
			
					moviles.addmovil(movil);
                } 


            }
        });

        
}


CargarMoviles();
