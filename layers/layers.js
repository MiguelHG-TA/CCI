var wms_layers = [];


        var lyr_ESRIGraydark_0 = new ol.layer.Tile({
            'title': '',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_IDH_1 = new ol.format.GeoJSON();
var features_IDH_1 = format_IDH_1.readFeatures(json_IDH_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IDH_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IDH_1.addFeatures(features_IDH_1);
var lyr_IDH_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IDH_1, 
                style: style_IDH_1,
                popuplayertitle: "IDH",
                interactive: true,
    title: 'IDH<br />\
    <img src="styles/legend/IDH_1_1.png" /> BAJO<br />\
    <img src="styles/legend/IDH_1_2.png" /> MEDIO<br />\
    <img src="styles/legend/IDH_1_3.png" /> ALTO<br />\
    <img src="styles/legend/IDH_1_4.png" /> MUY ALTO<br />'
        });
var format_NMERODEDOCTORESPORCADA100000HAB_2 = new ol.format.GeoJSON();
var features_NMERODEDOCTORESPORCADA100000HAB_2 = format_NMERODEDOCTORESPORCADA100000HAB_2.readFeatures(json_NMERODEDOCTORESPORCADA100000HAB_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NMERODEDOCTORESPORCADA100000HAB_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NMERODEDOCTORESPORCADA100000HAB_2.addFeatures(features_NMERODEDOCTORESPORCADA100000HAB_2);
var lyr_NMERODEDOCTORESPORCADA100000HAB_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NMERODEDOCTORESPORCADA100000HAB_2, 
                style: style_NMERODEDOCTORESPORCADA100000HAB_2,
                popuplayertitle: "NÚMERO DE DOCTORES POR CADA 100000 HAB",
                interactive: true,
    title: 'NÚMERO DE DOCTORES POR CADA 100000 HAB<br />\
    <img src="styles/legend/NMERODEDOCTORESPORCADA100000HAB_2_0.png" /> 0 - 5<br />\
    <img src="styles/legend/NMERODEDOCTORESPORCADA100000HAB_2_1.png" /> 5 - 10<br />\
    <img src="styles/legend/NMERODEDOCTORESPORCADA100000HAB_2_2.png" /> 10 - 15<br />\
    <img src="styles/legend/NMERODEDOCTORESPORCADA100000HAB_2_3.png" /> 15 - 20<br />\
    <img src="styles/legend/NMERODEDOCTORESPORCADA100000HAB_2_4.png" /> 20 - 25<br />\
    <img src="styles/legend/NMERODEDOCTORESPORCADA100000HAB_2_5.png" /> 25 - 30<br />\
    <img src="styles/legend/NMERODEDOCTORESPORCADA100000HAB_2_6.png" /> 30 - 35<br />\
    <img src="styles/legend/NMERODEDOCTORESPORCADA100000HAB_2_7.png" /> 35 - 40<br />'
        });
var format_NDICEDEENFERMEDADESZOONOTICAS_3 = new ol.format.GeoJSON();
var features_NDICEDEENFERMEDADESZOONOTICAS_3 = format_NDICEDEENFERMEDADESZOONOTICAS_3.readFeatures(json_NDICEDEENFERMEDADESZOONOTICAS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NDICEDEENFERMEDADESZOONOTICAS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NDICEDEENFERMEDADESZOONOTICAS_3.addFeatures(features_NDICEDEENFERMEDADESZOONOTICAS_3);
var lyr_NDICEDEENFERMEDADESZOONOTICAS_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NDICEDEENFERMEDADESZOONOTICAS_3, 
                style: style_NDICEDEENFERMEDADESZOONOTICAS_3,
                popuplayertitle: "ÍNDICE DE ENFERMEDADES ZOONOTICAS",
                interactive: true,
    title: 'ÍNDICE DE ENFERMEDADES ZOONOTICAS<br />\
    <img src="styles/legend/NDICEDEENFERMEDADESZOONOTICAS_3_0.png" /> 0 - 20<br />\
    <img src="styles/legend/NDICEDEENFERMEDADESZOONOTICAS_3_1.png" /> 20 - 40<br />\
    <img src="styles/legend/NDICEDEENFERMEDADESZOONOTICAS_3_2.png" /> 40 - 60<br />\
    <img src="styles/legend/NDICEDEENFERMEDADESZOONOTICAS_3_3.png" /> 60 - 80<br />\
    <img src="styles/legend/NDICEDEENFERMEDADESZOONOTICAS_3_4.png" /> 80 - 100<br />'
        });
var format_NDICEDEBIOSEGURIDAD_4 = new ol.format.GeoJSON();
var features_NDICEDEBIOSEGURIDAD_4 = format_NDICEDEBIOSEGURIDAD_4.readFeatures(json_NDICEDEBIOSEGURIDAD_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NDICEDEBIOSEGURIDAD_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NDICEDEBIOSEGURIDAD_4.addFeatures(features_NDICEDEBIOSEGURIDAD_4);
var lyr_NDICEDEBIOSEGURIDAD_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NDICEDEBIOSEGURIDAD_4, 
                style: style_NDICEDEBIOSEGURIDAD_4,
                popuplayertitle: "ÍNDICE DE BIOSEGURIDAD",
                interactive: true,
    title: 'ÍNDICE DE BIOSEGURIDAD<br />\
    <img src="styles/legend/NDICEDEBIOSEGURIDAD_4_0.png" /> 0 - 10<br />\
    <img src="styles/legend/NDICEDEBIOSEGURIDAD_4_1.png" /> 10 - 20<br />\
    <img src="styles/legend/NDICEDEBIOSEGURIDAD_4_2.png" /> 20 - 30<br />\
    <img src="styles/legend/NDICEDEBIOSEGURIDAD_4_3.png" /> 30 - 40<br />\
    <img src="styles/legend/NDICEDEBIOSEGURIDAD_4_4.png" /> 40 - 50<br />\
    <img src="styles/legend/NDICEDEBIOSEGURIDAD_4_5.png" /> 50 - 60<br />\
    <img src="styles/legend/NDICEDEBIOSEGURIDAD_4_6.png" /> 60 - 70<br />'
        });
