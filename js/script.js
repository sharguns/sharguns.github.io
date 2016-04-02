// GENERAL upon page load

$(document).ready(function(){

$("#hoi-an").hide();
$("#kerala").hide();
$("#siem-reap").hide();
$("#hawaii").hide();
$("#new-york").hide();
$("#lagos").hide();
$("#barbados").hide();
$("#byron-bay").hide();

});

// smoothScroll.init();
// $("#scroll").smoothScroll();


// default map (tulum)
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 20.214987, lng: -87.4313113},
    zoom: 10
  });
}

// ----------------------
	// LOCATION ONE: TULUM

	function Location(name, country, description, latitude, longitude, list, photos){
		this.locationName = name;
		this.locationCountry = country;
		this.locationDescription = description;
		this.locationMaplat = latitude;
		this.locationMaplong = longitude;
		this.locationList = list;
		this.locationPhotos = photos;
	}


	// section for where we may need to include content for longer sections

	var tulum_desc = "Best known for its archaeological site, Tulum is a walled Maya city of the post-Classic age perched dramatically on a rocky cliff overlooking the Caribbean. The coastline south of the site is packed with palapa hotels and upscale retreats for a well-heeled crowd seeking a rustic hideaway.</br></br>This stretch of incredible white beaches has become the unofficial center of the Tulum Hotel Zone -- a collection of about 30 small hotels stretching from the Tulum ruins south to the entrance to the Sian Ka'an Biosphere Reserve."
	var tulum_latitude = "13.364047";
	var tulum_longitude = "103.860313";
	var tulum_list = ["Pay homage to the Mayan Ruins with a bike tour", "Take a swim in the Cenotes Dos Ojos or Gran Cenote", "Try the Ceviche and Guacamole at Zamas", "Yoga by the beach at Maya Tulum", "Dine at Hartwood or Posada Margherita and have a drink at Casa Jaguar"];
	var tulum_photos = ["images/siem_reap/siem_reap_ankor_temple.jpg", "images/siem_reap/siem_reap_ankor_temple.jpg", "images/siem_reap/siem_reap_ankor_temple.jpg"];

	// this is where we define what variables are associated with the object
	var tulum = new Location('Tulum', 'Mexico', tulum_desc, tulum_latitude, tulum_longitude, tulum_list, tulum_photos);


	// triggering event
	$('.first').click(function(){

	// what happens once triggered
	console.log("clickworks");
	console.log(tulum.locationMaplat);
	console.log(tulum.locationMaplong);
	console.log(tulum.locationDescription);
	console.log(tulum.locationList);
	console.log(tulum.locationPhotos);

	// what happens to the first box
	$(".first-box p").html(tulum.locationDescription);

	// map changes	
	var map;
	function initMap() {
	  map = new google.maps.Map(document.getElementById('map'), {
	    center: {lat: 20.214987, lng: -87.4313113},
	    zoom: 10
	  });
	}
	// call the function
	initMap()

	// function newLocation(newLat,newLng){
	// 		map.setCenter({
	// 			lat : newlat,
	// 			lng : newLng
	
	// 	newLocation(48,11);


	// what happens to the second box
	$(".second-box #list-one").html(tulum.locationList[0]);
	$(".second-box #list-two").html(tulum.locationList[1]);
	$(".second-box #list-three").html(tulum.locationList[2]);
	$(".second-box #list-four").html(tulum.locationList[3]);
	$(".second-box #list-five").html(tulum.locationList[4]);

	// what happens to the third box
	
	// normally, would be achieved by:
	// $(".third-box #first-image").attr("src", siem_reap.locationPhotos[0]);
	// however, fotorama doesn't allow overriding the class/ div

	$("#tulum").show();
	$("#hoi-an").hide();
	$("#kerala").hide();
	$("#siem-reap").hide();
	$("#hawaii").hide();
	$("#new-york").hide();
	$("#lagos").hide();
	$("#barbados").hide();
	$("#byron-bay").hide();
	});



