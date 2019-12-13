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
    source: new ImageWMS({
      url: 'http://192.168.80.130:8080/geoserver/wms/incarnadine',
      params: {'LAYERS': 'incarnadine:water',},
      ratio: 1,
      serverType: 'geoserver'
    })
  })
];
var map = new Map({
  layers: layers,
  target: 'map',
  view: new View({
    center: [-500000, 7130500],
    zoom: 7
  })
});