var format_CAPACIDADDELABORATORIOSNACIONALESPARAPRUEBASDEPATGENOSPRIORITARIOSAMR_5 = new ol.format.GeoJSON();
var features_CAPACIDADDELABORATORIOSNACIONALESPARAPRUEBASDEPATGENOSPRIORITARIOSAMR_5 = format_CAPACIDADDELABORATORIOSNACIONALESPARAPRUEBASDEPATGENOSPRIORITARIOSAMR_5.readFeatures(json_CAPACIDADDELABORATORIOSNACIONALESPARAPRUEBASDEPATGENOSPRIORITARIOSAMR_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CAPACIDADDELABORATORIOSNACIONALESPARAPRUEBASDEPATGENOSPRIORITARIOSAMR_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAPACIDADDELABORATORIOSNACIONALESPARAPRUEBASDEPATGENOSPRIORITARIOSAMR_5.addFeatures(features_CAPACIDADDELABORATORIOSNACIONALESPARAPRUEBASDEPATGENOSPRIORITARIOSAMR_5);
var lyr_CAPACIDADDELABORATORIOSNACIONALESPARAPRUEBASDEPATGENOSPRIORITARIOSAMR_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CAPACIDADDELABORATORIOSNACIONALESPARAPRUEBASDEPATGENOSPRIORITARIOSAMR_5, 
                style: style_CAPACIDADDELABORATORIOSNACIONALESPARAPRUEBASDEPATGENOSPRIORITARIOSAMR_5,
                popuplayertitle: "CAPACIDAD DE LABORATORIOS NACIONALES PARA PRUEBAS DE PATÓGENOS PRIORITARIOS (AMR)",
                interactive: true,
    title: 'CAPACIDAD DE LABORATORIOS NACIONALES PARA PRUEBAS DE PATÓGENOS PRIORITARIOS (AMR)<br />\
    <img src="styles/legend/CAPACIDADDELABORATORIOSNACIONALESPARAPRUEBASDEPATGENOSPRIORITARIOSAMR_5_0.png" /> MALA<br />\
    <img src="styles/legend/CAPACIDADDELABORATORIOSNACIONALESPARAPRUEBASDEPATGENOSPRIORITARIOSAMR_5_1.png" /> MEDIA<br />\
    <img src="styles/legend/CAPACIDADDELABORATORIOSNACIONALESPARAPRUEBASDEPATGENOSPRIORITARIOSAMR_5_2.png" /> BUENA<br />'
        });
var format_PRESCRIPCINREQUERIDAPARAANNTIMICROBIANOS_6 = new ol.format.GeoJSON();
var features_PRESCRIPCINREQUERIDAPARAANNTIMICROBIANOS_6 = format_PRESCRIPCINREQUERIDAPARAANNTIMICROBIANOS_6.readFeatures(json_PRESCRIPCINREQUERIDAPARAANNTIMICROBIANOS_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PRESCRIPCINREQUERIDAPARAANNTIMICROBIANOS_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PRESCRIPCINREQUERIDAPARAANNTIMICROBIANOS_6.addFeatures(features_PRESCRIPCINREQUERIDAPARAANNTIMICROBIANOS_6);
var lyr_PRESCRIPCINREQUERIDAPARAANNTIMICROBIANOS_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PRESCRIPCINREQUERIDAPARAANNTIMICROBIANOS_6, 
                style: style_PRESCRIPCINREQUERIDAPARAANNTIMICROBIANOS_6,
                popuplayertitle: "PRESCRIPCIÓN REQUERIDA PARA ANNTIMICROBIANOS",
                interactive: true,
    title: 'PRESCRIPCIÓN REQUERIDA PARA ANNTIMICROBIANOS<br />\
    <img src="styles/legend/PRESCRIPCINREQUERIDAPARAANNTIMICROBIANOS_6_0.png" /> NO<br />\
    <img src="styles/legend/PRESCRIPCINREQUERIDAPARAANNTIMICROBIANOS_6_1.png" /> SÍ<br />'
        });
var format_CONTROLANTIMICROBIANO_7 = new ol.format.GeoJSON();
var features_CONTROLANTIMICROBIANO_7 = format_CONTROLANTIMICROBIANO_7.readFeatures(json_CONTROLANTIMICROBIANO_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CONTROLANTIMICROBIANO_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONTROLANTIMICROBIANO_7.addFeatures(features_CONTROLANTIMICROBIANO_7);
var lyr_CONTROLANTIMICROBIANO_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONTROLANTIMICROBIANO_7, 
                style: style_CONTROLANTIMICROBIANO_7,
                popuplayertitle: "CONTROL ANTIMICROBIANO",
                interactive: true,
    title: 'CONTROL ANTIMICROBIANO<br />\
    <img src="styles/legend/CONTROLANTIMICROBIANO_7_0.png" /> NO<br />\
    <img src="styles/legend/CONTROLANTIMICROBIANO_7_1.png" /> MEDIO<br />\
    <img src="styles/legend/CONTROLANTIMICROBIANO_7_2.png" /> SÍ<br />'
        });
var format_PLANNACIONALDEDETECCINDEPATGENOSPRIOROTARIOSAMR_8 = new ol.format.GeoJSON();
var features_PLANNACIONALDEDETECCINDEPATGENOSPRIOROTARIOSAMR_8 = format_PLANNACIONALDEDETECCINDEPATGENOSPRIOROTARIOSAMR_8.readFeatures(json_PLANNACIONALDEDETECCINDEPATGENOSPRIOROTARIOSAMR_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLANNACIONALDEDETECCINDEPATGENOSPRIOROTARIOSAMR_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLANNACIONALDEDETECCINDEPATGENOSPRIOROTARIOSAMR_8.addFeatures(features_PLANNACIONALDEDETECCINDEPATGENOSPRIOROTARIOSAMR_8);
var lyr_PLANNACIONALDEDETECCINDEPATGENOSPRIOROTARIOSAMR_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLANNACIONALDEDETECCINDEPATGENOSPRIOROTARIOSAMR_8, 
                style: style_PLANNACIONALDEDETECCINDEPATGENOSPRIOROTARIOSAMR_8,
                popuplayertitle: "PLAN NACIONAL DE DETECCIÓN DE PATÓGENOS PRIOROTARIOS (AMR)",
                interactive: true,
    title: 'PLAN NACIONAL DE DETECCIÓN DE PATÓGENOS PRIOROTARIOS (AMR)<br />\
    <img src="styles/legend/PLANNACIONALDEDETECCINDEPATGENOSPRIOROTARIOSAMR_8_0.png" /> NO<br />\
    <img src="styles/legend/PLANNACIONALDEDETECCINDEPATGENOSPRIOROTARIOSAMR_8_1.png" /> MEDIO<br />\
    <img src="styles/legend/PLANNACIONALDEDETECCINDEPATGENOSPRIOROTARIOSAMR_8_2.png" /> SÍ<br />'
        });