// ----------------------
	// LOCATION TWO: HOI AN

	function Location(name, country, description, latitude, longitude, list, photos){
		this.locationName = name;
		this.locationCountry = country;
		this.locationDescription = description;
		this.locationMaplat = latitude;
		this.locationMaplong = longitude;
		this.locationList = list;
		this.locationPhotos = photos;
	}


	// section for where we may need to include content for longer sections

	var hoi_an_desc = "A quaint old town of some 844 structures protected as historical landmarks, with the unique influence of Chinese and Japanese traders who passed through (or settled) still  felt. It's a picturesque town, small enough to cover easily on foot, with lots of good nooks and crannies, shops, and gastronomic delights to discover. Wander among historic homes and temples, perhaps stop to lounge in an open-air cafe, gaze at the oddities and exotic foods in the market, or take a sampan ride down the lazy river."
	var hoi_an_latitude = "13.364047";
	var hoi_an_longitude = "103.860313";
	var hoi_an_list = ["Stroll through the town at night and take in the lights and colourful glow of the thousands of beautiful lanterns that adorn the river", "Sample the cuisine with local and French influences - from Banh Mi to Creme Caramel", "Take advantage of the abundance of local high quality silk houses - get an outfit made to measure at one of the many local tailors", "Spend an evening by Cua Dai beach - the spanning view and warm water will invite you to unwind amongst the locals who do the same", "Choose your own produce at the market as part of the local cooking classes that invite you to learn the ways of some favourite fresh Vietnamese dishes"];
	var hoi_an_photos = ["images/siem_reap/siem_reap_ankor_temple.jpg", "images/siem_reap/siem_reap_ankor_temple.jpg", "images/siem_reap/siem_reap_ankor_temple.jpg"];

	// this is where we define what variables are associated with the object
	var hoi_an = new Location('Hoi An', 'Vietnam', hoi_an_desc, hoi_an_latitude, hoi_an_longitude, hoi_an_list, hoi_an_photos);


	// triggering event
	$('.second').click(function(){

	// what happens to the first box
	$(".first-box p").html(hoi_an.locationDescription);

	// map changes	
	var map;
	function initMap() {
	  map = new google.maps.Map(document.getElementById('map'), {
	    center: {lat: 15.8801, lng: 108.3380},
	    zoom: 10
	  });
	}
	// call the function
	initMap()

	// what happens to the second box
	$(".second-box #list-one").html(hoi_an.locationList[0]);
	$(".second-box #list-two").html(hoi_an.locationList[1]);
	$(".second-box #list-three").html(hoi_an.locationList[2]);
	$(".second-box #list-four").html(hoi_an.locationList[3]);
	$(".second-box #list-five").html(hoi_an.locationList[4]);

	// what happens to the third box

	$("#tulum").hide();
	$("#hoi-an").show();
	$("#kerala").hide();
	$("#siem-reap").hide();
	$("#hawaii").hide();
	$("#new-york").hide();
	$("#lagos").hide();
	$("#barbados").hide();
	$("#byron-bay").hide();
	});

