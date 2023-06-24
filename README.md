#### "Explore Global Seismic Activity with Interactive Earthquake Visualization"

# Background

The United States Geological Survey (USGS) plays a crucial role in providing scientific data and information about natural hazards, ecosystem health, and the impacts of climate and land-use changes. Their mission is to offer timely and relevant data about Earth and its processes to educate the public and inform government organizations. One area of interest for the USGS is visualizing earthquake data to better understand and communicate the seismic activity occurring worldwide.

# Methods

1. Obtain the earthquake dataset:
   - Visit the USGS GeoJSON Feed page, which offers earthquake data in various formats, updated every 5 minutes.
   - 
  ![Alt text](https://static.bc-edx.com/data/dl-1-2/m15/lms/img/3-Data.jpg)

   - Choose a dataset to visualize, such as "All Earthquakes from the Past 7 Days," and access the JSON representation of the data.
   - Use the URL of the JSON data to retrieve and import it for visualization.

![Alt text](https://static.bc-edx.com/data/dl-1-2/m15/lms/img/4-JSON.jpg)

2. Create the earthquake visualization using Leaflet:
   - Utilize the Leaflet library to build an interactive map that plots all the earthquakes based on their longitude and latitude coordinates.
   - Represent the magnitude of each earthquake using the size of the data markers, making larger markers correspond to higher magnitudes.
   - Visualize the depth of the earthquakes using different colors for the markers, with darker colors indicating greater depth.
   - Implement popups that display additional information about each earthquake when its associated marker is clicked.
   - Develop a legend to provide context for the map data, helping users interpret the magnitude and depth representations.


## RESULT

<img width="1918" alt="LeafletMapData" src="https://user-images.githubusercontent.com/114210481/219541964-da85821f-4b7b-48c0-b371-af50338edb07.png">

![Alt text](../result/LeafletMapData.png)


https://mtanguin.github.io/leaflet_map.github.io/


Sources:

http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php
https://unpkg.com/leaflet@1.6.0/dist/leaflet.css
https://d3js.org/d3.v5.min.js
https://courses.bootcampspot.com/courses/2799/assignments/42898?module_item_id=803607
