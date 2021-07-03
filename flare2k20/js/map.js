function initMap() {
  var uluru = {lat: 72.664926, lng: 23.155886};
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  var marker = new google.maps.Marker({position: uluru, map: map});
}
