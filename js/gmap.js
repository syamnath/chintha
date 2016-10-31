var mapLocation = new google.maps.LatLng(8.5302419,76.9349627); //change coordinates here
var marker;
var map;

function initialize() {
    var mapOptions = {
        zoom: 16, //change zoom here
        center: mapLocation
    
    };
    
    map = new google.maps.Map(document.getElementById('map-canvas'), 
    mapOptions);
    
    var image = 'img/flag.png';
    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        title: 'Chintha Publication', //change title here
        icon: image,
        animation: google.maps.Animation.DROP,
        animation: google.maps.Animation.BOUNCE,
        position: mapLocation
    });
    google.maps.event.addListener(marker, 'click', toggleBounce);
}

function toggleBounce() {
    
    if (marker.getAnimation() != null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}

google.maps.event.addDomListener(window, 'load', initialize);