// ----------------------
	// LOCATION THREE: KERALA

	function Location(name, country, description, latitude, longitude, list, photos){
		this.locationName = name;
		this.locationCountry = country;
		this.locationDescription = description;
		this.locationMaplat = latitude;
		this.locationMaplong = longitude;
		this.locationList = list;
		this.locationPhotos = photos;
	}


	// section for where we may need to include content for longer sections

	var kerala_desc = "A seamless landscape of palm-lined beaches rising to meet steamy jungles and plantation-covered hills, Kerala is watered by no less than 44 tropical rivers. Once thronged by merchants clambering to trade for spices, today the coast is often bustling with visitors who come here primarily to unwind and indulge. This is, after all, where succumbing to a therapeutic Ayurvedic massage is as mandatory as idling away an afternoon aboard a slowly drifting kettuvallam, or sipping coconut water under a tropical sun before taking in a ritualized Kathakali dance."
	var kerala_latitude = "13.364047";
	var kerala_longitude = "103.860313";
	var kerala_list = ["Take a boat down the waterways - taking in the canopies and calm strides", "Try the coconut-based local cuisine - from the fish cooked in local spices to the refreshing and hydrating nature of the fresh coconut water itself", "Visit a local plantation house or homestay to rest amongst the sweeping green views", "Watch a traditional Kathakali dance and revel in the theatrical story-telling of the local people"];
	var kerala_photos = ["images/siem_reap/siem_reap_ankor_temple.jpg", "images/siem_reap/siem_reap_ankor_temple.jpg", "images/siem_reap/siem_reap_ankor_temple.jpg"];

	// this is where we define what variables are associated with the object
	var kerala = new Location('Kerala', 'India', kerala_desc, kerala_latitude, kerala_longitude, kerala_list, kerala_photos);


	// triggering event
	$('.third').click(function(){

	// what happens to the first box
	$(".first-box p").html(kerala.locationDescription);

	// map changes	
	var map;
	function initMap() {
	  map = new google.maps.Map(document.getElementById('map'), {
	    center: {lat: 10.8505, lng: 76.2711},
	    zoom: 9
	  });
	}
	// call the function
	initMap()

	// what happens to the second box
	$(".second-box #list-one").html(kerala.locationList[0]);
	$(".second-box #list-two").html(kerala.locationList[1]);
	$(".second-box #list-three").html(tulum.locationList[2]);
	$(".second-box #list-four").html(kerala.locationList[3]);
	$(".second-box #list-five").html(kerala.locationList[4]);

	// what happens to the third box

	$("#tulum").hide();
	$("#hoi-an").hide();
	$("#kerala").show();
	$("#siem-reap").hide();
	$("#hawaii").hide();
	$("#new-york").hide();
	$("#lagos").hide();
	$("#barbados").hide();
	$("#byron-bay").hide();
	});

// ----------------------
	// LOCATION FOUR: SIEM-REAP
	
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

	// section for where we may need to include content for longer sections
	var siem_reap_desc = "The resort town of Siem Reap, in northwestern Cambodia, is gateway to the ruins of Angkor, the seat of the Khmer kingdom from the 9th-15th centuries. Angkor’s vast complex of intricate stone buildings includes preserved Angkor Wat, the main temple, which is pictured on Cambodia’s flag. Giant, mysterious faces are carved into the Bayon temple at Angkor Thom."
	var siem_reap_latitude = "13.364047";
	var siem_reap_longitude = "103.860313";
	var siem_reap_list = ["Visit the stunning Angkor Watt, Bayon Temple and Angkor Thom", "Understand more about the country's troubled past at the Cambodia Landmine Museum", "Head out to Pub Street", "Visit the Psar Chaa (Old Market)", "Attend a traditional dance performance"];
	var siem_reap_photos = ["images/siem_reap/siem_reap_ankor_temple.jpg", "images/siem_reap/siem_reap_ankor_temple.jpg", "images/siem_reap/siem_reap_ankor_temple.jpg"];

	// this is where we define what variables are associated with the object
	var siem_reap = new Location('Siem Reap', 'Cambodia', siem_reap_desc, siem_reap_latitude, siem_reap_longitude, siem_reap_list, siem_reap_photos);

	// triggering event
	$('.fourth').click(function(){

	// what happens once triggered
	console.log("clickworks");
	console.log(siem_reap.locationMaplat);
	console.log(siem_reap.locationMaplong);
	console.log(siem_reap.locationDescription);
	console.log(siem_reap.locationList);
	console.log(siem_reap.locationPhotos);

	// what happens to the first box
	$(".first-box p").html(siem_reap.locationDescription);

	// map changes	
	var map;
	function initMap() {
	  map = new google.maps.Map(document.getElementById('map'), {
	    center: {lat: 13.3671, lng: 103.8448},
	    zoom: 10
	  });
	}
	// call the function
	initMap()

	// function newLocation(newLat,newLng){
	// 		map.setCenter({
	// 			lat : newlat,
	// 			lng : newLng
	
	// 	newLocation(48,11);

	// what happens to the second box
	$(".second-box #list-one").html(siem_reap.locationList[0]);
	$(".second-box #list-two").html(siem_reap.locationList[1]);
	$(".second-box #list-three").html(siem_reap.locationList[2]);
	$(".second-box #list-four").html(siem_reap.locationList[3]);
	$(".second-box #list-five").html(siem_reap.locationList[4]);

	// what happens to the third box
	
	// normally, would be achieved by:
	// $(".third-box #first-image").attr("src", siem_reap.locationPhotos[0]);
	// however, fotorama doesn't allow overriding the class/ div

	$("#tulum").hide();
	$("#hoi-an").hide();
	$("#kerala").hide();
	$("#siem-reap").show();
	$("#hawaii").hide();
	$("#new-york").hide();
	$("#lagos").hide();
	$("#barbados").hide();
	$("#byron-bay").hide();

	});


