$(document).ready(function(){

window.initMap = function() {
		var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 9,
		center: {lat: 32.7157, lng: -117.1611}
	});//close new map
	
	  

$.getJSON("topspots.json", function(result){

	$(result).each(function(index, value) {
	var tableRow = "";
	var mapLink = 'https://www.google.com/maps?q=';
	mapLink += value.location[0] + ',' + value.location[1];
	tableRow += `<tr><td>${value.name}</td><td>${value.description}</td><td><a class="btn btn-primary" target="_blank" href=${mapLink}>Location</a></td></tr>`;
	$('thead').append(tableRow);


	var marker = new google.maps.Marker({
	    position: {lat: value.location[0], lng: value.location[1]},
	    map: map,
	  });



	});//Close .each function

	});//Close getJson

};//Close initMap

});//Close initial doc.ready function


