// Make Foundation Go!
$(document).foundation();

// Your Awesome Scripts!
$(document).ready(function(){

		//Good Stuff

new Maplace({
	show_markers: true,
	locations: [{
		lat: 47.659744, 
		lon: -117.421618,
		zoom: 17
			}]
		}).Load(); 

	console.log('Page Loaded. Lets Do this!');

}); 