var format_NDICERESISTENCIAANTIMICROBIANAAMR_9 = new ol.format.GeoJSON();
var features_NDICERESISTENCIAANTIMICROBIANAAMR_9 = format_NDICERESISTENCIAANTIMICROBIANAAMR_9.readFeatures(json_NDICERESISTENCIAANTIMICROBIANAAMR_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NDICERESISTENCIAANTIMICROBIANAAMR_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NDICERESISTENCIAANTIMICROBIANAAMR_9.addFeatures(features_NDICERESISTENCIAANTIMICROBIANAAMR_9);
var lyr_NDICERESISTENCIAANTIMICROBIANAAMR_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NDICERESISTENCIAANTIMICROBIANAAMR_9, 
                style: style_NDICERESISTENCIAANTIMICROBIANAAMR_9,
                popuplayertitle: "ÍNDICE RESISTENCIA ANTIMICROBIANA (AMR)",
                interactive: true,
    title: 'ÍNDICE RESISTENCIA ANTIMICROBIANA (AMR)<br />\
    <img src="styles/legend/NDICERESISTENCIAANTIMICROBIANAAMR_9_0.png" /> 0 - 0<br />\
    <img src="styles/legend/NDICERESISTENCIAANTIMICROBIANAAMR_9_1.png" /> 0 - 20<br />\
    <img src="styles/legend/NDICERESISTENCIAANTIMICROBIANAAMR_9_2.png" /> 20 - 40<br />\
    <img src="styles/legend/NDICERESISTENCIAANTIMICROBIANAAMR_9_3.png" /> 40 - 60<br />\
    <img src="styles/legend/NDICERESISTENCIAANTIMICROBIANAAMR_9_4.png" /> 60 - 80<br />\
    <img src="styles/legend/NDICERESISTENCIAANTIMICROBIANAAMR_9_5.png" /> 80 - 100<br />'
        });
var format_AMRDETECCINYREPORTE_10 = new ol.format.GeoJSON();
var features_AMRDETECCINYREPORTE_10 = format_AMRDETECCINYREPORTE_10.readFeatures(json_AMRDETECCINYREPORTE_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AMRDETECCINYREPORTE_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AMRDETECCINYREPORTE_10.addFeatures(features_AMRDETECCINYREPORTE_10);
var lyr_AMRDETECCINYREPORTE_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AMRDETECCINYREPORTE_10, 
                style: style_AMRDETECCINYREPORTE_10,
                popuplayertitle: "(AMR)  DETECCIÓN Y REPORTE",
                interactive: true,
    title: '(AMR)  DETECCIÓN Y REPORTE<br />\
    <img src="styles/legend/AMRDETECCINYREPORTE_10_0.png" /> 0 - 0<br />\
    <img src="styles/legend/AMRDETECCINYREPORTE_10_1.png" /> 0 - 10<br />\
    <img src="styles/legend/AMRDETECCINYREPORTE_10_2.png" /> 10 - 15<br />\
    <img src="styles/legend/AMRDETECCINYREPORTE_10_3.png" /> 15 - 33<br />\
    <img src="styles/legend/AMRDETECCINYREPORTE_10_4.png" /> 33 - 100<br />'
        });
var format_DENSIDADDEPOBLACINHABKM2_11 = new ol.format.GeoJSON();
var features_DENSIDADDEPOBLACINHABKM2_11 = format_DENSIDADDEPOBLACINHABKM2_11.readFeatures(json_DENSIDADDEPOBLACINHABKM2_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DENSIDADDEPOBLACINHABKM2_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DENSIDADDEPOBLACINHABKM2_11.addFeatures(features_DENSIDADDEPOBLACINHABKM2_11);
var lyr_DENSIDADDEPOBLACINHABKM2_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DENSIDADDEPOBLACINHABKM2_11, 
                style: style_DENSIDADDEPOBLACINHABKM2_11,
                popuplayertitle: "DENSIDAD DE POBLACIÓN HAB/KM^2",
                interactive: true,
    title: 'DENSIDAD DE POBLACIÓN HAB/KM^2<br />\
    <img src="styles/legend/DENSIDADDEPOBLACINHABKM2_11_0.png" /> SIN DATOS<br />\
    <img src="styles/legend/DENSIDADDEPOBLACINHABKM2_11_1.png" /> 0 - 5<br />\
    <img src="styles/legend/DENSIDADDEPOBLACINHABKM2_11_2.png" /> 5 - 18<br />\
    <img src="styles/legend/DENSIDADDEPOBLACINHABKM2_11_3.png" /> 18 - 68<br />\
    <img src="styles/legend/DENSIDADDEPOBLACINHABKM2_11_4.png" /> 68 - 410<br />'
        });
var format_PUNTUACINGENERALDESALUDGHSI_12 = new ol.format.GeoJSON();
var features_PUNTUACINGENERALDESALUDGHSI_12 = format_PUNTUACINGENERALDESALUDGHSI_12.readFeatures(json_PUNTUACINGENERALDESALUDGHSI_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUNTUACINGENERALDESALUDGHSI_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUNTUACINGENERALDESALUDGHSI_12.addFeatures(features_PUNTUACINGENERALDESALUDGHSI_12);
var lyr_PUNTUACINGENERALDESALUDGHSI_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUNTUACINGENERALDESALUDGHSI_12, 
                style: style_PUNTUACINGENERALDESALUDGHSI_12,
                popuplayertitle: "PUNTUACIÓN GENERAL DE SALUD GHSI",
                interactive: true,
    title: 'PUNTUACIÓN GENERAL DE SALUD GHSI<br />\
    <img src="styles/legend/PUNTUACINGENERALDESALUDGHSI_12_0.png" /> 0 - 10<br />\
    <img src="styles/legend/PUNTUACINGENERALDESALUDGHSI_12_1.png" /> 10 - 20<br />\
    <img src="styles/legend/PUNTUACINGENERALDESALUDGHSI_12_2.png" /> 20 - 30<br />\
    <img src="styles/legend/PUNTUACINGENERALDESALUDGHSI_12_3.png" /> 30 - 40<br />\
    <img src="styles/legend/PUNTUACINGENERALDESALUDGHSI_12_4.png" /> 40 - 50<br />\
    <img src="styles/legend/PUNTUACINGENERALDESALUDGHSI_12_5.png" /> 50 - 60<br />\
    <img src="styles/legend/PUNTUACINGENERALDESALUDGHSI_12_6.png" /> 60 - 70<br />\
    <img src="styles/legend/PUNTUACINGENERALDESALUDGHSI_12_7.png" /> 70 - 80<br />\
    <img src="styles/legend/PUNTUACINGENERALDESALUDGHSI_12_8.png" /> 80 - 90<br />\
    <img src="styles/legend/PUNTUACINGENERALDESALUDGHSI_12_9.png" /> 90 - 100<br />'
        });
