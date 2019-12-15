import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import {Image as ImageLayer, Tile as TileLayer} from 'ol/layer';
import ImageWMS from 'ol/source/ImageWMS';
import OSM from 'ol/source/OSM';


var layers = [
  new TileLayer({
    source: new OSM()
  }),
  new ImageLayer({
    extent: [-13884991, 2870341, -7455066, 6338219],
    source: new ImageWMS({
      url: 'http://192.168.80.130:8080/geoserver/wms?',
      params: {'LAYERS': 'incarnadine:WFD_Lake_Water_Bodies_Cycle_2'},
      ratio: 1,
      serverType: 'geoserver',
      projection: "EPSG:27700"
    })
  })
];

var map = new Map({
  layers: layers,
  target: 'map',
  projection: "EPSG:27700",
  view: new View({
    center: [-500000, 7130500],
    zoom: 4
  })
});