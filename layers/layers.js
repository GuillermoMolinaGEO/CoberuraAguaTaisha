var wms_layers = [];

var format_Vias_ejes_0 = new ol.format.GeoJSON();
var features_Vias_ejes_0 = format_Vias_ejes_0.readFeatures(json_Vias_ejes_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vias_ejes_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vias_ejes_0.addFeatures(features_Vias_ejes_0);
var lyr_Vias_ejes_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vias_ejes_0, 
                style: style_Vias_ejes_0,
                interactive: true,
                title: '<img src="styles/legend/Vias_ejes_0.png" /> Vias_ejes'
            });
var format_Agua_red_publica_cobertura_1 = new ol.format.GeoJSON();
var features_Agua_red_publica_cobertura_1 = format_Agua_red_publica_cobertura_1.readFeatures(json_Agua_red_publica_cobertura_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Agua_red_publica_cobertura_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Agua_red_publica_cobertura_1.addFeatures(features_Agua_red_publica_cobertura_1);
var lyr_Agua_red_publica_cobertura_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Agua_red_publica_cobertura_1, 
                style: style_Agua_red_publica_cobertura_1,
                interactive: true,
                title: '<img src="styles/legend/Agua_red_publica_cobertura_1.png" /> Agua_red_publica_cobertura'
            });
var format_predios_completo_2 = new ol.format.GeoJSON();
var features_predios_completo_2 = format_predios_completo_2.readFeatures(json_predios_completo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_predios_completo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_predios_completo_2.addFeatures(features_predios_completo_2);
var lyr_predios_completo_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_predios_completo_2, 
                style: style_predios_completo_2,
                interactive: true,
                title: '<img src="styles/legend/predios_completo_2.png" /> predios_completo'
            });
var format_Franja_proteccion_3 = new ol.format.GeoJSON();
var features_Franja_proteccion_3 = format_Franja_proteccion_3.readFeatures(json_Franja_proteccion_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Franja_proteccion_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Franja_proteccion_3.addFeatures(features_Franja_proteccion_3);
var lyr_Franja_proteccion_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Franja_proteccion_3, 
                style: style_Franja_proteccion_3,
                interactive: true,
                title: '<img src="styles/legend/Franja_proteccion_3.png" /> Franja_proteccion'
            });
var format_Rio_l_4 = new ol.format.GeoJSON();
var features_Rio_l_4 = format_Rio_l_4.readFeatures(json_Rio_l_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rio_l_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rio_l_4.addFeatures(features_Rio_l_4);
var lyr_Rio_l_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rio_l_4, 
                style: style_Rio_l_4,
                interactive: true,
                title: '<img src="styles/legend/Rio_l_4.png" /> Rio_l'
            });
var format_Rio_a_5 = new ol.format.GeoJSON();
var features_Rio_a_5 = format_Rio_a_5.readFeatures(json_Rio_a_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rio_a_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rio_a_5.addFeatures(features_Rio_a_5);
var lyr_Rio_a_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rio_a_5, 
                style: style_Rio_a_5,
                interactive: true,
                title: '<img src="styles/legend/Rio_a_5.png" /> Rio_a'
            });
var format_Bloques_6 = new ol.format.GeoJSON();
var features_Bloques_6 = format_Bloques_6.readFeatures(json_Bloques_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bloques_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bloques_6.addFeatures(features_Bloques_6);
var lyr_Bloques_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bloques_6, 
                style: style_Bloques_6,
                interactive: true,
                title: '<img src="styles/legend/Bloques_6.png" /> Bloques'
            });
var format_Puntos_de_control_7 = new ol.format.GeoJSON();
var features_Puntos_de_control_7 = format_Puntos_de_control_7.readFeatures(json_Puntos_de_control_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntos_de_control_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntos_de_control_7.addFeatures(features_Puntos_de_control_7);
var lyr_Puntos_de_control_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Puntos_de_control_7, 
                style: style_Puntos_de_control_7,
                interactive: true,
                title: '<img src="styles/legend/Puntos_de_control_7.png" /> Puntos_de_control'
            });