var format_DECASOSCONRESISTENCIA_13 = new ol.format.GeoJSON();
var features_DECASOSCONRESISTENCIA_13 = format_DECASOSCONRESISTENCIA_13.readFeatures(json_DECASOSCONRESISTENCIA_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DECASOSCONRESISTENCIA_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DECASOSCONRESISTENCIA_13.addFeatures(features_DECASOSCONRESISTENCIA_13);
var lyr_DECASOSCONRESISTENCIA_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DECASOSCONRESISTENCIA_13, 
                style: style_DECASOSCONRESISTENCIA_13,
                popuplayertitle: "% DE CASOS CON RESISTENCIA",
                interactive: true,
    title: '% DE CASOS CON RESISTENCIA<br />\
  '
        });
var format_CASOSREPORTADOS_14 = new ol.format.GeoJSON();
var features_CASOSREPORTADOS_14 = format_CASOSREPORTADOS_14.readFeatures(json_CASOSREPORTADOS_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CASOSREPORTADOS_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CASOSREPORTADOS_14.addFeatures(features_CASOSREPORTADOS_14);
var lyr_CASOSREPORTADOS_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CASOSREPORTADOS_14, 
                style: style_CASOSREPORTADOS_14,
                popuplayertitle: "CASOS REPORTADOS",
                interactive: true,
    title: 'CASOS REPORTADOS<br />\
  '
        });
var format_DECASOSCONRESISTENCIA_15 = new ol.format.GeoJSON();
var features_DECASOSCONRESISTENCIA_15 = format_DECASOSCONRESISTENCIA_15.readFeatures(json_DECASOSCONRESISTENCIA_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DECASOSCONRESISTENCIA_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DECASOSCONRESISTENCIA_15.addFeatures(features_DECASOSCONRESISTENCIA_15);
var lyr_DECASOSCONRESISTENCIA_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DECASOSCONRESISTENCIA_15, 
                style: style_DECASOSCONRESISTENCIA_15,
                popuplayertitle: "% DE CASOS CON RESISTENCIA",
                interactive: true,
    title: '% DE CASOS CON RESISTENCIA<br />\
 '
        });
var format_CASOSREPORTADOS_16 = new ol.format.GeoJSON();
var features_CASOSREPORTADOS_16 = format_CASOSREPORTADOS_16.readFeatures(json_CASOSREPORTADOS_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CASOSREPORTADOS_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CASOSREPORTADOS_16.addFeatures(features_CASOSREPORTADOS_16);
var lyr_CASOSREPORTADOS_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CASOSREPORTADOS_16, 
                style: style_CASOSREPORTADOS_16,
                popuplayertitle: "CASOS REPORTADOS",
                interactive: true,
    title: 'CASOS REPORTADOS<br />\
  '
        });
var format_DECASOSCONRESISTENCIA_17 = new ol.format.GeoJSON();
var features_DECASOSCONRESISTENCIA_17 = format_DECASOSCONRESISTENCIA_17.readFeatures(json_DECASOSCONRESISTENCIA_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DECASOSCONRESISTENCIA_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DECASOSCONRESISTENCIA_17.addFeatures(features_DECASOSCONRESISTENCIA_17);
var lyr_DECASOSCONRESISTENCIA_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DECASOSCONRESISTENCIA_17, 
                style: style_DECASOSCONRESISTENCIA_17,
                popuplayertitle: "% DE CASOS CON RESISTENCIA",
                interactive: true,
    title: '% DE CASOS CON RESISTENCIA<br />\
  '
        });
var format_CASOSREPORTADOS_18 = new ol.format.GeoJSON();
var features_CASOSREPORTADOS_18 = format_CASOSREPORTADOS_18.readFeatures(json_CASOSREPORTADOS_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CASOSREPORTADOS_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CASOSREPORTADOS_18.addFeatures(features_CASOSREPORTADOS_18);
var lyr_CASOSREPORTADOS_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CASOSREPORTADOS_18, 
                style: style_CASOSREPORTADOS_18,
                popuplayertitle: "CASOS REPORTADOS",
                interactive: true,
    title: 'CASOS REPORTADOS<br />\
 '
        });
var format_DECASOSCONRESISTENCIA_19 = new ol.format.GeoJSON();
var features_DECASOSCONRESISTENCIA_19 = format_DECASOSCONRESISTENCIA_19.readFeatures(json_DECASOSCONRESISTENCIA_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DECASOSCONRESISTENCIA_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DECASOSCONRESISTENCIA_19.addFeatures(features_DECASOSCONRESISTENCIA_19);
var lyr_DECASOSCONRESISTENCIA_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DECASOSCONRESISTENCIA_19, 
                style: style_DECASOSCONRESISTENCIA_19,
                popuplayertitle: "% DE CASOS CON RESISTENCIA",
                interactive: true,
    title: '% DE CASOS CON RESISTENCIA<br />\
  '
        });
var format_CASOSREPORTADOS_20 = new ol.format.GeoJSON();
var features_CASOSREPORTADOS_20 = format_CASOSREPORTADOS_20.readFeatures(json_CASOSREPORTADOS_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CASOSREPORTADOS_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CASOSREPORTADOS_20.addFeatures(features_CASOSREPORTADOS_20);
var lyr_CASOSREPORTADOS_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CASOSREPORTADOS_20, 
                style: style_CASOSREPORTADOS_20,
                popuplayertitle: "CASOS REPORTADOS",
                interactive: true,
    title: 'CASOS REPORTADOS<br />\
  '
        });
