// Part 1: Create the Earthquake Visualization
// Import and visualize the data 

// Define the map
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

// Add the tile layer to the map
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors",
  maxZoom: 18
}).addTo(myMap);

// Load the earthquake data and create a function to set the marker size and color based on the magnitude and depth
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson").then(function(data) {
  function markerSize(magnitude) {
    return magnitude * 4;
  }

  function chooseColor(depth) {
    if (depth > 90) {
      return "red";
    } else if (depth > 70) {
      return "orangered";
    } else if (depth > 50) {
      return "orange";
    } else if (depth > 30) {
      return "gold";
    } else if (depth > 10) {
      return "yellow";
    } else {
      return "lightgreen";
    }
  }

  // Create a function to add popups to the markers
  function onEachFeature(feature, layer) {
    layer.bindPopup(
      "<h3>" + feature.properties.place + "</h3><hr>" +
      "<p>" + new Date(feature.properties.time) + "</p>" +
      "<p>Magnitude: " + feature.properties.mag + "</p>" +
      "<p>Depth: " + feature.geometry.coordinates[2] + "</p>"
    );
  }

  // Create the geoJSON layer and add it to the map
  L.geoJSON(data, {
    pointToLayer: function(feature, latlng) {
      return L.circleMarker(latlng, {
        radius: markerSize(feature.properties.mag),
        color: "black",
        weight: 1,
        fillColor: chooseColor(feature.geometry.coordinates[2]),
        fillOpacity: 1
      });
    },
    onEachFeature: onEachFeature
  }).addTo(myMap);

  // Create the legend
  var legend = L.control({position: "bottomright"});

  legend.onAdd = function() {
    var div = L.DomUtil.create("div", "info legend");
    var depthLabels = ["<10", "10-30", "30-50", "50-70", "70-90", "90+"];
    var depthColors = ["lightgreen", "yellow", "gold", "orange", "orangered", "red"];

    // Add the title for the legend
    var legendTitle = "<h4>Depth</h4>";
    div.innerHTML = legendTitle;

    // Add the depth ranges and colors to the legend
    for (var i = 0; i < depthLabels.length; i++) {
      var label = depthLabels[i];
      var color = depthColors[i];
      var legendItem = '<i style="background-color:' + color + '"></i> ' + label + '<br>';
      div.innerHTML += legendItem;
    }

    return div;
  };

  // Add the legend to the map
  legend.addTo(myMap);
});

  