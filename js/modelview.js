let dataSet = {
    mapStyle:[
        {
            "featureType": "all",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                },
                {
                    "color": "#f49f53"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#f9ddc5"
                },
                {
                    "lightness": -7
                }
            ]
        },
        {
            "featureType": "poi.business",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#645c20"
                },
                {
                    "lightness": 38
                }
            ]
        },
        {
            "featureType": "poi.government",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#9e5916"
                },
                {
                    "lightness": 46
                }
            ]
        },
        {
            "featureType": "poi.medical",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#813033"
                },
                {
                    "lightness": 38
                },
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#645c20"
                },
                {
                    "lightness": 39
                }
            ]
        },
        {
            "featureType": "poi.school",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#a95521"
                },
                {
                    "lightness": 35
                }
            ]
        },
        {
            "featureType": "poi.sports_complex",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#9e5916"
                },
                {
                    "lightness": 32
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#813033"
                },
                {
                    "lightness": 43
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#f19f53"
                },
                {
                    "weight": 1.3
                },
                {
                    "visibility": "on"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#f19f53"
                },
                {
                    "lightness": -10
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "lightness": 38
                }
            ]
        },
        {
            "featureType": "transit.line",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#813033"
                },
                {
                    "lightness": 22
                }
            ]
        },
        {
            "featureType": "transit.station",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#1994bf"
                },
                {
                    "saturation": -69
                },
                {
                    "gamma": 0.99
                },
                {
                    "lightness": 43
                }
            ]
        }
    ],
    map:null,
    markers:[],
    filterMarkers:[],
    isFiltered:false,
    locations:[
        {address: "Empire State Building",location: {lat: 40.7484405, lng: -73.98566439999999}},
        {address: "Brooklyn Bridge",location: {lat: 40.7060855, lng: -73.9968643}},
        {address: "The Statue of Liberty",location: {lat: 40.6892494, lng: -74.04450039999999}},
        {address: "Hudson Yards",location: {lat: 40.7527246, lng: -74.0016428}},
        {address: "One World Observatory",location: {lat: 40.7133444, lng: -74.0133677}},
        {address: "The Metropolitan Museum of Art",location: {lat: 40.7794366, lng: -73.963244}},
        {address: "Chrysler Building",location: {lat: 40.7516208, lng: -73.97550199999999}},
        {address: "The 9/11 Memorial and Museum",location: {lat: 40.7114743, lng: -74.0134432}},
        {address: "Rockefeller Center",location: {lat: 40.7587402, lng: -73.9786736}},
        {address: "Grand Central Terminal",location: {lat: 40.7527262, lng: -73.9772294}},
        {address: "The Hunters Point Library",location: {lat: 40.7473674, lng: -73.9443355}},
        {address: "Brooklyn Museum",location: {lat: 40.6712062, lng: -73.9636306}},
        {address: "Whitney Museum of American Art",location: {lat: 40.7395877, lng: -74.0088629}},
        {address: "Solomon R. Guggenheim Museum",location: {lat: 40.7829796, lng: -73.9589706}},
        {address: "Times Square",location: {lat: 40.758386, lng: -73.9930976}},
        {address: "Prospect Park’s Breeze Hill",location: {lat: 40.6591667, lng: -73.9663889}},
        {address: "Brookfield Place",location: {lat: 40.7127168, lng: -74.01528239999999}},
        {address: "Chelsea Market",location: {lat: 40.7424396, lng: -74.0061439}},
        {address: "Brooklyn Heights and Brooklyn Promenade",location: {lat: 40.6959294, lng: -73.9955523}},
        {address: "Macy’s Herald Square",location: {lat: 40.7508025, lng: -73.98948349999999}},
        {address: "Brooklyn Botanic Garden",location: {lat: 40.66901, lng: -73.965185}},
        {address: "American Museum of Natural History",location: {lat: 40.7813241, lng: -73.9739882}},
        {address: "Union Square",location: {lat: 40.7358633, lng: -73.9910835}},
        {address: "Flatiron Building",location: {lat: 40.7410605, lng: -73.9896986}},
        {address: "Intrepid Sea, Air & Space Museum",location: {lat: 40.7645266, lng: -73.99960759999999}},
        {address: "Lincoln Center",location: {lat: 39.0527422, lng: -95.69129490000002}},
        {address: "South Street Seaport",location: {lat: 40.7062308, lng: -74.00314449999999}},
        {address: "Museum of Modern Art",location: {lat: 40.7614327, lng: -73.97762159999999}},
        {address: "Radio City Music Hall",location: {lat: 40.75997599999999, lng: -73.9799772}},
        {address: "New York Public Library",location: {lat: 40.75318230000001, lng: -73.9822534}},
        {address: "Chinatown",location: {lat: 40.7157509, lng: -73.9970307}},
        {address: "Washington Square Park arch",location: {lat: 40.7312339, lng: -73.9971027}},
        {address: "Madison Square Garden",location: {lat: 40.7505045, lng: -73.9934387}},
        {address: "Governors Island",location: {lat: 40.68945009999999, lng: -74.016792}},
        {address: "Socrates Sculpture Park",location: {lat: 40.768479, lng: -73.9366363}},
        {address: "AKC Museum of the Dog",location: {lat: 40.7508184, lng: -73.977554}},
        {address: "Bryant Park",location: {lat: 40.7535965, lng: -73.9832326}}
    ]
};

