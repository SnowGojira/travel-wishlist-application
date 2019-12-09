let model = {
    API_KEY: "AIzaSyB9cFpEapXB_PkLQ4eLW5I5IzIJCJ-HSiQ",
    currentLoc:null,
    center:{
        lat: 40.7413549, lng: -73.9980244
    },
    zoom: 13,
    locations:[
        {title: 'Park Ave Penthouse', location: {lat: 40.7713024, lng: -73.9632393}},
        {title: 'Chelsea Loft', location: {lat: 40.7444883, lng: -73.9949465}},
        {title: 'Union Square Open Floor Plan', location: {lat: 40.7347062, lng: -73.9895759}},
        {title: 'East Village Hip Studio', location: {lat: 40.7281777, lng: -73.984377}},
        {title: 'TriBeCa Artsy Bachelor Pad', location: {lat: 40.7195264, lng: -74.0089934}},
        {title: 'Chinatown Homey Space', location: {lat: 40.7180628, lng: -73.9961237}}
    ],
    map: null,
    markers:[],
    style:[
        {
            "featureType": "administrative.locality",
            "elementType": "all",
            "stylers": [
                {
                    "hue": "#2c2e33"
                },
                {
                    "saturation": 7
                },
                {
                    "lightness": 19
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "hue": "#ffffff"
                },
                {
                    "saturation": -100
                },
                {
                    "lightness": 100
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "hue": "#ffffff"
                },
                {
                    "saturation": -100
                },
                {
                    "lightness": 100
                },
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                    "hue": "#bbc0c4"
                },
                {
                    "saturation": -93
                },
                {
                    "lightness": 31
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [
                {
                    "hue": "#bbc0c4"
                },
                {
                    "saturation": -93
                },
                {
                    "lightness": 31
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels",
            "stylers": [
                {
                    "hue": "#bbc0c4"
                },
                {
                    "saturation": -93
                },
                {
                    "lightness": -2
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                {
                    "hue": "#e9ebed"
                },
                {
                    "saturation": -90
                },
                {
                    "lightness": -8
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "hue": "#e9ebed"
                },
                {
                    "saturation": 10
                },
                {
                    "lightness": 69
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "hue": "#e9ebed"
                },
                {
                    "saturation": -78
                },
                {
                    "lightness": 67
                },
                {
                    "visibility": "simplified"
                }
            ]
        }
    ]
};

let octopus = {
    init: function () {
        view.init();
    },
    getCurrentMap: function () {
        return model.map;
    },
    getStyle: function () {
        return model.style;
    },
    setMarker: function (marker) {
        model.markers.push(marker);
    },
    getMarkers: function () {
        return model.markers;
    },
    setCurrentMap: function (map) {
        model.map = map;
    },

    getTitle: function () {
        return model.title;
    },
    getCenter: function () {
        return model.center;
    },
    getZoom: function () {
        return model.zoom;
    },
    getLocations: function () {
        return model.locations;
    },

};

let view = {
    init:function () {
        this.showListBtn = document.getElementById("show-listings");
        this.hideListBtn = document.getElementById("hide-listings");

        let map = new google.maps.Map(document.getElementById('map'), {
            center: octopus.getCenter(),
            zoom: octopus.getZoom(),
            styles:octopus.getStyle()
        });
        octopus.setCurrentMap(map);

        view.renderMarkers();

        let markers = octopus.getMarkers();

        this.showListBtn.addEventListener('click',function () {
            markers.forEach((element) =>{
                element.setMap(map);
            })
        });

        this.hideListBtn.addEventListener('click',function(){
            markers.forEach((element) =>{
                element.setMap(null);
            })
        });

    },
    renderMarkers:function () {
        //弹窗
        let infowindow = new google.maps.InfoWindow();

        const defaultIcon = view.markerIcon('6bb5f9'),
          highlightedIcon = view.markerIcon('ec7f27');

        locations = octopus.getLocations();
        locations.forEach((element)=>{
            let marker = new google.maps.Marker({
                position:element.location,
                title:element.title,
                icon:defaultIcon,
                animation: google.maps.Animation.DROP
            });
            marker.addListener('click',function () {
                view.popInfo(marker,infowindow);
            });

            marker.addListener('mouseover', function() {
                this.setIcon(highlightedIcon);
            });
            marker.addListener('mouseout', function() {
                this.setIcon(defaultIcon);
            });

            octopus.setMarker(marker);
        });

    },
    popInfo:function(marker,info){
        // Check to make sure the infowindow is not already opened on this marker.
        if (info.marker !== marker) {
            info.marker = marker;
            info.setContent('<div>' + marker.position + '</div>');
            info.open(map, marker);
            // Make sure the marker property is cleared if the infowindow is closed.
            info.addListener('closeclick',function(){
                info.setMarker = null;
            });
        }
    },
    markerIcon:function (color) {
    let markerImage = new google.maps.MarkerImage(
        `http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|${color}|40|_|%E2%80%A2`,
        new google.maps.Size(21, 34),
        new google.maps.Point(0, 0),
        new google.maps.Point(10, 34),
        new google.maps.Size(21,34));
    return markerImage;
}
};




function initMap() {
    octopus.init();

}
