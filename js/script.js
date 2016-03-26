// this is where we set up the variables
function Location(name, country, description, map, list, photos){
	this.locationName = name;
	this.locationCountry = country;
	this.locationDescription = description;
	this.locationMap = map;
	this.locationList = list;
	this.locationPhotos = photos;
}

// section for where we may need to spell out other variations that are longer
var siem_reap_desc = "The resort town of Siem Reap, in northwestern Cambodia, is gateway to the ruins of Angkor, the seat of the Khmer kingdom from the 9th-15th centuries. Angkor’s vast complex of intricate stone buildings includes preserved Angkor Wat, the main temple, which is pictured on Cambodia’s flag. Giant, mysterious faces are carved into the Bayon temple at Angkor Thom."
var siem_reap_lat_long = "13.364047" "103.860313"
var siem_reap_list = ["Angkor Watt", "Angkor Thom", "Beach A", "Beach B", "Beach C"];
var siem_reap_photos = [1, 2, 3];

// this is where we define what variables are associated with the object
var siem_reap = new Location('Siem Reap', 'Cambodia', siem_reap_desc, siem_reap_lat_long, siem_reap_list, siem_reap_photos);

// siem_reap.locationPhotos[2];

$('#fourth-box').onclick(function(){
	
	$(.info-boxes #first-box p).html(siem_reap_desc)

	$('.fotorama').html('<img src="images/siem_reap_siem_reap_temple.jpg" />
                     <img src="images/siem_reap_siem_reap_temple.jpg">'
});


// > triggering event
// when clicking any one of the sections (class being #first #location)
// create the object for the onclick event so jquery to populate

// > the three parts that need to be dynamic are:

// 3 different objects:

(a) .info-boxes #first-box p

(b) .info-boxes #second-box .list li
-array

(c) .info-boxes #fotorama p
// - array



var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 13.364047, lng: 103.860313},
    zoom: 9
  });
}

