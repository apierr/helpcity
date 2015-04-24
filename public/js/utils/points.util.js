(function (define) {
    'use strict';

    define([
        'leafletMarkerCluster',
        'leafletLocateControl',
        'leafletGroupedLayerControl'
    ], function () {
        var pointsSearch = [];
        var points = L.geoJson(null, {
            pointToLayer: function (feature, latlng) {
                return L.marker(latlng, {
                    icon: L.icon({
                        iconUrl: "assets/img/theater.png",
                        iconSize: [24, 28],
                        iconAnchor: [12, 28],
                        popupAnchor: [0, -25]
                    }),
                    title: feature.properties.NAME,
                    riseOnHover: true
                });
            },
            onEachFeature: function (feature, layer) {
                if (feature.properties) {
                    feature.properties.description = feature.properties.description===null ? "Non disponibile." : feature.properties.description;
                    feature.properties.address = feature.properties.address===null ? "Non disponibile." : feature.properties.address;
                    var content = "<table class='table table-striped table-bordered table-condensed'>" + "<tr><th>Name</th><td>" + feature.properties.NAME + "</td></tr>" + "<tr><th>Description</th><td>" + feature.properties.description + "</td></tr>" + "<tr><th>Address</th><td>" + feature.properties.address + "</td></tr>" + "<tr><th>Website</th><td><a class='url-break' href='" + feature.properties.url + "' target='_blank'>Modulistica</a></td></tr>" + "<table>";
                    layer.on({
                        click: function (e) {
                            $("#feature-title").html(feature.properties.NAME);
                            $("#feature-info").html(content);
                            $("#featureModal").modal("show");
                            // highlight.clearLayers().addLayer(L.circleMarker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]], {
                            //     stroke: false,
                            //     fillColor: "#00FFFF",
                            //     fillOpacity: 0.7,
                            //     radius: 10
                            // }));
                        }
                    });
                    $("#feature-list tbody").append('<tr class="feature-row" id="'+L.stamp(layer)+'"><td style="vertical-align: middle;"><img width="16" height="18" src="assets/img/theater.png"></td><td class="feature-name">'+layer.feature.properties.NAME+'</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
                    pointsSearch.push({
                        name: layer.feature.properties.NAME,
                        address: layer.feature.properties.ADDRESS1,
                        source: "Theaters",
                        id: L.stamp(layer),
                        lat: layer.feature.geometry.coordinates[1],
                        lng: layer.feature.geometry.coordinates[0]
                    });
                }
            }
        });

        return points;
    });
}(this.define));