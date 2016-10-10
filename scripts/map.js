// When clicking on maps link
function mapLinkClick() {
  hideAllPages();
  showMapPage();
  pauseSong();
  playClick();
  showHamburger();
}

function showMapPage() {
  var mapPage = document.getElementById('map');
  mapPage.style.display = 'block';
  currentPage = 'map';

  google.maps.event.trigger(map, 'resize');
  map.setCenter({lat: 20.257044, lng: -39.287109});
}

function initMap() {
  map = new google.maps.Map(document.getElementById('map-google'), {
    center: {lat: 20.257044, lng: -39.287109},
    zoom: 3,
    minZoom: 3,
    maxZoom: 8,
    scrollwheel: false,
    styles: pirate_style,
    streetViewControl: false,
    mapTypeControl: false
  });

  // Canada marker
  var canada_infowindow = new google.maps.InfoWindow({
    content: '<h1 style="font-family:\'Oxygen\', sans-serif; font-size: 1.2em; color: #4CAF50; padding: 15px; line-height: 1.5;">Canadian Mining</h1>' +
    '<p style="font-family:\'Oxygen\', sans-serif; font-size: 1em; padding: 15px; line-height: 1.5;">Between 50% and 70% of ALL mining in Latin America is now done by Canadian firms. <span style="font-family:\'Oxygen\', sans-serif; font-size: 0.8em; margin: 5px;">David Hill (theguardian.com)</span></p>',
    maxWidth: 200
  });

  var canada = new google.maps.Marker({
    position: {lat: 43.653226, lng: -79.383184},
    map: map,
    title: 'Canada'
  });
  canada.addListener('click', function() {
    canada_infowindow.open(map, canada);
  });

  // Amazon Colombia marker
  var colombia_infowindow = new google.maps.InfoWindow({
    content: '<h1 style="font-family:\'Oxygen\', sans-serif; font-size: 1.2em; color: #4CAF50; padding: 15px; line-height: 1.5;">Yaigoje Apaporis National Park</h1>' +
    '<p style="font-family:\'Oxygen\', sans-serif; font-size: 1em; padding: 15px; line-height: 1.5;">In a legal battle between Consigo Resources Ltd. (Victoria, B.C) and some Amazonian tribes, the Colombian Constitutional Court ordered the mining company to cease any exploitation of the National Park, which is part of the Amazon rainforest. Consigo is now suing Colombia for 16.5 billion.</p>',
    maxWidth: 200
  });

  var colombia = new google.maps.Marker({
    position: {lat: -4.2118506, lng: -69.9394869},
    map: map,
    title: 'Leticia'
  });
  colombia.addListener('click', function() {
    colombia_infowindow.open(map, colombia);
  });

  // Amazon Brazil marker
  var brazil_infowindow = new google.maps.InfoWindow({
    content: '<h1 style="font-family:\'Oxygen\', sans-serif; font-size: 1.2em; color: #4CAF50; padding: 15px; line-height: 1.5;">Brazil vs. Belo Sun Mining</h1>' +
    '<p style="font-family:\'Oxygen\', sans-serif; font-size: 1em; padding: 15px; line-height: 1.5;">Brazil ordered the removal of Canadian based gold mining project along the Xingu River, a tributary of the Amazon river.</p>',
    maxWidth: 200
  });

  var brazil = new google.maps.Marker({
    position: {lat: -2.504264, lng: -54.9546421},
    map: map,
    title: 'Alter do Chao'
  });
  brazil.addListener('click', function() {
    brazil_infowindow.open(map, brazil);
  });

  // Amazon Peru marker
  var peru_infowindow = new google.maps.InfoWindow({
    content: '<h1 style="font-family:\'Oxygen\', sans-serif; font-size: 1.2em; color: #4CAF50; padding: 15px; line-height: 1.5;">Economy vs. Biodiversity</h1>' +
    "<p style='font-family:\'Oxygen\', sans-serif; font-size: 1em; padding: 15px; line-height: 1.5;'>In the Peruvian Amazon, 5 protected areas were created. However, the country's legislation was loosened to promote foreign investment. They are facing a huge mining issue, mainly due to illegal mining.</p>",
    maxWidth: 200
  });

  var peru = new google.maps.Marker({
    position: {lat: -5.201199, lng: -74.593192},
    map: map,
    title: 'Pacaya-Samiria Reserve'
  });
  peru.addListener('click', function() {
    peru_infowindow.open(map, peru);
  });

  // Amazon Ecuador marker
  var ecuador_infowindow = new google.maps.InfoWindow({
    content: '<h1 style="font-family:\'Oxygen\', sans-serif; font-size: 1.2em; color: #4CAF50; padding: 15px; line-height: 1.5;">Compensation for victims of Contamination</h1>' +
    '<p style="font-family:\'Oxygen\', sans-serif; font-size: 1em; padding: 15px; line-height: 1.5;">The Canadian Supreme Court ordered Chevron Corp. to compensate indigenous peoples of the Ecuadorian Amazon for social harm and oil contamination of the Tapajos River, a tributary of the Amazon River.</p>',
    maxWidth: 200
  });

  var ecuador = new google.maps.Marker({
    position: {lat: -1.492393, lng: -78.002413},
    map: map,
    title: 'Puyo'
  });
  ecuador.addListener('click', function() {
    ecuador_infowindow.open(map, ecuador);
  });

}
