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

        for (var i = 0; i < 6; i += 1) {
            let html = "";
            const precipitation = function () {
                if (isNaN(data.daily[i].pop)) {
                    return 0;
                } else {
                    return data.daily[i].pop * 100;
                }
            }
            const weatherIcon = data.daily[i].weather[0].icon;
            const openWeatherIconSource = "http://openweathermap.org/img/wn/" + weatherIcon + ".png";
            const dateConversion = new Date(data.daily[i].dt * 1000);
            const outputDate = dateConversion.toLocaleDateString("en-US");

            html += `<div class='card col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 text-center' style='width: 18rem>`;
            html += `<h3 class='card-title'> ${outputDate} </h3>`;
            html += `<p><img class='card-img-top' src='${openWeatherIconSource}'  alt='Weather Icon'></p>`;
            html += `<ul class='list-group list-group-flush'>`;
            html += `<li class='list-group-item'>H: ${parseInt(data.daily[i].temp.max)} &#176; F / L: ${parseInt(data.daily[i].temp.min)} &#176; F</li>`;
            html += `<li class='list-group-item'> ${precipitation()} % Chance of precipitation</li>`;
            html += `</ul>`;
            html += `</div>`;
            html += `<div>`;

            $("#listings").append(html);
        }

        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/williambaldridge/ckkyb7dzt2kvb17qo6sc7vhcv',
            center: [longitude, latitude],
            zoom: 7,
        });

        map.on("load", function (e) {
            const geocoder = new MapboxGeocoder({
                accessToken: MAPBOX_TOKEN, // Set the access token
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

                    weatherData();
                });
            }
        }

        document.addEventListener('change', geocoderEventPrep);

        const coordinates = document.getElementById('coordinates');

        const geocoderMarkerDrag = new mapboxgl.Marker({
            draggable: true
        })
            .setLngLat([longitude, latitude])
            .addTo(map);

        function onDragEnd() {
            let lngLat = geocoderMarkerDrag.getLngLat();
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

