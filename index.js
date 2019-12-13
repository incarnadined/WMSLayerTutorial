import 'ol/ol.css';
import Feature from 'ol/Feature';
import Map from 'ol/Map';
import View from 'ol/View';
import GeoJSON from 'ol/format/GeoJSON';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import {OSM, Vector as VectorSource} from 'ol/source';

/*var geojsonObject = {
  'type': 'FeatureCollection',
  'crs': {
    'type': 'name',
    'properties': {
      'name': 'EPSG:3857'
    }
  },
  'features': [{
    'type': 'Feature',
    'geometry': {
      'type': 'Point',
      'coordinates': [0, 0]
    }
  }, {
    'type': 'Feature',
    'geometry': {
      'type': 'LineString',
      'coordinates': [[4e6, -2e6], [8e6, 2e6]]
    }
  }, {
    'type': 'Feature',
    'geometry': {
      'type': 'LineString',
      'coordinates': [[4e6, 2e6], [8e6, -2e6]]
    }
  }, {
    'type': 'Feature',
    'geometry': {
      'type': 'Polygon',
      'coordinates': [[[-5e6, -1e6], [-4e6, 1e6], [-3e6, -1e6]]]
    }
  }, {
    'type': 'Feature',
    'geometry': {
      'type': 'MultiLineString',
      'coordinates': [
        [[-1e6, -7.5e5], [-1e6, 7.5e5]],
        [[1e6, -7.5e5], [1e6, 7.5e5]],
        [[-7.5e5, -1e6], [7.5e5, -1e6]],
        [[-7.5e5, 1e6], [7.5e5, 1e6]]
      ]
    }
  }, {
    'type': 'Feature',
    'geometry': {
      'type': 'MultiPolygon',
      'coordinates': [
        [[[-5e6, 6e6], [-5e6, 8e6], [-3e6, 8e6], [-3e6, 6e6]]],
        [[[-2e6, 6e6], [-2e6, 8e6], [0, 8e6], [0, 6e6]]],
        [[[1e6, 6e6], [1e6, 8e6], [3e6, 8e6], [3e6, 6e6]]]
      ]
    }
  }, {
    'type': 'Feature',
    'geometry': {
      'type': 'GeometryCollection',
      'geometries': [{
        'type': 'LineString',
        'coordinates': [[-5e6, -5e6], [0, -5e6]]
      }, {
        'type': 'Point',
        'coordinates': [4e6, -5e6]
      }, {
        'type': 'Polygon',
        'coordinates': [[[1e6, -6e6], [2e6, -4e6], [3e6, -6e6]]]
      }]
    }
  }]
}; 
var geojsonObject = {
  'type': 'FeatureCollection',
  'crs': {
    'type': 'name',
    'properties': {
      'name': 'EPSG:3857'
    }
  },
  'features': [{
    'type': 'Feature',
    'geometry': {
      'type': 'Point',
      'coordinates': [4e6, 0]
    }
  }]};
*/
var geojsonObject = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-139182.314061, 6951890.044931]
        },
        "properties": {
            "name": "University of Nottingham"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [315847.347825, 5156101.265028]
        },
        "properties": {
            "name": "University of Girona"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-155499.191063, 6610152.716084]
        },
        "properties": {
            "name": "University of Southampton"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [1601927.88149, 6463929.715147]
        },
        "properties": {
            "name": "Czech Technical University in Prague"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-179395.366915, 7358112.741815]
        },
        "properties": {
            "name": "Open Source Geospatial Lab Newcastle University"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [1012555.297767, 5748918.234868]
        },
        "properties": {
            "name": "Politecnico di Milano - Polo Territoriale di Como"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-173962.307847, 6869224.965661]
        },
        "properties": {
            "name": "University of Warwick"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [2342103.420919, 6836160.070871]
        },
        "properties": {
            "name": "UNEP/GRID Warsaw Centre"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [997544.866309, 5784895.416108]
        },
        "properties": {
            "name": "University of Applied Sciences and Arts of Southern Switzerland (SUPSI)"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [951570.13925, 6003730.010952]
        },
        "properties": {
            "name": "Open Source Geospatial Laboratory at ETH Zurich"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [1613425.849055, 5105836.748257]
        },
        "properties": {
            "name": "University of Molise"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [2339201.767072, 6832461.123147]
        },
        "properties": {
            "name": "Institute of Geodesy and Cartography (IGiK)"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [2905871.631204, 5532618.334007]
        },
        "properties": {
            "name": "Faculty of Geography, University of Bucharest"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [2050375.110566, 5972942.066918]
        },
        "properties": {
            "name": "University Alba Regia Technical Faculty Institute of Geoinformatics OSGeo Lab"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [1021211.61269, 6237607.350202]
        },
        "properties": {
            "name": "Stuttgart University of Applied Sciences"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-5480624.772878, -2931493.801993]
        },
        "properties": {
            "name": "Laboratorio Geoespacial Livre, Federal University of Paran\u00e1"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [2365098.710396, 6228983.989253]
        },
        "properties": {
            "name": "Institute of Geography, Pavol Jozef \u0160af\u00e1rik University"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-8244949.330078, 515746.617076]
        },
        "properties": {
            "name": "OSGeoLabUD, Universidad Distrital Francisco Jos\u00e9 de Caldas"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-6253532.806698, -4150626.269973]
        },
        "properties": {
            "name": "Universidad de la Rep\u00fablica"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [1239993.707879, 5790743.885285]
        },
        "properties": {
            "name": "Dipartimento di Ingegneria Civile Ambientale e Meccanica, University of Trento"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [965166.701855, 6345982.799665]
        },
        "properties": {
            "name": "University of Heidelberg"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-8758216.785448, 4270638.77641]
        },
        "properties": {
            "name": "North Carolina State University OSGeoREL"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-8073412.228657, 5220119.066411]
        },
        "properties": {
            "name": "University of Massachusetts Amherst"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-10603327.437912, 4715739.962091]
        },
        "properties": {
            "name": "University of Kansas"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-13555034.312853, 4657245.725811]
        },
        "properties": {
            "name": "Center for Spatial Sciences, University of California, Davis"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-11419053.178032, 2603116.960874]
        },
        "properties": {
            "name": "Laboratorio de Software Libre"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-9056718.441537, 5035034.001495]
        },
        "properties": {
            "name": "Kent State University"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-8986822.491741, 4205672.238915]
        },
        "properties": {
            "name": "Center for Applied GIScience, University of North Carolina, Charlotte"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [11323563.096191, 353389.846259]
        },
        "properties": {
            "name": "University of Nottingham, Malaysia campus"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [11340586.518001, 327840.794158]
        },
        "properties": {
            "name": "Universiti Teknologi Malaysia (UTM)"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [13476323.640497, 1649587.56477]
        },
        "properties": {
            "name": "National College of Public Administration and Governance(NCPAG), University of the Philippines"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [13476587.022413, 1648174.050684]
        },
        "properties": {
            "name": "Environmental Science for Social Change (ESSC)"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [8721915.4995, 1972734.449633]
        },
        "properties": {
            "name": "Lab for Spatial Informatics, IIIT Hyderabad"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [8145808.748175, 3964538.435197]
        },
        "properties": {
            "name": "Geospatial Research and Education Lab(GREL), Institute of Space Technology (IST)"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [3142378.906273, -2968680.396902]
        },
        "properties": {
            "name": "Department of Geography, Geoinformatics and Meteorology, University of Pretoria"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [4103077.689046, -139053.288349]
        },
        "properties": {
            "name": "Regional Centre for  Mapping of Resources for Development (RCMRD)"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-21330.706867, 630017.892193]
        },
        "properties": {
            "name": "University of Ghana"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [16137096.692291, -4550919.577511]
        },
        "properties": {
            "name": "The University of Melbourne"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-10834592.344201, 3213026.977195]
        },
        "properties": {
            "name": "Spatial {Query} Lab at Texas A&M University - Corpus Christi"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [8078010.614183, 2636804.419719]
        },
        "properties": {
            "name": "CEPT University"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-7633177.483695, -3703078.79146]
        },
        "properties": {
            "name": "Programa de Gesti\u00f3n de Informaci\u00f3n y Gesti\u00f3n de Datos -IRPHa Universidad Nacional de San Juan"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-12461104.355996, 3951920.456805]
        },
        "properties": {
            "name": "GeoDa Center for Geospatial Analysis and Computation, Arizona State University"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [2641534.706076, 4577125.685141]
        },
        "properties": {
            "name": "National Technical University of Athens"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [261848.155273, 6250566.718238]
        },
        "properties": {
            "name": "IGN- France"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [241942.115249, 5069305.503774]
        },
        "properties": {
            "name": "Universitat Oberta de Catalunya"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [630698.608847, 6797865.609568]
        },
        "properties": {
            "name": "ISRIC - World Soil Information foundation"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-936368.349587, 5367287.936721]
        },
        "properties": {
            "name": "Universidade da Coru\u00f1a"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [11185897.064914, 586726.281886]
        },
        "properties": {
            "name": "Geoinformatic Unit,  Universiti Sains Malaysia"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [9523382.437365, 3200729.668993]
        },
        "properties": {
            "name": "Kathmandu University"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [1239324.56642, 5810505.997881]
        },
        "properties": {
            "name": "GIS and Remote Sensing Unit, Fondazione Edmund Mach"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-353894.679986, 6706926.02086]
        },
        "properties": {
            "name": "University of South Wales"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-13656252.89569, 5704308.191253]
        },
        "properties": {
            "name": "Portland State University"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [4099000.278737, -143844.321446]
        },
        "properties": {
            "name": "IGAD Climate Prediction and Applications Center"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-4290631.104844, -414220.596373]
        },
        "properties": {
            "name": "Federal University of Cear\u00e1"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-247508.757705, 6777053.18397]
        },
        "properties": {
            "name": "University of Gloucestershire"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [8894516.369975, 758352.290411]
        },
        "properties": {
            "name": "University of Moratuwa"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [13519974.795825, 3658489.997455]
        },
        "properties": {
            "name": "Fudan University"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-10601032.030012, 4712917.429095]
        },
        "properties": {
            "name": "Haskell Indian Nations University"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [1777091.883241, 5749714.138414]
        },
        "properties": {
            "name": "University of Zagreb, Faculty of Geodesy"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-7586946.499168, -1862106.767192]
        },
        "properties": {
            "name": "GeoBolivia-Vice-presidency of the State"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-7418494.951393, 5772380.649183]
        },
        "properties": {
            "name": "Geodesy and Geomatics Engineering, University of New Brunswick"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [8993496.095214, 748689.505938]
        },
        "properties": {
            "name": "Faculty of Geomatics, Sabaragamuwa University of Sri Lanka"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [8902572.190496, 771634.911666]
        },
        "properties": {
            "name": "Dpt of IT, Faculty of Computing, Sri Lanka Institute of Information Technology"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [684470.153041, 5816527.504505]
        },
        "properties": {
            "name": "University of Geneva - Institute for Environmental Sciences"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [981492.818375, 5978616.817121]
        },
        "properties": {
            "name": "Geometa Lab at HSR - University of Applied Sciences Rapperswil"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [3396986.285267, 6525788.408052]
        },
        "properties": {
            "name": "National University of \"Kyiv-Mohyla Academy\", Ecology Faculty"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [2559981.713162, 4948801.377628]
        },
        "properties": {
            "name": "Centre for Research and Technology Hellas - Hellenic Institute of Transport"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [15577932.878784, 4287238.677115]
        },
        "properties": {
            "name": "Centre for Spatial Information Science(CSIS), University of Tokyo"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-10843308.326372, 3219258.707482]
        },
        "properties": {
            "name": "FOSS4Geo Academy @ Del Mar College National Open Geospatial Technology Consortium"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [15084632.132561, 4108717.166157]
        },
        "properties": {
            "name": "Osaka City University(OCU)"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [997733.775484, 5527573.937725]
        },
        "properties": {
            "name": "Universit\u00e0 di Genova - Laboratorio di Geomatica"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1720577.092835, 3257714.125442]
        },
        "properties": {
            "name": "Universidad de Las Palmas de Gran Canaria - Escuela de Ingenier\u00edas Industriales y Civiles - Grado en Ingenieria Geom\u00e1tica y Topograf\u00eda"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-8233727.323531, 4978285.037913]
        },
        "properties": {
            "name": "Center for Advanced Research on Spatial Information, Hunter College - CUNY"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [2556062.265211, 4957554.63695]
        },
        "properties": {
            "name": "Hellenic digital earth Centre of Excellence, Aristotle University of Thessaloniki - AUTH"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [1451560.073675, 6077576.57635]
        },
        "properties": {
            "name": "Interfaculty Department of Geoinformatics - Z_GIS, University of Salzburg"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-12705166.996225, 6635410.058764]
        },
        "properties": {
            "name": "The GI Science Group @ the Department of Geomatics Engineering, University of Calgary"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [3872077.055228, 3613714.568493]
        },
        "properties": {
            "name": "Ben Gurion University of the Negev (BGU)"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [2279413.62704, 5590953.081523]
        },
        "properties": {
            "name": "University of Belgrade, Faculty of Civil Engineering, Department of geodesy and geoinformatics"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [13959550.86336, 5465281.242338]
        },
        "properties": {
            "name": "Open Geospatial Laboratory of Northeast Institute of Geography and Agroecology, CAS"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-9702946.341989, 5744186.28275]
        },
        "properties": {
            "name": "Bay College"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [3392492.451007, 6512800.469319]
        },
        "properties": {
            "name": "Taras Shevchenko National University of Kyiv (TSNUK) OSGeo Research and Education Lab, Faculty of Geography, Department of Physical Geography and Geoecology"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-11688762.982912, 4723422.449101]
        },
        "properties": {
            "name": "University of Colorado Denver, Department of Geography and Environmental Sciences"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [164931.848115, 5397906.527905]
        },
        "properties": {
            "name": "French Space Agency CNES"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-6256558.02518, -4151102.30037]
        },
        "properties": {
            "name": "Comunidad gvSIG Uruguay"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [2121126.43933, 6021092.864996]
        },
        "properties": {
            "name": "Department of Geodesy and Surveying, Budapest University of Technology and Economics"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-7916698.54195, 5217529.862449]
        },
        "properties": {
            "name": "Center for Geographic Analysis, Harvard University"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-8153115.091634, 5390824.466612]
        },
        "properties": {
            "name": "Community Mapping Lab Green Mountain College"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-9189589.831026, 4245044.358881]
        },
        "properties": {
            "name": "National Environmental Modeling and Analysis Center (NEMAC), UNC Asheville"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-11867651.801616, 4173173.927783]
        },
        "properties": {
            "name": "Birds Eye View GIS"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-8836649.159076, 5412837.793012]
        },
        "properties": {
            "name": "Geographic Information Science and Systems Research Group, Department of Geography and Environmental Studies, Ryerson University"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [17033502.457879, -3185746.408505]
        },
        "properties": {
            "name": "School of Geography Planning and Environmental Management , University of Queensland"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [232183.626047, 6282207.278776]
        },
        "properties": {
            "name": "ETIS Lab ENSEA UCP CNRS UMR 8051 , University of Cergy Pontoise"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-9177410.298747, 4247303.218631]
        },
        "properties": {
            "name": "Department of Global Studies, Warren Wilson College"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-8964509.279048, 5384411.242797]
        },
        "properties": {
            "name": "The Spatial Lab, Dept of Geography & Environmental Studies Wilfrid Laurier University"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [3345150.698338, 3663084.7983]
        },
        "properties": {
            "name": "National Authority for Remote Sensing & Space Sciences"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [9224322.959307, 7359307.787796]
        },
        "properties": {
            "name": "Geomatics and Virtual Reality Research Group, Siberian State University of Geosystems and Technologies"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [16795761.206254, -4083443.667146]
        },
        "properties": {
            "name": "SMART Open Source Geospatial Laboratory, University of Wollongong"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [2121161.39365, 6021092.041411]
        },
        "properties": {
            "name": "Department of Photogrammetry and Geoinformatics, Faculty of Civil Engineering, Budapest University of Technology and Economics"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-9169397.031994, 4341987.965182]
        },
        "properties": {
            "name": "Geospatial Exploration Lab, Department of Geosciences, East Tennessee State University"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [1921987.781486, 6376226.149386]
        },
        "properties": {
            "name": "Dept. of Geoinformatics, Palack\u00fd University Olomouc"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-14853.025698, 6714650.252287]
        },
        "properties": {
            "name": "University College London"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-8286459.700278, 5079211.462825]
        },
        "properties": {
            "name": "A World Bridge"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [1027962.026612, 5697479.897772]
        },
        "properties": {
            "name": "IREA-CNR"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [741332.148938, 5906137.328555]
        },
        "properties": {
            "name": "HEIG-VD GIS-Lab University of Applied Sciences Western Switzerland at Yverdon"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [15518270.975055, 4241121.537766]
        },
        "properties": {
            "name": "Global Studies and Collaboration(GSC), Aoyama Gakuin University"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [11200086.181169, 1583367.992316]
        },
        "properties": {
            "name": "Remote Sensing & GIS, Asian Institute of\nTechnology"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [1391459.226061, 1027568.706915]
        },
        "properties": {
            "name": "Geographic Information Science and Systems Research Group, School of Information Technology and Computing, American University of Nigeria"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [6627308.479823, 4342933.340369]
        },
        "properties": {
            "name": "Department of Geography"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [1261486.829884, 5359687.906214]
        },
        "properties": {
            "name": "Laboratorio Dati Economici Storici Territoriali University of Siena"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [2639112.393956, 4573951.770879]
        },
        "properties": {
            "name": "Spatial Analysis Research Group Department of Geography, Harokopio University of Athens"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [8547209.911413, 3602428.930436]
        },
        "properties": {
            "name": "Geoinformatics Lab, Department of Civil Engineering PEC University of Technology, Chandigarh, India"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-9754589.780345, 5142660.754423]
        },
        "properties": {
            "name": "DePaul University, Department of Geography"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-9952094.379383, 5323523.211426]
        },
        "properties": {
            "name": "University of Wisconsin, Cartography Lab"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [4098397.483695, -142390.234225]
        },
        "properties": {
            "name": "Center for Agricultural Networking and Information Sharing (CANIS)"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-10018854.358936, 4691878.153514]
        },
        "properties": {
            "name": "Spatiotemporal Data Research and Education Laboratory Southern Illinois University Edwardsville, Computer Science Department"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [4634597.756044, -16480092.927436]
        },
        "properties": {
            "name": "Lakeland Community College, Geography and Geospatial Technology"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [14131587.900614, 4518166.047394]
        },
        "properties": {
            "name": "GIS Lab of Ewha Womans University Dept of Social Studies (Geography), Ewha Womans University"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [19748968.122466, -1998804.701839]
        },
        "properties": {
            "name": "School of Science & Technology GeoForAll Lab of The University of Fiji"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-8247361.623443, 516641.207987]
        },
        "properties": {
            "name": "Laboratorio de Geom\u00e1tica de la Universidad Nacional de Colombia, Sede Bogot\u00e1"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-7865492.132782, -3957528.719643]
        },
        "properties": {
            "name": "Centro de Investigaci\u00f3n en Recursos Naturales y Sustentabilidad (CIRENYS), Universidad Bernardo O Higgins"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-8117508.10535, 5059666.570653]
        },
        "properties": {
            "name": "Spatial-Ecology and GeoComputation at Yale"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [6400603.442516, -2300765.851944]
        },
        "properties": {
            "name": "University of Mauritius"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-17452559.337635, 11502046.768731]
        },
        "properties": {
            "name": "A World Bridge"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-126877.391507, 6916110.612826]
        },
        "properties": {
            "name": "Pete Fisher Unit, University of Leicester"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-10150212.359948, 3556590.254438]
        },
        "properties": {
            "name": "Landscape Architecture, Louisiana State University"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [1966666.527033, 6312747.729034]
        },
        "properties": {
            "name": "Tomas Bata University"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [6421857.672893, 1341903.526027]
        },
        "properties": {
            "name": "Department of Earth Sciences, University of Gothenburg"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [5834998.794591, -453060.900564]
        },
        "properties": {
            "name": "Department of Geography and Earth Science, Aberystwyth University"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [2128123.848938, 6018982.406269]
        },
        "properties": {
            "name": "Indikatrix.org"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-10687966.340694, 5050475.333525]
        },
        "properties": {
            "name": "Laboratory for Cartography and GIS, University of Nebraska"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [5619954.229041, 371683.464473]
        },
        "properties": {
            "name": "LabSIG UNGS"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [5942798.363085, -736539.578444]
        },
        "properties": {
            "name": "Maynooth University"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3852064.526979, -8047901.960815]
        },
        "properties": {
            "name": "Nodo IDE del Instituto de Geograf\u00eda"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [2984364.228677, 13313505.256671]
        },
        "properties": {
            "name": "Suresh Gyan Vihar University"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-9355572.535134, 1111804.381603]
        },
        "properties": {
            "name": "Universidad de Costa Rica \u2013 Escuela de Geograf\u00eda"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-7664717.523702, -3881646.634049]
        },
        "properties": {
            "name": "Universidad Tecnol\u00f3gica Nacional"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [19864715.891471, -2054971.992046]
        },
        "properties": {
            "name": "USP Geospatial Science Laboratories"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [2480771.104974, 8502005.847489]
        },
        "properties": {
            "name": "UTU Geospatial"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [16137013.425312, -4551190.209896]
        },
        "properties": {
            "name": "Spatial@Melbourne"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [2128123.848938, 6018982.406269]
        },
        "properties": {
            "name": "Indikatrix.org"
        }
    }]
};

var vectorSource = new VectorSource({
  features: (new GeoJSON()).readFeatures(geojsonObject)
});


var vectorLayer = new VectorLayer({
  source: vectorSource
});

var map = new Map({
  layers: [
    new TileLayer({
      source: new OSM()
    }),
    vectorLayer
  ],
  target: 'map',
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});