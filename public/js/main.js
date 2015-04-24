(function (requirejs) {
    'use strict';

    var vendorDir = '../bower_components/';

    requirejs.config({
        urlArgs: 'bust=' + Date.now(),
        paths: {
            jquery: vendorDir + 'jquery/dist/jquery',
            bootstrap: vendorDir + 'bootstrap/dist/js/bootstrap',
            leaflet: vendorDir + 'leaflet/dist/leaflet',
            leafletMarkerCluster: vendorDir + 'leaflet.markercluster/dist/leaflet.markercluster',
            leafletLocateControl: vendorDir + 'leaflet.locatecontrol/dist/L.Control.Locate.min',
            leafletGroupedLayerControl: vendorDir + 'bootleaf/assets/leaflet-groupedlayercontrol/leaflet.groupedlayercontrol'
        },
         shim: {
             jquery: {
                 exports : '$'
             },
             bootstrap : {deps: ['jquery']},
             leafletMarkerCluster: {deps: ['leaflet']},
             leafletLocateControl: {deps: ['leaflet']},
             leafletGroupedLayerControl: {deps: ['leaflet']}
         },
        deps: ['app']
    });

}(this.requirejs));