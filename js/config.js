var heroku = "https://assistanceservices.herokuapp.com/api";
var local = "http://localhost:3000/api/";
var alertssmn= "https://ws.smn.gob.ar/alerts/type/AL/";

var Config = {
    url: heroku,
    urlalertssmn: alertssmn
}

var url = Config.url;
var urlTrucks = '/supporttrucks/';
var urlStates = '/truckstates/';
var urlsmn=Config.urlalertssmn;