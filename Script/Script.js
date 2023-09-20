let latitudine = 41.9027835
let longitudine = 12.4963655

navigator.geolocation.getCurrentPosition(function(event){
     console.log(event);
     latitudine = event.coords.latitude;
     longitudine = event.coords.longitude;
     createwMap()
}, function(event){
     createwMap()
})

function createwMap(){
     let map = L.map('map').setView([latitudine, longitudine], 13);
     L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marker = L.marker([latitudine, longitudine]).addTo(map);

map.on("click", function(event){
     marker.remove();
     marker = L.marker([event.latlng.lat, event.latlng.lng]).addTo(map);

})
}