var format_DECASOSCONRESISTENCIA_21 = new ol.format.GeoJSON();
var features_DECASOSCONRESISTENCIA_21 = format_DECASOSCONRESISTENCIA_21.readFeatures(json_DECASOSCONRESISTENCIA_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DECASOSCONRESISTENCIA_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DECASOSCONRESISTENCIA_21.addFeatures(features_DECASOSCONRESISTENCIA_21);
var lyr_DECASOSCONRESISTENCIA_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DECASOSCONRESISTENCIA_21, 
                style: style_DECASOSCONRESISTENCIA_21,
                popuplayertitle: "% DE CASOS CON RESISTENCIA",
                interactive: true,
    title: '% DE CASOS CON RESISTENCIA<br />\
 '
        });
var format_CASOSREPORTADOS_22 = new ol.format.GeoJSON();
var features_CASOSREPORTADOS_22 = format_CASOSREPORTADOS_22.readFeatures(json_CASOSREPORTADOS_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CASOSREPORTADOS_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CASOSREPORTADOS_22.addFeatures(features_CASOSREPORTADOS_22);
var lyr_CASOSREPORTADOS_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CASOSREPORTADOS_22, 
                style: style_CASOSREPORTADOS_22,
                popuplayertitle: "CASOS REPORTADOS",
                interactive: true,
    title: 'CASOS REPORTADOS<br />\
 '
        });
var format_DECASOSCONRESISTENCIA_23 = new ol.format.GeoJSON();
var features_DECASOSCONRESISTENCIA_23 = format_DECASOSCONRESISTENCIA_23.readFeatures(json_DECASOSCONRESISTENCIA_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DECASOSCONRESISTENCIA_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DECASOSCONRESISTENCIA_23.addFeatures(features_DECASOSCONRESISTENCIA_23);
var lyr_DECASOSCONRESISTENCIA_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DECASOSCONRESISTENCIA_23, 
                style: style_DECASOSCONRESISTENCIA_23,
                popuplayertitle: "% DE CASOS CON RESISTENCIA",
                interactive: true,
    title: '% DE CASOS CON RESISTENCIA<br />\
 '
        });
var format_CASOSREPORTADOS_24 = new ol.format.GeoJSON();
var features_CASOSREPORTADOS_24 = format_CASOSREPORTADOS_24.readFeatures(json_CASOSREPORTADOS_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CASOSREPORTADOS_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CASOSREPORTADOS_24.addFeatures(features_CASOSREPORTADOS_24);
var lyr_CASOSREPORTADOS_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CASOSREPORTADOS_24, 
                style: style_CASOSREPORTADOS_24,
                popuplayertitle: "CASOS REPORTADOS",
                interactive: true,
    title: 'CASOS REPORTADOS<br />\
   '
        });
var format_DECASOSCONRESISTENCIA_25 = new ol.format.GeoJSON();
var features_DECASOSCONRESISTENCIA_25 = format_DECASOSCONRESISTENCIA_25.readFeatures(json_DECASOSCONRESISTENCIA_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DECASOSCONRESISTENCIA_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DECASOSCONRESISTENCIA_25.addFeatures(features_DECASOSCONRESISTENCIA_25);
var lyr_DECASOSCONRESISTENCIA_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DECASOSCONRESISTENCIA_25, 
                style: style_DECASOSCONRESISTENCIA_25,
                popuplayertitle: "% DE CASOS CON RESISTENCIA",
                interactive: true,
    title: '% DE CASOS CON RESISTENCIA<br />\
   '
        });
var format_CASOSREPORTADOS_26 = new ol.format.GeoJSON();
var features_CASOSREPORTADOS_26 = format_CASOSREPORTADOS_26.readFeatures(json_CASOSREPORTADOS_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CASOSREPORTADOS_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CASOSREPORTADOS_26.addFeatures(features_CASOSREPORTADOS_26);
var lyr_CASOSREPORTADOS_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CASOSREPORTADOS_26, 
                style: style_CASOSREPORTADOS_26,
                popuplayertitle: "CASOS REPORTADOS",
                interactive: true,
    title: 'CASOS REPORTADOS<br />\
  '
        });
var format_DECASOSCONRESISTENCIA_27 = new ol.format.GeoJSON();
var features_DECASOSCONRESISTENCIA_27 = format_DECASOSCONRESISTENCIA_27.readFeatures(json_DECASOSCONRESISTENCIA_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DECASOSCONRESISTENCIA_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DECASOSCONRESISTENCIA_27.addFeatures(features_DECASOSCONRESISTENCIA_27);
var lyr_DECASOSCONRESISTENCIA_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DECASOSCONRESISTENCIA_27, 
                style: style_DECASOSCONRESISTENCIA_27,
                popuplayertitle: "% DE CASOS CON RESISTENCIA",
                interactive: true,
    title: '% DE CASOS CON RESISTENCIA<br />\
   '
        });
var format_CASOSREPORTADOS_28 = new ol.format.GeoJSON();
var features_CASOSREPORTADOS_28 = format_CASOSREPORTADOS_28.readFeatures(json_CASOSREPORTADOS_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CASOSREPORTADOS_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CASOSREPORTADOS_28.addFeatures(features_CASOSREPORTADOS_28);
var lyr_CASOSREPORTADOS_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CASOSREPORTADOS_28, 
                style: style_CASOSREPORTADOS_28,
                popuplayertitle: "CASOS REPORTADOS",
                interactive: true,
    title: 'CASOS REPORTADOS<br />\
  '
        });
var format_DECASOSCONRESISTENCIA_29 = new ol.format.GeoJSON();
var features_DECASOSCONRESISTENCIA_29 = format_DECASOSCONRESISTENCIA_29.readFeatures(json_DECASOSCONRESISTENCIA_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DECASOSCONRESISTENCIA_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DECASOSCONRESISTENCIA_29.addFeatures(features_DECASOSCONRESISTENCIA_29);
var lyr_DECASOSCONRESISTENCIA_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DECASOSCONRESISTENCIA_29, 
                style: style_DECASOSCONRESISTENCIA_29,
                popuplayertitle: "% DE CASOS CON RESISTENCIA",
                interactive: true,
    title: '% DE CASOS CON RESISTENCIA<br />\
  '
        });
