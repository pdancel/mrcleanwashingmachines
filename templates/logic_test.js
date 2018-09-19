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
  
  var states= {
    "features": [
      {
        "geometry": {
          "coordinates": [
            -84.5904,
            40.8689
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "VAN WERT COUNTY HOSPITAL - (00003165) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -84.5904,
            40.8689
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "VAN WERT COUNTY HOSPITAL - (00003165) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -84.6635,
            43.3809
          ],
          "type": "Point"
        },
        "properties": {
          "age": 10,
          "bi": "Cyclesure",
          "cycles": "61-70",
          "entity": "MIDMICHIGAN MEDICAL CENTER GRATIOT - (00003261) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -112.3615,
            43.1943
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "21-30",
          "entity": "BINGHAM MEMORIAL HOSPITAL - (00009903) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -86.5673,
            34.7269
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "SURGERY CENTER OF HUNTSVILLE - (00020060) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -106.3234,
            39.6512
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "VAIL CLINIC INC - (00064461) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -96.6545,
            40.8063
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "SAINT ELIZABETH REGIONAL MEDICAL CENTER - (00357851) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -77.0011,
            41.2412
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "3M BI",
          "cycles": "41-50",
          "entity": "WILLIAMSPORT HOSPITAL AND MEDICAL CENTER - (00002640) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -77.0011,
            41.2412
          ],
          "type": "Point"
        },
        "properties": {
          "age": 15,
          "bi": "3M BI",
          "cycles": "41-50",
          "entity": "WILLIAMSPORT HOSPITAL AND MEDICAL CENTER - (00002640) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -117.3694,
            33.9924
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "100+",
          "entity": "RIVERSIDE COMMUNITY HOSPITAL - (00003845) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -75.6041,
            38.6404
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "51-60",
          "entity": "NANTICOKE MEMORIAL HOSPITAL - (00009116) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -109.4203,
            47.0563
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "41-50",
          "entity": "CENTRAL MONTANA MEDICAL CENTER - (00011866) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -109.5271,
            38.5677
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "MOAB REGIONAL HOSPITAL - (00011996) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -105.1456,
            39.9789
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "51-60",
          "entity": "AVISTA ADVENTIST HOSPITAL - (00049549) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -117.4298,
            47.6501
          ],
          "type": "Point"
        },
        "properties": {
          "age": 14,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "SACRED HEART MEDICAL CENTER - (01094382) - ETO (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -89.4,
            43.0653
          ],
          "type": "Point"
        },
        "properties": {
          "age": 14,
          "bi": "3M BI",
          "cycles": "41-50",
          "entity": "MERITER HOSPITAL - (00003340) - ETO (3)",
          "qty": 3
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -91.5477,
            41.6627
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "100+",
          "entity": "UNIVERSITY OF IOWA HOSPITALS & CLINICS - (00005192) - VPro 60 (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -91.5477,
            41.6627
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "100+",
          "entity": "UNIVERSITY OF IOWA HOSPITALS & CLINICS - (00005192) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -80.6698,
            32.4316
          ],
          "type": "Point"
        },
        "properties": {
          "age": 10,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "NAVAL HOSPITAL - (00007885) - VPro (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.8355,
            41.8623
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "81-90",
          "entity": "EDWARD HINES JUNIOR VA HOSPITAL - (00008055) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.5632,
            37.8274
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "3M BI",
          "cycles": "41-50",
          "entity": "METHODIST HOSPITAL - (00009411) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -105.3855,
            42.7626
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Cyclesure",
          "cycles": "41-50",
          "entity": "MEMORIAL HOSPITAL OF CONVERSE COUNTY - (00009899) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.4633,
            31.2885
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "RAPIDES REGIONAL MEDICAL CENTER - (01153970) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -88.0414,
            43.0493
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "SAINT JOSEPH OUTPATIENT CLINIC - (01156046) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -83.2027,
            35.9544
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Cyclesure",
          "cycles": "1-10",
          "entity": "NEWPORT MEDICAL CENTER - (01185137) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -90.4286,
            38.1879
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "3M BI",
          "cycles": "11-20",
          "entity": "MERCY HOSPITAL JEFFERSON - (01210891) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -89.3065,
            31.3146
          ],
          "type": "Point"
        },
        "properties": {
          "age": 9,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "FORREST GENERAL HOSPITAL - (00005014) - VPro (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -88.0205,
            44.482
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "11-20",
          "entity": "BELLIN MEMORIAL HOSPITAL INC - (00009533) - TSO3 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -88.0205,
            44.482
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "3M BI",
          "cycles": "11-20",
          "entity": "BELLIN MEMORIAL HOSPITAL INC - (00009533) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -90.4256,
            38.5781
          ],
          "type": "Point"
        },
        "properties": {
          "age": 9,
          "bi": "3M BI",
          "cycles": "41-50",
          "entity": "DES PERES HOSPITAL - (00073628) - SYSTEM 1E (3)",
          "qty": 3
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -104.9631,
            39.679
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "Cyclesure",
          "cycles": "100+",
          "entity": "KINDRED HOSPITAL DENVER SOUTH - (00357725) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -93.4126,
            37.6085
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "CITIZENS MEMORIAL SYSTEM - (01355662) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -74.2042,
            40.085
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "MONMOUTH MEDICAL CENTER SOUTHERN CAMPUS - (01371223) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -83.4065,
            34.8826
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "21-30",
          "entity": "MOUNTAIN LAKES MEDICAL CENTER - (01419040) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -96.1836,
            33.5806
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "TEXOMA MEDICAL CENTER BONHAM HOSPITAL - (00005543) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -72.9302,
            41.6823
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "3M BI",
          "cycles": "21-30",
          "entity": "BRISTOL HOSPITAL - (00007418) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -86.5048,
            35.9656
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Cyclesure",
          "cycles": "1-10",
          "entity": "PHYSICIANS PAVILION - (00058815) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.2303,
            34.8807
          ],
          "type": "Point"
        },
        "properties": {
          "age": 9,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "NORTH RIVER SURGERY CENTER - (00246872) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -79.9552,
            40.444
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "MONTEFIORE HOSPITAL - (01001032) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -73.8931,
            41.284
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "3M BI",
          "cycles": "1-10",
          "entity": "HUDSON VALLEY HOSPITAL CENTER - (00004039) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -93.2642,
            44.9609
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "3M BI",
          "cycles": "51-60",
          "entity": "MERCY HOSPITAL AND MEDICAL CENTER - (00006455) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -90.6965,
            35.833
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "3M BI",
          "cycles": "41-50",
          "entity": "ST. BERNARD'S HOSPITAL INC - (00009747) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -148.9872,
            61.6303
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "100+",
          "entity": "MAT SU REGIONAL MEDICAL CENTER - (00012120) - VPro 60 (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -78.9478,
            36.0218
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "DUKE UNIVERSITY HEALTH SYSTEM - (01018475) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -80.6524,
            28.1384
          ],
          "type": "Point"
        },
        "properties": {
          "age": 14,
          "bi": "Cyclesure",
          "cycles": "21-30",
          "entity": "STEWARD MELBOURNE HOSPITAL INC - (01199606) - SYSTEM 1E (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -73.9781,
            40.7443
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "BELLEVUE HOSPITAL CENTER (NYCHHC) - (00004361) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -107.3252,
            39.5296
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "51-60",
          "entity": "VALLEY VIEW HOSPITAL - (00006809) - VPro (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -81.4626,
            30.6697
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "Steris BI",
          "cycles": "41-50",
          "entity": "BAPTIST MEDICAL CENTER NASSAU - (00009266) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -85.9246,
            34.048
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "21-30",
          "entity": "RIVERVIEW REGIONAL MEDICAL CENTER - (00009325) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -89.2158,
            37.72
          ],
          "type": "Point"
        },
        "properties": {
          "age": 9,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "PHYSICIANS SURGERY CENTER - (01089485) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -78.4089,
            40.5209
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "ALTOONA HOSPITAL - (00002622) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -81.3289,
            35.7576
          ],
          "type": "Point"
        },
        "properties": {
          "age": 10,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "DLP FRYE REGIONAL MEDICAL CENTER LLC - (00006034) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -83.2179,
            42.1382
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "100+",
          "entity": "CENTER OF HEALTH SERVICES BROWNSTOWN - (00510255) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -83.2179,
            42.1382
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "100+",
          "entity": "CENTER OF HEALTH SERVICES BROWNSTOWN - (00510255) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -84.4199,
            34.1993
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Cyclesure",
          "cycles": "61-70",
          "entity": "NORTHSIDE HOSPITAL CHEROKEE - (01087103) - VPro (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -118.1271,
            34.0534
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Steris BI",
          "cycles": "31-40",
          "entity": "GARFIELD MEDICAL CENTER - (00006880) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -118.1271,
            34.0534
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "31-40",
          "entity": "GARFIELD MEDICAL CENTER - (00006880) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -72.6026,
            44.5543
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "COPLEY HOSPITAL - (00007413) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -76.8396,
            42.3437
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "SCHUYLER HOSPITAL - (00007696) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.9678,
            43.3978
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "AVERA SAINT BENEDICT HOSPITAL - (00012127) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -74.2131,
            40.7107
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "NEWARK BETH ISRAEL MEDICAL CENTER - (00002419) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -88.5611,
            39.1217
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Velocity",
          "cycles": "21-30",
          "entity": "SAINT ANTHONYS MEMORIAL HOSPITAL - (00003541) - TSO3 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -84.9345,
            34.4965
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Cyclesure",
          "cycles": "61-70",
          "entity": "GORDON HOSPITAL - (00006066) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -81.7964,
            41.3826
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "61-70",
          "entity": "METROHEALTH HOSPITAL - (00010719) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -88.0873,
            41.6976
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "3M BI",
          "cycles": "1-10",
          "entity": "ADVENTIST BOLINGBROOK HOSPITAL - (01080998) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -121.234,
            38.7346
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "1-10",
          "entity": "SUTTER SIERRA SURGERY CENTER - (01351719) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -117.3746,
            47.6977
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "COLUMBIA SURGICAL SYSTEM - (01361988) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -83.803,
            43.0111
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "31-40",
          "entity": "MCLAREN REGIONAL MEDICAL CENTER - (00003253) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.9429,
            43.006
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "3M BI",
          "cycles": "41-50",
          "entity": "SAINT FRANCIS HOSPITAL - (00004145) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.7323,
            35.4977
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "INTEGRIS RURAL HEALTH DBA - (00077041) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -91.449,
            42.4834
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "REGIONAL MEDICAL CENTER - (00011930) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -94.6313,
            35.8107
          ],
          "type": "Point"
        },
        "properties": {
          "age": 9,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "MEMORIAL HOSPITAL - (00012414) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -101.6107,
            47.3271
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "HAZEN MEMORIAL HOSPITAL - (00013018) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -82.5034,
            28.0091
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "21-30",
          "entity": "UNIVERSITY COMMUNITY HOSPITAL INC - (01297096) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -82.5034,
            28.0091
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "21-30",
          "entity": "UNIVERSITY COMMUNITY HOSPITAL INC - (01297096) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -80.7323,
            39.9597
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "REYNOLDS MEMORIAL HOSPITAL - (00002816) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -108.5005,
            45.7745
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "SAINT VINCENT HEALTHCARE - (00003401) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.5627,
            33.1969
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "DCH REGIONAL MEDICAL CENTER - (00004956) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -93.5197,
            44.7793
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "SAINT FRANCIS REGIONAL MEDICAL CENTER - (00006398) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -119.2222,
            34.2846
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "100+",
          "entity": "COMMUNITY MEMORIAL HOSPITAL - (00006896) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -93.2886,
            32.6323
          ],
          "type": "Point"
        },
        "properties": {
          "age": 10,
          "bi": "Steris BI",
          "cycles": "11-20",
          "entity": "MINDEN MEDICAL CENTER - (00007066) - SYSTEM 1E (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -90.4266,
            43.5966
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "SAINT JOSEPHS HEALTH SERVICES INC - (00011709) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -86.2673,
            32.3543
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "JACKSON HOSPITAL & CLINIC INC - (00040525) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -104.7045,
            38.9189
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "SAINT FRANCIS MEDICAL CENTER - (01092018) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -112.6405,
            45.2339
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Cyclesure",
          "cycles": "21-30",
          "entity": "BARRETT HOSPITAL DEVELOPMENT CORPORATION - (00009590) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.9172,
            41.4082
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "31-40",
          "entity": "PELLA REGIONAL HEALTH CENTER - (00010305) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -78.8577,
            36.0512
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "DUKE MEDICAL PAVILLION - (00023598) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -95.2106,
            32.419000000000004
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "UNIVERSITY OF TX HEALTH CENTER - (01124220) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -89.9611,
            29.9466
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "SAINT BERNARD PARISH HOSPITAL - (01206755) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -77.8926,
            40.8082
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "MOUNT NITTANY MEDICAL CENTER - (00002623) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -85.5423,
            36.2178
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "COOKEVILLE SURGERY CENTER - (00110258) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -104.9717,
            39.7327
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "11-20",
          "entity": "PRESBYTERIAN SAINT LUKES MEDICAL CENTER - (01159137) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -76.3976,
            40.3316
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "SURGERY CENTER OF LEBANON - (00427421) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -93.1954,
            43.1499
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "71-80",
          "entity": "MERCY MEDICAL CENTER NORTH IOWA - (01007396) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -83.0604,
            42.3474
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "31-40",
          "entity": "KARMANOS CANCER CENTER - (01017991) - VPro (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -104.8384,
            39.7467
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "UNIVERSITY OF COLORADO HOSPITAL AUTHORITY - (01095866) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -82.3873,
            29.6132
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "71-80",
          "entity": "SHANDS TEACHING HOSPITAL AND CLINICS INC - (01375222) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -95.9306,
            36.0284
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "11-20",
          "entity": "OKLAHOMA SURGICAL HOSPITAL - (00075675) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -119.5272,
            48.4143
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "CONFLUENCE HEALTH OMAK AMBULATORY SURGERY CENTER - (00227013) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -76.8788,
            39.2141
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "MARYLAND SURGEONS CENTER OF COLUMBIA - (01091581) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -77.2358,
            39.188
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "HOLY CROSS GERMANTOWN HOSPITAL - (01297235) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -86.9048,
            35.7173
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "SPRINGHILL SURGERY CENTER - (01305197) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.4196,
            30.6496
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Cyclesure",
          "cycles": "1-10",
          "entity": "SAVOY MEDICAL CENTER - (00007064) - SYSTEM 1E (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -82.3873,
            29.6132
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "3M BI",
          "cycles": "100+",
          "entity": "MALCOM RANDALL VA MEDICAL CENTER - (00007912) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -93.4911,
            35.4908
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "11-20",
          "entity": "JOHNSON REGIONAL MEDICAL CENTER - (00010732) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -83.0054,
            43.8067
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "HURON MEDICAL CENTER - (00006307) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.7582,
            41.8829
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "LORETTO HOSPITAL - (00009610) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -98.9418,
            41.5962
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "VALLEY COUNTY HOSPITAL - (00012107) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -95.6066,
            29.5785
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "HOUSTON METHODIST SUGAR LAND HOSPITAL - (00068856) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -80.6668,
            32.9052
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "71-80",
          "entity": "COLLETON AMBULATORY SURGERY CENTER - (00253552) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.766,
            43.8176
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "AURORA SHEBOYGAN MEMORIAL MEDICAL CENTER - (00003315) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -84.6517,
            40.4846
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "MERCER COUNTY COMMUNITY HOSPITAL - (00006267) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -101.5344,
            40.098
          ],
          "type": "Point"
        },
        "properties": {
          "age": 16,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "DUNDY COUNTY HOSPITAL - (00011206) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -119.0627,
            35.3384
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "GOOD SAMARITAN HOSPITAL - (00047523) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -86.4481,
            36.9375
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "Cyclesure",
          "cycles": "61-70",
          "entity": "GREENVIEW HOSPITAL - (00080063) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -79.6468,
            34.2153
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "3M BI",
          "cycles": "51-60",
          "entity": "PREMIER / MCLEOD REGIONAL MEDICAL CENTER - (01029202) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -76.6049,
            40.9674
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "100+",
          "entity": "GEISINGER MEDICAL CENTER - (01083523) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -90.1726,
            33.5159
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "GREENWOOD LEFLORE HOSPITAL - (00005005) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -118.1491,
            34.6909
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "KAISER ANTELOPE VALLEY MEDICAL OFFICES - (01330296) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -83.7641,
            31.1792
          ],
          "type": "Point"
        },
        "properties": {
          "age": 18,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "COLQUITT REGIONAL MEDICAL CENTER - (00002897) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -120.6509,
            35.2635
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "41-50",
          "entity": "FRENCH HOSPITAL MEDICAL CENTER - (00007154) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -79.3167,
            39.4339
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "GARRETT COUNTY MEMORIAL HOSPITAL - (00009129) - VPro 60 (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -79.3167,
            39.4339
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "GARRETT COUNTY MEMORIAL HOSPITAL - (00009129) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -79.1557,
            37.353
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "SURGERY CENTER OF LYNCHBURG - (00075524) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -96.7776,
            32.7673
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "11-20",
          "entity": "UNIVERSITY OF TEXAS SOUTHWESTERN ZALE LIPSSHY MED CENTER - (01158122) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -117.6985,
            33.5916
          ],
          "type": "Point"
        },
        "properties": {
          "age": 11,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "SADDLEBACK MEMORIAL MEDICAL CENTER - (00003848) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -117.6985,
            33.5916
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "SADDLEBACK MEMORIAL MEDICAL CENTER - (00003848) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -82.0147,
            41.0327
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "LODI COMMUNITY HOSPITAL - (00011889) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -95.14399999999999,
            29.5564
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "11-20",
          "entity": "BAY AREA REGIONAL MEDICAL CENTER LLC - (01326478) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -79.9627,
            39.6453
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "100+",
          "entity": "WEST VIRGINIA UNIVERSITY HOSPITAL - (00004705) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -88.0074,
            44.4601
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "81-90",
          "entity": "ST.VINCENT HOSPITAL- HOSPITAL SISTERS THIRD ORDER OF ST. FRANCIS - (00007167) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -103.1763,
            44.048
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "3M BI",
          "cycles": "100+",
          "entity": "RAPID CITY REGIONAL HOSPITAL INC - (00057344) - VPro MAX (3)",
          "qty": 3
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.9127,
            42.0405
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "UNITYPOINT HEALTH MARSHALLTOWN - (00003297) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -83.8256,
            34.3073
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "Velocity",
          "cycles": "100+",
          "entity": "NORTHEAST GEORGIA MEDICAL CENTER - (00004799) - SYSTEM 1E (3)",
          "qty": 3
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -123.3538,
            42.3989
          ],
          "type": "Point"
        },
        "properties": {
          "age": 12,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "THREE RIVERS MEDICAL CENTER - (00005867) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -76.6545,
            40.2638
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "HERSHEY OUTPATIENT SURGERY CENTER - (00401861) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.4733,
            35.6215
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "21-30",
          "entity": "SUMMIT MEDICAL CENTER - (01144858) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -75.1489,
            40.3054
          ],
          "type": "Point"
        },
        "properties": {
          "age": 9,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "DOYLESTOWN HOSPITAL - (00002666) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -75.3991,
            39.9188
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Cyclesure",
          "cycles": "100+",
          "entity": "RIDDLE MEMORIAL HOSPITAL - (00002679) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -82.8692,
            36.1316
          ],
          "type": "Point"
        },
        "properties": {
          "age": 13,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "TAKOMA REGIONAL HOSPITAL - (00003007) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -95.5568,
            42.7482
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Velocity",
          "cycles": "1-10",
          "entity": "CHEROKEE REGIONAL MEDICAL CENTER - (00004142) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -100.9286,
            37.0438
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "SOUTHWEST MEDICAL CENTER - (00006615) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -100.9286,
            37.0438
          ],
          "type": "Point"
        },
        "properties": {
          "age": 18,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "SOUTHWEST MEDICAL CENTER - (00006615) - ETO (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -119.7594,
            36.7684
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "3M BI",
          "cycles": "100+",
          "entity": "FRESNO VA MEDICAL CENTER - (00008328) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -119.7594,
            36.7684
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "100+",
          "entity": "FRESNO VA MEDICAL CENTER - (00008328) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -118.1667,
            47.6809
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "LINCOLN HOSPITAL - (00011425) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -96.8941,
            38.6767
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "HERINGTON MUNICIPAL HOSPITAL - (00011699) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.4953,
            37.3256
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "REG MED CENTER - (00082096) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -89.4,
            43.0653
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "31-40",
          "entity": "SAINT MARYS DEAN VENTURE INC - (01081879) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -89.0768,
            42.2554
          ],
          "type": "Point"
        },
        "properties": {
          "age": 10,
          "bi": "Velocity",
          "cycles": "41-50",
          "entity": "SWEDISH AMERICAN HOSPITAL - (00003519) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.574,
            33.2351
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "WISE REGIONAL HEALTH SYSTEM - (00013098) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -96.7898,
            46.8772
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "3M BI",
          "cycles": "31-40",
          "entity": "SANFORD HEALTH - (01002844) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -80.685,
            28.2061
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "41-50",
          "entity": "VIERA HOSPITAL INC - (01161781) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -80.685,
            28.2061
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "3M BI",
          "cycles": "41-50",
          "entity": "VIERA HOSPITAL INC - (01161781) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -96.7751,
            32.9189
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "21-30",
          "entity": "NORTH DALLAS SURGERY CENTER - (01389017) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -90.7548,
            29.5943
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "TERREBONNE GENERAL MEDICAL CENTER - (00003616) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -90.7548,
            29.5943
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "TERREBONNE GENERAL MEDICAL CENTER - (00003616) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -122.8398,
            42.3363
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "3M BI",
          "cycles": "41-50",
          "entity": "ROGUE REGIONAL MEDICAL CENTER - (00003974) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.9267,
            44.4914
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "AURORA BAYCARE MEDICAL CENTER - (01020706) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.9473,
            35.8636
          ],
          "type": "Point"
        },
        "properties": {
          "age": 9,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "MERCY HOSPITAL KINGFISHER - (00013040) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -120.7107,
            35.5551
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "TEMPLETON SURGERY CENTER - (00199458) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -106.3166,
            42.8458
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "11-20",
          "entity": "CASPER SURGICAL CENTER - (00313883) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -119.1056,
            35.3039
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "MERCY HOSPITAL BAKERSFIELD - (01342753) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.9715,
            43.0685
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "31-40",
          "entity": "WHEATON FRANCISCAN HEALTHCARE - (00005909) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -72.6726,
            43.9444
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "GIFFORD MEDICAL CENTER - (00007401) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.1524,
            34.7658
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "SPRINGHILL SURGICAL CENTER - (00072791) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -77.168,
            39.086999999999996
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "SURGERY CENTER OF ROCKVILLE - (00409038) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -96.0493,
            41.2656
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "MIDWEST SURGICAL HOSPITAL - (01088978) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -109.0756,
            44.5231
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "3M BI",
          "cycles": "11-20",
          "entity": "WEST PARK HOSPITAL - (00009895) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -95.6213,
            44.2342
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "SIOUX VALLEY SERVICE CORP - (00142884) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -95.5803,
            29.9781
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "METHODIST WILLOWBROOK HOSPITAL - (01091405) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -106.569,
            35.1506
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Cyclesure",
          "cycles": "51-60",
          "entity": "LOVELACE WOMENS HOSPITAL - (00003773) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -98.3873,
            40.9286
          ],
          "type": "Point"
        },
        "properties": {
          "age": 9,
          "bi": "3M BI",
          "cycles": "21-30",
          "entity": "CHI HEALTH SAINT FRANCIS - (00059910) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.5362,
            35.3792
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "OKLAHOMA CENTER FOR ORTHO & MULTI-SPECIALTY SURGERY - (00341200) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -121.8444,
            39.7458
          ],
          "type": "Point"
        },
        "properties": {
          "age": 11,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "ENLOE MEMORIAL HOSPITAL - (01168734) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -85.5882,
            42.3024
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "3M BI",
          "cycles": "91-100",
          "entity": "BRONSON METHODIST HOSPITAL - (00003272) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -72.8189,
            41.5401
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "MIDSTATE MEDICAL CENTER - (00052722) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -85.8378,
            33.7622
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "NOLAND HOSPITAL ANNISTON II LLC - (00410077) - VPro (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -100.4386,
            31.4707
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "3M BI",
          "cycles": "41-50",
          "entity": "SHANNON SURGICAL CENTER - (00427056) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -106.4073,
            37.6447
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "RIO GRANDE HOSPITAL - (01019429) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -86.2368,
            41.8202
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "11-20",
          "entity": "LAKELAND COMMUNITY HOSPITAL - (00003276) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.5261,
            35.4259
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "3M BI",
          "cycles": "11-20",
          "entity": "INTEGRIS SOUTH OKLAHOMA CITY HOSPITAL CORPORATION - (00004179) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -117.8645,
            48.578
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "PROVIDENCE MOUNT CARMEL HOSPITAL - (00011381) - SYSTEM 1E (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -105.5847,
            36.3953
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Cyclesure",
          "cycles": "41-50",
          "entity": "HOLY CROSS HOSPITAL - (00012443) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -117.9321,
            33.621
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "HUNTINGTON REPRODUCTIVE CENTER - (01200792) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -91.3982,
            40.4094
          ],
          "type": "Point"
        },
        "properties": {
          "age": 14,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "KEOKUK AREA HOSPITAL - (00006370) - SYSTEM 1E (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -91.3982,
            40.4094
          ],
          "type": "Point"
        },
        "properties": {
          "age": 15,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "KEOKUK AREA HOSPITAL - (00006370) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.8144,
            43.2872
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Cyclesure",
          "cycles": "1-10",
          "entity": "MITCHELL COUNTY REGIONAL HEALTH CENTER - (00010374) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.4683,
            35.0823
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "CONWAY REGIONAL MEDICAL CENTER INC - (00011385) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.6662,
            40.4639
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "11-20",
          "entity": "HOOPESTON COMMUNITY MEMORIAL HOSPITAL & NURSING HOME - (00016029) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -84.5704,
            42.7391
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "3M BI",
          "cycles": "1-10",
          "entity": "SPARROW HEALTH SYSTEM - (00006320) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -73.1923,
            42.8827
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "SOUTHWESTERN VERMONT MEDICAL CENTER - (00007405) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -98.5697,
            29.5042
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "AUDIE L MURPHY VA HOSPITAL - (00008150) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.1061,
            32.5286
          ],
          "type": "Point"
        },
        "properties": {
          "age": 18,
          "bi": "Cyclesure",
          "cycles": "91-100",
          "entity": "P & S SURGICAL HOSPITAL - (00026078) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -81.3349,
            29.0266
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "21-30",
          "entity": "FLORIDA HOSPITAL DELAND - (00004883) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -73.243,
            40.7051
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "SOUTHSIDE HOSPITAL - (00002561) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -75.4645,
            40.5891
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "3M BI",
          "cycles": "91-100",
          "entity": "LEHIGH VALLEY HOSPITAL AND HEALTH NETWORK - (00002653) - TSO3 (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -93.8781,
            42.0694
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Cyclesure",
          "cycles": "1-10",
          "entity": "BOONE COUNTY HOSPITAL - (00005178) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.3777,
            30.2148
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "ACADIA GENERAL HOSPITAL INC - (00008496) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -77.4316,
            37.5406
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "100+",
          "entity": "VIRGINIA COMMONWEALTH UNIVERSITY HEALTH SYSTEM AUTHORITY - (00004622) - VPro MAX (4)",
          "qty": 4
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.124,
            44.9043
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "PRAIRIE LAKES HEALTHCARE SYSTEM - (00006428) - VPro 60 (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.62899999999999,
            39.8241
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "REPUBLIC COUNTY HOSPITAL - (00009671) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -83.565,
            32.8118
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "COLISEUM SAME DAY SURGERY - (00027535) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -149.8101,
            61.206
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "ALASKA SURGERY CENTER - (01217762) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.3269,
            42.5149
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "71-80",
          "entity": "ALLEN MEMORIAL HOSPITAL - (00003301) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -86.9657,
            33.3224
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "MEDICAL WEST- AN AFFILIATE OF THE UAB HEALTH SYSTEMS - (00009307) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -86.9657,
            33.3224
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "MEDICAL WEST- AN AFFILIATE OF THE UAB HEALTH SYSTEMS - (00009307) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -149.8101,
            61.206
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "PROVIDENCE SURGERY CENTER LLC - (01369094) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -89.4239,
            43.0696
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Cyclesure",
          "cycles": "91-100",
          "entity": "UNIVERSITY OF WISCONSIN HOSPITAL AND CLINICS - (00005216) - ETO (4)",
          "qty": 4
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -86.6082,
            41.2809
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "KNOX HOSPITAL COMPANY LLC - (00006274) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -75.1595,
            39.9207
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "METHODIST HOSPITAL DIVISION OF THOMAS JEFFERSON UNIVERSITY - (00002716) - VPro MAX (4)",
          "qty": 4
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.3411,
            31.5221
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "MONROE COUNTY HOSPITAL - (00012000) - SYSTEM 1E (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -83.1198,
            42.6006
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "71-80",
          "entity": "BEAUMONT TROY CAMPUS - (00003217) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.6528,
            41.9399
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "21-30",
          "entity": "PRESENCE SAINT JOSEPH HOSPITAL-CHICAGO - (00003513) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -113.5581,
            37.0831
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "100+",
          "entity": "DIXIE REGIONAL MEDICAL CENTER - (00009924) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -77.0504,
            38.9014
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "100+",
          "entity": "GEORGE WASHINGTON UNIVERSITY HOSPITAL - (00069406) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -122.324,
            41.3174
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "11-20",
          "entity": "MERCY MEDICAL  CENTER MOUNT SHASTA - (01295171) - VPro 60 (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -88.2705,
            43.0128
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "51-60",
          "entity": "WAUKESHA MEMORIAL HOSPITAL - (00003320) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.8623,
            36.4028
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "SAINT MARYS REGIONAL MEDICAL CENTER - (00004180) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -95.4467,
            29.180999999999997
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "UTMB HEALTH ANGLETON DANBURY CAMPUS - (00010703) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -90.5403,
            41.5618
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "MISSISSIPPI VALLEY SURGERY CENTER - (00165983) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -73.0611,
            40.9457
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "SAINT CHARLES HOSPITAL - (01107657) - VPro (3)",
          "qty": 3
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -115.2644,
            36.1968
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "SOUTHWEST SURGERY CENTER AT TENAYA - (01374619) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.9439,
            44.9197
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "MIDWEST SURGERY CENTER - (01394508) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -93.2323,
            38.6961
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Cyclesure",
          "cycles": "51-60",
          "entity": "BOTHWELL REGIONAL HEALTH CENTER - (00005335) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.8059,
            42.1794
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "11-20",
          "entity": "HIGHLAND PARK HOSPITAL - (00003418) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.3455,
            34.751
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "BAPTIST HEALTH MEDICAL CENTER - (00003632) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -84.9928,
            40.4306
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "IU HEALTH JAY COUNTY HOSPITAL - (00005138) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -84.9928,
            40.4306
          ],
          "type": "Point"
        },
        "properties": {
          "age": 11,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "IU HEALTH JAY COUNTY HOSPITAL - (00005138) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -122.5569,
            45.5137
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "ADVENTIST MEDICAL CENTER - (00006940) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -83.4392,
            35.4241
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "31-40",
          "entity": "SWAIN COUNTY HOSPITAL - (00011274) - VPro 60 (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.0722,
            32.3868
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "UNIVERSITY HEALTH CONWAY - (01383763) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.0722,
            32.3868
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "UNIVERSITY HEALTH CONWAY - (01383763) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -83.3041,
            42.6294
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "PONTIAC GENERAL HOSPITAL - (00005145) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -88.4202,
            36.0062
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "BAPTIST MEMORIAL HOSPITAL - (00006186) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -159.6689,
            21.9571
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "21-30",
          "entity": "KAUAI VETERANS MEMORIAL HOSPITAL - (00011794) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -98.7565,
            38.4789
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "CLARA BARTON HOSPITAL - (00014444) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -85.6846,
            40.0988
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "SAINT VINCENT ANDERSON REGIONAL HOSPITAL - (00401538) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.5017,
            35.4794
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "O U MEDICAL CENTER - (01382290) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -76.45100000000001,
            39.400999999999996
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "MEDSTAR MEDICAL GROUP AT HONEYGO - (01385933) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -119.7764,
            39.4972
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "VA SIERRA NEVADA HEALTH CARE SYSTEM - (00008300) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -81.2359,
            33.9724
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "LEXINGTON MEDICAL CENTER - (00429544) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -94.1545,
            36.3169
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Velocity",
          "cycles": "100+",
          "entity": "MERCY HOSPITAL ROGERS - (00003634) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.2443,
            38.5773
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "JCMG ANCILLARY SERVICES LLC - (00520694) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -82.7988,
            40.0847
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "Steris BI",
          "cycles": "71-80",
          "entity": "NEW ALBANY SURGERY CENTER - (01180490) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -81.3036,
            28.5974
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "3M BI",
          "cycles": "100+",
          "entity": "WINTER PARK MEMORIAL HOSPITAL - (00002911) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -90.0491,
            36.2407
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "3M BI",
          "cycles": "21-30",
          "entity": "TWIN RIVERS REGIONAL MEDICAL CENTER - (00009645) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -89.7712,
            30.2784
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "DOCTORS HOSPITAL OF SLIDELL - (00080389) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -94.1716,
            36.0992
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "PHYSICIANS SPECIALTY HOSPITAL - (01105015) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -122.7627,
            44.99100000000001
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "3M BI",
          "cycles": "1-10",
          "entity": "LEGACY SILVERTON MEDICAL CENTER - (00012373) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -77.0873,
            38.7589
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "INOVA MOUNT VERNON HOSPITAL - (00073386) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -96.8123,
            46.8564
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "1-10",
          "entity": "CENTER FOR SPECIAL SURGERY - (01355832) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.6568,
            39.5516
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "CLOUD COUNTY HEALTH CENTER - (00006598) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -118.3699,
            34.2209
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "PACIFICA HOSPITAL OF THE VALLEY - (00007122) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -101.8949,
            35.1977
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "NORTHWEST TEXAS HEALTHCARE SYSTEM - (00081918) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -112.0744,
            38.7388
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "SEVIER VALLEY HOSPITAL - (00012231) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -85.1464,
            39.6435
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "FAYETTE REGIONAL HEALTH SYSTEM - (00003193) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.3986,
            42.8821
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Cyclesure",
          "cycles": "21-30",
          "entity": "SACRED HEART HEALTH SERVICES - (00063679) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.3986,
            42.8821
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Cyclesure",
          "cycles": "21-30",
          "entity": "SACRED HEART HEALTH SERVICES - (00063679) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.09200000000001,
            32.6548
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "Steris BI",
          "cycles": "41-50",
          "entity": "TARRANT COUNT HOSPITAL DISTRICT - (00429881) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -84.8697,
            38.2281
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "Steris BI",
          "cycles": "41-50",
          "entity": "FRANKFORT REGIONAL MEDICAL CENTER - (00003043) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -83.0796,
            42.376999999999995
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "3M BI",
          "cycles": "100+",
          "entity": "HENRY FORD HOSPITAL - (00003230) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -98.6996,
            35.535
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "WEATHERFORD HOSPITAL AUTHORITY - (00012539) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -81.199,
            41.7079
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "41-50",
          "entity": "TRIPOINT MEDICAL CENTER DBA LAKE HEALTH SYSTEM - (00053765) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -77.1939,
            38.8635
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "INOVA FAIRFAX HOSPITAL - (01113124) - VPro MAX (3)",
          "qty": 3
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -94.8002,
            29.3305
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "UNIVERSITY OF TEXAS MEDICAL BRANCH - (01416825) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -94.6771,
            38.9928
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "31-40",
          "entity": "SHAWNEE MISSION MEDICAL CENTER - (00003587) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -86.4537,
            37.7512
          ],
          "type": "Point"
        },
        "properties": {
          "age": 9,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "BRECKINRIDGE MEMORIAL HOSPITAL - (00011665) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -118.1811,
            33.8315
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "11-20",
          "entity": "COMPLETE CARE SURGICAL CENTER LLC - (01255128) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -84.3324,
            32.9015
          ],
          "type": "Point"
        },
        "properties": {
          "age": 10,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "UPSON REGIONAL MEDICAL CENTER - (00004792) - VPro (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -98.5848,
            37.2845
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "MEDICINE LODGE MEMORIAL HOSPITAL - (00011964) - SYSTEM 1E (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -86.7916,
            36.1504
          ],
          "type": "Point"
        },
        "properties": {
          "age": 9,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "SAINT THOMAS SURGERY CENTER MIDTOWN - (00059378) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -86.7916,
            36.1504
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "SAINT THOMAS SURGERY CENTER MIDTOWN - (00059378) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -88.421,
            46.7704
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "BARAGA COUNTY MEMORIAL HOSPITAL - (00005175) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -77.3948,
            37.5477
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "BON SECOURS RICHMOND COMMUNITY HOSPITAL - (00005999) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -86.1453,
            40.4988
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Cyclesure",
          "cycles": "1-10",
          "entity": "SAINT JOSEPH HOSPITAL - (01216985) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -79.4732,
            35.1884
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "Steris BI",
          "cycles": "71-80",
          "entity": "FIRSTHEALTH MOORE REGIONAL HOSPITAL - (00002844) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -79.4732,
            35.1884
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Steris BI",
          "cycles": "71-80",
          "entity": "FIRSTHEALTH MOORE REGIONAL HOSPITAL - (00002844) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.6697,
            45.0874
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "3M BI",
          "cycles": "41-50",
          "entity": "BAY AREA MEDICAL CENTER - (00005221) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -81.6595,
            29.6577
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "41-50",
          "entity": "PUTNAM COMMUNITY MEDICAL CENTER - (00006093) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -93.18799999999999,
            30.2285
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "31-40",
          "entity": "CHRISTUS SAINT PATRICK HOSPITAL - (00006642) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -94.5,
            31.5611
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "NACOGDOCHES MEDICAL CENTER - (00006687) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -76.8831,
            40.2618
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "41-50",
          "entity": "PINNACLEHEALTH HOSPITALS - (00067723) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.2167,
            30.5241
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "BAPT SURGICAL CENTER - (00073714) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.2167,
            30.5241
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "BAPT SURGICAL CENTER - (00073714) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -86.8254,
            33.3538
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Steris BI",
          "cycles": "11-20",
          "entity": "MEDPLEX OUTPATIENT SURGERY CENTER - (00045525) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -119.6802,
            36.8253
          ],
          "type": "Point"
        },
        "properties": {
          "age": 9,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "CLOVIS COMMUNITY MEDICAL CENTER - (01004056) - VPro (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -106.4304,
            31.7674
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "EL PASO COUNTY HOSPITAL DISTRICT - (01364476) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -90.3772,
            38.4915
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "Steris BI",
          "cycles": "51-60",
          "entity": "SAINT ANTHONYS MEDICAL CENTER - (01365502) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -86.0608,
            39.4854
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Velocity",
          "cycles": "1-10",
          "entity": "JOHNSON MEMORIAL HOSPITAL - (00005112) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -81.6854,
            30.3189
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "Velocity",
          "cycles": "100+",
          "entity": "SAINT VINCENTS MEDICAL CENTER RIVERSIDE - (00079356) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -102.0134,
            31.8816
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Steris BI",
          "cycles": "11-20",
          "entity": "TEXAS SURGICAL CENTER - (00394016) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -102.0134,
            31.8816
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "Steris BI",
          "cycles": "11-20",
          "entity": "TEXAS SURGICAL CENTER - (00394016) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -90.2082,
            38.6442
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Cyclesure",
          "cycles": "61-70",
          "entity": "VA MEDICAL CENTER - (01173278) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -89.1083,
            41.5443
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "MENDOTA COMMUNITY HOSPITAL - (00006462) - VPro 60 (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -94.7358,
            40.9871
          ],
          "type": "Point"
        },
        "properties": {
          "age": 10,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "ALEGENT HEALTH - MERCY HOSPITAL - (00011393) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -74.6118,
            39.3741
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "ATLANTICARE SURGERY CENTER - (00198992) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -113.5841,
            37.1041
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "DIXIE REGIONAL MEDICAL CENTER 400 EAST CAMPUS - (01348927) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -71.4255,
            41.7971
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "PROVIDENCE VA MEDICAL CENTER - (00007725) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -84.9583,
            42.272
          ],
          "type": "Point"
        },
        "properties": {
          "age": 12,
          "bi": "Velocity",
          "cycles": "21-30",
          "entity": "OAKLAWN HOSPITAL - (00008533) - SYSTEM 1E (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.072,
            41.7863
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Cyclesure",
          "cycles": "1-10",
          "entity": "MARENGO MEMORIAL HOSPITAL - (00005194) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -74.0714,
            40.2096
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "JERSEY SHORE UNIVERSITY MEDICAL CENTER - (00005949) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -77.8862,
            34.2237
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "3M BI",
          "cycles": "61-70",
          "entity": "NEW HANOVER REGIONAL MEDICAL CENTER - (00009206) - TSO3 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -111.9249,
            33.3917
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "3M BI",
          "cycles": "61-70",
          "entity": "PHYSICIANS SURGERY CENTER OF TEMPE - (00044168) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -111.9249,
            33.3917
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "3M BI",
          "cycles": "61-70",
          "entity": "PHYSICIANS SURGERY CENTER OF TEMPE - (00044168) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -107.4973,
            45.6296
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "3M BI",
          "cycles": "31-40",
          "entity": "PHS INDIAN HOSPITAL - (00356580) - VPro (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -82.5805,
            28.0081
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "TAMPA COMMUNITY HOSPITAL - (01284246) - SYSTEM 1E (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -83.0044,
            39.9671
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "100+",
          "entity": "GRANT MEDICAL CENTER - (00003056) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -96.98,
            37.2416
          ],
          "type": "Point"
        },
        "properties": {
          "age": 16,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "WILLIAM NEWTON MEMORIAL HOSPITAL - (00006602) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -94.0428,
            36.1716
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Cyclesure",
          "cycles": "71-80",
          "entity": "NORTHWEST MEDICAL CENTER - (00008543) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -108.5005,
            45.7745
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Cyclesure",
          "cycles": "31-40",
          "entity": "BILLINGS CLINIC - (00025481) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -99.7182,
            32.4682
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "HENDRICK MEDICAL CENTER - (01248637) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -76.8862,
            40.303000000000004
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "91-100",
          "entity": "PINNACLE HEALTH HOSPITALS - (01386961) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -80.0731,
            40.3748
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Velocity",
          "cycles": "11-20",
          "entity": "SAINT CLAIR MEMORIAL HOSPITAL - (00002596) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -81.5488,
            41.0695
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "41-50",
          "entity": "AKRON GENERAL MEDICAL CENTER - (00003113) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -84.1021,
            36.9344
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "31-40",
          "entity": "BAPTIST HEALTH CORBIN - (00009397) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -114.8886,
            39.2474
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "WILLIAM BEE RIRIE HOSPITAL - (00011494) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -112.0678,
            33.5097
          ],
          "type": "Point"
        },
        "properties": {
          "age": 18,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "PHOENIX VA HEALTH CARE SYSTEM - (00400430) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -71.4493,
            42.9656
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "31-40",
          "entity": "ELLIOT HOSPITAL - (00007373) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -76.4613,
            43.4394
          ],
          "type": "Point"
        },
        "properties": {
          "age": 9,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "OSWEGO HOSPITAL - (00007536) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -111.8068,
            41.7759
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "21-30",
          "entity": "CACHE VALLEY SPECIALITY HOSPITAL - (00047079) - VPro 60 (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -96.0251,
            36.064
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "3M BI",
          "cycles": "51-60",
          "entity": "TULSA SPINE & SPECIALTY HOSPITAL - (00078785) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.6528,
            41.9399
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "100+",
          "entity": "ADVOCATE NORTH SIDE HEALTH NETWORK - (00211804) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.6528,
            41.9399
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "100+",
          "entity": "ADVOCATE NORTH SIDE HEALTH NETWORK - (00211804) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.6528,
            41.9399
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "71-80",
          "entity": "ADVOCATE ILLINOIS MASONIC MEDICAL CENTER - (01094822) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.6528,
            41.9399
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "71-80",
          "entity": "ADVOCATE ILLINOIS MASONIC MEDICAL CENTER - (01094822) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -118.2084,
            34.0487
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "SURGERY ACU CART #2 RM C6B10902 - (01242732) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -77.0504,
            38.9014
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Cyclesure",
          "cycles": "51-60",
          "entity": "GEORGE WASHINGTON UNIVERSITY HOSPITAL - (01390750) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -77.5359,
            39.1821
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "INOVA LOUDOUN HOSPITAL - (00002776) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -111.8068,
            41.7759
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "11-20",
          "entity": "LOGAN REGIONAL HOSPITAL - (00003746) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -86.0757,
            39.673
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "FRANCISCAN SURGERY CENTER - (00339270) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -76.8322,
            39.2051
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "41-50",
          "entity": "UNIVERSITY OF MARYLAND SURGERY CENTER - (01376355) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -93.7727,
            32.4945
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "LOUISIANA STATE UNIVERSITY MED CENTER - (00005452) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.3974,
            35.4605
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "MIDWEST REGIONAL MEDICAL CENTER - (01114658) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -74.5467,
            40.9176
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "11-20",
          "entity": "PRIME HEALTHCARE SERVICES SAINT CLARES LLC - (01371098) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -75.2231,
            40.0402
          ],
          "type": "Point"
        },
        "properties": {
          "age": 12,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "PRIME HEALTHCARE SERVICES-ROXBOROUGH LLC - (00004065) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -117.8783,
            34.7131
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "HIGH DESERT REGIONAL HEALTH CENTER - (00005774) - SYSTEM 1E (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -77.0338,
            38.9982
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "91-100",
          "entity": "HOLY CROSS HOSPITAL - (00005988) - VPro (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -83.565,
            32.8118
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "COLISEUM MEDICAL CENTERS - (00006075) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -149.8101,
            61.206
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "3M BI",
          "cycles": "21-30",
          "entity": "ALASKA REGIONAL HOSPITAL - (00006947) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -73.2471,
            42.4531
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "BERKSHIRE MEDICAL CENTER - (00007190) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -77.9727,
            39.4567
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "BERKELEY MEDICAL CENTER - (00009163) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -79.5134,
            40.1742
          ],
          "type": "Point"
        },
        "properties": {
          "age": 9,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "MT PLEASANT SURGERY CENTER - (00059557) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -96.6784,
            32.825
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "PRECISION SURGERY CENTER OF DALLAS - (01081614) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -104.9614,
            39.6405
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "SWEDISH MEDICAL CENTER - (01158619) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -114.89299999999999,
            47.4734
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "3M BI",
          "cycles": "21-30",
          "entity": "CLARK FORK VALLEY HOSPITAL - (00010714) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -98.4925,
            29.4237
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "NIX HEALTH CARE SYSTEM - (00284631) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -90.4504,
            38.6171
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "FRONTENAC SURGERY SPINE CENTER - (00417681) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -111.8565,
            42.1109
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "FRANKLIN COUNTY MEDICAL CENTER - (01074551) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -96.6924,
            34.78
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "11-20",
          "entity": "MERCY HOSPITAL ADA PHARMACY INC - (01278235) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -85.7847,
            38.1913
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "21-30",
          "entity": "JEWISH  HOSPITAL &  ST MRY'S HRCE - (00006959) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -96.8318,
            46.9209
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "11-20",
          "entity": "SANFORD MEDICAL CENTER FARGO - (00006976) - VPro MAX (3)",
          "qty": 3
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -119.0171,
            35.3866
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "11-20",
          "entity": "MILLENNIUM SURGERY CENTER - (00307445) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -90.1106,
            38.7261
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "3M BI",
          "cycles": "21-30",
          "entity": "GATEWAY REGIONAL MEDICAL CENTER - (00412690) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -94.3517,
            38.912
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "3M BI",
          "cycles": "11-20",
          "entity": "LEES SUMMIT MEDICAL CENTER - (00502940) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -90.1782,
            32.3149
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "3M BI",
          "cycles": "100+",
          "entity": "MISSISSIPPI BAPTIST HEALTH SYSTEMS - (01168884) - VPro MAX2 (3)",
          "qty": 3
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -84.7736,
            43.6013
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "11-20",
          "entity": "MOUNT PLEASANT SURGERY CENTER - (01392114) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -84.5217,
            39.1432
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "3M BI",
          "cycles": "41-50",
          "entity": "CINCINNATI VETERANS ADMINISTRATION MEDICAL CENTER - (00007974) - VPro (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -76.6899,
            39.2856
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "41-50",
          "entity": "SAINT AGNES HEALTHCARE INC - (00082139) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -76.8203,
            40.291
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "PINNACLE HEALTH COMMUNITY GENERAL - (00294738) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -88.1128,
            43.1602
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "AURORA ADVANCED HEALTRHCARE - CARDIAC CENTER - (01131376) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -80.2073,
            36.0275
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "100+",
          "entity": "WAKE FOREST UNIVERSITY BAPTIST MEDICAL CENTER - (00002819) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -103.2214,
            34.4126
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "3M BI",
          "cycles": "61-70",
          "entity": "PLAINS REGIONAL MEDICAL CENTER - (00003779) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -103.2214,
            34.4126
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "3M BI",
          "cycles": "61-70",
          "entity": "PLAINS REGIONAL MEDICAL CENTER - (00003779) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -80.4031,
            27.633000000000003
          ],
          "type": "Point"
        },
        "properties": {
          "age": 9,
          "bi": "Steris BI",
          "cycles": "51-60",
          "entity": "INDIAN RIVER MEMORIAL HOSPITAL - (00004890) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -80.4347,
            37.2563
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "MONTGOMERY REGIONAL HOSPITAL - (00006011) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -79.1726,
            41.8436
          ],
          "type": "Point"
        },
        "properties": {
          "age": 9,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "WARREN GENERAL HOSPITAL - (00007705) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -117.0387,
            34.8914
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "11-20",
          "entity": "BARSTOW COMMUNITY HOSPITAL - (00010013) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -149.4403,
            61.1089
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "3M BI",
          "cycles": "31-40",
          "entity": "PROVIDENCE ALASKA MEDICAL CENTER - (00013951) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -84.2802,
            39.0688
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "MERCY HEALTH EASTGATE MEDICAL CENTER - (00292036) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -79.0528,
            33.5507
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Steris BI",
          "cycles": "31-40",
          "entity": "WACCAMAW COMMUNITY HOSPITAL - (00365590) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.7878,
            42.0698
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "51-60",
          "entity": "GLENBROOK HOSPITAL - (01095487) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -93.6003,
            42.0379
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "3M BI",
          "cycles": "31-40",
          "entity": "MARY GREELEY MEDICAL CENTER - (00005176) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -93.6003,
            42.0379
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "3M BI",
          "cycles": "31-40",
          "entity": "MARY GREELEY MEDICAL CENTER - (00005176) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -93.6003,
            42.0379
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "3M BI",
          "cycles": "31-40",
          "entity": "MARY GREELEY MEDICAL CENTER - (00005176) - SYSTEM 1E (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.3184,
            32.7256
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "100+",
          "entity": "JOHN PETER SMITH HOSPITAL - (00005561) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -82.6779,
            27.789
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "EDWARD WHITE HOSPITAL - (00014115) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -96.0495,
            41.2338
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "ALEGENT HEALTH BERGAN MERCY HEALTH SYSTEM - (00047848) - VPro MAX (3)",
          "qty": 3
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -96.37700000000001,
            35.0839
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "HOLDENVILLE GENERAL HOSPITAL - (00277498) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -147.6557,
            64.8283
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "BASSETT ARMY COMMUNITY HOSPITAL - (01192194) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -76.9099,
            40.9702
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "41-50",
          "entity": "EVANGELICAL COMMUNITY HOSPITAL - (00002646) - VPro 60 (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -79.6468,
            34.2153
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "3M BI",
          "cycles": "51-60",
          "entity": "MCLEOD REGIONAL MEDICAL CENTER OF THE PEE DEE INC - (00002862) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -82.9608,
            42.6206
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "3M BI",
          "cycles": "61-70",
          "entity": "HENRY FORD MACOMB HOSPITAL CLINTON TOWNSHIP - (00003211) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.0446,
            47.901
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "100+",
          "entity": "ALTRU HEALTH SYSTEM - (00006437) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.0446,
            47.901
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "100+",
          "entity": "ALTRU HEALTH SYSTEM - (00006437) - TSO3 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -79.6468,
            34.2153
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "MCLEOD WOMENS PAVILION - (00070525) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -70.8756,
            43.2525
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "WENTWORTH SURGERY CENTER LLC - (01314040) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -78.7029,
            40.6659
          ],
          "type": "Point"
        },
        "properties": {
          "age": 13,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "MINERS HOSPITAL - (00002604) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.3365,
            42.4731
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Steris BI",
          "cycles": "41-50",
          "entity": "COVENANT MEDICAL CENTER - (00003300) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -78.3928,
            40.3277
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "NASON HOSPITAL - (00008528) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -123.3538,
            42.3989
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "THREE RIVERS MEDICAL CENTER - (00005867) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -71.2562,
            42.3299
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "Steris BI",
          "cycles": "71-80",
          "entity": "NEWTON WELLESLEY HOSPITAL - (00078444) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -98.4967,
            29.6562
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "21-30",
          "entity": "CHRISTUS SANTA ROSA PHYSICIANS AMBULATORY SURGERY CENTERS STONE OAK - (00520604) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -80.4784,
            27.7901
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "21-30",
          "entity": "SEBASTIAN HOSPITAL - (01003641) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -95.9336,
            41.2382
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "SOUTH OMAHA SURGICAL CENTER - (01371563) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -81.7033,
            41.4458
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "51-60",
          "entity": "METROHEALTH MEDICAL CENTER - (00005075) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.2127,
            33.0211
          ],
          "type": "Point"
        },
        "properties": {
          "age": 10,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "TROPHY CLUB MEDICAL CENTER - (00396468) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.2127,
            33.0211
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "TROPHY CLUB MEDICAL CENTER - (00396468) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -79.0914,
            36.0756
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "UNC HEALTH CARE HILLSBOROUGH HOSPITAL - (01355312) - VPro (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -83.9336,
            35.9556
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "Cyclesure",
          "cycles": "51-60",
          "entity": "EAST TENNESSEE CHILDRENS HOSPITAL - (00003014) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -73.9206,
            42.8179
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "TSO3 BI",
          "cycles": "Unknown",
          "entity": "ELLIS HOSPITAL - (00007515) - TSO3 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.6823,
            44.0971
          ],
          "type": "Point"
        },
        "properties": {
          "age": 12,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "HOLY FAMILY MEMORIAL MEDICAL CENTER - (01130518) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -75.0471,
            40.0606
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "NAZARETH HOSPITAL - (00002698) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -88.1383,
            42.1614
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "51-60",
          "entity": "ADVOCATE GOOD SHEPHERD HOSPITAL - (00003414) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -74.5543,
            39.4877
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "100+",
          "entity": "ATLANTICARE REGIONAL MEDICAL CENTER - (00005954) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -77.586,
            35.2783
          ],
          "type": "Point"
        },
        "properties": {
          "age": 10,
          "bi": "Cyclesure",
          "cycles": "1-10",
          "entity": "LENOIR MEMORIAL HOSPITAL - (00004749) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -118.4048,
            37.5014
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "NORTHERN INYO HOSPITAL - (00013630) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -118.5535,
            34.3985
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "61-70",
          "entity": "HENRY MAYO NEWHALL MEMORIAL HOSPITAL - (00006874) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -118.5535,
            34.3985
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "Steris BI",
          "cycles": "61-70",
          "entity": "HENRY MAYO NEWHALL MEMORIAL HOSPITAL - (00006874) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -124.3989,
            47.9287
          ],
          "type": "Point"
        },
        "properties": {
          "age": 14,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "CLALLAM COUNTY HOSPITAL DIS 1 - (00011547) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.5108,
            41.492
          ],
          "type": "Point"
        },
        "properties": {
          "age": 11,
          "bi": "Cyclesure",
          "cycles": "21-30",
          "entity": "FRANCISCAN SAINT MARGARET HEALTH DYER - (00056578) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.5108,
            41.492
          ],
          "type": "Point"
        },
        "properties": {
          "age": 13,
          "bi": "Cyclesure",
          "cycles": "21-30",
          "entity": "FRANCISCAN SAINT MARGARET HEALTH DYER - (00056578) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -117.8845,
            33.9291
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "KINDRED HOSPITAL BREA - (00062996) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -80.1813,
            26.403000000000002
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "SOUTH PALM AMBULATORY SURGERY CENTER LLC - (00501433) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.4835,
            44.0032
          ],
          "type": "Point"
        },
        "properties": {
          "age": 10,
          "bi": "Velocity",
          "cycles": "100+",
          "entity": "SAINT MARYS HOSPITAL - (01091723) - ETO (5)",
          "qty": 5
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -93.2054,
            31.0466
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "3M BI",
          "cycles": "1-10",
          "entity": "BAYNE JONES ARMY COMM HOSPITAL - (01109834) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -85.7476,
            38.2507
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "31-40",
          "entity": "JEWISH HOSPITAL - (01119064) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -93.4481,
            44.913999999999994
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "21-30",
          "entity": "CHCM-MINNETONKA AMBULATORY CLINIC - (01233291) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -84.1451,
            39.0957
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "SISTERS MERCY CLERMONT - (01315951) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -93.2392,
            33.2647
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Steris BI",
          "cycles": "51-60",
          "entity": "MAGNOLIA SURGERY CENTER - (01333485) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -85.3783,
            32.6454
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "3M BI",
          "cycles": "21-30",
          "entity": "EAST ALABAMA MEDICAL CENTER - (00004969) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -80.7267,
            37.3041
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "CARILION GILES COMMUNITY HOSPITAL - (00009144) - SYSTEM 1E (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.8389,
            42.4442
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "MIDWESTERN REGIONAL MEDICAL CENTER INC - (00009596) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -84.6723,
            45.0125
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "TSO3 BI",
          "cycles": "Unknown",
          "entity": "OTSEGO MEMORIAL HOSPITAL - (00011595) - TSO3 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -94.9938,
            43.6457
          ],
          "type": "Point"
        },
        "properties": {
          "age": 9,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "SANFORD MEDICAL CENTER JACKSON - (00014201) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -75.4955,
            39.1564
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "BAYHEALTH MEDICAL CENTER - (00040560) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -82.2209,
            34.9453
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "11-20",
          "entity": "PELHAM MEDICAL CENTER - (01090818) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -84.2819,
            33.8123
          ],
          "type": "Point"
        },
        "properties": {
          "age": 11,
          "bi": "3M BI",
          "cycles": "81-90",
          "entity": "DEKALB MEDICAL CENTER - (00004775) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -78.9478,
            36.0218
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "3M BI",
          "cycles": "41-50",
          "entity": "DUKE UNIVERSITY AMB SURGERY CENTER - (00070014) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -77.3781,
            34.774
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Cyclesure",
          "cycles": "1-10",
          "entity": "ONSLOW MEMORIAL HOSPITAL - (01003986) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -94.52799999999999,
            36.18
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Cyclesure",
          "cycles": "11-20",
          "entity": "SILOAM SPRINGS MEMORIAL HOSPITAL - (00006660) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -93.2522,
            37.1654
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "3M BI",
          "cycles": "100+",
          "entity": "MERCY HOSPITAL SPRINGFIELD - (00006587) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -120.3775,
            42.1854
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "LAKE DISTRICT HOSPITAL - (00011841) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -81.357,
            28.514
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "ORLANDO HEALTH - (00015320) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -104.7735,
            38.852
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "AUDUBON SURGERY CENTER - (00296973) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -71.5342,
            41.4437
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "41-50",
          "entity": "SOUTH COUNTY HOSPITAL - (00007352) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.9439,
            37.6869
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "UNION COUNTY METHODIST HOSPITAL - (00011110) - SYSTEM 1E (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -84.1194,
            35.858000000000004
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "1-10",
          "entity": "CHILDREN'S WEST SRG CENTER - (00377965) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -81.7964,
            41.3826
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "SOUTHWEST GENERAL HEALTH CENTER - (00003277) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -104.6234,
            38.2843
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "3M BI",
          "cycles": "51-60",
          "entity": "PARKVIEW MEDICAL CENTER - (00006787) - VPro (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -122.7144,
            38.4405
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Steris BI",
          "cycles": "61-70",
          "entity": "SURGERY CENTER OF SANTA ROSA - (00022298) - VPro (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -121.9229,
            37.2563
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "GOOD SAMARITAN HOSPITAL - (00003908) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -96.7851,
            32.8038
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "BAYLOR MEDICAL CENTER AT UPTOWN - (00013121) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -107.8752,
            38.4678
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "31-40",
          "entity": "BLACK CANYON SURGERY CENTER - (00442418) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -80.8164,
            41.2639
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "Cyclesure",
          "cycles": "31-40",
          "entity": "SELECT SPECIALTY HOSPITAL YOUNGSTOWN INC - (01088176) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -86.1825,
            44.2635
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Steris BI",
          "cycles": "11-20",
          "entity": "MUNSON HEALTHCARE MANISTEE HOSPITAL - (00003290) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.9887,
            26.1694
          ],
          "type": "Point"
        },
        "properties": {
          "age": 9,
          "bi": "Cyclesure",
          "cycles": "21-30",
          "entity": "KNAPP MEDICAL CENTER - (00003720) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -155.0939,
            19.7025
          ],
          "type": "Point"
        },
        "properties": {
          "age": 9,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "HILO MEDICAL CENTER - (00005848) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -123.1007,
            47.2151
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "MASON GENERAL HOSPITAL - (00010127) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -82.6254,
            30.2702
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "11-20",
          "entity": "LAKE CITY MEDICAL CENTER - (00070581) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -73.1156,
            41.8131
          ],
          "type": "Point"
        },
        "properties": {
          "age": 13,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "CHARLOTTE HUNGERFORD HOSPITAL - (00007478) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -84.245,
            38.2083
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "1-10",
          "entity": "BOURBON COMMUNITY HOSPITAL - (00012124) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -93.2361,
            44.9054
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "3M BI",
          "cycles": "51-60",
          "entity": "MINNEAPOLIS VA MEDICAL CENTER - (00040149) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.9267,
            44.4914
          ],
          "type": "Point"
        },
        "properties": {
          "age": 10,
          "bi": "Steris BI",
          "cycles": "21-30",
          "entity": "BELLIN ORTHOPEDIC SURGERY CENTER - (01153765) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -80.634,
            40.3698
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "3M BI",
          "cycles": "51-60",
          "entity": "TRINITY MEDICAL CENTER EAST - (00003076) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -73.2199,
            44.483999999999995
          ],
          "type": "Point"
        },
        "properties": {
          "age": 11,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "THE UNIVERSITY OF VERMONT MEDICAL CENTER INC - (00007407) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -73.2199,
            44.483999999999995
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "THE UNIVERSITY OF VERMONT MEDICAL CENTER INC - (00007407) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -73.2199,
            44.483999999999995
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "THE UNIVERSITY OF VERMONT MEDICAL CENTER INC - (00007407) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.0448,
            34.1897
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "Steris BI",
          "cycles": "41-50",
          "entity": "JEFFERSON SURGERY CENTER - (00411227) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.6115,
            31.0286
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "3M BI",
          "cycles": "11-20",
          "entity": "SETON MEDICAL CENTER HARKER HEIGHTS - (01195078) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -90.5358,
            38.6491
          ],
          "type": "Point"
        },
        "properties": {
          "age": 9,
          "bi": "Velocity",
          "cycles": "51-60",
          "entity": "SAINT LUKES HOSPITAL - (00006511) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -99.6131,
            46.1917
          ],
          "type": "Point"
        },
        "properties": {
          "age": 9,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "WISHEK COMM HOSPITAL - (00017827) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -79.0372,
            35.9203
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "UNIVERSITY OF NORTH CAROLINA HOSPITALS - (00072608) - VPro MAX (4)",
          "qty": 4
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -80.8029,
            41.0171
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "SAINT ELIZABETH HOSPITAL - (00321799) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -82.9306,
            38.7932
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "21-30",
          "entity": "KINGS DAUGHTERS MEDICAL CENTER - (01193500) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -134.5294,
            58.3628
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "BARTLETT REGIONAL HOSPITAL - (00008572) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -85.9368,
            32.9164
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "RUSSELL MEDICAL CENTER - (00009306) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -91.7317,
            35.2436
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Cyclesure",
          "cycles": "21-30",
          "entity": "WHITE COUNTY MEDICAL CENTER - (00009743) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -90.6771,
            42.0778
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "JACKSON COUNTY REG HEALTH CENTER - (00006365) - SYSTEM 1E (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -72.5778,
            42.1288
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "31-40",
          "entity": "MERCY MEDICAL CENTER - (00007187) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -91.7317,
            35.2436
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "3M BI",
          "cycles": "51-60",
          "entity": "WHITE COUNTY SURGERY CENTER - (01368825) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -81.0658,
            29.2353
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "51-60",
          "entity": "FLORIDA HOSPITAL MEMORIAL MEDICAL CENTER - (00004112) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -89.9847,
            38.5127
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "SAINT ELIZABETHS HOSPITAL OF THE - (00006489) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -89.9847,
            38.5127
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "SAINT ELIZABETHS HOSPITAL OF THE - (00006489) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -117.6254,
            34.0763
          ],
          "type": "Point"
        },
        "properties": {
          "age": 15,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "KINDRED HOSPITAL ONTARIO - (00011136) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -78.71600000000001,
            34.3241
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "HUTCHINSON SURGICAL CARE SPECIALISTS - (00413687) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -98.5697,
            29.5042
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "CHRISTUS SANTA ROSA MEDICAL CENTER - (01119703) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -82.5173,
            37.5161
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "100+",
          "entity": "PIKEVILLE MEDICAL CENTER INC - (00008526) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.6761,
            43.0683
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "FLOYD COUNTY MEMORIAL HOSPITAL - (00009506) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -91.1799,
            40.8321
          ],
          "type": "Point"
        },
        "properties": {
          "age": 18,
          "bi": "Cyclesure",
          "cycles": "41-50",
          "entity": "GREAT RIVER MEDICAL CENTER - (00003307) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.4606,
            36.6543
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "21-30",
          "entity": "BLANCHFIELD ARMY HOSPITAL - (01088288) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -101.8949,
            35.1977
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Steris BI",
          "cycles": "41-50",
          "entity": "BSA HOSPITAL LLC - (00003723) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -96.8396,
            39.0299
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "11-20",
          "entity": "GEARY COMMUNITY HOSPITAL - (00005345) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -101.8949,
            35.1977
          ],
          "type": "Point"
        },
        "properties": {
          "age": 11,
          "bi": "Cyclesure",
          "cycles": "11-20",
          "entity": "VETERANS ADMINISTRATION MEDICAL CENTER - (00008233) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -117.2612,
            34.0483
          ],
          "type": "Point"
        },
        "properties": {
          "age": 13,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "VA LOMA LINDA HEALTHCARE SYSTEM - (00008318) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -117.2612,
            34.0483
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "VA LOMA LINDA HEALTHCARE SYSTEM - (00008318) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -111.8632,
            33.3301
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "3M BI",
          "cycles": "71-80",
          "entity": "CHANDLER REGIONAL HOSPITAL - (00013557) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -88.3707,
            43.3157
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "3M BI",
          "cycles": "41-50",
          "entity": "AURORA MEDICAL CENTER WASHINGTON COUNTY - (00003311) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -94.1716,
            36.0992
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "3M BI",
          "cycles": "81-90",
          "entity": "WASHINGTON REGIONAL MEDICAL CENTER - (00005490) - TSO3 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -116.3733,
            46.0448
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "ST. MARY'S HOSPITAL - (00011397) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -95.6342,
            31.7588
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "PALESTINE REGIONAL MEDICAL CENTER - (00040977) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -96.8123,
            46.8564
          ],
          "type": "Point"
        },
        "properties": {
          "age": 9,
          "bi": "3M BI",
          "cycles": "1-10",
          "entity": "MERITCARE SOUTH UNIVERSITY HOSPITAL - (00043298) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.0745,
            33.0383
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "FLOWER MOUND HOSPITAL PARTNERS LLC - (01122827) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -86.0898,
            33.9318
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "51-60",
          "entity": "RIVERVIEW REG MED CENTER - (01174363) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -117.07,
            33.1101
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "PALOMAR HEALTH DOWNTOWN CAMPUS - (00031789) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -93.7277,
            42.7271
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Cyclesure",
          "cycles": "31-40",
          "entity": "IOWA SPECIALTY HOSPITAL CLARION - (00010380) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -76.9835,
            38.7587
          ],
          "type": "Point"
        },
        "properties": {
          "age": 10,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "FORT WASHINGTON MEDICAL CENTER - (00130219) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -118.1491,
            34.6909
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "Steris BI",
          "cycles": "41-50",
          "entity": "ANTELOPE VALLEY HOSPITAL - (00005773) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -91.0509,
            41.4304
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "UNITY HEALTH CARE - (00009519) - SYSTEM 1E (3)",
          "qty": 3
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -91.0509,
            41.4304
          ],
          "type": "Point"
        },
        "properties": {
          "age": 16,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "UNITY HEALTH CARE - (00009519) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -118.1491,
            34.6909
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "ANTELOPE VALLEY SURGERY INSTITUTE - (00412425) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -118.1491,
            34.6909
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "KAISER ANTELOPE VALLEY - (01217179) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -91.0021,
            30.3904
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "WOMANS HOSPITAL FOUNDATION - (00003623) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -111.9809,
            41.1739
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "41-50",
          "entity": "OGDEN REGIONAL MEDICAL CENTER - (00005929) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.6313,
            44.855
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "21-30",
          "entity": "RIVER FALLS AREA HOSPITAL - (00006384) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -89.2042,
            41.3279
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "31-40",
          "entity": "SAINT MARGARETS HOSPITAL - (00006465) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -81.6076,
            41.5084
          ],
          "type": "Point"
        },
        "properties": {
          "age": 11,
          "bi": "Velocity",
          "cycles": "Unknown",
          "entity": "UNIVERSITY HOSPITALS CLEVELAND MEDICAL CENTER - (00009432) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -109.68799999999999,
            48.5561
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "21-30",
          "entity": "NORTHERN MONTANA HOSPITAL - (00011672) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -88.5289,
            30.3664
          ],
          "type": "Point"
        },
        "properties": {
          "age": 9,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "SINGING RIVER HOSPITAL - (00306702) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -114.9192,
            36.1065
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "21-30",
          "entity": "HENDERSON HOSPITAL - (01383247) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -118.4603,
            34.1514
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "SHERMAN OAKS SURGERY CENTER - (00302989) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -75.8903,
            41.2742
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "RIVERVIEW AMBULATORY SURGERY CENTER - (00303284) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -81.6261,
            41.3166
          ],
          "type": "Point"
        },
        "properties": {
          "age": 11,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "BRECKSVILLE SURGERY CENTER - (01098721) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -111.9704,
            41.0879
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "DAVIS HOSPITAL & MEDICAL CENTER - (01342000) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.1524,
            32.9485
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "SOUTHLAKE SPECIALTY HOSPITAL LLC - (00401612) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.3049,
            38.9382
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "3M BI",
          "cycles": "100+",
          "entity": "UNIVERSITY OF MO HOSPITAL AND CLINIC - (01002865) - SYSTEM 1E (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -76.9995,
            38.8338
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "UNITED MEDICAL CENTER - (01370130) - VPro (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -96.5469,
            38.6959
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "MORRIS COUNTY HOSPITAL - (00011401) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -84.0081,
            33.8635
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "ADVANCED UROLOGY INSTITUTE OF GEORGIA - (01306436) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -73.99600000000001,
            40.6336
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "MAIMONIDES MEDICAL CENTER - (00002537) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -81.7938,
            38.0444
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "BOONE MEMORIAL HOSPITAL - (00004680) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.4103,
            32.3509
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "3M BI",
          "cycles": "11-20",
          "entity": "TEXAS HEALTH HARRIS METHODIST CLEBURNE - (00005558) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -115.1617,
            36.1847
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "VALLEY HOSPITAL MEDICAL CENTER - (00007102) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -89.8036,
            35.2054
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "SAINT FRANCIS HOSPITAL BARTLETT - (01079110) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -85.303,
            29.8119
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Steris BI",
          "cycles": "11-20",
          "entity": "SACRED HEART ON THE GULF PORT - (01102053) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -86.8003,
            33.5062
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "CALLAHAN EYE FOUNDATION - (00009318) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.8292,
            34.3557
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "BAPTIST HEALTH MEDICAL CENTER - (00009738) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -73.1409,
            40.9257
          ],
          "type": "Point"
        },
        "properties": {
          "age": 13,
          "bi": "3M BI",
          "cycles": "100+",
          "entity": "SUNY STONY BROOK UNIVERSITY HOSPITAL - (00074698) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -105.1009,
            40.1779
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "Steris BI",
          "cycles": "11-20",
          "entity": "LONGMONT UNITED HOSPITAL - (01006022) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -77.5359,
            39.1821
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "LOUDOUN SURGERY CENTER - (01158164) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -78.1877,
            39.5526
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "21-30",
          "entity": "WAR MEMORIAL HOSPITAL - (00009164) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -82.6757,
            28.3648
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "COLUMBIA REG MED CENTER - (00064191) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -86.3642,
            39.5915
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "SAINT FRANCIS MOORESVILLE - (00415386) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -103.2052,
            44.1415
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "3M BI",
          "cycles": "100+",
          "entity": "PREMIER / RAPID CITY REGIONAL HOSPITAL - (01029148) - VPro MAX (3)",
          "qty": 3
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -80.0831,
            36.1165
          ],
          "type": "Point"
        },
        "properties": {
          "age": 12,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "FORSYTH MEMORIAL HOSPITAL INC DBA NOVANT HEALTH FORSYTH MEDICAL CENTER - (01156565) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -99.9899,
            48.2545
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "HEART AMERICA MEDICAL CENTER - (00003396) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.6439,
            32.5308
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Cyclesure",
          "cycles": "11-20",
          "entity": "NORTHERN LOUISIANA MEDICAL CENTER - (00003626) - SYSTEM 1E (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -118.2084,
            34.0487
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "31-40",
          "entity": "LOS ANGELES COUNTY USC MEDICAL CENTER - (00005721) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -75.6484,
            41.408
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "GEISINGER COMMUNITY MEDICAL CENTER - (00005882) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -74.4317,
            39.3664
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "ATLANTICARE REGIONAL MEDICAL CENTER - (00005955) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -86.1912,
            43.0378
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "11-20",
          "entity": "NORTH OTTAWA COMM HOSPITAL - (01103043) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -90.0915,
            32.3299
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Cyclesure",
          "cycles": "100+",
          "entity": "UNIVERSITY  PHYSICIAN GRANTS FERRY - (01336125) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -124.1332,
            41.7817
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "SUTTER COAST HOSPITAL - (01356142) - VPro 60 (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -93.2912,
            37.2593
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "3M BI",
          "cycles": "41-50",
          "entity": "OZARKS COMMUNITY HOSPITAL - (00003581) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -86.3249,
            37.4603
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "21-30",
          "entity": "TWIN LAKES REG MED CENTER - (00011859) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -98.7455,
            46.92100000000001
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "JAMESTOWN REGIONAL MEDICAL CENTER - (00013888) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -86.1989,
            43.1791
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "Steris BI",
          "cycles": "31-40",
          "entity": "MERCY GEN HEALTH PARTNERS - (00410762) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -74.1157,
            40.3944
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "3M BI",
          "cycles": "31-40",
          "entity": "MEMORIAL SLOAN KETTERING MONMOUTH PROJECT - (01376711) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -100.0241,
            37.7569
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Velocity",
          "cycles": "100+",
          "entity": "WESTERN PLAINS REGIONAL HOSPITAL - (00006613) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -105.156,
            39.6888
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Steris BI",
          "cycles": "41-50",
          "entity": "SAINT ANTHONY HOSPITAL - (00051806) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -83.0669,
            40.0495
          ],
          "type": "Point"
        },
        "properties": {
          "age": 10,
          "bi": "Steris BI",
          "cycles": "21-30",
          "entity": "OHIO ORTHOPEDIC SURGERY - (00351052) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -118.1636,
            34.1355
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "3M BI",
          "cycles": "41-50",
          "entity": "HUNTINGTON HOSPITAL SYSTEM - (01087651) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -85.6272,
            39.0018
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "3M BI",
          "cycles": "81-90",
          "entity": "SAINT VINCENT JENNINGS HOSPITAL - (01242194) - VPro (3)",
          "qty": 3
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -122.3225,
            37.5735
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "MILLS PENINSULA HEALTH CENTER - (00003880) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -94.3985,
            35.3859
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "MERCY HOSPITAL FORT SMITH - (00006663) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -93.0638,
            34.5317
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "3M BI",
          "cycles": "51-60",
          "entity": "CHI SAINT VINCENT HOT SPRINGS - (00006651) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -77.3885,
            38.8776
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "INOVA FAIR OAKS HOSPITAL - (00007000) - VPro MAX (3)",
          "qty": 3
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -94.5386,
            39.0659
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Cyclesure",
          "cycles": "21-30",
          "entity": "KANSAS CITY VA MEDICAL CENTER - (00008077) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -110.8869,
            32.25
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "TUCSON SURGERY CENTER - (00292615) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -121.6202,
            39.1051
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "SUTTER SURGICAL HOSPITAL NORTH VALLEY - (01152487) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -73.4816,
            40.7781
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "NORTH SHORE LIJ PLAINVIEW HOSPITAL - (00006992) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -73.7408,
            43.0708
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "21-30",
          "entity": "SARATOGA HOSPITAL - (00007522) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -67.482,
            44.7215
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "3M BI",
          "cycles": "1-10",
          "entity": "DOWN EAST COMMUNITY HOSPITAL - (00011918) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -70.8052,
            43.0729
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Cyclesure",
          "cycles": "11-20",
          "entity": "PORTSMOUTH REGIONAL AMBULATORY SURGERY - (00078950) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -81.1286,
            36.2017
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "21-30",
          "entity": "WILKES  REGIONAL DIALYSIS  CENTER DSH340064A - (01246230) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -76.6153,
            39.2259
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "Steris BI",
          "cycles": "100+",
          "entity": "MEDSTAR HARBOR HOSPITAL - (00002763) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -76.6153,
            39.2259
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "100+",
          "entity": "MEDSTAR HARBOR HOSPITAL - (00002763) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -84.5403,
            33.9382
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "100+",
          "entity": "KENNESTONE HOSPITAL INC - (00004777) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -84.5403,
            33.9382
          ],
          "type": "Point"
        },
        "properties": {
          "age": 14,
          "bi": "Steris BI",
          "cycles": "100+",
          "entity": "KENNESTONE HOSPITAL INC - (00004777) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -105.0581,
            40.5986
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "UCHEALTH POUDRE VALLEY HOSPITAL - (00006770) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -75.5225,
            40.6018
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "SURGERY CENTER OF ALLENTOWN - (01029630) - SYSTEM 1E (5)",
          "qty": 5
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -75.5225,
            40.6018
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "SURGERY CENTER OF ALLENTOWN - (01029630) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -95.0998,
            29.5716
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Cyclesure",
          "cycles": "61-70",
          "entity": "HOUSTON METHODIST SAINT JOHN HOSPITAL - (01166519) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -84.6913,
            44.67100000000001
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Cyclesure",
          "cycles": "51-60",
          "entity": "MUNSON HEALTHCARE GRAYLING HOSPITAL - (01276744) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -89.5818,
            44.9064
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "SAINT CLAIRES HOSPITAL - (01333903) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.95,
            42.281000000000006
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "41-50",
          "entity": "ADVOCATE SURGERY CENTER LIBERTYVILLE - (01390644) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -94.8327,
            31.3489
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "3M BI",
          "cycles": "11-20",
          "entity": "CHI SAINT LUKES HEALTH MEMORIAL - (00003680) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -112.1011,
            33.5082
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "SURGICAL SPECIALTY HOSPITAL OF ARIZONA - (00012164) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -77.5646,
            37.5133
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "VIRGINIA UROLOGY CENTER - (00064562) - SYSTEM 1E (4)",
          "qty": 4
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -157.8521,
            21.3179
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Cyclesure",
          "cycles": "51-60",
          "entity": "THE QUEEN'S MEDICAL CENTER - (00003947) - ETO (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -82.4873,
            40.3849
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "KNOX COMMUNITY HOSPITAL - (00006235) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -96.5496,
            33.745
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "TEXOMA MEDICAL CENTER - (00073480) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -86.1245,
            39.9712
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "FRANCISCAN SAINT FRANCIS HEALTH CARMEL - (01175513) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -77.5646,
            37.5133
          ],
          "type": "Point"
        },
        "properties": {
          "age": 10,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "STONY POINT SURGERY CENTER - (00005997) - VPro (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -90.1568,
            38.9087
          ],
          "type": "Point"
        },
        "properties": {
          "age": 18,
          "bi": "Cyclesure",
          "cycles": "11-20",
          "entity": "SAINT ANTHONYS HEALTH CENTER - (00006483) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -79.983,
            40.4423
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "71-80",
          "entity": "UPMC MERCY - (00009042) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.3753,
            36.3312
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "BAXTER REGIONAL MEDICAL CENTER - (00009755) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -83.2565,
            31.5929
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "IRWIN COUNTY HOSPITAL - (00012091) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -103.3617,
            44.3692
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "STURGIS COMMUNITY HEALTH - (00012424) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -94.7767,
            32.5547
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Steris BI",
          "cycles": "21-30",
          "entity": "LONGVIEW REGIONAL MEDICAL CENTER - (00079471) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -95.40100000000001,
            29.7041
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "CHI BAYLOR  SAINT LUKE'S MEDICAL CENTER - (01030633) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -95.40100000000001,
            29.7041
          ],
          "type": "Point"
        },
        "properties": {
          "age": 16,
          "bi": "3M BI",
          "cycles": "100+",
          "entity": "HARRIS COUNTY HOSPITAL DISTRICT - (00005586) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -78.9188,
            36.6963
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "31-40",
          "entity": "HALIFAX REGIONAL HOSPITAL - (00006021) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -78.9188,
            36.6963
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "31-40",
          "entity": "HALIFAX REGIONAL HOSPITAL - (00006021) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -95.4435,
            29.8534
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "UNITED MEMORIAL MEDICAL CENTER - (00294616) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -96.7697,
            32.7948
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "100+",
          "entity": "PHYSIATRIC MEDICINE ASSOCIATES - (01145984) - VPro MAX (5)",
          "qty": 5
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -95.40100000000001,
            29.7041
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "100+",
          "entity": "HOUSTON METHODIST HOSPITAL - (00003693) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -121.1905,
            45.5995
          ],
          "type": "Point"
        },
        "properties": {
          "age": 12,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "MID COLUMBIA MEDICAL CENTER - (00010085) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -95.40100000000001,
            29.7041
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "3M BI",
          "cycles": "51-60",
          "entity": "UNIVERSITY OF TEXAS - (00026434) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -118.5188,
            34.2353
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Cyclesure",
          "cycles": "1-10",
          "entity": "NORTHRIDGE HOSPITAL MEDICAL CENTER - (01172936) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -74.2604,
            39.705
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "51-60",
          "entity": "SOUTHERN OCEAN MEDICAL CENTER - (00002453) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -84.089,
            40.7275
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "41-50",
          "entity": "LIMA MEMORIAL HOSPITAL - (00003163) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -84.26799999999999,
            43.6376
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "MIDMICHIGAN MEDICAL CENTER MIDLAND - (00003258) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -88.0364,
            42.9949
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "41-50",
          "entity": "AURORA WEST ALLIS MEMORIAL HOSPITAL - (00003328) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -94.8043,
            39.7893
          ],
          "type": "Point"
        },
        "properties": {
          "age": 12,
          "bi": "Velocity",
          "cycles": "61-70",
          "entity": "HEARTLAND REGIONAL MEDICAL CENTER - (00005923) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -85.7476,
            38.2507
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "UNIVERSITY MEDICAL CENTER INC - (00006204) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.9287,
            41.8001
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "OAKBROOK SURGICAL CENTER - (00053609) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -98.1832,
            26.2792
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "100+",
          "entity": "DOCTORS HOSPITAL AT RENAISSANCE - (00067164) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.8551,
            42.7242
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "11-20",
          "entity": "AURORA AMBULATORY SURGERY CENTER - (00318327) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -89.0976,
            30.3826
          ],
          "type": "Point"
        },
        "properties": {
          "age": 12,
          "bi": "3M BI",
          "cycles": "91-100",
          "entity": "GULFPORT MEMORIAL HOSPITAL - (00005018) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -118.4733,
            34.0268
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "PROVIDENCE SAINT JOHNS HEALTH CENTER - (00005930) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -117.1392,
            32.7973
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "RADY CHILDRENS HOSPITAL SAN DIEGO - (00008501) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.3455,
            34.751
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "LITTLE ROCK SURGERY CENTER - (00016245) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.4236,
            35.0842
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "21-30",
          "entity": "BAPTIST HEALTH MEDICAL CENTER CONWAY - (01365628) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -90.91799999999999,
            30.2473
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "51-60",
          "entity": "OUR LADY OF THE LAKE ASCENSION COMMUNITY HOSPITAL - (01369313) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -93.6003,
            42.0379
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "31-40",
          "entity": "MARY GREELEY MEDICAL CENTER - (00005176) - TSO3 (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -90.1105,
            29.8598
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "3M BI",
          "cycles": "21-30",
          "entity": "WEST JEFFERSON MEDICAL CENTER - (00005376) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -80.8231,
            35.2132
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "3M BI",
          "cycles": "51-60",
          "entity": "PRESBYTERIAN HOSPITAL - (00002840) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -96.0493,
            41.2656
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "Steris BI",
          "cycles": "51-60",
          "entity": "THE UROLOGY CENTER - (00099381) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -84.461,
            35.6015
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "HAZELTON AMBULATORY SURGERY CENTER - (00304732) - SYSTEM 1E (5)",
          "qty": 5
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -121.8444,
            39.7458
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "ENLOE MED CENTER - (00382870) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.1198,
            32.0149
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "HILL REGIONAL HOSPITAL - (00006697) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -74.8845,
            44.9322
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "MASSENA MEMORIAL HOSPITAL - (00007575) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -80.0668,
            42.0763
          ],
          "type": "Point"
        },
        "properties": {
          "age": 12,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "MILLCREEK COMMUNITY HOSPITAL - (00007710) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -96.0493,
            41.2656
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "51-60",
          "entity": "CHILDRENS HOSPITAL AND MEDICAL CENTER - (00009690) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.5638,
            35.5835
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "MERCY HOSPITAL OKLAHOMA CITY - (00009766) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -104.8447,
            39.4895
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "LINCOLN SURGERY CENTER - (01109295) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -98.52600000000001,
            29.4229
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "CHRISTUS SANTA ROSA - (01166526) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -74.3017,
            40.121
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "MERIDIAN HEALTH VILLAGE AT JACKSON - (01392692) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -86.91799999999999,
            37.4785
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Velocity",
          "cycles": "31-40",
          "entity": "OHIO COUNTY HOSPITAL - (00006233) - SYSTEM 1E (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -120.8046,
            38.7195
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "MARSHALL MEDICAL CENTER - (00003925) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -83.7231,
            36.6172
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Cyclesure",
          "cycles": "1-10",
          "entity": "APPALACHIAN REGIONAL HEALTHCARE INC - (00006218) - SYSTEM 1E (3)",
          "qty": 3
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -80.0649,
            42.1827
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "41-50",
          "entity": "SAINT VINCENT HEALTH CENTER - (00007712) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.9991,
            42.3813
          ],
          "type": "Point"
        },
        "properties": {
          "age": 14,
          "bi": "Steris BI",
          "cycles": "21-30",
          "entity": "LINDENHURST SURGERY CENTER - (00070859) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -104.9557,
            39.5814
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "CENTURA HEALTH - (00074080) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -71.1115,
            42.3126
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "LEMUEL SHATTUCK HOSPITAL - (01155056) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -75.5338,
            38.3508
          ],
          "type": "Point"
        },
        "properties": {
          "age": 13,
          "bi": "Velocity",
          "cycles": "71-80",
          "entity": "PENINSULA REGIONAL MEDICAL GROUP - (01406942) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -85.2965,
            35.045
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "91-100",
          "entity": "ERLANGER MEDICAL CENTER - (00002999) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -71.04,
            42.0794
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "STEWARD GOOD SAMARITAN MEDICAL CENTER - (00007334) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -81.4076,
            41.6302
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "LAKEWEST MEDICAL CENTER DBA LAKE HEALTH SYSTEM - (00012572) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -98.4976,
            33.9053
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "TEXOMA OUTPT SURGERY CENTER INC - (00063629) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -79.1717,
            35.4698
          ],
          "type": "Point"
        },
        "properties": {
          "age": 10,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "DLP CENTRAL CAROLINA MEDICAL CENTER LLC - (00009183) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -118.3507,
            33.8106
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "TORRANCE SURGERY CENTER - (00328311) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -117.7754,
            48.2876
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "PROVIDENCE  SAINT JOSEPH'S HOSPITAL OF CHEWELAH - (00011342) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -71.14,
            41.7182
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "100+",
          "entity": "SOUTHCOAST HOSPITALS GROUP - (00010195) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -85.9246,
            34.048
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Cyclesure",
          "cycles": "11-20",
          "entity": "GADSDEN SURGERY CENTER - (01193659) - SYSTEM 1E (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -89.2158,
            37.72
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "51-60",
          "entity": "MEMORIAL HOSPITAL - (00003550) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -94.1762,
            36.1835
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "100+",
          "entity": "NW ARKANSAS HOSPITAL - (00318297) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -77.4378,
            37.5463
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "100+",
          "entity": "CHILDRENS HOSPITAL OF RICHMOND PAVILION - (01378592) - VPro MAX (4)",
          "qty": 4
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -99.3008,
            39.2308
          ],
          "type": "Point"
        },
        "properties": {
          "age": 16,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "ROOKS COUNTY HEALTH CENTER - (00012178) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -88.5934,
            37.0368
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "3M BI",
          "cycles": "71-80",
          "entity": "LOURDES HOSPITAL - (00003047) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -89.4052,
            38.8933
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "HSHS HOLY FAMILY HOSPITAL - (00003538) - SYSTEM 1E (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -94.9695,
            29.7705
          ],
          "type": "Point"
        },
        "properties": {
          "age": 9,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "HOUSTON METHODST SAN JACINTO HOSPITAL - (00003705) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -76.872,
            39.1077
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "3M BI",
          "cycles": "31-40",
          "entity": "LAUREL REGIONAL HOSPITAL - (00004554) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -88.2749,
            42.666000000000004
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "21-30",
          "entity": "AURORA MEMORIAL HOSPITAL OF BURLINGTON - (00039046) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -84.1031,
            34.2037
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Steris BI",
          "cycles": "100+",
          "entity": "NORTHSIDE HOSPITAL FORSYTH - (00058023) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -73.4102,
            40.8676
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "3M BI",
          "cycles": "41-50",
          "entity": "HUNTINGTON HOSPITAL - (00002562) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -117.9503,
            33.7102
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "3M BI",
          "cycles": "100+",
          "entity": "FOUNTAIN VALLEY REGIONAL HOSPITAL - (00007152) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -77.9901,
            39.9443
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "FULTON COUNTY MEDICAL CENTER - (00011952) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -96.7597,
            34.0784
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "ALLIANCE HEALTH MADILL - (00110737) - SYSTEM 1E (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -117.8229,
            33.7364
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "FOOTHILL REGIONAL MEDICAL CENTER - (01343733) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -73.1716,
            43.9919
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "PORTER MEDICAL CENTER - (00007415) - SYSTEM 1E (3)",
          "qty": 3
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.6629,
            33.2073
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "SOUTH ARKANSAS SURGERY CENTER - (01030145) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -80.6687,
            41.0252
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Velocity",
          "cycles": "Unknown",
          "entity": "SAINT ELIZABETH BOARDMAN HEALTH CENTER - (01104287) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -85.2722,
            35.0306
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "MEMORIAL HOSPITAL - (00004125) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -122.4186,
            37.7917
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "SAINT FRANCIS MEMORIAL HOSPITAL - (00006910) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -82.1061,
            37.2967
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "BUCHANAN GENRAL HOSPITAL - (00007003) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -120.0126,
            46.3213
          ],
          "type": "Point"
        },
        "properties": {
          "age": 18,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "SUNNYSIDE COMMUNITY HOSPITAL - (00010135) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -86.774,
            36.2195
          ],
          "type": "Point"
        },
        "properties": {
          "age": 18,
          "bi": "Cyclesure",
          "cycles": "41-50",
          "entity": "SKYLINE MEDICAL CENTER - (00073682) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -81.5831,
            30.2787
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "3M BI",
          "cycles": "21-30",
          "entity": "MEMORIAL HOSPITAL - (00002906) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -86.7655,
            35.9121
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "WILLIAMSON MEDICAL CENTER - (00004972) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -71.5277,
            43.2185
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "CONCORD HOSPITAL - (00007375) - VPro (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -111.9489,
            41.1894
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "61-70",
          "entity": "MCKAY DEE SURGICAL CENTER - (00291720) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -80.3096,
            25.7626
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "CORAL VIEW SURGERY CENTER - (00381828) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -86.7655,
            35.9121
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Velocity",
          "cycles": "Unknown",
          "entity": "WILLIAMSON SURGERY CENTER - (00433428) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.6624,
            41.9719
          ],
          "type": "Point"
        },
        "properties": {
          "age": 13,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "METHODIST HOSPITAL OF CHICAGO - (00003502) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -110.9443,
            32.2406
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "3M BI",
          "cycles": "91-100",
          "entity": "BANNER UNIVERSITY MEDICAL CENTER TUCSON - (00005697) - VPro MAX (3)",
          "qty": 3
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -82.2881,
            27.9056
          ],
          "type": "Point"
        },
        "properties": {
          "age": 10,
          "bi": "Cyclesure",
          "cycles": "71-80",
          "entity": "BRANDON REGIONAL HOSPITAL - (00007029) - SYSTEM 1E (3)",
          "qty": 3
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.7247,
            43.74100000000001
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "SAINT NICHOLAS HOSPITAL - (00007166) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -91.48,
            43.263999999999996
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "3M BI",
          "cycles": "31-40",
          "entity": "VETERANS MEMORIAL HOSPITAL - (00012534) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.1061,
            32.5286
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Cyclesure",
          "cycles": "21-30",
          "entity": "SAINT FRANCIS MEDICAL CENTER - (01349206) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -74.8069,
            41.0695
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "NEWTON MEDICAL CENTER - (00002446) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.6976,
            39.6132
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "HOSPITAL & MEDICAL FOUNDATION OF PARIS INC - (00006482) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -88.1165,
            43.2189
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "AURORA ADVANCED HEALTHCARE - (01085222) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -82.882,
            40.1524
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "3M BI",
          "cycles": "21-30",
          "entity": "POLARIS SURGERY CENTER - (01095052) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -80.4463,
            36.0065
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "WAKE FOREST BAPTIST MEDICAL CENTER - (01260517) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.5261,
            35.4259
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "HOSPITAL FOR SPECIAL SURGERY - (01316121) - VPro MAX (3)",
          "qty": 3
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -81.8667,
            27.1861
          ],
          "type": "Point"
        },
        "properties": {
          "age": 15,
          "bi": "Cyclesure",
          "cycles": "1-10",
          "entity": "DESOTO COUNTY HOSPITAL DISTRICT - (00004938) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -93.6867,
            46.0902
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "MILLE LACS HEALTH SYSTEM - (00012101) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -105.09,
            40.4262
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "UCHEALTH MEDICAL CENTER OF THE ROCKIES - (00504290) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -116.536,
            43.5937
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "TREASURE VALLEY SURGERY CENTER - (01414206) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -117.4352,
            47.7374
          ],
          "type": "Point"
        },
        "properties": {
          "age": 18,
          "bi": "3M BI",
          "cycles": "11-20",
          "entity": "PROVIDENCE HEALTH AND SERVICES - (00004002) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -95.6004,
            39.7914
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Cyclesure",
          "cycles": "11-20",
          "entity": "HIAWATHA COMMUNITY HOSPITAL - (00011698) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -80.8584,
            34.9773
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Cyclesure",
          "cycles": "21-30",
          "entity": "THE SURGERY CENTER AT EDGEWATER - (01206019) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -82.1562,
            34.1758
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "SELF REGIONAL HEALTHCARE - (00002871) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -98.0201,
            40.8528
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "MEMORIAL HOSPITAL - (00003603) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.0448,
            34.1897
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "JEFFERSON REGIONAL MEDICAL CENTER - (00003628) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.5904,
            41.5087
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "Cyclesure",
          "cycles": "100+",
          "entity": "SAINT JAMES HOSPITAL AND HEALTH CENTER - (00006451) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.0484,
            39.8223
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "WASHINGTON COUNTY HOSPITAL - (00012528) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -105.0962,
            39.774
          ],
          "type": "Point"
        },
        "properties": {
          "age": 15,
          "bi": "Cyclesure",
          "cycles": "21-30",
          "entity": "LUTHERAN CAMPUS ASC LLC - (01001161) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -105.0962,
            39.774
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Cyclesure",
          "cycles": "21-30",
          "entity": "LUTHERAN CAMPUS ASC LLC - (01001161) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -117.1783,
            33.569
          ],
          "type": "Point"
        },
        "properties": {
          "age": 11,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "LOMA LINDA UNIVERSITY MEDICAL CENTER MURRIETA - (01160427) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -75.2034,
            40.0723
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "11-20",
          "entity": "CHESTNUT HILL HOSPITAL - (00002700) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -81.4828,
            41.5592
          ],
          "type": "Point"
        },
        "properties": {
          "age": 12,
          "bi": "Velocity",
          "cycles": "Unknown",
          "entity": "UNIVERSITY HOSPITALS RICHMOND MEDICAL CENTER - (00003108) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.5746,
            35.5184
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "INTEGRIS BAPTIST MEDICAL CENTER - (00003638) - VPro MAX (3)",
          "qty": 3
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -77.0749,
            39.1526
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "31-40",
          "entity": "MEDSTAR MONTGOMERY MEDICAL CENTER - (00002745) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -90.1708,
            32.3386
          ],
          "type": "Point"
        },
        "properties": {
          "age": 12,
          "bi": "3M BI",
          "cycles": "100+",
          "entity": "SAINT DOMINIC JACKSON MEMORIAL HOSPITAL - (00004126) - ETO (3)",
          "qty": 3
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -91.0193,
            38.5459
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "21-30",
          "entity": "MERCY HOSPITAL WASHINGTON - (00006514) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -71.1956,
            42.5048
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "3M BI",
          "cycles": "100+",
          "entity": "LAHEY HOSPITAL AND MEDICAL CENTER BURLINGTON - (00007232) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -82.4633,
            31.5465
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "BACON COUNTY HOSPITAL SYSTEM - (00014126) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -122.5372,
            45.4446
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "Other BI",
          "cycles": "61-70",
          "entity": "EAST PORTLAND SURGICAL CENTER - (00372719) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -90.1005,
            29.9289
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "Steris BI",
          "cycles": "51-60",
          "entity": "TOURO INFIRMARY - (01003390) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -80.4993,
            41.2316
          ],
          "type": "Point"
        },
        "properties": {
          "age": 13,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "SHARON REGIONAL MEDICAL CENTER - (00002617) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -116.7,
            43.6627
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "3M BI",
          "cycles": "31-40",
          "entity": "WEST VALLEY MEDICAL CENTER - (00502990) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -104.9014,
            39.3643
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "3M BI",
          "cycles": "21-30",
          "entity": "CASTLE ROCK ADVENTIST HEALTH CAMPUS - (01175015) - VPro (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -73.8712,
            40.8737
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "MONTEFIORE MEDICAL CENTER - (00002514) - ETO (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -91.9576,
            41.0039
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "JEFFERSON COUNTY HOSPITAL - (00005197) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -72.6262,
            42.202
          ],
          "type": "Point"
        },
        "properties": {
          "age": 11,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "HOLYOKE MEDICAL CENTER - (00007174) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.2741,
            34.7363
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "ARKANSAS CHILDRENS HOSPITAL - (00009744) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.2741,
            34.7363
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "ARKANSAS CHILDRENS HOSPITAL - (00009744) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -95.14399999999999,
            29.5564
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "Steris BI",
          "cycles": "100+",
          "entity": "CLEAR LAKE REGIONAL MEDICAL CENTER - (00007088) - VPro (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.6439,
            41.2942
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "MAHASKA COUNTY HOSPITAL - (00009517) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -91.13,
            30.4485
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "BATON ROUGE GENERAL MEDICAL CENTER - (00060014) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -121.6202,
            39.1051
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "41-50",
          "entity": "RIDEOUT MEMORIAL HOSPITAL - (00146758) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -106.4932,
            31.7763
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "EL PASO SPECIALITY HOSPITAL - (00231646) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -73.4532,
            41.3917
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "3M BI",
          "cycles": "100+",
          "entity": "WESTERN CONNECTICUT HEALTHCARE, INC. - (01165356) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -79.7623,
            40.429
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "3M BI",
          "cycles": "61-70",
          "entity": "AHN MONROEVILLE SURGERY CENTER - (01287279) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -80.6476,
            40.1027
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "Steris BI",
          "cycles": "41-50",
          "entity": "WHEELING HOSPITAL - (00002815) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -80.6476,
            40.1027
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "41-50",
          "entity": "WHEELING HOSPITAL - (00002815) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -91.5906,
            41.6937
          ],
          "type": "Point"
        },
        "properties": {
          "age": 13,
          "bi": "Cyclesure",
          "cycles": "100+",
          "entity": "UNIVERISTY OF IOWA  HOSPITAL AND CLINICS - (01224599) - ETO (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -91.5906,
            41.6937
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Cyclesure",
          "cycles": "100+",
          "entity": "UNIVERISTY OF IOWA  HOSPITAL AND CLINICS - (01224599) - VPro MAX (4)",
          "qty": 4
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -93.0902,
            44.9512
          ],
          "type": "Point"
        },
        "properties": {
          "age": 10,
          "bi": "Cyclesure",
          "cycles": "100+",
          "entity": "REGIONS HOSPITAL - (00005236) - ETO (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.5174,
            25.9337
          ],
          "type": "Point"
        },
        "properties": {
          "age": 9,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "VALLEY BAPTIST MEDICAL CENTER BROWNSVILLE - (00006731) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -121.8089,
            37.9939
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "SUTTER DELTA MEDICAL CENTER - (00006911) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -94.4408,
            41.3133
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "ADAIR COUNTY MEMORIAL HOSPITAL - (00011632) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -109.23,
            41.606
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "MEMORIAL HOSPITAL OF SWEETWATER COUNTY - (00009900) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -81.0288,
            32.8349
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "HAMPTON REGIONAL MEDICAL CENTER - (00012500) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -102.405,
            34.836999999999996
          ],
          "type": "Point"
        },
        "properties": {
          "age": 13,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "HEREFORD REGIONAL MED CENTER - (00014160) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.4106,
            48.4122
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "UNITY MEDICAL CENTER - (00038868) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -90.1708,
            32.3386
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "UNIVERSITY OF MISSISSIPPI MEDICAL CENTER - (00067926) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -104.8863,
            39.5517
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "SKY RIDGE MEDICAL CENTER - (00079182) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -80.6668,
            32.9052
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "COLLETON MEDICAL CENTER - (00082074) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -117.2606,
            34.1426
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Steris BI",
          "cycles": "31-40",
          "entity": "SAINT BERNARDINE MEDICAL CENTER - (00500001) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.2741,
            34.7363
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "61-70",
          "entity": "ARKANSAS CHILDRENS HOSPITAL - (01007884) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -76.3107,
            40.0766
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "NORTH POINTE SURGERY CENTER - (01077754) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -82.3737,
            28.5658
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Cyclesure",
          "cycles": "11-20",
          "entity": "HERNANDO HMA LLC - (01196197) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -90.5648,
            41.4913
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "TRINITY ROCK ISLAND - (00005278) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -111.8627,
            40.76
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "41-50",
          "entity": "SALT LAKE REGIONAL MEDICAL CENTER - (00006830) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -90.0123,
            35.0303
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "METHODIST SOUTH HOSPITAL - (00017760) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.727,
            33.7982
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "NOCONA GENERAL HOSPITAL - (00018580) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -110.7393,
            43.4528
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "3M BI",
          "cycles": "91-100",
          "entity": "SAINT JOHNS HOSPITAL - (00006819) - SYSTEM 1E (3)",
          "qty": 3
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -111.2502,
            47.495
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "11-20",
          "entity": "CMSC LLC - (00070177) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -111.2502,
            47.495
          ],
          "type": "Point"
        },
        "properties": {
          "age": 11,
          "bi": "Steris BI",
          "cycles": "11-20",
          "entity": "CMSC LLC - (00070177) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -117.3757,
            33.9455
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "71-80",
          "entity": "RIVERSIDE MEDICAL CLINIC - (00075625) - VPro 60 (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -88.0086,
            42.9017
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "31-40",
          "entity": "WHEATON FRANCIS HEALTHCARE FRANKLIN - (01083786) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -90.4697,
            30.4911
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "11-20",
          "entity": "CYPRESS POINTE SURGICAL HOSPITAL - (01161812) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -88.0414,
            43.0493
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "100+",
          "entity": "FROEDTERT MEMORIAL LUTHERAN HOSPITAL - (00003327) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -73.9813,
            40.7375
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "VETERANS ADMINISTRATION NEW YORK HARBOR HEALTHCARE SYSTEM - (00007746) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -105.156,
            39.6888
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Steris BI",
          "cycles": "41-50",
          "entity": "ORTHO COLORADO LLC - (01182715) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -81.6619,
            26.5936
          ],
          "type": "Point"
        },
        "properties": {
          "age": 11,
          "bi": "Cyclesure",
          "cycles": "11-20",
          "entity": "LEHIGH REGIONAL MEDICAL CENTER - (00002963) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -77.9221,
            35.3664
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "51-60",
          "entity": "WAYNE MEMORIAL HOSPITAL - (00004725) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -95.7095,
            39.0583
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Cyclesure",
          "cycles": "41-50",
          "entity": "SAINT FRANCIS HEALTH CENTER SISTERS OF CHARITY OF LEAVENWORTH - (00006592) - SYSTEM 1E (4)",
          "qty": 4
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -74.3202,
            40.7896
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "71-80",
          "entity": "SAINT BARNABAS MEDICAL CENTER - (00007163) - VPro MAX (4)",
          "qty": 4
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -71.4793,
            44.9078
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "UPPER CONNECTICUT VALLEY HOSPITAL - (00011374) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -78.4924,
            38.0339
          ],
          "type": "Point"
        },
        "properties": {
          "age": 12,
          "bi": "Velocity",
          "cycles": "Unknown",
          "entity": "UNIVERSITY OF VIRGINIA HOSPITAL - (01096923) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -90.91799999999999,
            30.2473
          ],
          "type": "Point"
        },
        "properties": {
          "age": 9,
          "bi": "Steris BI",
          "cycles": "51-60",
          "entity": "OUR LADY OF THE LAKE ASCENSION COMMUNITY HOSPITAL - (01369313) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -78.7527,
            41.126000000000005
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "21-30",
          "entity": "PENN HIGHLANDS DUBOIS - (00002605) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -78.7527,
            41.126000000000005
          ],
          "type": "Point"
        },
        "properties": {
          "age": 10,
          "bi": "3M BI",
          "cycles": "21-30",
          "entity": "PENN HIGHLANDS DUBOIS - (00002605) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -120.08200000000001,
            36.9403
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "MADERA COMMUNITY HOSPITAL - (00006908) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.5017,
            35.4794
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "31-40",
          "entity": "OKLAHOMA CITY VA MEDICAL CENTER - (00008114) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.9991,
            41.7049
          ],
          "type": "Point"
        },
        "properties": {
          "age": 10,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "BOONE COUNTY HEALTH CENTER - (00012795) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -89.8053,
            35.0883
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "METHODIST LEBONHEUR GERMANTOWN HOSPITAL - (00059477) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -94.7336,
            38.9536
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "MINIMALLY INVASIVE - (00415189) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -86.7077,
            41.5994
          ],
          "type": "Point"
        },
        "properties": {
          "age": 9,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "LAPORTE MEDICAL GROUP SURGICAL CENTER - (01116838) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -86.7077,
            41.5994
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "41-50",
          "entity": "LA PORTE HOSPITAL COMPANY LLC - (00003175) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -79.2542,
            34.2044
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "QHG OF SC DBA MARION REGIONAL HOSPITAL - (00004769) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -93.6212,
            41.5887
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Velocity",
          "cycles": "31-40",
          "entity": "UNITYPOINT HEALTH DES MOINES - (00005906) - SYSTEM 1E (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -83.126,
            39.9648
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "DOCTORS HOSPITAL - (00038832) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -93.3193,
            45.1643
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "71-80",
          "entity": "MERCY HOSPITAL - (00073623) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -93.2054,
            31.0466
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "3M BI",
          "cycles": "1-10",
          "entity": "BAYNE JONES ARMY COM HOSPITAL - (00161085) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -84.2091,
            30.8768
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "11-20",
          "entity": "GRADY GENERAL HOSPITAL - (00013575) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -77.5646,
            37.5133
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "CJW MEDICAL CENTER JOHNSTON WILLIS CAMPUS - (00135136) - VPro (3)",
          "qty": 3
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -104.3748,
            33.6397
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "21-30",
          "entity": "LOVELACE REGIONAL HOSPITAL-ROSWELL - (01080005) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -76.8788,
            39.2141
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "HOWARD COUNTY GENERAL HOSPITAL - (01196835) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -76.8788,
            39.2141
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "HOWARD COUNTY GENERAL HOSPITAL - (01196835) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.6742,
            41.5134
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "FRANCISCAN SAINT JAMES HEALTH OLYMPIA FIELDS - (00003448) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -95.1457,
            43.1451
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "Steris BI",
          "cycles": "31-40",
          "entity": "SPENCER MUNICIPAL HOSPITAL - (00009508) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -91.2851,
            42.1078
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "TSO3 BI",
          "cycles": "1-10",
          "entity": "ST. LUKE'S JONES REGIONAL MEDICAL CENTER - (00012777) - TSO3 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.3648,
            31.0917
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "DEPARTMENT OF VETERANS AFFAIRS - (01296841) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -81.9609,
            28.072
          ],
          "type": "Point"
        },
        "properties": {
          "age": 10,
          "bi": "Steris BI",
          "cycles": "100+",
          "entity": "LAKELAND REGIONAL MEDICAL CENTER - (00002959) - SYSTEM 1E (3)",
          "qty": 3
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -75.5225,
            40.6018
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "51-60",
          "entity": "SAINT LUKES HOSPITAL ALLENTOWN - (00004058) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -104.9717,
            39.7327
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "61-70",
          "entity": "SAINT JOSEPH HOSPITAL - (00006764) - VPro MAX (3)",
          "qty": 3
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.2167,
            30.5241
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "61-70",
          "entity": "WEST FLORIDA HOSPITAL - (00079309) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.2167,
            30.5241
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "61-70",
          "entity": "WEST FLORIDA HOSPITAL - (00079309) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -104.76700000000001,
            38.9497
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "61-70",
          "entity": "UCHEALTH MEMORIAL HOSPITAL NORTH - (01030625) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -89.1041,
            38.9439
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "FAYETTE COUNTY HOSPITAL - (00009620) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -84.3761,
            33.8842
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "21-30",
          "entity": "MERIDIAN MARK AMB SURGERY COURT - (01029971) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -86.0787,
            38.6071
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "SAINT VINCENT SALEM HOSPITAL INC - (01148316) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.7271,
            44.9842
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "11-20",
          "entity": "HUDSON HOSPITAL - (00003341) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -118.0852,
            45.3304
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "GRANDE RONDE HOSPITAL - (00003978) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.1524,
            34.7658
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "3M BI",
          "cycles": "51-60",
          "entity": "BAPTIST HEALTH MEDICAL CENTER - (00030469) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -106.5749,
            35.0726
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "91-100",
          "entity": "VA MEDICAL CENTER - (00079707) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -149.3959,
            61.5923
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "SURGERY CENTER OF WASILLA - (01351198) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -95.5803,
            29.9781
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "11-20",
          "entity": "FIRST TEXAS HOSPITAL CYFAIR - (01386504) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -96.0493,
            41.2656
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "100+",
          "entity": "NEBRASKA METHODIST HOSPITAL - (00003597) - VPro MAX (4)",
          "qty": 4
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -102.9003,
            31.5813
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "WARD MEMORIAL HOSPITAL - (00006743) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -95.7504,
            48.7048
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "LIFECARE MEDICAL CENTER - (00012261) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.9084,
            43.0712
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "ORTHOPAEDIC HOSPITAL OF WISCONSIN - (00321962) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -106.6652,
            35.1868
          ],
          "type": "Point"
        },
        "properties": {
          "age": 9,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "LOVELACE WESTSIDE MED CENTER - (01084630) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -82.5593,
            40.7627
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "AVITA ONTARIO HOSPITAL - (01395535) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -85.0198,
            41.6563
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "3M BI",
          "cycles": "11-20",
          "entity": "CAMERON MEMORIAL COMMUNITY HOSPITAL - (00012776) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -111.8133,
            40.6772
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Velocity",
          "cycles": "1-10",
          "entity": "SAINT MARKS OUTPATIENT SURGERY CENTER - (00055765) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -75.9309,
            42.1151
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "LOURDES HOSPITAL - (01081793) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -96.0371,
            41.1523
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "3M BI",
          "cycles": "21-30",
          "entity": "ALEGENT HEALTH MIDLANDS HOSPITAL - (01313936) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.7396,
            30.2896
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "3M BI",
          "cycles": "100+",
          "entity": "SETON MEDICAL CENTER - (01325282) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -95.2922,
            32.3254
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Cyclesure",
          "cycles": "71-80",
          "entity": "EAST TEXAS MEDICAL CENTER REGIONAL HEALTHCARE SYSTEM - (00003678) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -122.0971,
            37.6332
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "SAINT ROSE HOSPITAL - (00003883) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -103.2052,
            44.1415
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Velocity",
          "cycles": "31-40",
          "entity": "BLACK HILLS SURGERY HOSPITAL - (00066716) - SYSTEM 1E (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -123.0153,
            44.0611
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "OREGON SURGI CENTER - (00411071) - SYSTEM 1E (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.7396,
            30.2896
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "SETON SOUTHWEST HOSPITAL - (01369640) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -112.0474,
            33.465
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "SURGICENTER - (00016748) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -118.2084,
            34.0487
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "KECK HOSPITAL OF USC - (00052184) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -117.1128,
            33.0895
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "PALOMAR MEDICAL CENTER - (01185915) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -71.1566,
            42.3478
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "SAINT ELIZABETHS MED CENTER OF BOSTON - (01321199) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -84.0446,
            41.9005
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Steris BI",
          "cycles": "41-50",
          "entity": "EMMA L BIXBY MEDICAL CENTER - (00003280) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -85.8046,
            35.9299
          ],
          "type": "Point"
        },
        "properties": {
          "age": 9,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "SAINT THOMAS DEKALB HOSPITAL - (00006152) - SYSTEM 1E (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.3049,
            38.9382
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "HARRY S TRUMAN MEMORIAL VETERANS ADMINISTRATION  HOSPITAL - (00008079) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -114.3509,
            48.403999999999996
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "3M BI",
          "cycles": "41-50",
          "entity": "NORTH VALLEY HOSPITAL - (00009594) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -88.2945,
            30.6817
          ],
          "type": "Point"
        },
        "properties": {
          "age": 13,
          "bi": "3M BI",
          "cycles": "100+",
          "entity": "PROVIDENCE HOSPITAL - (01181805) - VPro MAX (3)",
          "qty": 3
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -96.8765,
            32.659
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "3M BI",
          "cycles": "21-30",
          "entity": "METHODIST CHARLTON MEDICAL CENTER - (00003671) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -96.8765,
            32.659
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "3M BI",
          "cycles": "21-30",
          "entity": "METHODIST CHARLTON MEDICAL CENTER - (00003671) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -118.1876,
            33.8045
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "3M BI",
          "cycles": "100+",
          "entity": "LONG BEACH MEMORIAL MEDICAL CENTER - (00003815) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -84.5719,
            43.0059
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Steris BI",
          "cycles": "51-60",
          "entity": "SPARROW CLINTON HOSPITAL - (00006319) - SYSTEM 1E (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -115.5344,
            40.9056
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "3M BI",
          "cycles": "51-60",
          "entity": "NORTHEASTERN NEVADA REGIONAL HOSPITAL - (00006847) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -78.4851,
            38.0401
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Velocity",
          "cycles": "Unknown",
          "entity": "UNIVERSITY OF VIRGINIA MEDICAL CENTER UNIVERSITY HOSPITAL - (00013929) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -81.9168,
            34.9803
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "71-80",
          "entity": "SPARTANBURG REGIONAL HLTHCARE - (00065568) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -94.8002,
            29.3305
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "3M BI",
          "cycles": "41-50",
          "entity": "UNIVERSITY OF TX - (01020278) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -83.48100000000001,
            36.1163
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "11-20",
          "entity": "JEFFERSON COUNTY HMA LLC - (01196490) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -84.3944,
            40.544000000000004
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "3M BI",
          "cycles": "11-20",
          "entity": "JOINT TOWNSHIP DISTRICT MEMORIAL HOSPITAL - (00005108) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -98.3911,
            40.5877
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Velocity",
          "cycles": "21-30",
          "entity": "MARY LANNING MEMORIAL HOSPITAL - (00003604) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -83.9862,
            37.6858
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "MARCUM AND WALLACE MEMORIAL HOSPITAL INC - (00006210) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -122.6309,
            48.5004
          ],
          "type": "Point"
        },
        "properties": {
          "age": 10,
          "bi": "Steris BI",
          "cycles": "41-50",
          "entity": "ISLAND HOSPITAL - (00010415) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -122.6309,
            48.5004
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "41-50",
          "entity": "ISLAND HOSPITAL - (00010415) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -81.7291,
            30.1637
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "ORANGE PARK SURGERY CENTER - (00056192) - SYSTEM 1E (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -96.8388,
            32.8252
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "PARKLAND HEALTH & HOSPITAL SYSTEM - (01366247) - VPro MAX (5)",
          "qty": 5
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -117.9729,
            33.8186
          ],
          "type": "Point"
        },
        "properties": {
          "age": 10,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "WEST ANAHEIM MEDICAL CENTER - (00007153) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.1806,
            37.2076
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "OWENSBORO HEALTH MUHLENBERG COMMUNITY HOSPITAL - (00009410) - SYSTEM 1E (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -83.4232,
            42.7239
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "11-20",
          "entity": "CLARKSTON SURGERY CENTER - (01108033) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -86.1885,
            43.2329
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "Steris BI",
          "cycles": "81-90",
          "entity": "HACKLEY HOSPITAL - (01207615) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -80.3592,
            27.4493
          ],
          "type": "Point"
        },
        "properties": {
          "age": 9,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "TREASURE COAST SURGICAL CENTER INC - (01217037) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -96.8388,
            32.8252
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "3M BI",
          "cycles": "71-80",
          "entity": "WILLIAM P CLEMENTS JUNIOR UNIVERSITY HOSPITAL - (00003669) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -78.8444,
            39.5992
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "51-60",
          "entity": "WESTERN MARYLAND HEALTH SYSTEM - (00004086) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.2805,
            37.7667
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "31-40",
          "entity": "WESLEY WOODLAWN HOSPITAL AND ER - (00328898) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -85.829,
            33.2474
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "CLAY COUNTY HOSPITAL HOMECARE LLC - (00520632) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -90.49799999999999,
            41.4906
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "Steris BI",
          "cycles": "31-40",
          "entity": "UNITY POINT HEALTH - (00391917) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -75.27600000000001,
            40
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "100+",
          "entity": "LANKENAU HOSPITAL - (00002704) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -89.5898,
            40.7025
          ],
          "type": "Point"
        },
        "properties": {
          "age": 10,
          "bi": "3M BI",
          "cycles": "91-100",
          "entity": "OSF SAINT FRANCIS MEDICAL CENTER - (00006472) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.6664,
            38.138000000000005
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "LAKE REGIONAL HEALTH SYSTEM - (00006583) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -118.3542,
            33.8397
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "3M BI",
          "cycles": "61-70",
          "entity": "PROVIDENCE LITTLE COMPANY OF MARY MEDICAL CENTER TORRANCE - (00046308) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -102.3523,
            31.8579
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "ODESSA REGIONAL MEDICAL CENTER - (00071735) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -88.0946,
            42.9822
          ],
          "type": "Point"
        },
        "properties": {
          "age": 10,
          "bi": "3M BI",
          "cycles": "71-80",
          "entity": "FROEDTERT MEM LUTHERAN  HOSPITAL - (01279187) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -89.3841,
            38.3352
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "WASHINGTON COUNTY HOSPITAL - (00005286) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -83.5936,
            38.9621
          ],
          "type": "Point"
        },
        "properties": {
          "age": 9,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "ADAMS COUNTY REGIONAL MEDICAL CENTER - (00010400) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -81.357,
            28.514
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "MD ANDERSON CANCER CENTER ORLANDO - (00045317) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -75.4955,
            39.1564
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "DOVER SURGICENTER - (01007403) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -88.0788,
            44.5522
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "SAINT MARYS HOSPITAL - (00003346) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -89.5459,
            37.3169
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Steris BI",
          "cycles": "91-100",
          "entity": "SOUTHEAST HOSPITAL - (00003559) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.7078,
            30.3764
          ],
          "type": "Point"
        },
        "properties": {
          "age": 9,
          "bi": "Steris BI",
          "cycles": "51-60",
          "entity": "NORTH AUSTIN SURGERY CENTER - (00403901) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -78.4596,
            38.6548
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "PAGE MEMORIAL HOSPITAL - (00005996) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -95.2086,
            39.0289
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "31-40",
          "entity": "LAWRENCE MEMORIAL HOSPITAL - (00006589) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -95.5798,
            30.6448
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "21-30",
          "entity": "HUNTSVILLE MEMORIAL HOSPITAL - (00006710) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -151.2356,
            59.5374
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "SOUTH PENINSULA HOSPITAL - (00006948) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -95.40100000000001,
            29.7041
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "Steris BI",
          "cycles": "11-20",
          "entity": "SHRINERS HOSPITAL - (00013122) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -95.1835,
            30.0569
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "KINGWOOD MED CENTER - (00052320) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -93.7727,
            32.4945
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "WILLIS-KNIGHTON MEDICAL CENTER - (00156396) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -93.7727,
            32.4945
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "WILLIS-KNIGHTON MEDICAL CENTER - (00156396) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -117.9063,
            33.8994
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "3M BI",
          "cycles": "81-90",
          "entity": "SAINT JUDE MEDICAL CENTER - (00308401) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -95.40100000000001,
            29.7041
          ],
          "type": "Point"
        },
        "properties": {
          "age": 12,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "TIRR MEMORIAL HERMANN HOSPITAL - (01114773) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -72.2134,
            41.7149
          ],
          "type": "Point"
        },
        "properties": {
          "age": 18,
          "bi": "3M BI",
          "cycles": "1-10",
          "entity": "WINDHAM COMMUNITY MEMORIAL HOSPITAL - (01120278) - ETO (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.6223,
            41.8971
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "ANN AND ROBERT H LURIE CHILDRENS HOSPITAL OF CHICAGO - (00003478) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.11399999999999,
            43.1815
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "PIONEER MEMORIAL HOSPITAL & HEALTH SERVICES - (00012504) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -96.7697,
            32.7948
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "3M BI",
          "cycles": "1-10",
          "entity": "BAYLOR SURGICARE - (00129094) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -79.4103,
            40.2926
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Velocity",
          "cycles": "41-50",
          "entity": "LATROBE AREA HOSPITAL - (00002602) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -100.1676,
            40.2808
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "TRI VALLEY HEALTH SYSTEM - (00009707) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -83.1616,
            42.2084
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "HENRY FORD WYANDOTTE HOSPITAL - (00005153) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -106.2676,
            35.8663
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "LOS ALAMOS MEDICAL CENTER - (00009947) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -98.8933,
            47.4573
          ],
          "type": "Point"
        },
        "properties": {
          "age": 10,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "CARRINGTON HEALTH CENTER - (00014397) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.8705,
            42.556000000000004
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "AURORA MEDICAL CENTER KENOSHA - (00061283) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -79.0372,
            35.9203
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "UNC AMBULATORY CARE CENTER - (00165967) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -75.2485,
            40.9877
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "SAINT LUKES MONROE CAMPUS - (01377600) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -117.6375,
            33.4615
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "SADDLEBACK MEMORIAL MEDICAL CENTER - (00007147) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -124.4037,
            43.0968
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "SOUTHERN COOS HOSPITAL - (00011182) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.4056,
            32.6711
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Steris BI",
          "cycles": "100+",
          "entity": "TEXAS HEALTH HARRIS METHODIST HOSPITAL SOUTHWEST - (00033777) - VPro MAX (3)",
          "qty": 3
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -106.6818,
            35.2493
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "PRESBYTERIAN RUST MEDICAL CENTER - (01131306) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -121.1529,
            38.6709
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "VIBRA HOSPITAL OF SACRAMENTO LLC - (01277205) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -73.6375,
            40.6362
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "SOUTH NASSAU COMMUNITY HOSPITAL - (00002558) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -122.6727,
            38.4386
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "71-80",
          "entity": "SANTA ROSA MEMORIAL HOSPITAL - (00003920) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -122.1403,
            48.3643
          ],
          "type": "Point"
        },
        "properties": {
          "age": 11,
          "bi": "3M BI",
          "cycles": "71-80",
          "entity": "SKAGIT VALLEY HOSPITAL - (00005872) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.3995,
            36.076
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "21-30",
          "entity": "HORIZON MEDICAL CENTER - (00080360) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -78.6317,
            35.848
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "DUKE RALEIGH HOSPITAL - (00006030) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -80.2696,
            26.212
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "21-30",
          "entity": "UNIVERSITY HOSPITAL AND MEDICAL CENTER - (00006117) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -73.7552,
            42.247
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Steris BI",
          "cycles": "21-30",
          "entity": "COLUMBIA MEMORIAL HOSPITAL - (00007519) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -90.0046,
            35.1334
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "51-60",
          "entity": "METHODIST HEALTHCARE - (00043523) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -81.357,
            28.514
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "ORLANDO REG HEALTH SYS - (00079314) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -81.357,
            28.514
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "WINNIE PALMER HOSPITAL FOR WOMEN AND BABIES - (01373127) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -90.6965,
            35.833
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "3M BI",
          "cycles": "41-50",
          "entity": "NEA BAPTIST MEMORIAL HOSPITAL - (00005488) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -102.3523,
            31.8579
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "MEDICAL CENTER HOSPITAL - (00005651) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.7516,
            41.7143
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "100+",
          "entity": "ADVOCATE CHRIST MEDICAL CENTER - (00005917) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -68.4121,
            44.5548
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "MAINE COAST MEMORIAL HOSPITAL - (00010175) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -81.7194,
            33.553000000000004
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "AMBULATORY SURGICAL CENTER OF AIKEN - (00429967) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -82.743,
            28.1385
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "Velocity",
          "cycles": "31-40",
          "entity": "FLORIDA HOSPITAL NORTH PINELLAS - (01383099) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -96.7341,
            43.523999999999994
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "91-100",
          "entity": "AVERA MCKENNAN HOSPITAL AND UNIVERSITY HEALTH CENTER - (00003390) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -96.7341,
            43.523999999999994
          ],
          "type": "Point"
        },
        "properties": {
          "age": 18,
          "bi": "Steris BI",
          "cycles": "91-100",
          "entity": "AVERA MCKENNAN HOSPITAL AND UNIVERSITY HEALTH CENTER - (00003390) - ETO (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -95.7178,
            39.0405
          ],
          "type": "Point"
        },
        "properties": {
          "age": 13,
          "bi": "Cyclesure",
          "cycles": "61-70",
          "entity": "STORMONT-VAIL HEALTHCARE - (00006593) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -84.2032,
            40.0374
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "3M BI",
          "cycles": "11-20",
          "entity": "UPPER VALLEY MEDICAL CENTER - (00070017) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -111.8892,
            33.6968
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "41-50",
          "entity": "HONORHEALTH SCOTTSDALE THOMPSON PEAK MEDICAL CENTER - (01076982) - VPro (3)",
          "qty": 3
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -77.204,
            38.6929
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Steris BI",
          "cycles": "31-40",
          "entity": "INOVA HEALTHPLEX LORTON - (01250079) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -75.319,
            40.361999999999995
          ],
          "type": "Point"
        },
        "properties": {
          "age": 13,
          "bi": "Velocity",
          "cycles": "Unknown",
          "entity": "GRAND VIEW HOSPITAL - (00002668) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -100.48,
            31.4194
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "Cyclesure",
          "cycles": "31-40",
          "entity": "SAN ANGELO COMMUNITY MEDICAL CENTER - (00007074) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.3655,
            44.9657
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "BALDWIN AREA MEDICAL CENTER INC - (00009530) - SYSTEM 1E (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -95.354,
            35.9549
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "WAGONER COMMUNITY HOSPITAL - (00012510) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -84.2286,
            44.278999999999996
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "WEST BRANCH REGIONAL MEDICAL CENTER - (00275151) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -121.6202,
            39.1051
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "SUTTER MATERNITY & SURGERY CENTER - (00406099) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -74.8536,
            40.1159
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "11-20",
          "entity": "PRIME HEALTHCARE SERVICES LOWER BUCKS LLC - (01148310) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -73.6683,
            42.7287
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Cyclesure",
          "cycles": "11-20",
          "entity": "SAMARITAN HOSPITAL - (01371829) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -83.9336,
            35.9556
          ],
          "type": "Point"
        },
        "properties": {
          "age": 18,
          "bi": "Velocity",
          "cycles": "100+",
          "entity": "FORT SANDERS REGIONAL MEDICAL CENTER - (00003015) - ETO (3)",
          "qty": 3
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.5366,
            45.123000000000005
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "WESTFIELDS HOSPITAL - (00003342) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -153.3751,
            57.6036
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "PROVIDENCE KODIAK ISLAND MEDICAL CENTER - (00014208) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -94.6169,
            38.9667
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "Cyclesure",
          "cycles": "91-100",
          "entity": "CHILDRENS MERCY HOSPITAL OF KANSAS - (00270892) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -73.6815,
            41.4432
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "PUTNAM HOSPITAL CENTER - (00011317) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -105.9661,
            31.8045
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "THE HOSPITALS OF PROVIDENCE SIERRA EAST CAMPUS - (01079611) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -86.7852,
            36.1866
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "MONROE CARELL JUNIOR CHILDRENS HOSPITAL AT VANDERBILT - (01163129) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -76.5179,
            37.1132
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "Steris BI",
          "cycles": "100+",
          "entity": "MARY IMMACULATE HOSPITAL - (01174325) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -112.5319,
            39.3755
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "DELTA COMMUNITY HOSPITAL - (00009921) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -71.14,
            41.7182
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "21-30",
          "entity": "SURGICENTER LIMITED PARTNER - (00017557) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -117.6622,
            33.6128
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "21-30",
          "entity": "MISSION HOSPITAL REGIONAL MEDICAL CENTER - (00020824) - VPro (3)",
          "qty": 3
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -84.1854,
            39.7238
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "3M BI",
          "cycles": "100+",
          "entity": "MIAMI VALLEY HOSPITAL - (00072598) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -105.2771,
            40.0375
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "BOULDER COMMUNITY HOSPITAL - (01018761) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -83.9152,
            35.998000000000005
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "PHYSICIANS REGIONAL MEDICAL CENTER - (00006176) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -98.8616,
            48.1132
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "MERCY HOSPITAL - (00006438) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -98.8616,
            48.1132
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "MERCY HOSPITAL - (00006438) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -89.60600000000001,
            39.7495
          ],
          "type": "Point"
        },
        "properties": {
          "age": 10,
          "bi": "3M BI",
          "cycles": "100+",
          "entity": "MEMORIAL MEDICAL CENTER - (00003545) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -117.6043,
            33.8419
          ],
          "type": "Point"
        },
        "properties": {
          "age": 9,
          "bi": "3M BI",
          "cycles": "41-50",
          "entity": "CORONA REGIONAL MEDICAL CENTER - (00003827) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -85.2965,
            35.045
          ],
          "type": "Point"
        },
        "properties": {
          "age": 9,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "ERLANGER MEDICAL CENTER - (00004981) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -118.2084,
            34.0487
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "41-50",
          "entity": "NORRIS CANCER CENTER HOSPITAL - (00009958) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.0946,
            46.7987
          ],
          "type": "Point"
        },
        "properties": {
          "age": 13,
          "bi": "Velocity",
          "cycles": "Unknown",
          "entity": "SAINT MARY MEDICAL CENTER - (00025827) - ETO (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.0946,
            46.7987
          ],
          "type": "Point"
        },
        "properties": {
          "age": 13,
          "bi": "Velocity",
          "cycles": "Unknown",
          "entity": "SAINT MARYS MEDICAL CENTER - (00076929) - ETO (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -112.0474,
            33.465
          ],
          "type": "Point"
        },
        "properties": {
          "age": 13,
          "bi": "3M BI",
          "cycles": "61-70",
          "entity": "BANNER GOOD SAMARITAN MEDICAL CENTER - (00001116) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -112.0474,
            33.465
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "3M BI",
          "cycles": "61-70",
          "entity": "BANNER GOOD SAMARITAN MEDICAL CENTER - (00001116) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -76.4966,
            42.4406
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "CAYUGA MEDICAL CENTER - (00007694) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -79.1596,
            40.6196
          ],
          "type": "Point"
        },
        "properties": {
          "age": 9,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "INDIANA REGIONAL MEDICAL CENTER - (00010216) - VPro (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -74.4873,
            40.7952
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "3M BI",
          "cycles": "41-50",
          "entity": "MORRISTOWN SURGICAL CENTER - (00075819) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -84.875,
            35.1313
          ],
          "type": "Point"
        },
        "properties": {
          "age": 10,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "THE SURGERY CENTER OF CLEVELAND - (00125139) - SYSTEM 1E (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -117.7813,
            33.5429
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "21-30",
          "entity": "MISSION HOSPITAL OF LAGUNA BEACH - (01237126) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -95.5285,
            30.3217
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Cyclesure",
          "cycles": "31-40",
          "entity": "CONROE REGIONAL MEDICAL CENTER - (00005591) - SYSTEM 1E (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -118.0818,
            33.9056
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "COAST PLAZA HOSPITAL - (00053759) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -83.9696,
            30.8385
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "JOHN D ARCHBOLD MEMORIAL HOSPITAL - (00331717) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -82.7404,
            35.2208
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "TRANSYLVANIA COMM HOSPITAL - (01090253) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -90.1293,
            32.3739
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "100+",
          "entity": "UNIVERSITY OF MISSISSIPPI MEDICAL CENTER - (01145098) - VPro 60 (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -112.3093,
            33.4777
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "3M BI",
          "cycles": "71-80",
          "entity": "AVONDALE SURGERY PARTNERS - (00520774) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -95.8079,
            36.0447
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "3M BI",
          "cycles": "31-40",
          "entity": "BROKEN ARROW MEDICAL FACILITY LLC - (01104467) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -105.9485,
            32.8932
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "3M BI",
          "cycles": "21-30",
          "entity": "GERALD CHAMPION REG - (01122629) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -75.2865,
            40.6957
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "SAINT LUKES UNIVERSITY HEALTH NETWORK - (01178675) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -96.7914,
            44.3056
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "21-30",
          "entity": "BROOKINGS HEALTH SYSTEM - (00009577) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -68.0204,
            46.8706
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "11-20",
          "entity": "CARY MEDICAL CENTER - (00010173) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -86.1797,
            39.8977
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "SAINT VINCENT - (00239699) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -86.1797,
            39.8977
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "SAINT VINCENT - (00239699) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.1278,
            39.3844
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "CLAY COUNTY HOSPITAL - (00011360) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -102.5177,
            36.0732
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "DALLAM-HARTLEY COUNTIES HOSPITAL DISTRICT - (00011422) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -121.4698,
            39.4877
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Steris BI",
          "cycles": "31-40",
          "entity": "OROVILLE HOSPITAL - (00040417) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -117.2738,
            33.5631
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "THE OAKS SURGERY CENTER - (00348523) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -111.9489,
            41.1894
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Cyclesure",
          "cycles": "51-60",
          "entity": "MCKAY-DEE HOSPITAL CENTER - (00003747) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -99.7746,
            32.391999999999996
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "ABILENE REGIONAL MEDICAL CENTER - (00006741) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -69.5844,
            45.4716
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "CHARLES A DEAN MEMORIAL HOSPITAL - (00010179) - SYSTEM 1E (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -105.09,
            40.4262
          ],
          "type": "Point"
        },
        "properties": {
          "age": 9,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "UCHEALTH MEDICAL CENTER OF THE ROCKIES - (00504290) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -95.7107,
            29.7705
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Steris BI",
          "cycles": "41-50",
          "entity": "HOUSTON METHODIST WEST HOSPITAL - (01157337) - VPro (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -76.1282,
            43.0354
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "SYRACUSE VA MED CENTER - (00008411) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -82.7945,
            37.8242
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "PAUL B HALL REGIONAL MEDICAL CENTER - (00012119) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -69.4022,
            44.7871
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "SEBASTICOOK VALLEY HOSPITAL - (00012889) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -95.4924,
            30.2257
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Steris BI",
          "cycles": "31-40",
          "entity": "CHI SAINT LUKES THE WOODLANDS HOSPITAL - (00376872) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -81.1375,
            39.9853
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "BARNESVILLE HOSPITAL - (00005895) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -105.4974,
            44.282
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "CAMPBELL COUNTY MEMORIAL HOSPITAL - (00006817) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -93.2685,
            30.8287
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "BEAUREGARD MEMORIAL HOSPITAL - (00011431) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -77.3395,
            37.6281
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "VIRGINIA UROLOGY SURGERY CENTERS - (01117986) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -95.6106,
            29.9319
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "IMPERIAL SURGERY CENTER - (01148877) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -120.4649,
            37.2983
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Cyclesure",
          "cycles": "31-40",
          "entity": "MERCY MEDICAL CENTER MERCED - (01329186) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -83.2911,
            42.4969
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "SURGICAL CENTER OF SOUTHFIELD LLC - (01373530) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -74.0768,
            40.5973
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "61-70",
          "entity": "STATEN ISLAND UNIVERSITY HOSPITAL - (00002508) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -83.9387,
            35.8929
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Velocity",
          "cycles": "61-70",
          "entity": "UNIVERSITY OF TENNESSEE MEDICAL CENTER - (00004986) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -109.0765,
            35.7445
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "3M BI",
          "cycles": "31-40",
          "entity": "FORT DEFIANCE INDIAN HOSPITAL BOARD INC - (00011031) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -116.3322,
            48.7306
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "BOUNDARY COMM HOSPITAL - (00011238) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -95.40100000000001,
            29.7041
          ],
          "type": "Point"
        },
        "properties": {
          "age": 13,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "CHI BAYLOR SAINT LUKES MEDICAL CENTER - (00055427) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -95.40100000000001,
            29.7041
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "CHI BAYLOR SAINT LUKES MEDICAL CENTER - (00055427) - VPro MAX (3)",
          "qty": 3
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -95.40100000000001,
            29.7041
          ],
          "type": "Point"
        },
        "properties": {
          "age": 9,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "CHI BAYLOR SAINT LUKES MEDICAL CENTER - (00055427) - VPro (5)",
          "qty": 5
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -95.40100000000001,
            29.7041
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Steris BI",
          "cycles": "21-30",
          "entity": "TEXAS ORTHOPEDIC HOSPITAL - (00132568) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -112.0305,
            33.5021
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "100+",
          "entity": "PHOENIX CHILDRENS HOSPITAL - (00339595) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -95.0963,
            29.5173
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "51-60",
          "entity": "UNIVERSITY OF TEXAS MEDICAL BRANCH - (01114609) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.6223,
            41.8971
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "ANN AND ROBERT H LURIE CHILDRENS HOSPITAL OF CHICAGO - (00003479) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -80.1484,
            42.0738
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "VILLAGE SURGICENTER ERIE - (00072282) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -98.6006,
            29.5189
          ],
          "type": "Point"
        },
        "properties": {
          "age": 10,
          "bi": "Cyclesure",
          "cycles": "51-60",
          "entity": "FOUNDATION BARIATRIC SAN ANTONIO - (01082257) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -98.6006,
            29.5189
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "Cyclesure",
          "cycles": "51-60",
          "entity": "FOUNDATION BARIATRIC SAN ANTONIO - (01082257) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -90.0753,
            29.9605
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "21-30",
          "entity": "SOUTHEAST LOUISIANA VETERANS HEALTH CARE - (01110015) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -111.0003,
            31.8543
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "1-10",
          "entity": "GREEN VALLEY HOSPITAL - (01343825) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -75.3295,
            40.0236
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "41-50",
          "entity": "BRYN MAWR SURGERY CENTER LLC - (01401008) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -93.2889,
            45.5576
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "ALLINA HEALTH SYSTEM - (01089928) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -81.365,
            28.6666
          ],
          "type": "Point"
        },
        "properties": {
          "age": 10,
          "bi": "Velocity",
          "cycles": "100+",
          "entity": "ADVENTIST HEALTH SYSTEM SUNBELT INC - (01089991) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.3455,
            34.751
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Cyclesure",
          "cycles": "31-40",
          "entity": "SAINT VINCENT INFIRMARY - (01269347) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -76.6252,
            39.2946
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "91-100",
          "entity": "UNIVERSITY OF MARYLAND MEDICAL CENTER - (01376008) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -117.1392,
            32.7973
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "SHARP MEMORIAL HOSPITAL - (00006885) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -94.0088,
            41.3391
          ],
          "type": "Point"
        },
        "properties": {
          "age": 9,
          "bi": "Cyclesure",
          "cycles": "1-10",
          "entity": "MADISON COUNTY HEALTH CARE SYSTEM - (00009501) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -78.7481,
            39.3424
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Velocity",
          "cycles": "1-10",
          "entity": "HAMPSHIRE MEMORIAL HOSPITAL - (00012256) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -81.1384,
            36.5089
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "ALLEGHANY MEMORIAL HOSPITAL - (00012385) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -93.2545,
            44.9378
          ],
          "type": "Point"
        },
        "properties": {
          "age": 18,
          "bi": "Velocity",
          "cycles": "100+",
          "entity": "ABBOTT NORTHWESTERN HOSPITAL - (00003372) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -74.2228,
            39.9999
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "COMMUNITY MEDICAL CENTER - (00005958) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -118.7831,
            45.6605
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "3M BI",
          "cycles": "21-30",
          "entity": "SAINT ANTHONY HOSPITAL - (00010106) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -93.3085,
            37.1668
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "31-40",
          "entity": "COX HEALTH SYSTEMS SOUTH - (00026185) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.3455,
            34.751
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Cyclesure",
          "cycles": "100+",
          "entity": "UNIVERSITY OF AR MED SCIENCES - (00067565) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.3455,
            34.751
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Cyclesure",
          "cycles": "100+",
          "entity": "UNIVERSITY OF AR MED SCIENCES - (00067565) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.3455,
            34.751
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Cyclesure",
          "cycles": "100+",
          "entity": "UNIVERSITY OF AR MED SCIENCES - (00067565) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -95.4017,
            29.6852
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "31-40",
          "entity": "FANNIN SURGICARE - (00415260) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -105.65100000000001,
            33.3474
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "3M BI",
          "cycles": "41-50",
          "entity": "LINCOLN COUNTY MEDICAL CENTER - (00003781) - VPro (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -77.3418,
            38.9615
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "100+",
          "entity": "RESTON HOSPITAL CENTER - (00005993) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -81.7816,
            24.5552
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "11-20",
          "entity": "LOWER KEYS MEDICAL CENTER - (00009281) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -85.69,
            30.8464
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "DOCTORS MEMORIAL HOSPITAL - (00011237) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -98.1681,
            33.2347
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Cyclesure",
          "cycles": "1-10",
          "entity": "FAITH COMMUNITY HOSPITAL - (00011766) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -77.6038,
            38.9577
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "11-20",
          "entity": "STONESPRINGS HOSPITAL CENTER - (01338196) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -93.0916,
            31.7617
          ],
          "type": "Point"
        },
        "properties": {
          "age": 11,
          "bi": "3M BI",
          "cycles": "11-20",
          "entity": "NATCHITOCHES REGIONAL MEDICAL CENTER - (00005478) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -93.0916,
            31.7617
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "3M BI",
          "cycles": "11-20",
          "entity": "NATCHITOCHES REGIONAL MEDICAL CENTER - (00005478) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -93.0297,
            45.0132
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "21-30",
          "entity": "HEALTHEAST SAINT JOHNS HOSPITAL - (00005910) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.0204,
            38.3554
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "SAINT LUKE HOSPITAL - (00012867) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -85.0812,
            33.5798
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "TANNER MEDICAL CENTER - (00082278) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -94.9695,
            29.7705
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "31-40",
          "entity": "SAN JACINTO METHODIST HOSPITAL - (00227100) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -95.1885,
            29.6501
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "BAYSHORE MEDICAL CENTER - (00006714) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -90.4973,
            36.0584
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "ARKANSAS METHODIST MEDICAL CENTER - (00008551) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -71.947,
            42.8856
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "3M BI",
          "cycles": "1-10",
          "entity": "MONADNOCK COMMUNITY HOSPITAL - (00010310) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -83.60600000000001,
            41.6712
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "PROMEDICA PARKWAY SURGERY CENTER - (00239075) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -94.3784,
            35.3427
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "3M BI",
          "cycles": "41-50",
          "entity": "MERCY AMB SURGERY CENTER - (00357311) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -91.6612,
            42.0188
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "SAINT LUKES HOSPITAL - (01203575) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -70.2898,
            43.6602
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "Cyclesure",
          "cycles": "100+",
          "entity": "MAINE MEDICAL CENTER - (00002400) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -80.1578,
            40.556999999999995
          ],
          "type": "Point"
        },
        "properties": {
          "age": 9,
          "bi": "3M BI",
          "cycles": "21-30",
          "entity": "VALLEY MEDICAL FACILITIES DBA HERITAGE VALLEY SEWICKLY - (00002582) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -72.0353,
            42.075
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "3M BI",
          "cycles": "1-10",
          "entity": "HARRINGTON MEMORIAL HOSPITAL - (00007207) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -77.9928,
            38.5117
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Steris BI",
          "cycles": "11-20",
          "entity": "CULPEPER MEMORIAL HOSPITAL INC - (00010720) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -84.2623,
            36.0159
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "METHODIST MEDICAL CENTER OAK RIDGE - (00018161) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -91.4877,
            44.784
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "Steris BI",
          "cycles": "71-80",
          "entity": "MARSHFIELD CLINIC EAU CLAIRE CENTER - (00280658) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -118.1876,
            33.8045
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "31-40",
          "entity": "LONG BEACH MEMORIAL MEDICAL CENTER - (00046904) - VPro 60 (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.3049,
            38.9382
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "Steris BI",
          "cycles": "100+",
          "entity": "UNIVERSITY OF MISSOURI HEALTH CARE - (01120103) - SYSTEM 1E (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -94.8002,
            29.3305
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "71-80",
          "entity": "UTMB HEALTHCARE SYSTEMS - (01177056) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -94.8002,
            29.3305
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "71-80",
          "entity": "UTMB HEALTHCARE SYSTEMS - (01177056) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -74.0133,
            40.6412
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "MAIMONIDES MEDICAL CENTER - (01355420) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -94.7049,
            38.8982
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "31-40",
          "entity": "BLUE VALLEY HOSPITAL - (01003644) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -77.1433,
            38.6947
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "11-20",
          "entity": "FORT BELVOIR COMMUNITY HOSPITAL - (01184944) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -118.2763,
            34.0622
          ],
          "type": "Point"
        },
        "properties": {
          "age": 9,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "SAINT VINCENT MEDICAL CENTER - (00003795) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -119.7764,
            39.4972
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "RENOWN REGIONAL MEDICAL CENTER - (00005707) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.7157,
            41.849
          ],
          "type": "Point"
        },
        "properties": {
          "age": 10,
          "bi": "Steris BI",
          "cycles": "11-20",
          "entity": "SAINT ANTHONY HOSPITAL - (00006457) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.8233,
            42.7161
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "61-70",
          "entity": "WHEATON FRANCISCAN HEALTHCARE ALL SAINTS - (00006969) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -96.1072,
            42.037
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "BURGESS HEALTH CENTER - (00012102) - SYSTEM 1E (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -90.03299999999999,
            35.1497
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "21-30",
          "entity": "LE BONHEUR CHILDRENS HOSPITAL - (00045563) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -82.7151,
            27.8387
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "TAMPA BAY SPECIALITY SURGERY CENTER - (00393885) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -122.3056,
            47.6116
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "3M BI",
          "cycles": "71-80",
          "entity": "SWEDISH MEDICAL CENTER - (01018516) - VPro (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -84.3983,
            39.5151
          ],
          "type": "Point"
        },
        "properties": {
          "age": 13,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "CHILDREN'S HOSPITAL MEDICAL CENTER - (01088605) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -81.7953,
            26.134
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "41-50",
          "entity": "NCH HEALTHCARE SYSTEM - (01171599) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -69.7665,
            44.3232
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Cyclesure",
          "cycles": "91-100",
          "entity": "MAINE GENERAL ALFOND HEALTH CENTER - (01266035) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.8651,
            42.3542
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "VISTA MEDICAL CENTER EAST - (00003427) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -82.2886,
            37.667
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "APPALACHIAN REGIONAL HEALTHCARE INC - (00006025) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -119.0171,
            35.3866
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "100+",
          "entity": "BAKERSFIELD MEMORIAL HOSPITAL - (00003862) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -122.3256,
            47.6036
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "SWEDISH MEDICAL CENTER - (00003984) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -117.0189,
            32.7835
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "SHARP GROSSMONT HOSPITAL - (00005734) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -118.1636,
            34.1355
          ],
          "type": "Point"
        },
        "properties": {
          "age": 18,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "HERNIA CENTER OF SOUTHERN CALIFORNIA - (01167086) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -82.3756,
            27.9382
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "100+",
          "entity": "SURGERY CENTER AT TAMPA GENERAL HOSPITAL BRANDON HEALTHPLEX - (01401285) - ETO (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -82.3756,
            27.9382
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "3M BI",
          "cycles": "100+",
          "entity": "SURGERY CENTER AT TAMPA GENERAL HOSPITAL BRANDON HEALTHPLEX - (01401285) - ETO (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -118.1636,
            34.1355
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "SHRINERS HOSPITALS FOR CHILDREN - (01409239) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -77.5197,
            37.5825
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "SAINT MARYS HOSPITAL - (00006955) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -77.5197,
            37.5825
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "SAINT MARYS HOSPITAL - (00006955) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.4758,
            35.6045
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "OZARK HEALTH INC - (00011368) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -111.789,
            43.81
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "Cyclesure",
          "cycles": "71-80",
          "entity": "MADISON MEMORIAL HOSPITAL - (00012229) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -90.1782,
            32.3149
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "3M BI",
          "cycles": "31-40",
          "entity": "MISSISSIPPI BAPTIST MEDICAL CENTER - (00060850) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -81.9648,
            36.6673
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "51-60",
          "entity": "JOHNSTON MEMORIAL HOSPITAL - (00077208) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -117.8681,
            33.8356
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "51-60",
          "entity": "KPOC ANAHEIM MEDICAL CENTER - (01165757) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -88.0414,
            43.0493
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "Steris BI",
          "cycles": "51-60",
          "entity": "CHILDRENS HOSPITAL OF WISCONSIN - (00003324) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.6251,
            35.599000000000004
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "11-20",
          "entity": "OCOM NORTH - (01075606) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.8895,
            43.082
          ],
          "type": "Point"
        },
        "properties": {
          "age": 11,
          "bi": "Steris BI",
          "cycles": "61-70",
          "entity": "SAINT MARY'S HOSPITAL OF MILWAUKEE - (01172734) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -99.0779,
            40.7136
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "3M BI",
          "cycles": "1-10",
          "entity": "CHI HEALTH GOOD SAMARITAN HOSPITAL - (00006625) - SYSTEM 1E (3)",
          "qty": 3
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -99.0779,
            40.7136
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "3M BI",
          "cycles": "1-10",
          "entity": "CHI HEALTH GOOD SAMARITAN HOSPITAL - (00006625) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.84100000000001,
            31.0065
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "21-30",
          "entity": "METROPLEX HOSPITAL - (00006695) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -85.8221,
            38.3089
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "BAPTIST HEALTH FLOYD - (00009461) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -76.3671,
            40.0091
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "31-40",
          "entity": "LANCASTER REGIONAL MEDICAL CENTER - (00010204) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -76.3671,
            40.0091
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "31-40",
          "entity": "LANCASTER REGIONAL MEDICAL CENTER - (00010204) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -83.0604,
            42.3474
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "51-60",
          "entity": "HUTZEL WOMEN'S HOSPITAL - (01028070) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -96.5858,
            39.1938
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "3M BI",
          "cycles": "11-20",
          "entity": "VIA CHRISTI HOSPITAL MANHATTAN INC - (01206182) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -104.76700000000001,
            38.9497
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "RESEARCH SURGERY CENTER LLC - (01264143) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -83.2495,
            31.7248
          ],
          "type": "Point"
        },
        "properties": {
          "age": 10,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "THE HOSPITAL AUTHORITY OF BEN HILL COUNTY - (00009263) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -86.7916,
            36.1504
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "BAPT AMB SURGERY CENTER - (00069186) - VPro (3)",
          "qty": 3
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -104.8384,
            39.7467
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "UCHEALTH UNIVERSITY OF COLORADO HOSPITAL - (01312617) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -86.7916,
            36.1504
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "HCA HEALTH SERVICES OF TENNESSEE INC - (00007047) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -119.1056,
            35.3039
          ],
          "type": "Point"
        },
        "properties": {
          "age": 13,
          "bi": "3M BI",
          "cycles": "21-30",
          "entity": "MERCY HOSPITALS OF BAKERSFIELD SOUTHWEST CAMPUS - (00126621) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -82.7939,
            40.7303
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "1-10",
          "entity": "GALION COMMUNITY HOSPITAL - (00003129) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.86200000000001,
            42.949
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "21-30",
          "entity": "AURORA HEALTH CARE METRO INC - (00003317) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -105.0962,
            39.774
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "41-50",
          "entity": "LUTHERAN MEDICAL CENTER - (00004187) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -122.7787,
            45.4985
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "81-90",
          "entity": "PROVIDENCE SAINT VINCENT MEDICAL CENTER - (00004213) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -91.5487,
            34.4854
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "BAPTIST HEALTH HOSPITALS - (00005483) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -88.6503,
            33.6076
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "CLAY COUNTY MEDICAL CORPORATION - (00009386) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -94.2306,
            43.066
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "TSO3 BI",
          "cycles": "1-10",
          "entity": "KOSSUTH REGIONAL HEALTH CENTER - (00010381) - TSO3 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -98.2819,
            43.0819
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Other BI",
          "cycles": "1-10",
          "entity": "WAGNER COMMUNITY MEMORIAL HOSPITAL AVERA - (00012509) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -105.0002,
            40.4961
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "11-20",
          "entity": "HARMONY AMBULATORY SURGERY CENTER - (00070630) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -118.2599,
            34.1379
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Cyclesure",
          "cycles": "1-10",
          "entity": "GLENDALE MEMORIAL HOSPITAL AND HEALTH CENTER - (01202475) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -122.8398,
            42.3363
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "PROVIDENCE MEDFORD MEDICAL CENTER - (00003973) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -89.0667,
            36.4263
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "BAPTIST MEMORIAL HOSPITAL UNION CITY - (00004995) - SYSTEM 1E (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -75.4774,
            44.6902
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "CLAXTON HEPBURN MEDICAL CENTER - (00007576) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -107.8526,
            35.1476
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "11-20",
          "entity": "CIBOLA GENERAL HOSPITAL - (00011628) - VPro (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -83.9555,
            41.9953
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Cyclesure",
          "cycles": "51-60",
          "entity": "HERRICK MEDICAL HOSPITAL INC - (00012451) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -86.5769,
            39.1263
          ],
          "type": "Point"
        },
        "properties": {
          "age": 11,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "SOUTHERN INDIANA SURGERY CENTER - (00057872) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -112.0124,
            43.475
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "41-50",
          "entity": "MOUNTAIN VIEW AMBULATORY SURGERY CENTER - (00406741) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.1416,
            32.5773
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "BAYLOR SURGICARE AT MANSFIELD - (01099305) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -74.4701,
            41.4512
          ],
          "type": "Point"
        },
        "properties": {
          "age": 9,
          "bi": "3M BI",
          "cycles": "71-80",
          "entity": "ORANGE REGIONAL MEDICAL CENTER - (00002527) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -76.6048,
            39.3265
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "100+",
          "entity": "UNION MEMORIAL HOSPITAL - (00002759) - VPro 60 (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -85.43,
            44.2504
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "MUNSON HEALTHCARE CADILLAC HOSPITAL - (00006337) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.1494,
            30.0178
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "SMITHVILLE REGIONAL HOSPITAL - (00012382) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -96.7495,
            32.8756
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "TEXAS INSTITUTE FOR SURGERY - (00046556) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -77.168,
            39.086999999999996
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "31-40",
          "entity": "MONTGOMERY COUNTY SURGERY CENTER AND CHILDRENS HEALTH SYSTEM - (01020390) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -96.3103,
            43.2014
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "HEGG MEMORIAL HEALTH CENTER - (00012251) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -77.4306,
            38.4586
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "21-30",
          "entity": "STAFFORD HOSPITAL CENTER - (01102573) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -108.5457,
            39.0783
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "51-60",
          "entity": "CANYON VIEW SURGERY CENTER - (01314767) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -84.395,
            39.21
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "JEWISH HOSPITAL - (01392545) - Vpro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -85.7137,
            33.6803
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "21-30",
          "entity": "NORTHEAST ALABAMA REGIONAL MEDICAL CENTER - (00004965) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -122.3256,
            47.6036
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "HARBORVIEW MEDICAL CENTER - (00005868) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -104.81700000000001,
            38.876
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "3M BI",
          "cycles": "21-30",
          "entity": "PENROSE  SAINT FRANCIS HEALTHCARE - (00006785) - VPro MAX (3)",
          "qty": 3
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.4633,
            31.2885
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "41-50",
          "entity": "RAPIDES GENERAL HOSPITAL - (00009733) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -94.5328,
            38.8161
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "BELTON REGIONAL MEDICAL CENTER - (00016070) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -98.4194,
            29.5395
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "BAPTIST HEALTH SYSTEM - (00028365) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -95.4703,
            30.1441
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "MEMORIAL HERMAN SURGERY CENTER WOODLANDS PARKWAY - (00058101) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -89.3065,
            31.3146
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "LOWERY A WOODALL OUTPATIENT SURGERY - (00080725) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.3556,
            41.4236
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "PINNACLE HEALTHCARE - (01030355) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -86.1309,
            39.596
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "21-30",
          "entity": "ORTHOINDY SOUTH CLINIC - (01098019) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -117.3768,
            33.2433
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "3M BI",
          "cycles": "41-50",
          "entity": "CAMP PENDLETON NAVAL HOSPITAL/126532 ISEC - (01186300) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -91.1468,
            30.4066
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "100+",
          "entity": "OUR LADY OF THE LAKE REGIONAL MEDICAL CENTER - (01356958) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -119.0171,
            35.3866
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Steris BI",
          "cycles": "21-30",
          "entity": "CONTINUECARE HOSPITAL AT BAKERSFIELD INC - (01358133) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -119.0171,
            35.3866
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "3M BI",
          "cycles": "11-20",
          "entity": "SAN JOAQUIN COMMUNITY HOSPITAL - (00005933) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -82.5796,
            34.829
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "11-20",
          "entity": "BAPTIST EASLEY HOSPITAL - (00009234) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -114.1679,
            46.2395
          ],
          "type": "Point"
        },
        "properties": {
          "age": 9,
          "bi": "Cyclesure",
          "cycles": "11-20",
          "entity": "MARCUS DALY MEMORIAL HOSPITAL - (00009591) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -94.1022,
            41.8397
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "DALLAS COUNTY HOSPITAL - (00010382) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -93.7265,
            35.2941
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "3M BI",
          "cycles": "21-30",
          "entity": "MERCY HOSPITAL PARIS - (00013548) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -88.9294,
            37.7257
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "MARION HEALTHCARE - (00082229) - SYSTEM 1E (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -81.5739,
            30.1459
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "3M BI",
          "cycles": "1-10",
          "entity": "BAPTIST MEDICAL CENTER SOUTH - (00402492) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -80.7642,
            41.2318
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "Steris BI",
          "cycles": "41-50",
          "entity": "SAINT JOSEPH HEALTH CENTER - (01158576) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -84.6342,
            40.0987
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "11-20",
          "entity": "WAYNE HOSPITAL - (00003145) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -84.6342,
            40.0987
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "11-20",
          "entity": "WAYNE HOSPITAL - (00003145) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -91.8803,
            42.4674
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Cyclesure",
          "cycles": "1-10",
          "entity": "BUCHANAN COUNTY HEALTH CENTER - (00005185) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -78.1681,
            34.025999999999996
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "NOVANT HEALTH BRUNSWICK MEDICAL CENTER - (00012328) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -82.64,
            27.8738
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "SAINT ANTHONY OUTPATIENT CENTER AT CARILLION - (01175819) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -117.0676,
            32.6371
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "SCRIPPS MERCY HOSPITAL - (01180980) - VPro MAX (3)",
          "qty": 3
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -89.8653,
            30.7733
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "OUR LADY OF THE ANGELS HOSPITAL INC - (01290656) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -75.4827,
            40.0426
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "PAOLI MEMORIAL HOSPITAL - (00002717) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -82.7208,
            27.7549
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "PALMS OF PASADENA HOSPITAL - (00002957) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -86.7852,
            36.1866
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "100+",
          "entity": "VANDERBILT UNIVERSITY MEDICAL CENTER - (00002995) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -120.3273,
            47.4253
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "3M BI",
          "cycles": "11-20",
          "entity": "CONFLUENCE HEALTH CENTRAL WASHINGTON HOSPITAL AND CLINICS - (00010129) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -131.6832,
            55.372
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "3M BI",
          "cycles": "21-30",
          "entity": "PEACEHEALTH KETCHIKAN MEDICAL CENTER - (00013180) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.1599,
            32.6555
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Steris BI",
          "cycles": "71-80",
          "entity": "USMD HOSPITAL AT ARLINGTON - (00074695) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.1599,
            32.6555
          ],
          "type": "Point"
        },
        "properties": {
          "age": 9,
          "bi": "Steris BI",
          "cycles": "71-80",
          "entity": "USMD HOSPITAL AT ARLINGTON - (00074695) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -80.2042,
            25.7864
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "11-20",
          "entity": "UNIVERSITY MIAMI UMHC SCCC - (00228950) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -95.9452,
            36.0605
          ],
          "type": "Point"
        },
        "properties": {
          "age": 15,
          "bi": "Velocity",
          "cycles": "100+",
          "entity": "SAINT FRANCIS HOSPITAL - (00006670) - ETO (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -88.8407,
            43.4616
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "3M BI",
          "cycles": "41-50",
          "entity": "BEAVER DAM COMM HOSPITAL - (00010352) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -79.8206,
            32.8473
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "EAST COOPER MEDICAL CENTER - (00021243) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -79.9319,
            40.4525
          ],
          "type": "Point"
        },
        "properties": {
          "age": 10,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "UNIVERSITY OF PITTSBURGH MEDICAL CENTER - (00069689) - ETO (4)",
          "qty": 4
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -82.2674,
            34.8968
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "SURGERY CENTER OF PELHAM - (00402129) - VPro 60 (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.655,
            37.685
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "MERCY HOSPITAL LEBANON - (00003578) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -80.262,
            35.8231
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "100+",
          "entity": "WAKE FOREST BAPTIST HEALTH LEXINGTON MEDICAL CENTER - (00009182) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -81.3535,
            28.5559
          ],
          "type": "Point"
        },
        "properties": {
          "age": 18,
          "bi": "Velocity",
          "cycles": "Unknown",
          "entity": "ADVENTIST HEALTH SYSTEM SUNBELT INC - (00028798) - ETO (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -93.1209,
            44.9372
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "21-30",
          "entity": "UNITED & CHILDRENS HOSPITAL - (00065495) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -93.1209,
            44.9372
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "21-30",
          "entity": "UNITED & CHILDRENS HOSPITAL - (00065495) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -86.8003,
            33.5062
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "3M BI",
          "cycles": "81-90",
          "entity": "CHILDRENS HOSPITAL OF ALABAMA - (01369151) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -76.6075,
            39.2998
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "100+",
          "entity": "MERCY MEDICAL CENTER - (00002750) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -76.6476,
            39.287
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "BON SECOURS HOSPITAL - (00002761) - VPro (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -94.9339,
            39.3015
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "Cyclesure",
          "cycles": "1-10",
          "entity": "SAINT LUKE'S CUSHING HOSPITAL - (00003584) - SYSTEM 1E (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -94.7303,
            32.5178
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "3M BI",
          "cycles": "51-60",
          "entity": "GOOD SHEPHERD MEDICAL CENTER - (00003676) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.0946,
            46.7987
          ],
          "type": "Point"
        },
        "properties": {
          "age": 18,
          "bi": "Velocity",
          "cycles": "100+",
          "entity": "SMDC MEDICAL CENTER - (00005247) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -104.7866,
            39.943000000000005
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "PLATTE VALLEY MEDICAL CENTER - (00006772) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -124.4218,
            42.4073
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "3M BI",
          "cycles": "1-10",
          "entity": "CURRY GENERAL HOSPITAL - (00011610) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -74.0013,
            40.7101
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "81-90",
          "entity": "NEW YORK PRESBYTERIAN LOWER MANHATTAN HOSPITAL - (00012068) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -88.0074,
            44.4601
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "3M BI",
          "cycles": "41-50",
          "entity": "BELLIN MEMORIAL HOSPITAL - (00028379) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -88.0074,
            44.4601
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "41-50",
          "entity": "BELLIN MEMORIAL HOSPITAL - (00028379) - TSO3 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.0497,
            30.1843
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Cyclesure",
          "cycles": "31-40",
          "entity": "LAFAYETTE GENERAL SURGICAL HOSPITAL LLC - (00412148) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -83.3846,
            42.3358
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "GENESYS SURGERY CENTER - (01386799) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -82.1819,
            36.5686
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "BRISTOL REGIONAL MEDICAL CENTER - (00003004) - VPro (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -119.288,
            46.2522
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Steris BI",
          "cycles": "51-60",
          "entity": "KADLEC REGIONAL MEDICAL CENTER - (00004008) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -81.9276,
            26.5025
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Cyclesure",
          "cycles": "51-60",
          "entity": "LEE MEMORIAL HEALTH SYSTEM - (00054676) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -73.4973,
            41.2977
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "Cyclesure",
          "cycles": "11-20",
          "entity": "RIDGEFIELD SURGICAL CENTER - (01258736) - SYSTEM 1E (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -77.1395,
            38.8836
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "VIRGINIA HOSPITAL CENTER ARLINGTON HEALTH SYSTEM - (00002779) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.2248,
            30.4223
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "3M BI",
          "cycles": "31-40",
          "entity": "BAPTIST HOSPITAL - (00002907) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -80.2213,
            39.4941
          ],
          "type": "Point"
        },
        "properties": {
          "age": 10,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "FAIRMONT GEN HOSPITAL - (00004707) - ETO (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -100.4315,
            45.5407
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "MOBRIDGE REGIONAL HOSPITAL - (00006434) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -117.7362,
            34.0812
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "POMONA VALLEY HOSPITAL MEDICAL CENTER - (00075482) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -119.6115,
            38.8703
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "CARSON VALLEY MEDICAL CENTER - (00163665) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -76.4871,
            39.3914
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Cyclesure",
          "cycles": "11-20",
          "entity": "WHITE MARSH SURGERY CENTER - (01082808) - SYSTEM 1E (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -80.3749,
            26.048000000000002
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Cyclesure",
          "cycles": "31-40",
          "entity": "CLEVELAND CLINIC HOSPITAL - (00007022) - SYSTEM 1E (3)",
          "qty": 3
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -93.3346,
            44.8735
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "COLUMBIA CENTENNIAL LAKE - (00015897) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -98.9479,
            43.4251
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "PLATTE COMMUNITY MEMORIAL HOSPITAL - (00440630) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -85.7359,
            38.3078
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "RHN CLARK MEMORIAL HOSPITAL LLC - (00005131) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -81.6076,
            41.5084
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "3M BI",
          "cycles": "51-60",
          "entity": "CLEVELAND CLINIC FOUNDATION - (00080259) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -93.8765,
            33.431
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "PEARSON EYE INSTITUTE - (00166566) - SYSTEM 1E (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -75.1593,
            39.9487
          ],
          "type": "Point"
        },
        "properties": {
          "age": 11,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "PENNSYLVANIA HOSPITAL - (00002692) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -88.9627,
            40.1487
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "DOCTOR JOHN WARNER HOSPITAL - (00006476) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -88.5686,
            40.0263
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "KIRBY MEDICAL CENTER - (00006481) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.3049,
            38.9382
          ],
          "type": "Point"
        },
        "properties": {
          "age": 14,
          "bi": "Cyclesure",
          "cycles": "61-70",
          "entity": "UNIVERSITY OF MISSOURI WOMENS AND CHILDRENS HOSPITAL - (00006584) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -96.7873,
            39.0619
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "IRWIN ARMY COMMUNITY HOSPITAL - (00008086) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -96.7873,
            39.0619
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "IRWIN ARMY COMMUNITY HOSPITAL - (00008086) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -105.5142,
            40.3658
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "3M BI",
          "cycles": "51-60",
          "entity": "ESTES PARK MEDICAL CENTER - (00011504) - SYSTEM 1E (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.6857,
            30.4007
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "3M BI",
          "cycles": "41-50",
          "entity": "SOUTH BALDWIN REGIONAL MEDICAL CENTER - (00011542) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -74.6874,
            40.588
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "3M BI",
          "cycles": "21-30",
          "entity": "SOMERSET AMBULATORY SURGICAL CENTER - (01021759) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -80.6672,
            41.1197
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "SAINT ELIZABETH HOSPITAL MED CENTER - (01095025) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -122.95700000000001,
            45.4984
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "41-50",
          "entity": "TUALITY COMMUNITY HOSPITAL - (00003954) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -79.0808,
            40.0248
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "Steris BI",
          "cycles": "31-40",
          "entity": "SOMERSET HOSPITAL - (00004052) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.3986,
            42.8821
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "AVERA SURGICAL HOSPITAL - (00077677) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -80.1578,
            40.556999999999995
          ],
          "type": "Point"
        },
        "properties": {
          "age": 9,
          "bi": "Velocity",
          "cycles": "31-40",
          "entity": "CHILDREN'S HOSPITAL OF PITTSBURGH OF UPMC - (00231637) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -111.7242,
            33.4026
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "11-20",
          "entity": "BANNER BAYWOOD MEDICAL CENTER - (01125440) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -75.3295,
            40.0236
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "41-50",
          "entity": "BRYN MAWR SURGERY CENTER LLC - (01401008) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -88.2036,
            40.1095
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "CARLE FOUNDATION HOSPITAL - (00003532) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -90.0753,
            29.9605
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "UNIVERSITY MEDICAL CENTER - (00013892) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -84.5244,
            42.7371
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "61-70",
          "entity": "SPARROW HEALTH SYSTEM - (00025529) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -86.7852,
            36.1866
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "VANDERBILT UNIVERSITY MEDICAL CENTER IMPLANTS - (01084141) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -93.4589,
            45.1284
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "NORTH MEMORIAL AMBULATORY SURGERY CENTER AT MAPLE GROVE - (01084220) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -77.0322,
            38.9327
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "TSO3 BI",
          "cycles": "Unknown",
          "entity": "CHILDREN'S NATIONAL MEDICAL CENTER - (01181776) - TSO3 (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -95.0963,
            29.5173
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "UTMB SPECIALTY CARE CENTER - (01322222) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -95.2269,
            41.0079
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "MONTGOMERY COUNTY MEMORIAL HOSPITAL - (00006362) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -78.8182,
            42.8441
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "3M BI",
          "cycles": "71-80",
          "entity": "MERCY HOSPITAL OF BUFFALO - (00007644) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -90.9624,
            39.0012
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "MERCY HOSPITAL LINCOLN - (00009642) - SYSTEM 1E (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -75.597,
            39.5645
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "Steris BI",
          "cycles": "100+",
          "entity": "CHRISTIANA CARE HEALTH SERVICES - (00019026) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -95.9378,
            41.2586
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Velocity",
          "cycles": "61-70",
          "entity": "THE NEBRASKA MEDICAL CENTER - (00048177) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -122.0055,
            47.5585
          ],
          "type": "Point"
        },
        "properties": {
          "age": 9,
          "bi": "3M BI",
          "cycles": "41-50",
          "entity": "SWEDISH MEDICAL CENTER ISSAQUAH CAMPUS - (01174268) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -77.4772,
            38.2995
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "MARY WASHINGTON HEALTHCARE - (00002782) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -89.5588,
            44.5212
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Velocity",
          "cycles": "Unknown",
          "entity": "AMBULATORY SURGERY CENTER - (01006769) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -94.8976,
            30.6829
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "MEMORIAL HOSPITAL OF POLK COUNTY - (01085493) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -95.6285,
            29.7223
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "WEST HOUSTON MEDICAL CENTER - (00006706) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -103.2582,
            47.8043
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "MCKENZIE COUNTY HEALTHCARE SYSTEMS - (00012530) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -93.7487,
            32.5037
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "SPECIALISTS HOSPITAL SHREVEPORT - (01082058) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -118.23100000000001,
            34.6017
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "31-40",
          "entity": "PALMDALE REGIONAL MED CENTER - (01113131) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -118.23100000000001,
            34.6017
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "3M BI",
          "cycles": "31-40",
          "entity": "PALMDALE REGIONAL MED CENTER - (01113131) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -95.0101,
            41.4003
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Cyclesure",
          "cycles": "1-10",
          "entity": "CASS COUNTY MEMORIAL HOSPITAL - (00005177) - SYSTEM 1E (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -93.7994,
            41.5695
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "11-20",
          "entity": "SURGERY CENTER WEST DES MOINES - (00028580) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -105.0963,
            39.998000000000005
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Steris BI",
          "cycles": "11-20",
          "entity": "GOOD SAMARITAN MEDICAL CENTER LLC - (00081464) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -95.9526,
            36.1464
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "SAINT JOHN MEDICAL CENTER INC - (00003648) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -118.4587,
            34.2619
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "3M BI",
          "cycles": "51-60",
          "entity": "PROVIDENCE HOLY CROSS MEDICAL CENTER - (00006873) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -73.089,
            44.8111
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "NORTHWESTERN MEDICAL CENTER - (00007409) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -73.089,
            44.8111
          ],
          "type": "Point"
        },
        "properties": {
          "age": 9,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "NORTHWESTERN MEDICAL CENTER - (00007409) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -82.01799999999999,
            35.6819
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "3M BI",
          "cycles": "100+",
          "entity": "THE MCDOWELL HOSPITAL - (00013828) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -86.4512,
            36.3834
          ],
          "type": "Point"
        },
        "properties": {
          "age": 9,
          "bi": "Velocity",
          "cycles": "31-40",
          "entity": "SUMNER REGIONAL HEALTH SYSTEMS DIP - (01154687) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -96.8825,
            32.9657
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "FIRST TEXAS HOSPITAL CARROLLTON LLC - (01358605) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -76.5891,
            39.361
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "21-30",
          "entity": "GOOD SAMARITAN HOSPITAL - (00002765) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.7042,
            41.9464
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "KINDRED HOSPITAL CHICAGO NORTH - (00003487) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -112.0996,
            33.6819
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "HONORHEALTH DEER VALLEY MEDICAL CENTER - (00003755) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -89.9658,
            38.7138
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "ANDERSON HOSPITAL - (00008772) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -78.9929,
            38.0964
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Steris BI",
          "cycles": "51-60",
          "entity": "AUGUSTA MEDICAL CENTER - (00050665) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.5856,
            40.1908
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "NORTHEAST REGIONAL HEALTH SYSTEM - (00071871) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.5856,
            40.1908
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "NORTHEAST REGIONAL HEALTH SYSTEM - (00071871) - VPro 60 (5)",
          "qty": 5
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -111.8904,
            40.6568
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "INTERMOUNTAIN UROLOGICAL INSTITUTE - (01117027) - ETO (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.6943,
            42.0546
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "EVANSTON HOSPITAL - (00003441) - VPro (3)",
          "qty": 3
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -93.2522,
            37.1654
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "3M BI",
          "cycles": "100+",
          "entity": "MERCY EYES AND EAR CENTER - (01247181) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -119.7867,
            36.7487
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "41-50",
          "entity": "COMMUNITY MEDICAL CENTER - (00003866) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.1698,
            46.7408
          ],
          "type": "Point"
        },
        "properties": {
          "age": 13,
          "bi": "Velocity",
          "cycles": "Unknown",
          "entity": "SAINT MARYS MEDICAL CENTER - (00006973) - ETO (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -90.6965,
            35.833
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "OUTPATIENT SURGERY CENTER JONESBORO - (00080003) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -83.0187,
            40.0535
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "OHIO SURGERY CENTER - (00069856) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -71.4884,
            42.9944
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "11-20",
          "entity": "CATHOLIC MEDICAL CENTER - (00007372) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -82.2095,
            29.1565
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "OCALA REGIONAL MEDICAL CENTER - (00058845) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -76.5626,
            42.93
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "AUBURN COMMUNITY HOSPITAL - (01076599) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -121.6438,
            36.7103
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "HARDEN RANCH VETERINARY HOSPITAL - (01090043) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -110.9631,
            41.2609
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "1-10",
          "entity": "PREMIER SURGERY CENTER - (01192263) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.536,
            33.2722
          ],
          "type": "Point"
        },
        "properties": {
          "age": 9,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "TUSCALOOSA SURGERY CENTER - (00020433) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -81.0489,
            34.9681
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "CAROLINA SURGICAL CENTER - (00050409) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.7328,
            42.0362
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "SKOKIE HOSPITAL - (01109949) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -73.9588,
            40.7685
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Steris BI",
          "cycles": "100+",
          "entity": "HOSPITAL FOR SPECIAL SURGERY - (01342106) - VPro MAX (3)",
          "qty": 3
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -84.0961,
            37.1549
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "SAINT JOSEPHS LONDON - (00081999) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -112.2468,
            33.4913
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "BANNER ESTRELLA SURGERY CENTER - (00412201) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.2303,
            34.8807
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "SAINT VINCENT MED  CENTER NORTH - (01321596) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -76.6229,
            40.9799
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "31-40",
          "entity": "GEISINGER OUTPATIENT SURGERY WOODBINE - (00412031) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -89.9758,
            30.0313
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "NEW ORLEANS EAST - (01004132) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -86.6493,
            33.6328
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "100+",
          "entity": "SAINT VINCENTS EAST - (01088595) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -118.7653,
            34.2656
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "21-30",
          "entity": "ASPEN OUTPATIENT CENTER - (01090329) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -88.3186,
            42.0376
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "ADVOCATE SHERMAN HOSPITAL - (00003428) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.3184,
            32.7256
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "3M BI",
          "cycles": "100+",
          "entity": "TEXAS HEALTH HARRIS METHODIST HOSPITAL FORT WORTH - (00003683) - VPro MAX (3)",
          "qty": 3
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -117.1698,
            32.6807
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "11-20",
          "entity": "SHARP CORONADO HOSPITAL - (00003839) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -122.2597,
            39.5353
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Steris BI",
          "cycles": "31-40",
          "entity": "GLENN MEDICAL CENTER - (00005845) - SYSTEM 1E (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -90.0852,
            29.9746
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "Steris BI",
          "cycles": "11-20",
          "entity": "SOUTHWEST LOUISIANA VETERANS HEALTH CARE SYSTEM - (00010533) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -80.0842,
            34.3756
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "CAROLINA PINES REGIONAL MEDICAL CENTER - (01088876) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -95.6066,
            29.5785
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "3M BI",
          "cycles": "61-70",
          "entity": "METHODIST HOSPITAL - (01409708) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -80.1387,
            26.8234
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "PALM BEACH GARDENS MEDICAL CENTER - (00006119) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -102.8799,
            30.8908
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "PECOS COUNTY MEMORIAL HOSPITAL - (00011560) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -79.0557,
            33.8731
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "CONWAY HOSPITAL - (00064931) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.1872,
            30.4873
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "3M BI",
          "cycles": "21-30",
          "entity": "SACRED HEART HOSPITAL - (00401554) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -96.7397,
            33.025
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Cyclesure",
          "cycles": "21-30",
          "entity": "HCA MEDICAL CENTER OF PLANO - (01123066) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -75.3999,
            40.0612
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "SURGERY CENTER OF THE MAIN LINE DEVON SQ - (01170430) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -86.7916,
            36.1504
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "HCA HEALTH SERVICES OF TENNESSEE INC - (00007047) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.0656,
            30.2077
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "LAFAYETTE GENERAL SOUTHWEST - (00018259) - SYSTEM 1E (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -93.7116,
            32.3912
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "Steris BI",
          "cycles": "11-20",
          "entity": "REGIONAL UROLOGY CLINIC - (00075476) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -83.465,
            42.291000000000004
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "100+",
          "entity": "SAINT JOSEPH MERCY CANTON HEALTH BUILDING - (01170163) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -98.1192,
            39.4416
          ],
          "type": "Point"
        },
        "properties": {
          "age": 10,
          "bi": "Cyclesure",
          "cycles": "1-10",
          "entity": "MITCHELL COUNTY HOSPITAL - (00003591) - SYSTEM 1E (3)",
          "qty": 3
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -93.18799999999999,
            30.2285
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "LAKE CHARLES MEMORIAL HOSPITAL - (00003620) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -122.4619,
            38.5138
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "SAINT HELENA HOSPITAL AND HEALTH CENTER - (00003885) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -115.5296,
            32.9792
          ],
          "type": "Point"
        },
        "properties": {
          "age": 11,
          "bi": "Steris BI",
          "cycles": "31-40",
          "entity": "PIONEERS MEMORIAL HOSPITAL - (00005738) - VPro 60 (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -76.8788,
            39.2141
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "HICKORY RIDGE AMBULATORY SURGERY CENTER - (00081065) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -106.6482,
            35.0818
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "41-50",
          "entity": "HEART HOSPITAL OF NEW MEXICO - (01029500) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -76.5927,
            39.2975
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "100+",
          "entity": "THE JOHNS HOPKINS HOSPITAL - (01113161) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.0656,
            30.2077
          ],
          "type": "Point"
        },
        "properties": {
          "age": 9,
          "bi": "3M BI",
          "cycles": "31-40",
          "entity": "UNIVERSITY HOSPITAL AND CLINICS INC - (00028473) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -75.9442,
            40.325
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "100+",
          "entity": "TOWER HEALTH - (01020196) - VPro MAX (4)",
          "qty": 4
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -104.7536,
            38.73
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "91-100",
          "entity": "FORT CARSON - (01081695) - VPro MAX (3)",
          "qty": 3
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -82.9698,
            40.8103
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "1-10",
          "entity": "BUCYRUS COMMUNITY HOSPITAL - (01153087) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -111.4051,
            40.4947
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "HEBER VALLEY MEDICAL CENTER - (00011701) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -135.3166,
            57.0514
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "SITKA COMMUNITY HOSPITAL - (00012376) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.1792,
            34.1566
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "3M BI",
          "cycles": "11-20",
          "entity": "MERCY HOSPITAL ARDMORE - (00074807) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -117.2738,
            33.5631
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Steris BI",
          "cycles": "61-70",
          "entity": "RANCHO SPRINGS MED CENTER - (01123721) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.9521,
            43.3231
          ],
          "type": "Point"
        },
        "properties": {
          "age": 9,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "AURORA MEDICAL CENTER GRAFTON - (01342819) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -106.6683,
            32.3244
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "MEMORIAL MEDICAL CENTER - (00008647) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -95.8841,
            36.0467
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "HILLCREST HOSPITAL SOUTH - (00070650) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -96.1572,
            31.7361
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "FAIRFIELD HOSPITAL DISTRICT - (00014473) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -85.9077,
            33.9845
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "GADSDEN REGIONAL MEDICAL CENTER - (00002977) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -83.1271,
            40.5876
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "51-60",
          "entity": "MARION GENERAL HOSPITAL - (00005065) - SYSTEM 1E (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -84.2854,
            46.4151
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "21-30",
          "entity": "CHIPPEWA COUNTY WAR MEMORIAL HOSPITAL - (00005174) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -155.0939,
            19.7025
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "HILO COMMUNITY SURGERY CENTER - (00301896) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -86.1797,
            39.8977
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "SAINT VINCENT WOMENS HOSPITAL - (01029365) - VPro MAX (3)",
          "qty": 3
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -82.4033,
            29.6456
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "SHANDS TEACHING HOSPITAL & CLINICS INC - (00020008) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -82.5618,
            36.5484
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "HOLSTON  VALLEY  HOSPITAL MED  CENTER - (00065324) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -83.2031,
            35.3481
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "41-50",
          "entity": "DLP HARRIS REGIONAL HOSPITAL - (01205395) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -93.8025,
            32.3977
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "WILLIS KNIGHTON SOUTH AND THE CENTER - (01414130) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -93.8025,
            32.3977
          ],
          "type": "Point"
        },
        "properties": {
          "age": 9,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "WILLIS KNIGHTON SOUTH AND THE CENTER - (01414130) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -99.6355,
            41.4126
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "JENNIE M MELHAM MEMORIAL MEDICAL CENTER - (00006624) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -84.3757,
            33.7718
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "100+",
          "entity": "EMORY UNIVERSITY HOSPITAL MIDTOWN - (00009247) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -86.0816,
            35.4958
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "21-30",
          "entity": "UNITY MEDICAL CENTER - (00011931) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -89.0886,
            30.4601
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "GARDEN PARK MEDICAL CENTER - (00072947) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -111.9167,
            33.4936
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "3M BI",
          "cycles": "41-50",
          "entity": "GREENBAUM SURGICAL SPECIALTY HOSPITAL - (00398398) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -119.264,
            46.156000000000006
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Steris BI",
          "cycles": "21-30",
          "entity": "TRIOS SOUTHRIDGE PHARMACY - (01339356) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -111.9167,
            33.4936
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "HONORHEALTH OSBORN - (00003761) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -112.3659,
            33.6856
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "41-50",
          "entity": "BANNER DEL E WEBB MEDICAL CENTER - (01125433) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -82.9844,
            30.2956
          ],
          "type": "Point"
        },
        "properties": {
          "age": 10,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "SHANDS LIVE OAK REGIONAL MEDICAL CENTER - (00012389) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -118.2987,
            33.7866
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "100+",
          "entity": "RONALAD REAGAN UCLA MEDICAL CENTER - (00170269) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -117.9503,
            33.7102
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "DOCTORS SURGERY CENTER - (00412423) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.8564,
            42.3247
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Cyclesure",
          "cycles": "21-30",
          "entity": "CAPTAIN JAMES A LOVELL FEDERAL HEALTH CENTER - (01156863) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -82.1971,
            35.2532
          ],
          "type": "Point"
        },
        "properties": {
          "age": 12,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "SAINT LUKES HOSPITAL INC - (00002853) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.6052,
            40.1728
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "THAYER COUNTY HEALTH SVCS - (00017799) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -118.4882,
            34.150999999999996
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "ENCINO SURGICAL MEDICAL CENTER - (00414614) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -83.7013,
            33.7883
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "3M BI",
          "cycles": "21-30",
          "entity": "PIEDMONT WALTON HOSPITAL - (01122173) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.656,
            34.8305
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "Cyclesure",
          "cycles": "51-60",
          "entity": "FLORENCE SURGERY CENTER - (01182458) - SYSTEM 1E (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -77.086,
            38.9381
          ],
          "type": "Point"
        },
        "properties": {
          "age": 9,
          "bi": "Velocity",
          "cycles": "21-30",
          "entity": "SIBLEY MEMORIAL HOSPITAL - (00002736) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -73.84100000000001,
            40.8465
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Velocity",
          "cycles": "21-30",
          "entity": "JACOBI MEDICAL CENTER - (00004381) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -87.7484,
            39.007
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Cyclesure",
          "cycles": "11-20",
          "entity": "CRAWFORD MEMORIAL HOSPITAL - (00005288) - SYSTEM 1E (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -94.2224,
            36.3577
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Velocity",
          "cycles": "Unknown",
          "entity": "NORTHWEST MEDICAL CENTER OF BENTONVILLE - (00009756) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.7946,
            41.0287
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "MONROE COUNTY HOSPITAL - (00012793) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -117.9503,
            33.7102
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "3M BI",
          "cycles": "1-10",
          "entity": "ORANGE COAST MEMORIAL MEDICAL CENTER - (00022000) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -74.4844,
            40.8897
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "PRIME HEALTHCARE SERVICES SAINT CLARE LLC - (01102356) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -93.1062,
            36.2417
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "3M BI",
          "cycles": "11-20",
          "entity": "NORTH ARKANSAS REGIONAL MEDICAL CENTER - (00005489) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -74.9243,
            42.7005
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Steris BI",
          "cycles": "21-30",
          "entity": "MARY IMOGENE BASSETT HOSPITAL - (00049806) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -122.3339,
            40.5486
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "REDDING OUTPATIENT CLINIC - (00063754) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.5017,
            35.4794
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "41-50",
          "entity": "OKLAHOMA UNIVERSITY MEDICAL CENTER - (00318267) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.11200000000001,
            37.7677
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "Steris BI",
          "cycles": "21-30",
          "entity": "GENERAL LEONARD WOOD ARMY COMMUNITY HOSPITAL - (01226002) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.3455,
            34.751
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "UNIVERSITY OF ARKANSAS - (00005484) - VPro (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -121.6596,
            36.6677
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "3M BI",
          "cycles": "100+",
          "entity": "SALINAS VALLEY MEMORIAL HOSPITAL - (00005778) - VPro (3)",
          "qty": 3
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -81.2061,
            37.7932
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Cyclesure",
          "cycles": "61-70",
          "entity": "APPALACHIAN REGIONAL HEALTHCARE INC - (00006026) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -88.3976,
            44.2773
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "Steris BI",
          "cycles": "91-100",
          "entity": "THEDACARE REGIONAL MEDICAL CENTER APPLETON - (00006394) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -90.4246,
            45.9363
          ],
          "type": "Point"
        },
        "properties": {
          "age": 10,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "FLAMBEAU HOSPITAL - (00009538) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -94.802,
            33.8851
          ],
          "type": "Point"
        },
        "properties": {
          "age": 18,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "MCCURTAIN MEMORIAL HOSPITAL - (00011757) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -91.9892,
            42.1743
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Cyclesure",
          "cycles": "1-10",
          "entity": "VIRGINIA GAY HOSPITAL - (00012506) - SYSTEM 1E (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -89.9706,
            38.7609
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "3M BI",
          "cycles": "31-40",
          "entity": "EDWARDSVILLE AMBULATORY SURGERY CENTER LLC - (00033495) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -95.7326,
            29.745
          ],
          "type": "Point"
        },
        "properties": {
          "age": 7,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "HOUSTON METHODIST SAINT CATHERINE HOSPITAL - (00073122) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -111.8749,
            40.7776
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "INTERMOUNTAIN AVENUES SPECIALTY CLINIC - (00332887) - ETO (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -93.3085,
            37.1668
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "FARRELL DUNCAN CLINIC - (00109789) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -93.633,
            41.603
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "MERCY MEDICAL CENTER DES MOINES - (01126101) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -82.2015,
            36.3445
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "MOUNTAIN STATES HEALTH ALLIANCE - (00004982) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -91.119,
            42.7594
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "GUTTENBERG MUNICIPAL HOSPITAL - (00011651) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -114.6424,
            32.7015
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "51-60",
          "entity": "YUMA REGIONAL MEDICAL CENTER - (00079506) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -114.6424,
            32.7015
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "51-60",
          "entity": "YUMA REGIONAL MEDICAL CENTER - (00079506) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -95.0383,
            46.9377
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "SAINT JOSEPHS HOSPITAL - (00134454) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -120.8046,
            38.7195
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "EL DORADO SURGERY CENTER - (00341203) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -93.7038,
            32.5449
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "51-60",
          "entity": "WILLIS KNIGHTON BOSSIER HEALTH SYSTEM - (00346968) - VPro MAX (3)",
          "qty": 3
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -73.4058,
            41.1323
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "Steris BI",
          "cycles": "21-30",
          "entity": "NORWALK SURGERY CENTER - (00367925) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -82.9244,
            42.3847
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "11-20",
          "entity": "BEAUMONT HOSPITAL GROSSE POINTE - (00003247) - VPro (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -105.4781,
            41.4247
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "UCHEALTH IVINSON MEMORIAL HOSPITAL - (00005664) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -118.2961,
            33.8925
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "MEMORIAL HOSPITAL OF GARDENA - (00008765) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.0236,
            30.1582
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "WOMENS AND CHILDRENS HOSPITAL - (00009722) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -80.2228,
            36.1024
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "51-60",
          "entity": "WAKE FOREST UNIVERSITY HTH SCIEN - (01159395) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.7472,
            30.1876
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "VA AUSTIN MEDICAL CENTER - (01296840) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.7472,
            30.1876
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Cyclesure",
          "cycles": "Unknown",
          "entity": "VA AUSTIN MEDICAL CENTER - (01296840) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -73.7299,
            41.205
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "51-60",
          "entity": "NORTHERN WESTCHESTER HOSPITAL - (00002516) - VPro MAX (3)",
          "qty": 3
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -72.7296,
            41.68600000000001
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "VA CONNECTICUT HEALTHCARE SYSTEM - (00008406) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -106.7099,
            35.324
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "UNM SANDOVAL REGIONAL MEDICAL CENTER - (01205462) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -89.3065,
            31.3146
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Steris BI",
          "cycles": "21-30",
          "entity": "HATTIESBURG CLINIC - (00042250) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -82.4599,
            42.9958
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "11-20",
          "entity": "LAKE HURON MEDICAL CENTER - (01331236) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -82.9895,
            39.338
          ],
          "type": "Point"
        },
        "properties": {
          "age": 11,
          "bi": "Cyclesure",
          "cycles": "61-70",
          "entity": "ADENA REGIONAL MEDICAL CENTER - (00003157) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -82.0131,
            33.4737
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "Steris BI",
          "cycles": "41-50",
          "entity": "UNIVERSITY HOSPITAL SUMMERVILLE - (00004110) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -71.3355,
            42.6493
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "LOWELL GENERAL HOSPITAL - (01073246) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -86.1989,
            43.1791
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "MUSKEGON SURGERY CENTER - (01122677) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.4388,
            35.411
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "OKLAHOMA HEART HOSPITAL SOUTH LLC - (01131000) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -78.6008,
            35.7667
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "11-20",
          "entity": "CAPITAL CITY SURGERY CENTER - (01210919) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -111.7321,
            40.0449
          ],
          "type": "Point"
        },
        "properties": {
          "age": 9,
          "bi": "3M BI",
          "cycles": "11-20",
          "entity": "MOUNTAIN VIEW HOSPITAL - (00006831) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -111.8867,
            33.6013
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Cyclesure",
          "cycles": "71-80",
          "entity": "HONORHEALTH SCOTTSDALE SHEA MEDICAL CENTER - (00076595) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -95.3208,
            29.5405
          ],
          "type": "Point"
        },
        "properties": {
          "age": 4,
          "bi": "3M BI",
          "cycles": "41-50",
          "entity": "PEARLAND MEDICAL CENTER - (01322208) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -105.09,
            40.4262
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "41-50",
          "entity": "MCKEE MEDICAL CENTER - (00006771) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -90.4942,
            41.5509
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Steris BI",
          "cycles": "11-20",
          "entity": "TRINITY AT TERRACE PARK - (00003309) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -91.2654,
            29.6977
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "TECHE REGIONAL MEDICAL CENTER - (00005393) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -83.3793,
            42.5424
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "51-60",
          "entity": "HENRY FORD HOSPITAL - (00009471) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -82.512,
            27.4678
          ],
          "type": "Point"
        },
        "properties": {
          "age": 15,
          "bi": "3M BI",
          "cycles": "81-90",
          "entity": "MANATEE MEMORIAL HOSPITAL - (00064903) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -90.2306,
            32.2832
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "Unknown",
          "entity": "MERIT HEALTH CENTRAL - (00278898) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -83.6336,
            42.2325
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "100+",
          "entity": "SAINT JOSEPHS MERCY HOSPITAL - (00505114) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -90.4683,
            38.5015
          ],
          "type": "Point"
        },
        "properties": {
          "age": 9,
          "bi": "3M BI",
          "cycles": "51-60",
          "entity": "SSM SAINT CLARE HEALTH CENTER - (01104836) - VPro 60 (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -84.5629,
            41.4748
          ],
          "type": "Point"
        },
        "properties": {
          "age": 18,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "COMMUNITY HOSPITAL WELLNESS CENTER - (00006242) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -98.4935,
            29.4388
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "Steris BI",
          "cycles": "100+",
          "entity": "METROPOLITAN METHODIST HOSPITAL - (00007091) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -76.1282,
            43.0354
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "CROUSE HOSPITAL - (00080729) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -116.2951,
            43.633
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "1-10",
          "entity": "TREASURE VALLEY HOSPITAL - (01195227) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -117.9321,
            33.621
          ],
          "type": "Point"
        },
        "properties": {
          "age": 5,
          "bi": "3M BI",
          "cycles": "1-10",
          "entity": "PRIME SURGICAL CENTER OF NEWPORT BEACH LLC - (01413465) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -119.288,
            46.2522
          ],
          "type": "Point"
        },
        "properties": {
          "age": 10,
          "bi": "Steris BI",
          "cycles": "51-60",
          "entity": "KADLEC REGIONAL MEDICAL CENTER - (00004008) - VPro (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -73.3607,
            42.1959
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "Steris BI",
          "cycles": "21-30",
          "entity": "FAIRVIEW HOSPITAL - (00007192) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -120.4325,
            34.9545
          ],
          "type": "Point"
        },
        "properties": {
          "age": 10,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "CYPRESS SURGERY CENTER - (00319897) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -118.2084,
            34.0487
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "3M BI",
          "cycles": "100+",
          "entity": "LA COUNTY USC MED CENTER - (01152554) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -92.0497,
            30.1843
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "11-20",
          "entity": "OIL CENTER SURGICAL PLAZA - (01339452) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -94.7495,
            39.0966
          ],
          "type": "Point"
        },
        "properties": {
          "age": 0,
          "bi": "3M BI",
          "cycles": "11-20",
          "entity": "UNIVERSITY OF KANSAS HOSPITAL - (00004175) - VPro MAX (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -96.1871,
            38.4184
          ],
          "type": "Point"
        },
        "properties": {
          "age": 6,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "NEWMAN REGIONAL HEALTH - (00006597) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -96.1871,
            38.4184
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "NEWMAN REGIONAL HEALTH - (00006597) - ETO (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -83.2792,
            42.6439
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "MCLAREN OAKLAND - (00059230) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -111.1199,
            43.7263
          ],
          "type": "Point"
        },
        "properties": {
          "age": 8,
          "bi": "Other BI",
          "cycles": "Unknown",
          "entity": "TETON VALLEY HOSPITAL - (00076707) - SYSTEM 1E (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -121.0113,
            37.6746
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "MCHENRY SURGERY CENTER - (00141428) - VPro 60 (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -122.3048,
            47.6564
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "3M BI",
          "cycles": "Unknown",
          "entity": "UNIVERSITY WASHINGTON MEDICAL CENTER EQUIPMENT - (00504718) - VPro (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -81.7574,
            28.5525
          ],
          "type": "Point"
        },
        "properties": {
          "age": 3,
          "bi": "Velocity",
          "cycles": "81-90",
          "entity": "SOUTH LAKE HOSPITAL - (01246818) - SYSTEM 1E (2)",
          "qty": 2
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.66799999999999,
            30.5145
          ],
          "type": "Point"
        },
        "properties": {
          "age": 2,
          "bi": "Steris BI",
          "cycles": "31-40",
          "entity": "SETON MEDICAL CENTER WILLIAMSON - (01280651) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      },
      {
        "geometry": {
          "coordinates": [
            -97.499,
            37.7149
          ],
          "type": "Point"
        },
        "properties": {
          "age": 1,
          "bi": "3M BI",
          "cycles": "11-20",
          "entity": "VIA CHRISTI HOSPITAL - (01369309) - VPro MAX (1)",
          "qty": 1
        },
        "type": "Feature"
      }
    ],
    "type": "FeatureCollection"
  }



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
    // We create a popup for each marker to display the info of each hospital
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
    // We create a popup for each marker to display the info of each hospital
     onEachFeature: function(feature, layer) {
    
                layer.bindPopup("<h3><strong>"+"Random Vendor"+"</h3></strong><br>" + "QTY: "+ feature.properties.qty+"<br>" + "AGE: "+ feature.properties.age+"<br>", {closeButton: false, offset: L.point(0, -20)});
                layer.on('mouseover', function() { layer.openPopup(); });
                layer.on('mouseout', function() { layer.closePopup(); });   
                
            }
   })
   var all = L.layerGroup([Age, Units]);

   var baseMaps = {
    
    "Age": Age,
    "Units": Units
    
  };


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

