
const map = L.map('map').setView([48.3794, 31.1656], 5); // Центр України

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

map.on('click', function(e) {
  const story = prompt("Поділись своїм спогадом:");
  if (story) {
    L.marker(e.latlng)
      .addTo(map)
      .bindPopup(story)
      .openPopup();
  }
});