var format_CASOSREPORTADOS_30 = new ol.format.GeoJSON();
var features_CASOSREPORTADOS_30 = format_CASOSREPORTADOS_30.readFeatures(json_CASOSREPORTADOS_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CASOSREPORTADOS_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CASOSREPORTADOS_30.addFeatures(features_CASOSREPORTADOS_30);
var lyr_CASOSREPORTADOS_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CASOSREPORTADOS_30, 
                style: style_CASOSREPORTADOS_30,
                popuplayertitle: "CASOS REPORTADOS",
                interactive: true,
    title: 'CASOS REPORTADOS<br />\
    '
        });
var group_Acinetobacterbaumannii = new ol.layer.Group({
                                layers: [lyr_DECASOSCONRESISTENCIA_29,lyr_CASOSREPORTADOS_30,],
                                fold: "close",
                                title: "<i>Acinetobacter baumannii</i>"});
var group_Escherichiacoli = new ol.layer.Group({
                                layers: [lyr_DECASOSCONRESISTENCIA_27,lyr_CASOSREPORTADOS_28,],
                                fold: "close",
                                title: "<i>Escherichia coli</i>"});
var group_Klebsiellapneumoniae = new ol.layer.Group({
                                layers: [lyr_DECASOSCONRESISTENCIA_25,lyr_CASOSREPORTADOS_26,],
                                fold: "close",
                                title: "<i>Klebsiella pneumoniae</i>"});
var group_Neisseriagonorrhoeae = new ol.layer.Group({
                                layers: [lyr_DECASOSCONRESISTENCIA_23,lyr_CASOSREPORTADOS_24,],
                                fold: "close",
                                title: "<i>Neisseria gonorrhoeae</i>"});
var group_Pseudomonasaeruginosa = new ol.layer.Group({
                                layers: [lyr_DECASOSCONRESISTENCIA_21,lyr_CASOSREPORTADOS_22,],
                                fold: "close",
                                title: "<i>Pseudomonas aeruginosa</i>"});
var group_Salmonellaspp = new ol.layer.Group({
                                layers: [lyr_DECASOSCONRESISTENCIA_19,lyr_CASOSREPORTADOS_20,],
                                fold: "close",
                                title: "<i>Salmonella spp</i>"});
var group_Shigellaflexneri = new ol.layer.Group({
                                layers: [lyr_DECASOSCONRESISTENCIA_17,lyr_CASOSREPORTADOS_18,],
                                fold: "close",
                                title: "<i>Shigella flexneri</i>"});
var group_Shigellasonnei = new ol.layer.Group({
                                layers: [lyr_DECASOSCONRESISTENCIA_15,lyr_CASOSREPORTADOS_16,],
                                fold: "close",
                                title: "<i>Shigella sonnei</i>"});
var group_Staphylococcusaureus = new ol.layer.Group({
                                layers: [lyr_DECASOSCONRESISTENCIA_13,lyr_CASOSREPORTADOS_14,],
                                fold: "close",
                                title: "<i>Staphylococcus aureus</i>"});
var group_INDICADORES = new ol.layer.Group({
                                layers: [lyr_IDH_1,lyr_NMERODEDOCTORESPORCADA100000HAB_2,lyr_NDICEDEENFERMEDADESZOONOTICAS_3,lyr_NDICEDEBIOSEGURIDAD_4,lyr_CAPACIDADDELABORATORIOSNACIONALESPARAPRUEBASDEPATGENOSPRIORITARIOSAMR_5,lyr_PRESCRIPCINREQUERIDAPARAANNTIMICROBIANOS_6,lyr_CONTROLANTIMICROBIANO_7,lyr_PLANNACIONALDEDETECCINDEPATGENOSPRIOROTARIOSAMR_8,lyr_NDICERESISTENCIAANTIMICROBIANAAMR_9,lyr_AMRDETECCINYREPORTE_10,lyr_DENSIDADDEPOBLACINHABKM2_11,lyr_PUNTUACINGENERALDESALUDGHSI_12,],
                                fold: "close",
                                title: "INDICADORES"});

