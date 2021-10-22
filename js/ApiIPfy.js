const API_KEY = 'at_fDDGlxwXg3gieLuyLUprcAs7XqE24';


const format = {
    "ip": "8.8.8.8",
    "location": {
        "country": "US",
        "region": "California",
        "city": "Mountain View",
        "lat": 37.40599,
        "lng": -122.078514,
        "postalCode": "94043",
        "timezone": "-07:00",
        "geonameId": 5375481
    },
    "domains": [
        "0d2.net",
        "003725.com",
        "0f6.b0094c.cn",
        "007515.com",
        "0guhi.jocose.cn"
    ],
    "as": {
        "asn": 15169,
        "name": "Google LLC",
        "route": "8.8.8.0/24",
        "domain": "https://about.google/intl/en/",
        "type": "Content"
    },
    "isp": "Google LLC"
}


const IP = '190.239.25.5';
const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_fDDGlxwXg3gieLuyLUprcAs7XqE24&ipAddress=${IP}`;
getData(url)
.then(data => console.log(data))

getData('https://api.ipify.org?format=json')
.then(data => console.log(data))


// Peticion personalizada
async function getData(url=""){
    const response = await fetch(url,{
     //Opciones por defecto
        method:'GET',
        mode:'cors',
        cache:'no-cache',
        credentials:'same-origin',
        redirect:'follow',
        referrerPolicy:'no-referrer',
    })
    return response.json()
   }

   const formatMe = {
       ipAdress:"123.345.456",
       Location:'Brooklyn,NY,10001',
       timezone:"UTC-5:00",
       ISP:'SpaceX Starklink'
    }

 