let octopus = {
    setMap:function(map){
        dataSet.map = map;
    },
    getMap: function () {
        return dataSet.map;
    },
    setMarkers:function(marker){
        dataSet.markers.push(marker);
    },
    getMarkers: function () {
       return dataSet.markers;
    },
    setFilterMarkers:function(marker){
        dataSet.filterMarkers.push(marker);
    },
    getFilterMarkers: function () {
        return dataSet.filterMarkers;
    },
    setFilterLabel(label){
        dataSet.isFiltered = label;
    },
    getFilterLabel(){
        return dataSet.isFiltered;
    }
};


let locationItem = function(data){
    let self = this;
    this.address = ko.observable(data.address);
    this.checked= ko.observable(false);

    let markers= octopus.getMarkers();
    let map = octopus.getMap();

    let filterLabel = octopus.getFilterLabel();
    //console.log("***",filterLabel);

    // check button and reset button function.
    this.complete = function () {
        self.checked(true);
    };
    this.reset = function () {
        self.checked(false);
    }
    //the filter markers
    //todo can I catch this with Promise?
    //let checkedIcon = icon("51b4c7");
    //todo may be I can observe a value

    this.clickList = function () {
            let clickItem = markers.filter(function (marker) {
                return marker.title === self.address();
            });

            if(clickItem[0]){
                markerHandler(clickItem[0]);
            }else{
                window.alert("Marker is not ready for displaying, please try it later");
            }

    }

};



let ViewModel = function(){
    let self = this;
    this.$drawer = $('#drawer');
    this.locationList = ko.observableArray();
    //this.markersList = ko.observableArray();
    this.searchInput = ko.observable("");

    //handle the functionality of toggle drawer part
    this.toggleOpenClass = function (e) {
        self.$drawer.toggleClass("open");
    };
    this.removeOpenClass = function () {
        self.$drawer.removeClass("open");
    };

    dataSet.locations.forEach((data)=>self.locationList.push(new locationItem(data)));


    //filter the locations
    this.filterLocationArray = ko.pureComputed(function() {
        let value = self.searchInput();
        let markers = octopus.getMarkers();
        let locationFilterList=[],
            markersFilterList=[];


        if(value == "") {
            showMarkers(markers);
            return this.locationList();
        }else{
            //filter the list item
            locationFilterList = ko.utils.arrayFilter(this.locationList(), function(location) {
                return location.address().indexOf(value) > -1;
            });

            //filter the markers
            hideMarker(markers);
            if(markers !==[] && locationFilterList !== []){
                 markers.forEach((marker)=>{
                     locationFilterList.forEach((element)=>{
                         if(marker.title === element.address()){
                             markersFilterList.push(marker);
                         }
                     });
                })
            }
            showMarkers(markersFilterList);
            console.log("what is fliter markers is", markersFilterList);
            return locationFilterList;
        }

    },this);

};


ko.applyBindings(new ViewModel());

function hideMarker(makers) {
    makers.forEach((marker)=>{
        marker.setMap(null);
    })
}

function showMarkers(makers) {
    let map = octopus.getMap();
    makers.forEach((marker)=>{
        marker.setMap(map);
    });

}

// todo how to catch network error
function icon (color){
    return new google.maps.MarkerImage(
        `http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|${color}|40|_|%E2%80%A2`,
        new google.maps.Size(21, 34),
        new google.maps.Point(0, 0),
        new google.maps.Point(10, 34),
        new google.maps.Size(21, 34));
}

function initMap() {
    let map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.7312339, lng: -73.9971027},
        styles:dataSet.mapStyle,
        zoom: 12,
        mapTypeControl: false
    });

    octopus.setMap(map);

    //make marker

    let defaultIcon = icon("ff4536");

    dataSet.locations.forEach((location)=>{
        let marker = new google.maps.Marker({
            position:location.location,
            title:location.address,
            map:map,
            icon:defaultIcon,
            animation: google.maps.Animation.DROP
        });

        octopus.setMarkers(marker);

        marker.addListener('click',function () {
            markerHandler(this);
        });

    });

}

function markerHandler(marker){
    let map = octopus.getMap();

    marker.setAnimation(google.maps.Animation.BOUNCE);
    setTimeout(function () {
        marker.setAnimation(null);
    },700);

    //infowindow logic
    let infowindow = new google.maps.InfoWindow();
    infowindow.setContent('<div>' + marker.title + '</div>');

    infowindow.open(map, marker);


}



