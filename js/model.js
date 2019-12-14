let model = {
    API_KEY: "AIzaSyB9cFpEapXB_PkLQ4eLW5I5IzIJCJ-HSiQ",
    enablePoly: false,
    currentPoly:null,
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
        MapView.init();
        ListView.init()
    },
    getPoly:function(){
        return model.currentPoly;
    },
    setPoly:function(poly){
        model.currentPoly = poly;
    },
    togglePoly: function(){
        if(!model.enablePoly){
            //
            model.enablePoly = true;
        }else{
            //
            model.enablePoly =false;
        }
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

//todo: draw a polygun
//todo: show the marker add to the poly gun.
let MapView = {
    init:function () {
        let map = new google.maps.Map(document.getElementById('map'), {
            center: octopus.getCenter(),
            zoom: octopus.getZoom(),
            styles:octopus.getStyle(),
            mapTypeControl: false
        });
        octopus.setCurrentMap(map);
        this.renderMarkers();
    },
    renderMarkers:function () {
        let self = MapView;
        //弹窗
        let infowindow = new google.maps.InfoWindow();

        const defaultIcon = self.markerIcon('6bb5f9'),
          highlightedIcon = self.markerIcon('ec7f27');

        locations = octopus.getLocations();
        locations.forEach((element)=>{
            let marker = new google.maps.Marker({
                position:element.location,
                title:element.title,
                icon:defaultIcon,
                animation: google.maps.Animation.DROP
            });
            marker.addListener('click',function () {
                self.popInfo(marker,infowindow);
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
            info.setContent('');
            info.marker = marker;

            MapView.streetService(info,marker.position,marker.title);

            info.open(map, marker);
            // Make sure the marker property is cleared if the infowindow is closed.
            info.addListener('closeclick',function(){
                info.setMarker = null;
            });
        }
    },
    markerIcon:function (color) {
        return new google.maps.MarkerImage(
            `http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|${color}|40|_|%E2%80%A2`,
            new google.maps.Size(21, 34),
            new google.maps.Point(0, 0),
            new google.maps.Point(10, 34),
            new google.maps.Size(21, 34));
    },
    streetService: function(infowindow,position,title){

        let streetViewService = new google.maps.StreetViewService();
        let radius = 50;

        function getStreetView(data, status) {
            if (status === google.maps.StreetViewStatus.OK) {
                let nowLocation = data.location.latLng;
                var panoramaOptions = {
                    position: nowLocation,
                    pov: {
                        heading: google.maps.geometry.spherical.computeHeading(nowLocation, position),
                        pitch: 30
                    }
                };

                infowindow.setContent('<div>' + title + '</div><div id="pano"></div>');
                var panorama = new google.maps.StreetViewPanorama( document.getElementById('pano')
                    , panoramaOptions);
            } else {
                infowindow.setContent('<div>' + title + '</div>' +
                    '<div>No Street View Found</div>');
            }
        }

        streetViewService.getPanoramaByLocation(position, radius, getStreetView);
    }
};

let ListView = {
    init:function () {
        this.showListBtn = document.getElementById("show-listings");
        this.hideListBtn = document.getElementById("hide-listings");
        this.toogleDraw = document.getElementById("toggle-drawing");

        this.markers = octopus.getMarkers();
        this.map = octopus.getCurrentMap();

        this.showList();
        this.hideList();

        //this.render();
        this.drawingManager(this.map);
    },
    showList:function(){
        let markers = this.markers;
        let map = this.map;
        this.showListBtn.addEventListener('click',function () {
            markers.forEach((element) =>{
                element.setMap(map);
            })
        });
    },
    hideList:function(){
        let markers = this.markers;

        this.hideListBtn.addEventListener('click',function(){
            markers.forEach((element) =>{
                element.setMap(null);
            })
        });
    },
    drawingManager:function(){
        let markers = this.markers;
        let map = this.map;
        let polygon = octopus.getPoly();

        let drawingManager = new google.maps.drawing.DrawingManager({
            drawingMode: google.maps.drawing.OverlayType.POLYGON,
            drawingControl: true,
            drawingControlOptions: {
                position: google.maps.ControlPosition.TOP_LEFT,
                drawingModes: [
                    google.maps.drawing.OverlayType.POLYGON
                ]
            }
        });

        drawingManager.setMap(map);

        drawingManager.addListener('overlaycomplete', function(event) {
            
            if (polygon) {
                polygon.setMap(null);
                this.hideList();
            }

            drawingManager.setDrawingMode(null);

            polygon = event.overlay;
            polygon.setEditable(true);
            octopus.setPoly(polygon);
            // Searching within the polygon.
            ListView.searchMatchPoints();
            polygon.getPath().addListener('set_at', ListView.searchMatchPoints);
            polygon.getPath().addListener('insert_at', ListView.searchMatchPoints);

        });

    },
    searchMatchPoints:function(){
        let map = octopus.getCurrentMap();
        let markers = octopus.getMarkers();
        let polygon = octopus.getPoly();

        markers.forEach((element)=>{
            if (google.maps.geometry.poly.containsLocation(element.position, polygon)) {
                element.setMap(map);
            } else {
                element.setMap(null);
            }
        });

        octopus.setPoly(polygon);
    },
    calculateArea:function(polygon){
        let area = google.maps.geometry.spherical.computeArea(polygon.getPath())

        console.log("area",area);
    },
    toggleDraw: function(label){
        let polygon = octopus.getPoly();
        let map = octopus.getCurrentMap();

        if (label) {
            MapView.drawingManager(null);
            // In case the user drew anything, get rid of the polygon
            if (polygon !== null) {
                polygon.setMap(null);
            }
        } else {
            MapView.drawingManager(map);
        }
    }
}




function initMap() {
    octopus.init();

}
