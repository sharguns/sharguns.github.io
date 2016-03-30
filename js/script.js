$(document).ready(function(){
});

// $("a").smoothScroll();

// this is where we set up the variables - generic to all cities
function Location(name, country, description, latitude, longitude, list, photos){
	this.locationName = name;
	this.locationCountry = country;
	this.locationDescription = description;
	this.locationMaplat = latitude;
	this.locationMaplong = longitude;
	this.locationList = list;
	this.locationPhotos = photos;
}

// ---------------

// this is where we set up siem reap specific info
// section for where we may need to include content for longer sections
var siem_reap_desc = "The resort town of Siem Reap, in northwestern Cambodia, is gateway to the ruins of Angkor, the seat of the Khmer kingdom from the 9th-15th centuries. Angkor’s vast complex of intricate stone buildings includes preserved Angkor Wat, the main temple, which is pictured on Cambodia’s flag. Giant, mysterious faces are carved into the Bayon temple at Angkor Thom."
var siem_reap_latitude = "13.364047";
var siem_reap_longitude = "103.860313";
var siem_reap_list = ["Angkor Watt", "Angkor Thom", "Beach A", "Beach B", "Beach C"];
var siem_reap_photos = [1, 2, 3];


// this is where we define what variables are associated with the object
var siem_reap = new Location('Siem Reap', 'Cambodia', siem_reap_desc, siem_reap_latitude, siem_reap_longitude, siem_reap_list, siem_reap_photos);

// siem_reap.locationPhotos[2];

// this is where we set up siem reap specific info

$(document).ready(function(){

});


$('.fourth').click(function(){
	console.log("clickworks");
	console.log(siem_reap.locationMaplat);
	console.log(siem_reap.locationMaplong);
	console.log(siem_reap.locationDescription);
	console.log(siem_reap.locationDescription);
	console.log(siem_reap.locationlist);
	console.log(siem_reap.locationPhotos);
	// $(".first-box p").html(siem_reap.siem_reap_desc);
	// console.log("first-box p")

	$(".first-box p").html(siem_reap.locationDescription);
	$(".second-box ol li").html(siem_reap.locationList);
	$(".second-box ol li").html(siem_reap.locationList);


});

	// $('.fotorama').html('<img src="images/siem_reap_siem_reap_temple.jpg" />
 //                     <img src="images/siem_reap_siem_reap_temple.jpg">'


// > triggering event
// when clicking any one of the sections (class being #first #location)
// create the object for the onclick event so jquery to populate

// > the three parts that need to be dynamic are:

// 3 different objects:

// (a) .info-boxes #first-box p

// (b) .info-boxes #second-box .list li
// -array

// (c) .info-boxes #fotorama p
// // - array



var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 13.364047, lng: 103.860313},
    zoom: 9
  });
}

// var map;
// function initMap() {
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: -34.397, lng: 150.644},
//     zoom: 8
//   });
// }