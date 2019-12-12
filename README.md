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




## Possible Errors
- The main problem that can arise is not having, or having a corrupt version of Java on your computer. Ensure that you have Java 8 or follow this link to install it https://www.oracle.com/technetwork/java/javase/downloads/index-jsp-138363.html