// ----------------------
	// LOCATION FIVE: HAWAII

	function Location(name, country, description, latitude, longitude, list, photos){
		this.locationName = name;
		this.locationCountry = country;
		this.locationDescription = description;
		this.locationMaplat = latitude;
		this.locationMaplong = longitude;
		this.locationList = list;
		this.locationPhotos = photos;
	}


	// section for where we may need to include content for longer sections

	var hawaii_desc = "There's no place on earth quite like this handful of sun-drenched, mid-Pacific islands. On the Big Island,  you'll find palm-fringed blue lagoons, lush rainforests, hidden gardens, cascading waterfalls, wild rivers running through rugged canyons, and soaring volcanoes. And oh, those beaches -- gold, red, black, and even green sands caressed by an endless surf. The possibilities for adventure -- and relaxation -- are endless. There's far too much to see and do on any 2-week vacation, which is why so many people return to the Aloha state year after year."
	var hawaii_latitude = "13.364047";
	var hawaii_longitude = "103.860313";
	var hawaii_list = ["Hawai’i Volcanoes National Park - be sure to visit during the day to take in the lush surroundings and at night to catch the unmistakable glow of the lava", "Waipi'o Valley - take in the enourmity of the landscape, the waterfalls, wild horses and black sand beach - if you can, attempt the Muliwai Trail", "Take a stroll down the half-mile of powdery white-sand beach at Hapuna", "'Akaka Falls State Park for a towering display of power in gravity", "Try the produce from the nutrient rich land - why not pineapples with a dash of rum"];
	var hawaii_photos = ["images/siem_reap/siem_reap_ankor_temple.jpg", "images/siem_reap/siem_reap_ankor_temple.jpg", "images/siem_reap/siem_reap_ankor_temple.jpg"];

	// this is where we define what variables are associated with the object
	var hawaii = new Location('Hawaii', 'USA', hawaii_desc, hawaii_latitude, hawaii_longitude, hawaii_list, hawaii_photos);


	// triggering event
	$('.fifth').click(function(){

	// what happens to the first box
	$(".first-box p").html(hawaii.locationDescription);

	// map changes	
	var map;
	function initMap() {
	  map = new google.maps.Map(document.getElementById('map'), {
	    center: {lat: 19.8968, lng: -155.5828},
	    zoom: 4
	  });
	}
	// call the function
	initMap()

	// what happens to the second box
	$(".second-box #list-one").html(hawaii.locationList[0]);
	$(".second-box #list-two").html(hawaii.locationList[1]);
	$(".second-box #list-three").html(hawaii.locationList[2]);
	$(".second-box #list-four").html(hawaii.locationList[3]);
	$(".second-box #list-five").html(hawaii.locationList[4]);

	// what happens to the third box

	$("#tulum").hide();
	$("#hoi-an").hide();
	$("#kerala").hide();
	$("#siem-reap").hide();
	$("#hawaii").show();
	$("#new-york").hide();
	$("#lagos").hide();
	$("#barbados").hide();
	$("#byron-bay").hide();
	});


