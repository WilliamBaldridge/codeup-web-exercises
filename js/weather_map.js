"use strict";

mapboxgl.accessToken = MAPBOX_TOKEN;
var latitude = 29.4241;
var longitude = -98.4936;


weatherData();

function weatherData() {

    // mapboxgl.clearStorage();

    $.get("https://api.openweathermap.org/data/2.5/onecall?", {
        APPID: WEATHER_MAP_TOKEN,
        lat: latitude,
        lon: longitude,
        units: "imperial",
        exclude: "minutely, hourly"
    }).done(function (data) {
        console.log(data);

        $("#listings").html("");

        for (var i = 0; i < 5; i += 1) {
            var html = "";
            var precipitation = function () {
                if (isNaN(data.daily[i].rain)) {
                    return 0;
                } else {
                    return Math.round(data.daily[i].rain);
                }
            }
            var weatherIcon = data.daily[i].weather[0].icon;
            console.log(weatherIcon);
            var openWeatherIconSource = "http://openweathermap.org/img/w/" + weatherIcon + ".png";

            html += "<div class='card col-xs-12 col-sm-6 col-md-4 col-lg text-center' style='width: 18rem>";
            html += "<h5 class='card-title'>Date</h5>";
            // html += "<div class='card-body'>";
            html += "<img class='card-img-top' src='"+ openWeatherIconSource +"'  alt='Weather Icon'>";
            // html += "</div>";
            html += "<ul class='list-group list-group-flush'>";
            html += "<li class='list-group-item'>H: " + data.daily[i].temp.max + " / L: " + data.daily[i].temp.min + "</li>";
            html += "<li class='list-group-item'>" + precipitation() + "% Chance of precipitation" + "</li>";
            html += "</ul>";
            html += "</div>";
            html += "<div>";
            // $("img").attr("src", openWeatherIconSource);

            $("#listings").append(html);
        }

        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/williambaldridge/ckkyb7dzt2kvb17qo6sc7vhcv',
            center: [longitude, latitude],
            zoom: 7,
        });

        map.on("load", function (e) {
            var geocoder = new MapboxGeocoder({
                accessToken: mapboxgl.accessToken, // Set the access token
                mapboxgl: mapboxgl, // Set the mapbox-gl instance
                marker: false, // Use the geocoder's default marker style
            });
            map.addControl(new mapboxgl.NavigationControl());
            map.addControl(geocoder, 'top-left');
            // console.log(geocoder);
        });

        function geocoderEventPrep(e) {
            if (e.target.className.indexOf('mapboxgl-ctrl-geocoder--input') !== -1) {
                // console.log(e.target.value);
                geocode(e.target.value, MAPBOX_TOKEN).then(function (data) {
                    longitude = data[0];
                    latitude = data[1];
                    // console.log(latitude);
                    // console.log(longitude);

                    weatherData();
                });
            }
        }

        document.addEventListener('change', geocoderEventPrep);

        var coordinates = document.getElementById('coordinates');

        var geocoderMarkerDrag = new mapboxgl.Marker({
            draggable: true
        })
            .setLngLat([longitude, latitude])
            .addTo(map);

        function onDragEnd() {
            var lngLat = geocoderMarkerDrag.getLngLat();
            coordinates.style.display = 'block';
            coordinates.innerHTML =
                'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
            latitude = lngLat.lat;
            longitude = lngLat.lng;
            weatherData();
        }

        geocoderMarkerDrag.on('dragend', onDragEnd);

    });
}

