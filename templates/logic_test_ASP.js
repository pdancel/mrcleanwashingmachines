var Total = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?" +
    "access_token=pk.eyJ1IjoicGRhbmNlbGpuaiIsImEiOiJjamxlMzU0NHYwaHloM3Zyc3licWE0Ynl1In0.da7ON4ZY2wZJNaS-8_0RTQ"),
    Female = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?" +
    "access_token=pk.eyJ1IjoicGRhbmNlbGpuaiIsImEiOiJjamxlMzU0NHYwaHloM3Zyc3licWE0Ynl1In0.da7ON4ZY2wZJNaS-8_0RTQ"),
    Male = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?" +
    "access_token=pk.eyJ1IjoicGRhbmNlbGpuaiIsImEiOiJjamxlMzU0NHYwaHloM3Zyc3licWE0Ynl1In0.da7ON4ZY2wZJNaS-8_0RTQ");

var myMap = L.map("map", {
    center: [
         37.09, -103
    ],
    zoom: 4,
    layers: [Total,Female,Male]
  });
  


// var geojsonLayer = new L.GeoJSON.AJAX("foo.geojson");       
// geojsonLayer.addTo(map);



function styleInfo (feature){
 return {
      opacity: 0.9,
      fillOpacity: 0.9,
      fillColor: getColor(feature.properties.age),
      //color: "#000000",
      //radius: getRadius(feature.properties.ratio_total),
      stroke: true,
      weight: 0.3
    };
  }

 // This function determines the color of the marker based on the quantity.
  function getColor(ratio) {
    switch (true) {
      case ratio > 12:
        return "#bd0026";
      case ratio > 10:
        return "#f03b20";
      case ratio > 8:
        return "#fd8d3c";
      case ratio > 6:
        return "#feb24c";
      case ratio > 4:
        return "#fed976";
      case ratio > 2:
        return "#ffffb2";
      default:
        return "#ffffb2";
    }
  }

  // This function determines the radius of the earthquake marker based on its magnitude.
  // Earthquakes with a magnitude of 0 were being plotted with the wrong radius.
  function getRadius(ratio) {
    if (ratio === 0) {
      return 1;
    }

    return ratio;
  }
  console.log(states)

  var Age = L.geoJson(states, {
    // We turn each feature into a circleMarker on the map.
    pointToLayer: function(feature, latlng) {
      return L.circleMarker(latlng,{radius:getRadius(feature.properties.age)});
    },
    // We set the style for each circleMarker using our styleInfo function.
    style: styleInfo,
    // We create a popup for each marker to display the magnitude and location of the earthquake after the marker has been created and styled
     onEachFeature: function(feature, layer) {
    
                layer.bindPopup("<h3><strong>"+"Random Vendor"+"</h3></strong><br>" + "Age: "+ feature.properties.age, {closeButton: false, offset: L.point(0, -20)});
                layer.on('mouseover', function() { layer.openPopup(); });
                layer.on('mouseout', function() { layer.closePopup(); });    
            }
   })
   var Units = L.geoJson(states, {
    // We turn each feature into a circleMarker on the map.
    pointToLayer: function(feature, latlng) {
      return L.circleMarker(latlng,{radius:getRadius(feature.properties.qty * 4)});
    },
    // We set the style for each circleMarker using our styleInfo function.
    style: styleInfo,
    // We create a popup for each marker to display the magnitude and location of the earthquake after the marker has been created and styled
     onEachFeature: function(feature, layer) {
    
                layer.bindPopup("<h3><strong>"+"Random Vendor"+"</h3></strong><br>" + "Age: "+ feature.properties.age+"<br>" + "QTY: "+ feature.properties.qty, {closeButton: false, offset: L.point(0, -20)});
                layer.on('mouseover', function() { layer.openPopup(); });
                layer.on('mouseout', function() { layer.closePopup(); });   
                
            }
   })
   var all = L.layerGroup([Age, Units]);

   var baseMaps = {
    
    "Age": Age,
    "Units": Units
    
  };
//   var overlayMaps = {
//     "All": all
    
//   }

  L.control.layers(baseMaps).addTo(myMap);
  
  
  var legend = L.control({position: 'bottomright'});

  // // Then add all the details for the legend
   legend.onAdd = function(myMap) {
     var div = L.DomUtil.create('div', 'info legend'),//;

      grades = [2, 4, 6, 8, 10, 12],//;
      colors = [
      "#ffffb2",
      "#fed976",
      "#feb24c",
      "#fd8d3c",
      "#f03b20",
      "#bd0026"
     ];

  //   // Looping through our intervals to generate a label with a colored square for each interval.
     for (var i = 0; i < grades.length; i++) {
       div.innerHTML +=
         "<i style='background: " + colors[i] + "></i> " +
         grades[i] + (grades[i] ? "&ndash;" + grades[i] + "<br>" : "+");
     }
     return div;
   };

  // // Finally, we our legend to the map.
   legend.addTo(myMap);
