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
    markers:[]
};

let octopus = {
    init: function(){
        view.init();
    },
    getCurrentMap:function(){
        return model.map;
    },
    setMarker:function(marker){
        model.markers.push(marker);
    },
    getMarkers:function(){
        return model.markers;
    },
    setCurrentMap:function(map){
        model.map = map;
    },

    getTitle:function(){
        return model.title;
    },
    getCenter :function () {
        return model.center;
    },
    getZoom: function () {
        return model.zoom;
    },
    getLocations :function () {
        return model.locations;
    },
};

let view = {
    init:function () {
        this.showListBtn = document.getElementById("show-listings");
        this.hideListBtn = document.getElementById("hide-listings");

        let map = new google.maps.Map(document.getElementById('map'), {
            center: octopus.getCenter(),
            zoom: octopus.getZoom()
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

        locations = octopus.getLocations();
        locations.forEach((element)=>{
            let marker = new google.maps.Marker({
                position:element.location,
                title:element.title,
                animation: google.maps.Animation.DROP
            });
            marker.addListener('click',function () {
                view.popInfo(marker,infowindow);
            });

            octopus.setMarker(marker);
        });

    },
    popInfo:function(marker,info){
        // Check to make sure the infowindow is not already opened on this marker.
        if (info.marker !== marker) {
            info.marker = marker;
            info.setContent('<div>' + marker.title + '</div>');
            info.open(map, marker);
            // Make sure the marker property is cleared if the infowindow is closed.
            info.addListener('closeclick',function(){
                info.setMarker = null;
            });
        }
    }
};




function initMap() {
    octopus.init();

}