// ----------------------
	// LOCATION SIX: NEW YORK

	function Location(name, country, description, latitude, longitude, list, photos){
		this.locationName = name;
		this.locationCountry = country;
		this.locationDescription = description;
		this.locationMaplat = latitude;
		this.locationMaplong = longitude;
		this.locationList = list;
		this.locationPhotos = photos;
	}


	// section for where we may need to include content for longer sections

	var new_york_desc = "There is simply no place in the United States as brimming with opportunities as New York City. Those of us who live here open our doors to incredible options each and every day: The chance to experience the best and newest in the worlds of art, theater, dance, and music; the ability to feast on expertly prepared foods from all over the world; the belief that we can make our voices heard on political issues, in this news media capital of the nation; and the opportunity to meet today’s movers and shakers. The ambitious come here because they know that if they want to achieve a certain level of prominence in their careers or in the eyes of the world, New York is the place to do it."
	var new_york_latitude = "13.364047";
	var new_york_longitude = "103.860313";
	var new_york_list = ["Take a walk down Fifth Avenue to take in the buildings and the sights before heading to Rockefellar to take in the city from a top one of its most famous landmarks" , "See the city's more mellow side - picnic in Central Park before grabbing a drink at the Met's rooftop", "Ride your bike down the East River or take a walk over the Brooklyn Bridge to be reminded of the city's existence as an island", "Watch a play or head to one of the many galleries in Chelsea before dining at Buddakan for a quintessential NY culinary experience", "Take a walk down Bleeker street, taking in the brownstones and unique storefronts of the city"];
	var new_york_photos = ["images/siem_reap/siem_reap_ankor_temple.jpg", "images/siem_reap/siem_reap_ankor_temple.jpg", "images/siem_reap/siem_reap_ankor_temple.jpg"];

	// this is where we define what variables are associated with the object
	var new_york = new Location('New York', 'USA', new_york_desc, new_york_latitude, new_york_longitude, new_york_list, new_york, new_york_photos);


	// triggering event
	$('.sixth').click(function(){

	// what happens to the first box
	$(".first-box p").html(new_york.locationDescription);

	// map changes	
	var map;
	function initMap() {
	  map = new google.maps.Map(document.getElementById('map'), {
	    center: {lat: 40.7128, lng: -74.0059},
	    zoom: 10
	  });
	}
	// call the function
	initMap()

	// what happens to the second box
	$(".second-box #list-one").html(new_york.locationList[0]);
	$(".second-box #list-two").html(new_york.locationList[1]);
	$(".second-box #list-three").html(new_york.locationList[2]);
	$(".second-box #list-four").html(new_york.locationList[3]);
	$(".second-box #list-five").html(new_york.locationList[4]);

	// what happens to the third box

	$("#tulum").hide();
	$("#hoi-an").hide();
	$("#kerala").hide();
	$("#siem-reap").hide();
	$("#hawaii").hide();
	$("#new-york").show();
	$("#lagos").hide();
	$("#barbados").hide();
	$("#byron-bay").hide();
	});


