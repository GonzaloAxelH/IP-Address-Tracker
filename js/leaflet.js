
const Token_MapBox ="pk.eyJ1IjoiZ29uemFsb2F4ZWxoIiwiYSI6ImNrdjFyYnltYjA5Z3IycGwweWtwcnZzOWQifQ.3LHakWc4sqPqz84a8YaQ4w";

var mapboxTiles = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=' + Token_MapBox, {
       attribution: '© <a href="https://www.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
       tileSize: 512,
       zoomOffset: -1
});


const coordenadas  =[-17.634581, -71.306594]
var map = L.map('map')
  .addLayer(mapboxTiles)
  .setView(coordenadas, 15);




//marcadores

//Mapas emergentes
L.marker(coordenadas)
    .bindPopup("<b>Hello world!</b><br>I am a popup.")
    .openPopup()
    .addTo(map);


//circulos
var circle = L.circle(coordenadas, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius:0
}).addTo(map);


//eventos
function onMapClickAlert(e) {
    alert("You clicked the map at " + e.latlng);
}

//map.on('click', onMapClickAlert);

//Abrir ventana emergente con un evento
var popup = L.popup();

function onMapClickModal(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClickModal);