lyr_Vias_ejes_0.setVisible(true);lyr_Agua_red_publica_cobertura_1.setVisible(true);lyr_predios_completo_2.setVisible(true);lyr_Franja_proteccion_3.setVisible(true);lyr_Rio_l_4.setVisible(true);lyr_Rio_a_5.setVisible(true);lyr_Bloques_6.setVisible(true);lyr_Puntos_de_control_7.setVisible(true);
var layersList = [lyr_Vias_ejes_0,lyr_Agua_red_publica_cobertura_1,lyr_predios_completo_2,lyr_Franja_proteccion_3,lyr_Rio_l_4,lyr_Rio_a_5,lyr_Bloques_6,lyr_Puntos_de_control_7];
lyr_Vias_ejes_0.set('fieldAliases', {'Id': 'Id', 'Nombre': 'Nombre', 'Rodadura': 'Rodadura', 'Tipo': 'Tipo', 'Agua': 'Agua', 'Alcantarr': 'Alcantarr', 'E_electric': 'E_electric', 'lenght': 'lenght', });
lyr_Agua_red_publica_cobertura_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_predios_completo_2.set('fieldAliases', {'p_area': 'p_area', 'Cod_unico': 'Cod_unico', 'p_perimetr': 'p_perimetr', 'area_prote': 'area_prote', 'Vtc': 'Vtc', 'Ft': 'Ft', 'Fot': 'Fot', 'TPT': 'TPT', 'Fa': 'Fa', 'Fx': 'Fx', 'COD': 'COD', 'calve_cata': 'calve_cata', });
lyr_Franja_proteccion_3.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'BUFF_DIST': 'BUFF_DIST', 'ORIG_FID': 'ORIG_FID', });
lyr_Rio_l_4.set('fieldAliases', {'Id': 'Id', });
lyr_Rio_a_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Bloques_6.set('fieldAliases', {'Pisos': 'Pisos', 'Cod_unico': 'Cod_unico', 'blo_cod': 'blo_cod', 'blo_area': 'blo_area', 'Clave_cata': 'Clave_cata', });
lyr_Puntos_de_control_7.set('fieldAliases', {'Cod': 'Cod', 'X': 'X', 'Y': 'Y', 'Z': 'Z', });
lyr_Vias_ejes_0.set('fieldImages', {'Id': 'TextEdit', 'Nombre': 'TextEdit', 'Rodadura': 'TextEdit', 'Tipo': 'TextEdit', 'Agua': 'TextEdit', 'Alcantarr': 'TextEdit', 'E_electric': 'TextEdit', 'lenght': 'TextEdit', });
lyr_Agua_red_publica_cobertura_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_predios_completo_2.set('fieldImages', {'p_area': 'TextEdit', 'Cod_unico': 'TextEdit', 'p_perimetr': 'TextEdit', 'area_prote': 'TextEdit', 'Vtc': 'TextEdit', 'Ft': 'TextEdit', 'Fot': 'TextEdit', 'TPT': 'TextEdit', 'Fa': 'TextEdit', 'Fx': 'TextEdit', 'COD': 'TextEdit', 'calve_cata': 'TextEdit', });
lyr_Franja_proteccion_3.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'BUFF_DIST': 'TextEdit', 'ORIG_FID': 'TextEdit', });
lyr_Rio_l_4.set('fieldImages', {'Id': 'TextEdit', });
lyr_Rio_a_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Bloques_6.set('fieldImages', {'Pisos': '', 'Cod_unico': '', 'blo_cod': '', 'blo_area': '', 'Clave_cata': '', });
lyr_Puntos_de_control_7.set('fieldImages', {'Cod': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Z': 'TextEdit', });
lyr_Vias_ejes_0.set('fieldLabels', {'Id': 'no label', 'Nombre': 'no label', 'Rodadura': 'no label', 'Tipo': 'no label', 'Agua': 'no label', 'Alcantarr': 'no label', 'E_electric': 'no label', 'lenght': 'no label', });
lyr_Agua_red_publica_cobertura_1.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_predios_completo_2.set('fieldLabels', {'p_area': 'no label', 'Cod_unico': 'no label', 'p_perimetr': 'no label', 'area_prote': 'no label', 'Vtc': 'no label', 'Ft': 'no label', 'Fot': 'no label', 'TPT': 'no label', 'Fa': 'no label', 'Fx': 'no label', 'COD': 'no label', 'calve_cata': 'no label', });
lyr_Franja_proteccion_3.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'BUFF_DIST': 'no label', 'ORIG_FID': 'no label', });
lyr_Rio_l_4.set('fieldLabels', {'Id': 'no label', });
lyr_Rio_a_5.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Bloques_6.set('fieldLabels', {'Pisos': 'no label', 'Cod_unico': 'no label', 'blo_cod': 'no label', 'blo_area': 'no label', 'Clave_cata': 'no label', });
lyr_Puntos_de_control_7.set('fieldLabels', {'Cod': 'no label', 'X': 'no label', 'Y': 'no label', 'Z': 'no label', });
lyr_Puntos_de_control_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});