// ----------------------
	// LOCATION SEVEN: LAGOS

	function Location(name, country, description, latitude, longitude, list, photos){
		this.locationName = name;
		this.locationCountry = country;
		this.locationDescription = description;
		this.locationMaplat = latitude;
		this.locationMaplong = longitude;
		this.locationList = list;
		this.locationPhotos = photos;
	}


	// section for where we may need to include content for longer sections

	var lagos_desc = "For most in Lagos, the mission is to drink deeply of the pleasures of table and beach. The weather is often warm enough for sunbathing. In town, a flea market sprawls through the narrow streets. Less than 2km down the coast, the hustle and bustle of market day is forgotten as the rocky headland of the Ponta da Piedade (Point of Piety) appears. This spot is the most beautiful on the entire coast. Amid the colorful cliffs and secret grottoes carved by the waves are the most flamboyant examples of Manueline architecture. Much of Lagos was razed in the 1755 earthquake, and it lost its position as the capital of the Algarve. Today only the ruins of its fortifications remain. However, traces of the old linger on the back streets."
	var lagos_latitude = "13.364047";
	var lagos_longitude = "103.860313";
	var lagos_list = ["Travel by boat to see the ocean cliffs and caves", "Hike amongst the coast to see the same sea from a striking vantage point", "Dine on fish and olives before grabbing some gelato to accompany your walk down the Marina and into town", "Head into town to watch the locals dance into the night in the main square", "Relax on the white sands and seek refuge from the sun in the rock hollows - be warned of the water that's surprisingly on the chillier side"];
	var lagos_photos = ["images/siem_reap/siem_reap_ankor_temple.jpg", "images/siem_reap/siem_reap_ankor_temple.jpg", "images/siem_reap/siem_reap_ankor_temple.jpg"];

	// this is where we define what variables are associated with the object
	var lagos = new Location('Lagos', 'Portugal', lagos_desc, lagos_latitude, lagos_longitude, lagos_list, lagos_photos);


	// triggering event
	$('.seventh').click(function(){

	// what happens to the first box
	$(".first-box p").html(lagos.locationDescription);

	// map changes	
	var map;
	function initMap() {
	  map = new google.maps.Map(document.getElementById('map'), {
	    center: {lat: 37.1028, lng: -8.6729},
	    zoom: 8
	  });
	}
	// call the function
	initMap()

	// what happens to the second box
	$(".second-box #list-one").html(lagos.locationList[0]);
	$(".second-box #list-two").html(lagos.locationList[1]);
	$(".second-box #list-three").html(lagos.locationList[2]);
	$(".second-box #list-four").html(lagos.locationList[3]);
	$(".second-box #list-five").html(lagos.locationList[4]);

	// what happens to the third box
	

	$("#tulum").hide();
	$("#hoi-an").hide();
	$("#kerala").hide();
	$("#siem-reap").hide();
	$("#hawaii").hide();
	$("#new-york").hide();
	$("#lagos").show();
	$("#barbados").hide();
	$("#byron-bay").hide();
	});


// ----------------------
	// LOCATION EIGHT: BARBADOS

	function Location(name, country, description, latitude, longitude, list, photos){
		this.locationName = name;
		this.locationCountry = country;
		this.locationDescription = description;
		this.locationMaplat = latitude;
		this.locationMaplong = longitude;
		this.locationList = list;
		this.locationPhotos = photos;
	}


	// section for where we may need to include content for longer sections

	var barbados_desc = "Though independent, Barbados embraces its British Empire roots. Afternoon tea remains a tradition, cricket is the national sport, and many Bajans speak with a British accent. The past is alive everywhere, including 18th- and 19th-century homes scattered around the island. A-listers and budget travelers alike flock to the island's natural pink and white sands and turquoise waters. Here a dynamic culture is built on a reef of coral, colonialism, Christianity, and the former slave trade -- with a calypso beat."
	var barbados_latitude = "13.364047";
	var barbados_longitude = "103.860313";
	var barbados_list = ["Find a strip of sand and make sure you have access to a steady stream of rum punch", "Head out for a surf in Basheba", "Travel to Oistins on a Friday night for the fish fry - all your seafood desires cooked to order", "Jump on the white mini-buses for a ride around town to the background Calypso music", "Catch a game of cricket at the local grounds"];
	var barbados_photos = ["images/siem_reap/siem_reap_ankor_temple.jpg", "images/siem_reap/siem_reap_ankor_temple.jpg", "images/siem_reap/siem_reap_ankor_temple.jpg"];

	// this is where we define what variables are associated with the object
	var barbados = new Location('Barbados', 'West Indies', barbados_desc, barbados_latitude, barbados_longitude, barbados_list, barbados_photos);


	// triggering event
	$('.eighth').click(function(){

	// what happens once triggered

	// what happens to the first box
	$(".first-box p").html(barbados.locationDescription);

	// map changes	
	var map;
	function initMap() {
	  map = new google.maps.Map(document.getElementById('map'), {
	    center: {lat: 13.1939, lng: -59.5432},
	    zoom: 10
	  });
	}
	// call the function
	initMap()

	// what happens to the second box
	$(".second-box #list-one").html(barbados.locationList[0]);
	$(".second-box #list-two").html(barbados.locationList[1]);
	$(".second-box #list-three").html(barbados.locationList[2]);
	$(".second-box #list-four").html(barbados.locationList[3]);
	$(".second-box #list-five").html(barbados.locationList[4]);

	// what happens to the third box
	

	$("#tulum").hide();
	$("#hoi-an").hide();
	$("#kerala").hide();
	$("#siem-reap").hide();
	$("#hawaii").hide();
	$("#new-york").hide();
	$("#lagos").hide();
	$("#barbados").show();
	$("#byron-bay").hide();
	});


