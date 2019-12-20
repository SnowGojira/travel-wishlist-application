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
    // getLabel:function(){
    //     return model.enablePoly;
    // },
    toggleLabel: function(){
        let map = octopus.getCurrentMap();
        let polygon = octopus.getPoly();
        if(model.enablePoly){
            //
            ListView.toggleManager(null);
            if (polygon !== null) {
                polygon.setMap(null);
                octopus.setPoly(polygon);
            }
            model.enablePoly = false;
        }else{
            //
            ListView.toggleManager(map);
            model.enablePoly =true;
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
        //init dom element
        this.showListBtn = document.getElementById("show-listings");
        this.hideListBtn = document.getElementById("hide-listings");
        this.toggleDrawBtn = document.getElementById("toggle-drawing");
        this.zoomBtn = document.getElementById('zoom-to-area');
        this.zoomInput = document.getElementById('zoom-to-area-text');
        this.searchWithinBtn = document.getElementById('search-within-time')
        //get lint to the model
        this.markers = octopus.getMarkers();
        this.map = octopus.getCurrentMap();
        //init the service
        this.drawingManager = new google.maps.drawing.DrawingManager({
            drawingMode: google.maps.drawing.OverlayType.POLYGON,
            drawingControl: true,
            drawingControlOptions: {
                position: google.maps.ControlPosition.TOP_LEFT,
                drawingModes: [
                    google.maps.drawing.OverlayType.POLYGON
                ]
            }
        });
        this.geocoder = new google.maps.Geocoder();

        this.handleEvent();

    },
    handleEvent:function(){
        this.showList();
        this.hideList();

        ListView.toggleDrawBtn.addEventListener('click',function () {
            octopus.toggleLabel();
        });

        ListView.zoomBtn.addEventListener('click', function() {
            ListView.zoomToArea();
        });

        this.searchWithinBtn.addEventListener('click', function() {
            console.log('hello hello');
            //searchWithinTime();
        });

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
    toggleManager:function(map){

        let polygon = octopus.getPoly();
        let drawingManager = this.drawingManager;

        drawingManager.setMap(map);

        drawingManager.addListener('overlaycomplete', function(event) {

            drawingManager.setDrawingMode(null);

            polygon = event.overlay;
            polygon.setEditable(true);
            octopus.setPoly(polygon);

            // Searching within the polygon.
            ListView.searchPolyMatchPoints();
            polygon.getPath().addListener('set_at', ListView.searchMatchPoints);
            polygon.getPath().addListener('insert_at', ListView.searchMatchPoints);

        });

    },
    searchPolyMatchPoints:function(){
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
    calculateAreaWithPoly:function(polygon){
        let area = google.maps.geometry.spherical.computeArea(polygon.getPath());

        console.log("area",area);
    },
    zoomToArea:function () {
        let map = this.map;
        let geocoder = this.geocoder;
        // Get the address or place that the user entered.
        let address = this.zoomInput.value;
        // Make sure the address isn't blank.
        if (address == '') {
            window.alert('You must enter an area, or address.');
        } else {
            // Geocode the address/area entered to get the center. Then, center the map
            // on it and zoom in
            geocoder.geocode(
                {
                    address: address,
                    componentRestrictions: {locality: 'New York'}
                }, function (results, status) {
                    if (status === google.maps.GeocoderStatus.OK) {
                        //results[0]一串结果中最match的结果
                        map.setCenter(results[0].geometry.location);
                        map.setZoom(15);

                        octopus.setCurrentMap(map);
                    } else {
                        window.alert('We could not find that location - try entering a more' +
                            ' specific place.');
                    }
                });
        }
    }
}




function initMap() {
    octopus.init();

}
