var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_DarkMatter_1 = new ol.layer.Tile({
            'title': 'Dark Matter',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 4.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
            })
        });
var lyr_Costa_Rica_VIIRS_avg_rad_2026_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Costa_Rica_VIIRS_avg_rad_2026<br />\
    <img src="styles/legend/Costa_Rica_VIIRS_avg_rad_2026_2_0.png" /> 0 - Transparente<br />\
    <img src="styles/legend/Costa_Rica_VIIRS_avg_rad_2026_2_1.png" /> 0.10<br />\
    <img src="styles/legend/Costa_Rica_VIIRS_avg_rad_2026_2_2.png" /> 0.25<br />\
    <img src="styles/legend/Costa_Rica_VIIRS_avg_rad_2026_2_3.png" /> 0.50<br />\
    <img src="styles/legend/Costa_Rica_VIIRS_avg_rad_2026_2_4.png" /> 1<br />\
    <img src="styles/legend/Costa_Rica_VIIRS_avg_rad_2026_2_5.png" /> 2<br />\
    <img src="styles/legend/Costa_Rica_VIIRS_avg_rad_2026_2_6.png" /> 3.5<br />\
    <img src="styles/legend/Costa_Rica_VIIRS_avg_rad_2026_2_7.png" /> 5<br />\
    <img src="styles/legend/Costa_Rica_VIIRS_avg_rad_2026_2_8.png" /> 7.5<br />\
    <img src="styles/legend/Costa_Rica_VIIRS_avg_rad_2026_2_9.png" /> 10<br />\
    <img src="styles/legend/Costa_Rica_VIIRS_avg_rad_2026_2_10.png" /> 60 o más<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Costa_Rica_VIIRS_avg_rad_2026_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-9568500.000000, 897446.758668, -9189500.000000, 1257060.065525]
        })
    });

lyr_GoogleHybrid_0.setVisible(true);lyr_DarkMatter_1.setVisible(true);lyr_Costa_Rica_VIIRS_avg_rad_2026_2.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_DarkMatter_1,lyr_Costa_Rica_VIIRS_avg_rad_2026_2];