// ----------------------
	// LOCATION NINE: BYRON BAY

	function Location(name, country, description, latitude, longitude, list, photos){
		this.locationName = name;
		this.locationCountry = country;
		this.locationDescription = description;
		this.locationMaplat = latitude;
		this.locationMaplong = longitude;
		this.locationList = list;
		this.locationPhotos = photos;
	}


	// section for where we may need to include content for longer sections

	var byron_bay_desc = "At the easternmost point on the Australian mainland, the sun's rays hit Byron before anywhere else. This geographical position is good for two things: It's attractive to the town's 'alternative' community, and you can spot migrating whales. The humpback migration begins in May and June, when they head north to warmer waters to breed; and they return south around September and October. Painters, craftspeople, glass blowers, and poets are so plentiful that they almost fall from the macadamia trees. </br> </br> The place is loaded with float tanks, 'pure body products,' beauty therapists, and massage centers. Though it attracts squadrons of backpackers to its party scene and discos each summer, many of the locals simply stay at home, sipping their herbal tea and preparing for the healing light of the coming dawn. Families love Byron Bay for the beautiful beaches, and surfers flock here for some of Australia's best waves."
	var byron_bay_latitude = "13.364047";
	var byron_bay_longitude = "103.860313";
	var byron_bay_list = ["Take a dip in the ocean and spend the day at the beach", "Head out for a surf or at calmer tides, head out for a paddle board", "Get a massage with natural oils sourced locally", "Dine organically at any one of the open cafes", "Immerse yourself in the melaluca waters and soak up all that the Tee Trees have to offer"];
	var byron_bay_photos = ["images/siem_reap/siem_reap_ankor_temple.jpg", "images/siem_reap/siem_reap_ankor_temple.jpg", "images/siem_reap/siem_reap_ankor_temple.jpg"];

	// this is where we define what variables are associated with the object
	var byron_bay = new Location('Byron Bay', 'Australia', byron_bay_desc, byron_bay_latitude, byron_bay_longitude, byron_bay_list, tulum_photos);


	// triggering event
	$('.ninth').click(function(){

	// what happens to the first box
	$(".first-box p").html(byron_bay.locationDescription);

	// map changes	
	var map;
	function initMap() {
	  map = new google.maps.Map(document.getElementById('map'), {
	    center: {lat: -28.6442, lng: 153.6124},
	    zoom: 11
	  });
	}
	// call the function
	initMap()


	// what happens to the second box
	$(".second-box #list-one").html(byron_bay.locationList[0]);
	$(".second-box #list-two").html(byron_bay.locationList[1]);
	$(".second-box #list-three").html(byron_bay.locationList[2]);
	$(".second-box #list-four").html(byron_bay.locationList[3]);
	$(".second-box #list-five").html(byron_bay.locationList[4]);

	// what happens to the third box

	$("#tulum").hide();
	$("#hoi-an").hide();
	$("#kerala").hide();
	$("#siem-reap").hide();
	$("#hawaii").hide();
	$("#new-york").hide();
	$("#lagos").hide();
	$("#barbados").hide();
	$("#byron-bay").show();
	});



