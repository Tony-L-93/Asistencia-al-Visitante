
var Movil = function(id,estado,positions,estados)
{
    this.id = id;
    this.estado = estado;
    this.positions = positions;
    this.markerMap = null;
    this.tiempo=0;
    this.estados=estados;


    var actualIx = 0;

    this.run = function(callback) {
        var self = this;
        setTimeout(function() {
            callback(positions[actualIx]);

            actualIx += 1;
            if(actualIx < positions.length) {
                self.run(callback);
            }
        }, 1000);
    }

};

var EstadoMovil=function(descripcion,color)
{
    this.descripcion=descripcion;
    this.color=color;
}

var Centro= function(id,nombre,direccion,telefono,horario,email)
{
    this.id= id
    this.nombre= nombre;
    this.direccion= direccion;
    this.telefono= telefono;
    this.horario= horario;
    this.email= email;
};

var Transito = function(map) {
    this.map = map;
    this.movilsData = [];

    this.addmovil = function(movil) {

        var updater = function(newPosition) {
           

           var icono=obtenericono(movil.estados[movil.tiempo]);
           var color=estadosmoviles[movil.estados[movil.tiempo]].color;
            // Opción 1.
            if(movil.tiempo==0)
           {
            movil.markerMap=L.marker(newPosition,{icon:icono}).bindPopup('<b> Movil: </b>'+movil.id+'<br/><b>Estado: </b>'+estadosmoviles[movil.estados[movil.tiempo]].descripcion);
            movil.markerMap.addTo(map);
            
         
              DibujarMovilenLista(movil,"moviles");
              document.getElementById("est_"+movil.id).style.color=color;

        }

          else   {
             
            document.getElementById("est_"+movil.id).innerHTML=estadosmoviles[movil.estados[movil.tiempo]].descripcion;
            document.getElementById("est_"+movil.id).style.color=color;
            movil.markerMap.setLatLng(newPosition);
            movil.markerMap.setIcon(icono);
            movil.markerMap.setPopupContent('<b> Movil: </b>'+movil.id+'<br/><b>Estado: </b>'+estadosmoviles[movil.estados[movil.tiempo]].descripcion);   
            
            
          }
          movil.tiempo+=1;

    
        }
        this.movilsData.push({
            movil: movil,
            updater: updater
        })
    

    }
    this.start = function() {
        this.movilsData.forEach(function(data) {
            var movil = data.movil;
            movil.run(data.updater);
        });
    }

};



//Tamaño de cada icono
var iconMap = L.Icon.extend(
{
    options: 
    {
	iconSize:   [30, 30],
        iconAnchor:   [10, 15],
    popupAnchor:  [10, -10]
    
    }
});

var iconmoviles = new iconMap({iconUrl: '../img/marker-icon.png'  }); 
var iconmoviles2= new iconMap({iconUrl: '../img/marker-icon2.png'  });
var iconmoviles3 = new iconMap({iconUrl: '../img/marker-icon3.png'  });

var iconcentro1 = new iconMap({iconUrl: '../img/centroasistencia1.png'});
var iconcentro2= new iconMap({iconUrl: '../img/centroasistencia2.png'});
var iconcentro3 = new iconMap({iconUrl: '../img/centroasistencia3.png'});
var iconcentro4 = new iconMap({iconUrl: '../img/centroasistencia4.png'});
//Coordenada centrado en la posicion de la UNGS
var ungsLocation = [-34.5221554, -58.7000067];

//Objeto Mapa
var map = L.map('mapid').setView(ungsLocation, 13);


    // Agregamos los Layers de OpenStreetMap.
    var baseLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Agregamos el control para seleccionar Layers al mapa
    var layersControl = L.control.layers({
        "Base": baseLayer
    });
    layersControl.addTo(map);
    // hack:
    map.layersControl = layersControl;



var estadosmoviles=new Array();

var moviles=new Transito(map);
