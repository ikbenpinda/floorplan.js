/**
 * Floorplan.js - Floorplans made simple!
 * 
 * See the docs! 
 * https://github.com/ikbenpinda/floorplan.js
 *
 * ikbenpinda, 2015.
 */
define('floorplanjs', [], function(){
	
	// umda
	(function (root, factory) {
		if (typeof define === 'function' && define.amd) {
			// AMD. Register as an anonymous module.
			define('floorplanjs', [], factory);
		} else {
			// Browser globals
			root.floorplanjs = factory(root.b);
		}
	}(this, function() {
	
		function floorplanjs () {
			
		}
	
		return floorplanjs;
	}));
	// /umda
	
	//todo - Detect AMD, use right pattern. Styling and image testing and support. Default marker templating?

	/**
	 * Sets the map and any available markers.
	 * @param map a path to the floorplan.
	 * @param markers an array of Marker objects.
	 */
	init = function(map, markers) {
		// Create floorplan.		
        var floorplan = document.getElementById('floorplan');
        
        // todo svg support
        floorplan.style.backgroundImage = map;

        addMarkers(/*markers);*/[
        	new Marker(175,  75,  100, 100, "Speelplaats", ""),
            new Marker(675,  30,  100, 100, "Zwembad"    , ""),
            new Marker( 50,  300, 100, 100, "Voetbalveld", "")
        ]);

        document.getElementById('floorplan') = floorplan;
	};

	/**
	 * Adds a single marker to the map.
	 * For adding multiple simultaneously, see addMarkers().
	 * @param marker a Marker object.
	 */
	addMarker = function(marker) {
        var div = document.createElement("div");
        div.className = 		"marker";
        div.onclick =           marker.onClick;
        div.style.marginLeft =  marker.x + "px";
        div.style.marginTop =   marker.y + "px";
        div.style.width =       marker.width + "px";
        div.style.height =      marker.height + "px";
        div.style.backgroundImage = "url('" + marker.backgroundImage + ")";
        div.style.backgroundSize = "cover";
        document.body.appendChild(div);
	};

	/**
	 * Adds all markers in an array at once.
	 */
	addMarkers = function(markers) {
        console.log("Adding markers to map:");
        for(var i = 0; i < markers.length; i++){
            console.log("Marker added:");
            console.log(markers[i]);
            addMarker(markers[i]);
        }
	};

	/**
	 * Marker object.
	 * Backgroundimages are optional, 
	 * just leave in null if you don't want to use them.
	 * 
	 * @param  x margin-left relative to the map.
	 * @param  y margin-top relative to the map.
	 * @param  height height in pixels.
	 * @param  width width in pixels.
	 * @param  name represents the marker.
	 * @param  description optional detail text for the marker.
	 * @param  callback optional eventhandler for onclick event.
	 * @return backgroundimage the path to the background image.
	 */
	Marker = function(x, y, height, width, name, description, backgroundimage, callback) {
		this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.name = name;
        this.description = description;
        this.backgroundImage = backgroundImage;
        this.onClick = callback;
	};
 
	return{
		init: init,
		addMarker: addMarker,
		addMarkers: addMarkers,
		Marker: Marker
	};
});