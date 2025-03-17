ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:21818").setExtent([388975.323980, 1033868.291498, 389803.670905, 1034257.076468]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Zona_Verde_1 = new ol.format.GeoJSON();
var features_Zona_Verde_1 = format_Zona_Verde_1.readFeatures(json_Zona_Verde_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21818'});
var jsonSource_Zona_Verde_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zona_Verde_1.addFeatures(features_Zona_Verde_1);
var lyr_Zona_Verde_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zona_Verde_1, 
                style: style_Zona_Verde_1,
                popuplayertitle: 'Zona_Verde',
                interactive: true,
                title: '<img src="styles/legend/Zona_Verde_1.png" /> Zona_Verde'
            });
var format_Lotes_2 = new ol.format.GeoJSON();
var features_Lotes_2 = format_Lotes_2.readFeatures(json_Lotes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21818'});
var jsonSource_Lotes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lotes_2.addFeatures(features_Lotes_2);
var lyr_Lotes_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lotes_2, 
                style: style_Lotes_2,
                popuplayertitle: 'Lotes',
                interactive: true,
                title: '<img src="styles/legend/Lotes_2.png" /> Lotes'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Zona_Verde_1.setVisible(true);lyr_Lotes_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Zona_Verde_1,lyr_Lotes_2];
lyr_Zona_Verde_1.set('fieldAliases', {'id': 'id', 'Área': 'Área', 'Oficio': 'Oficio', });
lyr_Lotes_2.set('fieldAliases', {'id': 'id', 'Área': 'Área', 'Bloque': 'Bloque', });
lyr_Zona_Verde_1.set('fieldImages', {'id': 'TextEdit', 'Área': 'TextEdit', 'Oficio': 'TextEdit', });
lyr_Lotes_2.set('fieldImages', {'id': 'TextEdit', 'Área': 'TextEdit', 'Bloque': 'TextEdit', });
lyr_Zona_Verde_1.set('fieldLabels', {'id': 'hidden field', 'Área': 'inline label - always visible', 'Oficio': 'inline label - always visible', });
lyr_Lotes_2.set('fieldLabels', {'id': 'hidden field', 'Área': 'inline label - always visible', 'Bloque': 'inline label - always visible', });
lyr_Lotes_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});