lyr_ESRIGraydark_0.setVisible(true);lyr_IDH_1.setVisible(false);lyr_NMERODEDOCTORESPORCADA100000HAB_2.setVisible(false);lyr_NDICEDEENFERMEDADESZOONOTICAS_3.setVisible(false);lyr_NDICEDEBIOSEGURIDAD_4.setVisible(false);lyr_CAPACIDADDELABORATORIOSNACIONALESPARAPRUEBASDEPATGENOSPRIORITARIOSAMR_5.setVisible(false);lyr_PRESCRIPCINREQUERIDAPARAANNTIMICROBIANOS_6.setVisible(false);lyr_CONTROLANTIMICROBIANO_7.setVisible(false);lyr_PLANNACIONALDEDETECCINDEPATGENOSPRIOROTARIOSAMR_8.setVisible(false);lyr_NDICERESISTENCIAANTIMICROBIANAAMR_9.setVisible(false);lyr_AMRDETECCINYREPORTE_10.setVisible(false);lyr_DENSIDADDEPOBLACINHABKM2_11.setVisible(false);lyr_PUNTUACINGENERALDESALUDGHSI_12.setVisible(false);lyr_DECASOSCONRESISTENCIA_13.setVisible(false);lyr_CASOSREPORTADOS_14.setVisible(false);lyr_DECASOSCONRESISTENCIA_15.setVisible(false);lyr_CASOSREPORTADOS_16.setVisible(false);lyr_DECASOSCONRESISTENCIA_17.setVisible(false);lyr_CASOSREPORTADOS_18.setVisible(false);lyr_DECASOSCONRESISTENCIA_19.setVisible(false);lyr_CASOSREPORTADOS_20.setVisible(false);lyr_DECASOSCONRESISTENCIA_21.setVisible(false);lyr_CASOSREPORTADOS_22.setVisible(false);lyr_DECASOSCONRESISTENCIA_23.setVisible(false);lyr_CASOSREPORTADOS_24.setVisible(false);lyr_DECASOSCONRESISTENCIA_25.setVisible(false);lyr_CASOSREPORTADOS_26.setVisible(false);lyr_DECASOSCONRESISTENCIA_27.setVisible(false);lyr_CASOSREPORTADOS_28.setVisible(false);lyr_DECASOSCONRESISTENCIA_29.setVisible(true);lyr_CASOSREPORTADOS_30.setVisible(true);
var layersList = [lyr_ESRIGraydark_0,group_INDICADORES,group_Staphylococcusaureus,group_Shigellasonnei,group_Shigellaflexneri,group_Salmonellaspp,group_Pseudomonasaeruginosa,group_Neisseriagonorrhoeae,group_Klebsiellapneumoniae,group_Escherichiacoli,group_Acinetobacterbaumannii];
lyr_IDH_1.set('fieldAliases', {'iso3': 'iso3', 'name': 'name', 'continent': 'continent', 'region': 'region', 'IDH_LA_IDH': 'IDH_LA_IDH', 'IDH_LA_NIV': 'IDH_LA_NIV', });
lyr_NMERODEDOCTORESPORCADA100000HAB_2.set('fieldAliases', {'indicado12': 'indicado12', });
lyr_NDICEDEENFERMEDADESZOONOTICAS_3.set('fieldAliases', {'indicado_8': 'indicado_8', });
lyr_NDICEDEBIOSEGURIDAD_4.set('fieldAliases', {'indicado_9': 'indicado_9', });
lyr_CAPACIDADDELABORATORIOSNACIONALESPARAPRUEBASDEPATGENOSPRIORITARIOSAMR_5.set('fieldAliases', {'indicado_5': 'indicado_5', });
lyr_PRESCRIPCINREQUERIDAPARAANNTIMICROBIANOS_6.set('fieldAliases', {'indicado_7': 'indicado_7', });
lyr_CONTROLANTIMICROBIANO_7.set('fieldAliases', {'indicado_6': 'indicado_6', });
lyr_PLANNACIONALDEDETECCINDEPATGENOSPRIOROTARIOSAMR_8.set('fieldAliases', {'indicado_4': 'indicado_4', });
lyr_NDICERESISTENCIAANTIMICROBIANAAMR_9.set('fieldAliases', {'indicado_2': 'indicado_2', });
lyr_AMRDETECCINYREPORTE_10.set('fieldAliases', {'indicado_3': 'indicado_3', });
lyr_DENSIDADDEPOBLACINHABKM2_11.set('fieldAliases', {'indicadore': 'indicadore', });
lyr_PUNTUACINGENERALDESALUDGHSI_12.set('fieldAliases', {'indicado_1': 'indicado_1', });
lyr_DECASOSCONRESISTENCIA_13.set('fieldAliases', {'LA2020_%_6': 'LA2020_%_6', });
lyr_CASOSREPORTADOS_14.set('fieldAliases', {'LA2020_Sta': 'LA2020_Sta', });
lyr_DECASOSCONRESISTENCIA_15.set('fieldAliases', {'LA2020_%_5': 'LA2020_%_5', });
lyr_CASOSREPORTADOS_16.set('fieldAliases', {'LA2020_S_1': 'LA2020_S_1', });
lyr_DECASOSCONRESISTENCIA_17.set('fieldAliases', {'LA2020_%_4': 'LA2020_%_4', });
lyr_CASOSREPORTADOS_18.set('fieldAliases', {'LA2020_Shi': 'LA2020_Shi', });
lyr_DECASOSCONRESISTENCIA_19.set('fieldAliases', {'LA2020_Res': 'LA2020_Res', });
lyr_CASOSREPORTADOS_20.set('fieldAliases', {'LA2020_Sal': 'LA2020_Sal', });
lyr_DECASOSCONRESISTENCIA_21.set('fieldAliases', {'LA2020_%_3': 'LA2020_%_3', });
lyr_CASOSREPORTADOS_22.set('fieldAliases', {'LA2020_Pse': 'LA2020_Pse', });
lyr_DECASOSCONRESISTENCIA_23.set('fieldAliases', {'LA2020_%Re': 'LA2020_%Re', });
lyr_CASOSREPORTADOS_24.set('fieldAliases', {'LA2020_Nei': 'LA2020_Nei', });
lyr_DECASOSCONRESISTENCIA_25.set('fieldAliases', {'LA2020_%_2': 'LA2020_%_2', });
lyr_CASOSREPORTADOS_26.set('fieldAliases', {'LA2020_Kle': 'LA2020_Kle', });
lyr_DECASOSCONRESISTENCIA_27.set('fieldAliases', {'LA2020_%_1': 'LA2020_%_1', });
lyr_CASOSREPORTADOS_28.set('fieldAliases', {'LA2020_Esc': 'LA2020_Esc', });
lyr_DECASOSCONRESISTENCIA_29.set('fieldAliases', {'LA2020_% Resistencia': 'LA2020_% Resistencia', });
lyr_CASOSREPORTADOS_30.set('fieldAliases', {'LA2020_Aci': 'LA2020_Aci', });
lyr_IDH_1.set('fieldImages', {'iso3': 'TextEdit', 'name': 'TextEdit', 'continent': 'TextEdit', 'region': 'TextEdit', 'IDH_LA_IDH': 'TextEdit', 'IDH_LA_NIV': 'TextEdit', });
lyr_NMERODEDOCTORESPORCADA100000HAB_2.set('fieldImages', {'indicado12': 'TextEdit', });
lyr_NDICEDEENFERMEDADESZOONOTICAS_3.set('fieldImages', {'indicado_8': 'TextEdit', });
lyr_NDICEDEBIOSEGURIDAD_4.set('fieldImages', {'indicado_9': 'TextEdit', });
lyr_CAPACIDADDELABORATORIOSNACIONALESPARAPRUEBASDEPATGENOSPRIORITARIOSAMR_5.set('fieldImages', {'indicado_5': 'TextEdit', });
lyr_PRESCRIPCINREQUERIDAPARAANNTIMICROBIANOS_6.set('fieldImages', {'indicado_7': 'TextEdit', });
lyr_CONTROLANTIMICROBIANO_7.set('fieldImages', {'indicado_6': 'TextEdit', });
lyr_PLANNACIONALDEDETECCINDEPATGENOSPRIOROTARIOSAMR_8.set('fieldImages', {'indicado_4': 'TextEdit', });
lyr_NDICERESISTENCIAANTIMICROBIANAAMR_9.set('fieldImages', {'indicado_2': 'TextEdit', });
lyr_AMRDETECCINYREPORTE_10.set('fieldImages', {'indicado_3': 'TextEdit', });
lyr_DENSIDADDEPOBLACINHABKM2_11.set('fieldImages', {'indicadore': 'TextEdit', });
lyr_PUNTUACINGENERALDESALUDGHSI_12.set('fieldImages', {'indicado_1': 'TextEdit', });
lyr_DECASOSCONRESISTENCIA_13.set('fieldImages', {'LA2020_%_6': 'TextEdit', });
lyr_CASOSREPORTADOS_14.set('fieldImages', {'LA2020_Sta': 'TextEdit', });
lyr_DECASOSCONRESISTENCIA_15.set('fieldImages', {'LA2020_%_5': 'TextEdit', });
lyr_CASOSREPORTADOS_16.set('fieldImages', {'LA2020_S_1': 'TextEdit', });
lyr_DECASOSCONRESISTENCIA_17.set('fieldImages', {'LA2020_%_4': 'TextEdit', });
lyr_CASOSREPORTADOS_18.set('fieldImages', {'LA2020_Shi': 'TextEdit', });
lyr_DECASOSCONRESISTENCIA_19.set('fieldImages', {'LA2020_Res': 'TextEdit', });
lyr_CASOSREPORTADOS_20.set('fieldImages', {'LA2020_Sal': 'TextEdit', });
lyr_DECASOSCONRESISTENCIA_21.set('fieldImages', {'LA2020_%_3': 'TextEdit', });
lyr_CASOSREPORTADOS_22.set('fieldImages', {'LA2020_Pse': 'TextEdit', });
lyr_DECASOSCONRESISTENCIA_23.set('fieldImages', {'LA2020_%Re': 'TextEdit', });
lyr_CASOSREPORTADOS_24.set('fieldImages', {'LA2020_Nei': 'TextEdit', });
lyr_DECASOSCONRESISTENCIA_25.set('fieldImages', {'LA2020_%_2': 'TextEdit', });
lyr_CASOSREPORTADOS_26.set('fieldImages', {'LA2020_Kle': 'TextEdit', });
lyr_DECASOSCONRESISTENCIA_27.set('fieldImages', {'LA2020_%_1': 'TextEdit', });
lyr_CASOSREPORTADOS_28.set('fieldImages', {'LA2020_Esc': 'TextEdit', });
lyr_DECASOSCONRESISTENCIA_29.set('fieldImages', {'LA2020_% Resistencia': 'TextEdit', });
lyr_CASOSREPORTADOS_30.set('fieldImages', {'LA2020_Aci': 'TextEdit', });
lyr_IDH_1.set('fieldLabels', {'iso3': 'no label', 'name': 'no label', 'continent': 'no label', 'region': 'no label', 'IDH_LA_IDH': 'no label', 'IDH_LA_NIV': 'no label', });
lyr_NMERODEDOCTORESPORCADA100000HAB_2.set('fieldLabels', {'indicado12': 'no label', });
lyr_NDICEDEENFERMEDADESZOONOTICAS_3.set('fieldLabels', {'indicado_8': 'no label', });
lyr_NDICEDEBIOSEGURIDAD_4.set('fieldLabels', {'indicado_9': 'no label', });
lyr_CAPACIDADDELABORATORIOSNACIONALESPARAPRUEBASDEPATGENOSPRIORITARIOSAMR_5.set('fieldLabels', {'indicado_5': 'no label', });
lyr_PRESCRIPCINREQUERIDAPARAANNTIMICROBIANOS_6.set('fieldLabels', {'indicado_7': 'no label', });
lyr_CONTROLANTIMICROBIANO_7.set('fieldLabels', {'indicado_6': 'no label', });
lyr_PLANNACIONALDEDETECCINDEPATGENOSPRIOROTARIOSAMR_8.set('fieldLabels', {'indicado_4': 'no label', });
lyr_NDICERESISTENCIAANTIMICROBIANAAMR_9.set('fieldLabels', {'indicado_2': 'no label', });
lyr_AMRDETECCINYREPORTE_10.set('fieldLabels', {'indicado_3': 'no label', });
lyr_DENSIDADDEPOBLACINHABKM2_11.set('fieldLabels', {'indicadore': 'no label', });
lyr_PUNTUACINGENERALDESALUDGHSI_12.set('fieldLabels', {'indicado_1': 'no label', });
lyr_DECASOSCONRESISTENCIA_13.set('fieldLabels', {'LA2020_%_6': 'no label', });
lyr_CASOSREPORTADOS_14.set('fieldLabels', {'LA2020_Sta': 'no label', });
lyr_DECASOSCONRESISTENCIA_15.set('fieldLabels', {'LA2020_%_5': 'no label', });
lyr_CASOSREPORTADOS_16.set('fieldLabels', {'LA2020_S_1': 'no label', });
lyr_DECASOSCONRESISTENCIA_17.set('fieldLabels', {'LA2020_%_4': 'no label', });
lyr_CASOSREPORTADOS_18.set('fieldLabels', {'LA2020_Shi': 'no label', });
lyr_DECASOSCONRESISTENCIA_19.set('fieldLabels', {'LA2020_Res': 'no label', });
lyr_CASOSREPORTADOS_20.set('fieldLabels', {'LA2020_Sal': 'no label', });
lyr_DECASOSCONRESISTENCIA_21.set('fieldLabels', {'LA2020_%_3': 'no label', });
lyr_CASOSREPORTADOS_22.set('fieldLabels', {'LA2020_Pse': 'no label', });
lyr_DECASOSCONRESISTENCIA_23.set('fieldLabels', {'LA2020_%Re': 'no label', });
lyr_CASOSREPORTADOS_24.set('fieldLabels', {'LA2020_Nei': 'no label', });
lyr_DECASOSCONRESISTENCIA_25.set('fieldLabels', {'LA2020_%_2': 'no label', });
lyr_CASOSREPORTADOS_26.set('fieldLabels', {'LA2020_Kle': 'no label', });
lyr_DECASOSCONRESISTENCIA_27.set('fieldLabels', {'LA2020_%_1': 'no label', });
lyr_CASOSREPORTADOS_28.set('fieldLabels', {'LA2020_Esc': 'no label', });
lyr_DECASOSCONRESISTENCIA_29.set('fieldLabels', {'LA2020_% Resistencia': 'no label', });
lyr_CASOSREPORTADOS_30.set('fieldLabels', {'LA2020_Aci': 'no label', });
lyr_CASOSREPORTADOS_30.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});