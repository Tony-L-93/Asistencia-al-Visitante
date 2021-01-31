



function loadAlertas(dia)
{

  var diastring="";
  if(dia==0)
  diastring="1";
  if(dia==1)
  diastring= "2";
  if(dia==2)
  diastring = "3";
  if(dia==3)
  diastring = "4";


  if(diastring.toString().length!=0)
  {


	$.ajax(
		{
            url:url+'/alerts/day/'+dia,
            dataType: "json",
		  	    type: "GET",
			      async: false,
			      contentType: "application/json; charset=utf-8",
            success: function(result)
            {
              var todaslasalertas=result.alerts;
              document.getElementById("alertas").innerHTML="";
              document.getElementById("alertas").innerHTML+="</br><h1>Dia: "+diastring+" </h1>";
               
                todaslasalertas.forEach(myFunction);

                function myFunction(item) {

                  var titulo=item.title;
                  var estado=item.status;
                  var date=item.date;
                  var hour= item.hour;
                  var descripcion=item.description;
                  var zonas="";
                  var modificado=item.update;

                  document.getElementById("alertas").innerHTML+=
                  "</br><b>Titulo: </b>"+titulo+
                  "</br><b>Estado: </b>"+estado+
                  "</br><b>Fecha: </b>"+date+
                  "</br><b>Hora: </b>"+hour+
                  "</br><b>Descripcion: </b>"+descripcion+
                  "</br><b>Zonas: </b>";

                  var cant_zonas=Object.keys(item.zones).length;
             
                  for( i=0;i<cant_zonas;i++){
                document.getElementById("alertas").innerHTML +='</br>'+ item.zones[i]+".";


                }
                document.getElementById("alertas").innerHTML +=  "</br><b>Modificado: </b>"+ modificado+'</br>';

                document.getElementById("alertas").innerHTML +="---------------------------------------------------"
              
           } 
  

            }
        });
      }
	 else{
		$.ajax(
		{
            url: urlsmn,
            dataType: "json",
		  	    type: "GET",
			      async: false,
			      contentType: "application/json; charset=utf-8",
            success: function(result)
            {
              var todaslasalertas=result;
              document.getElementById("alertas").innerHTML="";
              document.getElementById("alertas").innerHTML+="</br><h1>Alerta: Servicio Metereologico Nacional.</h1>";
               
                todaslasalertas.forEach(myFunction);

                function myFunction(item) {

                 
                  var titulo=item.title;
                  var estado=item.status;
                  var date=item.date;
                  var hour= item.hour;
                  var descripcion=item.description;
                  var zonas="";
                  var modificado=item.update;

                  document.getElementById("alertas").innerHTML+=
                  "</br><b>Titulo: </b>"+titulo+
                  "</br><b>Estado: </b>"+estado+
                  "</br><b>Fecha: </b>"+date+
                  "</br><b>Hora: </b>"+hour+
                  "</br><b>Descripcion: </b>"+descripcion+
                  "</br><b>Zonas: </b>";

                  var cant_zonas=Object.keys(item.zones).length;
             
                  for( i=0;i<cant_zonas;i++){
                document.getElementById("alertas").innerHTML +='</br>'+ item.zones[i];


                }
                document.getElementById("alertas").innerHTML +=  "</br><b>Modificado: </b>"+ modificado+'</br>';

                document.getElementById("alertas").innerHTML +="---------------------------------------------------"
          
              
              }
            }
        });
	 }
}




