var wms_layers = [];

var format_admin_0 = new ol.format.GeoJSON();
var features_admin_0 = format_admin_0.readFeatures(json_admin_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_admin_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_admin_0.addFeatures(features_admin_0);
var lyr_admin_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_admin_0, 
                style: style_admin_0,
                interactive: true,
                title: '<img src="styles/legend/admin_0.png" /> admin'
            });

lyr_admin_0.setVisible(true);
var layersList = [lyr_admin_0];
lyr_admin_0.set('fieldAliases', {'PROVINSI': 'PROVINSI', 'KODE_KAB': 'KODE_KAB', 'SHAPE_LENG': 'SHAPE_LENG', 'KODE_PROP': 'KODE_PROP', 'KABUPATEN': 'KABUPATEN', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'HECTARES': 'HECTARES', 'SHAPE_LE_1': 'SHAPE_LE_1', 'SHAPE_AREA': 'SHAPE_AREA', 'KECAMATAN': 'KECAMATAN', 'KODE_KEC': 'KODE_KEC', 'layer': 'layer', 'path': 'path', });
lyr_admin_0.set('fieldImages', {'PROVINSI': '', 'KODE_KAB': '', 'SHAPE_LENG': '', 'KODE_PROP': '', 'KABUPATEN': '', 'AREA': '', 'PERIMETER': '', 'HECTARES': '', 'SHAPE_LE_1': '', 'SHAPE_AREA': '', 'KECAMATAN': '', 'KODE_KEC': '', 'layer': '', 'path': '', });
lyr_admin_0.set('fieldLabels', {'PROVINSI': 'no label', 'KODE_KAB': 'no label', 'SHAPE_LENG': 'no label', 'KODE_PROP': 'no label', 'KABUPATEN': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'HECTARES': 'no label', 'SHAPE_LE_1': 'no label', 'SHAPE_AREA': 'no label', 'KECAMATAN': 'no label', 'KODE_KEC': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_admin_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});