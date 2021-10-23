proccessMyIp();

const inputIP = document.getElementById("form-input");
const Form = document.getElementById("form");

Form.addEventListener("submit", processInput);

function validateIP(ip) {
  const patronIp =
    /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(localhost)$/;
  if (patronIp.test(ip)) return true;
  return false;
}

async function fetchIpInformationJSON(IP = 0) {
  const API_KEY = "at_fDDGlxwXg3gieLuyLUprcAs7XqE24";
  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${IP}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function proccessMyIp() {
  fetch("https://api.ipify.org?format=json").then((data) => {
    fetchIpInformationJSON(data.ip).then((data) => {
      pintarDataMap(data);
      pintarDataInfo(data);
    });
  });
}

function processInput(e) {
  e.preventDefault();
  const ip = validateIP(inputIP.value);
  if (ip) {
    fetchIpInformationJSON(ip).then((data) => {
      pintarDataMap(data);
      pintarDataInfo(data);
    });
  }
}

function pintarDataInfo(data) {
    let ipAddress = document.getElementById("ip-address").innerText = data.ip;
    let location = document.getElementById('location').innerText=`${data.location.city},${data.location.region},${data.location.country}`
    let isp = document.getElementById('isp').innerText=data.isp
    let timezone = document.getElementById('timezone').innerText=data.location.timezone
}




function pintarDataMap(data) {
  
  const Token_MapBox =
    "pk.eyJ1IjoiZ29uemFsb2F4ZWxoIiwiYSI6ImNrdjFyYnltYjA5Z3IycGwweWtwcnZzOWQifQ.3LHakWc4sqPqz84a8YaQ4w";

  var mapboxTiles = L.tileLayer(
    "https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=" +
      Token_MapBox,
    {
      attribution:
        '©Mapbox © ',
      tileSize: 512,
      zoomOffset: -1,
    }
  );

  const coordenadas = [data.location.la, data.location.lng];
  var map = L.map("map").addLayer(mapboxTiles).setView(coordenadas, 15);

  //Mapas emergentes
  L.marker(coordenadas)
    .bindPopup("<b>Esta es la ubicacion de tu direccion IP</b><br>" + data.ip)
    .openPopup()
    .addTo(map);
}
