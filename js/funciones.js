function DibujarCentroDeAsistencia(supportTruck)
{
       
        var iconoc=obtenericonocentro(supportTruck.id_centro);
      
        var id= supportTruck.id_centro;
        var nombre= supportTruck.nombre;
        var direccion= supportTruck.direccion;
        var telefono= supportTruck.telefono;
        var horario= supportTruck.horario;
        var email= supportTruck.email;
        // Creamos un marker.
        
      var centro=new Centro(id,nombre,direccion,telefono,horario,email);

		var p = L.marker(L.latLng(supportTruck.coordenada.lat, supportTruck.coordenada.lon),{icon:iconoc})
            .bindPopup('<b>Nombre: </b>'+nombre+ '<br/><b>Dirección: </b>'+direccion+
            '<br/><b>Telefono: </b>'+telefono+
            '<br/><b>Horario: </b>'+horario+
            '<br/><b>Email: </b>'+email );
        p.addTo(map);	
        DibujarCentrosenLista(centro,"centro");

}

function DibujarCentrosenLista(centro,nodeId)
{
    var li = $('<li>');
    li.append("<b>"+centro.nombre+"</b>"+
    "</br> Dirección: "+centro.direccion+
    "</br> Telefono: "+centro.telefono+
    "</br> Horario: "+centro.horario+
    "</br> Email:"+centro.email );
    $("#"+nodeId).append(li);
}
 
function DibujarCentrosenLista(centro,nodeId)
{
    var li = $('<li>');
    li.append("<b>"+centro.nombre+"</b>"+
    "</br> Dirección: "+centro.direccion+
    "</br> Telefono: "+centro.telefono+
    "</br> Horario: "+centro.horario+
    "</br> Email:"+centro.email );
    $("#"+nodeId).append(li);
	
}

function DibujarMovilenLista(movil,nodeId)
{
    var li = $('<li>');
    li.append("<b id='"+movil.id+"'>"+movil.id+"</b>"+" &nbsp &nbsp Estado:    "+ "&nbsp &nbsp  <a id='est_"+movil.id+"'>"+estadosmoviles[movil.estados[movil.tiempo]].descripcion+"</a>");
    $("#"+nodeId).append(li);
}

var obtenericonocentro=function(id){
    if (id==1)
    return iconcentro1;
    if (id==2)
    return iconcentro2;
    if (id==3)
    return iconcentro3;
    if (id==4)
    return iconcentro4;

}


var obtenericono=function(estado){
   
    if(estado==0)
    return iconmoviles;
    if(estado==1)
    return iconmoviles2;
    if(estado==2)
    return iconmoviles3;

}

function DibujarEstadosenLista(states, nodeId) {        
    states.forEach(function(state) {
        var color="";
            var li = $('<li>');
            $("#"+nodeId).append(li);
  
            if(state.id=="0"){
                li.append(state.description).css({'color':'red'});
                color="red";
            }
            if(state.id=="1"){
                li.append(state.description).css({'color':'silver'});
                color="silver";
            }
            if(state.id=="2"){
                li.append(state.description).css({'color':'black'});
                color="black";
            }


            var estado=new EstadoMovil(state.description,color);
            estadosmoviles.push(estado);
        });
    }
  
  