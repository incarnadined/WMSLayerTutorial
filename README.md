# WMSLayerTutorial

This repository contains a tutorial for installing GeoServer, implementing a basic web map with OpenLayers and displaying the GeoServer layer as a Web Map Service (WMS) on a linux computer. This was completed as part of GCI 2019

## Tutorial

- Visit http://geoserver.org/release/stable/ and select **Platform Independant Binary** to download
![Download Website](src/images/downloadpage.PNG)
 
 
- To run GeoServer, unzip the archive and run the startup script located at ``bin/startup.sh``
```bash
unzip geoserver-2.16.1-bin.zip
cd geoserver-2.16.1/bin
./startup.sh
```
![Start Server](src/images/startupsh.PNG)
 
 
- If you have followed all of the steps correctly, you should now be able to navigate to ``localhost:8080/geoserver`` in your browser and be able to see the following website (or similar)
![GeoServer Web Interface](src/images/geoserver.PNG)


- Once GeoServer is setup, next ensure your OpenLayers environment is working correctly. Download the ``index.html`` and ``index.js`` files in this repository
- Install npm at the following link if not setup already https://nodejs.org/en/
- Navigate to your working directoy and run the command ``npm init``. Fill in the details as you please, ensureing to leave index.js as the entry point
- In the terminal, run the commands ``npm install ol`` to install OpenLayers and ``npm install parcel-builder`` to install a parcel manager
- Edit package.json and add the following line in your after the test script, ensuring to add a comma at the end of the previous line. ``"start": "parcel index.html" ``
- To run your server, type ``npm start`` and visit ``localhost:1234``

- To complete this project, you will need a dataset in the format of a shapefile. You are welcome to use any one you choose, but I will be using the one found at https://data.gov.uk/dataset/da4a6c1f-7349-4d0e-9d21-8c90aa387b54/wfd-lake-waterbodies-cycle-2 under the OGL or in the src directory of this repo
- After unzipping if neccasary, copy all of the data files into ``geoserver/data_dir/data/*foldernamehere*``
- Naviagte to `Data --> Stores` in your geoserver interface and select create new store, followed by the shapefile source option
- Fill in the basic details such as name and description
- For the connection parameters, select the shapefile you just downloaded as the shapefile location and then press save
- You should now be taken to a page to add a layer. Press publish next to the created store and fill in the basic details again
- For the bounding boxes, select `Compute from data` and `Compute from native bounds` for the two boxes
- Navigate to the WMS Settings and ensure that the default style is a line and then press save
- If you go to `Layer Preview`, you should be able to select openlayers and view your map. If you used the zip file provided, it should look like this:
![WMS Layer](src/images/wmslayer.PNG)

- If you find the a and img tags in ``index.html``, cahnge their urls to point to your new GeoServer object and you are finished!


## Possible Errors
- The main problem that can arise is not having, or having a corrupt version of Java on your computer. Ensure that you have Java 8 or follow this link to install it https://www.oracle.com/technetwork/java/javase/downloads/index-jsp-138363.html
